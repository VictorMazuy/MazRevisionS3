/* Operations Management . Final exam (60%): MCQs + exercises, 90 min, closed book, calculator.
   Built from the course material in sources/operations-management/: slides of Classes 1–9, course recap, at-home exercises with solutions,
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
<h3>1. Location decisions and key factors</h3>
<ul><li><b>Facilities</b>: physical locations where products are stored, assembled or fabricated (production and storage sites; retail, plant, warehouse, hospital, school).</li>
<li>Levels: <b>country → region/city → site</b>. Decisions are long-term and infrequent: <b>expand</b> an existing facility, <b>add</b> another, or <b>close and relocate</b>.</li>
<li>Key success factors: country (political risk, incentives, IP protection, taxes, GDP, proximity to markets, culture, infrastructure, labour talent/cost/productivity, exchange rates), region (attractiveness, labour, utilities, environmental rules, incentives, raw materials, customers, land), site (size and cost, transport access, services, environmental impact, customer density). Tangible vs intangible costs.</li>
<li>Labour productivity per € (Germany €70/day, 60 units → 0.86 units/€; China €25/day, 20 units → 0.80 units/€): costs alone are not enough.</li>
<li>Proximity to markets, suppliers (perishables, transport costs) and competitors (clustering).</li></ul>
${T(['','One facility','Many facilities'],[['Responsiveness, service level','lower','higher (closer to customers)'],['Inventory','lower','safety stock increases'],['Fixed costs','lower','more investment and overhead'],['Transportation','—','inbound and outbound both change (outbound usually falls)']])}
<p>Services/retail locate close to customers to <b>maximize revenue</b>; industry locates in low-cost regions to <b>minimize cost</b>. Examples: Lotus Bakeries in Thailand (Asian demand, central location, raw materials, labour, fresher products, lower transport and footprint), Adidas Speedfactories in Germany and the US (2016–2019, closed: automation and reshoring did not pay off), Ahlstrom closing Bousbecque (overcapacity).</p>
<h3>2. Factor rating method</h3>
${F('1. List the key success factors   2. Weight them (total 100%)\n3. Define a scale   4. Score each location   5. Sum weight × score   6. Recommend the highest score')}
<p>Example: labour productivity 40%, image 30%, proximity to supply 30%; Germany 2, 2, 0 → 1.4; China 2, 1, 2 → <b>1.7</b>. Weakness: <b>subjective</b> and does not necessarily take costs into account.</p>
<p><b>Why weights?</b> Not every factor matters as much: a score of 2 on a factor weighted 40% adds 0.8, the same score on a factor weighted 10% only 0.2. Check that the weights add up to 100% (or 1) before multiplying.</p>
<h3>3. Locational break-even analysis</h3>
${F('Total cost of a location = fixed cost + variable cost × volume\nCrossover between two locations: FC1 + VC1·x = FC2 + VC2·x')}
${EX('Cuba, US, Italy (in-class)','worked example',F('Cuba 110 000 + 25x · US 30 000 + 75x · Italy 60 000 + 45x\nItaly = US → x = 1 000;  Italy = Cuba → x = 2 500\nUS for 0–1 000 units, Italy for 1 000–2 500, Cuba above 2 500'))}
${EX('Mid-term Q1: Lille, Paris, Lyon (official solution)','course solution',F('Lille 30 000 + 30x · Paris 40 000 + 40x · Lyon 50 000 + 20x\nParis has a higher fixed AND variable cost than Lille: never optimal\nLille = Lyon → 10x = 20 000 → x = 2 000\nLille for 0–2 000 units, Lyon above 2 000, Paris never'))}
<p><b>Why is a location with higher fixed AND variable costs never optimal?</b> Its cost line starts higher and rises faster, so it stays above the other line at every volume (Paris against Lille). A crossover only exists when one location has the lower fixed cost and the other the lower variable cost: small volumes favour the low fixed cost, large volumes the low variable cost.</p>
<p>Weakness: does <b>not</b> take into account the location of markets and suppliers.</p>
<h3>4. Center of gravity method</h3>
${F('x = Σ xi·Qi / Σ Qi      y = Σ yi·Qi / Σ Qi   (Qi = volume shipped to/from point i)')}
<p><b>Intuition:</b> a weighted average of the coordinates. The larger the volume shipped to a point, the harder it pulls the facility towards it (Berlin, with 1 000, pulls twice as hard as Paris with 500).</p>
<p>Example: Paris (48, 2) 500, Beijing (39, 116) 500, Berlin (52, 13) 1 000 → x = 47.75, y = 36. Concern: the point found may not be a feasible location (e.g. in the sea).</p>
`;

SHEETS.o3=`
<div class="eyebrow">Class 3</div><h2>Optimization and the transportation problem</h2>
<p class="lede">Goal: formulate a problem as an optimization model (decision variables, objective function, constraints), formulate a transportation problem, and know how Excel Solver is set up.</p>
<h3>1. Formulating an optimization model</h3>
${T(['Component','Meaning','Example'],[['Decision variables','the decisions that can be made','how much to produce of each product'],['Objective function','what to maximize or minimize, as a function of the variables','maximize profit, minimize cost'],['Constraints','restrictions on the variables’ values','capacity, demand, non-negativity']])}
${EX('T-shirts (course example)','worked example',F('x = white T-shirts (€5), y = blue T-shirts (€8)\nMax 5x + 8y   s.t.  x + 2y ≤ 160 (hours),  x ≤ 100,  y ≤ 50,  x, y ≥ 0\nSolution: x = 100, y = 30, profit €740'))}
<p>Method: (1) say in words what you decide and name each decision variable with its unit; (2) write the objective as a function of these variables; (3) translate every limit of the text into a constraint, without forgetting non-negativity.</p>
<h3>2. Graphical solution of a 2-variable problem</h3>
<p><b>2-variable problems</b> can also be solved graphically: draw the constraints, find the corner points of the feasible region and evaluate the objective at each (at-home exercise 4: (50, 50) 30 750, (65, 110) 56 850, (50, 120) <b>57 000</b>, (95, 50) 41 550).</p>
<p><b>Why a corner?</b> The objective is a straight line (iso-profit line) that you push away from the origin as long as it still touches the feasible region. The last point it touches is a corner (or a whole edge if it is parallel to it). So it is enough to compute the objective at every corner.</p>
<h3>3. Transportation problem</h3>
${F('xij = quantity shipped from source i to destination j\nMin Σ cij·xij\nCapacity:  Σj xij ≤ Ci  for every source i\nDemand:    Σi xij = Dj  for every destination j\nxij ≥ 0')}
${EX('Mid-term Q5: two plants, two markets (official solution)','course solution',F('Min 4x11 + 6x12 + 5x21 + 4x22\nx11 + x12 ≤ 100   x21 + x22 ≤ 150   x11 + x21 = 120   x12 + x22 = 180   xij ≥ 0\nNo feasible solution: total supply 250 < total demand 300'))}
${TRAP('Check total capacity against total demand: if capacity < demand, Solver cannot find a feasible solution when demand constraints are equalities.')}
<h3>4. Excel Solver</h3>
<ul><li><b>Set Objective</b>: the cell with the objective formula (e.g. =30*A2−10*B2+15*C2); <b>To</b>: Max, Min or Value of; <b>By Changing Variable Cells</b>: the decision-variable cells; <b>Subject to the Constraints</b>: one line per constraint (cell with the left-hand side ≤ / = / ≥ right-hand side); tick “Make unconstrained variables non-negative”; method <b>Simplex LP</b> for linear problems.</li>
<li>A facility-location model with opening decisions needs a <b>mixed</b> model: binary variables (open or not) and continuous variables (quantities shipped) — the homework on the 3 × 3 grid.</li></ul>
`;

SHEETS.o4=`
<div class="eyebrow">Classes 4–5</div><h2>Capacity management and the Theory of Constraints</h2>
<p class="lede">Goal: compute bottleneck, throughput time and capacity of a process, and use TOC (and its optimization model) to find the profit-maximizing product mix.</p>
<h3>1. Capacity and constraints</h3>
<ul><li><b>Capacity</b>: the throughput, or the number of units a facility can hold, receive, store or produce in a given time. <b>Utilization</b> = output / capacity.</li>
<li>Too much capacity: idle resources (lay off, close, lower price, sell more, produce for a competitor). Not enough (100%): demand unmet (add capacity, extra shift or machine, improve the process, raise price).</li>
<li>Constraints: internal (process/equipment, people, policy such as no overtime) and external (supply, market demand).</li>
<li><b>Bottleneck</b>: the constraint that limits the system’s output (the workstation with the smallest capacity). Improve the bottleneck first.</li></ul>
${EX('At-home exercise 1 (Class 4): what is the constraint?','course solution',F('Weekly demand 100 units; 8-hour shifts, 5 days\nA. 20 min per unit: capacity 8 × 5 × 3 = 120 units/week > 100 → the constraint is DEMAND (sell more)\nB. 30 min per unit: capacity 8 × 5 × 2 = 80 units/week < 100 → the constraint is CAPACITY\nC. Supplier delivers 15 units per day: 5 × 15 = 75 units/week → the constraint is the SUPPLIER'))}
<p>Compare demand with every limit expressed in the <b>same unit</b> (units per week): the smallest one is the constraint. If it is demand, utilization stays below 100%.</p>
<h3>2. Bottleneck, throughput time and capacity</h3>
${F('Process time of a station = time per unit (= 1 / capacity); parallel machines: time / number of machines\nBottleneck time = process time of the slowest station\nThroughput time = sum of the process times along the line (no waiting)\nCapacity of the system = 60 / bottleneck time (units per hour)')}
${T(['Example','Bottleneck','Throughput time','Capacity'],[['10, 15, 5 min/unit','station 2 (15 min)','30 min','4 units/hour'],['2, 4, 3 min/unit','station B (4 min)','9 min','15 units/hour'],['Sandwiches: 30 s, 2 × 15 s, 2 × 20 s, 2 × 40 s, 37.5 s','wrap/deliver (37.5 s; toaster 40/2 = 20 s)','142.5 s','96 per hour'],['Mid-term Q2: A 2 × 6 min, B 2 min, C 3 × 8 min','A (6/2 = 3 min)','6 + 2 + 8 = 16 min','20 units/hour'],['Practice exam Q7: 6, 8, 2 min','machine 2','16 min','7.5 units/hour']])}
${TRAP('Throughput time uses the time of <b>one</b> machine per station (a unit only goes through one), while the bottleneck uses the station’s effective time (time ÷ parallel machines).')}
<p><b>Throughput time or bottleneck time?</b> (at-home exercise 2) “It takes 25 hours to make a Ford car from start to finish” is the <b>throughput time</b>; “a new car rolls out every minute” is the <b>bottleneck time</b>. The line holds many cars at once, so it produces far faster than one car’s journey.</p>
${EX('At-home exercise 7: adding a machine (course solution)','course solution',F('A 6, B 10, C 5 min/unit, 8 hours a day\nBottleneck B (10 min); throughput time 6 + 10 + 5 = 21 min; capacity 480 / 10 = 48 units/day\nSecond machine at B: B makes 2 × 6 = 12/hour; A 10/hour, C 12/hour → A becomes the bottleneck: 10 × 8 = 80 units/day\nSecond machine at A instead: no gain, B still limits the line to 48 units/day'))}
<p><b>Why is speeding up a non-bottleneck useless?</b> Units leave the line at the pace of the slowest station. A faster station before the bottleneck only builds a queue (inventory) in front of it; a faster station after it waits idle for units. Once the bottleneck is improved, another station may become the new bottleneck.</p>
<h3>3. Theory of Constraints (Goldratt, The Goal)</h3>
<p>“A system’s output is limited by its most restrictive constraint, so find and manage that constraint.” The bottleneck must work all the time; adding capacity to non-bottlenecks is useless (it even creates inventory).</p>
<p><b>Why rank by margin per bottleneck minute?</b> The bottleneck’s minutes are the scarce resource: every minute must earn as much as possible. A product with a high margin can still be the worst choice if it eats many bottleneck minutes (product B: margin 30 but 60 minutes on M2 = 0.5 per minute). If production rates are given instead of times, the time per unit is 1 / rate (at-home exercise 3: B, margin 15 at 5 units/hour, earns 75 per hour and gets priority).</p>
${F('Step 1: find the bottleneck (time needed for all demand on each machine vs available time)\nStep 2: priority = unit margin / time on the bottleneck per unit (highest first)\nStep 3: fill the bottleneck’s time in priority order (full demand, then the rest)\nStep 4: profit = Σ quantity × margin')}
${EX('Two products, 2 400 min/week (in-class)','worked example',F('A: margin 20, M1 20 min, M2 12 min, demand 100 · B: margin 30, M1 10, M2 60, demand 30\nM1: 2 000 + 300 = 2 300 ≤ 2 400;  M2: 1 200 + 1 800 = 3 000 > 2 400 → M2 bottleneck\nPriority: A 20/12 = 1.67 > B 30/60 = 0.5\n100 A use 1 200 min; 1 200 / 60 = 20 B;  profit 2 000 + 600 = 2 600'))}
${EX('Mid-term Q6: tables and chairs (official solution)','course solution',F('Tables €8: cutting 3, sanding 8 · Chairs €12: cutting 5, sanding 4 · 800 min each, demand 80 / 100\nCutting 3×80 + 5×100 = 740 ≤ 800; sanding 8×80 + 4×100 = 1 040 > 800 → sanding bottleneck\nPriority: chairs 12/4 = 3 > tables 8/8 = 1 → 100 chairs (400 min), 400/8 = 50 tables\nProfit = 1 200 + 400 = €1 600 per day'))}
${EX('At-home exercises 4 and 5: three products (course solutions)','course solution',F('Ex. 4: margins 40, 30, 35; M1 14, 10, 12; M2 12, 20, 12; demand 70, 50, 60; 2 400 min\nM1 2 200 ≤ 2 400; M2 2 560 > 2 400 → M2. Per M2 minute: A 3.33, C 2.92, B 1.5 → A, C, B\n70 A (840 min), 60 C (720 min), 840 / 20 = 42 B → profit 2 800 + 2 100 + 1 260 = €6 160\nEx. 5: margins 30, 45, 30; M2 needs 2 500 > 2 400 → B (3), C (2), A (1.5)\n40 B (600), 60 C (900), 900 / 20 = 45 A → profit 1 350 + 1 800 + 1 800 = €4 950'))}
${EX('At-home exercise 6: Little Italia, two bottlenecks (course solution)','course solution',F('Margins: lasagna 75 − 25 = 50, pizza 60 − 30 = 30, pasta 80 − 40 = 40; 480 min per resource\nKitchen 640 min and oven 600 min both exceed 480 → solve the most severe first (kitchen)\nKitchen: pizza 30/1, lasagna 50/10 = 5, pasta 40/20 = 2 → 40 pizzas, 20 lasagnas, 240/20 = 12 pastas\nOven (pasta does not use it): lasagna 5 per min, pizza 3 → 20 lasagnas (200 min), 280/10 = 28 pizzas\nTOC mix 20 lasagnas, 28 pizzas, 12 pastas → profit €2 320\nNot necessarily optimal: 19 lasagnas, 29 pizzas, 13 pastas give €2 340 → use optimization (Class 5)'))}
<h3>4. TOC as an optimization model (Class 5)</h3>
<p>Class 5: the same product-mix problem can be written as an optimization model (max Σ margin × quantity, s.t. time on each machine ≤ available, quantity ≤ demand) and solved with Solver; TOC example: tables (cutting 4, assembly 6, painting 8, packaging 5 min, 480 min/day) → painting is the bottleneck, 60 tables/day.</p>
${F('Product mix as a model (Class 5, example 2: tables T and chairs C, 480 min per activity)\nMax 100T + 50C\ns.t.  4T + 2C ≤ 480 (cutting)    6T + 3C ≤ 480 (assembly)\n      8T + 5C ≤ 480 (painting)   5T + 2C ≤ 480 (packaging)\n      T ≤ 40,  C ≤ 80,  T, C ≥ 0')}
<ul><li>Example 1: speeding up assembly does nothing (painting still limits to 60 tables); speeding up painting by 50% makes assembly (6 min) the new bottleneck: 80 tables a day, +20.</li>
<li>Example 2 (<b>computed by the site</b>, no posted solution): painting needs 40 × 8 + 80 × 5 = 720 &gt; 480 min. Price per painting minute: tables 12.5, chairs 10 → 40 tables (320 min), then 160 / 5 = 32 chairs; revenue €5 600 (no costs are given, so prices act as margins).</li>
<li>Why a model? With several bottlenecks the TOC ranking can miss the best mix (Little Italia); Solver handles all constraints at once.</li></ul>
`;

SHEETS.o6=`
<div class="eyebrow">Class 6</div><h2>Inventory management</h2>
<p class="lede">Goal: explain why companies hold inventory, the trade-off between ordering and holding costs, and apply the EOQ model.</p>
<h3>1. Why (not) hold inventory</h3>
<ul><li><b>Inventory</b>: the stock of any item or resource of a firm (raw materials, work in process, finished goods…).</li>
<li>Why hold it: protect against late or uncertain deliveries, larger batches (fewer setups), shorter lead time to customers, availability (avoid stock-outs), quantity discounts.</li>
<li>Why not: cost of invested capital, storage space, perishability. Examples of too much inventory: <b>Nike</b> ($9.3 billion, +43%, 2022), <b>H&amp;M</b> ($4.3 billion of unsold clothes, 2018), air fryers after the boom.</li>
<li>A wider range of products means more inventory in total (at-home exercise 1: fast-food chains expanding their menus).</li></ul>
<h3>2. Inventory costs</h3>
${T(['Cost','Meaning'],[['Ordering (setup) cost S','fixed fee per order, setting up a batch, administration'],['Holding cost H','per unit per year: storage, staff, insurance, cost of capital'],['Purchasing cost P','price per unit (does not affect Q)']])}
<p>The holding cost can be given as a percentage of the price: Garden Variety, 30% of $2 = $0.60 per plant per year. Put D, S and H on the <b>same time base</b> (750 plants a month = 9 000 a year).</p>
<h3>3. The EOQ model</h3>
${F('Total cost = P·D + S·D/Q + H·Q/2\nAverage inventory = Q/2   Number of orders N = D/Q   Time between orders T = days per year / N\nEOQ:  Q* = √(2·S·D / H)    (at Q*, holding cost = ordering cost)')}
${EX('Watch case (course example)','worked example',F('D = 1 200/year, S = €80/order, H = €2/unit/year, P = €2\nQ = 100: 2 400 + 960 + 100 = €3 460;  Q = 1 200: 2 400 + 80 + 1 200 = €3 680\nEOQ = √(2 × 80 × 1 200 / 2) = 309.8 ≈ 310 watches'))}
${EX('Sharp, Inc. (in-class, official solution)','course solution',F('D = 1 000, S = $10, H = $0.50 → Q* = √(40 000) = 200\nN = 1 000/200 = 5 orders; T = 250/5 = 50 days\nOrdering + holding = 10 × 5 + 0.5 × 100 = $100'))}
${EX('Extra exercise (official solution)','course solution',F('Average inventory 20 → Q = 40; H = 2 → holding cost = 40 = ordering cost\nS·D/Q = 40 with S = 1 → D = 1 600'))}
${EX('At-home exercises 2, 3 and 6 (course solutions)','course solution',F('Ex. 2: D = 32 000 chips, S = $120, H = $3, 240 days → Q* = 1 600; 20 orders → a cycle of 12 workdays\nEx. 3: D = 9 000/year, S = $20, H = 0.6; Q = 1 500 costs 450 + 120 = $570\n       Q* = 774.6 costs 232.4 + 232.4 = $464.8 → extra cost of staying at 1 500: $105.2\nEx. 6: D = 24 000, S = 150, average inventory 800 → Q* = 1 600; H = 2SD/Q*² = 2.8125\n       15 orders, every 300/15 = 20 days; ordering cost 2 250 = holding cost 2 250'))}
<p><b>Why are ordering and holding costs equal at the EOQ?</b> Ordering cost S·D/Q falls when Q rises (fewer orders), holding cost H·Q/2 rises with Q. Below Q*, one more unit per order saves more ordering cost than it adds holding cost; above Q*, the opposite. The total is lowest where both costs are equal. Practical use (at-home exercise 4): if holding cost (10) &lt; ordering cost (20), Q is too small: <b>increase</b> Q.</p>
<h3>4. EOQ assumptions</h3>
<p>EOQ assumptions: single product, stable demand, zero lead time, stable price (no quantity discounts), no perishability or warehouse capacity limits.</p>
`;

SHEETS.o7=`
<div class="eyebrow">Class 7</div><h2>Short-term scheduling</h2>
<p class="lede">Goal: assign jobs with the assignment (Hungarian) method and sequence jobs with priority rules, computing flow time and lateness.</p>
<p>Scheduling answers two questions: <b>who does what?</b> (task assignment) and <b>what comes first?</b> (task sequencing).</p>
<h3>1. Assignment method (Hungarian method)</h3>
${F('1A. Subtract the smallest number of each row from that row\n1B. Subtract the smallest number of each column from that column\n2. Cover all zeros with the minimum number of lines\n   (lines = number of rows → go to 4)\n3. Subtract the smallest uncovered number from every uncovered number;\n   add it at the intersections of two lines; return to 2\n4. Assign along the zeros, one per row and column\nMaximization: first replace every number by (largest number − number)')}
${EX('Typesetters (course example)','worked example',T(['Job','Typesetter A','Typesetter B','Typesetter C'],[['R-34','$11','$14','$6'],['S-66','$8','$10','$11'],['T-50','$9','$12','$7']])+'<p>Row reduction (−6, −8, −7), column reduction (column B −2): 2 lines cover the zeros &lt; 3 rows → subtract 2 from the uncovered cells, add 2 at the intersection → 3 lines. Optimal: R-34 → C ($6), S-66 → B ($10), T-50 → A ($9): total <b>$25</b>.</p>')}
${EX('Maximization: teachers and courses (course example)','worked example',T(['Performance','Math','Statistics','Probability'],[['Smith','32','38','40'],['Joyeux','40','24','28'],['Lebowsky','41','27','33']])+'<p>Largest number 41: opportunity losses 41 − each number, then the four steps. Optimal: Smith → Statistics (38), Joyeux → Math (40), Lebowsky → Probability (33): total performance <b>111</b>.</p>')}
${EX('At-home exercises 4 and 5 (course solutions)','course solution',F('Ex. 5 (minimize hours): row reduction 9, 7, 8, 7; column P4 −2; four independent zeros\nA1 → P1 (9), A2 → P4 (9), A3 → P2 (8), A4 → P3 (7) = 33 hours\nEx. 4 (maximize margin, 5 × 5): opportunity losses 29 − each number, then the four steps\nJ1 → W5 (26), J2 → W1 (14), J3 → W4 (23), J4 → W3 (24), J5 → W2 (29) = 116 (hundreds of €)'))}
<p><b>Why does subtracting a constant from a row or column not change the answer?</b> Every assignment uses exactly one cell of each row and of each column, so every possible assignment loses the same amount: the ranking of assignments is unchanged. Once a full set of independent zeros appears, that assignment costs “0 extra” and is optimal. Always read the costs back in the <b>original</b> table.</p>
<h3>2. Priority rules</h3>
${T(['Rule','Sequence','When useful'],[['FCFS first come, first served','arrival order','seems fair to customers'],['EDD earliest due date','increasing due date','high penalty for lateness'],['SPT shortest processing time','increasing processing time','minimizes flow time and jobs in the system'],['LPT longest processing time','decreasing processing time','big jobs are not postponed']])}
${EX('Slides: five jobs, four rules','worked example',T(['Rule','Sequence','Total processing','Total flow time','Total lateness'],[['FCFS','A-B-C-D-E','28','77','11'],['SPT','B-D-A-C-E','28','65','9'],['EDD','B-A-D-C-E','28','68','6'],['LPT','E-C-A-D-B','28','103','48']],[2,3,4])+'<p>Jobs (processing, due): A (6, 8), B (2, 6), C (8, 18), D (3, 15), E (9, 23). SPT gives the lowest flow time, EDD the lowest lateness, LPT the worst of both.</p>')}
<p><b>Why does SPT minimize the total flow time?</b> Each job’s completion time includes the processing times of all the jobs before it. A short job placed first delays the others only a little; a long job placed first delays all of them a lot. So the sum of completion times is smallest when the shortest jobs go first. EDD targets due dates instead, so it usually gives less lateness.</p>
<h3>3. Flow time, lateness and performance measures</h3>
${F('Flow time of a job = its completion time (waiting + processing)\nTotal flow time = Σ completion times;  average flow time = total / number of jobs\nLateness of a job = max(0, completion time − due date)\nUtilization = total processing time / total flow time\nAverage number of jobs in the system = total flow time / total processing time\nAverage completion time = total flow time / number of jobs;  average lateness = total lateness / number of jobs')}
${EX('At-home exercise 1 (Scheduling): all measures','course solution',T(['Rule','Total flow time','Total lateness','Utilization','Av. jobs in system','Av. completion','Av. lateness'],[['FCFS','74','7','40.5%','2.47','14.8','1.4'],['SPT','67','10','44.8%','2.23','13.4','2.0'],['EDD','71','5','42.3%','2.37','14.2','1.0'],['LPT','113','52','26.5%','3.77','22.6','10.4']],[1,2,3,4,5,6])+'<p>Jobs (processing, due): A (5, 8), B (2, 5), C (7, 16), D (4, 20), E (12, 25); total processing 30 days. The four ratios are computed by the site from the course totals with the formulas above.</p>')}
${EX('Practice exam Q3 (computed by the site)','worked example',(()=>{const jobs=[{n:'C',pt:40,dd:35},{n:'B',pt:16,dd:70},{n:'A',pt:8,dd:20},{n:'D',pt:5,dd:38},{n:'E',pt:3,dd:50}];
  const e=seqTotals(jobs,sortBy(jobs,(a,b)=>a.dd-b.dd)),l=seqTotals(jobs,sortBy(jobs,(a,b)=>b.pt-a.pt));
  return '<p><b>EDD</b></p>'+T(['Job','Processing','Flow time','Due','Lateness'],e.rows,[1,2,3,4])+`<p>Total flow time ${e.flow}, total lateness ${e.late}.</p><p><b>LPT</b></p>`+T(['Job','Processing','Flow time','Due','Lateness'],l.rows,[1,2,3,4])+`<p>Total flow time ${l.flow}, total lateness ${l.late}.</p>`})())}
<p>There is no single best rule: it depends on the performance objective. Schedules also affect people (UCLA nurses protesting shift changes for float-pool nurses, 2024).</p>
`;

SHEETS.o8=`
<div class="eyebrow">Class 8</div><h2>Flexibility in OM</h2>
<p class="lede">Goal: define flexibility, name its drivers and types, and compute the value of flexible capacity.</p>
<h3>1. Flexibility and its drivers</h3>
<ul><li><b>Flexibility</b>: the ability of operations to respond and adapt to changes without excessive cost or loss of performance. More is not always better (it costs).</li>
<li><b>Drivers</b>: demand volume, demand mix, product needs, regulations, supply disruptions.</li></ul>
<h3>2. Types of flexibility and production assets</h3>
<ul><li><b>Types</b>: product design (modularity, customization vs standardization), supply chain (nearshoring vs offshoring, transport modes, shorter lead times), production (<b>volume</b>: more or less; <b>mix</b>: change the sequence of products; <b>product</b>: make new products). Zara, Apple, Amazon, Dell.</li>
<li>Production assets: <b>dedicated</b> (one product, cheaper), <b>flexible</b> (several products, more expensive), hybrid, and <b>postponement</b> (delay differentiation; Dell assembles after the order).</li></ul>
<h3>3. The value of flexible capacity</h3>
<p>Method: (1) for each demand scenario, sales = min(demand, capacity); (2) profit of the scenario = sales × margin − fixed cost; (3) expected profit = Σ probability × profit; (4) the option with the higher expected profit wins; (5) the maximum price of flexibility is the fixed cost that makes both options equal. With dedicated and flexible lines: fill the dedicated lines first, then give the flexible capacity to the product with the higher margin on the flexible line.</p>
<p><b>Why can flexibility be worth less than it costs?</b> Extra capacity only earns money in the scenarios where demand exceeds the fixed capacity. If that scenario is unlikely, or the extra fixed and variable costs are high, the expected gain does not cover them (the brewery).</p>
${EX('Exercise 1: Autocompany (official solution)','course solution',F('Dedicated A: 70 000 (cost 500, price 2 000 → margin 1 500); dedicated B: 150 000 (margin 500)\nFlexible line: 60 000 units at cost 600 → margin 1 400 on A, 400 on B\nRemaining demand: A 30 000, B 100 000 → flexible line makes 30 000 A then 30 000 B\nProfit = 105 M + 75 M + 42 M + 12 M = €234 M'))}
${EX('Exercise 2: brewery (official solution)','course solution',F('Fixed plant (10 000, FC 50 000, VC 1): low 8×8 000 − 50 000 − 8 000 = 6 000; high 80 000 − 50 000 − 10 000 = 20 000\nExpected = 0.4 × 6 000 + 0.6 × 20 000 = 14 400\nFlexible plant (16 000, FC 60 000, VC 1.2): low −5 600; high 21 600 → expected 10 720\nThe fixed plant is better. Flexibility is worth paying up to a fixed cost x with\n0.4 × 6.8 × 8 000 + 0.6 × 6.8 × 12 000 − x ≥ 14 400 → x ≤ 56 320'))}
`;

SHEETS.o9=`
<div class="eyebrow">Class 9 · Tutorial</div><h2>OM challenges, supply chains and the beer game</h2>
<p class="lede">Goal: discuss today’s OM dilemmas with their trade-offs (profit, planet, people) and explain the bullwhip effect and how to reduce it.</p>
<h3>1. Today’s OM challenges and dilemmas</h3>
${T(['Challenge','Dilemmas'],[['Technology, automation, AI, humanoids, skills','replace workers? productivity vs well-being; which tasks stay human'],['Local vs global supply chains, geopolitics','cheapest supplier or reliable local supply? reshoring, friend-shoring, globalization'],['Demanding customers, customization','how much to customize and how fast to deliver; same-day delivery vs consolidated orders'],['Sustainability, raw materials, closed loops','repair or replace? virgin or recycled material? higher logistics cost for lower impact? long-life design?']])}
<p>Example: the war in Ukraine strained supply chains from semiconductors to car parts, calling for resilience. EV makers face a critical-mineral bottleneck (lithium, cobalt, nickel); ASML’s lithography machines were a chip bottleneck.</p>
<p>In an exam answer, name the dilemma, give the trade-off on both sides (profit, planet, people) and support it with a company example from the articles.</p>
<h3>2. Beer game and the bullwhip effect</h3>
<ul><li>Four stages (retailer, wholesaler, distributor, factory) balance inventory (€5 per unit) against backlog (€25 per unit, a negative inventory). Orders flow up, products flow down.</li>
<li><b>Bullwhip effect</b>: small changes in consumer demand are amplified as orders move up the supply chain (P&amp;G’s diapers: babies consume at a steady rate, yet orders fluctuate). Like the “telephone” game.</li>
<li>It <b>increases</b> with more partners in the chain, more demand uncertainty, longer lead times, panic, big promotions. It <b>decreases</b> with information sharing, collaboration (information systems), better forecasting, shorter lead times, fewer stages, direct e-commerce (Dell sells directly and postpones assembly).</li>
<li><b>SCM</b>: the coordination of all supply-chain activities, from raw materials to a satisfied customer, with flows of products, funds and information.</li></ul>
<p><b>How does the bullwhip form?</b> Each stage sees only the orders of its direct customer, not consumer demand. When orders rise, it raises its forecast <b>and</b> the stock it wants to cover the lead time, so it orders more than the rise; the next stage sees a bigger jump and does the same. Because deliveries arrive after a lead time, stages keep ordering (panic, backlog), then receive too much and stop ordering: big swings upstream from a small change downstream.</p>
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
Q('q50','o7','course','Typesetters example: the minimum total cost is:',['$25','$24','$27','$30'],'R-34 → C (6), S-66 → B (10), T-50 → A (9).'),
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
{id:'x-o7-assign',topic:'o7',type:'match',src:'course',title:'Assignment method: typesetters',q:'Costs per job for typesetters A, B, C: R-34 (11, 14, 6), S-66 (8, 10, 11), T-50 (9, 12, 7). Match each job with the typesetter of the optimal assignment.',
 pairs:[['Job R-34','Typesetter C'],['Job S-66','Typesetter B'],['Job T-50','Typesetter A']],e:'Total $6 + $10 + $9 = $25.'},
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

/* ---------- v2 (24/11/2026): layered sheets, figures, glossary, generators and tools (CONVENTIONS.md section 16) ---------- */
const {NOTION,FIG,PLOT,STEPS,TREE,LAYERED}=Rev.h;
const U=Rev.u,n2=x=>fmt(U.round(x,2)),n3=x=>fmt(U.round(x,3));
const OUT='<b>Outside the slides:</b>';
const sum=a=>a.reduce((s,x)=>s+x,0);
const L4='ABCDEFGH';
const perms=n=>{const out=[],p=[],used=[];const rec=()=>{if(p.length===n){out.push(p.slice());return}for(let i=0;i<n;i++)if(!used[i]){used[i]=1;p.push(i);rec();p.pop();used[i]=0}};rec();return out};
const bits=x=>{let c=0;while(x){c+=x&1;x>>=1}return c};
// minimum number of lines covering all zeros (brute force, fine up to 5 × 5)
function coverZeros(A){const n=A.length;let best=null;
  for(let mr=0;mr<1<<n;mr++)for(let mc=0;mc<1<<n;mc++){const c=bits(mr)+bits(mc);if(best&&c>=best.c)continue;let ok=true;
    for(let i=0;i<n&&ok;i++)for(let j=0;j<n;j++)if(A[i][j]===0&&!(mr>>i&1)&&!(mc>>j&1)){ok=false;break}
    if(ok)best={c,mr,mc}}
  const rows=[],cols=[];for(let i=0;i<n;i++){if(best.mr>>i&1)rows.push(i);if(best.mc>>i&1)cols.push(i)}return {rows,cols,n:rows.length+cols.length}}
