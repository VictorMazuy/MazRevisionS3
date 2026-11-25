/* Revision Ledger engine.
   Hash routing, the shared views of every subject (overview, sheets, cheat sheet, quiz, exercises, flashcards, mock exams, progress),
   the generic exercise types, the module registry and progress saved in localStorage.
   Subject files (subjects/<slug>.js) and module files (modules/<id>.js) are plain <script> tags loaded after this file,
   never fetched, so index.html opens by double-click. The contract for those files is site/CONVENTIONS.md. */
(function(){
'use strict';
const Rev=window.Rev={version:1};
const SUBJECTS={},MODULES={},XTYPES={},MEM={},ERRORS=[],PAGES={};
let CATALOG=[];
const PREFS_KEY='revledger:prefs',subjKey=slug=>'revledger:subject:'+slug;
const $=sel=>document.querySelector(sel);

/* ---------- storage: every read and write in try/catch ---------- */
function lsGet(k){try{const r=localStorage.getItem(k);return r==null?null:JSON.parse(r)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
const prefs=Object.assign({theme:'auto',last:''},lsGet(PREFS_KEY)||{});
const savePrefs=()=>lsSet(PREFS_KEY,prefs);

/* ---------- HTML helpers for sheets (same output as the AFA site) ---------- */
const fmt=n=>{if(n===''||n==null)return'';const s=Number(n).toLocaleString('en-US',{minimumFractionDigits:(n%1?2:0),maximumFractionDigits:2});return s.replace(/,/g,' ')};
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function T(head,rows,numCols=[]){let h='<div class="tbl"><table><thead><tr>'+head.map((x,i)=>`<th class="${numCols.includes(i)?'n':''}">${x}</th>`).join('')+'</tr></thead><tbody>';
  for(const r of rows)h+='<tr>'+r.map((x,i)=>`<td class="${numCols.includes(i)?'n':''}">${x}</td>`).join('')+'</tr>';return h+'</tbody></table></div>'}
// Always open (sheets are never collapsed): a titled block, no toggle.
const EX=(title,tag,body)=>`<section class="ex"><div class="ex-h">${title}<span class="tag">${tag||''}</span></div><div class="ex-b">${body}</div></section>`;
const TRAP=(t,label='Exam trap')=>`<div class="trap"><b>${label}</b>${t}</div>`;
const NOTE=t=>`<div class="note">${t}</div>`;
const F=t=>`<div class="formula">${t}</div>`;
const chips=(vals,cur,attr)=>vals.map(([v,l])=>`<button type="button" class="chip" data-${attr}="${esc(v)}" aria-pressed="${String(cur)===String(v)}">${l}</button>`).join('');
const bar=(a,b)=>`<div class="bar"><i style="width:${b?Math.min(100,Math.round(a/b*100)):0}%"></i></div>`;
Rev.h={fmt,esc,T,EX,TRAP,NOTE,F,chips,bar};

/* ---------- utilities for generators and answer checking ---------- */
const noAcc=s=>String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/œ/g,'oe').replace(/æ/g,'ae');
const norm=s=>String(s==null?'':s).toLowerCase().replace(/[’‘`]/g,"'").replace(/[-‐‑–—_/]/g,' ').replace(/[.,;:!?¿¡"“”«»()[\]{}]/g,' ').replace(/\s+/g,' ').trim();
// "1 000", "1,000", "12,5", "€40", "55%", "−3 500" and "(3 500)" are all read as numbers; anything else is NaN
function parseNum(s){
  s=String(s==null?'':s).trim().replace(/[−–]/g,'-').replace(/[\s  €$£%]/g,'');
  if(!s)return NaN;
  let neg=false;if(/^\(.*\)$/.test(s)){neg=true;s=s.slice(1,-1)}
  if(/,\d{1,2}$/.test(s)&&!s.includes('.'))s=s.replace(',','.');
  s=s.replace(/,/g,'');
  if(!/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s))return NaN;
  const n=parseFloat(s);return neg?-n:n;
}
const U={
  int:(lo,hi)=>lo+Math.floor(Math.random()*(hi-lo+1)),
  step:(lo,hi,st=1)=>+(lo+st*Math.floor(Math.random()*(Math.floor((hi-lo)/st+1e-9)+1))).toFixed(10),
  pick:a=>a[Math.floor(Math.random()*a.length)],
  shuffle:a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a},
  round:(x,d=2)=>{const p=10**d;return Math.round((x+Math.sign(x)*Number.EPSILON)*p)/p},
  num:parseNum,norm,noAccents:noAcc
};
Rev.u=U;
const val=(f,v)=>typeof f==='function'?f(v):f;
const safe=(f,fallback)=>{try{return f()}catch(e){console.error(e);return fallback}};
const r2=x=>U.round(x,2);
const ptsTxt=n=>`${fmt(r2(n))} pt${r2(n)>1?'s':''}`;
// weighted score of graded parts: [{score, w}] → 0..1
const wScore=list=>{const W=list.reduce((a,p)=>a+p.w,0);return W?list.reduce((a,p)=>a+p.w*p.score,0)/W:0};

/* ---------- registries ---------- */
const BASE_VIEWS=[['overview','Overview'],['sheets','Sheets'],['cheat','Cheat sheet'],['glossary','Glossary'],['quiz','Quiz'],['exercises','Exercises']];
const END_VIEWS=[['flashcards','Flashcards'],['mocks','Mock exams'],['progress','Progress']];
const RESERVED=new Set(BASE_VIEWS.concat(END_VIEWS).map(v=>v[0]));
// the Glossary tab only exists for a subject that has a glossary
const viewsOf=s=>BASE_VIEWS.filter(v=>v[0]!=='glossary'||s.glossary.length).concat(s.mods.map(m=>[m.tab,m.label||m.tab]),END_VIEWS);

function addCss(id,css){if(document.getElementById('css-'+id))return;const st=document.createElement('style');st.id='css-'+id;st.textContent=css;document.head.appendChild(st)}
// Order of the subjects everywhere on the site (home cards and their numbers, subject menu, global progress, search, mixed revision):
// the chronological order of the exams. The ONLY place to change it (CONVENTIONS.md, section 2). A catalogued subject missing here comes last.
const SUBJECT_ORDER=['digital-innovation','afa','market-structures','espagnol','econometrics','sales-techniques','marketing-management','cost-accounting','operations-management','trademark-law'];
// exam dates shown on the home cards: only dates given in the course material (PROGRESS.md), never guessed
const EXAM_DATES={'marketing-management':'Exam 3–19 Dec (TBC)','cost-accounting':'Exam 15 Dec, afternoon'};
const orderOf=slug=>{const i=SUBJECT_ORDER.indexOf(slug);return i<0?Infinity:i};
Rev.subjectOrder=()=>SUBJECT_ORDER.slice();
Rev.catalog=list=>{CATALOG=list.map((c,i)=>[c,i]).sort((a,b)=>orderOf(a[0].slug)-orderOf(b[0].slug)||a[1]-b[1]).map(x=>x[0])};
function registerModule(id,def){
  if(!id||!def||typeof def.render!=='function'){const m=`Module "${id}" not loaded: registerModule(id, {render, …}) needs an id and a render function`;ERRORS.push(m);console.error(m);return}
  MODULES[id]=Object.assign({id},def);if(def.css)addCss('mod-'+id,def.css);
}
function registerExerciseType(id,def){XTYPES[id]=def}
// a site-wide page: Rev.addPage('demo', {label, render(main, param), nav?}) → #demo; nav:true adds it to the home tabs
Rev.addPage=(id,def)=>{PAGES[id]=def};
// a self-assessed question (marked by the student with its rubric after handing in)
const isSelf=x=>x.type==='written'||(x.type==='case'&&!(x.parts&&x.parts.length));
// mock exams: ids, types, topics, points (items add up to the total; case parts and rubric lines add up to the item)
function checkMocks(s){
  const ids=new Set();
  s.mocks.forEach((m,mi)=>{
    if(!m||!m.id)throw new Error(`mocks[${mi}] has no id`);
    if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.id)||/(^|-)print$/.test(m.id))throw new Error(`mock "${m.id}": invalid id (lowercase letters, digits, hyphens; not ending in "print")`);
    if(ids.has(m.id))throw new Error(`mocks: duplicate id "${m.id}"`);ids.add(m.id);
    if(!(m.duration>0))throw new Error(`mock "${m.id}": duration (minutes) missing`);
    if(!(m.total>0))throw new Error(`mock "${m.id}": total (points) missing`);
    if(m.exam&&!s.examById[m.exam])throw new Error(`mock "${m.id}": unknown exam "${m.exam}"`);
    if(!Array.isArray(m.sections)||!m.sections.length)throw new Error(`mock "${m.id}" has no sections`);
    const seen=new Set();let sum=0;
    m.sections.forEach((sec,si)=>(sec.items||[]).forEach((x,i)=>{
      const who=`mock "${m.id}", item "${x&&x.id||`${si+1}.${i+1}`}"`;
      if(!x||!x.id)throw new Error(`${who} has no id`);
      if(seen.has(x.id))throw new Error(`${who}: duplicate id`);seen.add(x.id);
      if(!XTYPES[x.type])throw new Error(`${who}: unknown type "${x.type}"`);
      if(!(x.pts>0))throw new Error(`${who}: pts must be a positive number`);
      [x,...(x.parts||[])].forEach(p=>{if(p.topic&&!s.topicById[p.topic])throw new Error(`${who}: unknown topic "${p.topic}"`)});
      if(isSelf(x)){
        if(!Array.isArray(x.rubric)||!x.rubric.length)throw new Error(`${who}: a self-assessed question needs a rubric`);
        const rs=x.rubric.reduce((a,c)=>a+(+c.pts||0),0);if(Math.abs(rs-x.pts)>1e-9)throw new Error(`${who}: the rubric adds up to ${r2(rs)}, not ${x.pts}`)}
      if(x.type==='case'&&x.parts){
        x.parts.forEach((p,k)=>{if(!XTYPES[p.type]||p.type==='case'||isSelf(p))throw new Error(`${who}: part ${k+1} has an invalid type "${p.type}"`)});
        if(x.parts.some(p=>p.pts!=null)){
          if(!x.parts.every(p=>p.pts>0))throw new Error(`${who}: give pts to every part or to none`);
          const ps=x.parts.reduce((a,p)=>a+p.pts,0);if(Math.abs(ps-x.pts)>1e-9)throw new Error(`${who}: the parts add up to ${r2(ps)}, not ${x.pts}`)}}
      sum+=x.pts}));
    if(Math.abs(sum-m.total)>1e-9)throw new Error(`mock "${m.id}": the questions add up to ${r2(sum)} points, not ${m.total}`);
  });
}
function registerSubject(def){
  try{
    if(!def||typeof def!=='object')throw new Error('registerSubject() needs an object');
    const slug=def.slug;
    if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug||''))throw new Error(`invalid slug "${slug}" (lowercase letters, digits and hyphens)`);
    if(slug==='home'||slug==='progress')throw new Error(`slug "${slug}" is reserved`);
    const s=Object.assign({name:slug,short:'',tagline:'',status:'',exams:[],topics:[],cheatsheet:[],glossary:[],quiz:[],exercises:[],flashcards:[],modules:[],mocks:[],mocksNote:'',overview:{}},def);
    s.sources=Object.assign({course:'Course exercise',practice:'Practice'},def.sources);
    if(typeof s.cheatsheet==='string')s.cheatsheet=[{html:s.cheatsheet}];
    s.topicById={};s.examById={};
    s.exams.forEach(x=>{if(!x.id)throw new Error('an exam has no id');s.examById[x.id]=x});
    s.topics.forEach(t=>{if(!t.id)throw new Error('a topic has no id');if(s.topicById[t.id])throw new Error(`duplicate topic id "${t.id}"`);
      if(t.exam&&!s.examById[t.exam])throw new Error(`topic "${t.id}": unknown exam "${t.exam}"`);s.topicById[t.id]=t});
    [['quiz',s.quiz],['exercises',s.exercises],['flashcards',s.flashcards]].forEach(([k,list])=>{const seen=new Set();list.forEach((x,i)=>{
      if(!x||!x.id)throw new Error(`${k}[${i}] has no id`);if(seen.has(x.id))throw new Error(`${k}: duplicate id "${x.id}"`);seen.add(x.id);
      if(x.topic&&!s.topicById[x.topic])throw new Error(`${k} "${x.id}": unknown topic "${x.topic}"`);
      if(k==='exercises'&&!XTYPES[x.type])throw new Error(`exercise "${x.id}": unknown type "${x.type}"`)})});
    checkMocks(s);
    // glossary: [{t, d, topic?, alias?}]; notions: the NOTION blocks of each sheet (data-notion="id"), ids unique in the subject
    s.glossary.forEach((g,i)=>{if(!g||!g.t||!g.d)throw new Error(`glossary[${i}] needs t (term) and d (definition)`);
      if(g.topic&&!s.topicById[g.topic])throw new Error(`glossary "${g.t}": unknown topic "${g.topic}"`)});
    s.notions={};const nseen=new Set();
    s.topics.forEach(t=>{s.notions[t.id]=[];String(t.sheet||'').replace(/data-notion="([^"]+)" data-ntitle="([^"]*)"/g,(_,id,title)=>{
      if(nseen.has(id))throw new Error(`duplicate notion id "${id}"`);nseen.add(id);s.notions[t.id].push({id,title})})});
    s.mods=s.modules.map(m=>{
      const base=m.use?MODULES[m.use]:null;
      if(m.use&&!base)throw new Error(`module "${m.use}" is not registered (load modules/… before subjects/… in index.html)`);
      const mod=Object.assign({},base||{},m);mod.tab=m.tab||m.use;
      if(!mod.tab||RESERVED.has(mod.tab))throw new Error(`module tab "${mod.tab}" is missing or reserved`);
      if(typeof mod.render!=='function')throw new Error(`module "${mod.tab}" has no render()`);
      if(m.css)addCss(`sub-${slug}-${mod.tab}`,m.css);
      return mod});
    SUBJECTS[slug]=s;
  }catch(e){const m=`Subject "${def&&def.slug}" not loaded: ${e.message}`;ERRORS.push(m);console.error(m)}
}
window.registerSubject=Rev.registerSubject=registerSubject;
window.registerModule=Rev.registerModule=registerModule;
Rev.registerExerciseType=registerExerciseType;
Rev.subject=slug=>SUBJECTS[slug];

/* ---------- per-subject state ---------- */
// notions: {notionId: 'ok'|'review'} (sheet buttons); w: {widgetId: record} (generators, trees, games, dialogues…). Older saves simply lack them.
const freshState=()=>({v:1,quiz:{},ex:{},cards:{},read:{},mod:{},mock:{},notions:{},w:{},last:0});
function stateOf(s){
  if(s._st)return s._st;
  let st=lsGet(subjKey(s.slug)),imported=false;
  if(!st&&s.legacy&&s.legacy.key){const old=lsGet(s.legacy.key);if(old){st=safe(()=>s.legacy.convert(old),null);imported=!!st}}
  st=Object.assign(freshState(),st&&typeof st==='object'?st:{});
  ['quiz','ex','cards','read','mod','mock','notions','w'].forEach(k=>{if(!st[k]||typeof st[k]!=='object')st[k]={}});
  s._st=st;
  if(imported){st.imported=Date.now();lsSet(subjKey(s.slug),st)}
  return st;
}
function saveState(s){const st=stateOf(s);st.last=Date.now();lsSet(subjKey(s.slug),st)}
function resetState(s){s._st=freshState();lsSet(subjKey(s.slug),s._st)}
// for assets/widgets.js: the saved state of a subject and its save function
Rev.stateOf=slug=>SUBJECTS[slug]?stateOf(SUBJECTS[slug]):null;
Rev.saveState=slug=>{if(SUBJECTS[slug])saveState(SUBJECTS[slug])};
Rev.subjects=()=>CATALOG.map(c=>SUBJECTS[c.slug]).filter(Boolean);
Rev.catalogList=()=>CATALOG.slice();
// in-memory view state (filters, quiz round, deck): survives tab switches, not reloads
const mem=(s,k,init)=>{const m=MEM[s.slug]||(MEM[s.slug]={});return m[k]||(m[k]=init())};

/* ---------- lookups and scope filters (exam, topic) ---------- */
const topicShort=(s,id)=>{const t=s.topicById[id];return t?(t.short||t.label||t.title):''};
const topicName=(s,id)=>{const t=s.topicById[id];return t?[t.label,t.title].filter(Boolean).join(' · '):''};
const examLabel=(s,id)=>(s.examById[id]||{}).label||'';
const examOf=(s,item)=>(s.topicById[item.topic]||{}).exam;
function scopeChips(s,items,f,extra=''){
  const exams=s.exams.filter(x=>items.some(i=>examOf(s,i)===x.id));
  const topics=s.topics.filter(t=>(!f.exam||t.exam===f.exam)&&items.some(i=>i.topic===t.id));
  let h='';
  if(exams.length>1)h+=`<div class="filters">${chips([['','All exams'],...exams.map(x=>[x.id,esc(x.label)])],f.exam,'exam')}</div>`;
  const tc=topics.length>1?chips([['','All topics'],...topics.map(t=>[t.id,esc(t.label||t.title)])],f.topic,'topic'):'';
  if(tc||extra)h+=`<div class="filters">${tc}${extra}</div>`;
  return h;
}
function bindScope(root,f,redo){
  root.querySelectorAll('[data-exam]').forEach(b=>b.onclick=()=>{f.exam=b.dataset.exam;f.topic='';redo()});
  root.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>{f.topic=b.dataset.topic;redo()});
}
const inScope=(s,f)=>i=>(!f.exam||examOf(s,i)===f.exam)&&(!f.topic||i.topic===f.topic);

/* ---------- routing: #home, #progress, #<slug>, #<slug>-<view>, #<slug>-<view>-<param> ---------- */
const hashFor=(slug,view,param)=>'#'+slug+(view&&view!=='overview'?'-'+view:'')+(param?'-'+param:'');
Rev.link=hashFor;
function parseHash(raw){
  let h=String(raw==null?location.hash:raw).replace(/^#/,'');
  try{h=decodeURIComponent(h)}catch(e){}
  if(!h||h==='home')return {page:'home'};
  if(h==='progress')return {page:'progress'};
  // site-wide pages registered by other files (Rev.addPage): #demo, #search…
  const xp=Object.keys(PAGES).find(k=>h===k||h.startsWith(k+'-'));
  if(xp)return {page:'extra',name:xp,param:h.slice(xp.length+1)};
  const slugs=CATALOG.map(c=>c.slug).concat(Object.keys(SUBJECTS)).sort((a,b)=>b.length-a.length);
  const slug=slugs.find(x=>h===x||h.startsWith(x+'-'));
  if(!slug)return {page:'home'};
  const s=SUBJECTS[slug];
  if(!s)return {page:'missing',slug};
  const rest=h.slice(slug.length+1);
  const view=rest?viewsOf(s).map(v=>v[0]).sort((a,b)=>b.length-a.length).find(v=>rest===v||rest.startsWith(v+'-')):'overview';
  if(!view)return {page:'subject',slug,view:'overview',param:''};
  return {page:'subject',slug,view,param:rest.slice(view.length+1)};
}

/* ---------- progress figures ---------- */
function modCtx(s,m){
  const st=stateOf(s);if(!st.mod[m.tab]||typeof st.mod[m.tab]!=='object')st.mod[m.tab]={};
  return {subject:s,module:m,data:m.data||{},state:st.mod[m.tab],save:()=>saveState(s),mem:mem(s,'mod:'+m.tab,()=>({})),
    h:Rev.h,u:U,topicShort:id=>topicShort(s,id),topicName:id=>topicName(s,id),
    scopeChips:(items,f,extra)=>scopeChips(s,items,f,extra),bindScope,inScope:f=>inScope(s,f),link:(view,param)=>hashFor(s.slug,view,param)};
}
const allNotions=s=>s.topics.flatMap(t=>(s.notions[t.id]||[]).map(n=>Object.assign({topic:t.id},n)));
const modRows=s=>s.mods.flatMap(m=>m.stats?safe(()=>m.stats(modCtx(s,m))||[],[]).map(r=>Object.assign({tab:m.tab},r)):[]);
function partsOf(s){ // completion parts of a subject: [{label, done, total}]
  const st=stateOf(s),P=[];
  const sheets=s.topics.filter(t=>t.sheet);
  if(sheets.length)P.push({label:'Sheets read',done:sheets.filter(t=>st.read[t.id]).length,total:sheets.length});
  const nAll=allNotions(s);
  if(nAll.length)P.push({label:'Notions understood',done:nAll.filter(n=>st.notions[n.id]==='ok').length,total:nAll.length});
  if(s.quiz.length)P.push({label:'Quiz: last answer correct',done:s.quiz.filter(q=>st.quiz[q.id]&&st.quiz[q.id].ok).length,total:s.quiz.length});
  if(s.exercises.length)P.push({label:'Exercises solved',done:s.exercises.filter(x=>st.ex[x.id]&&st.ex[x.id].ok).length,total:s.exercises.length});
  const rows=modRows(s).filter(r=>r.count!==false&&r.total);
  s.mods.forEach(m=>{const rs=rows.filter(r=>r.tab===m.tab);if(rs.length)P.push({label:rs[0].label||m.label,done:rs.reduce((a,r)=>a+r.done,0),total:rs.reduce((a,r)=>a+r.total,0)})});
  if(s.flashcards.length)P.push({label:'Flashcards known',done:s.flashcards.filter(c=>st.cards[c.id]==='known').length,total:s.flashcards.length});
  if(s.mocks.length)P.push({label:'Mock exams: best marks',done:r2(s.mocks.reduce((a,m)=>a+((st.mock[m.id]||{}).best||0),0)),total:s.mocks.reduce((a,m)=>a+m.total,0)});
  return P;
}
function subjectProgress(s){const P=partsOf(s);return {parts:P,pct:P.length?Math.round(100*P.reduce((a,p)=>a+p.done/p.total,0)/P.length):0,last:stateOf(s).last}}
function topicStats(s,t){
  const st=stateOf(s);
  const qs=s.quiz.filter(q=>q.topic===t.id),qd=qs.filter(q=>st.quiz[q.id]),qr=qd.filter(q=>st.quiz[q.id].ok);
  const xs=s.exercises.filter(x=>x.topic===t.id),xd=xs.filter(x=>st.ex[x.id]),xo=xd.filter(x=>st.ex[x.id].ok);
  const cs=s.flashcards.filter(c=>c.topic===t.id),ck=cs.filter(c=>st.cards[c.id]==='known');
  const ns=s.notions[t.id]||[],nk=ns.filter(n=>st.notions[n.id]==='ok'),nr=ns.filter(n=>st.notions[n.id]==='review');
  const mr=modRows(s).filter(r=>r.topic===t.id),mc=mr.filter(r=>r.count!==false);
  const pTot=xs.length+mc.reduce((a,r)=>a+r.total,0),pDone=xo.length+mc.reduce((a,r)=>a+r.done,0);
  // weakness score: quiz accuracy 50%, practice solved 30%, flashcards known and notions understood 20% (weights of missing parts are spread)
  const w=[];if(qs.length)w.push([.5,qd.length?qr.length/qd.length:0]);if(pTot)w.push([.3,pDone/pTot]);if(cs.length+ns.length)w.push([.2,(ck.length+nk.length)/(cs.length+ns.length)]);
  const sw=w.reduce((a,x)=>a+x[0],0),score=sw?w.reduce((a,x)=>a+x[0]*x[1],0)/sw:1;
  const touched=qd.length>0||xd.length>0||nk.length+nr.length>0||mr.some(r=>(r.tried!=null?r.tried:r.done)>0);
  return {t,qs,qd,qr,xs,xd,xo,cs,ck,ns,nk,nr,mr,read:!!st.read[t.id],score,touched};
}
const statRow=(label,a,b,txt)=>`<div class="stat"><span>${label}</span><span class="num">${txt||`${a}/${b}`}</span></div>${bar(a,b||1)}`;
const dateTxt=ts=>ts?new Date(ts).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'';
const emptyView=(title,what)=>`<div class="eyebrow">Nothing here yet</div><h2>${title}</h2>`+NOTE(`<b>Not added yet.</b> ${what} will appear here when this part of the subject is written.`);

/* ---------- home ---------- */
function renderHome(main){
  const lr=prefs.last?parseHash(prefs.last):null;
  const cont=lr&&lr.page==='subject'?`<p><a class="btn ghost small" href="${esc(prefs.last)}">Continue: ${esc(SUBJECTS[lr.slug].short||SUBJECTS[lr.slug].name)} · ${esc((viewsOf(SUBJECTS[lr.slug]).find(v=>v[0]===lr.view)||['',''])[1])}</a></p>`:'';
  main.innerHTML=`<div class="eyebrow">Bachelor 2 · Semester 3</div><h2>Ten subjects, one revision site</h2>
  <p class="lede">Pick a subject. Each one has topic sheets, a cheat sheet, a quiz, exercises, flashcards and its own progress page. Your progress is saved in this browser.</p>
  ${cont}<div class="subjects">${CATALOG.map(subjectCard).join('')}</div>
  <h3>How to revise with it</h3>
  <ol><li>Read the topic sheet. Open the worked examples and try them before reading the solution.</li><li>Do the quiz for that topic, then the exercises. Read every explanation, including for correct answers.</li><li>Use the flashcards for definitions and rules.</li><li>Check the subject's <b>Progress</b> tab to find your weakest topic, and <a href="#progress">Global progress</a> to compare subjects.</li></ol>
  ${PAGES.demo?'<p class="meta">How the interactive blocks of the sheets work (layers, glossary, step-by-step, decision trees, games, graphs, generators, sorting, dialogues): <a href="#demo">see the demo page</a>.</p>':''}`;
}
const ordBadge=slug=>isFinite(orderOf(slug))?`<span class="ord" title="Exam order" aria-label="Exam number ${orderOf(slug)+1}">${orderOf(slug)+1}</span>`:'';
function subjectCard(c){
  const s=SUBJECTS[c.slug];
  if(!s)return `<a class="subj todo" href="#${c.slug}">${ordBadge(c.slug)}<span class="eyebrow">${esc(c.short||'')}</span><b>${esc(c.name)}</b><small>Not added yet</small></a>`;
  const p=subjectProgress(s);
  const counts=[[s.topics.filter(t=>t.sheet).length,'sheet'],[s.quiz.length,'question'],[s.exercises.length,'exercise'],[s.flashcards.length,'card'],[s.mocks.length,'mock exam']].filter(x=>x[0]).map(([n,w])=>`${n} ${w}${n>1?'s':''}`).join(' · ');
  return `<a class="subj" href="#${s.slug}">${ordBadge(s.slug)}<span class="eyebrow">${esc(s.short||c.short||'')}</span><b>${esc(s.name)}</b>${EXAM_DATES[s.slug]?`<small class="exam-date">${esc(EXAM_DATES[s.slug])}</small>`:''}${s.status?`<small>${esc(s.status)}</small>`:''}
   <span class="stat"><span>Progress</span><span class="num">${p.pct}%</span></span>${bar(p.pct,100)}<small>${counts}</small></a>`;
}
function renderMissing(main,slug){
  const c=CATALOG.find(x=>x.slug===slug)||{name:slug};
  main.innerHTML=`<div class="eyebrow">Not added yet</div><h2>${esc(c.name)}</h2><p class="lede">This subject has no content yet. It will be added in a later session (see PROGRESS.md).</p><p><a class="btn ghost" href="#home">Back to all subjects</a></p>`;
}

/* ---------- global progress, export and import ---------- */
function renderGlobal(main,flash){
  const built=CATALOG.filter(c=>SUBJECTS[c.slug]).map(c=>SUBJECTS[c.slug]);
  const avg=built.length?Math.round(built.reduce((a,s)=>a+subjectProgress(s).pct,0)/built.length):0;
  const card=c=>{const s=SUBJECTS[c.slug];
    if(!s)return `<div class="panel" style="border-style:dashed;background:transparent"><h4>${esc(c.name)}</h4><p class="meta">Not added yet.</p></div>`;
    const p=subjectProgress(s);
    return `<div class="panel"><h4><a href="#${s.slug}-progress">${esc(s.name)}</a></h4>${s.status?`<p class="meta" style="margin:0">${esc(s.status)}</p>`:''}
     ${statRow('<b>Overall</b>',p.pct,100,p.pct+'%')}${p.parts.map(x=>statRow(esc(x.label),x.done,x.total)).join('')}
     <p class="meta">${p.last?'Last activity: '+dateTxt(p.last):'No activity yet.'}</p></div>`};
  main.innerHTML=`<div class="eyebrow">All subjects</div><h2>Global progress</h2>
  <p class="lede">Each subject's percentage is the average of its parts: sheets read, quiz questions whose last answer was right, exercises solved, module items solved (such as journal drills), flashcards known and the best marks of the mock exams.</p>
  <div class="panel" style="margin-bottom:16px">${statRow(`Average over the ${built.length} subject${built.length>1?'s':''} added so far`,avg,100,avg+'%')}<p class="meta">${CATALOG.length-built.length} of ${CATALOG.length} subjects not added yet.</p></div>
  <div class="grid2">${CATALOG.map(card).join('')}</div>
  <h3>Move your progress to another browser</h3>
  <p>Progress is saved in this browser only. To continue elsewhere, export it here and import the file in the other browser.</p>
  <div class="row"><button type="button" class="btn small" id="exp">Export progress (.json)</button><label class="btn small ghost" for="imp">Import a file…</label><input type="file" id="imp" accept=".json,application/json" class="sr-only"></div>
  <div id="impmsg" class="result"></div>`;
  const msg=$('#impmsg');
  if(flash){msg.className='result ok';msg.textContent=flash}
  $('#exp').onclick=()=>{
    const data={app:'revledger',v:1,exported:new Date().toISOString(),subjects:{}};
    CATALOG.forEach(c=>{const st=SUBJECTS[c.slug]?stateOf(SUBJECTS[c.slug]):lsGet(subjKey(c.slug));if(st)data.subjects[c.slug]=st});
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data)],{type:'application/json'}));
    a.download=`revision-progress-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
  };
  $('#imp').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();
    r.onload=()=>{let d=null;try{d=JSON.parse(r.result)}catch(err){}
      if(!d||d.app!=='revledger'||!d.subjects||typeof d.subjects!=='object'){msg.className='result ko';msg.textContent='This file is not a Revision Ledger progress export.';return}
      const slugs=Object.keys(d.subjects).filter(k=>/^[a-z0-9]+(-[a-z0-9]+)*$/.test(k)&&d.subjects[k]&&typeof d.subjects[k]==='object');
      msg.className='result';msg.innerHTML=`<span class="confirm">Replace the saved progress of ${slugs.length} subject${slugs.length>1?'s':''} (${esc(slugs.join(', '))}) with this file? <button type="button" class="btn small" id="iy">Yes, import</button><button type="button" class="btn ghost small" id="in">Cancel</button></span>`;
      $('#iy').onclick=()=>{slugs.forEach(k=>{lsSet(subjKey(k),d.subjects[k]);if(SUBJECTS[k])delete SUBJECTS[k]._st});renderGlobal(main,'Progress imported.')};
      $('#in').onclick=()=>{msg.innerHTML=''};
    };r.readAsText(f)};
}

/* ---------- subject: overview ---------- */
function renderOverview(s,main){
  const st=stateOf(s),o=s.overview||{},bl=o.blurbs||{};
  const card=(href,eyebrow,title,text,extra='')=>`<a href="${href}"><span class="eyebrow">${eyebrow}</span><b>${title}</b><small>${text}</small>${extra}</a>`;
  const cards=s.topics.map(t=>card(hashFor(s.slug,'sheets',t.id),esc([t.label,examLabel(s,t.exam)].filter(Boolean).join(' · ')),t.title,t.summary||'',st.read[t.id]?'<small class="done-mark">✓ read</small>':''));
  if(s.cheatsheet.length)cards.push(card(hashFor(s.slug,'cheat'),'Summary','Cheat sheet',bl.cheat||'Formulas and rules on one page'));
  if(s.quiz.length){const nc=s.quiz.filter(q=>q.src==='course').length;cards.push(card(hashFor(s.slug,'quiz'),`${s.quiz.length} questions`,'Quiz',bl.quiz||(nc?`${nc} from your course exercises`:'One question at a time, corrected')))}
  if(s.exercises.length)cards.push(card(hashFor(s.slug,'exercises'),`${s.exercises.length} exercises`,'Exercises',bl.exercises||'Calculations, short answers, matching, cases'));
  s.mods.forEach(m=>{const c=m.card?safe(()=>m.card(modCtx(s,m))||{},{}):{};cards.push(card(hashFor(s.slug,m.tab),c.eyebrow||'Practice',c.title||esc(m.label||m.tab),c.text||''))});
  if(s.flashcards.length)cards.push(card(hashFor(s.slug,'flashcards'),`${s.flashcards.length} cards`,'Flashcards',bl.cards||'Definitions and rules'));
  if(s.mocks.length){const best=s.mocks.filter(m=>st.mock[m.id]).length;
    cards.push(card(hashFor(s.slug,'mocks'),`${s.mocks.length} mock exam${s.mocks.length>1?'s':''}`,'Mock exams',bl.mocks||'Timed papers with a mark, a corrected paper and a print version',best?`<small class="done-mark">✓ ${best} taken</small>`:''))}
  const pending=s.exams.filter(x=>x.empty&&!s.topics.some(t=>t.exam===x.id)).map(x=>NOTE(`<b>${esc(x.label)}:</b> ${x.empty}`)).join('');
  main.innerHTML=`<div class="eyebrow">${o.eyebrow||esc(s.name)}</div><h2>${o.title||esc(s.name)}</h2>${o.lede?`<p class="lede">${o.lede}</p>`:''}
  <div class="toc">${cards.join('')}</div>${pending}${o.html||''}`;
}

/* ---------- subject: topic sheets ---------- */
function renderSheets(s,main,param){
  const st=stateOf(s),t=param&&s.topicById[param];
  const readMark=t=>st.read[t.id]?'<small class="done-mark">✓ read</small>':'';
  if(!t){
    if(!s.topics.length){main.innerHTML=emptyView('Topic sheets','The topic sheets');return}
    const group=ts=>`<div class="toc">${ts.map(t=>`<a href="${hashFor(s.slug,'sheets',t.id)}"><span class="eyebrow">${esc(t.label||'')}</span><b>${t.title}</b><small>${t.summary||''}</small>${readMark(t)}</a>`).join('')}</div>`;
    const loose=s.topics.filter(t=>!t.exam);
    const body=s.exams.length?s.exams.map(x=>{const ts=s.topics.filter(t=>t.exam===x.id);
      return `<h3>${esc(x.label)}${x.scope?` <span class="pill src">${esc(x.scope)}</span>`:''}</h3>`+(ts.length?group(ts):NOTE(x.empty||'No topic added yet.'))}).join('')+(loose.length?group(loose):''):group(s.topics);
    main.innerHTML=`<div class="eyebrow">${esc(s.name)}</div><h2>Topic sheets</h2><p class="lede">One sheet per topic: rules, formulas, worked examples and exam traps. Mark a sheet as read when you are done with it.</p>${body}`;
    return;
  }
  const i=s.topics.indexOf(t),prev=s.topics[i-1],next=s.topics[i+1];
  const hasQuiz=s.quiz.some(q=>q.topic===t.id);
  main.innerHTML=`<div class="sheetnav">${s.topics.map(x=>`<a class="chip" href="${hashFor(s.slug,'sheets',x.id)}" ${x===t?'aria-current="page"':''}>${esc(x.label||x.short||x.title)}${st.read[x.id]?' ✓':''}</a>`).join('')}${t.exam?`<span class="pill">${esc(examLabel(s,t.exam))}</span>`:''}</div>
  <article>${t.sheet||NOTE('<b>No sheet yet.</b> This topic is listed but its sheet has not been written.')}</article>
  <div class="pager"><button type="button" class="btn small ${st.read[t.id]?'':'ghost'}" id="readBtn">${st.read[t.id]?'✓ Read':'Mark as read'}</button>${hasQuiz?'<button type="button" class="btn small ghost" id="quizBtn">Quiz on this topic</button>':''}
   <span class="nav">${prev?`<a class="btn small ghost" href="${hashFor(s.slug,'sheets',prev.id)}">← ${esc(prev.label||prev.title)}</a>`:''}${next?`<a class="btn small ghost" href="${hashFor(s.slug,'sheets',next.id)}">${esc(next.label||next.title)} →</a>`:''}</span></div>`;
  $('#readBtn').onclick=e=>{if(st.read[t.id])delete st.read[t.id];else st.read[t.id]=Date.now();saveState(s);
    const b=e.currentTarget,on=!!st.read[t.id];b.textContent=on?'✓ Read':'Mark as read';b.classList.toggle('ghost',!on);
    const c=main.querySelector('.sheetnav [aria-current]');if(c)c.textContent=(t.label||t.short||t.title)+(on?' ✓':'')};
  if(hasQuiz)$('#quizBtn').onclick=()=>{const m=mem(s,'quiz',quizMem);m.f={exam:'',topic:t.id};m.built=false;location.hash=hashFor(s.slug,'quiz')};
}

/* ---------- subject: cheat sheet ---------- */
function renderCheat(s,main){
  if(!s.cheatsheet.length){main.innerHTML=emptyView('Cheat sheet','The cheat sheet');return}
  main.innerHTML=s.cheatsheet.map((c,i)=>(i?'<hr class="sep">':'')+(c.exam&&s.cheatsheet.length>1?`<p><span class="pill">${esc(examLabel(s,c.exam))}</span></p>`:'')+(c.title?`<h2>${c.title}</h2>`:'')+(c.html||'')).join('');
}

/* ---------- subject: quiz (MCQ, one at a time) ---------- */
const quizMem=()=>({f:{exam:'',topic:''},src:'all',wrong:false,order:[],pos:0,right:0,done:0,built:false});
const LET='abcdefghij';
function renderQuiz(s,main){
  if(!s.quiz.length){main.innerHTML=emptyView('Quiz','The quiz questions');return}
  const st=stateOf(s),m=mem(s,'quiz',quizMem);
  const build=()=>{m.order=U.shuffle(s.quiz.filter(inScope(s,m.f)).filter(q=>m.src==='all'||q.src===m.src).filter(q=>!m.wrong||(st.quiz[q.id]&&!st.quiz[q.id].ok)).map(q=>q.id));m.pos=0;m.right=0;m.done=0;m.built=true};
  if(!m.built)build();
  const srcs=[...new Set(s.quiz.map(q=>q.src).filter(Boolean))];
  main.innerHTML=`<div class="eyebrow">Self-test</div><h2>Quiz</h2><p class="lede">One question at a time. Pick an answer to see the correction.</p>
  ${scopeChips(s,s.quiz,m.f)}
  <div class="filters">${srcs.length>1?chips([['all','All questions'],...srcs.map(k=>[k,esc(s.sources[k]||k)+' only'])],m.src,'src'):''}<button type="button" class="chip" id="onlyWrong" aria-pressed="${m.wrong}">Wrong last time only</button></div>
  <div id="qbox"></div>`;
  const redo=()=>{build();renderQuiz(s,main)};
  bindScope(main,m.f,redo);
  main.querySelectorAll('[data-src]').forEach(b=>b.onclick=()=>{m.src=b.dataset.src;redo()});
  $('#onlyWrong').onclick=()=>{m.wrong=!m.wrong;redo()};
  showQ(s,m,build);
}
function showQ(s,m,build){
  const box=$('#qbox'),st=stateOf(s);
  if(!m.order.length){box.innerHTML='<div class="qcard"><p class="qtext">No question in this selection.</p></div>';return}
  if(m.pos>=m.order.length){box.innerHTML=`<div class="qcard"><p class="qtext">Round finished: ${m.right} / ${m.done} correct.</p><button type="button" class="btn" id="again">Start a new round</button></div>`;$('#again').onclick=()=>{build();showQ(s,m,build)};return}
  const q=s.quiz.find(x=>x.id===m.order[m.pos]);
  box.innerHTML=`<div class="qcard"><div class="qmeta"><span class="pill ${q.src==='course'?'src':''}">${esc(s.sources[q.src]||q.src||'')}</span><span>${esc(topicShort(s,q.topic))}</span><span class="score" style="margin-left:auto">Q ${m.pos+1}/${m.order.length} · score ${m.right}/${m.done}</span></div>
  <p class="qtext">${q.q}</p><div class="opts">${q.o.map((o,i)=>`<button type="button" class="opt" data-i="${i}"><span class="k">${LET[i]}</span><span>${o}</span></button>`).join('')}</div><div id="fb"></div></div>`;
  box.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
    const i=+b.dataset.i,ok=i===q.a;
    box.querySelectorAll('.opt').forEach(x=>{x.disabled=true;const k=+x.dataset.i;if(k===q.a)x.classList.add('right');else if(k===i)x.classList.add('wrong')});
    m.done++;if(ok)m.right++;
    st.quiz[q.id]={ok,n:((st.quiz[q.id]||{}).n||0)+1};saveState(s);
    $('#fb').innerHTML=`<div class="feedback ${ok?'ok':'ko'}"><b class="v">${ok?'Correct.':'Not quite. The answer is '+LET[q.a]+'.'}</b> ${q.e||''}</div><div class="row" style="margin-top:12px"><button type="button" class="btn" id="next">Next question</button></div>`;
    const n=$('#next');n.focus();n.onclick=()=>{m.pos++;showQ(s,m,build)};
  });
}

