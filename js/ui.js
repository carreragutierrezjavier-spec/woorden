'use strict';
/* Woorden · pantallas: Hoy, Practicar, Diccionario y Yo */

const VERSION='5.2';
let curTab='home', sheetStack=[];
const TABS=['home','practice','dict','me'];
function showTab(name){
  curTab=name; closeSheet();
  TABS.forEach(t=>{ $('tab-'+t).hidden=t!==name; $('nav-'+t).classList.toggle('on',t===name); });
  window.scrollTo(0,0);
  ({home:renderHome,practice:renderPractice,dict:renderDict,me:renderMe})[name]();
  hud();
}
function refreshUI(){ hud(); if(sheetStack.length) rebuildSheet(); ({home:renderHome,practice:renderPractice,dict:renderDict,me:renderMe})[curTab](); }
function leavePlay(){ $('play').hidden=true; $('end').hidden=true; document.body.classList.remove('playing'); refreshUI(); }
/* subpáginas: se apilan, y «atrás» vuelve a la anterior */
function openSheet(title,build){
  if(sheetStack.length) sheetStack[sheetStack.length-1].y=$('sheet').scrollTop;
  sheetStack.push({title,build,y:0}); renderSheet(0);
}
function renderSheet(y){
  const top=sheetStack[sheetStack.length-1]; if(!top){ $('sheet').hidden=true; return; }
  $('sheetTitle').textContent=top.title; const b=$('sheetBody'); b.innerHTML=''; top.build(b);
  $('sheet').hidden=false; $('sheet').scrollTop=y||0;
}
function rebuildSheet(){ renderSheet($('sheet').scrollTop); }
function backSheet(){ sheetStack.pop(); const top=sheetStack[sheetStack.length-1]; if(top) renderSheet(top.y||0); else closeSheet(); }
function closeSheet(){ sheetStack=[]; $('sheet').hidden=true; }
const WMODES=[['type','Escribir','Siempre se escribe, con su artículo: es lo que mejor las fija. Cada palabra nueva te la presento primero (qué significa, un ejemplo y cómo suena) y la copias una vez.'],
  ['mix','Mezcla','Las primeras veces eliges entre cuatro; cuando ya la has acertado un par de veces, pasas a escribirla.'],
  ['mc','Elegir','Solo eliges entre cuatro. Va más rápido, pero se recuerda menos.']];
function modeCtl(rerender){
  const cur=S.opt.wmode||'type';
  return H('div.modectl',null,
    H('div.seg',null,WMODES.map(m=>H('button'+(cur===m[0]?'.on':''),{type:'button',text:m[1],onclick:()=>{ S.opt.wmode=m[0]; save(); rerender(); }}))),
    H('p.setnote',{text:WMODES.find(m=>m[0]===cur)[2]}));
}
const bar=(pct,cls)=>H('div.bar'+(cls?'.'+cls:''),null,H('i',{style:'width:'+clamp(pct*100,0,100)+'%'}));
const bar2=(a,b)=>H('div.bar.two',null,H('i.b',{style:'width:'+clamp(b*100,0,100)+'%'}),H('i',{style:'width:'+clamp(a*100,0,100)+'%'}));
const pl=(n,one,many)=>n+' '+(n===1?one:many);
const fmt=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const skName=id=>{ const s=SK[id]; if(!s) return id; return s.grp==='prep'&&id!=='prep'?(s.n==='Las demás'?'otras preposiciones':'la preposición «'+s.n+'»'):s.n; };

