/* ---------- v3 (24/11): chapters 1–2 merged with the midterm revision site (MSP Revision.html, data in MID_*),
   game-theory labs placed in the sheets and in the Labs tab ---------- */
const {GEN,EXI,MATRIX}=Rev.h;
// the course games in the format of the midterm revision site (MATRIX: click the Nash equilibria, best responses, exam questions, sequential version)
const MXG=k=>MATRIX(Object.assign({id:'mx-c2-'+k},MID_GAMES[k]));
const MX_ITEMS=['pd','t2','t3','t4','bos','co2a','co2b','mb'].map(k=>Object.assign({kind:'matrix',id:'mx-c2-'+k,topic:'c2',title:MID_GAMES[k].name,blurb:'Midterm-site format: click the Nash equilibria, best responses, exam questions, sequential version'},MID_GAMES[k]));
const MIDP='<span class="pill src">Midterm site</span>';
const ch2t=ch=>ch===2?'c2':'c1';
// a generated game as in the midterm lab: payoffs 0–9, distinct for player 1 in each column and for player 2 in each row (no ties)
const randGame=(u,n,m)=>{const p=[...Array(n)].map(()=>[...Array(m)].map(()=>[0,0]));
  for(let j=0;j<m;j++){const v=u.shuffle([...Array(10).keys()]);for(let i=0;i<n;i++)p[i][j][0]=v[i]}
  for(let i=0;i<n;i++){const v=u.shuffle([...Array(10).keys()]);for(let j=0;j<m;j++)p[i][j][1]=v[j]}return p};
const SN=k=>['Strategy 1','Strategy 2','Strategy 3','Strategy 4'][k];
const cellL=(rs,cs,[i,j])=>`(${rs[i]} ; ${cs[j]})`;
const neLabel=(rs,cs,ne)=>ne.length?ne.map(c=>cellL(rs,cs,c)).join(' and ')+(ne.length===1?' only':''):'There is no Nash equilibrium (in pure strategies)';
// matrices in statements, generators and mocks: same format as the chapter (Rev.W.pmTable, static: no solution shown)
const mtxH=(m,rl,cl,rs,cs)=>Rev.W.pmTable(m,rs,cs,rl,cl);
const AB_OPTS=['Both statements are true','Statement A is true; Statement B is false','Statement A is false; Statement B is true','Both statements are false'];

/* ---- labs used both in the sheets and in the Labs tab (same ids: one record) ---- */
// the payoff-matrix lab in the chapter's component (MATRIX): random 2 × 2, 3 × 3, 4 × 4 games as on the midterm site, or your own payoffs
const LAB_GAME={kind:'matrix',id:'mx-c2-lab',topic:'c2',title:'Payoff matrix lab: random games or your own payoffs',blurb:'Random 2 × 2, 3 × 3 or 4 × 4 game, or type your own matrix: click the Nash equilibria, best responses, exam questions, sequential version',
 name:'Random game',gen:{sizes:[2,3,4]},edit:true};
const PD_PLAY={kind:'play',id:'pl-c2-pd',topic:'c2',title:'The prisoner’s dilemma against the computer',blurb:'One-shot or repeated, six strategies for the computer, score table and explanation',
 rows:['Deny','Confess'],m:[[[2,2],[10,1]],[[1,10],[8,8]]],higher:false,rounds:[1,5,10,'?'],delta:0.8,strategies:['allc','alld','tft','random','grim','tf2t'],
 names:{allc:'Always deny (cooperate)',alld:'Always confess (betray)',tft:'Tit-for-tat (donnant-donnant)'},
 notes:o=>`Payoffs are years in prison (Table 1): a <b>lower</b> total is better. ${OUT} the repeated-game reasoning of the INSIGHTS is stated for firms (maintain-break game); grim trigger and tit-for-two-tats are not in the course: they are added to compare with tit-for-tat.`};
