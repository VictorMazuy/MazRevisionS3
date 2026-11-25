/* MazRévision widgets: the interactive blocks of the sheets and of the "lab" tabs.
   Loaded right after engine.js. A sheet is an HTML string, so each block is written as a placeholder
   (<div data-w="n">) whose config (functions allowed) is kept in REG; Rev.hydrate() mounts the placeholders
   after every page render. Contract and examples: site/CONVENTIONS.md, section 16. Live demo: #demo.
   Blocks: NOTION (layered notion: essential, Understand / Worked example / Exam trap, "Your turn", Got it / Review),
   GL (glossary term), STEPS (step-by-step), TREE (decision tree with training), GAME (payoff matrix: best responses,
   Nash equilibria, dominant strategies), PLAY (repeated game against the computer), PLOT (SVG graph with sliders),
   GEN (exercise generator with levels and score), the exercise type "sort" (drag-and-drop or tap to classify),
   DIALOG (branching dialogue with feedback) and the shared module "lab" (a tab listing generators and tools). */
(function(){
'use strict';
const {esc,fmt,T,F}=Rev.h,U=Rev.u;
const REG=[];
const LET='abcdefghij';
const val=(f,v)=>typeof f==='function'?f(v):f;
const r2=x=>U.round(x,2);
// numbers shown by the widgets: up to 4 decimals (fmt stops at 2), space as thousands separator
const nice=x=>{const r=U.round(x,4);return Number(r).toLocaleString('en-US',{maximumFractionDigits:4}).replace(/,/g,' ')};
let uidN=0;const uid=p=>(p||'w')+(++uidN);

/* ---------- placeholders ---------- */
const ph=(kind,cfg,cls='')=>{REG.push({kind,cfg});return `<div class="w w-${kind}${cls?' '+cls:''}" data-w="${REG.length-1}"></div>`};
const KINDS={};
Rev.W={REG,KINDS,ph};

/* ---------- where a widget saves its record: st.w of the subject, or memory on #demo ---------- */
const DEMO={w:{},notions:{}};
function store(slug){
  const st=slug&&Rev.stateOf(slug);
  if(!st)return {get:id=>DEMO.w[id]||null,set:(id,r)=>{DEMO.w[id]=r},notion:id=>DEMO.notions[id]||'',setNotion:(id,v)=>{if(v)DEMO.notions[id]=v;else delete DEMO.notions[id]},demo:true};
  return {get:id=>st.w[id]||null,set:(id,r)=>{st.w[id]=r;Rev.saveState(slug)},
    notion:id=>st.notions[id]||'',setNotion:(id,v)=>{if(v)st.notions[id]=v;else delete st.notions[id];Rev.saveState(slug)}};
}
// a scored attempt: {n tries, ok right, streak, best streak}
const bump=(sto,id,ok,extra)=>{if(!id)return null;const r=Object.assign({n:0,ok:0,streak:0,best:0},sto.get(id)||{});
  r.n++;if(ok){r.ok++;r.streak++;r.best=Math.max(r.best,r.streak)}else r.streak=0;Object.assign(r,extra||{});sto.set(id,r);return r};

/* ---------- answer checking shared by "Your turn", generators and trees ---------- */
const within=(u,a,tol,tolPct)=>!isNaN(u)&&Math.abs(u-a)<=Math.max(tol!=null?tol:0.01,tolPct!=null?Math.abs(a)*tolPct/100:0)+1e-9;
// part = {label, answer, unit, tol, tolPct} (number) | {label, type:'choice', o, a} | {label, type:'text', accept}
function partHTML(p,v,id,pi){
  const da=pi!=null?` data-pi="${pi}"`:'';
  const label=val(p.label,v)||'Answer';
  if(p.type==='choice')return `<div class="ansrow"><label for="${id}">${label}</label><select id="${id}"${da}><option value="">Choose…</option>${val(p.o,v).map((o,i)=>`<option value="${i}">${o}</option>`).join('')}</select></div>`;
  if(p.type==='text')return `<div class="ansrow"><label for="${id}">${label}</label><input type="text" class="txt" id="${id}"${da} autocomplete="off" autocapitalize="off" spellcheck="false"></div>`;
  const unit=val(p.unit,v);
  return `<div class="ansrow"><label for="${id}">${label}</label><input type="text" id="${id}"${da} inputmode="decimal" autocomplete="off">${unit?`<span class="unit">${esc(unit)}</span>`:''}</div>`;
}
function partCheck(p,v,el){
  const raw=el.value.trim();if(!raw)return {empty:true};
  if(p.type==='choice'){const ok=+raw===val(p.a,v);return {ok,exp:val(p.o,v)[val(p.a,v)]}}
  if(p.type==='text'){const acc=[].concat(val(p.accept,v)).map(String),u=U.norm(raw);
    const ok=acc.some(a=>U.norm(a)===u)||(!p.strict&&acc.some(a=>U.noAccents(U.norm(a))===U.noAccents(u)));return {ok,exp:esc(acc[0])}}
  const a=val(p.answer,v),ok=within(U.num(raw),a,val(p.tol,v),val(p.tolPct,v)),unit=val(p.unit,v);
  return {ok,exp:`${nice(a)}${unit?' '+esc(unit):''}`,nan:isNaN(U.num(raw))};
}
function checkParts(parts,v,box){
  const ins=parts.map((_,i)=>box.querySelector('[data-pi="'+i+'"]')||box.querySelectorAll('.ansrow input,.ansrow select')[i]);
  if(ins.every(i=>!i.value.trim()))return {empty:true};
  let n=0,nan=false;const rows=parts.map((p,i)=>{const r=partCheck(p,v,ins[i]);ins[i].classList.toggle('good',!!r.ok);ins[i].classList.toggle('bad',!r.ok);if(r.ok)n++;if(r.nan)nan=true;return r});
  return {ok:n===parts.length,n,total:parts.length,rows,nan};
}
const expList=(parts,v,rows)=>parts.map((p,i)=>`${val(p.label,v)||'Answer'}: <b class="num">${rows[i].exp}</b>`).join('<br>');

/* ---------- hydration: called by the engine after each render ---------- */
let pendingNotion='';
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('[data-goto-notion]');if(a)pendingNotion=a.dataset.gotoNotion},true);
Rev.hydrate=(root,ctx)=>{
  ctx=ctx||{};const sto=store(ctx.slug);
  root.querySelectorAll('[data-w]:not([data-wd])').forEach(el=>{
    el.dataset.wd='1';const r=REG[+el.dataset.w];
    if(!r||!KINDS[r.kind]){el.innerHTML=`<div class="trap"><b>Broken block</b>unknown widget ${esc(el.dataset.w)}</div>`;return}
    try{KINDS[r.kind](el,r.cfg,{sto,slug:ctx.slug,topic:ctx.topic})}catch(e){console.error('Widget',r.kind,e);el.innerHTML=`<div class="trap"><b>Broken block</b>${esc(r.kind)}: ${esc(e.message)}</div>`}
  });
  if(ctx.view==='sheets'&&ctx.topic){sheetToc(root,sto);glossLink(root,ctx.slug)}
  if(ctx.view==='cheat')glossLink(root,ctx.slug);
  if(pendingNotion){const n=root.querySelector(`[data-notion="${CSS.escape(pendingNotion)}"]`);pendingNotion='';if(n)setTimeout(()=>n.scrollIntoView({block:'start'}),0)}
};

/* ==========================================================================================
   1. Layered notion
   NOTION({id, title, ess, extra?, understand?, example?, trap?, tryit?, src?})
   ========================================================================================== */
const LAYER_NAMES={understand:'Understand',example:'Worked example',trap:'Exam trap'};
function layer(kind,body,title){if(!body)return '';
  return `<div class="layer l-${kind}"><div class="lh"><span class="lk">${LAYER_NAMES[kind]}</span>${title?`<span class="lt">${title}</span>`:''}</div><div class="lb">${body}</div></div>`}
Rev.h.NOTION=c=>{
  if(!c||!c.id||!c.title)throw new Error('NOTION needs an id and a title');
  const ex=Array.isArray(c.example)?c.example:[null,c.example];
  const tries=[].concat(c.tryit||[]);
  return `<section class="notion" data-notion="${esc(c.id)}" data-ntitle="${esc(String(c.title).replace(/<[^>]+>/g,''))}">
  <h3>${c.title}</h3>
  ${c.ess?`<div class="ess"><span class="ess-k">Essential</span>${c.ess}</div>`:''}
  ${c.extra||''}
  ${layer('understand',c.understand)}${layer('example',ex[1],ex[0])}${layer('trap',c.trap)}
  ${tries.map(t=>ph('try',Object.assign({nid:c.id},t))).join('')}
  ${ph('nstat',{id:c.id})}
  </section>`;
};
// LAYERED(classicSheetHtml, specs): turns a classic sheet (eyebrow, h2, lede, then <h3> sections) into layered notions
// without losing content. For section k, specs[k] = {id, ess, tryit?, extra?, title?} ({keep:true} leaves the section as it is).
// Inside a section: EX blocks → "Worked example" layer, TRAP boxes → "Exam trap" layer, everything else → "Understand".
Rev.h.LAYERED=(html,specs)=>{
  const i0=html.indexOf('<h3>');if(i0<0)return html;
  const head=html.slice(0,i0),secs=html.slice(i0).split('<h3>').slice(1).map(p=>{const j=p.indexOf('</h3>');return {title:p.slice(0,j),body:p.slice(j+5)}});
  return head+secs.map((s,k)=>{const sp=specs[k];if(!sp||sp.keep)return `<h3>${s.title}</h3>${s.body}`;
    const ex=[],tr=[];let body=s.body.replace(/<section class="ex">[\s\S]*?<\/section>/g,m=>{ex.push(m);return ''});
    body=body.replace(/<div class="trap"><b>[^<]*<\/b>([\s\S]*?)<\/div>/g,(m,t)=>{tr.push(`<p>${t}</p>`);return ''});
    return Rev.h.NOTION({id:sp.id,title:sp.title||s.title,ess:sp.ess,extra:sp.extra,understand:body.trim()?body:sp.understand,
      example:ex.length?[ex.length>1?`${ex.length} examples from the course`:'From the course',ex.join('')]:sp.example,trap:tr.length?tr.join(''):sp.trap,tryit:sp.tryit})}).join('');
};
// a free layer outside NOTION: LAYER('understand'|'example'|'trap', html, title?)
Rev.h.LAYER=(kind,body,title)=>layer(kind,body,title);
// "Your turn": {q, o, a} (choice) | {q, answer, unit?, tol?} (number) | {q, accept:[…]} (short text); e = correction
Rev.h.TRY=c=>ph('try',c);
KINDS.try=(el,c,ctx)=>{
  const id=uid('t');let p;
  if(c.o)p=null;else if(c.accept)p={type:'text',accept:c.accept,label:c.label||'Answer'};else p={answer:c.answer,unit:c.unit,tol:c.tol,tolPct:c.tolPct,label:c.label||'Answer'};
  el.innerHTML=`<div class="tryit"><div class="try-k">Your turn</div><div class="try-q">${c.q}</div>
   ${c.o?`<div class="opts">${c.o.map((o,i)=>`<button type="button" class="opt" data-i="${i}"><span class="k">${LET[i]}</span><span>${o}</span></button>`).join('')}</div>`:`${partHTML(p,null,id)}<div class="row" style="margin-top:8px"><button type="button" class="btn small" data-chk>Check</button><button type="button" class="btn small ghost" data-show>Show the answer</button></div>`}
   <div class="try-fb" aria-live="polite"></div></div>`;
  const fb=el.querySelector('.try-fb'),rec=ok=>{if(c.nid)bump(ctx.sto,'try:'+c.nid,ok)};
  const say=(ok,head)=>{fb.innerHTML=`<div class="feedback ${ok?'ok':'ko'}"><b class="v">${head}</b> ${c.e||''}</div>`};
  if(c.o){el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const i=+b.dataset.i,ok=i===c.a;
      el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;const k=+x.dataset.i;if(k===c.a)x.classList.add('right');else if(k===i)x.classList.add('wrong')});
      say(ok,ok?'Correct.':`Not quite: the answer is ${LET[c.a]}.`);rec(ok);
      if(!el.querySelector('[data-again]'))fb.insertAdjacentHTML('beforeend','<button type="button" class="btn small ghost" data-again style="margin-top:8px">Try again</button>');
      el.querySelector('[data-again]').onclick=()=>KINDS.try(el,c,ctx)});return}
  const inp=el.querySelector('input');
  const chk=()=>{const r=partCheck(p,null,inp);if(r.empty){fb.innerHTML='<div class="result ko">Answer first, then check.</div>';return}
    inp.classList.toggle('good',r.ok);inp.classList.toggle('bad',!r.ok);say(r.ok,r.ok?'Correct.':(r.nan?'Write a number only.':'Not yet.')+(r.ok?'':` Expected: <b class="num">${r.exp}</b>.`));rec(r.ok)};
  el.querySelector('[data-chk]').onclick=chk;inp.onkeydown=e=>{if(e.key==='Enter')chk()};
  el.querySelector('[data-show]').onclick=()=>{const r=partCheck(p,null,{value:'x'});fb.innerHTML=`<div class="feedback"><b>Answer:</b> <span class="num">${r.exp}</span>. ${c.e||''}</div>`};
};
// Got it / Review buttons of a notion
KINDS.nstat=(el,c,ctx)=>{
  const draw=()=>{const v=ctx.sto.notion(c.id);
    el.innerHTML=`<div class="nstat" role="group" aria-label="How well do you know this notion?"><span>This notion:</span>
     <button type="button" class="chip" data-v="ok" aria-pressed="${v==='ok'}">✓ Got it</button><button type="button" class="chip warnchip" data-v="review" aria-pressed="${v==='review'}">↻ To review</button></div>`;
    el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{ctx.sto.setNotion(c.id,ctx.sto.notion(c.id)===b.dataset.v?'':b.dataset.v);draw();
      const t=document.querySelector(`.sheet-toc [data-to="${CSS.escape(c.id)}"] .ns`);if(t)t.textContent=mark(ctx.sto.notion(c.id))})};
  draw();
};
const mark=v=>v==='ok'?'✓':v==='review'?'↻':'';
// table of contents at the top of a sheet: one chip per h3 (notion status shown); layers are always open
function sheetToc(root,sto){
  const art=root.querySelector('article');if(!art||art.querySelector('.sheet-toc'))return;
  const hs=[...art.querySelectorAll('h3')];if(hs.length<2)return;
  const items=hs.map((h,i)=>{const n=h.closest('.notion');h.id=h.id||'sec-'+i;return {h,id:n?n.dataset.notion:'',t:h.textContent}});
  const nav=document.createElement('nav');nav.className='sheet-toc';nav.setAttribute('aria-label','On this sheet');
  nav.innerHTML=`<div class="toc-head"><b>On this sheet</b></div><ol>${items.map((x,i)=>`<li><button type="button" data-i="${i}" ${x.id?`data-to="${esc(x.id)}"`:''}><span>${esc(x.t)}</span><span class="ns">${x.id?mark(sto.notion(x.id)):''}</span></button></li>`).join('')}</ol>`;
  const after=art.querySelector('.lede')||art.querySelector('h2');
  if(after)after.insertAdjacentElement('afterend',nav);else art.prepend(nav);
  nav.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{const h=items[+b.dataset.i].h;h.scrollIntoView({behavior:'smooth',block:'start'});h.setAttribute('tabindex','-1');h.focus({preventScroll:true})});
}

