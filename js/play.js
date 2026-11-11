'use strict';
/* Woorden · partida: cómo se arma cada sesión y cómo funciona cada tipo de ejercicio */

let R=null, TIMER=null;
const CRIT_P=0.07;
const SIZES={short:{rev:12,nw:3,gr:6,ex:3},normal:{rev:22,nw:6,gr:10,ex:6},long:{rev:34,nw:9,gr:14,ex:9}};
const NSEQ=['n1','n1','t','n2','n2','t','n2','y','t','n3','t','y'];

/* ---------- elegir qué toca ---------- */
function pickBy(list,keyFn,n){
  const due=list.filter(x=>isDue(keyFn(x))).sort((a,b)=>S.it[keyFn(a)].d-S.it[keyFn(b)].d);
  const out=due.slice(0,n);
  if(out.length<n) out.push(...list.filter(x=>!seen(keyFn(x))).slice(0,n-out.length));
  if(out.length<n) out.push(...shuffle(list.filter(x=>!out.includes(x))).sort((a,b)=>stage(keyFn(a))-stage(keyFn(b))).slice(0,n-out.length));
  return out;
}
function nextNewWords(n){
  if(n<=0) return [];
  const un=ALLW.filter(w=>!seen(w.k)), pins=S.pins||[];
  const pinned=un.filter(w=>pins.includes(w.th)).sort((a,b)=>a.i-b.i);
  const path=un.filter(w=>!pins.includes(w.th)).sort((a,b)=>a.lv-b.lv||a.i-b.i);
  const nPin=Math.min(pinned.length,Math.floor(n/3));
  const out=pinned.slice(0,nPin).concat(path.slice(0,n-nPin));
  if(out.length<n) out.push(...pinned.slice(nPin,nPin+n-out.length));
  return out;
}
function nextGrammar(n){
  const due=ALLG.filter(g=>isDue(g.k)).sort((a,b)=>S.it[a.k].d-S.it[b.k].d);
  const out=shuffle(due.slice(0,Math.max(1,n-2)));      /* primero lo pendiente; siempre queda hueco para un par de ejercicios nuevos */
  const need=n-out.length, fresh=[];
  const weakSk=weaknesses().filter(w=>w.cat.slice(0,2)==='g:').map(w=>w.cat.slice(2));
  for(const sk of [...new Set([...weakSk,...GKEYS])]){
    const un=GR[sk].items.filter(g=>!seen(g.k));
    if(un.length) fresh.push(...un.slice(0,Math.ceil(need/2)));
    if(fresh.length>=need) break;
  }
  out.push(...fresh.slice(0,need));
  if(out.length<n) out.push(...shuffle(ALLG.filter(g=>seen(g.k)&&!out.includes(g))).sort((a,b)=>stage(a.k)-stage(b.k)).slice(0,n-out.length));
  return out;
}

/* ---------- pasos ---------- */
/* modo de las palabras: 'type' = escribir en cuanto se ha visto una vez (por defecto) · 'mix' = primero elegir, luego escribir · 'mc' = solo elegir */
const wmode=()=>S.opt.wmode||'type';
function wordStep(w,force){
  const st=stage(w.k), mode=wmode(); let t;
  if(force) t=force;
  else if(st<=0) t='mc-es';
  else if(mode==='mc') t=(st>=2&&voice&&Math.random()<0.3)?'mc-ear':(Math.random()<0.5?'mc-es':'mc-nl');
  else if(mode==='mix'&&st<=1) t='mc-es';
  else if(mode==='mix'&&st===2) t=(voice&&Math.random()<0.5)?'mc-ear':'mc-nl';
  else if(isPhrase(w.nl)) t='tiles';
  else if(st>=3&&voice&&Math.random()<0.3) t='ear';
  else t='type';
  return {t,w,key:w.k,cat:'w:'+w.th};
}
/* segunda vez que sale una palabra nueva en la misma sesión */
const secondType=w=>wmode()==='type'?(isPhrase(w.nl)?'tiles':'type'):'mc-nl';
function isIrregular(v){ const a=first(v[2]).split(' ')[0], b=first(v[3]).split(' ')[0]; return !(/(te|de)$/.test(a)&&/(ten|den)$/.test(b)); }
const isSep=v=>v[2].includes(' ');
const verbCat=v=>isSep(v)?'verbs-sep':(isIrregular(v)?'verbs-irr':'verbs-reg');
const gapStep=g=>({t:'gap',g,key:g.k,cat:'g:'+g.sk});
const verbStep=v=>v&&({t:'verb',v,key:'v:'+v[0],cat:verbCat(v)});
const countryStep=c=>c&&({t:'country',c,key:'c:'+c[1],cat:'countries'});
const chatStep=c=>c&&({t:'chat',c,key:'h:'+c.q,cat:'chat'});
const puzStep=p=>p&&({t:'tiles',p,key:'p:'+p.n,cat:'puz:'+p.sub});
const pairStep=p=>({t:'pair',p,key:'m:'+p[0]+'/'+p[1],cat:'pairs'});
const dehetStep=w=>w&&({t:'dehet',w,key:'d:'+w.nl,cat:'dehet'});
const numStep=type=>({t:'num',q:makeNum(type||pick(['n1','n2','n2','n3','y','t','t','t']))});
const newSteps=(w,slot,i)=>[[slot-0.5+i*0.01,{t:'mc-es',w,key:w.k,cat:'w:'+w.th,nw:true}],[slot+6.5+i*0.01,{t:secondType(w),w,key:w.k,cat:'w:'+w.th}]];