/* ======================= HOY ======================= */
function greeting(){ const h=new Date().getHours(); return h<6?'Goedenacht':h<12?'Goedemorgen':h<18?'Goedemiddag':'Goedenavond'; }
function ringSvg(){
  return '<svg class="ring" viewBox="0 0 120 120" aria-hidden="true"><circle class="bg" cx="60" cy="60" r="50"/><circle class="fg" id="ringFg" cx="60" cy="60" r="50" transform="rotate(-90 60 60)" stroke-dasharray="314.16" stroke-dashoffset="314.16"/></svg>';
}
function homeRing(){
  const fg=$('ringFg'); if(!fg) return;
  const g=goalXp(), p=Math.min(1,S.day.xp/g);
  fg.setAttribute('stroke-dashoffset',String(314.16*(1-p)));
  $('ringXp').textContent=S.day.xp; $('ringGoal').textContent='de '+g+' XP';
}
/* qué conviene hacer aparte de las rondas: lo que menos has tocado esta semana */
/* días desde la última vez que hiciste algo de un área: v vocabulario, g gramática, l oído, c conversación, f frases */
function daysSince(area){ const t=T(); for(let d=t;d>=t-60;d--){ const L=S.log[d]; if(L&&L.a&&L.a[area]) return t-d; } return 99; }
/* qué te recomiendo ahora: tus errores; lo que llevas días sin tocar; lo que no has empezado; y si no, equilibrar */
function guide(){
  const t=T();
  if(SK.mios&&SK.mios.items.length&&!skillState('mios').done&&skillState('mios').ls!==t)
    return {title:'Tus errores de los textos',why:'Frases de lo que me has mandado para corregir. Vuelven hasta que las aciertes casi todas.',go:()=>play('gram','mios'),c:6};
  { const d=new Date(), m=d.getMonth(), day=d.getDate(), fd=SUBBY['th:feestdagen'];
    if(fd&&((m===10&&day>=10)||(m===11&&day<=5))&&fd.w.filter(w=>!seen(w.k)).length>5&&!(td().k['rec:fd']))
      return {title:'Sinterklaas',why:'Hasta el 5 de diciembre: el vocabulario de las fiestas (lootjes, pepernoten, het gedicht…).',go:()=>{ td().k['rec:fd']=1; play('sub','th:feestdagen'); },c:2}; }
  const bs=BLOCKS.map(b=>({b,st:blockState(b.k)}));
  const stale=bs.filter(x=>x.st.answers).map(x=>Object.assign(x,{d:t-x.st.last})).sort((a,b)=>b.d-a.d)[0];
  if(stale&&stale.d>=3) return {title:stale.b.n,why:'Llevas '+stale.d+' días sin practicarlo.',go:()=>play('block',stale.b.k),c:stale.b.c};
  const never=bs.find(x=>!x.st.answers);
  if(never) return {title:never.b.n,why:'Todavía no lo has probado. Entras y practicas: lo que falles, te lo explico.',go:()=>play('block',never.b.k),c:never.b.c};
  if(daysSince('l')>=4) return {title:'Escuchar',why:'Llevas '+(daysSince('l')>60?'mucho':daysSince('l')+' días')+' sin practicar el oído.',go:()=>play('hearTiles'),c:5};
  if(daysSince('c')>=5) return {title:'Charla con Lotte',why:'Hace días que no practicas conversación.',go:()=>play('chat'),c:4};
  if(daysSince('v')>=3) return {title:'Vocabulario',why:'Llevas '+daysSince('v')+' días sin palabras nuevas.',go:()=>play('random'),c:1};
  /* lo que menos has hecho esta semana */
  const a={v:0,g:0,f:0,l:0,c:0}; let tot=0;
  for(let d=t-6;d<=t;d++){ const L=S.log[d]; if(L&&L.a) for(const k in L.a){ a[k]=(a[k]||0)+L.a[k]; tot+=L.a[k]; } }
  if(tot>=40&&a.g/tot<0.25){ const w=bs.slice().sort((x,y)=>(x.st.done/x.st.n)-(y.st.done/y.st.n))[0]; return {title:w.b.n,why:'Esta semana solo el '+Math.round(a.g/tot*100)+' % de lo que has hecho ha sido gramática.',go:()=>play('block',w.b.k),c:w.b.c}; }
  const ng=nounGroups()[0];
  return ng?{title:ng.n,why:'Es el grupo de palabras que menos has visto: '+learned(ng.w)+' de '+ng.w.length+'.',go:()=>play('sub',ng.k),c:1}:null;
}
const recommend=guide;
/* los grupos de sustantivos, con lo que menos has hecho arriba */
function nounGroups(){
  const gp=S.gp||{};
  return SUBS.sust.map(s=>({s,f:learned(s.w)/s.w.length,p:gp['sub:'+s.k]||0})).sort((a,b)=>(a.f+a.p*0.03)-(b.f+b.p*0.03)).map(x=>x.s);
}
function guideCard(g,label){
  return H('button.guide.c'+(g.c||1),{type:'button',onclick:g.go},
    H('span.gd-k',{text:label||'Te recomiendo'}),H('span.gd-t',{text:g.title}),H('span.gd-w',{text:g.why}),H('span.gd-go',{text:'Empezar'}));
}
/* azulejo grande de color: lo que se toca para practicar */
function tile(title,sub,pct,go,c,wide){
  return H('button.tile2.c'+(c||1)+(wide?'.wide':''),{type:'button',onclick:go},
    H('span.t2-t',{text:title}),sub?H('span.t2-s',{text:sub}):null,
    pct==null?null:H('span.t2-bar',null,H('i',{style:'width:'+clamp(pct*100,0,100)+'%'})));
}
function renderHome(){
  ensureDay(); ensureMissions();
  const el=$('tab-home'); el.innerHTML='';
  const p=planRound(), done=S.day.done, r=td().r, mins=Math.max(2,Math.round(p.N*0.25));
  const parts=[];
  if(p.news.length) parts.push(pl(p.news.length,'palabra nueva','palabras nuevas'));
  if(p.revs.length) parts.push(pl(p.revs.length,'repaso','repasos'));
  if(p.skills.length) parts.push(p.skills.map(skName).join(' y '));
  const hero=H('div.hero'+(done?'.done':''));
  ['tl','tr','bl','br'].forEach(c=>hero.appendChild(H('span.orn.'+c,{html:CORNER})));
  hero.append(
    H('p.hero-hi',{text:greeting()+'!'}),
    H('h1',{text:done?'Objetivo de hoy cumplido':(r?'Ronda '+(r+1)+' de hoy':'Tu primera ronda de hoy')}),
    H('div.ringwrap',null,H('span',{html:ringSvg()}),H('div.ringtxt',null,H('b',{id:'ringXp',text:'0'}),H('small',{id:'ringGoal',text:''}))),
    H('p.hero-sub',{text:'En esta ronda: '+parts.join(' · ')}),
    H('button.btn.solid.big.playbtn',{type:'button',text:done?'Otra ronda':'Jugar',onclick:()=>play('daily')}),
    H('p.hero-foot',{text:p.N+' preguntas · unos '+mins+' minutos'+(p.due>20?' · '+p.due+' repasos pendientes':'')}));
  el.appendChild(hero);
  requestAnimationFrame(homeRing);

  /* recompensas sin recoger */
  if(S.pend>0) el.appendChild(H('button.claim',{type:'button',onclick:()=>showChest('session','Cofre de la ronda',refreshUI)},H('b',{text:S.pend===1?'Tienes un cofre sin abrir':'Tienes '+S.pend+' cofres sin abrir'}),H('span',{text:'Te lo ganaste al terminar una ronda'})));
  if(S.day.done&&!S.day.wheel) el.appendChild(H('button.claim',{type:'button',onclick:()=>showWheel(refreshUI)},H('b',{text:'La ruleta del día te espera'}),H('span',{text:'Una tirada por cumplir el objetivo'})));
  if(S.mis.chest) el.appendChild(H('button.claim',{type:'button',onclick:()=>{ S.mis.chest=false; save(); showChest('missions','Cofre de las tres misiones',refreshUI); }},H('b',{text:'Cofre de las misiones'}),H('span',{text:'Has cumplido las tres de hoy'})));

  /* la historia */
  const c=storyCur();
  if(c){
    const pend=storyPending(), n=STORY.indexOf(c)+1;
    el.appendChild(H('button.storycard'+(pend?'.new':''),{type:'button',onclick:()=>openStory(pend?c.id:null)},
      H('span.sc-k',{text:'Historia · capítulo '+n+' de '+STORY.length}),
      H('b.sc-t',{text:c.t}),
      H('span.sc-d',{text:pend?(c.te||'')+' · para leer hoy':(n<STORY.length?'Leído. El siguiente se abre cuando cumplas el objetivo'+(S.day.done?' de mañana.':' de hoy.'):'Has terminado la temporada.')})));
  }

  /* recomendación */
  const rec=guide();
  if(rec) el.appendChild(guideCard(rec,'Además de la ronda, te recomiendo'));

  /* misiones */
  const mp=H('div.panel');
  mp.appendChild(H('div.ph',null,H('h2',{text:'Misiones de hoy'}),H('span.pr',{text:S.mis.list.filter(m=>m.done).length+' de '+S.mis.list.length})));
  S.mis.list.forEach(ms=>{
    const d=mDef(ms.id);
    mp.appendChild(H('div.mis'+(ms.done?'.done':''),null,
      H('div.mt',null,H('div',null,mText(ms),d.n>1?H('small',{text:' '+Math.min(ms.p,d.n)+' / '+d.n}):null),bar(ms.p/d.n)),
      H('span.mr',{html:COIN_SVG+'<span>'+d.c+'</span>'}),
      ms.done?null:H('button.btn.sm',{type:'button',text:'Ir',onclick:()=>missionGo(ms)})));
  });
  mp.appendChild(H('p.pfoot',{text:S.mis.bonus?'Las tres cumplidas. Mañana, misiones nuevas.':'Cumple las tres y te llevas un cofre con un azulejo.'}));
  el.appendChild(mp);

  /* punto débil */
  const wp=H('div.panel'); wp.appendChild(H('h2',{text:'Tu punto débil'}));
  const ws=weaknesses().slice(0,2);
  if(!ws.length){
    const tot=Object.values(S.stats).reduce((a,s)=>a+s.ok+s.bad,0);
    wp.appendChild(H('p.pfoot',{text:tot<30?'Juega un par de rondas y aquí te diré dónde fallas más y cómo arreglarlo.':'Ahora mismo no hay nada que falles a menudo. Sigue así.'}));
  }
  ws.forEach(w=>{
    const i=catInfo(w.cat);
    const tip=H('p.wt',{text:i.tip,hidden:true});
    wp.appendChild(H('div.weak',null,
      H('div.wh',null,H('span.wl',{text:i.label}),H('span.wr',{text:Math.round(w.pct*100)+' % de fallo'})),
      tip,
      H('div.row',null,H('button.btn.solid.sm',{type:'button',text:'Practicar',onclick:i.go}),
        i.tip?H('button.linkbtn',{type:'button',text:'Ver la regla',onclick:e=>{ tip.hidden=!tip.hidden; e.target.textContent=tip.hidden?'Ver la regla':'Ocultar'; }}):null)));
  });
  el.appendChild(wp);
}