/* ==========================================================================================
   2. Glossary: subject field glossary:[{t, d, topic?, alias?:[…], fr?}] (fr: the term in the course's other language, shown and searchable)
   GL('term', 'shown text'?) marks a term by hand; on sheets and cheat sheets the first occurrence
   of each term (or alias) is also marked automatically. Hover, focus or tap shows the definition.
   ========================================================================================== */
Rev.h.GL=(term,shown)=>`<span class="gl" data-g="${esc(term)}" tabindex="0">${shown||term}</span>`;
const glossOf=slug=>{const s=slug&&Rev.subject(slug);return s&&s.glossary||[]};
const findTerm=(slug,key)=>{const k=U.norm(key);return glossOf(slug).find(g=>U.norm(g.t)===k||(g.alias||[]).some(a=>U.norm(a)===k))};
const SKIP='h1,h2,h3,h4,summary,.term,.secnum,button,a,.formula,code,svg,input,select,textarea,label,.gl,.sheet-toc,.tryit,.nstat,.w,.pill,.eyebrow,th';
function glossLink(root,slug){
  const gl=glossOf(slug);if(!gl.length)return;
  const art=root.querySelector('article')||root;
  const terms=[];gl.forEach(g=>[g.t].concat(g.alias||[]).forEach(a=>{if(g.auto!==false&&a.length>1)terms.push({a,g})}));
  terms.sort((x,y)=>y.a.length-x.a.length);
  const done=new Set([...art.querySelectorAll('.gl')].map(x=>U.norm(x.dataset.g)));
  const rx=t=>new RegExp(`(^|[^\\p{L}\\p{N}])(${t.a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})(?![\\p{L}\\p{N}])`,'u'+(/^[A-Z0-9]{2,}$/.test(t.a)?'':'i'));
  for(const t of terms){
    if(done.has(U.norm(t.g.t)))continue;
    const re=rx(t),tw=document.createTreeWalker(art,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest(SKIP)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
    let n;while((n=tw.nextNode())){const m=re.exec(n.nodeValue);if(!m)continue;
      const at=m.index+m[1].length,mid=n.splitText(at);mid.splitText(m[2].length);
      const sp=document.createElement('span');sp.className='gl';sp.dataset.g=t.g.t;sp.tabIndex=0;sp.textContent=mid.nodeValue;mid.replaceWith(sp);
      done.add(U.norm(t.g.t));break}
  }
}
// one shared popover
let pop=null,popFor=null;
function showPop(el){
  const slug=(location.hash.replace(/^#/,'').match(/^[a-z0-9-]+/)||[''])[0];
  const s=Rev.subjects().find(x=>slug===x.slug||slug.startsWith(x.slug+'-'));
  const g=s?findTerm(s.slug,el.dataset.g):(el.dataset.d?{t:el.dataset.g,d:el.dataset.d}:DEMO_GLOSS.find(x=>U.norm(x.t)===U.norm(el.dataset.g)));
  if(!g)return;
  if(!pop){pop=document.createElement('div');pop.className='gl-pop';pop.setAttribute('role','tooltip');pop.id='gl-pop';document.body.appendChild(pop)}
  pop.innerHTML=`<b>${esc(g.t)}${g.fr?` <span class="gl-fr">FR: ${esc(g.fr)}</span>`:''}</b><span>${g.d}</span>${s?`<a href="${Rev.link(s.slug,'glossary')}">Glossary →</a>`:''}`;
  pop.hidden=false;popFor=el;el.setAttribute('aria-describedby','gl-pop');
  const r=el.getBoundingClientRect(),W=Math.min(320,window.innerWidth-24);pop.style.width=W+'px';
  let x=r.left+window.scrollX;x=Math.max(12+window.scrollX,Math.min(x,window.scrollX+window.innerWidth-W-12));
  pop.style.left=x+'px';pop.style.top=(r.bottom+window.scrollY+6)+'px';
  const pr=pop.getBoundingClientRect();if(pr.bottom>window.innerHeight&&r.top>pr.height+10)pop.style.top=(r.top+window.scrollY-pr.height-6)+'px';
}
function hidePop(){if(pop)pop.hidden=true;if(popFor)popFor.removeAttribute('aria-describedby');popFor=null}
document.addEventListener('mouseover',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g&&g!==popFor)showPop(g)});
document.addEventListener('mouseout',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g&&!(e.relatedTarget&&(g.contains(e.relatedTarget)||(pop&&pop.contains(e.relatedTarget)))))setTimeout(()=>{if(popFor===g&&!(pop&&pop.matches(':hover')))hidePop()},120)});
document.addEventListener('focusin',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g)showPop(g)});
document.addEventListener('focusout',e=>{if(e.target.closest&&e.target.closest('.gl'))setTimeout(()=>{if(!(pop&&pop.contains(document.activeElement)))hidePop()},150)});
document.addEventListener('click',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g){if(popFor===g)hidePop();else showPop(g);return}if(pop&&!pop.contains(e.target))hidePop()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hidePop()});
window.addEventListener('hashchange',hidePop);
// Glossary tab of a subject
Rev.renderGlossary=(s,main)=>{
  const m=Rev.W.gmem||(Rev.W.gmem={});const f=m[s.slug]||(m[s.slug]={q:'',topic:''});
  const list=s.glossary.slice().sort((a,b)=>a.t.localeCompare(b.t,undefined,{sensitivity:'base'}));
  const topics=s.topics.filter(t=>list.some(g=>g.topic===t.id));
  main.innerHTML=`<div class="eyebrow">${esc(s.name)}</div><h2>Glossary</h2><p class="lede">${list.length} terms of the course. In the sheets, underlined terms show this definition when you hover or tap them.</p>
   <div class="ansrow" style="margin-bottom:10px"><label for="gq">Search</label><input type="text" class="txt" id="gq" value="${esc(f.q)}" autocomplete="off" placeholder="Term or word of the definition"></div>
   ${topics.length>1?`<div class="filters">${Rev.h.chips([['','All topics'],...topics.map(t=>[t.id,esc(t.label||t.title)])],f.topic,'gt')}</div>`:''}
   <div id="glist"></div>`;
  const draw=()=>{const q=U.noAccents(U.norm(f.q));
    const hits=list.filter(g=>(!f.topic||g.topic===f.topic)&&(!q||U.noAccents(U.norm(g.t+' '+(g.fr||'')+' '+(g.alias||[]).join(' ')+' '+g.d.replace(/<[^>]+>/g,''))).includes(q)));
    let cur='';
    main.querySelector('#glist').innerHTML=hits.length?`<dl class="gloss">${hits.map(g=>{const L=U.noAccents(g.t[0]).toUpperCase(),h=L!==cur?`<div class="gl-letter">${esc(L)}</div>`:'';cur=L;
      return `${h}<div class="gl-item"><dt>${esc(g.t)}${g.fr?`<span class="gl-fr" lang="fr">FR: ${esc(g.fr)}</span>`:''}${g.alias&&g.alias.length?` <small>(${g.alias.map(esc).join(', ')})</small>`:''}</dt><dd>${g.d}${g.topic?` <a class="gl-topic" href="${Rev.link(s.slug,'sheets',g.topic)}">${esc(s.topicById[g.topic].label||g.topic)} sheet →</a>`:''}</dd></div>`}).join('')}</dl>`:'<p>No term matches.</p>'};
  const qi=main.querySelector('#gq');qi.oninput=()=>{f.q=qi.value;draw()};
  main.querySelectorAll('[data-gt]').forEach(b=>b.onclick=()=>{f.topic=b.dataset.gt;main.querySelectorAll('[data-gt]').forEach(c=>c.setAttribute('aria-pressed',String(c===b)));draw()});
  draw();
};

/* ==========================================================================================
   3. Step-by-step: STEPS({title?, intro?, steps:[html…]}) or with numbers: STEPS({gen:u=>v, intro:v=>…, steps:v=>[…]})
   ========================================================================================== */
Rev.h.STEPS=c=>ph('steps',c);
KINDS.steps=(el,c)=>{
  let v=null,k=0,steps=[];
  const fresh=()=>{v=c.gen?c.gen(U):null;steps=val(c.steps,v);k=0;draw()};
  const draw=()=>{
    el.innerHTML=`<div class="stepper">${c.title?`<div class="st-title">${c.title}</div>`:''}${c.intro?`<div class="st-intro">${val(c.intro,v)}</div>`:''}
     <ol class="st-list">${steps.slice(0,k).map((s,i)=>`<li class="${i===k-1?'st-new':''}">${s}</li>`).join('')}</ol>
     <div class="row"><button type="button" class="btn small" data-next ${k>=steps.length?'disabled':''}>${k?'Next step':'Show step 1'} (${Math.min(k+1,steps.length)}/${steps.length})</button>
     <button type="button" class="btn small ghost" data-all ${k>=steps.length?'disabled':''}>Show all</button><button type="button" class="btn small ghost" data-re ${k?'':'disabled'}>Start again</button>
     ${c.gen?'<button type="button" class="btn small ghost" data-new>New numbers</button>':''}</div></div>`;
    el.querySelector('[data-next]').onclick=()=>{k++;draw();const b=el.querySelector('[data-next]');(b.disabled?el.querySelector('[data-re]'):b).focus()};
    el.querySelector('[data-all]').onclick=()=>{k=steps.length;draw();el.querySelector('[data-re]').focus()};
    el.querySelector('[data-re]').onclick=()=>{k=0;draw();el.querySelector('[data-next]').focus()};
    const n=el.querySelector('[data-new]');if(n)n.onclick=fresh};
  fresh();
};

/* ==========================================================================================
   4. Decision tree: TREE({id, title, intro?, start, nodes:{id:{q, help?, o:[{l, to, why?}]} | {end, why?}},
      cases?:[{text, path:{nodeId: optionIndex}, why?}], gen?:u=>({text, path, why?})})
   Explore: answer the questions, the path is shown and can be undone. Practice: a case is given, the student
   picks each branch and is corrected at once; the right branch is then followed.
   ========================================================================================== */
Rev.h.TREE=c=>ph('tree',c);
function checkTree(c){
  if(!c.nodes[c.start])throw new Error(`tree "${c.id}": start node "${c.start}" missing`);
  Object.entries(c.nodes).forEach(([k,n])=>{if(!n.end&&!(n.o&&n.o.length))throw new Error(`tree "${c.id}": node "${k}" has neither options nor end`);
    (n.o||[]).forEach(o=>{if(!c.nodes[o.to])throw new Error(`tree "${c.id}": node "${k}" points to missing "${o.to}"`)})});
}
KINDS.tree=(el,c,ctx)=>{
  checkTree(c);
  const S={mode:'explore',path:[],cs:null,score:0,asked:0,fb:''};
  const cases=()=>c.cases||[];
  const newCase=()=>{const cs=c.gen?c.gen(U):U.pick(cases());S.cs=cs;S.path=[];S.score=0;S.asked=0;S.fb='';S.mode='practice';draw()};
  const nodeAt=()=>{let id=c.start;S.path.forEach(p=>{id=c.nodes[id].o[p].to});return id};
  const crumbs=()=>{let id=c.start;return S.path.map((p,i)=>{const n=c.nodes[id],o=n.o[p];id=o.to;
    return `<li><button type="button" class="crumb" data-back="${i}" ${S.mode==='practice'?'disabled':''}><span class="cq">${n.q}</span> <b>${o.l}</b></button></li>`}).join('')};
  const whyList=()=>{let id=c.start;return S.path.map(p=>{const o=c.nodes[id].o[p];id=o.to;return o.why?`<li>${o.why}</li>`:''}).join('')};
  const mapOf=(id,seen)=>{const n=c.nodes[id];if(n.end)return `<span class="tm-end">→ ${n.end}</span>`;if(seen.has(id))return '…';seen=new Set(seen).add(id);
    return `<span class="tm-q">${n.q}</span><ul>${n.o.map(o=>`<li><b>${o.l}</b>: ${mapOf(o.to,seen)}</li>`).join('')}</ul>`};
  const draw=()=>{
    const cur=nodeAt(),n=c.nodes[cur],hasPractice=!!(c.gen||cases().length);
    let body='';
    if(n.end){
      body=`<div class="tree-end"><span class="eyebrow">Conclusion</span><p class="te-c">${n.end}</p>${n.why?`<p>${n.why}</p>`:''}${whyList()?`<div class="layer l-understand"><div class="lh"><span class="lk">Why</span><span class="lt">the reasoning, step by step</span></div><div class="lb"><ol>${whyList()}</ol></div></div>`:''}
        ${S.mode==='practice'?`<div class="feedback ${S.score===S.asked?'ok':'ko'}"><b class="v">${S.score}/${S.asked} branches right first time.</b> ${S.cs.why||''}</div>`:''}</div>`;
    }else body=`<div class="tree-q"><p class="tq">${n.q}</p>${n.help?`<p class="hint">${n.help}</p>`:''}<div class="opts">${n.o.map((o,i)=>`<button type="button" class="opt" data-o="${i}"><span class="k">${LET[i]}</span><span>${o.l}</span></button>`).join('')}</div></div>`;
    const rec=c.id&&ctx.sto.get(c.id);
    el.innerHTML=`<div class="tree">${c.title?`<div class="w-title">${c.title}</div>`:''}${c.intro&&S.mode==='explore'?`<div class="st-intro">${c.intro}</div>`:''}
     ${hasPractice?`<div class="filters" role="group" aria-label="Mode"><button type="button" class="chip" data-mode="explore" aria-pressed="${S.mode==='explore'}">Explore the tree</button><button type="button" class="chip" data-mode="practice" aria-pressed="${S.mode==='practice'}">Practice on a case</button><button type="button" class="chip" data-mode="map" aria-pressed="${S.mode==='map'}">Whole tree</button></div>`:`<div class="filters"><button type="button" class="chip" data-mode="explore" aria-pressed="${S.mode==='explore'}">Explore</button><button type="button" class="chip" data-mode="map" aria-pressed="${S.mode==='map'}">Whole tree</button></div>`}
     ${S.mode==='map'?`<div class="tree-map">${mapOf(c.start,new Set())}</div>`:`
     ${S.mode==='practice'&&S.cs?`<div class="case-box"><span class="eyebrow">Case</span><div>${S.cs.text}</div></div>`:''}
     ${S.path.length?`<ol class="crumbs" aria-label="Your path">${crumbs()}</ol>`:''}
     ${body}<div class="tree-fb" aria-live="polite">${S.fb}</div>
     <div class="row" style="margin-top:10px">${S.mode==='explore'?`<button type="button" class="btn small ghost" data-undo ${S.path.length?'':'disabled'}>← Back</button><button type="button" class="btn small ghost" data-restart ${S.path.length?'':'disabled'}>Start again</button>`:`<button type="button" class="btn small" data-newcase>${n.end?'New case':'Skip: new case'}</button>`}
     ${rec&&rec.n?`<span class="score">Cases solved without error: ${rec.ok}/${rec.n}</span>`:''}</div>`}</div>`;
    el.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{const md=b.dataset.mode;S.fb='';if(md==='practice')newCase();else{S.mode=md;S.path=[];draw()}});
    el.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{const i=+b.dataset.o;
      if(S.mode==='practice'){const right=S.cs.path[cur];S.asked++;
        if(right==null){S.fb='';S.path.push(i)}
        else if(i===right){S.score++;S.fb=`<div class="feedback ok"><b class="v">Right.</b> ${n.o[i].why||''}</div>`;S.path.push(i)}
        else{S.fb=`<div class="feedback ko"><b class="v">Not this branch: “${n.o[right].l}”.</b> ${n.o[right].why||''}</div>`;S.path.push(right)}
        if(c.nodes[nodeAt()].end&&c.id)bump(ctx.sto,c.id,S.score===S.asked)}
      else{S.fb='';S.path.push(i)}
      draw();const f=el.querySelector('.opt,.btn');if(f)f.focus()});
    el.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>{S.path=S.path.slice(0,+b.dataset.back);S.fb='';draw()});
    const u=el.querySelector('[data-undo]');if(u)u.onclick=()=>{S.path.pop();S.fb='';draw()};
    const r=el.querySelector('[data-restart]');if(r)r.onclick=()=>{S.path=[];S.fb='';draw()};
    const nc=el.querySelector('[data-newcase]');if(nc)nc.onclick=newCase;
  };
  draw();
};

