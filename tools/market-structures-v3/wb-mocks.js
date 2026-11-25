// MSP mocks: every auto-marked question on chapter 2 points 1–6 is answered through the interface (after checking the declared answer
// against the matrix shown when there is one), the paper is handed in, and each of these questions must get full marks.
const {open}=require('./cdp.js');
const P16=/dominant|nash|prisoner|confess|cartel|maintain|break|tit-for-tat|repeated|battle|sexes|co₂|mechanism|payoff|expected solution|game theory|matrix|sequential|subgame|leader/i;
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html',{w:1000,h:900});await B.sleep(1000);const ev=B.ev,out=[];let bad=0;
 for(const mid of ['m1','m2','m3','m4']){await ev(`location.hash='#market-structures-mocks-${mid}'`);await B.sleep(500);await ev(`document.querySelector('#mkStart').click()`);await B.sleep(400);
  const items=await ev(`(()=>{const m=Rev.subject('market-structures').mocks.find(x=>x.id==='${mid}');return m.sections.flatMap(s=>s.items.map(x=>({id:x.id,topic:x.topic,type:x.type,q:String(x.q||'').replace(/<[^>]+>/g,' '),a:x.a,o:x.o,parts:(x.parts||[]).map(p=>({type:p.type,a:p.a,answer:typeof p.answer==='function'?null:p.answer,accept:p.accept,q:String(p.q||'')}))})))})()`);
  const targets=[];
  for(let k=0;k<items.length;k++){const x=items[k];if(x.topic!=='c2'||x.type==='written'||!(P16.test(x.q+JSON.stringify(x.parts))))continue;
   if(/centipede|ultimatum|bertrand|hotelling|ice-cream|beach/i.test(x.q))continue;targets.push(x.id);
   await ev(`(()=>{const mq=[...document.querySelectorAll('.mq')][${k}],x=${JSON.stringify(x)};
     const pick=(root,a)=>{const b=root.querySelector('.opt[data-i="'+a+'"]');b.click()};
     if(x.type==='mcq')pick(mq,x.a);
     else if(x.type==='case')[...mq.querySelectorAll('.part')].forEach((pt,i)=>{const p=x.parts[i];if(p.type==='mcq')pick(pt,p.a);else{const inp=pt.querySelector('input');if(inp){inp.value=String(p.answer!=null?p.answer:(p.accept||[''])[0]);inp.dispatchEvent(new Event('input'))}}});
     return 1})()`)}
  // the matrix questions: recompute the expected answer from the matrix printed in the paper
  const mats=await ev(`[...document.querySelectorAll('table.pm')].map(t=>({rows:[...t.querySelectorAll('tbody th:not(.mx-pl)')].map(x=>x.textContent),p:[...t.querySelectorAll('tbody tr')].map(tr=>[...tr.querySelectorAll('td')].map(td=>td.textContent.replace(/[()\\s]/g,'').split(';').map(Number)))}))`);
  mats.forEach((m,i)=>{const p=m.p,R=p.length,C=p[0].length;
   const br1=[...Array(C)].map((_,j)=>{const b=Math.max(...p.map(r=>r[j][0]));return p.map((r,ii)=>r[j][0]===b?ii:-1).filter(z=>z>=0)});
   const br2=p.map(r=>{const b=Math.max(...r.map(c=>c[1]));return r.map((c,j)=>c[1]===b?j:-1).filter(z=>z>=0)});
   const ne=[];for(let a=0;a<R;a++)for(let b=0;b<C;b++)if(br1[b].includes(a)&&br2[a].includes(b))ne.push(m.rows[a]+'/'+m.rows[b]);
   const domR=[...Array(R).keys()].find(a=>[...Array(R).keys()].every(k=>k===a||p[a].every((c,j)=>c[0]>p[k][j][0])));
   const domC=[...Array(C).keys()].find(b=>[...Array(C).keys()].every(k=>k===b||p.every(r=>r[b][1]>r[k][1])));
   out.push(`  ${mid} matrix ${i+1} ${JSON.stringify(p)}: NE ${ne.join(', ')||'none'} · dominant P1 ${domR==null?'none':m.rows[domR]}, P2 ${domC==null?'none':m.rows[domC]}`)});
  await ev(`document.querySelector('[data-hand]').click()`);await B.sleep(100);await ev(`document.querySelector('[data-yes]').click()`);await B.sleep(500);
  const verd=await ev(`[...document.querySelectorAll('.mq')].map(q=>{const v=q.querySelector('.verdict');return v?v.textContent:''})`);
  targets.forEach(id=>{const k=items.findIndex(x=>x.id===id),v=verd[k]||'';const ok=v.trim().startsWith('✓');if(!ok)bad++;out.push(`${mid}/${id} (${items[k].type}): ${v.split('·')[0].trim()} ${ok?'OK':'FAIL'}`)})}
 console.log(out.join('\n'));console.log('FAILURES',bad,'console:',B.logs.join(' | ')||'no errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