function extraSteps(n){
  const vs=pickBy(VERBS,v=>'v:'+v[0],2), ps=pickBy(ALLPUZ,p=>'p:'+p.n,2), cs=pickBy(CHAT,c=>'h:'+c.q,1), ls=pickBy(LANDEN,l=>'c:'+l[1],1);
  const nouns=ALLW.filter(w=>seen(w.k)&&isNoun(w));
  const dh=nouns.length>=6?pickBy(nouns,w=>'d:'+w.nl,4):[];
  const odd=T()%2;
  return [verbStep(vs[0]),puzStep(ps[0]),chatStep(cs[0]),numStep(),odd?pairStep(pick(PAIRS)):countryStep(ls[0]),dehetStep(dh[0]),
    verbStep(vs[1]),puzStep(ps[1]),odd?countryStep(ls[0]):pairStep(pick(PAIRS)),dehetStep(dh[1])].filter(Boolean).slice(0,n);
}
function dailyPlan(){
  const cap=SIZES[S.opt.size]||SIZES.normal;
  const dueW=ALLW.filter(w=>isDue(w.k)).sort((a,b)=>S.it[a.k].d-S.it[b.k].d);
  const nNew=dueW.length>cap.rev*1.5?Math.ceil(cap.nw/2):cap.nw;
  return {cap,dueW,rev:Math.min(cap.rev,dueW.length),nNew:Math.min(nNew,ALLW.filter(w=>!seen(w.k)).length)};
}
function dailySteps(){
  const p=dailyPlan();
  const main=shuffle([...p.dueW.slice(0,p.cap.rev).map(w=>wordStep(w)),...nextGrammar(p.cap.gr).map(gapStep),...extraSteps(p.cap.ex)]);
  const slotted=main.map((s,i)=>[i,s]);
  nextNewWords(p.nNew).forEach((w,i)=>slotted.push(...newSteps(w,1+i*4,i)));
  const steps=slotted.sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
  /* se empieza siempre por algo sencillo, no por un dictado ni por un verbo */
  const easy=steps.findIndex(s=>['mc-es','mc-nl','gap','type'].includes(s.t)&&!(s.t==='mc-nl'&&!seen(s.key)));
  if(easy>0){ const [x]=steps.splice(easy,1); steps.unshift(x); }
  return steps;
}
function themeSteps(key){
  const th=THEMES[key];
  const due=th.w.filter(w=>isDue(w.k)).slice(0,14), un=th.w.filter(w=>!seen(w.k)).slice(0,6);
  let rest=[];
  if(due.length+un.length<10) rest=shuffle(th.w.filter(w=>seen(w.k)&&!isDue(w.k))).sort((a,b)=>stage(a.k)-stage(b.k)).slice(0,10-due.length-un.length);
  const slotted=shuffle([...due,...rest]).map((w,i)=>[i,wordStep(w)]);
  un.forEach((w,i)=>slotted.push(...newSteps(w,1+i*3,i)));
  return slotted.sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
}
const failWords=()=>ALLW.filter(w=>S.it[w.k]&&S.it[w.k].w>0&&!isMastered(w.k)).sort((a,b)=>(S.nem[b.k]||0)-(S.nem[a.k]||0));

/* ---------- arrancar una partida ---------- */
function play(kind,arg){
  unlockAudio();
  let cfg=null;
  if(kind==='daily') cfg={title:'Sesión de hoy',steps:dailySteps()};
  else if(kind==='theme') cfg={title:THEMES[arg].n,steps:themeSteps(arg)};
  else if(kind==='fails') cfg={title:'Mis fallos',steps:failWords().slice(0,15).map(w=>wordStep(w))};
  else if(kind==='gram') cfg={title:GR[arg].n,steps:shuffle(pickBy(GR[arg].items,g=>g.k,12)).map(gapStep)};
  else if(kind==='verbs'){
    const src=arg==='irr'?VERBS.filter(v=>!isSep(v)&&isIrregular(v)):arg==='reg'?VERBS.filter(v=>!isSep(v)&&!isIrregular(v)):arg==='sep'?VERBS.filter(isSep):VERBS;
    cfg={title:'Verbos',steps:pickBy(src,v=>'v:'+v[0],6).map(verbStep)};
  }
  else if(kind==='countries') cfg={title:'Países y nacionalidades',steps:pickBy(LANDEN,l=>'c:'+l[1],8).map(countryStep)};
  else if(kind==='chat') cfg={title:'Charla con Lotte',steps:pickBy(CHAT,c=>'h:'+c.q,8).map(chatStep)};
  else if(kind==='puzzle') cfg={title:arg?PUZ[arg][0]:'Monta la frase',steps:pickBy(arg?PUZ[arg][1]:ALLPUZ,p=>'p:'+p.n,8).map(puzStep)};
  else if(kind==='dictation'){
    let src=ALLW.filter(w=>seen(w.k)&&!isPhrase(w.nl)); if(src.length<12) src=ALLW.filter(w=>w.lv===1&&!isPhrase(w.nl));
    cfg={title:'Dictado',steps:shuffle(src).sort((a,b)=>stage(a.k)-stage(b.k)).slice(0,12).map(w=>wordStep(w,'ear'))};
  }
  else if(kind==='numbers') cfg={title:'Números y horas',steps:NSEQ.map(numStep)};
  else if(kind==='pairs') cfg={title:'¿Cuál has oído?',steps:shuffle(PAIRS).slice(0,12).map(pairStep)};
  else if(kind==='dehet'){
    let pool=ALLW.filter(w=>isNoun(w)&&(seen(w.k)||w.lv===1));
    cfg={title:'¿De o het?',steps:[],timed:60000,gen:()=>{ const c=pickBy(pool,w=>'d:'+w.nl,30); let w; do{ w=pick(c); }while(c.length>1&&R.last===w); R.last=w; return dehetStep(w); }};
  }
  else if(kind==='blitz'){
    let pool=arg?THEMES[arg].w:ALLW.filter(w=>seen(w.k)||w.lv<=2);
    pool=pool.filter(w=>!isPhrase(w.nl)); if(pool.length<8) pool=ALLW.filter(w=>!isPhrase(w.nl));
    cfg={title:'Blitz 60',steps:[],timed:60000,gen:()=>{ let w; do{ w=pick(pool); }while(R.last===w); R.last=w; return {t:Math.random()<0.6?'mc-es':'mc-nl',w,key:w.k,cat:'w:'+w.th}; }};
  }
  if(!cfg) return;
  if(!cfg.timed&&!cfg.steps.length){ toast('Aquí no hay nada que practicar todavía.'); return; }
  cfg.mode=kind; cfg.arg=arg;
  startRun(cfg);
}
function startRun(cfg){
  stopTimer(); hush();
  R=Object.assign({i:0,ok:0,bad:0,xp:0,coins:0,combo:0,maxCombo:0,misses:[],newWords:[],crits:0,news:0,t0:Date.now(),answered:false,key:null},cfg);
  $('end').hidden=true; $('play').hidden=false; document.body.classList.add('playing');
  $('pTitle').textContent=R.title; $('pXp').textContent='+0 XP';
  $('prail').classList.toggle('timer',!!R.timed);
  if(R.timed){ R.dur=R.timed; R.tStart=Date.now(); TIMER=setInterval(tick,100); }
  setCombo(0,true); nextStep();
}
function stopTimer(){ if(TIMER){ clearInterval(TIMER); TIMER=null; } }
function tick(){
  if(!R) return stopTimer();
  const left=Math.max(0,R.dur-(Date.now()-R.tStart));
  $('pbarFill').style.width=(left/R.dur*100)+'%'; $('pCount').textContent=Math.ceil(left/1000)+' s';
  if(!left) endRun();
}
function nextStep(){
  if(!R) return;
  clearTimeout(R.autoT);
  if(R.timed) R.cur=R.gen();
  else{
    if(R.i>=R.steps.length) return endRun();
    R.cur=R.steps[R.i];
    $('pbarFill').style.width=(R.i/R.steps.length*100)+'%'; $('pCount').textContent=(R.i+1)+' / '+R.steps.length;
  }
  R.answered=false; R.key=null; R.hinted=false; R.fiftyFn=null; R.hintFn=null;
  $('fb').hidden=true;
  const st=$('stage'); st.innerHTML=''; st.className='stage t-'+R.cur.t; $('play').scrollTop=0;
  RENDER[R.cur.t](R.cur,st);
  /* si la pregunta nueva no se escribe, se cierra el teclado */
  if(!st.querySelector('input.txt')){ const a=document.activeElement; if(a&&a.blur&&a!==document.body) a.blur(); }
  fitPlay();
  renderPowers();
}
function advance(){
  if(!R||!R.answered) return;
  clearTimeout(R.autoT);
  if(!R.timed) R.i++;
  nextStep();
}
function setCombo(c,silent){
  R.combo=c; if(c>R.maxCombo) R.maxCombo=c;
  if(c>(S.life.maxCombo||0)) S.life.maxCombo=c;
  const e=$('combo'); e.hidden=c<3; e.textContent='×'+c; e.classList.toggle('hot',c>=10);
  if(!silent&&c>=3){ e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); }
  if(!silent&&(c===10||c===20)) ev({t:'combo',v:c});
}
function critFx(){ const f=H('div.critfx',null,H('b',{text:'¡Golpe crítico!'}),H('span',{text:'XP ×3'})); document.body.appendChild(f); setTimeout(()=>f.remove(),1100); }

