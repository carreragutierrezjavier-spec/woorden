/* Woorden · une los datos base, las ampliaciones y el contenido de js/content/, y prepara las listas que usa el juego */
const BASE_VERBS=VERBS.length;
VERBS.push(...VERBS_MORE, ...VERBS_ADD);
LANDEN.push(...LANDEN_MORE);
CHAT.push(...CHAT_MORE, ...CHAT_ADD);
Object.assign(PUZ,PUZ_MORE);
Object.entries(PUZ_ADD).forEach(([k,its])=>{ if(!PUZ[k]) PUZ[k]=[PUZ_NAMES[k]||k,[]]; PUZ[k][1].push(...its); });
Object.keys(PUZ).forEach(k=>PUZ[k][1].forEach(p=>{ p.sub=k; }));
['Italiaans','Frankrijk','Vigo','Nederland','Nederlandse','Parijs','Italië',...PROPER_ADD].forEach(w=>PROPER.add(w));

/* ---------- vocabulario por temas ---------- */
const THEMES={}, TKEYS=[];
function addTheme(key,name,pairs,lvFn){
  if(!THEMES[key]){ THEMES[key]={k:key,n:name,lv:TH_LV[key]||2,w:[]}; TKEYS.push(key); }
  const t=THEMES[key];
  pairs.forEach(([nl,es])=>{ t.w.push({nl,es,th:key,k:'w:'+nl,lv:lvFn?lvFn(t.w.length):t.lv}); });
}
const splitPairs=str=>str.split(';').map(s=>{ const i=s.indexOf('='); return [s.slice(0,i).trim(),s.slice(i+1).trim()]; }).filter(p=>p[0]&&p[1]);
Object.keys(WT).forEach(k=>addTheme(k,WT[k][0],WT[k][1]));
WT_MORE.forEach(([k,name,str])=>addTheme(k,name||(THEMES[k]&&THEMES[k].n),splitPairs(str)));
VOCAB_ADD.forEach(([k,name,lv,str])=>{ if(name&&!TH_LV[k]) TH_LV[k]=lv; addTheme(k,name||(THEMES[k]&&THEMES[k].n)||k,splitPairs(str)); });
TH_LV.verbos=1;
addTheme('verbos','Verbos',VERBS.map(v=>[v[0],v[1]]),i=>i<BASE_VERBS?1:2);
TKEYS.sort((a,b)=>THEMES[a].lv-THEMES[b].lv);

