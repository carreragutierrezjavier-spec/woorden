'use strict';
/* Woorden · qué sale en cada ronda.
   Reglas: lo que ya ha salido hoy no vuelve (salvo lo fallado, hasta tres veces); lo nuevo se elige al azar entre todos los temas;
   en gramática se mide la destreza, y las frases se van sacando del banco sin repetir hasta agotarlo. */

const NSEQ=['n1','n1','t','n2','n2','t','n2','y','t','n3','t','y'];
const ROUND={short:8,normal:12,long:16};
const roundN=()=>ROUND[S.opt.size]||12;

/* ---------- pasos ---------- */
/* modo de las palabras: 'type' = presentar y luego escribir (por defecto) · 'mix' = elegir al principio, escribir después · 'mc' = solo elegir */
const wmode=()=>S.opt.wmode||'type';
function wordStep(w,force){
  const st=stage(w.k), mode=wmode(); let t;
  if(force) t=force;
  else if(mode==='mc') t=(st>=2&&voice&&Math.random()<0.3)?'mc-ear':(Math.random()<0.5?'mc-es':'mc-nl');
  else if(mode==='mix'&&st<=1) t='mc-es';
  else if(mode==='mix'&&st===2) t=(voice&&Math.random()<0.5)?'mc-ear':'mc-nl';
  else if(isPhrase(w.nl)) t='tiles';
  else if(st>=3&&voice&&Math.random()<0.3) t='ear';
  else t='type';
  return {t,w,key:w.k,cat:'w:'+w.th};
}
const introStep=w=>({t:'intro',w,key:w.k,cat:'w:'+w.th});
/* la prueba que sigue a la presentación de una palabra nueva */
const testStep=w=>({t:wmode()==='type'?(isPhrase(w.nl)?'tiles':'type'):'mc-es',w,key:w.k,cat:'w:'+w.th,fresh:true});
function isIrregular(v){ const a=first(v[2]).split(' ')[0], b=first(v[3]).split(' ')[0]; return !(/(te|de)$/.test(a)&&/(ten|den)$/.test(b)); }
const isSep=v=>v[2].includes(' ');
const verbCat=v=>isSep(v)?'verbs-sep':(isIrregular(v)?'verbs-irr':'verbs-reg');
const gapStep=g=>({t:'gap',g,key:g.k,cat:'g:'+g.sk,skid:g.sk});
const verbStep=v=>v&&({t:'verb',v,key:'v:'+v[0],cat:verbCat(v),skid:'v4'});
const countryStep=c=>c&&({t:'country',c,key:'c:'+c[1],cat:'countries'});
const chatStep=c=>c&&({t:'chat',c,key:'h:'+c.q,cat:'chat'});
const puzStep=(p,hear)=>p&&({t:'tiles',p,key:'p:'+p.n,cat:hear?'listen':'puz:'+p.sub,skid:'puz:'+p.sub,hear:!!hear});
const pairStep=p=>p&&({t:'pair',p,key:'m:'+p[0]+'/'+p[1],cat:'pairs'});
const dehetStep=w=>w&&({t:'dehet',w,key:'d:'+w.nl,cat:'dehet',skid:'dehet'});
const numStep=type=>({t:'num',q:makeNum(type||pick(['n1','n2','n2','n3','y','t','t','t']))});