/* ======================= PRACTICAR ======================= */
const skillsReal=()=>SKEYS.filter(id=>id!=='prep'&&hasStuff(id));
function renderPractice(){
  const el=$('tab-practice'); el.innerHTML='';
  el.appendChild(H('h1.pagetitle',{text:'Practicar'}));
  const g=guide(); if(g) el.appendChild(guideCard(g));
  const words=ALLW.length, seenW=learned(ALLW), bks=BLOCKS.map(b=>blockState(b.k)), skn=bks.reduce((a,x)=>a+x.n,0), skd=bks.reduce((a,x)=>a+x.done,0);
  const grid=H('div.tgrid');
  grid.append(
    tile('Vocabulario',fmt(seenW)+' de '+fmt(words)+' palabras vistas',seenW/words,()=>openSheet('Vocabulario',sheetVocab),1),
    tile('Gramática',skd+' de '+skn+' reglas dominadas',skn?skd/skn:0,()=>openSheet('Gramática',sheetGrammar),2),
    tile('Escuchar','Frases, dictado, números',null,()=>openSheet('Escuchar',sheetListen),5),
    tile('Conversación','Lotte y la historia de Mateo',null,()=>openSheet('Conversación',sheetTalk),4));
  el.appendChild(grid);
  el.appendChild(H('button.blitz',{type:'button',onclick:()=>play('blitz')},
    H('span.bz-t',{text:'Blitz 60'}),H('span.bz-d',{text:'Un minuto contra el reloj'}),H('span.bz-r',{text:'Récord: '+(S.best.blitz||0)})));
}
function rowItem(title,sub,pctDone,pctSeen,onGo,extra,cls){
  return H('div.rowitem'+(cls?'.'+cls:''),null,
    H('button.ri-main',{type:'button',onclick:onGo},H('span.ri-t',{text:title}),sub?H('span.ri-s',{text:sub}):null,pctDone==null?null:bar2(pctDone,pctSeen==null?pctDone:pctSeen)),
    extra||null);
}
const wcount=ws=>{ const n=ws.length, d=mastered(ws), s=learned(ws); return {n,d,s,txt:pl(s,'vista','vistas')+' · '+pl(d,'dominada','dominadas')+' · '+n+' en total'}; };
function sheetVocab(b){
  b.appendChild(tile('Al azar: de todo','Palabras nuevas y repasos de cualquier tema',null,()=>play('random'),1,true));
  const grid=H('div.tgrid'), gw=k=>[...new Set(SUBS[k].flatMap(s=>s.w))];
  const sw=gw('sust');
  grid.appendChild(tile('Sustantivos',fmt(learned(sw))+' de '+fmt(sw.length)+' vistas',learned(sw)/sw.length,()=>openSheet('Sustantivos',sheetNouns),1));
  { const vs=VERBS.filter(v=>seen('v:'+v[0])).length; grid.appendChild(tile('Verbos','Qué significan, las 4 formas y hebben o zijn',vs/VERBS.length,()=>play('verbs','all'),3)); }
  [['adj',4],['util',5],['expr',2]].forEach(([k,c])=>{
    const g=GROUPS.find(x=>x.k===k), ws=gw(k); if(!ws.length) return;
    grid.appendChild(tile(g.n,learned(ws)+' de '+ws.length+' vistas',learned(ws)/ws.length,()=>play('group',k),c));
  });
  const ld=learned(LANDEN,l=>'c:'+l[1]);
  grid.appendChild(tile('Países y nacionalidades',ld+' de '+LANDEN.length+' vistos',ld/LANDEN.length,()=>play('countries'),6));
  if(THEMES.mias&&THEMES.mias.w.length) grid.appendChild(tile('Mis palabras',learned(THEMES.mias.w)+' de '+THEMES.mias.w.length+' vistas',learned(THEMES.mias.w)/THEMES.mias.w.length,()=>play('theme','mias'),1));
  const fails=failWords();
  if(fails.length) grid.appendChild(tile('Mis fallos',pl(fails.length,'palabra','palabras')+' que se te resisten',null,()=>play('fails'),6));
  b.appendChild(grid);
  b.appendChild(H('p.sheetnote',{text:'Cada palabra nueva sale primero para elegir. Cuando la aciertas, la siguiente vez la reconoces de oído y después ya la escribes. Al final de cada ronda, une las parejas.'}));
}
function sheetNouns(b){
  const all=[...new Set(SUBS.sust.flatMap(s=>s.w))];
  b.appendChild(tile('Todos los sustantivos',fmt(learned(all))+' de '+fmt(all.length)+' vistas',learned(all)/all.length,()=>play('group','sust'),1,true));
  b.appendChild(H('p.sheetnote',{text:'Arriba, lo que menos has hecho.'}));
  const grid=H('div.tgrid');
  nounGroups().forEach((s,i)=>grid.appendChild(tile(s.n,learned(s.w)+' de '+s.w.length+' vistas',learned(s.w)/s.w.length,()=>play('sub',s.k),(i%6)+1)));
  b.appendChild(grid);
}
function skillRow(id,noPlay){
  const sk=SK[id], st=skillState(id);
  const size=sk.gen&&!sk.items.length?'frases nuevas cada vez':(sk.gen?sk.items.length+' frases y más que se generan':pl(sk.items.length,'frase','frases'));
  const title=sk.grp==='prep'&&id!=='prep'?(sk.n==='Las demás'?'Las demás preposiciones':sk.n):sk.n;
  return rowItem(title,(st.n?st.label:'Sin empezar')+(noPlay?'':' · '+size),st.n>=5?st.acc:0,null,noPlay?null:()=>play('gram',id),st.done?H('span.badge',{text:'Dominada'}):null,[st.done?'mastered':'',noPlay?'static':''].filter(Boolean).join('.'));
}
function sheetGrammar(b){
  const grid=H('div.tgrid');
  if(SK.mios&&SK.mios.items.length&&!skillState('mios').done){ const st=skillState('mios'); grid.appendChild(tile('Tus errores',st.n?st.label:'Frases de tus textos',st.n>=5?st.acc:0,()=>play('gram','mios'),6,true)); }
  BLOCKS.forEach(bk=>{
    const st=blockState(bk.k);
    const sub=st.answers?st.done+' de '+st.n+(bk.k==='frases'?' grupos':' reglas')+' dominadas':bk.d;
    grid.appendChild(tile(bk.n,sub,st.answers?st.done/st.n:null,()=>play('block',bk.k),bk.c,bk.k==='frases'));
  });
  b.appendChild(grid);
  b.appendChild(H('p.sheetnote',{text:'Entras y practicas: cada bloque mezcla todo lo suyo e insiste en lo que más fallas. Cuando aparece algo nuevo, primero te lo explico.'}));
  b.appendChild(H('button.linkbtn.more',{type:'button',text:'Ver el progreso de cada regla',onclick:()=>openSheet('Cada regla',sheetRules)}));
}
function sheetRules(b){
  b.appendChild(H('p.sheetnote',{text:'Una regla está dominada cuando aciertas 9 de cada 10 de tus últimas 20 respuestas.'}));
  BLOCKS.forEach(bk=>{
    b.appendChild(H('h3.sheeth.c'+bk.c,{text:bk.n}));
    if(bk.k==='frases'){ Object.keys(PUZ).forEach(k=>{ const st=skillState('puz:'+k); b.appendChild(rowItem(PUZ[k][0],st.n?st.label:'Sin empezar',st.n>=5?st.acc:0,null,()=>play('puzzle',k),st.done?H('span.badge',{text:'Dominada'}):null,st.done?'mastered':'')); }); return; }
    if(bk.k==='verbos'){ const st=skillState('v4'); b.appendChild(rowItem('Las cuatro formas',st.n?st.label:'Sin empezar',st.n>=5?st.acc:0,null,()=>play('verbs','all'),st.done?H('span.badge',{text:'Dominada'}):null)); }
    if(bk.k==='articulos') b.appendChild(rowItem('¿De o het? contrarreloj','Un minuto · récord: '+(S.best.dehet||0),null,null,()=>play('dehet')));
    blockSkills(bk.k).filter(id=>id!=='v4').forEach(id=>b.appendChild(skillRow(id,bk.k==='prep')));
  });
}
function sheetPuz(b){
  b.appendChild(rowItem('Todo mezclado',ALLPUZ.length+' frases',null,null,()=>play('puzzle'),null,'hl'));
  Object.keys(PUZ).forEach(k=>{ const its=PUZ[k][1], d=mastered(its,p=>'p:'+p.n), s=learned(its,p=>'p:'+p.n);
    b.appendChild(rowItem(PUZ[k][0],s+' de '+its.length+' vistas',d/its.length,s/its.length,()=>play('puzzle',k))); });
}
function sheetListen(b){
  if(!voice) b.appendChild(H('p.sheetnote.warn',{text:'No encuentro una voz neerlandesa en este dispositivo. Mira «Yo › Ajustes» para instalarla.'}));
  b.appendChild(rowItem('Escucha y ordena','Oyes una frase y la montas con las piezas, sin ver la traducción',null,null,()=>play('hearTiles'),null,'hl'));
  b.appendChild(rowItem('¿Qué has oído?','Oyes una frase y eliges qué significa · '+fmt(sentPool().length)+' frases',null,null,()=>play('hear')));
  b.appendChild(rowItem('Dictado de palabras','Oyes una palabra y la escribes con su artículo',null,null,()=>play('dictation')));
  b.appendChild(rowItem('Números y horas','Lo oyes en neerlandés y lo escribes en cifras',null,null,()=>play('numbers')));
  b.appendChild(rowItem('¿Cuál has oído?','man o maan, huur o hoer, deur o duur: afina el oído',null,null,()=>play('pairs')));
}
function sheetTalk(b){
  if(STORY.length){ const rd=Object.keys(S.story.done).length; b.appendChild(rowItem('Historia de Mateo',rd+' de '+STORY.length+' capítulos leídos · uno nuevo cada día que cumples el objetivo',rd/STORY.length,null,()=>openStory(),null,'hl')); }
  const cd=mastered(CHAT,c=>'h:'+c.q), cs=learned(CHAT,c=>'h:'+c.q);
  b.appendChild(rowItem('Charla con Lotte','Te pregunta como en clase y eliges la respuesta buena · '+cs+' de '+CHAT.length+' vistas',cd/CHAT.length,cs/CHAT.length,()=>play('chat')));
}