/* ---------- generic exercise types ----------
   mount(box, item, api) draws the answer area and returns {check(), answer(), instant?, selfAssess?}.
   api = {v (generated data or null), uid (unique id prefix), deferred (inside a case or a mock exam: no instant correction), report(result), submit()}.
   check() returns {ok, score (0..1, partial credit for mock exams), msg, warn, empty, showE}. */
function numParts(x,v){
  const ps=x.parts||[{label:x.label,answer:x.answer,unit:x.unit,tol:x.tol,tolPct:x.tolPct}];
  return ps.map(p=>({label:val(p.label,v)||'Answer',answer:val(p.answer,v),unit:p.unit!=null?p.unit:x.unit,tol:p.tol!=null?p.tol:x.tol,tolPct:p.tolPct!=null?p.tolPct:x.tolPct,w:p.pts>0?p.pts:1}));
}
const within=(u,a,tol,tolPct)=>!isNaN(u)&&Math.abs(u-a)<=Math.max(tol!=null?tol:0.01,tolPct!=null?Math.abs(a)*tolPct/100:0)+1e-9;
const numType={label:'Numeric',mount(box,x,api){
  const ps=numParts(x,api.v);
  box.innerHTML=ps.map((p,i)=>`<div class="ansrow"><label for="${api.uid}-${i}">${p.label}</label><input type="text" id="${api.uid}-${i}" inputmode="decimal" autocomplete="off">${p.unit?`<span class="unit">${esc(p.unit)}</span>`:''}</div>`).join('');
  const ins=[...box.querySelectorAll('input')];ins.forEach(i=>i.onkeydown=e=>{if(e.key==='Enter')api.submit()});
  return {check(){
      if(ins.every(i=>!i.value.trim()))return {empty:true};
      let n=0;const sc=[];ps.forEach((p,i)=>{const ok=within(parseNum(ins[i].value),p.answer,p.tol,p.tolPct);ins[i].classList.toggle('good',ok);ins[i].classList.toggle('bad',!ok);if(ok)n++;sc.push({score:ok?1:0,w:p.w})});
      const bad=ins.filter(i=>i.value.trim()&&isNaN(parseNum(i.value))).length;
      return {ok:n===ps.length,score:wScore(sc),msg:(ps.length>1&&n<ps.length?`${n} of ${ps.length} answers correct.`:'')+(bad?' Write numbers only (e.g. 1 250.50 or −3 000).':'')}},
    answer:()=>ps.map(p=>`${p.label}: <b class="num">${fmt(U.round(p.answer,4))}${p.unit?' '+esc(p.unit):''}</b>`).join('<br>')};
}};
registerExerciseType('numeric',numType);
registerExerciseType('calc',Object.assign({},numType,{label:'Calculation'}));
registerExerciseType('text',{label:'Short answer',mount(box,x,api){
  const ps=(x.parts||[{label:x.label,accept:x.accept}]).map(p=>({label:val(p.label,api.v)||'Answer',accept:[].concat(val(p.accept,api.v)||[]).map(String)}));
  const strict=x.accents==='strict';
  box.innerHTML=ps.map((p,i)=>`<div class="ansrow"><label for="${api.uid}-${i}">${p.label}</label><input type="text" class="txt" id="${api.uid}-${i}" autocomplete="off" autocapitalize="off" spellcheck="false"></div>`).join('');
  const ins=[...box.querySelectorAll('input')];ins.forEach(i=>i.onkeydown=e=>{if(e.key==='Enter')api.submit()});
  return {check(){
      if(ins.every(i=>!i.value.trim()))return {empty:true};
      let n=0;const notes=[];
      ps.forEach((p,i)=>{const u=norm(ins[i].value);let ok=false,warn=false;
        if(u){if(p.accept.some(a=>norm(a)===u))ok=true;
          else{const hit=p.accept.find(a=>noAcc(norm(a))===noAcc(u));
            if(hit){if(strict)notes.push(`Check the accents: “${esc(hit)}”.`);else{ok=true;warn=true;notes.push(`Accepted, but mind the accents: “${esc(hit)}”.`)}}}}
        ins[i].classList.toggle('good',ok&&!warn);ins[i].classList.toggle('warn',warn);ins[i].classList.toggle('bad',!ok);if(ok)n++});
      return {ok:n===ps.length,score:n/ps.length,warn:notes.length>0,msg:[ps.length>1&&n<ps.length?`${n} of ${ps.length} correct.`:'',...notes].filter(Boolean).join(' ')}},
    answer:()=>ps.map(p=>`${p.label}: <b>${esc(p.accept[0])}</b>${p.accept.length>1?` <small style="color:var(--muted)">(also accepted: ${p.accept.slice(1).map(esc).join(', ')})</small>`:''}`).join('<br>')};
}});
registerExerciseType('mcq',{label:'Multiple choice',mount(box,x,api){
  const multi=Array.isArray(x.a),o=val(x.o,api.v),right=new Set(multi?x.a:[x.a]);
  box.innerHTML=`<div class="opts">${o.map((t,i)=>`<button type="button" class="opt" data-i="${i}" ${multi||api.deferred?'aria-pressed="false"':''}><span class="k">${LET[i]}</span><span>${t}</span></button>`).join('')}</div>${multi?'<p class="hint">Several answers can be right: select all that apply, then Check.</p>':''}`;
  const bs=[...box.querySelectorAll('.opt')];
  const mark=sel=>bs.forEach(b=>{const i=+b.dataset.i;b.disabled=true;b.classList.toggle('right',right.has(i));b.classList.toggle('wrong',sel.has(i)&&!right.has(i))});
  const answer=()=>`Answer: <b>${[...right].sort().map(i=>LET[i]+'. '+o[i]).join('; ')}</b>`;
  if(!multi&&!api.deferred){bs.forEach(b=>b.onclick=()=>{const i=+b.dataset.i;mark(new Set([i]));api.report({ok:right.has(i),showE:true,msg:right.has(i)?'':`The answer is ${LET[x.a]}.`})});return {instant:true,answer}}
  bs.forEach(b=>b.onclick=()=>{if(!multi)bs.forEach(z=>{if(z!==b)z.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed',String(b.getAttribute('aria-pressed')!=='true'))});
  return {check(){
      const sel=new Set(bs.filter(b=>b.getAttribute('aria-pressed')==='true').map(b=>+b.dataset.i));
      if(!sel.size)return {empty:true};
      mark(sel);const ok=sel.size===right.size&&[...sel].every(i=>right.has(i));
      return {ok,score:ok?1:0,showE:true,msg:ok?'':`The right answer${right.size>1?'s are':' is'} ${[...right].sort().map(i=>LET[i]).join(', ')}.`}},answer};
}});
registerExerciseType('match',{label:'Matching',mount(box,x,api){
  const pairs=val(x.pairs,api.v),opts=U.shuffle([...new Set(pairs.map(p=>String(p[1])).concat((x.extra||[]).map(String)))]);
  box.innerHTML=pairs.map((p,i)=>`<div class="mrow"><label for="${api.uid}-${i}">${p[0]}</label><select id="${api.uid}-${i}"><option value="">Choose…</option>${opts.map(o=>`<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select></div>`).join('');
  const rows=[...box.querySelectorAll('.mrow')];
  return {check(){
      if(rows.every(r=>!r.querySelector('select').value))return {empty:true};
      let n=0;rows.forEach((r,i)=>{const sel=r.querySelector('select'),ok=sel.value===String(pairs[i][1]);r.classList.toggle('good',ok);r.classList.toggle('bad',!ok);sel.classList.toggle('good',ok);sel.classList.toggle('bad',!ok);if(ok)n++});
      return {ok:n===pairs.length,score:n/pairs.length,msg:n<pairs.length?`${n} of ${pairs.length} pairs correct.`:''}},
    answer:()=>T(['Item','Match'],pairs.map(p=>[p[0],esc(p[1])]))};
}});
registerExerciseType('order',{label:'Ordering',mount(box,x,api){
  const items=val(x.items,api.v),cur=items.map((t,i)=>i);
  if(items.length>1){let g=0;do U.shuffle(cur);while(cur.every((k,i)=>k===i)&&g++<20)}
  // ↑ ↓ buttons (keyboard, touch) or drag by the ⠿ handle (mouse and finger, pointer events)
  const draw=focus=>{
    box.innerHTML=`<ol class="olist">${cur.map((k,pos)=>`<li><span class="grip" aria-hidden="true" title="Drag to move">⠿</span><span class="n">${pos+1}</span><span class="t">${items[k]}</span><span class="mv"><button type="button" class="up" aria-label="Move up" ${pos?'':'disabled'}>↑</button><button type="button" class="dn" aria-label="Move down" ${pos<cur.length-1?'':'disabled'}>↓</button></span></li>`).join('')}</ol>`;
    box.querySelectorAll('li').forEach((li,pos)=>{li.querySelector('.up').onclick=()=>move(pos,-1);li.querySelector('.dn').onclick=()=>move(pos,1);
      li.querySelector('.grip').onpointerdown=e=>drag(e,pos)});
    if(focus){const b=box.querySelectorAll('li')[focus[0]].querySelector(focus[1]);(b.disabled?box.querySelectorAll('li')[focus[0]].querySelector(focus[1]==='.up'?'.dn':'.up'):b).focus()}};
  const move=(pos,d)=>{[cur[pos],cur[pos+d]]=[cur[pos+d],cur[pos]];draw([pos+d,d<0?'.up':'.dn'])};
  const drag=(e,from)=>{
    const lis=[...box.querySelectorAll('li')];
    if(lis.length<2||lis[0].querySelector('.dn').disabled)return; // locked (handed-in mock)
    e.preventDefault();const li=lis[from];li.classList.add('dragging');let to=from;
    const mvH=ev=>{let i=lis.findIndex(x=>{const r=x.getBoundingClientRect();return ev.clientY<r.top+r.height/2});if(i<0)i=lis.length;
      to=i>from?i-1:i;lis.forEach((x,k)=>{x.classList.toggle('drop-before',to!==from&&k===i);x.classList.toggle('drop-after',to!==from&&i===lis.length&&k===lis.length-1)})};
    const up=()=>{document.removeEventListener('pointermove',mvH);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);
      if(to!==from){const k=cur.splice(from,1)[0];cur.splice(to,0,k);draw();const mq=box.closest('.mq');if(mq)mq.dataset.touched='1';box.dispatchEvent(new Event('change',{bubbles:true}))}
      else{li.classList.remove('dragging');lis.forEach(x=>x.classList.remove('drop-before','drop-after'))}};
    document.addEventListener('pointermove',mvH);document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up)};
  draw();
  return {check(){let n=0;box.querySelectorAll('li').forEach((li,pos)=>{const ok=cur[pos]===pos;li.classList.toggle('good',ok);li.classList.toggle('bad',!ok);if(ok)n++});
      return {ok:n===items.length,score:n/items.length,msg:n<items.length?`${n} of ${items.length} in the right place.`:''}},
    answer:()=>`<ol>${items.map(t=>`<li>${t}</li>`).join('')}</ol>`};
}});
registerExerciseType('case',{label:'Case study',mount(box,x,api){
  const parts=x.parts||[];
  if(!parts.length)return {selfAssess:true,answer:()=>''};
  box.innerHTML=parts.map(p=>`<div class="part">${p.q?`<div class="part-q">${val(p.q,api.v)}${p.pts?` <span class="ppts">(${ptsTxt(p.pts)})</span>`:''}</div>`:''}<div class="part-body"></div></div>`).join('');
  const bodies=box.querySelectorAll('.part-body');
  const subs=parts.map((p,i)=>{const ty=XTYPES[p.type];if(!ty||p.type==='case'||isSelf(p))throw new Error(`part ${i+1} has an invalid type "${p.type}"`);
    return ty.mount(bodies[i],p,{v:api.v,uid:api.uid+'p'+i,deferred:true,submit:api.submit,report:()=>{}})});
  return {check(){
      const rs=subs.map(z=>z.check());if(rs.every(r=>r.empty))return {empty:true};
      const n=rs.filter(r=>r.ok).length,warns=rs.map((r,i)=>r.warn?`(${LET[i]}) ${r.msg}`:'').filter(Boolean);
      const sc=rs.map(r=>r.empty?0:(r.score!=null?r.score:(r.ok?1:0)));
      return {ok:n===rs.length,score:wScore(sc.map((score,i)=>({score,w:parts[i].pts>0?parts[i].pts:1}))),parts:sc,warn:warns.length>0,msg:[n<rs.length?`${n} of ${rs.length} parts correct.`:'',...warns].filter(Boolean).join(' ')}},
    answer:()=>subs.map((z,i)=>`<div class="part-a"><b>${LET[i]}.</b> ${z.answer()}</div>`).join('')};
}});
// written answer: a text area, marked by the student with the rubric [{c: criterion, pts}] (mock exams) or "Did you get it right?" (Exercises tab)
const rubricTable=x=>x.rubric&&x.rubric.length?'<p><b>Marking grid</b></p>'+T(['Criterion','Points'],x.rubric.map(c=>[c.c,fmt(c.pts)]),[1]):'';
registerExerciseType('written',{label:'Written answer',mount(box,x,api){
  box.innerHTML=`<label class="sr-only" for="${api.uid}-w">Your answer</label><textarea id="${api.uid}-w" rows="${x.lines||6}" placeholder="Write your answer here."></textarea>`;
  return {selfAssess:true,answer:()=>rubricTable(x)};
}});
Rev.types=XTYPES;

let xUid=0;
const recLabel=r=>r?(r.ok?'<span class="ok-t">✓ solved</span>':'<span class="ko-t">✗ last try wrong</span>'):'';
function exerciseCard(s,x){
  const st=stateOf(s),ty=XTYPES[x.type],el=document.createElement('div');el.className='drill xcard';
  let v=null,inst=null;
  const report=r=>{
    const prev=st.ex[x.id]||{};st.ex[x.id]={ok:!!r.ok,n:(prev.n||0)+1};saveState(s);
    el.querySelector('.xstat').innerHTML=recLabel(st.ex[x.id]);
    const e=x.e&&(r.ok||r.showE)?' '+val(x.e,v):'',hint=!r.ok&&x.hint?` <i>Hint:</i> ${val(x.hint,v)}`:'';
    el.querySelector('.xres').innerHTML=`<div class="feedback ${r.ok?'ok':'ko'}"><b class="v">${r.ok?'Correct.':'Not yet.'}</b> ${r.msg||''}${e}${hint}</div>`;
  };
  const toggleSol=()=>{
    const bx=el.querySelector('.solbox');if(bx.innerHTML){bx.innerHTML='';return}
    const ans=inst&&inst.answer?inst.answer():'',sol=x.solution?val(x.solution,v):(x.e?`<p>${val(x.e,v)}</p>`:'');
    bx.innerHTML=`<h4>Solution</h4>${ans?`<div class="answer">${ans}</div>`:''}${sol}`;
    if(inst&&inst.selfAssess){bx.insertAdjacentHTML('beforeend',`<div class="row" style="margin-top:12px"><span>Did you get it right?</span><button type="button" class="btn small" data-sa="1">Yes</button><button type="button" class="btn small ghost" data-sa="0">Not yet</button></div>`);
      bx.querySelectorAll('[data-sa]').forEach(b=>b.onclick=()=>report({ok:b.dataset.sa==='1',msg:b.dataset.sa==='1'?'Marked as solved.':'Marked to redo.'}))}
  };
  const draw=()=>{
    try{
      v=x.gen?x.gen(U):null;const uid='x'+(++xUid);
      el.innerHTML=`<div class="qmeta">${x.topic?`<span class="pill">${esc(topicShort(s,x.topic))}</span>`:''}<span class="pill src">${esc(ty.label)}</span><b class="xtitle">${x.title||''}</b><span class="xstat">${recLabel(st.ex[x.id])}</span></div>
      ${x.q?`<div class="prompt">${val(x.q,v)}</div>`:''}<div class="xbody"></div>
      <div class="row" style="margin-top:12px"><button type="button" class="btn small chk">Check</button><button type="button" class="btn small ghost bsol">Solution</button><button type="button" class="btn small ghost bre">${x.gen?'New numbers':'Reset'}</button></div>
      <div class="xres" aria-live="polite"></div><div class="box solbox"></div>`;
      const chk=el.querySelector('.chk');
      inst=ty.mount(el.querySelector('.xbody'),x,{v,uid,report,submit:()=>chk.click(),deferred:false});
      if(inst.instant||inst.selfAssess)chk.remove();
      chk.onclick=()=>{const r=inst.check();if(r.empty){el.querySelector('.xres').innerHTML='<div class="result ko">Answer first, then check.</div>';return}report(r)};
      el.querySelector('.bsol').onclick=toggleSol;
      el.querySelector('.bre').onclick=draw;
      if(Rev.hydrate)Rev.hydrate(el,{slug:s.slug,view:'exercises'});
    }catch(e){console.error(`Exercise "${x.id}":`,e);el.innerHTML=`<div class="trap"><b>Broken exercise</b>${esc(x.id)}: ${esc(e.message)}</div>`}
  };
  draw();return el;
}
Rev.exerciseCard=(slug,item)=>exerciseCard(SUBJECTS[slug],item);

/* ---------- subject: exercises ---------- */
function renderExercises(s,main){
  const more=s.mods.length?`<div class="panel" style="margin-bottom:16px"><b>More practice for this subject:</b> ${s.mods.map(m=>`<a href="${hashFor(s.slug,m.tab)}">${esc(m.label||m.tab)}</a>`).join(' · ')}</div>`:'';
  if(!s.exercises.length){main.innerHTML=emptyView('Exercises','The exercises')+more;return}
  const st=stateOf(s),m=mem(s,'ex',()=>({f:{exam:'',topic:''},type:'',open:false}));
  const types=[...new Set(s.exercises.map(x=>x.type))];
  main.innerHTML=`<div class="eyebrow">Practice</div><h2>Exercises</h2><p class="lede">Calculations, short answers, matching, ordering and cases. "Check" corrects your answer; "Solution" shows the worked answer. "New numbers" gives a fresh version of a calculation.</p>${more}
  ${scopeChips(s,s.exercises,m.f)}
  <div class="filters">${types.length>1?chips([['','All types'],...types.map(t=>[t,esc(XTYPES[t].label)])],m.type,'xt'):''}<button type="button" class="chip" id="onlyOpen" aria-pressed="${m.open}">Not solved yet</button></div>
  <div id="xlist"></div>`;
  const redo=()=>renderExercises(s,main);
  bindScope(main,m.f,redo);
  main.querySelectorAll('[data-xt]').forEach(b=>b.onclick=()=>{m.type=b.dataset.xt;redo()});
  $('#onlyOpen').onclick=()=>{m.open=!m.open;redo()};
  const list=s.exercises.filter(inScope(s,m.f)).filter(x=>!m.type||x.type===m.type).filter(x=>!m.open||!(st.ex[x.id]&&st.ex[x.id].ok));
  const box=$('#xlist');
  if(!list.length)box.innerHTML='<p>No exercise in this selection.</p>';
  list.forEach(x=>box.appendChild(exerciseCard(s,x)));
}

/* ---------- subject: flashcards ---------- */
function renderCards(s,main){
  if(!s.flashcards.length){main.innerHTML=emptyView('Flashcards','The flashcards');return}
  const st=stateOf(s),m=mem(s,'cards',()=>({f:{exam:'',topic:''},again:false,deck:[],pos:0,back:false,built:false}));
  const build=()=>{m.deck=U.shuffle(s.flashcards.filter(inScope(s,m.f)).filter(c=>!m.again||st.cards[c.id]!=='known').map(c=>c.id));m.pos=0;m.back=false;m.built=true};
  if(!m.built)build();
  main.innerHTML=`<div class="eyebrow">Memorise</div><h2>Flashcards</h2><p class="lede">Tap the card to flip it. Mark it "Got it" or "Again"; "Again" cards come back when you filter on them.</p>
  ${scopeChips(s,s.flashcards,m.f,`<button type="button" class="chip" id="onlyAgain" aria-pressed="${m.again}">Not yet known only</button>`)}<div id="cbox" class="fc-wrap"></div>`;
  bindScope(main,m.f,()=>{build();renderCards(s,main)});
  $('#onlyAgain').onclick=()=>{m.again=!m.again;build();renderCards(s,main)};
  const show=()=>{
    const box=$('#cbox');
    if(!m.deck.length){box.innerHTML='<p>No cards left in this selection. Every card here is marked "Got it".</p>';return}
    if(m.pos>=m.deck.length){box.innerHTML=`<p>Deck finished.</p><button type="button" class="btn" id="re">Shuffle again</button>`;$('#re').onclick=()=>{build();show()};return}
    const c=s.flashcards.find(x=>x.id===m.deck[m.pos]);
    box.innerHTML=`<div class="score">${esc(topicShort(s,c.topic))} · card ${m.pos+1}/${m.deck.length}</div>
    <div class="fc ${m.back?'back':''}" id="fc" tabindex="0" role="button" aria-label="Flip card"><span class="side">${m.back?'Answer':'Question'}</span><div class="face">${m.back?c.b:c.f}</div></div>
    <div class="row"><button type="button" class="btn ghost" id="cAgain">Again</button><button type="button" class="btn" id="cGot">Got it</button></div>`;
    const flip=()=>{m.back=!m.back;show();$('#fc').focus()};
    const fc=$('#fc');fc.onclick=flip;fc.onkeydown=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();flip()}};
    $('#cAgain').onclick=()=>{st.cards[c.id]='again';saveState(s);m.pos++;m.back=false;show()};
    $('#cGot').onclick=()=>{st.cards[c.id]='known';saveState(s);m.pos++;m.back=false;show()};
  };
  show();
}

/* ---------- subject: progress ---------- */
function renderProgress(s,main){
  const st=stateOf(s),per=s.topics.map(t=>topicStats(s,t));
  const weak=[...per].sort((a,b)=>a.score-b.score);
  const wrongQ=s.quiz.filter(q=>st.quiz[q.id]&&!st.quiz[q.id].ok),wrongX=s.exercises.filter(x=>st.ex[x.id]&&!st.ex[x.id].ok);
  const p=subjectProgress(s);
  main.innerHTML=`<div class="eyebrow">Your record</div><h2>Progress</h2><p class="lede">Saved in this browser only. "Last answer" counts: redo a question to update it.</p>
  ${per.some(x=>x.touched)?`<div class="panel" style="margin-bottom:16px"><h4>Review next</h4><p>Weakest first: ${weak.slice(0,2).map(x=>`<b>${esc(topicName(s,x.t.id))}</b>`).join(', then ')}.</p></div>`:`<div class="panel" style="margin-bottom:16px"><p>No activity yet. Start with a topic quiz; this page then shows where you are weakest.</p></div>`}
  <div class="panel" style="margin-bottom:16px">${statRow('<b>Overall</b> (average of the parts below)',p.pct,100,p.pct+'%')}${p.parts.map(x=>statRow(esc(x.label),x.done,x.total)).join('')}</div>
  ${s.mocks.length?`<div class="panel" style="margin-bottom:16px"><h4><a href="${hashFor(s.slug,'mocks')}">Mock exams</a></h4>${s.mocks.map(m=>{const r=st.mock[m.id];
    return r?statRow(esc(m.title),r.best,m.total,`best ${fmt(r2(r.best))} / ${fmt(m.total)} · last ${fmt(r2(r.last))} · ${r.n} attempt${r.n>1?'s':''}`):statRow(esc(m.title),0,m.total,'not taken yet')}).join('')}</div>`:''}
  <div class="grid2">${per.map(x=>`<div class="panel"><h4>${esc(topicName(s,x.t.id))}</h4>
   ${x.t.sheet?`<div class="stat"><span>Sheet</span><span>${x.read?'<span class="ok-t">✓ read</span>':'not read yet'}</span></div>`:''}
   ${x.ns.length?statRow('Notions understood',x.nk.length,x.ns.length,`${x.nk.length}/${x.ns.length}${x.nr.length?` · ${x.nr.length} to review`:''}`):''}
   ${x.qs.length?statRow('Quiz: last answers correct',x.qr.length,x.qd.length,`${x.qr.length}/${x.qd.length} answered · ${x.qs.length} total`):''}
   ${x.xs.length?statRow('Exercises solved',x.xo.length,x.xs.length):''}
   ${x.mr.map(r=>statRow(esc(r.label),r.done,r.total)).join('')}
   ${x.cs.length?statRow('Flashcards known',x.ck.length,x.cs.length):''}</div>`).join('')}</div>
  ${per.some(x=>x.nr.length)?`<h3>Notions marked “to review” (${per.reduce((a,x)=>a+x.nr.length,0)})</h3><ul>${per.flatMap(x=>x.nr.map(n=>`<li><span class="pill">${esc(topicShort(s,x.t.id))}</span> <a href="${hashFor(s.slug,'sheets',x.t.id)}" data-goto-notion="${esc(n.id)}">${n.title}</a></li>`)).join('')}</ul>`:''}
  <h3>Questions you got wrong last time (${wrongQ.length})</h3>
  ${wrongQ.length?'<ul>'+wrongQ.map(q=>`<li><span class="pill">${esc(topicShort(s,q.topic))}</span> ${q.q.replace(/\n/g,' ')} <br><small style="color:var(--muted)">Answer: ${q.o[q.a]}. ${q.e||''}</small></li>`).join('')+'</ul>':'<p>None.</p>'}
  ${s.exercises.length?`<h3>Exercises to redo (${wrongX.length})</h3>${wrongX.length?'<ul>'+wrongX.map(x=>`<li><span class="pill">${esc(topicShort(s,x.topic))}</span> ${x.title||esc(x.id)}</li>`).join('')+'</ul>':'<p>None.</p>'}`:''}
  <h3>Reset</h3><div id="reset"><button type="button" class="btn ghost small" id="r1">Reset all progress for ${esc(s.short||s.name)}</button></div>`;
  $('#r1').onclick=()=>{$('#reset').innerHTML=`<span class="confirm">Erase sheets read, quiz, exercise, ${s.mods.map(m=>esc((m.label||m.tab).toLowerCase())+', ').join('')}${s.mocks.length?'flashcard and mock exam':'and flashcard'} history for this subject? <button type="button" class="btn small" id="ry">Yes, erase</button><button type="button" class="btn ghost small" id="rn">Cancel</button></span>`;
    $('#ry').onclick=()=>{stopMocks(s);resetState(s);delete MEM[s.slug];renderProgress(s,main)};$('#rn').onclick=()=>renderProgress(s,main)};
}

/* ---------- subject: mock exams ----------
   mocks:[{id, title, exam?, scope?, summary?, duration (minutes), total (points), calculator?, intro?, sections:[{title, intro?, items}]}];
   items are exercise items (any registered type) with pts. Exam mode: a timer, no correction before "Hand in",
   then the mark, the points by part and by topic, the corrected paper and a link to the sheet of each question.
   The paper stays in memory while the page is open (tab switches keep the answers, a reload does not);
   the best and last marks are saved in the subject state (st.mock[id] = {best, last, n, at, total}). */
const mockItems=m=>m.sections.flatMap(sec=>sec.items||[]);
const secPts=sec=>(sec.items||[]).reduce((a,x)=>a+x.pts,0);
const qLabel=(x,num)=>x.title?`${num}. ${x.title}`:`Question ${num}`;
const clock=ms=>{const t=Math.max(0,Math.ceil(ms/1000)),h=Math.floor(t/3600),mn=Math.floor(t%3600/60),sc=t%60;return (h?h+':'+String(mn).padStart(2,'0'):String(mn))+':'+String(sc).padStart(2,'0')};
const itemTopics=x=>[...new Set([x.topic,...(x.parts||[]).map(p=>p.topic)].filter(Boolean))];
const attKey=id=>'mock:'+id;
const getAtt=(s,id)=>(MEM[s.slug]||{})[attKey(id)]||null;
const setAtt=(s,id,a)=>{const m=MEM[s.slug]||(MEM[s.slug]={});if(a)m[attKey(id)]=a;else delete m[attKey(id)]};
const stopMocks=s=>Object.values(MEM[s.slug]||{}).forEach(a=>{if(a&&a.timer)clearInterval(a.timer)});
const answered=q=>[...q.querySelectorAll('.xbody input[type=text],.xbody textarea')].some(i=>i.value.trim())||[...q.querySelectorAll('.xbody select')].some(x=>x.value)||!!q.querySelector('.xbody .opt[aria-pressed="true"]')||q.dataset.touched==='1';
const mountDeferred=(x,box,v)=>XTYPES[x.type].mount(box,x,{v,uid:'mk'+(++xUid),deferred:true,submit(){},report(){}});

function renderMocks(s,main,param){
  if(!s.mocks.length){main.innerHTML=emptyView('Mock exams','The mock exams');return}
  const pr=/-print$/.test(param||'')?param.slice(0,-6):'';
  const m=s.mocks.find(x=>x.id===(pr||param));
  if(param&&!m){mockList(s,main,`<div class="trap"><b>Not found</b>There is no mock exam "${esc(param)}" in this subject.</div>`);return}
  if(!m)mockList(s,main);else if(pr)mockPrint(s,main,m);else mockExam(s,main,m);
}
function mockList(s,main,flash=''){
  const st=stateOf(s);
  const card=m=>{const r=st.mock[m.id],a=getAtt(s,m.id),n=mockItems(m).length;
    return `<div class="panel mock-card"><span class="eyebrow">${esc([examLabel(s,m.exam),m.scope].filter(Boolean).join(' · ')||'Mock exam')}</span><h4>${esc(m.title)}</h4>
     <p class="meta">${m.duration} min · out of ${fmt(m.total)} · ${n} question${n>1?'s':''} in ${m.sections.length} part${m.sections.length>1?'s':''}</p>
     ${m.summary?`<p>${m.summary}</p>`:''}
     ${r?statRow('Best mark',r.best,m.total,`${fmt(r2(r.best))} / ${fmt(m.total)}`)+`<p class="meta">Last: ${fmt(r2(r.last))} / ${fmt(m.total)} · ${r.n} attempt${r.n>1?'s':''} · ${dateTxt(r.at)}</p>`:'<p class="meta">Not taken yet.</p>'}
     ${a&&a.phase==='running'?`<p class="meta"><b class="warn-t">In progress</b> · ${clock(a.end-Date.now())} left</p>`:''}
     <div class="row"><a class="btn small" href="${hashFor(s.slug,'mocks',m.id)}">${a?(a.phase==='running'?'Continue':'See your results'):'Start'}</a><a class="btn small ghost" href="${hashFor(s.slug,'mocks',m.id+'-print')}">Print version</a></div></div>`};
  main.innerHTML=`${flash}<div class="eyebrow">Exam practice</div><h2>Mock exams</h2>
  <p class="lede">Full papers in exam conditions: a timer, no correction until you hand in, then your mark, the corrected paper and a link to the sheet of each question.</p>
  ${s.mocksNote||''}<div class="mocklist">${s.mocks.map(card).join('')}</div>
  <h3>How it works</h3>
  <ol><li><b>Start</b> a mock: the timer starts. Answer in any order; the numbers at the top show what you have answered. You can switch tabs: your answers stay until you reload or close the page.</li>
  <li>Nothing is corrected until you click <b>Hand in</b>. When the time is up, the paper is handed in automatically.</li>
  <li>You then get your mark, the points by part and by topic, and the corrected paper: your answers in green or red, the expected answer, the worked solution and a link to the topic sheet.</li>
  <li>Written answers are marked by you with the marking grid: tick what your answer contains and the mark updates.</li>
  <li>Your best and last marks are saved in the <a href="${hashFor(s.slug,'progress')}">Progress</a> tab. The <b>print version</b> gives the paper alone, then the answer key on a new page.</li></ol>`;
}
function mockExam(s,main,m){
  const a=getAtt(s,m.id);
  if(a){main.innerHTML='';main.appendChild(a.el);if(a.phase==='running')a.tick();return}
  main.innerHTML=`<div class="eyebrow">${esc(['Mock exam',examLabel(s,m.exam),m.scope].filter(Boolean).join(' · '))}</div><h2>${esc(m.title)}</h2>
  ${m.summary?`<p class="lede">${m.summary}</p>`:''}
  <div class="panel"><dl class="facts"><dt>Duration</dt><dd>${m.duration} minutes</dd><dt>Marked out of</dt><dd>${fmt(m.total)} points</dd><dt>Calculator</dt><dd>${m.calculator||'Not specified'}</dd></dl>
  ${T(['Part','Questions','Points'],m.sections.map(sec=>[esc(sec.title),String((sec.items||[]).length),fmt(r2(secPts(sec)))]),[1,2])}</div>
  ${m.intro||''}
  <div class="row" style="margin-top:16px"><button type="button" class="btn" id="mkStart">Start: the timer starts</button><a class="btn ghost" href="${hashFor(s.slug,'mocks',m.id+'-print')}">Print version</a><a class="btn ghost" href="${hashFor(s.slug,'mocks')}">All mock exams</a></div>`;
  $('#mkStart').onclick=()=>{const att=startMock(s,m);setAtt(s,m.id,att);main.innerHTML='';main.appendChild(att.el);window.scrollTo(0,0);att.tick()};
}
function startMock(s,m){
  const rec=stateOf(s).mock[m.id];
  const att={phase:'running',start:Date.now(),end:Date.now()+m.duration*60000,qs:[],prevBest:rec&&rec.best||0};
  const el=document.createElement('div');el.className='mock-paper';att.el=el;
  el.innerHTML=`<div class="eyebrow mk-state">Mock exam · in progress</div><h2>${esc(m.title)}</h2>
   <p class="lede mk-lede">${m.duration} minutes · ${fmt(m.total)} points. Nothing is corrected before you hand in. Your answers stay while you switch tabs, not after a reload.</p>
   <div class="mock-summary"></div><nav class="qnav" aria-label="Go to a question"></nav>
   ${m.sections.map(sec=>`<section class="msec"><h3>${esc(sec.title)} <span class="pill src">${ptsTxt(secPts(sec))}</span></h3>${sec.intro||''}<div class="mqs"></div></section>`).join('')}
   <div class="mockbar"><div class="mockbar-in"><span class="timer" role="timer" aria-label="Time left"></span><span class="answered"></span><span class="mb-act"><button type="button" class="btn small" data-hand>Hand in</button></span></div></div>
   <div class="mock-spacer"></div>`;
  const nav=el.querySelector('.qnav'),boxes=el.querySelectorAll('.mqs');let num=0;
  m.sections.forEach((sec,si)=>(sec.items||[]).forEach(x=>{
    num++;const v=x.gen?safe(()=>x.gen(U),null):null,q=document.createElement('div');
    q.className='drill mq';q.id='mq-'+(++xUid);
    q.innerHTML=`<div class="qmeta"><b class="xtitle">${qLabel(x,num)}</b><span class="pill">${ptsTxt(x.pts)}</span></div>${x.q?`<div class="prompt">${val(x.q,v)}</div>`:''}<div class="xbody"></div><div class="mres"></div>`;
    boxes[si].appendChild(q);
    let inst=null;
    try{inst=mountDeferred(x,q.querySelector('.xbody'),v)}catch(e){console.error(`Mock "${m.id}", item "${x.id}":`,e);q.querySelector('.xbody').innerHTML=`<div class="trap"><b>Broken question</b>${esc(x.id)}: ${esc(e.message)}</div>`}
    const b=document.createElement('button');b.type='button';b.textContent=num;b.setAttribute('aria-label',`Go to question ${num}`);
    b.onclick=()=>q.scrollIntoView({behavior:'smooth',block:'start'});nav.appendChild(b);
    att.qs.push({x,v,num,el:q,inst,nav:b})}));
  att.upd=()=>{let k=0;att.qs.forEach(z=>{const f=answered(z.el);if(att.phase==='running')z.nav.classList.toggle('done',f);if(f)k++});
    const an=el.querySelector('.answered');if(an)an.textContent=`${k}/${att.qs.length} answered`;return k};
  el.addEventListener('input',att.upd);el.addEventListener('change',att.upd);
  // capture phase: an ordering button redraws its list on click, so read the target before it is detached
  el.addEventListener('click',e=>{const t=e.target.closest('.olist button'),mq=t&&t.closest('.mq');if(mq)mq.dataset.touched='1';if(e.target.closest('.mq .xbody'))setTimeout(att.upd,0)},true);
  att.tick=()=>{if(att.phase!=='running')return;const left=att.end-Date.now(),t=el.querySelector('.timer');
    if(t){t.textContent=clock(left);t.classList.toggle('low',left<=300000)}
    if(left<=0)handIn(s,m,att,true)};
  att.timer=setInterval(att.tick,1000);
  const bindHand=()=>{el.querySelector('[data-hand]').onclick=()=>{const k=att.upd(),act=el.querySelector('.mb-act');
    act.innerHTML=`<span class="confirm">Hand in now? ${k} of ${att.qs.length} answered. <button type="button" class="btn small" data-yes>Yes, hand in</button><button type="button" class="btn small ghost" data-no>Keep working</button></span>`;
    act.querySelector('[data-yes]').onclick=()=>handIn(s,m,att,false);
    act.querySelector('[data-no]').onclick=()=>{act.innerHTML='<button type="button" class="btn small" data-hand>Hand in</button>';bindHand()}}};
  bindHand();att.upd();
  return att;
}
const selfPts=z=>r2((z.x.rubric||[]).reduce((a,c,i)=>a+(z.ticks[i]?(+c.pts||0):0),0));
const gotPts=z=>z.self?selfPts(z):z.earned;
const attTotal=att=>r2(att.qs.reduce((a,z)=>a+gotPts(z),0));
function saveMark(s,m,att){
  const st=stateOf(s),rec=st.mock[m.id]||(st.mock[m.id]={n:1,best:0}),t=attTotal(att);
  rec.last=t;rec.best=Math.max(att.prevBest||0,t);rec.at=Date.now();rec.total=m.total;saveState(s);
}
function handIn(s,m,att,auto){
  if(att.phase!=='running')return;
  clearInterval(att.timer);att.timer=null;att.phase='done';att.auto=auto;att.used=Math.min(Date.now(),att.end)-att.start;
  att.qs.forEach(z=>{
    z.self=!!(z.inst&&z.inst.selfAssess);z.ticks=[];z.filled=answered(z.el);
    z.r=z.inst&&!z.self?safe(()=>z.inst.check(),null)||{empty:true}:{empty:true};
    z.score=z.self||z.r.empty?0:(z.r.score!=null?z.r.score:(z.r.ok?1:0));
    z.earned=z.self?0:r2(z.x.pts*z.score);
    // a case is marked part by part: its points are the sum of the rounded points of its parts (so every table adds up)
    if(!z.self&&z.x.type==='case'&&z.x.parts&&z.x.parts.length){const ps=z.x.parts,W=ps.reduce((a,p)=>a+(p.pts>0?p.pts:1),0);
      z.partOf=ps.map(p=>z.x.pts*(p.pts>0?p.pts:1)/W);z.partPts=z.partOf.map((of,i)=>r2(of*(z.r.parts?z.r.parts[i]||0:0)));
      z.earned=r2(z.partPts.reduce((a,b)=>a+b,0))}});
  att.el.querySelectorAll('.mq .xbody input,.mq .xbody select,.mq .xbody textarea,.mq .xbody button').forEach(c=>{c.disabled=true});
  att.el.querySelectorAll('.mockbar,.mock-spacer,.mk-lede').forEach(x=>x.remove());
  att.el.querySelector('.mk-state').textContent='Mock exam · handed in';
  const st=stateOf(s),rec=st.mock[m.id]||(st.mock[m.id]={n:0,best:0});rec.n=(rec.n||0)+1;
  att.qs.forEach(z=>drawCorrection(s,m,att,z));
  saveMark(s,m,att);drawSummary(s,m,att);
  if(att.el.isConnected)window.scrollTo(0,0);
}
function drawCorrection(s,m,att,z){
  const {x,v,r}=z,box=z.el.querySelector('.mres');
  const links=itemTopics(x).map(t=>`<a href="${hashFor(s.slug,'sheets',t)}">${esc(topicName(s,t))} →</a>`).join(' · ');
  const sol=x.solution?val(x.solution,v):(x.e?`<p>${val(x.e,v)}</p>`:'');
  let head='';
  if(z.self)head=`<p class="verdict">Self-marked: <span class="selfpts">${fmt(selfPts(z))}</span> / ${ptsTxt(x.pts)}${z.filled?'':' · <span class="ko-t">no answer written</span>'}</p>
    <div class="panel rubric-box"><h4>Marking grid: tick what your answer contains</h4><ul class="rubric">${x.rubric.map((c,i)=>`<li><input type="checkbox" id="${z.el.id}-r${i}"><label for="${z.el.id}-r${i}">${c.c}</label><span class="rp">${ptsTxt(c.pts)}</span></li>`).join('')}</ul></div>`;
  else{const full=z.score>=1-1e-9,cls=full?'ok-t':z.score>0?'warn-t':'ko-t';
    head=`<p class="verdict"><span class="${cls}">${full?'✓':z.score>0?'◐':'✗'} ${fmt(z.earned)} / ${ptsTxt(x.pts)}</span>${r.empty?' · <span class="ko-t">no answer</span>':''}${r.msg?' · '+r.msg:''}</p>`;
    if(z.partPts&&x.parts.length>1)head+=T(['Part','Points'],x.parts.map((p,i)=>[LET[i],`${fmt(z.partPts[i])} / ${fmt(r2(z.partOf[i]))}`]),[1])}
  const ans=!z.self&&z.inst&&z.inst.answer?safe(()=>z.inst.answer(),''):'';
  box.innerHTML=head+`<div class="box"><h4>${z.self?'Model answer':'Answer key'}</h4>${ans?`<div class="answer">${ans}</div>`:''}${sol}${links?`<p class="sheetlink">Review: ${links}</p>`:''}</div>`;
  box.querySelectorAll('.rubric input').forEach((cb,i)=>cb.onchange=()=>{z.ticks[i]=cb.checked;box.querySelector('.selfpts').textContent=fmt(selfPts(z));saveMark(s,m,att);drawSummary(s,m,att)});
  z.nav.classList.remove('done');z.nav.classList.add(z.self?'self':z.score>=1-1e-9?'full':z.score>0?'part':'zero');
}
function drawSummary(s,m,att){
  const box=att.el.querySelector('.mock-summary'),rec=stateOf(s).mock[m.id]||{},tot=attTotal(att),selfQ=att.qs.filter(z=>z.self);
  const secRows=m.sections.map(sec=>{const zs=att.qs.filter(z=>(sec.items||[]).includes(z.x));return [esc(sec.title),`${fmt(r2(zs.reduce((a,z)=>a+gotPts(z),0)))} / ${fmt(r2(secPts(sec)))}`]});
  const per={},add=(t,g,o)=>{const e=per[t||'']||(per[t||'']={g:0,o:0});e.g+=g;e.o+=o};
  att.qs.forEach(z=>{const x=z.x;
    if(z.partPts&&x.parts.some(p=>p.topic))x.parts.forEach((p,i)=>add(p.topic||x.topic,z.partPts[i],z.partOf[i]));
    else add(x.topic,gotPts(z),x.pts)});
  const topicRows=s.topics.filter(t=>per[t.id]).map(t=>[`<a href="${hashFor(s.slug,'sheets',t.id)}">${esc(topicName(s,t.id))}</a>`,`${fmt(r2(per[t.id].g))} / ${fmt(r2(per[t.id].o))}`]);
  if(per[''])topicRows.push(['Other',`${fmt(r2(per[''].g))} / ${fmt(r2(per[''].o))}`]);
  box.innerHTML=`<div class="panel mock-score"><div class="eyebrow">Your mark</div><div class="scorebig">${fmt(tot)}<small> / ${fmt(m.total)}</small></div>
   <p class="meta">${att.auto?'Time was up: the paper was handed in automatically.':`Handed in after ${clock(att.used)} (time allowed: ${m.duration} min).`} Best mark so far: ${fmt(r2(rec.best||0))} / ${fmt(m.total)}.</p>
   ${selfQ.length?`<p class="meta"><b class="warn-t">To finish your mark:</b> ${selfQ.length} written answer${selfQ.length>1?'s':''} (${ptsTxt(selfQ.reduce((a,z)=>a+z.x.pts,0))}) to mark yourself with the marking grid below the question. The mark updates as you tick.</p>`:''}</div>
   <div class="grid2" style="margin-top:14px"><div class="panel"><h4>By part</h4>${T(['Part','Points'],secRows,[1])}</div><div class="panel"><h4>By topic</h4>${T(['Topic (sheet)','Points'],topicRows,[1])}</div></div>
   <div class="row" style="margin:16px 0"><button type="button" class="btn small" data-retake>Take this mock again</button><a class="btn small ghost" href="${hashFor(s.slug,'mocks',m.id+'-print')}">Print paper and answer key</a><a class="btn small ghost" href="${hashFor(s.slug,'mocks')}">All mock exams</a></div>
   <h3>Corrected paper</h3>`;
  box.querySelector('[data-retake]').onclick=()=>{setAtt(s,m.id,null);mockExam(s,$('#main'),m);window.scrollTo(0,0)};
}
// print version: static paper (no inputs), then the answer key on a new page
function printBody(x,v){
  const ty=XTYPES[x.type];
  if(ty&&ty.print)return safe(()=>ty.print(x,v),'');
  const line=(label,unit)=>`<div class="p-ans"><span>${label}</span><span class="p-line"></span>${unit?`<span>${esc(unit)}</span>`:''}</div>`;
  switch(x.type){
    case 'mcq':return `<ol class="p-opts" type="a">${val(x.o,v).map(t=>`<li>${t}</li>`).join('')}</ol><p class="hint">${Array.isArray(x.a)?'Several answers can be right: circle all that apply.':'Circle one answer.'}</p>`;
    case 'numeric':case 'calc':return numParts(x,v).map(p=>line(p.label,p.unit)).join('');
    case 'text':return (x.parts||[{label:x.label}]).map(p=>line(val(p.label,v)||'Answer')).join('');
    case 'match':{const pairs=val(x.pairs,v),opts=U.shuffle([...new Set(pairs.map(p=>String(p[1])).concat((x.extra||[]).map(String)))]);
      return T(['Item','Your answer'],pairs.map(p=>[p[0],'']))+`<p class="hint">Choose from: ${opts.map(esc).join(' · ')}</p>`}
    case 'order':{const items=val(x.items,v);return `<p class="hint">Number the steps from 1 to ${items.length}.</p><ul class="p-order">${U.shuffle(items.slice()).map(t=>`<li><span class="p-box"></span>${t}</li>`).join('')}</ul>`}
    case 'case':if(x.parts&&x.parts.length)return x.parts.map(p=>`<div class="p-part">${p.q?`<div class="part-q">${val(p.q,v)}${p.pts?` <span class="ppts">(${ptsTxt(p.pts)})</span>`:''}</div>`:''}${printBody(p,v)}</div>`).join('');
      return `<div class="p-lines" style="--n:${x.lines||10}"></div>`;
    case 'written':return `<div class="p-lines" style="--n:${x.lines||8}"></div>`;
    default:return '<div class="p-lines" style="--n:4"></div>';
  }
}
function mockPrint(s,main,m){
  const md=mem(s,'mockprint',()=>({mode:'both'}));
  const qs=[];m.sections.forEach(sec=>(sec.items||[]).forEach(x=>qs.push({x,sec,num:qs.length+1,v:x.gen?safe(()=>x.gen(U),null):null})));
  const key=q=>{const x=q.x;let ans='';
    if(isSelf(x))ans=rubricTable(x);
    else{const inst=safe(()=>mountDeferred(x,document.createElement('div'),q.v),null);ans=inst&&inst.answer?safe(()=>inst.answer(),''):''}
    const sol=x.solution?val(x.solution,q.v):(x.e?`<p>${val(x.e,q.v)}</p>`:'');
    return `<div class="p-q"><h4>${qLabel(x,q.num)}<span>${ptsTxt(x.pts)} · ${itemTopics(x).map(t=>esc(topicShort(s,t))).join(', ')}</span></h4>${ans?`<div class="answer">${ans}</div>`:''}${sol}</div>`};
  const paper=m.sections.map(sec=>{const its=qs.filter(q=>q.sec===sec);
    return `<h3>${esc(sec.title)} <span class="pill src">${ptsTxt(secPts(sec))}</span></h3>${sec.intro||''}`+its.map(q=>`<div class="p-q"><h4>${qLabel(q.x,q.num)}<span>${ptsTxt(q.x.pts)}</span></h4>${q.x.q?`<div class="prompt">${val(q.x.q,q.v)}</div>`:''}${printBody(q.x,q.v)}</div>`).join('')}).join('');
  const keys=m.sections.map(sec=>`<h3>${esc(sec.title)}</h3>`+qs.filter(q=>q.sec===sec).map(key).join('')).join('');
  main.innerHTML=`<div class="noprint"><div class="eyebrow">Print version</div><h2>${esc(m.title)}</h2>
   <p class="lede">The paper as on exam day, then the answer key on a new page. Print it, or choose "Save as PDF" in the print dialog.</p>
   <div class="filters">${chips([['both','Paper + answer key'],['paper','Paper only'],['key','Answer key only']],md.mode,'pm')}</div>
   <div class="row"><button type="button" class="btn" id="doPrint">Print</button><a class="btn ghost" href="${hashFor(s.slug,'mocks',m.id)}">Back to the mock</a><a class="btn ghost" href="${hashFor(s.slug,'mocks')}">All mock exams</a></div></div>
   <div class="print-doc" data-mode="${md.mode}">
   <article class="print-paper"><div class="p-head"><div class="eyebrow">${esc(s.name)}</div><h2>${esc(m.title)}</h2>
    <p>${m.duration} minutes · ${fmt(m.total)} points${m.calculator?` · Calculator: ${m.calculator}`:''}</p><p>Name: ______________________________</p></div>${m.intro||''}${paper}</article>
   <article class="print-key"><div class="p-head"><div class="eyebrow">${esc(s.name)} · ${esc(m.title)}</div><h2>Answer key</h2></div>${keys}</article></div>`;
  main.querySelectorAll('[data-pm]').forEach(b=>b.onclick=()=>{md.mode=b.dataset.pm;main.querySelector('.print-doc').dataset.mode=md.mode;
    main.querySelectorAll('[data-pm]').forEach(c=>c.setAttribute('aria-pressed',String(c===b)))});
  $('#doPrint').onclick=()=>window.print();
}

function renderModule(s,main,tab,param){const m=s.mods.find(x=>x.tab===tab);m.render(modCtx(s,m),main,param||'')}
const VIEWS={overview:renderOverview,sheets:renderSheets,cheat:renderCheat,glossary:(s,main)=>Rev.renderGlossary(s,main),quiz:renderQuiz,exercises:renderExercises,flashcards:renderCards,mocks:renderMocks,progress:renderProgress};

/* ---------- header, theme and boot ---------- */
const ICONS={
  auto:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
  light:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  dark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'};
const THEME_NAME={auto:'automatic (follows the system)',light:'light',dark:'dark'};
function applyTheme(){const t=prefs.theme;if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;else delete document.documentElement.dataset.theme}
function paintThemeBtn(){const b=$('#themeBtn');if(!b)return;const t=THEME_NAME[prefs.theme]?prefs.theme:'auto';b.innerHTML=ICONS[t];b.title=`Theme: ${THEME_NAME[t]}. Click to change.`;b.setAttribute('aria-label',`Theme: ${THEME_NAME[t]}. Change theme`)}
function cycleTheme(){prefs.theme={auto:'light',light:'dark',dark:'auto'}[prefs.theme]||'auto';savePrefs();applyTheme();paintThemeBtn()}
function drawHeader(r){
  const top=$('#top'),s=r.slug&&SUBJECTS[r.slug],c=r.slug&&CATALOG.find(x=>x.slug===r.slug);
  const cur=r.page==='home'?'#home':r.page==='progress'?'#progress':r.page==='extra'?'#'+r.name:'#'+r.slug;
  const opt=(h,l)=>`<option value="${h}" ${cur===h?'selected':''}>${l}</option>`;
  const tabs=s?viewsOf(s).map(([id,l])=>`<a href="${hashFor(s.slug,id)}" ${r.view===id?'aria-current="page"':''}>${esc(l)}</a>`).join('')
    :`<a href="#home" ${r.page==='home'?'aria-current="page"':''}>All subjects</a><a href="#progress" ${r.page==='progress'?'aria-current="page"':''}>Global progress</a>`
     +Object.keys(PAGES).filter(k=>PAGES[k].nav).map(k=>`<a href="#${k}" ${r.page==='extra'&&r.name===k?'aria-current="page"':''}>${esc(PAGES[k].label||k)}</a>`).join('');
  top.innerHTML=`<div class="top-inner"><div class="bar-row"><a class="brand" href="#home">Revision Ledger</a><span class="tagline">${esc(s?(s.tagline||s.name):c?c.name:'Bachelor 2 · Semester 3')}</span>
  <select class="subj-sel" id="subjSel" aria-label="Choose a subject">${opt('#home','All subjects (home)')}<optgroup label="Subjects, in exam order">${CATALOG.map(x=>opt('#'+x.slug,(isFinite(orderOf(x.slug))?(orderOf(x.slug)+1)+'. ':'')+esc(x.name)+(SUBJECTS[x.slug]?'':' · not added yet'))).join('')}</optgroup>${opt('#progress','Global progress')}</select>
  <button type="button" class="theme-btn" id="themeBtn"></button></div>
  <nav class="tabs" aria-label="Sections">${tabs}</nav></div>`;
  $('#subjSel').onchange=e=>{location.hash=e.target.value};
  $('#themeBtn').onclick=cycleTheme;paintThemeBtn();
  const nav=top.querySelector('nav.tabs'),act=nav.querySelector('[aria-current]');
  if(act&&nav.scrollWidth>nav.clientWidth)nav.scrollLeft=act.offsetLeft-(nav.clientWidth-act.offsetWidth)/2;
}
function render(){
  const r=parseHash(),main=$('#main');
  drawHeader(r);
  let title='Revision Ledger';
  try{
    if(r.page==='home')renderHome(main);
    else if(r.page==='progress'){renderGlobal(main);title='Global progress · '+title}
    else if(r.page==='missing'){renderMissing(main,r.slug);title=((CATALOG.find(x=>x.slug===r.slug)||{}).name||r.slug)+' · '+title}
    else if(r.page==='extra'){PAGES[r.name].render(main,r.param);title=(PAGES[r.name].label||r.name)+' · '+title}
    else{const s=SUBJECTS[r.slug];(VIEWS[r.view]||((s,m,p)=>renderModule(s,m,r.view,p)))(s,main,r.param);
      title=`${(viewsOf(s).find(v=>v[0]===r.view)||['',''])[1]} · ${s.short||s.name} · ${title}`;prefs.last=location.hash;savePrefs()}
    // interactive blocks written as placeholders in sheets, cheat sheets, overviews and pages (assets/widgets.js)
    if(Rev.hydrate)Rev.hydrate(main,{slug:r.slug||'',view:r.view||r.page,topic:r.view==='sheets'?r.param:''});
  }catch(e){console.error(e);main.innerHTML=`<div class="trap"><b>This page failed to load</b>${esc(e.message)}</div>`}
  if(ERRORS.length)main.insertAdjacentHTML('afterbegin',ERRORS.map(m=>`<div class="trap"><b>Loading problem</b>${esc(m)}</div>`).join(''));
  document.title=title;
  window.scrollTo(0,0);
}
Rev.go=hash=>{if(location.hash===hash)render();else location.hash=hash};
function boot(){applyTheme();window.addEventListener('hashchange',render);render()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else setTimeout(boot,0);
})();