/* ---------- elegir ---------- */
/* disponible: no ha salido hoy (o falló y le toca otra vez) y no está marcada como dudosa */
function avail(k){ const it=S.it[k]; if(it&&it.flag) return false; return !shownToday(k)||retryToday(k); }
/* bancos de frases: primero lo que no has visto nunca (al azar), algo de lo que fallaste otro día, y luego lo que hace más que no ves */
function pickBank(list,keyFn,n){
  if(n<=0||!list.length) return [];
  const t=T(), ok=x=>avail(keyFn(x));
  const failed=shuffle(list.filter(x=>{ const it=S.it[keyFn(x)]; return it&&it.lr===0&&ok(x); }));
  const fresh=shuffle(list.filter(x=>!S.it[keyFn(x)]&&ok(x)));
  const old=list.filter(x=>{ const it=S.it[keyFn(x)]; return it&&it.lr!==0&&ok(x); }).sort((a,b)=>(S.it[keyFn(a)].ls||0)-(S.it[keyFn(b)].ls||0));
  const out=failed.slice(0,Math.ceil(n/3));
  for(const x of fresh){ if(out.length>=n) break; out.push(x); }
  for(const x of old){ if(out.length>=n) break; out.push(x); }
  if(out.length<n){ const rest=list.filter(x=>!out.includes(x)&&!(S.it[keyFn(x)]||{}).flag).sort((a,b)=>shownToday(keyFn(a))-shownToday(keyFn(b))||Math.random()-0.5); out.push(...rest.slice(0,n-out.length)); }
  return shuffle(out);
}
/* repaso espaciado: lo que toca hoy, lo más atrasado y lo más difícil primero */
function dueOf(list,keyFn){
  const t=T();
  return list.filter(x=>{ const k=keyFn(x), it=S.it[k]; return it&&it.d<=t&&avail(k); })
    .sort((a,b)=>{ const A=S.it[keyFn(a)], B=S.it[keyFn(b)]; return (A.d-B.d)||((A.ef||2.5)-(B.ef||2.5)); });
}
function pickSrs(list,keyFn,n){
  const out=dueOf(list,keyFn).slice(0,n);
  if(out.length<n) out.push(...shuffle(list.filter(x=>!seen(keyFn(x))&&avail(keyFn(x)))).slice(0,n-out.length));
  if(out.length<n) out.push(...list.filter(x=>seen(keyFn(x))&&!out.includes(x)&&avail(keyFn(x))).sort((a,b)=>(S.it[keyFn(a)].d||0)-(S.it[keyFn(b)].d||0)).slice(0,n-out.length));
  if(out.length<n) out.push(...shuffle(list.filter(x=>!out.includes(x))).slice(0,n-out.length));
  return out;
}
/* palabras nuevas: al azar entre todos los temas, con preferencia por lo básico y por tus temas favoritos, y como mucho dos del mismo tema */
function newWordsFrom(pool,n){
  const un=pool.filter(w=>!seen(w.k)&&avail(w.k)); if(!un.length||n<=0) return [];
  const pins=S.pins||[], minLv=Math.min(...un.map(w=>w.lv)), multi=new Set(un.map(w=>w.th)).size>1;
  const weight=w=>(w.lv===minLv?4:w.lv===minLv+1?1.6:0.7)*(pins.includes(w.th)?2.2:1)*(w.g==='expr'?0.6:1);
  const cand=un.slice(), out=[], per={};
  while(out.length<n&&cand.length){
    let x=Math.random()*cand.reduce((a,w)=>a+weight(w),0), idx=cand.length-1;
    for(let i=0;i<cand.length;i++){ x-=weight(cand[i]); if(x<=0){ idx=i; break; } }
    const w=cand.splice(idx,1)[0];
    if(multi&&(per[w.th]||0)>=2) continue;
    per[w.th]=(per[w.th]||0)+1; out.push(w);
  }
  return out;
}
/* mete cada palabra nueva: presentación y, unos pasos después, la prueba */
function insertNew(steps,news,start){
  news.forEach((w,i)=>{
    const pos=Math.min(steps.length,(start||0)+i*3);
    steps.splice(pos,0,introStep(w));
    steps.splice(Math.min(steps.length,pos+3+rnd(0,2)),0,testStep(w));
  });
  return steps;
}