/* registra una respuesta: estadísticas, repaso espaciado, XP, combo y misiones */
function answer(o){
  const s=R.cur; R.answered=true;
  stat(o.cat,o.good);
  const L=logDay(); if(o.good) L.o++; else L.b++;
  let wasNew=false;
  if(o.key){
    const it=S.it[o.key], early=it&&it.d>T()&&!s.re;
    if(o.near) markNear(o.key);
    else if(o.good&&early) it.r++;
    else wasNew=mark(o.key,o.good,!!s.re);
  }
  if(wasNew&&o.key.slice(0,2)==='w:'){ R.news++; L.n++; if(s.w) R.newWords.push(s.w); ev({t:'new'}); }
  if(o.good){
    R.ok++; life('ok'); setCombo(R.combo+1);
    const steps=Math.min(4,Math.floor(R.combo/5));
    let xp=o.xp*(R.timed?1+steps*0.75:1+steps*0.25), crit=false;
    if(Math.random()<CRIT_P){ crit=true; xp*=3; R.crits++; life('crits'); }
    if(R.hinted) xp/=2;
    award(xp,crit); addCoins(crit?3:1); sfx(crit?'crit':'ok',R.combo);
    $('pXp').textContent='+'+R.xp+' XP';
    if(crit){ critFx(); ev({t:'crit'}); }
    ev({t:'ok',type:o.type||s.t,cat:o.cat,mode:R.mode,listen:!!o.listen});
  }else{
    R.bad++; life('bad'); setCombo(0); sfx('bad');
    if(o.partial){ award(o.partial); $('pXp').textContent='+'+R.xp+' XP'; }
    if(o.miss&&!R.misses.some(m=>m[0]===o.miss[0])) R.misses.push(o.miss);
    if(!R.timed&&!s.re) R.steps.splice(Math.min(R.steps.length,R.i+rnd(4,6)),0,Object.assign({},s,{re:true,nw:false}));
    save();
  }
}
/* tras responder: en contrarreloj se pasa sola; si no, panel con la solución */
function after(good,fb){
  if(R.timed){ R.autoT=setTimeout(()=>{ if(R) advance(); },good?170:900); return; }
  showFb(fb);
}
function nlNode(nl){
  const s=first(nl), a=artOf(s);
  if(a==='de'||a==='het') return H('span.nlw',null,H('span.art.'+a,{text:a+' '}),s.slice(a.length+1));
  return H('span.nlw',{text:s});
}
function showFb(o){
  const fb=$('fb'); fb.className='fb '+o.kind; fb.hidden=false; fb.innerHTML='';
  fb.appendChild(H('div.fbh',null,H('strong',{text:o.title}),o.speak?speakBtn(o.speak,true,0.85):null));
  if(o.nl) fb.appendChild(H('p.fbs',null,nlNode(o.nl),o.es?H('span.fbes',{text:o.es}):null));
  if(o.sol) fb.appendChild(H('p.fbs',{text:o.sol}));
  if(o.node) fb.appendChild(o.node);
  if(o.note) fb.appendChild(H('p.fbn',{text:o.note}));
  if(o.extra) fb.appendChild(H('p.fbx',{text:o.extra}));
  const b=H('button.btn.solid.big',{type:'button',text:'Seguir',onclick:advance}); fb.appendChild(b);
  R.key=e=>{ if(e.key==='Enter'){ e.preventDefault(); advance(); } };
  { const a=document.activeElement; if(a&&a.classList&&a.classList.contains('txt')) requestAnimationFrame(()=>{ try{ a.scrollIntoView({block:'nearest'}); }catch(e){} }); }
  if(o.kind==='ok'&&o.auto!==false) R.autoT=setTimeout(()=>{ if(R) advance(); },o.auto||1150);
}
function renderPowers(){
  const p=$('powers'); p.innerHTML=''; const list=[];
  if(R.fiftyFn) list.push(['fifty','50/50',()=>R.fiftyFn&&R.fiftyFn()]);
  if(R.hintFn) list.push(['hint','Pista',()=>R.hintFn&&R.hintFn()]);
  if(R.timed&&!R.t15) list.push(['time15','+15 s',()=>{ R.dur+=15000; R.t15=true; return true; }]);
  list.forEach(([id,label,fn])=>{
    const n=S.inv[id]||0; if(!n) return;
    p.appendChild(H('button.pw',{type:'button',onclick:()=>{ if(R.answered||!(S.inv[id]>0)) return; if(fn()===false) return; S.inv[id]--; save(); renderPowers(); }},label,H('b',{text:n})));
  });
  p.hidden=!p.children.length;
}
function qCard(label,prompt,sub){
  return H('div.qcard',null,label?H('span.qlabel',{text:label}):null,
    prompt==null?null:(prompt.nodeType?H('p.qprompt',null,prompt):H('p.qprompt',{text:prompt})),
    sub?H('p.qsub',{text:sub}):null);
}
function optionList(st,opts,labelFn,isRight,onPick){
  const box=H('div.opts'); let done=false;
  const choose=(o,b)=>{
    if(done||b.disabled||R.answered) return; done=true;
    const good=isRight(o);
    [...box.children].forEach((c,i)=>{ c.disabled=true; if(isRight(opts[i])) c.classList.add('ok'); });
    if(!good) b.classList.add('bad');
    onPick(o,good);
  };
  opts.forEach((o,i)=>{
    const lab=labelFn(o);
    const b=H('button.opt',{type:'button'},H('span.k',{text:i+1}),lab.nodeType?lab:H('span',{text:lab}));
    b.addEventListener('click',()=>choose(o,b)); box.appendChild(b);
  });
  R.fiftyFn=()=>{
    if(done) return false;
    const wrong=[...box.children].filter((c,i)=>!isRight(opts[i])&&!c.disabled);
    if(wrong.length<2) return false;
    shuffle(wrong).slice(0,wrong.length-1).forEach(c=>{ c.disabled=true; c.classList.add('gone'); });
    R.fiftyFn=null; return true;
  };
  R.key=e=>{ const n=+e.key; if(n>=1&&n<=opts.length){ e.preventDefault(); choose(opts[n-1],box.children[n-1]); } };
  st.appendChild(box); return box;
}
/* teclado: entre dos preguntas de escribir no se cierra. El campo contestado se bloquea sin quitarle el foco,
   y el foco pasa al campo nuevo en el mismo instante en que se cambia de pregunta. */