/* ==========================================================================================
   5. Games. GAME({id?, title?, rl, cl, rows, cols, m (m[i][j] = [row payoff, col payoff]) | gen:{sizes:[[2,2],[3,3]], max:9},
      tasks:['br','ne','dom']}) : the student marks the best responses, the Nash equilibria and the dominant strategies.
   PLAY({id, title, rows, m, rounds:[1,5,10,'?'], strategies:['allc','alld','tft','grim','random','tf2t'], delta?, notes?})
   : a 2-action symmetric game (action 0 = cooperate, 1 = defect) played against the computer.
   ========================================================================================== */
// best responses, Nash equilibria (pure), strictly dominant strategies
function solveGame(m,lower){ // lower: smaller payoffs are better (years in prison)
  if(lower)m=m.map(r=>r.map(c=>[-c[0],-c[1]]));
  const R=m.length,C=m[0].length,brR=[],brC=[];
  for(let j=0;j<C;j++){const mx=Math.max(...m.map(r=>r[j][0]));brR.push(m.map((r,i)=>r[j][0]===mx?i:-1).filter(i=>i>=0))}
  for(let i=0;i<R;i++){const mx=Math.max(...m[i].map(c=>c[1]));brC.push(m[i].map((c,j)=>c[1]===mx?j:-1).filter(j=>j>=0))}
  const ne=[];for(let i=0;i<R;i++)for(let j=0;j<C;j++)if(brR[j].includes(i)&&brC[i].includes(j))ne.push([i,j]);
  const domR=[...Array(R).keys()].find(i=>[...Array(R).keys()].every(k=>k===i||m[i].every((c,j)=>c[0]>m[k][j][0])));
  const domC=[...Array(C).keys()].find(j=>[...Array(C).keys()].every(k=>k===j||m.every(r=>r[j][1]>r[k][1])));
  return {brR,brC,ne,domR:domR==null?-1:domR,domC:domC==null?-1:domC};
}
Rev.W.solveGame=solveGame;
Rev.h.GAME=c=>ph('game',c);
function genMatrix(R,C,max){ // distinct payoffs for each player: no ties, so every best response is unique
  const pool=n=>U.shuffle([...Array(Math.max(max,n)+1).keys()]).slice(0,n);
  const a=pool(R*C),b=pool(R*C);return [...Array(R)].map((_,i)=>[...Array(C)].map((_,j)=>[a[i*C+j],b[i*C+j]]))}
// sequential version of a matrix game: the row player leads, the column player observes and answers (backward induction)
function seqSolve(m,lower){
  const v=x=>lower?-x:x,R=m.length,C=m[0].length;
  const fol=[...Array(R).keys()].map(i=>{const mx=Math.max(...m[i].map(c=>v(c[1])));return m[i].map((c,j)=>v(c[1])===mx?j:-1).filter(j=>j>=0)});
  const val=fol.map((js,i)=>v(m[i][js[0]][0])),mx=Math.max(...val),lead=val.map((x,i)=>x===mx?i:-1).filter(i=>i>=0);
  return {fol,lead,tie:fol.some(js=>js.length>1)||lead.length>1,cell:[lead[0],fol[lead[0]][0]]};
}
Rev.W.seqSolve=seqSolve;
function seqTreeSVG(m,rows,cols,rl,cl,lower,show){
  const s=seqSolve(m,lower),R=m.length,C=m[0].length,leaf=Math.max(64,Math.min(96,560/(R*C))),W=Math.max(340,R*C*leaf+30),H=230;
  const lx=(i,j)=>15+leaf/2+(i*C+j)*leaf,nx=i=>(lx(i,0)+lx(i,C-1))/2,cx=W/2;
  const ln=(x1,y1,x2,y2,on)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:var(${on?'--ledger':'--rule-strong'});stroke-width:${on?3.2:1.5}"/>`;
  let g=`<text x="${cx}" y="16" text-anchor="middle" class="pp">${esc(rl)} (leader)</text><circle cx="${cx}" cy="26" r="4" style="fill:var(--ink)"/>`;
  for(let i=0;i<R;i++){const leadOn=show&&s.lead.includes(i);g+=ln(cx,26,nx(i),96,leadOn);
    g+=`<text x="${(cx+nx(i))/2+(nx(i)<cx?-6:6)}" y="60" text-anchor="${nx(i)<cx?'end':'start'}" class="pa" style="fill:var(--ink)">${esc(rows[i])}</text>`;
    g+=`<circle cx="${nx(i)}" cy="96" r="4" style="fill:var(--ink)"/><text x="${nx(i)}" y="114" text-anchor="middle" class="pt">${esc(cl)}</text>`;
    for(let j=0;j<C;j++){const on=show&&s.fol[i].includes(j),path=show&&s.lead.includes(i)&&s.fol[i].includes(j);
      g+=ln(nx(i),120,lx(i,j),175,on);g+=`<text x="${(nx(i)+lx(i,j))/2+(lx(i,j)<nx(i)?-4:4)}" y="152" text-anchor="${lx(i,j)<nx(i)?'end':'start'}" class="pt">${esc(cols[j])}</text>`;
      g+=`<text x="${lx(i,j)}" y="194" text-anchor="middle" class="pm" style="${path?'font-weight:700;fill:var(--ledger)':''}">(${m[i][j][0]} ; ${m[i][j][1]})</text>`}}
  return `<figure class="fig"><div class="tbl"><svg class="plot" viewBox="0 0 ${W} ${H}" style="min-width:${Math.min(W,560)}px" role="img" aria-label="Game tree, ${esc(rl)} moves first">${g}</svg></div>${show?'<figcaption>Thick branches: the choices of the subgame-perfect equilibrium; bold: the equilibrium outcome.</figcaption>':''}</figure>`;
}
function seqSteps(m,rows,cols,rl,cl,lower){
  const s=seqSolve(m,lower),w=lower?'lowest':'highest';
  const st=rows.map((rn,i)=>`If ${esc(rl)} plays <b>${esc(rn)}</b>, ${esc(cl)} compares ${m[i].map((c,j)=>`${esc(cols[j])} (${c[1]})`).join(', ')} and picks the ${w}: <b>${s.fol[i].map(j=>esc(cols[j])).join(' or ')}</b>.`);
  st.push(`${esc(rl)} anticipates these answers: ${rows.map((rn,i)=>`${esc(rn)} → ${m[i][s.fol[i][0]][0]}`).join(', ')}. ${lower?'Lowest':'Highest'}: <b>${s.lead.map(i=>esc(rows[i])).join(' or ')}</b>.`);
  st.push(`Subgame-perfect equilibrium: ${esc(rl)} plays <b>${esc(rows[s.cell[0]])}</b>; ${esc(cl)} plays ${rows.map((rn,i)=>`${esc(s.fol[i].map(j=>cols[j]).join('/'))} after ${esc(rn)}`).join(', ')}. Outcome (${esc(rows[s.cell[0]])} ; ${esc(cols[s.cell[1]])}) with payoffs (${m[s.cell[0]][s.cell[1]].join(' ; ')}).${s.tie?' Note: a tie means the follower (or the leader) is indifferent; the course’s generated games avoid ties.':''}`);
  return st;
}
Rev.W.seqTreeSVG=seqTreeSVG;Rev.W.seqSteps=seqSteps;
KINDS.game=(el,c,ctx)=>{
  const tasks=(c.tasks||['br','ne','dom']).concat(c.seq&&!(c.tasks||[]).includes('seq')?['seq']:[]),sizes=(c.gen&&c.gen.sizes)||[[2,2]];
  const S={m:null,rows:null,cols:null,size:0,task:tasks[0],marks:{},cells:{},dom:[-2,-2],seqCell:'',checked:false,fb:'',editing:false};
  const fresh=()=>{
    if(c.gen){const [R,C]=sizes[S.size];S.m=genMatrix(R,C,c.gen.max||9);S.rows=(c.rows||['Top','Middle','Bottom','Fourth']).slice(0,R);S.cols=(c.cols||['Left','Centre','Right','Fourth']).slice(0,C)}
    else{S.m=c.m;S.rows=c.rows;S.cols=c.cols}
    S.marks={};S.cells={};S.dom=[-2,-2];S.seqCell='';S.checked=false;S.fb='';S.editing=false;draw()};
  const sol=()=>solveGame(S.m,c.lower);
  const TASK={br:'1 · Best responses',ne:'2 · Nash equilibria',dom:'3 · Dominant strategies',seq:'4 · Sequential game'};
  const best=c.lower?'lowest':'highest';
  const HELP={br:`Click every payoff that is a <b>best response</b>: for each column, the ${best} payoff of ${esc(c.rl||'the row player')} (first number); for each row, the ${best} payoff of ${esc(c.cl||'the column player')} (second number).${c.lower?' Here a lower number is better.':''}`,
    ne:'Click every cell that is a <b>Nash equilibrium</b> (each player plays a best response to the other: both payoffs marked).',
    dom:'Does a player have a <b>strictly dominant strategy</b> (best whatever the other does)? Choose it, or “none”.',
    seq:`Same payoffs, but <b>${esc(c.rl||'the row player')} moves first</b> and ${esc(c.cl||'the column player')} observes the choice. Solve by backward induction and click the cell reached by the <b>subgame-perfect equilibrium</b>.`};
  const draw=()=>{
    const s=sol(),R=S.m.length,C=S.m[0].length,chk=S.checked;
    const pay=(i,j,k)=>{const key=`${k}${i}-${j}`,on=!!S.marks[key],right=k==='r'?s.brR[j].includes(i):s.brC[i].includes(j);
      const cls=chk&&S.task==='br'?(on===right?(on?' good':''):(on?' bad':' miss')):'';
      return `<button type="button" class="pay p-${k}${on?' on':''}${cls}" data-p="${key}" ${S.task!=='br'?'tabindex="-1"':''} aria-pressed="${on}" aria-label="${k==='r'?esc(c.rl||'Row player'):esc(c.cl||'Column player')} payoff ${S.m[i][j][k==='r'?0:1]}">${S.m[i][j][k==='r'?0:1]}</button>`};
    const cell=(i,j)=>{const key=i+'-'+j,on=!!S.cells[key],right=s.ne.some(([a,b])=>a===i&&b===j);
      const sq=S.task==='seq',sp=sq&&seqSolve(S.m,c.lower).cell,onq=sq&&S.seqCell===key,rq=sq&&sp[0]===i&&sp[1]===j;
      const cls=chk&&S.task==='ne'?(on===right?(on?' good':''):(on?' bad':' miss')):chk&&sq?(onq===rq?(onq?' good':''):(onq?' bad':' miss')):'';
      if(sq)return `<td class="gcell${onq?' on':''}${cls}" data-c="${key}" tabindex="0" role="button" aria-pressed="${onq}">(${S.m[i][j][0]} ; ${S.m[i][j][1]})</td>`;
      return `<td class="gcell${on?' on':''}${cls}" ${S.task==='ne'?`data-c="${key}" tabindex="0" role="button" aria-pressed="${on}"`:''}>(${pay(i,j,'r')} ; ${pay(i,j,'c')})</td>`};
    const domSel=(k,labels)=>`<div class="ansrow"><label for="${el.dataset.w}-d${k}">${esc(k?c.cl||'Column player':c.rl||'Row player')}</label><select id="${el.dataset.w}-d${k}" data-d="${k}"><option value="-2">Choose…</option><option value="-1" ${S.dom[k]===-1?'selected':''}>No strictly dominant strategy</option>${labels.map((l,i)=>`<option value="${i}" ${S.dom[k]===i?'selected':''}>${esc(l)}</option>`).join('')}</select></div>`;
    const rec=c.id&&ctx.sto.get(c.id);
    if(S.editing){const inp=(i,j,k)=>`<input type="text" inputmode="decimal" class="txt num" style="width:4.2em" data-e="${i}-${j}-${k}" value="${S.m[i][j][k]}" aria-label="${esc(k?c.cl||'Column player':c.rl||'Row player')} payoff, ${esc(S.rows[i])} / ${esc(S.cols[j])}">`;
      el.innerHTML=`<div class="game">${c.title?`<div class="w-title">${c.title}</div>`:''}<p class="hint">Type your own payoffs (first box: ${esc(c.rl||'row player')}, second: ${esc(c.cl||'column player')}), then apply. All the tasks are then corrected on your matrix.</p>
       <div class="tbl"><table class="gtable"><thead><tr><th>${esc(c.rl||'Row')} \\ ${esc(c.cl||'Column')}</th>${S.cols.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${S.m.map((rw,i)=>`<tr><th>${esc(S.rows[i])}</th>${rw.map((_,j)=>`<td style="white-space:nowrap">(${inp(i,j,0)} ; ${inp(i,j,1)})</td>`).join('')}</tr>`).join('')}</tbody></table></div>
       <div class="row" style="margin-top:10px"><button type="button" class="btn small" data-apply>Apply my payoffs</button><button type="button" class="btn small ghost" data-cancel>Cancel</button></div><div class="game-fb" aria-live="polite">${S.fb}</div></div>`;
      el.querySelector('[data-apply]').onclick=()=>{const m=S.m.map(rw=>rw.map(x=>x.slice()));let bad=false;el.querySelectorAll('[data-e]').forEach(x=>{const [i,j,k]=x.dataset.e.split('-').map(Number),v=U.num(x.value);if(!isFinite(v))bad=true;else m[i][j][k]=v});
        if(bad){S.fb='<div class="result ko">Write a number in every box.</div>';draw();return}S.m=m;S.marks={};S.cells={};S.dom=[-2,-2];S.seqCell='';S.checked=false;S.fb='<div class="result ok">Your matrix is in place: now solve it.</div>';S.editing=false;draw()};
      el.querySelector('[data-cancel]').onclick=()=>{S.editing=false;S.fb='';draw()};return}
    el.innerHTML=`<div class="game">${c.title?`<div class="w-title">${c.title}</div>`:''}
     ${c.gen&&sizes.length>1?`<div class="filters">${sizes.map((z,i)=>`<button type="button" class="chip" data-size="${i}" aria-pressed="${S.size===i}">${z[0]} × ${z[1]}</button>`).join('')}</div>`:''}
     <div class="filters" role="group" aria-label="Task">${tasks.map(t=>`<button type="button" class="chip" data-task="${t}" aria-pressed="${S.task===t}">${TASK[t]}</button>`).join('')}</div>
     <p class="hint">${HELP[S.task]}</p>
     <div class="tbl"><table class="gtable"><thead><tr><th>${esc(c.rl||'Row')} \\ ${esc(c.cl||'Column')}</th>${S.cols.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead>
     <tbody>${S.m.map((r,i)=>`<tr><th>${esc(S.rows[i])}</th>${r.map((_,j)=>cell(i,j)).join('')}</tr>`).join('')}</tbody></table></div>
     ${S.task==='dom'?domSel(0,S.rows)+domSel(1,S.cols):''}${S.task==='seq'?seqTreeSVG(S.m,S.rows,S.cols,c.rl||'Row player',c.cl||'Column player',c.lower,S.checked):''}
     <div class="row" style="margin-top:10px"><button type="button" class="btn small" data-chk>Check</button><button type="button" class="btn small ghost" data-sol>Solution</button>${c.gen?'<button type="button" class="btn small ghost" data-new>New matrix</button>':'<button type="button" class="btn small ghost" data-new>Reset</button>'}${c.edit?'<button type="button" class="btn small ghost" data-edit>Edit the payoffs</button>':''}
     ${rec&&rec.n?`<span class="score">Checks right: ${rec.ok}/${rec.n}</span>`:''}</div>
     <div class="game-fb" aria-live="polite">${S.fb}</div></div>`;
    el.querySelectorAll('[data-task]').forEach(b=>b.onclick=()=>{S.task=b.dataset.task;S.checked=false;S.fb='';draw()});
    el.querySelectorAll('[data-size]').forEach(b=>b.onclick=()=>{S.size=+b.dataset.size;fresh()});
    if(S.task==='br')el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{S.marks[b.dataset.p]=!S.marks[b.dataset.p];S.checked=false;S.fb='';draw();const f=el.querySelector(`[data-p="${b.dataset.p}"]`);if(f)f.focus()});
    el.querySelectorAll('[data-c]').forEach(td=>{const t=()=>{if(S.task==='seq')S.seqCell=S.seqCell===td.dataset.c?'':td.dataset.c;else S.cells[td.dataset.c]=!S.cells[td.dataset.c];S.checked=false;S.fb='';draw();const f=el.querySelector(`[data-c="${td.dataset.c}"]`);if(f)f.focus()};
      td.onclick=t;td.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}}});
    el.querySelectorAll('[data-d]').forEach(x=>x.onchange=()=>{S.dom[+x.dataset.d]=+x.value;S.checked=false;S.fb=''});
    el.querySelector('[data-chk]').onclick=()=>{
      let ok;
      if(S.task==='br'){ok=[...Array(R)].every((_,i)=>[...Array(C)].every((_,j)=>!!S.marks['r'+i+'-'+j]===s.brR[j].includes(i)&&!!S.marks['c'+i+'-'+j]===s.brC[i].includes(j)))}
      else if(S.task==='seq'){if(!S.seqCell){S.fb='<div class="result ko">Click the cell you think is reached.</div>';draw();return}const sp=seqSolve(S.m,c.lower).cell;ok=S.seqCell===sp[0]+'-'+sp[1]}
      else if(S.task==='ne'){ok=[...Array(R)].every((_,i)=>[...Array(C)].every((_,j)=>!!S.cells[i+'-'+j]===s.ne.some(([a,b])=>a===i&&b===j)))}
      else{if(S.dom.includes(-2)){S.fb='<div class="result ko">Choose an answer for both players.</div>';draw();return}ok=S.dom[0]===s.domR&&S.dom[1]===s.domC}
      S.checked=true;S.fb=`<div class="feedback ${ok?'ok':'ko'}"><b class="v">${ok?'Correct.':'Not yet.'}</b> ${ok?'':S.task==='dom'?'Compare, for each player, one strategy with every other one.':S.task==='seq'?'Start with the last mover: what does the follower answer after each move of the leader?':'Green = right, red = wrongly marked, dashed = missed.'}</div>`;
      if(c.id)bump(ctx.sto,c.id,ok);draw()};
    el.querySelector('[data-sol]').onclick=()=>{const rl=c.rl||'Row player',cl=c.cl||'Column player';S.fb=`<div class="box"><h4>Solution</h4>${gameSolution(S.m,S.rows,S.cols,rl,cl,c.lower)}${tasks.includes('seq')?`<h4>Sequential version (${esc(rl)} leads)</h4>${seqTreeSVG(S.m,S.rows,S.cols,rl,cl,c.lower,true)}<ol>${seqSteps(S.m,S.rows,S.cols,rl,cl,c.lower).map(x=>`<li>${x}</li>`).join('')}</ol>`:''}</div>`;draw()};
    const ed=el.querySelector('[data-edit]');if(ed)ed.onclick=()=>{S.editing=true;S.fb='';draw()};
    el.querySelector('[data-new]').onclick=fresh;
  };
  fresh();
};
function gameSolution(m,rows,cols,rl,cl,lower){
  const s=solveGame(m,lower);
  const br1=cols.map((cn,j)=>`If ${esc(cl)} plays <b>${esc(cn)}</b>, ${esc(rl)}'s best response is <b>${s.brR[j].map(i=>esc(rows[i])).join(' or ')}</b> (${s.brR[j].map(i=>m[i][j][0]).join(', ')} vs ${m.map(r=>r[j][0]).join(' / ')}).`);
  const br2=rows.map((rn,i)=>`If ${esc(rl)} plays <b>${esc(rn)}</b>, ${esc(cl)}'s best response is <b>${s.brC[i].map(j=>esc(cols[j])).join(' or ')}</b> (${m[i].map(c=>c[1]).join(' / ')}).`);
  return `<ol>${br1.map(x=>`<li>${x}</li>`).join('')}${br2.map(x=>`<li>${x}</li>`).join('')}</ol>
   <p><b>Nash equilibri${s.ne.length>1?'a':'um'}:</b> ${s.ne.length?s.ne.map(([i,j])=>`(${esc(rows[i])} ; ${esc(cols[j])}) with payoffs (${m[i][j][0]} ; ${m[i][j][1]})`).join(', '):'none in pure strategies'}: the cells where both payoffs are best responses.</p>
   <p><b>Strictly dominant strategies:</b> ${esc(rl)}: ${s.domR>=0?esc(rows[s.domR]):'none'} · ${esc(cl)}: ${s.domC>=0?esc(cols[s.domC]):'none'}.</p>`;
}
Rev.W.gameSolution=gameSolution;