/* ---------- gramática: qué destreza toca ---------- */
const hasStuff=id=>!!SK[id]&&(SK[id].items.length>0||!!SK[id].gen);
function skillScore(id){
  const st=skillState(id), stale=st.ls?Math.min(14,T()-st.ls)/7:1;
  if(st.done) return stale>=1?0.7+stale*0.25:0.05;
  return (st.acc<0.7?2.2:1.5)+stale*0.6;
}
const nextNewSkills=()=>CURR.filter(id=>hasStuff(id)&&!skillState(id).n);
function pickSkills(k){
  const started=SKEYS.filter(id=>id!=='prep'&&hasStuff(id)&&skillState(id).n>0);
  const scored=started.map(id=>[id,skillScore(id)+Math.random()*0.8]);
  const inProg=started.filter(id=>!skillState(id).done).length, fresh=nextNewSkills();
  if(fresh[0]&&(inProg<4||Math.random()<0.3)) scored.push([fresh[0],3+Math.random()]);
  if(SK.mios&&hasStuff('mios')&&!skillState('mios').done&&skillState('mios').ls!==T()) scored.push(['mios',4]);
  scored.sort((a,b)=>b[1]-a[1]);
  const out=[...new Set(scored.map(x=>x[0]))].slice(0,k);
  if(!out.length&&fresh[0]) out.push(fresh[0]);
  return out;
}
function skillItems(id,n){
  const sk=SK[id]; if(!sk) return [];
  const out=[];
  if(sk.gen&&GEN[sk.gen]){ const g=sk.items.length?Math.ceil(n*0.6):n; for(let i=0;i<g;i++) out.push(GEN[sk.gen]()); }
  if(sk.mix){
    const own=Math.ceil((n-out.length)*0.6);
    out.push(...pickBank(sk.items,g=>g.k,own));
    out.push(...pickBank(SK[sk.mix].items.filter(g=>g.sk!==id),g=>g.k,n-out.length));
  }else if(sk.items.length) out.push(...pickBank(sk.items,g=>g.k,n-out.length));
  return shuffle(out).slice(0,n);
}
function skillSteps(id,n){
  if(id==='dehet'){ const pool=ALLW.filter(w=>isNoun(w)&&(seen(w.k)||w.lv===1)); return pickSrs(pool,w=>'d:'+w.nl,n).map(dehetStep); }
  return skillItems(id,n).map(gapStep);
}

/* ---------- escuchar frases ---------- */
let SENTS=null;
function sentPool(){
  if(SENTS) return SENTS;
  const out=[], seen_=new Set();
  const add=(nl,es,src)=>{
    if(!nl||!es) return; nl=String(nl).trim(); es=String(es).trim();
    const n=nl.split(/\s+/).length; if(n<3||n>14||!/[.?!]$/.test(nl)||/[()→]/.test(nl)) return;
    const k=norm(nl); if(seen_.has(k)) return; seen_.add(k);
    out.push({nl,es,src,k:'s:'+nl});
  };
  ALLPUZ.forEach(p=>add(p.n,p.s,'puz'));
  CHAT.forEach(c=>add(c.q,c.qe,'chat'));
  SK.prep.items.concat(ALLG).forEach(g=>{ if(g.q.split('___').length===2) add(g.q.replace('___',g.a),g.es,'gram'); });
  STORY.forEach(c=>c.l.forEach(l=>add(l[0],l[1],'story')));
  return SENTS=out;
}
function hearStep(){
  const pool=sentPool(), s=pickBank(pool,x=>x.k,1)[0]; if(!s) return null;
  const near=pool.filter(x=>x!==s&&x.es!==s.es&&Math.abs(x.nl.length-s.nl.length)<20);
  const others=shuffle(near.filter(x=>x.src===s.src)).slice(0,2);
  if(others.length<2) others.push(...shuffle(near).filter(x=>!others.includes(x)).slice(0,2-others.length));
  return {t:'hear',h:s,opts:shuffle([s,...others]),key:s.k,cat:'listen'};
}
/* ejemplos para las palabras nuevas: una frase corta de los bancos donde salga la palabra */
let EXIDX=null;
function exampleFor(w){
  if(!EXIDX){
    EXIDX={};
    sentPool().forEach((s,i)=>{ if(s.nl.split(/\s+/).length>10) return; new Set(norm(s.nl).split(' ')).forEach(t=>{ (EXIDX[t]=EXIDX[t]||[]).push(i); }); });
  }
  const f=first(w.nl), core=norm(strip(f));
  if(core.includes(' ')) return null;
  const forms=[core];
  const v=w.th==='verbos'&&VERBS.find(x=>x[0]===w.nl);
  if(v) [v[2],v[3],v[4]].forEach(x=>first(x).split(' ').forEach(y=>forms.push(norm(y))));
  const ids=[...new Set(forms.flatMap(t=>EXIDX[t]||[]))];
  if(!ids.length) return null;
  const s=sentPool()[ids.sort((a,b)=>sentPool()[a].nl.length-sentPool()[b].nl.length)[Math.min(ids.length-1,rnd(0,2))]];
  return [s.nl,s.es];
}