function lockInput(inp){ inp.dataset.locked=inp.value; inp.setAttribute('aria-readonly','true'); }
document.addEventListener('beforeinput',e=>{ const t=e.target; if(t&&t.dataset&&('locked' in t.dataset)) e.preventDefault(); },true);
document.addEventListener('input',e=>{ const t=e.target; if(t&&t.dataset&&('locked' in t.dataset)) t.value=t.dataset.locked; },true);
function focusNow(inp){ try{ inp.focus({preventScroll:true}); }catch(e){ try{ inp.focus(); }catch(e2){} } }
/* con el teclado abierto (iPhone), la partida se ajusta a la parte visible: la respuesta queda justo encima del teclado */
function fitPlay(){
  const vv=window.visualViewport, p=$('play'); if(!vv||!p) return;
  if(!p.hidden&&window.innerHeight-vv.height>120){ p.style.top=vv.offsetTop+'px'; p.style.bottom='auto'; p.style.height=vv.height+'px'; }
  else{ p.style.top=''; p.style.bottom=''; p.style.height=''; }
}
if(window.visualViewport){ visualViewport.addEventListener('resize',fitPlay); visualViewport.addEventListener('scroll',fitPlay); }
function textInput(ph,mode){
  return H('input.txt',{type:'text',autocomplete:'off',autocapitalize:'off',autocorrect:'off',spellcheck:'false',enterkeyhint:'done',placeholder:ph,inputmode:mode||null});
}
function hintOf(nl){ const w=first(nl), a=artOf(w), core=a?w.slice(a.length+1):w; return (a?a+' ':'')+core.slice(0,Math.max(1,Math.ceil(core.length/3)))+'…'; }
function distractors(w,byEs){
  const th=THEMES[w.th].w, noun=isNoun(w), val=x=>byEs?x.es:first(x.nl);
  let src=th.filter(x=>x!==w&&isNoun(x)===noun&&isPhrase(x.nl)===isPhrase(w.nl));
  if(src.length<3) src=th.filter(x=>x!==w);
  if(src.length<3) src=ALLW.filter(x=>x!==w&&x.lv===w.lv);
  const out=[]; for(const x of shuffle(src)){ if(val(x)!==val(w)&&!out.some(y=>val(y)===val(x))) out.push(x); if(out.length===3) break; }
  return out;
}

/* ---------- ejercicios ---------- */
const RENDER={};

/* elegir: español → neerlandés, neerlandés → español, o de oído */
RENDER['mc-es']=RENDER['mc-nl']=RENDER['mc-ear']=function(s,st){
  const w=s.w, toNl=s.t==='mc-es', ear=s.t==='mc-ear';
  const label=THEMES[w.th].n+(s.nw?' · palabra nueva':'');
  const card=qCard(label,ear?null:(toNl?w.es:nlNode(w.nl)),ear?'¿Qué significa lo que oyes?':null);
  if(s.nw) card.classList.add('fresh');
  if(ear) card.insertBefore(speakBtn(()=>w.nl,false,0.9),card.lastChild);
  st.appendChild(card);
  if(ear) setTimeout(()=>say(w.nl,0.9),200); else if(!toNl&&!R.timed) setTimeout(()=>autoSay(w.nl,0.9),200);
  const opts=shuffle([w,...distractors(w,!toNl)]);
  optionList(st,opts,o=>toNl?nlNode(o.nl):o.es,o=>o===w,(o,good)=>{
    card.classList.add(good?'flash-ok':'flash-bad');
    answer({good,xp:R.timed?3:5,key:s.key,cat:s.cat,miss:[first(w.nl),w.es],type:'mc',listen:ear});
    if(toNl&&!R.timed) autoSay(w.nl,0.9);
    after(good,{kind:good?'ok':'bad',title:good?(s.nw?'Esta ya te la sabías':'Correcto'):(s.nw?'Palabra nueva':'Era esta'),nl:w.nl,es:w.es,speak:w.nl,
      note:(!good&&s.nw)?'Te la vuelvo a preguntar dentro de un momento.':''});
  });
};