/* MATRIX({id, name?, desc?, pl:[row player, column player], r:[row strategies], c:[column strategies], p:[[[a,b]…]…], min?:true, compact?:true})
   compact: the matrix inside the text, as on the midterm site (no title, no exam questions, no tree; the buttons stay).
   gen:true | {sizes:[2,3,4]}: "New random n×n" buttons (the midterm lab; default 2×2 and 4×4); without p, starts with a random 2×2.
   edit:true: "Edit the payoffs": the student types his own matrix (higher is better), then every check and question applies to it.
   The payoff-matrix lab of the midterm revision site: matrix with the player names on both axes; click the cells you think are
   Nash equilibria and check; show / hide the best responses (underlined); "Answer like the exam" questions revealed one by one;
   sequential version (row player leads) with backward induction revealed on demand. min:true = lower payoffs are better. */
Rev.h.MATRIX=c=>ph('matrix',c);
// the same matrix as plain HTML, for exercise statements, generators and mock papers: Rev.W.pmTable(m, rows, cols, rowPlayer, colPlayer)
const pmNum=x=>fmt(x).replace(/\.00$/,'');
Rev.W.pmTable=(m,rows,cols,rl,cl)=>`<div class="tbl"><table class="pm pm-static"><thead><tr><th class="mx-corner" colspan="2" rowspan="2"></th><th class="mx-pl" colspan="${cols.length}">${esc(cl)}</th></tr><tr>${cols.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${m.map((row,i)=>`<tr>${i===0?`<th class="mx-pl mx-v" rowspan="${m.length}"><span>${esc(rl)}</span></th>`:''}<th>${esc(rows[i])}</th>${row.map(c=>`<td class="mx-cell">(${pmNum(c[0])} ; ${pmNum(c[1])})</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
// midterm-lab random game: payoffs 0–9, distinct for player 1 in each column and for player 2 in each row (no ties), no tie in the sequential game
function mxRandom(n){for(let t=0;t<500;t++){const p=[...Array(n)].map(()=>[...Array(n)].map(()=>[0,0]));
  for(let j=0;j<n;j++){const v=U.shuffle([...Array(10).keys()]);for(let i=0;i<n;i++)p[i][j][0]=v[i]}
  for(let i=0;i<n;i++){const v=U.shuffle([...Array(10).keys()]);for(let j=0;j<n;j++)p[i][j][1]=v[j]}
  if(n<=3&&seqSolve(p).tie)continue;
  return {name:'Random game',pl:['Duopolist 1','Duopolist 2'],r:n===4?['s1','s2','s3','s4']:[...Array(n)].map((_,k)=>'Strategy '+(k+1)),c:n===4?['t1','t2','t3','t4']:[...Array(n)].map((_,k)=>'Strategy '+(k+1)),p,desc:'Randomly generated: payoffs are profits (higher is better).'}}}
KINDS.matrix=(el,c,ctx)=>{
  let g,R,C,s,sq,neTxt,cmp,brList,eqdom,qs,small;const f=x=>fmt(x).replace(/\.00$/,'');
  const S={picks:[],br:false,checked:false,fb:'',open:{},tree:false};
  const setGame=ng=>{g=ng;R=g.p.length;C=g.p[0].length;s=solveGame(g.p,g.min);sq=seqSolve(g.p,g.min);Object.assign(S,{picks:[],br:false,checked:false,fb:'',open:{},tree:false});build()};
  const cellN=(i,j)=>`(${esc(g.r[i])} ; ${esc(g.c[j])})`,pay=(i,j)=>`(${f(g.p[i][j][0])} ; ${f(g.p[i][j][1])})`;
  const build=()=>{
  neTxt=s.ne.length?s.ne.map(([i,j])=>`${cellN(i,j)} with payoffs ${pay(i,j)}`).join('; '):'none in pure strategies';
  cmp=g.min?'best (fewest years)':'highest';
  brList=`<ul>${g.c.map((cn,j)=>`<li>If ${esc(g.pl[1])} plays <b>${esc(cn)}</b>, ${esc(g.pl[0])}'s ${cmp} payoff is ${s.brR[j].map(i=>`<b>${esc(g.r[i])}</b> (${f(g.p[i][j][0])})`).join(' or ')}.</li>`).join('')}${g.r.map((rn,i)=>`<li>If ${esc(g.pl[0])} plays <b>${esc(rn)}</b>, ${esc(g.pl[1])}'s ${cmp} payoff is ${s.brC[i].map(j=>`<b>${esc(g.c[j])}</b> (${f(g.p[i][j][1])})`).join(' or ')}.</li>`).join('')}</ul>`;
  eqdom=s.domR>=0&&s.domC>=0;
  qs=[[`Does ${esc(g.pl[0])} have a dominant strategy?`,s.domR<0?'No. Its best response depends on what the other player does.':`Yes: <b>${esc(g.r[s.domR])}</b>, best whatever ${esc(g.pl[1])} does.`],
   [`Does ${esc(g.pl[1])} have a dominant strategy?`,s.domC<0?'No. Its best response depends on what the other player does.':`Yes: <b>${esc(g.c[s.domC])}</b>, best whatever ${esc(g.pl[0])} does.`],
   ['Is there an equilibrium in dominant strategies?',eqdom?`Yes: ${cellN(s.domR,s.domC)}. It is therefore also the unique Nash equilibrium.`:'No: that requires both players to have a dominant strategy.'],
   ['Which is/are the Nash equilibrium(s)?',neTxt+'.'],
   ['Is there an expected solution?',s.ne.length===1?'Yes: the unique Nash equilibrium is the expected solution.':s.ne.length>1?'No: several Nash equilibria, so no expected solution in the absence of coordination.':'No pure-strategy Nash equilibrium, so no expected solution.']];
  small=R<=3&&C<=3;
  if(small)qs.push([`Played sequentially with ${esc(g.pl[0])} as leader: subgame-perfect equilibrium?`,sq.tie?'Ambiguous because of a tie; see the tree.':`${cellN(sq.cell[0],sq.cell[1])}, payoffs ${pay(sq.cell[0],sq.cell[1])}. See the tree below.`]);
  };
  const drawEdit=()=>{const inp=(i,j,k)=>`<input type="text" inputmode="decimal" class="txt num" style="width:4.2em" data-e="${i}-${j}-${k}" value="${g.p[i][j][k]}" aria-label="${esc(g.pl[k])} payoff, ${esc(g.r[i])} / ${esc(g.c[j])}">`;
    el.innerHTML=`<div class="mxlab"><div class="w-title">Your own payoffs</div><p class="hint">First box: ${esc(g.pl[0])} (row player); second box: ${esc(g.pl[1])}. Higher is better. Then apply: every check and question is corrected on your matrix.</p>
     <div class="tbl"><table class="pm"><thead><tr><th class="mx-corner" colspan="2" rowspan="2"></th><th class="mx-pl" colspan="${C}">${esc(g.pl[1])}</th></tr><tr>${g.c.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${g.p.map((row,i)=>`<tr>${i===0?`<th class="mx-pl mx-v" rowspan="${R}"><span>${esc(g.pl[0])}</span></th>`:''}<th>${esc(g.r[i])}</th>${row.map((_,j)=>`<td style="white-space:nowrap">(${inp(i,j,0)} ; ${inp(i,j,1)})</td>`).join('')}</tr>`).join('')}</tbody></table></div>
     <div class="row" style="margin-top:10px"><button type="button" class="btn small" data-apply>Apply my payoffs</button><button type="button" class="btn small ghost" data-cancel>Cancel</button></div><div class="game-fb" aria-live="polite">${S.fb}</div></div>`;
    el.querySelector('[data-apply]').onclick=()=>{const p=g.p.map(row=>row.map(x=>x.slice()));let bad=false;el.querySelectorAll('[data-e]').forEach(x=>{const [i,j,k]=x.dataset.e.split('-').map(Number),v=U.num(x.value);if(!isFinite(v))bad=true;else p[i][j][k]=v});
      if(bad){S.fb='<div class="result ko">Write a number in every box.</div>';drawEdit();return}S.editing=false;setGame(Object.assign({},g,{p,min:false,name:'Your game',desc:'Your own payoffs (higher is better).'}));draw()};
    el.querySelector('[data-cancel]').onclick=()=>{S.editing=false;S.fb='';draw()}};
  const draw=()=>{
    if(S.editing)return drawEdit();
    const isNE=(i,j)=>s.ne.some(([a,b])=>a===i&&b===j),picked=(i,j)=>S.picks.some(([a,b])=>a===i&&b===j);
    let h=`<thead><tr><th class="mx-corner" colspan="2" rowspan="2"></th><th class="mx-pl" colspan="${C}">${esc(g.pl[1])}</th></tr><tr>${g.c.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>`;
    for(let i=0;i<R;i++){h+='<tr>'+(i===0?`<th class="mx-pl mx-v" rowspan="${R}"><span>${esc(g.pl[0])}</span></th>`:'')+`<th>${esc(g.r[i])}</th>`;
      for(let j=0;j<C;j++){const a=f(g.p[i][j][0]),b=f(g.p[i][j][1]),u1=S.br&&s.brR[j].includes(i),u2=S.br&&s.brC[i].includes(j);
        const cls=S.checked?(picked(i,j)?(isNE(i,j)?' ne':' wrong'):(isNE(i,j)?' ne':'')):(picked(i,j)?' pick':'');
        h+=`<td class="mx-cell${cls}" data-i="${i}" data-j="${j}" tabindex="0" role="button" aria-pressed="${picked(i,j)}">(${u1?`<u class="br1">${a}</u>`:a} ; ${u2?`<u class="br2">${b}</u>`:b})</td>`}
      h+='</tr>'}
    const rec=c.id&&ctx.sto.get(c.id);
    el.innerHTML=`<div class="mxlab${c.compact?' compact':''}">${g.name&&!c.compact?`<div class="w-title">${esc(g.name)}</div>`:''}${g.desc&&!c.compact?`<p class="hint">${g.desc}</p>`:''}
     <div class="tbl"><table class="pm">${h}</tbody></table></div>${g.min?'<p class="hint">Years in prison: lower is better.</p>':''}
     ${S.br?`<div class="mx-legend"><span><i class="sw1"></i>${esc(g.pl[0])}'s best response (per column)</span><span><i class="sw2"></i>${esc(g.pl[1])}'s best response (per row)</span></div>`:''}
     <p class="hint">Click the cells you think are Nash equilibria, then check.</p>
     <div class="row"><button type="button" class="btn small" data-chk>Check my Nash equilibria</button><button type="button" class="btn small ghost" data-br>${S.br?'Hide':'Show'} best responses</button><button type="button" class="btn small ghost" data-clr>Clear</button>${c.gen?(c.gen.sizes||[2,4]).map(n=>`<button type="button" class="btn small ghost" data-rnd="${n}">New random ${n}×${n}</button>`).join(''):''}${c.edit?'<button type="button" class="btn small ghost" data-edit>Edit the payoffs</button>':''}${rec&&rec.n?`<span class="score">Checks right: ${rec.ok}/${rec.n}</span>`:''}</div>
     <div class="game-fb" aria-live="polite">${S.fb}</div>
     ${c.compact?'':`<h4>Answer like the exam</h4><div class="mx-qs">${qs.map(([q,a],k)=>`<div class="mx-q"><b>${q}</b> ${S.open[k]?`<div class="mx-a">${a}</div>`:`<button type="button" class="btn small ghost" data-q="${k}">Show the answer</button>`}</div>`).join('')}</div>
     `}${small&&!c.compact?`<h4>Sequential version: ${esc(g.pl[0])} is the leader</h4><p class="hint">Same payoffs, but ${esc(g.pl[0])} moves first and ${esc(g.pl[1])} observes the choice. Solve by backward induction before revealing.</p>
     ${seqTreeSVG(g.p,g.r,g.c,g.pl[0],g.pl[1],g.min,S.tree)}<div class="row"><button type="button" class="btn small" data-tree>${S.tree?'Hide solution':'Reveal backward induction'}</button></div>
     ${S.tree?`<div class="box"><ol>${seqSteps(g.p,g.r,g.c,g.pl[0],g.pl[1],g.min).map(x=>`<li>${x}</li>`).join('')}</ol></div>`:''}`:''}</div>`;
    el.querySelectorAll('.mx-cell').forEach(td=>{const t=()=>{const i=+td.dataset.i,j=+td.dataset.j,k=S.picks.findIndex(([a,b])=>a===i&&b===j);if(k>=0)S.picks.splice(k,1);else S.picks.push([i,j]);S.checked=false;S.fb='';draw();const n=el.querySelector(`.mx-cell[data-i="${i}"][data-j="${j}"]`);if(n)n.focus()};
      td.onclick=t;td.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}}});
    el.querySelector('[data-chk]').onclick=()=>{let right=0,wrong=0;S.picks.forEach(([i,j])=>isNE(i,j)?right++:wrong++);const missed=s.ne.filter(([i,j])=>!picked(i,j)).length,ok=!wrong&&!missed;
      S.checked=true;S.fb=`<div class="feedback ${ok?'ok':'ko'}"><b class="v">${ok?'All Nash equilibria found.':`${right} right, ${wrong} wrong, ${missed} missed.`}</b><p>There ${s.ne.length===1?'is 1 Nash equilibrium':`are ${s.ne.length} Nash equilibria`}: ${neTxt}. Highlighted in green.</p>${brList}</div>`;
      if(c.id)bump(ctx.sto,c.id,ok);draw()};
    el.querySelector('[data-br]').onclick=()=>{S.br=!S.br;draw()};
    el.querySelectorAll('[data-rnd]').forEach(b=>b.onclick=()=>{setGame(mxRandom(+b.dataset.rnd));draw()});
    const ed=el.querySelector('[data-edit]');if(ed)ed.onclick=()=>{S.editing=true;S.fb='';draw()};
    el.querySelector('[data-clr]').onclick=()=>{S.picks=[];S.checked=false;S.fb='';draw()};
    el.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{S.open[+b.dataset.q]=1;draw()});
    const tb=el.querySelector('[data-tree]');if(tb)tb.onclick=()=>{S.tree=!S.tree;draw()};
  };
  setGame(c.p?c:mxRandom(2));draw();
};

// computer strategies for a repeated 2-action game (0 = cooperate, 1 = defect); h = [[you, computer], …]
// d(r): description with the action labels r = [cooperative action, defecting action]
const STRATS={
  allc:{name:r=>'Always '+r[0].toLowerCase(),move:()=>0,d:r=>`plays “${r[0]}” every round, whatever you do.`},
  alld:{name:r=>'Always '+r[1].toLowerCase(),move:()=>1,d:r=>`plays “${r[1]}” every round.`},
  tft:{name:()=>'Tit-for-tat',move:h=>h.length?h[h.length-1][0]:0,d:r=>`plays “${r[0]}” in round 1, then copies your previous move.`},
  grim:{name:()=>'Grim trigger',move:h=>h.some(x=>x[0]===1)?1:0,d:r=>`plays “${r[0]}” until you play “${r[1]}” once, then “${r[1]}” forever.`},
  tf2t:{name:()=>'Tit-for-two-tats',move:h=>h.length>1&&h[h.length-1][0]===1&&h[h.length-2][0]===1?1:0,d:r=>`plays “${r[1]}” only after two “${r[1]}” in a row from you.`},
  random:{name:()=>'Random',move:()=>Math.random()<.5?0:1,d:()=>'plays at random (50 / 50).'}};
Rev.W.STRATS=STRATS;
Rev.h.PLAY=c=>ph('play',c);
// explanation of a finished game (one-shot, known end, unknown end) from the course's reasoning on repeated games
function playWhy(c,S){
  const m=c.m,lower=c.higher===false,g=solveGame(m,lower),C0=esc(c.rows[0]),C1=esc(c.rows[1]),n=S.h.length,mine=S.h.filter(x=>x[0]===1).length,his=S.h.filter(x=>x[1]===1).length;
  const dom=g.domR===1?`In the one-shot game “${C1}” is a <b>dominant strategy</b> (${lower?'fewer':'more'} ${lower?'years':'points'} whatever the other does), so (${C1} ; ${C1}) is the equilibrium, although (${C0} ; ${C0}) is better for both.`:`Nash equilibria of the one-shot game: ${g.ne.map(([i,j])=>'('+esc(c.rows[i])+' ; '+esc(c.rows[j])+')').join(', ')||'none'}.`;
  const hor=S.rounds===1?'One-shot game: there is no future, so nothing can punish defection.':S.rounds==='?'?`Unknown end (${Math.round((c.delta||0.8)*100)}% chance of another round): today’s choice affects a long stream of future payoffs. Against <b>tit-for-tat</b>, defecting once gains now but triggers retaliation in the next rounds: cooperation can be sustained when future payoffs matter enough.`:`Known final period (${S.rounds} rounds): in the last round nobody can retaliate, so defecting pays; reasoning backwards, cooperation <b>unravels</b> in earlier rounds too (with a fully rational opponent).`;
  const vs={allc:`The computer always cooperated: the best reply was to play “${C1}” every round.`,alld:`The computer always defected: cooperating only cost you; “${C1}” every round was best.`,tft:`Tit-for-tat copies your last move: cooperate and it cooperates; defect and it punishes you next round.`,grim:'Grim trigger punishes forever after one defection.',tf2t:'Tit-for-two-tats forgives a single defection.',random:'A random player cannot be anticipated: compare your total with the dominant-strategy outcome.'}[S.strat]||'';
  return `<p>${dom}</p><p>${hor}</p><p>${vs} You chose “${C1}” ${mine} time${mine>1?'s':''} out of ${n}; the computer ${his} time${his>1?'s':''}.</p>`;
}
KINDS.play=(el,c,ctx)=>{
  const strategies=(c.strategies||['allc','alld','tft','grim','random']).filter(k=>STRATS[k]);
  const roundsOpt=c.rounds||[1,5,10,'?'],delta=c.delta||0.8;
  const S={phase:'setup',strat:strategies[0],mystery:false,rounds:roundsOpt[0],h:[],over:false};
  const pay=(a,b)=>c.m[a][b]; // [you, computer]
  const sName=k=>(c.names||{})[k]||STRATS[k].name(c.rows);
  const totals=h=>h.reduce((t,[a,b])=>{const p=pay(a,b);return [t[0]+p[0],t[1]+p[1]]},[0,0]);
  const simulate=(mine,strat,n)=>{const h=[];for(let r=0;r<n;r++){const a=mine(h),b=STRATS[strat].move(h);h.push([a,b])}return totals(h)};
  const draw=()=>{
    const rec=c.id&&ctx.sto.get(c.id);
    if(S.phase==='setup'){
      el.innerHTML=`<div class="play">${c.title?`<div class="w-title">${c.title}</div>`:''}
       <div class="tbl"><table class="gtable"><thead><tr><th>You \\ Computer</th>${c.rows.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${c.m.map((r,i)=>`<tr><th>${esc(c.rows[i])}</th>${r.map(p=>`<td>(${p[0]} ; ${p[1]})</td>`).join('')}</tr>`).join('')}</tbody></table></div>
       <p class="hint">Payoffs: (you ; computer).${c.higher===false?' Lower is better (years in prison).':''}</p>
       <div class="ansrow"><label for="${el.dataset.w}-st">Computer's strategy</label><select id="${el.dataset.w}-st">${strategies.map(k=>`<option value="${k}" ${S.strat===k&&!S.mystery?'selected':''}>${sName(k)}</option>`).join('')}<option value="?" ${S.mystery?'selected':''}>Mystery (guess it at the end)</option></select></div>
       <div class="ansrow"><span>Rounds</span><span class="filters" style="margin:0">${roundsOpt.map(r=>`<button type="button" class="chip" data-r="${r}" aria-pressed="${String(S.rounds)===String(r)}">${r==='?'?`Unknown end (${Math.round(delta*100)}% chance of another round)`:r===1?'One-shot':r+' rounds'}</button>`).join('')}</span></div>
       <div class="row" style="margin-top:12px"><button type="button" class="btn" data-go>Play</button>${rec&&rec.games?`<span class="score">Games played: ${rec.games}</span>`:''}</div></div>`;
      el.querySelector('select').onchange=e=>{S.mystery=e.target.value==='?';S.strat=S.mystery?S.strat:e.target.value};
      el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{S.rounds=b.dataset.r==='?'?'?':+b.dataset.r;draw()});
      el.querySelector('[data-go]').onclick=()=>{if(S.mystery)S.strat=U.pick(strategies);S.h=[];S.over=false;S.phase='play';draw();const f=el.querySelector('[data-a]');if(f)f.focus()};
      return}
    const t=totals(S.h),n=S.h.length,known=S.rounds!=='?';
    let cy=0,cc=0;const hist=n?T(['Round','You','Computer','Your payoff','Computer payoff','Your total','Computer total'],S.h.map(([a,b],i)=>{const p=pay(a,b);cy+=p[0];cc+=p[1];return [String(i+1),esc(c.rows[a]),esc(c.rows[b]),String(p[0]),String(p[1]),fmt(cy),fmt(cc)]}),[0,3,4,5,6]):'';
    let end='';
    if(S.over){
      const N=n,comp=[[STRATS.allc.name(c.rows),()=>0],[STRATS.alld.name(c.rows),()=>1],['Tit-for-tat',h=>h.length?h[h.length-1][1]:0]];
      const det=S.strat!=='random';
      end=`<div class="panel" style="margin-top:12px"><h4>Game over: you ${fmt(t[0])}, computer ${fmt(t[1])}${known?'':` (${N} round${N>1?'s':''} played)`}</h4>
        <p>The computer played <b>${sName(S.strat)}</b>: it ${STRATS[S.strat].d(c.rows)}</p>
        ${det?`<p>Against this strategy, over the same ${N} round${N>1?'s':''}, you would have scored:</p>${T(['Your plan','Your total','Computer total'],comp.map(([l,f])=>{const r=simulate(f,S.strat,N);return [esc(l),fmt(r[0]),fmt(r[1])]}),[1,2])}`:''}
        <div class="box"><h4>Why this result</h4>${playWhy(c,S)}</div>
        ${c.notes?`<div class="note">${val(c.notes,{strat:S.strat,rounds:S.rounds,h:S.h})}</div>`:''}</div>`;
    }
    el.innerHTML=`<div class="play">${c.title?`<div class="w-title">${c.title}</div>`:''}
     <p class="meta">${S.mystery&&!S.over?'Computer strategy: <b>mystery</b>':`Computer: <b>${sName(S.strat)}</b>`} · ${known?`round ${Math.min(n+1,S.rounds)} of ${S.rounds}`:`round ${n+1}, the game may stop after any round`} · score: you <b class="num">${fmt(t[0])}</b>, computer <b class="num">${fmt(t[1])}</b></p>
     ${S.over?'':`<div class="row">${c.rows.map((r,i)=>`<button type="button" class="btn" data-a="${i}">${esc(r)}</button>`).join('')}</div>`}
     ${hist}${end}
     <div class="row" style="margin-top:10px"><button type="button" class="btn small ghost" data-setup>${S.over?'New game':'Stop and change the settings'}</button></div></div>`;
    el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{
      const a=+b.dataset.a,bm=STRATS[S.strat].move(S.h);S.h.push([a,bm]);
      if(known?S.h.length>=S.rounds:Math.random()>delta){S.over=true;if(c.id){const r=Object.assign({games:0,best:{}},ctx.sto.get(c.id)||{});r.games++;const k=S.strat+':'+S.rounds;r.best[k]=Math.max(r.best[k]==null?-1e9:r.best[k],totals(S.h)[0]);ctx.sto.set(c.id,r)}}
      draw();const f=el.querySelector('[data-a]')||el.querySelector('[data-setup]');if(f)f.focus()});
    el.querySelector('[data-setup]').onclick=()=>{S.phase='setup';draw()};
  };
  draw();
};

/* ==========================================================================================
   6. SVG graphs. svgPlot(spec) draws a static graph; PLOT({title?, params:[{k, label, min, max, step, v}], x:{max, label}, y:{max, label},
      draw:(p, R)=>spec-parts, readout:(p)=>html}) redraws it live from sliders. R = fixed random draws {z:[normals], u:[uniforms]}, "New sample" redraws them.
   spec parts: curves:[{f:x=>y, c:'--debit', l:'D', from?, to?, dash?}], areas:[{pts:[[x,y]…], c:'--ok', l?}],
   lines:[{x1,y1,x2,y2,c,dash?,l?}], marks:[{x,y,lx?,ly?}] (dashed drops to the axes), points:[{x,y,l?,c?}], dots:[[x,y,c?]…], vx:[{x,l}],
   xticks:false (no vertical grid or x numbers: bar charts whose x positions mean nothing)
   ========================================================================================== */
const niceStep=r=>{const e=Math.pow(10,Math.floor(Math.log10(r))),f=r/e;return (f<1.5?1:f<3?2:f<7?5:10)*e};
function svgPlot(o){
  const W=o.w||420,H=o.h||290,L=48,B=34,R=16,Tp=14,xmin=o.xmin||0,ymin=o.ymin||0,xmax=o.xmax,ymax=o.ymax;
  const sx=x=>L+(x-xmin)/(xmax-xmin)*(W-L-R),sy=y=>H-B-(y-ymin)/(ymax-ymin)*(H-B-Tp);
  const f1=x=>x.toFixed(1),inX=x=>x>=xmin-1e-9&&x<=xmax+1e-9,inY=y=>y>=ymin-1e-9&&y<=ymax+1e-9;
  let s='';
  const xs=niceStep((xmax-xmin)/5),ys=niceStep((ymax-ymin)/5);
  if(o.xticks!==false)for(let x=Math.ceil(xmin/xs)*xs;x<=xmax+1e-9;x+=xs){s+=`<line x1="${f1(sx(x))}" y1="${Tp}" x2="${f1(sx(x))}" y2="${H-B}" class="pg"/><text x="${f1(sx(x))}" y="${H-B+13}" text-anchor="middle" class="pt">${nice(x)}</text>`}
  for(let y=Math.ceil(ymin/ys)*ys;y<=ymax+1e-9;y+=ys){s+=`<line x1="${L}" y1="${f1(sy(y))}" x2="${W-R}" y2="${f1(sy(y))}" class="pg"/><text x="${L-5}" y="${f1(sy(y)+3)}" text-anchor="end" class="pt">${nice(y)}</text>`}
  (o.areas||[]).forEach(a=>{const pts=a.pts.map(([x,y])=>`${f1(sx(Math.max(xmin,Math.min(xmax,x))))},${f1(sy(Math.max(ymin,Math.min(ymax,y))))}`).join(' ');
    s+=`<polygon points="${pts}" style="fill:var(${a.c||'--ledger'});fill-opacity:.22;stroke:var(${a.c||'--ledger'});stroke-opacity:.5;stroke-width:.8"/>`;
    if(a.l){const cx=a.pts.reduce((t,p)=>t+p[0],0)/a.pts.length,cy=a.pts.reduce((t,p)=>t+p[1],0)/a.pts.length;if(inX(cx)&&inY(cy))s+=`<text x="${f1(sx(cx))}" y="${f1(sy(cy)+4)}" text-anchor="middle" class="pa" style="fill:var(${a.c||'--ledger'})">${a.l}</text>`}});
  s+=`<line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" class="pax"/><line x1="${L}" y1="${H-B}" x2="${L}" y2="${Tp}" class="pax"/>`;
  s+=`<text x="${W-R}" y="${H-4}" text-anchor="end" class="pl">${esc(o.xl||'q')}</text><text x="${L-2}" y="${Tp-3}" text-anchor="end" class="pl">${esc(o.yl||'€')}</text>`;
  (o.marks||[]).forEach(m=>{if(!inX(m.x)||!inY(m.y))return;s+=`<line x1="${f1(sx(m.x))}" y1="${H-B}" x2="${f1(sx(m.x))}" y2="${f1(sy(m.y))}" class="pd"/><line x1="${L}" y1="${f1(sy(m.y))}" x2="${f1(sx(m.x))}" y2="${f1(sy(m.y))}" class="pd"/>`;
    if(m.lx)s+=`<text x="${f1(sx(m.x))}" y="${H-B+25}" text-anchor="middle" class="pm">${m.lx}</text>`;if(m.ly)s+=`<text x="${L+4}" y="${f1(sy(m.y)-4)}" class="pm">${m.ly}</text>`});
  (o.vx||[]).forEach(v=>{if(!inX(v.x))return;s+=`<line x1="${f1(sx(v.x))}" y1="${Tp}" x2="${f1(sx(v.x))}" y2="${H-B}" style="stroke:var(${v.c||'--muted'});stroke-width:1.6;stroke-dasharray:${v.dash?'5 4':'none'}"/>`;if(v.l)s+=`<text x="${f1(sx(v.x)+4)}" y="${v.ly!=null?f1(sy(v.ly)):Tp+10}" class="pa" style="fill:var(${v.c||'--muted'})">${v.l}</text>`});
  (o.curves||[]).forEach(c=>{const lo=c.from!=null?c.from:xmin,hi=c.to!=null?c.to:xmax,N=160;let seg=[],segs=[];
    for(let i=0;i<=N;i++){const x=lo+(hi-lo)*i/N,y=c.f(x);if(isFinite(y)&&y>=ymin-(ymax-ymin)*.002&&y<=ymax+(ymax-ymin)*.002)seg.push(`${f1(sx(x))},${f1(sy(Math.max(ymin,Math.min(ymax,y))))}`);else{if(seg.length>1)segs.push(seg);seg=[]}}
    if(seg.length>1)segs.push(seg);
    segs.forEach(g=>{s+=`<polyline points="${g.join(' ')}" style="fill:none;stroke:var(${c.c||'--ink'});stroke-width:2.2;${c.dash?'stroke-dasharray:6 4':''}"/>`});
    if(c.l){let lx=c.lx!=null?c.lx:lo+(hi-lo)*.9,ly=c.f(lx);if(!(isFinite(ly)&&inY(ly))){for(let i=N;i>=0;i--){const x=lo+(hi-lo)*i/N,y=c.f(x);if(isFinite(y)&&inY(y)){lx=x;ly=y;break}}}
      if(isFinite(ly)&&inY(ly))s+=`<text x="${f1(sx(lx))}" y="${f1(sy(ly)-6)}" text-anchor="middle" class="pa" style="fill:var(${c.c||'--ink'})">${c.l}</text>`}});
  (o.lines||[]).forEach(l=>{s+=`<line x1="${f1(sx(l.x1))}" y1="${f1(sy(l.y1))}" x2="${f1(sx(l.x2))}" y2="${f1(sy(l.y2))}" style="stroke:var(${l.c||'--ink'});stroke-width:${l.w||2};${l.dash?'stroke-dasharray:6 4':''}"/>`;
    if(l.l)s+=`<text x="${f1(sx(l.x2))}" y="${f1(sy(l.y2)-6)}" text-anchor="end" class="pa" style="fill:var(${l.c||'--ink'})">${l.l}</text>`});
  (o.dots||[]).forEach(d=>{if(inX(d[0])&&inY(d[1]))s+=`<circle cx="${f1(sx(d[0]))}" cy="${f1(sy(d[1]))}" r="${d[3]||3}" style="fill:var(${d[2]||'--debit'});fill-opacity:.75"/>`});
  (o.points||[]).forEach(p=>{if(!inX(p.x)||!inY(p.y))return;s+=`<circle cx="${f1(sx(p.x))}" cy="${f1(sy(p.y))}" r="4.5" style="fill:var(${p.c||'--ink'});stroke:var(--surface);stroke-width:1.5"/>`;
    if(p.l)s+=`<text x="${f1(sx(p.x)+(p.left?-7:7))}" y="${f1(sy(p.y)-7)}" ${p.left?'text-anchor="end"':''} class="pp">${p.l}</text>`});
  return `<svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(o.alt||'Graph')}">${s}</svg>`;
}
Rev.h.svgPlot=svgPlot;
Rev.h.FIG=(o,cap)=>`<figure class="fig">${svgPlot(o)}${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
Rev.h.PLOT=c=>ph('plot',c);
const normals=n=>[...Array(n)].map(()=>{let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)});
KINDS.plot=(el,c)=>{
  const p={};c.params.forEach(q=>p[q.k]=q.v);
  const Rn={z:normals(200),u:[...Array(200)].map(()=>Math.random())};
  const fmtV=(q,x)=>q.fmt?q.fmt(x):nice(x);
  el.innerHTML=`<div class="plotw">${c.title?`<div class="w-title">${c.title}</div>`:''}${c.intro?`<div class="st-intro">${c.intro}</div>`:''}
   <div class="plot-grid"><div class="plot-svg"></div><div class="plot-side"><div class="sliders">${c.params.map(q=>`<div class="sl"><label for="${el.dataset.w}-${q.k}">${q.label} <output class="num" id="${el.dataset.w}-${q.k}-o">${fmtV(q,q.v)}</output></label>
   <input type="range" id="${el.dataset.w}-${q.k}" data-k="${q.k}" min="${q.min}" max="${q.max}" step="${q.step||1}" value="${q.v}"></div>`).join('')}</div>
   ${c.presets?`<div class="row" style="flex-wrap:wrap;gap:6px">${c.presets.map((x,i)=>`<button type="button" class="btn small ghost" data-preset="${i}">${x.l}</button>`).join('')}</div>`:''}<div class="row"><button type="button" class="btn small ghost" data-reset>Reset</button>${c.random?'<button type="button" class="btn small ghost" data-sample>New sample</button>':''}</div>
   <div class="readout" aria-live="polite"></div></div></div>${c.legend?`<p class="hint">${c.legend}</p>`:''}</div>`;
  const draw=()=>{const d=c.draw(p,Rn),x=val(c.x,p),y=val(c.y,p);
    el.querySelector('.plot-svg').innerHTML=svgPlot(Object.assign({xmax:x.max,ymax:y.max,xmin:x.min,ymin:y.min,xl:x.label,yl:y.label,alt:c.title||'Graph'},d));
    if(c.readout)el.querySelector('.readout').innerHTML=c.readout(p,Rn)};
  el.querySelectorAll('input[type=range]').forEach(i=>i.oninput=()=>{const q=c.params.find(z=>z.k===i.dataset.k);p[q.k]=+i.value;el.querySelector(`#${CSS.escape(i.id)}-o`).textContent=fmtV(q,p[q.k]);draw()});
  el.querySelector('[data-reset]').onclick=()=>{c.params.forEach(q=>{p[q.k]=q.v;const i=el.querySelector(`[data-k="${q.k}"]`);i.value=q.v;el.querySelector(`#${CSS.escape(i.id)}-o`).textContent=fmtV(q,q.v)});draw()};
  // presets: [{l, v:{k:value} | p=>({k:value})}] move the sliders to a named situation (e.g. the Nash equilibrium)
  const setP=(k,x)=>{const q=c.params.find(z=>z.k===k);if(!q)return;x=Math.min(q.max,Math.max(q.min,x));p[k]=x;const i=el.querySelector(`[data-k="${k}"]`);i.value=x;el.querySelector(`#${CSS.escape(i.id)}-o`).textContent=fmtV(q,x)};
  el.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{const x=c.presets[+b.dataset.preset],v=typeof x.v==='function'?x.v(Object.assign({},p)):x.v;Object.keys(v).forEach(k=>setP(k,v[k]));draw()});
  const ns=el.querySelector('[data-sample]');if(ns)ns.onclick=()=>{Rn.z=normals(200);Rn.u=Rn.u.map(()=>Math.random());draw()};
  draw();
};

/* ==========================================================================================
   7. Exercise generator. GEN({id, topic, title, intro?, levels?:['Basic','Exam','Hard'], gen:(u, level)=>v, q:v=>html,
      parts:[part…] (see partHTML) or answer/unit/tol, steps:v=>[html…], hint?:v=>html})
   Unlimited "New exercise"; Check corrects each part; the solution is revealed step by step; record {n, ok, streak, best}.
   ========================================================================================== */
Rev.h.GEN=c=>ph('gen',c);
const MASTER=3; // right answers after which a generator counts as mastered in the progress
// answer fields of a generator: in a table to fill (table:v=>({head, rows}), a cell {p:i} = input of part i), then the other parts as rows
function genTable(c,v,parts,id){
  const tb=c.table?val(c.table,v):null,used=new Set();let h='';
  if(tb){h+=`<div class="tbl"><table class="gtab"><thead><tr>${tb.head.map((x,i)=>`<th${i?' class="n"':''}>${x}</th>`).join('')}</tr></thead><tbody>${tb.rows.map(r=>`<tr>${r.map((cl,i)=>{
      if(cl&&typeof cl==='object'&&cl.p!=null){used.add(cl.p);const p=parts[cl.p];return `<td class="n"><input type="text" class="tin" id="${id}-${cl.p}" data-pi="${cl.p}" inputmode="decimal" autocomplete="off" aria-label="${esc(String(val(p.label,v)||'Answer').replace(/<[^>]+>/g,''))}"></td>`}
      return `<td${i?' class="n"':''}>${cl==null?'':cl}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>`}
  return h+parts.map((p,i)=>used.has(i)?'':partHTML(p,v,id+'-'+i,i)).join('');
}
KINDS.gen=(el,c,ctx)=>{
  // parts may be an array or v=>array (questions that depend on the level or the draw)
  const levels=c.levels||[],partsOf=v=>val(c.parts,v)||[{label:c.label,answer:c.answer,unit:c.unit,tol:c.tol,tolPct:c.tolPct}];
  const S={lv:levels.length?Math.min(levels.length-1,(ctx.sto.get(c.id)||{}).lv||0):0,v:null,k:0,fb:'',done:false};
  const fresh=()=>{let g=0;do{S.v=c.gen(U,S.lv)}while(c.valid&&!c.valid(S.v)&&g++<200);S.k=0;S.fb='';S.done=false;draw()};
  const draw=(focusSel)=>{
    const rec=ctx.sto.get(c.id)||{n:0,ok:0,streak:0,best:0},steps=val(c.steps,S.v)||[],v=S.v,id=el.dataset.w,parts=partsOf(v);
    el.innerHTML=`<div class="genw">${c.showTitle!==false&&c.title?`<div class="w-title">${c.title}</div>`:''}
     ${levels.length>1?`<div class="filters" role="group" aria-label="Level">${levels.map((l,i)=>`<button type="button" class="chip" data-lv="${i}" aria-pressed="${S.lv===i}">${esc(l)}</button>`).join('')}</div>`:''}
     ${c.intro?`<div class="st-intro">${val(c.intro,v)}</div>`:''}
     <div class="prompt">${val(c.q,v)}</div>
     <div class="genparts">${genTable(c,v,parts,id)}</div>
     <div class="row" style="margin-top:12px"><button type="button" class="btn small" data-chk>Check</button><button type="button" class="btn small ghost" data-step ${S.k>=steps.length?'disabled':''}>${S.k?'Next step':'Solution step by step'}${steps.length?` (${Math.min(S.k+1,steps.length)}/${steps.length})`:''}</button>${S.k<steps.length&&steps.length>1?'<button type="button" class="btn small ghost" data-all>Whole solution</button>':''}<button type="button" class="btn small ghost" data-new>New exercise</button></div>
     <div class="gen-fb" aria-live="polite">${S.fb}</div>
     ${S.k?`<ol class="st-list">${steps.slice(0,S.k).map((s,i)=>`<li class="${i===S.k-1?'st-new':''}">${s}</li>`).join('')}</ol>`:''}
     <p class="score">Score: ${rec.ok}/${rec.n} right · streak ${rec.streak} (best ${rec.best})${rec.ok>=MASTER?' · <span class="ok-t">✓ mastered</span>':` · mastered after ${MASTER} right answers`}</p></div>`;
    const ins=[...el.querySelectorAll('.genparts input,.genparts select')];
    if(S.vals)ins.forEach((x,i)=>{x.value=S.vals[i]||'';const k=x.dataset.pi!=null?+x.dataset.pi:i;if(S.cls&&S.cls[k])x.classList.add(S.cls[k])});
    ins.forEach(x=>{x.oninput=x.onchange=()=>{S.vals=ins.map(z=>z.value);S.cls=null};if(x.tagName==='INPUT')x.onkeydown=e=>{if(e.key==='Enter')el.querySelector('[data-chk]').click()}});
    el.querySelectorAll('[data-lv]').forEach(b=>b.onclick=()=>{S.lv=+b.dataset.lv;const r=Object.assign({n:0,ok:0,streak:0,best:0},ctx.sto.get(c.id)||{});r.lv=S.lv;ctx.sto.set(c.id,r);S.vals=null;fresh()});
    el.querySelector('[data-chk]').onclick=()=>{
      const r=checkParts(parts,v,el.querySelector('.genparts'));
      if(r.empty){S.fb='<div class="result ko">Answer first, then check.</div>';draw();return}
      S.vals=ins.map(z=>z.value);S.cls=r.rows.map(x=>x.ok?'good':'bad');
      const first=!S.done;S.done=true;if(first)bump(ctx.sto,c.id,r.ok);
      S.fb=`<div class="feedback ${r.ok?'ok':'ko'}"><b class="v">${r.ok?'Correct.':'Not yet.'}</b> ${r.ok?'':(r.total>1?`${r.n} of ${r.total} right. `:'')+(r.nan?'Write numbers only. ':'')+(c.hint?`<i>Hint:</i> ${val(c.hint,v)} `:'')}${r.ok?'':`Expected:<br>${expList(parts,v,r.rows)}`}${first?'':' <small>(only the first check of an exercise counts in the score)</small>'}</div>`;
      draw('[data-new]')};
    const st=el.querySelector('[data-step]');st.onclick=()=>{if(!S.done){S.done=true;bump(ctx.sto,c.id,false)}S.k++;draw(S.k<steps.length?'[data-step]':'[data-new]')};
    const al=el.querySelector('[data-all]');if(al)al.onclick=()=>{if(!S.done){S.done=true;bump(ctx.sto,c.id,false)}S.k=steps.length;draw('[data-new]')};
    el.querySelector('[data-new]').onclick=()=>{S.vals=null;S.cls=null;fresh();const f=el.querySelector('.genparts input,.genparts select');if(f)f.focus()};
    if(focusSel){const f=el.querySelector(focusSel);if(f)f.focus()}
  };
  fresh();
};

/* ==========================================================================================
   8. Sort into categories: exercise type "sort" (Exercises tab, cases, mock exams)
   {type:'sort', cats:['A','B'], items:[['text','A','why?'], …] or v=>[…], pick?:n}
   Drag a card onto a box (mouse or finger), or tap a card then tap a box; keyboard: Tab, Enter.
   ========================================================================================== */
Rev.registerExerciseType('sort',{label:'Sorting',mount(box,x,api){
  let items=val(x.items,api.v).map((it,i)=>({t:it[0],c:String(it[1]),why:it[2]||'',i}));
  if(x.pick&&x.pick<items.length)items=U.shuffle(items.slice()).slice(0,x.pick);else items=U.shuffle(items.slice());
  const cats=val(x.cats,api.v).map(String),place={};let sel=null;const locked=()=>box.dataset.locked==='1';
  const draw=()=>{
    const card=it=>`<button type="button" class="scard${sel===it.i?' sel':''}" data-it="${it.i}" aria-pressed="${sel===it.i}">${it.t}</button>`;
    const pool=items.filter(it=>place[it.i]==null);
    box.innerHTML=`<div class="sortw"><div class="spool" data-cat="" aria-label="Cards to sort">${pool.length?pool.map(card).join(''):'<span class="hint">All cards placed. Tap a card to move it again.</span>'}</div>
     <div class="sbins">${cats.map((c,k)=>`<div class="sbin" data-cat="${k}"><button type="button" class="sbin-h" data-put="${k}">${esc(c)} <span class="sb-n">${items.filter(it=>place[it.i]===k).length}</span></button><div class="sbin-b">${items.filter(it=>place[it.i]===k).map(card).join('')}</div></div>`).join('')}</div>
     <p class="hint">Drag each card into a box, or tap a card and then the name of a box.</p></div>`;
    box.querySelectorAll('.scard').forEach(b=>{
      b.onclick=()=>{if(locked()||b.dataset.dragged){delete b.dataset.dragged;return}const i=+b.dataset.it;sel=sel===i?null:i;draw();const f=box.querySelector(`[data-it="${i}"]`);if(f)f.focus()};
      b.onpointerdown=e=>{if(locked()||e.button>0)return;startDrag(e,b)}});
    box.querySelectorAll('[data-put]').forEach(h=>h.onclick=()=>{if(locked()||sel==null)return;place[sel]=+h.dataset.put;const i=sel;sel=null;touch();draw();const f=box.querySelector(`[data-it="${i}"]`);if(f)f.focus()});
  };
  const touch=()=>{const mq=box.closest('.mq');if(mq)mq.dataset.touched='1';box.dispatchEvent(new Event('change',{bubbles:true}))};
  const startDrag=(e,b)=>{
    const x0=e.clientX,y0=e.clientY;let ghost=null,over=null;
    const mv=ev=>{if(!ghost&&Math.hypot(ev.clientX-x0,ev.clientY-y0)<6)return;
      if(!ghost){ghost=b.cloneNode(true);ghost.className='scard sghost';document.body.appendChild(ghost);b.classList.add('dragging')}
      ev.preventDefault();ghost.style.left=ev.clientX+'px';ghost.style.top=ev.clientY+'px';
      ghost.hidden=true;const t=document.elementFromPoint(ev.clientX,ev.clientY);ghost.hidden=false;
      const bin=t&&t.closest('[data-cat]');if(over&&over!==bin)over.classList.remove('over');over=bin&&box.contains(bin)?bin:null;if(over)over.classList.add('over')};
    const up=()=>{document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
      if(ghost){ghost.remove();b.dataset.dragged='1';if(over){const k=over.dataset.cat;place[+b.dataset.it]=k===''?null:+k;if(place[+b.dataset.it]==null)delete place[+b.dataset.it];sel=null;touch()}draw()}};
    document.addEventListener('pointermove',mv,{passive:false});document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up)};
  draw();
  return {check(){
      if(!Object.keys(place).length)return {empty:true};
      let n=0;const wrong=[];
      items.forEach(it=>{const ok=place[it.i]!=null&&cats[place[it.i]]===it.c;if(ok)n++;else wrong.push(it);
        const b=box.querySelector(`[data-it="${it.i}"]`);if(b){b.classList.toggle('good',ok);b.classList.toggle('bad',!ok)}});
      if(api.deferred)box.dataset.locked='1';
      return {ok:n===items.length,score:n/items.length,msg:n<items.length?`${n} of ${items.length} cards in the right box.`+(wrong.some(w=>w.why)&&!api.deferred?'<ul class="sort-why">'+wrong.map(w=>`<li>${w.t} → <b>${esc(w.c)}</b>${w.why?`: ${w.why}`:''}</li>`).join('')+'</ul>':''):''}},
    answer:()=>T(['Card','Box'],items.map(it=>[it.t+(it.why?`<br><small style="color:var(--muted)">${it.why}</small>`:''),esc(it.c)]))};
},print(x,v){const items=val(x.items,v);return T(['Card','Box'],U.shuffle(items.slice()).map(it=>[it[0],'']))+`<p class="hint">Boxes: ${val(x.cats,v).map(esc).join(' · ')}</p>`}});

/* ==========================================================================================
   9. Branching dialogue. DIALOG({id, title, intro?, who?:'Client', start, nodes:{id:{say, o:[{t, to, q:2|1|0, fb}]} | {say, end:true}}})
   q = quality of the reply (2 good, 1 acceptable, 0 poor); the score is the share of the best possible points along the path.
   ========================================================================================== */
Rev.h.DIALOG=c=>ph('dialog',c);
KINDS.dialog=(el,c,ctx)=>{
  Object.entries(c.nodes).forEach(([k,n])=>(n.o||[]).forEach(o=>{if(!c.nodes[o.to])throw new Error(`dialog "${c.id}": "${k}" points to missing "${o.to}"`)}));
  const S={cur:c.start,log:[],pts:0,max:0};
  const Q=['Poor','Acceptable','Good'],QC=['ko','warn','ok'];
  const draw=()=>{
    const n=c.nodes[S.cur],rec=c.id&&ctx.sto.get(c.id);
    const bubbles=S.log.map(l=>`<div class="bub them"><span class="who">${esc(l.who)}</span>${l.say}</div><div class="bub me"><span class="who">You</span>${l.t}</div><div class="dfb ${QC[l.q]}"><b>${Q[l.q]}.</b> ${l.fb||''}</div>`).join('');
    const pct=S.max?Math.round(100*S.pts/S.max):0;
    el.innerHTML=`<div class="dialog">${c.title?`<div class="w-title">${c.title}</div>`:''}${c.intro&&!S.log.length?`<div class="st-intro">${c.intro}</div>`:''}
     <div class="chat">${bubbles}<div class="bub them"><span class="who">${esc(n.who||c.who||'Client')}</span>${n.say}</div></div>
     ${n.end?`<div class="panel" style="margin-top:10px"><h4>End of the conversation: ${pct}%</h4><p>${S.pts} of ${S.max} points (2 per reply at best).${rec&&rec.best!=null?` Your best: ${rec.best}%.`:''}</p>${n.verdict?`<p>${n.verdict}</p>`:''}</div>`
      :`<div class="opts" role="group" aria-label="Your reply">${n.o.map((o,i)=>`<button type="button" class="opt" data-o="${i}"><span class="k">${LET[i]}</span><span>${o.t}</span></button>`).join('')}</div>`}
     <div class="row" style="margin-top:10px"><button type="button" class="btn small ghost" data-re ${S.log.length?'':'disabled'}>Start again</button></div></div>`;
    el.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{const o=n.o[+b.dataset.o];
      S.log.push({who:n.who||c.who||'Client',say:n.say,t:o.t,q:o.q||0,fb:o.fb});S.pts+=o.q||0;S.max+=2;S.cur=o.to;
      if(c.nodes[S.cur].end&&c.id){const r=Object.assign({n:0},ctx.sto.get(c.id)||{});r.n++;const p=Math.round(100*S.pts/S.max);r.last=p;r.best=Math.max(r.best==null?0:r.best,p);ctx.sto.set(c.id,r)}
      draw();const f=el.querySelector('[data-o]')||el.querySelector('[data-re]');if(f)f.focus()});
    el.querySelector('[data-re]').onclick=()=>{S.cur=c.start;S.log=[];S.pts=0;S.max=0;draw()};
  };
  draw();
};

/* ==========================================================================================
   9b. Annotated output. ANNOT({id?, title?, intro?, gen?:u=>v, html:v=>'… <td data-note="key">…', notes:v=>({key:{t:'short meaning', d:'explanation'}})})
   Click (or Enter) on a marked number: its meaning. "Test yourself": a number is highlighted, pick its meaning among four.
   ========================================================================================== */
Rev.h.ANNOT=c=>ph('annot',c);
KINDS.annot=(el,c,ctx)=>{
  const S={v:null,mode:'explore',cur:'',quiz:null,fb:''};
  const fresh=()=>{S.v=c.gen?c.gen(U):null;S.cur='';S.quiz=null;S.fb='';draw()};
  const notes=()=>val(c.notes,S.v)||{};
  const ask=()=>{const ks=Object.keys(notes());const k=U.pick(ks),others=U.shuffle(ks.filter(x=>x!==k&&notes()[x].t!==notes()[k].t)).slice(0,3);
    S.quiz={k,o:U.shuffle([k,...others])};S.fb='';draw()};
  const draw=()=>{
    const N=notes(),rec=c.id&&ctx.sto.get(c.id);
    el.innerHTML=`<div class="annot">${c.title?`<div class="w-title">${c.title}</div>`:''}${c.intro?`<div class="st-intro">${val(c.intro,S.v)}</div>`:''}
     <div class="filters" role="group" aria-label="Mode"><button type="button" class="chip" data-m="explore" aria-pressed="${S.mode==='explore'}">Explore: click a number</button><button type="button" class="chip" data-m="quiz" aria-pressed="${S.mode==='quiz'}">Test yourself</button><button type="button" class="chip" data-m="all" aria-pressed="${S.mode==='all'}">All notes</button></div>
     <div class="ann-out">${val(c.html,S.v)}</div>
     ${S.mode==='explore'?`<div class="ann-note" aria-live="polite">${S.cur&&N[S.cur]?`<b>${N[S.cur].t}</b><div>${N[S.cur].d}</div>`:'<span class="hint">Click or tap a highlighted number to see what it means and how to use it.</span>'}</div>`:''}
     ${S.mode==='all'?`<dl class="ann-all">${Object.entries(N).map(([k,n])=>`<dt>${n.t}</dt><dd>${n.d}</dd>`).join('')}</dl>`:''}
     ${S.mode==='quiz'&&S.quiz?`<div class="ann-note"><b>What does the highlighted number mean?</b><div class="opts" style="margin-top:8px">${S.quiz.o.map((k,i)=>`<button type="button" class="opt" data-q="${esc(k)}"><span class="k">${LET[i]}</span><span>${N[k].t}</span></button>`).join('')}</div>${S.fb}</div>`:''}
     <div class="row" style="margin-top:10px">${S.mode==='quiz'?'<button type="button" class="btn small" data-next>Another number</button>':''}${c.gen?'<button type="button" class="btn small ghost" data-new>New output</button>':''}${rec&&rec.n?`<span class="score">Test yourself: ${rec.ok}/${rec.n} right</span>`:''}</div></div>`;
    el.querySelectorAll('[data-note]').forEach(td=>{if(!N[td.dataset.note])return;td.classList.add('ann');td.tabIndex=0;td.setAttribute('role','button');
      if(S.mode==='explore'&&td.dataset.note===S.cur)td.classList.add('ann-on');
      if(S.mode==='quiz'&&S.quiz&&td.dataset.note===S.quiz.k)td.classList.add('ann-q');
      const go=()=>{if(S.mode!=='explore')return;S.cur=td.dataset.note;draw();const f=el.querySelector(`[data-note="${CSS.escape(S.cur)}"]`);if(f)f.focus()};
      td.onclick=go;td.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}});
    el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{S.mode=b.dataset.m;S.cur='';if(S.mode==='quiz')ask();else draw()});
    el.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{const ok=b.dataset.q===S.quiz.k;
      el.querySelectorAll('[data-q]').forEach(x=>{x.disabled=true;if(x.dataset.q===S.quiz.k)x.classList.add('right');else if(x===b)x.classList.add('wrong')});
      if(c.id)bump(ctx.sto,c.id,ok);const n=N[S.quiz.k];
      el.querySelector('.ann-note').insertAdjacentHTML('beforeend',`<div class="feedback ${ok?'ok':'ko'}"><b class="v">${ok?'Right.':'Not this one.'}</b> <b>${n.t}</b>: ${n.d}</div>`)});
    const nx=el.querySelector('[data-next]');if(nx)nx.onclick=ask;
    const nw=el.querySelector('[data-new]');if(nw)nw.onclick=()=>{const m=S.mode;fresh();if(m==='quiz'){S.mode='quiz';ask()}};
  };
  fresh();
};

