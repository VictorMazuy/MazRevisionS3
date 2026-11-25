// Labs: the midterm-site random lab (MATRIX gen): 5 random games (2×2 and 4×4), NE / best responses / sequential computed here.
const {open}=require('./cdp.js');
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html#market-structures-tools-mx-c2-random',{w:390,h:844,dark:true});await B.sleep(1200);const ev=B.ev,out=[];let bad=0;
 for(const n of [2,4,2,4,2]){await ev(`document.querySelector('main [data-rnd="${n}"]').click()`);await B.sleep(80);
  const p=await ev(`[...document.querySelectorAll('main tbody tr')].map(tr=>[...tr.querySelectorAll('td.mx-cell')].map(td=>td.textContent.replace(/[()\\s]/g,'').split(';').map(Number)))`);
  const R=p.length,C=p[0].length,best=Math.max;
  const br1=[...Array(C)].map((_,j)=>{const b=best(...p.map(r=>r[j][0]));return p.map((r,i)=>r[j][0]===b?i:-1).filter(i=>i>=0)});
  const br2=p.map(r=>{const b=best(...r.map(c=>c[1]));return r.map((c,j)=>c[1]===b?j:-1).filter(j=>j>=0)});
  const ne=[];for(let i=0;i<R;i++)for(let j=0;j<C;j++)if(br1[j].includes(i)&&br2[i].includes(j))ne.push([i,j]);
  for(const [i,j] of ne)await ev(`document.querySelector('main .mx-cell[data-i="${i}"][data-j="${j}"]').click()`);
  await ev(`document.querySelector('main [data-chk]').click()`);const fb=await ev(`document.querySelector('main .game-fb').innerText`);
  const okNE=ne.length?fb.startsWith('All Nash equilibria found'):fb.includes('0 Nash equilibria')||fb.includes('none in pure');
  let seq='—',okSeq=true;
  if(R===2){const fol=p.map(r=>r[0][1]>r[1][1]?0:1),lead=p[0][fol[0]][0]>p[1][fol[1]][0]?0:1;
   await ev(`document.querySelector('main [data-tree]').click()`);seq=await ev(`[...document.querySelectorAll('main .box li')].pop().innerText`);
   okSeq=seq.includes(`Outcome (Strategy ${lead+1} ; Strategy ${fol[lead]+1})`);seq=`SPNE (Strategy ${lead+1} ; Strategy ${fol[lead]+1})`}
  const ok=okNE&&okSeq;if(!ok)bad++;out.push(`${R}×${C} ${JSON.stringify(p)} → NE ${JSON.stringify(ne)} ${okNE?'✓':'✗ '+fb.slice(0,80)} · ${seq} ${okSeq?'✓':'✗'}`)}
 console.log(out.join('\n'));console.log('FAILURES',bad,'console:',B.logs.join(' | ')||'no errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
