'use strict';
/* Woorden · la historia por capítulos: uno nuevo cada día que cumples el objetivo */

const storyCur=()=>STORY[Math.min(STORY.length,S.story.u)-1]||null;
const storyPending=()=>{ const c=storyCur(); return !!c&&!S.story.done[c.id]; };
function openStory(id){
  if(!STORY.length){ toast('La historia todavía no está disponible.'); return; }
  openSheet('Historia',b=>{ if(id) storyRead(b,id); else storyList(b); });
}
function storyList(b){
  b.appendChild(H('p.sheetnote',{text:'Mateo, un ingeniero de Cádiz, empieza a trabajar en un astillero cerca de Róterdam y se muda a Delft. Cada día que cumples tu objetivo se abre un capítulo nuevo.'}));
  STORY.forEach((c,i)=>{
    const open=i<S.story.u, done=!!S.story.done[c.id];
    const row=H('button.chap'+(open?'':'.locked')+(done?'.done':''),{type:'button',disabled:!open||null,onclick:()=>{ b.innerHTML=''; storyRead(b,c.id); }},
      H('span.chn',{text:String(i+1)}),
      H('span.cht',null,H('b',{text:open?c.t:'Capítulo '+(i+1)}),H('small',{text:open?(c.te||'')+(done?' · leído':''):'Se abre cuando cumplas el objetivo de un día'})));
    b.appendChild(row);
  });
}
function storyRead(b,id){
  const c=STORY.find(x=>x.id===id); if(!c) return storyList(b);
  const idx=STORY.indexOf(c);
  let shown=0, showEs=false;
  const head=H('div.chhead',null,H('p.qlabel',{text:'Capítulo '+(idx+1)}),H('h3.chtitle',{text:c.t}),c.te?H('p.chsub',{text:c.te}):null);
  const tog=H('label.chk',null,H('input',{type:'checkbox',onchange:e=>{ showEs=e.target.checked; lines.querySelectorAll('.les').forEach(x=>x.hidden=!showEs); }}),' Ver todas las traducciones');
  const lines=H('div.lines'), ctl=H('div.chctl');
  b.append(head,tog,lines,ctl);
  const next=()=>{
    if(shown>=c.l.length) return quiz();
    const l=c.l[shown++];
    const es=H('p.les',{text:l[1],hidden:!showEs||null});
    const ln=H('div.ln'+(l[2]?'.dlg':''),null,
      l[2]?H('span.who',{text:l[2]}):null,
      H('div.lt',null,H('p.lnl',{text:l[0],onclick:()=>{ es.hidden=!es.hidden; }}),es),
      speakBtn(l[0],true,0.9));
    lines.appendChild(ln); autoSay(l[0],0.9);
    requestAnimationFrame(()=>{ try{ ln.scrollIntoView({block:'nearest',behavior:'smooth'}); }catch(e){} });
    btn.textContent=shown<c.l.length?'Siguiente':'Preguntas';
  };
  const btn=H('button.btn.solid.big',{type:'button',text:'Empezar',onclick:next});
  ctl.append(btn,H('p.setnote',{text:'Toca una frase para ver la traducción, y el altavoz para oírla otra vez.'}));
  next();
  function quiz(){
    ctl.innerHTML=''; let qi=0, ok=0;
    const qb=H('div.chquiz'); ctl.appendChild(qb);
    const ask=()=>{
      qb.innerHTML='';
      if(qi>=c.q.length) return finish();
      const q=c.q[qi];
      qb.append(H('p.qlabel',{text:'Pregunta '+(qi+1)+' de '+c.q.length}),H('p.chq',null,H('span',{text:q[0]}),speakBtn(q[0],true,0.9)),H('p.chqes',{text:q[1]}));
      const box=H('div.opts');
      q[2].forEach((o,i)=>box.appendChild(H('button.opt',{type:'button',onclick:e=>{
        if(box.dataset.done) return; box.dataset.done=1;
        const good=i===q[3]; if(good){ ok++; sfx('ok',ok); } else sfx('bad');
        [...box.children].forEach((x,j)=>{ x.disabled=true; if(j===q[3]) x.classList.add('ok'); });
        if(!good) e.currentTarget.classList.add('bad');
        qi++; setTimeout(ask,good?700:1500);
      }},H('span.k',{text:i+1}),H('span',{text:o}))));
      qb.appendChild(box);
    };
    const finish=()=>{
      const first=!S.story.done[c.id];
      S.story.done[c.id]=T();
      /* si hoy ya cumpliste el objetivo, el siguiente se abre ya */
      if(first&&S.day.done&&S.story.lu!==T()&&S.story.u===idx+1&&S.story.u<STORY.length){ S.story.u++; S.story.lu=T(); }
      const xp=first?award(15+ok*5):0;
      if(first){ ev({t:'story'}); life('chapters'); }
      let tile=null; if(first&&Math.random()<0.35) tile=grantTile(drawTile());
      save(true); checkAch(true); hud();
      qb.append(H('p.mtitle',{text:ok+' de '+c.q.length+' bien'}),
        H('p.msub',{text:first?'+'+xp+' XP'+(tile?(tile.dupe?' · azulejo repetido':' · azulejo nuevo: '+tile.tile.nl):''):'Ya lo habías leído.'}));
      const nextCh=STORY[idx+1];
      if(nextCh) qb.appendChild(H('p.setnote',{text:idx+1<S.story.u?'El capítulo '+(idx+2)+' ya está abierto.':'El capítulo '+(idx+2)+' se abre cuando cumplas el objetivo de '+(S.day.done?'mañana':'hoy')+'.'}));
      qb.append(H('button.btn.solid.big',{type:'button',text:idx+1<S.story.u&&nextCh?'Leer el capítulo '+(idx+2):'Volver',onclick:()=>{ if(idx+1<S.story.u&&nextCh){ b.innerHTML=''; storyRead(b,nextCh.id); } else { closeSheet(); refreshUI(); } }}));
    };
    ask();
  }
}