const HOTEL_PRESETS=[{l:'Socially optimal (0.5 and 1.5 km)',v:{x1:0.5,x2:1.5}},{l:'One round: each cart moves 100 m towards the centre',v:p=>({x1:p.x1<1?Math.min(1,p.x1+0.1):Math.max(1,p.x1-0.1),x2:p.x2<1?Math.min(1,p.x2+0.1):Math.max(1,p.x2-0.1)})},{l:'Nash equilibrium under fixed prices',v:{x1:1,x2:1}},{l:'Prices liberalized (illustration)',v:{x1:0.7,x2:1.3}}];
const exNE=v=>v.ne;
// "Answer like the exam" (midterm MCQ formats on generated games)
const G_EXAM={kind:'gen',id:'g-c2-exam',topic:'c2',title:'Answer like the exam: midterm MCQs on payoff matrices',blurb:'The midterm formats: 2 × 2 simultaneous, 4 × 4 Nash count, 2 × 2 sequential with duopolist 1 as leader',
 levels:['2 × 2 simultaneous','4 × 4: how many Nash equilibria?','2 × 2 sequential (leader)'],
 gen:(u,lv)=>{const n=lv===1?4:2,m=randGame(u,n,n),rs=lv===1?['s1','s2','s3','s4']:['Strategy 1','Strategy 2'],cs=lv===1?['t1','t2','t3','t4']:['Strategy 1','Strategy 2'],s=Rev.W.solveGame(m),q=Rev.W.seqSolve(m);
  const cells=[];for(let i=0;i<n;i++)for(let j=0;j<n;j++)cells.push([i,j]);
  const right=neLabel(rs,cs,s.ne),pool=u.shuffle(cells.map(c=>neLabel(rs,cs,[c])).concat([neLabel(rs,cs,[[0,0],[1,1]]),neLabel(rs,cs,[[0,1],[1,0]]),neLabel(rs,cs,[])]).filter(x=>x!==right)).slice(0,3);
  const neO=u.shuffle([right].concat(pool));
  const dk=u.pick([0,1]);
  const spO=cells.map(c=>`${cellL(rs,cs,c)}, payoffs (${m[c[0]][c[1]].join(' ; ')})`);
  return {lv,m,rs,cs,s,q,neO,neA:neO.indexOf(right),dk,spO,spA:q.cell[0]*2+q.cell[1],inNE:s.ne.some(([i,j])=>i===q.cell[0]&&j===q.cell[1])}},
 valid:v=>!v.q.tie,
 q:v=>`<p>${v.lv===2?'One-shot <b>sequential</b> game, duopolist 1 is the <b>leader</b> (duopolist 2 observes his choice)':'One-shot <b>simultaneous</b> game'} between two duopolists, each with ${v.m.length} strategies (profits, first number = duopolist 1):</p>${mtxH(v.m,'Duopolist 1','Duopolist 2',v.rs,v.cs)}`,
 parts:v=>v.lv===0?[
   {label:`Does duopolist ${v.dk+1} have a dominant strategy? If so, which one?`,type:'choice',o:['Yes: Strategy 1','Yes: Strategy 2','No, there is no dominant strategy'],a:()=>{const d=v.dk?v.s.domC:v.s.domR;return d<0?2:d}},
   {label:'Which is/are the Nash equilibrium(s) of this game?',type:'choice',o:v.neO,a:v.neA},
   {label:'Is there an equilibrium in dominant strategies?',type:'choice',o:['Yes: (Strategy 1 ; Strategy 1)','Yes: (Strategy 1 ; Strategy 2)','Yes: (Strategy 2 ; Strategy 1)','Yes: (Strategy 2 ; Strategy 2)','No, there is no equilibrium in dominant strategies'],a:()=>v.s.domR>=0&&v.s.domC>=0?v.s.domR*2+v.s.domC:4}]
  :v.lv===1?[{label:'How many Nash equilibria are there in this game?',type:'choice',o:['0','1','2','3','4','5'],a:v.s.ne.length}]
  :[{label:'Which is the subgame-perfect Nash equilibrium?',type:'choice',o:v.spO,a:v.spA},
    {label:'Compare with the simultaneous game. Which statement is correct?',type:'choice',o:['The subgame-perfect outcome is also a Nash equilibrium of the simultaneous game','The subgame-perfect outcome is not a Nash equilibrium of the simultaneous game'],a:v.inNE?0:1}],
 steps:v=>v.lv===2?Rev.W.seqSteps(v.m,v.rs,v.cs,'Duopolist 1','Duopolist 2').concat([`Simultaneous game, for comparison: ${neLabel(v.rs,v.cs,v.s.ne)}. ${v.inNE?'The SPNE outcome is one of them.':'The SPNE outcome is not one of them: the order of play changed the outcome.'}`,Rev.W.seqTreeSVG(v.m,v.rs,v.cs,'Duopolist 1','Duopolist 2',false,true)])
  :[Rev.W.gameSolution(v.m,v.rs,v.cs,'Duopolist 1','Duopolist 2'),v.lv===1?`Count the cells where both payoffs are best responses: <b>${v.s.ne.length}</b>.`:`${v.s.ne.length===1?'A unique Nash equilibrium is the expected solution.':v.s.ne.length>1?'More than one Nash equilibrium: no expected solution without coordination.':'No Nash equilibrium in pure strategies.'} An equilibrium in dominant strategies needs <b>both</b> players to have one.`]};
