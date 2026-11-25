/* Revision Ledger: site-wide pages that work across all subjects (loaded after the subjects).
   #search  global search: notions, glossary, quiz questions, flashcards, exercises, generators and tools, mock exams.
   #mixed   mixed revision: random quiz questions from the chosen subjects (answers saved in each subject's quiz progress),
            the notions marked "to review" everywhere, and generators to practise with new numbers.
   Contract: site/CONVENTIONS.md, section 17. */
(function(){
const esc=Rev.h.esc,U=Rev.u;
const plain=s=>String(s==null?'':s).replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const key=s=>U.noAccents(U.norm(plain(s)));
const KIND={notion:'Notion',term:'Glossary',quiz:'Quiz',card:'Flashcard',ex:'Exercise',gen:'Generator',tool:'Tool',mock:'Mock exam',topic:'Sheet'};

/* ---------- index of everything searchable (built once, on first use) ---------- */
let INDEX=null;
function buildIndex(){
  const out=[];
  Rev.subjects().forEach(s=>{
    const L=(v,p)=>Rev.link(s.slug,v,p),top=id=>(s.topics.find(t=>t.id===id)||{});
    s.topics.forEach(t=>{out.push({s,k:'topic',t:`${t.label||''} ${t.title}`,d:t.summary||'',href:L('sheets',t.id)});
      (s.notions[t.id]||[]).forEach(n=>out.push({s,k:'notion',t:n.title,d:t.title,href:L('sheets',t.id),notion:n.id}))});
    (s.glossary||[]).forEach(g=>out.push({s,k:'term',t:g.t,d:g.d,extra:(g.alias||[]).join(' '),href:L('glossary')}));
    s.quiz.forEach(q=>out.push({s,k:'quiz',t:q.q,d:top(q.topic).title||'',href:L('quiz')}));
    s.flashcards.forEach(c=>out.push({s,k:'card',t:c.f,d:c.b,href:L('flashcards')}));
    s.exercises.forEach(x=>out.push({s,k:'ex',t:x.title||x.q,d:top(x.topic).title||'',href:L('exercises')}));
    (s.modules||[]).forEach(m=>((m.data&&m.data.items)||[]).forEach(x=>out.push({s,k:x.kind==='gen'?'gen':'tool',t:x.title,d:x.blurb||'',href:L(m.tab,x.id)})));
    (s.mocks||[]).forEach(m=>out.push({s,k:'mock',t:m.title,d:m.summary||'',href:L('mocks',m.id)}));
  });
  out.forEach(r=>{r.kt=key(r.t);r.kd=key(r.d+' '+(r.extra||''))});
  return out;
}
function search(q){
  if(!INDEX)INDEX=buildIndex();
  const words=key(q).split(' ').filter(w=>w.length>1);if(!words.length)return [];
  const rank={term:0,notion:1,topic:2,gen:3,tool:3,card:4,quiz:5,ex:6,mock:7};
  return INDEX.map(r=>{let sc=0;for(const w of words){const inT=r.kt.includes(w),inD=r.kd.includes(w);if(!inT&&!inD)return null;sc+=inT?(r.kt.startsWith(w)?3:2):1}return {r,sc}})
    .filter(Boolean).sort((a,b)=>b.sc-a.sc||rank[a.r.k]-rank[b.r.k]).map(x=>x.r);
}
Rev.addPage('search',{label:'Search',nav:true,render(main,param){
  const q0=param?decodeURIComponent(param).replace(/-/g,' '):'';
  main.innerHTML=`<div class="eyebrow">All subjects</div><h2>Search</h2>
  <p class="lede">One search box for the ten subjects: notions of the sheets, glossary terms, quiz questions, flashcards, exercises, generators, tools and mock exams. Accents and capitals do not matter.</p>
  <input type="search" class="txt" id="hubq" placeholder="e.g. bottleneck, likelihood of confusion, imperfecto, EOQ" value="${esc(q0)}" autocomplete="off" style="width:100%;max-width:560px">
  <div class="filters" role="group" aria-label="Kind" id="hubk"></div><div id="hubres" aria-live="polite"></div>`;
  const inp=main.querySelector('#hubq'),res=main.querySelector('#hubres'),kb=main.querySelector('#hubk');let kind='all',tm=null;
  const draw=()=>{const all=search(inp.value),kinds=[...new Set(all.map(r=>r.k))];
    kb.innerHTML=all.length?['all'].concat(kinds).map(k=>`<button type="button" class="chip" data-k="${k}" aria-pressed="${kind===k}">${k==='all'?'All':KIND[k]} (${k==='all'?all.length:all.filter(r=>r.k===k).length})</button>`).join(''):'';
    kb.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{kind=b.dataset.k;draw()});
    const list=all.filter(r=>kind==='all'||r.k===kind).slice(0,120);
    if(!inp.value.trim()){res.innerHTML='<p class="hint">Type at least two letters.</p>';return}
    if(!list.length){res.innerHTML='<p>No result. Try another word or its English form.</p>';return}
    const by={};list.forEach(r=>{(by[r.s.slug]=by[r.s.slug]||[]).push(r)});
    res.innerHTML=Object.values(by).map(rs=>`<h3>${esc(rs[0].s.name)} <span class="pill">${rs.length}</span></h3><ul class="hub-list">${rs.map(r=>`<li><a href="${r.href}"${r.notion?` data-goto-notion="${esc(r.notion)}"`:''}><span class="pill">${KIND[r.k]}</span> <b>${esc(plain(r.t)).slice(0,160)}</b></a>${r.d?`<br><small>${esc(plain(r.d)).slice(0,170)}</small>`:''}</li>`).join('')}</ul>`).join('')+(all.filter(r=>kind==='all'||r.k===kind).length>120?'<p class="hint">First 120 results: add a word to narrow down.</p>':'');};
  inp.oninput=()=>{clearTimeout(tm);tm=setTimeout(()=>{kind='all';draw();try{history.replaceState(null,'','#search'+(inp.value.trim()?'-'+encodeURIComponent(inp.value.trim()):''))}catch(e){}},180)};
  draw();inp.focus();
}});

/* ---------- mixed revision ---------- */
const M={subs:null,n:10,items:[],pos:0,right:0,done:0,ans:null};
Rev.addPage('mixed',{label:'Mixed revision',nav:true,render(main){
  const subs=Rev.subjects();if(!M.subs)M.subs=subs.map(s=>s.slug);
  const review=subs.flatMap(s=>{const st=Rev.stateOf(s.slug);return s.topics.flatMap(t=>(s.notions[t.id]||[]).filter(n=>st.notions&&st.notions[n.id]==='review').map(n=>({s,t,n})))});
  const gens=subs.filter(s=>M.subs.includes(s.slug)).flatMap(s=>(s.modules||[]).flatMap(m=>((m.data&&m.data.items)||[]).filter(x=>x.kind==='gen').map(x=>({s,m,x}))));
  const build=()=>{const pool=subs.filter(s=>M.subs.includes(s.slug)).flatMap(s=>s.quiz.filter(q=>Number.isInteger(q.a)&&Array.isArray(q.o)).map(q=>({s,q})));
    M.items=U.shuffle(pool).slice(0,M.n);M.pos=0;M.right=0;M.done=0;M.ans=null};
  if(!M.items.length)build();
  const draw=()=>{const it=M.items[M.pos],fin=M.pos>=M.items.length;
    main.innerHTML=`<div class="eyebrow">All subjects</div><h2>Mixed revision</h2>
    <p class="lede">Random questions from the subjects you choose, as on exam day when topics are mixed. Every answer also counts in the subject’s own quiz progress.</p>
    <div class="filters" role="group" aria-label="Subjects">${subs.map(s=>`<button type="button" class="chip" data-s="${s.slug}" aria-pressed="${M.subs.includes(s.slug)}">${esc(s.short||s.name)}</button>`).join('')}</div>
    <div class="filters" role="group" aria-label="Number of questions">${[10,20,40].map(n=>`<button type="button" class="chip" data-n="${n}" aria-pressed="${M.n===n}">${n} questions</button>`).join('')}<button type="button" class="btn small ghost" data-new>New series</button></div>
    ${!M.items.length?'<p>Choose at least one subject.</p>':fin?`<div class="panel"><h4>Series finished: ${M.right}/${M.done}</h4><p>Read the explanations of the questions you missed in each subject’s quiz (filter “wrong answers”).</p><button type="button" class="btn small" data-new>Another series</button></div>`
     :`<div class="panel"><span class="eyebrow">${esc(it.s.short||it.s.name)} · question ${M.pos+1}/${M.items.length} · ${M.right}/${M.done} right</span>
      <p><b>${it.q.q}</b></p><div class="opts">${it.q.o.map((o,i)=>`<button type="button" class="opt${M.ans!=null?(i===it.q.a?' right':i===M.ans?' wrong':''):''}" data-o="${i}" ${M.ans!=null?'disabled':''}><span class="k">${'abcdefgh'[i]}</span><span>${o}</span></button>`).join('')}</div>
      ${M.ans!=null?`<div class="feedback ${M.ans===it.q.a?'ok':'ko'}"><b class="v">${M.ans===it.q.a?'Correct.':'Not quite.'}</b> ${it.q.e||''}</div><p><button type="button" class="btn small" data-next>${M.pos+1<M.items.length?'Next question':'See the score'}</button> <a class="btn small ghost" href="${Rev.link(it.s.slug,'sheets',it.q.topic)}">Open the sheet</a></p>`:''}</div>`}
    <h3>Notions marked “to review” (${review.length})</h3>${review.length?`<ul class="hub-list">${review.slice(0,60).map(r=>`<li><span class="pill">${esc(r.s.short||r.s.name)}</span> <a href="${Rev.link(r.s.slug,'sheets',r.t.id)}" data-goto-notion="${esc(r.n.id)}">${esc(plain(r.n.title))}</a></li>`).join('')}</ul>`:'<p class="hint">None yet: mark notions “↻ To review” under each notion of the sheets.</p>'}
    <h3>Practise with new numbers</h3>${gens.length?`<ul class="hub-list">${U.shuffle(gens.slice()).slice(0,6).map(g=>`<li><span class="pill">${esc(g.s.short||g.s.name)}</span> <a href="${Rev.link(g.s.slug,g.m.tab,g.x.id)}">${esc(plain(g.x.title))}</a></li>`).join('')}</ul>`:'<p class="hint">No generator in the chosen subjects.</p>'}`;
    main.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const k=b.dataset.s;M.subs=M.subs.includes(k)?M.subs.filter(x=>x!==k):M.subs.concat(k);build();draw()});
    main.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{M.n=+b.dataset.n;build();draw()});
    main.querySelectorAll('[data-new]').forEach(b=>b.onclick=()=>{build();draw()});
    main.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{if(M.ans!=null)return;M.ans=+b.dataset.o;const ok=M.ans===it.q.a;M.done++;if(ok)M.right++;
      const st=Rev.stateOf(it.s.slug);st.quiz[it.q.id]={ok,n:((st.quiz[it.q.id]||{}).n||0)+1};Rev.saveState(it.s.slug);draw()});
    const nx=main.querySelector('[data-next]');if(nx){nx.onclick=()=>{M.pos++;M.ans=null;draw();window.scrollTo(0,0)};nx.focus()}
  };
  draw();
}});
})();
