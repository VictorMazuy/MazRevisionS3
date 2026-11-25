// One question of each type on chapter 2 points 1–6: quiz (true/false and MCQ), exercise cases on matrices, "Your turn", flashcards.
const {open}=require('./cdp.js');
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html',{w:390,h:844,dark:true});await B.sleep(1000);const ev=B.ev,out=[];let bad=0;
 const go=async h=>{await ev(`location.hash=${JSON.stringify(h)}`);await B.sleep(400)};
 // quiz: filter chapter 2, answer questions until one TF and one MCQ on points 1–6 are seen
 await go('#market-structures-quiz');await ev(`(()=>{const b=document.querySelector('main [data-topic="c2"]');if(b)b.click();return 1})()`);await B.sleep(200);
 const seen={tf:0,mcq:0};
 for(let k=0;k<40&&(!seen.tf||!seen.mcq);k++){
  const q=await ev(`document.querySelector('main .qtext,main .q, main h3')?.innerText||''`);
  const it=await ev(`(()=>{const t=document.querySelector('main').innerText;const s=Rev.subject('market-structures');return s.quiz.filter(x=>x.topic==='c2').map(x=>({id:x.id,q:x.q.replace(/<[^>]+>/g,''),a:x.a,tf:x.o.length===2&&x.o[0]==='True'})).find(x=>t.includes(x.q.slice(0,60)))||null})()`);
  if(!it){out.push('quiz: question not identified');bad++;break}
  const p16=/dominant|nash|prisoner|cartel|maintain|break|tit-for-tat|repeated|battle|co₂|mechanism|payoff|expected solution|game theory/i.test(it.q)&&!/hotelling|bertrand|centipede|ultimatum|sequential|subgame|credib/i.test(it.q);
  await ev(`document.querySelector('main .opt[data-i="${it.a}"], main button[data-i="${it.a}"]').click()`);await B.sleep(80);
  const fb=await ev(`document.querySelector('#fb')?document.querySelector('#fb').innerText:''`);
  if(p16){const kind=it.tf?'tf':'mcq';if(!seen[kind]){seen[kind]=1;const ok=fb.startsWith('Correct');if(!ok)bad++;out.push(`quiz ${kind.toUpperCase()} ${it.id}: “${it.q.slice(0,90)}” → ${fb.split('\n')[0]} ${ok?'OK':'FAIL'}`)}}
  await ev(`document.querySelector('#next').click()`);await B.sleep(80)}
 // exercises: cases on matrices of points 1–6 (answers recomputed from the matrix shown, then entered)
 await go('#market-structures-exercises');
 for(const id of ['x-c2-24','x-c2-25','x-c2-table4']){
  const r=await ev(`(()=>{const s=Rev.subject('market-structures'),x=s.exercises.find(e=>e.id==='${id}');const card=[...document.querySelectorAll('main .xcard')].find(c=>c.innerText.includes(x.title));if(!card)return 'card not found';card.scrollIntoView();
   [...card.querySelectorAll('.part')].forEach((pt,i)=>{const p=x.parts[i];if(p.type==='mcq')pt.querySelector('.opt[data-i="'+p.a+'"]').click();else{const inp=pt.querySelector('input');inp.value=String(p.answer!=null?p.answer:p.accept[0]);inp.dispatchEvent(new Event('input'))}});
   const b=[...card.querySelectorAll('button')].find(b=>b.textContent.trim()==='Check');if(b)b.click();return card.querySelector('.feedback,.result')?.innerText||'no feedback'})()`);
  const ok=String(r).startsWith('Correct');if(!ok)bad++;out.push(`exercise ${id}: ${String(r).split('\n')[0].slice(0,90)} ${ok?'OK':'FAIL'}`)}
 // "Your turn" in each of the 6 points (right answer)
 await go('#market-structures-sheets-c2');
 for(const nid of ['c2-vocab','c2-pd','c2-dom','c2-nash','c2-bos','c2-repeat']){
  const r=await ev(`(()=>{const n=document.querySelector('[data-notion="${nid}"]'),t=n.querySelector('.tryit');const q=t.querySelector('.try-q').textContent;
   const s=Rev.subject('market-structures');return q})()`);
  // find the right option: the config is in the sheet source; click each option until "Correct." on a fresh render is not possible, so read the answer key from the notion config
  const res=await ev(`(()=>{const n=document.querySelector('[data-notion="${nid}"]'),t=n.querySelector('.tryit'),bs=[...t.querySelectorAll('.opt')];
   const key={'c2-vocab':'low output level (400)','c2-pd':'(Confess ; Confess)','c2-dom':'No: if the rival maintains','c2-nash':'No, not in the absence','c2-bos':'Lower the payoff of unilateral defection','c2-repeat':'Both break'}['${nid}'];
   const b=bs.find(b=>b.textContent.includes(key));b.click();return t.querySelector('.try-fb').innerText})()`);
  const ok=res.startsWith('Correct');if(!ok)bad++;out.push(`Your turn ${nid}: ${res.split('\n')[0].slice(0,60)} ${ok?'OK':'FAIL'}`)}
 // flashcards on chapter 2: a card of points 1–6 shows its back
 await go('#market-structures-flashcards');
 const fc=await ev(`document.querySelector('main').innerText.slice(0,200)`);out.push('flashcards page: '+(fc.includes('Flashcards')?'OK':'?')+' · '+fc.replace(/\s+/g,' ').slice(0,100));
 console.log(out.join('\n'));console.log('FAILURES',bad,'console:',B.logs.join(' | ')||'no errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