// Statement A / Statement B, from the true/false bank of the midterm site
const abGen=(ch,id)=>({kind:'gen',id,topic:ch2t(ch),title:`Statement A / Statement B (chapter ${ch})`,blurb:'The midterm’s A/B format, from the true/false bank of the midterm site',
 gen:u=>{const pool=MID_TF.filter(t=>t.ch===ch),[x,y]=u.shuffle(pool).slice(0,2);return {x,y,a:(x.a?0:2)+(y.a?0:1)}},
 q:v=>`<p><b>Statement A:</b> ${esc(v.x.s)}</p><p><b>Statement B:</b> ${esc(v.y.s)}</p>`,
 parts:[{label:'Which is correct?',type:'choice',o:AB_OPTS,a:v=>v.a}],
 steps:v=>[`<b>A is ${v.x.a?'TRUE':'FALSE'}.</b> ${esc(v.x.e)} <span class="pill src">${esc(v.x.ref)}</span>`,`<b>B is ${v.y.a?'TRUE':'FALSE'}.</b> ${esc(v.y.e)} <span class="pill src">${esc(v.y.ref)}</span>`]});
const G_AB1=abGen(1,'g-c1-ab'),G_AB2=abGen(2,'g-c2-ab');

/* ---- chapter 1 generators added in v3 ---- */
const FORMS=['perfect competition','monopolistic competition','oligopoly','monopoly'];
const FORM_Q=[['do firms have market power',[0,1,1,1],'Table 2: every form except perfect competition.'],['are there barriers to entry',[0,0,1,1],'Table 2: oligopoly and monopoly.'],['are there many producers',[1,1,0,0],'Table 2: perfect competition and monopolistic competition.'],['are firms price takers',[1,0,0,0],'Only under perfect competition (horizontal demand at the market price).'],['is there strategic interaction between firms',[0,0,1,0],'Only under oligopoly: few firms take each other’s reactions into account.'],['is there free entry and exit',[1,1,0,0],'Perfect competition and monopolistic competition.'],['can products be differentiated',[0,1,1,0],'Monopolistic competition (differentiated) and oligopoly (homogeneous or differentiated); a monopoly sells a unique product.'],['does a firm face a downward-sloping demand curve',[0,1,1,1],'All price setters: monopolistic competition, oligopoly, monopoly.'],['is the long-run economic profit driven to zero by entry',[1,1,0,0],'Free entry: perfect competition and monopolistic competition.']];
const G_FORMS={kind:'gen',id:'g-c1-forms',topic:'c1',title:'“In how many of the four market forms…?”',blurb:'The midterm’s counting MCQ, from Table 2',
 gen:u=>{const k=u.int(0,FORM_Q.length-1);return {k}},
 q:v=>`<p>In how many of the four market forms ${FORM_Q[v.k][0]}?</p>`,
 parts:[{label:'Number of market forms',type:'choice',o:['0','1','2','3','4'],a:v=>FORM_Q[v.k][1].reduce((a,b)=>a+b,0)},{label:'Which ones?',type:'choice',o:v=>{const r=FORM_Q[v.k][1];return [FORMS.filter((_,i)=>r[i]).join(', ')||'none','all four',FORMS.filter((_,i)=>!r[i]).join(', ')||'none']},a:0}],
 steps:v=>[`${FORM_Q[v.k][2]}`,T(['Market form','Answer'],FORMS.map((f,i)=>[f,FORM_Q[v.k][1][i]?'yes':'no']))]};