/* ---------- grupos para navegar el vocabulario ---------- */
const GROUPS=[
  {k:'sust',n:'Sustantivos',d:'Cosas, personas y lugares, con su artículo'},
  {k:'verb',n:'Verbos',d:'Qué significan. Sus formas, en Gramática'},
  {k:'adj',n:'Adjetivos',d:'Cómo es algo o alguien'},
  {k:'util',n:'Palabras útiles',d:'Preguntas, cuándo, cuánto, conectores…'},
  {k:'expr',n:'Expresiones',d:'Frases hechas, jerga y correos'}
];
/* los sustantivos, en pocos grupos grandes (fijos) */
const NGROUPS=[
  {k:'casa',n:'Casa, cocina y ropa',th:['huis','keuken','kleding','kleuren']},
  {k:'comida',n:'Comida y compras',th:['eten','winkels','geld','cantidades']},
  {k:'ciudad',n:'Ciudad, viajes y trámites',th:['stad','reizen','administratie']},
  {k:'trabajo',n:'Trabajo y astillero',th:['werk','beroepen','jachtbouw','gereedschap']},
  {k:'estudios',n:'Estudios y tecnología',th:['studie','technologie']},
  {k:'cuerpo',n:'Cuerpo y salud',th:['lichaam','gezondheid']},
  {k:'gente',n:'Gente y sociedad',th:['familie','karakter','maatschappij']},
  {k:'natura',n:'Naturaleza, animales y clima',th:['dieren','natuur','tijd','momento','dagen']},
  {k:'ocio',n:'Ocio, deporte y fiestas',th:['sport','cultuur','feestdagen']}
];
const NGROUP_OF={}; NGROUPS.forEach(g=>g.th.forEach(t=>{ NGROUP_OF[t]=g; }));
const VERB_TH=['verbos','reflexivos','prepverbos'], EXPR_TH=['expresiones','emails','jerga'], ADJ_TH=['adj','kleuren','karakter'];
Object.assign(POS,{hardlopen:'verb',scoren:'verb'});
function wordGroup(w){
  if(VERB_TH.includes(w.th)) return 'verb';
  if(EXPR_TH.includes(w.th)) return 'expr';
  const f=w.nl.split('|')[0];
  if(/^(de|het) /.test(f)) return 'sust';
  const p=POS[f]||POS[w.nl];
  if(p==='verb') return 'verb';
  if(p==='adj') return 'adj';
  if(!p&&w.th==='feestdagen') return 'sust';                 /* nombres de fiestas: van sin artículo */
  if(ADJ_TH.includes(w.th)&&p!=='adv'&&p!=='util') return 'adj';
  if(/[.?!]$/.test(f.trim())||f.trim().split(/\s+/).length>=4) return 'expr';
  return 'util';
}
let SUBS={}, SUBBY={};
/* subgrupos: dentro de cada grupo, un apartado por tema (en verbos, por tipo) */
function buildGroups(all){
  SUBS={}; SUBBY={};
  GROUPS.forEach(g=>{ SUBS[g.k]=[]; });
  const add=(g,k,n,w)=>{ let s=SUBBY[k]; if(!s){ s=SUBBY[k]={k,g,n,w:[]}; SUBS[g].push(s); } s.w.push(w); };
  /* cada tema también por separado, sin salir en la lista (para la temporada de Sinterklaas, etc.) */
  const addTh=(k,n,w)=>{ (SUBBY[k]=SUBBY[k]||{k,g:'th',n,w:[],hidden:true}).w.push(w); };
  const vt={};
  VERBS.forEach((v,i)=>{ vt[v[0]]={base:i<BASE_VERBS,sep:v[2].includes(' '),irr:!(/(te|de)$/.test(v[2].split('|')[0].split(' ')[0])&&/(ten|den)$/.test(v[3].split('|')[0].split(' ')[0]))}; });
  all.forEach(w=>{
    const g=wordGroup(w); w.g=g;
    if(g==='verb'){
      if(w.th==='reflexivos') add('verb','vb-refl','Reflexivos',w);
      else if(w.th==='prepverbos') add('verb','vb-prep','Con preposición fija',w);
      else{
        const t=vt[w.nl]||{};
        if(t.base) add('verb','vb-basic','Los imprescindibles',w);
        if(t.sep) add('verb','vb-sep','Separables',w);
        else if(t.irr) add('verb','vb-irr','Irregulares',w);
        else add('verb','vb-reg','Regulares',w);
      }
    }
    else if(g==='adj'&&!ADJ_TH.includes(w.th)) add('adj','adj-otros','De otros temas',w);
    else if(g==='util'&&!['vragen','conectores','cantidades','momento','dagen','tijd','bijwoorden'].includes(w.th)) add('util','util-otros','Otras palabras útiles',w);
    else if(g==='sust'){
      const ng=NGROUP_OF[w.th];
      if(ng) add('sust','sust:'+ng.k,ng.n,w); else add('sust','sust:'+w.th,THEMES[w.th].n,w);
      addTh('th:'+w.th,THEMES[w.th].n,w);
    }
    else add(g,g+':'+w.th,THEMES[w.th].n,w);
  });
  const order=s=>s.k==='vb-basic'?-1:(s.k.endsWith('otros')?99:(s.g==='sust'?NGROUPS.findIndex(g=>'sust:'+g.k===s.k)+1||50:(THEMES[s.k.split(':')[1]]||{lv:2}).lv));
  GROUPS.forEach(g=>SUBS[g.k].sort((a,b)=>order(a)-order(b)||a.n.localeCompare(b.n,'es')));
}

