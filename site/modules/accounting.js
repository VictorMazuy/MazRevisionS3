/* Accounting modules (shared by any accounting subject): the J() journal-table helper for sheets,
   "journal" (journal-entry drills in the course format), the "journal" exercise type (entries inside exercises, cases and mock exams)
   and "taccounts" (generated T-account exercises).
   Code ported from the AFA Revision Ledger; the data (drills, account templates) lives in the subject file.
   Load this file after assets/engine.js and before the subject files. */
(function(){
const {fmt,esc,T,EX,chips}=Rev.h;

// J: journal table. rows: [date, account, type, debit, credit]. Non-numeric amounts (e.g. 'xx') are printed as written.
const amt=v=>typeof v==='string'&&v.trim()!==''&&isNaN(Number(v))?v:fmt(v);
function J(rows,showDate=true){
  let h='<div class="tbl"><table class="je"><thead><tr>'+(showDate?'<th>Date</th>':'')+'<th>Account title</th><th>Type</th><th class="n">Debit</th><th class="n">Credit</th></tr></thead><tbody>';
  for(const r of rows){const [d,a,t,dr,cr]=r;const isCr=(cr!==''&&cr!=null)&&(dr===''||dr==null);
    h+='<tr>'+(showDate?`<td>${d||''}</td>`:'')+`<td class="acc ${isCr?'credit':''}">${a}</td><td class="type">${t||''}</td><td class="n dr">${amt(dr)}</td><td class="n cr">${amt(cr)}</td></tr>`}
  return h+'</tbody></table></div>';
}
Rev.h.J=J;
const parseAmt=s=>{s=String(s||'').trim().replace(/[\s €$]/g,'');if(!s)return 0;if(/,\d{1,2}$/.test(s)&&!s.includes('.'))s=s.replace(',','.');s=s.replace(/,/g,'');const n=parseFloat(s);return isNaN(n)?NaN:n};

const JCSS=`
.jscroll{overflow-x:auto;margin:0 -2px;padding:2px}
.jgrid{min-width:600px}
.erow{display:grid;grid-template-columns:96px minmax(0,1fr) 78px 104px 104px 28px;gap:6px;margin-bottom:6px;align-items:center}
.erow select,.erow input.dt{width:100%}
.erow input.dt{font-size:.9rem;text-align:left;font-family:var(--f-body)}
.erow select.ty{font-family:var(--f-mono);font-size:.88rem;padding:6px 4px}
.erow.crline select.ac{margin-left:22px;width:calc(100% - 22px)}
.erow input{width:100%;font-family:var(--f-mono);text-align:right}
.erow input.d{border-color:color-mix(in srgb,var(--debit) 45%,var(--rule-strong))}
.erow input.c{border-color:color-mix(in srgb,var(--credit) 45%,var(--rule-strong))}
.erow.hdr{font:600 .72rem var(--f-body);text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}
.erow.hdr span:nth-child(4){color:var(--debit);text-align:right} .erow.hdr span:nth-child(5){color:var(--credit);text-align:right}
.erow.good select,.erow.good input{background:var(--ok-soft)}
.erow.badrow select,.erow.badrow input{background:var(--bad-soft)}
.erow.badtype select,.erow.badtype input{background:var(--ok-soft)}
.erow.badtype select.ty{background:var(--warn-soft);border-color:var(--warn)}
.dealer{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin:4px 0 8px}
.dl-col{background:var(--surface);border:1px solid var(--rule);border-radius:10px;padding:10px 14px;display:flex;flex-direction:column;gap:2px}
.dl-col b{font-family:var(--f-display);font-size:1.5rem;letter-spacing:.18em}
.dl-col:first-child b{color:var(--debit)} .dl-col:last-child b{color:var(--credit)}
.dl-col small{color:var(--muted)}
.dl-note{font-size:.92rem;color:var(--muted);margin:0 0 12px}
.x{background:none;border:0;color:var(--muted);cursor:pointer;font-size:1.1rem}
.totals{display:grid;grid-template-columns:96px minmax(0,1fr) 78px 104px 104px 28px;gap:6px;font-family:var(--f-mono);font-size:.9rem;color:var(--muted);text-align:right;padding-top:4px;border-top:1px solid var(--rule)}
`;
const TCSS=`
.txl li{margin:4px 0}
.tacc{background:var(--surface);border:1px solid var(--rule);border-radius:8px;padding:8px 10px}
.tacc h5{margin:0 0 4px;font:700 .88rem var(--f-display);text-align:center;border-bottom:2px solid var(--ink);padding-bottom:3px}
.tacc .cols{display:grid;grid-template-columns:1fr 1fr}
.tacc .dcol{border-right:2px solid var(--ink);padding-right:6px}.tacc .ccol{padding-left:6px}
.tacc .ln{display:flex;justify-content:space-between;gap:4px;font-family:var(--f-mono);font-size:.8rem}
.tacc .dcol .ln{color:var(--debit)} .tacc .ccol .ln{color:var(--credit)}
.tacc .ln span:first-child{color:var(--muted)}
.tacc .ln.bal{border-top:1px solid var(--rule-strong);margin-top:3px;padding-top:2px;font-weight:600}
.tacc .zero{text-align:center;font-size:.78rem;color:var(--muted);margin-top:4px}
.tacc.ex .dcol,.tacc.ex .ccol{display:flex;flex-direction:column;gap:4px}
.tacc.ex input{width:100%;min-width:0;font-family:var(--f-mono);font-size:.82rem;text-align:right;padding:4px 6px}
.tacc.ex .dcol input{border-color:color-mix(in srgb,var(--debit) 45%,var(--rule-strong))}
.tacc.ex .ccol input{border-color:color-mix(in srgb,var(--credit) 45%,var(--rule-strong))}
.tacc .balrow{display:grid;grid-template-columns:auto minmax(0,1fr) 68px;gap:6px;align-items:center;margin-top:8px;padding-top:6px;border-top:1px solid var(--rule-strong);font-size:.82rem;font-weight:600}
.tacc .balrow select{padding:4px;font-size:.82rem}
.tacc.good{border-color:var(--ok);background:var(--ok-soft)} .tacc.badacc{border-color:var(--bad)}
.tacc .why{font-size:.78rem;color:var(--bad)} .tacc .why:not(:empty){margin-top:4px}
.tacc.big{max-width:520px;margin:10px 0;padding:10px 14px}
.tacc .ln span:last-child{white-space:nowrap;font-variant-numeric:tabular-nums}
.tacc.big h5{font-size:1rem}
.tacc.big .ln{font-size:.88rem}
.tacc .ln.unk span:last-child{color:var(--bad)}
`;

/* ---------- journal drills ----------
   data: {drills:[{id, topic, date?, title, p, l:[{a:[accepted names], d:debit} | {a:[…], c:credit}]}], extraAccounts?:[names], kinds?:{name:'A'|…}, intro?:html}
   Course format: Date | Account title | Type | Debit | Credit. Type = account class + effect (DEALER). */
const BASE_KINDS={'Cash':'A','Accounts receivable':'A','Inventory':'A','Prepaid expenses':'A','PPE':'A','Land':'A','Supplies':'A','Goodwill':'A','Intangible assets (patent)':'A','Assets acquired (at market value)':'A',
 'Accumulated depreciation':'XA','Accumulated amortization':'XA',
 'Accounts payable':'L','Loan payable':'L','Financial loan LT':'L','Financial loan ST':'L','Notes payable':'L','Unearned revenues':'L','Salaries payable':'L','VAT payable':'L','Dividends payable':'L',
 'Share capital':'SE','Share premium':'SE','Retained earnings':'SE','Net income of prior year':'SE','Treasury shares':'SE',
 'Dividends':'D','Revenues':'R','Gain on disposal':'R','Service revenue':'R'};
const DEBIT_NORMAL=['A','D','E'];
const TYPES=['A+','A−','XA+','XA−','L+','L−','SE+','SE−','D+','D−','R+','R−','E+','E−'];
const DEALER=`<div class="dealer"><div class="dl-col"><b>D E A</b><span>increase on the <span style="color:var(--debit)">debit</span> side</span><small>Dividends · Expenses · Assets</small></div><div class="dl-col"><b>L E R</b><span>increase on the <span style="color:var(--credit)">credit</span> side</span><small>Liabilities · Equity · Revenues</small></div></div>
<p class="dl-note">Type = class + effect: <code>A+</code> asset up, <code>L−</code> liability down, <code>SE+</code>, <code>R+</code>, <code>E+</code>, <code>XA+</code> (contra-asset such as accumulated depreciation, which behaves like a credit account). Dividends: <code>D+</code> with DEALER, or <code>SE−</code> as in the course examples; both are accepted.</p>`;
function kit(data){
  const kinds=Object.assign({},BASE_KINDS,data.kinds);
  const kindOf=a=>kinds[a]||(/expense|Cost of goods sold|Loss on disposal/i.test(a)?'E':'');
  // expected type for an account posted on a side; Dividends accepts D+ (DEALER) or SE− (course notation)
  const typesFor=(a,side)=>{const k=kindOf(a);if(!k)return[];const up=DEBIT_NORMAL.includes(k)?side==='d':side==='c';const t=k+(up?'+':'−');
    return k==='D'?[t,'SE'+(up?'−':'+')]:[t]};
  const accounts=[...new Set(data.drills.flatMap(x=>x.l.flatMap(y=>y.a)).concat(data.extraAccounts||[]))].sort((a,b)=>a.localeCompare(b));
  return {typesFor,accounts};
}
registerModule('journal',{
  label:'Journal drills',css:JCSS,
  card:ctx=>({eyebrow:`${ctx.data.drills.length} entries`,title:'Journal drills',text:'Fill in debit and credit; instant check'}),
  stats(ctx){const it=ctx.state.items||{};
    return ctx.subject.topics.map(t=>{const ds=ctx.data.drills.filter(d=>d.topic===t.id);
      return {topic:t.id,label:'Journal drills solved',done:ds.filter(d=>it[d.id]&&it[d.id].ok).length,tried:ds.filter(d=>it[d.id]).length,total:ds.length}}).filter(r=>r.total)},
  render(ctx,main){
    const d=ctx.data,m=ctx.mem,k=kit(d);m.f=m.f||{exam:'',topic:''};
    if(!ctx.state.items)ctx.state.items={};
    main.innerHTML=`<div class="eyebrow">Practice</div><h2>Journal drills</h2><p class="lede">Write each entry in the course format: date, account, type, then the amount in the <span style="color:var(--debit)">debit</span> or <span style="color:var(--credit)">credit</span> column. Debits first; credit lines indent on their own. Line order does not matter. "Check" marks each line green or red.</p>
    ${d.intro||DEALER}${ctx.scopeChips(d.drills,m.f)}<div id="dlist"></div>`;
    ctx.bindScope(main,m.f,()=>this.render(ctx,main));
    const list=main.querySelector('#dlist');
    d.drills.filter(ctx.inScope(m.f)).forEach(x=>list.appendChild(drillEl(ctx,x,k)));
  }
});
function drillEl(ctx,d,k){
  const {typesFor,accounts}=k,items=ctx.state.items;
  const el=document.createElement('div');el.className='drill';
  const st=items[d.id];
  el.innerHTML=`<div class="qmeta"><span class="pill">${ctx.topicShort(d.topic)}</span><b style="color:var(--ink)">${d.title}</b>${st?`<span style="margin-left:auto;color:${st.ok?'var(--ok)':'var(--bad)'}">${st.ok?'✓ solved':'✗ last try wrong'}</span>`:''}</div>
  <p class="prompt">${d.p}</p>
  <div class="jscroll"><div class="jgrid">
  <div class="erow hdr"><span>Date</span><span>Account title</span><span>Type</span><span>Debit</span><span>Credit</span><span></span></div><div class="rows"></div>
  <div class="totals"><span></span><span>Totals</span><span></span><span class="td">0</span><span class="tc">0</span><span></span></div></div></div>
  <div class="row" style="margin-top:10px"><button type="button" class="btn small ghost add">Add line</button><button type="button" class="btn small chk">Check</button><button type="button" class="btn small ghost sol">Show solution</button></div>
  <div class="result"></div><div class="solbox"></div>`;
  const rows=el.querySelector('.rows');let uidN=0;
  const addRow=()=>{const r=document.createElement('div');r.className='erow';const uid=d.id+'-'+(uidN++);
    r.innerHTML=`<input type="text" id="${uid}-dt" class="dt" aria-label="Date"><select id="${uid}-a" class="ac" aria-label="Account"><option value="">Choose account…</option>${accounts.map(a=>`<option>${a}</option>`).join('')}</select><select id="${uid}-t" class="ty" aria-label="Type"><option value="">Type</option>${TYPES.map(t=>`<option>${t}</option>`).join('')}</select><input type="text" id="${uid}-d" class="d" inputmode="decimal" aria-label="Debit"><input type="text" id="${uid}-c" class="c" inputmode="decimal" aria-label="Credit"><button type="button" class="x" title="Remove line" aria-label="Remove line">×</button>`;
    r.querySelector('.x').onclick=()=>{r.remove();tot()};r.querySelectorAll('input').forEach(i=>i.oninput=tot);rows.appendChild(r)};
  const tot=()=>{let td=0,tc=0;rows.querySelectorAll('.erow').forEach(r=>{const dv=parseAmt(r.querySelector('.d').value)||0,cv=parseAmt(r.querySelector('.c').value)||0;td+=dv;tc+=cv;r.classList.toggle('crline',cv>0&&!dv)});el.querySelector('.td').textContent=fmt(Math.round(td*100)/100);el.querySelector('.tc').textContent=fmt(Math.round(tc*100)/100)};
  for(let i=0;i<d.l.length;i++)addRow();
  el.querySelector('.add').onclick=addRow;
  el.querySelector('.sol').onclick=()=>{const bx=el.querySelector('.solbox');if(bx.innerHTML){bx.innerHTML='';return}
    const lines=[...d.l.filter(x=>x.d),...d.l.filter(x=>x.c)];
    bx.innerHTML=J(lines.map((x,i)=>[i?'':(d.date||''),x.a[0]+(x.a.length>1?` <small style="color:var(--muted)">(or ${x.a.slice(1).join(', ')})</small>`:''),typesFor(x.a[0],x.d?'d':'c').join(' or '),x.d||'',x.c||'']));};
  el.querySelector('.chk').onclick=()=>{
    const user=[...rows.querySelectorAll('.erow')].map(r=>({r,dt:r.querySelector('.dt').value.trim(),a:r.querySelector('.ac').value,t:r.querySelector('.ty').value,d:parseAmt(r.querySelector('.d').value),c:parseAmt(r.querySelector('.c').value)})).filter(u=>u.a||u.d||u.c||u.t);
    const used=new Set();let good=0,typeBad=0;
    rows.querySelectorAll('.erow').forEach(r=>r.classList.remove('good','badrow','badtype'));
    user.forEach(u=>{const idx=d.l.findIndex((x,i)=>!used.has(i)&&x.a.includes(u.a)&&Math.abs((x.d||0)-(u.d||0))<0.005&&Math.abs((x.c||0)-(u.c||0))<0.005);
      if(idx<0){u.r.classList.add('badrow');return}
      used.add(idx);
      if(typesFor(u.a,d.l[idx].d?'d':'c').includes(u.t)){good++;u.r.classList.add('good')}else{typeBad++;u.r.classList.add('badtype')}});
    const sd=user.reduce((s,u)=>s+(u.d||0),0),sc=user.reduce((s,u)=>s+(u.c||0),0);
    const ok=good===d.l.length&&user.length===d.l.length;
    const noDate=d.date&&!user.some(u=>u.dt);
    const res=el.querySelector('.result');res.className='result '+(ok?'ok':'ko');
    res.textContent=ok?'Correct and balanced.'+(noDate?` Add the date (${d.date}) on the first line, as in the course format.`:''):
      `${good} of ${d.l.length} lines fully correct.`+(typeBad?` ${typeBad} line${typeBad>1?'s have':' has'} the right account and amount but the wrong type (orange).`:'')+(Math.abs(sd-sc)>0.005?` Your entry does not balance (debits ${fmt(sd)} vs credits ${fmt(sc)}).`:'')+(user.length>d.l.length?' You have extra lines.':'')+(user.length>typeBad+good?' Red lines: wrong account, side or amount.':'');
    items[d.id]={ok};ctx.save();
  };
  return el;
}

/* ---------- exercise type "journal": one or more entries to write, in Exercises, case parts and mock exams ----------
   item: {type:'journal', l:[{a:[accepted names], d:debit, dt?:date} | {a:[…], c:credit, dt?}], date?, rows?, accounts?:[menu], kinds?:{name:'A'|…}}
   l lists the lines in solution order (debits first within each entry); dt (or date, for the first line) fills the date column of the answer.
   Same grid and line check as the drills: a line is right when account, side, amount and type match; the right account and amount
   with a wrong type counts half. Score = (right lines + half lines / 2) / max(expected lines, lines written). The date is not graded. */
Rev.registerExerciseType('journal',{label:'Journal entry',
  mount(box,x,api){
    const {typesFor,accounts}=kit({drills:[{l:x.l}],extraAccounts:x.accounts||Object.keys(Object.assign({},BASE_KINDS,x.kinds)),kinds:x.kinds});
    box.innerHTML=`<div class="jscroll"><div class="jgrid"><div class="erow hdr"><span>Date</span><span>Account title</span><span>Type</span><span>Debit</span><span>Credit</span><span></span></div><div class="rows"></div>
    <div class="totals"><span></span><span>Totals</span><span></span><span class="td">0</span><span class="tc">0</span><span></span></div></div></div>
    <div class="row" style="margin-top:8px"><button type="button" class="btn small ghost add">Add line</button></div>`;
    const rows=box.querySelector('.rows');let n=0;
    const tot=()=>{let td=0,tc=0;rows.querySelectorAll('.erow').forEach(r=>{const dv=parseAmt(r.querySelector('.d').value)||0,cv=parseAmt(r.querySelector('.c').value)||0;td+=dv;tc+=cv;r.classList.toggle('crline',cv>0&&!dv)});
      box.querySelector('.td').textContent=fmt(Math.round(td*100)/100);box.querySelector('.tc').textContent=fmt(Math.round(tc*100)/100)};
    const addRow=()=>{const r=document.createElement('div');r.className='erow';const uid=api.uid+'-'+(n++);
      r.innerHTML=`<input type="text" id="${uid}-dt" class="dt" aria-label="Date" autocomplete="off"><select id="${uid}-a" class="ac" aria-label="Account"><option value="">Choose account…</option>${accounts.map(a=>`<option>${esc(a)}</option>`).join('')}</select><select id="${uid}-t" class="ty" aria-label="Type"><option value="">Type</option>${TYPES.map(t=>`<option>${t}</option>`).join('')}</select><input type="text" id="${uid}-d" class="d" inputmode="decimal" aria-label="Debit" autocomplete="off"><input type="text" id="${uid}-c" class="c" inputmode="decimal" aria-label="Credit" autocomplete="off"><button type="button" class="x" title="Remove line" aria-label="Remove line">×</button>`;
      r.querySelector('.x').onclick=()=>{r.remove();tot()};r.querySelectorAll('input').forEach(i=>i.oninput=tot);rows.appendChild(r)};
    for(let i=0;i<(x.rows||x.l.length+1);i++)addRow();
    box.querySelector('.add').onclick=addRow;
    return {
      check(){
        const all=[...rows.querySelectorAll('.erow')];all.forEach(r=>r.classList.remove('good','badrow','badtype'));
        const user=all.map(r=>({r,a:r.querySelector('.ac').value,t:r.querySelector('.ty').value,d:parseAmt(r.querySelector('.d').value),c:parseAmt(r.querySelector('.c').value)})).filter(u=>u.a||u.t||u.d||u.c);
        if(!user.length)return {empty:true};
        const used=new Set();let good=0,half=0;
        user.forEach(u=>{const i=x.l.findIndex((y,k)=>!used.has(k)&&y.a.includes(u.a)&&Math.abs((y.d||0)-(u.d||0))<0.005&&Math.abs((y.c||0)-(u.c||0))<0.005);
          if(i<0){u.r.classList.add('badrow');return}
          used.add(i);if(typesFor(u.a,x.l[i].d?'d':'c').includes(u.t)){good++;u.r.classList.add('good')}else{half++;u.r.classList.add('badtype')}});
        const need=x.l.length,ok=good===need&&user.length===need;
        const sd=user.reduce((a,u)=>a+(u.d||0),0),sc=user.reduce((a,u)=>a+(u.c||0),0);
        return {ok,score:(good+half/2)/Math.max(need,user.length),msg:ok?'':[`${good} of ${need} lines fully correct.`,
          half?`${half} line${half>1?'s have':' has'} the right account and amount but the wrong type (orange).`:'',
          Math.abs(sd-sc)>0.005?`Your entry does not balance (debits ${fmt(sd)} vs credits ${fmt(sc)}).`:'',
          user.length>need?'You have extra lines.':''].filter(Boolean).join(' ')};
      },
      answer:()=>J(x.l.map((y,i)=>[y.dt||(i?'':x.date||''),y.a[0]+(y.a.length>1?` <small style="color:var(--muted)">(or ${y.a.slice(1).join(', ')})</small>`:''),typesFor(y.a[0],y.d?'d':'c').join(' or '),y.d||'',y.c||'']))
    };
  },
  print:x=>`<div class="tbl"><table class="je p-je"><thead><tr><th>Date</th><th>Account title</th><th>Type</th><th class="n">Debit</th><th class="n">Credit</th></tr></thead><tbody>${'<tr><td></td><td></td><td></td><td></td><td></td></tr>'.repeat(x.rows||x.l.length+1)}</tbody></table></div>`
});
Rev.journalKit=kit;

/* ---------- T-accounts: one account per exercise, generated ----------
   data: {accounts:{name:{n:'d'|'c', open?:[lo,hi], tpl:[{s:'d'|'c'|null, t:a=>text, r:[lo,hi], st?, p?:a=>amount, e:entry|a=>entry}]}},
          missing:[[account, normal side, debit label, credit label, unknown ('d','c','end'), opening range, debit range, credit range]],
          topic?, eyebrow?, blurb?}
   Templates: s = side posted in THIS account or null (no effect); r = amount range; st = rounding step;
   p = amount posted in this account (default: the amount a); e = the journal entry, shown in the solution. */
const rint=(lo,hi,step=100)=>Math.max(step,Math.round((lo+Math.random()*(hi-lo))/step)*step);
const pick=arr=>arr[Math.floor(Math.random()*arr.length)];
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const F_=t=>`<div class="formula">${t}</div>`;
const sideName=s=>s==='d'?'debit':'credit';
const eur=a=>'€'+fmt(a);

function genPost(TA,acc){let x;for(let i=0;i<15;i++){x=genPost1(TA,acc);if(x.tx.length>=4)break}return x}
function genPost1(TA,acc){
  const A=TA[acc],open=A.open?rint(A.open[0],A.open[1],500):0;
  const inc=A.tpl.filter(t=>t.s===A.n),dec=A.tpl.filter(t=>t.s&&t.s!==A.n),non=A.tpl.filter(t=>!t.s);
  const nNon=Math.min(non.length,Math.random()<.5?1:2),nDec=Math.min(dec.length,dec.length?(Math.random()<.5?1:2):0);
  const nInc=Math.min(inc.length,6-nNon-nDec);
  let chosen=shuffle([...shuffle([...non]).slice(0,nNon),...shuffle([...inc]).slice(0,nInc),...shuffle([...dec]).slice(0,nDec)]);
  let run=open;const tx=[];
  chosen.forEach(t=>{const st=t.st||100,P=t.p||(x=>x);let a=rint(t.r[0],t.r[1],st);
    if(t.s&&t.s!==A.n){let g=0;while(P(a)>run*.7&&a>st&&g<30){a=Math.max(st,Math.floor(a*.6/st)*st);g++}
      if(P(a)>run)return;run-=P(a)}
    else if(t.s)run+=P(a);
    tx.push({t,a,p:t.s?P(a):0})});
  return {kind:'post',acc,n:A.n,open,tx};
}
function genMiss(m){
  const [acc,n,ld,lc,unk,ro,rd,rc]=m;let o,d,c,end,g=0;
  do{o=rint(ro[0],ro[1],500);d=rint(rd[0],rd[1],500);c=rint(rc[0],rc[1],500);end=n==='d'?o+d-c:o+c-d;g++}while(end<=0&&g<50);
  return {kind:'miss',acc,n,ld,lc,unk,o,d,c,end,ans:unk==='d'?d:unk==='c'?c:end};
}
function missFormula(x){const {n,o,d,c,end,unk}=x,F=fmt;
  const base=n==='d'?'Ending balance = Opening + debits − credits':'Ending balance = Opening + credits − debits';
  let calc;
  if(unk==='end')calc=n==='d'?`${F(o)} + ${F(d)} − ${F(c)} = ${F(end)} (debit)`:`${F(o)} + ${F(c)} − ${F(d)} = ${F(end)} (credit)`;
  else if(n==='d')calc=unk==='d'?`${F(end)} = ${F(o)} + ? − ${F(c)}  →  ? = ${F(end)} − ${F(o)} + ${F(c)} = ${F(d)}`:`${F(end)} = ${F(o)} + ${F(d)} − ?  →  ? = ${F(o)} + ${F(d)} − ${F(end)} = ${F(c)}`;
  else calc=unk==='c'?`${F(end)} = ${F(o)} + ? − ${F(d)}  →  ? = ${F(end)} − ${F(o)} + ${F(d)} = ${F(c)}`:`${F(end)} = ${F(o)} + ${F(c)} − ?  →  ? = ${F(o)} + ${F(c)} − ${F(end)} = ${F(d)}`;
  return F_(base+'\n'+calc);
}
function postExpect(x){let d=x.n==='d'?x.open:0,c=x.n==='c'?x.open:0;x.tx.forEach(({t,p})=>{if(t.s==='d')d+=p;else if(t.s==='c')c+=p});return {d,c,bal:d-c}}
function tView(title,dl,cl,extra=''){ // read-only T: dl/cl = [[label, value, cls]]
  const side=r=>r.map(([k,v,cls])=>`<div class="ln ${cls||''}"><span>${k}</span><span>${v}</span></div>`).join('')||'<div class="ln">&nbsp;</div>';
  return `<div class="tacc big"><h5>${title}</h5><div class="cols"><div class="dcol">${side(dl)}</div><div class="ccol">${side(cl)}</div></div>${extra}</div>`;
}

registerModule('taccounts',{
  label:'T-accounts',css:TCSS,
  card:ctx=>({eyebrow:'Unlimited',title:'T-accounts',text:ctx.data.blurb||'One account per exercise, new numbers every time'}),
  stats(ctx){const st=ctx.state;return [{topic:ctx.data.topic,label:'T-accounts: right first time',done:st.ok||0,total:st.done||0,tried:st.done||0,count:false}]},
  render(ctx,main){
    const TA=ctx.data.accounts,MISS=ctx.data.missing||[],m=ctx.mem,S=ctx.state;
    if(!S.done)S.done=0;if(!S.ok)S.ok=0;
    if(!m.type)m.type='mix';if(m.acc==null)m.acc='';if(!m.n)m.n=0;
    const accs=Object.keys(TA);
    const newTA=()=>{
      const kind=m.type==='mix'?(Math.random()<.6?'post':'miss'):m.type;
      if(kind==='miss'){const pool=MISS.filter(x=>!m.acc||x[0]===m.acc);if(pool.length)return genMiss(pick(pool))}
      return genPost(TA,m.acc||pick(accs));
    };
    const nextTA=()=>{m.cur=newTA();m.cur.checked=false;m.cur.sol=false;m.n++;drawTA()};
    main.innerHTML=`<div class="eyebrow">${ctx.data.eyebrow||'Practice'}</div><h2>T-accounts</h2>
    <p class="lede">Short exercises on one T-account at a time, generated with new numbers every time. Do as many as you want: "Next exercise" never runs out.</p>
    <div class="filters">${chips([['mix','Mixed'],['post','Post transactions'],['miss','Find the missing figure']],m.type,'k')}</div>
    <div class="filters"><label for="taAcc" style="align-self:center;color:var(--muted);font-size:.9rem">Account</label><select id="taAcc"><option value="">Any account</option>${accs.map(a=>`<option ${a===m.acc?'selected':''}>${a}</option>`).join('')}</select></div>
    ${EX('Method: posting and balancing a T-account','read first',`<ol>
     <li>For each transaction, ask: <b>does it touch this account?</b> If not, skip it (a sale on account does not touch Cash; a shareholder's personal purchase is not recorded at all).</li>
     <li>If it does, write the amount on the <b>debit (left)</b> or <b>credit (right)</b> side. Only the part that concerns this account: in a sale "60% cash", Cash gets 60%.</li>
     <li><b>Balance</b>: total debits − total credits. The balance sits on the side of the larger total.</li></ol>
     ${T(['Increase on the debit side','Increase on the credit side'],[['Assets (Cash, A/R, Inventory, Supplies), expenses, dividends','Liabilities (A/P, Loan payable), equity (Share capital), revenues']])}
     ${F_('Ending balance = Opening balance + increases − decreases')}`)}
    <div id="tabox"></div>`;
    main.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{m.type=b.dataset.k;m.cur=null;this.render(ctx,main)});
    main.querySelector('#taAcc').onchange=e=>{m.acc=e.target.value;nextTA()};
    const drawTA=()=>{
      const x=m.cur,box=main.querySelector('#tabox');
      const score=`<span class="score" style="margin-left:auto">Exercise ${m.n} · right first time ${S.ok}/${S.done}</span>`;
      let h=`<div class="drill"><div class="qmeta"><span class="pill">${x.kind==='post'?'Post transactions':'Missing figure'}</span><span class="pill src">${x.acc}</span>${score}</div>`;
      if(x.kind==='post'){
        h+=`<p class="prompt">Post to the <b>${x.acc}</b> T-account only the amounts that affect it, then find its balance. ${x.open?`Opening balance: <b>${eur(x.open)}</b> (${sideName(x.n)}), already written in.`:'The account starts the period at zero.'}</p>
        <ol class="txl">${x.tx.map(({t,a})=>`<li>${t.t(a)}</li>`).join('')}</ol>
        <div class="tacc ex big" data-i="0"><h5>${x.acc}</h5><div class="cols"><div class="dcol" data-s="d">${x.open&&x.n==='d'?`<div class="ln fixed"><span>Op.</span><span>${fmt(x.open)}</span></div>`:''}</div><div class="ccol" data-s="c">${x.open&&x.n==='c'?`<div class="ln fixed"><span>Op.</span><span>${fmt(x.open)}</span></div>`:''}</div></div>
        <div class="balrow"><label for="ta-b">Balance</label><input type="text" class="bal" id="ta-b" inputmode="decimal"><select id="ta-s" aria-label="Side of the balance"><option value="">Side</option><option value="d">Dr</option><option value="c">Cr</option></select></div><div class="why"></div></div>`;
      }else{
        const q=['?','<b>?</b>','unk'],dl=[],cl=[],op=['Op.',fmt(x.o)];
        (x.n==='d'?dl:cl).push(op);
        dl.push(x.unk==='d'?[x.ld,...q.slice(1)]:[x.ld,fmt(x.d)]);
        cl.push(x.unk==='c'?[x.lc,...q.slice(1)]:[x.lc,fmt(x.c)]);
        if(x.unk!=='end')(x.n==='d'?dl:cl).push(['End. bal.',fmt(x.end),'bal']);
        const ask=x.unk==='end'?'the ending balance and its side':`the missing figure: <b>${x.unk==='d'?x.ld:x.lc}</b>`;
        h+=`<p class="prompt">Here is the <b>${x.acc}</b> T-account for the period. Find ${ask}.</p>${tView(x.acc,dl,cl)}
        <div class="ansrow"><label for="ta-a">${x.unk==='end'?'Ending balance':x.unk==='d'?x.ld:x.lc}</label><input type="text" id="ta-a" inputmode="decimal">${x.unk==='end'?'<select id="ta-as" aria-label="Side"><option value="">Side</option><option value="d">Dr</option><option value="c">Cr</option></select>':''}</div>`;
      }
      h+=`<div class="row" style="margin-top:12px"><button type="button" class="btn small chk">Check</button><button type="button" class="btn small ghost bsol">Solution</button><button type="button" class="btn ghost small bnext">Next exercise</button></div><div class="result"></div><div class="box bx-sol"></div></div>`;
      box.innerHTML=h;
      const el=box.firstElementChild;
      if(x.kind==='post'){
        const addInput=col=>{const k=col.querySelectorAll('input').length,side=col.dataset.s;const inp=document.createElement('input');inp.type='text';inp.inputMode='decimal';inp.id=`ta-${side}${k}`;
          inp.setAttribute('aria-label',`${side==='d'?'Debit':'Credit'} amount ${k+1}`);
          inp.oninput=()=>{const ins=col.querySelectorAll('input');if(ins[ins.length-1]===inp&&inp.value.trim())addInput(col)};col.appendChild(inp)};
        el.querySelectorAll('.dcol,.ccol').forEach(addInput);
      }
      el.querySelector('.bnext').onclick=nextTA;
      el.querySelector('.bsol').onclick=()=>{x.sol=true;const bx=el.querySelector('.bx-sol');if(bx.innerHTML){bx.innerHTML='';return}
        if(x.kind==='post'){const E=postExpect(x),dl=[],cl=[];
          if(x.open)(x.n==='d'?dl:cl).push(['Op.',fmt(x.open)]);
          x.tx.forEach(({t,p},i)=>{if(t.s==='d')dl.push([String(i+1),fmt(p)]);else if(t.s==='c')cl.push([String(i+1),fmt(p)])});
          const bl=['Bal.',fmt(Math.abs(E.bal)),'bal'];if(E.bal>0)dl.push(bl);else if(E.bal<0)cl.push(bl);
          bx.innerHTML='<h4>Solution</h4>'+tView(x.acc,dl,cl,E.bal===0?'<div class="zero">Balance 0</div>':'')+
            F_(`Debits ${fmt(E.d)} − credits ${fmt(E.c)} = ${E.bal===0?'0':fmt(Math.abs(E.bal))+' '+(E.bal>0?'debit':'credit')} balance`)+
            T(['#',`Effect on ${x.acc}`,'Journal entry'],x.tx.map(({t,a,p},i)=>[String(i+1),t.s?`<span style="color:var(--${t.s==='d'?'debit':'credit'})">${t.s==='d'?'Debit':'Credit'} ${fmt(p)}</span>`:'<span style="color:var(--muted)">No effect</span>',typeof t.e==='function'?t.e(a):t.e]));
        }else bx.innerHTML='<h4>Solution</h4>'+missFormula(x);
      };
      el.querySelector('.chk').onclick=()=>{
        const near=(u,v)=>!isNaN(u)&&Math.abs(u-v)<0.005;let ok,msg;
        if(x.kind==='post'){const E=postExpect(x),c=el.querySelector('.tacc.ex');
          const sum=sel=>[...c.querySelectorAll(sel+' input')].reduce((s,i)=>s+parseAmt(i.value),0);
          const okD=near(sum('.dcol')+(x.n==='d'?x.open:0),E.d),okC=near(sum('.ccol')+(x.n==='c'?x.open:0),E.c);
          const bv=parseAmt(c.querySelector('.bal').value),bs=c.querySelector('select').value;
          const okB=E.bal===0?near(bv,0):near(bv,Math.abs(E.bal))&&bs===(E.bal>0?'d':'c');
          const probs=[];if(!okD)probs.push('debit side');if(!okC)probs.push('credit side');if(!okB)probs.push('balance');
          ok=!probs.length;c.classList.toggle('good',ok);c.classList.toggle('badacc',!ok);
          c.querySelector('.why').textContent=ok?'':'Check the '+probs.join(', ')+'.';
          msg=ok?'Correct: posted and balanced.':`Not yet. Check the ${probs.join(', ')}. Tip: one transaction can touch the account for only part of its amount, and some do not touch it at all.`;
        }else{const v=parseAmt(el.querySelector('#ta-a').value),sd=x.unk==='end'?el.querySelector('#ta-as').value:'';
          ok=near(v,x.ans)&&(x.unk!=='end'||sd===x.n);
          msg=ok?'Correct.':(near(v,x.ans)?'Right amount, wrong side.':'Not yet. Start from: ending balance = opening + increases − decreases.');}
        if(!x.checked){x.checked=true;S.done++;if(ok&&!x.sol)S.ok++;ctx.save();el.querySelector('.qmeta .score').textContent=`Exercise ${m.n} · right first time ${S.ok}/${S.done}`}
        const res=el.querySelector('.result');res.className='result '+(ok?'ok':'ko');res.textContent=msg;
        if(ok)el.querySelector('.bnext').focus();
      };
    };
    if(m.cur)drawTA();else nextTA();
  }
});
})();
