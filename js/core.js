'use strict';
/* Woorden · núcleo: utilidades, estado guardado, repaso espaciado, voz y sonido */

/* ---------- utilidades ---------- */
const $=id=>document.getElementById(id);
function H(sel,props,...kids){
  const parts=sel.split('.'), e=document.createElement(parts[0]||'div');
  if(parts.length>1) e.className=parts.slice(1).join(' ');
  if(props) for(const k in props){
    const v=props[k];
    if(v==null||v===false) continue;
    if(k==='text') e.textContent=v;
    else if(k==='html') e.innerHTML=v;
    else if(k==='style') e.style.cssText=v;
    else if(k.slice(0,2)==='on') e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?'':v);
  }
  kids.flat().forEach(c=>{ if(c!=null&&c!==false) e.append(c.nodeType?c:document.createTextNode(String(c))); });
  return e;
}
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.random()*(i+1)|0; [a[i],a[j]]=[a[j],a[i]]; } return a; }
const pick=a=>a[Math.random()*a.length|0];
const first=s=>String(s).split('|')[0];
const pad=n=>String(n).padStart(2,'0');
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function hash(s){ let h=7; for(const ch of String(s)) h=(h*31+ch.charCodeAt(0))|0; return Math.abs(h); }

/* días como números enteros (día local) */
function dayNum(d){ d=d||new Date(); return Math.round(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5); }
const T=()=>dayNum();
const dayDate=n=>new Date(n*864e5);
const MESES=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const dayLabel=n=>{ const d=dayDate(n); return d.getUTCDate()+' '+MESES[d.getUTCMonth()]; };

/* ---------- estado ---------- */
const KEY='woorden.v3';
function blank(){
  return {v:3,it:{},xp:0,coins:0,
    day:{d:0,xp:0,done:false,sess:0,wheel:false,chest:0},
    streak:{last:0,n:0},best:{},
    opt:{sfx:true,voice:true,vname:'',rate:0.9,size:'normal',wmode:'type'},
    inv:{freeze:0,time15:0,fifty:0,hint:0},skins:['delft'],skin:'delft',
    stats:{},life:{},mis:{d:0,list:[]},ach:{},tiles:{},log:{},custom:[],pins:['werk','jachtbouw'],nem:{},pend:0};
}
function fill(s){
  const b=blank();
  for(const k in b) if(s[k]==null) s[k]=b[k];
  s.opt=Object.assign(b.opt,s.opt); s.inv=Object.assign(b.inv,s.inv); s.day=Object.assign(b.day,s.day);
  return s;
}
/* convierte el progreso de la versión anterior (cajas 0-5) al repaso por días */
function fromV2(o){
  const s=blank(), t=T();
  s.xp=o.xp||0; s.coins=o.coins||0; s.best=o.best||{};
  if(o.opt){ s.opt.sfx=o.opt.sfx!==false; s.opt.voice=o.opt.voice!==false; }
  Object.assign(s.inv,o.inv||{});
  if(Array.isArray(o.skins)&&o.skins.length) s.skins=o.skins;
  s.skin=o.skin||'delft';
  const L=o.life||{};
  s.life={ok:L.ok||0,maxCombo:L.maxCombo||0,maxStreak:L.maxStreak||0,verbs:L.verbs||0,puzFirst:L.puzFirst||0,chatP:L.chatP||0,mis:L.mis||0,bought:L.bought||0,times:L.times||0};
  const map=[[1,0],[2,0],[3,1],[4,2],[5,5],[5,10]];
  const items=o.items||{};
  for(const k in items){
    const it=items[k]||{}, b=it.b||0, w=it.w||0; if(!b&&!w) continue;
    const m=map[Math.min(5,b)]; s.it[k]={s:m[0],d:t+m[1],w,r:b};
  }
  const toDay=str=>{ const p=String(str||'').split('-').map(Number); return p.length===3?dayNum(new Date(p[0],p[1]-1,p[2])):0; };
  if(o.streak&&o.streak.last) s.streak={last:toDay(o.streak.last),n:o.streak.n||0};
  if(o.day&&toDay(o.day.d)===t){ s.day.d=t; s.day.xp=o.day.xp||0; s.day.done=!!o.day.done; }
  s.from=2;
  return s;
}
function load(){
  let s=null;
  try{ s=JSON.parse(localStorage.getItem(KEY)||'null'); }catch(e){}
  if(!s||s.v!==3){
    s=null;
    try{ const o=JSON.parse(localStorage.getItem('woorden.v2')||'null'); if(o&&o.v===2) s=fromV2(o); }catch(e){}
    if(!s) s=blank();
  }
  return fill(s);
}
let S=load();
let saveT=null;
function flush(){ clearTimeout(saveT); saveT=null; try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }
function save(now){ if(now) return flush(); if(!saveT) saveT=setTimeout(flush,400); }
addEventListener('pagehide',flush);
document.addEventListener('visibilitychange',()=>{ if(document.hidden) flush(); });

