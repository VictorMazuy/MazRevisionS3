/* ---------- v3: the midterm site's question bank, definitions, open questions, labs and mock midterm ---------- */
{const words=s=>new Set(String(s).toLowerCase().replace(/<[^>]+>/g,' ').replace(/^true or false:?/,'').replace(/[^a-z0-9]+/g,' ').split(' ').filter(w=>w.length>3));
 const sim=(a,b)=>{const A=words(a),B=words(b);let n=0;A.forEach(w=>{if(B.has(w))n++});return n/Math.max(1,Math.min(A.size,B.size))};
 const known=QUIZ.map(q=>q.q);const dup=s=>known.some(k=>sim(s,k)>=0.8);
 let k=98;
 MID_TF.forEach(t=>{const q='True or false: '+t.s.charAt(0).toLowerCase()+t.s.slice(1);if(dup(t.s))return;QUIZ.push({id:'q'+(k++),topic:ch2t(t.ch),src:'midterm',q,o:TF,a:t.a?0:1,e:`${t.a?'TRUE':'FALSE'} (${t.ref}): ${t.e}`})});
 MID_MCQ.forEach(m=>{if(dup(m.s))return;QUIZ.push({id:'q'+(k++),topic:ch2t(m.ch),src:'midterm',q:m.s,o:m.o.slice(),a:m.a,e:m.e,keep:!!m.how})});
 const fronts=new Set(CARDS.map(c=>c.f.toLowerCase().replace(/[^a-z]+/g,' ').trim()));let c=60;
 MID_CARDS.forEach(([f,b,ch])=>{if(fronts.has(f.toLowerCase().replace(/[^a-z]+/g,' ').trim()))return;CARDS.push({id:'c'+(c++),topic:ch2t(ch),f,b})});}
// open questions of the midterm format (Q1: 1 pt "Explain…"; Q2: 3 pts, 100 words or fewer), self-assessed with the rubric
const OPEN_T=[['c1','mc'],['c2','bertrand'],['c1','elast'],['c2','threat'],['c2','pd'],['c1','run'],['c2','hotel'],['c2','pd2'],['c1','pc'],['c2','nash'],['c2','climate'],['c1','power'],['c2','ultimatum']];
MID_OPEN1.concat(MID_OPEN2).forEach((o,i)=>{const [topic,key]=OPEN_T[i],q2=i>=MID_OPEN1.length;
 EXERCISES.push({id:`x-${topic}-open-${key}`,topic,type:'case',src:'midterm',title:`${q2?'Open question 2 (3 pts, ≤ 100 words)':'Open question 1 (1 pt)'}: ${o.q.replace(/<[^>]+>/g,'').replace(/^In 100 words or fewer: /,'').slice(0,60)}…`,
  q:`<p>${o.q}</p><p class="hint">Midterm format (midterm site). Write your answer, then compare with the model and the grading points.</p>`,
  solution:`<p>${o.m}</p><p><b>Grading points</b></p><ul>${o.r.map(x=>`<li>${x}</li>`).join('')}</ul>`})});