const G_PCTQ={kind:'gen',id:'g-c1-pctq',topic:'c1',title:'Use an elasticity: predicted change in quantity',blurb:'%Δq = ε × %Δp, then name the demand',levels:['Price rise','Price cut'],
 gen:(u,lv)=>{const e=u.pick([0.1,0.2,0.4,0.5,0.8,1,1.2,1.5,2,2.5,3]),dp=u.pick([2,4,5,10,20])*(lv?-1:1);return {e:-e,dp,dq:U.round(-e*dp,6)}},
 q:v=>`<p>The price elasticity of demand is ε = ${fmt(v.e)}. The price ${v.dp>0?'rises':'falls'} by ${Math.abs(v.dp)}%. By how many percent does the quantity demanded change (approximately)?</p>`,
 parts:[{label:'%Δq',answer:v=>v.dq,unit:'%',tol:0.01},{label:'Demand is',type:'choice',o:['perfectly inelastic','inelastic','unitary elastic','elastic','perfectly elastic'],a:v=>Math.abs(v.e)<1?1:Math.abs(v.e)===1?2:3},{label:'Its curve (p on the vertical axis) is',type:'choice',o:['vertical','steep','flat','horizontal'],a:v=>Math.abs(v.e)<1?1:2}],
 steps:v=>[`ε ≈ %Δq / %Δp, so %Δq ≈ ε × %Δp = ${fmt(v.e)} × ${v.dp>0?'':'('}${fmt(v.dp)}${v.dp>0?'':')'}% = <b>${fmt(v.dq)}%</b>.`,`|ε| = ${fmt(Math.abs(v.e))} ${Math.abs(v.e)<1?'&lt; 1: inelastic (steep curve): quantity reacts less than proportionally.':Math.abs(v.e)===1?'= 1: unitary elastic.':'&gt; 1: elastic (flat curve): quantity reacts more than proportionally.'}`]};

/* ---- chapter 1: notions added from the midterm site ---- */
const C1_FIRM=NOTION({id:'c1-firm',title:'0. Firm decision-making (slides)',
 ess:'<p>The firm is “a production unit that transforms inputs into output and creates with this process added value”. Of the three economically meaningful objectives (cost minimization, revenue maximization, <b>profit maximization</b>), the course uses profit maximization. <b>Economic profit</b> (market values, opportunity costs) is more useful for decisions than accounting profit.</p>',
 understand:`<p>${MIDP} Slides only, so lighter weight: know the definitions.</p><ul>
 <li><b>The firm</b>: “a production unit that transforms inputs into output and creates with this process added value”. Inputs: labour, capital, materials. Given technological and market constraints.</li>
 <li><b>Three economically meaningful objectives</b>: cost minimization (minimize costs for a given output), revenue maximization (maximize revenues given the input), <b>profit maximization</b>. Size, quality or status maximization are less meaningful in the long term. The objective concerns the <i>principal</i>, not the agent.</li>
 <li><b>Accounting vs economic profit</b>: accounting profit uses historical costs and serves legal and reporting needs. Economic profit uses market values and includes <b>opportunity (implicit) costs</b>; it is the more useful measure for managerial decisions.</li>
 <li><b>Sources of profit</b>: innovation, risk taking, exploiting market inefficiencies (barriers to entry, sophisticated pricing, diversifying, good production decisions).</li>
 <li><b>CSR</b>: economic profit should include social and ecological costs and revenues; CSR can be seen as a managerial tool to ensure long-term economic profits.</li></ul>
 <p>Consumers are assumed <b>rational</b>: they maximize utility under their budget constraint and re-optimize when prices change (notion 1).</p>`,
 trap:'Accounting profit ≠ economic profit: economic profit subtracts the opportunity cost of the owner’s resources, so a firm can show an accounting profit and a zero economic profit.',
 tryit:{q:'Which measure includes opportunity (implicit) costs?',o:['Economic profit','Accounting profit','Revenue'],a:0,e:'Economic profit uses market values and opportunity costs; accounting profit uses historical costs.'}});