// assignment (Hungarian) method with the four steps of the course; max: opportunity losses first
function hungarian(M,max){const n=M.length,st=[];let A=M.map(r=>r.slice());const cp=()=>A.map(r=>r.slice());
  if(max){const L=Math.max(...M.flat());A=A.map(r=>r.map(x=>L-x));st.push({k:'loss',L,m:cp()})}
  A=A.map(r=>{const m=Math.min(...r);return r.map(x=>x-m)});st.push({k:'rows',m:cp()});
  for(let j=0;j<n;j++){const m=Math.min(...A.map(r=>r[j]));A.forEach(r=>r[j]-=m)}st.push({k:'cols',m:cp()});
  for(let it=0;it<15;it++){const cov=coverZeros(A);st[st.length-1].cov=cov;if(cov.n>=n)break;
    let k=Infinity;for(let i=0;i<n;i++)for(let j=0;j<n;j++)if(!cov.rows.includes(i)&&!cov.cols.includes(j))k=Math.min(k,A[i][j]);
    A=A.map((r,i)=>r.map((x,j)=>{const ri=cov.rows.includes(i),cj=cov.cols.includes(j);return !ri&&!cj?x-k:ri&&cj?x+k:x}));st.push({k:'adj',d:k,m:cp()})}
  const asg=perms(n).find(p=>p.every((j,i)=>A[i][j]===0));return {st,asg}}
const bestAssign=(M,max)=>{const ps=perms(M.length),tot=p=>sum(p.map((j,i)=>M[i][j]));const vals=ps.map(tot),b=max?Math.max(...vals):Math.min(...vals);return {best:b,count:vals.filter(x=>x===b).length,p:ps[vals.indexOf(b)]}};
const matT=(m,rl,cl,cov)=>T([''].concat(cl),m.map((r,i)=>[rl[i]+(cov&&cov.rows.includes(i)?' ▬':'')].concat(r.map(x=>String(x)))),cl.map((_,j)=>j+1))+(cov?`<p class="hint">Lines: ${cov.rows.length?'rows '+cov.rows.map(i=>rl[i]).join(', '):''}${cov.rows.length&&cov.cols.length?' and ':''}${cov.cols.length?'columns '+cov.cols.map(j=>cl[j]).join(', '):''} → ${cov.n} line${cov.n>1?'s':''} for ${m.length} rows.</p>`:'');
const hungSteps=(M,max,rl,cl)=>{const h=hungarian(M,max),out=[];
  h.st.forEach(s=>{const head=s.k==='loss'?`Maximization: replace every number by ${s.L} − number (opportunity loss).`:s.k==='rows'?'1A. Subtract the smallest number of each row from that row.':s.k==='cols'?'1B. Subtract the smallest number of each column from that column.':`3. Smallest uncovered number = ${s.d}: subtract it from every uncovered number, add it at the intersections of two lines.`;
    out.push(`<p>${head}</p>${matT(s.m,rl,cl,s.cov)}${s.cov?`<p>${s.cov.n>=M.length?'Number of lines = number of rows → step 4.':'Fewer lines than rows → step 3.'}</p>`:''}`)});
  out.push(`<p>4. Assign along the zeros, one per row and column: ${h.asg.map((j,i)=>`${rl[i]} → ${cl[j]} (${M[i][j]})`).join(', ')}. Read the values in the <b>original</b> table: total = ${h.asg.map((j,i)=>M[i][j]).join(' + ')} = <b>${sum(h.asg.map((j,i)=>M[i][j]))}</b>.</p>`);return {steps:out,asg:h.asg}};
// lines and bottlenecks
const lineCalc=st=>{const eff=st.map(s=>s.t/s.m),bt=Math.max(...eff);return {eff,bt,b:eff.indexOf(bt),tt:sum(st.map(s=>s.t)),cap:60/bt}};
// polygon clipping (keeps a·x + b·y ≤ c): feasible region of a 2-variable LP
const clip=(P,a,b,c)=>{const out=[];for(let i=0;i<P.length;i++){const p=P[i],q=P[(i+1)%P.length],fp=a*p[0]+b*p[1]-c,fq=a*q[0]+b*q[1]-c;if(fp<=1e-9)out.push(p);if((fp<-1e-9&&fq>1e-9)||(fp>1e-9&&fq<-1e-9)){const t=fp/(fp-fq);out.push([p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])])}}
  return out.filter((p,i)=>{const q=out[(i+1)%out.length];return out.length<2||Math.hypot(p[0]-q[0],p[1]-q[1])>1e-7})};
