// New MATRIX lab (mx-c2-lab): random 2×2 / 3×3 / 4×4 and "Edit the payoffs", in the Labs tab and in the chapter 2 sheet.
const {open}=require('./cdp.js');
const solve=p=>{const R=p.length,C=p[0].length;
 const br1=[...Array(C)].map((_,j)=>{const b=Math.max(...p.map(r=>r[j][0]));return p.map((r,i)=>r[j][0]===b?i:-1).filter(i=>i>=0)});
 const br2=p.map(r=>{const b=Math.max(...r.map(c=>c[1]));return r.map((c,j)=>c[1]===b?j:-1).filter(j=>j>=0)});
 const ne=[];for(let i=0;i<R;i++)for(let j=0;j<C;j++)if(br1[j].includes(i)&&br2[i].includes(j))ne.push([i,j]);return ne};
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html',{w:390,h:844,dark:true});await B.sleep(1000);const ev=B.ev,out=[];let bad=0;
 for(const [where,hash,host] of [['Labs','#market-structures-tools-mx-c2-lab',"document.querySelector('main .mxlab')"],['Sheet','#market-structures-sheets-c2',"[...document.querySelectorAll('[data-notion=\"c2-nash\"] .card')].find(c=>c.innerText.includes('Your own matrix')).querySelector('.mxlab')"]]){
  await ev(`location.hash=${JSON.stringify(hash)}`);await B.sleep(500);
  const H=()=>`(${host})`;
  for(const n of [2,3,4]){await ev(`${H()}.querySelector('[data-rnd="${n}"]').click()`);await B.sleep(60);
   const p=await ev(`[...${H()}.querySelectorAll('tbody tr')].map(tr=>[...tr.querySelectorAll('td.mx-cell')].map(td=>td.textContent.replace(/[()\\s]/g,'').split(';').map(Number)))`);
   const ne=solve(p);for(const [i,j] of ne)await ev(`${H()}.querySelector('.mx-cell[data-i="${i}"][data-j="${j}"]').click()`);
   await ev(`${H()}.querySelector('[data-chk]').click()`);const fb=await ev(`${H()}.querySelector('.game-fb').innerText`);
   const ok=p.length===n&&(ne.length?fb.startsWith('All Nash equilibria found'):fb.includes('0 Nash'));if(!ok)bad++;
   out.push(`${where} random ${n}×${n}: NE ${JSON.stringify(ne)} → ${fb.split('\n')[0]} ${ok?'OK':'FAIL'}`)}
  // own payoffs: a prisoner's dilemma in profits
  await ev(`${H()}.querySelector('[data-rnd="2"]').click()`);await B.sleep(60);await ev(`${H()}.querySelector('[data-edit]').click()`);await B.sleep(60);
  const mine=[[[3,3],[0,5]],[[5,0],[1,1]]];
  await ev(`(()=>{const m=${JSON.stringify(mine)};${H()}.querySelectorAll('[data-e]').forEach(x=>{const [i,j,k]=x.dataset.e.split('-').map(Number);x.value=m[i][j][k]});${H()}.querySelector('[data-apply]').click();return 1})()`);await B.sleep(80);
  await ev(`${H()}.querySelector('.mx-cell[data-i="1"][data-j="1"]').click()`);await ev(`${H()}.querySelector('[data-chk]').click()`);
  const fb=await ev(`${H()}.querySelector('.game-fb').innerText`),title=await ev(`${H()}.querySelector('.w-title')?${H()}.querySelector('.w-title').textContent:'(compact)'`);
  // exam answers on the edited game
  for(let t=0;t<8;t++){if(!await ev(`!!${H()}.querySelector('[data-q]')`))break;await ev(`${H()}.querySelector('[data-q]').click()`)}
  const ans=await ev(`[...${H()}.querySelectorAll('.mx-a')].map(x=>x.innerText).join(' | ')`);
  const ok=fb.startsWith('All Nash equilibria found')&&/Yes: Strategy 2/.test(ans)&&/expected solution/.test(ans);if(!ok)bad++;
  out.push(`${where} own payoffs ${JSON.stringify(mine)} (${title}): ${fb.split('\n')[0]} · answers: ${ans.slice(0,160)} ${ok?'OK':'FAIL'}`)}
 console.log(out.join('\n'));console.log('FAILURES',bad,'console:',B.logs.join(' | ')||'no errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
