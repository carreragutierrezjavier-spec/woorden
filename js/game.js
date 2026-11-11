'use strict';
/* Woorden · recompensas: XP, stroopwafels, misiones, logros, azulejos, cofres, ruleta, tienda y puntos débiles */

const COIN_SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M6.5 9.5h11M6.5 14.5h11M9.5 6.5v11M14.5 6.5v11"/></svg>';
const FLAME_SVG='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1 3.2-.5 5.1-2 6.8C8.5 10.5 7 12.2 7 15a5 5 0 0 0 10 0c0-2-1-3.6-2-4.6.2 1.6-.4 2.9-1.6 3.4.5-2.6-.4-5.4-1.4-7.2C11.4 5 11.9 3.4 12 2z"/></svg>';
const CUP_SVG='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 3h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 14.9V17h3v3H8v-3h3v-2.1A5 5 0 0 1 8.3 12H8a4 4 0 0 1-4-4V5h3V3zm10 4v3a2 2 0 0 0 1-1.7V7h-1zM6 7v1.3A2 2 0 0 0 7 10V7H6z"/></svg>';
const POWER_NAMES={fifty:'50/50',hint:'Pista',time15:'+15 segundos',freeze:'Escudo de racha'};

/* ---------- avisos ---------- */
const TQ=[]; let tBusy=false;
function toast(t,kind){ TQ.push([t,kind]); if(!tBusy) nextToast(); }
function nextToast(){
  const x=TQ.shift(); if(!x){ tBusy=false; return; }
  tBusy=true;
  const f=H('div.toast'+(x[1]?'.'+x[1]:''),{text:x[0]}); $('toasts').appendChild(f);
  setTimeout(()=>{ f.classList.add('out'); setTimeout(()=>{ f.remove(); nextToast(); },220); },2100);
}
function fly(t,crit){ const f=H('span.fly'+(crit?'.crit':''),{text:t}); document.body.appendChild(f); setTimeout(()=>f.remove(),950); }