/* escribir: desde el español o al dictado */
RENDER.type=RENDER.ear=function(s,st){
  const w=s.w, ear=s.t==='ear', hasArt=!!artOf(first(w.nl));
  const card=qCard(THEMES[w.th].n+(ear?' · dictado':''),ear?null:w.es,ear?'Escucha y escríbelo':null);
  if(ear){
    card.insertBefore(speakBtn(()=>w.nl,false,0.9),card.lastChild);
    card.appendChild(H('button.linkbtn',{type:'button',text:'Más despacio',onclick:()=>say(w.nl,0.6)}));
    setTimeout(()=>say(w.nl,0.9),250);
  }
  const hintEl=H('p.hint'); card.appendChild(hintEl); st.appendChild(card);
  const inp=textInput(hasArt?'Con artículo: de… / het…':'En neerlandés…');
  const chk=H('button.btn.solid',{type:'button',text:'Comprobar'});
  st.appendChild(H('div.ansrow',null,inp,chk));
  const skip=H('button.linkbtn',{type:'button',text:'No lo sé'});
  const skipRow=H('div.row.center',null,skip); st.appendChild(skipRow);
  let warned=false;
  const submit=give=>{
    if(R.answered) return;
    if(!give&&!inp.value.trim()){ inp.focus(); return; }
    if(!give&&!ear&&!warned&&isSynonym(inp.value,w)){
      warned=true; hintEl.textContent='«'+inp.value.trim()+'» también vale para eso, pero busco otra palabra.'; inp.value=''; inp.focus(); return;
    }
    const j=give?{v:'bad',note:''}:judgeWord(inp.value,w.nl), good=j.v==='ok';
    lockInput(inp); inp.classList.add(good?'f-ok':'f-bad'); chk.disabled=true; skipRow.remove();
    if(hasArt&&(good||j.art)) stat('article',good);
    card.classList.add(good?'flash-ok':'flash-bad');
    answer({good,near:j.v==='near',xp:10,partial:j.v==='near'?3:0,key:s.key,cat:s.cat,miss:[first(w.nl),w.es],type:'type',listen:ear});
    autoSay(w.nl,0.9);
    showFb({kind:j.v,title:good?'Correcto':(j.v==='near'?'Casi':(give?'Era esto':'No era eso')),nl:w.nl,es:w.es,note:j.note,speak:w.nl,
      extra:(!good&&!give)?'Has escrito: «'+inp.value.trim()+'»':''});
  };
  chk.addEventListener('click',()=>submit(false)); skip.addEventListener('click',()=>submit(true));
  R.hintFn=()=>{ if(R.hinted) return false; R.hinted=true; hintEl.textContent='Empieza así: '+hintOf(w.nl); R.hintFn=null; return true; };
  R.key=e=>{ if(e.key==='Enter'){ e.preventDefault(); submit(false); } };
  focusNow(inp);
};

/* montar una frase con piezas (frases del cuaderno y expresiones largas) */
function tokens(sentence){
  return sentence.replace(/[.,!?¿¡…:]/g,'').split(/\s+/).filter(Boolean).map((w,i)=>(i===0&&!PROPER.has(w))?w.toLowerCase():w);
}
RENDER.tiles=function(s,st){
  const p=s.p||{s:s.w.es,n:first(s.w.nl),x:null,t:''};
  if(s.w&&!s.x){ const other=pick(THEMES[s.w.th].w.filter(x=>x!==s.w&&isPhrase(x.nl))); const cand=other?tokens(first(other.nl)).filter(t=>!tokens(p.n).includes(t)):[]; s.x=cand.length?pick(cand):null; }
  const extra=s.p?p.x:s.x;
  const card=qCard(s.p?PUZ[p.sub][0]:THEMES[s.w.th].n,p.s,null); st.appendChild(card);
  const words=tokens(p.n), bankWords=shuffle(words.concat(extra?[extra]:[]));
  const line=H('div.line'), bank=H('div.bank'), ph=H('span.empty',{text:'Toca las piezas en orden'});
  line.appendChild(ph);
  const chosen=[]; let tries=0;
  bankWords.forEach(wd=>{
    const t=H('button.tile',{type:'button',text:wd});
    t.addEventListener('click',()=>{
      if(R.answered||t.classList.contains('used')) return;
      t.classList.add('used'); sfx('tap');
      const c=H('button.tile',{type:'button',text:wd});
      c.addEventListener('click',()=>{ if(R.answered) return; c.remove(); chosen.splice(chosen.indexOf(c),1); t.classList.remove('used'); line.classList.remove('bad'); ph.hidden=chosen.length>0; });
      chosen.push(c); line.appendChild(c); line.classList.remove('bad'); ph.hidden=true;
    });
    bank.appendChild(t);
  });
  st.append(line,bank);
  const chk=H('button.btn.solid',{type:'button',text:'Comprobar'}), clr=H('button.btn.ghost',{type:'button',text:'Borrar'}), skip=H('button.linkbtn',{type:'button',text:'No lo sé'});
  const row=H('div.row',null,chk,clr,skip); st.appendChild(row);
  const note=H('p.trynote'); st.appendChild(note);
  clr.addEventListener('click',()=>{ if(!R.answered) chosen.slice().forEach(c=>c.click()); });
  const target=[p.n].concat(p.a||[]).map(norm);
  const finish=(good,give)=>{
    row.remove(); note.remove(); line.classList.add(good?'ok':'bad');
    if(good&&tries===0&&s.p){ life('puzFirst'); ev({t:'puzFirst'}); }
    answer({good,xp:tries===0?12:6,key:s.key,cat:s.cat,miss:[p.n,p.s],type:'tiles'});
    autoSay(p.n,0.9);
    showFb({kind:good?'ok':'bad',title:good?(tries===0?'Perfecto a la primera':'Correcto'):(give?'La frase':'Así va'),sol:p.n,extra:p.t?'Regla: '+p.t:'',speak:p.n,auto:good&&!p.t?1500:false});
  };
  const check=()=>{
    if(R.answered||!chosen.length) return;
    if(target.includes(norm(chosen.map(c=>c.textContent).join(' ')))) return finish(true);
    tries++; sfx('bad'); line.classList.add('bad');
    if(tries>=2) return finish(false);
    note.textContent=chosen.some(c=>c.textContent===extra)?'Has usado la pieza que sobra. Te queda un intento.':'Revisa el orden. Te queda un intento.';
  };
  chk.addEventListener('click',check); skip.addEventListener('click',()=>{ if(!R.answered) finish(false,true); });
  R.key=e=>{ if(e.key==='Enter'){ e.preventDefault(); check(); } };
};