function exportCode(){ flush(); return 'W3.'+btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }
function importCode(str){
  str=String(str||'').trim(); let o=null;
  try{ o=JSON.parse(decodeURIComponent(escape(atob(str.replace(/^W[23]\./,''))))); }
  catch(e){ try{ o=JSON.parse(str); }catch(e2){ return false; } }
  if(o&&o.v===3) S=fill(o); else if(o&&o.v===2) S=fill(fromV2(o)); else return false;
  flush(); return true;
}

function ensureDay(){ const t=T(); if(S.day.d!==t) S.day={d:t,xp:0,done:false,sess:0,wheel:false,chest:0}; }
function streakNow(){ const t=T(); return (S.streak.last===t||S.streak.last===t-1)?S.streak.n:0; }
function logDay(){ const t=T(); return S.log[t]||(S.log[t]={x:0,o:0,b:0,n:0,t:0,m:0}); }
function life(k,n){ S.life[k]=(S.life[k]||0)+(n==null?1:n); }

/* ---------- palabras propias del usuario ---------- */
function loadCustom(){
  if(THEMES.mias) THEMES.mias.w.length=0;
  else{ THEMES.mias={k:'mias',n:'Mis palabras',lv:1,w:[]}; TKEYS.push('mias'); }
  (S.custom||[]).forEach(c=>THEMES.mias.w.push({nl:c[0],es:c[1],th:'mias',k:'w:'+c[0],lv:1,mine:true}));
  buildWordIndex();
}
let ALLW=[], WBY={};
function buildWordIndex(){
  TKEYS.forEach(k=>THEMES[k].w.forEach((w,i)=>{ w.i=i; }));
  ALLW=TKEYS.flatMap(k=>THEMES[k].w); WBY={};
  ALLW.forEach(w=>w.nl.split('|').forEach(a=>{ WBY[norm(a)]=w; }));
}

/* ---------- repaso espaciado ---------- */
const INT=[0,0,1,3,7,14,30,60,120,240];          /* días hasta el siguiente repaso, por etapa */
const stage=k=>S.it[k]?S.it[k].s:0;
const seen=k=>!!S.it[k];
const isDue=k=>{ const it=S.it[k]; return !!it&&it.d<=T(); };
const isMastered=k=>stage(k)>=5;
const mastered=(list,keyFn)=>list.filter(x=>isMastered(keyFn?keyFn(x):x.k)).length;
const learned=(list,keyFn)=>list.filter(x=>seen(keyFn?keyFn(x):x.k)).length;
function mark(k,good,soft){
  const t=T(); let it=S.it[k]; const isNew=!it;
  if(!it) it=S.it[k]={s:0,d:t,w:0,r:0};
  if(good){
    it.r++;
    /* carril rápido: lo que nunca has fallado sube de dos en dos y deja de salir enseguida */
    if(!soft||it.s<2) it.s=Math.min(9,it.s+((!soft&&!it.w&&it.s>=2&&it.s<=4)?2:1));
    it.d=t+INT[it.s]; if(soft&&it.d<=t) it.d=t+1;
  }
  else{ it.w++; it.s=Math.max(1,it.s-2); it.d=t; S.nem[k]=(S.nem[k]||0)+1; }
  save(); return isNew;
}
function markNear(k){ const t=T(); let it=S.it[k]; if(!it) it=S.it[k]={s:1,d:t,w:0,r:0}; it.w++; it.d=t; save(); }
function markKnown(k){ S.it[k]={s:6,d:T()+30,w:0,r:1}; save(); }
function dueIn(k){ const it=S.it[k]; return it?it.d-T():null; }
function statusOf(k){ const it=S.it[k]; if(!it) return 'new'; return it.s>=5?'done':'learning'; }

