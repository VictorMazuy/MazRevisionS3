/* ---------- v3: third mock = the midterm site's mock exam (20 questions of its bank, no help until the end) ---------- */
{const per={c1:3,c2:3,c3:3,c4:2,c5:3,c6:4,c7:2},n={};let k=0;
 const items=MIDQUIZ.filter(([ch])=>{n[ch]=(n[ch]||0)+1;return n[ch]<=per[ch]}).map(([ch,q,o,a,e])=>({id:'b'+(++k),topic:CH2T[ch],type:'mcq',pts:1,q,o:o.slice(),a,solution:e}));
 MOCKS.push({id:'m3',title:'Midterm mock (midterm site)',exam:'mid',scope:'Sessions 1–4 · midterm site chapters 1–7',duration:30,total:20,calculator:'No material',
  summary:'The mock exam of the midterm revision site: 20 MCQs and true/false questions from its bank, spread over the seven chapters, no feedback until you hand in.',
  intro:'<p>Taken from the midterm site (“20 random questions, no help”), with a fixed selection so the paper can be printed and compared. Part 2 of that mock was a written case: practise it in the <b>Practical cases</b> tab (“Sarah’s cosmetics brand”).</p>',
  sections:[{title:'MCQs',items}]});}
