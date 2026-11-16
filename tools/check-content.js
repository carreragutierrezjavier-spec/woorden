/* Comprueba el contenido de js/content/*.js antes de usarlo en la app.
   Uso: node tools/check-content.js [prep|gram|puz|chat|story|vocab|mios|all]   (por defecto: all) */
const fs=require('fs'), vm=require('vm'), path=require('path');
const ROOT=path.join(__dirname,'..'), JS=path.join(ROOT,'js'), CT=path.join(JS,'content');
const only=(process.argv[2]||'all').toLowerCase();
const base=['data-base.js','data-more.js','data-grammar.js'].map(f=>fs.readFileSync(path.join(JS,f),'utf8')).join('\n');
/* con una sección, solo se cargan sus propios archivos (prep*.js, gram*.js…), para no tropezar con lo que otro esté escribiendo */
const files=fs.readdirSync(CT).filter(f=>f.endsWith('.js')&&f!=='_init.js'&&(only==='all'||f.startsWith(only))).sort();
let code=base+'\n'+fs.readFileSync(path.join(CT,'_init.js'),'utf8')+'\n';
const ctx={console}; vm.createContext(ctx);
try{ vm.runInContext(code+'\nthis.__ok=1;',ctx,{filename:'base'}); }catch(e){ console.log('ERROR cargando la base:',e.message); process.exit(1); }
const loadErr=[];
for(const f of files){
  try{ vm.runInContext(fs.readFileSync(path.join(CT,f),'utf8'),ctx,{filename:f}); }
  catch(e){ loadErr.push(f+': '+e.message+(e.stack?' · '+(e.stack.split('\n').find(l=>l.includes(f))||'').trim():'')); }
}
const G=k=>vm.runInContext('typeof '+k+'!=="undefined"?'+k+':undefined',ctx);
const WT=G('WT'), WT_MORE=G('WT_MORE'), VERBS=G('VERBS'), VERBS_MORE=G('VERBS_MORE'), LANDEN=G('LANDEN'), PUZ=G('PUZ'), PUZ_MORE=G('PUZ_MORE'), CHAT=G('CHAT'), CHAT_MORE=G('CHAT_MORE'), GR=G('GR'), PROPER=G('PROPER');
const PREP_BANK=G('PREP_BANK'), GR_MORE=G('GR_MORE'), GR_NEW=G('GR_NEW'), PUZ_ADD=G('PUZ_ADD'), PUZ_NAMES=G('PUZ_NAMES'), CHAT_ADD=G('CHAT_ADD'), STORY=G('STORY'), VOCAB_ADD=G('VOCAB_ADD'), VERBS_ADD=G('VERBS_ADD'), POS=G('POS'), PROPER_ADD=G('PROPER_ADD');