const region=(cons,X,Y)=>cons.reduce((P,c)=>clip(P,c[0],c[1],c[2]),[[0,0],[X,0],[X,Y],[0,Y]]);
// cheapest location along the volume axis
const envelope=(locs,xmax)=>{const xs=[0,xmax];locs.forEach((a,i)=>locs.forEach((b,j)=>{if(j>i&&a.v!==b.v){const x=(b.f-a.f)/(a.v-b.v);if(x>0&&x<xmax)xs.push(x)}}));xs.sort((a,b)=>a-b);
  const segs=[];for(let k=0;k<xs.length-1;k++){if(xs[k+1]-xs[k]<1e-9)continue;const m=(xs[k]+xs[k+1])/2,c=locs.map(l=>l.f+l.v*m),i=c.indexOf(Math.min(...c));if(segs.length&&segs[segs.length-1].i===i)segs[segs.length-1].to=xs[k+1];else segs.push({i,from:xs[k],to:xs[k+1]})}return segs};
// bullwhip: each stage forecasts its incoming orders (exponential smoothing) and orders up to (lead time + 1) × forecast
function bullwhip(o){const W=o.weeks||30,dem=[...Array(W)].map((_,t)=>t<o.w0?o.d0:o.d1),out=[dem];let down=dem;
  for(let k=0;k<4;k++){let F=o.d0,Fc=o.d0,Sp=(o.L+1)*o.d0;const ord=[];
    for(let t=0;t<W;t++){F+=o.a*(down[t]-F);Fc+=o.a*(dem[t]-Fc);const S=(o.L+1)*(o.share?Fc:F);ord.push(Math.max(0,down[t]+S-Sp));Sp=S}out.push(ord);down=ord}return out}
const BW_NAMES=['Consumer demand','Retailer orders','Wholesaler orders','Distributor orders','Factory orders'],BW_C=['--ink','--ok','--ledger','--warn','--bad'];
const bwSpec=(o,W)=>{const s=bullwhip(Object.assign({weeks:W},o)),ymax=Math.max(10,...s.flat())*1.08;
  return {s,spec:{xmax:W-1,ymax,xl:'week',yl:'units',curves:s.map((ser,k)=>({f:x=>{const i=Math.floor(x),t=x-i;return i>=W-1?ser[W-1]:ser[i]*(1-t)+ser[i+1]*t},c:BW_C[k],l:k?['','R','W','D','F'][k]:'demand',lx:k?Math.min(W-2,o.w0+1+2*k):W-4}))}}};

/* ---------- v2: figures ---------- */
const FIG_BE=FIG({xmax:3500,ymax:240000,xl:'units per year',yl:'€',curves:[{f:x=>30000+75*x,c:'--bad',l:'US',lx:2600},{f:x=>60000+45*x,c:'--ledger',l:'Italy',lx:3300},{f:x=>110000+25*x,c:'--ok',l:'Cuba',lx:3300}],
  marks:[{x:1000,y:105000,lx:'1 000'},{x:2500,y:172500,lx:'2 500'}],points:[{x:1000,y:105000},{x:2500,y:172500}]},'Cuba, US, Italy (in-class): the lowest line is the cheapest location. US up to 1 000 units, Italy from 1 000 to 2 500, Cuba above 2 500.');
const FIG_COG=FIG({xmin:30,xmax:60,ymin:0,ymax:125,xl:'x',yl:'y',dots:[[48,2,'--ledger',5],[39,116,'--ledger',5],[52,13,'--ledger',7]],
  points:[{x:48,y:2,l:'Paris 500'},{x:39,y:116,l:'Beijing 500'},{x:52,y:13,l:'Berlin 1 000',left:true},{x:47.75,y:36,l:'centre (47.75, 36)',c:'--bad'}]},'Center of gravity: the weighted average lands near Berlin (largest volume) and far from Beijing, in a place that may not be a feasible site.');
const FIG_LP=(()=>{const P=region([[1,2,160],[1,0,100],[0,1,50]],200,100);return FIG({xmax:180,ymax:100,xl:'x white T-shirts',yl:'y blue',areas:[{pts:P,c:'--ok',l:'feasible'}],
  curves:[{f:x=>(160-x)/2,c:'--ledger',l:'x + 2y = 160',lx:150},{f:x=>(740-5*x)/8,c:'--bad',dash:true,l:'5x + 8y = 740',lx:28}],lines:[{x1:0,y1:50,x2:180,y2:50,c:'--muted',dash:true,l:'y = 50'}],vx:[{x:100,l:'x = 100',c:'--muted',dash:true}],
  points:[{x:0,y:50,l:'400'},{x:60,y:50,l:'700'},{x:100,y:30,l:'740 ★',c:'--bad'},{x:100,y:0,l:'500'}]},'T-shirts: the feasible region and its corners with the profit at each. The iso-profit line touches the region last at (100, 30): €740.')})();
const barSpec=(st,names)=>{const c=lineCalc(st),ymax=Math.max(...c.eff)*1.25;return {xmax:st.length,ymax,xl:'station',yl:'min per unit',xticks:false,
  areas:st.map((s,i)=>({pts:[[i+0.15,0],[i+0.85,0],[i+0.85,c.eff[i]],[i+0.15,c.eff[i]]],c:i===c.b?'--bad':'--ledger',l:`${names[i]} ${n2(c.eff[i])}`})),
  lines:[{x1:0,y1:c.bt,x2:st.length,y2:c.bt,c:'--bad',dash:true,w:1.4,l:'bottleneck time'}]}};
const FIG_LINE=FIG(barSpec([{t:10,m:1},{t:15,m:1},{t:5,m:1}],['M1','M2','M3']),'Class 4 example: Machine 2 (15 min per unit) is the bottleneck. Capacity 60 / 15 = 4 units per hour; throughput time 10 + 15 + 5 = 30 min.');
const FIG_EOQ=FIG({xmax:1000,ymax:1600,xl:'order quantity Q',yl:'€ per year',curves:[{f:x=>96000/x,c:'--ledger',l:'ordering S·D/Q',from:62,lx:150},{f:x=>x,c:'--warn',l:'holding H·Q/2',lx:900},{f:x=>96000/x+x,c:'--bad',l:'total',from:62,lx:700}],
  marks:[{x:309.8,y:619.7,lx:'EOQ 310'}],points:[{x:309.8,y:309.8,l:'equal costs'},{x:309.8,y:619.7,l:'minimum'}]},'Watch case (D = 1 200, S = €80, H = €2): the total cost (without P·D) is lowest where the ordering and holding curves cross.');
const FIG_BW=(()=>{const b=bwSpec({d0:4,d1:8,w0:4,L:2,a:0.3,share:false},30);return FIG(b.spec,`${OUT} simple ordering model. Consumer demand goes from 4 to 8 per week in week 4 (like the beer game). R retailer, W wholesaler, D distributor, F factory: each stage forecasts the orders it receives and orders up to (lead time + 1) × forecast. Peak orders: retailer ${n2(Math.max(...b.s[1]))}, wholesaler ${n2(Math.max(...b.s[2]))}, distributor ${n2(Math.max(...b.s[3]))}, factory ${n2(Math.max(...b.s[4]))}.`)})();
const STEPS_TYPE=STEPS({title:'Typesetters, step by step',intro:'<p>Costs (rows = jobs, columns = typesetters A, B, C): R-34 11, 14, 6 · S-66 8, 10, 11 · T-50 9, 12, 7. Try each step before opening the next.</p>',steps:hungSteps([[11,14,6],[8,10,11],[9,12,7]],false,['R-34','S-66','T-50'],['A','B','C']).steps});

/* ---------- v2: layered sheets ---------- */
SHEETS.o1=LAYERED(SHEETS.o1,[
 {id:'o1-om',ess:'<p><b>OM</b> = all activities that create value by transforming inputs into goods and services, delivered when and where the customer wants, at the right price and quality. Goods are tangible and storable; services are intangible, produced and consumed at the same time, with high customer contact.</p>',
  tryit:{q:'Which feature belongs to a pure service?',o:['It can be stored and transported','Production and consumption are simultaneous','Quality is evident','Low customer contact'],a:1,e:'A haircut is produced while you consume it; it cannot be stored.'}},
 {id:'o1-contrib',ess:'<p>Marketing (sales), operations (produce and deliver) and finance create value together. A cost reduction in operations falls straight into profit, so it usually raises profit more than the same effort on sales (Tesla, Hello smartphones).</p>',
  tryit:{q:'Hello smartphones: 1 000 phones, price €200, cost €150, financial cost €10 000. Profit if the production cost falls by 30%?',answer:85000,unit:'€',tol:1,e:'1 000 × (200 − 105) − 10 000 = €85 000 (+112.5% against +50% for 40% more sales).'}},
 {id:'o1-prod',ess:`${F('Labour productivity = units / labour hours\nMultifactor productivity = units / (all inputs in €)')}<p>Always give the unit. Higher production is not higher productivity, and higher labour productivity can come with lower multifactor productivity (an expensive machine).</p>`,
  tryit:{q:'2 400 loaves made with 30 labour hours at €20 and €600 of flour. Multifactor productivity (loaves per €)?',answer:2,tol:0.01,e:'2 400 / (600 + 600) = 2 loaves per € (mid-term Q3).'}},
 {id:'o1-sc',ess:'<p>A <b>supply chain</b> = all parties involved in fulfilling a customer request, with flows of <b>products, funds and information</b>. OM matters more than ever: globalization, sustainability, digitization and AI, demanding customers, disruptions.</p>',
  tryit:{q:'Which three flows run through a supply chain?',o:['Products, funds, information','Products, people, energy','Orders, taxes, labour'],a:0,e:'Products go down the chain, funds go up, information goes both ways.'}}]);

SHEETS.o2=LAYERED(SHEETS.o2,[
 {id:'o2-factors',ess:'<p>Three decisions: <b>expand</b>, <b>add</b> a facility, or <b>close and relocate</b>; at three levels: country → region → site. More facilities: better responsiveness but more inventory and fixed costs. Services locate to <b>maximize revenue</b> (near customers), industry to <b>minimize cost</b>.</p>',
  tryit:{q:'Germany: €70 per day for 60 units; China: €25 per day for 20 units. Which has the better labour productivity per €?',o:['Germany (0.86 units per €)','China (0.80 units per €)','They are equal'],a:0,e:'60/70 = 0.86 against 20/25 = 0.80: the cheaper labour is not the more productive per €.'}},
 {id:'o2-rating',ess:`${F('Score = Σ weight × score of each factor; the highest total wins')}<p>Steps: list factors, weight them (100%), choose a scale, score, sum, recommend. Weakness: <b>subjective</b>, does not necessarily take costs into account.</p>`,
  tryit:{q:'Weights 0.6 and 0.4; Germany scores 4 and 1. Germany’s total?',answer:2.8,tol:0.001,e:'0.6 × 4 + 0.4 × 1 = 2.8.'}},
 {id:'o2-breakeven',ess:`${F('Cost of a location = FC + VC × x;  crossover: FC1 + VC1·x = FC2 + VC2·x')}<p>Plot the lines (or compute the crossovers) and read which location is lowest in each volume range. A location with higher FC <b>and</b> VC is never optimal. Weakness: ignores the location of markets and suppliers.</p>`,extra:FIG_BE,
  tryit:{q:'Lille 30 000 + 30x, Lyon 50 000 + 20x. From how many units is Lyon cheaper?',answer:2000,tol:0,e:'30 000 + 30x = 50 000 + 20x → x = 2 000 (mid-term Q1).'}},
 {id:'o2-cog',ess:`${F('x = Σ xi·Qi / Σ Qi      y = Σ yi·Qi / Σ Qi')}<p>One geographical point weighted by the volumes. Concern: the point may not be a feasible location.</p>`,extra:FIG_COG,
  tryit:{q:'A (0, 0) volume 10, B (100, 300) volume 30, C (200, 50) volume 20. x of the centre?',answer:116.67,tol:0.01,e:'(0 + 3 000 + 4 000) / 60 = 116.67 (at-home exercise 4).'}}]);

SHEETS.o3=LAYERED(SHEETS.o3,[
 {id:'o3-model',ess:'<p>Three parts: <b>decision variables</b> (what you decide, with units), <b>objective function</b> (maximize or minimize), <b>constraints</b> (capacity, demand, non-negativity).</p>',
  tryit:{q:'Berry smoothie (2 blender minutes) and Green smoothie (1 minute), 23 blender minutes available. Blender constraint?',o:['2x + y ≤ 23','x + 2y ≤ 23','2x + y ≥ 23','x + y ≤ 23'],a:0,e:'Minutes used by x Berry and y Green smoothies cannot exceed 23 (at-home exercise 3).'}},
 {id:'o3-graph',ess:'<p>With two variables: draw each constraint, shade the <b>feasible region</b>, list its <b>corner points</b>, evaluate the objective at each corner; the best corner is optimal.</p>',extra:FIG_LP,
  tryit:{q:'Smoothies: max 3x + 4y; corners (0, 0), (11.5, 0), (0, 9.67), (8, 7). Maximum contribution?',answer:52,tol:0,e:'3 × 8 + 4 × 7 = 52 (34.5 and 38.7 at the other corners).'}},
 {id:'o3-transport',ess:`${F('Min Σ cij·xij   s.t.  Σj xij ≤ Ci (each source)   Σi xij = Dj (each destination)   xij ≥ 0')}<p>First compare total capacity with total demand: if capacity &lt; demand, there is no feasible solution.</p>`,
  tryit:{q:'Plants of 80 and 100 units; cities need 60, 80 and 40. Is the problem feasible?',o:['Yes: supply 180 = demand 180','No: supply is below demand','Only with integer variables'],a:0,e:'80 + 100 = 180 = 60 + 80 + 40.'}},
 {id:'o3-solver',ess:'<p><b>Set Objective</b> = cell with the objective formula; <b>To</b> = Max / Min; <b>By Changing Variable Cells</b> = decision variables; <b>Subject to the Constraints</b> = one line per constraint; non-negativity ticked; method <b>Simplex LP</b>.</p>',
  tryit:{q:'Practice exam Q6: the Solver shows “To: Value of 0”. What must change?',o:['Select Max','Select Min','Change the variable cells','Nothing'],a:0,e:'The objective is a profit to maximize.'}}]);

SHEETS.o4=LAYERED(SHEETS.o4,[
 {id:'o4-capacity',ess:'<p><b>Capacity</b> = what a facility can produce in a given time; <b>utilization</b> = output / capacity. Compare demand with every limit in the same unit: the smallest one is the constraint (demand, internal capacity or supplier).</p>',
  tryit:{q:'Demand 100 units/week; 8 hours × 5 days at 30 min per unit. Weekly capacity?',answer:80,unit:'units',tol:0,e:'8 × 5 × 2 = 80 &lt; 100: capacity is the constraint (at-home exercise 1B).'}},
 {id:'o4-bottleneck',ess:`${F('Effective time = time per unit ÷ parallel machines\nBottleneck = largest effective time;  capacity = 60 / bottleneck time per hour\nThroughput time = Σ times (one machine per station)')}`,extra:FIG_LINE,
  tryit:{q:'A: 2 machines × 6 min; B: 2 min; C: 3 machines × 8 min. Capacity per hour?',answer:20,unit:'units/hour',tol:0,e:'Effective times 3, 2, 2.67 → A is the bottleneck: 60 / 3 = 20 (mid-term Q2).'}},
 {id:'o4-toc',ess:`${F('1. Bottleneck: time needed for all demand vs time available\n2. Priority = margin ÷ bottleneck minutes per unit\n3. Fill the bottleneck in that order   4. Profit = Σ quantity × margin')}`,
  tryit:{q:'Tables: margin 8, 8 sanding min; chairs: margin 12, 4 sanding min. Sanding is the bottleneck. Priority?',o:['Chairs (3 per minute)','Tables (higher time)','Tables (1 per minute)'],a:0,e:'12/4 = 3 &gt; 8/8 = 1 (mid-term Q6).'}},
 {id:'o4-opt',ess:'<p>The product mix can be written as a model: max Σ margin × quantity, s.t. time on each resource ≤ available, quantity ≤ demand, quantities ≥ 0, solved with Solver. Needed when several resources are overloaded: TOC may then miss the optimum (Little Italia).</p>',
  tryit:{q:'Tables only: cutting 4, assembly 6, painting 8, packaging 5 min; 480 min a day. Tables per day?',answer:60,tol:0,e:'Painting (8 min) is the bottleneck: 480 / 8 = 60.'}}]);

SHEETS.o6=LAYERED(SHEETS.o6,[
 {id:'o6-why',ess:'<p>Hold inventory against uncertain deliveries, for larger batches, shorter lead times, availability and quantity discounts. Too much costs capital, space and perishability (Nike $9.3 bn, H&amp;M $4.3 bn of unsold clothes).</p>',
  tryit:{q:'Which is a reason NOT to hold inventory?',o:['Cost of invested capital','Quantity discounts','Protection against late deliveries','Larger batches'],a:0,e:'Money tied up in stock is not available for anything else.'}},
 {id:'o6-costs',ess:'<p><b>Ordering cost S</b> per order, <b>holding cost H</b> per unit per year, <b>purchasing cost P</b> per unit. Annual ordering cost S·D/Q, annual holding cost H·Q/2 (average inventory Q/2).</p>',
  tryit:{q:'Holding cost = 30% of a $2 price. H per unit per year?',answer:0.6,tol:0.001,e:'0.30 × 2 = $0.60 (Garden Variety).'}},
 {id:'o6-eoq',ess:`${F('Q* = √(2·S·D / H)     N = D / Q*     T = working days / N\nAt Q*: S·D/Q = H·Q/2;  total cost = P·D + S·D/Q + H·Q/2')}`,extra:FIG_EOQ,
  tryit:{q:'D = 32 000, S = $120, H = $3. EOQ?',answer:1600,tol:0.5,e:'√(2 × 120 × 32 000 / 3) = √2 560 000 = 1 600 (at-home exercise 2).'}},
 {id:'o6-assump',ess:'<p>EOQ assumes: one product, stable known demand, zero lead time, stable price (no quantity discounts), no perishability or warehouse limit. The price P does not change Q*.</p>',
  tryit:{q:'If the ordering cost S is multiplied by 4, the EOQ is…',o:['multiplied by 2','multiplied by 4','divided by 2','unchanged'],a:0,e:'Q* is proportional to √S: √4 = 2.'}}]);

