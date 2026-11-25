// Chapter 2 generators on points 1–6 (5 exercises per generator and level): answers recomputed here from the matrix shown.
const {open}=require('./cdp.js'),fs=require('fs');
const TF=JSON.parse(fs.readFileSync(__dirname+'/msp-mid.json','utf8')).TF;
const AB=['Both statements are true','Statement A is true; Statement B is false','Statement A is false; Statement B is true','Both statements are false'];
const solve=p=>{const R=p.length,C=p[0].length;
 const br1=[...Array(C)].map((_,j)=>{const b=Math.max(...p.map(r=>r[j][0]));return p.map((r,i)=>r[j][0]===b?i:-1).filter(i=>i>=0)});
 const br2=p.map(r=>{const b=Math.max(...r.map(c=>c[1]));return r.map((c,j)=>c[1]===b?j:-1).filter(j=>j>=0)});
 const ne=[];for(let i=0;i<R;i++)for(let j=0;j<C;j++)if(br1[j].includes(i)&&br2[i].includes(j))ne.push([i,j]);
 const domR=[...Array(R).keys()].find(i=>[...Array(R).keys()].every(k=>k===i||p[i].every((c,j)=>c[0]>p[k][j][0])));
 const domC=[...Array(C).keys()].find(j=>[...Array(C).keys()].every(k=>k===j||p.every(r=>r[j][1]>r[k][1])));
 const fol=p.map(r=>r.map(c=>c[1]).indexOf(Math.max(...r.map(c=>c[1])))),lead=[...Array(R).keys()].reduce((b,i)=>p[i][fol[i]][0]>p[b][fol[b]][0]?i:b,0);
 return {ne,domR,domC,spne:[lead,fol[lead]]}};
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html',{w:1000,h:900});await B.sleep(900);const ev=B.ev,out=[];let bad=0;
 const go=async h=>{await ev(`location.hash=${JSON.stringify(h)}`);await B.sleep(350)};
 const matrix=()=>ev(`(()=>{const t=document.querySelector('main .genq table.pm, main table.pm');if(!t)return null;return {rows:[...t.querySelectorAll('tbody th:not(.mx-pl)')].map(x=>x.textContent),p:[...t.querySelectorAll('tbody tr')].map(tr=>[...tr.querySelectorAll('td')].map(td=>td.textContent.replace(/[()\\s]/g,'').replace(/−/g,'-').split(';').map(Number)))}})()`);
 const opts=()=>ev(`[...document.querySelectorAll('main .genparts select')].map(s=>[...s.options].slice(1).map(o=>o.textContent))`);
 const fill=async a=>{await ev(`(()=>{const ins=[...document.querySelectorAll('main .genparts input,main .genparts select')];const a=${JSON.stringify(a)};ins.forEach((x,i)=>{x.value=String(a[i]);x.dispatchEvent(new Event('input'));x.dispatchEvent(new Event('change'))});return 1})()`);
  await ev(`document.querySelector('main [data-chk]').click()`);await B.sleep(60);return ev(`document.querySelector('main .feedback')?document.querySelector('main .feedback').innerText:''`)};
 const label=(rows,cols,ne)=>ne.length?ne.map(([i,j])=>`(${rows[i]} ; ${cols[j]})`).join(' and ')+(ne.length===1?' only':''):'There is no Nash equilibrium (in pure strategies)';
 const run=async(id,lv,make)=>{for(let k=0;k<5;k++){if(k)await ev(`document.querySelector('main [data-new]').click()`),await B.sleep(60);
   const m=await matrix(),o=await opts(),q=await ev(`document.querySelector('main .genparts').previousElementSibling?document.querySelector('main .genparts').parentElement.innerText:''`);
   const a=make(m,o,q);const fb=await fill(a);const ok=fb.startsWith('Correct');if(!ok)bad++;
   out.push(`${id}${lv!=null?' L'+lv:''} #${k+1}: ${m?JSON.stringify(m.p):''} → ${JSON.stringify(a)} ${ok?'OK':'FAIL '+fb.slice(0,150)}`)}};
 // g-c2-dom: dominant strategy P1, P2 (S1/S2/None), number of NE, expected solution
 await go('#market-structures-generators-g-c2-dom');
 await run('g-c2-dom',null,(m)=>{const s=solve(m.p);return [s.domR==null?2:s.domR,s.domC==null?2:s.domC,s.ne.length,s.ne.length===1?s.ne[0][0]*2+s.ne[0][1]:4]});
 // g-c2-exam
 await go('#market-structures-generators-g-c2-exam');
 for(const lv of [0,1,2]){await ev(`document.querySelector('main [data-lv="${lv}"]').click()`);await B.sleep(80);
  await run('g-c2-exam',lv,(m,o,q)=>{const s=solve(m.p),cols=m.rows.map(x=>x);// same labels for rows and columns in these games
   if(lv===1)return [s.ne.length];
   if(lv===2){const lab=`(${m.rows[s.spne[0]]} ; ${cols[s.spne[1]]}), payoffs (${m.p[s.spne[0]][s.spne[1]].join(' ; ')})`;const inNE=s.ne.some(([i,j])=>i===s.spne[0]&&j===s.spne[1]);return [o[0].indexOf(lab),inNE?0:1]}
   const dk=/duopolist 2 have a dominant/i.test(q)?1:0,d=dk?s.domC:s.domR;return [d==null?2:d,o[1].indexOf(label(m.rows,cols,s.ne)),s.domR!=null&&s.domC!=null?s.domR*2+s.domC:4]})}
 // g-c2-ab: truth of the two statements from the midterm bank
 await go('#market-structures-generators-g-c2-ab');
 await run('g-c2-ab',null,(m,o,q)=>{const a=q.match(/Statement A:\s*([\s\S]*?)\n/)[1].trim(),b=q.match(/Statement B:\s*([\s\S]*?)\n/)[1].trim();
  const ta=TF.find(t=>t.s===a),tb=TF.find(t=>t.s===b);return [(ta.a?0:2)+(tb.a?0:1)]});
 console.log(out.join('\n'));console.log('FAILURES',bad,'console:',B.logs.join(' | ')||'no errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