/* ---------- gramática: destrezas ---------- */
Object.entries(GR_NEW).forEach(([k,d])=>{ GR[k]=Object.assign({it:[]},d); });
Object.entries(GR_MORE).forEach(([k,its])=>{ if(GR[k]) GR[k].it.push(...its); });
const toItem=(a,sk,keySk)=>({q:a[0],a:a[1],o:String(a[2]).split('|').filter(Boolean),es:a[3],tip:a[4]||'',sk,k:'g:'+(keySk||sk)+':'+a[0]});
const SK={}, SKEYS=[];
function addSkill(id,def){ if(!SK[id]){ SK[id]=Object.assign({id,items:[],grp:'otros',lv:2,tip:'',ref:''},def); SKEYS.push(id); } return SK[id]; }

/* preposiciones: todas las frases juntas, y una destreza por preposición (la respuesta) */
const PREP_TIPS={
 op:'Encima de algo (op tafel), días y fechas (op maandag), sitios donde se hace algo (op kantoor, op school, op het werk), y muchos verbos y adjetivos: wachten op, trots op, verliefd op.',
 in:'Dentro de algo (in de kamer), ciudades y países (in Delft), meses, estaciones y años (in mei, in de zomer), idiomas (in het Nederlands), y geïnteresseerd in, geloven in.',
 aan:'Pegado o junto a algo (aan de muur, aan zee, aan tafel), y verbos como denken aan, wennen aan, deelnemen aan, werken aan.',
 bij:'En casa de alguien o en una empresa (bij mijn ouders, bij een werf), junto a algo (bij de ingang), y bij elkaar.',
 naar:'Hacia un destino (naar huis, naar Amsterdam), y luisteren naar, kijken naar, zoeken naar, ruiken naar.',
 van:'Posesión y origen (het boek van Lotte, van Delft naar Rotterdam), houden van, genieten van, afhangen van, dromen van.',
 met:'Compañía e instrumento (met de trein, met Lotte), y beginnen met, stoppen met, trouwen met, het eens zijn met.',
 voor:'Para alguien o algo, delante de, antes de un plazo (voor vrijdag), y bang voor, zorgen voor, bedankt voor.',
 om:'Hora exacta (om acht uur), alrededor de (om de tafel), om … te (finalidad), y vragen om, lachen om.',
 over:'Sobre un tema (praten over), dentro de un tiempo (over een week), por encima (over de brug).',
 uit:'Procedencia (uit Spanje), salir de algo (uit de bus), y bestaan uit.',
 door:'A través de (door het park), y el agente en la pasiva (door de monteur).',
 tegen:'Contra, apoyado en (tegen de muur), y hablar a alguien (tegen iemand zeggen).',
 tot:'Hasta (tot vrijdag, van negen tot vijf).',
 na:'Después de (na het eten, na de les).',
 tijdens:'Durante (tijdens de vergadering).',
 sinds:'Desde un momento (sinds maandag, sinds 2024).',
 onder:'Debajo de (onder de tafel), y durante: onder het eten.',
 boven:'Encima, sin tocar (boven de deur), y por encima de una cifra.',
 naast:'Al lado de (naast de bank).',
 tussen:'Entre dos cosas (tussen de kerk en de markt).',
 achter:'Detrás de (achter het huis).',
 tegenover:'Enfrente de (tegenover het station).',
 langs:'A lo largo de, pasando por (langs de gracht).',
 zonder:'Sin (zonder suiker).',
 volgens:'Según (volgens mij).',
 ondanks:'A pesar de (ondanks de regen).'
};
const PREP_ITEMS=[];
['prep_lugar','prep_tijd','prep_vast'].forEach(k=>GR[k].it.forEach(a=>PREP_ITEMS.push(toItem(a,'prep',k))));
PREP_BANK.forEach(a=>PREP_ITEMS.push(toItem(a,'prep','prep')));
const PREPS_MAIN=['op','in','aan','bij','naar','van','met','voor','om','over','uit','door','tegen','tot'];
const isPrepWord=w=>/^[a-z]+$/.test(w)&&(PREPS_MAIN.includes(w)||['na','tijdens','sinds','onder','boven','naast','tussen','achter','tegenover','langs','zonder','binnen','buiten','rond','volgens','ondanks','dankzij','vanwege','per','vanaf','richting','geleden'].includes(w));
PREP_ITEMS.forEach(it=>{ const a=it.a.toLowerCase(); it.sub=isPrepWord(a)?(PREPS_MAIN.includes(a)?a:'otras'):'otras'; it.sk='prep:'+it.sub; });
addSkill('prep',{n:'Todas las preposiciones',grp:'prep',lv:1,tip:'Mezcla de todas.',items:PREP_ITEMS,ref:'§24'});
PREPS_MAIN.forEach((p,i)=>{
  const items=PREP_ITEMS.filter(it=>it.sub===p);
  if(items.length) addSkill('prep:'+p,{n:p,grp:'prep',lv:i<6?1:2,tip:PREP_TIPS[p]||'',items,ref:'§24',mix:'prep'});
});
const otherPrep=PREP_ITEMS.filter(it=>it.sub==='otras');
if(otherPrep.length) addSkill('prep:otras',{n:'Las demás',grp:'prep',lv:2,tip:'tijdens, sinds, na, onder, boven, naast, tussen, achter, tegenover, langs, zonder…',items:otherPrep,ref:'§24',mix:'prep'});