SHEETS.o7=LAYERED(SHEETS.o7,[
 {id:'o7-assign',ess:'<p>One job per worker: (1A) row reduction, (1B) column reduction, (2) cover the zeros with the minimum number of lines, (3) if lines &lt; rows, adjust with the smallest uncovered number, (4) assign along the zeros. Maximization: first replace each number by (largest − number).</p>',extra:STEPS_TYPE,
  tryit:{q:'Hours: W1 (J1 9, J2 5, J3 8), W2 (6, 4, 7), W3 (7, 6, 5). Minimum total hours?',answer:16,tol:0,e:'W1 → J2 (5), W2 → J1 (6), W3 → J3 (5) = 16.'}},
 {id:'o7-rules',ess:'<p><b>FCFS</b> arrival order (fair), <b>EDD</b> earliest due date (lateness penalties), <b>SPT</b> shortest first (minimizes flow time and jobs in the system), <b>LPT</b> longest first (big jobs not postponed). No single best rule.</p>',
  tryit:{q:'Jobs A (6 days), B (2), C (8), D (3). SPT sequence?',accept:['B-D-A-C','BDAC'],e:'Shortest first: B 2, D 3, A 6, C 8.'}},
 {id:'o7-measures',ess:`${F('Flow time = completion time;  lateness = max(0, completion − due)\nUtilization = Σ processing / Σ flow;  jobs in system = Σ flow / Σ processing')}`,
  tryit:{q:'SPT gives a total flow time of 67 days for 30 days of processing. Average number of jobs in the system?',answer:2.23,tol:0.01,e:'67 / 30 = 2.23 (at-home exercise 1).'}}]);

SHEETS.o8=LAYERED(SHEETS.o8,[
 {id:'o8-def',ess:'<p><b>Flexibility</b> = responding and adapting to change without excessive cost or loss of performance. Drivers: demand volume, demand mix, product needs, regulations, supply disruptions. More is not always better: it costs.</p>',
  tryit:{q:'Which is a driver of flexibility?',o:['Supply disruptions','Lower interest rates','A larger warehouse','Higher taxes'],a:0,e:'Also demand volume and mix, product needs, regulations.'}},
 {id:'o8-types',ess:'<p>Product design (modularity), supply chain (nearshoring, transport modes, lead times), production: <b>volume</b> (more or less), <b>mix</b> (sequence of products), <b>product</b> (new products). Assets: dedicated, flexible, hybrid; <b>postponement</b> delays differentiation (Dell).</p>',
  tryit:{q:'Changing the sequence of products on a line is…',o:['mix flexibility','volume flexibility','product flexibility'],a:0,e:'Volume = more or less; product = new products.'}},
 {id:'o8-value',ess:`${F('Expected profit = Σ probability × (sales × margin − fixed cost), with sales = min(demand, capacity)\nMax fixed cost of flexibility: expected profit (flexible) = expected profit (fixed)')}`,
  tryit:{q:'Brewery: fixed plant expected profit 14 400, flexible 10 720. Better option?',o:['Fixed plant','Flexible plant','Equal'],a:0,e:'The extra capacity only helps in the high scenario and does not pay its fixed and variable costs.'}}]);