const C1_BIGTECH=NOTION({id:'c1-bigtech',title:'10. Societal discussion: market power and Big Tech',
 ess:'<p>The INSIGHTS conclude that policy action against anti-competitive conduct by Big Tech is warranted. The slides use discussion cases: AB InBev / SABMiller, insulin pricing, taxing sugary drinks, “Is Meta a monopolist?”, the alcohol-free Virgin Mary pub, superstar firms and the labour share.</p>',
 understand:`<p>${MIDP} Know the gist of each case and the concept it illustrates:</p><ul>
 <li><b>AB InBev / SABMiller</b> (case M.7881): one in three beers worldwide under one firm. Concerns: competition, dominance, consumer choice → risk of higher prices. Market considered: beer, national. The EC approved it <b>under conditions</b> (e.g. Peroni sold to Asahi). Whether it was good or bad remains open.</li>
 <li><b>Insulin pricing</b>: demand is very inelastic; with limited competition, is price regulation warranted? (price elasticity, market power)</li>
 <li><b>Taxing sugary drinks</b>: links to price elasticity.</li>
 <li><b>Is Meta a monopolist? Should it be broken up?</b> Links to network externalities.</li>
 <li><b>Virgin Mary, an alcohol-free pub in Dublin</b>: product differentiation, creating a niche under monopolistic competition.</li>
 <li><b>Superstar firms and the labour share</b> (Autor): rising market power and a falling labour share.</li></ul>`,
 trap:'The discussion cases illustrate the concepts; the exam assesses the INSIGHTS. Link each case to its concept (elasticity, network externalities, differentiation, excessive market power).',
 tryit:{q:'“Is Meta a monopolist?” mainly illustrates which barrier to entry?',o:['Network externalities','Exclusive usage rights','Economies of scale only'],a:0,e:'The value of a platform grows with its users: winner-takes-all.'}});
const C1_SORT=EXI({id:'w-c1-sortmarkets',type:'sort',title:'Classify real markets (exercise 1.7 and the course’s examples)',q:'Put each real market in its market form. A card wrongly placed shows the reason.',cats:['(Close to) perfect competition','Monopolistic competition','Oligopoly','Monopoly'],pick:10,
 items:[['Wooden HB pencils','(Close to) perfect competition','many producers, largely homogeneous, each small (Ex. 1.7)'],['Copper','(Close to) perfect competition','homogeneous commodity, price takers (Ex. 1.7)'],['Some agricultural sectors','(Close to) perfect competition','Table 2'],['Bottled water','Monopolistic competition','many firms, branding and advertising (Ex. 1.7)'],['Strawberry jam','Monopolistic competition','many brands, differentiated, easy entry (Ex. 1.7)'],['Lipstick','Monopolistic competition','many brands, differentiated, easy entry (Ex. 1.7)'],['Economics textbooks','Monopolistic competition','many publishers and authors, differentiated (Ex. 1.7)'],['Restaurants in a large city','Monopolistic competition','differentiated cuisine, location, quality, atmosphere (Ex. 1.7)'],['Retail trade','Monopolistic competition','Table 2'],['An alcohol-free pub in Dublin (Virgin Mary)','Monopolistic competition','a niche created by product differentiation (slides)'],['Mobile phone producers','Oligopoly','few large firms; technological, scale, branding and legal barriers (Ex. 1.7)'],['Mobile phone operators','Oligopoly','spectrum, infrastructure, regulation and scale barriers (Ex. 1.7)'],['Oil, steel','Oligopoly','Table 2'],['Smartphones','Oligopoly','market atomism violated'],['Retail water and sewerage in a region','Monopoly','within a region; sometimes oligopoly-like depending on institutions (Ex. 1.7)'],['Public utilities','Monopoly','Table 2']]});

