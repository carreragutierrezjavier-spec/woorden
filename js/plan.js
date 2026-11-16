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
/* cada palabra sube una escalera: nueva → la eliges entre cuatro; acertada una vez → la reconoces (de oído o leyendo);
   acertada dos veces o más → la escribes (y de vez en cuando, dictado) */
function wordStep(w,force){
  const it=S.it[w.k], r=it?(it.r||0):0, st=stage(w.k); let t;
  if(force) t=force;
  else if(!it||r===0) t='mc-es';
  else if(r===1) t=(voice&&Math.random()<0.5)?'mc-ear':'mc-nl';
  else if(isPhrase(w.nl)) t='tiles';
  else if(st>=3&&voice&&Math.random()<0.25) t='ear';
  else t='type';
  return {t,w,key:w.k,cat:'w:'+w.th,nw:!it,fresh:!it};
}
const introStep=w=>({t:'intro',w,key:w.k,cat:'w:'+w.th,opt:0});
/* la prueba que sigue a la presentación de una palabra nueva */
const testStep=w=>({t:wmode()==='type'?(isPhrase(w.nl)?'tiles':'type'):'mc-es',w,key:w.k,cat:'w:'+w.th,fresh:true,opt:0});
/* lo que se puede quitar de una ronda si hace falta sitio para repetir fallos: 1 = relleno, 2 = lo demás; los repasos que tocan, nunca */
const dueStep=w=>Object.assign(wordStep(w),{opt:0});
const fillStep=s=>Object.assign(s,{opt:1});
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
/* para subir de peldaño el mismo día: acertada hoy una vez, aún sin dominar */
const climbToday=k=>{ const it=S.it[k]; return !!it&&!it.flag&&it.lr===1&&it.ls===T()&&shownToday(k)===1&&(it.r||0)<=3&&!isMastered(k); };
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
  const pins=S.pins||[], minLv=Math.min(...un.map(w=>w.lv)), nth=new Set(un.map(w=>w.th)).size, multi=nth>1, cap=Math.max(2,Math.ceil(n/nth));
  const weight=w=>(w.lv===minLv?4:w.lv===minLv+1?1.6:0.7)*(pins.includes(w.th)?2.2:1)*(w.g==='expr'?0.6:1);
  const cand=un.slice(), out=[], per={};
  while(out.length<n&&cand.length){
    let x=Math.random()*cand.reduce((a,w)=>a+weight(w),0), idx=cand.length-1;
    for(let i=0;i<cand.length;i++){ x-=weight(cand[i]); if(x<=0){ idx=i; break; } }
    const w=cand.splice(idx,1)[0];
    if(multi&&(per[w.th]||0)>=cap) continue;
    per[w.th]=(per[w.th]||0)+1; out.push(w);
  }
  return out;
}
/* las palabras nuevas, repartidas por la ronda: salen para elegir entre cuatro (la primera vez no cuenta como fallo) */
function insertNew(steps,news,start){
  const head=steps.slice(0,start||0), rest=steps.slice(start||0), pr=news.map(w=>Object.assign(wordStep(w),{opt:0})), out=[];
  while(rest.length||pr.length){
    const takeNew=pr.length&&(!rest.length||Math.random()<pr.length/(pr.length+rest.length));
    out.push(takeNew?pr.shift():rest.shift());
  }
  return head.concat(out);
}
/* al final de una ronda de palabras: une las parejas con cinco de las que han salido */
function addMatch(steps){
  const ws=[...new Set(steps.filter(s=>s.w&&!isPhrase(s.w.nl)&&first(s.w.nl).length<=18).map(s=>s.w))];
  if(ws.length>=5) steps.push({t:'match',ws:shuffle(ws).slice(0,5),key:'gen:match',cat:'w:'+ws[0].th,opt:0});
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

/* ---------- bloques de gramática ---------- */
/* qué reglas hay en cada bloque (en verbos, también «las cuatro formas»: v4) */
const PUZK=()=>Object.keys(PUZ);
function blockSkills(bk){
  if(bk==='frases') return PUZK().map(k=>'puz:'+k);
  const ids=SKEYS.filter(id=>id!=='prep'&&hasStuff(id)&&SK[id].grp===bk);
  return bk==='verbos'?['v4',...ids]:ids;
}
const blockLast=bk=>Math.max(0,...blockSkills(bk).map(id=>(S.sk[id]||{}).ls||0));
function blockState(bk){
  const ids=blockSkills(bk), st=ids.map(skillState);
  return {n:ids.length,done:st.filter(x=>x.done).length,started:st.filter(x=>x.n>0).length,answers:st.reduce((a,x)=>a+x.n,0),last:blockLast(bk)};
}
/* peso de cada regla: lo que fallas, mucho; lo que llevas tiempo sin tocar, algo más; lo dominado, poco */
function wantOf(id){
  const st=skillState(id), stale=st.ls?Math.min(14,T()-st.ls)/7:0;
  if(!st.n) return 1;
  if(st.done) return 0.3+stale*0.3;
  return (st.acc<0.75?2.6:1.6)+stale*0.5;
}
const currIdx=id=>{ const i=CURR.indexOf(id); return i<0?(id==='v4'?6:99):i; };
/* elige las reglas de la ronda: las empezadas según lo que más hace falta y, como mucho, dos nuevas */
function chooseSkills(ids,k){
  const started=ids.filter(id=>skillState(id).n>0), fresh=ids.filter(id=>!skillState(id).n).sort((a,b)=>currIdx(a)-currIdx(b));
  const open=started.filter(id=>!skillState(id).done).length;
  const nNew=Math.min(fresh.length,started.length<2?2:open<4?1:(Math.random()<0.4?1:0));
  const out=fresh.slice(0,nNew);
  const ranked=started.map(id=>[id,wantOf(id)*(0.6+Math.random()*0.8)]).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
  for(const id of ranked){ if(out.length>=k) break; out.push(id); }
  for(const id of fresh.slice(nNew)){ if(out.length>=Math.min(k,2)) break; out.push(id); }
  return out;
}
/* reparte n preguntas entre las reglas, según su peso */
function share(ids,n,wFn){
  const w=ids.map(id=>Math.max(0.05,wFn(id))), tot=w.reduce((a,b)=>a+b,0), cnt={};
  ids.forEach((id,i)=>{ cnt[id]=Math.max(1,Math.floor(n*w[i]/tot)); });
  let left=n-Object.values(cnt).reduce((a,b)=>a+b,0);
  const order=ids.map((id,i)=>[id,w[i]]).sort((a,b)=>b[1]-a[1]);
  for(let i=0;left>0;i=(i+1)%order.length){ cnt[order[i][0]]++; left--; }
  for(let i=order.length-1;left<0&&i>=0;i--){ if(cnt[order[i][0]]>1){ cnt[order[i][0]]--; left++; } }
  /* ninguna regla se come más del 40 % de la ronda */
  if(ids.length>1){
    const cap=Math.max(2,Math.ceil(n*0.4));
    ids.forEach(id=>{ while(cnt[id]>cap){ const o=ids.filter(x=>x!==id).sort((a,b)=>cnt[a]-cnt[b])[0]; cnt[id]--; cnt[o]++; } });
  }
  return cnt;
}
/* verbos: los que tocan repasar y, si no, los más básicos que aún no has visto */
function verbPick(n){
  const key=v=>'v:'+v[0];
  const out=dueOf(VERBS,key).slice(0,n);
  if(out.length<n){
    const lim=BASE_VERBS+VERBS.filter(v=>seen(key(v))).length+20;
    out.push(...shuffle(VERBS.slice(0,lim).filter(v=>!seen(key(v))&&avail(key(v))&&!out.includes(v))).slice(0,n-out.length));
  }
  if(out.length<n) out.push(...VERBS.filter(v=>seen(key(v))&&avail(key(v))&&!out.includes(v)).sort((a,b)=>(S.it[key(a)].ls||0)-(S.it[key(b)].ls||0)).slice(0,n-out.length));
  return out;
}
const auxOf=v=>/hebben/.test(v[5])&&/zijn/.test(v[5])?'los dos':(/zijn/.test(v[5])?'zijn':'hebben');
/* pregunta rápida de un verbo: con qué auxiliar va, o cuál es el participio (con opciones, sin escribir) */
function vqStep(v,kind){
  if(kind==='aux') return {t:'vq',v,kind,key:'gen:vq:aux:'+v[0],cat:'g:hebzijn',skid:'hebzijn'};
  return {t:'vq',v,kind:'part',key:'gen:vq:part:'+v[0],cat:'verbs',skid:'v4'};
}
function verbSteps(n){
  /* como mucho dos verbos nuevos por ronda: su tarjeta trae las formas a la vista */
  const out=[]; let fresh=0;
  verbPick(n+3).forEach(v=>{
    if(out.length>=n) return;
    if(!seen('v:'+v[0])){ if(fresh>=2) return; fresh++; out.push(verbStep(v)); }
    else out.push(Math.random()<0.5?verbStep(v):vqStep(v,'part'));
  });
  if(out.length<n) out.push(...auxSteps(n-out.length));
  return out;
}
function auxSteps(n){
  /* sobre todo verbos con zijn o con los dos, que son los que cuestan */
  const seenV=VERBS.filter(v=>seen('v:'+v[0])||seen('w:'+v[0])), pool=seenV.length>=12?seenV:VERBS.slice(0,BASE_VERBS);
  const z=pool.filter(v=>/zijn/.test(v[5])), h=pool.filter(v=>!/zijn/.test(v[5]));
  const out=[];
  for(let i=0;i<n;i++){ const src=(Math.random()<0.65&&z.length)?z:h; const v=pick(src); if(!out.some(s=>s.v===v)) out.push(vqStep(v,'aux')); }
  return out;
}
/* frases para montar: los grupos que más fallas, y alguno nuevo */
function puzBlockSteps(n){
  const ids=chooseSkills(blockSkills('frases'),4), cnt=share(ids,n,wantOf), out=[];
  ids.forEach(id=>{ const k=id.slice(4); out.push(...pickBank(PUZ[k][1],p=>'p:'+p.n,cnt[id]).map(p=>puzStep(p))); });
  return shuffle(out);
}
/* la ronda de un bloque */
function blockSteps(bk,n){
  n=n||Math.max(10,roundN());
  if(bk==='frases') return puzBlockSteps(n);
  let steps=[];
  if(bk==='prep'){
    /* todas las preposiciones a la vez, para que no se pueda adivinar; más frases de las que fallas */
    const ids=blockSkills('prep'), cnt={};
    const w=ids.map(id=>wantOf(id)*(id==='prep:otras'?0.6:1));
    for(let i=0;i<n;i++){
      let x=Math.random()*w.reduce((a,b)=>a+b,0), j=0;
      for(;j<ids.length-1;j++){ x-=w[j]; if(x<=0) break; }
      if((cnt[ids[j]]||0)>=Math.ceil(n/3)) { i--; w[j]=0; if(!w.some(Boolean)) break; continue; }
      cnt[ids[j]]=(cnt[ids[j]]||0)+1;
    }
    Object.entries(cnt).forEach(([id,c])=>steps.push(...pickBank(SK[id].items,g=>g.k,c).map(gapStep)));
    return shuffle(steps);
  }
  const ids=chooseSkills(blockSkills(bk),4), cnt=share(ids,n,id=>wantOf(id)*(id==='v4'?1.3:1));
  ids.forEach(id=>{
    const c=cnt[id];
    if(id==='v4') steps.push(...verbSteps(Math.max(2,Math.round(c*0.8))));
    else if(id==='hebzijn'){ const a=Math.floor(c/2); steps.push(...auxSteps(a),...skillSteps(id,c-a)); }
    else steps.push(...skillSteps(id,c));
  });
  steps=shuffle(steps.filter(Boolean));
  /* un verbo nuevo: primero se presenta y unos pasos después se pregunta */
  steps.filter(s=>s.after).forEach(s=>{
    const i=steps.indexOf(s), j=steps.findIndex(x=>x.t==='vintro'&&x.v===s.v);
    if(j>i){ steps.splice(i,1); steps.splice(Math.min(steps.length,j+2+rnd(0,2)),0,s); }
  });
  /* una regla que no has practicado nunca: primero te la explico */
  const firstOf={};
  steps.forEach((s,i)=>{ const id=s.skid; if(id&&id!=='v4'&&firstOf[id]==null&&!skillState(id).n&&!(S.ri||{})[id]&&SK[id]&&SK[id].tip) firstOf[id]=i; });
  Object.entries(firstOf).sort((a,b)=>b[1]-a[1]).forEach(([id,i])=>steps.splice(i,0,{t:'rule',id,key:null,opt:0}));
  return steps;
}
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
  /* cada forma, con todas sus palabras (stond … op cuenta solo si están las dos) */
  const groups=[[core]];
  const v=w.th==='verbos'&&VERBS.find(x=>x[0]===w.nl);
  if(v) [v[2],v[3],v[4]].forEach(x=>groups.push(first(x).split(' ').map(y=>norm(y))));
  const ids=[...new Set(groups.flatMap(g=>{ const ls=g.map(t=>EXIDX[t]||[]); return ls[0].filter(i=>ls.every(l=>l.includes(i))); }))];
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
  const nOther=Math.max(1,N-(nNew+nRev+nGram));
  const skills=pickSkills(nGram>=4?2:(Math.random()<0.5?2:1));
  return NEXT={t:T(),at:Date.now(),N,nNew,nRev,nGram,nOther,skills,due:due.length,news:newWordsFrom(ALLW,nNew),revs:due.slice(0,nRev)};
}
function roundSteps(){
  const p=(NEXT&&NEXT.t===T()&&Date.now()-NEXT.at<15*60000)?NEXT:planRound(); NEXT=null;
  const main=p.revs.map(dueStep);
  const per=Math.ceil(p.nGram/p.skills.length);
  p.skills.forEach(id=>main.push(...skillSteps(id,per)));
  main.push(...otherSteps(p.nOther).map(fillStep));
  const steps=shuffle(main);
  /* se empieza por algo sencillo */
  const easy=steps.findIndex(s=>['type','gap','mc-es','mc-nl'].includes(s.t));
  if(easy>0) steps.unshift(steps.splice(easy,1)[0]);
  return insertNew(steps,p.news,1);
}
/* ronda de un grupo o subgrupo de vocabulario: sobre todo palabras nuevas, más lo que toque repasar de ahí */
const vocabN=()=>S.opt.size==='short'?8:S.opt.size==='long'?14:10;
function poolSteps(pool){
  const N=vocabN();
  const due=dueOf(pool,w=>w.k), un=pool.filter(w=>!seen(w.k)&&avail(w.k)).length;
  /* siempre entran palabras nuevas; menos si se te acumulan los repasos */
  const cost=1;
  let nNew=Math.min(un,due.length>30?2:due.length>12?3:Math.ceil(N/2));
  const steps=shuffle(due.slice(0,Math.max(0,N-nNew*cost)).map(dueStep));
  const fill=N-nNew*cost-steps.length;
  if(fill>0){
    /* primero las que aprendiste hoy (vuelven un peldaño más arriba), luego las que llevas más sin ver */
    const climb=shuffle(pool.filter(w=>climbToday(w.k))).slice(0,fill);
    const old=pool.filter(w=>seen(w.k)&&!isDue(w.k)&&avail(w.k)).sort((a,b)=>(S.it[a.k].iv-S.it[b.k].iv)||(S.it[a.k].ls-S.it[b.k].ls)).slice(0,fill-climb.length);
    steps.push(...shuffle([...climb,...old]).map(w=>fillStep(wordStep(w))));
  }
  /* si no hay bastante que repasar, la ronda se completa con más nuevas */
  if(steps.length+nNew*cost<N) nNew=Math.min(un,7,Math.floor((N-steps.length)/cost));
  if(!steps.length&&!nNew) return shuffle(pool).sort((a,b)=>((S.it[a.k]||{}).ls||0)-((S.it[b.k]||{}).ls||0)).slice(0,N).map(w=>wordStep(w));
  return addMatch(insertNew(steps,newWordsFrom(pool,nNew),0));
}
/* «Al azar»: de todo. Algunas que no has visto nunca van como prueba: si la aciertas escribiéndola, se da por sabida */
function randomSteps(){
  const N=vocabN();
  const probe=newWordsFrom(ALLW.filter(w=>w.g!=='expr'),Math.round(N*0.4));
  const due=shuffle(dueOf(ALLW,w=>w.k).slice(0,30)).slice(0,Math.round(N*0.35));
  const rest=shuffle(ALLW.filter(w=>seen(w.k)&&!isDue(w.k)&&avail(w.k))).slice(0,N-probe.length-due.length);
  /* si no hay bastantes repasos, se completa con más palabras de prueba */
  if(probe.length+due.length+rest.length<N) probe.push(...newWordsFrom(ALLW.filter(w=>w.g!=='expr'&&!probe.includes(w)),N-probe.length-due.length-rest.length));
  const steps=[...probe.map(w=>Object.assign(wordStep(w),{opt:0})),...due.map(dueStep),...rest.map(w=>fillStep(wordStep(w)))];
  return addMatch(shuffle(steps));
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
  else if(kind==='block'){ const b=BLOCKS.find(x=>x.k===arg); cfg={title:b.n,steps:blockSteps(arg),block:b.c}; }
  else if(kind==='verbs'){
    let picks;
    if(arg&&arg!=='all'){ const src=arg==='irr'?VERBS.filter(v=>!isSep(v)&&isIrregular(v)):arg==='reg'?VERBS.filter(v=>!isSep(v)&&!isIrregular(v)):arg==='sep'?VERBS.filter(isSep):VERBS.slice(0,BASE_VERBS); picks=pickSrs(src,v=>'v:'+v[0],8); }
    else {
      const K=v=>'v:'+v[0], due=dueOf(VERBS,K).slice(0,6);
      const fresh=shuffle(VERBS.slice(0,BASE_VERBS+VERBS.filter(v=>seen(K(v))).length+20).filter(v=>!seen(K(v))&&avail(K(v)))).slice(0,due.length>4?2:3);
      const again=shuffle(VERBS.filter(v=>!due.includes(v)&&(climbToday(K(v))||(seen(K(v))&&!isDue(K(v))&&avail(K(v))&&!isMastered(K(v)))))).sort((a,b)=>(S.it[K(a)].ls||0)-(S.it[K(b)].ls||0));
      picks=[...due,...fresh]; picks.push(...again.slice(0,8-picks.length));
      if(picks.length<5) picks.push(...verbPick(8).filter(v=>!picks.includes(v)).slice(0,5-picks.length));
    }
    cfg={title:'Verbos',steps:shuffle(picks).slice(0,8).map(verbStep)};
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
  /* cuántas veces has hecho cada grupo o bloque: lo menos hecho sale arriba */
  if(['sub','group','block','random','countries'].includes(kind)){ S.gp=S.gp||{}; const gk=kind+':'+(arg||''); S.gp[gk]=(S.gp[gk]||0)+1; }
  startRun(cfg);
}