/* ==========================================================================================
   10. Shared module "lab": a tab listing generators and tools of a subject.
   {use:'lab', tab:'generators', label:'Generators', data:{intro?, items:[{kind:'gen'|'tree'|'game'|'play'|'plot'|'steps'|'dialog', id, topic, title, blurb?, …config}]}}
   #<slug>-<tab> = index (filter by topic), #<slug>-<tab>-<id> = one item. Progress: generators mastered (3 right),
   trees (a case solved without error), games (2 right checks), dialogues (best ≥ 80 %); graphs are not counted.
   ========================================================================================== */
const LAB_DONE={annot:r=>r&&r.ok>=5,gen:r=>r&&r.ok>=MASTER,tree:r=>r&&r.ok>=1,game:r=>r&&r.ok>=2,dialog:r=>r&&r.best>=80,play:r=>r&&r.games>=1,matrix:r=>r&&r.ok>=1};
const KIND_LABEL={annot:'Annotated output',gen:'Generator',tree:'Decision tree',game:'Game',play:'Play',plot:'Graph',steps:'Step by step',dialog:'Dialogue',matrix:'Payoff matrix'};
Rev.registerModule('lab',{label:'Lab',
  card:ctx=>{const it=ctx.data.items||[],g=it.filter(x=>x.kind==='gen').length;return {eyebrow:`${it.length} item${it.length>1?'s':''}`,title:ctx.module.label||'Lab',text:ctx.data.blurb||(g?`${g} generators: new numbers every time, step-by-step solutions`:'Interactive tools')}},
  stats:ctx=>{const sto=store(ctx.subject.slug),by={};
    (ctx.data.items||[]).filter(x=>LAB_DONE[x.kind]&&x.id).forEach(x=>{const k=x.topic||'';const e=by[k]||(by[k]={done:0,total:0,tried:0});e.total++;const r=sto.get(x.id);if(LAB_DONE[x.kind](r))e.done++;if(r)e.tried++});
    return Object.entries(by).map(([topic,e])=>({topic,label:(ctx.module.label||'Lab')+': items done',done:e.done,total:e.total,tried:e.tried}))},
  render(ctx,main,param){
    const items=ctx.data.items||[],s=ctx.subject,sto=store(s.slug),f=ctx.mem.f||(ctx.mem.f={exam:'',topic:''});
    const one=param&&items.find(x=>x.id===param);
    if(one){const i=items.indexOf(one),prev=items[i-1],next=items[i+1];
      main.innerHTML=`<div class="sheetnav"><a class="chip" href="${ctx.link(ctx.module.tab)}">← All ${esc((ctx.module.label||'items').toLowerCase())}</a>${one.topic?`<a class="pill" href="${ctx.link('sheets',one.topic)}">${esc(ctx.topicShort(one.topic))} sheet</a>`:''}</div>
       <div class="eyebrow">${esc(KIND_LABEL[one.kind]||one.kind)}${one.topic?' · '+esc(ctx.topicName(one.topic)):''}</div><h2>${one.title}</h2>${one.blurb?`<p class="lede">${one.blurb}</p>`:''}
       ${ph(one.kind,Object.assign({},one,{showTitle:false,title:one.kind==='gen'?one.title:''}))}
       <div class="pager"><span class="nav">${prev?`<a class="btn small ghost" href="${ctx.link(ctx.module.tab,prev.id)}">← ${prev.title}</a>`:''}${next?`<a class="btn small ghost" href="${ctx.link(ctx.module.tab,next.id)}">${next.title} →</a>`:''}</span></div>`;
      return}
    const list=items.filter(ctx.inScope(f));
    const kinds=[...new Set(items.map(x=>x.kind))];
    main.innerHTML=`<div class="eyebrow">${esc(s.name)}</div><h2>${esc(ctx.module.label||'Lab')}</h2><p class="lede">${ctx.data.intro||'Pick an item. Generators give new numbers every time, with a step-by-step solution.'}</p>
     ${ctx.scopeChips(items,f)}
     ${kinds.map(k=>{const ks=list.filter(x=>x.kind===k);return ks.length?`${kinds.length>1?`<h3>${esc(KIND_LABEL[k]||k)}${ks.length>1?'s':''}</h3>`:''}<div class="toc">${ks.map(x=>{const r=x.id&&sto.get(x.id),d=LAB_DONE[x.kind]&&LAB_DONE[x.kind](r);
       return `<a href="${ctx.link(ctx.module.tab,x.id)}"><span class="eyebrow">${esc(x.topic?ctx.topicShort(x.topic):KIND_LABEL[x.kind])}</span><b>${x.title}</b>${x.blurb?`<small>${x.blurb}</small>`:''}${d?'<small class="done-mark">✓ done</small>':r&&r.n?`<small>${x.kind==='gen'?`${r.ok}/${r.n} right`:'started'}</small>`:''}</a>`}).join('')}</div>`:''}).join('')||'<p>Nothing in this selection.</p>'}`;
    ctx.bindScope(main,f,()=>this.render(ctx,main,''));
  }});