// labs: the in-sheet labs, the course's games with their sequential version, the generators
GENS.push(G_PCTQ,G_FORMS,G_AB1,G_EXAM,G_AB2);
{const hi=TOOLS.findIndex(x=>x.id==='p-c2-hotel');if(hi>=0)TOOLS[hi].presets=HOTEL_PRESETS;
 const pd=TOOLS.find(x=>x.id==='pl-pd');if(pd)pd.strategies=['allc','alld','tft','random','grim','tf2t'];
 // the mock exams' matrices in the same component as the chapter (MATRIX, midterm-site format)
 const mg=(id,g,title,blurb)=>Object.assign({kind:'matrix',id,topic:'c2',title,blurb},g,{name:title});
 // course tables now exist as MATRIX items (mx-c2-…): the old GAME / PLAY duplicates leave the Labs tab
 ['gm-t3','gm-bos','gm-co2a','gm-co2b','pl-pd','gm-gen'].forEach(id=>{const i=TOOLS.findIndex(x=>x.id===id);if(i>=0)TOOLS.splice(i,1)});
 TOOLS.unshift(LAB_GAME);
 TOOLS.push(...MX_ITEMS,PD_PLAY,
  mg('gm-mid5',MID_GAMES.mid5,'Mock midterm matrix (MCQ 5–7)','Dominant strategy, Nash equilibria, equilibrium in dominant strategies'),
  mg('gm-mid8',MID_GAMES.mid8,'Mock midterm 4 × 4 (MCQ 8): how many Nash equilibria?','The 4 × 4 counting question'),
  mg('gm-mid9',MID_GAMES.mid9,'Mock midterm sequential game (MCQ 9–10)','Duopolist 1 leads: backward induction'),
  mg('gm-fin2',MID_GAMES.fin2,'Final mock Q2 matrix','Dominant strategy of duopolist 2, unique NE, SPNE'),
  ...VARIAN_STEPS,
  {kind:'steps',id:'st-c2-centi',topic:'c2',title:'The centipede game, solved backwards',blurb:'Six stages, one backward step at a time',intro:CENT_FIG,steps:['Start at the last node. B compares Stop (5;7) with Continue (8;6).','Step 1: B stops, 7 &gt; 6.','Step 2: A anticipates B stopping. A stops: 6 &gt; 5.','Step 3: B anticipates A stopping. B stops: 5 &gt; 4.','Step 4: A stops: 4 &gt; 3.','Step 5: B stops: 3 &gt; 2.','Step 6: A stops immediately: 2 &gt; 1. Outcome (2 ; 0), although continuing to the end gives (8 ; 6). Lesson: an early decision depends on the later actions you can rationally anticipate (strategic foresight).']});}
