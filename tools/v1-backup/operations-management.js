/* Operations Management 2315, IÉSEG Bachelor 2 (coordinator: prof. Maud Van den Broeke). Final exam (60%): MCQs + exercises, 90 min, closed book, calculator.
   Built from the MyCourses material in sources/operations-management/: slides of Classes 1–9, course recap, at-home exercises with solutions,
   in-class exercises and solutions, the beer-game slides, the newspaper articles (part of the course content), the practice exam
   of December 2024 (no solutions: answers computed by the site) and the mid-term of 19/10/2026 with handwritten solutions.
   Topics: o1 (Class 1), o2, o3, o4 (Classes 4–5), o6, o7, o8, o9 (Class 9 + beer game). Ids: q… quiz, c… cards, x-o<n>-… exercises. */
(function(){
const {T,F,EX,TRAP,NOTE,fmt}=Rev.h;
const r2=x=>Math.round(x*100)/100;

/* ---------- helpers used by generators and sheets ---------- */
const seqTotals=(jobs,order)=>{let t=0,flow=0,late=0;const rows=order.map(k=>{const j=jobs[k];t+=j.pt;flow+=t;const l=Math.max(0,t-j.dd);late+=l;return [j.n,j.pt,t,j.dd,l]});return {rows,flow,late,avgFlow:flow/order.length}};
const sortBy=(jobs,f)=>jobs.map((_,i)=>i).sort((a,b)=>f(jobs[a],jobs[b])||a-b);

/* ---------- topic sheets ---------- */
const SHEETS={};
SHEETS.o1=`
<div class="eyebrow">Class 1</div><h2>Introduction to Operations Management</h2>
<p class="lede">Goal: define OM, distinguish goods and services, explain why operations drive contribution, and compute labour and multifactor productivity.</p>
<h3>1. What is OM?</h3>
<p><b>Operations Management</b> is the set of all activities that creates value in the form of goods and services by transforming inputs (raw materials, investments, labour…) into outputs, delivered when and where the customer wants, at the right price and quality. It applies to manufacturing <b>and</b> services.</p>
${T(['Pure goods (phone, umbrella)','Pure services (education, haircut, flight, maintenance)'],[['tangible','intangible'],['can be stored and transported','cannot be stored or transported'],['production precedes consumption','production and consumption are simultaneous'],['low customer contact','high customer contact'],['quality is evident','quality is harder to judge'],['more standardized','less standardized, customized, hard to automate']])}
<p>Many offers combine both (machine + maintenance contract): <b>servitization</b>. Three functions create value together: <b>marketing</b> (sales), <b>operations</b> (create, produce, deliver), <b>finance</b> (pay and collect), e.g. McDonald’s $5 Meal Deal (2024).</p>
<h3>2. Why operations drive contribution</h3>
${EX('Tesla: +50% sales or −25% COGS?','worked example',T(['$ million','Revenues','COGS','Gross profit'],[['2025','94 827','77 733','17 094'],['Marketing: +50% sales','142 241','116 600','25 641'],['Operations: −25% COGS','94 827','58 300','36 527']])+'<p>The operations option gives the larger improvement: cost reductions fall straight into profit.</p>')}
${EX('At-home exercise 7: Hello smartphones','course solution',F('1 000 phones, cost €150, price €200, financial cost €10 000 → profit €40 000\n+40% sales: 1.4 × 1 000 × 50 − 10 000 = €60 000 (+50%)\n−30% production cost: 1 000 × (200 − 105) − 10 000 = €85 000 (+112.5%)\nReducing cost is better: an extra improvement of 62.5 percentage points'))}
<h3>3. Productivity</h3>
${F('Productivity = outputs / inputs\nSingle-factor (labour) productivity = units produced / labour hours (units per hour)\nMultifactor productivity = output / (labour + material + energy + capital + overhead, all in €)  (units per €)')}
<ul><li>1 000 units with 250 labour hours: 4 units per labour hour; with €10/hour and €500 capital: 1 000 / (2 500 + 500) = 0.33 units per €.</li>
<li>Higher <b>production</b> is not higher <b>productivity</b>; higher productivity is not always better (quality may drop, more defects, inputs and outputs hard to compare, external factors).</li></ul>
${EX('Correction software (in-class)','worked example',T(['','Labour productivity','Multifactor productivity'],[['No software (10 days × €200)','200/10 = 20 exams/day','200/2 000 = 0.1 exams/€'],['Software (2 days + €3 600)','200/2 = 100 exams/day','200/(400 + 3 600) = 0.05 exams/€']])+'<p>Labour productivity rises but multifactor productivity falls. Break-even licence cost: 200/(400 + x) = 0.1 → x = €1 600.</p>')}
${EX('Mid-term Q3: the bakery (official solution)','course solution',F('2 400 loaves, 30 labour h × €20, flour €0.25/loaf\nLabour productivity = 2 400 / 30 = 80 loaves per labour hour\nMultifactor = 2 400 / (600 + 600) = 2 loaves per €\nMachine (€700/day): 3 600 loaves, 20 h → 180 loaves per labour hour\nMultifactor = 3 600 / (400 + 900 + 700) = 1.8 loaves per €\nMultifactor improves only if 3 600 / (1 300 + R) > 2 → R < €500 per day'))}
${TRAP('Always give the <b>unit</b> (units per labour hour, loaves per €): the mid-term asked for it explicitly.')}
<h3>4. Supply chain and why OM matters</h3>
<p>A supply chain includes all parties involved, directly or indirectly, in fulfilling a customer request (supplier → manufacturer → distributor → retailer → customer), with flows of <b>products, funds and information</b>. OM matters more than ever: globalization, sustainability and scarce resources, digitization and AI, more demanding customers and an ageing workforce, disruptions (COVID-19, war in Ukraine — e.g. mustard seed for Dijon mustard — natural disasters, Suez Canal, cybercrime, inflation, tariffs). 25% of Forbes 100 CEOs started in operations.</p>
`;

SHEETS.o2=`
<div class="eyebrow">Class 2</div><h2>Facility location decisions</h2>
<p class="lede">Goal: explain location factors and the trade-offs of one versus many facilities, and apply the factor rating method, the locational break-even analysis and the center of gravity method.</p>
<ul><li><b>Facilities</b>: physical locations where products are stored, assembled or fabricated (production and storage sites; retail, plant, warehouse, hospital, school).</li>
<li>Levels: <b>country → region/city → site</b>. Decisions are long-term and infrequent: <b>expand</b> an existing facility, <b>add</b> another, or <b>close and relocate</b>.</li>
<li>Key success factors: country (political risk, incentives, IP protection, taxes, GDP, proximity to markets, culture, infrastructure, labour talent/cost/productivity, exchange rates), region (attractiveness, labour, utilities, environmental rules, incentives, raw materials, customers, land), site (size and cost, transport access, services, environmental impact, customer density). Tangible vs intangible costs.</li>
<li>Labour productivity per € (Germany €70/day, 60 units → 0.86 units/€; China €25/day, 20 units → 0.80 units/€): costs alone are not enough.</li>
<li>Proximity to markets, suppliers (perishables, transport costs) and competitors (clustering).</li></ul>
${T(['','One facility','Many facilities'],[['Responsiveness, service level','lower','higher (closer to customers)'],['Inventory','lower','safety stock increases'],['Fixed costs','lower','more investment and overhead'],['Transportation','—','inbound and outbound both change (outbound usually falls)']])}
<p>Services/retail locate close to customers to <b>maximize revenue</b>; industry locates in low-cost regions to <b>minimize cost</b>. Examples: Lotus Bakeries in Thailand (Asian demand, central location, raw materials, labour, fresher products, lower transport and footprint), Adidas Speedfactories in Germany and the US (2016–2019, closed: automation and reshoring did not pay off), Ahlstrom closing Bousbecque (overcapacity).</p>
<h3>1. Factor rating method</h3>
${F('1. List the key success factors   2. Weight them (total 100%)\n3. Define a scale   4. Score each location   5. Sum weight × score   6. Recommend the highest score')}
<p>Example: labour productivity 40%, image 30%, proximity to supply 30%; Germany 2, 2, 0 → 1.4; China 2, 1, 2 → <b>1.7</b>. Weakness: <b>subjective</b> and does not necessarily take costs into account.</p>
<h3>2. Locational break-even analysis</h3>
${F('Total cost of a location = fixed cost + variable cost × volume\nCrossover between two locations: FC1 + VC1·x = FC2 + VC2·x')}
${EX('Cuba, US, Italy (in-class)','worked example',F('Cuba 110 000 + 25x · US 30 000 + 75x · Italy 60 000 + 45x\nItaly = US → x = 1 000;  Italy = Cuba → x = 2 500\nUS for 0–1 000 units, Italy for 1 000–2 500, Cuba above 2 500'))}
${EX('Mid-term Q1: Lille, Paris, Lyon (official solution)','course solution',F('Lille 30 000 + 30x · Paris 40 000 + 40x · Lyon 50 000 + 20x\nParis has a higher fixed AND variable cost than Lille: never optimal\nLille = Lyon → 10x = 20 000 → x = 2 000\nLille for 0–2 000 units, Lyon above 2 000, Paris never'))}
<p>Weakness: does <b>not</b> take into account the location of markets and suppliers.</p>
<h3>3. Center of gravity method</h3>
${F('x = Σ xi·Qi / Σ Qi      y = Σ yi·Qi / Σ Qi   (Qi = volume shipped to/from point i)')}
<p>Example: Paris (48, 2) 500, Beijing (39, 116) 500, Berlin (52, 13) 1 000 → x = 47.75, y = 36. Concern: the point found may not be a feasible location (e.g. in the sea).</p>
`;

SHEETS.o3=`
<div class="eyebrow">Class 3</div><h2>Optimization and the transportation problem</h2>
<p class="lede">Goal: formulate a problem as an optimization model (decision variables, objective function, constraints), formulate a transportation problem, and know how Excel Solver is set up.</p>
${T(['Component','Meaning','Example'],[['Decision variables','the decisions that can be made','how much to produce of each product'],['Objective function','what to maximize or minimize, as a function of the variables','maximize profit, minimize cost'],['Constraints','restrictions on the variables’ values','capacity, demand, non-negativity']])}
${EX('T-shirts (course example)','worked example',F('x = white T-shirts (€5), y = blue T-shirts (€8)\nMax 5x + 8y   s.t.  x + 2y ≤ 160 (hours),  x ≤ 100,  y ≤ 50,  x, y ≥ 0\nSolution: x = 100, y = 30, profit €740'))}
<h3>Transportation problem</h3>
${F('xij = quantity shipped from source i to destination j\nMin Σ cij·xij\nCapacity:  Σj xij ≤ Ci  for every source i\nDemand:    Σi xij = Dj  for every destination j\nxij ≥ 0')}
${EX('Mid-term Q5: two plants, two markets (official solution)','course solution',F('Min 4x11 + 6x12 + 5x21 + 4x22\nx11 + x12 ≤ 100   x21 + x22 ≤ 150   x11 + x21 = 120   x12 + x22 = 180   xij ≥ 0\nNo feasible solution: total supply 250 < total demand 300'))}
${TRAP('Check total capacity against total demand: if capacity < demand, Solver cannot find a feasible solution when demand constraints are equalities.')}
<h3>Excel Solver</h3>
<ul><li><b>Set Objective</b>: the cell with the objective formula (e.g. =30*A2−10*B2+15*C2); <b>To</b>: Max, Min or Value of; <b>By Changing Variable Cells</b>: the decision-variable cells; <b>Subject to the Constraints</b>: one line per constraint (cell with the left-hand side ≤ / = / ≥ right-hand side); tick “Make unconstrained variables non-negative”; method <b>Simplex LP</b> for linear problems.</li>
<li>A facility-location model with opening decisions needs a <b>mixed</b> model: binary variables (open or not) and continuous variables (quantities shipped) — the homework on the 3 × 3 grid.</li></ul>
${NOTE('<b>2-variable problems</b> can also be solved graphically: draw the constraints, find the corner points of the feasible region and evaluate the objective at each (at-home exercise 4: (50, 50) 30 750, (65, 110) 56 850, (50, 120) <b>57 000</b>, (95, 50) 41 550).')}
`;

SHEETS.o4=`
<div class="eyebrow">Classes 4–5</div><h2>Capacity management and the Theory of Constraints</h2>
<p class="lede">Goal: compute bottleneck, throughput time and capacity of a process, and use TOC (and its optimization model) to find the profit-maximizing product mix.</p>
<ul><li><b>Capacity</b>: the throughput, or the number of units a facility can hold, receive, store or produce in a given time. <b>Utilization</b> = output / capacity.</li>
<li>Too much capacity: idle resources (lay off, close, lower price, sell more, produce for a competitor). Not enough (100%): demand unmet (add capacity, extra shift or machine, improve the process, raise price).</li>
<li>Constraints: internal (process/equipment, people, policy such as no overtime) and external (supply, market demand).</li>
<li><b>Bottleneck</b>: the constraint that limits the system’s output (the workstation with the smallest capacity). Improve the bottleneck first.</li></ul>
${F('Process time of a station = time per unit (= 1 / capacity); parallel machines: time / number of machines\nBottleneck time = process time of the slowest station\nThroughput time = sum of the process times along the line (no waiting)\nCapacity of the system = 60 / bottleneck time (units per hour)')}
${T(['Example','Bottleneck','Throughput time','Capacity'],[['10, 15, 5 min/unit','station 2 (15 min)','30 min','4 units/hour'],['2, 4, 3 min/unit','station B (4 min)','9 min','15 units/hour'],['Sandwiches: 30 s, 2 × 15 s, 2 × 20 s, 2 × 40 s, 37.5 s','wrap/deliver (37.5 s; toaster 40/2 = 20 s)','142.5 s','96 per hour'],['Mid-term Q2: A 2 × 6 min, B 2 min, C 3 × 8 min','A (6/2 = 3 min)','6 + 2 + 8 = 16 min','20 units/hour'],['Practice exam Q7: 6, 8, 2 min','machine 2','16 min','7.5 units/hour']])}
${TRAP('Throughput time uses the time of <b>one</b> machine per station (a unit only goes through one), while the bottleneck uses the station’s effective time (time ÷ parallel machines).')}
<h3>Theory of Constraints (Goldratt, The Goal)</h3>
<p>“A system’s output is limited by its most restrictive constraint, so find and manage that constraint.” The bottleneck must work all the time; adding capacity to non-bottlenecks is useless (it even creates inventory).</p>
${F('Step 1: find the bottleneck (time needed for all demand on each machine vs available time)\nStep 2: priority = unit margin / time on the bottleneck per unit (highest first)\nStep 3: fill the bottleneck’s time in priority order (full demand, then the rest)\nStep 4: profit = Σ quantity × margin')}
${EX('Two products, 2 400 min/week (in-class)','worked example',F('A: margin 20, M1 20 min, M2 12 min, demand 100 · B: margin 30, M1 10, M2 60, demand 30\nM1: 2 000 + 300 = 2 300 ≤ 2 400;  M2: 1 200 + 1 800 = 3 000 > 2 400 → M2 bottleneck\nPriority: A 20/12 = 1.67 > B 30/60 = 0.5\n100 A use 1 200 min; 1 200 / 60 = 20 B;  profit 2 000 + 600 = 2 600'))}
${EX('Mid-term Q6: tables and chairs (official solution)','course solution',F('Tables €8: cutting 3, sanding 8 · Chairs €12: cutting 5, sanding 4 · 800 min each, demand 80 / 100\nCutting 3×80 + 5×100 = 740 ≤ 800; sanding 8×80 + 4×100 = 1 040 > 800 → sanding bottleneck\nPriority: chairs 12/4 = 3 > tables 8/8 = 1 → 100 chairs (400 min), 400/8 = 50 tables\nProfit = 1 200 + 400 = €1 600 per day'))}
<p>Class 5: the same product-mix problem can be written as an optimization model (max Σ margin × quantity, s.t. time on each machine ≤ available, quantity ≤ demand) and solved with Solver; TOC example: tables (cutting 4, assembly 6, painting 8, packaging 5 min, 480 min/day) → painting is the bottleneck, 60 tables/day.</p>
`;

SHEETS.o6=`
<div class="eyebrow">Class 6</div><h2>Inventory management</h2>
<p class="lede">Goal: explain why companies hold inventory, the trade-off between ordering and holding costs, and apply the EOQ model.</p>
<ul><li><b>Inventory</b>: the stock of any item or resource of a firm (raw materials, work in process, finished goods…).</li>
<li>Why hold it: protect against late or uncertain deliveries, larger batches (fewer setups), shorter lead time to customers, availability (avoid stock-outs), quantity discounts.</li>
<li>Why not: cost of invested capital, storage space, perishability. Examples of too much inventory: <b>Nike</b> ($9.3 billion, +43%, 2022), <b>H&amp;M</b> ($4.3 billion of unsold clothes, 2018), air fryers after the boom.</li></ul>
${T(['Cost','Meaning'],[['Ordering (setup) cost S','fixed fee per order, setting up a batch, administration'],['Holding cost H','per unit per year: storage, staff, insurance, cost of capital'],['Purchasing cost P','price per unit (does not affect Q)']])}
${F('Total cost = P·D + S·D/Q + H·Q/2\nAverage inventory = Q/2   Number of orders N = D/Q   Time between orders T = days per year / N\nEOQ:  Q* = √(2·S·D / H)    (at Q*, holding cost = ordering cost)')}
${EX('Watch case (course example)','worked example',F('D = 1 200/year, S = €80/order, H = €2/unit/year, P = €2\nQ = 100: 2 400 + 960 + 100 = €3 460;  Q = 1 200: 2 400 + 80 + 1 200 = €3 680\nEOQ = √(2 × 80 × 1 200 / 2) = 309.8 ≈ 310 watches'))}
${EX('Sharp, Inc. (in-class, official solution)','course solution',F('D = 1 000, S = $10, H = $0.50 → Q* = √(40 000) = 200\nN = 1 000/200 = 5 orders; T = 250/5 = 50 days\nOrdering + holding = 10 × 5 + 0.5 × 100 = $100'))}
${EX('Extra exercise (official solution)','course solution',F('Average inventory 20 → Q = 40; H = 2 → holding cost = 40 = ordering cost\nS·D/Q = 40 with S = 1 → D = 1 600'))}
<p>EOQ assumptions: single product, stable demand, zero lead time, stable price (no quantity discounts), no perishability or warehouse capacity limits.</p>
`;

SHEETS.o7=`
<div class="eyebrow">Class 7</div><h2>Short-term scheduling</h2>
<p class="lede">Goal: assign jobs with the assignment (Hungarian) method and sequence jobs with priority rules, computing flow time and lateness.</p>
<p>Scheduling answers two questions: <b>who does what?</b> (task assignment) and <b>what comes first?</b> (task sequencing).</p>
<h3>1. Assignment method (Hungarian method)</h3>
${F('1A. Subtract the smallest number of each row from that row\n1B. Subtract the smallest number of each column from that column\n2. Cover all zeros with the minimum number of lines\n   (lines = number of rows → go to 4)\n3. Subtract the smallest uncovered number from every uncovered number;\n   add it at the intersections of two lines; return to 2\n4. Assign along the zeros, one per row and column\nMaximization: first replace every number by (largest number − number)')}
${EX('Typesetters (course example)','worked example',T(['','R-34','S-66','T-50'],[['A','11','14','6'],['B','8','10','11'],['C','9','12','7']])+'<p>Optimal: A → T-50 ($6), B → S-66 ($10), C → R-34 ($9): total <b>$25</b>.</p>')}
<h3>2. Priority rules</h3>
${T(['Rule','Sequence','When useful'],[['FCFS first come, first served','arrival order','seems fair to customers'],['EDD earliest due date','increasing due date','high penalty for lateness'],['SPT shortest processing time','increasing processing time','minimizes flow time and jobs in the system'],['LPT longest processing time','decreasing processing time','big jobs are not postponed']])}
${F('Flow time of a job = its completion time (waiting + processing)\nTotal flow time = Σ completion times;  average flow time = total / number of jobs\nLateness of a job = max(0, completion time − due date)')}
${EX('Practice exam Q3 (computed by the site)','worked example',(()=>{const jobs=[{n:'C',pt:40,dd:35},{n:'B',pt:16,dd:70},{n:'A',pt:8,dd:20},{n:'D',pt:5,dd:38},{n:'E',pt:3,dd:50}];
  const e=seqTotals(jobs,sortBy(jobs,(a,b)=>a.dd-b.dd)),l=seqTotals(jobs,sortBy(jobs,(a,b)=>b.pt-a.pt));
  return '<p><b>EDD</b></p>'+T(['Job','Processing','Flow time','Due','Lateness'],e.rows,[1,2,3,4])+`<p>Total flow time ${e.flow}, total lateness ${e.late}.</p><p><b>LPT</b></p>`+T(['Job','Processing','Flow time','Due','Lateness'],l.rows,[1,2,3,4])+`<p>Total flow time ${l.flow}, total lateness ${l.late}.</p>`})())}
<p>There is no single best rule: it depends on the performance objective. Schedules also affect people (UCLA nurses protesting shift changes for float-pool nurses, 2024).</p>
`;

SHEETS.o8=`
<div class="eyebrow">Class 8</div><h2>Flexibility in OM</h2>
<p class="lede">Goal: define flexibility, name its drivers and types, and compute the value of flexible capacity.</p>
<ul><li><b>Flexibility</b>: the ability of operations to respond and adapt to changes without excessive cost or loss of performance. More is not always better (it costs).</li>
<li><b>Drivers</b>: demand volume, demand mix, product needs, regulations, supply disruptions.</li>
<li><b>Types</b>: product design (modularity, customization vs standardization), supply chain (nearshoring vs offshoring, transport modes, shorter lead times), production (<b>volume</b>: more or less; <b>mix</b>: change the sequence of products; <b>product</b>: make new products). Zara, Apple, Amazon, Dell.</li>
<li>Production assets: <b>dedicated</b> (one product, cheaper), <b>flexible</b> (several products, more expensive), hybrid, and <b>postponement</b> (delay differentiation; Dell assembles after the order).</li></ul>
${EX('Exercise 1: Autocompany (official solution)','course solution',F('Dedicated A: 70 000 (cost 500, price 2 000 → margin 1 500); dedicated B: 150 000 (margin 500)\nFlexible line: 60 000 units at cost 600 → margin 1 400 on A, 400 on B\nRemaining demand: A 30 000, B 100 000 → flexible line makes 30 000 A then 30 000 B\nProfit = 105 M + 75 M + 42 M + 12 M = €234 M'))}
${EX('Exercise 2: brewery (official solution)','course solution',F('Fixed plant (10 000, FC 50 000, VC 1): low 8×8 000 − 50 000 − 8 000 = 6 000; high 80 000 − 50 000 − 10 000 = 20 000\nExpected = 0.4 × 6 000 + 0.6 × 20 000 = 14 400\nFlexible plant (16 000, FC 60 000, VC 1.2): low −5 600; high 21 600 → expected 10 720\nThe fixed plant is better. Flexibility is worth paying up to a fixed cost x with\n0.4 × 6.8 × 8 000 + 0.6 × 6.8 × 12 000 − x ≥ 14 400 → x ≤ 56 320'))}
`;

SHEETS.o9=`
<div class="eyebrow">Class 9 · Tutorial</div><h2>OM challenges, supply chains and the beer game</h2>
<p class="lede">Goal: discuss today’s OM dilemmas with their trade-offs (profit, planet, people) and explain the bullwhip effect and how to reduce it.</p>
${T(['Challenge','Dilemmas'],[['Technology, automation, AI, humanoids, skills','replace workers? productivity vs well-being; which tasks stay human'],['Local vs global supply chains, geopolitics','cheapest supplier or reliable local supply? reshoring, friend-shoring, globalization'],['Demanding customers, customization','how much to customize and how fast to deliver; same-day delivery vs consolidated orders'],['Sustainability, raw materials, closed loops','repair or replace? virgin or recycled material? higher logistics cost for lower impact? long-life design?']])}
<p>Example: the war in Ukraine strained supply chains from semiconductors to car parts, calling for resilience. EV makers face a critical-mineral bottleneck (lithium, cobalt, nickel); ASML’s lithography machines were a chip bottleneck.</p>
<h3>Beer game and the bullwhip effect</h3>
<ul><li>Four stages (retailer, wholesaler, distributor, factory) balance inventory (€5 per unit) against backlog (€25 per unit, a negative inventory). Orders flow up, products flow down.</li>
<li><b>Bullwhip effect</b>: small changes in consumer demand are amplified as orders move up the supply chain (P&amp;G’s diapers: babies consume at a steady rate, yet orders fluctuate). Like the “telephone” game.</li>
<li>It <b>increases</b> with more partners in the chain, more demand uncertainty, longer lead times, panic, big promotions. It <b>decreases</b> with information sharing, collaboration (information systems), better forecasting, shorter lead times, fewer stages, direct e-commerce (Dell sells directly and postpones assembly).</li>
<li><b>SCM</b>: the coordination of all supply-chain activities, from raw materials to a satisfied customer, with flows of products, funds and information.</li></ul>
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
${T(['Topic','Formula / rule'],[
['Labour productivity','units / labour hours'],['Multifactor productivity','units / (labour + material + overhead + capital) in €'],
['Factor rating','Σ weight × score, highest wins (subjective, ignores costs)'],['Locational break-even','FC1 + VC1·x = FC2 + VC2·x; a location with higher FC and VC is never optimal'],
['Center of gravity','x = Σxi·Qi / ΣQi, y = Σyi·Qi / ΣQi (may be infeasible)'],
['Optimization model','decision variables, objective, constraints (≥ 0)'],['Transportation','min Σcij·xij; Σj xij ≤ Ci; Σi xij = Dj; infeasible if ΣC < ΣD'],
['Bottleneck','largest effective time per unit (time ÷ parallel machines)'],['Throughput time','Σ process times'],['Capacity','60 / bottleneck time per hour'],
['TOC priority','margin / bottleneck minutes per unit'],
['EOQ','√(2SD/H); N = D/Q; T = days/N; cost = PD + SD/Q + HQ/2; at EOQ ordering = holding'],
['Priority rules','FCFS, EDD (due date), SPT (shortest), LPT (longest)'],['Flow time / lateness','completion time / max(0, completion − due)'],
['Assignment method','row reduction, column reduction, cover zeros, adjust, assign; max → largest − each'],
['Flexibility value','expected profit with probabilities; max price = difference'],
['Bullwhip','reduce with information sharing, collaboration, forecasting, shorter lead times']])}
<h3>Exam checklist</h3>
<ol><li>Show every calculation and give units (units/hour, units/€, €, days).</li>
<li>For optimization: name the decision variables first, then the objective, then each constraint including non-negativity.</li>
<li>TOC: compute the load on every machine before choosing the bottleneck; rank by margin per bottleneck minute.</li>
<li>Be ready to cite a company example from the newspaper articles (Adidas, Lotus, Tesla, Nike, H&amp;M, ASML, UCLA nurses).</li></ol>
`;

/* ---------- quiz ---------- */
const Q=(id,topic,src,q,o,e)=>({id,topic,src,q,o,a:0,e});
const QUIZ=[
Q('q0','o1','course','Operations Management is the set of all activities that creates value…',['by transforming inputs into outputs (goods and services)','by selling existing products','by financing investments','only in manufacturing firms'],'OM also applies to services.'),
Q('q1','o1','course','Which is a characteristic of pure services?',['Production and consumption are simultaneous','They can be stored','Low customer contact','Quality is evident'],'Services are intangible, cannot be stored, high contact.'),
Q('q2','o1','course','Recap: “doing things right” refers to…',['efficiency','effectiveness','productivity of capital','flexibility'],'Effectiveness = doing the right things.'),
Q('q3','o1','course','Recap: 100 units per day by 2 employees working 10 h at €50/h, overhead €1 000. Labour productivity?',['5 units per labour hour','50 units per labour hour','0.05 units per €','10 units per labour hour'],'100 / 20 h = 5. Multifactor: 100 / (1 000 + 1 000) = 0.05 units per €.'),
Q('q4','o1','course','Same data: multifactor productivity?',['0.05 units per €','0.1 units per €','5 units per €','0.025 units per €'],'100 / (2 × 10 × 50 + 1 000) = 100 / 2 000.'),
Q('q5','o1','course','At-home exercise 1: 70 pieces in two hours, 2 unusable. Labour productivity?',['34 pieces per hour','35 pieces per hour','68 pieces per hour','36 pieces per hour'],'(70 − 2) / 2.'),
Q('q6','o1','course','In the Tesla example, which option improves gross profit the most?',['Reducing COGS by 25%','Increasing sales by 50%','Both equal','Neither'],'36 527 vs 25 641 $ million.'),
Q('q7','o1','practice','Labour productivity rises but multifactor productivity falls when:',['a costly machine saves labour hours but its cost exceeds the labour saved','output falls','wages rise','nothing changes'],'Correction-software example: 100 exams/day but 0.05 exams/€.'),
Q('q8','o1','practice','A supply chain includes flows of:',['products, funds and information','only products','only information','products and people'],'All parties involved in fulfilling a customer request.'),
Q('q9','o2','course','Which is NOT one of the three facility-location decisions in the course?',['Outsource the marketing department','Expand an existing facility','Add a facility elsewhere','Close and relocate'],'Expand, add, close/relocate.'),
Q('q10','o2','course','Main weakness of the factor rating method?',['It is subjective and does not necessarily account for costs','It ignores qualitative factors','It needs coordinates','It only works for two locations'],'Weights and scores are judgements.'),
Q('q11','o2','course','Main limitation of the locational break-even analysis (mid-term Q1b)?',['It does not take into account the location of markets/suppliers','It ignores fixed costs','It is subjective','It cannot compare more than two locations'],'Official mid-term answer.'),
Q('q12','o2','course','Recap: weights productivity 0.60, labour cost 0.40; China scores 1 and 3, Germany 4 and 1. Preferred country?',['Germany (2.8 vs 1.8)','China (1.8 vs 2.8)','Indifferent','China (3 vs 4)'],'Germany 0.6×4 + 0.4×1 = 2.8; China 0.6×1 + 0.4×3 = 1.8.'),
Q('q13','o2','course','Germany: FC 110 000, VC €25; China: FC 60 000, VC €45. From which volume is Germany cheaper?',['2 500 units','5 000 units','1 000 units','2 000 units'],'50 000 = 20x.'),
Q('q14','o2','course','Mid-term Q1: Paris (FC 40 000, VC 40) vs Lille (FC 30 000, VC 30). For which volumes is Paris cheapest?',['Never: both its fixed and variable costs are higher','Below 1 000 units','Above 2 000 units','Always'],'A dominated location is never optimal.'),
Q('q15','o2','course','A main concern about the center of gravity method is:',['the point found may not be a feasible location','it ignores volumes','it is subjective','it needs fixed costs'],'E.g. the result could fall in a sea.'),
Q('q16','o2','course','A retail or service organization usually chooses a location to:',['maximize revenue by being close to customers','minimize labour cost only','be close to raw materials','avoid competitors at all cost'],'Industry minimizes cost; services maximize revenue.'),
Q('q17','o2','course','Opening more distribution centres typically:',['improves responsiveness but increases safety stock and fixed costs','reduces inventory','reduces fixed costs','has no effect on service'],'Number of facilities: pros and cons.'),
Q('q18','o2','course','Adidas’ Speedfactories in Germany and the US were:',['automated reshoring factories closed in 2019–2020','new plants in Thailand','warehouses','still Adidas’ main production sites'],'Newspaper articles, Class 2.'),
Q('q19','o2','course','Why did Lotus Bakeries choose Thailand for a new factory?',['Growing Asian demand, central location, raw materials, labour, lower transport and footprint','Lowest taxes in the world','Proximity to European customers','To close its Belgian plants'],'Newspaper article and Class 2 slides.'),
Q('q20','o3','course','The three components of an optimization model are:',['decision variables, objective function, constraints','inputs, outputs, productivity','fixed cost, variable cost, volume','supply, demand, price'],'Class 3.'),
Q('q21','o3','course','In a transportation problem, demand constraints are written as:',['Σi xij = Dj for each destination j','Σj xij ≤ Ci for each source i','Σ cij xij ≥ 0','xij ≤ Dj'],'Capacity constraints are Σj xij ≤ Ci.'),
Q('q22','o3','course','Mid-term Q5: supply 100 + 150, demand 120 + 180. Can Solver find a feasible solution?',['No: total supply 250 < total demand 300','Yes, it minimizes cost','Yes, by shipping 250 units','Only with integer variables'],'Official solution.'),
Q('q23','o3','course','T-shirts: max 5x + 8y with x + 2y ≤ 160, x ≤ 100, y ≤ 50. Optimal profit?',['€740','€800','€900','€500'],'x = 100, y = 30.'),
Q('q24','o3','course','In Excel Solver, the decision variables go in:',['By Changing Variable Cells','Set Objective','Subject to the Constraints','Solving Method'],'The objective cell holds the formula of the objective.'),
Q('q25','o3','course','For a linear problem, the Solver method is:',['Simplex LP','GRG Nonlinear','Evolutionary','Goal Seek'],'Simplex LP for linear problems.'),
Q('q26','o3','course','The facility-location homework (open plants + shipments) needs:',['a mixed model with binary and continuous variables','only continuous variables','only binary variables','no constraints'],'Open or not (binary) + quantities shipped (continuous).'),
Q('q27','o4','course','Machines of 10, 15 and 5 minutes per unit in series. Capacity of the system?',['4 units per hour','6 units per hour','2 units per hour','12 units per hour'],'Bottleneck 15 min → 60/15.'),
Q('q28','o4','course','Same line: throughput time?',['30 minutes','15 minutes','10 minutes','45 minutes'],'10 + 15 + 5.'),
Q('q29','o4','course','Mid-term Q2: A (2 machines × 6 min), B (2 min), C (3 machines × 8 min). Bottleneck?',['Work center A (3 min per unit)','Work center C (8 min)','Work center B','None'],'Effective times: A 3, B 2, C 2.67.'),
Q('q30','o4','course','Mid-term Q2: capacity?',['20 units per hour','7.5 units per hour','30 units per hour','10 units per hour'],'60 / 3.'),
Q('q31','o4','course','According to TOC, increasing the capacity of a non-bottleneck:',['has no use and may create inventory','always raises output','reduces throughput time to zero','is the first step'],'Improve the bottleneck first.'),
Q('q32','o4','course','TOC product priority is based on:',['margin per unit of time on the bottleneck','margin per unit','selling price','demand'],'Step 2.'),
Q('q33','o4','course','Recap MCQ: which statement is correct for Tesla?',['The Battery Module line is the bottleneck','The high manufacturing cost is the bottleneck','High demand for all cars is the bottleneck','The Model 3 car is the bottleneck'],'A bottleneck is a resource/workstation limiting output.'),
Q('q34','o4','course','Utilization equals:',['output / capacity','capacity / output','output / inputs','demand / price'],'Class 4.'),
Q('q35','o4','practice','A station with two parallel machines of 40 seconds per unit has an effective time of:',['20 seconds per unit','40 seconds per unit','80 seconds per unit','10 seconds per unit'],'Sandwich example: the toaster is not the bottleneck.'),
Q('q36','o4','course','ASML’s lithography machines were described as:',['a major bottleneck for chip production','a cause of excess inventory','a transportation problem','a flexible asset'],'Newspaper article, Class 4.'),
Q('q37','o6','course','Which is NOT a reason to hold inventory?',['To increase the cost of capital','Protection against late supplier deliveries','Larger production batches','Quantity discounts'],'Capital cost is a reason not to hold inventory.'),
Q('q38','o6','course','At the EOQ:',['ordering cost equals holding cost','ordering cost is zero','holding cost is maximal','purchasing cost is minimal'],'That is where total cost is minimal.'),
Q('q39','o6','course','Sharp, Inc.: D = 1 000, S = $10, H = $0.50. EOQ?',['200 units','100 units','400 units','141 units'],'√(2 × 10 × 1 000 / 0.5).'),
Q('q40','o6','course','Recap: D = 100, S = €2, H = €1, P = €5. Minimum total inventory cost including material?',['520','240','300','780'],'EOQ 20: 500 + 10 + 10.'),
Q('q41','o6','course','Which is an assumption of the EOQ model?',['Stable demand and zero lead time','Several products','Quantity discounts','Perishable goods'],'Also single product, stable price.'),
Q('q42','o6','course','The purchasing price P:',['has no impact on the EOQ','increases the EOQ','decreases the EOQ','equals the holding cost'],'Q* depends on S, D and H only.'),
Q('q43','o6','course','Practice exam Q2 asks for a company with very high inventory. A course example is:',['Nike ($9.3 billion, +43% in 2022)','Lotus Bakeries','Tesla’s assembly line','ASML'],'Also H&M ($4.3 billion unsold clothes).'),
Q('q44','o6','practice','Average inventory under the EOQ profile is:',['Q/2','Q','D/Q','2Q'],'Saw-tooth profile.'),
Q('q45','o7','course','Recap: jobs A (10 d), B (4), C (15), D (6). SPT sequence?',['B-D-A-C','A-B-C-D','C-A-D-B','B-A-D-C'],'Shortest processing time first.'),
Q('q46','o7','course','Which rule is best if lateness is heavily penalized?',['EDD','LPT','FCFS','Random'],'Earliest due date.'),
Q('q47','o7','course','SPT is good to:',['minimize total flow time and the number of jobs in the system','minimize lateness always','be fair to customers','process big jobs first'],'Class 7.'),
Q('q48','o7','course','Flow time of a job is:',['the time it spends waiting plus being processed','its processing time only','its due date','its lateness'],'Its completion time in the sequence.'),
Q('q49','o7','course','In the assignment method, for a maximization problem you first:',['subtract every number from the largest number in the table','add the largest number','divide by the largest number','sort the rows'],'Convert to an opportunity-loss table.'),
Q('q50','o7','course','Typesetters example: the minimum total cost is:',['$25','$24','$27','$30'],'A → T-50 (6), B → S-66 (10), C → R-34 (9).'),
Q('q51','o7','course','After drawing lines, if the number of lines is smaller than the number of rows you:',['subtract the smallest uncovered number from uncovered cells and add it at intersections','stop and assign','restart from scratch','add a dummy row'],'Step 3, then back to step 2.'),
Q('q52','o8','course','Flexibility is:',['the ability to respond to changes without excessive cost or loss of performance','always better when higher','a type of inventory','the same as capacity'],'Class 8.'),
Q('q53','o8','course','Being able to change the sequence of products is:',['mix flexibility','volume flexibility','product flexibility','supply-chain flexibility'],'Volume = more/less; product = new products.'),
Q('q54','o8','course','Autocompany: maximum operating profit?',['€234 million','€180 million','€246 million','€222 million'],'Flexible line serves A first (margin 1 400).'),
Q('q55','o8','course','Brewery: which plant gives the higher expected profit?',['The fixed plant (14 400 vs 10 720)','The flexible plant','Both equal','Neither is profitable'],'Official solution.'),
Q('q56','o8','course','Sourcing closer to home is:',['nearshoring','offshoring','postponement','modularity'],'Supply-chain flexibility.'),
Q('q57','o9','course','The bullwhip effect is:',['the amplification of order variability up the supply chain','a sudden fall in consumer demand','excess capacity','a pricing strategy'],'Beer game debrief.'),
Q('q58','o9','course','Which action reduces the bullwhip effect?',['More information sharing in the supply chain','More stages in the chain','Longer lead times','Big promotions'],'Also collaboration, better forecasting, direct e-commerce.'),
Q('q59','o9','course','In the beer game, a backlog is:',['unmet orders, like a negative inventory (€25 per unit)','excess inventory (€5 per unit)','a delivery','a promotion'],'Backlog costs 5 times more than inventory.'),
Q('q60','o9','course','How did Dell crush its competitors?',['Selling directly and postponing final assembly until the order arrives','Holding very large stocks','Using many distributors','Offshoring everything'],'Large variety with low stock.'),
Q('q61','o9','practice','Reshoring production to reduce geopolitical risk illustrates the dilemma of:',['global vs local supply chains','customization','automation','closed loops'],'Class 9 challenges.')];

/* ---------- exercises ---------- */
const EXERCISES=[
{id:'x-o1-prod',topic:'o1',type:'numeric',src:'course',title:'Productivity (at-home exercises 2, 3, 6)',q:'<p>(2) 300 units in 8 hours by 3 workers at $20/h, 600 lbs of material at $1/lb, overhead 1.5 × labour cost. (3) Health club: 2 employees × 40 h at $20/h, 400 leads each, 10% join and pay $100, materials $130, overhead $1 000 per week. (6) 1 000 toy cars, price €50, cost €30; cost falls by 10%.</p>',
 parts:[{label:'(2) Multifactor productivity (units per $)',answer:300/1800,tol:0.005},{label:'(3) Multifactor productivity (fees per $)',answer:8000/2730,tol:0.01},{label:'(6) Profit increase (%)',answer:15,tol:0.1}],
 solution:F('(2) 300 / (480 + 600 + 720) = 0.167\n(3) 400 × 2 × 10% × 100 = 8 000 / (1 600 + 130 + 1 000) = 2.93\n(6) 20 000 → 1 000 × (50 − 27) = 23 000: +15%')},
{id:'x-o1-nordfresh',topic:'o1',type:'numeric',src:'course',title:'NordFresh juices (at-home exercise 8)',q:'<p>4 workers × 7 h × 240 days at €18/h; material €1.20 per bottle; utilities €14 000/year. Without machine: 28 000 bottles. With a machine costing €36 000/year: 40 000 bottles.</p>',
 parts:[{label:'a) Multifactor productivity without machine (bottles per €)',answer:28000/168560,tol:0.001},{label:'b) With the machine (bottles per €)',answer:40000/218960,tol:0.001},{label:'c) Maximum annual machine cost (€)',answer:57840,tol:1}],
 solution:F('Labour = 4 × 7 × 240 × 18 = 120 960\na) 28 000 / (120 960 + 33 600 + 14 000) = 0.1661\nb) 40 000 / (120 960 + 48 000 + 14 000 + 36 000) = 0.1827\nc) 28 000 / 168 560 = 40 000 / (182 960 + x) → x = 57 840')},
{id:'x-o1-bakery',topic:'o1',type:'numeric',src:'course',title:'Mid-term Q3: the bakery',q:'<p>2 400 loaves/day with 30 labour hours at €20; flour €0.25 per loaf. A machine rented €700/day would give 3 600 loaves with 20 labour hours.</p>',
 parts:[{label:'a) Current labour productivity (loaves per hour)',answer:80,tol:0},{label:'b) Current multifactor productivity (loaves per €)',answer:2},{label:'c) Labour productivity with the machine',answer:180,tol:0},{label:'d) Multifactor productivity with the machine',answer:1.8},{label:'e) Maximum daily rent for multifactor productivity to improve (€)',answer:500,tol:0}],
 solution:F('2 400/30 = 80; 2 400/(600 + 600) = 2; 3 600/20 = 180; 3 600/(400 + 900 + 700) = 1.8\n3 600/(1 300 + R) > 2 → R < 500')},
{id:'x-o1-gen',topic:'o1',type:'calc',src:'practice',title:'Labour and multifactor productivity (new numbers)',
 gen:u=>{const w=u.int(2,8),h=u.pick([7,8,10]),wage=u.step(15,40,5),out=u.step(200,2000,50),mat=u.step(100,2000,50),ov=u.step(0,1000,100);return {w,h,wage,out,mat,ov,lab:w*h*wage}},
 q:v=>`<p>${fmt(v.out)} units per day, made by ${v.w} workers working ${v.h} hours at €${v.wage}/hour. Materials €${fmt(v.mat)} and overhead €${fmt(v.ov)} per day.</p>`,
 parts:[{label:'Labour productivity (units per labour hour)',answer:v=>v.out/(v.w*v.h)},{label:'Multifactor productivity (units per €)',answer:v=>v.out/(v.lab+v.mat+v.ov),tol:0.005}],
 solution:v=>F(`${fmt(v.out)} / (${v.w} × ${v.h}) = ${r2(v.out/(v.w*v.h))} units per hour\n${fmt(v.out)} / (${fmt(v.lab)} + ${fmt(v.mat)} + ${fmt(v.ov)}) = ${(v.out/(v.lab+v.mat+v.ov)).toFixed(3)} units per €`)},
{id:'x-o2-factor',topic:'o2',type:'numeric',src:'course',title:'Factor rating (at-home exercises 1 and 7)',q:'<p>(1) Weights 25%, 5%, 10%, 39%, 21%; France 70, 50, 85, 75, 60; Denmark 60, 60, 80, 70, 70. (7) Weights 40%, 35%, 25%; Madrid 80, 70, 90; Barcelona 70, 85, 80.</p>',
 parts:[{label:'(1) Score France',answer:70.35},{label:'(1) Score Denmark',answer:68},{label:'(7) Score Madrid',answer:79},{label:'(7) Score Barcelona',answer:77.75}],
 solution:'<p>France (70.35) and Madrid (79) are preferred.</p>'},
{id:'x-o2-breakeven',topic:'o2',type:'numeric',src:'course',title:'Locational break-even (at-home exercises 2 and 3)',q:'<p>(2) Akron 30 000 + 75x, Bowling Green 60 000 + 45x, Chicago 110 000 + 25x; price $120, volume 2 000. (3) Cuba 125 000 + 15x, US 25 000 + 70x, Italy 40 000 + 55x.</p>',
 parts:[{label:'(2) Crossover Akron / Bowling Green',answer:1000,tol:0},{label:'(2) Crossover Bowling Green / Chicago',answer:2500,tol:0},{label:'(2) Profit at Bowling Green for 2 000 units ($)',answer:90000,tol:0},{label:'(3) Italy preferred from (units)',answer:1000,tol:0},{label:'(3) … up to (units)',answer:2125,tol:0}],
 solution:F('(2) 1 000 and 2 500 units; at 2 000: Akron 60 000, Bowling Green 90 000, Chicago 80 000 → Bowling Green\n(3) Italy = US at 1 000; Italy = Cuba at 2 125 → Italy between 1 000 and 2 125')},
{id:'x-o2-cog',topic:'o2',type:'numeric',src:'course',title:'Center of gravity (at-home exercises 4 and 5)',q:'<p>(4) A (0, 0) 10, B (100, 300) 30, C (200, 50) 20. (5) Chicago (30, 120) 2 000, New York (130, 130) 1 000, Pittsburgh (90, 110) 1 000, Atlanta (60, 40) 2 000.</p>',
 parts:[{label:'(4) x',answer:7000/60},{label:'(4) y',answer:10000/60},{label:'(5) x',answer:400000/6000},{label:'(5) y',answer:560000/6000}],
 solution:F('(4) x = (0 + 3 000 + 4 000)/60 = 116.7; y = (0 + 9 000 + 1 000)/60 = 166.7\n(5) x = 400 000/6 000 = 66.67; y = 560 000/6 000 = 93.33')},
{id:'x-o2-midterm',topic:'o2',type:'case',src:'course',title:'Mid-term Q1: Lille, Paris, Lyon',q:'<p>Lille FC €30 000, VC €30; Paris FC €40 000, VC €40; Lyon FC €50 000, VC €20.</p>',
 parts:[{type:'mcq',q:'a) Method?',o:['Locational break-even analysis','Factor rating','Center of gravity','Transportation problem'],a:0},{type:'numeric',q:'Lille is cheapest up to (units)',answer:2000,tol:0},{type:'mcq',q:'Paris is cheapest…',o:['never','below 1 000 units','above 2 000 units'],a:0}],
 solution:'<p>Official solution: Paris has higher fixed and variable costs than Lille, so it is never optimal; Lille = Lyon at 2 000 units; Lille below, Lyon above.</p>'},
{id:'x-o2-gen',topic:'o2',type:'calc',src:'practice',title:'Locational break-even (new numbers)',
 gen:u=>{const v1=u.step(60,120,5),d1=u.step(10,30,5),d2=u.step(5,20,5),x12=u.step(500,2000,100),x23=x12+u.step(500,3000,100),f1=u.step(10000,50000,5000);const v2=v1-d1,v3=v2-d2,f2=f1+d1*x12,f3=f2+d2*x23;return {v1,v2,v3,f1,f2,f3,x12,x23}},
 q:v=>`<p>Yearly cost: North ${fmt(v.f1)} + ${v.v1}x · Centre ${fmt(v.f2)} + ${v.v2}x · South ${fmt(v.f3)} + ${v.v3}x.</p>`,
 parts:[{label:'North is cheapest up to (units)',answer:v=>v.x12,tol:0},{label:'South is cheapest from (units)',answer:v=>v.x23,tol:0}],
 solution:v=>F(`North = Centre: ${fmt(v.f1)} + ${v.v1}x = ${fmt(v.f2)} + ${v.v2}x → x = ${fmt(v.x12)}\nCentre = South: ${fmt(v.f2)} + ${v.v2}x = ${fmt(v.f3)} + ${v.v3}x → x = ${fmt(v.x23)}`)},
{id:'x-o2-cog-gen',topic:'o2',type:'calc',src:'practice',title:'Center of gravity (new numbers)',
 gen:u=>{const p=[0,1,2].map(()=>({x:u.step(0,200,10),y:u.step(0,200,10),q:u.step(100,1000,100)}));return {p}},
 q:v=>`<p>${v.p.map((p,i)=>`Market ${'ABC'[i]} (${p.x}, ${p.y}), volume ${p.q}`).join(' · ')}.</p>`,
 parts:[{label:'x',answer:v=>v.p.reduce((a,p)=>a+p.x*p.q,0)/v.p.reduce((a,p)=>a+p.q,0)},{label:'y',answer:v=>v.p.reduce((a,p)=>a+p.y*p.q,0)/v.p.reduce((a,p)=>a+p.q,0)}],
 solution:v=>{const Q=v.p.reduce((a,p)=>a+p.q,0);return F(`x = (${v.p.map(p=>p.x+' × '+p.q).join(' + ')}) / ${Q} = ${r2(v.p.reduce((a,p)=>a+p.x*p.q,0)/Q)}\ny = (${v.p.map(p=>p.y+' × '+p.q).join(' + ')}) / ${Q} = ${r2(v.p.reduce((a,p)=>a+p.y*p.q,0)/Q)}`)}},
{id:'x-o3-model',topic:'o3',type:'case',src:'course',title:'Formulate: smoothies (at-home exercise 3)',q:'<p>Berry smoothie €3 (2 blender minutes, 1 fruit unit); Green smoothie €4 (1 blender minute, 3 fruit units). 23 blender minutes, 29 fruit units.</p>',
 parts:[{type:'mcq',q:'Objective function',o:['Max 3x + 4y','Min 3x + 4y','Max 2x + y','Max x + 3y'],a:0},{type:'mcq',q:'Blender constraint',o:['2x + y ≤ 23','x + 3y ≤ 23','2x + y ≤ 29','x + y ≤ 23'],a:0},{type:'mcq',q:'Fruit constraint',o:['x + 3y ≤ 29','2x + y ≤ 29','3x + y ≤ 29','x + 3y ≥ 29'],a:0},
  {type:'numeric',q:'Optimal Berry',answer:8,tol:0},{type:'numeric',q:'Optimal Green',answer:7,tol:0},{type:'numeric',q:'Maximum contribution (€)',answer:52,tol:0}],
 solution:F('Corner points: (0, 0), (11.5, 0) → 34.5, (0, 9.67) → 38.7, intersection 2x + y = 23 and x + 3y = 29 → (8, 7) → 3×8 + 4×7 = 52')},
{id:'x-o3-corner',topic:'o3',type:'numeric',src:'course',title:'Corner points (at-home exercise 4)',q:'<p>Max 240A + 375B s.t. 2A + 3B ≤ 460, A + 0.5B ≤ 120, 50 ≤ A ≤ 100, 50 ≤ B ≤ 120.</p>',
 parts:[{label:'Profit at (65, 110)',answer:56850,tol:0},{label:'Profit at (50, 120)',answer:57000,tol:0},{label:'Optimal A',answer:50,tol:0},{label:'Optimal B',answer:120,tol:0}],
 solution:F('(50, 50) 30 750 · (65, 110) 56 850 · (50, 120) 57 000 · (95, 50) 41 550 → produce 50 A and 120 B')},
{id:'x-o3-transport',topic:'o3',type:'case',src:'course',title:'Transportation model (mid-term Q5)',q:'<p>Plant 1 (100 units), Plant 2 (150); Market A demand 120, Market B 180. Costs: 1→A €4, 1→B €6, 2→A €5, 2→B €4.</p>',
 parts:[{type:'mcq',q:'a) Type of problem',o:['Transportation problem','Assignment problem','EOQ','Factor rating'],a:0},{type:'mcq',q:'b) Objective',o:['Min 4x11 + 6x12 + 5x21 + 4x22','Max 4x11 + 6x12 + 5x21 + 4x22','Min x11 + x12 + x21 + x22','Min 4x11 + 5x12 + 6x21 + 4x22'],a:0},
  {type:'mcq',q:'b) Demand constraint of market A',o:['x11 + x21 = 120','x11 + x12 ≤ 100','x11 + x21 ≤ 120','x21 + x22 = 120'],a:0},{type:'mcq',q:'c) Feasible?',o:['No: 250 units of supply < 300 of demand','Yes'],a:0}],
 solution:'<p>Official solution: xij = quantity from plant i to market j ≥ 0; capacity x11 + x12 ≤ 100, x21 + x22 ≤ 150; demand x11 + x21 = 120, x12 + x22 = 180. Infeasible because supply (250) is below demand (300).</p>'},
{id:'x-o3-solver',topic:'o3',type:'order',src:'course',title:'Setting up Excel Solver',q:'Put the Solver set-up steps in a logical order.',items:['Put the decision variables in cells (e.g. A2:C2)','Write the objective formula in a cell (e.g. =30*A2-10*B2+15*C2)','Set Objective to that cell and choose Max or Min','Set By Changing Variable Cells to the decision cells','Add each constraint (left-hand side ≤, = or ≥ right-hand side)','Tick non-negativity, choose Simplex LP and Solve']},
{id:'x-o4-line',topic:'o4',type:'calc',src:'practice',title:'Bottleneck, throughput time, capacity (new numbers)',
 gen:u=>{let st;do{st=[0,1,2].map(()=>{const m=u.pick([1,1,1,2,3]);return {t:u.pick([2,3,4,5,6,8,9,10,12]),m}})}while(new Set(st.map(s=>s.t/s.m)).size<3);const eff=st.map(s=>s.t/s.m),b=eff.indexOf(Math.max(...eff));return {st,eff,b}},
 q:v=>`<p>A line with three work centers in series: ${v.st.map((s,i)=>`${'ABC'[i]}: ${s.m} machine${s.m>1?'s':''} of ${s.t} min/unit`).join(' · ')}.</p><p>Give the bottleneck as 1 (A), 2 (B) or 3 (C).</p>`,
 parts:[{label:'Bottleneck work center (1, 2 or 3)',answer:v=>v.b+1,tol:0},{label:'Throughput time (min)',answer:v=>v.st.reduce((a,s)=>a+s.t,0)},{label:'Capacity (units per hour)',answer:v=>60/Math.max(...v.eff)}],
 solution:v=>F(`Effective times: ${v.st.map((s,i)=>`${'ABC'[i]} ${s.t}/${s.m} = ${r2(v.eff[i])}`).join(', ')} min/unit\nBottleneck: ${'ABC'[v.b]}\nThroughput time = ${v.st.map(s=>s.t).join(' + ')} = ${v.st.reduce((a,s)=>a+s.t,0)} min\nCapacity = 60 / ${r2(Math.max(...v.eff))} = ${r2(60/Math.max(...v.eff))} units/hour`)},
{id:'x-o4-toc3',topic:'o4',type:'numeric',src:'course',title:'TOC with three products (in-class)',q:'<p>2 400 min/week. A: price 80, cost 40, M1 15, M2 14, demand 70. B: 40, 10, M1 16, M2 11, demand 80. C: 60, 25, M1 12, M2 9, demand 60.</p>',
 parts:[{label:'Minutes needed on M1 for all demand',answer:3050,tol:0},{label:'Units of B produced (whole units)',answer:39,tol:0},{label:'Maximum profit with whole units (€)',answer:6070,tol:0}],
 solution:F('M1: 1 050 + 1 280 + 720 = 3 050 > 2 400 (bottleneck); M2: 980 + 880 + 540 = 2 400\nMargin per M1 minute: A 40/15 = 2.67, B 30/16 = 1.88, C 35/12 = 2.92 → C, A, B\nC 720 min, A 1 050 min, 630 min left → 630/16 = 39.4 → 39 B\nProfit = 60 × 35 + 70 × 40 + 39 × 30 = 6 070')+NOTE('<b>Computed by the site</b> from the in-class solution steps (the end of the solution is not in the text). With 39.4 units of B the profit would be 6 081.')},
{id:'x-o4-midterm',topic:'o4',type:'numeric',src:'course',title:'Mid-term Q6: tables and chairs',q:'<p>Tables €8 (cutting 3 min, sanding 8 min), chairs €12 (cutting 5, sanding 4). 800 minutes per machine per day; demand 80 tables, 100 chairs.</p>',
 parts:[{label:'Minutes needed on sanding',answer:1040,tol:0},{label:'Chairs produced',answer:100,tol:0},{label:'Tables produced',answer:50,tol:0},{label:'Maximum daily profit (€)',answer:1600,tol:0}],
 solution:F('Sanding 640 + 400 = 1 040 > 800: bottleneck (cutting 740 ≤ 800)\nChairs 12/4 = 3 > tables 8/8 = 1 → 100 chairs, then 400/8 = 50 tables → €1 600')},
{id:'x-o4-gen',topic:'o4',type:'calc',src:'practice',title:'TOC product mix (new numbers)',
 gen:u=>{for(;;){const mA=u.step(10,60,5),mB=u.step(10,60,5),tA=u.int(2,12),tB=u.int(2,12),dA=u.step(20,100,10),dB=u.step(20,100,10);if(Math.abs(mA/tA-mB/tB)<0.05)continue;
  const first=mA/tA>mB/tB?'A':'B',f={A:{m:mA,t:tA,d:dA},B:{m:mB,t:tB,d:dB}},p=f[first],s=f[first==='A'?'B':'A'];const x2=u.int(1,s.d-1);const C=p.d*p.t+x2*s.t;
  const oA=u.int(1,4),oB=u.int(1,4);if(dA*oA+dB*oB>=C)continue;return {mA,mB,tA,tB,dA,dB,oA,oB,C,first,x2,profit:p.d*p.m+x2*s.m}}},
 q:v=>`<p>Weekly capacity ${fmt(v.C)} min per machine. A: margin €${v.mA}, M1 ${v.oA} min, M2 ${v.tA} min, demand ${v.dA}. B: margin €${v.mB}, M1 ${v.oB} min, M2 ${v.tB} min, demand ${v.dB}.</p>`,
 parts:[{label:'Units of A',answer:v=>v.first==='A'?v.dA:v.x2,tol:0},{label:'Units of B',answer:v=>v.first==='B'?v.dB:v.x2,tol:0},{label:'Maximum profit (€)',answer:v=>v.profit,tol:0}],
 solution:v=>F(`M1 needs ${v.dA*v.oA+v.dB*v.oB} ≤ ${v.C}; M2 needs ${v.dA*v.tA+v.dB*v.tB} > ${v.C} → M2 is the bottleneck\nMargin per M2 minute: A ${r2(v.mA/v.tA)}, B ${r2(v.mB/v.tB)} → ${v.first} first\n${v.first}: full demand; the remaining M2 time makes ${v.x2} units of ${v.first==='A'?'B':'A'}\nProfit = ${fmt(v.profit)}`)},
{id:'x-o6-eoq',topic:'o6',type:'numeric',src:'course',title:'Practice exam Q1: EOQ',q:'<p>Under the EOQ, average inventory is 50 units, holding cost €5 per unit per year, ordering cost €10 per order, 250 working days.</p>',
 parts:[{label:'Total annual ordering cost (€)',answer:250,tol:0},{label:'Optimal order quantity',answer:100,tol:0},{label:'Annual demand',answer:2500,tol:0},{label:'Days between orders',answer:10,tol:0},{label:'Total inventory cost if demand becomes 10 000 (€)',answer:1000,tol:0}],
 solution:F('Q = 2 × 50 = 100; holding = 5 × 50 = 250 = ordering\n10 × D/100 = 250 → D = 2 500; N = 25 → 250/25 = 10 days\nD = 10 000: Q* = √(2 × 10 × 10 000/5) = 200 → 500 + 500 = €1 000')+NOTE('<b>Computed by the site</b>: the practice exam has no solutions.')},
{id:'x-o6-extra2',topic:'o6',type:'numeric',src:'course',title:'Ordering every three months (extra exercise 2)',q:'<p>D = 12 000, S = €4, H = €2. What extra cost do you pay by ordering every three months instead of using the EOQ?</p>',
 parts:[{label:'EOQ',answer:Math.sqrt(48000),tol:0.05},{label:'Minimum ordering + holding cost (€)',answer:Math.sqrt(192000),tol:0.05},{label:'Cost when ordering every 3 months (€)',answer:3016,tol:0},{label:'Extra cost (€)',answer:3016-Math.sqrt(192000),tol:0.05}],
 solution:F('EOQ = √(2 × 4 × 12 000/2) = 219.1; cost = 4 × 12 000/219.1 + 2 × 219.1/2 = 438.2\nEvery 3 months: Q = 3 000, 4 orders: 16 + 3 000 = 3 016 → extra ≈ 2 577.8')+NOTE('<b>Computed by the site.</b>')},
{id:'x-o6-gen',topic:'o6',type:'calc',src:'practice',title:'EOQ (new numbers)',
 gen:u=>{for(;;){const Q=u.step(50,800,10),H=u.pick([1,2,4,5,10]),S=u.pick([10,20,25,40,50,100]);const D=Q*Q*H/(2*S);if(!Number.isInteger(D)||D<Q||D>200000)continue;const days=u.pick([250,360]);if(!Number.isInteger(D/Q))continue;return {Q,H,S,D,days}}},
 q:v=>`<p>Annual demand ${fmt(v.D)} units, ordering cost €${v.S} per order, holding cost €${v.H} per unit per year, ${v.days} working days.</p>`,
 parts:[{label:'EOQ',answer:v=>v.Q},{label:'Number of orders per year',answer:v=>v.D/v.Q},{label:'Days between orders',answer:v=>v.days/(v.D/v.Q)},{label:'Annual ordering + holding cost (€)',answer:v=>v.H*v.Q}],
 solution:v=>F(`Q* = √(2 × ${v.S} × ${fmt(v.D)} / ${v.H}) = ${v.Q}\nN = ${fmt(v.D)}/${v.Q} = ${v.D/v.Q};  T = ${v.days}/${v.D/v.Q} = ${r2(v.days/(v.D/v.Q))} days\nCost = ${v.S} × ${v.D/v.Q} + ${v.H} × ${v.Q}/2 = ${fmt(v.H*v.Q)}`)},
{id:'x-o7-seq',topic:'o7',type:'numeric',src:'course',title:'Practice exam Q3: EDD and LPT',q:'<p>Jobs (processing days, due date): C (40, 35), B (16, 70), A (8, 20), D (5, 38), E (3, 50).</p>',
 parts:[{label:'EDD total flow time',answer:237,tol:0},{label:'EDD total lateness',answer:36,tol:0},{label:'LPT total flow time',answer:301,tol:0},{label:'LPT total lateness',answer:102,tol:0}],
 solution:(()=>{const jobs=[{n:'C',pt:40,dd:35},{n:'B',pt:16,dd:70},{n:'A',pt:8,dd:20},{n:'D',pt:5,dd:38},{n:'E',pt:3,dd:50}],H=['Job','Processing','Flow time','Due','Lateness'];
  const e=seqTotals(jobs,sortBy(jobs,(a,b)=>a.dd-b.dd)),l=seqTotals(jobs,sortBy(jobs,(a,b)=>b.pt-a.pt));
  return '<p><b>EDD</b> A-C-D-E-B</p>'+T(H,e.rows,[1,2,3,4])+'<p><b>LPT</b> C-B-A-D-E</p>'+T(H,l.rows,[1,2,3,4])+NOTE('<b>Computed by the site</b>: the practice exam has no solutions.')})()},
{id:'x-o7-gen',topic:'o7',type:'calc',src:'practice',title:'Priority rules (new jobs)',
 gen:u=>{for(;;){const pts=u.shuffle([2,3,4,5,6,7,8,9,10,11,12,14,15]).slice(0,5),dds=u.shuffle([8,10,12,14,15,18,20,22,25,28,30,33,35]).slice(0,5);const jobs=pts.map((pt,i)=>({n:'ABCDE'[i],pt,dd:dds[i]}));const rule=u.pick(['SPT','EDD','LPT']);
  const ord=rule==='SPT'?sortBy(jobs,(a,b)=>a.pt-b.pt):rule==='EDD'?sortBy(jobs,(a,b)=>a.dd-b.dd):sortBy(jobs,(a,b)=>b.pt-a.pt);const r=seqTotals(jobs,ord);return {jobs,rule,ord,seq:ord.map(i=>jobs[i].n).join('-'),...r}}},
 q:v=>`<p>Jobs in order of arrival (processing days, due day): ${v.jobs.map(j=>`${j.n} (${j.pt}, ${j.dd})`).join(' · ')}. Apply <b>${v.rule}</b>.</p>`,
 parts:[{label:'Total flow time',answer:v=>v.flow,tol:0},{label:'Total lateness',answer:v=>v.late,tol:0},{label:'Average flow time',answer:v=>v.avgFlow}],
 solution:v=>`<p>Sequence: <b>${v.seq}</b></p>`+T(['Job','Processing','Flow time','Due','Lateness'],v.rows,[1,2,3,4])},
{id:'x-o7-assign',topic:'o7',type:'match',src:'course',title:'Assignment method: typesetters',q:'Costs: A (R 11, S 14, T 6), B (R 8, S 10, T 11), C (R 9, S 12, T 7). Match each typesetter with the job of the optimal assignment.',
 pairs:[['Typesetter A','T-50'],['Typesetter B','S-66'],['Typesetter C','R-34']],e:'Total $25.'},
{id:'x-o7-assign-steps',topic:'o7',type:'order',src:'course',title:'Steps of the assignment method',q:'Put the steps in order.',items:['Subtract the smallest number in each row','Subtract the smallest number in each column','Cover all zeros with the minimum number of lines','If lines < rows: adjust with the smallest uncovered number and repeat','Assign along the zeros']},
{id:'x-o7-rules',topic:'o7',type:'match',src:'course',title:'The four sequencing rules',q:'Match each rule with its logic.',
 pairs:[['FCFS','jobs in order of arrival, seems fair'],['EDD','earliest due date first, avoids lateness penalties'],['SPT','shortest job first, minimizes flow time'],['LPT','longest job first, big jobs not postponed']]},
{id:'x-o8-flex',topic:'o8',type:'numeric',src:'course',title:'Flexibility exercises 1 and 2',q:'<p>See the Class 8 sheet for the data (Autocompany and the brewery).</p>',
 parts:[{label:'Autocompany operating profit (€ million)',answer:234,tol:0},{label:'Brewery: expected profit of the fixed plant',answer:14400,tol:0},{label:'Brewery: expected profit of the flexible plant',answer:10720,tol:0},{label:'Maximum fixed cost acceptable for the flexible plant',answer:56320,tol:0}],
 solution:'<p>Official solutions (Class 8): 234 M€; 14 400 vs 10 720; flexibility worth a fixed cost up to 56 320.</p>'},
{id:'x-o8-types',topic:'o8',type:'match',src:'course',title:'Types of flexibility',q:'Match each example with the type of flexibility.',
 pairs:[['Producing 20% more next month','volume flexibility'],['Changing the sequence of products on the line','mix flexibility'],['Launching a new model on the same line','product flexibility'],['Sourcing from Morocco instead of China','supply-chain flexibility (nearshoring)'],['Modular components shared by products','product-design flexibility']]},
{id:'x-o9-bullwhip',topic:'o9',type:'mcq',src:'course',title:'Practice exam Q5: reducing the bullwhip effect',q:'Which actions reduce the impact of the bullwhip effect? (select all)',o:['Information sharing between partners','Better demand forecasting','Shorter lead times','Collaboration through information systems','Adding intermediaries','Large promotions'],a:[0,1,2,3],e:'More partners, longer lead times, panic and big promotions amplify it.'},
{id:'x-o9-example',topic:'o9',type:'case',src:'course',title:'Company examples (self-assessed)',q:'<p>Practice exam Q2 and mid-term Q4 ask for a company example. Write one example each of: (1) very high inventory, (2) a facility-location decision, (3) a bottleneck, with the key factors.</p>',
 solution:'<p>(1) Nike: $9.3 billion of inventory (+43%) in 2022 after supply-chain disruptions and a slowdown in China; H&amp;M: $4.3 billion of unsold clothes (2018). (2) Lotus Bakeries in Thailand (Asian demand, central location, raw materials, labour, lower transport); Adidas Speedfactories (reshoring with automation, closed 2019–2020); Ahlstrom closing Bousbecque (overcapacity). (3) ASML lithography machines for chips; critical minerals (lithium, cobalt, nickel) for EV batteries; Tesla’s battery module line.</p>'}];

/* ---------- flashcards ---------- */
const C=(id,topic,f,b)=>({id,topic,f,b});
const CARDS=[
C('c0','o1','Operations Management','all activities creating value in goods and services by transforming inputs into outputs'),C('c1','o1','Goods vs services','tangible, storable, low contact vs intangible, simultaneous, high contact, less standardized'),
C('c2','o1','Labour productivity','units / labour hours'),C('c3','o1','Multifactor productivity','units / (labour + material + overhead + capital) in €'),
C('c4','o1','Efficiency vs effectiveness','doing things right vs doing the right things'),C('c5','o1','Supply chain flows','products, funds, information'),
C('c6','o2','Three location decisions','expand · add · close and relocate'),C('c7','o2','Factor rating weakness','subjective, does not necessarily account for costs'),
C('c8','o2','Locational break-even weakness','ignores the location of markets and suppliers'),C('c9','o2','Center of gravity','x = Σxi·Qi/ΣQi, y = Σyi·Qi/ΣQi; result may be infeasible'),
C('c10','o2','Services vs industry location','services: close to customers (revenue) · industry: low-cost regions (cost)'),
C('c11','o3','Optimization model','decision variables · objective function · constraints'),C('c12','o3','Transportation model','min Σcij·xij; Σj xij ≤ Ci; Σi xij = Dj; xij ≥ 0'),
C('c13','o3','Infeasible transportation problem','total capacity < total demand'),C('c14','o3','Solver for linear problems','Simplex LP; set objective, variable cells, constraints'),
C('c15','o4','Bottleneck','the station limiting output: highest effective time per unit'),C('c16','o4','Throughput time','sum of process times along the line'),
C('c17','o4','Capacity of a line','60 / bottleneck time (units per hour)'),C('c18','o4','TOC rule','priority = margin per bottleneck minute; improving non-bottlenecks is useless'),
C('c19','o4','Utilization','output / capacity'),C('c20','o6','EOQ','√(2SD/H): holding cost = ordering cost'),
C('c21','o6','Total inventory cost','P·D + S·D/Q + H·Q/2'),C('c22','o6','EOQ assumptions','single product, stable demand, zero lead time, stable price, no perishability or capacity limit'),
C('c23','o6','Reasons to hold inventory','uncertain supply, large batches, short lead time, availability, quantity discounts'),C('c24','o6','Inventory examples','Nike $9.3 bn (2022) · H&M $4.3 bn unsold clothes (2018)'),
C('c25','o7','Priority rules','FCFS · EDD · SPT · LPT'),C('c26','o7','Flow time and lateness','completion time · max(0, completion − due date)'),
C('c27','o7','Assignment method','row and column reduction, cover zeros, adjust, assign; max: largest − each'),
C('c28','o8','Flexibility','respond to change without excessive cost or performance loss'),C('c29','o8','Production flexibility types','volume · mix · product'),
C('c30','o8','Postponement','delay product differentiation until the order (Dell)'),C('c31','o9','Bullwhip effect','order variability amplified upstream'),
C('c32','o9','Reduce the bullwhip','information sharing, collaboration, forecasting, shorter lead times, fewer stages'),C('c33','o9','Beer game costs','inventory €5/unit, backlog €25/unit')];

/* ---------- mock exams ---------- */
const MOCKS=[
{id:'m1',title:'Mock exam 1 · practice exam December 2024',exam:'final',scope:'Classes 1–9',duration:90,total:20,calculator:'Calculator allowed, closed book',
 summary:'The practice exam posted on MyCourses (7 questions, 20 points). Answers computed by the site: the posted version has no solutions.',
 intro:'<p>Show your calculations. Written answers are marked with the grid after hand-in.</p>',
 sections:[{title:'Questions 1–7',items:[
  {id:'q1',topic:'o6',type:'case',pts:2.5,title:'Q1 · EOQ',q:'<p>Under the EOQ, average inventory is 50 units, holding cost €5 per unit per year, ordering cost €10 per order, 250 working days.</p>',
   parts:[{type:'numeric',pts:0.5,q:'Total annual ordering cost (€)',answer:250,tol:0},{type:'numeric',pts:0.5,q:'Optimal order quantity',answer:100,tol:0},{type:'numeric',pts:0.5,q:'Annual demand',answer:2500,tol:0},{type:'numeric',pts:0.5,q:'Days between orders',answer:10,tol:0},{type:'numeric',pts:0.5,q:'Total inventory cost if demand becomes 10 000 (€)',answer:1000,tol:0}],
   solution:F('Q = 100; holding = ordering = 250; D = 2 500; 25 orders → 10 days; D = 10 000 → Q* = 200 → €1 000')},
  {id:'q2',topic:'o6',type:'written',pts:1.5,title:'Q2 · High inventory',lines:5,q:'<p>Give an example of a company for which inventory was very high, and give some explanation related to your example.</p>',
   rubric:[{c:'A real company from the course (Nike, H&M…) with figures',pts:0.75},{c:'Explanation of the causes and consequences (demand slowdown, supply-chain disruptions, capital tied up, markdowns)',pts:0.75}],
   solution:'<p>Nike reported $9.3 billion of inventory in December 2022 (+43%), due to lapping prior supply-chain disruption, higher input costs and a slowdown in China; it had to discount products. H&amp;M sat on $4.3 billion of unsold clothes in 2018.</p>'},
  {id:'q3',topic:'o7',type:'case',pts:3,title:'Q3 · Scheduling',q:'<p>Jobs (processing days, due date): C (40, 35), B (16, 70), A (8, 20), D (5, 38), E (3, 50).</p>',
   parts:[{type:'text',pts:0.5,q:'EDD sequence (e.g. A-B-C-D-E)',accept:['A-C-D-E-B','acdeb']},{type:'numeric',pts:0.5,q:'EDD total flow time',answer:237,tol:0},{type:'numeric',pts:0.5,q:'EDD total lateness',answer:36,tol:0},
    {type:'text',pts:0.5,q:'LPT sequence',accept:['C-B-A-D-E','cbade']},{type:'numeric',pts:0.5,q:'LPT total flow time',answer:301,tol:0},{type:'numeric',pts:0.5,q:'LPT total lateness',answer:102,tol:0}]},
  {id:'q4',topic:'o4',type:'case',pts:6,title:'Q4 · Product mix (TOC)',q:'<p>Each machine: 1 000 min/week. A: revenue 6, cost 2, machines 1–4: 2, 5, 4, 1 min, demand 70. B: 8, 4: 6, 4, 3, 2, demand 50. C: 7, 5: 2, 6, 7, 3, demand 60. D: 10, 4: 1, 4, 1, 8, demand 30.</p>',
   parts:[{type:'mcq',pts:1,q:'Mathematical formulation: objective',o:['Max 4A + 4B + 2C + 6D','Max 6A + 8B + 7C + 10D','Min 2A + 4B + 5C + 4D','Max A + B + C + D'],a:0},{type:'mcq',pts:1,q:'Bottleneck',o:['Machine 2 (1 030 min needed)','Machine 1','Machine 3','Machine 4'],a:0},
    {type:'text',pts:1,q:'Product priority (e.g. A-B-C-D)',accept:['D-B-A-C','dbac']},{type:'numeric',pts:1,q:'Units of C in the ideal mix',answer:55,tol:0},{type:'numeric',pts:1,q:'Maximum achievable profit (€)',answer:770,tol:0},{type:'numeric',pts:1,q:'Profit lost because of the bottleneck (€)',answer:10,tol:0}],
   solution:F('Margins A 4, B 4, C 2, D 6\nLoads: M1 590, M2 350 + 200 + 360 + 120 = 1 030, M3 880, M4 590 → M2 bottleneck\nPer M2 minute: D 1.5, B 1, A 0.8, C 0.33 → D, B, A, C\nD 30 (120 min), B 50 (200), A 70 (350) → 330 min left → C 55\nProfit = 180 + 200 + 280 + 110 = 770; with all demand 780 → loss 10')},
  {id:'q5',topic:'o9',type:'mcq',pts:1,title:'Q5 · Bullwhip effect',q:'Which actions reduce the impact of the bullwhip effect? (select all)',o:['Sharing point-of-sale data with suppliers','Shorter lead times','Better forecasting','Collaboration through information systems','Big promotions','More intermediaries'],a:[0,1,2,3]},
  {id:'q6',topic:'o3',type:'case',pts:4,title:'Q6 · Excel Solver',q:'<p>Max 30A − 10B + 15C s.t. A ≤ 50, B ≥ 10, C ≤ 50, 30A + 10B + 10C ≤ 900. Cells A2:C2 hold A, B, C; A4 holds =30*A2−10*B2+15*C2. The Solver shows Set Objective $A$4, “Value of 0”, changing cells $A$2:$C$2, constraints $A$2 ≤ 50 and $B$2 ≥ 10.</p>',
   parts:[{type:'mcq',pts:1,q:'What must change in “To:”?',o:['Select Max instead of Value of 0','Select Min','Keep Value of 0','Change the objective cell to A2'],a:0},{type:'mcq',pts:1,q:'Which constraints are missing?',o:['$C$2 ≤ 50 and 30*A2 + 10*B2 + 10*C2 ≤ 900 (via a formula cell)','$A$2 ≥ 0 only','$B$2 ≤ 10','None'],a:0},
    {type:'numeric',pts:1,q:'Optimal C',answer:50,tol:0},{type:'numeric',pts:1,q:'Maximum value of the profit function',answer:950,tol:0}],
   solution:F('B at its minimum 10 (it lowers profit) → 30A + 10C ≤ 800\nC earns 15 per 10 capacity (1.5) vs A 30 per 30 (1) → C = 50 (500), then A = 300/30 = 10\nProfit = 300 − 100 + 750 = 950')},
  {id:'q7',topic:'o4',type:'case',pts:2,title:'Q7 · Line',q:'<p>Machine 1: 6 min/unit → Machine 2: 8 min/unit → Machine 3: 2 min/unit.</p>',
   parts:[{type:'mcq',pts:0.5,q:'Which class?',o:['Capacity management and TOC (Class 4)','Inventory management','Scheduling','Facility location'],a:0},{type:'numeric',pts:0.5,q:'Throughput time (min)',answer:16,tol:0},{type:'numeric',pts:0.5,q:'Bottleneck machine (number)',answer:2,tol:0},{type:'numeric',pts:0.5,q:'Capacity (units per hour)',answer:7.5}]}]}]},
{id:'m2',title:'Mock exam 2 · in the style of the mid-term',exam:'final',scope:'Classes 1–9',duration:90,total:20,calculator:'Calculator allowed, closed book',
 summary:'MCQs and exercises on all classes: productivity, location, transportation, TOC, EOQ, scheduling, flexibility.',
 intro:'<p>Part A: MCQs (one answer). Part B: exercises.</p>',
 sections:[
 {title:'Part A · MCQs (5 points)',items:[
  {id:'a1',topic:'o1',type:'mcq',pts:1,q:'A professor corrects 200 exams in 10 days (€200/day). Software costing €3 000 cuts this to 2 days. Multifactor productivity with the software?',o:['200/3 400 ≈ 0.059 exams/€','100 exams/day','0.1 exams/€','200/3 000 exams/€'],a:0},
  {id:'a2',topic:'o2',type:'mcq',pts:1,q:'Which method gives one geographical point weighted by volumes?',o:['Center of gravity','Factor rating','Locational break-even','Transportation problem'],a:0},
  {id:'a3',topic:'o6',type:'mcq',pts:1,q:'If the ordering cost S doubles, the EOQ:',o:['is multiplied by √2','doubles','is halved','does not change'],a:0},
  {id:'a4',topic:'o7',type:'mcq',pts:1,q:'Jobs with processing times 7, 3, 5 and due dates 9, 12, 6. EDD sequence (jobs 1, 2, 3)?',o:['3-1-2','2-3-1','1-2-3','1-3-2'],a:0},
  {id:'a5',topic:'o9',type:'mcq',pts:1,q:'The bullwhip effect increases when:',o:['lead times increase','information sharing increases','forecasting improves','the chain has fewer stages'],a:0}]},
 {title:'Part B · Exercises (15 points)',items:[
  {id:'b1',topic:'o2',type:'case',pts:3,title:'B1 · Location',q:'<p>Rouen: FC €45 000, VC €35. Reims: FC €60 000, VC €25. Metz: FC €80 000, VC €30.</p>',
   parts:[{type:'numeric',pts:1,q:'Rouen is cheapest up to (units)',answer:1500,tol:0},{type:'mcq',pts:1,q:'Metz is cheapest…',o:['never (Reims has lower FC and VC)','above 4 000 units','below 1 500 units'],a:0},{type:'mcq',pts:1,q:'One limitation of this method',o:['It ignores the location of markets and suppliers','It is subjective','It needs coordinates'],a:0}],
   solution:F('Rouen = Reims: 45 000 + 35x = 60 000 + 25x → x = 1 500\nMetz has higher fixed and variable costs than Reims: never optimal')},
  {id:'b2',topic:'o4',type:'case',pts:4,title:'B2 · Bottleneck and product mix',q:'<p>Mugs (margin €6: printing 2 min, glazing 4 min) and plates (margin €10: printing 5 min, glazing 4 min). 1 200 min per machine per week. Demand: 200 mugs, 150 plates.</p>',
   parts:[{type:'mcq',pts:1,q:'Bottleneck',o:['Printing (1 150) is fine; glazing needs 1 400 min: glazing','Printing','Neither'],a:0},{type:'mcq',pts:1,q:'Priority (margin per glazing minute)',o:['Plates (2.5) before mugs (1.5)','Mugs before plates'],a:0},
    {type:'numeric',pts:1,q:'Mugs produced',answer:150,tol:0},{type:'numeric',pts:1,q:'Maximum profit (€)',answer:2400,tol:0}],
   solution:F('Printing 400 + 750 = 1 150 ≤ 1 200; glazing 800 + 600 = 1 400 > 1 200 → glazing\nPlates 10/4 = 2.5 > mugs 6/4 = 1.5 → 150 plates (600 min), 600/4 = 150 mugs\nProfit = 1 500 + 900 = 2 400')},
  {id:'b3',topic:'o6',type:'case',pts:3,title:'B3 · EOQ',q:'<p>D = 4 000 units, S = €50, H = €4, 250 working days.</p>',
   parts:[{type:'numeric',pts:1,q:'EOQ',answer:Math.sqrt(100000),tol:0.05},{type:'numeric',pts:1,q:'Orders per year',answer:4000/Math.sqrt(100000),tol:0.05},{type:'numeric',pts:1,q:'Ordering + holding cost (€)',answer:Math.sqrt(1600000),tol:0.1}],
   solution:F('Q* = √(2 × 50 × 4 000/4) = 316.2; N = 12.65; cost = √(2SDH) = 1 264.9')},
  {id:'b4',topic:'o7',type:'case',pts:3,title:'B4 · SPT',q:'<p>Jobs (days, due): A (6, 10), B (2, 4), C (8, 20), D (3, 9).</p>',
   parts:[{type:'text',pts:1,q:'SPT sequence',accept:['B-D-A-C','bdac']},{type:'numeric',pts:1,q:'Total flow time',answer:2+5+11+19,tol:0},{type:'numeric',pts:1,q:'Total lateness',answer:1,tol:0}],
   solution:F('B 2, D 5, A 11, C 19 → flow 37; lateness: A 11 − 10 = 1')},
  {id:'b5',topic:'o8',type:'written',pts:2,title:'B5 · Flexibility',lines:6,q:'<p>Define flexibility in OM, give two drivers and illustrate one type of flexibility with a company.</p>',
   rubric:[{c:'Definition: respond to change without excessive cost or loss of performance',pts:0.75},{c:'Two drivers (demand volume, mix, product needs, regulation, supply disruptions)',pts:0.5},{c:'A type (volume, mix, product, supply chain, design) with a company example (Zara, Dell…)',pts:0.75}],
   solution:'<p>Flexibility is the ability of operations to respond to changes without excessive cost or loss of performance. Drivers: demand volume and mix, supply disruptions. Example: Zara’s short lead times and nearshoring (supply-chain and volume flexibility); Dell’s postponement (assembly after the order).</p>'}]}]},
{id:'m3',title:'Mock exam 3',exam:'final',scope:'Classes 1–9',duration:90,total:20,calculator:'Calculator allowed, closed book',
 summary:'A transportation model, a parallel-machine line, the assignment method and a capacity-flexibility decision.',
 intro:'<p>Part A: MCQs. Part B: exercises.</p>',
 sections:[
 {title:'Part A · MCQs (4 points)',items:[
  {id:'a1',topic:'o1',type:'mcq',pts:1,q:'Higher production always means higher productivity.',o:['False','True'],a:0},
  {id:'a2',topic:'o3',type:'mcq',pts:1,q:'In Solver, “By Changing Variable Cells” contains:',o:['the decision variables','the objective','the constraints','the solving method'],a:0},
  {id:'a3',topic:'o4',type:'mcq',pts:1,q:'Adding capacity to a non-bottleneck station:',o:['does not increase output and may build inventory','increases output','reduces the bottleneck time'],a:0},
  {id:'a4',topic:'o6',type:'mcq',pts:1,q:'Under the EOQ, total ordering cost is €300. Total holding cost?',o:['€300','€150','€600','It cannot be known'],a:0}]},
 {title:'Part B · Exercises (16 points)',items:[
  {id:'b1',topic:'o3',type:'case',pts:4,title:'B1 · Transportation',q:'<p>Plant 1 (capacity 80) and Plant 2 (100) supply City 1 (60), City 2 (80) and City 3 (40). Costs: P1 → 10, 6, 8; P2 → 8, 12, 7.</p>',
   parts:[{type:'mcq',pts:1,q:'Decision variables',o:['xij = units shipped from plant i to city j','yi = 1 if plant i is open','pj = price in city j'],a:0},{type:'mcq',pts:1,q:'Capacity constraint of plant 1',o:['x11 + x12 + x13 ≤ 80','x11 + x21 = 60','x11 + x12 + x13 = 60'],a:0},
    {type:'mcq',pts:1,q:'Demand constraint of city 2',o:['x12 + x22 = 80','x21 + x22 + x23 ≤ 100','x12 + x22 ≤ 80'],a:0},{type:'numeric',pts:1,q:'Minimum total cost (€)',answer:1240,tol:0}],
   solution:F('Supply 180 = demand 180\nOptimal: P1 → City 2: 80; P2 → City 1: 60, City 3: 40\nCost = 480 + 480 + 280 = 1 240')+NOTE('<b>Computed by the site</b> (in-class exercise 2 of Class 3 has no posted solution): every unit goes on its cheapest route, which is feasible here.')},
  {id:'b2',topic:'o4',type:'case',pts:4,title:'B2 · Line with parallel machines',q:'<p>Cutting: 1 machine, 4 min/unit. Welding: 3 machines, 15 min/unit each. Painting: 2 machines, 9 min/unit each. Packing: 1 machine, 3 min/unit.</p>',
   parts:[{type:'mcq',pts:1,q:'Bottleneck',o:['Welding (5 min/unit)','Painting (4.5)','Cutting (4)','Packing'],a:0},{type:'numeric',pts:1,q:'Throughput time (min)',answer:31,tol:0},{type:'numeric',pts:1,q:'Capacity (units per hour)',answer:12,tol:0},{type:'numeric',pts:1,q:'Capacity with a 4th welding machine (units per hour)',answer:60/4.5},],
   solution:F('Effective: cutting 4, welding 15/3 = 5, painting 9/2 = 4.5, packing 3 → welding\nThroughput 4 + 15 + 9 + 3 = 31; capacity 60/5 = 12\n4th welder → 15/4 = 3.75; painting 4.5 becomes the bottleneck → 13.33/hour')},
  {id:'b3',topic:'o7',type:'case',pts:4,title:'B3 · Assignment',q:'<p>Hours: Worker 1 (J1 9, J2 5, J3 8), Worker 2 (J1 6, J2 4, J3 7), Worker 3 (J1 7, J2 6, J3 5).</p>',
   parts:[{type:'match',pts:3,q:'Optimal assignment',pairs:[['Worker 1','J2'],['Worker 2','J1'],['Worker 3','J3']]},{type:'numeric',pts:1,q:'Minimum total hours',answer:16,tol:0}],
   solution:F('Row reduction: (4, 0, 3), (2, 0, 3), (2, 1, 0); column reduction: (2, 0, 3), (0, 0, 3), (0, 1, 0)\nAssign W1 → J2 (5), W2 → J1 (6), W3 → J3 (5) = 16 hours')},
  {id:'b4',topic:'o8',type:'case',pts:4,title:'B4 · Capacity flexibility',q:'<p>Demand: 5 000 units (p = 0.5) or 9 000 units (p = 0.5); price €10. Fixed plant: capacity 7 000, FC €20 000, VC €2. Flexible plant: capacity 10 000, FC €26 000, VC €2.</p>',
   parts:[{type:'numeric',pts:1,q:'Expected profit, fixed plant (€)',answer:0.5*(5000*8-20000)+0.5*(7000*8-20000),tol:0},{type:'numeric',pts:1,q:'Expected profit, flexible plant (€)',answer:0.5*(5000*8-26000)+0.5*(9000*8-26000),tol:0},
    {type:'mcq',pts:1,q:'Best option',o:['Flexible plant','Fixed plant','Indifferent'],a:0},{type:'numeric',pts:1,q:'Maximum fixed cost of the flexible plant for it to stay at least as good (€)',answer:28000,tol:0}],
   solution:F('Fixed: 0.5 × (40 000 − 20 000) + 0.5 × (56 000 − 20 000) = 28 000\nFlexible: 0.5 × (40 000 − 26 000) + 0.5 × (72 000 − 26 000) = 30 000\n0.5 × 40 000 + 0.5 × 72 000 − x ≥ 28 000 → x ≤ 28 000')}]}]}];

// Shuffle MCQ options once, deterministically (seeded by the id), so the answer is not always "a".
const seed=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const mix=(x,key)=>{if(!x||x.type&&x.type!=='mcq'||!Array.isArray(x.o)||(x.o.length===2&&/^(True|False)$/.test(x.o[0])))return;let r=seed(key);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};
  const idx=x.o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  const pos=i=>idx.indexOf(i);x.a=Array.isArray(x.a)?x.a.map(pos).sort((p,q)=>p-q):pos(x.a);x.o=idx.map(i=>x.o[i])};
QUIZ.forEach(q=>mix(q,q.id));
EXERCISES.forEach(x=>{mix(x,x.id);(x.parts||[]).forEach((p,i)=>mix(p,x.id+'-'+i))});
MOCKS.forEach(m=>m.sections.forEach(s=>s.items.forEach(x=>{mix(x,m.id+x.id);(x.parts||[]).forEach((p,i)=>mix(p,m.id+x.id+'-'+i))})));

registerSubject({
  slug:'operations-management',
  name:'Operations Management',
  short:'Operations',
  tagline:'IÉSEG Bachelor 2 · Final exam (60%): Classes 1–9 + tutorial',
  status:'Classes 1–9 done · 3 mock exams',
  exams:[{id:'final',label:'Final exam',scope:'Classes 1–9'}],
  topics:[
    {id:'o1',label:'Class 1',title:'Introduction to OM and productivity',short:'C1 Productivity',exam:'final',summary:'Goods vs services, contribution, labour and multifactor productivity',sheet:SHEETS.o1},
    {id:'o2',label:'Class 2',title:'Facility location decisions',short:'C2 Location',exam:'final',summary:'Factors, factor rating, locational break-even, center of gravity',sheet:SHEETS.o2},
    {id:'o3',label:'Class 3',title:'Optimization and transportation',short:'C3 Optimization',exam:'final',summary:'Model formulation, transportation problem, Excel Solver',sheet:SHEETS.o3},
    {id:'o4',label:'Classes 4–5',title:'Capacity and Theory of Constraints',short:'C4 TOC',exam:'final',summary:'Bottleneck, throughput time, capacity, product mix',sheet:SHEETS.o4},
    {id:'o6',label:'Class 6',title:'Inventory management',short:'C6 Inventory',exam:'final',summary:'Why inventory, costs, EOQ',sheet:SHEETS.o6},
    {id:'o7',label:'Class 7',title:'Scheduling',short:'C7 Scheduling',exam:'final',summary:'Assignment method, FCFS / EDD / SPT / LPT',sheet:SHEETS.o7},
    {id:'o8',label:'Class 8',title:'Flexibility',short:'C8 Flexibility',exam:'final',summary:'Drivers, types, value of flexible capacity',sheet:SHEETS.o8},
    {id:'o9',label:'Class 9 · Tutorial',title:'Challenges, supply chains, beer game',short:'C9 Challenges',exam:'final',summary:'OM dilemmas, bullwhip effect',sheet:SHEETS.o9}],
  cheatsheet:SHEETS.cheat,
  overview:{
    eyebrow:'Operations Management',
    title:'Classes 1–9 and the beer game, on one site',
    lede:'Built from the MyCourses material of OPERATIONS MANAGEMENT 2315 (prof. Maud Van den Broeke): the class slides, the at-home and in-class exercises with their solutions, the newspaper articles, the beer game, the December 2024 practice exam and the corrected mid-term. Read a class sheet, then practise with exercises that regenerate their numbers.',
    blurbs:{cheat:'All formulas and rules on one page',exercises:'Every method with official exercises and endless new numbers',cards:'Definitions, formulas and company examples',mocks:'90 minutes · 20 points · the 2024 practice exam and two new mocks'},
    html:`<h3>The final exam</h3>
  <ul><li><b>Final exam: 60%, multiple choice + open questions (exercises), 90 minutes, closed book, bring a calculator.</b> Content: class slides, exercises, newspaper articles, online material and the game. Mid-term 20% (first four classes, held on 19/10/2026), continuous assessment 10%, tutorial (beer game) 10%.</li>
  <li>The December 2024 practice exam (7 questions on 20 points) and the mid-term with solutions show the style: calculations with units, short explanations, a company example from the articles.</li></ul>
  <h3>The three mock exams</h3>
  <ul><li><b>Mock 1</b> reproduces the December 2024 practice exam; its answers are <b>computed by the site</b> (the posted file has no solutions). <b>Mocks 2 and 3</b> are new, built like the mid-term (MCQs and exercises on all classes).</li></ul>
  <h3>Sources and limits</h3>
  <ul><li>Official solutions used: at-home exercises of Classes 1–3, TOC and EOQ in-class solutions, flexibility solutions, mid-term (handwritten). Computed by the site and flagged: practice exam, TOC three-product ending, extra EOQ exercise, Mock 3 transportation.</li>
  <li>Not used: the three online practice tests on MyCourses (opening them would create attempts on your account), the Facility Location Game files and Excel solutions (Excel cannot run in the site), the supporting videos.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  mocksNote:NOTE('<b>Where the format comes from.</b> The course information gives 90 minutes, MCQs + exercises, closed book, calculator. Mock 1 is the December 2024 practice exam; Mocks 2 and 3 follow the mid-term style.')
});
})();