/* ---------- niveles ---------- */
const LEVELS=[[0,'Toerist'],[300,'Nieuwkomer'],[800,'Fietser'],[1600,'Kaasliefhebber'],[3000,'Buurman'],[5000,'Collega'],
  [8000,'Polderaar'],[12000,'Stroopwafelmeester'],[17000,'Echte Hollander'],[25000,'Kaaskop'],[36000,'Grachtenkenner'],
  [50000,'Molenaar'],[70000,'Dijkgraaf'],[95000,'Burgemeester'],[130000,'Koning van de polder']];
function levelOf(xp){ let i=0; for(let k=0;k<LEVELS.length;k++) if(xp>=LEVELS[k][0]) i=k; return i; }
const GOALS={short:150,normal:250,long:400};
const goalXp=()=>GOALS[S.opt.size]||250;

/* ---------- comprobar respuestas ---------- */
const DIA=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'');
function clean(s){ return (s||'').toLowerCase().replace(/[.,!?¿¡;:…"“”’'()]/g,' ').replace(/\s+/g,' ').trim(); }
function norm(s){ return DIA(clean(s)); }
const ARTS=['de ','het ','een '];
const artOf=s=>{ for(const a of ARTS) if(s.startsWith(a)) return a.trim(); return null; };
const strip=s=>{ for(const a of ARTS) if(s.startsWith(a)) return s.slice(a.length); return s; };
function diaNote(input,answer){
  return (clean(input)!==clean(answer)&&norm(input)===norm(answer))?'Ojo con la ortografía: se escribe «'+answer+'».':'';
}
function eqAny(input,ans){ return ans.split('|').find(a=>norm(input)===norm(a))||null; }
function lev(a,b){
  if(Math.abs(a.length-b.length)>1) return 2;
  const m=[]; for(let i=0;i<=a.length;i++){ m[i]=[i]; }
  for(let j=1;j<=b.length;j++) m[0][j]=j;
  for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++)
    m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  return m[a.length][b.length];
}
/* v: 'ok' | 'near' (artículo o una letra) | 'bad' */
function judgeWord(input,answer){
  const alts=answer.split('|'), i=norm(input);
  if(!i) return {v:'bad',note:''};
  for(const a of alts){
    const n=norm(a);
    if(i===n) return {v:'ok',note:diaNote(input,a),hit:a};
    const aa=artOf(n), ia=artOf(i);
    if(aa&&strip(i)===strip(n)){
      if(!ia) return {v:'near',art:true,note:'La palabra está bien, pero falta el artículo: «'+aa+'».'};
      return {v:'near',art:true,note:'Artículo equivocado: has puesto «'+ia+'» y es «'+aa+'».'};
    }
  }
  for(const a of alts){ const n=norm(a); if(n.length>=6&&lev(i,n)===1) return {v:'near',note:'Se te ha ido una letra.'}; }
  return {v:'bad',note:''};
}
const glosses=es=>es.replace(/\([^)]*\)/g,'').split(',').map(g=>norm(g)).filter(Boolean);
function isSynonym(input,w){
  const o=WBY[norm(input)]; if(!o||o===w) return false;
  const a=glosses(o.es), b=glosses(w.es); return a.some(g=>b.includes(g));
}
const isPhrase=nl=>first(nl).trim().split(/\s+/).length>=4;
const isNoun=w=>/^(de|het) /.test(w.nl)&&!w.nl.includes('|')&&!/^(los|las) |\(plural\)/.test(w.es);

/* ---------- números y horas ---------- */
const SM=['nul','een','twee','drie','vier','vijf','zes','zeven','acht','negen','tien','elf','twaalf','dertien','veertien','vijftien','zestien','zeventien','achttien','negentien'];
const TN=['','','twintig','dertig','veertig','vijftig','zestig','zeventig','tachtig','negentig'];
function nlNum(n){
  if(n<20) return SM[n];
  if(n<100){ const t=Math.floor(n/10),u=n%10; if(!u) return TN[t]; const us=SM[u]; return us+(us.endsWith('e')?'ën':'en')+TN[t]; }
  if(n<1000){ const h=Math.floor(n/100),r=n%100; const hs=(h===1?'':SM[h])+'honderd'; return r?hs+nlNum(r):hs; }
  const th=Math.floor(n/1000),r=n%1000; const ts=(th===1?'':nlNum(th))+'duizend'; return r?ts+nlNum(r):ts;
}
function nlYear(y){ if(y>=1100&&y<2000){ const c=Math.floor(y/100),r=y%100; return nlNum(c)+'honderd'+(r?nlNum(r):''); } return nlNum(y); }
const HW=['twaalf','één','twee','drie','vier','vijf','zes','zeven','acht','negen','tien','elf','twaalf'];
const hw=h=>HW[((h-1)%12+12)%12+1];
function nlTime(h,m){
  const c=hw(h), n=hw(h+1);
  return {0:c+' uur',5:'vijf over '+c,10:'tien over '+c,15:'kwart over '+c,20:'tien voor half '+n,25:'vijf voor half '+n,
    30:'half '+n,35:'vijf over half '+n,40:'tien over half '+n,45:'kwart voor '+n,50:'tien voor '+n,55:'vijf voor '+n}[m];
}
function makeNum(type){
  if(type==='n1'){ const n=rnd(0,20); const w=n===1?'één':nlNum(n); return {say:w,ans:String(n),show:String(n),word:w,kind:'num'}; }
  if(type==='n2'){ const n=rnd(21,99); return {say:nlNum(n),ans:String(n),show:String(n),word:nlNum(n),kind:'num'}; }
  if(type==='n3'){ const n=rnd(100,999); return {say:nlNum(n),ans:String(n),show:String(n),word:nlNum(n),kind:'num'}; }
  if(type==='y'){ const y=rnd(1950,2030); return {say:nlYear(y),ans:String(y),show:String(y),word:nlYear(y),kind:'year'}; }
  const h=rnd(1,12), m=rnd(0,11)*5, w=nlTime(h,m);
  return {say:'Het is '+w+'.',h,m,show:h+':'+pad(m),word:w,kind:'time'};
}

/* ---------- voz ---------- */
let voices=[], voice=null;
function voiceScore(v){
  const n=(v.name||'').toLowerCase(), l=(v.lang||'').toLowerCase().replace('_','-');
  let s=0;
  if(l==='nl-nl') s+=6; else if(l==='nl-be') s+=2;
  if(/natural|neural|premium|enhanced|mejorad|siri/.test(n)) s+=5;
  if(/google/.test(n)) s+=3;
  if(/xander|claire|colette|fenna|maarten|flo/.test(n)) s+=1;
  if(/compact|espeak/.test(n)) s-=3;
  if(v.localService===false) s+=1;
  return s;
}
function loadVoices(){
  if(!window.speechSynthesis) return;
  const all=speechSynthesis.getVoices()||[];
  voices=all.filter(v=>(v.lang||'').toLowerCase().startsWith('nl')).sort((a,b)=>voiceScore(b)-voiceScore(a));
  voice=voices.find(v=>v.name===S.opt.vname)||voices[0]||null;
  if(typeof onVoices==='function') onVoices();
}
if(window.speechSynthesis){
  loadVoices();
  try{ speechSynthesis.addEventListener('voiceschanged',loadVoices); }catch(e){ speechSynthesis.onvoiceschanged=loadVoices; }
  setTimeout(loadVoices,600); setTimeout(loadVoices,2000);
}
let lastU=null;
function say(text,rate){
  if(!window.speechSynthesis||!text) return;
  try{
    const clean_=first(text).replace(/\([^)]*\)/g,'').replace(/…/g,'').trim();
    const u=new SpeechSynthesisUtterance(clean_);
    u.lang=voice?(voice.lang||'nl-NL').replace('_','-'):'nl-NL';
    if(voice) u.voice=voice;
    u.rate=(rate||1)*(S.opt.rate||0.9);
    lastU=u;                       /* evita que el navegador lo descarte a medias */
    const go=()=>{ try{ speechSynthesis.resume(); speechSynthesis.speak(u); }catch(e){} };
    /* en Android, cancelar y hablar seguido se come la frase nueva: se deja un respiro */
    if(speechSynthesis.speaking||speechSynthesis.pending){ speechSynthesis.cancel(); setTimeout(go,70); } else go();
  }catch(e){}
}
const autoSay=(text,rate)=>{ if(S.opt.voice) say(text,rate); };
function hush(){ try{ window.speechSynthesis&&speechSynthesis.cancel(); }catch(e){} }
const SPK='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a6.8 6.8 0 0 1 0 13.4v2.1a8.9 8.9 0 0 0 0-17.6z"/></svg>';
function speakBtn(text,small,rate){
  return H('button.speak'+(small?'.sm':''),{type:'button','aria-label':'Escuchar',html:SPK,
    onclick:e=>{ e.stopPropagation(); say(typeof text==='function'?text():text,rate); }});
}