/* ======================= DICCIONARIO ======================= */
const D={q:'',f:'all',th:'',n:80,open:null};
function dots(k){ const s=Math.min(5,stage(k)); return H('span.dots',{title:'Nivel de repaso'},[0,1,2,3,4].map(i=>H('i'+(i<s?'.on':'')))); }
function dueText(k){
  const d=dueIn(k); if(d==null) return 'Todavía no la has visto.';
  const st=stage(k)>=5?'Dominada. ':'Aprendiendo. ';
  return st+(d<=0?'Toca repasarla hoy.':d===1?'Próximo repaso: mañana.':'Próximo repaso: dentro de '+d+' días.');
}
function renderDict(){
  const el=$('tab-dict'); el.innerHTML='';
  el.appendChild(H('h1.pagetitle',{text:'Diccionario'}));
  el.appendChild(H('p.pagesub',{text:fmt(ALLW.length)+' palabras · '+learned(ALLW)+' vistas · '+mastered(ALLW)+' dominadas'}));
  const inp=H('input.txt.search',{type:'search',placeholder:'Buscar en neerlandés o en español',value:D.q,autocomplete:'off',autocapitalize:'off',spellcheck:'false'});
  let deb=null; inp.addEventListener('input',()=>{ clearTimeout(deb); deb=setTimeout(()=>{ D.q=inp.value; D.n=80; listDict(); },160); });
  el.appendChild(inp);
  const sel=H('select.thsel',{'aria-label':'Grupo o tema'},H('option',{value:'',text:'Todas las palabras'}),
    GROUPS.map(g=>H('optgroup',{label:g.n},H('option',{value:'g:'+g.k,text:'Todos: '+g.n.toLowerCase(),selected:D.th==='g:'+g.k||null}),SUBS[g.k].map(s=>H('option',{value:s.k,text:s.n,selected:D.th===s.k||null})))));
  sel.addEventListener('change',()=>{ D.th=sel.value; D.n=80; listDict(); });
  const fl=H('div.seg',null,[['all','Todas'],['learning','Aprendiendo'],['done','Dominadas'],['new','Sin ver']].map(x=>H('button'+(D.f===x[0]?'.on':''),{type:'button',text:x[1],onclick:e=>{ D.f=x[0]; D.n=80; [...fl.children].forEach(c=>c.classList.remove('on')); e.target.classList.add('on'); listDict(); }})));
  el.append(H('div.dictctl',null,sel,H('button.btn.sm',{type:'button',text:'Añadir palabra',onclick:()=>openSheet('Añadir una palabra',sheetAdd)})),fl,H('div',{id:'dictList'}));
  listDict();
}
function listDict(){
  const box=$('dictList'); if(!box) return; box.innerHTML='';
  const q=norm(D.q);
  let list=!D.th?ALLW:(D.th.startsWith('g:')?[...new Set(SUBS[D.th.slice(2)].flatMap(s=>s.w))]:(SUBBY[D.th]?SUBBY[D.th].w:ALLW));
  if(q) list=list.filter(w=>norm(w.nl).includes(q)||norm(w.es).includes(q));
  if(D.f!=='all') list=list.filter(w=>statusOf(w.k)===D.f);
  box.appendChild(H('p.count',{text:list.length+(list.length===1?' palabra':' palabras')}));
  list.slice(0,D.n).forEach(w=>box.appendChild(wordRow(w)));
  if(list.length>D.n) box.appendChild(H('button.btn.big',{type:'button',text:'Ver más',onclick:()=>{ D.n+=120; listDict(); }}));
  if(!list.length) box.appendChild(H('p.pfoot',{text:'Nada por aquí. Prueba con otra búsqueda o añade la palabra tú mismo.'}));
}
function wordRow(w){
  const row=H('div.wrow'+(D.open===w.k?'.open':''));
  const head=H('button.wr-h',{type:'button',onclick:()=>{ D.open=D.open===w.k?null:w.k; listDict(); }},
    H('span.wr-nl',null,nlNode(w.nl)),H('span.wr-es',{text:w.es}),dots(w.k));
  row.append(head,speakBtn(w.nl,true,0.9));
  if(D.open===w.k){
    const det=H('div.wr-d');
    det.appendChild(H('p',{text:THEMES[w.th].n+' · '+dueText(w.k)}));
    if(w.nl.includes('|')) det.appendChild(H('p',{text:'También vale: '+w.nl.split('|').slice(1).join(', ')}));
    const v=w.th==='verbos'&&VERBS.find(x=>x[0]===w.nl);
    if(v) det.appendChild(H('div.forms',null,[v[0],v[2],v[3],v[4]].map(a=>H('span',{text:a.replace('|',' / ')}))),H('p',{text:'Perfecto con '+v[5]+'.'}));
    const btns=H('div.row');
    if(!isMastered(w.k)) btns.appendChild(H('button.btn.sm',{type:'button',text:'Ya me la sé',onclick:()=>{ markKnown(w.k); listDict(); }}));
    if(seen(w.k)) btns.appendChild(H('button.btn.sm.ghost',{type:'button',text:'Empezar de cero',onclick:()=>{ delete S.it[w.k]; save(); listDict(); }}));
    if(w.mine) btns.appendChild(H('button.btn.sm.ghost',{type:'button',text:'Borrar',onclick:()=>{ S.custom=S.custom.filter(c=>c[0]!==w.nl); delete S.it[w.k]; save(); loadCustom(); renderDict(); }}));
    det.appendChild(btns); row.appendChild(det);
  }
  return row;
}
function sheetAdd(b){
  b.appendChild(H('p.sheetnote',{text:'Las palabras que añadas entran en tu sesión diaria como cualquier otra. Los sustantivos, siempre con su artículo: «de fiets», «het huis».'}));
  const nl=textInput('En neerlandés, por ejemplo: de afspraak'), es=textInput('En español, por ejemplo: la cita');
  const msg=H('p.formmsg');
  const add=()=>{
    const a=nl.value.trim().replace(/\s+/g,' '), e=es.value.trim();
    if(!a||!e){ msg.textContent='Faltan las dos partes: neerlandés y español.'; return; }
    if(/[=;|]/.test(a+e)){ msg.textContent='Sin los signos = ; |'; return; }
    if(WBY[norm(a)]){ msg.textContent='«'+a+'» ya está en la lista.'; return; }
    S.custom.push([a,e]); save(true); loadCustom();
    msg.textContent='Añadida: '+a+' = '+e+'. Puedes meter otra.'; nl.value=''; es.value=''; nl.focus();
  };
  b.append(H('label.fld',null,H('span',{text:'Neerlandés'}),nl),H('label.fld',null,H('span',{text:'Español'}),es),
    H('div.row',null,H('button.btn.solid',{type:'button',text:'Añadir',onclick:add}),H('button.btn.ghost',{type:'button',text:'Escuchar',onclick:()=>say(nl.value,0.9)})),msg);
  if(S.custom.length){ b.appendChild(H('h3.sheeth',{text:'Tus palabras ('+S.custom.length+')'})); S.custom.slice().reverse().forEach(c=>b.appendChild(H('div.wrow.plain',null,H('span.wr-nl',null,nlNode(c[0])),H('span.wr-es',{text:c[1]})))); }
}