/* gramática: hueco con opciones */
RENDER.gap=function(s,st){
  const g=s.g, sk=GR[g.sk], hasBlank=g.q.includes('___');
  const prompt=H('span.gapq'); let blankEl=null;
  if(hasBlank){ const parts=g.q.split('___'); blankEl=H('span.blank',{text:'  '}); prompt.append(parts[0],blankEl,parts[1]); }
  else prompt.textContent=g.q;
  const card=qCard(sk.n,prompt,g.es); st.appendChild(card);
  const full=hasBlank?g.q.replace('___',g.a):g.a;
  /* lo que se lee en voz alta: solo la parte en neerlandés */
  const spoken=hasBlank?full.split('→').pop().split(': ').pop().trim():g.a;
  const opts=shuffle([g.a,...g.o]);
  const box=optionList(st,opts,o=>o,o=>o===g.a,(o,good)=>{
    if(blankEl){ blankEl.textContent=g.a; blankEl.classList.add('ok'); }
    card.classList.add(good?'flash-ok':'flash-bad');
    answer({good,xp:8,key:s.key,cat:s.cat,miss:[full,g.es],type:'gap'});
    if(!R.timed) autoSay(spoken,0.9);
    after(good,{kind:good?'ok':'bad',title:good?'Correcto':'Era «'+g.a+'»',sol:good?null:full,speak:spoken,
      note:good?(g.tip||''):(g.tip||sk.tip),auto:good&&!g.tip?1100:(good?2200:false)});
  });
  if(opts.length===2) box.classList.add('two');
};

/* verbos: las cuatro formas */
function field(label,ph){ const i=textInput(ph); return [H('label.fld',null,H('span',{text:label}),i),i]; }
RENDER.verb=function(s,st){
  const v=s.v, sep=isSep(v);
  const card=qCard(sep?'Verbo separable':'Verbo',v[1],sep?'En pasado se separa: dos palabras':null); st.appendChild(card);
  const defs=[['Infinitivo',sep?'opbellen':'gaan'],['Pasado · ik, hij',sep?'belde op':'ging'],['Pasado · wij, zij',sep?'belden op':'gingen'],['Participio',sep?'opgebeld':'gegaan']];
  const fs=H('div.fields'); const ins=defs.map(d=>{ const [l,i]=field(d[0],d[1]); fs.appendChild(l); return i; });
  st.appendChild(fs);
  const chk=H('button.btn.solid',{type:'button',text:'Comprobar'}), skip=H('button.linkbtn',{type:'button',text:'No lo sé'});
  const row=H('div.row',null,chk,skip); st.appendChild(row);
  const answers=[v[0],v[2],v[3],v[4]];
  const submit=give=>{
    if(R.answered) return;
    let n=0; const notes=[];
    ins.forEach((inp,k)=>{ const m=give?null:eqAny(inp.value,answers[k]); if(m){ n++; const d=diaNote(inp.value,m); if(d) notes.push(d); } inp.classList.add(m?'f-ok':'f-bad'); lockInput(inp); });
    const all=n===4; row.remove();
    if(all) life('verbs');
    card.classList.add(all?'flash-ok':'flash-bad');
    answer({good:all,xp:20,partial:n*3,key:s.key,cat:s.cat,miss:[v[0]+' · '+first(v[2])+' · '+first(v[3])+' · '+v[4],v[1]],type:'verb'});
    const forms=H('div.forms',null,answers.map(a=>H('span',{text:a.replace('|',' / ')})));
    const line=answers.map(first).join(', ');
    autoSay(line,0.85);
    showFb({kind:all?'ok':(n?'near':'bad'),title:all?'Las cuatro bien':(give?'Las formas':n+' de 4 bien'),node:forms,note:notes.join(' '),extra:'Perfecto con '+v[5]+'.',speak:line,auto:all?1800:false});
  };
  chk.addEventListener('click',()=>submit(false)); skip.addEventListener('click',()=>submit(true));
  R.key=e=>{ if(e.key!=='Enter') return; e.preventDefault(); const idx=ins.indexOf(document.activeElement); if(idx>=0&&idx<3) ins[idx+1].focus(); else submit(false); };
  focusNow(ins[0]);
};

/* países: país y nacionalidad */
RENDER.country=function(s,st){
  const c=s.c;
  const card=qCard('País y nacionalidad',c[0],'El país, y cómo dirías «soy de allí»: Ik ben …'); st.appendChild(card);
  const fs=H('div.fields'); const [l1,i1]=field('País','Spanje'), [l2,i2]=field('Nacionalidad · Ik ben…','Spaans'); fs.append(l1,l2); st.appendChild(fs);
  const chk=H('button.btn.solid',{type:'button',text:'Comprobar'}), skip=H('button.linkbtn',{type:'button',text:'No lo sé'});
  const row=H('div.row',null,chk,skip); st.appendChild(row);
  const land=first(c[1]), adj=first(c[2]);
  const submit=give=>{
    if(R.answered) return;
    const m1=give?null:eqAny(i1.value,c[1]), m2=give?null:eqAny(i2.value,c[2]);
    const person=!give&&!m2&&(eqAny(i2.value,c[3])||eqAny(i2.value,c[4]));
    i1.classList.add(m1?'f-ok':'f-bad'); i2.classList.add(m2?'f-ok':'f-bad'); lockInput(i1); lockInput(i2); row.remove();
    const all=!!(m1&&m2);
    card.classList.add(all?'flash-ok':'flash-bad');
    answer({good:all,xp:12,partial:(m1||m2)?4:0,key:s.key,cat:s.cat,miss:[land+' · '+adj,c[0]],type:'country'});
    let note=[m1&&diaNote(i1.value,m1),m2&&diaNote(i2.value,m2)].filter(Boolean).join(' ');
    if(person) note='«'+i2.value.trim()+'» es la persona. Para decir tu nacionalidad se usa el adjetivo: Ik ben '+adj+'.';
    const line=land+'. Ik ben '+adj+'.';
    autoSay(line,0.9);
    showFb({kind:all?'ok':((m1||m2)?'near':'bad'),title:all?'Correcto':'La respuesta',sol:land+' · '+adj,note,
      extra:'Hij is een '+first(c[3])+'. · Zij is een '+first(c[4])+'.',speak:line,auto:all?1700:false});
  };
  chk.addEventListener('click',()=>submit(false)); skip.addEventListener('click',()=>submit(true));
  R.key=e=>{ if(e.key!=='Enter') return; e.preventDefault(); if(document.activeElement===i1) i2.focus(); else submit(false); };
  focusNow(i1);
};