/* ---------- la ronda principal ---------- */
function otherSteps(n){
  const hasVoice=!!voice;
  const kinds=[['verb',2],['puz',2],['chat',1.4],['hear',hasVoice?1.4:0],['hearTiles',hasVoice?1.2:0],['country',0.6],['num',hasVoice?0.7:0],['pair',hasVoice?0.6:0]];
  const make={
    verb:()=>verbStep(pickSrs(VERBS,v=>'v:'+v[0],1)[0]),
    puz:()=>puzStep(pickBank(ALLPUZ,p=>'p:'+p.n,1)[0]),
    hearTiles:()=>puzStep(pickBank(ALLPUZ,p=>'p:'+p.n,1)[0],true),
    chat:()=>chatStep(pickBank(CHAT,c=>'h:'+c.q,1)[0]),
    hear:()=>hearStep(),
    country:()=>countryStep(pickSrs(LANDEN,l=>'c:'+l[1],1)[0]),
    num:()=>numStep(),
    pair:()=>pairStep(pickBank(PAIRS,p=>'m:'+p[0]+'/'+p[1],1)[0])
  };
  const out=[], used={};
  for(let guard=0;out.length<n&&guard<40;guard++){
    const ks=kinds.filter(k=>k[1]>0&&!(used[k[0]]>=(n>4?2:1)));
    if(!ks.length) break;
    let x=Math.random()*ks.reduce((a,k)=>a+k[1],0), kind=ks[0][0];
    for(const k of ks){ x-=k[1]; if(x<=0){ kind=k[0]; break; } }
    const s=make[kind](); if(!s) { used[kind]=99; continue; }
    if(out.some(o=>o.key&&o.key===s.key)) continue;
    used[kind]=(used[kind]||0)+1; out.push(s);
  }
  return out;
}
/* plan de la próxima ronda: cuántas nuevas, cuántos repasos, qué gramática */
let NEXT=null;
function planRound(){
  const N=roundN(), sc=N/12;
  const due=dueOf(ALLW,w=>w.k), unseen=ALLW.filter(w=>!seen(w.k)).length;
  /* cuantos más repasos pendientes, menos palabras nuevas (pero siempre al menos una); y con más de 25 nuevas en el día, solo una por ronda */
  let nNew=due.length>60?1:due.length>30?2:3;
  nNew=Math.min(unseen,Math.max(1,Math.round(nNew*sc)));
  if((logDay().n||0)>=25) nNew=Math.min(nNew,1);
  let nRev=Math.min(due.length,Math.round((due.length>30?6:4)*sc));
  if(nRev<2&&unseen>nNew) nNew=Math.min(unseen,nNew+1);
  const nGram=Math.max(2,Math.round(3*sc));
  const nOther=Math.max(1,N-(nNew*2+nRev+nGram));
  const skills=pickSkills(nGram>=4?2:(Math.random()<0.5?2:1));
  return NEXT={t:T(),at:Date.now(),N,nNew,nRev,nGram,nOther,skills,due:due.length,news:newWordsFrom(ALLW,nNew),revs:due.slice(0,nRev)};
}
function roundSteps(){
  const p=(NEXT&&NEXT.t===T()&&Date.now()-NEXT.at<15*60000)?NEXT:planRound(); NEXT=null;
  const main=p.revs.map(w=>wordStep(w));
  const per=Math.ceil(p.nGram/p.skills.length);
  p.skills.forEach(id=>main.push(...skillSteps(id,per)));
  main.push(...otherSteps(p.nOther));
  const steps=shuffle(main);
  /* se empieza por algo sencillo */
  const easy=steps.findIndex(s=>['type','gap','mc-es','mc-nl'].includes(s.t));
  if(easy>0) steps.unshift(steps.splice(easy,1)[0]);
  return insertNew(steps,p.news,1);
}
/* ronda de un grupo o subgrupo de vocabulario: sobre todo palabras nuevas, más lo que toque repasar de ahí */
function poolSteps(pool){
  const N=Math.max(10,roundN());
  const due=dueOf(pool,w=>w.k), un=pool.filter(w=>!seen(w.k)&&avail(w.k)).length;
  const nNew=Math.min(un,due.length>8?3:due.length>3?4:6);
  const steps=shuffle(due.slice(0,Math.max(0,N-nNew*2)).map(w=>wordStep(w)));
  const fill=N-nNew*2-steps.length;
  if(fill>0) steps.push(...shuffle(pool.filter(w=>seen(w.k)&&!isDue(w.k)&&avail(w.k)).sort((a,b)=>(S.it[a.k].iv-S.it[b.k].iv)||(S.it[a.k].ls-S.it[b.k].ls)).slice(0,fill)).map(w=>wordStep(w)));
  if(!steps.length&&!nNew) return shuffle(pool).sort((a,b)=>((S.it[a.k]||{}).ls||0)-((S.it[b.k]||{}).ls||0)).slice(0,N).map(w=>wordStep(w));
  return insertNew(steps,newWordsFrom(pool,nNew),0);
}
/* «Al azar»: de todo. Algunas que no has visto nunca van como prueba: si la aciertas escribiéndola, se da por sabida */
function randomSteps(){
  const N=Math.max(10,roundN());
  const probe=shuffle(ALLW.filter(w=>!seen(w.k)&&w.g!=='expr'&&avail(w.k))).slice(0,Math.round(N*0.3));
  const due=shuffle(dueOf(ALLW,w=>w.k).slice(0,30)).slice(0,Math.round(N*0.35));
  const rest=shuffle(ALLW.filter(w=>seen(w.k)&&!isDue(w.k)&&avail(w.k))).slice(0,N-probe.length-due.length);
  /* si no hay bastantes repasos, se completa con más palabras de prueba */
  if(probe.length+due.length+rest.length<N) probe.push(...shuffle(ALLW.filter(w=>!seen(w.k)&&w.g!=='expr'&&avail(w.k)&&!probe.includes(w))).slice(0,N-probe.length-due.length-rest.length));
  const steps=[...probe.map(w=>Object.assign(wordStep(w,wmode()==='mc'?'mc-es':(isPhrase(w.nl)?'tiles':'type')),{probe:true})),...due.map(w=>wordStep(w)),...rest.map(w=>wordStep(w))];
  return shuffle(steps);
}
const failWords=()=>ALLW.filter(w=>S.it[w.k]&&S.it[w.k].w>0&&!isMastered(w.k)&&avail(w.k)).sort((a,b)=>(S.nem[b.k]||0)-(S.nem[a.k]||0));
function groupSkillSteps(grp){
  const ids=SKEYS.filter(id=>SK[id].grp===grp&&id!=='prep'&&hasStuff(id));
  const ord=ids.sort((a,b)=>skillScore(b)-skillScore(a)+(Math.random()-0.5)).slice(0,4);
  return shuffle(ord.flatMap(id=>skillSteps(id,Math.ceil(12/ord.length)))).slice(0,12);
}

