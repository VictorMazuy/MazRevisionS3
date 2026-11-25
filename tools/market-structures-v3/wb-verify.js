// Points 1–6 of MSP chapter 2 vs the model: (1) every sentence and every block type of the model is present, in the same order;
// (2) every matrix (sheet and Labs) gives the model's solution: best responses, Nash equilibria, sequential outcome.
const {open}=require('./cdp.js'),fs=require('fs');
const FILE=process.argv[2]||'file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html';
const html=fs.readFileSync(__dirname+'/model-c2.html','utf8');
const G=JSON.parse(fs.readFileSync(__dirname+'/msp-mid.json','utf8')).GAMES;
const txt=h=>h.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
const norm=t=>t.toLowerCase().replace(/[’'"“”]/g,"'").replace(/[^a-z0-9₂']+/g,' ').trim();
const IDS={'c2-1':'c2-vocab','c2-11':'c2-pd','c2-12':'c2-dom','c2-13':'c2-nash','c2-2':'c2-bos','c2-3':'c2-repeat'};
// model's analysis (same rules as analyse() of the midterm site)
const analyse=g=>{const n=g.p.length,m=g.p[0].length,best=a=>g.min?Math.min(...a):Math.max(...a);
 const br1=[...Array(m)].map((_,j)=>{const col=g.p.map(r=>r[j][0]),b=best(col);return col.map((v,i)=>v===b?i:-1).filter(i=>i>=0)});
 const br2=[...Array(n)].map((_,i)=>{const row=g.p[i].map(c=>c[1]),b=best(row);return row.map((v,j)=>v===b?j:-1).filter(j=>j>=0)});
 const ne=[];for(let i=0;i<n;i++)for(let j=0;j<m;j++)if(br1[j].includes(i)&&br2[i].includes(j))ne.push([i,j]);
 const follow=br2.map(x=>x[0]),outs=follow.map((j,i)=>g.p[i][j][0]),b=best(outs),lead=outs.indexOf(b);return {br1,br2,ne,spne:[lead,follow[lead]]}};
(async()=>{const B=await open(FILE+'#market-structures-sheets-c2',{w:1200,h:900});await B.sleep(1400);const ev=B.ev,out=[];let bad=0;
 // (1) text and blocks
 for(let part of html.split('<section class="block" id="').slice(1)){const id=part.slice(0,part.indexOf('"')),nid=IDS[id];part=part.slice(part.indexOf('>')+1);
  const site=await ev(`(()=>{const n=document.querySelector('[data-notion="${nid}"]');return {t:n.innerText,h:n.querySelector('h3').textContent,blocks:[...n.querySelectorAll('.wb>*')].map(x=>x.className.split(' ')[0]||x.tagName.toLowerCase())}})()`);
  const S=norm(site.t);const sents=txt(part.replace(/<h2>[\s\S]*?<\/h2>/,'')).split(/(?<=[.:;!?])\s+/).filter(x=>x.length>12);
  const miss=sents.filter(x=>!S.includes(norm(x)));
  const model=[...part.matchAll(/^\s{4}<(div|p|h3)(?:\s+class="([a-z0-9]+)[^"]*")?/gm)].map(m=>m[1]==='h3'?'wb-h3':m[1]==='p'?(m[2]==='src'?'src':'prose'):m[2]==='mx'?'mxlab':m[2]||m[1]);
  const sb=site.blocks.map(b=>b==='mxlab'||b==='w'?'mxlab':b==='h4'?'wb-h3':b).filter(b=>b!=='');
  // the model's blocks must appear first, in the same order (the site's extra blocks come after)
  const k=model.map(x=>x==='mxlab'?'mxlab':x);let p=0;const order=k.every(x=>{const i=sb.indexOf(x,p);if(i<0)return false;p=i+1;return true});
  const head=norm(site.h).replace(/ /g,'')===norm(txt(part.match(/<h2>([\s\S]*?)<\/h2>/)[1])).replace(/ /g,'');
  if(miss.length||!order||!head)bad++;
  out.push(`${id} → ${nid}: heading ${head?'same':'DIFFERENT'} · ${sents.length} sentences, missing ${miss.length}${miss.length?' ('+miss.join(' | ').slice(0,200)+')':''} · model blocks [${k.join(', ')}] in order: ${order}`)}
 // (2) matrices
 const test=async(where,k)=>{const g=G[k],A=analyse(g),sig=g.p.flat().map(c=>c.join(';')).join('|');
  const host=`(()=>[...document.querySelectorAll('main .mxlab')].find(x=>[...x.querySelectorAll('tbody th:not(.mx-pl)')].map(t=>t.textContent).join('|')+'#'+[...x.querySelectorAll('td.mx-cell')].map(td=>td.textContent.replace(/[()\\s]/g,'')).join('|')===${JSON.stringify(g.r.join('|')+'#'+sig)}))()`;
  if(!await ev(`!!${host}`)){bad++;out.push(`${where} ${k}: NOT FOUND`);return}
  for(const [i,j] of A.ne)await ev(`${host}.querySelector('.mx-cell[data-i="${i}"][data-j="${j}"]').click()`);
  await ev(`${host}.querySelector('[data-chk]').click()`);const fb=await ev(`${host}.querySelector('.game-fb').innerText`);
  await ev(`${host}.querySelector('[data-br]').click()`);
  const u1=await ev(`[...${host}.querySelectorAll('u.br1')].map(u=>u.closest('td').dataset.i+'-'+u.closest('td').dataset.j).sort().join(',')`);
  const u2=await ev(`[...${host}.querySelectorAll('u.br2')].map(u=>u.closest('td').dataset.i+'-'+u.closest('td').dataset.j).sort().join(',')`);
  const e1=A.br1.flatMap((is,j)=>is.map(i=>i+'-'+j)).sort().join(','),e2=A.br2.flatMap((js,i)=>js.map(j=>i+'-'+j)).sort().join(',');
  let seq='—';const tb=await ev(`!!${host}.querySelector('[data-tree]')`);
  if(tb){await ev(`${host}.querySelector('[data-tree]').click()`);seq=await ev(`[...${host}.querySelectorAll('.box li')].pop().innerText`)}
  const seqOK=!tb||seq.includes(`Outcome (${g.r[A.spne[0]]} ; ${g.c[A.spne[1]]})`);
  const ok=fb.startsWith('All Nash equilibria found')&&u1===e1&&u2===e2&&seqOK;if(!ok)bad++;
  out.push(`${where} ${k}: NE ${JSON.stringify(A.ne)} ${fb.startsWith("All Nash")?"✓":"✗ ["+fb.slice(0,70)+"]"} · best responses ${u1===e1&&u2===e2?'✓':'✗'} · lower-is-better caption ${g.min?await ev(`${host}.innerText.includes('lower is better')`):'n/a'}${tb?` · SPNE (model) (${g.r[A.spne[0]]} ; ${g.c[A.spne[1]]}) ${seqOK?'✓':'✗ '+seq}`:''}`)};
 for(const k of ['pd','t2','t3','t4','bos','co2a','co2b','mb']){await ev('location.reload()');await B.sleep(1300);await test('sheet',k)}
 for(const k of ['pd','t2','t3','t4','bos','co2a','co2b','mb']){await ev(`location.hash='#market-structures-tools-mx-c2-${k}'`);await B.sleep(350);await test('Labs',k)}
 console.log(out.join('\n'));console.log('FAILURES',bad,'console:',B.logs.join(' | ')||'no errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