/* ======================= YO ======================= */
let meSub='stats';
const ME=[['stats','Estadísticas'],['tiles','Azulejos'],['ach','Logros'],['shop','Tienda'],['set','Ajustes']];
function renderMe(){
  const el=$('tab-me'); el.innerHTML='';
  const seg=H('div.seg.scroll',null,ME.map(x=>H('button'+(meSub===x[0]?'.on':''),{type:'button',text:x[1],onclick:()=>{ meSub=x[0]; renderMe(); }})));
  const body=H('div.mebody');
  el.append(seg,body);
  ({stats:meStats,tiles:meTiles,ach:meAch,shop:meShop,set:meSettings})[meSub](body);
}
function timeText(sec){ const h=Math.floor(sec/3600), m=Math.round(sec%3600/60); return h?h+' h '+m+' min':m+' min'; }
function meStats(b){
  const ok=S.life.ok||0, bad=S.life.bad||0, tot=ok+bad, days=Object.values(S.log).filter(l=>l.x>0).length;
  const lv=levelOf(S.xp), next=LEVELS[lv+1];
  b.appendChild(H('div.lvcard',null,H('p.lv-k',{text:'Nivel '+(lv+1)}),H('p.lv-n',{text:LEVELS[lv][1]}),
    bar(next?(S.xp-LEVELS[lv][0])/(next[0]-LEVELS[lv][0]):1),
    H('p.lv-s',{text:fmt(S.xp)+' XP'+(next?' · faltan '+fmt(next[0]-S.xp)+' para '+next[1]:' · nivel máximo')})));
  const st=(n,l)=>H('div.stat',null,H('b',{text:n}),H('span',{text:l}));
  b.appendChild(H('div.stats',null,
    st(streakNow(),'días de racha'),st(S.life.maxStreak||0,'mejor racha'),
    st(learned(ALLW),'palabras vistas'),st(mastered(ALLW),'palabras dominadas'),
    st(skillsReal().filter(id=>skillState(id).done).length+' de '+skillsReal().length,'reglas dominadas'),st(Object.keys(S.story.done).length,'capítulos leídos'),
    st(tot?Math.round(ok/tot*100)+' %':'—','de acierto'),st(timeText(S.life.secs||0),'jugando'),
    st(days,'días con juego'),st(S.life.sessions||0,'sesiones diarias')));

  /* calendario */
  b.appendChild(H('h2.sec',{text:'Tus últimas semanas'}));
  const W=16, t=T(), dow=(new Date().getDay()+6)%7, goal=goalXp();
  const heat=H('div.heat',{role:'img','aria-label':'Calendario de actividad de las últimas '+W+' semanas'});
  for(let c=0;c<W;c++){ const col=H('div.hcol');
    for(let r=0;r<7;r++){ const dn=t-dow-(W-1-c)*7+r, x=dn>t?-1:((S.log[dn]||{}).x||0);
      const lvl=x<0?'f':x===0?0:x<goal*0.5?1:x<goal?2:x<goal*2?3:4;
      col.appendChild(H('i.h'+lvl,{title:x<0?'':dayLabel(dn)+': '+x+' XP'})); }
    heat.appendChild(col); }
  b.appendChild(heat);
  b.appendChild(H('p.legend',null,'Menos ',H('i.h0'),H('i.h1'),H('i.h2'),H('i.h3'),H('i.h4'),' Más · el tono fuerte es objetivo cumplido'));

  /* XP por día */
  b.appendChild(H('h2.sec',{text:'XP de los últimos 14 días'}));
  const days14=[]; for(let i=13;i>=0;i--) days14.push([t-i,(S.log[t-i]||{}).x||0]);
  const mx=Math.max(goal*1.2,...days14.map(d=>d[1]));
  const chart=H('div.xpchart',{role:'img','aria-label':'XP por día, últimos 14 días'});
  chart.appendChild(H('span.goal',{style:'bottom:'+(goal/mx*100)+'%'},H('small',{text:'objetivo '+goal})));
  days14.forEach(d=>chart.appendChild(H('div.xb',{title:dayLabel(d[0])+': '+d[1]+' XP'},H('i'+(d[1]>=goal?'.hit':''),{style:'height:'+(d[1]/mx*100)+'%'}),H('small',{text:String(dayDate(d[0]).getUTCDate())}))));
  b.appendChild(chart);

  /* acierto por categoría */
  const cats=Object.entries(S.stats).map(([cat,s])=>({cat,n:s.ok+s.bad,ok:s.ok/Math.max(1,s.ok+s.bad),info:catInfo(cat)})).filter(c=>c.n>=5&&c.info).sort((a,b)=>a.ok-b.ok);
  b.appendChild(H('h2.sec',{text:'Dónde aciertas y dónde no'}));
  if(!cats.length) b.appendChild(H('p.pfoot',{text:'Aún no hay datos suficientes. Con un par de sesiones empezará a llenarse.'}));
  cats.slice(0,10).forEach(c=>b.appendChild(H('div.catrow',null,H('div.cr-h',null,H('span',{text:c.info.label}),H('b',{text:Math.round(c.ok*100)+' %'})),bar(c.ok,c.ok<0.6?'bad':(c.ok<0.8?'mid':'good')))));

  /* curiosidades */
  b.appendChild(H('h2.sec',{text:'Curiosidades'}));
  const facts=[];
  const nem=Object.entries(S.nem||{}).filter(e=>/^[wvc]:/.test(e[0])&&!isMastered(e[0])).sort((a,b)=>b[1]-a[1])[0];
  if(nem) facts.push(['Tu némesis',first(nem[0].slice(2))+' · fallada '+nem[1]+(nem[1]===1?' vez':' veces')]);
  const longest=ALLW.filter(w=>isMastered(w.k)&&!w.nl.includes(' ')).sort((a,b)=>b.nl.length-a.nl.length)[0];
  if(longest) facts.push(['La palabra más larga que dominas',longest.nl+' ('+longest.nl.length+' letras)']);
  const hrs=Object.entries(S.life.h||{}).sort((a,b)=>b[1]-a[1])[0];
  if(hrs) facts.push(['Tu hora de jugar','De '+hrs[0]+':00 a '+((+hrs[0]+1)%24)+':00']);
  facts.push(['Respuestas en total',fmt(tot)],['Mejor combo','×'+(S.life.maxCombo||0)],['Récord en Blitz',String(S.best.blitz||0)],['Récord en ¿De o het?',String(S.best.dehet||0)],
    ['Golpes críticos',fmt(S.life.crits||0)],['Cofres abiertos',fmt(S.life.chests||0)],['Stroopwafels ganados',fmt(S.life.coins||0)],
    ['Azulejos',Object.keys(S.tiles).length+' de '+TEGELS.length],['Verbos dominados',mastered(VERBS,v=>'v:'+v[0])+' de '+VERBS.length]);
  /* a este ritmo: palabras nuevas por día en las dos últimas semanas */
  { const t=T(); let n=0; for(let d=t-13;d<=t;d++) n+=(S.log[d]||{}).n||0; const left=ALLW.filter(w=>!seen(w.k)).length;
    if(n>=5&&left){ const days=Math.ceil(left/(n/14)), when=dayDate(t+days); facts.unshift(['A este ritmo verás todo el vocabulario',days<60?'en '+days+' días':'hacia '+MESES[when.getUTCMonth()]+' de '+when.getUTCFullYear()]); } }
  b.appendChild(H('dl.facts',null,facts.map(f=>H('div',null,H('dt',{text:f[0]}),H('dd',{text:f[1]})))));
}
function meTiles(b){
  const own=Object.keys(S.tiles).length;
  b.appendChild(H('p.pagesub',{text:own+' de '+TEGELS.length+' azulejos. Cada uno es un refrán o un dicho holandés: salen en los cofres y en la ruleta. Toca uno para oírlo y ver qué significa.'}));
  [4,3,2,1].forEach(r=>{
    const ts=TEGELS.filter(t=>t.r===r);
    b.appendChild(H('h2.sec',{text:RAR[r]+' · '+ts.filter(t=>S.tiles[t.id]).length+' de '+ts.length}));
    const g=H('div.album');
    ts.forEach(t=>{
      const has=!!S.tiles[t.id], e=tileEl(t,{locked:!has});
      if(has){ e.setAttribute('role','button'); e.tabIndex=0; e.addEventListener('click',()=>{ say(t.nl,0.85);
        openModal(H('div.tileview',null,tileEl(t,{big:true}),H('div.row.center',null,speakBtn(t.nl,false,0.85)),H('button.btn.solid.big',{type:'button',text:'Cerrar',onclick:closeModal}))); }); }
      g.appendChild(e);
    });
    b.appendChild(g);
  });
}
function meAch(b){
  b.appendChild(H('p.pagesub',{text:ACH.filter(a=>S.ach[a.id]).length+' de '+ACH.length+' conseguidos'}));
  const list=ACH.map(a=>({a,got:!!S.ach[a.id],v:Math.min(a.t,a.v())})).sort((x,y)=>(y.got-x.got)||(y.v/y.a.t-x.v/x.a.t));
  const g=H('div.list');
  list.forEach(({a,got,v})=>g.appendChild(H('div.ach'+(got?'.got':''),null,H('span.achic',{html:CUP_SVG}),
    H('div.ax',null,H('div.an',{text:a.n}),H('div.ad',{text:a.d}),bar(v/a.t),H('div.ap',{text:got?'Conseguido · +'+a.c+' stroopwafels':fmt(v)+' / '+fmt(a.t)+' · premio '+a.c})))));
  b.appendChild(g);
}
function meShop(b){
  b.appendChild(H('p.pagesub',null,'Tienes ',H('b',{text:fmt(S.coins||0)}),' stroopwafels. Se ganan acertando, con los cofres, la ruleta, las misiones y los logros.'));
  [['item','Comodines'],['tile','Azulejos'],['skin','Colores de la app']].forEach(([kind,title])=>{
    b.appendChild(H('h2.sec',{text:title}));
    const g=H('div.list');
    SHOP.filter(it=>it.kind===kind).forEach(it=>{
      const isSkin=kind==='skin', owned=isSkin&&S.skins.includes(it.id), worn=isSkin&&S.skin===it.id;
      let btn;
      if(owned) btn=H('button.btn.sm'+(worn?'':'.solid'),{type:'button',text:worn?'Puesto':'Ponerlo',disabled:worn||null,onclick:()=>{ S.skin=it.id; save(); applySkin(); renderMe(); }});
      else btn=H('button.btn.sm.buy',{type:'button',disabled:(S.coins||0)<it.c||null,html:COIN_SVG+'<span>'+fmt(it.c)+'</span>',onclick:()=>{ if(buy(it)) renderMe(); }});
      g.appendChild(H('div.shopit'+(worn?'.on':''),null,isSkin?H('span.swatch',{'data-sw':it.id}):null,
        H('div.sx',null,H('div.sn',{text:it.name}),H('div.sd',{text:it.desc}),kind==='item'?H('div.so',{text:'Tienes '+(S.inv[it.id]||0)}):(kind==='tile'?H('div.so',{text:'Tienes '+Object.keys(S.tiles).length+' de '+TEGELS.length}):null)),btn));
    });
    b.appendChild(g);
  });
}
function onVoices(){ if(curTab==='me'&&meSub==='set'&&$('play').hidden) renderMe(); }
function meSettings(b){
  /* voz */
  b.appendChild(H('h2.sec',{text:'Voz'}));
  if(!window.speechSynthesis) b.appendChild(H('p.sheetnote.warn',{text:'Este navegador no puede leer en voz alta.'}));
  else if(!voices.length) b.appendChild(H('p.sheetnote.warn',{text:'No hay voz neerlandesa en este dispositivo. iPhone: Ajustes › Accesibilidad › Contenido hablado › Voces › Neerlandés (descarga una de calidad «mejorada»). Android: Ajustes › Idiomas › Salida de texto a voz › instalar neerlandés.'}));
  else{
    const sel=H('select',{'aria-label':'Voz neerlandesa'},voices.map((v,i)=>H('option',{value:i,text:v.name.replace(/Microsoft |Google /,'')+' ('+(v.lang||'').replace('_','-')+')',selected:v===voice||null})));
    sel.addEventListener('change',()=>{ voice=voices[sel.value]; S.opt.vname=voice.name; save(); say('Hallo! Zo klinkt deze stem.',1); });
    b.appendChild(H('div.setrow',null,sel,H('button.btn.sm',{type:'button',text:'Probar',onclick:()=>say('Goedemorgen! Ik ga elke dag met de fiets naar mijn werk.',1)})));
    b.appendChild(H('p.setnote',{text:'Si hay varias, prueba cuál suena más natural: las que ponen «mejorada», «premium» o «natural» son las buenas.'}));
  }
  b.appendChild(H('p.setnote',{text:'¿Se entiende mal? En el iPhone: Ajustes › Accesibilidad › Contenido leído › Voces › Neerlandés, y descarga «Xander (mejorada)» o «Claire (mejorada)». Luego elígela aquí.'}));
  const rates=[[0.65,'Lenta'],[0.8,'Normal'],[0.95,'Rápida']];
  b.appendChild(H('div.setrow',null,H('span.setlbl',{text:'Velocidad'}),H('div.seg',null,rates.map(r=>H('button'+(Math.abs((S.opt.rate||0.8)-r[0])<0.01?'.on':''),{type:'button',text:r[1],onclick:()=>{ S.opt.rate=r[0]; save(); renderMe(); say('Zo snel praat ik nu.',1); }})))));
  const chk=(label,key)=>H('label.chk',null,H('input',{type:'checkbox',checked:S.opt[key]||null,onchange:e=>{ S.opt[key]=e.target.checked; save(); }}),' '+label);
  b.appendChild(H('div.setcol',null,chk('Leer la respuesta en voz alta después de contestar','voice'),chk('Efectos de sonido','sfx')));

  /* sesión */
  b.appendChild(H('h2.sec',{text:'Ritmo'}));
  const sizes=[['short','Suave','rondas de 8 · objetivo 150 XP'],['normal','Normal','rondas de 12 · objetivo 250 XP'],['long','Intenso','rondas de 16 · objetivo 400 XP']];
  b.appendChild(H('div.sizes',null,sizes.map(s=>H('button'+(S.opt.size===s[0]?'.on':''),{type:'button',onclick:()=>{ S.opt.size=s[0]; save(); renderMe(); hud(); }},H('b',{text:s[1]}),H('span',{text:s[2]})))));

  b.appendChild(H('h2.sec',{text:'Cómo se preguntan las palabras'}));
  b.appendChild(modeCtl(renderMe));

  /* copia */
  b.appendChild(H('h2.sec',{text:'Copia de seguridad'}));
  b.appendChild(H('p.setnote',{text:'Tu progreso se guarda solo en este móvil. Copia el código de vez en cuando y guárdalo (en Notas, o mándatelo por correo). Con él recuperas todo en otro móvil o si reinstalas.'}));
  const ta=H('textarea.code',{rows:3,placeholder:'Pega aquí un código para restaurar',spellcheck:'false',autocapitalize:'off',autocomplete:'off'});
  const msg=H('p.formmsg');
  b.appendChild(H('div.row',null,
    H('button.btn.solid.sm',{type:'button',text:'Copiar mi progreso',onclick:()=>{ const code=exportCode(); ta.value=code; ta.select();
      (navigator.clipboard?navigator.clipboard.writeText(code):Promise.reject()).then(()=>{ msg.textContent='Código copiado. Pégalo en un sitio seguro.'; }).catch(()=>{ try{ document.execCommand('copy'); msg.textContent='Código copiado. Pégalo en un sitio seguro.'; }catch(e){ msg.textContent='Selecciona el código de abajo y cópialo a mano.'; } }); }}),
    H('button.btn.sm',{type:'button',text:'Restaurar desde un código',onclick:()=>{ const v=ta.value.trim(); if(!v){ msg.textContent='Pega primero el código en el recuadro.'; return; }
      if(importCode(v)){ loadCustom(); applySkin(); msg.textContent='Progreso restaurado.'; toast('Progreso restaurado'); hud(); } else msg.textContent='Ese código no es válido. Comprueba que esté entero.'; }})));
  b.append(ta,msg);

  /* instalar */
  b.appendChild(H('h2.sec',{text:'Tenerla como app'}));
  b.appendChild(H('p.setnote',{text:'iPhone (Safari): botón de compartir › «Añadir a pantalla de inicio». Android (Chrome): menú de los tres puntos › «Instalar app» o «Añadir a pantalla de inicio». Después funciona también sin conexión.'}));

  /* borrar */
  b.appendChild(H('h2.sec',{text:'Empezar de cero'}));
  let armed=false;
  const rb=H('button.btn.sm.danger',{type:'button',text:'Borrar todo mi progreso',onclick:()=>{
    if(!armed){ armed=true; rb.textContent='¿Seguro? Toca otra vez para borrar'; setTimeout(()=>{ armed=false; rb.textContent='Borrar todo mi progreso'; },4000); return; }
    S=fill(blank()); S.welcomed=true; save(true); loadCustom(); applySkin(); showTab('home'); toast('Progreso borrado');
  }});
  b.append(rb,H('p.setnote.ver',{text:'Woorden '+VERSION+' · '+fmt(ALLW.length)+' palabras · '+fmt(ALLG.length+SK.prep.items.length)+' frases de gramática · '+fmt(ALLPUZ.length)+' para montar'}));
}