/* el resto de la gramática: cada destreza con sus frases */
const GR_GRP={nietgeen:'orden',conect:'orden',relat:'orden',er:'orden',cuant:'orden',
  hebzijn:'verbos',teinf:'verbos',reflex:'verbos',pasiva:'verbos',spell:'verbos',presente:'verbos',pasado:'verbos',
  adj_e:'articulos',compar:'articulos',plural:'articulos',dimin:'articulos',demost:'articulos',pron:'articulos',compuestos:'articulos'};
Object.keys(GR).forEach(k=>{
  if(k.startsWith('prep_')) return;
  const g=GR[k];
  addSkill(k,{n:g.n,grp:g.grp||GR_GRP[k]||'otros',lv:g.lv||2,tip:g.tip||'',ref:g.ref||'',items:g.it.map(a=>toItem(a,k))});
});
/* destrezas que se generan solas a partir del vocabulario: siempre frases nuevas */
addSkill('dehet',{n:'¿De o het?',grp:'articulos',lv:1,tip:'Diminutivos (-je) siempre het; plurales siempre de; casi todo en -ing, -heid y -tie es de; en -um, -ment y las que empiezan por ge- o be- suelen ser het.',ref:'§6',gen:'dehet'});
['adj_e','demost','compar'].forEach(k=>{ if(SK[k]) SK[k].gen=k; });
addSkill('poss',{n:'Ons u onze',grp:'articulos',lv:1,tip:'Nuestro / nuestra: ons con palabras de het en singular (ons huis); onze con palabras de de y con plurales (onze fiets, onze huizen).',ref:'§8',gen:'poss'});
if(SK.mios){ SK.mios.grp='mios'; SK.mios.lv=1; }

/* gramática en cinco bloques: entras y practicas; dentro se mezcla todo y se insiste en lo que más fallas */
const BLOCKS=[
  {k:'prep',n:'Preposiciones',d:'op, in, aan, bij, naar…',c:1},
  {k:'verbos',n:'Verbos',d:'Formas, hebben o zijn, te, pasiva…',c:2},
  {k:'articulos',n:'Artículos, plurales y adjetivos',d:'de/het, plurales, diminutivos…',c:3},
  {k:'orden',n:'Conectores y negación',d:'want/omdat, niet/geen, die/dat, er…',c:4},
  {k:'frases',n:'Orden de la frase',d:'Monta frases con piezas',c:5}
];
const SKGROUPS=[
  {k:'mios',n:'Tus errores',d:'Frases sacadas de tus textos corregidos'},
  {k:'prep',n:'Preposiciones',d:'op, in, aan, bij… cada una con muchas frases'},
  {k:'articulos',n:'Artículos, plurales y adjetivos',d:'de/het, -e del adjetivo, plurales, diminutivos…'},
  {k:'verbos',n:'Verbos',d:'Presente, pasado, hebben o zijn, te + infinitivo…'},
  {k:'orden',n:'Conectores y negación',d:'want/omdat, niet/geen, relativos, er…'},
  {k:'otros',n:'Más reglas',d:''}
];
/* orden en que se van presentando las destrezas nuevas */
const CURR=['mios','prep:op','nietgeen','dehet','prep:in','hebzijn','presente','adj_e','prep:aan','prep:bij','pron','plural','prep:naar','conect','prep:van',
  'demost','poss','prep:met','pasado','prep:voor','teinf','reflex','compar','prep:om','prep:over','cuant','prep:uit','dimin','relat','spell','er','prep:door',
  'prep:tegen','prep:tot','prep:otras','compuestos','pasiva'].filter(k=>SK[k]);