/* ---------- sonido ---------- */
let actx=null;
function tone(freqs,type,step,len,vol){
  if(!S.opt.sfx) return;
  try{
    actx=actx||new (window.AudioContext||window.webkitAudioContext)();
    if(actx.state==='suspended') actx.resume();
    freqs.forEach((f,i)=>{
      const o=actx.createOscillator(), g=actx.createGain(), t=actx.currentTime+i*step;
      o.type=type; o.frequency.value=f;
      g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(vol||0.12,t+0.012); g.gain.exponentialRampToValueAtTime(0.0001,t+len);
      o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t+len+0.02);
    });
  }catch(e){}
}
function sfx(kind,n){
  if(kind==='ok'){ const up=Math.pow(1.045,clamp(n||0,0,14)); tone([660*up,880*up],'sine',0.07,0.16); }
  else if(kind==='bad'){ tone([220,170],'triangle',0.09,0.2); try{ navigator.vibrate&&navigator.vibrate(35); }catch(e){} }
  else if(kind==='crit') tone([880,1108,1318,1760],'sine',0.06,0.22,0.14);
  else if(kind==='coin') tone([1318,1760],'square',0.05,0.09,0.05);
  else if(kind==='level') tone([523,659,784,1046,1318],'sine',0.09,0.3,0.14);
  else if(kind==='chest') tone([392,523,659,784,1046],'triangle',0.08,0.28,0.13);
  else if(kind==='tick') tone([900],'square',0,0.03,0.04);
  else if(kind==='tap') tone([520],'sine',0,0.05,0.05);
}
let unlocked=false;
function unlockAudio(){
  if(unlocked) return; unlocked=true;
  try{ actx=actx||new (window.AudioContext||window.webkitAudioContext)(); actx.resume(); }catch(e){}
  try{ if(window.speechSynthesis){ const u=new SpeechSynthesisUtterance(' '); u.volume=0; speechSynthesis.speak(u); } }catch(e){}
}
addEventListener('pointerdown',unlockAudio,{once:true});