SHEETS.o9=LAYERED(SHEETS.o9,[
 {id:'o9-dilemmas',ess:'<p>Today’s dilemmas: automation and AI (productivity vs well-being), local vs global supply chains (cost vs reliability, reshoring), customization and delivery speed, sustainability (repair or replace, recycled materials). Answer with the trade-off and an example.</p>',
  tryit:{q:'Reshoring production to reduce geopolitical risk illustrates…',o:['local vs global supply chains','customization','closed loops'],a:0,e:'Cheapest supplier vs reliable local supply.'}},
 {id:'o9-bullwhip',ess:'<p><b>Bullwhip effect</b>: small changes in consumer demand are amplified as orders move up the chain. It grows with more stages, uncertainty, long lead times, panic and promotions; it falls with information sharing, collaboration, better forecasting, shorter lead times, fewer stages, direct sales.</p>',extra:FIG_BW,
  tryit:{q:'Which action reduces the bullwhip effect?',o:['Sharing point-of-sale data with suppliers','Adding a distributor','Longer lead times','Big promotions'],a:0,e:'Every stage then forecasts from real consumer demand, not from amplified orders.'}}]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Operations Management','All activities that create value in goods and services by transforming inputs into outputs.','o1',['OM']],
['Servitization','Combining a good with services (a machine sold with a maintenance contract).','o1'],
['Productivity','Outputs divided by inputs: how well inputs are turned into outputs.','o1'],
['Labour productivity','Single-factor productivity: units produced per labour hour.','o1',['single-factor productivity']],
['Multifactor productivity','Output divided by all inputs in € (labour, material, energy, capital, overhead): units per €.','o1'],
['Efficiency','Doing things right (using few resources for a given output).','o1'],
['Effectiveness','Doing the right things (reaching the right goals).','o1'],
['Supply chain','All parties involved, directly or indirectly, in fulfilling a customer request, with flows of products, funds and information.','o1',['supply chains']],
['Facility','A physical location where products are stored, assembled or fabricated (plant, warehouse, store, hospital…).','o2',['facilities']],
['Factor rating method','Location method: weight the key success factors, score each location, sum weight × score.','o2',['factor rating']],
['Locational break-even analysis','Location method comparing total costs FC + VC × volume of each location to find the cheapest one for each volume.','o2',['break-even analysis']],
['Crossover point','The volume at which two locations have the same total cost.','o2',['crossover']],
['Center of gravity method','Location method giving one point: the volume-weighted average of the coordinates of the markets.','o2',['center of gravity']],
['Reshoring','Bringing production back to the home country (Adidas Speedfactories).','o2'],
['Clustering','Locating close to competitors (talent, suppliers, customers already there).','o2'],
['Decision variable','A quantity the decision maker chooses (how much to produce or ship).','o3',['decision variables']],
['Objective function','The quantity to maximize or minimize, written as a function of the decision variables.','o3',['objective']],
['Constraint','A restriction on the values of the decision variables (capacity, demand, non-negativity).','o3',['constraints']],
['Feasible region','All combinations of decision variables that satisfy every constraint.','o3'],
['Corner point','A vertex of the feasible region; a linear objective reaches its optimum at a corner.','o3',['corner points']],
['Transportation problem','Model shipping from sources with capacities to destinations with demands at minimum total cost.','o3'],
['Excel Solver','Excel add-in that solves optimization models (objective cell, variable cells, constraints, method).','o3',['Solver']],
['Simplex LP','Solver method for linear problems.','o3'],
['Capacity','The throughput, or number of units a facility can hold, receive, store or produce in a given time.','o4'],
['Utilization','Output divided by capacity.','o4'],
['Bottleneck','The constraint limiting the system’s output: the station with the smallest capacity (largest effective time per unit).','o4',['bottlenecks']],
['Process time','Time to produce one unit at a station (the inverse of its capacity).','o4'],
['Bottleneck time','Process time of the slowest station: the time between two units leaving the line.','o4'],
['Throughput time','Time for one unit to go through the whole process, without waiting: sum of the process times.','o4'],
['Theory of Constraints','Goldratt: a system’s output is limited by its most restrictive constraint, so find and manage it.','o4',['TOC']],
['Internal constraint','A limit inside the firm: equipment, people, policy (no overtime).','o4',['internal constraints']],
['External constraint','A limit outside the firm: supply (materials) or market demand.','o4',['external constraints']],
['Product mix','How much of each product to make with the limited resources.','o4'],
['Inventory','The stock of any item or resource of a firm (raw materials, work in process, finished goods).','o6'],
['Ordering cost','Fixed cost per order or setup (S).','o6',['setup cost']],
['Holding cost','Cost of keeping one unit in stock for a year (H): storage, staff, insurance, capital.','o6',['carrying cost']],
['Economic order quantity','Order quantity minimizing ordering + holding costs: √(2SD/H).','o6',['EOQ']],
['Average inventory','Q/2 under the EOQ saw-tooth profile.','o6'],
['Assignment method','Hungarian method: assigns one job per worker at minimum cost (row and column reduction, cover zeros, adjust, assign).','o7',['Hungarian method']],
['Opportunity loss','For a maximization: largest number of the table − each number, to turn it into a minimization.','o7'],
['Priority rule','Rule giving the order in which jobs are processed at a work center.','o7',['priority rules']],
['First come, first served','FCFS: jobs in order of arrival.','o7',['FCFS']],
['Earliest due date','EDD: job with the earliest due date first.','o7',['EDD']],
['Shortest processing time','SPT: shortest job first; minimizes flow time and jobs in the system.','o7',['SPT']],
['Longest processing time','LPT: longest job first; big jobs are not postponed.','o7',['LPT']],
['Flow time','Time a job spends waiting plus being processed: its completion time.','o7'],
['Job lateness','Time a job is overdue: max(0, completion time − due date).','o7',['lateness']],
['Flexibility','The ability to respond and adapt to change without excessive cost or loss of performance.','o8'],
['Volume flexibility','Producing more or less.','o8'],
['Mix flexibility','Changing the sequence or mix of products.','o8'],
['Product flexibility','Making new products on the same resources.','o8'],
['Nearshoring','Sourcing or producing in a nearby country (shorter lead times).','o8'],
['Offshoring','Sourcing or producing in a distant low-cost country.','o8'],
['Postponement','Delaying product differentiation until the customer order is known (Dell).','o8'],
['Modularity','Designing products from shared modules so variants are easy to make.','o8'],
['Expected profit','Σ probability × profit of each scenario.','o8'],
['Bullwhip effect','Amplification of order variability as orders move up the supply chain.','o9',['bullwhip']],
['Beer game','Supply-chain simulation with four stages (retailer, wholesaler, distributor, factory) showing the bullwhip effect.','o9'],
['Backlog','Orders not yet delivered, a negative inventory (€25 per unit in the beer game).','o9'],
['Supply chain management','Coordinating all supply-chain activities, from raw materials to a satisfied customer.','o9',['SCM']]
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators ---------- */
const fl=x=>Math.floor(x+1e-9);
const seqStr=s=>[s,s.replace(/-/g,'')];
const GENS=[
{kind:'gen',id:'g-o1-prod',topic:'o1',title:'Labour and multifactor productivity',blurb:'Units per labour hour, units per €, and the highest machine cost worth paying',levels:['Productivity','With a machine'],
 gen:(u,lv)=>{const w=u.int(2,6),h=u.pick([6,7,8,10]),wage=u.step(15,30,5),out=u.step(400,3000,100),mat=u.pick([0.1,0.2,0.25,0.5,1]),ov=u.step(0,800,100);
   const hrs=w*h,lab=hrs*wage,out2=Math.round(out*u.pick([1.3,1.5,1.6,2])/10)*10,h2=Math.max(2,hrs-u.int(1,Math.floor(hrs/2)));
   const base=lab+mat*out+ov,R=out2*base/out-(h2*wage+mat*out2+ov);return {lv,w,h,wage,out,mat,ov,hrs,lab,out2,h2,base,R}},
 valid:v=>v.R>20,
 q:v=>`<p>A workshop makes ${fmt(v.out)} units a day with ${v.w} workers working ${v.h} hours at €${v.wage}/hour. Material costs €${v.mat} per unit${v.ov?` and overhead €${fmt(v.ov)} per day`:''}.${v.lv?` A machine rented per day would allow ${fmt(v.out2)} units a day with ${v.h2} labour hours in total (same material cost per unit${v.ov?' and same overhead':''}).`:''}</p>`,
 parts:v=>[{label:'Labour productivity (units per labour hour)',answer:v=>v.out/v.hrs,tol:0.01},{label:'Multifactor productivity (units per €)',answer:v=>v.out/v.base,tol:0.005}].concat(v.lv?[{label:'Labour productivity with the machine',answer:v=>v.out2/v.h2,tol:0.01},{label:'Highest daily rent for multifactor productivity to improve (€)',answer:v=>v.R,tol:0.5}]:[]),
 steps:v=>[`Labour hours = ${v.w} × ${v.h} = ${v.hrs}; labour productivity = ${fmt(v.out)} / ${v.hrs} = <b>${n2(v.out/v.hrs)}</b> units per labour hour.`,
   `Inputs in € = labour ${v.hrs} × ${v.wage} = ${fmt(v.lab)} + material ${v.mat} × ${fmt(v.out)} = ${n2(v.mat*v.out)}${v.ov?` + overhead ${fmt(v.ov)}`:''} = ${n2(v.base)}; multifactor = ${fmt(v.out)} / ${n2(v.base)} = <b>${n3(v.out/v.base)}</b> units per €.`].concat(v.lv?[
   `With the machine: ${fmt(v.out2)} / ${v.h2} = <b>${n2(v.out2/v.h2)}</b> units per labour hour.`,
   `Multifactor improves if ${fmt(v.out2)} / (${v.h2} × ${v.wage} + ${v.mat} × ${fmt(v.out2)}${v.ov?` + ${fmt(v.ov)}`:''} + R) &gt; ${n3(v.out/v.base)} → ${fmt(v.out2)} × ${n2(v.base)} / ${fmt(v.out)} − ${n2(v.h2*v.wage+v.mat*v.out2+v.ov)} = <b>${n2(v.R)}</b>: the rent must stay below €${n2(v.R)} a day (same reasoning as the bakery, mid-term Q3).`]:[])},
{kind:'gen',id:'g-o1-contrib',topic:'o1',title:'Marketing or operations?',blurb:'More sales or lower production cost: which raises profit more?',
 gen:u=>{const N=u.step(500,5000,100),P=u.step(50,300,10),C=u.step(Math.ceil(P*0.4/5)*5,Math.floor(P*0.8/5)*5,5),Fx=u.step(5000,60000,5000),s=u.step(10,50,10),c=u.step(5,30,5);
   const p0=N*(P-C)-Fx,pS=N*(1+s/100)*(P-C)-Fx,pC=N*(P-C*(1-c/100))-Fx;return {N,P,C,Fx,s,c,p0,pS,pC}},
 valid:v=>v.p0>0&&Math.abs(v.pS-v.pC)>1,
 q:v=>`<p>A firm sells ${fmt(v.N)} units at €${v.P}; production cost €${v.C} per unit; other (financial) costs €${fmt(v.Fx)}. Option 1 (marketing): sales +${v.s}%. Option 2 (operations): production cost −${v.c}%.</p>`,
 parts:[{label:'Current profit (€)',answer:v=>v.p0,tol:0.5},{label:'Profit with option 1 (€)',answer:v=>v.pS,tol:0.5},{label:'Profit with option 2 (€)',answer:v=>v.pC,tol:0.5},{label:'Better option',type:'choice',o:['Marketing (more sales)','Operations (lower cost)'],a:v=>v.pC>v.pS?1:0},{label:'Sales increase needed to match option 2 (%)',answer:v=>((v.pC+v.Fx)/(v.N*(v.P-v.C))-1)*100,tol:0.1}],
 steps:v=>[`Now: ${fmt(v.N)} × (${v.P} − ${v.C}) − ${fmt(v.Fx)} = <b>${fmt(v.p0)}</b>.`,`Option 1: ${fmt(v.N)} × ${1+v.s/100} × ${v.P-v.C} − ${fmt(v.Fx)} = <b>${n2(v.pS)}</b> (${n2((v.pS/v.p0-1)*100)}%).`,
   `Option 2: cost ${v.C} × ${1-v.c/100} = ${n2(v.C*(1-v.c/100))}; ${fmt(v.N)} × (${v.P} − ${n2(v.C*(1-v.c/100))}) − ${fmt(v.Fx)} = <b>${n2(v.pC)}</b> (${n2((v.pC/v.p0-1)*100)}%).`,
   `${v.pC>v.pS?'Operations wins':'Marketing wins here'}. To match option 2 with sales only: (${n2(v.pC)} + ${fmt(v.Fx)}) / (${fmt(v.N)} × ${v.P-v.C}) − 1 = <b>${n2(((v.pC+v.Fx)/(v.N*(v.P-v.C))-1)*100)}%</b> more sales.`]},
{kind:'gen',id:'g-o2-rating',topic:'o2',title:'Factor rating',blurb:'Weighted scores of two or three locations',levels:['Two locations','Three locations'],
 gen:(u,lv)=>{const nf=lv?4:3,F=u.shuffle(['Labour productivity','Labour cost','Proximity to markets','Proximity to suppliers','Political risk','Infrastructure','Taxes and incentives','Image']).slice(0,nf);
   let w;do{w=F.map(()=>u.step(10,50,5))}while(sum(w)!==100);const L=u.shuffle(['France','Germany','Poland','Spain','Morocco','Thailand','China','Denmark']).slice(0,lv?3:2);
   const s=L.map(()=>F.map(()=>u.int(1,5)));return {F,w,L,s,tot:s.map(r=>sum(r.map((x,i)=>x*w[i]/100)))}},
 valid:v=>{const t=v.tot.slice().sort((a,b)=>b-a);return t[0]-t[1]>0.04},
 q:v=>`<p>Scores from 1 (poor) to 5 (excellent).</p>${T(['Factor','Weight'].concat(v.L),v.F.map((f,i)=>[f,v.w[i]+'%'].concat(v.s.map(r=>String(r[i])))),[1,2,3,4])}`,
 parts:v=>v.L.map((l,k)=>({label:`Score of ${l}`,answer:v=>v.tot[k],tol:0.01})).concat([{label:'Recommended location',type:'choice',o:v=>v.L,a:v=>v.tot.indexOf(Math.max(...v.tot))}]),
 steps:v=>v.L.map((l,k)=>`${l}: ${v.F.map((f,i)=>`${v.w[i]/100} × ${v.s[k][i]}`).join(' + ')} = <b>${n2(v.tot[k])}</b>.`).concat([`Highest score: <b>${v.L[v.tot.indexOf(Math.max(...v.tot))]}</b>. Remember the limits: weights and scores are subjective, and costs are not necessarily included.`])},
{kind:'gen',id:'g-o2-be',topic:'o2',title:'Locational break-even analysis',blurb:'Crossovers, cheapest location for a volume, dominated locations',levels:['Two locations','Three locations','One location never optimal'],
 gen:(u,lv)=>{const N=u.shuffle(['Lille','Lyon','Rouen','Metz','Nantes','Reims','Tours']).slice(0,3);
   if(lv===0){const v1=u.step(40,120,5),d=u.step(10,30,5),x=u.step(500,4000,100),f1=u.step(10000,60000,5000);return {lv,N,L:[{f:f1,v:v1},{f:f1+d*x,v:v1-d}],V:u.step(200,6000,100)}}
   const v1=u.step(60,120,5),d1=u.step(10,30,5),d2=u.step(5,20,5),x12=u.step(500,2000,100),x23=x12+u.step(500,3000,100),f1=u.step(10000,50000,5000),f2=f1+d1*x12,f3=f2+d2*x23;
   let L=[{f:f1,v:v1},{f:f2,v:v1-d1},{f:f3,v:v1-d1-d2}];
   if(lv===2){const k=u.int(0,2);const dom={f:L[0].f+u.step(5000,20000,5000),v:L[0].v+u.step(5,15,5)};L=[L[0],L[2]];L.splice(k,0,dom)}
   return {lv,N,L,V:u.step(200,6000,100)}},
 valid:v=>{const c=v.L.map(l=>l.f+l.v*v.V);const s=c.slice().sort((a,b)=>a-b);if(s[1]-s[0]<1)return false;const e=envelope(v.L,1e6);return v.lv===2?e.length===2:e.length===v.L.length},
 q:v=>`<p>Yearly cost of each location: ${v.L.map((l,i)=>`${v.N[i]} €${fmt(l.f)} + €${l.v} per unit`).join(' · ')}.${v.lv===2?' (Mid-term Q1 style.)':''}</p>`,
 parts:v=>{const e=envelope(v.L,1e6),c=v.L.map(l=>l.f+l.v*v.V),best=c.indexOf(Math.min(...c));
   const ps=v.lv===2?[{label:'Location that is never the cheapest',type:'choice',o:v=>v.N.slice(0,3),a:v=>[0,1,2].find(i=>!envelope(v.L,1e6).some(s=>s.i===i))},{label:'Crossover of the two others (units)',answer:v=>envelope(v.L,1e6)[0].to,tol:0.5}]
    :e.slice(0,-1).map((s,k)=>({label:`${v.N[s.i]} is the cheapest up to (units)`,answer:v=>envelope(v.L,1e6)[k].to,tol:0.5}));
   return ps.concat([{label:v=>`Cheapest location for ${fmt(v.V)} units`,type:'choice',o:v=>v.N.slice(0,v.L.length),a:()=>best},{label:v=>`Its total cost for ${fmt(v.V)} units (€)`,answer:()=>Math.min(...c),tol:0.5}])},
 steps:v=>{const e=envelope(v.L,1e6),c=v.L.map(l=>l.f+l.v*v.V),st=[];
   if(v.lv===2){const d=[0,1,2].find(i=>!e.some(s=>s.i===i)),o=[0,1,2].find(i=>i!==d&&v.L[i].f<=v.L[d].f&&v.L[i].v<=v.L[d].v);st.push(`${v.N[d]} has a higher fixed cost (${fmt(v.L[d].f)} &gt; ${fmt(v.L[o].f)}) <b>and</b> a higher variable cost (${v.L[d].v} &gt; ${v.L[o].v}) than ${v.N[o]}: its line is always above, it is <b>never</b> optimal.`)}
   e.slice(0,-1).forEach(s=>{const a=v.L[s.i],nx=e[e.indexOf(s)+1],b=v.L[nx.i];st.push(`${v.N[s.i]} = ${v.N[nx.i]}: ${fmt(a.f)} + ${a.v}x = ${fmt(b.f)} + ${b.v}x → ${fmt(b.f-a.f)} = ${a.v-b.v}x → x = <b>${n2(s.to)}</b>.`)});
   st.push(`Ranges: ${e.map(s=>`${v.N[s.i]} ${s.from?'from '+n2(s.from):'from 0'}${s.to<1e6?' to '+n2(s.to):' upwards'}`).join('; ')}.`);
   st.push(`At ${fmt(v.V)} units: ${v.L.map((l,i)=>`${v.N[i]} ${fmt(l.f)} + ${l.v} × ${fmt(v.V)} = ${fmt(c[i])}`).join(' · ')} → <b>${v.N[c.indexOf(Math.min(...c))]}</b>.`);return st}},
{kind:'gen',id:'g-o2-cog',topic:'o2',title:'Center of gravity',blurb:'Volume-weighted coordinates of three or four markets',levels:['Three markets','Four markets'],
 gen:(u,lv)=>({p:[...Array(lv?4:3)].map(()=>({x:u.step(0,200,10),y:u.step(0,200,10),q:u.step(100,2000,100)}))}),
 q:v=>`<p>${v.p.map((p,i)=>`Market ${L4[i]} (${p.x}, ${p.y}), volume ${fmt(p.q)}`).join(' · ')}.</p>`,
 parts:[{label:'x of the centre',answer:v=>sum(v.p.map(p=>p.x*p.q))/sum(v.p.map(p=>p.q)),tol:0.01},{label:'y of the centre',answer:v=>sum(v.p.map(p=>p.y*p.q))/sum(v.p.map(p=>p.q)),tol:0.01}],
 steps:v=>{const Q=sum(v.p.map(p=>p.q));return [`Total volume Σ Qi = ${v.p.map(p=>fmt(p.q)).join(' + ')} = ${fmt(Q)}.`,`x = (${v.p.map(p=>`${p.x} × ${fmt(p.q)}`).join(' + ')}) / ${fmt(Q)} = ${fmt(sum(v.p.map(p=>p.x*p.q)))} / ${fmt(Q)} = <b>${n2(sum(v.p.map(p=>p.x*p.q))/Q)}</b>.`,`y = (${v.p.map(p=>`${p.y} × ${fmt(p.q)}`).join(' + ')}) / ${fmt(Q)} = <b>${n2(sum(v.p.map(p=>p.y*p.q))/Q)}</b>. Check the point is a feasible site.`]}},
{kind:'gen',id:'g-o3-lp',topic:'o3',title:'Graphical solution: corner points',blurb:'Two products, two resources: corners, optimum and profit',
 gen:u=>{const px=u.int(2,20),py=u.int(2,20),a1=u.int(1,6),b1=u.int(1,6),a2=u.int(1,6),b2=u.int(1,6),c1=u.int(2,15),c2=u.int(2,15);return {px,py,a1,b1,a2,b2,c1,c2,r1:a1*px+b1*py,r2:a2*px+b2*py}},
 valid:v=>{if(v.a1*v.b2===v.a2*v.b1||(v.r1/v.a1-v.r2/v.a2)*(v.r1/v.b1-v.r2/v.b2)>=0)return false;const C=region([[v.a1,v.b1,v.r1],[v.a2,v.b2,v.r2]],1e4,1e4);if(C.length!==4)return false;const z=C.map(c=>v.c1*c[0]+v.c2*c[1]),m=Math.max(...z);return z.filter(x=>Math.abs(x-m)<1e-6).length===1},
 q:v=>`<p>Tables (x) earn €${v.c1}, chairs (y) €${v.c2}. Machine hours: ${v.a1}x + ${v.b1}y ≤ ${v.r1}. Labour hours: ${v.a2}x + ${v.b2}y ≤ ${v.r2}. x, y ≥ 0. Solve graphically (fractions allowed).</p>`,
 parts:[{label:'Optimal x',answer:v=>{const C=region([[v.a1,v.b1,v.r1],[v.a2,v.b2,v.r2]],1e4,1e4),z=C.map(c=>v.c1*c[0]+v.c2*c[1]);return C[z.indexOf(Math.max(...z))][0]},tol:0.01},{label:'Optimal y',answer:v=>{const C=region([[v.a1,v.b1,v.r1],[v.a2,v.b2,v.r2]],1e4,1e4),z=C.map(c=>v.c1*c[0]+v.c2*c[1]);return C[z.indexOf(Math.max(...z))][1]},tol:0.01},{label:'Maximum profit (€)',answer:v=>Math.max(...region([[v.a1,v.b1,v.r1],[v.a2,v.b2,v.r2]],1e4,1e4).map(c=>v.c1*c[0]+v.c2*c[1])),tol:0.05}],
 steps:v=>{const C=region([[v.a1,v.b1,v.r1],[v.a2,v.b2,v.r2]],1e4,1e4),z=C.map(c=>v.c1*c[0]+v.c2*c[1]),m=z.indexOf(Math.max(...z));
   return [`Axis intercepts. Machine: x = ${v.r1}/${v.a1} = ${n2(v.r1/v.a1)}, y = ${v.r1}/${v.b1} = ${n2(v.r1/v.b1)}. Labour: x = ${n2(v.r2/v.a2)}, y = ${n2(v.r2/v.b2)}. On each axis the smaller intercept is the corner.`,
    `Intersection: solve ${v.a1}x + ${v.b1}y = ${v.r1} and ${v.a2}x + ${v.b2}y = ${v.r2} → (${v.px}, ${v.py}).`,
    `Corners and profit ${v.c1}x + ${v.c2}y: ${C.map((c,i)=>`(${n2(c[0])}, ${n2(c[1])}) → ${n2(z[i])}`).join(' · ')}.`,`Optimum: <b>x = ${n2(C[m][0])}, y = ${n2(C[m][1])}</b>, profit <b>€${n2(z[m])}</b>.`]}},
{kind:'gen',id:'g-o3-transport',topic:'o3',title:'Transportation problem: two plants, two markets',blurb:'Formulation, feasibility and the cheapest shipping plan',levels:['Formulate and check','Minimum cost'],
 gen:(u,lv)=>({lv,C:[u.step(50,200,10),u.step(50,200,10)],D:[u.step(50,200,10),u.step(50,200,10)],c:[[u.int(2,12),u.int(2,12)],[u.int(2,12),u.int(2,12)]]}),
 valid:v=>{const S=sum(v.C),D=sum(v.D);if(v.lv===0)return true;if(S<D||v.C[0]>=D||v.C[1]>=D)return false;const t=tpSolve(v);return t.count===1},
 q:v=>`<p>Plant 1 can supply ${v.C[0]} units, Plant 2 ${v.C[1]}. Market A needs ${v.D[0]}, Market B ${v.D[1]}. Cost per unit: 1 → A €${v.c[0][0]}, 1 → B €${v.c[0][1]}, 2 → A €${v.c[1][0]}, 2 → B €${v.c[1][1]}. xij = units from plant i to market j.</p>`,
 parts:v=>v.lv===0?[{label:'Objective',type:'choice',o:v=>[`Min ${v.c[0][0]}x11 + ${v.c[0][1]}x12 + ${v.c[1][0]}x21 + ${v.c[1][1]}x22`,`Max ${v.c[0][0]}x11 + ${v.c[0][1]}x12 + ${v.c[1][0]}x21 + ${v.c[1][1]}x22`,`Min x11 + x12 + x21 + x22`],a:()=>0},
   {label:'Capacity constraint of plant 1',type:'choice',o:v=>[`x11 + x12 ≤ ${v.C[0]}`,`x11 + x21 ≤ ${v.C[0]}`,`x11 + x12 = ${v.C[0]}`,`x11 + x21 = ${v.D[0]}`],a:()=>0},
   {label:'Demand constraint of market B',type:'choice',o:v=>[`x12 + x22 = ${v.D[1]}`,`x21 + x22 ≤ ${v.D[1]}`,`x12 + x22 ≥ 0`,`x21 + x22 = ${v.D[1]}`],a:()=>0},
   {label:'Total supply − total demand',answer:v=>sum(v.C)-sum(v.D),tol:0},{label:'Can Solver find a feasible solution?',type:'choice',o:['Yes','No'],a:v=>sum(v.C)>=sum(v.D)?0:1}]
  :[{label:'Units from plant 1 to market A',answer:v=>tpSolve(v).x[0],tol:0},{label:'Units from plant 1 to market B',answer:v=>tpSolve(v).x[1],tol:0},{label:'Minimum total cost (€)',answer:v=>tpSolve(v).cost,tol:0}],
 steps:v=>{const S=sum(v.C),D=sum(v.D);if(v.lv===0)return [`Objective: minimize the total shipping cost Σ cij·xij.`,`Capacity (≤, one per plant): x11 + x12 ≤ ${v.C[0]}; x21 + x22 ≤ ${v.C[1]}. Demand (=, one per market): x11 + x21 = ${v.D[0]}; x12 + x22 = ${v.D[1]}. All xij ≥ 0.`,
     `Supply ${S} ${S>=D?'≥':'&lt;'} demand ${D}: ${S>=D?'<b>feasible</b> (Solver can meet every demand).':'<b>infeasible</b>: demands are equalities and there are not enough units (mid-term Q5).'}`];
   const t=tpSolve(v),k=[v.c[0][0]-v.c[1][0],v.c[0][1]-v.c[1][1]];
   return [`${OUT} Solver does this in the course; with 2 plants and 2 markets it can be done by hand. Once x11 and x12 are chosen, the rest follows: x21 = ${v.D[0]} − x11, x22 = ${v.D[1]} − x12.`,
    `Moving one unit of market A from plant 2 to plant 1 changes the cost by ${v.c[0][0]} − ${v.c[1][0]} = ${k[0]}; for market B by ${v.c[0][1]} − ${v.c[1][1]} = ${k[1]}. Plant 1 must ship at least ${D} − ${v.C[1]} = ${Math.max(0,D-v.C[1])} units (plant 2 cannot do more than ${v.C[1]}) and at most ${v.C[0]}.`,
    `Plant 1 first takes the market where the change is most negative (it saves money), up to its capacity; if plant 2 is still over capacity, plant 1 takes more of the market where the extra cost is smallest. Result: x11 = <b>${t.x[0]}</b>, x12 = <b>${t.x[1]}</b>, x21 = ${v.D[0]-t.x[0]}, x22 = ${v.D[1]-t.x[1]}.`,
    `Cost = ${v.c[0][0]} × ${t.x[0]} + ${v.c[0][1]} × ${t.x[1]} + ${v.c[1][0]} × ${v.D[0]-t.x[0]} + ${v.c[1][1]} × ${v.D[1]-t.x[1]} = <b>€${fmt(t.cost)}</b>.`]}},
{kind:'gen',id:'g-o4-line',topic:'o4',title:'Bottleneck, throughput time and capacity',blurb:'Series lines, parallel machines, adding a machine',levels:['Series line','Parallel machines','Add a machine'],
 gen:(u,lv)=>{const n=lv?u.int(3,4):3,st=[...Array(n)].map(()=>({t:u.pick([2,3,4,5,6,8,9,10,12,15]),m:lv?u.pick([1,1,2,2,3]):1}));return {lv,n,st,H:u.pick([7,8,10]),D:u.int(2,20)}},
 valid:v=>{const c=lineCalc(v.st),e=c.eff.slice().sort((a,b)=>b-a);if(e[0]-e[1]<1e-9)return false;if(v.lv===2){const s2=v.st.map((s,i)=>i===c.b?{t:s.t,m:s.m+1}:s),c2=lineCalc(s2),f=c2.eff.slice().sort((a,b)=>b-a);if(f[0]-f[1]<1e-9)return false}return true},
 q:v=>`<p>Work centers in series: ${v.st.map((s,i)=>`${L4[i]}: ${s.m} machine${s.m>1?'s':''} of ${s.t} min/unit`).join(' · ')}. The line works ${v.H} hours a day.</p>`,
 parts:v=>{const ps=[{label:'Bottleneck',type:'choice',o:v=>v.st.map((_,i)=>L4[i]),a:v=>lineCalc(v.st).b},{label:'Bottleneck time (min per unit)',answer:v=>lineCalc(v.st).bt,tol:0.01},{label:'Throughput time (min)',answer:v=>lineCalc(v.st).tt,tol:0},{label:'Capacity (units per hour)',answer:v=>lineCalc(v.st).cap,tol:0.01}];
   if(v.lv>=1)ps.push({label:'Capacity per day',answer:v=>v.H*60/lineCalc(v.st).bt,tol:0.05});
   if(v.lv===2)ps.push({label:'One machine is added at the bottleneck. New bottleneck',type:'choice',o:v=>v.st.map((_,i)=>L4[i]),a:v=>{const c=lineCalc(v.st);return lineCalc(v.st.map((s,i)=>i===c.b?{t:s.t,m:s.m+1}:s)).b}},{label:'New capacity (units per hour)',answer:v=>{const c=lineCalc(v.st);return lineCalc(v.st.map((s,i)=>i===c.b?{t:s.t,m:s.m+1}:s)).cap},tol:0.01});
   return ps},
 steps:v=>{const c=lineCalc(v.st),st=[`Effective time per unit = time ÷ machines: ${v.st.map((s,i)=>`${L4[i]} ${s.t}/${s.m} = ${n2(c.eff[i])}`).join(', ')}.`,`Bottleneck = largest effective time: <b>${L4[c.b]}</b>, bottleneck time <b>${n2(c.bt)}</b> min per unit.`,
   `Throughput time = ${v.st.map(s=>s.t).join(' + ')} = <b>${c.tt}</b> min (a unit uses one machine per station).`,`Capacity = 60 / ${n2(c.bt)} = <b>${n2(c.cap)}</b> units per hour.`];
  if(v.lv>=1)st.push(`Per day: ${v.H} × 60 / ${n2(c.bt)} = <b>${n2(v.H*60/c.bt)}</b> units.`);
  if(v.lv===2){const s2=v.st.map((s,i)=>i===c.b?{t:s.t,m:s.m+1}:s),c2=lineCalc(s2);st.push(`Extra machine at ${L4[c.b]}: ${v.st[c.b].t}/${v.st[c.b].m+1} = ${n2(c2.eff[c.b])}. New effective times ${c2.eff.map(n2).join(', ')} → new bottleneck <b>${L4[c2.b]}</b>, capacity 60 / ${n2(c2.bt)} = <b>${n2(c2.cap)}</b> per hour. ${c2.b!==c.b?'The bottleneck moved: improving it further would be useless.':''}`)}
  return st}},
{kind:'gen',id:'g-o4-constraint',topic:'o4',title:'What is the constraint?',blurb:'Demand, internal capacity or supplier (at-home exercise 1)',
 gen:u=>{const Dw=u.step(60,300,10),h=u.pick([7,8]),days=5,m=u.pick([10,12,15,20,24,30]),s=u.step(10,60,5);return {Dw,h,days,m,s,cap:h*days*60/m,sup:s*days}},
 valid:v=>{const a=[v.Dw,v.cap,v.sup].sort((x,y)=>x-y);return a[1]-a[0]>=5&&Number.isInteger(v.cap)},
 q:v=>`<p>Weekly demand ${v.Dw} units. The plant works ${v.h}-hour shifts, ${v.days} days a week, and needs ${v.m} minutes per unit. The supplier delivers material for ${v.s} units a day.</p>`,
 parts:[{label:'Production capacity (units per week)',answer:v=>v.cap,tol:0},{label:'Supplier limit (units per week)',answer:v=>v.sup,tol:0},{label:'The constraint is…',type:'choice',o:['Demand (market)','Production capacity (internal)','The supplier (external)'],a:v=>{const a=[v.Dw,v.cap,v.sup];return a.indexOf(Math.min(...a))}},{label:'Units the firm can sell per week',answer:v=>Math.min(v.Dw,v.cap,v.sup),tol:0}],
 steps:v=>{const a=[v.Dw,v.cap,v.sup],i=a.indexOf(Math.min(...a));return [`Capacity = ${v.h} h × ${v.days} days × (60 / ${v.m}) units per hour = <b>${v.cap}</b> units per week.`,`Supplier = ${v.days} × ${v.s} = <b>${v.sup}</b> units per week.`,
   `Compare with demand ${v.Dw}: the smallest is <b>${['demand','capacity','the supplier'][i]}</b> (${a[i]} units). ${['Utilization is below 100%: sell more (marketing) to use the capacity.','Increase capacity (extra shift, machine, better process).','Find more supply (another supplier, faster deliveries).'][i]}`]}},
{kind:'gen',id:'g-o4-toc',topic:'o4',title:'TOC product mix',blurb:'Bottleneck, priority, quantities and profit (two or three products)',levels:['Two products','Three products'],
 gen:(u,lv)=>{const k=lv?3:2,b=u.int(0,1),Cap=u.pick([1200,2000,2400,2400,3000]);const P=[...Array(k)].map(()=>{const price=u.step(30,120,5),cost=u.step(5,price-10,5);return {price,cost,m:price-cost,t:[u.int(2,20),u.int(2,20)],d:u.step(20,100,10)}});return {k,b,Cap,P,lv}},
 valid:v=>{const load=[0,1].map(j=>sum(v.P.map(p=>p.d*p.t[j])));if(!(load[v.b]>v.Cap&&load[1-v.b]<=v.Cap))return false;const r=v.P.map(p=>p.m/p.t[v.b]);if(new Set(r.map(x=>x.toFixed(4))).size<v.k)return false;const s=tocSolve(v),k=s.order.findIndex(i=>s.q[i]<v.P[i].d);return k>=0&&s.q[s.order[k]]>0&&s.order.slice(k+1).every(i=>s.q[i]===0)},
 q:v=>`<p>Each machine is available ${fmt(v.Cap)} minutes a week.</p>${T([''].concat(v.P.map((_,i)=>L4[i])),[...(v.lv?[['Price (€)'].concat(v.P.map(p=>String(p.price))),['Cost (€)'].concat(v.P.map(p=>String(p.cost)))]:[['Margin (€)'].concat(v.P.map(p=>String(p.m)))]),['M1 (min/unit)'].concat(v.P.map(p=>String(p.t[0]))),['M2 (min/unit)'].concat(v.P.map(p=>String(p.t[1]))),['Demand'].concat(v.P.map(p=>String(p.d)))],v.P.map((_,i)=>i+1))}<p>Produce whole units (round down).</p>`,
 parts:v=>[{label:'Bottleneck',type:'choice',o:['M1','M2'],a:v=>v.b},{label:'Priority order',type:'choice',o:v=>perms(v.k).map(p=>p.map(i=>L4[i]).join('-')),a:v=>{const s=tocSolve(v);return perms(v.k).findIndex(p=>p.join()===s.order.join())}}]
  .concat(v.P.map((_,i)=>({label:`Units of ${L4[i]}`,answer:v=>tocSolve(v).q[i],tol:0}))).concat([{label:'Maximum profit (€)',answer:v=>tocSolve(v).profit,tol:0}]),
 steps:v=>{const s=tocSolve(v),load=[0,1].map(j=>sum(v.P.map(p=>p.d*p.t[j])));let left=v.Cap;const fill=s.order.map(i=>{const p=v.P[i],use=s.q[i]*p.t[v.b];const txt=`${L4[i]}: ${s.q[i]===p.d?`full demand ${p.d}`:`${fmt(left)} / ${p.t[v.b]} = ${n2(left/p.t[v.b])} → <b>${s.q[i]}</b>`} (${fmt(use)} min)`;left-=use;return txt});
   return (v.lv?[`Margins = price − cost: ${v.P.map((p,i)=>`${L4[i]} ${p.price} − ${p.cost} = ${p.m}`).join(', ')}.`]:[]).concat([
   `Load for all demand: M1 ${v.P.map(p=>`${p.d} × ${p.t[0]}`).join(' + ')} = ${fmt(load[0])}; M2 ${v.P.map(p=>`${p.d} × ${p.t[1]}`).join(' + ')} = ${fmt(load[1])}. Only M${v.b+1} exceeds ${fmt(v.Cap)}: <b>M${v.b+1} is the bottleneck</b>.`,
   `Margin per bottleneck minute: ${v.P.map((p,i)=>`${L4[i]} ${p.m}/${p.t[v.b]} = ${n2(p.m/p.t[v.b])}`).join(', ')} → priority <b>${s.order.map(i=>L4[i]).join('-')}</b>.`,
   `Fill the ${fmt(v.Cap)} minutes of M${v.b+1}: ${fill.join('; ')}.`,`Profit = ${s.order.map(i=>`${s.q[i]} × ${v.P[i].m}`).join(' + ')} = <b>€${fmt(s.profit)}</b>.`])}},
{kind:'gen',id:'g-o6-eoq',topic:'o6',title:'EOQ and inventory costs',blurb:'EOQ, orders, cycle, costs; holding cost in %; from the average inventory',levels:['EOQ and costs','Current order size vs EOQ','From the average inventory'],
 gen:(u,lv)=>{if(lv===0)return {lv,D:u.step(500,40000,100),S:u.pick([10,20,25,40,50,80,100,120,150]),H:u.pick([0.5,1,2,2.5,3,4,5,8,10]),days:u.pick([240,250,300,360])};
   if(lv===1){const Dm=u.step(100,2000,50),P=u.pick([2,4,5,8,10,20,25]),hp=u.pick([10,15,20,25,30]),S=u.pick([10,20,25,40,50]),Q=u.step(100,3000,100);return {lv,Dm,D:Dm*12,P,hp,H:P*hp/100,S,Q}}
   const Ia=u.step(50,1500,50),D=u.step(1000,50000,500),S=u.pick([20,50,75,100,120,150,200]),days=u.pick([240,250,300]);return {lv,Ia,D,S,days,Q:2*Ia,H:2*S*D/(4*Ia*Ia)}},
 valid:v=>v.lv===1?Math.abs(v.Q-Math.sqrt(2*v.S*v.D/v.H))>0.1*v.Q&&v.H>=0.2:v.lv===2?v.H>=0.2&&v.H<=50:Math.sqrt(2*v.S*v.D/v.H)<v.D,
 q:v=>v.lv===0?`<p>Annual demand ${fmt(v.D)} units, ordering cost €${v.S} per order, holding cost €${v.H} per unit per year, ${v.days} working days.</p>`
  :v.lv===1?`<p>A shop sells ${fmt(v.Dm)} units a month, bought at €${v.P} each. Annual holding cost = ${v.hp}% of the price; ordering cost €${v.S}. The manager orders ${fmt(v.Q)} units at a time.</p>`
  :`<p>Under the EOQ, the average inventory is ${fmt(v.Ia)} units. Annual demand ${fmt(v.D)}, ordering cost €${v.S}, ${v.days} working days.</p>`,
 parts:v=>v.lv===0?[{label:'EOQ (units)',answer:v=>Math.sqrt(2*v.S*v.D/v.H),tolPct:0.2},{label:'Number of orders per year',answer:v=>v.D/Math.sqrt(2*v.S*v.D/v.H),tolPct:0.3},{label:'Days between orders',answer:v=>v.days/(v.D/Math.sqrt(2*v.S*v.D/v.H)),tolPct:0.5},{label:'Annual ordering + holding cost (€)',answer:v=>Math.sqrt(2*v.S*v.D*v.H),tolPct:0.2}]
  :v.lv===1?[{label:'Holding cost H (€ per unit per year)',answer:v=>v.H,tol:0.001},{label:'Annual cost with the current order size (€)',answer:v=>v.S*v.D/v.Q+v.H*v.Q/2,tolPct:0.2},{label:'EOQ (units)',answer:v=>Math.sqrt(2*v.S*v.D/v.H),tolPct:0.2},{label:'Extra annual cost of the current order size (€)',answer:v=>v.S*v.D/v.Q+v.H*v.Q/2-Math.sqrt(2*v.S*v.D*v.H),tolPct:0.5}]
  :[{label:'EOQ (units)',answer:v=>v.Q,tol:0},{label:'Holding cost H (€ per unit per year)',answer:v=>v.H,tolPct:0.2},{label:'Number of orders per year',answer:v=>v.D/v.Q,tolPct:0.2},{label:'Days between orders',answer:v=>v.days*v.Q/v.D,tolPct:0.5},{label:'Annual ordering cost (€)',answer:v=>v.S*v.D/v.Q,tolPct:0.2}],
 steps:v=>{const Q=Math.sqrt(2*v.S*v.D/v.H);if(v.lv===0)return [`Q* = √(2 × ${v.S} × ${fmt(v.D)} / ${v.H}) = √${fmt(U.round(2*v.S*v.D/v.H,2))} = <b>${n2(Q)}</b>.`,`N = ${fmt(v.D)} / ${n2(Q)} = <b>${n2(v.D/Q)}</b> orders; T = ${v.days} / ${n2(v.D/Q)} = <b>${n2(v.days*Q/v.D)}</b> days.`,
     `Ordering ${v.S} × ${n2(v.D/Q)} = ${n2(v.S*v.D/Q)}; holding ${v.H} × ${n2(Q)}/2 = ${n2(v.H*Q/2)} (equal at the EOQ) → total <b>${n2(2*v.H*Q/2)}</b>.`];
   if(v.lv===1){const cq=v.S*v.D/v.Q+v.H*v.Q/2,ce=Math.sqrt(2*v.S*v.D*v.H);return [`Same time base: D = ${fmt(v.Dm)} × 12 = ${fmt(v.D)} per year; H = ${v.hp}% × ${v.P} = <b>${n2(v.H)}</b>.`,
     `Current Q = ${fmt(v.Q)}: holding ${n2(v.H)} × ${fmt(v.Q)}/2 = ${n2(v.H*v.Q/2)} + ordering ${v.S} × ${fmt(v.D)}/${fmt(v.Q)} = ${n2(v.S*v.D/v.Q)} → <b>${n2(cq)}</b>.`,
     `Q* = √(2 × ${v.S} × ${fmt(v.D)} / ${n2(v.H)}) = <b>${n2(Q)}</b>; cost ${n2(ce/2)} + ${n2(ce/2)} = ${n2(ce)}.`,`Extra cost = ${n2(cq)} − ${n2(ce)} = <b>${n2(cq-ce)}</b> per year (Garden Variety). ${v.Q>Q?'Holding &gt; ordering: Q is too large.':'Ordering &gt; holding: Q is too small.'}`]}
   return [`Average inventory = Q*/2 → Q* = 2 × ${fmt(v.Ia)} = <b>${fmt(v.Q)}</b>.`,`From Q*² = 2SD/H: H = 2 × ${v.S} × ${fmt(v.D)} / ${fmt(v.Q)}² = <b>${fmt(U.round(v.H,4))}</b>.`,
    `N = ${fmt(v.D)} / ${fmt(v.Q)} = <b>${n2(v.D/v.Q)}</b>; T = ${v.days} / ${n2(v.D/v.Q)} = <b>${n2(v.days*v.Q/v.D)}</b> days.`,`Ordering cost = ${v.S} × ${n2(v.D/v.Q)} = <b>${n2(v.S*v.D/v.Q)}</b> = holding cost ${fmt(U.round(v.H,4))} × ${fmt(v.Ia)} (ProTech).`]}},
{kind:'gen',id:'g-o7-hung',topic:'o7',title:'Assignment method (Hungarian)',blurb:'Minimize or maximize, 3 × 3 or 4 × 4, every step shown',levels:['3 × 3 minimize','3 × 3 maximize','4 × 4 minimize'],
 gen:(u,lv)=>{const n=lv===2?4:3,max=lv===1;return {n,max,M:[...Array(n)].map(()=>[...Array(n)].map(()=>max?u.int(10,40):u.int(2,20))),rl:[...Array(n)].map((_,i)=>'W'+(i+1)),cl:[...Array(n)].map((_,j)=>'J'+(j+1))}},
 valid:v=>bestAssign(v.M,v.max).count===1,
 q:v=>`<p>${v.max?'Contribution margin (hundreds of €) of each worker on each job: maximize the total.':'Hours needed by each worker for each job: minimize the total.'} One job per worker.</p>${T([''].concat(v.cl),v.M.map((r,i)=>[v.rl[i]].concat(r.map(String))),v.cl.map((_,j)=>j+1))}`,
 parts:v=>v.rl.map((w,i)=>({label:`${w} does job`,type:'choice',o:v=>v.cl,a:v=>bestAssign(v.M,v.max).p[i]})).concat([{label:v=>v.max?'Maximum total':'Minimum total',answer:v=>bestAssign(v.M,v.max).best,tol:0}]),
 steps:v=>hungSteps(v.M,v.max,v.rl,v.cl).steps},
{kind:'gen',id:'g-o7-rules',topic:'o7',title:'Priority rules and performance measures',blurb:'Sequence, flow time, lateness, utilization, jobs in the system',levels:['One rule','All measures','Compare the rules'],
 gen:(u,lv)=>{const pts=u.shuffle([2,3,4,5,6,7,8,9,10,11,12,14,15]).slice(0,5),dds=u.shuffle([5,8,10,12,14,15,18,20,22,25,28,30,33,35]).slice(0,5);const jobs=pts.map((pt,i)=>({n:'ABCDE'[i],pt,dd:dds[i]}));return {lv,jobs,rule:u.pick(['FCFS','SPT','EDD','LPT'])}},
 valid:v=>{const l=RULES.map(r=>ruleRun(v.jobs,r).late),m=Math.min(...l);return l.filter(x=>x===m).length===1},
 q:v=>`<p>Jobs in order of arrival (processing days, due day): ${v.jobs.map(j=>`${j.n} (${j.pt}, ${j.dd})`).join(' · ')}.${v.lv===2?' Compare the four rules.':` Apply <b>${v.rule}</b>.`}</p>`,
 parts:v=>{const r=ruleRun(v.jobs,v.rule);if(v.lv===0)return [{label:'Sequence (e.g. A-B-C-D-E)',type:'text',accept:()=>seqStr(r.seq)},{label:'Total flow time (days)',answer:()=>r.flow,tol:0},{label:'Total lateness (days)',answer:()=>r.late,tol:0},{label:'Average completion time (days)',answer:()=>r.flow/5,tol:0.01}];
   if(v.lv===1)return [{label:'Utilization (%)',answer:()=>r.P/r.flow*100,tol:0.1},{label:'Average number of jobs in the system',answer:()=>r.flow/r.P,tol:0.01},{label:'Average completion time (days)',answer:()=>r.flow/5,tol:0.01},{label:'Average lateness (days)',answer:()=>r.late/5,tol:0.01}];
   const all=RULES.map(x=>ruleRun(v.jobs,x));return [{label:'Total flow time with SPT',answer:()=>all[1].flow,tol:0},{label:'Total flow time with EDD',answer:()=>all[2].flow,tol:0},{label:'Rule with the lowest total lateness',type:'choice',o:RULES,a:()=>{const l=all.map(x=>x.late);return l.indexOf(Math.min(...l))}}]},
 steps:v=>{const H=['Job','Processing','Flow time','Due','Lateness'];if(v.lv===2)return RULES.map(x=>{const r=ruleRun(v.jobs,x);return `<p><b>${x}</b> ${r.seq}: total flow ${r.flow}, total lateness ${r.late}.</p>`+T(H,r.rows,[1,2,3,4])}).concat([`SPT always gives the lowest flow time; the lowest lateness here comes from <b>${RULES[RULES.map(x=>ruleRun(v.jobs,x).late).indexOf(Math.min(...RULES.map(x=>ruleRun(v.jobs,x).late)))]}</b> (EDD usually, not always).`]);
   const r=ruleRun(v.jobs,v.rule);return [`${v.rule}: ${RULE_TXT[v.rule]} → sequence <b>${r.seq}</b>.`,`<p>Flow time = running total of processing times; lateness = max(0, flow − due).</p>`+T(H,r.rows,[1,2,3,4]),
    `Totals: processing ${r.P}, flow time <b>${r.flow}</b>, lateness <b>${r.late}</b>.`,`Utilization = ${r.P}/${r.flow} = <b>${n2(r.P/r.flow*100)}%</b>; jobs in the system = ${r.flow}/${r.P} = <b>${n2(r.flow/r.P)}</b>; average completion = ${r.flow}/5 = <b>${n2(r.flow/5)}</b>; average lateness = ${r.late}/5 = <b>${n2(r.late/5)}</b>.`]}},
{kind:'gen',id:'g-o8-flex',topic:'o8',title:'Value of flexible capacity',blurb:'Fixed or flexible plant; dedicated and flexible lines',levels:['Fixed or flexible plant','Dedicated + flexible lines'],
 gen:(u,lv)=>{if(lv===0){const p=u.step(6,20,1),DL=u.step(4000,9000,1000),DH=DL+u.step(2000,8000,1000),K1=u.step(DL,DH-1000,1000),K2=u.step(DH,DH+4000,1000),F1=u.step(10000,60000,5000),F2=F1+u.step(2000,20000,1000),V1=u.pick([1,1.5,2,3]),V2=V1+u.pick([0,0.2,0.5,1]),q=u.pick([0.3,0.4,0.5,0.6,0.7]);return {lv,p,DL,DH,K1,K2,F1,F2,V1,V2,q}}
   const pA=u.step(1500,3000,100),pB=u.step(600,1500,100),cA=u.step(300,800,50),cB=u.step(100,500,50),dc=u.step(50,200,50),KA=u.step(40,100,10),KB=u.step(60,160,10),KF=u.step(30,100,10),DA=KA+u.step(10,60,10),DB=KB+u.step(20,100,10);return {lv,pA,pB,cA,cB,dc,KA,KB,KF,DA,DB}},
 valid:v=>{if(v.lv===0){const e=flexRun(v);return v.K1<v.DH&&Math.abs(e.e1-e.e2)>1&&e.e1>0}const e=flexRun(v);return v.KF<v.DA-v.KA+v.DB-v.KB&&(v.pA-v.cA)!==(v.pB-v.cB)&&v.pB-v.cB-v.dc>0},
 q:v=>v.lv===0?`<p>Price €${v.p} per unit. Demand is ${fmt(v.DL)} units (probability ${v.q}) or ${fmt(v.DH)} units (probability ${U.round(1-v.q,2)}). Fixed plant: capacity ${fmt(v.K1)}, fixed cost €${fmt(v.F1)}, variable cost €${v.V1}. Flexible plant: capacity ${fmt(v.K2)}, fixed cost €${fmt(v.F2)}, variable cost €${v.V2}.</p>`
  :`<p>Product A sells at €${v.pA}, B at €${v.pB} (thousand units, € per unit). Dedicated lines: A (capacity ${v.KA}, cost €${v.cA} per unit), B (capacity ${v.KB}, cost €${v.cB}). A flexible line (capacity ${v.KF}) can make both at €${v.dc} more per unit. Demand: A ${v.DA}, B ${v.DB}.</p>`,
 parts:v=>v.lv===0?[{label:'Expected profit, fixed plant (€)',answer:v=>flexRun(v).e1,tol:0.5},{label:'Expected profit, flexible plant (€)',answer:v=>flexRun(v).e2,tol:0.5},{label:'Better option',type:'choice',o:['Fixed plant','Flexible plant'],a:v=>flexRun(v).e2>flexRun(v).e1?1:0},{label:'Highest fixed cost of the flexible plant to stay at least as good (€)',answer:v=>flexRun(v).maxF,tol:0.5}]
  :[{label:'Units of A made on the flexible line',answer:v=>flexRun(v).fA,tol:0},{label:'Units of B made on the flexible line',answer:v=>flexRun(v).fB,tol:0},{label:'Total operating profit (thousand €)',answer:v=>flexRun(v).profit,tol:0.5}],
 steps:v=>{const e=flexRun(v);if(v.lv===0){const pr=(K,F,V,D)=>Math.min(D,K)*(v.p-V)-F;return [`Sales = min(demand, capacity). Fixed plant: low ${fmt(Math.min(v.DL,v.K1))} × ${n2(v.p-v.V1)} − ${fmt(v.F1)} = ${n2(pr(v.K1,v.F1,v.V1,v.DL))}; high ${fmt(Math.min(v.DH,v.K1))} × ${n2(v.p-v.V1)} − ${fmt(v.F1)} = ${n2(pr(v.K1,v.F1,v.V1,v.DH))}.`,
     `Expected = ${v.q} × ${n2(pr(v.K1,v.F1,v.V1,v.DL))} + ${U.round(1-v.q,2)} × ${n2(pr(v.K1,v.F1,v.V1,v.DH))} = <b>${n2(e.e1)}</b>.`,
     `Flexible plant: low ${n2(pr(v.K2,v.F2,v.V2,v.DL))}; high ${fmt(Math.min(v.DH,v.K2))} × ${n2(v.p-v.V2)} − ${fmt(v.F2)} = ${n2(pr(v.K2,v.F2,v.V2,v.DH))} → expected <b>${n2(e.e2)}</b>.`,
     `${e.e2>e.e1?'The flexible plant is better.':'The fixed plant is better.'} Flexible stays as good while ${v.q} × ${fmt(Math.min(v.DL,v.K2))} × ${n2(v.p-v.V2)} + ${U.round(1-v.q,2)} × ${fmt(Math.min(v.DH,v.K2))} × ${n2(v.p-v.V2)} − x ≥ ${n2(e.e1)} → x ≤ <b>${n2(e.maxF)}</b>.`]}
   const mA=v.pA-v.cA,mB=v.pB-v.cB;return [`Dedicated lines first: A ${v.KA} × ${mA} = ${fmt(v.KA*mA)}; B ${v.KB} × ${mB} = ${fmt(v.KB*mB)}.`,`Remaining demand: A ${v.DA-v.KA}, B ${v.DB-v.KB}. Flexible margins: A ${mA} − ${v.dc} = ${mA-v.dc}, B ${mB} − ${v.dc} = ${mB-v.dc} → serve ${mA>mB?'A':'B'} first.`,
    `Flexible line (${v.KF}): A <b>${e.fA}</b>, B <b>${e.fB}</b> → ${fmt(e.fA*(mA-v.dc)+e.fB*(mB-v.dc))}.`,`Total = <b>${fmt(e.profit)}</b> thousand € (Autocompany method).`]}}
];
// helpers used by the generators above (hoisted function declarations)
function tpSolve(v){let best=null,count=0,x=null;for(let a=0;a<=v.D[0];a+=10)for(let b=0;b<=v.D[1];b+=10){const c=v.D[0]-a,d=v.D[1]-b;if(a+b>v.C[0]||c+d>v.C[1])continue;const cost=v.c[0][0]*a+v.c[0][1]*b+v.c[1][0]*c+v.c[1][1]*d;if(best===null||cost<best){best=cost;count=1;x=[a,b]}else if(cost===best)count++}return {cost:best,count,x}}
function tocSolve(v){const order=v.P.map((_,i)=>i).sort((a,b)=>v.P[b].m/v.P[b].t[v.b]-v.P[a].m/v.P[a].t[v.b]);let left=v.Cap;const q=v.P.map(()=>0);order.forEach(i=>{const p=v.P[i];q[i]=Math.min(p.d,fl(left/p.t[v.b]));left-=q[i]*p.t[v.b]});return {order,q,profit:sum(q.map((x,i)=>x*v.P[i].m))}}
function flexRun(v){if(v.lv===0){const pr=(K,F,V,D)=>Math.min(D,K)*(v.p-V)-F,e1=v.q*pr(v.K1,v.F1,v.V1,v.DL)+(1-v.q)*pr(v.K1,v.F1,v.V1,v.DH),g2=v.q*Math.min(v.DL,v.K2)*(v.p-v.V2)+(1-v.q)*Math.min(v.DH,v.K2)*(v.p-v.V2);return {e1,e2:g2-v.F2,maxF:g2-e1}}
  const mA=v.pA-v.cA,mB=v.pB-v.cB,rA=v.DA-v.KA,rB=v.DB-v.KB;let fA,fB;if(mA>=mB){fA=Math.min(rA,v.KF);fB=Math.min(rB,v.KF-fA)}else{fB=Math.min(rB,v.KF);fA=Math.min(rA,v.KF-fB)}
  return {fA,fB,profit:v.KA*mA+v.KB*mB+fA*(mA-v.dc)+fB*(mB-v.dc)}}
const RULES=['FCFS','SPT','EDD','LPT'],RULE_TXT={FCFS:'order of arrival',SPT:'shortest processing time first',EDD:'earliest due date first',LPT:'longest processing time first'};
function ruleRun(jobs,rule){const ord=rule==='FCFS'?jobs.map((_,i)=>i):rule==='SPT'?sortBy(jobs,(a,b)=>a.pt-b.pt):rule==='EDD'?sortBy(jobs,(a,b)=>a.dd-b.dd):sortBy(jobs,(a,b)=>b.pt-a.pt);const r=seqTotals(jobs,ord);return Object.assign(r,{seq:ord.map(i=>jobs[i].n).join('-'),P:sum(jobs.map(j=>j.pt))})}

/* ---------- v2: tools ---------- */
const TOOLS=[
{kind:'plot',id:'p-o4-line',topic:'o4',title:'Line simulator: bottleneck and capacity',blurb:'Change the time and the machines of each station',
 params:[1,2,3,4].map(i=>({k:'t'+i,label:`Station ${L4[i-1]}: minutes per unit${i===4?' (0 = no station)':''}`,min:i===4?0:1,max:20,step:0.5,v:[10,15,5,0][i-1]})).concat([1,2,3,4].map(i=>({k:'m'+i,label:`Station ${L4[i-1]}: parallel machines`,min:1,max:4,step:1,v:1}))).concat([{k:'d',label:'Demand (units per hour)',min:1,max:30,step:1,v:3}]),
 x:p=>({max:p.t4>0?4:3,label:'station'}),y:p=>({max:Math.max(1,...[1,2,3,4].map(i=>p['t'+i]/p['m'+i]))*1.25,label:'min per unit'}),
 draw:p=>{const n=p.t4>0?4:3,st=[...Array(n)].map((_,i)=>({t:p['t'+(i+1)],m:p['m'+(i+1)]}));const s=barSpec(st,L4.slice(0,n).split(''));delete s.xmax;delete s.ymax;delete s.xl;delete s.yl;return s},
 readout:p=>{const n=p.t4>0?4:3,st=[...Array(n)].map((_,i)=>({t:p['t'+(i+1)],m:p['m'+(i+1)]})),c=lineCalc(st),out=Math.min(p.d,c.cap);
  return T(['Station','Min/unit','Per hour','Used'],st.map((s,i)=>[`${L4[i]} ${n2(s.t)}÷${s.m}${i===c.b?' ◀':''}`,n2(c.eff[i]),n2(60/c.eff[i]),n2(out*c.eff[i]/60*100)+'%']),[1,2,3])
   +`<p>Bottleneck <b>${L4[c.b]}</b> (◀): bottleneck time <b>${n2(c.bt)}</b> min, throughput time <b>${n2(c.tt)}</b> min, capacity <b>${n2(c.cap)}</b> units per hour. Output at this demand: <b>${n2(out)}</b> per hour; the constraint is ${p.d<c.cap?'demand (the line has spare capacity)':'the bottleneck '+L4[c.b]}. “Used” = utilization of each station.</p>`
   +'<p class="hint">Default: the Class 4 line (10, 15, 5 min). Add a machine at a station that is not the bottleneck: capacity does not move. Add one at the bottleneck: capacity rises until another station becomes the bottleneck. Mid-term Q2: A 6 min × 2, B 2, C 8 min × 3.</p>'}},
{kind:'plot',id:'p-o2-be',topic:'o2',title:'Locational break-even: three cost lines',blurb:'Fixed and variable costs of three locations, and the cheapest one by volume',
 params:[{k:'f1',label:'Cuba: fixed cost',min:0,max:200000,step:5000,v:110000},{k:'v1',label:'Cuba: variable cost',min:5,max:120,step:5,v:25},{k:'f2',label:'US: fixed cost',min:0,max:200000,step:5000,v:30000},{k:'v2',label:'US: variable cost',min:5,max:120,step:5,v:75},{k:'f3',label:'Italy: fixed cost',min:0,max:200000,step:5000,v:60000},{k:'v3',label:'Italy: variable cost',min:5,max:120,step:5,v:45},{k:'V',label:'Volume (units)',min:0,max:5000,step:100,v:2000}],
 x:{max:5000,label:'units per year'},y:p=>({max:Math.max(p.f1+p.v1*5000,p.f2+p.v2*5000,p.f3+p.v3*5000)*0.75,label:'€'}),
 draw:p=>{const L=[{f:p.f1,v:p.v1},{f:p.f2,v:p.v2},{f:p.f3,v:p.v3}],e=envelope(L,5000),C=['--ok','--bad','--ledger'],N=['Cuba','US','Italy'];
  return {curves:L.map((l,i)=>({f:x=>l.f+l.v*x,c:C[i],l:N[i],lx:4000+i*300})),points:e.slice(0,-1).map(s=>({x:s.to,y:L[s.i].f+L[s.i].v*s.to})),vx:[{x:p.V,l:'volume',c:'--muted',dash:true}]}},
 readout:p=>{const L=[{f:p.f1,v:p.v1},{f:p.f2,v:p.v2},{f:p.f3,v:p.v3}],N=['Cuba','US','Italy'],e=envelope(L,1e7),c=L.map(l=>l.f+l.v*p.V);
  const dom=[0,1,2].filter(i=>!e.some(s=>s.i===i));
  return T(['Cheapest location','From','To'],e.map(s=>[N[s.i],fmt(Math.round(s.from)),s.to>=1e7?'and above':fmt(Math.round(s.to))]),[1,2])+T(['At the chosen volume','Total cost'],L.map((l,i)=>[N[i]+(c[i]===Math.min(...c)?' ✓':''),fmt(c[i])]),[1])
   +`<p class="hint">${dom.length?`${dom.map(i=>N[i]).join(' and ')} never ${dom.length>1?'are':'is'} the cheapest. `:''}Defaults: the in-class example (US up to 1 000 units, Italy to 2 500, Cuba above). Raise both costs of one location above another’s: it is never optimal (Paris in the mid-term).</p>`}},
{kind:'plot',id:'p-o3-lp',topic:'o3',title:'Graphical LP: the T-shirt problem',blurb:'Move the profits and the limits: corners, iso-profit line, optimum',
 params:[{k:'c1',label:'Profit per white T-shirt (x)',min:1,max:20,step:1,v:5},{k:'c2',label:'Profit per blue T-shirt (y)',min:1,max:20,step:1,v:8},{k:'H',label:'Hours available (x + 2y ≤ H)',min:40,max:300,step:10,v:160},{k:'A',label:'Maximum white (x ≤)',min:10,max:200,step:10,v:100},{k:'B',label:'Maximum blue (y ≤)',min:10,max:120,step:10,v:50}],
 x:{max:200,label:'x white'},y:{max:130,label:'y blue'},
 draw:p=>{const P=region([[1,2,p.H],[1,0,p.A],[0,1,p.B]],400,400),z=P.map(c=>p.c1*c[0]+p.c2*c[1]),m=z.indexOf(Math.max(...z)),zb=z[m];
  return {areas:[{pts:P,c:'--ok',l:'feasible'}],curves:[{f:x=>(p.H-x)/2,c:'--ledger',l:'x + 2y = H',lx:Math.min(190,p.H*0.8)},{f:x=>(zb-p.c1*x)/p.c2,c:'--bad',dash:true,l:'best iso-profit',lx:Math.min(180,P[m][0]+20)}],
   lines:[{x1:0,y1:p.B,x2:200,y2:p.B,c:'--muted',dash:true,w:1.2}],vx:[{x:p.A,c:'--muted',dash:true}],points:P.map((c,i)=>({x:c[0],y:c[1],l:i===m?'★':'',c:i===m?'--bad':'--ink'}))}},
 readout:p=>{const P=region([[1,2,p.H],[1,0,p.A],[0,1,p.B]],400,400),z=P.map(c=>p.c1*c[0]+p.c2*c[1]),m=z.indexOf(Math.max(...z)),ties=z.filter(x=>Math.abs(x-z[m])<1e-6).length;
  return T(['Corner (x, y)','Profit '+p.c1+'x + '+p.c2+'y'],P.map((c,i)=>[`(${n2(c[0])}, ${n2(c[1])})${i===m?' ★':''}`,n2(z[i])]),[1])+`<p>Optimum: <b>x = ${n2(P[m][0])}, y = ${n2(P[m][1])}</b>, profit <b>${n2(z[m])}</b>.${ties>1?' Several corners tie: the whole edge between them is optimal.':''}</p><p class="hint">Default: the course T-shirt example (100, 30, €740). Change the profit ratio: the iso-profit line tilts and the optimum jumps to another corner, never inside the region.</p>`}},
{kind:'plot',id:'p-o6-eoq',topic:'o6',title:'EOQ: ordering, holding and total cost',blurb:'Move D, S, H and your order size Q',
 params:[{k:'D',label:'Annual demand D',min:100,max:10000,step:100,v:1200},{k:'S',label:'Ordering cost S (€ per order)',min:5,max:300,step:5,v:80},{k:'H',label:'Holding cost H (€ per unit per year)',min:0.5,max:20,step:0.5,v:2},{k:'Q',label:'Your order quantity Q',min:10,max:3000,step:10,v:100}],
 x:p=>({max:Math.max(p.Q,3*Math.sqrt(2*p.S*p.D/p.H))*1.1,label:'Q'}),y:p=>({max:3*Math.sqrt(2*p.S*p.D*p.H),label:'€ per year'}),
 draw:p=>{const Qs=Math.sqrt(2*p.S*p.D/p.H),xm=Math.max(p.Q,3*Qs)*1.1,lo=xm/80;return {curves:[{f:x=>p.S*p.D/x,c:'--ledger',l:'ordering',from:lo},{f:x=>p.H*x/2,c:'--warn',l:'holding'},{f:x=>p.S*p.D/x+p.H*x/2,c:'--bad',l:'total',from:lo}],
  marks:[{x:Qs,y:Math.sqrt(2*p.S*p.D*p.H),lx:'EOQ'}],points:[{x:p.Q,y:p.S*p.D/p.Q+p.H*p.Q/2,l:'your Q',c:'--ink'}]}},
 readout:p=>{const Qs=Math.sqrt(2*p.S*p.D/p.H),cq=p.S*p.D/p.Q+p.H*p.Q/2,ce=Math.sqrt(2*p.S*p.D*p.H);
  return T(['','Your Q','EOQ'],[['Order quantity',fmt(p.Q),n2(Qs)],['Orders per year',n2(p.D/p.Q),n2(p.D/Qs)],['Ordering cost',n2(p.S*p.D/p.Q),n2(ce/2)],['Holding cost',n2(p.H*p.Q/2),n2(ce/2)],['Total (without P·D)',n2(cq),n2(ce)]],[1,2])
   +`<p>Extra cost of your Q: <b>${n2(cq-ce)}</b> per year. ${p.H*p.Q/2<p.S*p.D/p.Q?'Holding &lt; ordering: increase Q.':'Holding &gt; ordering: decrease Q.'}</p><p class="hint">Default: the watch case (EOQ ≈ 310). Multiply S by 4: the EOQ only doubles (√).</p>`}},
{kind:'plot',id:'p-o9-bullwhip',topic:'o9',title:'Bullwhip effect simulator',blurb:'A small change in consumer demand, amplified stage by stage',
 params:[{k:'d1',label:'New consumer demand (from 4 per week)',min:2,max:12,step:1,v:8},{k:'L',label:'Lead time (weeks)',min:0,max:4,step:1,v:2},{k:'a',label:'Forecast reaction (smoothing)',min:0.1,max:0.9,step:0.1,v:0.3},{k:'share',label:'Share consumer demand with all stages (0 = no, 1 = yes)',min:0,max:1,step:1,v:0}],
 x:{max:29,label:'week'},y:p=>({max:bwSpec({d0:4,d1:p.d1,w0:4,L:p.L,a:p.a,share:!!p.share},30).spec.ymax,label:'units ordered'}),
 draw:p=>{const s=bwSpec({d0:4,d1:p.d1,w0:4,L:p.L,a:p.a,share:!!p.share},30).spec;delete s.xmax;delete s.ymax;delete s.xl;delete s.yl;return s},
 readout:p=>{const s=bullwhip({weeks:30,d0:4,d1:p.d1,w0:4,L:p.L,a:p.a,share:!!p.share});
  return T(['Stage','Highest order','Lowest order','Swing'],s.map((x,k)=>[BW_NAMES[k],n2(Math.max(...x)),n2(Math.min(...x)),n2(Math.max(...x)-Math.min(...x))]),[1,2,3])
   +`<p class="hint">${OUT} a simple ordering model, not the beer game itself. Each stage forecasts the orders it receives (smoothing) and orders up to (lead time + 1) × forecast. Longer lead times and nervous forecasts widen the swings; sharing consumer demand (1) shrinks them, as the course says.</p>`}},
{kind:'tree',id:'tr-o-method',topic:'o1',title:'Which OM method for this exam question?',blurb:'Recognize the method from the data given (cases from the mid-term and the practice exam)',start:'q1',
 nodes:{q1:{q:'What does the question ask you to decide or compute?',o:[{l:'Where to locate a facility',to:'q2'},{l:'How much of each product to make, or how much to ship on each route',to:'q3'},{l:'What limits a line’s output, how fast it produces',to:'r_line'},{l:'How much to order and how often',to:'r_eoq'},{l:'Who does which job, or in which order jobs are done',to:'q4'},{l:'Whether to pay for extra or flexible capacity',to:'r_flex'},{l:'How efficiently inputs become outputs',to:'r_prod'}]},
  q2:{q:'Which data do you have?',o:[{l:'Weights and scores of qualitative factors',to:'r_rating'},{l:'Fixed and variable costs of each location',to:'r_be'},{l:'Coordinates and volumes of markets',to:'r_cog'}]},
  q3:{q:'What does the problem look like?',o:[{l:'Products sharing machines with limited minutes, demand per product',to:'q5'},{l:'Sources with capacities, destinations with demands, cost per unit shipped',to:'r_tp'},{l:'A general objective and constraints in two variables',to:'r_lp'}]},
  q5:{q:'How many resources are overloaded by total demand?',o:[{l:'One (a single bottleneck)',to:'r_toc',why:'TOC ranks products on the single bottleneck.'},{l:'Several',to:'r_opt',why:'The TOC ranking may then miss the best mix.'}]},
  q4:{q:'Which situation?',o:[{l:'Each worker gets exactly one job; a cost, time or margin table',to:'r_hung'},{l:'One machine, jobs with processing times and due dates',to:'r_rules'}]},
  r_rating:{end:'Factor rating: Σ weight × score, highest total wins',why:'Subjective; ignores costs.'},r_be:{end:'Locational break-even analysis: crossovers FC1 + VC1·x = FC2 + VC2·x',why:'A location with higher FC and VC is never optimal.'},
  r_cog:{end:'Center of gravity: x = Σxi·Qi/ΣQi, y = Σyi·Qi/ΣQi',why:'The point may be infeasible.'},r_tp:{end:'Transportation model: min Σcij·xij, capacity ≤, demand =; check supply ≥ demand',why:'Mid-term Q5 was infeasible (250 < 300).'},
  r_lp:{end:'Optimization model; with two variables, corner points of the feasible region',why:'Decision variables, objective, constraints, non-negativity.'},r_toc:{end:'TOC: bottleneck, margin per bottleneck minute, fill in order, profit',why:'Practice exam Q4, mid-term Q6.'},
  r_opt:{end:'Optimization model solved with Solver (TOC as a first approximation)',why:'Little Italia: TOC 2 320, a better mix 2 340.'},r_line:{end:'Bottleneck (largest effective time), throughput time (Σ times), capacity = 60 / bottleneck time',why:'Parallel machines divide a station’s time.'},
  r_eoq:{end:'EOQ = √(2SD/H); N = D/Q; T = days/N; ordering cost = holding cost',why:'Practice exam Q1.'},r_hung:{end:'Assignment (Hungarian) method; maximization via opportunity losses',why:'Typesetters, teachers.'},
  r_rules:{end:'Priority rules FCFS, SPT, EDD, LPT with flow time and lateness',why:'Practice exam Q3.'},r_flex:{end:'Expected profit of each option; the maximum price of flexibility equalizes them',why:'Brewery, Autocompany.'},
  r_prod:{end:'Labour and multifactor productivity (with units)',why:'Mid-term Q3 bakery.'}},
 cases:[{text:'Mid-term Q1: Lille, Paris and Lyon with fixed costs and variable costs per unit.',path:{q1:0,q2:1}},{text:'Practice exam Q1: average inventory 50 units, holding cost €5, ordering cost €10.',path:{q1:3}},
  {text:'Practice exam Q3: five jobs with processing days and due dates; apply EDD and LPT.',path:{q1:4,q4:1}},{text:'Practice exam Q4: four products on four machines of 1 000 minutes; only machine 2 is overloaded.',path:{q1:1,q3:0,q5:0}},
  {text:'Mid-term Q5: two plants and two markets with unit shipping costs.',path:{q1:1,q3:1}},{text:'Mid-term Q3: loaves per labour hour and per €.',path:{q1:6}},{text:'Practice exam Q7: machines of 6, 8 and 2 minutes per unit.',path:{q1:2}},
  {text:'Brewery: fixed or flexible plant with two demand scenarios.',path:{q1:5}},{text:'Typesetters A, B, C and jobs R-34, S-66, T-50 with a cost table.',path:{q1:4,q4:0}},{text:'Paris, Beijing and Berlin with coordinates and volumes.',path:{q1:0,q2:2}},
  {text:'Little Italia: kitchen and oven both exceed 480 minutes.',path:{q1:1,q3:0,q5:1}},{text:'Smoothies: max 3x + 4y with blender and fruit limits.',path:{q1:1,q3:2}},{text:'Germany vs China: weights 60% and 40%, scores 1 to 4.',path:{q1:0,q2:0}}]},
{kind:'tree',id:'tr-o4-constraint',topic:'o4',title:'What limits the output?',blurb:'Demand, supplier, one bottleneck or several',start:'q1',
 nodes:{q1:{q:'Is demand below what every resource and the supplier can deliver?',o:[{l:'Yes',to:'r1',why:'Then nothing inside limits sales.'},{l:'No',to:'q2'}]},
  q2:{q:'Is the shortage on the supplier side (materials delivered)?',o:[{l:'Yes',to:'r2'},{l:'No, inside the plant',to:'q3'}]},
  q3:{q:'How many stations or resources cannot handle the demand?',o:[{l:'One',to:'r3'},{l:'Several',to:'r4'}]},
  r1:{end:'Market (demand) constraint: utilization below 100%; sell more, lower the price, produce for others',why:'At-home exercise 1A: capacity 120 &gt; demand 100.'},
  r2:{end:'External supply constraint: more deliveries or another supplier',why:'At-home exercise 1C: 75 units a week.'},
  r3:{end:'Internal bottleneck: improve it first; capacity elsewhere is useless',why:'At-home exercise 7: a machine at A adds nothing while B limits the line.'},
  r4:{end:'Several constraints: solve the most severe first, then re-check; better use an optimization model',why:'Little Italia: kitchen, then oven.'}},
 cases:[{text:'Weekly demand 100; 8 h × 5 days at 20 min per unit (120 units).',path:{q1:0}},{text:'Weekly demand 100; 8 h × 5 days at 30 min per unit (80 units).',path:{q1:1,q2:1,q3:0}},{text:'Weekly demand 100; the supplier gives 15 units a day.',path:{q1:1,q2:0}},
  {text:'A 6, B 10, C 5 min per unit; the market wants more than 48 units a day.',path:{q1:1,q2:1,q3:0}},{text:'Little Italia: kitchen needs 640 min, oven 600 min, 480 available.',path:{q1:1,q2:1,q3:1}}]}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-o1-sort',topic:'o1',type:'sort',src:'course',title:'Pure goods or pure services?',q:'Sort each characteristic (Class 1 table).',cats:['Pure goods','Pure services'],
 items:[['Tangible','Pure goods'],['Can be stored and transported','Pure goods'],['Production precedes consumption','Pure goods'],['Low customer contact','Pure goods'],['Quality is evident','Pure goods'],['More standardized','Pure goods'],['Intangible','Pure services'],['Produced and consumed at the same time','Pure services'],['High customer contact','Pure services'],['Quality harder to judge','Pure services'],['Customized, hard to automate','Pure services']],pick:8},
{id:'x-o4-sortconstr',topic:'o4',type:'sort',src:'course',title:'Internal or external constraint?',q:'Sort each constraint (Class 4).',cats:['Internal constraint','External constraint'],
 items:[['Not enough machine time','Internal constraint'],['Lack of skilled people','Internal constraint'],['Policy: no overtime','Internal constraint'],['Equipment capacity','Internal constraint'],['Insufficient materials delivered','External constraint','supply constraint'],['Delayed materials','External constraint','supply constraint'],['Low demand for the product','External constraint','market constraint']]},
{id:'x-o4-sorttime',topic:'o4',type:'sort',src:'course',title:'Throughput time or bottleneck time?',q:'At-home exercise 2 and the sandwich example: sort each statement.',cats:['Throughput time','Bottleneck time'],
 items:[['It takes 25 hours to make a Ford car from start to finish','Throughput time'],['A new Ford car rolls out every minute','Bottleneck time'],['Sum of all process times along the line','Throughput time'],['Process time of the slowest station','Bottleneck time'],['60 divided by it gives the capacity per hour','Bottleneck time'],['142.5 seconds from order to delivery of a sandwich','Throughput time'],['37.5 seconds per sandwich at wrap/deliver','Bottleneck time']]},
{id:'x-o6-sortinv',topic:'o6',type:'sort',src:'course',title:'Reasons to hold inventory, or not',q:'Class 6: sort each argument.',cats:['Reason to hold inventory','Reason not to hold inventory'],
 items:[['Protection against late or uncertain deliveries','Reason to hold inventory'],['Larger production batches, fewer setups','Reason to hold inventory'],['Shorter lead time to customers','Reason to hold inventory'],['Availability, avoiding stock-outs','Reason to hold inventory'],['Quantity discounts','Reason to hold inventory'],['Cost of invested capital','Reason not to hold inventory'],['Storage space','Reason not to hold inventory'],['Perishability','Reason not to hold inventory']]},
{id:'x-o8-sortflex',topic:'o8',type:'sort',src:'course',title:'Which type of flexibility?',q:'Class 8: sort each example.',cats:['Product design','Supply chain','Volume','Mix','Product'],
 items:[['Modular components shared by several models','Product design'],['Nearshoring from China to Morocco','Supply chain'],['Switching to a faster transport mode','Supply chain'],['An extra shift during the peak season','Volume'],['Producing 20% less next month','Volume'],['Changing the sequence of models on the line','Mix'],['Launching a new model on the same line','Product']]},
{id:'x-o9-sortbw',topic:'o9',type:'sort',src:'course',title:'Bullwhip effect: up or down?',q:'Beer game debrief: does each factor increase or reduce the bullwhip effect?',cats:['Increases it','Reduces it'],
 items:[['More partners in the chain','Increases it'],['More demand uncertainty','Increases it'],['Longer lead times','Increases it'],['Panic ordering','Increases it'],['Big promotions','Increases it'],['Information sharing','Reduces it'],['Collaboration through information systems','Reduces it'],['Better forecasting','Reduces it'],['Shorter lead times','Reduces it'],['Fewer stages, direct e-commerce (Dell)','Reduces it']],pick:8}
);
QUIZ.push(
Q('q62','o1','practice','Labour productivity rises from 80 to 180 loaves per hour, but multifactor productivity falls from 2 to 1.8 loaves per €. Why?',['The machine’s cost exceeds the labour cost it saves','Fewer loaves are produced','Flour became cheaper','Wages fell'],'Bakery, mid-term Q3: the €700 rent is above the €500 break-even rent.'),
Q('q63','o2','practice','Two locations: A has lower fixed AND lower variable costs than B. B is optimal…',['never','for small volumes','for large volumes','at the crossover only'],'A’s line is below B’s at every volume.'),
Q('q64','o2','practice','In the center of gravity method, a market with a larger volume…',['pulls the location more strongly towards it','is ignored','must be the location','reduces the weights of the others to zero'],'It is a volume-weighted average.'),
Q('q65','o3','practice','In a 2-variable linear problem, the optimum is found…',['at a corner point of the feasible region','at the centre of the feasible region','where both variables are equal','outside the feasible region'],'The iso-profit line touches the region last at a corner.'),
Q('q66','o3','practice','Transportation problem: supply 300, demand 250, demand constraints are equalities. Solver…',['finds a solution; 50 units of capacity stay unused','finds no feasible solution','must ship 300 units','needs binary variables'],'Capacity constraints are ≤: supply above demand is fine.'),
Q('q67','o4','practice','“A new car rolls out every minute.” This is the…',['bottleneck time','throughput time','utilization','lead time'],'Throughput time is the time for one car from start to finish (25 hours).'),
Q('q68','o4','practice','Line A 6, B 10, C 5 min per unit. A second machine is added at B. New capacity per hour?',['10 units (A becomes the bottleneck)','12 units','6 units','20 units'],'B: 10/2 = 5 min; A (6 min) is now the slowest: 60/6 = 10.'),
Q('q69','o4','practice','Demand 100 units a week; capacity 120 units a week. The constraint is…',['demand (market)','capacity','the supplier','the bottleneck machine'],'At-home exercise 1A: utilization below 100%.'),
Q('q70','o4','practice','Production rates are given (A 4 units/hour, margin 10). Margin per hour of A on that machine?',['40','2.5','10','14'],'Time per unit = 1/4 hour → 10 ÷ 1/4 = 40 (at-home exercise 3).'),
Q('q71','o4','practice','With two overloaded resources (Little Italia), the TOC mix…',['may not be optimal: an optimization model can do better','is always optimal','cannot be computed','uses the cheapest product first'],'TOC 2 320 vs 2 340 for another feasible mix.'),
Q('q72','o6','practice','Total holding cost is €10 and total ordering cost is €20. To reduce total cost, Q should…',['increase','decrease','stay the same','be set to zero'],'At the EOQ both are equal: raise Q to lower ordering and raise holding (at-home exercise 4).'),
Q('q73','o6','practice','Monthly demand 750, holding cost given per year. Before using the EOQ formula you must…',['express D per year (750 × 12 = 9 000)','use D = 750 with the annual H','divide S by 12','nothing: the formula works with any units'],'D, S and H must use the same time base.'),
Q('q74','o6','practice','Under the EOQ, average inventory is 800 and D = 24 000, S = 150. The annual ordering cost is…',['€2 250','€1 200','€4 500','€150'],'Q* = 1 600; 15 orders × 150 = 2 250 (= holding cost).'),
Q('q75','o7','practice','Why can you subtract a constant from a whole row in the assignment method?',['Every assignment uses one cell per row, so all assignments change by the same amount','Because rows are independent jobs','To make the table symmetric','Because the largest number becomes zero'],'The ranking of assignments does not change.'),
Q('q76','o7','practice','After row and column reduction you need 2 lines to cover the zeros of a 3 × 3 table. Next step?',['Subtract the smallest uncovered number from uncovered cells and add it at intersections','Assign along the zeros','Restart with column reduction','Add a dummy column'],'Fewer lines than rows → adjust (step 3).'),
Q('q77','o7','practice','Total flow time 67 days for 30 days of processing. Utilization?',['44.8%','2.23','67%','30%'],'30 / 67 = 0.448; 67 / 30 = 2.23 is the average number of jobs in the system.'),
Q('q78','o7','practice','Slides example: which rule gave the lowest total lateness (6 days)?',['EDD','SPT','FCFS','LPT'],'FCFS 11, SPT 9, EDD 6, LPT 48.'),
Q('q79','o8','practice','When is a flexible plant worth its extra fixed cost?',['When its higher expected profit covers the extra costs (enough probability of high demand)','Always','Never','Only when demand is stable'],'Compare expected profits; the maximum price of flexibility equalizes them.'),
Q('q80','o8','practice','Autocompany: the flexible line first serves…',['the product with the higher margin on the flexible line','the product with the higher demand','the product with the lower margin','both equally'],'A: 1 400 per car on the flexible line vs 400 for B.'),
Q('q81','o9','practice','In the beer game, why do upstream stages order far more than consumers buy?',['Each stage reacts to its customer’s orders and adds stock to cover the lead time','Consumers buy more each week','The factory is slow on purpose','Backlog is free'],'Orders are amplified stage after stage.')
);
CARDS.push(
C('c34','o1','Marketing vs operations','cost cuts fall straight into profit: −30% cost beat +40% sales (Hello smartphones)'),
C('c35','o2','Crossover of two locations','FC1 + VC1·x = FC2 + VC2·x → x = ΔFC / ΔVC'),
C('c36','o3','Graphical method','draw constraints → feasible region → corner points → best objective value'),
C('c37','o4','Effective time','time per unit ÷ parallel machines (bottleneck uses it, throughput time does not)'),
C('c38','o4','Throughput vs bottleneck time','Ford: 25 h start to finish (throughput) · one car per minute (bottleneck)'),
C('c39','o4','Identify the constraint','compare demand, capacity and supply in the same unit: the smallest limits sales'),
C('c40','o4','Several bottlenecks','solve the most severe first, then re-check; TOC may not be optimal → optimization'),
C('c41','o6','H as a % of price','H = % × P (Garden Variety: 30% × $2 = $0.60); put D per year'),
C('c42','o6','EOQ from average inventory','Q* = 2 × average inventory; H = 2SD/Q*²'),
C('c43','o6','EOQ is too small or too large?','holding < ordering → increase Q · holding > ordering → decrease Q'),
C('c44','o7','Hungarian method, step 3','smallest uncovered number: subtract from uncovered, add at intersections, back to step 2'),
C('c45','o7','Scheduling measures','utilization = ΣPT/Σflow · jobs in system = Σflow/ΣPT · average completion = Σflow/n'),
C('c46','o7','Slides five jobs','FCFS 77/11 · SPT 65/9 · EDD 68/6 · LPT 103/48 (flow/lateness)'),
C('c47','o8','Value of flexibility method','sales = min(demand, capacity) → profit per scenario → expected profit → compare'),
C('c48','o8','Autocompany result','dedicated lines first, flexible line to A (margin 1 400) then B → €234 M'),
C('c49','o9','Why the bullwhip forms','each stage sees only its customer’s orders and adds lead-time stock → orders amplified upstream')
);