SKEYS.forEach(k=>{ if(!CURR.includes(k)&&k!=='prep') CURR.push(k); });
const ALLG=SKEYS.filter(k=>k!=='prep').flatMap(k=>SK[k].items);
const ALLPUZ=Object.keys(PUZ).flatMap(k=>PUZ[k][1]);

/* ---------- para generar ejercicios: sustantivos concretos y adjetivos con todas sus formas ---------- */
/* [base, con -e, comparativo, superlativo, español m, español f, temas en que encaja] */
const ADJF=[
 ['groot','grote','groter','grootst','grande','grande','*'],['klein','kleine','kleiner','kleinst','pequeño','pequeña','*'],
 ['nieuw','nieuwe','nieuwer','nieuwst','nuevo','nueva','o'],['oud','oude','ouder','oudst','viejo','vieja','*'],
 ['mooi','mooie','mooier','mooist','bonito','bonita','*'],['lelijk','lelijke','lelijker','lelijkst','feo','fea','o'],
 ['duur','dure','duurder','duurst','caro','cara','o'],['goedkoop','goedkope','goedkoper','goedkoopst','barato','barata','o'],
 ['zwaar','zware','zwaarder','zwaarst','pesado','pesada','o'],['vies','vieze','viezer','viest','sucio','sucia','o'],
 ['schoon','schone','schoner','schoonst','limpio','limpia','o'],['wit','witte','witter','witst','blanco','blanca','c'],
 ['zwart','zwarte','zwarter','zwartst','negro','negra','c'],['rood','rode','roder','roodst','rojo','roja','c'],
 ['blauw','blauwe','blauwer','blauwst','azul','azul','c'],['groen','groene','groener','groenst','verde','verde','c'],
 ['geel','gele','geler','geelst','amarillo','amarilla','c'],['lang','lange','langer','langst','largo','larga','o']
];
/* solo temas de cosas físicas (y animales), para que las combinaciones tengan sentido */
const OBJ_TH=['huis','kleding','keuken','gereedschap'], COLOR_TH=['huis','kleding','keuken','gereedschap'];
let GNOUNS=null;
function genNouns(){
  if(GNOUNS) return GNOUNS;
  GNOUNS=[];
  const themes=[...OBJ_TH,'dieren'];
  themes.forEach(th=>{ if(!THEMES[th]) return; THEMES[th].w.forEach(w=>{
    const m=w.nl.match(/^(de|het) ([a-zë’]+)$/); if(!m) return;
    const es=w.es.split(',')[0].replace(/\s*\([^)]*\)\s*/g,' ').trim(), e=es.match(/^(el|la) (.+)$/);
    if(!e||/^(el|la) (a|á|ha|há)/.test(es)||/\(plural\)/.test(w.es)) return;
    GNOUNS.push({w,art:m[1],noun:m[2],esN:e[2],fem:e[1]==='la',th});
  }); });
  return GNOUNS;
}
const ESART={def:['el','la'],ind:['un','una'],my:['mi','mi'],no:['ningún','ninguna'],this:['este','esta'],that:['ese','esa'],our:['nuestro','nuestra'],mine:['mío','mía']};
const esA=(k,n)=>ESART[k][n.fem?1:0];
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
function adjFor(n){ const ok=ADJF.filter(a=>a[6]==='*'||(a[6]==='o'&&n.th!=='dieren')||(a[6]==='c'&&COLOR_TH.includes(n.th))); return pick(ok); }
/* cada generador devuelve un ejercicio de hueco con una sola respuesta posible */
const GEN={
  adj_e(){
    const n=pick(genNouns()), a=adjFor(n), esAdj=n.fem?a[5]:a[4], het=n.art==='het';
    const frames=[
      ()=>['een ___ '+n.noun, het?a[0]:a[1], esA('ind',n)+' '+n.esN+' '+esAdj],
      ()=>[n.art+' ___ '+n.noun, a[1], esA('def',n)+' '+n.esN+' '+esAdj],
      ()=>['mijn ___ '+n.noun, a[1], esA('my',n)+' '+n.esN+' '+esAdj],
      ()=>['geen ___ '+n.noun, het?a[0]:a[1], esA('no',n)+' '+n.esN+' '+esAdj],
      ()=>[(het?'dit':'deze')+' ___ '+n.noun, a[1], esA('this',n)+' '+n.esN+' '+esAdj],
      ()=>[cap(n.art)+' '+n.noun+' is ___.', a[0], cap(esA('def',n))+' '+n.esN+' '+(['vies','schoon'].includes(a[0])?'está':'es')+' '+esAdj+'.']
    ];
    const [q,ans,es]=pick(frames)(), wrong=ans===a[0]?a[1]:a[0];
    const tip=ans===a[0]?(q.endsWith('.')?'Detrás del verbo, el adjetivo va sin -e.':'Palabra de het, en singular y con een, geen o sin artículo: sin -e.'):'Con de, het, mi, este… o con palabras de de: con -e.';
    return {q,a:ans,o:[wrong],es,tip,sk:'adj_e',k:'gen:adj:'+q};
  },
  demost(){
    const n=pick(genNouns()), near=Math.random()<0.5, het=n.art==='het';
    const ans=near?(het?'dit':'deze'):(het?'dat':'die');
    const q=near?'___ '+n.noun+' hier is van mij.':'___ '+n.noun+' daar is van Lotte.';
    const es=near?cap(esA('this',n))+' '+n.esN+' es '+esA('mine',n)+'.':cap(esA('that',n))+' '+n.esN+' es de Lotte.';
    return {q,a:cap(ans),o:['Deze','Dit','Die','Dat'].filter(x=>x!==cap(ans)),es,tip:'Cerca: deze (de) / dit (het). Lejos: die (de) / dat (het).',sk:'demost',k:'gen:dem:'+q+ans};
  },
  poss(){
    const n=pick(genNouns()), ans=n.art==='het'?'ons':'onze';
    const q='Dat is ___ '+n.noun+'.';
    return {q,a:ans,o:[ans==='ons'?'onze':'ons'],es:(n.fem?'Esa':'Ese')+' es '+esA('our',n)+' '+n.esN+'.',tip:'ons con palabras de het en singular; onze con palabras de de.',sk:'poss',k:'gen:pos:'+q};
  },
  compar(){
    const n=pick(genNouns().filter(x=>x.th!=='dieren'));
    const a=pick(ADJF.filter(x=>x[6]!=='c'&&(x[6]==='*'||n.th!=='dieren'))), esAdj=n.fem?a[5]:a[4];
    if(Math.random()<0.5){
      const q='Mijn '+n.noun+' is ___ dan jouw '+n.noun+'.';
      return {q,a:a[2],o:[a[0],a[3],'meer '+a[0]],es:'Mi '+n.esN+' es más '+esAdj+' que '+(n.fem?'la tuya':'el tuyo')+'.',tip:'Comparativo: adjetivo + -er + dan. Tras -r se mete una d: duurder.',sk:'compar',k:'gen:cmp:'+q};
    }
    const rel=n.art==='het'?'dat':'die', sup=a[3]+'e';
    const q='Dit is '+n.art+' ___ '+n.noun+' '+rel+' ik heb.';
    return {q,a:sup,o:[a[3],'meest '+a[1],a[1]],es:(n.fem?'Esta es la ':'Este es el ')+n.esN+' más '+esAdj+' que tengo.',tip:'Superlativo: -st, y delante del sustantivo con -e: de grootste fiets, het mooiste huis.',sk:'compar',k:'gen:sup:'+q};
  }
};