/* charla con Lotte */
let hideLotte=false;
function bubble(who,text,sub,veil){
  const tx=H('div.tx',null,H('span'+(veil?'.veiled':''),{text}),sub?H('small'+(veil?'.veiled':''),{text:sub}):null);
  return who==='lotte'?H('div.bub.lotte',null,H('span.av',{text:'L'}),tx,speakBtn(text,true,0.9)):H('div.bub.me'+(who==='wrong'?'.wrong':''),{text});
}
RENDER.chat=function(s,st){
  const c=s.c;
  const tog=H('label.chk',null,H('input',{type:'checkbox',checked:hideLotte||null,onchange:e=>{ hideLotte=e.target.checked; lb.querySelectorAll('.tx>*').forEach(x=>x.classList.toggle('veiled',hideLotte&&!R.answered)); }}),' Solo de oído (ocultar el texto)');
  const log=H('div.chatlog'); const lb=bubble('lotte',c.q,c.qe,hideLotte); log.appendChild(lb);
  st.append(H('span.qlabel',{text:'Charla con Lotte'}),log,tog);
  setTimeout(()=>say(c.q,0.9),250);
  const opts=shuffle(c.o), right=c.o.find(x=>x[1])[0];
  optionList(st,opts,o=>o[0],o=>!!o[1],(o,good)=>{
    lb.querySelectorAll('.veiled').forEach(x=>x.classList.remove('veiled')); tog.remove();
    st.querySelector('.opts').remove();
    answer({good,xp:8,key:s.key,cat:s.cat,miss:[right,c.qe],type:'chat',listen:hideLotte});
    log.appendChild(bubble(good?'me':'wrong',o[0]));
    if(good){ log.appendChild(bubble('lotte',c.r)); autoSay(c.r,0.95); showFb({kind:'ok',title:'Bien respondido',auto:false,speak:c.r}); }
    else{ autoSay(right,0.9); showFb({kind:'bad',title:'Mejor así',sol:right,note:o[2],speak:right}); }
  });
};

/* números y horas, de oído */
RENDER.num=function(s,st){
  const q=s.q;
  const card=qCard(q.kind==='time'?'¿Qué hora es?':(q.kind==='year'?'Un año':'Un número'),null,'Escríbelo en cifras');
  card.insertBefore(speakBtn(()=>q.say,false,0.9),card.lastChild);
  card.appendChild(H('button.linkbtn',{type:'button',text:'Más despacio',onclick:()=>say(q.say,0.6)}));
  st.appendChild(card); setTimeout(()=>say(q.say,0.9),250);
  const inp=textInput(q.kind==='time'?'Por ejemplo 2:20':'En cifras',q.kind==='time'?'text':'numeric');
  const chk=H('button.btn.solid',{type:'button',text:'Comprobar'});
  st.appendChild(H('div.ansrow',null,inp,chk));
  const submit=()=>{
    if(R.answered) return; if(!inp.value.trim()){ inp.focus(); return; }
    let good=false; const v=inp.value.replace(/\s/g,'');
    if(q.kind==='time'){ const m=v.match(/^(\d{1,2})(?:[:.,h](\d{2}))?$/); if(m){ const hh=+m[1], mm=m[2]?+m[2]:0; good=((hh%12)*60+mm)===((q.h%12)*60+q.m); } }
    else good=v.replace(/^0+(?=\d)/,'')===q.ans;
    lockInput(inp); inp.classList.add(good?'f-ok':'f-bad'); chk.disabled=true;
    if(good&&q.kind==='time') life('times');
    answer({good,xp:q.kind==='time'?10:8,cat:q.kind==='time'?'num-time':'num-num',miss:[q.show,q.word],type:'num',listen:true});
    let extra='';
    if(q.kind==='time'&&q.m>=20&&q.m<=40) extra='Truco: «half '+hw(q.h+1)+'» es media PARA las '+hw(q.h+1)+', o sea, las '+q.h+':30.';
    showFb({kind:good?'ok':'bad',title:good?'Correcto':'Era esto',sol:q.show+'  ·  '+q.word,extra,speak:q.say,auto:good&&!extra?1300:false});
  };
  chk.addEventListener('click',submit);
  R.key=e=>{ if(e.key==='Enter'){ e.preventDefault(); submit(); } };
  focusNow(inp);
};

/* pares de sonidos: ¿cuál has oído? */
RENDER.pair=function(s,st){
  const p=s.p, target=Math.random()<0.5?0:1;
  const card=qCard('¿Cuál has oído?',null,'Dos palabras que solo cambian en una vocal o una consonante');
  card.insertBefore(speakBtn(()=>p[target],false,0.85),card.lastChild);
  st.appendChild(card); setTimeout(()=>say(p[target],0.85),250);
  const box=optionList(st,[0,1],i=>H('span.pairopt',null,H('b',{text:p[i]}),H('small',{text:p[i+2]})),i=>i===target,(i,good)=>{
    box.classList.add('shown');
    answer({good,xp:5,key:s.key,cat:s.cat,miss:[p[0]+' / '+p[1],p[2]+' / '+p[3]],type:'pair',listen:true});
    const again=H('div.row.center',null,H('button.btn.ghost',{type:'button',text:'Oír «'+p[0]+'»',onclick:()=>say(p[0],0.8)}),H('button.btn.ghost',{type:'button',text:'Oír «'+p[1]+'»',onclick:()=>say(p[1],0.8)}));
    after(good,{kind:good?'ok':'bad',title:good?'Buen oído':'Era «'+p[target]+'»',sol:p[0]+' = '+p[2]+'  ·  '+p[1]+' = '+p[3],node:again,auto:false});
  });
  box.classList.add('two','pairs');
};