/* ---------- arrancar una partida ---------- */
function play(kind,arg){
  unlockAudio();
  let cfg=null;
  if(kind==='daily') cfg={title:'Ronda '+(td().r+1)+' de hoy',steps:roundSteps()};
  else if(kind==='theme') cfg={title:THEMES[arg].n,steps:poolSteps(THEMES[arg].w)};
  else if(kind==='sub') cfg={title:SUBBY[arg].n,steps:poolSteps(SUBBY[arg].w)};
  else if(kind==='group'){ const g=GROUPS.find(x=>x.k===arg); cfg={title:g.n,steps:poolSteps(SUBS[arg].flatMap(s=>s.w))}; }
  else if(kind==='random') cfg={title:'Vocabulario al azar',steps:randomSteps()};
  else if(kind==='fails') cfg={title:'Mis fallos',steps:failWords().slice(0,14).map(w=>wordStep(w))};
  else if(kind==='gram'){ const sk=SK[arg]; cfg={title:sk.grp==='prep'&&arg!=='prep'?'Preposición '+sk.n:sk.n,steps:skillSteps(arg,12)}; }
  else if(kind==='gramgrp') cfg={title:(SKGROUPS.find(g=>g.k===arg)||{n:'Gramática'}).n,steps:groupSkillSteps(arg)};
  else if(kind==='verbs'){
    const src=arg==='irr'?VERBS.filter(v=>!isSep(v)&&isIrregular(v)):arg==='reg'?VERBS.filter(v=>!isSep(v)&&!isIrregular(v)):arg==='sep'?VERBS.filter(isSep):arg==='basic'?VERBS.slice(0,BASE_VERBS):VERBS;
    cfg={title:'Verbos: las cuatro formas',steps:pickSrs(src,v=>'v:'+v[0],8).map(verbStep)};
  }
  else if(kind==='countries') cfg={title:'Países y nacionalidades',steps:pickSrs(LANDEN,l=>'c:'+l[1],8).map(countryStep)};
  else if(kind==='chat') cfg={title:'Charla con Lotte',steps:pickBank(CHAT,c=>'h:'+c.q,10).map(chatStep)};
  else if(kind==='puzzle') cfg={title:arg?PUZ[arg][0]:'Monta la frase',steps:pickBank(arg?PUZ[arg][1]:ALLPUZ,p=>'p:'+p.n,10).map(p=>puzStep(p))};
  else if(kind==='hearTiles') cfg={title:'Escucha y ordena',steps:pickBank(ALLPUZ,p=>'p:'+p.n,10).map(p=>puzStep(p,true))};
  else if(kind==='hear'){ const st=[]; for(let i=0;i<10;i++){ const s=hearStep(); if(s&&!st.some(x=>x.key===s.key)){ st.push(s); markShown(s.key); } } st.forEach(s=>{ td().k[s.key]--; }); cfg={title:'¿Qué has oído?',steps:st}; }
  else if(kind==='dictation'){
    let src=ALLW.filter(w=>seen(w.k)&&!isPhrase(w.nl)); if(src.length<12) src=ALLW.filter(w=>w.lv===1&&!isPhrase(w.nl));
    cfg={title:'Dictado de palabras',steps:pickSrs(src,w=>w.k,12).map(w=>wordStep(w,'ear'))};
  }
  else if(kind==='numbers') cfg={title:'Números y horas',steps:NSEQ.map(numStep)};
  else if(kind==='pairs') cfg={title:'¿Cuál has oído?',steps:pickBank(PAIRS,p=>'m:'+p[0]+'/'+p[1],12).map(pairStep)};
  else if(kind==='dehet'){
    const pool=ALLW.filter(w=>isNoun(w)&&(seen(w.k)||w.lv===1));
    cfg={title:'¿De o het?',steps:[],timed:60000,gen:()=>{ let w; do{ w=pick(pool); }while(pool.length>1&&R.last===w); R.last=w; return dehetStep(w); }};
  }
  else if(kind==='blitz'){
    let pool=arg?THEMES[arg].w:ALLW.filter(w=>seen(w.k)||w.lv<=2);
    pool=pool.filter(w=>!isPhrase(w.nl)); if(pool.length<8) pool=ALLW.filter(w=>!isPhrase(w.nl));
    cfg={title:'Blitz 60',steps:[],timed:60000,gen:()=>{ let w; do{ w=pick(pool); }while(R.last===w); R.last=w; return {t:Math.random()<0.6?'mc-es':'mc-nl',w,key:w.k,cat:'w:'+w.th}; }};
  }
  if(!cfg) return;
  cfg.steps=(cfg.steps||[]).filter(Boolean);
  if(!cfg.timed&&!cfg.steps.length){ toast('Aquí no hay nada que practicar ahora mismo. Vuelve mañana.'); return; }
  cfg.mode=kind; cfg.arg=arg;
  startRun(cfg);
}