/* ---- chapter 2: Varian's credibility trees and the centipede figure ---- */
const VARIAN=[['Game 1',[[[5,9],[5,5]],[[7,6],[5,4]]],'Player 2’s claim to choose c after a is credible (9 &gt; 5). Her claim to choose e after b is also credible (6 &gt; 4). So player 1 compares 5 (via a) with 7 (via b) and chooses <b>b</b>.'],
 ['Game 2: change c to (5 ; 3)',[[[5,3],[5,5]],[[7,6],[5,4]]],'A claim by player 2 to choose c after a is no longer credible: after a she does best with d (5 &gt; 3). Player 1 still chooses <b>b</b> (7 &gt; 5).'],
 ['Game 3: can player 1 get 15?',[[[5,9],[15,5]],[[7,3],[5,12]]],'After a, player 2 chooses c (9 &gt; 5), so player 1 gets 5, not 15. After b, player 2 chooses f (12 &gt; 3): again 5. Player 1 cannot reach 15.'],
 ['Game 4: give 5 points away',[[[5,9],[10,10]],[[7,3],[5,12]]],'If player 1 changes payoffs so that d gives (10 ; 10), player 2’s commitment to d after a becomes credible (10 &gt; 9). Player 1 chooses <b>a</b> and gets 10 instead of 5. Subgame-perfect: every action chosen is rational for the player who chooses it.']];
const VARIAN_STEPS=VARIAN.map(([t,pay,note],k)=>({kind:'steps',id:'st-c2-varian'+(k+1),topic:'c2',title:`Credibility (Varian): ${t}`,blurb:'What does player 1 choose, and why? Decide, then reveal.',
 intro:`<p>Player 1 chooses a or b; player 2 then chooses c or d after a, e or f after b. Payoffs (player 1 ; player 2). ${MIDP}</p>${seqTree(pay,{a:['a','b'],b:[['c','d'],['e','f']]})}`,
 steps:[`After a, player 2 compares c (${pay[0][0][1]}) and d (${pay[0][1][1]}).`,`After b, player 2 compares e (${pay[1][0][1]}) and f (${pay[1][1][1]}).`,note,seqTree(pay,{a:['a','b'],b:[['c','d'],['e','f']],solve:true,cap:'Ch 2 slides (from Varian, 2010). Thick: subgame-perfect choices.'})]}));
const CENT_FIG=(()=>{const who=['A','B','A','B','A','B'],stop=[[2,0],[1,3],[4,2],[3,5],[6,4],[5,7]],x=k=>30+k*52;let g='';
 for(let k=0;k<6;k++){g+=`<line x1="${x(k)}" y1="40" x2="${k===5?x(6)-14:x(k+1)}" y2="40" style="stroke:var(--ink);stroke-width:1.5"/><line x1="${x(k)}" y1="40" x2="${x(k)}" y2="88" style="stroke:var(--ink);stroke-width:1.5"/>`;
  g+=`<circle cx="${x(k)}" cy="40" r="11" style="fill:var(${who[k]==='A'?'--debit':'--surface'});stroke:var(--debit);stroke-width:2"/><text x="${x(k)}" y="44" text-anchor="middle" class="pp" style="${who[k]==='A'?'fill:var(--surface)':''}">${who[k]}</text><text x="${x(k)}" y="104" text-anchor="middle" class="pm">(${stop[k].join(';')})</text>`}
 g+=`<text x="${x(6)}" y="44" text-anchor="middle" class="pm">(8;6)</text><text x="${x(0)+14}" y="18" class="pt">Continue →   (down = Stop)</text>`;
 return `<figure class="fig"><svg class="plot" viewBox="0 0 360 115" role="img" aria-label="Six-stage centipede game">${g}</svg><figcaption>INSIGHTS Ch 2, Figure 1: players alternate; Stop ends the game at the payoff below the node; payoffs (A ; B).</figcaption></figure>`})();
