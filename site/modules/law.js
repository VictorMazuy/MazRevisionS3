/* Shared modules for case-based subjects (law first, usable anywhere). Contract: site/CONVENTIONS.md, section 9.4.
   - caselaw      : one card per judgment (facts, legal question, solution, scope), recall mode, "known / to review".
   - distinctions : close notions compared side by side, with a "hide the answers" self-test.
   - casework     : practical cases written in full: draft saved in the browser, hints one at a time,
                    model answer shown on request, then self-assessment. */
(function(){
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const strip=s=>String(s||'').replace(/<[^>]+>/g,' ');
const norm=s=>strip(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ').trim();
const examPill=(ctx,topic)=>{const t=ctx.subject.topicById[topic];const x=t&&ctx.subject.exams.find(e=>e.id===t.exam);return x?`<span class="pill">${esc(x.label)}</span>`:''};
const byTopic=(ctx,items,ok)=>{const by={};items.forEach(x=>{const k=x.topic||'';const e=by[k]||(by[k]={done:0,total:0,tried:0});e.total++;const v=ok(x);if(v===true)e.done++;if(v!==undefined)e.tried++});return by};

/* ---------- 1. caselaw ----------
   data:{intro?, cases:[{id, name, court, date, no, topic, theme?, facts, question, holding, why, flag?, src?}]}
   #<slug>-<tab>-<id> scrolls to one judgment. State: k[id] = 'ok' | 'review'. */
Rev.registerModule('caselaw',{label:'Case law',
  css:`.cl-card{background:var(--surface);border:1px solid var(--rule);border-left:4px solid var(--ledger);border-radius:0 10px 10px 0;padding:12px 16px;margin:12px 0;scroll-margin-top:120px}
.cl-card h3{margin:2px 0 6px}.cl-meta{font:500 .78rem var(--f-mono);color:var(--muted)}
.cl-card dl{display:grid;grid-template-columns:minmax(90px,130px) 1fr;gap:6px 12px;margin:8px 0 4px}.cl-card dt{font:600 .74rem var(--f-body);text-transform:uppercase;letter-spacing:.07em;color:var(--muted);padding-top:3px}
.cl-card dd{margin:0}.cl-card dd.sol{font-weight:600}
@media (max-width:560px){.cl-card dl{grid-template-columns:1fr}.cl-card dt{padding-top:6px}}
.cl-hide{display:inline-block;margin:2px 0}
.cl-target{box-shadow:0 0 0 2px var(--ledger)}`,
  card:ctx=>({eyebrow:`${(ctx.data.cases||[]).length} judgments`,title:ctx.module.label||'Case law',text:ctx.data.blurb||'Facts, legal question, solution and scope of every case of the course'}),
  stats:ctx=>{const by=byTopic(ctx,ctx.data.cases||[],x=>{const v=(ctx.state.k||{})[x.id];return v==='ok'?true:v==='review'?false:undefined});
    return Object.entries(by).map(([topic,e])=>({topic,label:'Judgments known',done:e.done,total:e.total,tried:e.tried}))},
  render(ctx,main,param){
    const all=ctx.data.cases||[],f=ctx.mem.f||(ctx.mem.f={exam:'',topic:'',q:'',recall:false,open:{}});ctx.state.k=ctx.state.k||{};
    const draw=()=>{
      const q=norm(f.q),list=all.filter(ctx.inScope(f)).filter(c=>!q||norm([c.name,c.court,c.date,c.no,c.theme,c.facts,c.question,c.holding,c.why].join(' ')).includes(q));
      const known=all.filter(c=>ctx.state.k[c.id]==='ok').length;
      main.innerHTML=`<div class="eyebrow">${esc(ctx.subject.name)}</div><h2>${esc(ctx.module.label||'Case law')}</h2>
       <p class="lede">${ctx.data.intro||'Each judgment: facts, legal question, solution and scope (why it matters in an exam answer).'} <b>${known}/${all.length}</b> marked as known.</p>
       ${ctx.scopeChips(all,f,`<button type="button" class="chip" data-recall aria-pressed="${f.recall}">Recall mode: hide solution and scope</button>`)}
       <div class="ansrow" style="margin:8px 0 4px"><label for="clq">Search</label><input type="text" class="txt" id="clq" value="${esc(f.q)}" autocomplete="off" placeholder="Name, number, word of the facts"></div>
       <p class="meta">${list.length} judgment${list.length>1?'s':''} shown.</p>
       ${list.map(c=>{const hid=f.recall&&!f.open[c.id],st=ctx.state.k[c.id]||'';
         return `<article class="cl-card" id="cl-${esc(c.id)}"><div class="cl-meta">${esc([c.court,c.date,c.no].filter(Boolean).join(' · '))}</div>
         <h3>${c.name}</h3><div class="row" style="gap:6px;flex-wrap:wrap">${examPill(ctx,c.topic)}${c.topic?`<a class="pill src" href="${ctx.link('sheets',c.topic)}">${esc(ctx.topicShort(c.topic))}</a>`:''}${c.theme?`<span class="pill src">${esc(c.theme)}</span>`:''}${c.src?`<span class="pill src">${esc(c.src)}</span>`:''}</div>
         <dl><dt>Facts</dt><dd>${c.facts}</dd><dt>Legal question</dt><dd>${c.question}</dd>
         ${hid?`<dt>Solution</dt><dd><button type="button" class="btn small cl-hide" data-show="${esc(c.id)}">Say it out loud, then show the solution and the scope</button></dd>`:`<dt>Solution</dt><dd class="sol">${c.holding}</dd><dt>Scope</dt><dd>${c.why}</dd>`}</dl>
         ${c.flag&&!hid?`<div class="note"><b>Check:</b> ${c.flag}</div>`:''}
         <div class="nstat" role="group" aria-label="Do you know this judgment?"><span>This judgment:</span><button type="button" class="chip" data-k="${esc(c.id)}" data-v="ok" aria-pressed="${st==='ok'}">✓ Known</button><button type="button" class="chip warnchip" data-k="${esc(c.id)}" data-v="review" aria-pressed="${st==='review'}">↻ To review</button></div></article>`}).join('')||'<p>No judgment matches.</p>'}`;
      ctx.bindScope(main,f,draw);
      const qi=main.querySelector('#clq');qi.oninput=()=>{f.q=qi.value;const p=qi.selectionStart;draw();const n=main.querySelector('#clq');n.focus();n.setSelectionRange(p,p)};
      main.querySelector('[data-recall]').onclick=()=>{f.recall=!f.recall;f.open={};draw()};
      main.querySelectorAll('[data-show]').forEach(b=>b.onclick=()=>{f.open[b.dataset.show]=1;draw();const el=main.querySelector('#cl-'+CSS.escape(b.dataset.show));if(el)el.scrollIntoView({block:'nearest'})});
      main.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{const id=b.dataset.k,v=b.dataset.v;if(ctx.state.k[id]===v)delete ctx.state.k[id];else ctx.state.k[id]=v;ctx.save();
        main.querySelectorAll(`[data-k="${CSS.escape(id)}"]`).forEach(x=>x.setAttribute('aria-pressed',String(ctx.state.k[id]===x.dataset.v)))});
    };
    draw();
    if(param){const el=main.querySelector('#cl-'+CSS.escape(param));if(el){el.classList.add('cl-target');setTimeout(()=>el.scrollIntoView({block:'start'}),0)}}
  }});

/* ---------- 2. distinctions ----------
   data:{intro?, items:[{id, topic, t, rows:[[header cells…], [row cells…]…], trap?, note?}]}
   First row = header, first column = the criterion. "Test yourself" hides the other cells until tapped. */
Rev.registerModule('distinctions',{label:'Distinctions',
  css:`.dz{margin:14px 0 22px}.dz h3{margin-bottom:4px}
.dz td.hid{cursor:pointer;background:var(--paper);color:transparent;text-shadow:none;position:relative;min-width:80px}
.dz td.hid *{visibility:hidden}.dz td.hid::after{content:"tap to show";position:absolute;left:10px;top:6px;color:var(--muted);font:500 .74rem var(--f-mono);visibility:visible}`,
  card:ctx=>({eyebrow:`${(ctx.data.items||[]).length} comparisons`,title:ctx.module.label||'Distinctions',text:ctx.data.blurb||'Close notions compared side by side'}),
  render(ctx,main){
    const all=ctx.data.items||[],f=ctx.mem.f||(ctx.mem.f={exam:'',topic:'',test:false});
    const draw=()=>{const list=all.filter(ctx.inScope(f));
      main.innerHTML=`<div class="eyebrow">${esc(ctx.subject.name)}</div><h2>${esc(ctx.module.label||'Distinctions')}</h2>
       <p class="lede">${ctx.data.intro||'Notions that exams like to mix up, compared criterion by criterion.'}</p>
       ${ctx.scopeChips(all,f,`<button type="button" class="chip" data-test aria-pressed="${f.test}">Test yourself: hide the answers</button>`)}
       ${list.map(d=>{const [head,...rows]=d.rows;
         return `<section class="dz" id="dz-${esc(d.id)}"><h3>${d.t}</h3><div class="row" style="gap:6px">${examPill(ctx,d.topic)}${d.topic?`<a class="pill src" href="${ctx.link('sheets',d.topic)}">${esc(ctx.topicShort(d.topic))}</a>`:''}</div>
         <div class="tbl"><table><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,j)=>j===0?`<td><b>${c}</b></td>`:`<td${f.test?' class="hid" tabindex="0" role="button" aria-label="Show this cell"':''}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
         ${d.trap?`<div class="trap"><b>Exam trap</b>${d.trap}</div>`:''}${d.note?`<div class="note">${d.note}</div>`:''}</section>`}).join('')||'<p>Nothing in this scope.</p>'}`;
      ctx.bindScope(main,f,draw);
      main.querySelector('[data-test]').onclick=()=>{f.test=!f.test;draw()};
      main.querySelectorAll('td.hid').forEach(td=>{const show=()=>{td.classList.remove('hid');td.removeAttribute('role');td.removeAttribute('aria-label')};td.onclick=show;td.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show()}}});
    };
    draw();
  }});

/* ---------- 3. casework ----------
   data:{intro?, method?:html, cases:[{id, topic, src?, title, facts, tasks:[…], hints:[…], model}]}
   #<slug>-<tab>-<id> opens one case. State: d[id] draft text, r[id] = true (right) | false (not yet). */
Rev.registerModule('casework',{label:'Practical cases',
  css:`.cw-facts{background:var(--surface);border:1px solid var(--rule);border-radius:10px;padding:12px 16px;margin:10px 0}
.cw-draft{width:100%;min-height:220px;font:1rem/1.5 var(--f-body);padding:10px 12px;border:1px solid var(--rule-strong);border-radius:8px;background:var(--surface);color:var(--ink);box-sizing:border-box}
.cw-hint{border-left:4px solid var(--warn);background:var(--warn-soft);border-radius:0 8px 8px 0;padding:8px 12px;margin:8px 0}
.cw-model{border:1px solid var(--ledger);border-left:4px solid var(--ledger);border-radius:0 10px 10px 0;padding:12px 16px;margin:12px 0;background:var(--surface)}
.cw-saved{font:500 .78rem var(--f-mono);color:var(--muted)}`,
  card:ctx=>({eyebrow:`${(ctx.data.cases||[]).length} cases`,title:ctx.module.label||'Practical cases',text:ctx.data.blurb||'Write the answer, use the hints, compare with the model answer'}),
  stats:ctx=>{const r=ctx.state.r||{},by=byTopic(ctx,ctx.data.cases||[],x=>r[x.id]);
    return Object.entries(by).map(([topic,e])=>({topic,label:'Practical cases right',done:e.done,total:e.total,tried:e.tried}))},
  render(ctx,main,param){
    const all=ctx.data.cases||[],f=ctx.mem.f||(ctx.mem.f={exam:'',topic:''}),st=ctx.state;st.d=st.d||{};st.r=st.r||{};
    const one=param&&all.find(c=>c.id===param);
    if(one){const i=all.indexOf(one),prev=all[i-1],next=all[i+1],h=ctx.mem.h||(ctx.mem.h={}),shown=ctx.mem.m||(ctx.mem.m={});
      const draw=()=>{const nh=h[one.id]||0,res=st.r[one.id];
        main.innerHTML=`<div class="sheetnav"><a class="chip" href="${ctx.link(ctx.module.tab)}">← All cases</a>${one.topic?`<a class="pill" href="${ctx.link('sheets',one.topic)}">${esc(ctx.topicShort(one.topic))} sheet</a>`:''}</div>
         <div class="eyebrow">${esc([one.src,ctx.topicName(one.topic)].filter(Boolean).join(' · '))}</div><h2>${one.title}</h2>
         <div class="cw-facts">${one.facts}</div>
         ${one.tasks&&one.tasks.length?`<h3>What you must answer</h3><ol>${one.tasks.map(t=>`<li>${t}</li>`).join('')}</ol>`:''}
         ${ctx.data.method?`<div class="note">${ctx.data.method}</div>`:''}
         <label for="cw-d"><b>Your answer</b> <span class="cw-saved" id="cw-s">${st.d[one.id]?'saved in this browser':''}</span></label>
         <textarea class="cw-draft" id="cw-d" placeholder="Facts → legal question → rule → application → conclusion">${esc(st.d[one.id]||'')}</textarea>
         <div class="row" style="margin:10px 0;gap:8px;flex-wrap:wrap">
          ${one.hints&&one.hints.length?`<button type="button" class="btn small ghost" data-hint ${nh>=one.hints.length?'disabled':''}>Hint ${Math.min(nh+1,one.hints.length)} of ${one.hints.length}</button>`:''}
          <button type="button" class="btn small" data-model ${shown[one.id]?'disabled':''}>Show the model answer</button></div>
         ${(one.hints||[]).slice(0,nh).map((t,k)=>`<div class="cw-hint"><b>Hint ${k+1}.</b> ${t}</div>`).join('')}
         ${shown[one.id]?`<div class="cw-model"><div class="eyebrow">Model answer</div>${one.model}</div>
           <div class="nstat" role="group" aria-label="Did you get it right?"><span>Did you get it right?</span><button type="button" class="chip" data-r="1" aria-pressed="${res===true}">✓ Yes</button><button type="button" class="chip warnchip" data-r="0" aria-pressed="${res===false}">↻ Not yet</button></div>`:''}
         <div class="pager"><span class="nav">${prev?`<a class="btn small ghost" href="${ctx.link(ctx.module.tab,prev.id)}">← ${prev.title}</a>`:''}${next?`<a class="btn small ghost" href="${ctx.link(ctx.module.tab,next.id)}">${next.title} →</a>`:''}</span></div>`;
        let t;const ta=main.querySelector('#cw-d');ta.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{st.d[one.id]=ta.value;ctx.save();const s=main.querySelector('#cw-s');if(s)s.textContent='saved in this browser'},400)};
        const hb=main.querySelector('[data-hint]');if(hb)hb.onclick=()=>{st.d[one.id]=ta.value;h[one.id]=nh+1;draw()};
        const mb=main.querySelector('[data-model]');if(mb)mb.onclick=()=>{st.d[one.id]=ta.value;ctx.save();shown[one.id]=1;draw()};
        main.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{st.r[one.id]=b.dataset.r==='1';ctx.save();draw()});
      };
      draw();return}
    const draw=()=>{const list=all.filter(ctx.inScope(f));
      main.innerHTML=`<div class="eyebrow">${esc(ctx.subject.name)}</div><h2>${esc(ctx.module.label||'Practical cases')}</h2>
       <p class="lede">${ctx.data.intro||'Write your answer first (saved in this browser), ask for hints one at a time, then compare with the model answer.'}</p>
       ${ctx.scopeChips(all,f)}
       <div class="toc">${list.map(c=>{const r=st.r[c.id];return `<a href="${ctx.link(ctx.module.tab,c.id)}"><span class="eyebrow">${esc([c.topic?ctx.topicShort(c.topic):'',c.src].filter(Boolean).join(' · '))}</span><b>${c.title}</b>${st.d[c.id]?'<small>draft saved</small>':''}${r===true?'<small class="done-mark">✓ right</small>':r===false?'<small>↻ not yet</small>':''}</a>`}).join('')}</div>`;
      ctx.bindScope(main,f,draw)};
    draw();
  }});
})();