const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[.,!?¿¡;:…"“”’'()]/g,' ').replace(/\s+/g,' ').trim();
const toks=s=>String(s).replace(/[.,!?¿¡…:;"“”]/g,' ').split(/\s+/).filter(Boolean).map(w=>w.toLowerCase());
const errs={}, warns={}, info=[];
const E=(sec,m)=>{ (errs[sec]=errs[sec]||[]).push(m); };
const W=(sec,m)=>{ (warns[sec]=warns[sec]||[]).push(m); };
const want=s=>only==='all'||only===s;
if(loadErr.length) loadErr.forEach(m=>E('carga',m));

/* ---------- palabras existentes ---------- */
const parse=str=>str.split(';').map(s=>{ const i=s.indexOf('='); return i<0?null:[s.slice(0,i).trim(),s.slice(i+1).trim()]; }).filter(p=>p&&p[0]);
const exNL={}, exES={};
const addEx=(nl,es,src)=>{ nl.split('|').forEach(a=>{ exNL[norm(a)]=src; }); if(es) exES[norm(es)]=src+' ('+nl+')'; };
Object.keys(WT).forEach(k=>WT[k][1].forEach(w=>addEx(w[0],w[1],'base:'+k)));
WT_MORE.forEach(([k,,str])=>parse(str).forEach(w=>addEx(w[0],w[1],'more:'+k)));
const allVerbs=VERBS.concat(VERBS_MORE);
allVerbs.forEach(v=>addEx(v[0],v[1],'verbos'));
const themeKeys=new Set([...Object.keys(WT),...WT_MORE.map(x=>x[0]),'verbos']);

/* ---------- preposiciones ---------- */
const PREPS=new Set('op in aan bij naar van met voor om over uit door tegen tot na tijdens sinds onder boven naast tussen achter tegenover langs zonder binnen buiten rond volgens ondanks dankzij vanwege per vanaf richting'.split(' '));
if(want('prep')){
  const seenQ=new Set(); ['prep_lugar','prep_tijd','prep_vast'].forEach(k=>GR[k].it.forEach(i=>seenQ.add(norm(i[0]))));
  const count={};
  PREP_BANK.forEach((it,n)=>{
    const id='#'+n+' «'+(it&&it[0])+'»';
    if(!Array.isArray(it)||it.length<4||it.length>5) return E('prep',id+': debe ser [frase, respuesta, "mal|mal|mal", traducción, pista]');
    const [q,a,o,es,h]=it;
    if((q.match(/___/g)||[]).length!==1) E('prep',id+': tiene que haber exactamente un ___');
    if(/^\s*___/.test(q)) E('prep',id+': el hueco no puede ir al principio de la frase');
    if(!PREPS.has(a)) E('prep',id+': la respuesta «'+a+'» no es una preposición de la lista (en minúscula)');
    const os=String(o).split('|');
    if(os.length!==3) E('prep',id+': tienen que ser 3 distractores');
    os.forEach(x=>{ if(!PREPS.has(x)) E('prep',id+': distractor «'+x+'» no es preposición de la lista'); });
    if(os.includes(a)) E('prep',id+': la respuesta está entre los distractores');
    if(new Set(os).size!==os.length) E('prep',id+': distractores repetidos');
    if(!es||!String(es).trim()) E('prep',id+': falta la traducción');
    if(!h||!String(h).trim()) E('prep',id+': falta la pista'); else if(String(h).length>70) W('prep',id+': pista larga ('+String(h).length+' caracteres)');
    const nq=norm(q); if(seenQ.has(nq)) E('prep',id+': frase repetida (ya existe)'); seenQ.add(nq);
    count[a]=(count[a]||0)+1;
  });
  info.push('prep: '+PREP_BANK.length+' frases · '+Object.entries(count).sort((x,y)=>y[1]-x[1]).map(([k,v])=>k+' '+v).join(', '));
}

/* ---------- gramática ---------- */
if(want('gram')||want('mios')){
  Object.entries(GR_NEW).forEach(([k,d])=>{
    if(GR[k]) E('gram','newGram «'+k+'»: ya existe una destreza con ese nombre (usa addGram)');
    ['n','tip'].forEach(f=>{ if(!d[f]) E('gram','newGram «'+k+'»: falta '+f); });
    if(![1,2,3].includes(d.lv)) E('gram','newGram «'+k+'»: lv debe ser 1, 2 o 3');
    if(d.grp&&!['verbos','articulos','orden','otros'].includes(d.grp)) E('gram','newGram «'+k+'»: grp debe ser verbos, articulos, orden u otros');
  });
  const tot={};
  Object.entries(GR_MORE).forEach(([k,items])=>{
    const sec=k==='mios'?'mios':'gram'; if(!want(sec)&&only!=='all') return;
    if(!GR[k]&&!GR_NEW[k]) return E(sec,'addGram «'+k+'»: esa destreza no existe');
    const seenQ=new Set((GR[k]?GR[k].it:[]).map(i=>norm(i[0])));
    items.forEach((it,n)=>{
      const id=k+' #'+n+' «'+(it&&it[0])+'»';
      if(!Array.isArray(it)||it.length<4||it.length>5) return E(sec,id+': debe ser [frase, respuesta, "mal|mal", traducción, pista opcional]');
      const [q,a,o,es]=it;
      if((String(q).match(/___/g)||[]).length>1) E(sec,id+': más de un ___');
      const os=String(o).split('|').filter(Boolean);
      if(!os.length) E(sec,id+': faltan distractores');
      if(os.includes(a)) E(sec,id+': la respuesta está entre los distractores');
      if(new Set(os).size!==os.length) E(sec,id+': distractores repetidos');
      if(!a||!String(a).trim()) E(sec,id+': falta la respuesta');
      if(!es||!String(es).trim()) E(sec,id+': falta la traducción');
      const nq=norm(q); if(seenQ.has(nq)) E(sec,id+': frase repetida en esta destreza'); seenQ.add(nq);
    });
    tot[k]=items.length;
  });
  info.push('gram: '+Object.values(tot).reduce((a,b)=>a+b,0)+' ejercicios · '+Object.entries(tot).map(([k,v])=>k+' '+v).join(', ')+(Object.keys(GR_NEW).length?' · destrezas nuevas: '+Object.keys(GR_NEW).join(', '):''));
}

/* ---------- frases para montar ---------- */
if(want('puz')){
  const proper=new Set([...PROPER,...PROPER_ADD]);
  const allN=new Set();
  [PUZ,PUZ_MORE].forEach(P=>Object.values(P).forEach(([,its])=>its.forEach(p=>allN.add(norm(p.n)))));
  const capsMid=new Set();
  Object.values(PUZ_ADD).flat().forEach(p=>{ if(p&&p.n) String(p.n).split(/\s+/).slice(1).forEach(w=>{ const c=w.replace(/[.,!?¿¡…:;]/g,''); if(/^[A-Z]/.test(c)) capsMid.add(c); }); });
  let n=0;
  Object.entries(PUZ_ADD).forEach(([k,items])=>{
    if(!PUZ[k]&&!PUZ_MORE[k]&&!PUZ_NAMES[k]) E('puz','addPuz «'+k+'»: grupo nuevo sin nombre (pasa el nombre como tercer argumento)');
    items.forEach((p,i)=>{
      n++; const id=k+' #'+i+' «'+(p&&p.n)+'»';
      if(!p||!p.s||!p.n||!p.t) return E('puz',id+': faltan s, n o t');
      if(!/[.?!]$/.test(p.n.trim())) E('puz',id+': la frase debe acabar en . ? o !');
      const T=toks(p.n); if(T.length<3||T.length>14) W('puz',id+': '+T.length+' piezas (mejor entre 3 y 14)');
      if(p.x&&T.includes(String(p.x).toLowerCase())) E('puz',id+': la pieza que sobra («'+p.x+'») está en la frase');
      const key=T.slice().sort().join(' ');
      (p.a||[]).forEach(alt=>{
        const A=toks(alt);
        if(A.slice().sort().join(' ')!==key) E('puz',id+': la alternativa «'+alt+'» no usa exactamente las mismas palabras');
        if(norm(alt)===norm(p.n)) E('puz',id+': alternativa igual a la frase');
      });
      const nn=norm(p.n); if(allN.has(nn)) E('puz',id+': frase repetida'); allN.add(nn);
      const f0=p.n.split(/\s+/)[0].replace(/[.,!?¿¡…:;]/g,'');
      if(capsMid.has(f0)&&!proper.has(f0)) E('puz',id+': empieza por el nombre propio «'+f0+'»: añádelo con addProper([...])');
    });
  });
  info.push('puz: '+n+' frases · '+Object.entries(PUZ_ADD).map(([k,v])=>k+' '+v.length).join(', '));
}

/* ---------- charla ---------- */
if(want('chat')){
  const seenQ=new Set(CHAT.concat(CHAT_MORE).map(c=>norm(c.q)));
  const topics={};
  CHAT_ADD.forEach((c,i)=>{
    const id='#'+i+' «'+(c&&c.q)+'»';
    if(!c||!c.q||!c.qe||!Array.isArray(c.o)||!c.r) return E('chat',id+': faltan q, qe, o o r');
    if(c.o.length!==3) E('chat',id+': tienen que ser 3 respuestas');
    if(c.o.filter(o=>o[1]===1).length!==1) E('chat',id+': exactamente una respuesta con 1');
    c.o.forEach(o=>{ if(!Array.isArray(o)||o.length!==3) E('chat',id+': cada respuesta es [texto, 1|0, explicación]'); else if(o[1]===0&&!String(o[2]).trim()) E('chat',id+': falta la explicación de «'+o[0]+'»'); });
    if(new Set(c.o.map(o=>norm(o[0]))).size!==3) E('chat',id+': respuestas repetidas');
    const nq=norm(c.q); if(seenQ.has(nq)) E('chat',id+': pregunta repetida'); seenQ.add(nq);
    topics[c.t||'?']=(topics[c.t||'?']||0)+1;
  });
  info.push('chat: '+CHAT_ADD.length+' preguntas · '+Object.entries(topics).map(([k,v])=>k+' '+v).join(', '));
}

/* ---------- historia ---------- */
if(want('story')){
  const ids=new Set(); let lines=0, words=0;
  STORY.forEach((c,i)=>{
    const id='capítulo '+(i+1)+' «'+(c&&c.t)+'»';
    if(!c||!c.id||!c.t||!Array.isArray(c.l)||!Array.isArray(c.q)) return E('story',id+': faltan id, t, l o q');
    if(ids.has(c.id)) E('story',id+': id repetido'); ids.add(c.id);
    if(c.l.length<8) W('story',id+': solo '+c.l.length+' líneas');
    c.l.forEach((l,j)=>{ if(!Array.isArray(l)||l.length<2||!String(l[0]).trim()||!String(l[1]).trim()) E('story',id+' línea '+(j+1)+': debe ser [neerlandés, español] o [neerlandés, español, quién]'); else{ lines++; words+=toks(l[0]).length; } });
    if(c.q.length<2||c.q.length>4) W('story',id+': '+c.q.length+' preguntas (mejor 2 o 3)');
    c.q.forEach((q,j)=>{
      if(!Array.isArray(q)||q.length!==4||!Array.isArray(q[2])||q[2].length!==3||![0,1,2].includes(q[3])) E('story',id+' pregunta '+(j+1)+': debe ser [pregunta, traducción, [3 opciones], 0|1|2]');
      else if(new Set(q[2].map(norm)).size!==3) E('story',id+' pregunta '+(j+1)+': opciones repetidas');
    });
  });
  info.push('story: '+STORY.length+' capítulos · '+lines+' líneas · '+words+' palabras');
}

/* ---------- vocabulario ---------- */
if(want('vocab')){
  const newNL={}, newES={}; let nw=0; const per={};
  VOCAB_ADD.forEach(([k,name,lv,str],i)=>{
    if(name&&themeKeys.has(k)) E('vocab','tema «'+k+'»: ya existe; pon el nombre a null para ampliarlo');
    if(!name&&!themeKeys.has(k)) E('vocab','tema «'+k+'»: no existe; ponle un nombre para crearlo');
    if(![1,2,3].includes(lv)) E('vocab','tema «'+k+'»: lv debe ser 1, 2 o 3');
    themeKeys.add(k);
    if(typeof str!=='string') return E('vocab','tema «'+k+'»: el tercer argumento debe ser un texto `nl=es; …`');
    str.split(';').forEach(s=>{ if(s.trim()&&s.indexOf('=')<0) E('vocab',k+': «'+s.trim()+'» no tiene «=»'); });
    parse(str).forEach(([nl,es])=>{
      nw++; per[k]=(per[k]||0)+1;
      if(!es) E('vocab',k+': «'+nl+'» sin traducción');
      nl.split('|').forEach(a=>{
        const n=norm(a);
        if(exNL[n]) E('vocab',k+': «'+a+'» ya existe ('+exNL[n]+')');
        else if(newNL[n]) E('vocab',k+': «'+a+'» repetida ('+newNL[n]+')');
        newNL[n]=k;
        if(/^(de|het|een)\s/i.test(a)&&!/^(de|het) /.test(a)) E('vocab',k+': «'+a+'»: artículo en minúscula, de o het');
      });
      const e=norm(es);
      if(exES[e]) E('vocab',k+': «'+nl+' = '+es+'»: esa traducción ya la tiene '+exES[e]+'; precísala');
      else if(newES[e]) E('vocab',k+': «'+nl+' = '+es+'»: traducción repetida con '+newES[e]);
      newES[e]=nl;
    });
  });
  const vs=new Set(allVerbs.map(v=>v[0]));
  VERBS_ADD.forEach((v,i)=>{
    const id='verbo «'+(v&&v[0])+'»';
    if(!Array.isArray(v)||v.length!==6) return E('vocab',id+': debe ser [infinitivo, español, pasado sg, pasado pl, participio, auxiliar]');
    if(vs.has(v[0])) E('vocab',id+': ya existe'); vs.add(v[0]);
    if(newNL[norm(v[0])]) E('vocab',id+': también está como palabra suelta');
    if(!['hebben','zijn','hebben / zijn'].includes(v[5])) E('vocab',id+': auxiliar debe ser hebben, zijn o «hebben / zijn»');
    const e=norm(v[1]); if(exES[e]||newES[e]) E('vocab',id+': la traducción «'+v[1]+'» ya existe'); newES[e]=v[0];
  });
  Object.entries(POS).forEach(([w,p])=>{
    if(!['adj','adv','util'].includes(p)) E('vocab','POS «'+w+'»: debe ser adj, adv o util');
    if(!exNL[norm(w)]&&!newNL[norm(w)]) E('vocab','POS «'+w+'»: esa palabra no existe');
  });
  info.push('vocab: '+nw+' palabras · '+VERBS_ADD.length+' verbos · '+Object.keys(POS).length+' clasificaciones · '+Object.entries(per).map(([k,v])=>k+' '+v).join(', '));
}

info.forEach(l=>console.log(l));
const ws=Object.entries(warns); if(ws.length){ console.log('\nAVISOS'); ws.forEach(([s,l])=>{ console.log('['+s+'] '+l.length); l.slice(0,15).forEach(m=>console.log('  · '+m)); }); }
const es=Object.entries(errs);
if(es.length){ console.log('\nERRORES'); es.forEach(([s,l])=>{ console.log('['+s+'] '+l.length); l.slice(0,60).forEach(m=>console.log('  ✗ '+m)); }); process.exit(1); }
console.log('\nTODO OK');