/* ==========================================================================================
   #demo: every block on one page, with a demo glossary. Nothing is saved.
   ========================================================================================== */
const DEMO_GLOSS=[{t:'Percentage change',d:'(New − Old) / Old × 100: the change relative to the starting value.'},{t:'Multiplier',d:'1 + rate of change: +25% is × 1.25, −20% is × 0.80.'}];
Rev.addPage('demo',{label:'Demo',render(main){
  const {NOTION,STEPS,TREE,GAME,PLAY,PLOT,GEN,DIALOG,GL,TRY,NOTE}=Object.assign({},Rev.h);
  const sortEx={id:'demo-sort',type:'sort',title:'Sort the changes',q:'Put each change in the right box.',cats:['Increase','Decrease','No change'],
    items:[['× 1.25','Increase','multiplier above 1'],['× 0.80','Decrease','multiplier below 1'],['+10% then −10%','Decrease','1.10 × 0.90 = 0.99'],['× 1.00','No change'],['−5% then +5%','Decrease','0.95 × 1.05 = 0.9975'],['+50%','Increase']]};
  main.innerHTML=`<div class="eyebrow">Site · How it works</div><h2>Interactive blocks: demo</h2>
  <p class="lede">Every block the subject sheets and tabs can use, on a toy topic (percentages). Nothing on this page is saved. <b>Outside the slides:</b> all examples here are made up for the demo.</p>
  <article>
  ${NOTE('<b>For whoever edits the site:</b> each block is documented in <code>site/CONVENTIONS.md</code>, section 16, with its code and a rule “when to use it”.')}
  <h3>1. Layered notion (sheets)</h3>
  <p class="hint">When to use it: for every notion of a sheet. The essential and every layer (Understand, Worked example, Exam trap) are always visible, never collapsed; “Your turn” is corrected at once; the two buttons are saved in the progress.</p>
  ${NOTION({id:'demo-pct',title:'Percentage change',ess:`<p>A ${GL('percentage change','percentage change')} compares the change with the <b>starting</b> value: <b>(New − Old) / Old × 100</b>. Two successive changes multiply: use the ${GL('multiplier','multipliers')}.</p>`,
    understand:'<p>Why divide by the old value? Because “+20%” means “20 for every 100 we had”. The base is what we had before the change.</p><ol><li>Take the change: New − Old.</li><li>Divide by the starting value.</li><li>Multiply by 100.</li></ol>',
    example:['Sales from 200 to 250',`<p>(250 − 200) / 200 = 0.25, so <b>+25%</b>.</p>`],
    trap:'+10% then −10% is not 0%: 100 → 110 → 99, so −1% overall.',
    tryit:{q:'A price goes from 80 to 100. Percentage change (in %)?',answer:25,unit:'%',tol:0.1,e:'(100 − 80) / 80 = 25%.'}})}
  <h3>2. Glossary</h3>
  <p class="hint">When to use it: every term of the course that a student could not define. Each subject has a Glossary tab; the first occurrence of each term in a sheet is underlined automatically. Try: ${GL('multiplier')}.</p>
  <h3>3. Step by step</h3>
  <p class="hint">When to use it: a calculation or a reasoning with several steps, where the student should try each step before seeing it.</p>
  ${STEPS({title:'Two successive changes',gen:u=>({a:u.pick([10,20,25]),b:u.pick([10,20,50])}),intro:v=>`<p>A price rises by ${v.a}% then falls by ${v.b}%. Overall change?</p>`,
    steps:v=>[`Multipliers: × ${1+v.a/100} and × ${1-v.b/100}.`,`Product: ${1+v.a/100} × ${1-v.b/100} = ${nice((1+v.a/100)*(1-v.b/100))}.`,`Overall change: ${nice(((1+v.a/100)*(1-v.b/100)-1)*100)}%.`]})}
  <h3>4. Decision tree</h3>
  <p class="hint">When to use it: a method of choice taught in the course (which test, which procedure, is the sign registrable…). “Practice on a case” corrects each branch.</p>
  ${TREE({id:'demo-tree',title:'Which percentage formula?',start:'q1',nodes:{
    q1:{q:'Do you compare two values of the same thing at two dates?',o:[{l:'Yes',to:'q2',why:'A change over time.'},{l:'No',to:'r3',why:'A part of a whole, not a change.'}]},
    q2:{q:'Is there more than one change in a row?',o:[{l:'Yes',to:'r2',why:'Successive changes multiply.'},{l:'No',to:'r1',why:'One change: one ratio.'}]},
    r1:{end:'Percentage change: (New − Old) / Old',why:'Divide by the starting value.'},
    r2:{end:'Multiply the multipliers, then subtract 1',why:'Each change applies to the new base.'},
    r3:{end:'Share: Part / Whole',why:'No time dimension.'}},
    cases:[{text:'Sales were 400 in 2024 and 500 in 2025.',path:{q1:0,q2:1}},{text:'A price rose by 10% in January and by 5% in February.',path:{q1:0,q2:0}},{text:'30 of the 120 students are left-handed.',path:{q1:1}}]})}
  <h3>5. Payoff matrix</h3>
  <p class="hint">When to use it: game theory. The student marks best responses, equilibria and dominant strategies; “New matrix” generates a new game.</p>
  ${GAME({id:'demo-game',title:'Generated game',rl:'Player 1',cl:'Player 2',gen:{sizes:[[2,2],[2,3],[3,3]],max:9}})}
  <h3>6. Playing against the computer</h3>
  <p class="hint">When to use it: repeated games (prisoner's dilemma). The student picks a strategy for the computer and a number of rounds.</p>
  ${PLAY({id:'demo-play',title:'Prisoner\'s dilemma',rows:['Cooperate','Defect'],m:[[[3,3],[0,5]],[[5,0],[1,1]]],strategies:['allc','alld','tft','grim','random']})}
  <h3>7. Graph with sliders</h3>
  <p class="hint">When to use it: any model drawn in the course; equilibrium, areas and key points are recomputed live.</p>
  ${PLOT({title:'Supply and demand',params:[{k:'a',label:'Demand intercept a',min:60,max:140,step:5,v:100},{k:'c',label:'Supply intercept c',min:0,max:40,step:2,v:10}],
    x:{max:60,label:'q'},y:{max:150,label:'p'},
    draw:p=>{const q=(p.a-p.c)/3,pe=p.a-2*q;return {curves:[{f:x=>p.a-2*x,c:'--debit',l:'D'},{f:x=>p.c+x,c:'--credit',l:'S'}],areas:[{pts:[[0,p.a],[0,pe],[q,pe]],c:'--ok',l:'CS'},{pts:[[0,pe],[0,p.c],[q,pe]],c:'--warn',l:'PS'}],marks:[{x:q,y:pe,lx:'q* = '+nice(q),ly:'p* = '+nice(pe)}],points:[{x:q,y:pe,l:'E'}]}},
    readout:p=>{const q=(p.a-p.c)/3,pe=p.a-2*q;return T(['','Value'],[['q*',nice(q)],['p*',nice(pe)],['Consumer surplus',nice(q*(p.a-pe)/2)],['Producer surplus',nice(q*(pe-p.c)/2)]],[1])}})}
  <h3>8. Exercise generator</h3>
  <p class="hint">When to use it: every calculation method of the course. Unlimited, with levels, tolerance, a step-by-step solution and a saved score.</p>
  ${GEN({id:'demo-gen',title:'Percentage change',levels:['Basic','Exam'],gen:(u,lv)=>{const a=lv?u.step(120,980,20):u.step(100,500,50),p=lv?u.pick([-35,-15,12.5,15,35]):u.pick([10,20,25,50]);return {a,p,b:a*(1+p/100)}},
    q:v=>`Sales go from ${fmt(v.a)} to ${fmt(v.b)}. Percentage change?`,parts:[{label:'Change',answer:v=>v.p,unit:'%',tol:0.1}],
    steps:v=>[`Change: ${fmt(v.b)} − ${fmt(v.a)} = ${fmt(r2(v.b-v.a))}.`,`Divide by the old value: ${fmt(r2(v.b-v.a))} / ${fmt(v.a)} = ${nice((v.b-v.a)/v.a)}.`,`× 100 = <b>${nice(v.p)}%</b>.`]})}
  <h3>9. Sorting (drag and drop)</h3>
  <p class="hint">When to use it: classifying examples into the concepts of the course. It is an exercise type (<code>type:'sort'</code>), so it also works in the Exercises tab and in mock exams.</p>
  ${ph('ex',sortEx)}
  <h3>10. Ordering (drag or arrows)</h3>
  <p class="hint">The existing “order” exercise type: the ⠿ handle can now be dragged; ↑ ↓ still work with the keyboard.</p>
  ${ph('ex',{id:'demo-order',type:'order',title:'Method',q:'Put the steps in order.',items:['Take the new value','Subtract the old value','Divide by the old value','Multiply by 100']})}
  <h3>11. Branching dialogue</h3>
  <p class="hint">When to use it: role plays (sales, oral exam). Each reply gets a commented verdict; the score is the share of the best possible points.</p>
  ${DIALOG({id:'demo-dialog',title:'Asking for a discount',who:'Client',start:'a',nodes:{
    a:{say:'Your price is 10% too high. Can you do better?',o:[{t:'Fine, I take 10% off.',to:'b',q:0,fb:'Conceding at once teaches the client that asking works.'},{t:'Compared with what, exactly?',to:'c',q:2,fb:'A question first: find out what the objection hides.'}]},
    b:{say:'Great. And 5% more for paying on time?',o:[{t:'No, that is my final price.',to:'e',q:1,fb:'Firm, but late: the first concession already cost you.'}]},
    c:{say:'Your competitor quotes 10% less, but without delivery.',o:[{t:'Our price includes delivery: the gap is 2%.',to:'e',q:2,fb:'You reframed the comparison with a fact.'},{t:'Then buy from them.',to:'e',q:0,fb:'You lose the client.'}]},
    e:{say:'OK, let me think about it.',end:true,verdict:'Best path: question, then a fact that reframes the price.'}}})}
  </article>`;
}});
KINDS.ex=(el,x,ctx)=>{ // an exercise item inside a sheet or a page (saved under st.w[id])
  const ty=Rev.types[x.type];let inst=null;const v=x.gen?x.gen(U):null;
  el.innerHTML=`<div class="drill xcard">${x.title?`<div class="qmeta"><span class="pill src">${esc(ty.label)}</span><b class="xtitle">${x.title}</b></div>`:''}${x.q?`<div class="prompt">${val(x.q,v)}</div>`:''}<div class="xbody"></div>
   <div class="row" style="margin-top:12px"><button type="button" class="btn small" data-chk>Check</button><button type="button" class="btn small ghost" data-sol>Solution</button><button type="button" class="btn small ghost" data-re>Reset</button></div><div class="xres" aria-live="polite"></div><div class="box solbox"></div></div>`;
  const res=el.querySelector('.xres'),say=r=>{res.innerHTML=`<div class="feedback ${r.ok?'ok':'ko'}"><b class="v">${r.ok?'Correct.':'Not yet.'}</b> ${r.msg||''}${r.ok&&x.e?' '+val(x.e,v):''}</div>`;if(x.id)bump(ctx.sto,x.id,!!r.ok)};
  inst=ty.mount(el.querySelector('.xbody'),x,{v,uid:uid('e'),deferred:false,submit:()=>el.querySelector('[data-chk]').click(),report:say});
  if(inst.instant)el.querySelector('[data-chk]').remove();else el.querySelector('[data-chk]').onclick=()=>{const r=inst.check();if(r.empty){res.innerHTML='<div class="result ko">Answer first, then check.</div>';return}say(r)};
  el.querySelector('[data-sol]').onclick=()=>{const b=el.querySelector('.solbox');b.innerHTML=b.innerHTML?'':`<h4>Solution</h4><div class="answer">${inst.answer()}</div>${x.solution?val(x.solution,v):''}`};
  el.querySelector('[data-re]').onclick=()=>KINDS.ex(el,x,ctx);
};
Rev.h.EXI=x=>ph('ex',x);
})();