/* ======================= ARRANQUE ======================= */
function welcome(){
  const from2=S.from===2;
  const box=H('div.welcome',null,
    H('p.mtitle',{text:from2?'Woorden, versión nueva':'Welkom bij Woorden'}),
    H('p.msub',{text:from2?'He traído tu progreso de la versión anterior: XP, stroopwafels y las palabras que ya habías trabajado.':'Neerlandés en diez minutos al día.'}),
    H('ul.wlist',null,
      H('li',null,H('b',{text:'Un botón: Jugar.'}),' Cada ronda dura unos 3 minutos y mezcla lo que toca repasar, palabras nuevas, gramática y oído. Haz las que quieras.'),
      H('li',null,H('b',{text:'Lo que aciertas vuelve cada vez más tarde'}),': mañana, a los 3 días, a la semana, al mes… Así se queda para siempre.'),
      H('li',null,H('b',{text:'Lo que fallas vuelve enseguida'}),', y la app te dice dónde fallas más y por qué.'),
      H('li',null,H('b',{text:'Cofres, ruleta y azulejos'}),' con refranes holandeses para coleccionar.')),
    H('button.btn.solid.big',{type:'button',text:'Empezar',onclick:()=>{ S.welcomed=true; S.seen5=true; S.seen51=true; S.seen52=true; save(); closeModal(); }}));
  openModal(box,{sticky:true});
}
/* novedades de la versión 5, para quien ya usaba la app */
function whatsNew(){
  const box=H('div.welcome',null,
    H('p.mtitle',{text:'Vocabulario más ágil'}),
    H('ul.wlist',null,
      H('li',null,H('b',{text:'Sin tarjetas de copiar'}),': cada palabra nueva sale primero para elegir entre cuatro.'),
      H('li',null,H('b',{text:'Cada palabra sube de nivel'}),': elegir, luego reconocerla de oído y después escribirla. Ya no te la pregunta igual dos veces seguidas.'),
      H('li',null,H('b',{text:'Une las parejas'}),' al final de cada ronda.'),
      H('li',null,H('b',{text:'Verbos'}),': en una sola tarjeta, el significado, las 4 formas y hebben o zijn. Si el verbo es nuevo, ves sus formas mientras lo escribes.')),
    H('button.btn.solid.big',{type:'button',text:'Vamos',onclick:()=>{ S.seen5=S.seen51=S.seen52=true; save(); closeModal(); }}));
  openModal(box,{sticky:true});
}
function init(){
  loadCustom(); applySkin(); ensureDay(); applyFreeze(); ensureMissions();
  S.life.maxStreak=Math.max(S.life.maxStreak||0,streakNow());
  $('flame').innerHTML=FLAME_SVG; $('coinIc').innerHTML=COIN_SVG;
  TABS.forEach(t=>$('nav-'+t).addEventListener('click',()=>showTab(t)));
  $('coins').addEventListener('click',()=>{ meSub='shop'; showTab('me'); });
  $('streak').addEventListener('click',()=>toast(streakNow()?'Racha de '+streakNow()+(streakNow()===1?' día':' días')+'. Se mantiene cumpliendo el objetivo diario.':'Cumple el objetivo de hoy para empezar una racha.'));
  $('sheetBack').addEventListener('click',()=>{ backSheet(); if(!sheetStack.length) refreshUI(); });
  $('quit').addEventListener('click',()=>endRun(true));
  checkAch(true); showTab('home');
  if(!S.welcomed) welcome(); else if(!S.seen52) whatsNew();
  if(window.__bootOk) window.__bootOk();
  /* si la app se queda abierta de un día para otro, se pone al día al volver */
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden&&S.day.d!==T()&&!R){ ensureDay(); applyFreeze(); ensureMissions(); refreshUI(); } });
  if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost')) navigator.serviceWorker.register('sw.js').catch(()=>{});
}
init();