/* ---------- cabecera ---------- */
function hud(){
  ensureDay();
  const i=levelOf(S.xp), lo=LEVELS[i][0], hi=LEVELS[i+1]?LEVELS[i+1][0]:lo;
  $('lvlName').textContent=LEVELS[i][1];
  $('lvlNum').textContent='Nivel '+(i+1);
  $('xpFill').style.width=(LEVELS[i+1]?clamp((S.xp-lo)/(hi-lo)*100,0,100):100)+'%';
  const n=streakNow(); $('streakN').textContent=n; $('streak').classList.toggle('off',!n);
  $('streak').classList.toggle('today',S.streak.last===T());
  $('coinN').textContent=S.coins||0;
  if(typeof homeRing==='function') homeRing();
}
function addCoins(n){
  n=Math.round(n); if(n<=0) return;
  S.coins=(S.coins||0)+n; if(R) R.coins+=n; life('coins',n); save();
  $('coinN').textContent=S.coins;
  const c=$('coins'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
}
function award(n,crit){
  n=Math.round(n); if(n<=0) return 0;
  ensureDay(); const lv0=levelOf(S.xp);
  S.xp+=n; S.day.xp+=n; logDay().x+=n; if(R) R.xp+=n;
  const lv1=levelOf(S.xp);
  if(lv1>lv0){ addCoins(50); sfx('level'); toast('Nivel '+(lv1+1)+': '+LEVELS[lv1][1]+' · +50 stroopwafels','gold'); if(R) R.levelUp=lv1; }
  if(!S.day.done&&S.day.xp>=goalXp()){
    const t=T();
    S.day.done=true;
    S.streak.n=(S.streak.last===t-1)?S.streak.n+1:(S.streak.last===t?S.streak.n:1);
    S.streak.last=t; S.life.maxStreak=Math.max(S.life.maxStreak||0,S.streak.n);
    toast('Objetivo del día cumplido · racha de '+S.streak.n+(S.streak.n===1?' día':' días'),'gold');
    if(R) R.goal=true;
  }
  save(); hud(); fly('+'+n,crit);
  return n;
}

/* ---------- dónde fallas ---------- */
function stat(cat,good){
  if(!cat) return;
  const s=S.stats[cat]||(S.stats[cat]={ok:0,bad:0});
  if(good) s.ok++; else s.bad++;
  if(s.ok+s.bad>40){ s.ok*=0.8; s.bad*=0.8; }
}
const PTIPS={
 basis:'En las preguntas, el verbo va justo detrás de la palabra interrogativa: Waar woon je? Hoe oud ben je? Y la edad va con zijn, nunca con hebben.',
 gustos:'graag (me gusta) → liever (prefiero) → het liefst (lo que más). Siempre detrás del verbo conjugado: Ik zwem graag.',
 opinar:'Tras dat, omdat u of, todos los verbos al final. Y hay fórmulas fijas: het met iemand eens zijn, gelijk hebben.',
 conectores:'Si la frase empieza por algo que no es el sujeto (daarom, eigenlijk, una subordinada…), el verbo va justo después. want, maar, en y of no cambian nada.',
 separ:'En presente y pasado de frase principal, el prefijo se va al final (ik bel je op). Con modal, en subordinada y en participio vuelve a pegarse: opbellen, opbel, opgebeld. Con te, en medio: op te bellen.',
 neg:'niet va hacia el final, pero delante de: el prefijo separable, el infinitivo o participio, los adjetivos y los complementos con preposición. Delante de un sustantivo sin artículo definido, geen.',
 reflex:'El pronombre reflexivo va justo detrás del verbo conjugado; con inversión, detrás del sujeto: Morgen voel ik me beter. El perfecto, siempre con hebben.',
 orden:'El verbo conjugado va siempre en segundo lugar. Si empiezas por tiempo, lugar o un conector como daarom, el sujeto pasa detrás del verbo. En el medio: tiempo, modo, lugar.',
 subord:'Tras dat, omdat, als, toen, hoewel, of, voordat… todos los verbos van al final. Si la subordinada va primero, la principal empieza por el verbo.',
 tiempos:'Perfecto = hebben/zijn en segundo lugar + participio al final. Para contar una historia paso a paso, imperfecto. El pluscuamperfecto, solo para lo que pasó antes.',
 cuant:'alles (cosas) · alle + plural · allemaal (suelto) · iedereen (personas, verbo en singular) · de hele dag (entero) · elke dag (cada).'
};
const CATS={
 dehet:{label:'Artículos de / het',tip:'Lo que no falla: todos los diminutivos (-je) son het; los plurales, siempre de; casi todo en -ing, -heid y -tie es de; en -um, -ment y las que empiezan por ge- o be- suelen ser het.',go:()=>play('dehet')},
 article:{label:'Te comes el artículo',tip:'Al escribir pones la palabra pelada o con el artículo cambiado. Apréndelas siempre pegadas: no «huis», sino «het huis». Un par de rondas de ¿De o het? lo arreglan.',go:()=>play('dehet')},
 'verbs-irr':{label:'Verbos irregulares',tip:'Van por familias de vocal: ij→ee (schrijven, schreef), ie→oo (vliegen, vloog), i→o (drinken, dronk), e→a (geven, gaf). Apréndelos de tres en tres y en voz alta.',go:()=>play('verbs','irr')},
 'verbs-reg':{label:'Verbos regulares',tip:'Regla ’t kofschip: si la raíz acaba en t, k, f, s, ch o p, va -te / -t (werkte, gewerkt). Si no, -de / -d (woonde, gewoond).',go:()=>play('verbs','reg')},
 'verbs-sep':{label:'Verbos separables',tip:'En pasado se separan (ik belde op) y en el participio ge- va en medio (opgebeld). El prefijo lleva el acento.',go:()=>play('verbs','sep')},
 countries:{label:'Países y nacionalidades',tip:'Para tu nacionalidad usa el adjetivo: Ik ben Spaans, no Spanjaard. Casi todos acaban en -s o en -isch.',go:()=>play('countries')},
 chat:{label:'Entender preguntas',tip:'Escucha la pregunta entera y fíjate en la palabra interrogativa: hoe lang (cuánto tiempo) no es hoe oud (qué edad) ni hoeveel (cuántos).',go:()=>play('chat')},
 'num-time':{label:'Las horas',tip:'half drie = 2:30, media PARA las tres. tien voor half drie = 2:20. kwart voor drie = 2:45.',go:()=>play('numbers')},
 'num-num':{label:'Los números',tip:'La unidad va primero: zevenenveertig = siete-y-cuarenta = 47. Las decenas están al final de la palabra.',go:()=>play('numbers')},
 pairs:{label:'Vocales largas y cortas',tip:'Una vocal escrita doble suena larga (maan), una sola en sílaba cerrada suena corta y seca (man). Y uu, oe, eu y ui son cuatro sonidos distintos: huur, hoer, deur, huis.',go:()=>play('pairs')}
};
function catInfo(cat){
  if(CATS[cat]) return CATS[cat];
  if(cat.slice(0,2)==='w:'){
    const k=cat.slice(2); if(!THEMES[k]) return null;
    return {label:'Vocabulario · '+THEMES[k].n,tip:'Haz este tema en Practicar. Las palabras que falles vuelven al día siguiente, y luego cada vez más espaciadas hasta que se te queden.',go:()=>play('theme',k)};
  }
  if(cat.slice(0,2)==='g:'){
    const k=cat.slice(2); if(!GR[k]) return null;
    return {label:GR[k].n,tip:GR[k].tip,go:()=>play('gram',k)};
  }
  if(cat.slice(0,4)==='puz:'){
    const k=cat.slice(4); if(!PUZ[k]) return null;
    return {label:'Frases · '+PUZ[k][0],tip:PTIPS[k]||'',go:()=>play('puzzle',k)};
  }
  return null;
}
function weaknesses(){
  return Object.entries(S.stats).map(([cat,s])=>{ const n=s.ok+s.bad; return {cat,n,pct:s.bad/Math.max(1,n),rate:(s.bad+1)/(n+2)}; })
    .filter(x=>x.n>=5&&x.rate>=0.25&&catInfo(x.cat)).sort((a,b)=>b.rate-a.rate).slice(0,3)
    .map(x=>Object.assign(x,{label:catInfo(x.cat).label}));
}

/* ---------- misiones del día ---------- */
const MISSIONS=[
 {id:'sess',txt:'Completa la sesión de hoy',n:1,c:30,m:e=>e.t==='session'&&e.mode==='daily',go:()=>play('daily')},
 {id:'combo10',txt:'Haz un combo de 10',n:1,c:35,m:e=>e.t==='combo'&&e.v===10},
 {id:'combo20',txt:'Haz un combo de 20',n:1,c:50,m:e=>e.t==='combo'&&e.v===20},
 {id:'type12',txt:'Escribe bien 12 palabras',n:12,c:35,m:e=>e.t==='ok'&&e.type==='type'},
 {id:'gap15',txt:'Acierta 15 de gramática',n:15,c:35,m:e=>e.t==='ok'&&e.type==='gap'},
 {id:'new6',txt:'Aprende 6 palabras nuevas',n:6,c:30,m:e=>e.t==='new'},
 {id:'blitz25',txt:'Haz 25 aciertos en un Blitz',n:1,c:45,m:e=>e.t==='blitz'&&e.v>=25,go:()=>play('blitz')},
 {id:'verbs4',txt:'Clava 4 verbos con sus cuatro formas',n:4,c:40,m:e=>e.t==='ok'&&e.type==='verb',go:()=>play('verbs','all')},
 {id:'puz4',txt:'Monta 4 frases a la primera',n:4,c:35,m:e=>e.t==='puzFirst',go:()=>play('puzzle')},
 {id:'listen8',txt:'Acierta 8 de oído',n:8,c:35,m:e=>e.t==='ok'&&e.listen,go:()=>play('dictation')},
 {id:'crit1',txt:'Consigue un golpe crítico',n:1,c:25,m:e=>e.t==='crit'},
 {id:'acc90',txt:'Termina una sesión con un 90 % de acierto',n:1,c:45,m:e=>e.t==='session'&&e.acc>=0.9&&e.n>=15},
 {id:'weak',txt:'',n:10,c:50,m:()=>false}
];
const MIS_BONUS=60;
const mDef=id=>MISSIONS.find(m=>m.id===id);
const mText=ms=>ms.id==='weak'?'Acierta 10 en tu punto débil: '+ms.label:mDef(ms.id).txt;
function ensureMissions(){
  const t=T(); if(S.mis&&S.mis.d===t&&S.mis.list.length) return;
  const w=weaknesses()[0];
  const pool=MISSIONS.filter(m=>m.id!=='weak'&&m.id!=='sess').sort((a,b)=>hash(t+a.id)-hash(t+b.id));
  const list=[{id:'sess',p:0,done:false}];
  if(w) list.push({id:'weak',p:0,done:false,cat:w.cat,label:w.label});
  pool.slice(0,3-list.length).forEach(m=>list.push({id:m.id,p:0,done:false}));
  S.mis={d:t,list,bonus:false}; save();
}
function missionGo(ms){
  if(ms.id==='weak'){ const i=catInfo(ms.cat); if(i) i.go(); return; }
  const d=mDef(ms.id); if(d&&d.go) d.go(); else play('daily');
}
function ev(e){
  ensureMissions();
  let changed=false;
  S.mis.list.forEach(ms=>{
    if(ms.done) return; const d=mDef(ms.id); if(!d) return;
    const inc=ms.id==='weak'?(e.t==='ok'&&(e.cat===ms.cat||(ms.cat==='article'&&e.cat==='dehet'))):d.m(e);
    if(!inc) return; ms.p++; changed=true;
    if(ms.p>=d.n){ ms.done=true; life('mis'); addCoins(d.c); toast('Misión cumplida · +'+d.c+' stroopwafels','gold'); }
  });
  if(changed&&!S.mis.bonus&&S.mis.list.every(m=>m.done)){ S.mis.bonus=true; S.mis.chest=true; toast('Las tres misiones cumplidas: tienes un cofre esperando','gold'); }
  if(changed) save();
  checkAch();
}

/* ---------- logros ---------- */
const lf=k=>()=>S.life[k]||0;
const nWordsSeen=()=>learned(ALLW), nWordsDone=()=>mastered(ALLW);
const ACH=[
 {id:'ok100',n:'Primeros pasos',d:'100 respuestas correctas',c:30,t:100,v:lf('ok')},
 {id:'ok1000',n:'Máquina',d:'1.000 respuestas correctas',c:120,t:1000,v:lf('ok')},
 {id:'ok5000',n:'Imparable',d:'5.000 respuestas correctas',c:300,t:5000,v:lf('ok')},
 {id:'ok20000',n:'Veinte mil leguas',d:'20.000 respuestas correctas',c:800,t:20000,v:lf('ok')},
 {id:'str3',n:'Constancia',d:'Racha de 3 días',c:40,t:3,v:lf('maxStreak')},
 {id:'str7',n:'Una semana entera',d:'Racha de 7 días',c:90,t:7,v:lf('maxStreak')},
 {id:'str30',n:'Hábito de hierro',d:'Racha de 30 días',c:400,t:30,v:lf('maxStreak')},
 {id:'str100',n:'Cien días',d:'Racha de 100 días',c:1000,t:100,v:lf('maxStreak')},
 {id:'str365',n:'Un año entero',d:'Racha de 365 días',c:3650,t:365,v:lf('maxStreak')},
 {id:'cmb15',n:'En racha',d:'Combo de 15',c:50,t:15,v:lf('maxCombo')},
 {id:'cmb30',n:'Intocable',d:'Combo de 30',c:150,t:30,v:lf('maxCombo')},
 {id:'cmb50',n:'Ni una',d:'Combo de 50',c:300,t:50,v:lf('maxCombo')},
 {id:'blz20',n:'Rayo',d:'20 aciertos en un Blitz',c:50,t:20,v:()=>S.best.blitz||0},
 {id:'blz35',n:'Relámpago',d:'35 aciertos en un Blitz',c:150,t:35,v:()=>S.best.blitz||0},
 {id:'dh30',n:'Ni de ni het',d:'30 aciertos en una ronda de ¿De o het?',c:80,t:30,v:()=>S.best.dehet||0},
 {id:'vb25',n:'Conjugador',d:'25 verbos con las cuatro formas bien',c:70,t:25,v:lf('verbs')},
 {id:'vbAll',n:'Rey de los verbos',d:'Dominar los '+VERBS.length+' verbos',c:600,t:VERBS.length,v:()=>mastered(VERBS,v=>'v:'+v[0])},
 {id:'land',n:'Ciudadano del mundo',d:'Dominar los '+LANDEN.length+' países',c:250,t:LANDEN.length,v:()=>mastered(LANDEN,l=>'c:'+l[1])},
 {id:'chat5',n:'Charlatán',d:'5 charlas con Lotte sin fallar',c:90,t:5,v:lf('chatP')},
 {id:'puz30',n:'Arquitecto',d:'30 frases montadas a la primera',c:90,t:30,v:lf('puzFirst')},
 {id:'puz150',n:'Maestro de obras',d:'150 frases montadas a la primera',c:250,t:150,v:lf('puzFirst')},
 {id:'time20',n:'Reloj holandés',d:'20 horas acertadas de oído',c:60,t:20,v:lf('times')},
 {id:'s100',n:'Cien palabras',d:'100 palabras vistas',c:60,t:100,v:nWordsSeen},
 {id:'s500',n:'Quinientas',d:'500 palabras vistas',c:200,t:500,v:nWordsSeen},
 {id:'s1000',n:'Mil palabras',d:'1.000 palabras vistas',c:400,t:1000,v:nWordsSeen},
 {id:'m100',n:'Cien dominadas',d:'100 palabras dominadas',c:120,t:100,v:nWordsDone},
 {id:'m500',n:'Medio diccionario',d:'500 palabras dominadas',c:400,t:500,v:nWordsDone},
 {id:'m1000',n:'Diccionario andante',d:'1.000 palabras dominadas',c:900,t:1000,v:nWordsDone},
 {id:'g100',n:'Gramático',d:'100 ejercicios de gramática dominados',c:150,t:100,v:()=>mastered(ALLG)},
 {id:'gAll',n:'Taalunie',d:'Toda la gramática dominada',c:700,t:ALLG.length,v:()=>mastered(ALLG)},
 {id:'lvl5',n:'Buurman',d:'Llegar al nivel 5',c:100,t:5,v:()=>levelOf(S.xp)+1},
 {id:'lvl10',n:'Kaaskop',d:'Llegar al nivel 10',c:400,t:10,v:()=>levelOf(S.xp)+1},
 {id:'lvl15',n:'Koning van de polder',d:'Llegar al nivel máximo',c:1500,t:15,v:()=>levelOf(S.xp)+1},
 {id:'mis20',n:'Cumplidor',d:'20 misiones diarias',c:100,t:20,v:lf('mis')},
 {id:'mis100',n:'Misionero',d:'100 misiones diarias',c:400,t:100,v:lf('mis')},
 {id:'tg10',n:'Coleccionista',d:'10 azulejos distintos',c:80,t:10,v:()=>Object.keys(S.tiles).length},
 {id:'tg25',n:'Media pared',d:'25 azulejos distintos',c:200,t:25,v:()=>Object.keys(S.tiles).length},
 {id:'tgAll',n:'La pared entera',d:'Todos los azulejos',c:1000,t:TEGELS.length,v:()=>Object.keys(S.tiles).length},
 {id:'crit25',n:'Con suerte',d:'25 golpes críticos',c:80,t:25,v:lf('crits')},
 {id:'ses10',n:'Ya es costumbre',d:'10 sesiones diarias completadas',c:60,t:10,v:lf('sessions')},
 {id:'ses100',n:'Cien sesiones',d:'100 sesiones diarias completadas',c:500,t:100,v:lf('sessions')},
 {id:'shop',n:'De compras',d:'Comprar algo en la tienda',c:20,t:1,v:lf('bought')}
];
let achT=0;
function checkAch(force){
  const now=Date.now(); if(!force&&now-achT<1500) return; achT=now;
  const got=[];
  ACH.forEach(a=>{ if(!S.ach[a.id]&&a.v()>=a.t){ S.ach[a.id]=T(); got.push(a); addCoins(a.c); } });
  if(!got.length) return;
  const sum=got.reduce((x,a)=>x+a.c,0);
  toast(got.length===1?'Logro: '+got[0].n+' · +'+sum+' stroopwafels':got.length+' logros nuevos · +'+sum+' stroopwafels','gold');
  save();
}

/* ---------- azulejos ---------- */
const RAR=['','Común','Raro','Épico','Legendario'], RARW=[0,60,28,10,2], DUPE=[0,5,15,40,150];
function drawTile(){
  const fresh=TEGELS.filter(t=>!S.tiles[t.id]);
  const pool=(fresh.length&&Math.random()<0.8)?fresh:TEGELS;
  let x=Math.random()*pool.reduce((a,t)=>a+RARW[t.r],0);
  for(const t of pool){ x-=RARW[t.r]; if(x<=0) return t; }
  return pool[pool.length-1];
}
function grantTile(t){
  const dupe=!!S.tiles[t.id];
  if(dupe) addCoins(DUPE[t.r]); else S.tiles[t.id]=T();
  life('tiles'); save();
  return {tile:t,dupe,coins:dupe?DUPE[t.r]:0};
}
const CORNER='<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 2c14 0 22 4 26 12-6-3-11-3-15 0 5 1 8 4 9 9-4-4-8-5-12-3 1-7-2-12-8-18z" fill="currentColor"/><circle cx="6" cy="6" r="2.2" fill="currentColor"/></svg>';
function tileEl(t,opts){
  opts=opts||{};
  const locked=opts.locked;
  const e=H('div.tegel.r'+t.r+(locked?'.locked':'')+(opts.big?'.big':''));
  ['tl','tr','bl','br'].forEach(c=>e.appendChild(H('span.orn.'+c,{html:CORNER})));
  e.appendChild(H('p.tg-nl',{text:locked?'?':t.nl}));
  if(opts.big&&!locked){
    if(t.lit) e.appendChild(H('p.tg-lit',{text:'Literal: '+t.lit}));
    e.appendChild(H('p.tg-es',{text:t.es}));
  }
  return e;
}

/* ---------- ventana flotante ---------- */
function openModal(node,opts){
  const m=$('modal'); m.innerHTML=''; m.hidden=false; m.className='modal'+(opts&&opts.cls?' '+opts.cls:'');
  const box=H('div.mbox',null,node); m.appendChild(box);
  m.onclick=e=>{ if(e.target===m&&!(opts&&opts.sticky)) closeModal(); };
  return box;
}
function closeModal(){ const m=$('modal'); m.hidden=true; m.innerHTML=''; if(typeof afterModal==='function'){ const f=afterModal; afterModal=null; f(); } }
let afterModal=null;

/* ---------- cofres ---------- */
function chestLoot(kind){
  ensureDay();
  const loot={coins:kind==='missions'?MIS_BONUS:rnd(15,40),tile:null,power:null};
  if(kind==='missions'||S.day.chest===0||Math.random()<0.3) loot.tile=grantTile(drawTile());
  if(Math.random()<(kind==='missions'?0.5:0.2)){ const p=pick(['fifty','hint','time15']); S.inv[p]=(S.inv[p]||0)+1; loot.power=p; }
  if(kind==='session') S.pend=Math.max(0,(S.pend||0)-1);
  addCoins(loot.coins); S.day.chest++; life('chests'); save();
  return loot;
}
const CHEST_SVG='<svg viewBox="0 0 120 100" aria-hidden="true"><g class="lid"><path d="M12 44V30a18 18 0 0 1 18-18h60a18 18 0 0 1 18 18v14z" fill="var(--delft)"/><path d="M12 44V30a18 18 0 0 1 18-18h8v32zM82 12h8a18 18 0 0 1 18 18v14H82z" fill="var(--cobalt)"/><rect x="52" y="12" width="16" height="32" fill="var(--oranje)"/></g><rect x="12" y="44" width="96" height="46" rx="6" fill="var(--delft)"/><rect x="12" y="44" width="26" height="46" rx="6" fill="var(--cobalt)"/><rect x="82" y="44" width="26" height="46" rx="6" fill="var(--cobalt)"/><rect x="52" y="44" width="16" height="46" fill="var(--oranje)"/><circle cx="60" cy="58" r="7" fill="var(--glaze)"/><rect x="58" y="57" width="4" height="10" rx="2" fill="var(--cobalt)"/></svg>';
function showChest(kind,title,onDone){
  const wrap=H('div.chestbox');
  const h=H('p.mtitle',{text:title||'Cofre de la sesión'});
  const chest=H('button.chest',{type:'button',html:CHEST_SVG,'aria-label':'Abrir el cofre'});
  const hint=H('p.msub',{text:'Tócalo para abrirlo'});
  const lootBox=H('div.loot'); const btn=H('button.btn.solid.big',{type:'button',text:'Seguir',hidden:true,onclick:()=>{ closeModal(); }});
  wrap.append(h,chest,hint,lootBox,btn);
  afterModal=onDone||null;
  openModal(wrap,{sticky:true});
  let opened=false;
  chest.addEventListener('click',()=>{
    if(opened) return; opened=true;
    const loot=chestLoot(kind);
    chest.classList.add('open'); sfx('chest'); hint.hidden=true;
    const rows=[];
    rows.push(H('div.lootrow',null,H('span.lic',{html:COIN_SVG}),H('span',{text:'+'+loot.coins+' stroopwafels'})));
    if(loot.power) rows.push(H('div.lootrow',null,H('span.lic.pw',{text:'★'}),H('span',{text:'Comodín: '+POWER_NAMES[loot.power]})));
    rows.forEach((r,i)=>setTimeout(()=>lootBox.appendChild(r),350+i*250));
    if(loot.tile){
      setTimeout(()=>{
        const t=loot.tile.tile;
        lootBox.appendChild(H('p.lootlbl',{text:loot.tile.dupe?'Azulejo repetido · +'+loot.tile.coins+' stroopwafels':'Azulejo nuevo · '+RAR[t.r]}));
        const te=tileEl(t,{big:true}); te.classList.add('pop'); lootBox.appendChild(te);
        lootBox.appendChild(H('div.row.center',null,speakBtn(t.nl,true,0.85)));
        if(t.r>=3) sfx('crit');
      },350+rows.length*250+150);
    }
    setTimeout(()=>{ btn.hidden=false; },900+rows.length*250+(loot.tile?500:0));
    hud();
  });
}

/* ---------- ruleta del objetivo diario ---------- */
const WHEEL=[{l:'25',c:25,w:22},{l:'Azulejo',tile:1,w:13},{l:'40',c:40,w:20},{l:'Comodín',power:1,w:12},{l:'60',c:60,w:12},{l:'30',c:30,w:10},{l:'Azulejo',tile:1,w:8},{l:'150',c:150,w:3}];
function wheelSvg(){
  const n=WHEEL.length, a=360/n, r=96, cx=100, cy=100, P=(deg,rad)=>{ const t=(deg-90)*Math.PI/180; return [cx+rad*Math.cos(t),cy+rad*Math.sin(t)]; };
  let s='<svg viewBox="0 0 200 200" aria-hidden="true">';
  WHEEL.forEach((seg,i)=>{
    const [x1,y1]=P(i*a,r), [x2,y2]=P((i+1)*a,r), [tx,ty]=P((i+0.5)*a,62);
    const fill=seg.c>=150?'var(--oranje)':(seg.tile?'var(--delft)':(i%2?'var(--delft-soft)':'var(--glaze)'));
    const ink=(seg.c>=150||seg.tile)?'#fff':'var(--cobalt)';
    s+='<path d="M'+cx+' '+cy+'L'+x1.toFixed(2)+' '+y1.toFixed(2)+'A'+r+' '+r+' 0 0 1 '+x2.toFixed(2)+' '+y2.toFixed(2)+'Z" fill="'+fill+'" stroke="var(--cobalt)" stroke-width="1.5"/>';
    s+='<text x="'+tx.toFixed(1)+'" y="'+ty.toFixed(1)+'" fill="'+ink+'" font-size="'+(seg.l.length>3?10.5:16)+'" font-weight="600" text-anchor="middle" dominant-baseline="middle">'+seg.l+'</text>';
  });
  return s+'<circle cx="100" cy="100" r="13" fill="var(--cobalt)"/><circle cx="100" cy="100" r="5" fill="var(--oranje)"/></svg>';
}
function showWheel(onDone){
  ensureDay(); if(S.day.wheel){ if(onDone) onDone(); return; }
  const wrap=H('div.wheelbox');
  const disc=H('div.wheel',{html:wheelSvg()});
  const out=H('div.loot');
  const btn=H('button.btn.solid.big',{type:'button',text:'Girar'});
  wrap.append(H('p.mtitle',{text:'La ruleta del día'}),H('p.msub',{text:'Has cumplido el objetivo de hoy. Una tirada.'}),
    H('div.wheelwrap',null,H('span.pointer'),disc),out,btn);
  afterModal=onDone||null;
  openModal(wrap,{sticky:true});
  let spun=false;
  btn.addEventListener('click',()=>{
    if(spun){ closeModal(); return; }
    spun=true; btn.disabled=true; S.day.wheel=true; save();
    let x=Math.random()*WHEEL.reduce((a,s)=>a+s.w,0), idx=0;
    for(let i=0;i<WHEEL.length;i++){ x-=WHEEL[i].w; if(x<=0){ idx=i; break; } }
    const a=360/WHEEL.length, target=360*5+(360-(idx+0.5)*a)+rnd(-14,14);
    disc.style.transform='rotate('+target+'deg)';
    let ticks=0; const tk=setInterval(()=>{ sfx('tick'); if(++ticks>22) clearInterval(tk); },150);
    setTimeout(()=>{
      clearInterval(tk);
      const seg=WHEEL[idx]; sfx('chest');
      if(seg.c){ addCoins(seg.c); out.appendChild(H('div.lootrow',null,H('span.lic',{html:COIN_SVG}),H('span',{text:'+'+seg.c+' stroopwafels'}))); }
      if(seg.power){ const p=pick(['fifty','hint','time15','freeze']); S.inv[p]=(S.inv[p]||0)+1; out.appendChild(H('div.lootrow',null,H('span.lic.pw',{text:'★'}),H('span',{text:'Comodín: '+POWER_NAMES[p]}))); }
      if(seg.tile){
        const g=grantTile(drawTile());
        out.appendChild(H('p.lootlbl',{text:g.dupe?'Azulejo repetido · +'+g.coins+' stroopwafels':'Azulejo nuevo · '+RAR[g.tile.r]}));
        const te=tileEl(g.tile,{big:true}); te.classList.add('pop'); out.appendChild(te);
      }
      life('spins'); save(); hud();
      btn.disabled=false; btn.textContent='Seguir';
    },4000);
  });
}

/* ---------- tienda ---------- */
const SHOP=[
 {id:'fifty',kind:'item',name:'50/50',desc:'Quita opciones malas en las preguntas de elegir.',c:25},
 {id:'hint',kind:'item',name:'Pista',desc:'Al escribir, te enseña cómo empieza la palabra. Ganas la mitad de XP.',c:20},
 {id:'time15',kind:'item',name:'+15 segundos',desc:'Más tiempo en Blitz o en ¿De o het?. Uno por ronda.',c:40},
 {id:'freeze',kind:'item',name:'Escudo de racha',desc:'Si un día no juegas, la racha no se pierde. Se usa solo.',c:120},
 {id:'tegel',kind:'tile',name:'Azulejo sorpresa',desc:'Un refrán al azar para tu colección. Mientras te falten, casi siempre sale uno nuevo.',c:150},
 {id:'delft',kind:'skin',name:'Delft',desc:'Azul de porcelana, el de siempre.',c:0},
 {id:'polder',kind:'skin',name:'Pólder',desc:'Verde de prado y acequia.',c:400},
 {id:'oranje',kind:'skin',name:'Koningsdag',desc:'Todo naranja, como el 27 de abril.',c:600},
 {id:'tulp',kind:'skin',name:'Tulipán',desc:'Rojo de Keukenhof.',c:800},
 {id:'gracht',kind:'skin',name:'Gracht',desc:'Verde azulado de canal.',c:1200},
 {id:'goud',kind:'skin',name:'Gouden Eeuw',desc:'Ocre y sepia, como un cuadro del Siglo de Oro.',c:2000}
];
function applySkin(){ if(S.skin&&S.skin!=='delft') document.documentElement.dataset.skin=S.skin; else delete document.documentElement.dataset.skin; }
function buy(it){
  if((S.coins||0)<it.c) return false;
  S.coins-=it.c; life('bought'); sfx('coin');
  if(it.kind==='skin'){ if(!S.skins.includes(it.id)) S.skins.push(it.id); S.skin=it.id; applySkin(); toast('Comprado: '+it.name); }
  else if(it.kind==='tile'){
    const g=grantTile(drawTile()), te=tileEl(g.tile,{big:true}); te.classList.add('pop'); say(g.tile.nl,0.85);
    openModal(H('div.tileview',null,H('p.lootlbl',{text:g.dupe?'Repetido · te devuelvo '+g.coins+' stroopwafels':'Azulejo nuevo · '+RAR[g.tile.r]}),te,
      H('div.row.center',null,speakBtn(g.tile.nl,false,0.85)),H('button.btn.solid.big',{type:'button',text:'Seguir',onclick:closeModal})));
  }
  else{ S.inv[it.id]=(S.inv[it.id]||0)+1; toast('Comprado: '+it.name); }
  save(true); hud(); checkAch(true);
  return true;
}

/* ---------- escudo de racha ---------- */
function applyFreeze(){
  const t=T();
  if(S.streak.n>0&&S.streak.last===t-2&&(S.inv.freeze||0)>0){
    S.inv.freeze--; S.streak.last=t-1; save();
    setTimeout(()=>toast('Escudo de racha usado: tu racha de '+S.streak.n+' días sigue viva','gold'),800);
  }
}
