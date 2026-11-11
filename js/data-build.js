/* Woorden · une los datos base con las ampliaciones y prepara las listas que usa el juego (sin tocar la página) */
const BASE_VERBS=VERBS.length;
VERBS.push(...VERBS_MORE); LANDEN.push(...LANDEN_MORE); CHAT.push(...CHAT_MORE);
Object.assign(PUZ,PUZ_MORE);
Object.keys(PUZ).forEach(k=>PUZ[k][1].forEach(p=>{p.sub=k;}));
['Italiaans','Frankrijk','Vigo','Nederland','Nederlandse','Parijs','Italië'].forEach(w=>PROPER.add(w));

const THEMES={}, TKEYS=[];
function addTheme(key,name,pairs,lvFn){
  if(!THEMES[key]){ THEMES[key]={k:key,n:name,lv:TH_LV[key]||2,w:[]}; TKEYS.push(key); }
  const t=THEMES[key];
  pairs.forEach(([nl,es])=>{ t.w.push({nl,es,th:key,k:'w:'+nl,lv:lvFn?lvFn(t.w.length):t.lv}); });
}
Object.keys(WT).forEach(k=>addTheme(k,WT[k][0],WT[k][1]));
WT_MORE.forEach(([k,name,str])=>addTheme(k,name||(THEMES[k]&&THEMES[k].n),
  str.split(';').map(s=>{ const i=s.indexOf('='); return [s.slice(0,i).trim(),s.slice(i+1).trim()]; }).filter(p=>p[0])));
TH_LV.verbos=1;
addTheme('verbos','Verbos (infinitivo)',VERBS.map(v=>[v[0],v[1]]),i=>i<BASE_VERBS?1:2);
/* temas ordenados por nivel: es el orden en que se van presentando */
TKEYS.sort((a,b)=>THEMES[a].lv-THEMES[b].lv);

const GKEYS=G_ORDER.filter(k=>GR[k]);
Object.keys(GR).forEach(k=>{ if(!GKEYS.includes(k)) GKEYS.push(k); });
GKEYS.forEach(sk=>{ GR[sk].k=sk; GR[sk].items=GR[sk].it.map(a=>({q:a[0],a:a[1],o:a[2].split('|'),es:a[3],tip:a[4]||'',sk,k:'g:'+sk+':'+a[0]})); });
const ALLG=GKEYS.flatMap(k=>GR[k].items);
const ALLPUZ=Object.keys(PUZ).flatMap(k=>PUZ[k][1]);