/* ---------- mock exams ---------- */
const MOCKS=[
{id:'m1',title:'Mock exam 1 · practice exam December 2024',exam:'final',scope:'Classes 1–9',duration:90,total:20,calculator:'Calculator allowed, closed book',
 summary:'The practice exam posted on the course platform (7 questions, 20 points). Answers computed by the site: the posted version has no solutions.',
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
  tagline:'Bachelor 2 · Final exam (60%): Classes 1–9 + tutorial',
  status:'Classes 1–9 done · layered sheets, 14 generators, 7 tools · 3 mock exams',
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
  glossary:GLOSS,
  overview:{
    eyebrow:'Operations Management',
    title:'Classes 1–9 and the beer game, on one site',
    lede:'Built from the course material of OPERATIONS MANAGEMENT: the class slides, the at-home and in-class exercises with their solutions, the newspaper articles, the beer game, the December 2024 practice exam and the corrected mid-term. Read a class sheet, then practise with exercises that regenerate their numbers.',
    blurbs:{cheat:'All formulas and rules on one page',exercises:'Every method with official exercises and endless new numbers',cards:'Definitions, formulas and company examples',mocks:'90 minutes · 20 points · the 2024 practice exam and two new mocks'},
    html:`<h3>The final exam</h3>
  <ul><li><b>Final exam: 60%, multiple choice + open questions (exercises), 90 minutes, closed book, bring a calculator.</b> Content: class slides, exercises, newspaper articles, online material and the game. Mid-term 20% (first four classes, held on 19/10/2026), continuous assessment 10%, tutorial (beer game) 10%.</li>
  <li>The December 2024 practice exam (7 questions on 20 points) and the mid-term with solutions show the style: calculations with units, short explanations, a company example from the articles.</li></ul>
  <h3>The three mock exams</h3>
  <ul><li><b>Mock 1</b> reproduces the December 2024 practice exam; its answers are <b>computed by the site</b> (the posted file has no solutions). <b>Mocks 2 and 3</b> are new, built like the mid-term (MCQs and exercises on all classes).</li></ul>
  <h3>How to use it before the exam</h3>
  <ol><li>Read a class sheet: the <b>Essential</b> box first, then open “Understand”, the course examples and the exam trap; answer the “Your turn” question and mark the notion ✓ Got it or ↻ To review.</li>
  <li><b>Generators</b>: one per calculation method, new numbers every time, solution step by step. A generator is mastered after 3 right answers.</li>
  <li><b>Tools</b>: the line simulator, break-even lines, graphical LP, EOQ curves and bullwhip simulator show why the rules work; the decision tree “Which OM method?” trains you to recognize the method from the data of a question.</li>
  <li>Quiz, exercises (course exercises with official answers), flashcards, then the mock exams with the timer.</li></ol>
  <h3>Sources and limits</h3>
  <ul><li>Official solutions used: at-home exercises of Classes 1–4, 6 and Scheduling, TOC and EOQ in-class solutions, flexibility solutions, mid-term (handwritten). Computed by the site and flagged: practice exam, TOC three-product ending, extra EOQ exercise, Mock 3 transportation, Class 5 example 2, the ratios of scheduling exercise 1.</li>
  <li>The course does not teach forecasting, waiting lines, reorder points, safety stock (only named), ABC analysis, Gantt charts, Johnson’s rule or the five focusing steps of TOC: they are not on this site.</li>
  <li>The graphical LP corners, the 2 × 2 transportation by hand and the bullwhip simulator are marked <b>Outside the slides</b>: the course solves these with Solver and the beer game.</li>
  <li>Not used: the three online practice tests on the course platform (opening them would create attempts on your account), the Facility Location Game files and Excel solutions (Excel cannot run in the site), the supporting videos.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  modules:[
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'One generator per calculation method of Classes 1–9, each with levels and a step-by-step solution: productivity, marketing vs operations, factor rating, break-even, center of gravity, graphical LP, transportation, bottleneck, constraints, TOC, EOQ, assignment method, priority rules, flexibility. Numbers are made up (outside the slides); methods are the course’s.'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'Line simulator, break-even lines, graphical LP, EOQ curves, bullwhip simulator, two decision trees',intro:'Move the sliders to see a bottleneck move, a location become cheaper, the optimum jump to another corner, the EOQ balance its costs and orders swing up the supply chain. The decision trees train you to recognize the method an exam question asks for.'}}],
  mocksNote:NOTE('<b>Where the format comes from.</b> The course information gives 90 minutes, MCQs + exercises, closed book, calculator. Mock 1 is the December 2024 practice exam; Mocks 2 and 3 follow the mid-term style.')
});
})();