// the midterm mock of the midterm site: 16 MCQs + 2 open questions, 60 minutes, on 20
{const W=Rev.W,items=[];let n=0;const add=x=>{n++;items.push(Object.assign({id:'mm'+n,pts:1,type:'mcq'},x))};
 const how=MID_MCQ.find(m=>m.how);add({topic:'c1',q:how.s,o:how.o,a:how.a,solution:how.e,keep:true});
 const gq=(g,title)=>`<p>${title}</p>${mtxH(g.p,g.pl[0],g.pl[1],g.r,g.c)}`;
 const g5=MID_GAMES.mid5,s5=W.solveGame(g5.p),rs5=g5.r,cs5=g5.c;
 add({topic:'c2',q:gq(g5,'MCQ 2–4: the profit matrix of two duopolists that play a one-shot simultaneous game, with each having 2 strategies:')+'<p>Does Duopolist 1 have a dominant strategy? If so, which one?</p>',o:['Yes: '+rs5[0],'Yes: '+rs5[1],'No, there is no dominant strategy'],a:s5.domR<0?2:s5.domR,solution:W.gameSolution(g5.p,rs5,cs5,g5.pl[0],g5.pl[1]),keep:true});
 const ne5=neLabel(rs5,cs5,s5.ne),o5=[ne5,neLabel(rs5,cs5,[[0,0]]),neLabel(rs5,cs5,[[1,1]]),neLabel(rs5,cs5,[[0,0],[1,1]]),neLabel(rs5,cs5,[])].filter((x,i,a)=>a.indexOf(x)===i).slice(0,4);
 add({topic:'c2',q:'<p>Same matrix. Which is/are the Nash equilibrium(s)?</p>',o:o5,a:0,solution:'See the best responses in the solution of the previous question.'});
 add({topic:'c2',q:'<p>Same matrix. Is there an equilibrium in dominant strategies?</p>',o:['Yes: ('+rs5[0]+' ; '+cs5[0]+')','Yes: ('+rs5[1]+' ; '+cs5[0]+')','No, there is no equilibrium in dominant strategies'],a:s5.domR>=0&&s5.domC>=0?(s5.domR===0&&s5.domC===0?0:1):2,solution:'Both players need a dominant strategy; duopolist 1 has none here.',keep:true});
 const g8=MID_GAMES.mid8,s8=W.solveGame(g8.p);
 add({topic:'c2',q:gq(g8,'MCQ 5: two duopolists, one-shot simultaneous game, 4 strategies each. How many Nash equilibria are there in this game?'),o:['0','1','2','3','4','5'],a:s8.ne.length,solution:W.gameSolution(g8.p,g8.r,g8.c,g8.pl[0],g8.pl[1]),keep:true});
 const g9=MID_GAMES.mid9,q9=W.seqSolve(g9.p),s9=W.solveGame(g9.p);const sp9=[[0,0],[0,1],[1,0],[1,1]].map(c=>`${cellL(g9.r,g9.c,c)}, payoffs (${g9.p[c[0]][c[1]].join(' ; ')})`);
 add({topic:'c2',q:gq(g9,'MCQ 6–7: the profit matrix of two duopolists that play a one-shot <b>sequential</b> game with player 1 the leader, each with 2 strategies:')+'<p>Which is the subgame-perfect Nash equilibrium?</p>',o:sp9,a:q9.cell[0]*2+q9.cell[1],solution:W.seqTreeSVG(g9.p,g9.r,g9.c,g9.pl[0],g9.pl[1],false,true)+'<ol>'+W.seqSteps(g9.p,g9.r,g9.c,g9.pl[0],g9.pl[1]).map(x=>`<li>${x}</li>`).join('')+'</ol>',keep:true});
 const in9=s9.ne.some(([i,j])=>i===q9.cell[0]&&j===q9.cell[1]);
 add({topic:'c2',q:'<p>Same sequential game. Which statement is correct?</p>',o:['The subgame-perfect outcome is also a Nash equilibrium of the simultaneous game','The subgame-perfect outcome is not a Nash equilibrium of the simultaneous game','The order of play never matters for the outcome of a game'],a:in9?0:1,solution:`Simultaneous Nash equilibria: ${neLabel(g9.r,g9.c,s9.ne)}. In this battle-of-the-sexes structure the leader picks his preferred equilibrium.`,keep:true});
 [[0,40],[5,47],[12,60],[20,70]].forEach(([a,b])=>{const x=MID_TF[a],y=MID_TF[b];add({topic:x.ch===2||y.ch===2?'c2':'c1',q:`<p><b>Statement A:</b> ${esc(x.s)}</p><p><b>Statement B:</b> ${esc(y.s)}</p>`,o:AB_OPTS,a:(x.a?0:2)+(y.a?0:1),keep:true,solution:`<p>A is ${x.a?'TRUE':'FALSE'}: ${esc(x.e)}</p><p>B is ${y.a?'TRUE':'FALSE'}: ${esc(y.e)}</p>`})});
 MID_MCQ.filter(m=>!m.how).filter((_,i)=>i%5===0).slice(0,5).forEach(m=>add({topic:ch2t(m.ch),q:m.s,o:m.o,a:m.a,solution:m.e}));
 const o1=MID_OPEN1[0],o2=MID_OPEN2[0];
 // rubric points: equal shares in quarter points, the last criterion takes the rest (sum = pts exactly)
 const rub=(rs,pts)=>{const q=Math.floor(pts/rs.length*4)/4;return rs.map((c,i)=>({c,pts:i<rs.length-1?q:pts-q*(rs.length-1)}))};
 MOCKS.push({id:'m4',title:'Mock midterm (midterm site)',exam:'midterm',scope:'Chapters 1–2',duration:60,total:20,calculator:'No calculator',
  summary:'The midterm structure: open question 1 (1 pt), open question 2 (3 pts, 100 words or fewer), 16 MCQs. Taken from the midterm revision site, with a fixed paper.',
  intro:'<p>1 hour, closed book, no calculator. Each MCQ counts 1 point (the structure does not say whether wrong answers are penalized: none are here). Open questions are graded with the rubric after you hand in.</p>',
  sections:[{title:'Open questions',items:[
    {id:'o1',topic:'c1',type:'written',pts:1,title:'Open question 1',q:`<p>${o1.q}</p>`,lines:5,rubric:rub(o1.r,1),solution:`<p>${o1.m}</p>`},
    {id:'o2',topic:'c2',type:'written',pts:3,title:'Open question 2',q:`<p>${o2.q}</p>`,lines:10,rubric:rub(o2.r,3),solution:`<p>${o2.m}</p>`}]},
   {title:'16 MCQs',items}]});}
