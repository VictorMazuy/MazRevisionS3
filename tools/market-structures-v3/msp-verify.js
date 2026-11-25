// Independent verification of the MSP labs: prisoner's dilemma (6 strategies × one-shot and 5 rounds), payoff matrix lab (5 generated games,
// 4 tasks each, answers computed here), chapter 1 generators (5 exercises each, answers recomputed here from the question text).
const {open}=require('./cdp.js');
const BASE='file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html';
const num=s=>+String(s).replace(/−/g,'-').replace(/[\s €%]/g,'').replace(/,/g,'');
(async()=>{const B=await open(BASE,{w:1000,h:900});await B.sleep(900);const ev=B.ev,log=[];let bad=0;
 const go=async h=>{await ev(`location.hash=${JSON.stringify(h)}`);await B.sleep(350)};
 const click=async sel=>ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)throw new Error('missing '+${JSON.stringify(sel)});e.click();return 1})()`);
 /* ---------- 1. prisoner's dilemma ---------- */
 await go('#market-structures-tools-pl-c2-pd');
 const M=[[[2,2],[10,1]],[[1,10],[8,8]]];// [you, computer], 0 = deny, 1 = confess
 const exp={allc:h=>0,alld:h=>1,tft:h=>h.length?h[h.length-1][0]:0,grim:h=>h.some(x=>x[0]===1)?1:0,tf2t:h=>h.length>1&&h[h.length-1][0]===1&&h[h.length-2][0]===1?1:0};
 for(const st of ['allc','alld','tft','random','grim','tf2t'])for(const R of [1,5]){
  await ev(`(()=>{const s=document.querySelector('main select');s.value=${JSON.stringify(st)};s.onchange({target:s});return 1})()`);
  await click(`main [data-r="${R}"]`);await B.sleep(80);await click('main [data-go]');await B.sleep(80);
  const mine=[1,0,1,1,0];for(let r=0;r<R;r++){await click(`main [data-a="${mine[r]}"]`);await B.sleep(60)}
  const o=await ev(`(()=>{const rows=[...document.querySelectorAll('main .play table')].find(t=>t.textContent.includes('Round'));const tr=rows?[...rows.querySelectorAll('tbody tr')].map(t=>[...t.children].map(x=>x.textContent)):[];
    return {tr,why:!!document.querySelector('main .play .box')&&document.querySelector('main .play .box').textContent.includes('Why this result'),head:document.querySelector('main .play h4').textContent}})()`);
  let ok=o.tr.length===R&&o.why,h=[],ty=0,tc=0;
  o.tr.forEach((t,i)=>{const a=t[1]==='Confess'?1:0,b=t[2]==='Confess'?1:0;if(exp[st]&&exp[st](h)!==b)ok=false;const p=M[a][b];ty+=p[0];tc+=p[1];
    if(+t[3]!==p[0]||+t[4]!==p[1]||num(t[5])!==ty||num(t[6])!==tc)ok=false;h.push([a,b])});
  if(!o.head.includes(`you ${ty}, computer ${tc}`))ok=false;
  log.push(`PD ${st} ${R===1?'one-shot':'5 rounds'}: you ${ty}, computer ${tc} ${ok?'OK':'FAIL'}`);if(!ok)bad++;
  await click('main [data-setup]');await B.sleep(80)}
 /* ---------- 2. payoff matrix lab ---------- */
 await go('#market-structures-tools-gm-c2-lab');
 for(const size of [0,1,2,0,2]){
  await click(`main [data-size="${size}"]`);await B.sleep(80);await click('main [data-task="br"]');await B.sleep(50);
  const m=await ev(`(()=>{const t=document.querySelector('main .gtable tbody');return [...t.rows].map(r=>[...r.querySelectorAll('td')].map(td=>[...td.querySelectorAll('.pay')].map(b=>+b.textContent)))})()`);
  const R=m.length,C=m[0].length;
  const brR=[...Array(C)].map((_,j)=>{const mx=Math.max(...m.map(r=>r[j][0]));return m.map((r,i)=>r[j][0]===mx?i:-1).filter(i=>i>=0)});
  const brC=m.map(r=>{const mx=Math.max(...r.map(c=>c[1]));return r.map((c,j)=>c[1]===mx?j:-1).filter(j=>j>=0)});
  const ne=[];for(let i=0;i<R;i++)for(let j=0;j<C;j++)if(brR[j].includes(i)&&brC[i].includes(j))ne.push([i,j]);
  const domR=[...Array(R).keys()].find(i=>[...Array(R).keys()].every(k=>k===i||m[i].every((c,j)=>c[0]>m[k][j][0])));
  const domC=[...Array(C).keys()].find(j=>[...Array(C).keys()].every(k=>k===j||m.every(r=>r[j][1]>r[k][1])));
  const fol=m.map(r=>r.map(c=>c[1]).indexOf(Math.max(...r.map(c=>c[1])))),lead=[...Array(R).keys()].reduce((b,i)=>m[i][fol[i]][0]>m[b][fol[b]][0]?i:b,0);
  const res=[];
  for(let i=0;i<R;i++)for(let j=0;j<C;j++){if(brR[j].includes(i))await click(`main [data-p="r${i}-${j}"]`);if(brC[i].includes(j))await click(`main [data-p="c${i}-${j}"]`)}
  await click('main [data-chk]');await B.sleep(50);res.push(await ev(`document.querySelector('main .game-fb').innerText.startsWith('Correct')`));
  await click('main [data-task="ne"]');await B.sleep(50);for(const [i,j] of ne)await click(`main [data-c="${i}-${j}"]`);
  await click('main [data-chk]');await B.sleep(50);res.push(await ev(`document.querySelector('main .game-fb').innerText.startsWith('Correct')`));
  await click('main [data-task="dom"]');await B.sleep(50);
  await ev(`(()=>{const s=document.querySelectorAll('main [data-d]');s[0].value='${domR==null?-1:domR}';s[0].onchange();s[1].value='${domC==null?-1:domC}';s[1].onchange();return 1})()`);
  await click('main [data-chk]');await B.sleep(50);res.push(await ev(`document.querySelector('main .game-fb').innerText.startsWith('Correct')`));
  await click('main [data-task="seq"]');await B.sleep(50);await click(`main [data-c="${lead}-${fol[lead]}"]`);
  await click('main [data-chk]');await B.sleep(50);res.push(await ev(`document.querySelector('main .game-fb').innerText.startsWith('Correct')`));
  const ok=res.every(Boolean);if(!ok)bad++;
  log.push(`Matrix ${R}×${C} ${JSON.stringify(m)}: NE ${JSON.stringify(ne)}, dominant ${domR==null?'-':domR}/${domC==null?'-':domC}, SPNE (${lead},${fol[lead]}) → br/ne/dom/seq ${res.map(x=>x?'✓':'✗').join('')}`);
  await click('main [data-new]');await B.sleep(60)}
 /* ---------- 3. chapter 1 generators ---------- */
 const FQ={'do firms have market power':3,'are there barriers to entry':2,'are there many producers':2,'are firms price takers':1,'is there strategic interaction between firms':1,'is there free entry and exit':2,'can products be differentiated':2,'does a firm face a downward-sloping demand curve':3,'is the long-run economic profit driven to zero by entry':2};
 const solve={
  'g-c1-elast':t=>{let m=t.match(/price rises by ([\d.]+)% and the quantity demanded changes by ([−\-\d.]+)%/);let e;
    if(m)e=num(m[2])/num(m[1]);else{m=t.match(/from €([\d .]+) to €([\d .]+) and the quantity demanded falls from ([\d ]+) to ([\d .]+) units/);const p0=num(m[1]),p1=num(m[2]),q0=num(m[3]),q1=num(m[4]);e=((q1-q0)/q0)/((p1-p0)/p0)}
    return [e.toFixed(4),Math.abs(e)>1+1e-9?0:Math.abs(Math.abs(e)-1)<1e-9?1:2]},
  'g-c1-lerner':t=>{let m=t.match(/p\* = €([\d .]+) and MC\(q\*\) = €([\d .]+)/);if(m){const p=num(m[1]),c=num(m[2]);return [(p/c).toFixed(4),((p-c)/p).toFixed(4),(p/(p-c)).toFixed(4)]}
    m=t.match(/\|ε\| = ([\d.]+) and MC\(q\*\) = €([\d .]+)/);const e=num(m[1]),c=num(m[2]),p=c/(1-1/e);return [p.toFixed(4),(1/e).toFixed(4),e.toFixed(4)]},
  'g-c1-pctq':t=>{const m=t.match(/ε = ([−\-\d.]+)\. The price (rises|falls) by ([\d.]+)%/),e=num(m[1]),dp=num(m[3])*(m[2]==='rises'?1:-1),a=Math.abs(e);return [(e*dp).toFixed(4),a<1?1:a===1?2:3,a<1?1:2]},
  'g-c1-forms':t=>{const k=Object.keys(FQ).find(x=>t.includes(x));return [FQ[k],0]}};
 for(const id of Object.keys(solve)){await go('#market-structures-generators-'+id);
  const levels=await ev(`document.querySelectorAll('main [data-lv]').length`)||1;
  for(let lv=0;lv<levels;lv++){if(levels>1){await click(`main [data-lv="${lv}"]`);await B.sleep(80)}
   for(let k=0;k<5;k++){if(k)await click('main [data-new]'),await B.sleep(60);
    const t=await ev(`document.querySelector('main .gen-q,main .genq,main .w-q')?document.querySelector('main .gen-q,main .genq,main .w-q').innerText:document.querySelector('main .genparts').previousElementSibling.innerText`);
    const ans=solve[id](t);
    await ev(`(()=>{const ins=[...document.querySelectorAll('main .genparts input,main .genparts select')];const a=${JSON.stringify(ans)};ins.forEach((x,i)=>{x.value=String(a[i]);x.dispatchEvent(new Event('input'))});return ins.length})()`);
    await click('main [data-chk]');await B.sleep(60);
    const fb=await ev(`document.querySelector('main .feedback')?document.querySelector('main .feedback').innerText:''`);
    const ok=fb.startsWith('Correct');if(!ok)bad++;log.push(`${id} L${lv} #${k+1}: “${t.replace(/\s+/g,' ').slice(0,110)}” → my answers ${JSON.stringify(ans)} ${ok?'OK':'FAIL: '+fb.slice(0,160)}`)}}}
 console.log(log.join('\n'));console.log('FAILURES:',bad,'console:',B.logs.join(' | ')||'none');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