/* ¿de o het? */
RENDER.dehet=function(s,st){
  const w=s.w, art=w.nl.split(' ')[0], word=w.nl.slice(art.length+1);
  const card=qCard(THEMES[w.th].n,word,w.es); st.appendChild(card);
  const g=H('div.dehet'); let locked=false;
  const choose=(a,b)=>{
    if(locked||R.answered) return; locked=true;
    const good=a===art;
    b.classList.add(good?'ok':'bad');
    if(!good){ [...g.children].forEach(c=>{ if(c.dataset.a===art) c.classList.add('ok'); }); card.querySelector('.qprompt').replaceChildren(nlNode(w.nl)); }
    answer({good,xp:R.timed?2:3,key:s.key,cat:s.cat,miss:[w.nl,w.es],type:'dehet'});
    if(R.timed||good) R.autoT=setTimeout(()=>{ if(R) advance(); },good?(R.timed?160:420):950);
    else showFb({kind:'bad',title:'Es «'+art+'»',nl:w.nl,es:w.es,speak:w.nl});
  };
  ['de','het'].forEach(a=>{ const b=H('button.dh.'+a,{type:'button',text:a,'data-a':a}); b.addEventListener('click',()=>choose(a,b)); g.appendChild(b); });
  st.appendChild(g);
  R.key=e=>{ const k=e.key.toLowerCase(); if(k==='d'||k==='arrowleft'){ e.preventDefault(); choose('de',g.children[0]); } if(k==='h'||k==='arrowright'){ e.preventDefault(); choose('het',g.children[1]); } };
};

/* ---------- final de la partida ---------- */
function endRun(quit){
  stopTimer(); hush();
  { const a=document.activeElement; if(a&&a.blur&&a!==document.body) a.blur(); }
  if(!R){ leavePlay(); return; }
  clearTimeout(R.autoT);
  const run=R; R=null;
  const done=run.ok+run.bad, completed=!quit;
  if(quit&&done<3){ save(true); leavePlay(); return; }
  const secs=Math.round((Date.now()-run.t0)/1000), L=logDay();
  L.t+=secs; life('secs',secs); L.m=mastered(ALLW);
  const hr=new Date().getHours(); S.life.h=S.life.h||{}; S.life.h[hr]=(S.life.h[hr]||0)+done;
  let record=null;
  if(completed){
    if(done>=10&&!run.timed) S.pend=Math.min(3,(S.pend||0)+1);      /* cofre ganado: si no se abre ahora, espera en el inicio */
    if(run.mode==='daily'){ S.day.sess++; life('sessions'); }
    if(run.mode==='chat'&&run.bad===0&&done>=5) life('chatP');
    if(run.mode==='blitz'||run.mode==='dehet'){
      if(run.ok>(S.best[run.mode]||0)){ S.best[run.mode]=run.ok; record=run.ok; }
      if(run.mode==='blitz') ev({t:'blitz',v:run.ok});
    }
    ev({t:'session',mode:run.mode,acc:done?run.ok/done:0,n:done});
  }
  save(true); checkAch(true);
  showEnd(run,{completed,done,secs,record});
}
function showEnd(run,info){
  $('play').hidden=true;
  const e=$('end'); e.hidden=false; e.innerHTML=''; e.scrollTop=0;
  const acc=info.done?Math.round(run.ok/info.done*100):0;
  const box=H('div.endbox');
  box.appendChild(H('p.endlabel',{text:info.completed?(run.mode==='daily'?'Sesión completada':run.title+' · terminado'):run.title+' · a medias'}));
  const num=H('span.n',{text:'+0'}); box.appendChild(H('div.endxp',null,num,H('small',{text:'XP'})));
  const t0=performance.now(), dur=700;
  (function up(now){ const k=clamp((now-t0)/dur,0,1); num.textContent='+'+Math.round(run.xp*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(up); })(t0);
  const chips=H('div.chips');
  const chip=(t,cls)=>chips.appendChild(H('span.chip'+(cls?'.'+cls:''),{text:t}));
  chip(run.ok+' bien · '+run.bad+' mal'); if(info.done) chip(acc+' % de acierto');
  if(run.maxCombo>=3) chip('Mejor combo ×'+run.maxCombo);
  if(run.news) chip(run.news+(run.news===1?' palabra nueva':' palabras nuevas'));
  if(run.crits) chip(run.crits+(run.crits===1?' golpe crítico':' golpes críticos'),'gold');
  if(run.coins) chip('+'+run.coins+' stroopwafels','coin');
  if(info.record) chip('Nuevo récord: '+info.record,'gold'); else if(S.best[run.mode]) chip('Tu récord: '+S.best[run.mode]);
  if(run.goal) chip('Racha: '+S.streak.n+(S.streak.n===1?' día':' días'),'gold');
  if(run.levelUp!=null) chip('Nivel nuevo: '+LEVELS[run.levelUp][1],'gold');
  box.appendChild(chips);
  /* recompensas pendientes: se abren solas, una detrás de otra */
  const queue=[];
  if(S.pend>0) queue.push(cb=>showChest('session','Cofre de la sesión',cb));
  if(S.mis.chest) queue.push(cb=>{ S.mis.chest=false; save(); showChest('missions','Cofre de las tres misiones',cb); });
  if(S.day.done&&!S.day.wheel) queue.push(cb=>showWheel(cb));
  const runQ=i=>{ if(i>=queue.length){ hud(); return; } setTimeout(()=>{ if(!$('end').hidden) queue[i](()=>runQ(i+1)); },i?350:900); };
  runQ(0);
  if(run.newWords.length){
    box.appendChild(H('h2.endh',{text:run.newWords.length===1?'La palabra nueva de hoy':'Las '+run.newWords.length+' palabras nuevas de hoy'}));
    const ns=H('div.misses');
    run.newWords.forEach(w=>ns.appendChild(H('div.miss',null,H('div',null,H('div.a',null,nlNode(w.nl)),H('div.b',{text:w.es})),speakBtn(w.nl,true,0.85))));
    box.appendChild(ns);
  }
  if(run.misses.length){
    box.appendChild(H('h2.endh',{text:'Para repasar'}));
    const ms=H('div.misses');
    run.misses.slice(0,20).forEach(m=>ms.appendChild(H('div.miss',null,H('div',null,H('div.a',{text:m[0]}),H('div.b',{text:m[1]})),speakBtn(m[0].split(' · ')[0],true,0.85))));
    box.appendChild(ms);
  }
  const again=run.mode==='daily'?'Otra sesión':'Otra ronda';
  box.appendChild(H('div.endbtns',null,
    H('button.btn.solid.big',{type:'button',text:'Volver al inicio',onclick:()=>{ leavePlay(); showTab('home'); }}),
    H('button.btn.big',{type:'button',text:again,onclick:()=>{ $('end').hidden=true; play(run.mode,run.arg); }})));
  e.appendChild(box);
}
document.addEventListener('keydown',e=>{ if(e.repeat) return; if(R&&!$('play').hidden&&R.key&&$('modal').hidden) R.key(e); });
