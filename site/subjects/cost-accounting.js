/* Cost Accounting (course "COST ACCOUNTING"). Final exam: Sessions 1–6.
   Built from the course material in sources/cost-accounting/ (slides with solutions, session and recommended
   exercises with solutions, review session, extra full-costing exercise, mock exam and its solution).
   Topics = Sessions 1–5; Session 6 (review) is spread over them. Ids: q… quiz, c… cards, x-s<n>-… exercises.
   Never renumber ids: progress is saved under them. */
(function(){
const {T,F,EX,TRAP,NOTE,fmt}=Rev.h;

/* ---------- topic sheets (content from the course slides and exercises) ---------- */
const SHEETS={};
SHEETS.s1=`
<div class="eyebrow">Session 1</div><h2>Introduction to management accounting, cost terms and concepts</h2>
<p class="lede">Goal: tell management from financial accounting, name a cost object, sort costs into direct / overheads and fixed / variable / mixed, find the equation of a cost from two activity levels, and classify environmental costs.</p>

<h3>1. Accounting and its users</h3>
<p><b>Accounting</b> (American Accounting Association): the process of identifying, measuring and communicating economic information to permit informed judgements and decisions by users of the information.</p>
<ul><li><b>External users</b> (shareholders, creditors, regulators, customers, society) → <b>financial accounting</b>: external reporting directed by authoritative guidelines.</li>
<li><b>Internal users</b> (managers, employees) → <b>management accounting</b>: financial <i>and</i> non-financial information to help managers reach the goals of the organisation.</li></ul>
${T(['','Financial accounting','Management accounting'],[
['<b>Regulation</b>','Compulsory: statements must comply with accounting and financial regulations','Entirely optional: whatever is useful to managers'],
['<b>Focus</b>','The whole organisation, financial information','Small parts of the organisation; financial, non-financial and qualitative information'],
['<b>Time dimension</b>','The performance of the past period','More emphasis on estimated future costs and revenues'],
['<b>Reporting interval</b>','Annually or semi-annually','More frequent intervals']])}

<h3>2. The functions of management accounting</h3>
<ol><li>Allocate costs between cost of goods sold and inventories, for internal and external profit measurement (this course).</li>
<li>Provide relevant information to help managers make better decisions (this course and Management Control).</li>
<li>Provide information for planning, control and performance measurement (Management Control).</li></ol>
<p><b>Cost accounting</b> measures and reports financial and non-financial information on the acquisition or consumption of resources. It feeds both financial and management accounting.</p>

<h3>3. Cost object</h3>
<p>A <b>cost object</b> is any activity for which a separate measurement of cost is required. Examples at D&amp;W (doors and windows):</p>
${T(['Cost object','D&amp;W illustration'],[['Product','A door'],['Service','Home delivery'],['Project','Develop eco-friendly doors and windows with better insulation'],['Customer','Doors bought by elderly people'],['Activity','Bay window installation'],['Department','Environmental, Health and Safety department']])}
${TRAP('“Which of the following could be a cost object: a product, a customer, a department?” → <b>all of them</b>.')}

<h3>4. Direct costs vs overheads</h3>
<ul><li><b>Direct costs</b> can be specifically and exclusively identified with a given cost object (raw materials, labour of workers who work on one product only). They are <b>directly traced</b> to the cost object.</li>
<li><b>Indirect costs = overheads</b> cannot: they are shared by several products or services (rent, electricity, general office expenses, plant depreciation, property taxes). They are assigned through <b>cost allocation</b>, used when the quantity of resources a cost object consumes cannot be measured directly.</li></ul>
${F('+ Direct materials\n+ Direct labour\n= Direct cost\n+ Overheads\n= Full cost')}
${EX('D&amp;W: which costs are overheads?','worked example',`<p>D&amp;W makes doors (wood) and windows (wood and glass) in the same plant.</p>
${T(['Cost','Doors','Why'],[['Glass melting machine depreciation','Direct (windows)','Used by windows only'],['Wood used to produce the doors','Direct (doors)','Traced to doors'],['Transport fees of materials for doors and windows','Overhead','Shared'],['Plant heating','Overhead','Shared'],['Wages paid to workers','<b>It depends</b>','Direct if a worker makes doors OR windows only; overhead if the same workers make both']])}`)}
${EX('D&amp;W: direct cost of doors','worked example',`<p>200 doors and 500 windows. Wood for doors 3 000; transport of materials for doors and windows 4 880; labour for “wood cutting” (doors and windows) 6 000; labour for “door assembly” 3 000; door distribution cost 150; plant depreciation 600.</p>
${F('Direct costs of doors = 3 000 (wood) + 3 000 (door assembly) + 150 (door distribution) = 6 150')}
<p>The 4 880, 6 000 and 600 are shared: they are overheads, allocated with the method of Sessions 3–4.</p>`)}

<h3>5. Cost behaviour: fixed, variable, mixed</h3>
<p>Costs are fixed or variable <b>for a given activity and a given period</b>. In the short term some costs are fixed; in the long term all costs are variable.</p>
${T(['Behaviour','Definition','Equation'],[
['<b>Variable</b>','Varies in direct proportion to activity','y = ax'],
['<b>Fixed</b>','Constant over wide ranges of activity','y = a'],
['<b>Step cost</b> (semi-fixed)','Fixed within a range of activity, then jumps by a constant amount at critical levels','y = a per step'],
['<b>Semi-variable</b>','A fixed part plus a variable part (telephone charges)','y = ax + b']])}
<div class="grid2">
<div class="panel"><h4>Variable cost: door handles at 5.5 €</h4>${T(['Doors','Per unit','Total'],[['1','5.5','5.5'],['100','5.5','550'],['500','5.5','2 750']],[0,1,2])}<p>Constant per unit, total rises.</p></div>
<div class="panel"><h4>Fixed cost: admin 1 000 €/month</h4>${T(['Doors','Total','Per unit'],[['1','1 000','1 000'],['100','1 000','10'],['500','1 000','2']],[0,1,2])}<p>Constant in total, per unit falls.</p></div></div>
<h4>Method: how to identify the behaviour of a cost (two activity levels)</h4>
${F('Same TOTAL cost at both levels?      yes → FIXED        y = a\nSame cost PER UNIT at both levels?   yes → VARIABLE     y = ax,  a = total cost 1 / units 1\nNeither                                  → MIXED        y = ax + b\n   a (variable part) = (total cost 2 − total cost 1) / (units 2 − units 1)\n   b (fixed part)    = total cost 1 − a × units 1')}
${EX('D&amp;W: cost behaviour and total cost of 2 000 doors','worked case',`
${T(['Cost (€)','1 000 doors','1 500 doors','Behaviour'],[['Direct materials','63 300','94 950','63.3 per unit both times → variable, y = 63.3x'],['Direct labour','88 200','132 300','88.2 per unit → variable, y = 88.2x'],['Administration','6 400','6 400','same total → fixed, y = 6 400'],['Leased machines (800 € for every 800 doors)','1 600','1 600','same total but <b>step</b>: 800 per block of 800 doors'],['Stores','6 000','7 500','6 then 5 per unit → mixed']],[1,2])}
${F('Stores: a = (7 500 − 6 000) / (1 500 − 1 000) = 3 per door;  b = 6 000 − 3 × 1 000 = 3 000\n→ y = 3x + 3 000\n\nLeased machines for 2 000 doors: 2 000 / 800 = 2.5 → round UP to 3 blocks → 3 × 800 = 2 400')}
${T(['Cost (€)','1 000 doors','1 500 doors','2 000 doors'],[['Direct materials','63 300','94 950','126 600'],['Direct labour','88 200','132 300','176 400'],['Administration','6 400','6 400','6 400'],['Leased machines','1 600','1 600','2 400 (new step)'],['Stores, fixed part','3 000','3 000','3 000'],['Stores, variable part','3 000','4 500','6 000'],['<b>Total cost</b>','<b>165 500</b>','<b>242 750</b>','<b>320 800</b>'],['Cost per door','165.50','161.83','160.40']],[1,2,3])}
<p>The cost per unit falls as production rises, because not all costs are variable.</p>`)}
${TRAP('A step cost: the number of steps is always rounded <b>up</b> (2 001 doors need a 3rd machine). And at the two given activity levels it looks fixed: read the description, not only the numbers.')}
${TRAP('A total cost equation only holds inside one step of every step cost. Session 1 exercise 2: “600 € for every 600 units” gives 4 steps (2 400) from 1 801 to 2 400 units, so the equation 59.8x + 23 400 holds from 1 801 units (at exactly 1 800 units only 3 steps are needed).')}

<h3>6. The four categories of costs</h3>
${T(['','Fixed','Variable'],[['<b>Direct</b>','Depreciation of equipment used for one product only (glass melting machine)','Direct materials, direct labour'],['<b>Overheads</b>','Rent of a building used for several products','Energy of machines used for several products']])}
${TRAP('Direct ≠ variable and overhead ≠ fixed: the two classifications are independent. The class also depends on the assumptions: in the Pizzeria Delicioso exercise, the transport of tomatoes or the waiters’ salary can be argued either way. <b>Always justify</b> your classification.')}

<h3>7. Environmental costs</h3>
${T(['Category','Group','What it covers','Examples from the slides'],[
['1. Environmental <b>protection</b> costs','Costs of trying to get it right','Processes and training to reduce the risk of environmental costs','Company processes to prevent pollution; staff training'],
['2. Environmental <b>appraisal</b> costs','Costs of trying to get it right','Controls or inspections: pollution within limits, procedures followed','Controls of pollution levels; inspection of workers handling hazardous waste'],
['3. Environmental <b>internal failure</b> costs','Costs of getting it wrong','Failures detected and cleaned up <b>before</b> reaching the public','Chemical spillage in the factory; illegal pollutants in on-site materials; leakage in the plant'],
['4. Environmental <b>external failure</b> costs','Costs of getting it wrong','Failures <b>not</b> detected or corrected before reaching the public','Gas cloud towards a town; radioactive waste into the sea; chemical leak polluting a river']])}
<p>Why it matters: these costs can be a large share of operating costs, and society demands environmentally friendly companies.</p>

<h3>8. What the course MCQs test</h3>
<ul><li>Definitions: direct cost (“can be economically identified with the item being costed”), fixed cost (“constant in total when production volume changes”), indirect labour (a stores assistant, not an assembly worker).</li>
<li>Production overheads vs direct costs (the ingredients of a food company are direct, not overheads).</li>
<li>Identify the semi-variable cost from total costs at two levels: compute the cost per unit at both levels.</li></ul>
`;

SHEETS.s2=`
<div class="eyebrow">Session 2</div><h2>Cost-volume-profit (CVP) analysis</h2>
<p class="lede">Goal: compute the contribution margin, the break-even point in units and in sales, the margin of safety, the volume or price for a target profit, run sensitivity scenarios and interpret the operating leverage.</p>

<h3>1. What CVP is for</h3>
<p>CVP analysis shows what happens to profit if the activity level (sales volume), the selling price or the costs change: will we make a profit? How many units to break even? To cover the fixed costs?</p>
<h4>CVP assumptions</h4>
<ul><li>Total costs and total revenues are <b>linear</b> functions of output (selling price and unit variable cost are constant).</li>
<li>Costs can be accurately split into fixed and variable elements.</li>
<li>All other variables (sales mix, efficiency, price levels, methods) stay constant.</li>
<li>The analysis applies only to the <b>relevant range</b> → a model for <b>short-term</b> decisions only.</li></ul>

<h3>2. Formulas</h3>
${T(['What','Formula'],[
['Profit','Q × (P − VCu) − FC  =  Contribution − Fixed costs'],
['Contribution (total)','Sales revenues − Variable costs'],
['Contribution margin (per unit)','P − VCu  =  Contribution / Q'],
['Break-even point (units)','FC / CM  → <b>round UP</b>'],
['Contribution margin ratio','CM / P  =  Contribution / Sales revenues'],
['Break-even point (sales €)','FC / CM ratio  =  BEP units × P'],
['Units for a target profit','(FC + target profit) / CM'],
['Price for a target profit','(target profit + FC) / Q + VCu'],
['Margin of safety (units or €)','Expected sales − BEP'],
['Margin of safety (%)','(Expected sales − BEP) / Expected sales  (all in units or all in €)'],
['Operating leverage','Total contribution / Profit'],
['% change in profit','Operating leverage × % change in sales']])}
<p><b>Interpretation of the CM:</b> within the relevant range, each additional unit sold adds CM euros to profit. At the BEP, profit = 0: sales revenues = total costs.</p>

<h3>3. D&amp;W worked examples</h3>
${EX('Doors: contribution margin and BEP','worked example',`<p>300 doors sold: sales 42 000 €, variable costs 17 940 €, fixed costs 22 000 €.</p>
${F('Selling price = 42 000 / 300 = 140\nVariable cost per unit = 17 940 / 300 = 59.8\nContribution = 42 000 − 17 940 = 24 060\nCM = 24 060 / 300 = 140 − 59.8 = 80.2 per door\nBEP = 22 000 / 80.2 = 274.31 → 275 doors')}
<p>Below 275 doors D&amp;W makes a loss. Each extra door sold earns 80.2 €.</p>`)}
${EX('Windows: the full handout','worked case',`<p>Fixed costs 20 000 € per month; price 170 €; variable cost 100 € per unit; relevant range 100–1 000 units; expected sales 68 000 € (400 windows).</p>
${F('1) CM = 170 − 100 = 70;  BEP = 20 000 / 70 = 285.71 → 286 windows')}
${T(['','285 windows','286 windows'],[['Sales (× 170)','48 450','48 620'],['− Variable costs (× 100)','28 500','28 600'],['= Contribution','19 950','20 020'],['− Fixed costs','20 000','20 000'],['<b>Profit / (loss)</b>','<b>(50)</b>','<b>20</b>']],[1,2])}
${F('2) Profit for 400 windows = 400 × 70 − 20 000 = 28 000 − 20 000 = 8 000\n3) Price for a 5 000 profit with 400 windows = (5 000 + 20 000) / 400 + 100 = 62.5 + 100 = 162.5\n4) Extra 5 000 of TV advertising, target profit 5 000:\n   units = (5 000 + 20 000 + 5 000) / 70 = 428.57 → 429 → 429 − 400 = 29 more windows\n5) CM ratio = 70 / 170 = 41% (41.18%)\n6) BEP in sales = 20 000 / 41% = 48 780.49 (slide)\n7) Margin of safety = (68 000 − 48 780.49) / 68 000 = 28.26% (slide)')}
${NOTE('<b>Check against the slide:</b> the slide rounds the CM ratio to 41% before dividing. With the exact ratio (70/170 = 41.18%), BEP in sales = 20 000 / 0.4118 = <b>48 571.43</b> (= 285.71 × 170) and the margin of safety = (68 000 − 48 571.43) / 68 000 = <b>28.57%</b> (= (400 − 285.71) / 400). Keep at least four decimals in the ratio. The exercises on this site accept both.')}`)}

<h3>4. Sensitivity analysis (“what if?”)</h3>
${T(['D&amp;W windows','A: no change','B: price 150','C: VCu + 10','D: FC + 2 000'],[['Selling price','170','150','170','170'],['Variable cost per unit','100','100','110','100'],['Contribution margin','70','50','60','70'],['Fixed costs','20 000','20 000','20 000','22 000'],['<b>BEP (units)</b>','<b>286</b>','<b>400</b>','<b>334</b>','<b>315</b>']],[1,2,3,4])}
${T(['Change','Contribution margin','Break-even point'],[['Selling price ↑','↑','↓'],['Selling price ↓','↓','↑'],['Variable cost per unit ↑','↓','↑'],['Variable cost per unit ↓','↑','↓'],['Fixed costs ↑','no effect','↑'],['Fixed costs ↓','no effect','↓']])}

<h3>5. Operating leverage</h3>
<p>Operating leverage measures the <b>sensitivity of profit to a change in sales</b>. The higher it is, the more upside when sales rise and the more risk when they fall. A high share of fixed costs in the cost structure gives a high operating leverage.</p>
${EX('D&amp;W doors vs windows','worked case',`
${T(['','Doors A','Windows A','Doors B (+10%)','Windows B (+10%)','Doors C (−10%)','Windows C (−10%)'],[
['Units','320','400','352','440','288','360'],
['Sales','44 800','68 000','49 280','74 800','40 320','61 200'],
['Variable costs','19 136','40 000','21 050','44 000','17 222','36 000'],
['Contribution','25 664','28 000','28 230','30 800','23 098','25 200'],
['Fixed costs','22 000','20 000','22 000','20 000','22 000','20 000'],
['Profit','3 664','8 000','6 230','10 800','1 098','5 200'],
['<b>Operating leverage</b>','<b>7.00</b>','<b>3.50</b>','<b>4.53</b>','<b>2.85</b>','<b>21.04</b>','<b>4.85</b>']],[1,2,3,4,5,6])}
<p>Doors: OL = 25 664 / 3 664 = 7 → +10% sales gives +70% profit (3 664 → 6 230). Windows: OL 3.5 → +35% (8 000 → 10 800). Fixed costs are 53.48% of the doors’ costs (22 000 / 41 136) but 33.33% for windows (20 000 / 60 000): <b>doors are riskier</b>.</p>
<p>The OL is not constant: it is highest close to the BEP (doors at −10%: 288 doors, BEP 275 → OL 21.04) and falls as sales move away from it.</p>`)}
${TRAP('Operating leverage uses the <b>total</b> contribution, not the contribution margin per unit.')}
${TRAP('Round the BEP and the units for a target profit <b>up</b>: 274.31 doors means 275 (with 274 you still make a loss). The margin of safety %: do not mix units and euros.')}
${TRAP('A sales commission in % of the price is a <b>variable</b> cost per unit: Drury exercise, CM = 24 − 8.60 − 5% × 24 = 14.20; BEP = (650 000 + 230 400) / 14.20 = 62 000 units.')}
`;

SHEETS.s3=`
<div class="eyebrow">Session 3</div><h2>Cost assignment: the full costing method (1/2)</h2>
<p class="lede">Goal: compute a blanket overhead rate and department cost driver rates, describe the value chain and the full costing flow, and value inventories with the weighted average cost.</p>

<h3>1. Cost drivers and levels of sophistication</h3>
<p>Overheads are assigned to cost objects according to their consumption of a <b>cost driver</b> (units produced, kg of material, labour hours, machine hours…).</p>
${F('Cost driver rate = Overheads (€) / Number of cost drivers')}
<ul><li><b>Blanket overhead rate</b>: one single cost driver and one rate for the whole organisation.</li>
<li><b>Department cost driver rates</b> (traditional full costing): overheads are split into departments, each with its own driver and rate.</li>
<li><b>Activity-based costing</b>: the most sophisticated level, named in the slides (Drury) and in a recommended video, not developed in the course.</li></ul>
${EX('D&amp;W blanket rate','worked example',`${F('Total overheads 24 780; cost driver: products sold = 1 000\nBlanket rate = 24 780 / 1 000 = 24.78 per product\nDoors: 100 × 24.78 = 2 478     Windows: 900 × 24.78 = 22 302')}`)}

<h3>2. The value chain and inventories</h3>
<p>The <b>value chain</b> is the sequence of business activities that add value to products from the customer’s point of view.</p>
<ul><li><b>Primary activities</b>: the stages a product goes through: purchasing, production, distribution.</li>
<li><b>Support activities</b>: administration, accounting, IT… along the whole process.</li></ul>
<p>D&amp;W: wood → cutting → aggregating → <i>aggregated wood</i> → splitting → <i>wood for doors</i> → door assembly → doors; <i>wood for windows</i> + glass → melting → moulding → <i>moulded glass</i> → window assembly → windows; then distribution. Inventories: <b>materials</b> (wood, glass) after purchasing; <b>finished goods</b> (doors, windows) before distribution.</p>
${F('PURCHASING    Direct materials + direct purchasing costs + purchasing overheads = materials BOUGHT, purchase cost\nMATERIALS INVENTORY   opening + in (bought) − out (consumed) = ending\nPRODUCTION    materials CONSUMED (purchase cost) + direct production costs + production overheads = goods MADE, production cost\nFINISHED GOODS INVENTORY   opening + in (made) − out (sold) = ending\nDISTRIBUTION  goods SOLD (production cost) + direct distribution costs + distribution overheads = FULL COST of goods sold')}

<h3>3. Departments and the four steps</h3>
<ul><li><b>Department centres</b>: parts of the company with a homogeneous, measurable activity, to which overheads are distributed (specific to each company).</li>
<li><b>Operational departments</b> (purchasing, production, distribution): their overheads go to cost objects.</li>
<li><b>Service departments</b> (administration): their overheads are re-assigned to operational departments.</li></ul>
${T(['Stage','Step','What happens'],[['Apportionment (not developed in this course)','1','Assign all overheads to operational and service departments'],['','2','Re-assign service department overheads to operational departments → service departments = 0'],['Absorption','3','Cost driver rate per operational department = department overheads / department number of cost drivers'],['','4','Cost of each cost object (and of inventories!) = direct costs + number of drivers it uses × rate']])}
<p>In exercises the overheads are always given <b>after</b> re-assignment: you start at step 3.</p>
${EX('D&amp;W overhead analysis table','worked case',`<p>Purchasing: 2 000 kg of wood and 5 000 kg of glass bought. Cutting: 200 machine hours. Aggregating: 200 labour hours. Splitting: 100 labour hours. Distribution: 100 doors + 900 windows sold.</p>
${T(['','Purchasing','Cutting','Aggregating','Splitting','Distribution'],[['Overheads (a)','6 300','6 470','3 810','1 780','6 420'],['Cost driver','kg of materials bought','machine hours','labour hours','labour hours','products sold'],['Number of drivers (b)','7 000','200','200','100','1 000'],['<b>Rate (a)/(b)</b>','<b>0.90</b>','<b>32.35</b>','<b>19.05</b>','<b>17.80</b>','<b>6.42</b>']],[])}
<p>Blanket rate for comparison: 24 780 / 1 000 products sold = 24.78.</p>`)}
${TRAP('Read the driver unit: “100 m of purchased fabric” → 12 000 m = <b>120</b> drivers; “100 € of sales” → 680 000 € = <b>6 800</b> drivers. Count the drivers of the department for <b>all</b> products together.')}
${EX('Company Alpha: blanket vs department rates (Session 3 exercise 1)','worked example',`<p>Product XTR: 4 kg of plastic at 5 €, 3 direct labour hours at 12 €. Overheads 1 000 000 €, 80 000 direct labour hours.</p>
${F('a) Blanket rate = 1 000 000 / 80 000 = 12.5 per hour\n   Full cost = 4 × 5 + 3 × 12 + 3 × 12.5 = 20 + 36 + 37.5 = 93.5\nb) Departments A 250 000 / 20 000 h = 12.5; B 600 000 / 30 000 h = 20; C 150 000 / 30 000 h = 5\n   XTR uses 0.5 h in A, 1 h in B, 1.5 h in C\n   Overheads = 0.5 × 12.5 + 1 × 20 + 1.5 × 5 = 33.75 → full cost = 20 + 36 + 33.75 = 89.75')}`)}

<h3>4. Inventories</h3>
<ul><li><b>Direct materials inventory</b>: materials awaiting use (wood, glass).</li>
<li><b>Work-in-process</b>: partly finished goods (aggregated wood) → <b>none in this course</b>.</li>
<li><b>Finished goods inventory</b>: completed but not yet sold (doors, windows).</li></ul>
${F('Materials:       opening + purchases (in) − consumption (out) = closing\nFinished goods:  opening + production (in) − sales (out) = closing')}
${T(['Example','Opening','In','Out','Closing'],[['Wood (kg)','3 000','2 000','4 000','<b>1 000</b>'],['Glass (kg)','0','5 000','<b>4 000</b>','1 000'],['Doors, January','500','200','100','<b>600</b>'],['Doors, February','600','600','<b>1 100</b>','100']],[1,2,3,4])}

<h3>5. Inventory valuation: weighted average cost (WAC)</h3>
<p>Only method used in this course (FIFO is seen in financial accounting; LIFO is prohibited by IFRS). Opening inventory is given from the previous period; inflows at purchase cost (materials) or production cost (finished goods); outflows and closing inventory at the WAC.</p>
${F('WAC = (cost of opening inventory + cost of inflows) / (opening units + inflow units)')}
${EX('Wood and doors in February','worked example',`${T(['Wood','kg','€/kg','Total €'],[['Opening','3 000','4.22','12 660'],['Purchase','2 000','5.12','10 240'],['Consumption','4 000','4.58','18 320'],['Closing','1 000','4.58','4 580']],[1,2,3])}
${F('WAC = (12 660 + 10 240) / (3 000 + 2 000) = 22 900 / 5 000 = 4.58')}
${T(['Doors','units','€/unit','Total €'],[['Opening','500','99.80','49 900'],['Production','200','105.50','21 100'],['Sales','100','101.43','10 143'],['Closing','600','101.43','60 857']],[1,2,3])}
${F('WAC = (49 900 + 21 100) / (500 + 200) = 71 000 / 700 = 101.43')}`)}
${TRAP('Check the inventory table: opening + in = out + closing, in units <b>and</b> in euros (49 900 + 21 100 = 10 143 + 60 857).')}
`;

SHEETS.s4=`
<div class="eyebrow">Session 4</div><h2>Cost assignment: the full costing method (2/2)</h2>
<p class="lede">Goal: go from the purchase cost of materials to the full cost and the profit of each product, with inventories valued at the WAC, then compare with a blanket rate and know the limits of the method.</p>

<h3>1. The method in 4 stages</h3>
${T(['Stage','Formula','Driver used'],[
['a) Purchasing cost of materials <b>bought</b>','Direct purchase cost + purchasing overheads','quantity bought'],
['b) Materials <b>consumed</b>','WAC of the materials inventory (opening + bought)','—'],
['c) Production cost of goods <b>made</b>','Materials consumed + direct production costs + production overheads','hours, units produced…'],
['d) Production cost of goods <b>sold</b>','WAC of the finished goods inventory (opening + made)','—'],
['e) <b>Full cost</b> of goods sold','Production cost of goods sold + distribution (and other) overheads','units sold, 100 € of sales…'],
['f) <b>Profit</b>','Sales revenues − full cost of goods sold','—']])}
${TRAP('“Classic mistake is to use the direct cost only” (slide): the materials consumed are valued at the <b>purchasing cost including purchasing overheads</b> (5.12 €/kg for wood, not 4.22).')}

<h3>2. D&amp;W in February, step by step</h3>
${EX('a) Purchasing cost of materials bought','worked case',`${T(['','Wood kg','€','Total','Glass kg','€','Total'],[['Direct materials','2 000','4.22','8 440','5 000','12.36','61 800'],['Purchasing overheads','2 000','0.90','1 800','5 000','0.90','4 500'],['<b>Purchasing cost</b>','2 000','<b>5.12</b>','10 240','5 000','<b>13.26</b>','66 300']],[1,2,3,4,5,6])}`)}
${EX('b) Materials consumed (WAC)','worked case',`<p>Wood: 3 000 kg at 4.22 in stock + 2 000 kg at 5.12 → WAC 4.58 → 4 000 kg consumed = 18 320. Glass: no opening stock; 5 000 kg at 13.26 → WAC 13.26 → 4 000 kg consumed = 53 040; closing 1 000 kg = 13 260.</p>`)}
${EX('c) Production cost of one door and one window','worked case',`<p>Door: 15 kg of wood; 15 min in cutting (15.5 €/h), 15 min in aggregating (16.5 €/h), 15 min in splitting (15 €/h), 30 min in door assembly (15.5 €/h); 15 machine-minutes in cutting. Window: 2 kg of wood and 8 kg of glass; 18 min cutting, 18 min aggregating, 6 min splitting, 12 min melting (16 €/h), 12 min moulding (16.5 €/h), 36 min window assembly (15.5 €/h); 18 machine-minutes in cutting.</p>
${T(['Per unit','Door: qty × cost','Total','Window: qty × cost','Total'],[
['Wood','15 × 4.58','68.70','2 × 4.58','9.16'],['Glass','—','0','8 × 13.26','106.08'],
['Cutting labour','0.25 × 15.5','3.875','0.3 × 15.5','4.65'],['Aggregating labour','0.25 × 16.5','4.125','0.3 × 16.5','4.95'],['Splitting labour','0.25 × 15','3.75','0.1 × 15','1.50'],['Melting labour','—','0','0.2 × 16','3.20'],['Moulding labour','—','0','0.2 × 16.5','3.30'],['Assembly labour','0.5 × 15.5','7.75','0.6 × 15.5','9.30'],
['<b>Direct production cost</b>','','<b>88.20</b>','','<b>142.14</b>'],
['Cutting overheads (machine h)','0.25 × 32.35','8.0875','0.3 × 32.35','9.705'],['Aggregating overheads (labour h)','0.25 × 19.05','4.7625','0.3 × 19.05','5.715'],['Splitting overheads (labour h)','0.25 × 17.8','4.45','0.1 × 17.8','1.78'],
['<b>Production overheads</b>','','<b>17.30</b>','','<b>17.20</b>'],['<b>Production cost</b>','','<b>105.50</b>','','<b>159.34</b>']],[2,4])}
<p>Minutes → hours: 15 min = 0.25 h, 18 min = 0.3 h, 6 min = 0.1 h, 12 min = 0.2 h, 36 min = 0.6 h.</p>`)}
${EX('d) Goods sold (WAC), e) full cost, f) profit','worked case',`
${T(['Windows','units','€/unit','Total'],[['Opening','500','150.50','75 250'],['Production','500','159.34','79 670'],['Sales','900','154.92','139 428'],['Closing','100','154.92','15 492']],[1,2,3])}
<p>Doors: WAC 101.43 (Session 3) → 100 doors sold = 10 143.</p>
${T(['','Doors (100)','per door','Windows (900)','per window'],[['Production cost of goods sold','10 143','101.43','139 428','154.92'],['Distribution overheads (6.42 per product sold)','642','6.42','5 778','6.42'],['<b>Full cost</b>','<b>10 785</b>','<b>107.85</b>','<b>145 206</b>','<b>161.34</b>'],['Sales revenues','10 000','100','153 000','170'],['<b>Profit</b>','<b>(785)</b>','<b>(7.85)</b>','<b>7 794</b>','<b>8.66</b>']],[1,2,3,4])}
<p>Total profit = 7 794 − 785 = 7 009.</p>`)}

<h3>3. Comparison with the blanket rate</h3>
${EX('Same 24 780 € of overheads, two allocations','worked case',`<p>The slide assumes that 1 765 kg of the wood bought goes to doors and 235 kg to windows (glass: 5 000 kg to windows).</p>
${T(['Overheads','Doors','Windows','Total'],[['Purchasing (× 0.90)','1 765 × 0.9 = 1 588.5','5 235 × 0.9 = 4 711.5','6 300'],['Production (per unit made)','200 × 17.3 = 3 460','500 × 17.2 = 8 600','12 060'],['Distribution (per unit sold)','100 × 6.42 = 642','900 × 6.42 = 5 778','6 420'],['<b>Full costing method</b>','<b>5 690.5</b>','<b>19 089.5</b>','<b>24 780</b>'],['<b>Blanket rate (24.78 × units sold)</b>','<b>2 478</b>','<b>22 302</b>','<b>24 780</b>']],[])}
${F('Profit with the blanket rate = profit with full costing + full-costing overheads − blanket overheads\nDoors:   −785 + 5 690.5 − 2 478 = 2 427.5  (24.28 per door)\nWindows: 7 794 + 19 089.5 − 22 302 = 4 581.5  (5.09 per window)')}
<p>With the department method doors make a loss; with the blanket rate they are profitable. The choice of method matters because overhead allocation feeds decisions (price setting, outsourcing…).</p>`)}

<h3>4. Strengths and weaknesses</h3>
<p>Department full costing is appropriate when direct costs are dominant, information costs are high, and a limited range of products is produced. Two main weaknesses:</p>
<ul><li>It relies on a few <b>volume-based</b> cost drivers (direct labour or machine hours): overheads allocated are highly correlated with the number of units → <b>subsidy effect</b>: high-volume products subsidise complex low-volume products.</li>
<li>It <b>merges support and production</b> department costs.</li></ul>
${T(['Sum up','To do'],[['1. Value chain','Identify inventories, direct costs and overheads'],['2. Overhead analysis table','Number of drivers per department; rate = overheads / number of drivers'],['3. Cost objects','From purchasing cost to full cost: direct costs + overheads; never forget the inventory valuation'],['4. Conclude','Strengths and weaknesses of the method']])}

<h3>5. The exam format (mock exam, CotonRive)</h3>
<p>The course mock exam gives empty tables to fill in (0.1 point per cell) in this order: overheads table → purchasing cost → production cost → finished goods inventory → full cost → profit, then asks for a short comment. Round all amounts to two decimals.</p>
${TRAP('Each overhead follows its own flow: <b>purchasing</b> → quantity <b>bought</b>; <b>production</b> → hours or units <b>produced</b>; <b>distribution</b> and <b>customer services</b> → units <b>sold</b>, 100 € of <b>sales</b>, or 100 € of <b>production cost of goods sold</b> (compute the finished goods WAC first).')}
${TRAP('Interpretation questions: a product with a negative full-cost profit is not automatically to be dropped. If part of its overheads is fixed and unavoidable, they would move to the other products (Pizzeria Delicioso: dropping the Royale would turn the total profit into −1 240). See Session 5.')}
${NOTE('<b>Rounding:</b> the course solutions round unit costs to two decimals at each step (CotonRive, T&amp;Co, Armor Lux), so totals can differ by a few cents or euros from an unrounded calculation. The exercises on this site accept small rounding differences.')}
`;

SHEETS.s5=`
<div class="eyebrow">Session 5</div><h2>Measuring relevant costs and revenues for decision-making</h2>
<p class="lede">Goal: keep only the relevant costs, choose the product mix under a capacity constraint, and decide on special orders, outsourcing (make or buy) and dropping a product, in the short and in the long term.</p>

<h3>1. Relevant costs and revenues</h3>
<p><b>Relevant</b> costs and revenues are expected <b>future</b> costs and revenues that <b>differ</b> among the alternatives. Costs that do not change between options are irrelevant; <b>past (historical, sunk) costs are always irrelevant</b>.</p>
${EX('Trip to Lyon: train or own car?','worked example',`<p>Train: metro to the station, discount thanks to the “carte jeune” bought two months ago. Car: insurance already paid, highway tolls, propose the trip on Blablacar; the car is parked far away so you also take the metro.</p>
${T(['Item','Relevant?','Why'],[['Train ticket','<b>Yes</b>','Future, only with the train'],['Metro ticket','No','Paid in both options'],['“Carte jeune”','No','Bought two months ago: sunk'],['Car insurance','No','Already paid: sunk'],['Highway tolls, fuel','<b>Yes</b>','Future, only with the car'],['Blablacar revenues','<b>Yes</b>','Future, only with the car']])}`)}
<p><b>Quantitative factors</b> can be measured in money (materials, labour). <b>Qualitative factors</b> are hard to measure (employee morale, supplier reliability, customer satisfaction) but still matter.</p>

<h3>2. Product mix under a capacity constraint</h3>
${F('1. Identify the scarce resource (needed > available)\n2. CM per unit = selling price − variable cost per unit\n3. CM per unit of scarce resource = CM / quantity of the resource per unit\n4. Rank: highest CM per scarce resource first\n5. Optimise: fill demand in that order until the resource runs out')}
${EX('D&amp;W: 5 000 machine hours','worked case',`${T(['','Doors','Windows'],[['Estimated sales','100','900'],['Machine hours per unit','4','8'],['Hours needed','400','7 200'],['Price − VCu','100 − 79 = 21','170 − 132 = 38'],['<b>CM per machine hour</b>','<b>5.25</b>','<b>4.75</b>']])}
<p>7 600 hours needed > 5 000 available → machine hours are scarce. Doors first: 100 doors use 400 h; 4 600 h left → 4 600 / 8 = <b>575 windows</b> (not 900).</p>
${F('Maximum contribution = 100 × 21 + 575 × 38 = 2 100 + 21 850 = 23 950')}`)}
${TRAP('Rank by CM <b>per unit of scarce resource</b>, not by CM per unit (windows have the higher CM per unit, 38, but the lower CM per hour). Fixed costs do not change the ranking. Units left at the end are rounded <b>down</b> (666.67 → 666).')}

<h3>3. Short or long term</h3>
${T(['','Short term (within the relevant range)','Long term (beyond it)'],[['Variable costs (direct or overheads)','Relevant','Relevant'],['Fixed costs (direct or overheads)','<b>Irrelevant</b>: incurred whatever the decision','<b>Relevant</b>: they vary'],['Qualitative factors','Relevant','Relevant']])}
<ul><li><b>Incremental method</b>: two columns with <b>all</b> revenues and costs of each scenario. Longer but safer.</li>
<li><b>Differential method</b>: only the <b>relevant</b> revenues and costs. Faster but riskier.</li>
<li>Both give the same answer; choose either.</li></ul>

<h3>4. Special pricing decisions (special orders)</h3>
<p>Data used by all D&amp;W cases: doors cost 55 € direct materials, 18 € direct labour, 6 € variable overheads per unit; direct fixed costs 1 000 € and fixed overheads 500 € per month (below 1 250 doors); “cost per unit for 100 doors” 94 €. Capacity 1 250 doors per month; normal sales 100 doors at 100 €.</p>
${EX('Short term: 500 doors at 85 €, extra selling cost 5 € per unit','worked case',`<p>Step 1, can we? 100 + 500 = 600 &lt; 1 250 → spare capacity. Step 2, should we?</p>
${T(['Incremental method','Don’t accept (100 doors)','Accept (600 doors)'],[['Direct materials (55)','5 500','33 000'],['Direct labour (18)','1 800','10 800'],['Variable overheads (6)','600','3 600'],['Direct fixed costs','1 000','1 000'],['Fixed overheads','500','500'],['Extra selling costs (5 × 500)','—','2 500'],['<b>Total costs</b>','<b>9 400</b>','<b>51 400</b>'],['Normal sales (100 × 100)','10 000','10 000'],['Special order (500 × 85)','—','42 500'],['<b>Profit</b>','<b>600</b>','<b>1 100</b>']],[1,2])}
${F('Differential: relevant revenues 500 × 85 = 42 500\nrelevant costs 500 × (55 + 18 + 6 + 5) = 500 × 84 = 42 000  →  +500: ACCEPT')}
<p>The 94 € unit cost is misleading: it includes fixed costs (15 € per door for 100 doors) that do not change. Assumptions: one-time order; normal price not affected (separate market); no better opportunity; resources have no other use; fixed costs unavoidable.</p>`)}
${EX('Long term: 1 000 doors per month at 85 €, 5 € selling cost','worked case',`<p>If the contract is refused: fixed overheads fall by 100 € per month and the unused facilities can be rented out for 1 000 € per month.</p>
${T(['Incremental method','Don’t accept (100 doors)','Accept (1 100 doors)'],[['Direct materials','5 500','60 500'],['Direct labour','1 800','19 800'],['Variable overheads','600','6 600'],['Direct fixed costs','1 000','1 000'],['Fixed overheads','400','500'],['Extra selling costs','—','5 000'],['<b>Total costs</b>','<b>9 300</b>','<b>93 400</b>'],['Normal sales','10 000','10 000'],['Rent revenue','1 000','—'],['Special order','—','85 000'],['<b>Profit</b>','<b>1 700</b>','<b>1 600</b>']],[1,2])}
<p>Accepting gives 100 € less: <b>reject</b> in the long term (in the long term all costs are relevant, including the 100 € of fixed overheads saved and the 1 000 € rent foregone).</p>`)}
${EX('No spare capacity: opportunity cost (recommended exercise)','worked example',`<p>XYZ: capacity 600 000, production 500 000, price 6, VCu 4.25. Client B offers 80 000 units at 5 → contribution (5 − 4.25) × 80 000 = 60 000. A bid to client C for 30 000 units at the normal price is likely to be accepted: only 100 000 units of spare capacity for 110 000 → accepting B loses C.</p>
${F('Opportunity cost = contribution lost on C = 30 000 × (6 − 4.25) = 52 500\nNet gain of B = 60 000 − 52 500 = 7 500')}<p>Accept B only if the risk of a price war is negligible.</p>`)}
${TRAP('Minimum price of a special order with spare capacity = the relevant <b>variable</b> cost per unit (+ any cost specific to the order, + the opportunity cost if capacity is short). HopeShelter: 4 + 2 + 0.5 + 0.25 = 6.75 €; the 1.50 € of allocated fixed overhead is irrelevant.')}

<h3>5. Outsourcing (make or buy)</h3>
${EX('Short term: buy 100 doors at 85 €?','worked case',`<p>Assumptions: the capacity freed stays unused; fixed costs continue whatever the decision.</p>
${T(['','Make','Buy'],[['Variable costs 100 × (55 + 18 + 6)','7 900','—'],['Direct fixed costs','1 000','1 000'],['Fixed overheads','500','500'],['Outside purchase 100 × 85','—','8 500'],['<b>Total</b>','<b>9 400</b>','<b>10 000</b>']],[1,2])}
<p>Differential: 7 900 vs 8 500 → making saves <b>600 €</b>: make.</p>`)}
${EX('Long term: buy the doors and use the capacity for windows','worked case',`<p>Windows: 85 € materials, 35 € labour, 12 € variable overheads, direct fixed 2 500 €, fixed overheads 100 €, price 170 €. Two doors not produced free the capacity for one window (100 doors → +50 windows). Direct fixed costs of doors are saved; fixed overheads of doors disappear but those of windows rise by 50 € per 50 windows.</p>
${T(['','Make doors and windows','Buy doors, make 150 windows'],[['Doors: variable costs','7 900','—'],['Doors: direct fixed + fixed overheads','1 500','—'],['Windows: variable costs (132 per unit)','13 200','19 800'],['Windows: direct fixed costs','2 500','2 500'],['Windows: fixed overheads','100','150'],['Doors: outside purchase','—','8 500'],['<b>Total costs</b>','<b>25 200</b>','<b>30 950</b>'],['Revenues: doors (100 × 100)','10 000','10 000'],['Revenues: windows (× 170)','17 000','25 500'],['<b>Profit</b>','<b>1 800</b>','<b>4 550</b>']],[1,2])}
<p>Outsourcing raises profit by <b>2 750 €</b>. In the long term all costs are relevant, so both methods are the same. Qualitative risks: dependence on the supplier (prices, quality, delivery), loss of control over design and of core skills.</p>`)}
${TRAP('Short and long term can give opposite answers (special order: accept short term, reject long term; doors: make short term, buy long term). Always state the time frame and the assumptions.')}

<h3>6. Dropping a product or segment</h3>
${F('Keep a segment if:  Contribution − avoidable fixed costs > 0\nUnavoidable (common allocated) fixed costs stay whatever the decision → irrelevant')}
${EX('Four brands (recommended exercise)','worked case',`${T(['€','A','B','C','D','Total'],[['Sales','2 200','700','2 400','1 550','6 850'],['Variable costs (materials, labour, variable overheads)','946','450','1 056','527','2 979'],['<b>Contribution</b>','<b>1 254</b>','<b>250</b>','<b>1 344</b>','<b>1 023</b>','<b>3 871</b>'],['Avoidable fixed: advertising + brand manager','340','270','490','410','1 510'],['<b>Contribution − avoidable fixed</b>','<b>914</b>','<b>(20)</b>','<b>854</b>','<b>613</b>','<b>2 361</b>'],['Common allocated fixed costs + general &amp; admin (unavoidable)','680','355','745','620','2 400'],['Net profit (loss)','234','(375)','109','(7)','(39)']],[1,2,3,4,5])}
<p>Drop <b>B</b> (negative direct margin: −20); keep <b>D</b> despite its −7 loss (it covers 613 of common costs). The company should also cut its common fixed costs.</p>
${NOTE('<b>Check against the solution:</b> the question asks “Shall we drop segment A and B?”, but the loss-making brands are B and D, and the solution discusses B and D.')}`)}
${EX('Pizzeria Delicioso: stop the Royale? (Session 4 exercise)','worked case',`<p>Full cost profit: Imperiale +210 400, Royale −28 800. 55% of the overheads are fixed and unavoidable.</p>
${T(['','Imperiale','Royale'],[['Sales','1 280 000','1 200 000'],['Direct costs','735 000','844 000'],['Direct margin','545 000','356 000'],['Variable overheads (45%)','150 570','173 160'],['Margin','394 430','182 840'],['Fixed overheads (55%)','184 030','211 640'],['Profit','210 400','(28 800)']],[1,2])}
<p>The Royale has a positive margin of 182 840: dropping it loses that margin, and its 211 640 of fixed overheads go to the Imperiale → total profit 210 400 − 211 640 = <b>−1 240</b>. Do not drop it.</p>`)}
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
<h3>Formulas</h3>
${T(['What','Formula'],[
['Mixed cost from two levels (y = ax + b)','a = (C2 − C1) / (Q2 − Q1);  b = C1 − a × Q1'],
['Step cost','number of steps = Q / step size, rounded UP'],
['Full cost (Session 1)','Direct materials + direct labour = direct cost; + overheads = full cost'],
['Contribution margin (CM)','P − VCu  (total contribution = sales − variable costs)'],
['Break-even point (units)','FC / CM, rounded UP'],
['CM ratio','CM / P = contribution / sales'],
['BEP (sales €)','FC / CM ratio'],
['Target profit (units)','(FC + profit) / CM'],
['Price for a target profit','(profit + FC) / Q + VCu'],
['Margin of safety (%)','(expected sales − BEP) / expected sales'],
['Operating leverage','total contribution / profit;  %Δ profit = OL × %Δ sales'],
['Cost driver rate','department overheads / number of cost drivers'],
['Blanket rate','total overheads / one driver for the whole company'],
['Stock movement','opening + in − out = closing'],
['WAC','(opening € + in €) / (opening units + in units)'],
['Purchasing cost of materials bought','direct purchase cost + purchasing overheads'],
['Production cost of goods made','materials consumed (at WAC) + direct production costs + production overheads'],
['Full cost of goods sold','production cost of goods sold (at WAC) + distribution (customer services…) overheads'],
['Profit','sales − full cost of goods sold'],
['Product mix','rank by CM / unit of scarce resource'],
['Keep a segment if','contribution − avoidable fixed costs > 0']])}
<h3>Which costs are relevant?</h3>
${T(['Cost','Short term','Long term'],[['Variable (direct or overhead)','Relevant','Relevant'],['Fixed (direct or overhead)','Irrelevant (unless it changes with the decision)','Relevant'],['Past / sunk','Irrelevant','Irrelevant'],['Opportunity cost (no spare capacity)','Relevant','Relevant'],['Qualitative factors','Relevant','Relevant']])}
<h3>Drivers in a full costing table</h3>
${T(['Department','Driver base','Example unit'],[['Purchasing','quantity BOUGHT','kg bought, 100 m of fabric bought, € of direct purchase cost'],['Production','quantity PRODUCED or hours','machine hours, labour hours, finished units produced'],['Distribution','quantity SOLD','units sold, 100 € of sales'],['Customer services','production cost of goods SOLD','100 € of production cost of goods sold']])}
<h3>Exam checklist</h3>
<ol><li>Write every formula before the numbers; show the units (kg, hours, units, €).</li>
<li>CVP: round the BEP and the units for a target profit <b>up</b>; keep at least four decimals in a CM ratio.</li>
<li>Full costing: overheads table first, then purchasing → materials WAC → production → finished goods WAC → full cost → profit. Check every inventory table balances.</li>
<li>Value materials consumed at the purchase cost <b>including</b> purchasing overheads.</li>
<li>Round unit costs to two decimals, like the course solutions.</li>
<li>Decisions: check the capacity first; say short or long term; list the assumptions; add the qualitative factors.</li>
<li>Product mix: units left over are rounded <b>down</b>.</li>
<li>Interpretation questions: answer with the number, then one sentence on what it means for the manager.</li></ol>
`;

/* ---------- quiz ---------- */
const QUIZ=[
// Session 1
{id:'q0',topic:'s1',src:'course',q:'Which of the following is an example of a possible cost object?',o:['A product','A customer','A department','All of these could be cost objects'],a:3,e:'A cost object is any activity for which a separate measurement of cost is required: a product, a service, a project, a customer, an activity or a department.'},
{id:'q1',topic:'s1',src:'course',q:'A direct cost is a cost that…',o:['is incurred as a direct consequence of a decision','can be economically identified with the item being costed','cannot be economically identified with the item being costed','is immediately controllable','is the responsibility of the board of directors'],a:1,e:'Direct costs can be specifically and exclusively identified with a given cost object (Drury question; the solution file gives no letter, this is the course definition).'},
{id:'q2',topic:'s1',src:'course',q:'Which of the following would be classed as indirect labour?',o:['Assembly workers in a company manufacturing televisions','A stores assistant in a factory store','Plasterers in a construction company','An audit clerk in a firm of auditors'],a:1,e:'The stores assistant does not work on one product: the cost is shared (an overhead). The others work directly on the product or service sold.'},
{id:'q3',topic:'s1',src:'course',q:'Which one of the following costs would NOT be classified as a production overhead in a food processing company?',o:['The cost of renting the factory building','The salary of the factory manager','The depreciation of equipment located in the materials store','The cost of ingredients'],a:3,e:'Ingredients are direct materials: they are traced to the products. The other three are shared by all products.'},
{id:'q4',topic:'s1',src:'course',q:'Fixed costs are conventionally deemed to be…',o:['constant per unit of output','constant in total when production volume changes','outside the control of management','those unaffected by inflation'],a:1,e:'Fixed costs remain constant in total over wide ranges of activity (y = a); per unit they fall as output rises.'},
{id:'q5',topic:'s1',src:'course',q:'Total costs at 125 and 180 units: T1 1 000 → 1 250; T2 1 750 → 2 520; T3 2 475 → 2 826; T4 3 225 → 4 664. Which cost types are semi-variable?',o:['T1 and T3','T2 and T4','T1 only','T2 and T3'],a:0,e:'Cost per unit: T1 8.00 → 7.00; T2 14.00 → 14.00 (variable); T3 19.80 → 15.70; T4 25.80 → 25.91. T1 and T3 have a falling unit cost and a positive fixed part: T1 = 4.55x + 432, T3 = 6.38x + 1 677. T4 rises per unit: its “fixed part” would be negative, so it is not semi-variable.'},
{id:'q6',topic:'s1',src:'course',q:'Supervisory personnel costs are usually…',o:['fixed','variable','semi-fixed (step)','semi-variable'],a:2,e:'Drury recommended exercise: one supervisor covers a range of activity, then another is needed → semi-fixed. Factory manager’s salary: fixed; royalties: variable; maintenance of machinery: semi-variable.'},
{id:'q7',topic:'s1',src:'course',q:'Royalty payments (paid per unit sold) are usually…',o:['fixed','variable','semi-fixed','semi-variable'],a:1,e:'They vary in direct proportion to activity (y = ax).'},
{id:'q8',topic:'s1',src:'practice',q:'Which statement describes management accounting (not financial accounting)?',o:['It must comply with accounting regulations','It reports on the whole organisation once or twice a year','It is optional and puts more emphasis on estimated future costs and revenues','It is mainly for shareholders and creditors'],a:2,e:'Management accounting is optional, for internal users, reports on small parts of the organisation, at frequent intervals, with financial and non-financial information and a focus on the future.'},
{id:'q9',topic:'s1',src:'course',q:'A chemical leak pollutes a river. Which environmental cost type?',o:['Protection','Appraisal','Internal failure','External failure'],a:3,e:'The failure was not detected or corrected before reaching the public: external failure.'},
{id:'q10',topic:'s1',src:'course',q:'Staff training on how to reduce the risk of incurring environmental costs is an environmental…',o:['protection cost','appraisal cost','internal failure cost','external failure cost'],a:0,e:'Protection costs: processes and training to reduce the risk (costs of trying to get it right).'},
{id:'q11',topic:'s1',src:'course',q:'Leakages of hazardous waste inside the production plant, cleaned up before reaching the public, are…',o:['appraisal costs','internal failure costs','external failure costs','protection costs'],a:1,e:'Detected and cleaned up before reaching the public: internal failure (costs of getting it wrong).'},
{id:'q12',topic:'s1',src:'practice',q:'Maintenance costs are 9 400 € for 1 200 units and 11 800 € for 1 800 units. Equation of the cost?',o:['y = 4x + 4 600','y = 7.83x','y = 6.56x','y = 4x + 9 400'],a:0,e:'a = (11 800 − 9 400) / (1 800 − 1 200) = 2 400 / 600 = 4; b = 9 400 − 4 × 1 200 = 4 600.'},
{id:'q13',topic:'s1',src:'course',q:'D&W leases machines at 800 € for every 800 doors produced. Cost of the leased machines for 2 000 doors?',o:['1 600 €','2 000 €','2 400 €','800 €'],a:2,e:'2 000 / 800 = 2.5 → round up to 3 steps → 3 × 800 = 2 400 € (a step cost).'},
{id:'q14',topic:'s1',src:'course',q:'At 1 000 and 1 500 units: direct materials 38 000 / 57 000; direct labour 45 000 / 67 500; building 15 000 / 15 000; stores 7 000 / 9 000. Total cost for 2 000 units?',o:['166 000','192 000','210 000','188 000'],a:1,e:'Materials 38x, labour 45x, building 15 000, stores 3 000 + 4x (a = 2 000 / 500 = 4; b = 7 000 − 4 000). Total = 87 × 2 000 + 18 000 = 192 000.'},
{id:'q15',topic:'s1',src:'practice',q:'D&W’s cost per door falls from 165.50 € (1 000 doors) to 160.40 € (2 000 doors). Why?',o:['Variable costs per unit fall','Fixed costs are spread over more units','The step cost disappears','Direct costs become overheads'],a:1,e:'Not all costs are variable: the fixed part is shared by more doors, so the unit cost falls.'},
{id:'q16',topic:'s1',src:'course',q:'D&W: wood for doors 3 000; transport of materials for doors and windows 4 880; wood-cutting labour for doors and windows 6 000; door assembly labour 3 000; door distribution 150; plant depreciation 600. Direct costs of doors?',o:['6 000','6 150','11 030','17 630'],a:1,e:'3 000 + 3 000 + 150 = 6 150. The shared costs (4 880, 6 000, 600) are overheads.'},
// Session 2
{id:'q20',topic:'s2',src:'course',q:'Budgeted sales 500 000 € with a contribution of 275 000 €. Fixed production costs 137 500 € and fixed selling costs 27 500 €. Break-even point in sales revenue?',o:['75 625 €','90 750 €','250 000 €','300 000 €'],a:3,e:'CM ratio = 275 000 / 500 000 = 0.55. BEP = (137 500 + 27 500) / 0.55 = 165 000 / 0.55 = 300 000 €.'},
{id:'q21',topic:'s2',src:'course',q:'Product R, cost per unit at 1 000 / 2 000 units: materials 4 / 4; labour 3 / 3; production overhead 3.50 / 2.50; selling overhead 1.00 / 0.50. Total fixed cost and variable cost per unit?',o:['2 000 and 1.50','2 000 and 7.00','2 000 and 8.50','3 000 and 7.00','3 000 and 8.50'],a:4,e:'Production overhead: 3 500 → 5 000, so a = 1.5 and b = 2 000 (mixed). Selling overhead: 1 000 at both levels (fixed). VCu = 4 + 3 + 1.5 = 8.50; fixed = 2 000 + 1 000 = 3 000.'},
{id:'q22',topic:'s2',src:'course',q:'Fixed costs 60 000 € a year; price 20 €; contribution margin ratio 40%. Break-even point in units?',o:['1 200','1 800','3 000','5 000','7 500'],a:4,e:'CM = 40% × 20 = 8 €. BEP = 60 000 / 8 = 7 500 units.'},
{id:'q23',topic:'s2',src:'course',q:'Price 15 €; CM ratio 40%; weekly break-even sales 18 000 €. Profit in a week when 1 500 units are sold?',o:['900 €','1 800 €','2 700 €','4 500 €'],a:1,e:'BEP = 18 000 / 15 = 1 200 units; CM = 6 €. Profit = (1 500 − 1 200) × 6 = 1 800 €.'},
{id:'q24',topic:'s2',src:'course',q:'Variable cost 24 € per unit; CM ratio 40%; monthly fixed costs 720 000 €. Monthly BEP in units?',o:['18 000','20 000','30 000','45 000'],a:3,e:'Variable cost = 60% of the price → P = 24 / 0.6 = 40 €; CM = 16 €; BEP = 720 000 / 16 = 45 000.'},
{id:'q25',topic:'s2',src:'course',q:'D&W windows: fixed costs 20 000 € per month, price 170 €, variable cost 100 €. Break-even point?',o:['285 windows','285.71 windows','286 windows','118 windows'],a:2,e:'20 000 / 70 = 285.71 → round up: 286. At 285 windows the profit is −50 €; at 286 it is +20 €.'},
{id:'q26',topic:'s2',src:'course',q:'Same windows (FC 20 000, VCu 100). Selling price needed for a 5 000 € profit with 400 windows sold?',o:['162.50 €','170.00 €','150.00 €','112.50 €'],a:0,e:'(5 000 + 20 000) / 400 + 100 = 62.5 + 100 = 162.50 €.'},
{id:'q27',topic:'s2',src:'course',q:'Windows at 170 € (FC 20 000, VCu 100), target profit 5 000 €. D&W spends 5 000 € more on TV advertising. How many more windows than the 400 already sold must it sell?',o:['72','29','71','58'],a:1,e:'(20 000 + 5 000 + 5 000) / 70 = 428.57 → 429 windows; 429 − 400 = 29.'},
{id:'q28',topic:'s2',src:'course',q:'Fixed costs increase. Effect on the contribution margin and on the break-even point?',o:['CM decreases; BEP increases','CM: no effect; BEP increases','CM: no effect; BEP decreases','CM increases; BEP increases'],a:1,e:'The CM only depends on the price and the variable cost per unit. More fixed costs need more units to be covered.'},
{id:'q29',topic:'s2',src:'course',q:'Windows: D&W cuts its price from 170 € to 150 € (VCu 100, FC 20 000). New BEP?',o:['286','334','400','315'],a:2,e:'CM = 50 → 20 000 / 50 = 400. (334 is scenario C, VCu + 10; 315 is scenario D, FC + 2 000.)'},
{id:'q30',topic:'s2',src:'course',q:'Doors: contribution 25 664 €, profit 3 664 €. If sales rise by 10%, profit rises by about…',o:['10%','35%','70%','7%'],a:2,e:'Operating leverage = 25 664 / 3 664 = 7 → 7 × 10% = 70% (profit 3 664 → 6 230).'},
{id:'q31',topic:'s2',src:'practice',q:'When is the operating leverage highest?',o:['When sales are far above the break-even point','When sales are close to the break-even point','When the company has no fixed costs','It is constant for a product'],a:1,e:'Close to the BEP profit is small, so contribution / profit is large (doors at −10%: OL 21.04). It falls as sales move away from the BEP.'},
{id:'q32',topic:'s2',src:'course',q:'Norvik: fixed costs £60 000, price £20, variable cost £10. Units needed for a £30 000 profit?',o:['6 000','8 000','9 000','9 800'],a:2,e:'(60 000 + 30 000) / 10 = 9 000 units. Break-even: 6 000 units.'},
{id:'q33',topic:'s2',src:'course',q:'Norvik (FC £60 000, VCu £10): price needed for a £30 000 profit on 8 000 tickets?',o:['£20.00','£21.25','£11.25','£22.50'],a:1,e:'(30 000 + 60 000) / 8 000 + 10 = 11.25 + 10 = £21.25.'},
{id:'q34',topic:'s2',src:'course',q:'Price 24 €; variable production cost 8.60 €; sales commission 5% of the price; fixed costs 650 000 + 230 400 €. Break-even point?',o:['57 169 units','61 834 units','62 000 units','36 683 units'],a:2,e:'CM = 24 − 8.60 − 1.20 = 14.20; BEP = 880 400 / 14.20 = 62 000 units.'},
{id:'q35',topic:'s2',src:'course',q:'Same company: budgeted sales 90 000 units, BEP 62 000 units. By what percentage can sales fall before a loss?',o:['31.1%','45.2%','68.9%','28.0%'],a:0,e:'(90 000 − 62 000) / 90 000 = 31.1%.'},
{id:'q36',topic:'s2',src:'practice',q:'Which is NOT an assumption of CVP analysis?',o:['Price and unit variable cost are constant','Costs can be split into fixed and variable parts','The analysis applies only within the relevant range','Fixed costs rise in proportion to volume'],a:3,e:'Fixed costs are assumed constant within the relevant range. CVP is a short-term model.'},
{id:'q37',topic:'s2',src:'course',q:'Lambda, product B: price 14 €, variable cost 10 €, fixed costs 60 000 €, profit 20 000 €. Sales volume?',o:['15 000','20 000','5 000','8 000'],a:1,e:'(60 000 + 20 000) / (14 − 10) = 80 000 / 4 = 20 000 units. BEP 15 000; margin of safety 25%.'},
// Session 3
{id:'q40',topic:'s3',src:'course',q:'Perth: fixed overheads £180 000; 3 000 labour hours; 10 000 machine hours; 5 000 units. Highly automated process, overheads absorbed on the most appropriate basis. Blanket rate?',o:['£16','£18','£36','£60'],a:1,e:'Highly automated → machine hours: 180 000 / 10 000 = £18 per machine hour.'},
{id:'q41',topic:'s3',src:'course',q:'Company Alpha: XTR needs 4 kg at 5 € and 3 labour hours at 12 €. Overheads 1 000 000 €, 80 000 labour hours, absorbed per labour hour. Full cost of one XTR?',o:['56.00 €','89.75 €','93.50 €','68.50 €'],a:2,e:'Rate = 12.5 €/h. 20 + 36 + 3 × 12.5 = 93.50 €.'},
{id:'q42',topic:'s3',src:'course',q:'Same XTR with department rates A 12.5 €/h, B 20 €/h, C 5 €/h; it needs 0.5 h in A, 1 h in B and 1.5 h in C. Full cost?',o:['89.75 €','93.50 €','33.75 €','101.00 €'],a:0,e:'Overheads = 6.25 + 20 + 7.5 = 33.75; full cost = 20 + 36 + 33.75 = 89.75 €.'},
{id:'q43',topic:'s3',src:'course',q:'TechXL: 12 000 L of methanol at 0.60 € in stock; buys 8 000 L at 0.55 €; uses 10 000 L. Cost of the methanol consumed?',o:['6 000 €','5 500 €','5 800 €','5 750 €'],a:2,e:'WAC = (7 200 + 4 400) / 20 000 = 0.58 → 10 000 × 0.58 = 5 800 €.'},
{id:'q44',topic:'s3',src:'course',q:'TechXL: 1 000 units of A at 220 €; produces 1 100 at 200 €; sells 1 350. Unit cost of A sold?',o:['210.00 €','209.53 €','200.00 €','220.00 €'],a:1,e:'(220 000 + 220 000) / 2 100 = 209.52… → 209.53 € in the solution. Closing: 750 units = 157 147.50 €.'},
{id:'q45',topic:'s3',src:'course',q:'D&W wood cutting: overheads 6 470 €; machines ran 200 hours; cost driver = machine hour. Cost driver rate?',o:['32.35 € per hour','6.47 € per hour','19.05 € per hour','3.24 € per hour'],a:0,e:'6 470 / 200 = 32.35 € per machine hour.'},
{id:'q46',topic:'s3',src:'course',q:'McGregor distribution: overheads 11 750 €; driver “hundreds € of turnover”; turnover 100 000 € + 135 000 €. Cost driver rate?',o:['0.05 €','5.00 €','50.00 €','11.75 €'],a:1,e:'Number of drivers = 235 000 / 100 = 2 350; rate = 11 750 / 2 350 = 5 € per 100 € of turnover.'},
{id:'q47',topic:'s3',src:'practice',q:'In the full costing method, what happens to the overheads of service departments (administration)?',o:['They are charged directly to products','They are re-assigned to operational departments','They stay in the service department','They are ignored'],a:1,e:'Step 2: re-assign service department overheads to operational departments; service departments end at 0.'},
{id:'q48',topic:'s3',src:'course',q:'Which inventory valuation method is used in this course?',o:['FIFO','LIFO','Weighted average cost','Standard cost'],a:2,e:'Weighted average only. FIFO belongs to financial accounting; LIFO is prohibited by IFRS.'},
{id:'q49',topic:'s3',src:'course',q:'Bookshelves need 10 machine hours, cabinets 12. Total overheads 650 000 € for 180 000 machine hours. Overhead cost per bookshelf with a blanket rate?',o:['36.00 €','43.20 €','56.50 €','3.61 €'],a:0,e:'Blanket rate = 650 000 / 180 000 = 3.6 € per hour; 10 × 3.6 = 36 €. Cabinet: 12 × 3.6 = 43.20 €.'},
{id:'q50',topic:'s3',src:'course',q:'Same company with department rates: cutting 1.79 €/h, finishing 6.62 €/h. A bookshelf needs 2 h in cutting and 8 h in finishing. Overhead cost per bookshelf?',o:['36.00 €','31.10 €','56.50 €','84.10 €'],a:2,e:'2 × 1.79 + 8 × 6.62 = 56.5 €. The blanket rate (36 €) distorts the cost.'},
{id:'q51',topic:'s3',src:'course',q:'Glass: no opening stock; 5 000 kg purchased; closing stock 1 000 kg. Quantity consumed?',o:['6 000 kg','5 000 kg','4 000 kg','1 000 kg'],a:2,e:'Opening + purchases − consumption = closing → 0 + 5 000 − x = 1 000 → x = 4 000 kg.'},
{id:'q52',topic:'s3',src:'course',q:'February: 600 doors in stock at the start, 600 produced, closing stock 100. Doors sold?',o:['1 100','600','500','1 200'],a:0,e:'600 + 600 − sales = 100 → 1 100 doors sold.'},
{id:'q53',topic:'s3',src:'practice',q:'How much work-in-process inventory is used in this course’s exercises?',o:['None','Always one','Only for services','Only in Session 4'],a:0,e:'The slides say: there is no work in progress inventory in this course. Only materials and finished goods.'},
// Session 4
{id:'q60',topic:'s4',src:'course',q:'D&W buys 2 000 kg of wood at 4.22 €; purchasing overheads 0.90 € per kg bought. Purchasing cost per kg of wood bought?',o:['4.22 €','4.58 €','5.12 €','0.90 €'],a:2,e:'4.22 + 0.90 = 5.12 € per kg (10 240 € in total).'},
{id:'q61',topic:'s4',src:'course',q:'D&W door: direct production cost 88.20 €; 0.25 machine hour in cutting (32.35), 0.25 labour hour in aggregating (19.05), 0.25 labour hour in splitting (17.80). Production cost of one door?',o:['88.20 €','105.50 €','159.34 €','17.30 €'],a:1,e:'Overheads = 8.0875 + 4.7625 + 4.45 = 17.30; production cost = 88.20 + 17.30 = 105.50 €.'},
{id:'q62',topic:'s4',src:'course',q:'Windows: 500 in stock at 150.50 €; 500 produced at 159.34 €; 900 sold. Production cost of the windows sold?',o:['139 428 €','143 406 €','135 450 €','154 920 €'],a:0,e:'WAC = (75 250 + 79 670) / 1 000 = 154.92 → 900 × 154.92 = 139 428 €.'},
{id:'q63',topic:'s4',src:'course',q:'Doors sold at 101.43 € (production cost) + distribution overheads 6.42 € per product sold, selling price 100 €. Profit per door?',o:['−1.43 €','+5.00 €','−7.85 €','+7.85 €'],a:2,e:'Full cost = 101.43 + 6.42 = 107.85 → profit = 100 − 107.85 = −7.85 € (−785 € for 100 doors).'},
{id:'q64',topic:'s4',src:'course',q:'With the department method D&W allocates 5 690.5 € of overheads to doors; with the blanket rate 2 478 €. Doors lose 785 € with the department method. Profit of doors with the blanket rate?',o:['−785 €','2 427.5 €','−3 997.5 €','1 693 €'],a:1,e:'−785 + 5 690.5 − 2 478 = 2 427.5 €: the method decides whether doors look profitable.'},
{id:'q65',topic:'s4',src:'course',q:'Main weakness of traditional (department) full costing?',o:['It ignores direct costs','It relies on few volume-based drivers, so high-volume products subsidise complex low-volume ones','It cannot value inventories','It only works with one product'],a:1,e:'Volume-based drivers (labour or machine hours) → subsidy effect. The other weakness: support and production department costs are merged.'},
{id:'q66',topic:'s4',src:'course',q:'Department full costing systems are appropriate when…',o:['indirect costs are dominant and many products are made','direct costs are dominant, information costs are high and few products are made','a company has no inventory','overheads are all variable'],a:1,e:'The slide’s three conditions: direct costs dominant, high information costs, limited range of products.'},
{id:'q67',topic:'s4',src:'course',q:'CotonRive buys 5 000 m of fabric; purchasing overheads 30 000 €; driver “100 m of purchased fabric”. Cost driver rate?',o:['6 € per metre','600 € per 100 m','60 € per 100 m','300 € per 100 m'],a:1,e:'Number of drivers = 5 000 / 100 = 50 → 30 000 / 50 = 600 € per 100 m (6 € per metre).'},
{id:'q68',topic:'s4',src:'course',q:'CotonRive shirts: 1 000 in stock valued at 99 600 €; 2 000 produced at 73.20 €; 2 500 sold. Unit cost of the shirts sold?',o:['73.20 €','82.00 €','86.40 €','99.60 €'],a:1,e:'(99 600 + 146 400) / 3 000 = 82.00 €.'},
{id:'q69',topic:'s4',src:'course',q:'CotonRive: 2 500 shirts sold at 85 €; production cost of goods sold 82 €; distribution overheads 5 € per product sold. Result on shirts?',o:['+7 500 €','−5 000 €','+12 500 €','−2 000 €'],a:1,e:'Full cost = 87 € → (85 − 87) × 2 500 = −5 000 €. Trousers: (180 − 117.80) × 1 000 = +62 200 €.'},
{id:'q70',topic:'s4',src:'course',q:'Pizzeria Delicioso: purchasing overheads 239 800 €; driver “€ of direct purchasing cost”; direct purchasing costs 35 000 € (Imperiale) and 74 000 € (Royale). Rate?',o:['2.20 € per € of purchase cost','0.22 €','1.71 €','6.85 €'],a:0,e:'239 800 / 109 000 = 2.20 € per € of direct purchasing cost.'},
{id:'q71',topic:'s4',src:'course',q:'T&Co customer services: driver “100 € of production cost of products sold”; production cost of goods sold 466 320 € (shirts) + 540 200 € (trousers). Number of drivers?',o:['10 065','14 800','1 006 520','5 700'],a:0,e:'(466 320 + 540 200) / 100 = 10 065 → rate = 132 948 / 10 065 = 13.21 €.'},
{id:'q72',topic:'s4',src:'course',q:'What is the “classic mistake” the slides warn about when valuing the materials consumed?',o:['Using the WAC','Using the direct purchase cost only, without the purchasing overheads','Including opening stock','Rounding to two decimals'],a:1,e:'Materials consumed are valued at the purchasing cost of materials bought (direct cost + purchasing overheads), through the WAC.'},
{id:'q73',topic:'s4',src:'course',q:'Pizzeria Delicioso: the Royale loses 28 800 € in full costing but has a positive margin of 182 840 € before fixed overheads. 55% of overheads are fixed and unavoidable. Stop the Royale?',o:['Yes: it makes a loss','No: its margin would be lost and its fixed overheads would move to the Imperiale; total profit would become −1 240 €','Yes: profit would rise by 28 800 €','No: because full cost is always right'],a:1,e:'210 400 − 211 640 = −1 240 € if the Royale is dropped. A positive margin covers part of the fixed costs.'},
// Session 5
{id:'q80',topic:'s5',src:'course',q:'Trip to Lyon by train or by your own car. Which list contains only relevant items?',o:['Train ticket, metro ticket, car insurance','Train ticket, highway tolls, fuel, Blablacar revenues','“Carte jeune”, fuel, highway tolls','Metro ticket, train ticket, fuel'],a:1,e:'The metro ticket is paid in both options; the carte jeune and the insurance are already paid (sunk). Relevant = future and different between options.'},
{id:'q81',topic:'s5',src:'course',q:'Past (historical) costs are…',o:['always relevant','relevant in the long term only','always irrelevant for decisions','relevant if they are large'],a:2,e:'Relevant costs must occur in the future and differ between alternatives.'},
{id:'q82',topic:'s5',src:'course',q:'D&W: doors CM 21 € for 4 machine hours; windows CM 38 € for 8 machine hours; demand 100 doors and 900 windows; 5 000 machine hours. Optimal plan?',o:['625 windows','100 doors and 575 windows','100 doors and 900 windows','1 250 doors'],a:1,e:'CM per hour: doors 5.25 > windows 4.75 → 100 doors (400 h), then 4 600 / 8 = 575 windows. Contribution 23 950 €.'},
{id:'q83',topic:'s5',src:'course',q:'HEARTBEAT: Mini $100, variable $20, 2 machine hours; Maxi $200, variable $40, 5 machine hours. Machine hours are limited. Which to produce?',o:['Maxi: higher CM per unit ($160)','Mini: $40 per machine hour vs $32','Both equally','Maxi: higher price'],a:1,e:'CM per machine hour: Mini 80 / 2 = 40; Maxi 160 / 5 = 32.'},
{id:'q84',topic:'s5',src:'course',q:'Sigma, plastic at $0.5 per kg is scarce. A: price 32, materials 7, labour 20. B: 37, 5, 15. C: 35, 4, 17. Order of production?',o:['A, B, C','B, C, A','C, B, A','C, A, B'],a:2,e:'kg per unit: A 14, B 10, C 8. CM: A 5, B 17, C 14. CM per kg: A 0.357, B 1.70, C 1.75 → C, B, A.'},
{id:'q85',topic:'s5',src:'course',q:'Sigma needs 110 000 kg (100 000 available) and 19 200 labour hours (19 000 available). Limiting factor(s)?',o:['Raw materials only','Labour hours only','Both raw materials and labour hours','Neither'],a:2,e:'Both needs exceed what is available.'},
{id:'q86',topic:'s5',src:'course',q:'D&W (spare capacity): special order of 500 doors at 85 €; variable cost 79 € per door; extra selling cost 5 € per door; fixed costs unchanged. Short-term effect on profit?',o:['−4 500 €','+500 €','+3 000 €','−2 000 €'],a:1,e:'500 × (85 − 79 − 5) = +500 €. The 94 € “cost per unit” includes fixed costs that do not change.'},
{id:'q87',topic:'s5',src:'course',q:'Long term: 1 000 doors per month at 85 € (5 € selling cost each). If refused, fixed overheads fall by 100 € and the facilities can be rented for 1 000 €. Decision?',o:['Accept: +1 000 €','Reject: accepting gives 100 € less','Accept: +100 €','Indifferent'],a:1,e:'Profit 1 600 € if accepted vs 1 700 € if refused. Contribution of the order 1 000 € − (100 € overheads saved + 1 000 € rent) = −100 €.'},
{id:'q88',topic:'s5',src:'course',q:'D&W makes 100 doors (variable cost 79 €, fixed costs 1 500 € unchanged whatever the decision). A supplier offers them at 85 €. Short term?',o:['Buy: saves 900 €','Make: saves 600 €','Buy: 85 < 94','Indifferent'],a:1,e:'Relevant: make 7 900 € vs buy 8 500 € → make, 600 € cheaper.'},
{id:'q89',topic:'s5',src:'course',q:'Long term: buying the doors frees capacity for 50 more windows (contribution 38 € each, extra fixed overheads 50 €) and saves the doors’ fixed costs. Effect of outsourcing on profit?',o:['−600 €','+2 750 €','+1 800 €','+4 550 €'],a:1,e:'Profit 4 550 € (buy doors, 150 windows) vs 1 800 € (make both): +2 750 €. Check: −600 (variable saving vs purchase) + 1 500 (fixed saved) + 50 × 38 − 50 = 2 750.'},
{id:'q90',topic:'s5',src:'course',q:'Trays: variable production cost 15 €; fixed costs 4 € per unit (based on 8 000 units); excess capacity for 500 units. Minimum price for the special order?',o:['19 €','15 €','4 €','11 €'],a:1,e:'Only the variable cost is relevant; no opportunity cost. Minimum price = 15 €.'},
{id:'q91',topic:'s5',src:'course',q:'XYZ (VCu 4.25, price 6): accepting client B (80 000 units at 5 €) means losing client C (30 000 units at 6 €). Net economic profit of B?',o:['60 000 €','52 500 €','7 500 €','−7 500 €'],a:2,e:'B: (5 − 4.25) × 80 000 = 60 000; opportunity cost C: (6 − 4.25) × 30 000 = 52 500 → 7 500 €.'},
{id:'q92',topic:'s5',src:'course',q:'A part costs 2 € materials, 3 € labour, 1 € variable overhead and 1 € fixed overhead to make; it can be bought for 6.50 €. Fixed costs are unavoidable. Decision?',o:['Buy: 6.50 < 7','Make: relevant cost 6 € < 6.50 €','Buy: fixed overheads saved','Indifferent'],a:1,e:'Relevant internal cost = variable cost 6 € (avoidable). Also consider supplier reliability, quality and core skills.'},
{id:'q93',topic:'s5',src:'course',q:'Brands: contribution − avoidable fixed costs = A 914, B −20, C 854, D 613. Net profits: A 234, B −375, C 109, D −7. Which brand(s) should be dropped?',o:['B and D','B only','D only','None'],a:1,e:'Only B has a negative direct margin. D covers 613 € of common costs: dropping it would lower profit.'},
{id:'q94',topic:'s5',src:'course',q:'Optical switch: materials 11, labour 2, variable overhead 3, fixed overhead 7 (unavoidable). Supplier price 17.50 €. Decision?',o:['Buy: 17.50 < 23','Make: 16 € < 17.50 €','Buy: saves 5.50 €','Make: saves 7 €'],a:1,e:'Differential costs: make 16 vs buy 17.50 → make, 1.50 € per unit cheaper. Incremental: 23 vs 24.50.'},
{id:'q95',topic:'s5',src:'course',q:'Jumpers, 30 000 machine hours, demand unlimited: Type 1 CM 75 € for 3 h; Type 2 CM 150 € for 2 h; Type 3 CM 40 € for 0.1 h. What to produce?',o:['10 000 of Type 2','300 000 of Type 3','10 000 of each type','15 000 of Type 2'],a:1,e:'CM per hour: 25, 75, 400 → Type 3 only: 30 000 / 0.1 = 300 000 units.'},
{id:'q96',topic:'s5',src:'course',q:'HopeShelter kit: materials 4 €, labour 2 €, variable overhead 0.50 €, allocated fixed overhead 1.50 €; extra packaging 0.25 € for the order; spare capacity. Minimum price?',o:['8.00 €','8.25 €','6.75 €','6.50 €'],a:2,e:'Relevant costs: 4 + 2 + 0.50 + 0.25 = 6.75 €. At the 6.25 € offered, the order loses 2 000 × 0.50 = 1 000 €; qualitative factors (mission, visibility, partners) may still justify it.'},
{id:'q97',topic:'s5',src:'course',q:'Incremental vs differential method?',o:['Incremental: only relevant items; differential: all items','Incremental: all revenues and costs of each scenario; differential: only relevant ones. Same answer.','They can give opposite answers','Differential is required by IFRS'],a:1,e:'Incremental: longer but safer. Differential: faster but riskier. Both predict the same change in profit.'},
{id:'q98',topic:'s5',src:'course',q:'Rainwear, 36 000 machine hours: Navyblue CM 80 € for 2 h (demand 2 000), Greenforest 160 € for 5 h (4 000), Blackstorm 120 € for 6 h (3 000). Fixed costs 350 000 €. Profit of the optimal plan?',o:['690 000 €','1 040 000 €','760 000 €','719 920 €'],a:0,e:'Ranking 40, 32, 20 €/h → 2 000 N (4 000 h), 4 000 G (20 000 h), 12 000 h / 6 = 2 000 B. Contribution 1 040 000 − 350 000 = 690 000 €.'},
{id:'q99',topic:'s5',src:'practice',q:'In the short term, which costs are relevant to accept a special order when there is spare capacity?',o:['All costs, including allocated fixed costs','Only the variable costs and the costs specific to the order','Only fixed costs','Only past costs'],a:1,e:'Within the relevant range fixed costs do not change: they are irrelevant. Variable costs are always relevant.'}];

/* ---------- flashcards ---------- */
const CARDS=[
{id:'c0',topic:'s1',f:'Management vs financial accounting (4 differences)',b:'Regulation: optional vs compulsory\nFocus: parts of the firm, financial + non-financial vs whole firm, financial\nTime: future estimates vs past period\nInterval: frequent vs annual / semi-annual'},
{id:'c1',topic:'s1',f:'Cost object',b:'Any activity for which a separate measurement of cost is required: product, service, project, customer, activity, department.'},
{id:'c2',topic:'s1',f:'Direct cost vs overhead',b:'Direct: specifically and exclusively identified with one cost object → direct tracing.\nOverhead: shared by several cost objects → cost allocation.'},
{id:'c3',topic:'s1',f:'Full cost (Session 1)',b:'Direct materials + direct labour = direct cost\n+ overheads = full cost'},
{id:'c4',topic:'s1',f:'Variable, fixed, step, semi-variable',b:'Variable y = ax · Fixed y = a\nStep (semi-fixed): fixed within a range, then jumps\nSemi-variable y = ax + b'},
{id:'c5',topic:'s1',f:'Mixed cost from two activity levels',b:'a = (C2 − C1) / (Q2 − Q1)\nb = C1 − a × Q1'},
{id:'c6',topic:'s1',f:'How to tell fixed from variable with two levels',b:'Same total → fixed\nSame cost per unit → variable\nNeither → mixed'},
{id:'c7',topic:'s1',f:'Why does the cost per unit fall when output rises?',b:'Because not all costs are variable: fixed costs are spread over more units.'},
{id:'c8',topic:'s1',f:'Four environmental cost types',b:'Trying to get it right: protection (processes, training), appraisal (controls, inspections)\nGetting it wrong: internal failure (caught before the public), external failure (reaches the public)'},
{id:'c9',topic:'s1',f:'Three functions of management accounting',b:'1. Allocate costs between COGS and inventories\n2. Relevant information for decisions\n3. Planning, control, performance measurement'},
{id:'c10',topic:'s2',f:'Contribution margin',b:'CM = P − VCu = contribution / Q\nEach extra unit sold adds CM to profit (within the relevant range).'},
{id:'c11',topic:'s2',f:'Break-even point',b:'Units = FC / CM (round UP)\nSales € = FC / CM ratio\nAt the BEP, profit = 0.'},
{id:'c12',topic:'s2',f:'CM ratio',b:'CM / P = contribution / sales\n“For each euro sold we earn x cents of contribution.”'},
{id:'c13',topic:'s2',f:'Units for a target profit / price for a target profit',b:'Units = (FC + profit) / CM\nPrice = (profit + FC) / Q + VCu'},
{id:'c14',topic:'s2',f:'Margin of safety',b:'Expected sales − BEP (units or €)\n% = (expected − BEP) / expected: how much sales can fall before a loss.'},
{id:'c15',topic:'s2',f:'Operating leverage',b:'Total contribution / profit\n%Δ profit = OL × %Δ sales\nHigh with many fixed costs; highest near the BEP.'},
{id:'c16',topic:'s2',f:'Four CVP assumptions',b:'Linear costs and revenues · costs split into fixed and variable · everything else constant · relevant range only → short-term model.'},
{id:'c17',topic:'s2',f:'Sensitivity: price ↑, VCu ↑, FC ↑',b:'Price ↑ → CM ↑, BEP ↓\nVCu ↑ → CM ↓, BEP ↑\nFC ↑ → CM no effect, BEP ↑'},
{id:'c18',topic:'s3',f:'Cost driver rate',b:'Department overheads / number of cost drivers of the department'},
{id:'c19',topic:'s3',f:'Blanket rate vs department rates',b:'Blanket: one driver, one rate for the whole organisation.\nDepartments: one driver and one rate per department (traditional full costing).'},
{id:'c20',topic:'s3',f:'The 4 steps of the full costing method',b:'Apportionment (not developed): 1. overheads to departments; 2. service → operational.\nAbsorption: 3. rate per department; 4. cost of each cost object (and inventories).'},
{id:'c21',topic:'s3',f:'Operational vs service departments',b:'Operational (purchasing, production, distribution): overheads go to cost objects.\nService (administration): overheads re-assigned to operational departments.'},
{id:'c22',topic:'s3',f:'Value chain',b:'Sequence of activities that add value for the customer.\nPrimary: purchasing, production, distribution. Support: administration, accounting, IT.'},
{id:'c23',topic:'s3',f:'Three types of inventory',b:'Direct materials · work-in-process (none in this course) · finished goods'},
{id:'c24',topic:'s3',f:'Weighted average cost',b:'(opening € + in €) / (opening units + in units)\nUsed for both outflows and closing inventory.'},
{id:'c25',topic:'s3',f:'Stock movement',b:'Opening + in − out = closing\nMaterials: in = purchases, out = consumption\nFinished goods: in = production, out = sales'},
{id:'c26',topic:'s4',f:'Purchasing cost of materials bought',b:'Direct purchase cost + purchasing overheads (driver: quantity bought)'},
{id:'c27',topic:'s4',f:'Production cost of goods made',b:'Materials consumed (at WAC, purchase cost) + direct production costs + production overheads'},
{id:'c28',topic:'s4',f:'Full cost and profit',b:'Full cost = production cost of goods sold (WAC) + distribution overheads (+ customer services…)\nProfit = sales − full cost'},
{id:'c29',topic:'s4',f:'Two weaknesses of department full costing',b:'1. Few volume-based drivers → subsidy effect (high-volume products subsidise complex low-volume ones)\n2. Support and production department costs are merged'},
{id:'c30',topic:'s4',f:'When is department full costing appropriate?',b:'Direct costs dominant · information costs high · limited range of products'},
{id:'c31',topic:'s4',f:'D&W February: production cost of a door and a window',b:'Door 88.20 direct + 17.30 overheads = 105.50\nWindow 142.14 + 17.20 = 159.34'},
{id:'c32',topic:'s4',f:'Driver of customer services in T&Co / Armor Lux',b:'100 € of production cost of goods SOLD → value the finished goods (WAC) first.'},
{id:'c33',topic:'s5',f:'Relevant costs',b:'Expected future costs/revenues that differ among alternatives.\nPast (sunk) costs: always irrelevant.'},
{id:'c34',topic:'s5',f:'Product mix method (5 steps)',b:'1. Scarce resource  2. CM per unit  3. CM per unit of scarce resource  4. Rank  5. Optimise (fill demand in order)'},
{id:'c35',topic:'s5',f:'Short term vs long term: fixed costs',b:'Short term: fixed costs irrelevant (incurred anyway).\nLong term: all costs relevant.\nVariable costs and qualitative factors: always relevant.'},
{id:'c36',topic:'s5',f:'Incremental vs differential method',b:'Incremental: all revenues and costs, two columns (longer, safer).\nDifferential: only relevant items (faster, riskier). Same answer.'},
{id:'c37',topic:'s5',f:'Special order: two questions',b:'1. Can we? spare capacity ≥ order\n2. Should we? relevant revenues − relevant costs > 0 (+ opportunity cost if capacity is short)'},
{id:'c38',topic:'s5',f:'Assumptions of a short-term special order',b:'One-time order · normal price unaffected (separate market) · no better opportunity · resources have no other use · fixed costs unavoidable'},
{id:'c39',topic:'s5',f:'Make or buy: qualitative factors',b:'Supplier reliability, quality, delivery, price rises; control over design; loss of core competencies; alternative use of the capacity.'},
{id:'c40',topic:'s5',f:'Drop a segment?',b:'Keep it if contribution − avoidable fixed costs > 0. Common allocated fixed costs stay anyway.'},
{id:'c41',topic:'s5',f:'Opportunity cost (special order without spare capacity)',b:'The contribution lost on the business displaced by the order (XYZ: 30 000 × 1.75 = 52 500).'},
{id:'c42',topic:'s2',f:'D&W windows: BEP, profit at 400, price for 5 000 profit',b:'BEP 286 · profit 8 000 · price 162.50'},
{id:'c43',topic:'s5',f:'D&W cases: four answers',b:'Special order short term +500 (accept) · long term −100 (reject)\nMake or buy short term: make (+600) · long term: buy (+2 750)'}];

/* ---------- exercises ---------- */
const r2=x=>Math.round(x*100)/100;
const f2=x=>fmt(r2(x));
const u2=x=>fmt(Math.round(x*100)/100);
const u4=x=>String(Math.round(x*1e4)/1e4);
const EXERCISES=[
// Session 1
{id:'x-s1-mixed',topic:'s1',type:'calc',src:'practice',title:'Mixed cost from two activity levels',
 gen:u=>{const a=u.int(2,15),b=u.step(1000,9000,500),q1=u.step(400,1200,100),q2=q1+u.step(200,800,100),q3=q2+u.step(100,600,100);return {a,b,q1,q2,q3,c1:a*q1+b,c2:a*q2+b}},
 q:v=>`Stores costs are ${fmt(v.c1)} € for ${fmt(v.q1)} units and ${fmt(v.c2)} € for ${fmt(v.q2)} units. Find the equation y = ax + b and the cost for ${fmt(v.q3)} units.`,
 parts:[{label:'a (variable cost per unit)',answer:v=>v.a,unit:'€'},{label:'b (fixed part)',answer:v=>v.b,unit:'€'},{label:v=>`Cost for ${fmt(v.q3)} units`,answer:v=>v.a*v.q3+v.b,unit:'€'}],
 solution:v=>F(`a = (${fmt(v.c2)} − ${fmt(v.c1)}) / (${fmt(v.q2)} − ${fmt(v.q1)}) = ${fmt(v.c2-v.c1)} / ${fmt(v.q2-v.q1)} = ${v.a}\nb = ${fmt(v.c1)} − ${v.a} × ${fmt(v.q1)} = ${fmt(v.b)}\ny(${fmt(v.q3)}) = ${v.a} × ${fmt(v.q3)} + ${fmt(v.b)} = ${fmt(v.a*v.q3+v.b)}`)},
{id:'x-s1-step',topic:'s1',type:'calc',src:'practice',title:'Step cost',
 gen:u=>{const block=u.pick([500,600,800,1000]),fee=u.step(300,1200,50);let q=u.step(block+50,block*4-50,50);if(q%block===0)q+=50;return {block,fee,q,n:Math.ceil(q/block)}},
 q:v=>`Machines are leased at ${fmt(v.fee)} € for every ${fmt(v.block)} units produced. Cost of the leased machines for ${fmt(v.q)} units?`,
 answer:v=>v.n*v.fee,unit:'€',
 solution:v=>F(`${fmt(v.q)} / ${fmt(v.block)} = ${u2(v.q/v.block)} → round UP to ${v.n} steps\n${v.n} × ${fmt(v.fee)} = ${fmt(v.n*v.fee)}`)},
{id:'x-s1-total',topic:'s1',type:'calc',src:'practice',title:'Total cost and cost per unit',
 gen:u=>{const kg=u.int(3,8),pkg=u.pick([2,2.5,4,4.8,5]),h=u.int(2,5),rate=u.pick([7,8,10,12]),bld=u.step(10000,30000,1000),block=u.pick([500,600]),fee=u.step(400,900,100),sf=u.step(2000,5000,500),sv=u.int(1,4),q=u.pick([1000,1200,1500,2000]);
  const n=Math.ceil(q/block),dm=kg*pkg*q,dl=h*rate*q,st=sf+sv*q,tot=dm+dl+bld+n*fee+st;return {kg,pkg,h,rate,bld,block,fee,sf,sv,q,n,dm,dl,st,tot}},
 q:v=>`One unit needs ${v.kg} kg of materials at ${f2(v.pkg)} € per kg and ${v.h} hours of direct labour at ${v.rate} € per hour. Building costs: ${fmt(v.bld)} € per quarter. Leased machines: ${fmt(v.fee)} € for every ${fmt(v.block)} units. Stores: ${fmt(v.sf)} € per quarter plus ${v.sv} € per unit. Total cost and cost per unit for ${fmt(v.q)} units in a quarter?`,
 parts:[{label:'Total cost',answer:v=>v.tot,unit:'€'},{label:'Cost per unit',answer:v=>v.tot/v.q,unit:'€'}],
 solution:v=>T(['Cost','Behaviour','Amount'],[['Direct materials',`variable: ${v.kg} × ${f2(v.pkg)} × ${fmt(v.q)}`,fmt(v.dm)],['Direct labour',`variable: ${v.h} × ${v.rate} × ${fmt(v.q)}`,fmt(v.dl)],['Building','fixed',fmt(v.bld)],['Leased machines',`step: ${v.n} × ${fmt(v.fee)}`,fmt(v.n*v.fee)],['Stores',`mixed: ${fmt(v.sf)} + ${v.sv} × ${fmt(v.q)}`,fmt(v.st)],['<b>Total</b>','',`<b>${fmt(v.tot)}</b>`],['Per unit','',f2(v.tot/v.q)]],[2])},
{id:'x-s1-ex2',topic:'s1',type:'case',src:'course',title:'Session 1 exercise 2: cost behaviour',
 q:`<p>One product needs: direct materials 6 kg at 4.80 € per kg; direct labour 4 hours at 7 € per hour; building costs 18 000 € per quarter; leased machines 600 € for every 600 units; stores 3 000 € per quarter plus 3 € per unit.</p>`,
 parts:[{type:'numeric',q:'a. Total cost of production',parts:[{label:'1 000 units',answer:82000,unit:'€'},{label:'1 500 units',answer:112500,unit:'€'},{label:'2 000 units',answer:143000,unit:'€'}]},
  {type:'numeric',q:'b. Cost per unit',parts:[{label:'1 000 units',answer:82,unit:'€'},{label:'1 500 units',answer:75,unit:'€'},{label:'2 000 units',answer:71.5,unit:'€'}]},
  {type:'numeric',q:'c. Total cost equation y = ax + b for 1 801 to 2 400 units',parts:[{label:'a',answer:59.8,unit:'€'},{label:'b',answer:23400,unit:'€'}]}],
 solution:T(['','1 000','1 500','2 000'],[['Materials (6 × 4.8 = 28.8 per unit)','28 800','43 200','57 600'],['Labour (4 × 7 = 28 per unit)','28 000','42 000','56 000'],['Building (fixed)','18 000','18 000','18 000'],['Leased machines (step)','1 200','1 800','2 400'],['Stores (3 000 + 3x)','6 000','7 500','9 000'],['<b>Total</b>','<b>82 000</b>','<b>112 500</b>','<b>143 000</b>'],['Per unit','82','75','71.5']],[1,2,3])+F('From 1 801 to 2 400 units: 4 leasing steps = 2 400\na = 28.8 + 28 + 3 = 59.8;  b = 18 000 + 3 000 + 2 400 = 23 400\ny = 59.8x + 23 400')+NOTE('<b>Check against the solution:</b> the solution says “between 1 800 and 2 400 units”; at exactly 1 800 units only 3 steps (1 800 €) are needed, so the equation holds from 1 801 units.')},
{id:'x-s1-ex3',topic:'s1',type:'case',src:'course',title:'Session 1 exercise 3: identify the behaviour',
 q:`<p>At 1 000 and 1 500 units: direct materials 38 000 / 57 000; direct labour 45 000 / 67 500; building costs 15 000 / 15 000; stores 7 000 / 9 000.</p>`,
 parts:[{type:'match',q:'a. Behaviour of each cost',pairs:[['Direct materials','Variable'],['Direct labour','Variable'],['Building costs','Fixed'],['Stores costs','Mixed']],extra:['Step']},
  {type:'numeric',q:'b. Stores: y = ax + b',parts:[{label:'a',answer:4,unit:'€'},{label:'b',answer:3000,unit:'€'}]},
  {type:'numeric',q:'c. Total cost for 2 000 units',answer:192000,unit:'€'}],
 solution:F('Materials y = 38x; labour y = 45x; building y = 15 000\nStores: a = (9 000 − 7 000) / 500 = 4; b = 7 000 − 4 × 1 000 = 3 000\nTotal(2 000) = (38 + 45 + 4) × 2 000 + 15 000 + 3 000 = 174 000 + 18 000 = 192 000')},
{id:'x-s1-dw',topic:'s1',type:'case',src:'course',title:'D&W handout: cost of 2 000 doors',
 q:`<p>Handout version of the D&amp;W slide. At 1 000 and 1 500 doors: direct materials 28 800 / 43 200; direct labour 28 000 / 42 000; administration 17 400 / 17 400; leased machines (800 € for every 800 doors) 1 600 / 1 600; stores 6 000 / 7 500.</p>`,
 parts:[{type:'numeric',q:'a. Stores: y = ax + b',parts:[{label:'a',answer:3,unit:'€'},{label:'b',answer:3000,unit:'€'}]},
  {type:'numeric',q:'b. Leased machines for 2 000 doors',answer:2400,unit:'€'},
  {type:'numeric',q:'c. Total cost and cost per door for 2 000 doors',parts:[{label:'Total',answer:142400,unit:'€'},{label:'Per door',answer:71.2,unit:'€'}]}],
 solution:F('Materials 28.8 per door → 57 600; labour 28 per door → 56 000; administration 17 400\nLeased machines: 2 000 / 800 = 2.5 → 3 steps → 2 400\nStores: a = 1 500 / 500 = 3; b = 6 000 − 3 000 = 3 000 → 3 000 + 6 000 = 9 000\nTotal = 57 600 + 56 000 + 17 400 + 2 400 + 9 000 = 142 400 → 71.20 per door')+NOTE('The slide version of the same exercise uses other figures (63 300 / 94 950 …, total 320 800 for 2 000 doors): see the Session 1 sheet.')},
{id:'x-s1-classify',topic:'s1',type:'match',src:'course',title:'Usual behaviour of costs (Drury)',q:'Classify each cost as usually fixed, variable, semi-fixed or semi-variable.',
 pairs:[['Depreciation of machinery','Fixed'],['Factory rental','Fixed'],['Supplies and other indirect materials','Variable'],['Advertising','Fixed'],['Maintenance of machinery','Semi-variable'],['Factory manager’s salary','Fixed'],['Supervisory personnel','Semi-fixed'],['Royalty payments','Variable']],
 e:'Direct labour is semi-variable in the solution (or variable if it matches output exactly).'},
{id:'x-s1-env',topic:'s1',type:'match',src:'course',title:'Environmental cost types',q:'Indicate the cost type associated with each item.',
 pairs:[['Chemical spillages in the factory','Internal failure'],['Poisonous gas cloud floats towards a town','External failure'],['Controls to ensure pollution levels are within limits','Appraisal'],['Radioactive waste flows into the sea','External failure'],['Illegal levels of pollutants in on-site materials','Internal failure'],['Company processes to prevent pollution','Protection'],['Inspection of workers handling hazardous waste','Appraisal'],['Staff training to reduce environmental risks','Protection']]},
{id:'x-s1-pizza',topic:'s1',type:'match',src:'course',title:'Pizzeria Delicioso cost matrix',q:'Three pizzas (Margherita, 3 cheese, ham and cheese) share the same dough; the oven is rented. Place each cost in the matrix, as in the course solution.',
 pairs:[['Mozzarella purchasing cost','Variable direct cost'],['Parmigiano purchasing cost','Variable direct cost'],['Flour purchasing cost','Variable direct cost'],['Transportation cost of ham','Fixed direct cost'],['Transportation cost of tomato','Fixed overhead'],['Waiters’ salary','Fixed overhead'],['Oven depreciation','Fixed overhead'],['Rent','Fixed overhead'],['Oven energy consumption','Variable overhead']],
 e:'Ingredients are measured pizza by pizza, so they are traced directly, even when several pizzas use them. Ham is only in one pizza; tomatoes in two, delivered together. The solution adds that there is no wrong answer if justified: tomato or ham transport could be variable or overheads, oven energy could be fixed, waiters’ salary could be variable.'},
{id:'x-s1-text',topic:'s1',type:'text',src:'practice',title:'Vocabulary',q:'A cost that is fixed within a range of activity and then jumps by a constant amount at critical levels is called a … cost.',accept:['step','step cost','semi-fixed','semi fixed','semifixed','stepped']},
// Session 2
{id:'x-s2-bep',topic:'s2',type:'calc',src:'practice',title:'Break-even point in units',
 gen:u=>{const vc=u.step(20,120,5),cm=u.pick([7,13,17,23,35,45,55]),fc=u.step(10000,90000,1000);return {vc,p:vc+cm,cm,fc,bep:Math.ceil(fc/cm)}},
 q:v=>`Selling price ${fmt(v.p)} €; variable cost ${fmt(v.vc)} € per unit; fixed costs ${fmt(v.fc)} € per month. Break-even point in units?`,
 answer:v=>v.bep,unit:'units',tol:0,
 solution:v=>F(`CM = ${fmt(v.p)} − ${fmt(v.vc)} = ${v.cm}\nBEP = ${fmt(v.fc)} / ${v.cm} = ${u2(v.fc/v.cm)} → round UP: ${fmt(v.bep)} units`)},
{id:'x-s2-sales',topic:'s2',type:'calc',src:'practice',title:'CM ratio and BEP in sales',
 gen:u=>{const p=u.pick([20,40,50,80,100,200]),ratio=u.pick([20,25,30,40,50,60]),fc=u.step(30000,240000,6000);return {p,ratio,vc:p*(100-ratio)/100,fc}},
 q:v=>`Price ${fmt(v.p)} €; variable cost ${f2(v.vc)} € per unit; fixed costs ${fmt(v.fc)} €. Contribution margin ratio and break-even point in sales?`,
 parts:[{label:'CM ratio',answer:v=>v.ratio,unit:'%',tol:0.05},{label:'BEP in sales',answer:v=>v.fc/(v.ratio/100),unit:'€',tolPct:0.01}],
 solution:v=>F(`CM ratio = (${fmt(v.p)} − ${f2(v.vc)}) / ${fmt(v.p)} = ${v.ratio}%\nBEP in sales = ${fmt(v.fc)} / ${v.ratio}% = ${f2(v.fc/(v.ratio/100))}`)},
{id:'x-s2-target',topic:'s2',type:'calc',src:'practice',title:'Target profit: units and price',
 gen:u=>{const vc=u.step(40,150,10),cm=u.step(20,80,5),fc=u.step(20000,60000,2000),tp=u.step(4000,20000,1000),q=u.step(400,1200,50);return {vc,cm,p:vc+cm,fc,tp,q,units:Math.ceil((fc+tp)/cm),price:(tp+fc)/q+vc}},
 q:v=>`Price ${fmt(v.p)} €; variable cost ${fmt(v.vc)} € per unit; fixed costs ${fmt(v.fc)} €. (a) Units to sell for a ${fmt(v.tp)} € profit? (b) Price needed for the same profit if only ${fmt(v.q)} units are sold?`,
 parts:[{label:'a. Units',answer:v=>v.units,unit:'units',tol:0},{label:'b. Price',answer:v=>v.price,unit:'€'}],
 solution:v=>F(`a. (${fmt(v.fc)} + ${fmt(v.tp)}) / ${v.cm} = ${u2((v.fc+v.tp)/v.cm)} → ${fmt(v.units)} units (round up)\nb. (${fmt(v.tp)} + ${fmt(v.fc)}) / ${fmt(v.q)} + ${fmt(v.vc)} = ${u2((v.tp+v.fc)/v.q)} + ${fmt(v.vc)} = ${f2(v.price)}`)},
{id:'x-s2-mos',topic:'s2',type:'calc',src:'practice',title:'Margin of safety',
 gen:u=>{const cm=u.pick([4,5,8,10,20,25]),bep=u.step(1000,8000,500),exp=bep+u.step(500,6000,500);return {cm,bep,fc:cm*bep,exp,p:cm*u.pick([2,3,4])}},
 q:v=>`Price ${fmt(v.p)} €; contribution margin ${v.cm} €; fixed costs ${fmt(v.fc)} €; expected sales ${fmt(v.exp)} units. Margin of safety in units and in %?`,
 parts:[{label:'Units',answer:v=>v.exp-v.bep,unit:'units',tol:0},{label:'Percentage',answer:v=>(v.exp-v.bep)/v.exp*100,unit:'%',tol:0.05}],
 solution:v=>F(`BEP = ${fmt(v.fc)} / ${v.cm} = ${fmt(v.bep)} units\nMargin of safety = ${fmt(v.exp)} − ${fmt(v.bep)} = ${fmt(v.exp-v.bep)} units\n% = ${fmt(v.exp-v.bep)} / ${fmt(v.exp)} = ${u2((v.exp-v.bep)/v.exp*100)}%`)},
{id:'x-s2-ol',topic:'s2',type:'calc',src:'practice',title:'Operating leverage',
 gen:u=>{const q=u.step(200,1000,20),cm=u.step(20,90,5),cont=q*cm,profit=u.pick([0.1,0.125,0.2,0.25,0.4,0.5])*cont,chg=u.pick([5,10,20]);return {q,cm,cont,fc:cont-profit,profit,chg,ol:cont/profit}},
 q:v=>`${fmt(v.q)} units sold; contribution margin ${v.cm} €; fixed costs ${fmt(v.fc)} €. (a) Operating leverage? (b) If sales volume rises by ${v.chg}%, by what % does profit rise?`,
 parts:[{label:'a. Operating leverage',answer:v=>v.ol,unit:'',tol:0.01},{label:'b. Profit change',answer:v=>v.ol*v.chg,unit:'%',tol:0.1}],
 solution:v=>F(`Contribution = ${fmt(v.q)} × ${v.cm} = ${fmt(v.cont)};  profit = ${fmt(v.cont)} − ${fmt(v.fc)} = ${fmt(v.profit)}\nOL = ${fmt(v.cont)} / ${fmt(v.profit)} = ${u2(v.ol)}\nProfit change = ${u2(v.ol)} × ${v.chg}% = ${u2(v.ol*v.chg)}%`)},
{id:'x-s2-norvik',topic:'s2',type:'case',src:'course',title:'Norvik simulations (Session 2 exercise 2)',
 q:'<p>Fixed costs £60 000 per year; price £20 per ticket; variable cost £10; relevant range 4 000–12 000 units.</p>',
 parts:[{type:'numeric',q:'1. Break-even point (units)',answer:6000,unit:'units',tol:0},{type:'numeric',q:'2. Units for a £30 000 profit',answer:9000,unit:'units',tol:0},{type:'numeric',q:'3. Profit if 8 000 tickets are sold',answer:20000,unit:'£'},{type:'numeric',q:'4. Price for a £30 000 profit with 8 000 tickets',answer:21.25,unit:'£'},{type:'numeric',q:'5. Target £30 000 and £8 000 more advertising: extra tickets compared with question 2',answer:800,unit:'units',tol:0}],
 solution:F('1. 60 000 / 10 = 6 000\n2. (60 000 + 30 000) / 10 = 9 000\n3. 8 000 × 10 − 60 000 = 20 000\n4. 8 000X − 80 000 − 60 000 = 30 000 → X = 21.25\n5. (68 000 + 30 000) / 10 = 9 800 → 9 800 − 9 000 = 800')},
{id:'x-s2-drury',topic:'s2',type:'case',src:'course',title:'BEP with a sales commission (Session 2 exercise 1)',
 q:'<p>Price 24 €; variable production cost 8.60 €; fixed production costs 650 000 €; fixed selling and distribution costs 230 400 €; sales commission 5% of the price; budgeted sales 90 000 units. The marketing manager suggests a price of 25 € with an 8% commission and 10 000 € more advertising.</p>',
 parts:[{type:'numeric',q:'a. Contribution margin and BEP',parts:[{label:'CM',answer:14.2,unit:'€'},{label:'BEP',answer:62000,unit:'units',tol:0}]},{type:'numeric',q:'b. % by which sales can fall before a loss',answer:31.11,unit:'%',tol:0.05},{type:'numeric',q:'c. Revised CM and BEP',parts:[{label:'CM',answer:14.4,unit:'€'},{label:'BEP',answer:61834,unit:'units',tol:0}]}],
 solution:F('a. CM = 24 − 8.60 − 1.20 = 14.20; BEP = 880 400 / 14.20 = 62 000\nb. (90 000 − 62 000) / 90 000 = 31.1%\nc. CM = 25 − 8.60 − 2.00 = 14.40; BEP = 890 400 / 14.40 = 61 833.33 → 61 834 units')+NOTE('<b>Check against the solution:</b> the recommended-exercise version writes 61 833; the session version 61 834. The course rule is to round the BEP up: 61 834.')},
{id:'x-s2-lambda',topic:'s2',type:'case',src:'course',title:'Lambda: four products (review session)',
 q:T(['','A','B','C','D'],[['Selling price','10','14','40','25'],['Variable cost per unit','5','10','X','20'],['Sales volume','15 000','X','10 000','15 000'],['Fixed costs','45 000','60 000','100 000','X'],['Profit','X','20 000','0','45 000']],[1,2,3,4]),
 parts:[{type:'numeric',q:'1. The missing values',parts:[{label:'Profit of A',answer:30000,unit:'€'},{label:'Volume of B',answer:20000,unit:'units',tol:0},{label:'VCu of C',answer:30,unit:'€'},{label:'Fixed costs of D',answer:30000,unit:'€'}]},
  {type:'numeric',q:'2. Break-even points (units)',parts:[{label:'A',answer:9000,tol:0},{label:'B',answer:15000,tol:0},{label:'C',answer:10000,tol:0},{label:'D',answer:6000,tol:0}]},
  {type:'numeric',q:'3. Margins of safety (%)',parts:[{label:'A',answer:40,unit:'%'},{label:'B',answer:25,unit:'%'},{label:'C',answer:0,unit:'%'},{label:'D',answer:60,unit:'%'}]},
  {type:'mcq',q:'4. Where should the company focus its efforts?',o:['Product C: highest CM (10), but high fixed costs and no margin of safety → develop its sales or cut its fixed costs','Product B: lowest CM','Drop product C, which only breaks even','Product A: highest fixed costs'],a:0}],
 solution:T(['','A','B','C','D'],[['CM','5','4','10','5'],['Missing value','profit 30 000','volume 20 000','VCu 30','FC 30 000'],['BEP','9 000','15 000','10 000','6 000'],['MoS units','6 000','5 000','0','9 000'],['MoS %','40%','25%','0%','60%']],[1,2,3,4])},
{id:'x-s2-sens',topic:'s2',type:'case',src:'course',title:'D&W windows: sensitivity analysis',
 q:'<p>Windows: fixed costs 20 000 €, price 170 €, variable cost 100 € per unit. Break-even point (units) for each scenario?</p>',
 parts:[{type:'numeric',q:'',parts:[{label:'A: no change',answer:286,tol:0},{label:'B: price 150 €',answer:400,tol:0},{label:'C: VCu + 10 €',answer:334,tol:0},{label:'D: fixed costs + 2 000 €',answer:315,tol:0}]},
  {type:'match',q:'Effect on the break-even point',pairs:[['Selling price increases','Decreases'],['Variable cost per unit increases','Increases'],['Fixed costs decrease','Decreases'],['Fixed costs increase','Increases']],extra:['No effect']}],
 solution:F('A 20 000 / 70 = 285.71 → 286\nB 20 000 / 50 = 400\nC 20 000 / 60 = 333.33 → 334\nD 22 000 / 70 = 314.29 → 315')},
{id:'x-s2-dwol',topic:'s2',type:'case',src:'course',title:'D&W: operating leverage of doors and windows',
 q:'<p>Doors: 320 sold, sales 44 800 €, variable costs 19 136 €, fixed costs 22 000 €. Windows: 400 sold, sales 68 000 €, variable costs 40 000 €, fixed costs 20 000 €.</p>',
 parts:[{type:'numeric',q:'a. Operating leverage now',parts:[{label:'Doors',answer:7,tol:0.01},{label:'Windows',answer:3.5,tol:0.01}]},
  {type:'numeric',q:'b. Sales volume −10% (doors 288, windows 360): new profit and OL of doors',parts:[{label:'Profit',answer:1098,unit:'€',tol:1},{label:'OL',answer:21.04,tol:0.02}]},
  {type:'mcq',q:'c. Which product is riskier?',o:['Doors: more fixed costs in their cost structure and closer to their BEP','Windows: higher sales','Both equally','Windows: higher variable costs'],a:0}],
 solution:F('Doors: contribution 44 800 − 19 136 = 25 664; profit 3 664; OL = 7.00\nWindows: 28 000 / 8 000 = 3.50\n−10%: doors 288 × (140 − 59.8) = 23 097.6 (23 098) − 22 000 = 1 098 → OL 21.04')},
// Session 3
{id:'x-s3-rate',topic:'s3',type:'calc',src:'practice',title:'Cost driver rate with a “per 100” driver',
 gen:u=>{const rate=u.pick([2.5,4,5,6,7.5,8,12,15]),m1=u.step(40000,200000,5000),m2=u.step(40000,200000,5000);return {rate,m1,m2,n:(m1+m2)/100,oh:rate*(m1+m2)/100}},
 q:v=>`Distribution overheads ${f2(v.oh)} €; cost driver: 100 € of sales. Sales: product X ${fmt(v.m1)} €, product Y ${fmt(v.m2)} €. Number of cost drivers, rate, and overheads charged to X?`,
 parts:[{label:'Number of drivers',answer:v=>v.n,unit:'',tol:0.01},{label:'Rate',answer:v=>v.rate,unit:'€'},{label:'Overheads charged to X',answer:v=>v.rate*v.m1/100,unit:'€'}],
 solution:v=>F(`Drivers = (${fmt(v.m1)} + ${fmt(v.m2)}) / 100 = ${fmt(v.n)}\nRate = ${f2(v.oh)} / ${fmt(v.n)} = ${f2(v.rate)} per 100 € of sales\nX: ${fmt(v.m1/100)} × ${f2(v.rate)} = ${f2(v.rate*v.m1/100)}`)},
{id:'x-s3-blanket',topic:'s3',type:'calc',src:'practice',title:'Blanket rate vs department rates',
 gen:u=>{const kg=u.int(2,6),pkg=u.int(3,9),h=u.int(2,4),w=u.pick([10,12,14,15]),ra=u.pick([10,12.5,15]),rb=u.pick([20,24,30]),rc=u.pick([4,5,6]),ha=u.step(10000,30000,5000),hb=u.step(20000,40000,5000),hc=u.step(20000,40000,5000);
  const oa=ra*ha,ob=rb*hb,oc=rc*hc,tot=oa+ob+oc,H=ha+hb+hc,blanket=tot/H,ta=0.5,tb=u.pick([0.5,1]),tc=h-ta-tb;return {kg,pkg,h,w,ra,rb,rc,ha,hb,hc,oa,ob,oc,tot,H,blanket,ta,tb,tc,dir:kg*pkg+h*w}},
 q:v=>`A product needs ${v.kg} kg of material at ${v.pkg} € and ${v.h} direct labour hours at ${v.w} €. Overheads (absorbed per labour hour): department A ${fmt(v.oa)} € for ${fmt(v.ha)} h; B ${fmt(v.ob)} € for ${fmt(v.hb)} h; C ${fmt(v.oc)} € for ${fmt(v.hc)} h. The product spends ${v.ta} h in A, ${v.tb} h in B and ${v.tc} h in C. Full cost per unit (a) with one blanket rate, (b) with department rates?`,
 parts:[{label:'a. Blanket rate',answer:v=>v.dir+v.h*v.blanket,unit:'€',tol:0.02},{label:'b. Department rates',answer:v=>v.dir+v.ta*v.ra+v.tb*v.rb+v.tc*v.rc,unit:'€'}],
 solution:v=>F(`Direct cost = ${v.kg} × ${v.pkg} + ${v.h} × ${v.w} = ${fmt(v.dir)}\na. Blanket rate = ${fmt(v.tot)} / ${fmt(v.H)} = ${u4(v.blanket)} → ${fmt(v.dir)} + ${v.h} × ${u4(v.blanket)} = ${f2(v.dir+v.h*v.blanket)}\nb. Rates A ${v.ra}, B ${v.rb}, C ${v.rc} → ${v.ta} × ${v.ra} + ${v.tb} × ${v.rb} + ${v.tc} × ${v.rc} = ${f2(v.ta*v.ra+v.tb*v.rb+v.tc*v.rc)}\n   full cost = ${f2(v.dir+v.ta*v.ra+v.tb*v.rb+v.tc*v.rc)}`)},
{id:'x-s3-wacm',topic:'s3',type:'calc',src:'practice',title:'Materials: weighted average cost',
 gen:u=>{const q0=u.step(1000,6000,500),p0=r2(u.step(3,9,0.1)),q1=u.step(1000,6000,500),p1=r2(u.step(3,9,0.1)),c=u.step(500,q0+q1-500,500),wac=Math.round((q0*p0+q1*p1)/(q0+q1)*100)/100;return {q0,p0,q1,p1,c,wac}},
 q:v=>`Opening stock ${fmt(v.q0)} kg at ${f2(v.p0)} €; purchases ${fmt(v.q1)} kg at ${f2(v.p1)} € (purchasing cost); consumption ${fmt(v.c)} kg. WAC (2 decimals), cost of the materials consumed and closing stock (at the rounded WAC)?`,
 parts:[{label:'WAC per kg',answer:v=>v.wac,unit:'€'},{label:'Consumed',answer:v=>v.c*v.wac,unit:'€',tol:0.05},{label:'Closing stock',answer:v=>(v.q0+v.q1-v.c)*v.wac,unit:'€',tol:0.05}],
 solution:v=>F(`WAC = (${fmt(v.q0)} × ${f2(v.p0)} + ${fmt(v.q1)} × ${f2(v.p1)}) / (${fmt(v.q0)} + ${fmt(v.q1)}) = ${f2(v.q0*v.p0+v.q1*v.p1)} / ${fmt(v.q0+v.q1)} = ${f2(v.wac)}\nConsumed = ${fmt(v.c)} × ${f2(v.wac)} = ${f2(v.c*v.wac)}\nClosing = ${fmt(v.q0+v.q1-v.c)} kg × ${f2(v.wac)} = ${f2((v.q0+v.q1-v.c)*v.wac)}`)},
{id:'x-s3-wacf',topic:'s3',type:'calc',src:'practice',title:'Finished goods: cost of goods sold',
 gen:u=>{const q0=u.step(100,1000,50),c0=u.step(80,200,0.5),q1=u.step(100,1000,50),c1=u.step(80,200,0.5),s=u.step(50,q0+q1-50,50),wac=Math.round((q0*c0+q1*c1)/(q0+q1)*100)/100;return {q0,c0,q1,c1,s,wac}},
 q:v=>`Opening stock ${fmt(v.q0)} units valued at ${f2(v.c0)} €; production ${fmt(v.q1)} units at a production cost of ${f2(v.c1)} €; sales ${fmt(v.s)} units. Unit cost of the goods sold and their total production cost?`,
 parts:[{label:'WAC per unit',answer:v=>v.wac,unit:'€'},{label:'Production cost of goods sold',answer:v=>v.s*v.wac,unit:'€',tol:0.05}],
 solution:v=>F(`WAC = (${f2(v.q0*v.c0)} + ${f2(v.q1*v.c1)}) / ${fmt(v.q0+v.q1)} = ${f2(v.wac)}\nGoods sold = ${fmt(v.s)} × ${f2(v.wac)} = ${f2(v.s*v.wac)}; closing stock ${fmt(v.q0+v.q1-v.s)} units`)},
{id:'x-s3-stock',topic:'s3',type:'calc',src:'practice',title:'Missing figure in a stock movement',
 gen:u=>{const o=u.step(0,3000,100),i=u.step(1000,6000,100),c=u.step(500,o+i-100,100),k=u.pick(['closing','consumption','opening']);return {o,i,c,e:o+i-c,k}},
 q:v=>v.k==='closing'?`Opening stock ${fmt(v.o)} kg; ${fmt(v.i)} kg purchased; ${fmt(v.c)} kg consumed. Closing stock?`:v.k==='consumption'?`Opening stock ${fmt(v.o)} kg; ${fmt(v.i)} kg purchased; closing stock ${fmt(v.e)} kg. Quantity consumed?`:`${fmt(v.i)} kg purchased; ${fmt(v.c)} kg consumed; closing stock ${fmt(v.e)} kg. Opening stock?`,
 answer:v=>v.k==='closing'?v.e:v.k==='consumption'?v.c:v.o,unit:'kg',tol:0,
 solution:v=>F(`Opening + purchases − consumption = closing\n${fmt(v.o)} + ${fmt(v.i)} − ${fmt(v.c)} = ${fmt(v.e)}`)},
{id:'x-s3-alpha',topic:'s3',type:'case',src:'course',title:'Company Alpha (Session 3 exercise 1)',
 q:'<p>Product XTR: 4 kg of plastic at 5 € per kg; 3 direct labour hours at 12 €. Overheads 1 000 000 €; 80 000 direct labour hours in total. Departments: A 250 000 € (20 000 h), B 600 000 € (30 000 h), C 150 000 € (30 000 h). XTR spends 0.5 h in A, 1 h in B and 1.5 h in C.</p>',
 parts:[{type:'numeric',q:'a. Blanket rate and full cost of XTR',parts:[{label:'Rate per hour',answer:12.5,unit:'€'},{label:'Full cost',answer:93.5,unit:'€'}]},
  {type:'numeric',q:'b. Department rates and full cost',parts:[{label:'A',answer:12.5,unit:'€'},{label:'B',answer:20,unit:'€'},{label:'C',answer:5,unit:'€'},{label:'Full cost',answer:89.75,unit:'€'}]}],
 solution:F('a. 1 000 000 / 80 000 = 12.5 → 20 + 36 + 3 × 12.5 = 93.5\nb. 12.5, 20, 5 → overheads 0.5 × 12.5 + 1 × 20 + 1.5 × 5 = 33.75 → 89.75')},
{id:'x-s3-techxl',topic:'s3',type:'case',src:'course',title:'TechXL: materials and finished goods (Session 3 exercise 2)',
 q:'<p>March closing stock: 12 000 L of methanol at 0.60 €. April: purchases 8 000 L at 0.55 €, consumption 10 000 L.<br>November closing stock: 1 000 units of A at 220 €. December: production 1 100 at 200 €, sales 1 350.</p>',
 parts:[{type:'numeric',q:'a. Methanol',parts:[{label:'WAC per litre',answer:0.58,unit:'€'},{label:'Cost of the 10 000 L consumed',answer:5800,unit:'€'}]},
  {type:'numeric',q:'b. Product A',parts:[{label:'Unit cost of A sold',answer:209.53,unit:'€'},{label:'Closing inventory (750 units)',answer:157147.5,unit:'€',tol:10}]}],
 solution:F('a. (7 200 + 4 400) / 20 000 = 0.58 → 5 800; closing 10 000 L = 5 800\nb. (220 000 + 220 000) / 2 100 = 209.53 → sales 1 350 × 209.53 = 282 865.50; closing 750 × 209.53 = 157 147.50')},
{id:'x-s3-mcgregor',topic:'s3',type:'case',src:'course',title:'McGregor: overhead analysis table',
 q:'<p>Purchasing (driver: kg bought): material M 15 000 kg, material T 16 600 kg. Production 1 (kg used): kilt A 2 000 kg, kilt B 2 125 kg. Production 2 (labour hours): A 6 000 h, B 6 400 h. Distribution (hundreds of € of turnover): A 100 000 €, B 135 000 €. Overheads after re-assignment: 15 800 €, 8 250 €, 9 300 €, 11 750 €.</p>',
 parts:[{type:'numeric',q:'Number of cost drivers',parts:[{label:'Purchasing',answer:31600,tol:0},{label:'Production 1',answer:4125,tol:0},{label:'Production 2',answer:12400,tol:0},{label:'Distribution',answer:2350,tol:0}]},
  {type:'numeric',q:'Cost driver rates',parts:[{label:'Purchasing',answer:0.5,unit:'€'},{label:'Production 1',answer:2,unit:'€'},{label:'Production 2',answer:0.75,unit:'€'},{label:'Distribution',answer:5,unit:'€'}]}],
 solution:T(['','Purchasing','Production 1','Production 2','Distribution'],[['Overheads','15 800','8 250','9 300','11 750'],['Drivers','31 600','4 125','12 400','2 350'],['Rate','0.50','2.00','0.75','5.00']],[1,2,3,4])},
{id:'x-s3-honey',topic:'s3',type:'case',src:'course',title:'HoneyBees beehives',
 q:'<p>Overheads after re-assignment: purchasing 91 302 € (19 664 kg bought), wood cutting 171 222 € (15 217 kg of wood used), assembling 56 286 € (36 500 labour hours), distribution 12 290 € (4 690 beehives sold). Direct costs: administrative staff 13 € per hour; wood 15.20 € per kg; production labour 12 € per hour. A deluxe beehive needs 5 hours of administrative staff, 4 kg of wood and 12 hours of production. Use the rates rounded to 2 decimals.</p>',
 parts:[{type:'numeric',q:'a. Cost driver rates',parts:[{label:'Purchasing',answer:4.64,unit:'€'},{label:'Wood cutting',answer:11.25,unit:'€'},{label:'Assembling',answer:1.54,unit:'€'},{label:'Distribution',answer:2.62,unit:'€'}]},
  {type:'numeric',q:'b. Total cost of one deluxe beehive (the course applies the purchasing rate to the 5 hours)',answer:359.1,unit:'€',tol:0.05},
  {type:'numeric',q:'c. Selling price for a margin of 25% of the selling price',answer:478.8,unit:'€',tol:0.1}],
 solution:F('Overheads: 4.64 × 5 + 11.25 × 4 + 1.54 × 12 + 2.62 = 23.20 + 45.00 + 18.48 + 2.62 = 89.30\nDirect: 5 × 13 + 4 × 15.20 + 12 × 12 = 65 + 60.80 + 144 = 269.80\nTotal = 359.10;  price = 359.10 / (1 − 25%) = 478.80')+NOTE('<b>Check against the solution:</b> the course solution writes the same sum but gives 356.51 € and a price of 475.35 €; adding its own terms gives 359.10 €. The exercise is also odd: the purchasing driver is “kg bought” but is applied to 5 hours of staff. Follow the method, not this figure.')},
{id:'x-s3-shelves',topic:'s3',type:'case',src:'course',title:'Bookshelves and cabinets (review session)',
 q:'<p>Budgeted overheads: cutting 200 000 €, finishing 450 000 €. Machine hours: a bookshelf needs 2 h in cutting and 8 h in finishing; a cabinet 10 h and 2 h. Production: 6 000 bookshelves and 10 000 cabinets.</p>',
 parts:[{type:'numeric',q:'a. Blanket rate per machine hour and overhead per unit',parts:[{label:'Blanket rate',answer:3.61,unit:'€',tol:0.02},{label:'Bookshelf',answer:36.11,unit:'€',tol:0.15},{label:'Cabinet',answer:43.33,unit:'€',tol:0.15}]},
  {type:'numeric',q:'b. Department rates and overhead per unit',parts:[{label:'Cutting rate',answer:1.79,unit:'€'},{label:'Finishing rate',answer:6.62,unit:'€'},{label:'Bookshelf',answer:56.5,unit:'€',tol:0.05},{label:'Cabinet',answer:31.1,unit:'€',tol:0.05}]}],
 solution:F('Machine hours = 6 000 × 10 + 10 000 × 12 = 180 000\na. 650 000 / 180 000 = 3.61 (the solution uses 3.6 → 36.00 and 43.20)\nb. Cutting 200 000 / (6 000 × 2 + 10 000 × 10) = 200 000 / 112 000 = 1.79\n   Finishing 450 000 / (6 000 × 8 + 10 000 × 2) = 450 000 / 68 000 = 6.62\n   Bookshelf 2 × 1.79 + 8 × 6.62 = 56.54 ≈ 56.5;  cabinet 10 × 1.79 + 2 × 6.62 = 31.14 ≈ 31.1')+'<p>The blanket rate distorts both costs: the bookshelf, heavy in the expensive finishing department, is undercosted.</p>'},
{id:'x-s3-dw',topic:'s3',type:'case',src:'course',title:'D&W overhead analysis table',
 q:'<p>Overheads: purchasing 6 300 € (2 000 kg of wood + 5 000 kg of glass bought); cutting 6 470 € (200 machine hours); aggregating 3 810 € (200 labour hours); splitting 1 780 € (100 labour hours); distribution 6 420 € (100 doors + 900 windows sold).</p>',
 parts:[{type:'numeric',q:'Cost driver rates',parts:[{label:'Purchasing',answer:0.9,unit:'€'},{label:'Cutting',answer:32.35,unit:'€'},{label:'Aggregating',answer:19.05,unit:'€'},{label:'Splitting',answer:17.8,unit:'€'},{label:'Distribution',answer:6.42,unit:'€'}]},
  {type:'numeric',q:'Blanket rate (all overheads per product sold)',answer:24.78,unit:'€'}],
 solution:F('6 300 / 7 000 = 0.90;  6 470 / 200 = 32.35;  3 810 / 200 = 19.05;  1 780 / 100 = 17.80;  6 420 / 1 000 = 6.42\nBlanket: 24 780 / 1 000 = 24.78')},
{id:'x-s3-steps',topic:'s3',type:'order',src:'course',title:'The four steps of full costing',q:'Put the steps of the two-stage allocation in order.',
 items:['Assign all overheads to operational and service departments','Re-assign service department overheads to operational departments','Calculate a cost driver rate for each operational department','Calculate the cost of each cost object (and of the inventories)']},
// Session 4
{id:'x-s4-flow',topic:'s4',type:'order',src:'course',title:'From purchase to profit',q:'Put the calculations of a full costing exercise in order.',
 items:['Overhead analysis table (cost driver rates)','Purchasing cost of materials bought','Materials inventory: WAC of the materials consumed','Production cost of goods made','Finished goods inventory: WAC of the goods sold','Full cost of goods sold','Profit = sales − full cost']},
{id:'x-s4-drivers',topic:'s4',type:'match',src:'practice',title:'Which quantity for which department?',q:'Match each overhead with the quantity its driver counts.',
 pairs:[['Purchasing overheads','Quantity bought'],['Production overheads (finished units)','Quantity produced'],['Distribution overheads (units, 100 € of sales)','Quantity sold'],['Customer services (100 € of production cost of goods sold)','Production cost of goods sold']],extra:['Opening stock']},
{id:'x-s4-purch',topic:'s4',type:'calc',src:'practice',title:'Purchasing cost of materials bought',
 gen:u=>{const m=u.step(4000,20000,500),p=u.step(10,30,0.2),rate=u.step(60,400,10),oh=rate*m/100;return {m,p:r2(p),rate,oh}},
 q:v=>`${fmt(v.m)} m of fabric bought at ${f2(v.p)} € per metre. Purchasing overheads ${fmt(v.oh)} €; driver: 100 m of purchased fabric. Purchasing cost per metre and in total?`,
 parts:[{label:'Per metre',answer:v=>v.p+v.rate/100,unit:'€'},{label:'Total',answer:v=>v.m*v.p+v.oh,unit:'€',tol:0.05}],
 solution:v=>F(`Drivers = ${fmt(v.m)} / 100 = ${fmt(v.m/100)}; rate = ${fmt(v.oh)} / ${fmt(v.m/100)} = ${fmt(v.rate)} per 100 m\nTotal = ${fmt(v.m)} × ${f2(v.p)} + ${fmt(v.oh)} = ${f2(v.m*v.p+v.oh)} → ${f2(v.p+v.rate/100)} per metre`)},
{id:'x-s4-prod',topic:'s4',type:'calc',src:'practice',title:'Production cost of one unit',
 gen:u=>{const kg=u.int(2,15),pk=u.step(4,14,0.02),m1=u.pick([12,15,18,24,30]),w1=u.pick([15,15.5,16,16.5]),m2=u.pick([6,12,30,36]),w2=u.pick([15,15.5,16]),mh=u.pick([12,15,18,30]),r1=u.step(15,35,0.05),r2_=u.step(10,25,0.05);return {kg,pk:r2(pk),m1,w1,m2,w2,mh,r1:r2(r1),r2:r2(r2_)}},
 q:v=>`One unit needs ${v.kg} kg of material (consumed at ${f2(v.pk)} € per kg), ${v.m1} min of direct labour in cutting at ${v.w1} € per hour, ${v.m2} min in assembly at ${v.w2} € per hour, and ${v.mh} machine-minutes in cutting. Overhead rates: cutting ${f2(v.r1)} € per machine hour, assembly ${f2(v.r2)} € per labour hour. Production cost of one unit?`,
 answer:v=>v.kg*v.pk+v.m1/60*v.w1+v.m2/60*v.w2+v.mh/60*v.r1+v.m2/60*v.r2,unit:'€',tol:0.02,
 solution:v=>F(`Materials ${v.kg} × ${f2(v.pk)} = ${f2(v.kg*v.pk)}\nLabour ${u4(v.m1/60)} h × ${v.w1} + ${u4(v.m2/60)} h × ${v.w2} = ${u4(v.m1/60*v.w1+v.m2/60*v.w2)}\nOverheads ${u4(v.mh/60)} × ${f2(v.r1)} + ${u4(v.m2/60)} × ${f2(v.r2)} = ${u4(v.mh/60*v.r1+v.m2/60*v.r2)}\nProduction cost = ${f2(v.kg*v.pk+v.m1/60*v.w1+v.m2/60*v.w2+v.mh/60*v.r1+v.m2/60*v.r2)}`)},
{id:'x-s4-full',topic:'s4',type:'calc',src:'practice',title:'Full cost and profit of the goods sold',
 gen:u=>{const q0=u.step(200,1000,100),c0=u.step(60,150,0.5),q1=u.step(500,2000,100),c1=u.step(60,150,0.5),s=u.step(300,q0+q1-100,100),wac=Math.round((q0*c0+q1*c1)/(q0+q1)*100)/100,d=u.step(2,9,0.25),p=Math.round(wac+d+u.step(-15,25,1));return {q0,c0,q1,c1,s,wac,d,p}},
 q:v=>`Opening stock ${fmt(v.q0)} units at ${f2(v.c0)} €; produced ${fmt(v.q1)} at ${f2(v.c1)} €; sold ${fmt(v.s)} at ${fmt(v.p)} €. Distribution overheads ${f2(v.d)} € per unit sold. Full cost per unit sold and total profit (WAC rounded to 2 decimals)? Enter a loss as a negative number.`,
 parts:[{label:'Full cost per unit',answer:v=>v.wac+v.d,unit:'€'},{label:'Profit',answer:v=>(v.p-v.wac-v.d)*v.s,unit:'€',tol:0.5}],
 solution:v=>F(`WAC = (${f2(v.q0*v.c0)} + ${f2(v.q1*v.c1)}) / ${fmt(v.q0+v.q1)} = ${f2(v.wac)}\nFull cost = ${f2(v.wac)} + ${f2(v.d)} = ${f2(v.wac+v.d)}\nProfit = (${fmt(v.p)} − ${f2(v.wac+v.d)}) × ${fmt(v.s)} = ${f2((v.p-v.wac-v.d)*v.s)}`)},
{id:'x-s4-dw',topic:'s4',type:'case',src:'course',title:'D&W February: the full chain',
 q:'<p>Use the Session 3–4 data: purchasing rate 0.90 €/kg bought; wood bought 2 000 kg at 4.22 €, opening wood 3 000 kg at 4.22 €, 4 000 kg consumed; glass bought 5 000 kg at 12.36 €, no opening stock. Direct production cost of a door 88.20 € and production overheads 17.30 €; window direct 142.14 € (with glass at 13.26 €) and overheads 17.20 €. Windows: 500 in stock at 150.50 €, 500 produced, 900 sold at 170 €. Doors: 500 in stock at 99.80 €, 200 produced, 100 sold at 100 €. Distribution 6.42 € per product sold.</p>',
 parts:[{type:'numeric',q:'a. Purchasing cost per kg bought',parts:[{label:'Wood',answer:5.12,unit:'€'},{label:'Glass',answer:13.26,unit:'€'}]},
  {type:'numeric',q:'b. WAC of the wood consumed',answer:4.58,unit:'€'},
  {type:'numeric',q:'c. Production cost per unit made',parts:[{label:'Door',answer:105.5,unit:'€'},{label:'Window',answer:159.34,unit:'€'}]},
  {type:'numeric',q:'d. WAC of the goods sold',parts:[{label:'Door',answer:101.43,unit:'€'},{label:'Window',answer:154.92,unit:'€'}]},
  {type:'numeric',q:'e. Full cost per unit sold',parts:[{label:'Door',answer:107.85,unit:'€'},{label:'Window',answer:161.34,unit:'€'}]},
  {type:'numeric',q:'f. Profit (enter a loss as a negative number)',parts:[{label:'Doors',answer:-785,unit:'€',tol:1},{label:'Windows',answer:7794,unit:'€',tol:1},{label:'Total',answer:7009,unit:'€',tol:1}]}],
 solution:F('a. Wood 4.22 + 0.90 = 5.12; glass 12.36 + 0.90 = 13.26\nb. (12 660 + 10 240) / 5 000 = 4.58\nc. Door 88.20 + 17.30 = 105.50; window 142.14 + 17.20 = 159.34\nd. Doors (49 900 + 21 100) / 700 = 101.43; windows (75 250 + 79 670) / 1 000 = 154.92\ne. 101.43 + 6.42 = 107.85; 154.92 + 6.42 = 161.34\nf. Doors (100 − 107.85) × 100 = −785; windows (170 − 161.34) × 900 = 7 794; total 7 009')},
{id:'x-s4-pizza',topic:'s4',type:'case',src:'course',title:'Pizzeria Delicioso (Session 4 exercise)',
 q:'<p>Imperiale: 80 000 pizzas at 16 €; Royale: 60 000 at 20 €. Direct costs (Imperiale / Royale): dough 25 000 / 18 000; ingredients 10 000 / 56 000; production labour 400 000 / 380 000; distribution labour 300 000 / 390 000. Overheads: purchasing 239 800 € (driver: € of direct purchasing cost); production 280 800 € (€ of direct labour cost in production); distribution 198 800 € (pizzas sold).</p>',
 parts:[{type:'numeric',q:'a. Cost driver rates',parts:[{label:'Purchasing',answer:2.2,unit:'€'},{label:'Production',answer:0.36,unit:'€'},{label:'Distribution',answer:1.42,unit:'€'}]},
  {type:'numeric',q:'b. Production cost (total)',parts:[{label:'Imperiale',answer:656000,unit:'€'},{label:'Royale',answer:753600,unit:'€'}]},
  {type:'numeric',q:'c. Full cost (total)',parts:[{label:'Imperiale',answer:1069600,unit:'€'},{label:'Royale',answer:1228800,unit:'€'}]},
  {type:'numeric',q:'d. Profit (loss as a negative number)',parts:[{label:'Imperiale',answer:210400,unit:'€'},{label:'Royale',answer:-28800,unit:'€'}]},
  {type:'numeric',q:'e. 55% of overheads are fixed and unavoidable. Total profit if the Royale is dropped?',answer:-1240,unit:'€'}],
 solution:T(['','Imperiale','Royale'],[['Direct purchasing cost','35 000','74 000'],['Purchasing overheads (× 2.20)','77 000','162 800'],['Production labour','400 000','380 000'],['Production overheads (× 0.36)','144 000','136 800'],['<b>Production cost</b>','<b>656 000</b> (8.20)','<b>753 600</b> (12.56)'],['Distribution labour','300 000','390 000'],['Distribution overheads (× 1.42)','113 600','85 200'],['<b>Full cost</b>','<b>1 069 600</b> (13.37)','<b>1 228 800</b> (20.48)'],['Sales','1 280 000','1 200 000'],['<b>Profit</b>','<b>210 400</b>','<b>(28 800)</b>']],[1,2])+F('Royale margin before fixed overheads = 1 200 000 − 844 000 − 45% × 384 800 = 182 840 > 0\nDrop it: Imperiale bears 211 640 more fixed overheads → 210 400 − 211 640 = −1 240')},
{id:'x-s4-tco',topic:'s4',type:'case',src:'course',title:'T&Co shirts and trousers (extra full costing exercise)',
 q:'<p>Overheads: purchasing 28 800 € (100 m of fabric bought); assembly 92 800 € (direct labour hours); completion 42 750 € (finished products); distribution 137 700 € (100 € of sales); customer services 132 948 € (100 € of production cost of products sold).<br>Sales: 4 000 shirts at 170 €, 2 000 trousers at 400 €. Opening stocks: 2 800 m of fabric at 28.60 €; 900 shirts valued at 107 162 €. Purchases: 12 000 m at 27.68 €. Production: 3 700 shirts (8 260 m, 2 000 h at 66 €); 2 000 trousers (2 000 m, 6 000 h at 66 €). Round to two decimals.</p>',
 parts:[{type:'numeric',q:'a. Cost driver rates',parts:[{label:'Purchasing',answer:240,unit:'€'},{label:'Assembly',answer:11.6,unit:'€'},{label:'Completion',answer:7.5,unit:'€'},{label:'Distribution',answer:9.3,unit:'€',tol:0.01},{label:'Customer services',answer:13.21,unit:'€'}]},
  {type:'numeric',q:'b. Fabric: purchasing cost per metre and WAC',parts:[{label:'Purchasing cost',answer:30.08,unit:'€'},{label:'WAC',answer:29.8,unit:'€',tol:0.01}]},
  {type:'numeric',q:'c. Production cost per unit made',parts:[{label:'Shirt',answer:115.97,unit:'€',tol:0.02},{label:'Trousers',answer:270.1,unit:'€'}]},
  {type:'numeric',q:'d. WAC of the shirts sold',answer:116.58,unit:'€',tol:0.02},
  {type:'numeric',q:'e. Full cost per unit',parts:[{label:'Shirt',answer:147.79,unit:'€',tol:0.05},{label:'Trousers',answer:342.98,unit:'€',tol:0.05}]},
  {type:'numeric',q:'f. Profit',parts:[{label:'Shirts',answer:88842,unit:'€',tolPct:0.2},{label:'Trousers',answer:114040,unit:'€',tolPct:0.2}]}],
 solution:T(['','Purchasing','Assembly','Completion','Distribution','Customer services'],[['Drivers','120','8 000','5 700','14 800','10 065'],['Rate','240','11.60','7.50','9.30','13.21']],[1,2,3,4,5])+
  F('Fabric bought: 332 160 + 28 800 = 360 960 → 30.08 per m\nWAC = (80 080 + 360 960) / 14 800 = 29.80 → consumed 10 260 m = 305 748\nShirts made: 246 148 + 132 000 + 23 200 + 27 750 = 429 098 → 115.97\nTrousers made: 59 600 + 396 000 + 69 600 + 15 000 = 540 200 → 270.10\nShirts sold: (107 162 + 429 098) / 4 600 = 116.58 → 4 000 × 116.58 = 466 320\nShirts full cost: 466 320 + 6 800 × 9.30 + 4 663 × 13.21 = 466 320 + 63 240 + 61 598 = 591 158 → 147.79\nTrousers: 540 200 + 8 000 × 9.30 + 5 402 × 13.21 = 540 200 + 74 400 + 71 360 = 685 960 → 342.98\nProfit: shirts 680 000 − 591 158 = 88 842; trousers 800 000 − 685 960 = 114 040')},
{id:'x-s4-armor',topic:'s4',type:'case',src:'course',title:'Armor Lux (recommended exercise)',
 q:'<p>Objective: 5% profitability. Overheads: purchasing 35 476 € (100 m of fabric bought); assembly 97 200 € (direct labour hours); completion 56 050 € (finished units); distribution 116 968 € (100 € of sales); customer services 68 069 € (100 € of production cost of goods sold).<br>September sales: 7 500 shirts at 55 €, 5 200 sweaters at 216 €. Opening stocks: 2 800 m of cotton at 15.50 €, 1 500 m of wool at 16.05 €; 1 800 shirts valued at 82 476 €, 1 200 sweaters at 181.75 €. Purchases: 8 500 m of cotton at 14.75 €, 16 000 m of wool at 15.30 €. Production: 6 200 shirts (6 820 m of cotton, 2 480 h at 56 €); 5 600 sweaters (14 480 m of wool, 10 640 h at 64 €).</p>',
 parts:[{type:'numeric',q:'a. Rates',parts:[{label:'Purchasing (per 100 m)',answer:144.8,unit:'€'},{label:'Assembly',answer:7.41,unit:'€'},{label:'Completion',answer:4.75,unit:'€'},{label:'Distribution',answer:7.62,unit:'€'},{label:'Customer services',answer:5.2,unit:'€',tol:0.01}]},
  {type:'numeric',q:'b. Production cost per unit made',parts:[{label:'Shirt',answer:47.74,unit:'€',tol:0.03},{label:'Sweater',answer:183.58,unit:'€',tol:0.03}]},
  {type:'numeric',q:'c. Profitability (profit / sales)',parts:[{label:'Shirts',answer:1.89,unit:'%',tol:0.12},{label:'Sweaters',answer:3.13,unit:'%',tol:0.1}]},
  {type:'mcq',q:'d. Is the 5% objective reached?',o:['No, for neither product','Yes, for both','Only for sweaters','Only for shirts'],a:0}],
 solution:F('Purchasing: 35 476 / 245 = 144.80 → cotton 16.20 per m, wool 16.75 per m\nWAC cotton (43 400 + 137 683) / 11 300 = 16.03; wool (24 075 + 267 968) / 17 500 = 16.69\nShirts made: 109 291 + 138 880 + 18 377 + 29 450 = 295 998 → 47.74\nSweaters made: 241 645 + 680 960 + 78 842 + 26 600 = 1 028 047 → 183.58\nShirts sold at 47.31; sweaters at 183.26\nFull cost: shirts 354 819 + 4 125 × 7.62 + 3 548 × 5.20 = 354 819 + 31 433 + 18 450 = 404 702 (53.96)\nSweaters 952 936 + 85 588 + 9 529 × 5.20 = 1 088 074 (209.25)\nProfit: shirts 7 798 → 1.9% of 412 500; sweaters 35 126 → 3.1% of 1 123 200 → objective not reached')+NOTE('<b>Check against the solution:</b> the production table shows the wool consumed as 247 645 €, but the inventory table and the total (1 028 047) use <b>241 645 €</b>. The shirts’ customer-services overheads are 3 548 × 5.20 = <b>18 450 €</b>, not 17 982 €: the shirts’ profit is 7 798 € (1.9%), not 8 266 € (2.0%); the conclusion does not change. The solution also rounds every driver and rate, so recomputing without rounding moves the totals by a few euros.')},
{id:'x-s4-why',topic:'s4',type:'case',src:'practice',title:'Interpretation (self-assessed)',
 q:'<p>Under full costing, product X shows a loss and product Y a profit. The manager wants to stop X. In four or five lines, what do you answer?</p>',
 solution:'<p>Do not decide on the full-cost result alone. (1) Split X’s costs into variable and fixed: if X’s sales cover its variable costs, it has a positive contribution that would be lost. (2) Its fixed overheads that are unavoidable would be re-allocated to Y, lowering Y’s profit (Pizzeria Delicioso: total profit −1 240 €). (3) The full-cost result depends on the allocation method (D&amp;W doors: loss with department rates, profit with a blanket rate). (4) Add qualitative factors: demand, customer relationships, capacity, risk of depending on one product. Recommendation: keep X if contribution − avoidable fixed costs &gt; 0, and work on its price or costs.</p>'},
// Session 5
{id:'x-s5-trip',topic:'s5',type:'mcq',src:'course',title:'Trip decision',q:'Train or own car to Lyon? Select every relevant item.',o:['Train ticket','Metro ticket','“Carte jeune” bought two months ago','Car insurance (already paid)','Highway tolls','Fuel costs','Revenues from Blablacar'],a:[0,4,5,6],e:'Relevant = future and different between the options. The metro ticket is needed in both; the carte jeune and the insurance are sunk.'},
{id:'x-s5-mix',topic:'s5',type:'calc',src:'practice',title:'Product mix under a machine-hour constraint',
 gen:u=>{let hA,hB,cmA,cmB;do{hA=u.int(2,6);hB=u.int(2,8);cmA=u.step(10,60,2);cmB=u.step(10,60,2)}while(Math.abs(cmA/hA-cmB/hB)<0.5);
  const dA=u.step(100,600,50),dB=u.step(100,600,50),need=dA*hA+dB*hB,H=Math.round(need*u.pick([0.6,0.7,0.8])/10)*10;
  const first=cmA/hA>cmB/hB?'A':'B',[h1,d1,c1,h2,c2]=first==='A'?[hA,dA,cmA,hB,cmB]:[hB,dB,cmB,hA,cmA];
  const q1=Math.min(d1,Math.floor(H/h1)),q2=Math.floor((H-q1*h1)/h2);return {hA,hB,cmA,cmB,dA,dB,H,need,first,second:first==='A'?'B':'A',q1,q2,cont:q1*c1+q2*c2}},
 q:v=>`Product A: CM ${v.cmA} € for ${v.hA} machine hours, demand ${fmt(v.dA)}. Product B: CM ${v.cmB} € for ${v.hB} machine hours, demand ${fmt(v.dB)}. Only ${fmt(v.H)} machine hours are available. Optimal plan and maximum contribution?`,
 parts:[{label:'Units of A',answer:v=>v.first==='A'?v.q1:v.q2,tol:0},{label:'Units of B',answer:v=>v.first==='B'?v.q1:v.q2,tol:0},{label:'Contribution',answer:v=>v.cont,unit:'€'}],
 solution:v=>F(`Hours needed = ${fmt(v.dA)} × ${v.hA} + ${fmt(v.dB)} × ${v.hB} = ${fmt(v.need)} > ${fmt(v.H)} → scarce\nCM per hour: A ${u2(v.cmA/v.hA)}, B ${u2(v.cmB/v.hB)} → ${v.first} first\n${v.first}: ${fmt(v.q1)} units; hours left ${fmt(v.H-v.q1*(v.first==='A'?v.hA:v.hB))} → ${v.second}: ${fmt(v.q2)} units (round down)\nContribution = ${fmt(v.cont)}`)},
{id:'x-s5-special',topic:'s5',type:'calc',src:'practice',title:'Special order (spare capacity)',
 gen:u=>{const dm=u.step(20,60,1),dl=u.step(8,25,1),voh=u.step(2,8,1),fx=u.step(10,30,1),sell=u.pick([0,2,3,5]),qty=u.step(200,1000,100),price=dm+dl+voh+sell+u.step(-6,10,1);return {dm,dl,voh,fx,sell,qty,price,full:dm+dl+voh+fx}},
 q:v=>`Unit costs: materials ${v.dm} €, labour ${v.dl} €, variable overheads ${v.voh} €, fixed costs ${v.fx} € (full cost ${v.full} €). A customer offers ${fmt(v.qty)} units at ${v.price} €${v.sell?`, with an extra selling cost of ${v.sell} € per unit`:''}. Spare capacity exists and fixed costs do not change. Short-term effect on profit (negative if it falls)?`,
 answer:v=>v.qty*(v.price-v.dm-v.dl-v.voh-v.sell),unit:'€',
 solution:v=>F(`Relevant cost per unit = ${v.dm} + ${v.dl} + ${v.voh}${v.sell?` + ${v.sell}`:''} = ${v.dm+v.dl+v.voh+v.sell}\nEffect = ${fmt(v.qty)} × (${v.price} − ${v.dm+v.dl+v.voh+v.sell}) = ${fmt(v.qty*(v.price-v.dm-v.dl-v.voh-v.sell))} → ${v.price>v.dm+v.dl+v.voh+v.sell?'accept':v.price===v.dm+v.dl+v.voh+v.sell?'indifferent':'reject'}\nThe fixed ${v.fx} € per unit is irrelevant: comparing ${v.price} with the full cost ${v.full} is the trap.`)},
{id:'x-s5-make',topic:'s5',type:'calc',src:'practice',title:'Make or buy (short term)',
 gen:u=>{const dm=u.step(2,20,1),dl=u.step(1,8,1),voh=u.step(1,5,1),fx=u.step(2,8,1),buy=dm+dl+voh+u.step(-3,4,0.5),q=u.step(1000,20000,1000);return {dm,dl,voh,fx,buy,q}},
 q:v=>`A part costs ${v.dm} € materials, ${v.dl} € labour, ${v.voh} € variable overhead and ${v.fx} € fixed overhead (unavoidable) per unit. A supplier offers it at ${f2(v.buy)} €. For ${fmt(v.q)} parts, how much does MAKING save compared with buying (negative if buying is cheaper)?`,
 answer:v=>(v.buy-(v.dm+v.dl+v.voh))*v.q,unit:'€',
 solution:v=>F(`Relevant cost of making = ${v.dm} + ${v.dl} + ${v.voh} = ${v.dm+v.dl+v.voh} (the ${v.fx} € fixed overhead stays either way)\nSaving = (${f2(v.buy)} − ${v.dm+v.dl+v.voh}) × ${fmt(v.q)} = ${f2((v.buy-(v.dm+v.dl+v.voh))*v.q)} → ${v.buy>v.dm+v.dl+v.voh?'make':v.buy===v.dm+v.dl+v.voh?'indifferent':'buy'}`)},
{id:'x-s5-dwspecial',topic:'s5',type:'case',src:'course',title:'D&W special orders: short and long term',
 q:'<p>Doors: materials 55 €, labour 18 €, variable overheads 6 € per unit; direct fixed costs 1 000 € and fixed overheads 500 € per month; capacity 1 250 doors; normal sales 100 doors at 100 €.</p>',
 parts:[{type:'numeric',q:'a. Short term: 500 doors at 85 €, extra selling cost 5 € each. Profit if refused / if accepted',parts:[{label:'Refused',answer:600,unit:'€'},{label:'Accepted',answer:1100,unit:'€'}]},
  {type:'numeric',q:'b. Long term: 1 000 doors per month at 85 € (5 € selling cost). If refused, fixed overheads fall by 100 € and the facilities are rented for 1 000 €. Profit if refused / if accepted',parts:[{label:'Refused',answer:1700,unit:'€'},{label:'Accepted',answer:1600,unit:'€'}]},
  {type:'mcq',q:'c. Recommendations',o:['Accept the short-term order; reject the long-term contract','Reject both','Accept both','Reject the short-term order; accept the long-term contract'],a:0}],
 solution:F('a. Refused: 10 000 − 9 400 = 600. Accepted: 52 500 − 51 400 = 1 100 → +500\nb. Refused: 10 000 + 1 000 − (7 900 + 1 000 + 400) = 1 700. Accepted: 95 000 − 93 400 = 1 600 → −100')},
{id:'x-s5-dwmake',topic:'s5',type:'case',src:'course',title:'D&W outsourcing: short and long term',
 q:'<p>Doors as above (variable cost 79 €; fixed 1 000 € + 500 €; 100 doors sold at 100 €). A supplier offers 100 doors at 85 €. Windows: variable cost 132 € (85 + 35 + 12), direct fixed costs 2 500 €, fixed overheads 100 €, 100 windows sold at 170 €. Long term: the capacity of two doors makes one window (+50 windows, all sold at 170 €); the doors’ fixed costs disappear; windows’ fixed overheads rise by 50 €.</p>',
 parts:[{type:'numeric',q:'a. Short term (fixed costs unchanged): relevant cost of making vs buying',parts:[{label:'Make',answer:7900,unit:'€'},{label:'Buy',answer:8500,unit:'€'}]},
  {type:'numeric',q:'b. Long term: profit',parts:[{label:'Make doors and windows',answer:1800,unit:'€'},{label:'Buy doors, make 150 windows',answer:4550,unit:'€'}]},
  {type:'mcq',q:'c. Decisions',o:['Make in the short term; outsource in the long term (+2 750 €)','Buy in both cases','Make in both cases','Buy short term, make long term'],a:0}],
 solution:F('a. Make: 100 × 79 = 7 900; buy: 8 500 → making saves 600\nb. Make both: 27 000 − 25 200 = 1 800\n   Buy doors: revenues 10 000 + 150 × 170 = 35 500; costs 150 × 132 + 2 500 + 150 + 8 500 = 30 950 → 4 550\n   → +2 750, subject to qualitative risks (supplier dependence, quality, control)')},
{id:'x-s5-sigma',topic:'s5',type:'case',src:'course',title:'Sigma Corporation (Session 5 exercise 2)',
 q:T(['','A','B','C'],[['Maximum demand','3 000','2 000','6 000'],['Price','32','37','35'],['Raw materials ($0.5 per kg)','7','5','4'],['Direct labour ($10 per hour)','20','15','17']],[1,2,3])+'<p>Period 1: 100 000 kg of plastic and 19 000 labour hours available.</p>',
 parts:[{type:'numeric',q:'a. Resources needed for the full demand',parts:[{label:'kg',answer:110000,tol:0},{label:'Labour hours',answer:19200,tol:0}]},
  {type:'numeric',q:'b. CM per kg of plastic',parts:[{label:'A',answer:0.36,unit:'$',tol:0.01},{label:'B',answer:1.7,unit:'$'},{label:'C',answer:1.75,unit:'$'}]},
  {type:'order',q:'c. Period 2 (only plastic is short): order of production',items:['C','B','A']}],
 solution:F('kg per unit: A 7 / 0.5 = 14, B 10, C 8 → 42 000 + 20 000 + 48 000 = 110 000 > 100 000\nHours: A 2, B 1.5, C 1.7 → 6 000 + 3 000 + 10 200 = 19 200 > 19 000 → both are limiting\nCM: A 5, B 17, C 14 → per kg 0.357, 1.70, 1.75 → C, B, A')},
{id:'x-s5-jumpers',topic:'s5',type:'case',src:'course',title:'Knit jumpers (review session)',
 q:'<p>Type 1: price 250 €, variable cost 175 €, 3 machine hours. Type 2: 400 €, 250 €, 2 h. Type 3: 100 €, 60 €, 0.1 h. 30 000 machine hours available.</p>',
 parts:[{type:'numeric',q:'a. Unlimited demand: units of Type 3 to produce',answer:300000,tol:0},
  {type:'numeric',q:'b. Demand limited to 10 000 of each: units to produce',parts:[{label:'Type 3',answer:10000,tol:0},{label:'Type 2',answer:10000,tol:0},{label:'Type 1',answer:3000,tol:0}]},
  {type:'numeric',q:'c. Contribution of plan b',answer:2125000,unit:'€'}],
 solution:F('CM: 75, 150, 40 → per hour: 25, 75, 400 → Type 3, then 2, then 1\nb. 10 000 × 0.1 = 1 000 h; 10 000 × 2 = 20 000 h; 9 000 h left / 3 = 3 000 Type 1\nc. 10 000 × 40 + 10 000 × 150 + 3 000 × 75 = 2 125 000')},
{id:'x-s5-rain',topic:'s5',type:'case',src:'course',title:'Rainwear jackets (review session)',
 q:T(['','Navyblue','Greenforest','Blackstorm'],[['Machine hours per jacket','2','5','6'],['Price (€)','100','200','150'],['Variable cost (€)','20','40','30'],['Demand (units)','2 000','4 000','3 000']],[1,2,3])+'<p>Fixed overheads 350 000 €. After a breakdown, only 36 000 machine hours are available.</p>',
 parts:[{type:'numeric',q:'1a. Machine hours needed for the full demand',answer:42000,tol:0},
  {type:'numeric',q:'1b. Optimal plan (units)',parts:[{label:'Navyblue',answer:2000,tol:0},{label:'Greenforest',answer:4000,tol:0},{label:'Blackstorm',answer:2000,tol:0}]},
  {type:'numeric',q:'1c. Profit',answer:690000,unit:'€'},
  {type:'numeric',q:'2. A supplier offers to make all the Navyblue at 45 €. Blackstorm produced with the freed hours, and new profit',parts:[{label:'Extra Blackstorm',answer:666,tol:0},{label:'Profit',answer:719920,unit:'€'}]}],
 solution:F('CM per hour: N 80 / 2 = 40; G 160 / 5 = 32; B 120 / 6 = 20\nPlan: N 2 000 (4 000 h), G 4 000 (20 000 h), B 12 000 / 6 = 2 000 → contribution 1 040 000 − 350 000 = 690 000\nOutsourcing frees 4 000 h → 666 more Blackstorm (round down)\nProfit = 690 000 + 666 × 120 + 40 000 (Navyblue variable costs saved) − 2 000 × 45 = 719 920 → say yes')+NOTE('<b>Check against the solution:</b> the solution table labels the supplier cost “200 units × 45 €”; the amount (90 000) is for 2 000 units.')},
{id:'x-s5-brands',topic:'s5',type:'case',src:'course',title:'Drop a brand? (recommended exercise)',
 q:T(['€','A','B','C','D'],[['Sales','2 200','700','2 400','1 550'],['Direct materials','330','210','360','155'],['Direct labour','440','140','480','310'],['Variable overheads','176','100','216','62'],['Common allocated fixed costs','550','290','610','500'],['Advertising campaign','250','150','400','290'],['Brand manager','90','120','90','120'],['General &amp; admin','130','65','135','120']],[1,2,3,4])+'<p>Advertising and the brand manager are avoidable if a brand is dropped; common fixed costs and general &amp; admin are not.</p>',
 parts:[{type:'numeric',q:'a. Contribution − avoidable fixed costs',parts:[{label:'A',answer:914,unit:'€'},{label:'B',answer:-20,unit:'€'},{label:'C',answer:854,unit:'€'},{label:'D',answer:613,unit:'€'}]},
  {type:'mcq',q:'b. Decision',o:['Drop B only','Drop B and D','Drop D only','Keep all four'],a:0}],
 solution:F('Contribution: A 1 254, B 250, C 1 344, D 1 023\nAvoidable fixed: A 340, B 270, C 490, D 410\nDirect margin: A 914, B −20, C 854, D 613 → drop B; keep D (net loss −7 but covers 613 of common costs)')},
{id:'x-s5-hope',topic:'s5',type:'case',src:'course',title:'HopeShelter special order (Session 5 exercise 3)',
 q:'<p>Kit cost: materials 4 €, labour 2 €, variable overhead 0.50 €, allocated fixed overhead 1.50 €. Capacity 15 000 kits; current 12 000. Special order: 2 000 kits at 6.25 €, extra packaging 0.25 € per kit.</p>',
 parts:[{type:'numeric',q:'a. Effect on the shelter’s result (negative if a loss)',answer:-1000,unit:'€'},
  {type:'numeric',q:'b. Minimum price per kit',answer:6.75,unit:'€'},
  {type:'mcq',q:'c. Which is NOT a relevant qualitative factor here?',o:['2 000 more people receive kits (mission)','Visibility with new donors','A possible future partnership','The 1.50 € of fixed overhead already allocated'],a:3}],
 solution:F('12 000 + 2 000 = 14 000 < 15 000 → spare capacity\nRelevant cost = 4 + 2 + 0.50 + 0.25 = 6.75 → (6.25 − 6.75) × 2 000 = −1 000\nMinimum price = 6.75 (the fixed overhead is irrelevant)')+'<p>A non-profit may still accept for its mission and the long-term benefits.</p>'},
{id:'x-s5-switch',topic:'s5',type:'case',src:'course',title:'Optical switch: make or buy (review session)',
 q:'<p>Cost per switch: materials 11, labour 2, variable overhead 3, fixed overhead 7 (total 23). Supplier price 17.50 €. The idle facilities have no other use and no fixed cost is avoidable.</p>',
 parts:[{type:'numeric',q:'a. Incremental method: total cost per unit',parts:[{label:'Make',answer:23,unit:'€'},{label:'Buy',answer:24.5,unit:'€'}]},
  {type:'numeric',q:'b. Differential method: relevant cost per unit',parts:[{label:'Make',answer:16,unit:'€'},{label:'Buy',answer:17.5,unit:'€'}]},
  {type:'mcq',q:'c. Decision',o:['Make: 1.50 € per unit cheaper','Buy: 17.50 < 23','Buy: saves 5.50 €','Indifferent'],a:0}],
 solution:F('Buy = 17.50 + 7 (fixed overhead still paid) = 24.50 vs make 23\nDifferential: 11 + 2 + 3 = 16 vs 17.50 → make')},
{id:'x-s5-xyz',topic:'s5',type:'case',src:'course',title:'XYZ: special orders with and without spare capacity',
 q:'<p>Capacity 600 000 units; production 500 000; price 6 €; variable cost 4.25 €; fixed cost 0.75 € per unit. Client B offers to buy 80 000 units at 5 €.</p>',
 parts:[{type:'numeric',q:'a. Extra contribution from B',answer:60000,unit:'€'},
  {type:'numeric',q:'b. A bid to client C (30 000 units at 6 €) is likely to be accepted; spare capacity cannot serve both. Net gain of accepting B',answer:7500,unit:'€'},
  {type:'mcq',q:'c. Main risk of accepting B',o:['A price war that pushes regular prices down','Fixed costs rise','Variable costs fall','None'],a:0}],
 solution:F('a. (5 − 4.25) × 80 000 = 60 000\nb. Opportunity cost = (6 − 4.25) × 30 000 = 52 500 → 60 000 − 52 500 = 7 500')+'<p>Special orders must stay occasional.</p>'},
{id:'x-s5-rel',topic:'s5',type:'match',src:'practice',title:'Relevant or not (short term)?',q:'Short-term decision with spare capacity: is each item relevant?',
 pairs:[['Variable overheads of the extra units','Relevant'],['Allocated share of the factory rent','Irrelevant'],['A machine bought last year','Irrelevant'],['Contribution lost on a displaced order','Relevant'],['Extra packaging for this order only','Relevant'],['Direct fixed costs that continue anyway','Irrelevant']]}];

/* ---------- mock exams ---------- */
const NUMP=(q,pts,parts)=>({type:'numeric',q,pts,parts});
const N1=(q,pts,answer,unit,extra)=>Object.assign({type:'numeric',q,pts,answer,unit},extra||{});
const MCA=(id,topic,q,o,a,solution)=>({id,topic,type:'mcq',pts:0.5,q,o,a,solution});
const MOCK_CALC='Allowed (course announcement of the final exam).';
const MOCK_INTRO=`<div class="panel"><h4>Instructions</h4><ul>
<li>1 h 30, on paper in the real exam, closed book, calculator allowed (course announcement).</li>
<li>Amounts in euros. Round amounts to two decimals when needed, like the course. Type numbers as 1 250 or 1250; enter a loss as a negative number.</li>
<li>Round a break-even point or a number of units to sell <b>up</b>; units produced under a constraint <b>down</b>.</li>
<li>Written questions: write your answer, then mark it with the grid after handing in.</li></ul></div>`;

/* Mock 1: the course mock exam (CotonRive), official solution */
const M1=[
{title:'Exercise 1 · Full costing (10 marks)',intro:`<p>The company <b>CotonRive</b> manufactures and sells shirts and trousers. It wishes to better understand the profitability of its products by calculating their full cost based on direct and indirect expenses for December 2025.</p>
${T(['','Purchasing','Production','Distribution'],[['Overheads','30 000 €','30 000 €','17 500 €'],['Cost drivers','100 m of purchased fabric','Finished products produced','Finished products sold']])}
<ul><li>December 2025 sales: 2 500 shirts at 85 € per unit; 1 000 trousers at 180 € per unit.</li>
<li>Inventories on 01/12/2025: no stock of materials; 1 000 shirts valued at 99 600 € in total; no stock of trousers.</li>
<li>December purchases: 5 000 metres of fabric at 27.80 € per metre.</li>
<li>Production: 2 000 shirts using 3 000 m of fabric and 1 000 hours of direct labour at 25 € per hour; 1 000 trousers using 2 000 m of fabric and 1 100 hours of direct labour at 32 € per hour.</li></ul>`,
 items:[
 {id:'e1',topic:'s4',type:'case',pts:8.5,title:'1. Full cost and result of each product',q:'<p>Calculate the full cost and the result (profit or loss) for each product. Round all amounts to two decimals if needed. (In the paper: 0.1 mark per cell.)</p>',
  parts:[
   NUMP('a. Overheads table',0.6,[{label:'Purchasing: number of drivers',answer:50,tol:0},{label:'Production: number of drivers',answer:3000,tol:0},{label:'Distribution: number of drivers',answer:3500,tol:0},{label:'Purchasing rate',answer:600,unit:'€'},{label:'Production rate',answer:10,unit:'€'},{label:'Distribution rate',answer:5,unit:'€'}]),
   NUMP('b. Purchasing cost of the fabric bought',0.9,[{label:'Direct costs',answer:139000,unit:'€'},{label:'Purchasing overheads',answer:30000,unit:'€'},{label:'Purchasing cost (total)',answer:169000,unit:'€'},{label:'Purchasing cost per metre',answer:33.8,unit:'€'}]),
   NUMP('c. Production cost of the shirts made',1.5,[{label:'Materials consumed',answer:101400,unit:'€'},{label:'Direct labour',answer:25000,unit:'€'},{label:'Production overheads',answer:20000,unit:'€'},{label:'Production cost (total)',answer:146400,unit:'€'},{label:'Per shirt',answer:73.2,unit:'€'}]),
   NUMP('d. Production cost of the trousers made',1.5,[{label:'Materials consumed',answer:67600,unit:'€'},{label:'Direct labour',answer:35200,unit:'€'},{label:'Production overheads',answer:10000,unit:'€'},{label:'Production cost (total)',answer:112800,unit:'€'},{label:'Per pair',answer:112.8,unit:'€'}]),
   NUMP('e. Finished goods inventory of shirts',1.2,[{label:'WAC',answer:82,unit:'€'},{label:'Production cost of shirts sold',answer:205000,unit:'€'},{label:'Ending inventory (units)',answer:500,tol:0},{label:'Ending inventory (€)',answer:41000,unit:'€'}]),
   NUMP('f. Full cost of goods sold',1.5,[{label:'Shirts: distribution overheads',answer:12500,unit:'€'},{label:'Shirts: full cost (total)',answer:217500,unit:'€'},{label:'Shirts: full cost per unit',answer:87,unit:'€'},{label:'Trousers: distribution overheads',answer:5000,unit:'€'},{label:'Trousers: full cost (total)',answer:117800,unit:'€'},{label:'Trousers: full cost per unit',answer:117.8,unit:'€'}]),
   NUMP('g. Profitability (loss as a negative number)',1.3,[{label:'Shirts: sales',answer:212500,unit:'€'},{label:'Shirts: result',answer:-5000,unit:'€'},{label:'Trousers: sales',answer:180000,unit:'€'},{label:'Trousers: result',answer:62200,unit:'€'}])],
  solution:T(['','Purchasing','Production','Distribution'],[['Number of drivers','5 000 / 100 = 50','2 000 + 1 000 = 3 000','2 500 + 1 000 = 3 500'],['Rate','600 €','10 €','5 €']])+
   T(['','Shirts','Trousers'],[['Fabric consumed (× 33.80)','3 000 m → 101 400','2 000 m → 67 600'],['Direct labour','1 000 h × 25 = 25 000','1 100 h × 32 = 35 200'],['Production overheads (× 10)','2 000 → 20 000','1 000 → 10 000'],['<b>Production cost</b>','<b>146 400 (73.20)</b>','<b>112 800 (112.80)</b>'],['Production cost of goods sold','(99 600 + 146 400) / 3 000 = 82.00 → 2 500 × 82 = 205 000','112 800'],['Distribution (× 5)','12 500','5 000'],['<b>Full cost</b>','<b>217 500 (87.00)</b>','<b>117 800 (117.80)</b>'],['Sales','212 500','180 000'],['<b>Result</b>','<b>(5 000)</b>, −2.00 per shirt','<b>62 200</b>, 62.20 per pair']])+'<p>Shirts ending inventory: 500 × 82 = 41 000.</p>'},
 {id:'e2',topic:'s4',type:'written',pts:1.5,title:'2. Interpretation',lines:7,
  q:'<p>What do you think about the profitability of shirts vs trousers? What advice would you give to the manager? Should the company focus on one product?</p>',
  rubric:[{c:'Trousers are clearly more profitable (62.20 € per unit vs a 2 € loss per shirt): prioritise trousers',pts:0.5},{c:'Full costing does not separate fixed and variable costs: if overheads are largely fixed, dropping shirts would move them to trousers',pts:0.5},{c:'Other factors before specialising (demand stability, capacity, client relationships, risk of one product) and a balanced recommendation: keep both, review the shirts’ price or cost structure',pts:0.5}],
  solution:'<p>Official answer (summary): prioritise trousers, which have the highest profitability. But full costing allocates overheads without separating fixed and variable costs; if a large part is fixed, reducing shirts would not eliminate them: they would be re-allocated to trousers and cut their apparent profit. Before specialising, consider the nature of overheads, demand stability, capacity and constraints, and risk diversification. Recommended action: keep both lines, focus investment and marketing on trousers, and reassess the cost structure or the price of shirts.</p>'}]},
{title:'Exercise 2 · Relevant costs (5 marks)',intro:`<p>A farmer asks you to recommend the optimal mix of vegetables. He has 2 000 machine hours.</p>
${T(['','Potatoes','Carrots','Turnips','Beetroot'],[['Machine hours per tonne','5','4','5','4'],['Selling price per tonne','220','240','270','210'],['Fertilizers','2.5','3','4.5','4'],['Seeds','1','1.5','2','2'],['Pesticides','1.5','2.5','3.5','4'],['Direct wages','90','110','160','140']],[1,2,3,4])}`,
 items:[
 {id:'e3',topic:'s5',type:'case',pts:5,title:'Optimal production',q:'',
  parts:[
   NUMP('1. Demand is unlimited. Contribution margin per machine hour of each crop, then tonnes of the crop to produce',1.5,[{label:'Potatoes (€ / h)',answer:25},{label:'Carrots (€ / h)',answer:30.75},{label:'Turnips (€ / h)',answer:20},{label:'Beetroot (€ / h)',answer:15},{label:'Tonnes of carrots',answer:500,tol:0}]),
   {type:'order',q:'2a. Demand is limited to potatoes 200 t, carrots 120 t, turnips 80 t, beetroot 35 t. Order of production',pts:1,items:['Carrots','Potatoes','Turnips','Beetroot']},
   NUMP('2b. Optimal quantities (tonnes)',1.5,[{label:'Carrots',answer:120,tol:0},{label:'Potatoes',answer:200,tol:0},{label:'Turnips',answer:80,tol:0},{label:'Beetroot',answer:30,tol:0}]),
   N1('2c. Total contribution',1,49560,'€')],
  solution:T(['','Potatoes','Carrots','Turnips','Beetroot'],[['Variable cost','95','117','170','150'],['Contribution margin','125','123','100','60'],['CM per machine hour','25','30.75','20','15']],[1,2,3,4])+
   F('1. Carrots first: 2 000 / 4 = 500 tonnes\n2. Carrots 120 t (480 h) → 1 520 h left; potatoes 200 t (1 000 h) → 520 h; turnips 80 t (400 h) → 120 h; beetroot 120 / 4 = 30 t\nContribution = 120 × 123 + 200 × 125 + 80 × 100 + 30 × 60 = 49 560')}]},
{title:'Exercise 3 · Break-even point (5 marks)',intro:'<p>You make microwave ovens, sold at 150 € each. Variable production cost 60 € per unit; fixed costs 1 350 000 € per year; relevant range 1 000 – 60 000 units.</p>',
 items:[
 {id:'e4',topic:'s2',type:'case',pts:5,title:'CVP',q:'',
  parts:[
   N1('1a. Break-even point in units',1,15000,'units',{tol:0}),
   N1('1b. Units to sell for a 45 000 € profit',1,15500,'units',{tol:0}),
   N1('1c. Profit if 14 000 ovens are sold (loss as a negative number)',1,-90000,'€'),
   N1('2a. Selling price needed for a 90 000 € profit with 9 000 ovens sold',1,220,'€'),
   N1('2b. The marketing director wants to spend 200 000 € more on advertising. New break-even point',1,17223,'units',{tol:0})],
  solution:F('1a. 1 350 000 / (150 − 60) = 15 000\n1b. (1 350 000 + 45 000) / 90 = 15 500\n1c. 14 000 × 90 − 1 350 000 = −90 000 (a loss)\n2a. (90 000 + 1 350 000) / 9 000 + 60 = 160 + 60 = 220\n2b. 1 550 000 / 90 = 17 222.22 → 17 223 (round up)')}]}];

/* Mock 2: practice, same format */
const M2=[
{title:'Part A · Course and interpretation questions (2 marks)',intro:'<p>One right answer each; 0.5 mark; no penalty on this site.</p>',items:[
 MCA('a1','s1','A plant makes three products. The yearly insurance of the plant is…',['a variable direct cost','a fixed direct cost','a fixed overhead','a variable overhead'],2,'<p>Shared by the three products (overhead) and independent of volume (fixed).</p>'),
 MCA('a2','s1','A company pays a lab to measure the emissions of its chimney every month. Which environmental cost?',['Protection','Appraisal','Internal failure','External failure'],1,'<p>Controls and inspections to check pollution is within limits: appraisal (trying to get it right).</p>'),
 MCA('a3','s3','Distribution overheads 18 000 €; driver: 100 € of sales; sales 340 000 € (product X) and 260 000 € (product Y). Overheads charged to X?',['3 000 €','10 200 €','9 000 €','7 800 €'],1,F('Drivers = 600 000 / 100 = 6 000 → rate = 18 000 / 6 000 = 3\nX: 3 400 × 3 = 10 200')),
 MCA('a4','s5','A machine bought three years ago for 50 000 € is now idle. In a make-or-buy decision, its purchase price is…',['relevant: it is a fixed cost','irrelevant: it is a past (sunk) cost','relevant only in the long term','relevant if the machine is depreciated'],1,'<p>Past costs are always irrelevant. Only future costs that differ between the options count (e.g. what the machine could be sold for).</p>')]},
{title:'Exercise 1 · Full costing (9 marks)',intro:`<p><b>Atelier Nord</b> makes jackets and coats from wool fabric. Data for March.</p>
${T(['','Purchasing','Cutting','Assembly','Distribution'],[['Overheads','24 000 €','18 000 €','31 500 €','16 000 €'],['Cost drivers','100 m of fabric bought','Machine hours','Direct labour hours','100 € of sales']])}
<ul><li>Sales: 3 000 jackets at 70 €; 1 000 coats at 190 €.</li>
<li>Opening inventories: 2 000 m of fabric at 20 € per metre; 1 500 jackets valued at 90 200 € in total; no coats.</li>
<li>Purchases: 8 000 m of fabric at 18.50 € per metre.</li>
<li>Production: 2 000 jackets using 3 000 m of fabric, 1 000 direct labour hours at 30 € and 400 machine hours; 1 000 coats using 3 000 m of fabric, 2 500 direct labour hours at 30 € and 800 machine hours.</li></ul>`,
 items:[
 {id:'b1',topic:'s4',type:'case',pts:7.5,title:'1. Full cost and result',q:'<p>Round amounts to two decimals.</p>',
  parts:[
   NUMP('a. Cost driver rates',1,[{label:'Purchasing (per 100 m)',answer:300,unit:'€'},{label:'Cutting',answer:15,unit:'€'},{label:'Assembly',answer:9,unit:'€'},{label:'Distribution',answer:4,unit:'€'}]),
   NUMP('b. Fabric',1.5,[{label:'Purchasing cost per metre bought',answer:21.5,unit:'€'},{label:'WAC per metre',answer:21.2,unit:'€'},{label:'Ending inventory (€)',answer:84800,unit:'€'}]),
   NUMP('c. Production cost per unit made',1.5,[{label:'Jacket',answer:54.3,unit:'€'},{label:'Coat',answer:173.1,unit:'€'}]),
   NUMP('d. Jackets inventory',1,[{label:'WAC',answer:56.8,unit:'€'},{label:'Ending inventory (€)',answer:28400,unit:'€'}]),
   NUMP('e. Full cost per unit sold',1.5,[{label:'Jacket',answer:59.6,unit:'€'},{label:'Coat',answer:180.7,unit:'€'}]),
   NUMP('f. Result',1,[{label:'Jackets',answer:31200,unit:'€'},{label:'Coats',answer:9300,unit:'€'}])],
  solution:T(['','Purchasing','Cutting','Assembly','Distribution'],[['Drivers','8 000 / 100 = 80','400 + 800 = 1 200','1 000 + 2 500 = 3 500','(210 000 + 190 000) / 100 = 4 000'],['Rate','300','15','9','4']])+
   F('Fabric bought: 8 000 × 18.50 + 80 × 300 = 148 000 + 24 000 = 172 000 → 21.50 per m\nWAC = (40 000 + 172 000) / 10 000 = 21.20; consumed 6 000 m; ending 4 000 × 21.20 = 84 800')+
   T(['','Jackets (2 000)','Coats (1 000)'],[['Fabric (× 21.20)','3 000 m → 63 600','3 000 m → 63 600'],['Direct labour (× 30)','1 000 h → 30 000','2 500 h → 75 000'],['Cutting (× 15)','400 h → 6 000','800 h → 12 000'],['Assembly (× 9)','1 000 h → 9 000','2 500 h → 22 500'],['<b>Production cost</b>','<b>108 600 (54.30)</b>','<b>173 100 (173.10)</b>']])+
   F('Jackets: WAC = (90 200 + 108 600) / 3 500 = 56.80 → sold 3 000 = 170 400; ending 500 = 28 400\nFull cost jackets = 170 400 + 2 100 × 4 = 178 800 → 59.60;  result 210 000 − 178 800 = 31 200\nFull cost coats = 173 100 + 1 900 × 4 = 180 700 → 180.70;  result 190 000 − 180 700 = 9 300')},
 {id:'b2',topic:'s4',type:'written',pts:1.5,title:'2. Interpretation',lines:6,q:'<p>Compare the profitability of jackets and coats. What would you tell the manager, who wants to raise the price of coats or stop them?</p>',
  rubric:[{c:'Rates of profit on sales: jackets 31 200 / 210 000 = 14.9%; coats 9 300 / 190 000 = 4.9%',pts:0.5},{c:'Explains why coats cost more: labour-heavy (2.5 h per coat), so they absorb most assembly overheads; full costing depends on the drivers chosen',pts:0.5},{c:'Recommendation: coats are still profitable, do not stop them on this basis; analyse fixed vs variable costs, the price elasticity before raising the price, and qualitative factors',pts:0.5}],
  solution:'<p>Both products are profitable, but jackets earn 14.9% of sales and coats only 4.9%. Coats need 2.5 labour hours each and absorb 22 500 € of assembly overheads: the result depends on the allocation by labour hours. Stopping coats would lose their 9 300 € profit and move their fixed overheads to jackets. Before raising the price, check demand; also look at the variable/fixed split of the overheads and at qualitative factors (range, customers).</p>'}]},
{title:'Exercise 2 · CVP analysis (5 marks)',intro:'<p><b>Lumo</b> sells a lamp at 80 €. Variable cost 48 € per unit; fixed costs 96 000 € per year; expected sales 4 000 units; relevant range 1 000 – 6 000 units.</p>',
 items:[
 {id:'b3',topic:'s2',type:'case',pts:5,title:'Break-even and sensitivity',q:'',
  parts:[
   NUMP('a. Contribution margin ratio and break-even point',1.5,[{label:'CM ratio',answer:40,unit:'%'},{label:'BEP (units)',answer:3000,tol:0},{label:'BEP (sales €)',answer:240000,unit:'€'}]),
   N1('b. Margin of safety at the expected sales (%)',0.5,25,'%'),
   N1('c. Operating leverage at the expected sales',1,4,'',{tol:0.01}),
   N1('d. Units to sell for a 40 000 € profit',1,4250,'units',{tol:0}),
   N1('e. Price needed for a 40 000 € profit if only 4 000 units are sold',1,82,'€')],
  solution:F('CM = 80 − 48 = 32; ratio 32 / 80 = 40%\nBEP = 96 000 / 32 = 3 000 units = 240 000 €\nMoS = (4 000 − 3 000) / 4 000 = 25%\nOL = 4 000 × 32 / (128 000 − 96 000) = 128 000 / 32 000 = 4 (a 10% rise in sales → +40% profit)\nUnits = (96 000 + 40 000) / 32 = 4 250\nPrice = (40 000 + 96 000) / 4 000 + 48 = 34 + 48 = 82')}]},
{title:'Exercise 3 · Special order (4 marks)',intro:'<p><b>Vélocité</b> makes bicycles: capacity 10 000 per year; current production and sales 8 000 at 220 €. Unit costs: materials 90 €, labour 40 €, variable overheads 10 €, fixed overheads 30 € (allocated on 8 000 units). A retailer offers to buy 1 500 bicycles at 150 €; transport of this order costs 4 € per bicycle. Fixed costs do not change.</p>',
 items:[
 {id:'b4',topic:'s5',type:'case',pts:4,title:'Accept the order?',q:'',
  parts:[
   N1('a. Short-term effect on profit of the 1 500-unit order',1,9000,'€'),
   N1('b. Minimum price per bicycle for this order',1,144,'€'),
   N1('c. The retailer now wants 2 500 bicycles at 150 €. Only 2 000 can come from spare capacity: 500 regular sales would be lost. Effect on profit (negative if it falls)',2,-25000,'€')],
  solution:F('Relevant cost = 90 + 40 + 10 + 4 = 144 (the 30 € of fixed overheads is irrelevant)\na. (150 − 144) × 1 500 = +9 000 → accept\nb. Minimum price = 144\nc. Gain on the order: 2 500 × 6 = 15 000\n   Opportunity cost: 500 × (220 − 140) = 40 000\n   Net = 15 000 − 40 000 = −25 000 → reject')+'<p>Comparing 150 € with the full cost (170 €) is the trap. Also check that the retailer is in a separate market, so regular prices are not affected.</p>'}]}];

/* Mock 3: practice, harder */
const M3=[
{title:'Part A · Course and interpretation questions (2 marks)',intro:'<p>One right answer each; 0.5 mark; no penalty on this site.</p>',items:[
 MCA('a1','s2','A product has an operating leverage of 5. If its sales fall by 8%, its profit…',['falls by 8%','falls by 40%','falls by 1.6%','rises by 40%'],1,'<p>%Δ profit = OL × %Δ sales = 5 × (−8%) = −40%.</p>'),
 MCA('a2','s1','A phone plan costs a fixed 30 € per month plus 0.05 € per minute. This cost is…',['variable','fixed','semi-variable','a step cost'],2,'<p>Fixed part + variable part: y = 0.05x + 30 (the course example of a semi-variable cost is telephone charges).</p>'),
 MCA('a3','s4','With volume-based drivers, a simple product made in large volumes typically…',['receives too few overheads','subsidises complex products made in small volumes','is not affected','receives only direct costs'],1,'<p>Subsidy effect: overheads follow volume, so high-volume products bear part of the cost caused by complex low-volume ones.</p>'),
 MCA('a4','s5','For a long-term outsourcing decision, which costs are relevant?',['Only variable costs','Only the supplier price','All costs, including the fixed costs that would disappear or appear','Only past costs'],2,'<p>Beyond the relevant range fixed costs vary: in the long term all costs are relevant, plus qualitative factors.</p>')]},
{title:'Exercise 1 · Full costing (8 marks)',intro:`<p><b>Ceramica</b> makes plates and bowls from clay. Data for June.</p>
${T(['','Purchasing','Moulding','Firing','Distribution','Customer services'],[['Overheads','9 000 €','20 000 €','15 000 €','12 000 €','5 302 €'],['Cost drivers','kg of clay bought','Machine hours','Units produced','Units sold','100 € of production cost of goods sold']])}
<ul><li>Sales: 22 000 plates at 3.50 €; 8 000 bowls at 7.90 €.</li>
<li>Opening inventories: 20 000 kg of clay valued at 17 000 €; 5 000 plates valued at 13 100 €; no bowls.</li>
<li>Purchases: 30 000 kg of clay at 0.70 € per kg.</li>
<li>Production: 20 000 plates using 10 000 kg of clay, 1 000 direct labour hours at 20 € and 500 machine hours; 10 000 bowls using 20 000 kg of clay, 1 500 direct labour hours at 20 € and 500 machine hours.</li></ul>`,
 items:[
 {id:'b1',topic:'s4',type:'case',pts:7,title:'1. Full cost and result',q:'<p>Round unit costs to two decimals; enter totals in euros.</p>',
  parts:[
   NUMP('a. Cost driver rates',1.5,[{label:'Purchasing',answer:0.3,unit:'€'},{label:'Moulding',answer:20,unit:'€'},{label:'Firing',answer:0.5,unit:'€'},{label:'Distribution',answer:0.4,unit:'€'},{label:'Customer services',answer:5,unit:'€'}]),
   NUMP('b. Clay',1,[{label:'Purchasing cost per kg bought',answer:1,unit:'€'},{label:'WAC per kg',answer:0.94,unit:'€'}]),
   NUMP('c. Production cost per unit made',1.5,[{label:'Plate',answer:2.47,unit:'€'},{label:'Bowl',answer:6.38,unit:'€'}]),
   NUMP('d. Production cost of goods sold (total)',1,[{label:'Plates',answer:55000,unit:'€'},{label:'Bowls',answer:51040,unit:'€'}]),
   NUMP('e. Result (loss as a negative number)',2,[{label:'Plates',answer:10450,unit:'€',tol:2},{label:'Bowls',answer:6408,unit:'€',tol:2}])],
  solution:F('Rates: 9 000 / 30 000 kg = 0.30; 20 000 / 1 000 h = 20; 15 000 / 30 000 units = 0.50; 12 000 / 30 000 sold = 0.40\nClay bought: 0.70 + 0.30 = 1.00 per kg → 30 000\nWAC = (17 000 + 30 000) / 50 000 = 0.94')+
   T(['','Plates (20 000)','Bowls (10 000)'],[['Clay (× 0.94)','10 000 kg → 9 400','20 000 kg → 18 800'],['Direct labour (× 20)','20 000','30 000'],['Moulding (× 20)','500 h → 10 000','500 h → 10 000'],['Firing (× 0.50)','10 000','5 000'],['<b>Production cost</b>','<b>49 400 (2.47)</b>','<b>63 800 (6.38)</b>']])+
   F('Plates: WAC = (13 100 + 49 400) / 25 000 = 2.50 → sold 22 000 × 2.50 = 55 000\nBowls: 8 000 × 6.38 = 51 040\nCustomer services: drivers = (55 000 + 51 040) / 100 = 1 060.40 → rate 5 302 / 1 060.40 = 5.00\nPlates: 55 000 + 22 000 × 0.40 + 550 × 5 = 55 000 + 8 800 + 2 750 = 66 550 → result 77 000 − 66 550 = 10 450\nBowls: 51 040 + 8 000 × 0.40 + 510.40 × 5 = 51 040 + 3 200 + 2 552 = 56 792 → result 63 200 − 56 792 = 6 408')},
 {id:'b2',topic:'s4',type:'written',pts:1,title:'2. Interpretation',lines:5,q:'<p>The customer-services driver is “100 € of production cost of goods sold”. Why must the finished goods inventory be valued before this rate can be computed, and what limit of the method does this choice of driver show?</p>',
  rubric:[{c:'The number of drivers depends on the production cost of the goods SOLD, which comes from the WAC of the finished goods inventory',pts:0.5},{c:'Limit: a volume / value-based driver, chosen by convention, may not reflect what really causes customer-service costs (subsidy effect, arbitrary allocation)',pts:0.5}],
  solution:'<p>Customer-service overheads are spread in proportion to the production cost of the goods sold; that cost is only known after the goods sold are valued at the WAC (opening stock + production). The driver is a convention linked to volume and value: a product that is cheap to make but needs much after-sales service would receive too little overhead. This is the weakness of volume-based drivers in traditional full costing.</p>'}]},
{title:'Exercise 2 · Product mix and outsourcing (5.5 marks)',intro:`<p><b>Riviera Kayaks</b> makes three kayaks. Moulding machine hours are limited to <b>8 000 hours</b> this year. Fixed costs 250 000 €.</p>
${T(['','Solo','Duo','Family'],[['Selling price','300','450','520'],['Variable cost','180','250','310'],['Machine hours per kayak','3','4','7'],['Demand (units)','1 000','800','500']],[1,2,3])}`,
 items:[
 {id:'b3',topic:'s5',type:'case',pts:5.5,title:'Optimal plan',q:'',
  parts:[
   N1('a. Machine hours needed to meet all demand',0.5,9700,'hours',{tol:0}),
   {type:'order',q:'b. Order of production',pts:1,items:['Duo','Solo','Family']},
   NUMP('c. Optimal plan (units)',1.5,[{label:'Solo',answer:1000,tol:0},{label:'Duo',answer:800,tol:0},{label:'Family',answer:257,tol:0}]),
   N1('d. Profit of this plan',1,83970,'€'),
   N1('e. A supplier offers to make all the Solo kayaks at 220 € each. The freed hours go to Family kayaks (demand still 500). Profit with this offer',1,95000,'€'),
   {type:'mcq',q:'f. Decision',pts:0.5,o:['Accept: +11 030 €, subject to supplier quality and reliability','Reject: the supplier price is above the variable cost of 180 €','Reject: the Family kayak has the lowest CM per hour','Indifferent'],a:0}],
  solution:F('CM: Solo 120, Duo 200, Family 210 → per hour: 40, 50, 30 → Duo, Solo, Family\nHours needed: 3 000 + 3 200 + 3 500 = 9 700 > 8 000\nDuo 800 (3 200 h), Solo 1 000 (3 000 h) → 1 800 h left / 7 = 257.1 → 257 Family\nContribution = 160 000 + 120 000 + 257 × 210 = 333 970 → profit 83 970\nWith the supplier: Solo 1 000 × (300 − 220) = 80 000; Family now all 500 (3 500 h ≤ 4 800 h free)\nProfit = 160 000 + 80 000 + 105 000 − 250 000 = 95 000 → +11 030')+'<p>Buying at 220 € costs more than making (180 €), but it frees 3 000 hours that earn more on Family kayaks: the opportunity cost of making Solo is what matters.</p>'}]},
{title:'Exercise 3 · Cost behaviour and CVP (4.5 marks)',intro:'<p><b>Pressto</b> assembles coffee machines, sold at 80 €. Costs at two activity levels:</p>'+T(['Cost (€)','2 000 units','3 000 units'],[['Components','50 000','75 000'],['Direct labour','36 000','54 000'],['Workshop rent','40 000','40 000'],['Maintenance','14 000','17 000'],['Machine lease (fixed up to 5 000 units)','6 000','6 000']],[1,2]),
 items:[
 {id:'b4',topic:'s1',type:'case',pts:4.5,title:'Equations, cost and break-even',q:'',
  parts:[
   {type:'match',q:'a. Behaviour of each cost',pts:0.5,pairs:[['Components','Variable'],['Direct labour','Variable'],['Workshop rent','Fixed'],['Maintenance','Semi-variable']],extra:['Step']},
   NUMP('b. Maintenance: y = ax + b',1,[{label:'a',answer:3,unit:'€'},{label:'b',answer:8000,unit:'€'}]),
   N1('c. Total cost for 3 500 units',1,215000,'€'),
   Object.assign(N1('d. Break-even point (units)',1,1589,'units',{tol:0}),{topic:'s2'}),
   Object.assign(NUMP('e. At 3 500 units: margin of safety and operating leverage',1,[{label:'Margin of safety (%)',answer:54.62,unit:'%',tol:0.05},{label:'Operating leverage',answer:1.83,tol:0.01}]),{topic:'s2'})],
  solution:F('Components 25x; labour 18x; rent 40 000; lease 6 000\nMaintenance: a = (17 000 − 14 000) / 1 000 = 3; b = 14 000 − 3 × 2 000 = 8 000\nCost(3 500) = 46 × 3 500 + 40 000 + 8 000 + 6 000 = 161 000 + 54 000 = 215 000\nCM = 80 − 46 = 34; BEP = 54 000 / 34 = 1 588.24 → 1 589\nMoS = (3 500 − 1 588.24) / 3 500 = 54.6%\nOL = 3 500 × 34 / (119 000 − 54 000) = 119 000 / 65 000 = 1.83')}]}];


/* ---------- v2 (24/11/2026): layered sheets, figures, glossary, generators and tools (CONVENTIONS.md section 16) ---------- */
const {NOTION,FIG,PLOT,STEPS,TREE,LAYERED,svgPlot}=Rev.h;
const U=Rev.u,esc=Rev.h.esc,n2=x=>fmt(U.round(x,2));
const OUT='<b>Outside the slides:</b>';
const YT=NOTE(`${OUT} the “Your turn” questions and the generators use made-up numbers unless they name a course example (D&amp;W, Alpha, CotonRive…). The methods and the rounding rules are the course’s.`);
const TWO=(a,b)=>`<div class="grid2">${a}${b}</div>`;
// cost behaviour figures (Session 1, D&W numbers)
const BEHAV=`<div class="grid2">${FIG({xmax:2000,ymax:12000,xl:'doors',yl:'€',curves:[{f:x=>5.5*x,c:'--debit',l:'y = 5.5x'}]},'Variable: door handles at 5.5 € (total rises, per unit constant)')}${FIG({xmax:2000,ymax:2000,xl:'doors',yl:'€',curves:[{f:()=>1000,c:'--credit',l:'y = 1 000'}]},'Fixed: administration 1 000 € per month')}${FIG({xmax:2500,ymax:3000,xl:'doors',yl:'€',curves:[{f:x=>800*Math.max(1,Math.ceil(x/800)),c:'--warn',l:'800 € per 800 doors'}]},'Step cost: leased machines, a new step every 800 doors')}${FIG({xmax:2000,ymax:10000,xl:'doors',yl:'€',curves:[{f:x=>3*x+3000,c:'--ledger',l:'y = 3x + 3 000'}]},'Mixed (semi-variable): stores, 3 000 fixed + 3 per door')}</div>`;
// CVP chart for the D&W windows handout
const cvpSpec=(P,V,FC,xmax,Q)=>{const be=FC/(P-V),ymax=Math.max(P*xmax,FC+V*xmax)*1.05;const areas=[];
  if(be<xmax)areas.push({pts:[[0,FC],[be,P*be],[0,0]],c:'--bad',l:'loss'},{pts:[[be,P*be],[xmax,P*xmax],[xmax,FC+V*xmax]],c:'--ok',l:'profit'});
  return {xmax,ymax,xl:'units',yl:'€',curves:[{f:x=>P*x,c:'--debit',l:'sales revenue',lx:xmax*0.8},{f:x=>FC+V*x,c:'--credit',l:'total costs',lx:xmax*0.92},{f:()=>FC,c:'--muted',l:'fixed costs',dash:true,lx:xmax*0.85}],areas:areas.slice(0,1).concat(areas.slice(1)),
    marks:be<xmax?[{x:be,y:P*be,lx:'BEP '+n2(be),ly:''}]:[],points:be<xmax?[{x:be,y:P*be,l:'BEP'}]:[],vx:Q?[{x:Q,l:'expected',c:'--ledger',dash:true}]:[]}};
// value chain and full costing flow (vertical, phone friendly)
function flowSvg(steps,cap){const W=360,bh=34,gap=18,H=steps.length*(bh+gap);let g='';
  steps.forEach((s,i)=>{const y=i*(bh+gap)+4,inv=s.inv;g+=`<rect x="${inv?60:20}" y="${y}" width="${inv?240:320}" height="${bh}" rx="${inv?17:6}" style="fill:var(${inv?'--warn-soft':'--ledger-soft'});stroke:var(${inv?'--warn':'--ledger'})"/><text x="180" y="${y+15}" text-anchor="middle" class="pp">${s.t}</text><text x="180" y="${y+28}" text-anchor="middle" class="pt" style="font-family:var(--f-body)">${s.d||''}</text>`;
    if(i<steps.length-1)g+=`<line x1="180" y1="${y+bh}" x2="180" y2="${y+bh+gap-3}" style="stroke:var(--muted);stroke-width:1.5"/><path d="M175 ${y+bh+gap-8} L180 ${y+bh+gap-2} L185 ${y+bh+gap-8}" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>`});
  return `<figure class="fig"><svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="Flow">${g}</svg>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`}
const FLOW=flowSvg([{t:'PURCHASING',d:'direct materials + direct purchasing costs + purchasing overheads'},{t:'MATERIALS INVENTORY',d:'opening + bought − consumed = closing (WAC)',inv:true},{t:'PRODUCTION',d:'materials consumed + direct production costs + production overheads'},{t:'FINISHED GOODS INVENTORY',d:'opening + made − sold = closing (WAC)',inv:true},{t:'DISTRIBUTION',d:'goods sold + direct distribution costs + distribution overheads'},{t:'FULL COST → PROFIT',d:'profit = sales − full cost of goods sold'}],'The full costing flow of the course: each stage adds its direct costs and its overheads; inventories (orange) are valued at the weighted average cost.');

SHEETS.s1=LAYERED(SHEETS.s1,[
 {id:'s1-users',ess:'<p>Accounting identifies, measures and communicates economic information for decisions. <b>Financial accounting</b> serves external users and is regulated; <b>management accounting</b> serves internal users (managers), is optional, looks at parts of the organisation and at the future, more frequently.</p>',
  tryit:{q:'Which statement describes management accounting?',o:['Compulsory and directed by authoritative guidelines','Optional, for managers, often about estimated future costs','Published once a year for shareholders'],a:1,e:'Management accounting is entirely optional and oriented to internal decisions and the future.'}},
 {id:'s1-functions',ess:'<p>Three functions: (1) allocate costs between cost of goods sold and inventories (this course), (2) provide relevant information for decisions (this course), (3) planning, control and performance measurement (Management Control). <b>Cost accounting</b> feeds both financial and management accounting.</p>',
  tryit:{q:'Which function of management accounting is NOT developed in this course?',o:['Allocating costs to goods sold and inventories','Relevant information for decisions','Planning, control and performance measurement'],a:2,e:'That one belongs to Management Control.'}},
 {id:'s1-object',ess:'<p>A <b>cost object</b> is any activity for which a separate measurement of cost is required: a product, a service, a project, a customer, an activity, a department.</p>',
  tryit:{q:'At D&amp;W, “doors bought by elderly people” is an example of which cost object?',o:['A product','A customer','An activity'],a:1,e:'A group of customers is a cost object (slides).'}},
 {id:'s1-direct',ess:`${F('+ Direct materials\n+ Direct labour\n= Direct cost\n+ Overheads\n= Full cost')}<p><b>Direct costs</b> are traced exclusively to one cost object; <b>overheads</b> (indirect costs) are shared and must be allocated.</p>`,
  tryit:{q:'D&amp;W makes doors and windows in one plant. Plant heating is…',o:['a direct cost of doors','an overhead','a variable direct cost'],a:1,e:'Shared by doors and windows: an overhead, allocated with a cost driver.'}},
 {id:'s1-behav',ess:`<p>For a given activity and period: <b>variable</b> y = ax, <b>fixed</b> y = a, <b>step</b> (fixed by ranges, jumps at critical levels), <b>mixed</b> y = ax + b. Two activity levels tell you which one: same total → fixed; same cost per unit → variable; neither → mixed.</p>`,extra:BEHAV,
  tryit:{q:'A cost is 6 000 € for 1 000 units and 7 500 € for 1 500 units. Variable part per unit?',answer:3,e:'a = (7 500 − 6 000)/(1 500 − 1 000) = 3; b = 6 000 − 3 × 1 000 = 3 000.'}},
 {id:'s1-cat',ess:'<p>Direct/overhead and fixed/variable are <b>two independent classifications</b>: there are four categories (fixed direct, variable direct, fixed overhead, variable overhead).</p>',
  tryit:{q:'Depreciation of a machine used for one product only is…',o:['a fixed direct cost','a variable overhead','a fixed overhead'],a:0,e:'Traced to one product (direct) and constant whatever the volume (fixed): the glass melting machine of the slides.'}},
 {id:'s1-env',ess:'<p>Four categories: <b>protection</b> and <b>appraisal</b> costs (“trying to get it right”), <b>internal failure</b> (detected before reaching the public) and <b>external failure</b> costs (not detected before reaching the public: “getting it wrong”).</p>',
  tryit:{q:'A chemical leak pollutes a river before anyone notices it. Which category?',o:['Protection','Appraisal','Internal failure','External failure'],a:3,e:'Not detected before reaching the public: external failure.'}},
 {keep:true}]);

SHEETS.s2=LAYERED(SHEETS.s2,[
 {id:'s2-cvp',ess:'<p>CVP shows what happens to profit when volume, price or costs change. Assumptions: linear costs and revenues, costs split into fixed and variable, everything else constant, valid only in the <b>relevant range</b> → <b>short-term</b> model.</p>',
  extra:FIG(cvpSpec(170,100,20000,600,400),'D&amp;W windows: sales revenue (170 per unit) and total costs (20 000 + 100 per unit) cross at the break-even point 285.71 → 286 windows. Left of it: loss; right: profit.'),
  understand:'<p>Every unit sold brings its price but also its variable cost; the difference, the <b>contribution margin</b>, first covers the fixed costs, then becomes profit. The break-even point is where the accumulated contribution equals the fixed costs.</p>',
  tryit:{q:'Why is CVP a short-term model?',o:['Because it ignores fixed costs','Because costs and prices are assumed linear and constant only within the relevant range','Because it uses the WAC'],a:1,e:'Outside the relevant range, unit variable costs, prices and fixed costs change.'}},
 {id:'s2-formulas',ess:`${F('Profit = Q × (P − VCu) − FC      CM = P − VCu\nBEP (units) = FC / CM, rounded UP      CM ratio = CM / P\nBEP (€) = FC / CM ratio      Margin of safety % = (expected − BEP) / expected')}`,
  tryit:{q:'P = 50, VCu = 30, FC = 10 100. Break-even point in units?',answer:505,tol:0,e:'CM = 20; 10 100/20 = 505 (exact; otherwise round up).'}},
 {id:'s2-dw',ess:'<p>D&amp;W doors: CM 80.2, BEP 275 doors. Windows: CM 70, BEP 286, profit for 400 windows 8 000, price for a 5 000 profit 162.5, BEP in sales 48 571 (exact ratio) and margin of safety 28.57%.</p>',
  tryit:{q:'Windows: P 170, VCu 100, FC 20 000. Units needed for a profit of 7 000?',answer:386,tol:0,e:'(20 000 + 7 000)/70 = 385.71 → 386 windows (round up).'}},
 {id:'s2-sens',ess:'<p>“What if?”: a higher price or a lower variable cost raises the CM and lowers the BEP; fixed costs do not change the CM but move the BEP.</p>',
  tryit:{q:'Windows: the price falls from 170 to 150 (VCu 100, FC 20 000). New BEP?',answer:400,tol:0,e:'CM = 50; 20 000/50 = 400 windows.'}},
 {id:'s2-ol',ess:`${F('Operating leverage = total contribution / profit\n% change in profit = OL × % change in sales')}<p>High fixed costs → high OL → more upside and more risk; the OL is highest close to the BEP.</p>`,
  extra:FIG({xmin:280,xmax:600,ymin:0,ymax:40,xl:'windows sold',yl:'OL',curves:[{f:x=>70*x/(70*x-20000),c:'--credit',l:'OL = contribution / profit',from:290}],vx:[{x:285.71,l:'BEP',c:'--muted',dash:true}],points:[{x:400,y:3.5,l:'400: OL 3.5'}]},'Windows: the operating leverage explodes near the break-even point and falls as sales move away from it.'),
  tryit:{q:'OL = 4. Sales rise by 5%. Change in profit?',answer:20,unit:'%',tol:0.01,e:'4 × 5% = +20%.'}}]);

SHEETS.s3=LAYERED(SHEETS.s3,[
 {id:'s3-drivers',ess:`${F('Cost driver rate = overheads (€) / number of cost drivers')}<p>Three levels of sophistication: one <b>blanket rate</b> for the whole company, <b>department rates</b> (this course), activity-based costing (only named).</p>`,
  tryit:{q:'Overheads 24 780 €, 1 000 products sold. Blanket rate?',answer:24.78,e:'24 780/1 000 = 24.78 per product (D&amp;W).'}},
 {id:'s3-chain',ess:'<p>The <b>value chain</b>: primary activities (purchasing, production, distribution) supported by support activities. Inventories sit between the stages: materials after purchasing, finished goods before distribution.</p>',extra:FLOW,
  tryit:{q:'At D&amp;W, where are the doors stored before they are sold?',o:['Materials inventory','Finished goods inventory','Work-in-process'],a:1,e:'Completed but not yet sold: finished goods.'}},
 {id:'s3-depts',ess:'<p>Overheads go to departments (apportionment, not developed), service departments are re-assigned to operational ones, then each operational department computes its <b>rate</b> (step 3) and charges every cost object with drivers × rate (step 4). Exercises start at step 3.</p>',
  tryit:{q:'Purchasing overheads 6 300 €; 2 000 kg of wood and 5 000 kg of glass bought; driver: kg bought. Rate?',answer:0.9,e:'6 300/7 000 kg = 0.90 per kg (D&amp;W).'}},
 {id:'s3-inv',ess:`${F('Materials:       opening + purchases (in) − consumption (out) = closing\nFinished goods:  opening + production (in) − sales (out) = closing')}<p>No work-in-process in this course.</p>`,
  tryit:{q:'Doors: opening 600, produced 600, closing 100. Doors sold?',answer:1100,tol:0,e:'600 + 600 − 100 = 1 100.'}},
 {id:'s3-wac',ess:`${F('WAC = (cost of opening inventory + cost of inflows) / (opening units + inflow units)')}<p>Outflows and closing inventory are valued at the WAC, the only method of the course.</p>`,
  understand:'<p>Why an average? Units bought at different prices are mixed in the same store: we cannot say which kilo of wood was used, so every kilo leaving the store is valued at the average cost of everything available.</p>',
  tryit:{q:'Opening 1 000 kg at 4 €; purchase 3 000 kg at 5 €. WAC?',answer:4.75,e:'(4 000 + 15 000)/4 000 = 4.75 €/kg.'}}]);

SHEETS.s4=LAYERED(SHEETS.s4,[
 {id:'s4-stages',ess:'<p>a) purchasing cost of materials <b>bought</b> → b) materials <b>consumed</b> at the WAC → c) production cost of goods <b>made</b> → d) production cost of goods <b>sold</b> at the WAC → e) <b>full cost</b> = + distribution overheads → f) <b>profit</b> = sales − full cost.</p>',extra:FLOW,
  tryit:{q:'Materials consumed are valued at…',o:['the direct purchase price only','the WAC of the purchasing cost, including purchasing overheads','the selling price'],a:1,e:'“Classic mistake is to use the direct cost only” (slide): 5.12 €/kg of wood, not 4.22.'}},
 {id:'s4-dw',ess:'<p>D&amp;W in February: wood 5.12 €/kg bought, WAC 4.58; glass 13.26; production cost 105.50 per door and 159.34 per window; WAC of windows sold 154.92; full cost 107.85 per door and 161.34 per window; profit −785 on doors, +7 794 on windows.</p>',
  understand:STEPS({title:'D&amp;W February, the whole chain',steps:['Overheads table: purchasing 0.90 €/kg bought, cutting 32.35 €/machine hour, aggregating 19.05 and splitting 17.80 €/labour hour, distribution 6.42 € per product sold.','a) Purchasing cost: wood 4.22 + 0.90 = 5.12 €/kg; glass 12.36 + 0.90 = 13.26 €/kg.','b) Wood inventory: (3 000 × 4.22 + 2 000 × 5.12)/5 000 = 4.58 €/kg; glass 13.26 (no opening stock).','c) Door: 15 kg × 4.58 = 68.70 + labour 19.50 = 88.20 direct; + overheads 8.0875 + 4.7625 + 4.45 = 17.30 → 105.50.','c) Window: 9.16 + 106.08 + labour 26.90 = 142.14 direct; + 17.20 overheads → 159.34.','d) Finished goods WAC: doors (49 900 + 21 100)/700 = 101.43; windows (75 250 + 79 670)/1 000 = 154.92.','e) Full cost = production cost of goods sold + 6.42: doors 107.85, windows 161.34.','f) Profit: doors 10 000 − 10 785 = −785; windows 153 000 − 145 206 = 7 794; total 7 009.']}),
  tryit:{q:'Window: production cost 154.92 (WAC of goods sold), distribution 6.42 per window sold, price 170. Profit per window?',answer:8.66,e:'170 − (154.92 + 6.42) = 8.66.'}},
 {id:'s4-blanket',ess:'<p>The same 24 780 € of overheads give opposite pictures: with department rates doors lose 785 €, with the blanket rate they earn 2 427.50 €. Allocation feeds decisions (prices, outsourcing), so the method matters.</p>',
  tryit:{q:'Why does the blanket rate favour doors at D&amp;W?',o:['It charges every product the same 24.78, although windows use far more glass, hours and purchasing','It ignores distribution','It values inventories at FIFO'],a:0,e:'One average rate ignores the real consumption of resources by each product.'}},
 {id:'s4-sw',ess:'<p>Department full costing suits dominant direct costs, high information costs and few products. Weaknesses: <b>volume-based drivers</b> (subsidy effect: high-volume products pay for complex low-volume ones) and support and production costs merged.</p>',
  tryit:{q:'What is the “subsidy effect”?',o:['High-volume products bear overheads caused by complex low-volume products','The state subsidizes overheads','Inventories absorb fixed costs'],a:0,e:'Volume-based drivers spread overheads by units, not by the complexity that causes them.'}},
 {id:'s4-exam',ess:'<p>Mock exam order: overheads table → purchasing cost → production cost → finished goods inventory → full cost → profit, then a short comment; round amounts to two decimals; 0.1 point per cell.</p>',
  tryit:{q:'Customer-service overheads driven by “100 € of production cost of goods sold”: what must you compute first?',o:['The production cost of goods sold (finished goods WAC)','The purchasing cost','The blanket rate'],a:0,e:'The number of drivers is (production cost of goods sold)/100.'}}]);

SHEETS.s5=LAYERED(SHEETS.s5,[
 {id:'s5-rel',ess:'<p><b>Relevant</b> costs and revenues are <b>future</b> and <b>differ</b> between the alternatives. Sunk (past) costs are never relevant; costs identical in all options are irrelevant. Add the qualitative factors.</p>',
  tryit:{q:'Trip to Lyon: the “carte jeune” bought two months ago is…',o:['relevant','irrelevant: a sunk cost'],a:1,e:'Past costs never change with the decision.'}},
 {id:'s5-mix',ess:`${F('1. scarce resource? 2. CM per unit 3. CM per unit of scarce resource 4. rank 5. fill demand in that order')}`,
  tryit:{q:'Product A: CM 30, 3 machine hours; product B: CM 24, 2 hours. Machine hours are scarce. Which first?',o:['A (higher CM per unit)','B (12 per hour vs 10)'],a:1,e:'Rank by CM per unit of the scarce resource: B 24/2 = 12 &gt; A 30/3 = 10.'}},
 {id:'s5-term',ess:'<p>Short term (inside the relevant range): fixed costs are <b>irrelevant</b>. Long term: all costs are relevant. Incremental method (all costs of each scenario) or differential method (relevant costs only) give the same answer.</p>',
  tryit:{q:'In the short term, the fixed overheads of a plant with spare capacity are…',o:['relevant','irrelevant: incurred whatever the decision'],a:1,e:'Fixed costs do not change within the relevant range.'}},
 {id:'s5-special',ess:'<p>Special order: (1) <b>can we?</b> capacity; (2) <b>should we?</b> compare the order’s revenues with its relevant costs (variable + specific costs, + the opportunity cost if capacity is short). The full unit cost (94 €) is misleading.</p>',
  tryit:{q:'Spare capacity. Order of 200 units at 60 €; variable cost 50 €; extra delivery 4 € per unit. Effect on profit?',answer:1200,e:'200 × (60 − 50 − 4) = 1 200 → accept (short term).'}},
 {id:'s5-make',ess:'<p>Make or buy: short term, compare the <b>variable</b> cost of making with the purchase price (fixed costs continue); long term, all costs are relevant and the freed capacity can be used elsewhere.</p>',
  tryit:{q:'Make: 79 € of variable costs per door; buy at 85 €; fixed costs unchanged. Short-term decision for 100 doors?',o:['Make: saves 600 €','Buy: saves 600 €'],a:0,e:'100 × (85 − 79) = 600 in favour of making (D&amp;W).'}},
 {id:'s5-drop',ess:`${F('Keep a segment if:  contribution − avoidable fixed costs > 0')}<p>Unavoidable common costs stay and move to the other products.</p>`,
  tryit:{q:'Brand D: contribution 1 023, avoidable fixed 410, allocated common costs 620 (net −7). Drop it?',o:['Yes, it makes a loss','No: it covers 613 of common costs'],a:1,e:'1 023 − 410 = 613 &gt; 0: dropping D lowers total profit by 613.'}}]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Financial accounting','Accounting for external users (shareholders, creditors, regulators), compulsory and regulated, about the past period.','s1'],
['Management accounting','Accounting for internal users (managers), optional, financial and non-financial, oriented to the future.','s1'],
['Cost accounting','Measures and reports information on the acquisition or consumption of resources; feeds financial and management accounting.','s1'],
['Cost object','Any activity for which a separate measurement of cost is required: product, service, project, customer, activity, department.','s1'],
['Direct cost','A cost specifically and exclusively identified with a cost object (directly traced).','s1',['direct costs']],
['Overheads','Indirect costs shared by several cost objects, assigned through cost allocation.','s1',['overhead','indirect costs']],
['Full cost','Direct costs + overheads.','s1'],
['Variable cost','A cost that varies in direct proportion to activity: y = ax.','s1'],
['Fixed cost','A cost constant in total over wide ranges of activity: y = a.','s1'],
['Step cost','Fixed within a range of activity, jumping by a constant amount at critical levels (semi-fixed).','s1'],
['Mixed cost','A fixed part plus a variable part: y = ax + b (semi-variable).','s1',['semi-variable']],
['Environmental external failure costs','Environmental failures not detected or corrected before reaching the public.','s1'],
['Environmental internal failure costs','Environmental failures detected and cleaned up before reaching the public.','s1'],
['Cost-volume-profit analysis','Analysis of profit when volume, price or costs change, within the relevant range.','s2',['CVP']],
['Relevant range','The range of activity within which costs and prices behave as assumed (linear, constant).','s2'],
['Contribution margin','Selling price − variable cost per unit (total contribution = sales − variable costs).','s2',['CM']],
['Contribution margin ratio','CM / price = contribution / sales.','s2',['CM ratio']],
['Break-even point','The volume (or sales) at which profit = 0: FC / CM, rounded up.','s2',['BEP']],
['Margin of safety','Expected sales − break-even sales, in units, euros or %.','s2'],
['Sensitivity analysis','“What if?” analysis of the effect of a change in price, variable cost or fixed costs.','s2'],
['Operating leverage','Total contribution / profit: the sensitivity of profit to a change in sales.','s2'],
['Cost driver','The base used to assign overheads (kg bought, machine hours, units sold, 100 € of sales…).','s3',['cost drivers']],
['Cost driver rate','Department overheads / number of cost drivers.','s3'],
['Blanket overhead rate','A single overhead rate for the whole organisation.','s3',['blanket rate']],
['Value chain','The sequence of activities that add value to products from the customer’s point of view.','s3'],
['Operational department','Purchasing, production, distribution: its overheads go to cost objects.','s3'],
['Service department','A support department (administration) whose overheads are re-assigned to operational departments.','s3'],
['Apportionment','Assigning overheads to departments (steps 1–2, not developed in the course).','s3'],
['Absorption','Allocating overheads from departments to cost objects with cost driver rates (steps 3–4).','s3'],
['Finished goods inventory','Completed goods not yet sold.','s3'],
['Weighted average cost','(cost of opening inventory + cost of inflows) / (opening units + inflow units).','s3',['WAC']],
['Purchasing cost','Direct purchase cost + purchasing overheads of the materials bought.','s4'],
['Production cost','Materials consumed + direct production costs + production overheads.','s4'],
['Subsidy effect','With volume-based drivers, high-volume products bear overheads caused by complex low-volume products.','s4'],
['Relevant costs','Expected future costs that differ between the alternatives.','s5',['relevant cost']],
['Sunk cost','A past cost, never relevant to a decision.','s5',['sunk']],
['Opportunity cost','The contribution lost by choosing an alternative when capacity is short.','s5'],
['Scarce resource','A resource needed beyond what is available (machine hours…): rank products by CM per unit of it.','s5'],
['Incremental method','Comparing all revenues and costs of each scenario.','s5'],
['Differential method','Comparing only the relevant revenues and costs.','s5'],
['Special order','A one-time order, often at a lower price: accept if relevant revenues exceed relevant costs.','s5'],
['Outsourcing','Buying from outside instead of making (make or buy).','s5',['make or buy']],
['Avoidable fixed costs','Fixed costs that disappear if a segment is dropped.','s5'],
['Qualitative factors','Factors hard to measure in money (morale, supplier reliability) that still matter.','s5']
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators ---------- */
const ceilU=x=>Math.ceil(x-1e-9);
const GENS=[
{kind:'gen',id:'g-s1-behav',topic:'s1',title:'Cost behaviour from two activity levels',blurb:'Variable, fixed, mixed or step? Equation and cost at a third level',
 gen:u=>{const t=u.int(0,3),Q1=u.step(600,1500,100),Q2=Q1+u.step(300,900,100),Q3=Q2+u.step(200,800,100),a=u.pick([2,3,3.5,4,5.5,8]),b=u.step(1000,9000,500),s=u.pick([500,800,1000]),m=u.pick([600,800,1200]);
   const cost=q=>t===0?a*q:t===1?b:t===2?a*q+b:m*ceilU(q/s);return {t,Q1,Q2,Q3,a,b,s,m,c1:cost(Q1),c2:cost(Q2),c3:cost(Q3)}},
 q:v=>`${v.t===3?`Leased machines: ${fmt(v.m)} € for every ${fmt(v.s)} units (or part of it). `:''}The cost is ${fmt(v.c1)} € for ${fmt(v.Q1)} units and ${fmt(v.c2)} € for ${fmt(v.Q2)} units.`,
 parts:v=>[{label:'Behaviour',type:'choice',o:['variable','fixed','mixed (semi-variable)','step cost'],a:v=>v.t}].concat(v.t===2?[{label:'Variable part a (€ per unit)',answer:v=>v.a,tol:0.01},{label:'Fixed part b (€)',answer:v=>v.b,tol:0.5}]:[]).concat([{label:v=>`Cost for ${fmt(v.Q3)} units`,answer:v=>v.c3,tol:0.5,unit:'€'}]),
 steps:v=>{const u1=v.c1/v.Q1,u2=v.c2/v.Q2;const st=[`Per unit: ${n2(u1)} at ${fmt(v.Q1)} units, ${n2(u2)} at ${fmt(v.Q2)} units. Totals: ${fmt(v.c1)} and ${fmt(v.c2)}.`];
  if(v.t===0)st.push(`Same cost per unit → <b>variable</b>: y = ${v.a}x → ${v.a} × ${fmt(v.Q3)} = <b>${fmt(v.c3)}</b>.`);
  else if(v.t===1)st.push(`Same total → <b>fixed</b>: y = ${fmt(v.b)} at any level → <b>${fmt(v.c3)}</b>.`);
  else if(v.t===2)st.push(`Neither → <b>mixed</b>. a = (${fmt(v.c2)} − ${fmt(v.c1)}) / (${fmt(v.Q2)} − ${fmt(v.Q1)}) = <b>${v.a}</b>; b = ${fmt(v.c1)} − ${v.a} × ${fmt(v.Q1)} = <b>${fmt(v.b)}</b>.`,`y = ${v.a}x + ${fmt(v.b)} → ${v.a} × ${fmt(v.Q3)} + ${fmt(v.b)} = <b>${fmt(v.c3)}</b>.`);
  else st.push(`The description says “for every ${fmt(v.s)} units”: a <b>step cost</b> (it can look fixed at two levels).`,`${fmt(v.Q3)} / ${fmt(v.s)} = ${n2(v.Q3/v.s)} → round UP to ${ceilU(v.Q3/v.s)} steps × ${fmt(v.m)} = <b>${fmt(v.c3)}</b>.`);return st}},
{kind:'gen',id:'g-s1-total',topic:'s1',title:'Total cost and cost per unit (D&W style)',blurb:'Variable, fixed, step and mixed costs together',
 gen:u=>({dm:u.pick([40,55,63.3]),dl:u.pick([18,30,88.2]),adm:u.step(2000,8000,400),sm:u.pick([800,1000]),ss:u.pick([600,800]),sa:u.pick([2,3,4]),sb:u.step(1000,4000,500),Q:u.step(900,2500,100)}),
 q:v=>`Costs: direct materials ${v.dm} € per unit; direct labour ${v.dl} € per unit; administration ${fmt(v.adm)} € per month; leased machines ${fmt(v.sm)} € for every ${fmt(v.ss)} units; stores ${v.sa} € per unit + ${fmt(v.sb)} € fixed. Production: ${fmt(v.Q)} units.`,
 parts:[{label:'Number of machine steps',answer:v=>ceilU(v.Q/v.ss),tol:0},{label:'Total cost',answer:v=>(v.dm+v.dl+v.sa)*v.Q+v.adm+v.sm*ceilU(v.Q/v.ss)+v.sb,tol:0.5,unit:'€'},{label:'Cost per unit',answer:v=>((v.dm+v.dl+v.sa)*v.Q+v.adm+v.sm*ceilU(v.Q/v.ss)+v.sb)/v.Q,tol:0.01,unit:'€'}],
 steps:v=>{const k=ceilU(v.Q/v.ss),tot=(v.dm+v.dl+v.sa)*v.Q+v.adm+v.sm*k+v.sb;return [`Variable: (${v.dm} + ${v.dl} + ${v.sa}) × ${fmt(v.Q)} = ${fmt(r2((v.dm+v.dl+v.sa)*v.Q))}.`,`Fixed: administration ${fmt(v.adm)} + stores fixed part ${fmt(v.sb)}.`,`Step: ${fmt(v.Q)}/${fmt(v.ss)} = ${n2(v.Q/v.ss)} → <b>${k}</b> steps × ${fmt(v.sm)} = ${fmt(k*v.sm)}.`,`Total = <b>${n2(tot)}</b>; per unit ${n2(tot)}/${fmt(v.Q)} = <b>${n2(tot/v.Q)}</b> (it falls with volume because not all costs are variable).`]}},
{kind:'gen',id:'g-s2-bep',topic:'s2',title:'Contribution margin, break-even point, margin of safety',blurb:'The CVP handout with new numbers',levels:['CM and BEP','Full handout'],
 gen:(u,lv)=>{const P=u.step(40,200,5),CM=u.step(10,Math.floor(P*0.6/5)*5,5),FC=CM*u.int(150,900)+u.int(1,CM-1);const be=FC/CM;return {lv,P,V:P-CM,CM,FC,Q:ceilU(be)+u.int(20,300)}},
 q:v=>`Selling price ${v.P} €; variable cost ${v.V} € per unit; fixed costs ${fmt(v.FC)} €.${v.lv?` Expected sales ${fmt(v.Q)} units.`:''}`,
 parts:v=>[{label:'Contribution margin per unit',answer:v=>v.CM,tol:0.01},{label:'Break-even point (units)',answer:v=>ceilU(v.FC/v.CM),tol:0}].concat(v.lv?[{label:'CM ratio',answer:v=>v.CM/v.P*100,tol:0.05,unit:'%'},{label:'Break-even point (€)',answer:v=>v.FC/(v.CM/v.P),tolPct:0.2,unit:'€'},{label:'Margin of safety',answer:v=>(v.Q-v.FC/v.CM)/v.Q*100,tol:0.3,unit:'%'}]:[]),
 steps:v=>{const be=v.FC/v.CM;return [`CM = ${v.P} − ${v.V} = <b>${v.CM}</b> € per unit.`,`BEP = ${fmt(v.FC)} / ${v.CM} = ${n2(be)} → round UP: <b>${ceilU(be)}</b> units (with ${Math.floor(be)} units you still make a loss).`].concat(v.lv?[`CM ratio = ${v.CM}/${v.P} = <b>${n2(v.CM/v.P*100)}%</b> (keep four decimals: ${(v.CM/v.P).toFixed(4)}).`,`BEP in sales = ${fmt(v.FC)} / ${(v.CM/v.P).toFixed(4)} = <b>${n2(v.FC*v.P/v.CM)}</b> € (= ${n2(be)} × ${v.P}).`,`Margin of safety = (${fmt(v.Q)} − ${n2(be)}) / ${fmt(v.Q)} = <b>${n2((v.Q-be)/v.Q*100)}%</b>.`]:[])}},
{kind:'gen',id:'g-s2-target',topic:'s2',title:'Target profit: units, price, extra fixed costs',blurb:'(FC + profit) / CM and (profit + FC) / Q + VCu',
 gen:u=>{const P=u.step(60,200,10),CM=u.step(20,P*0.5,5),FC=u.step(5000,40000,1000),T=u.step(1000,10000,500),Q=u.step(300,1500,50),E=u.step(1000,6000,500);return {P,V:P-CM,CM,FC,T,Q,E}},
 q:v=>`Price ${v.P} €, variable cost ${v.V} €, fixed costs ${fmt(v.FC)} €. Target profit ${fmt(v.T)} €.`,
 parts:[{label:'Units needed for the target profit',answer:v=>ceilU((v.FC+v.T)/v.CM),tol:0},{label:v=>`Price needed to reach the target with ${fmt(v.Q)} units`,answer:v=>(v.T+v.FC)/v.Q+v.V,tol:0.01,unit:'€'},{label:v=>`Units needed if ${fmt(v.E)} € of advertising are added`,answer:v=>ceilU((v.FC+v.T+v.E)/v.CM),tol:0}],
 steps:v=>[`CM = ${v.P} − ${v.V} = ${v.CM}. Units = (${fmt(v.FC)} + ${fmt(v.T)}) / ${v.CM} = ${n2((v.FC+v.T)/v.CM)} → <b>${ceilU((v.FC+v.T)/v.CM)}</b> (round up).`,`Price = (${fmt(v.T)} + ${fmt(v.FC)}) / ${fmt(v.Q)} + ${v.V} = ${n2((v.T+v.FC)/v.Q)} + ${v.V} = <b>${n2((v.T+v.FC)/v.Q+v.V)}</b> €.`,`Extra fixed costs: (${fmt(v.FC)} + ${fmt(v.T)} + ${fmt(v.E)}) / ${v.CM} = ${n2((v.FC+v.T+v.E)/v.CM)} → <b>${ceilU((v.FC+v.T+v.E)/v.CM)}</b>.`]},
{kind:'gen',id:'g-s2-sens',topic:'s2',title:'Sensitivity analysis: what if?',blurb:'New break-even point after a change',
 gen:u=>{const P=u.step(80,200,10),V=u.step(30,P-30,10),FC=u.step(10000,40000,2000),k=u.int(0,3),d=[u.pick([-20,-10,10,20]),u.pick([-10,-5,5,10]),u.pick([-4000,-2000,2000,4000])];return {P,V,FC,k,d}},
 valid:v=>{const P=v.P+(v.k===0||v.k===3?v.d[0]:0),V=v.V+(v.k===1||v.k===3?v.d[1]:0);return P-V>=10},
 q:v=>`Base case: price ${v.P} €, variable cost ${v.V} €, fixed costs ${fmt(v.FC)} €. Change: ${['the price','the variable cost per unit','the fixed costs','price and variable cost'][v.k]} ${v.k===3?`(price ${v.d[0]>0?'+':''}${v.d[0]}, variable cost ${v.d[1]>0?'+':''}${v.d[1]})`:`${[v.d[0],v.d[1],v.d[2]][v.k]>0?'+':''}${fmt([v.d[0],v.d[1],v.d[2]][v.k])} €`}.`,
 parts:[{label:'Break-even point before (units)',answer:v=>ceilU(v.FC/(v.P-v.V)),tol:0},{label:'Break-even point after (units)',answer:v=>{const P=v.P+(v.k===0||v.k===3?v.d[0]:0),V=v.V+(v.k===1||v.k===3?v.d[1]:0),F=v.FC+(v.k===2?v.d[2]:0);return ceilU(F/(P-V))},tol:0}],
 steps:v=>{const P=v.P+(v.k===0||v.k===3?v.d[0]:0),V=v.V+(v.k===1||v.k===3?v.d[1]:0),F=v.FC+(v.k===2?v.d[2]:0);return [`Before: CM = ${v.P-v.V}; BEP = ${fmt(v.FC)}/${v.P-v.V} = ${n2(v.FC/(v.P-v.V))} → <b>${ceilU(v.FC/(v.P-v.V))}</b>.`,`After: price ${P}, variable cost ${V}, fixed costs ${fmt(F)}; CM = ${P-V}.`,`BEP = ${fmt(F)}/${P-V} = ${n2(F/(P-V))} → <b>${ceilU(F/(P-V))}</b>. ${P-V>v.P-v.V?'A higher CM lowers the BEP.':P-V<v.P-v.V?'A lower CM raises the BEP.':'The CM is unchanged; only the fixed costs move the BEP.'}`]}},
{kind:'gen',id:'g-s2-ol',topic:'s2',title:'Operating leverage',blurb:'Contribution / profit, and the effect of a change in sales',
 gen:u=>{const P=u.step(50,200,10),V=u.step(20,P-20,5),FC=u.step(5000,30000,1000),Q=ceilU(FC/(P-V)*u.pick([1.2,1.4,1.6,2,2.5])),s=u.pick([5,10,15,20]);return {P,V,FC,Q,s}},
 q:v=>`Price ${v.P} €, variable cost ${v.V} €, fixed costs ${fmt(v.FC)} €, sales ${fmt(v.Q)} units. Sales are expected to rise by ${v.s}%.`,
 parts:[{label:'Total contribution',answer:v=>(v.P-v.V)*v.Q,tol:0.5,unit:'€'},{label:'Profit',answer:v=>(v.P-v.V)*v.Q-v.FC,tol:0.5,unit:'€'},{label:'Operating leverage',answer:v=>(v.P-v.V)*v.Q/((v.P-v.V)*v.Q-v.FC),tol:0.01},{label:'% change in profit',answer:v=>v.s*(v.P-v.V)*v.Q/((v.P-v.V)*v.Q-v.FC),tol:0.1,unit:'%'}],
 steps:v=>{const C=(v.P-v.V)*v.Q,Pr=C-v.FC,OL=C/Pr;return [`Contribution = ${fmt(v.Q)} × (${v.P} − ${v.V}) = <b>${fmt(C)}</b>; profit = ${fmt(C)} − ${fmt(v.FC)} = <b>${fmt(Pr)}</b>.`,`OL = ${fmt(C)}/${fmt(Pr)} = <b>${n2(OL)}</b> (total contribution, not the CM per unit).`,`%Δ profit = ${n2(OL)} × ${v.s}% = <b>${n2(OL*v.s)}%</b>: profit goes from ${fmt(Pr)} to ${n2(Pr*(1+OL*v.s/100))} (check: ${fmt(Math.round(v.Q*(1+v.s/100)*100)/100)} units → ${n2(C*(1+v.s/100)-v.FC)}).`]}},
{kind:'gen',id:'g-s3-rates',topic:'s3',title:'Overhead analysis table: number of drivers and rates',blurb:'Fill in the table (step 3), with tricky driver units',
 gen:u=>{const kg=[u.step(1000,5000,500),u.step(2000,8000,500)],r=[u.pick([0.5,0.8,0.9,1.2,1.5]),u.pick([12,15.5,20,24,32.35]),u.pick([8,9.5,12,16,19.05]),u.pick([0.4,0.5,0.6,1.2,2.5])];
   const mh=u.step(100,600,20),lh=u.step(200,1200,50),sales=u.step(200000,900000,10000);const n=[kg[0]+kg[1],mh,lh,sales/100];return {kg,mh,lh,sales,r,n,oh:n.map((x,i)=>U.round(x*r[i],2))}},
 q:v=>`<p>Purchasing: driver “kg of materials bought” (${fmt(v.kg[0])} kg of A and ${fmt(v.kg[1])} kg of B bought). Machining: driver “machine hour” (${fmt(v.mh)} h). Assembly: driver “labour hour” (${fmt(v.lh)} h). Distribution: driver “100 € of sales” (sales ${fmt(v.sales)} €).</p>`,
 table:v=>({head:['','Purchasing','Machining','Assembly','Distribution'],rows:[['Overheads (a)',...v.oh.map(x=>fmt(x))],['Number of drivers (b)',{p:0},{p:1},{p:2},{p:3}],['Rate (a)/(b)',{p:4},{p:5},{p:6},{p:7}]]}),
 parts:['Purchasing','Machining','Assembly','Distribution'].map((d,i)=>({label:`${d}: number of drivers`,answer:v=>v.n[i],tol:0.01})).concat(['Purchasing','Machining','Assembly','Distribution'].map((d,i)=>({label:`${d}: rate`,answer:v=>v.oh[i]/v.n[i],tol:0.01}))),
 steps:v=>[`Purchasing: drivers = all kg bought = ${fmt(v.kg[0])} + ${fmt(v.kg[1])} = <b>${fmt(v.n[0])}</b>; rate = ${fmt(v.oh[0])}/${fmt(v.n[0])} = <b>${n2(v.r[0])}</b> € per kg.`,`Machining: ${fmt(v.mh)} h → ${fmt(v.oh[1])}/${fmt(v.mh)} = <b>${n2(v.r[1])}</b> € per machine hour.`,`Assembly: ${fmt(v.lh)} h → <b>${n2(v.r[2])}</b> € per labour hour.`,`Distribution: “100 € of sales” → ${fmt(v.sales)}/100 = <b>${fmt(v.n[3])}</b> drivers (not ${fmt(v.sales)}!); rate = ${fmt(v.oh[3])}/${fmt(v.n[3])} = <b>${n2(v.r[3])}</b>.`]},
{kind:'gen',id:'g-s3-blanket',topic:'s3',title:'Blanket rate vs department rates (Alpha)',blurb:'Full cost of one product both ways',
 gen:u=>{const H=[u.step(10000,30000,5000),u.step(10000,40000,5000),u.step(10000,30000,5000)],R=[u.pick([5,8,12.5,15]),u.pick([10,20,25]),u.pick([4,5,6,10])],use=[u.pick([0.5,1]),u.pick([0.5,1,1.5]),u.pick([0.5,1,1.5])];
   return {H,R,use,OH:H.map((h,i)=>h*R[i]),kg:u.pick([2,3,4,5]),pk:u.pick([4,5,6,8]),w:u.pick([10,12,14,15])}},
 q:v=>`<p>Product XTR: ${v.kg} kg of material at ${v.pk} €, ${v.use.reduce((a,b)=>a+b,0)} direct labour hours at ${v.w} € (${v.use[0]} h in A, ${v.use[1]} h in B, ${v.use[2]} h in C).</p>${T(['Department','A','B','C'],[['Overheads (€)',...v.OH.map(fmt)],['Labour hours',...v.H.map(fmt)]],[1,2,3])}`,
 parts:[{label:'Blanket rate (€ per labour hour)',answer:v=>v.OH.reduce((a,b)=>a+b,0)/v.H.reduce((a,b)=>a+b,0),tol:0.01},{label:'Full cost with the blanket rate',answer:v=>{const h=v.use.reduce((a,b)=>a+b,0);return v.kg*v.pk+h*v.w+h*U.round(v.OH.reduce((a,b)=>a+b,0)/v.H.reduce((a,b)=>a+b,0),2)},tol:0.05},{label:'Full cost with department rates',answer:v=>{const h=v.use.reduce((a,b)=>a+b,0);return v.kg*v.pk+h*v.w+v.use.reduce((s,x,i)=>s+x*v.R[i],0)},tol:0.05}],
 steps:v=>{const h=v.use.reduce((a,b)=>a+b,0),br=v.OH.reduce((a,b)=>a+b,0)/v.H.reduce((a,b)=>a+b,0),dir=v.kg*v.pk+h*v.w;return [`Direct cost = ${v.kg} × ${v.pk} + ${h} × ${v.w} = ${n2(dir)}.`,`Blanket rate = ${fmt(v.OH.reduce((a,b)=>a+b,0))}/${fmt(v.H.reduce((a,b)=>a+b,0))} h = <b>${n2(br)}</b>; full cost = ${n2(dir)} + ${h} × ${n2(br)} = <b>${n2(dir+h*U.round(br,2))}</b>.`,`Department rates: A ${v.R[0]}, B ${v.R[1]}, C ${v.R[2]} (overheads/hours). Overheads = ${v.use.map((x,i)=>`${x} × ${v.R[i]}`).join(' + ')} = ${n2(v.use.reduce((s,x,i)=>s+x*v.R[i],0))}; full cost = <b>${n2(dir+v.use.reduce((s,x,i)=>s+x*v.R[i],0))}</b>.`]}},
{kind:'gen',id:'g-s3-wac',topic:'s3',title:'Inventory card at the weighted average cost',blurb:'Fill in the table: WAC, consumption, closing',
 gen:u=>{const oq=u.step(500,4000,100),oc=u.pick([3.5,4.22,5,6.4,8]),iq=u.step(1000,6000,100),ic=U.round(oc+u.pick([-0.8,-0.4,0.3,0.6,0.9,1.2]),2),out=u.step(500,oq+iq-100,100);return {oq,oc,iq,ic,out}},
 q:v=>'<p>Fill in the inventory card. Round the WAC to two decimals, like the course.</p>',
 table:v=>({head:['','Quantity','€ per unit','Total €'],rows:[['Opening',fmt(v.oq),v.oc,fmt(r2(v.oq*v.oc))],['In (purchases)',fmt(v.iq),v.ic,fmt(r2(v.iq*v.ic))],['Out (consumption)',fmt(v.out),{p:0},{p:1}],['Closing',{p:2},'(WAC)',{p:3}]]}),
 parts:[{label:'WAC (€ per unit)',answer:v=>U.round((v.oq*v.oc+v.iq*v.ic)/(v.oq+v.iq),2),tol:0.011},{label:'Consumption (€)',answer:v=>v.out*U.round((v.oq*v.oc+v.iq*v.ic)/(v.oq+v.iq),2),tolPct:0.1},{label:'Closing quantity',answer:v=>v.oq+v.iq-v.out,tol:0},{label:'Closing value (€)',answer:v=>(v.oq+v.iq-v.out)*U.round((v.oq*v.oc+v.iq*v.ic)/(v.oq+v.iq),2),tolPct:0.1}],
 steps:v=>{const w=U.round((v.oq*v.oc+v.iq*v.ic)/(v.oq+v.iq),2),cq=v.oq+v.iq-v.out;return [`WAC = (${fmt(r2(v.oq*v.oc))} + ${fmt(r2(v.iq*v.ic))}) / (${fmt(v.oq)} + ${fmt(v.iq)}) = <b>${n2(w)}</b>.`,`Out: ${fmt(v.out)} × ${n2(w)} = <b>${n2(v.out*w)}</b>.`,`Closing: ${fmt(v.oq)} + ${fmt(v.iq)} − ${fmt(v.out)} = <b>${fmt(cq)}</b> units × ${n2(w)} = <b>${n2(cq*w)}</b>.`,`Check: opening + in = out + closing in units and (to rounding) in euros.`]}},
{kind:'gen',id:'g-s4-chain',topic:'s4',title:'The full costing chain (mock-exam table)',blurb:'Purchasing → materials WAC → production → finished goods WAC → full cost → profit',
 gen:u=>{const p=u.pick([4,5,6.5,8]),r=u.pick([0.5,0.8,1,1.2]),Q=u.step(2000,6000,500),O=u.step(500,3000,500),oc=U.round(p+r+u.pick([-0.6,-0.3,0.2,0.4]),2),m=u.pick([2,3,4,5]),N=u.step(400,1200,100),h=u.pick([0.5,1,1.5,2]),w=u.pick([14,15.5,16,18]),po=u.pick([8,10,12.5,20]),F=u.step(100,600,50),d=u.pick([3,4.5,6.42,8]),S=u.step(300,N+F-50,50);
   return {p,r,Q,O,oc,m,N,h,w,po,F,S,d}},
 valid:v=>v.N*v.m<=v.O+v.Q&&v.S<=v.F+v.N,
 q:v=>{return `<p><b>Purchasing</b>: ${fmt(v.Q)} kg bought at ${v.p} €/kg; purchasing overheads ${v.r} € per kg bought. <b>Materials inventory</b>: opening ${fmt(v.O)} kg at ${v.oc} €/kg. <b>Production</b>: ${fmt(v.N)} units, each using ${v.m} kg and ${v.h} direct labour hour(s) at ${v.w} €/h; production overheads ${v.po} € per labour hour. <b>Finished goods</b>: opening ${fmt(v.F)} units at ${n2(fgOpen(v))} € each. <b>Sales</b>: ${fmt(v.S)} units at ${n2(salePrice(v))} €; distribution overheads ${v.d} € per unit sold. Round unit costs to two decimals at each step.</p>`},
 table:v=>({head:['Stage','€'],rows:[['a) Purchasing cost per kg bought',{p:0}],['b) Materials WAC per kg',{p:1}],['c) Production cost per unit made',{p:2}],['d) Finished goods WAC per unit',{p:3}],['e) Full cost per unit sold',{p:4}],['f) Profit',{p:5}]]}),
 parts:[{label:'Purchasing cost per kg',answer:v=>chain(v).pc,tol:0.011},{label:'Materials WAC',answer:v=>chain(v).wm,tol:0.011},{label:'Production cost per unit',answer:v=>chain(v).pu,tol:0.03},{label:'Finished goods WAC',answer:v=>chain(v).wf,tol:0.03},{label:'Full cost per unit',answer:v=>chain(v).fu,tol:0.03},{label:'Profit',answer:v=>chain(v).profit,tolPct:0.3,tol:2}],
 steps:v=>{const c=chain(v);return [`a) ${v.p} + ${v.r} = <b>${n2(c.pc)}</b> € per kg (direct cost + purchasing overheads).`,`b) WAC = (${fmt(v.O)} × ${v.oc} + ${fmt(v.Q)} × ${n2(c.pc)}) / (${fmt(v.O)} + ${fmt(v.Q)}) = <b>${n2(c.wm)}</b>.`,`c) Per unit: ${v.m} kg × ${n2(c.wm)} + ${v.h} h × ${v.w} + ${v.h} h × ${v.po} = <b>${n2(c.pu)}</b>.`,`d) Finished goods WAC = (${fmt(v.F)} × ${n2(fgOpen(v))} + ${fmt(v.N)} × ${n2(c.pu)}) / ${fmt(v.F+v.N)} = <b>${n2(c.wf)}</b>.`,`e) Full cost = ${n2(c.wf)} + ${v.d} = <b>${n2(c.fu)}</b> per unit sold.`,`f) Profit = ${fmt(v.S)} × (${n2(salePrice(v))} − ${n2(c.fu)}) = <b>${n2(c.profit)}</b>.`]}},
{kind:'gen',id:'g-s5-mix',topic:'s5',title:'Product mix under a scarce resource',blurb:'Rank by contribution per unit of the scarce resource',
 gen:u=>{const A={P:u.step(60,200,10),V:0,h:u.pick([2,3,4,5]),D:u.step(100,600,50)},B={P:u.step(60,200,10),V:0,h:u.pick([2,4,6,8]),D:u.step(100,900,50)};A.V=A.P-u.step(10,A.P-20,5);B.V=B.P-u.step(10,B.P-20,5);
   const need=A.h*A.D+B.h*B.D,cap=Math.round(need*u.pick([0.55,0.65,0.75,0.85])/10)*10;return {A,B,cap}},
 valid:v=>{const a=(v.A.P-v.A.V)/v.A.h,b=(v.B.P-v.B.V)/v.B.h;if(Math.abs(a-b)<0.3)return false;const f=a>b?v.A:v.B;return f.h*f.D<v.cap},
 q:v=>T(['','Product A','Product B'],[['Selling price',v.A.P,v.B.P],['Variable cost per unit',v.A.V,v.B.V],['Machine hours per unit',v.A.h,v.B.h],['Maximum demand',fmt(v.A.D),fmt(v.B.D)]])+`<p>Available machine hours: ${fmt(v.cap)}.</p>`,
 parts:[{label:'Which product first?',type:'choice',o:['A','B'],a:v=>mixSol(v).first},{label:'Units of the other product',answer:v=>mixSol(v).q2,tol:0},{label:'Maximum total contribution',answer:v=>mixSol(v).tot,tol:0.5,unit:'€'}],
 steps:v=>{const s=mixSol(v),f=s.first?v.B:v.A,g=s.first?v.A:v.B,L=s.first?['B','A']:['A','B'];return [`Hours needed = ${v.A.h} × ${fmt(v.A.D)} + ${v.B.h} × ${fmt(v.B.D)} = ${fmt(v.A.h*v.A.D+v.B.h*v.B.D)} &gt; ${fmt(v.cap)}: machine hours are scarce.`,`CM per hour: A (${v.A.P} − ${v.A.V})/${v.A.h} = ${n2((v.A.P-v.A.V)/v.A.h)}; B (${v.B.P} − ${v.B.V})/${v.B.h} = ${n2((v.B.P-v.B.V)/v.B.h)} → <b>${L[0]} first</b>.`,`${L[0]}: ${fmt(f.D)} units use ${fmt(f.h*f.D)} h; ${fmt(v.cap-f.h*f.D)} h left / ${g.h} = ${n2((v.cap-f.h*f.D)/g.h)} → <b>${s.q2}</b> units of ${L[1]} (round down).`,`Contribution = ${fmt(f.D)} × ${f.P-f.V} + ${s.q2} × ${g.P-g.V} = <b>${fmt(s.tot)}</b>.`]}},
{kind:'gen',id:'g-s5-special',topic:'s5',title:'Special order: accept or reject?',blurb:'With spare capacity, or with an opportunity cost',levels:['Spare capacity','Capacity too short'],
 gen:(u,lv)=>{const C=u.step(1000,3000,100),Q0=Math.round(C*u.pick([0.4,0.5,0.6,0.7])/10)*10,P0=u.step(80,160,10),v=u.step(40,P0-20,5),n=lv?C-Q0+u.step(50,300,50):u.step(100,C-Q0,50),po=v+u.pick([-5,3,6,10,15,20]),e=u.pick([0,2,4,5]);return {lv,C,Q0,P0,v,n,po,e}},
 valid:v=>v.lv?v.n>v.C-v.Q0:v.n<=v.C-v.Q0,
 q:v=>`Capacity ${fmt(v.C)} units per month; normal sales ${fmt(v.Q0)} units at ${v.P0} €; variable cost ${v.v} € per unit; fixed costs unchanged. A customer orders ${fmt(v.n)} units at ${v.po} € (extra selling cost ${v.e} € per unit). Short term.${v.lv?' Normal sales lost if capacity is short.':''}`,
 parts:v=>[{label:'Contribution of the order (before opportunity cost)',answer:v=>v.n*(v.po-v.v-v.e),tol:0.5,unit:'€'}].concat(v.lv?[{label:'Opportunity cost (contribution lost on normal sales)',answer:v=>(v.Q0+v.n-v.C)*(v.P0-v.v),tol:0.5,unit:'€'}]:[]).concat([{label:'Net effect on profit',answer:v=>v.n*(v.po-v.v-v.e)-(v.lv?(v.Q0+v.n-v.C)*(v.P0-v.v):0),tol:0.5,unit:'€'},{label:'Decision',type:'choice',o:['Accept','Reject'],a:v=>v.n*(v.po-v.v-v.e)-(v.lv?(v.Q0+v.n-v.C)*(v.P0-v.v):0)>0?0:1}]),
 steps:v=>{const c=v.n*(v.po-v.v-v.e),L=v.lv?v.Q0+v.n-v.C:0,o=L*(v.P0-v.v);return [`Can we? ${fmt(v.Q0)} + ${fmt(v.n)} = ${fmt(v.Q0+v.n)} ${v.lv?`&gt; ${fmt(v.C)}: ${fmt(L)} units of normal sales would be lost`:`≤ ${fmt(v.C)}: spare capacity`}.`,`Relevant: ${fmt(v.n)} × (${v.po} − ${v.v} − ${v.e}) = <b>${fmt(c)}</b> (fixed costs irrelevant in the short term).`].concat(v.lv?[`Opportunity cost = ${fmt(L)} × (${v.P0} − ${v.v}) = <b>${fmt(o)}</b>.`]:[]).concat([`Net = <b>${fmt(c-o)}</b> → <b>${c-o>0?'accept':'reject'}</b> (if the order is one-time and does not affect the normal price).`])}},
{kind:'gen',id:'g-s5-make',topic:'s5',title:'Make or buy',blurb:'Short term (variable costs) or long term (all costs, freed capacity)',levels:['Short term','Long term'],
 gen:(u,lv)=>{const n=u.step(100,2000,100),vm=u.step(40,120,1),pb=vm+u.pick([-12,-6,-3,4,8,15]),F=lv?u.step(1000,8000,500):0,R=lv?u.pick([0,1000,2000,3000]):0;return {lv,n,vm,pb,F,R}},
 q:v=>`${fmt(v.n)} components per month. Making them costs ${v.vm} € of variable costs per unit${v.lv?` plus ${fmt(v.F)} € of fixed costs that would disappear if we buy; the freed space could be rented for ${fmt(v.R)} € per month`:'; fixed costs continue whatever the decision'}. An outside supplier sells them at ${v.pb} €.`,
 parts:[{label:'Cost of making (relevant)',answer:v=>v.n*v.vm+v.F+v.R,tol:0.5,unit:'€'},{label:'Cost of buying',answer:v=>v.n*v.pb,tol:0.5,unit:'€'},{label:'Decision',type:'choice',o:['Make','Buy'],a:v=>v.n*v.vm+v.F+v.R<=v.n*v.pb?0:1}],
 steps:v=>[`Make: ${fmt(v.n)} × ${v.vm} = ${fmt(v.n*v.vm)}${v.lv?` + avoidable fixed costs ${fmt(v.F)} + rent foregone ${fmt(v.R)} (opportunity cost)`:''} = <b>${fmt(v.n*v.vm+v.F+v.R)}</b>.`,`Buy: ${fmt(v.n)} × ${v.pb} = <b>${fmt(v.n*v.pb)}</b>.`,`→ <b>${v.n*v.vm+v.F+v.R<=v.n*v.pb?'make':'buy'}</b> (difference ${fmt(Math.abs(v.n*v.pb-v.n*v.vm-v.F-v.R))} €). Add the qualitative factors: supplier reliability, quality, loss of skills.`]},
{kind:'gen',id:'g-s5-drop',topic:'s5',title:'Drop a segment or keep it?',blurb:'Contribution − avoidable fixed costs',
 gen:u=>{const S=u.step(500,3000,50),V=Math.round(S*u.pick([0.35,0.45,0.55,0.65])),A=u.step(100,900,10),C=u.step(200,900,10);return {S,V,A,C}},
 q:v=>T(['Segment X','€'],[['Sales',fmt(v.S)],['Variable costs',fmt(v.V)],['Avoidable fixed costs (advertising, brand manager)',fmt(v.A)],['Allocated common fixed costs (unavoidable)',fmt(v.C)]],[1]),
 parts:[{label:'Contribution',answer:v=>v.S-v.V,tol:0.5},{label:'Contribution − avoidable fixed costs',answer:v=>v.S-v.V-v.A,tol:0.5},{label:'Net profit of the segment',answer:v=>v.S-v.V-v.A-v.C,tol:0.5},{label:'Decision',type:'choice',o:['Keep','Drop'],a:v=>v.S-v.V-v.A>0?0:1},{label:'Change in company profit if dropped',answer:v=>-(v.S-v.V-v.A),tol:0.5}],
 steps:v=>{const m=v.S-v.V-v.A;return [`Contribution = ${fmt(v.S)} − ${fmt(v.V)} = ${fmt(v.S-v.V)}; minus avoidable fixed ${fmt(v.A)} = <b>${fmt(m)}</b>.`,`Net profit after common costs: ${fmt(m-v.C)} (the common ${fmt(v.C)} stay if the segment is dropped).`,`${m>0?`<b>Keep</b>: it covers ${fmt(m)} of common costs; dropping it lowers total profit by ${fmt(m)}`:`<b>Drop</b>: it does not even cover its avoidable costs; dropping it raises total profit by ${fmt(-m)}`}.`]}},
{kind:'gen',id:'g-s5-min',topic:'s5',title:'Minimum price of a special order',blurb:'Relevant variable and specific costs only (HopeShelter)',
 gen:u=>({m:u.pick([2,4,6.5,8]),l:u.pick([1.5,2,3]),vo:u.pick([0.25,0.5,1]),sp:u.pick([0,0.25,0.5,1]),fo:u.pick([1,1.5,2.5])}),
 q:v=>`Spare capacity. Per unit: materials ${v.m} €, direct labour ${v.l} €, variable overheads ${v.vo} €, allocated fixed overheads ${v.fo} €. The order needs special packaging at ${v.sp} € per unit.`,
 parts:[{label:'Minimum price per unit',answer:v=>v.m+v.l+v.vo+v.sp,tol:0.01,unit:'€'}],
 steps:v=>[`Relevant: ${v.m} + ${v.l} + ${v.vo} + ${v.sp} = <b>${n2(v.m+v.l+v.vo+v.sp)}</b> €.`,`The ${v.fo} € of allocated fixed overheads are irrelevant: they are incurred whatever the decision (short term, spare capacity).`]}
];
function fgOpen(v){return U.round(chainBase(v).pu+v.F%7*0.1-0.4,2)}
function salePrice(v){return U.round(chainBase(v).pu+v.d+[6,9,12,15,-3][v.S%5]+0.5,2)}
function chainBase(v){const pc=U.round(v.p+v.r,2),wm=U.round((v.O*v.oc+v.Q*pc)/(v.O+v.Q),2),pu=U.round(v.m*wm+v.h*v.w+v.h*v.po,2);return {pc,wm,pu}}
function chain(v){const b=chainBase(v),fo=fgOpen(v),wf=U.round((v.F*fo+v.N*b.pu)/(v.F+v.N),2),fu=U.round(wf+v.d,2),P=salePrice(v);return Object.assign(b,{wf,fu,profit:U.round(v.S*(P-fu),2)})}
function mixSol(v){const a=(v.A.P-v.A.V)/v.A.h,b=(v.B.P-v.B.V)/v.B.h,first=a>b?0:1,f=first?v.B:v.A,g=first?v.A:v.B,q2=Math.min(g.D,Math.floor((v.cap-f.h*f.D)/g.h+1e-9));return {first,q2,tot:f.D*(f.P-f.V)+q2*(g.P-g.V)}}

/* ---------- v2: tools ---------- */
const TOOLS=[
{kind:'plot',id:'p-s2-cvp',topic:'s2',title:'CVP chart: break-even point and margin of safety',blurb:'Move price, variable cost, fixed costs and expected sales',
 params:[{k:'P',label:'Selling price',min:50,max:300,step:5,v:170},{k:'V',label:'Variable cost per unit',min:10,max:200,step:5,v:100},{k:'FC',label:'Fixed costs',min:2000,max:60000,step:1000,v:20000},{k:'Q',label:'Expected sales (units)',min:50,max:1000,step:10,v:400}],
 x:{max:1000,label:'units'},y:p=>({max:Math.max(p.P*1000,p.FC+p.V*1000)*1.05,label:'€'}),
 draw:p=>cvpSpec(p.P,p.V,p.FC,1000,p.Q),
 readout:p=>{const CM=p.P-p.V;if(CM<=0)return '<p>The variable cost is above the price: every unit sold loses money; there is no break-even point.</p>';const be=p.FC/CM,pr=p.Q*CM-p.FC;
  return T(['','Value'],[['Contribution margin',n2(CM)],['CM ratio',n2(CM/p.P*100)+'%'],['Break-even point (units)',`${n2(be)} → ${ceilU(be)}`],['Break-even point (€)',n2(p.FC*p.P/CM)],['Profit at expected sales',n2(pr)],['Margin of safety',p.Q>be?n2((p.Q-be)/p.Q*100)+'%':'none: below break-even'],['Operating leverage',pr>0?n2(p.Q*CM/pr):'—']],[1])+'<p class="hint">Default values: D&amp;W windows (170, 100, 20 000, 400 windows). Raise the fixed costs: the BEP moves, the CM does not. Move the expected sales towards the BEP: the operating leverage explodes.</p>'}},
{kind:'plot',id:'p-s1-behav',topic:'s1',title:'Cost behaviour: total and per unit',blurb:'Variable, fixed, step and mixed costs at any activity level',
 params:[{k:'Q',label:'Activity (doors)',min:100,max:2500,step:50,v:1000},{k:'s',label:'Step size of the leased machines',min:200,max:1200,step:100,v:800}],
 x:{max:2500,label:'doors'},y:{max:10000,label:'€'},
 draw:p=>({curves:[{f:x=>3*x,c:'--debit',l:'variable 3x'},{f:()=>4000,c:'--credit',l:'fixed 4 000'},{f:x=>800*Math.max(1,Math.ceil(x/p.s-1e-9)),c:'--warn',l:'step'},{f:x=>2*x+3000,c:'--ledger',l:'mixed 2x + 3 000'}],vx:[{x:p.Q,l:'activity',c:'--muted',dash:true}]}),
 readout:p=>{const k=Math.max(1,Math.ceil(p.Q/p.s-1e-9)),c=[3*p.Q,4000,800*k,2*p.Q+3000];return T(['Cost','Total','Per unit'],[['Variable (3 per door)',fmt(c[0]),'3'],['Fixed (4 000)',fmt(c[1]),n2(4000/p.Q)],[`Step (800 per ${p.s} doors: ${k} steps)`,fmt(c[2]),n2(c[2]/p.Q)],['Mixed (2x + 3 000)',fmt(c[3]),n2(c[3]/p.Q)]],[1,2])+`<p class="hint">Variable: per unit constant, total rises. Fixed: total constant, per unit falls. ${OUT} illustrative amounts in the spirit of the D&amp;W slides.</p>`}},
{kind:'tree',id:'tr-s5',topic:'s5',title:'Which method for this decision?',blurb:'Special order, make or buy, drop a segment, product mix',start:'q1',
 nodes:{q1:{q:'Which decision?',o:[{l:'A special order (one-time, often at a lower price)',to:'q2'},{l:'Make or buy (outsourcing)',to:'q4'},{l:'Drop a product or segment',to:'r6'},{l:'Product mix with a limited resource',to:'q5'}]},
  q2:{q:'Can we? Is there spare capacity for the order?',o:[{l:'Yes',to:'q3',why:'No normal sales are lost.'},{l:'No',to:'r3',why:'Accepting means losing normal sales.'}]},
  q3:{q:'Short term or long term?',o:[{l:'Short term (within the relevant range)',to:'r1',why:'Fixed costs are incurred whatever the decision.'},{l:'Long term (recurring contract)',to:'r2',why:'Fixed costs and alternative uses of the facilities change.'}]},
  q4:{q:'Short term or long term?',o:[{l:'Short term: fixed costs continue, freed capacity unused',to:'r4'},{l:'Long term: avoidable fixed costs, freed capacity used elsewhere',to:'r5'}]},
  q5:{q:'Is a resource scarce (needed > available)?',o:[{l:'Yes',to:'r7',why:'The resource limits the total contribution.'},{l:'No',to:'r8',why:'Produce everything demanded.'}]},
  r1:{end:'Accept if the order’s revenues exceed its variable and specific costs (differential method)',why:'D&amp;W 500 doors at 85 €: 500 × (85 − 84) = +500 → accept.'},
  r2:{end:'Compare all costs and revenues of both scenarios (incremental method): fixed costs saved, rent foregone…',why:'D&amp;W 1 000 doors per month: 1 600 vs 1 700 → reject in the long term.'},
  r3:{end:'Add the opportunity cost (contribution lost on normal sales) to the relevant costs',why:'XYZ client B: 60 000 − 52 500 = +7 500.'},
  r4:{end:'Compare the variable cost of making with the purchase price',why:'D&amp;W doors: 7 900 vs 8 500 → make.'},
  r5:{end:'All costs are relevant: avoidable fixed costs and the use of the freed capacity count',why:'D&amp;W: buy the doors, make 150 windows → +2 750.'},
  r6:{end:'Keep the segment if contribution − avoidable fixed costs > 0; unavoidable common costs move to the others',why:'Brands: drop B (−20), keep D (+613).'},
  r7:{end:'Rank by contribution per unit of the scarce resource and fill demand in that order',why:'D&amp;W machine hours: doors 5.25/h before windows 4.75/h.'},
  r8:{end:'Produce all products with a positive contribution margin up to demand',why:'No constraint: no ranking needed.'}},
 cases:[{text:'D&amp;W: a customer wants 500 doors at 85 € this month; capacity 1 250, normal sales 100.',path:{q1:0,q2:0,q3:0}},{text:'D&amp;W: a customer wants 1 000 doors per month at 85 € for the next years; refused, the facilities could be rented out.',path:{q1:0,q2:0,q3:1}},{text:'XYZ: client B wants 80 000 units at 5 €; only 100 000 units of spare capacity and client C (30 000 units) is likely to accept a bid.',path:{q1:0,q2:1}},{text:'D&amp;W: buy 100 doors at 85 € this month; the capacity freed stays unused.',path:{q1:1,q4:0}},{text:'D&amp;W: buy the doors permanently and use the capacity to make 50 more windows.',path:{q1:1,q4:1}},{text:'Brand B makes a loss of 375 after allocated common costs.',path:{q1:2}},{text:'D&amp;W: doors and windows need 7 600 machine hours but only 5 000 are available.',path:{q1:3,q5:0}}]}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
// v2 quiz and card helpers: options written with the right answer first, shuffled once (seed = id) so the answer is not always a
const seedOf=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const QV=(id,topic,src,q,o,a,e)=>{let r=seedOf(id);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};const idx=o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}return {id,topic,src,q,o:idx.map(i=>o[i]),a:idx.indexOf(a),e}};
const CV=(id,topic,f,b)=>({id,topic,f,b});

EXERCISES.push(
{id:'x-s1-sort4',topic:'s1',type:'sort',src:'course',title:'The four categories of costs',q:'D&amp;W and the slides: sort each cost.',cats:['Fixed direct','Variable direct','Fixed overhead','Variable overhead'],
 items:[['Depreciation of the glass melting machine (windows only)','Fixed direct'],['Wood used for the doors','Variable direct'],['Rent of the plant (doors and windows)','Fixed overhead'],['Energy of machines used for doors and windows','Variable overhead'],['Direct labour of door assembly','Variable direct'],['Plant depreciation','Fixed overhead'],['Property taxes of the plant','Fixed overhead']]},
{id:'x-s1-sortenv',topic:'s1',type:'sort',src:'course',title:'Environmental costs',q:'Sort the examples of the slides into the four categories.',cats:['Protection','Appraisal','Internal failure','External failure'],
 items:[['Company processes to prevent pollution','Protection'],['Staff training on environmental risks','Protection'],['Controls of pollution levels','Appraisal'],['Inspection of workers handling hazardous waste','Appraisal'],['Chemical spillage cleaned up in the factory','Internal failure'],['Leakage detected in the plant','Internal failure'],['Gas cloud moving towards a town','External failure'],['Radioactive waste released into the sea','External failure']]},
{id:'x-s3-sortdrivers',topic:'s4',type:'sort',src:'course',title:'Which quantity drives each overhead?',q:'Sort the driver units by department flow.',cats:['Purchasing (quantity bought)','Production (quantity produced or hours)','Distribution (quantity sold)','Customer services (production cost of goods sold)'],
 items:[['kg of wood bought','Purchasing (quantity bought)'],['100 m of fabric purchased','Purchasing (quantity bought)'],['machine hours','Production (quantity produced or hours)'],['direct labour hours','Production (quantity produced or hours)'],['finished units produced','Production (quantity produced or hours)'],['units sold','Distribution (quantity sold)'],['100 € of sales','Distribution (quantity sold)'],['100 € of production cost of goods sold','Customer services (production cost of goods sold)']]},
{id:'x-s5-sortrel',topic:'s5',type:'sort',src:'course',title:'Relevant or not? (short-term special order)',q:'D&amp;W, 500 doors at 85 € with spare capacity: sort each item.',cats:['Relevant','Irrelevant'],
 items:[['Direct materials of the 500 doors','Relevant'],['Direct labour of the 500 doors','Relevant'],['Variable overheads of the 500 doors','Relevant'],['Extra selling cost of 5 € per door','Relevant'],['Direct fixed costs of 1 000 € per month','Irrelevant'],['Fixed overheads of 500 € per month','Irrelevant'],['The “94 € cost per unit for 100 doors”','Irrelevant'],['Revenue of the order (500 × 85)','Relevant']]}
);
QUIZ.push(
QV('q100','s1','practice','A cost is 2 400 € for 1 000 units and 2 400 € for 1 500 units, described as “800 € for every 800 units”. Behaviour?',['A step cost','A fixed cost','A variable cost','A mixed cost'],0,'It looks fixed at the two levels, but the description gives steps: at 1 700 units it jumps to 2 400 + … (read the description, not only the numbers).'),
QV('q101','s1','practice','Environmental appraisal costs are…',['controls and inspections to check that pollution stays within limits','costs of cleaning up a spill inside the factory','costs of a pollution that reached a river','training to prevent pollution'],0,'Appraisal = checking (controls, inspections); protection = preventing.'),
QV('q102','s2','practice','At the break-even point…',['sales revenue = total costs and profit = 0','contribution = 0','variable costs = fixed costs','the margin of safety is 100%'],0,'Total contribution exactly covers the fixed costs.'),
QV('q103','s2','practice','Fixed costs rise by 10%. The contribution margin per unit…',['does not change','rises by 10%','falls by 10%','becomes zero'],0,'CM = price − variable cost: fixed costs do not enter it (they only move the BEP).'),
QV('q104','s2','practice','Why is the operating leverage highest close to the break-even point?',['Profit (the denominator) is close to zero','Contribution is highest there','Fixed costs are lowest there','Sales are highest there'],0,'OL = contribution/profit: a small profit makes the ratio large (doors at −10%: OL 21.04).'),
QV('q105','s3','practice','In the course, service department overheads are…',['re-assigned to operational departments before computing rates','charged directly to products','ignored','added to the blanket rate only'],0,'Step 2: service departments are emptied into operational departments.'),
QV('q106','s3','practice','Which inventory valuation method is used in this course?',['Weighted average cost (WAC)','FIFO','LIFO','Standard cost'],0,'FIFO is seen in financial accounting; LIFO is prohibited by IFRS.'),
QV('q107','s4','practice','In D&amp;W’s February, which value is used for the wood consumed?',['4.58 €/kg (WAC including purchasing overheads)','4.22 €/kg (direct purchase price)','5.12 €/kg (purchase cost of February only)','0.90 €/kg'],0,'WAC of 3 000 kg at 4.22 and 2 000 kg at 5.12.'),
QV('q108','s4','practice','Distribution overheads are charged using…',['the quantity sold (or 100 € of sales)','the quantity bought','the machine hours','the closing inventory'],0,'Each overhead follows its own flow: distribution → sold.'),
QV('q109','s5','practice','Short term, spare capacity: the minimum price of a special order is…',['the relevant variable cost per unit plus costs specific to the order','the full cost per unit','the normal selling price','the fixed cost per unit'],0,'Fixed costs are incurred whatever the decision.'),
QV('q110','s5','practice','Which method lists only the revenues and costs that differ between options?',['Differential method','Incremental method','Full costing','Blanket rate'],0,'The incremental method lists all revenues and costs of each scenario; both give the same answer.'),
QV('q111','s5','practice','D&amp;W: 100 doors bought at 85 € instead of made (variable cost 79 €, fixed costs continue). Effect on profit in the short term?',['−600 €','+600 €','−8 500 €','0'],0,'100 × (85 − 79) = 600 more cost if we buy.')
);
CARDS.push(
CV('c44','s1','Identify a cost from two levels','same total → fixed\nsame cost per unit → variable\nneither → mixed: a = ΔC/ΔQ, b = C1 − a·Q1\n“for every N units” → step (round up)'),
CV('c45','s2','CVP graph','sales line from 0, total cost line from FC;\nthey cross at the BEP; loss on the left, profit on the right'),
CV('c46','s2','Margin of safety (%)','(expected sales − BEP) / expected sales\n(all in units or all in €)'),
CV('c47','s3','Driver units (trap)','“100 € of sales”: 680 000 € = 6 800 drivers\n“100 m of fabric”: 12 000 m = 120 drivers'),
CV('c48','s4','Order of the full costing table','overheads table → purchasing cost → materials WAC → production cost → finished goods WAC → full cost → profit'),
CV('c49','s4','Subsidy effect','volume-based drivers: high-volume products bear overheads caused by complex low-volume products'),
CV('c50','s5','Opportunity cost (special order)','no spare capacity: contribution lost on normal sales\nadd it to the relevant costs of the order'),
CV('c51','s5','Make or buy, short vs long term','short: variable cost of making vs purchase price\nlong: all costs + use of freed capacity')
);

const MOCKS=[
 {id:'m1',title:'Mock exam 1 · The course mock (CotonRive)',exam:'final',scope:'Sessions 2, 4, 5',duration:90,total:20,calculator:MOCK_CALC,intro:MOCK_INTRO,
  summary:'The mock exam posted on the course platform (Session 6), with its official solution: full costing (10), relevant costs (5), break-even point (5).',sections:M1},
 {id:'m2',title:'Mock exam 2 · Practice',exam:'final',scope:'Sessions 1–6',duration:90,total:20,calculator:MOCK_CALC,intro:MOCK_INTRO,
  summary:'Same structure with new figures: 4 course questions, full costing with two inventories, CVP, a special order with an opportunity cost.',sections:M2},
 {id:'m3',title:'Mock exam 3 · Practice, harder',exam:'final',scope:'Sessions 1–6',duration:90,total:20,calculator:MOCK_CALC,intro:MOCK_INTRO,
  summary:'Five departments with a customer-services driver, a three-product mix with outsourcing, and cost behaviour leading to CVP.',sections:M3}];

registerSubject({
  slug:'cost-accounting',
  name:'Cost Accounting',
  short:'Cost',
  tagline:'Bachelor 2 · Final exam: Sessions 1–6',
  status:'Sessions 1–6 done · 3 mock exams (one is the course mock)',
  exams:[{id:'final',label:'Final exam',scope:'Sessions 1–6'}],
  topics:[
    {id:'s1',label:'Session 1',title:'Cost terms and concepts',short:'S1 Costs',exam:'final',summary:'Management vs financial accounting, cost objects, direct/overheads, cost behaviour, environmental costs',sheet:SHEETS.s1},
    {id:'s2',label:'Session 2',title:'Cost-volume-profit analysis',short:'S2 CVP',exam:'final',summary:'Contribution margin, break-even point, margin of safety, sensitivity, operating leverage',sheet:SHEETS.s2},
    {id:'s3',label:'Session 3',title:'Full costing (1/2)',short:'S3 Full cost 1',exam:'final',summary:'Blanket and department rates, value chain, four steps, inventories and WAC',sheet:SHEETS.s3},
    {id:'s4',label:'Session 4',title:'Full costing (2/2)',short:'S4 Full cost 2',exam:'final',summary:'Purchasing cost → production cost → full cost → profit; blanket vs departments; limits',sheet:SHEETS.s4},
    {id:'s5',label:'Session 5',title:'Relevant costs for decisions',short:'S5 Decisions',exam:'final',summary:'Product mix under constraints, special orders, make or buy, dropping a segment',sheet:SHEETS.s5}],
  cheatsheet:SHEETS.cheat,
  glossary:GLOSS,
  overview:{
    eyebrow:'Cost Accounting',
    title:'Everything in Sessions 1–6, on one site',
    lede:'Built only from the course material: slides with solutions, session and recommended exercises with their solutions, the review session and the mock exam. Read a session sheet, then test yourself: quiz, exercises with new numbers, flashcards and mock exams. Your progress is saved in this browser.',
    blurbs:{cheat:'All formulas, the full costing flow and an exam checklist',exercises:'Calculations with new numbers, and every course case',cards:'Definitions, formulas and the D&W results',mocks:'Final exam format: 1 h 30, mainly exercises, out of 20'},
    html:`<h3>The final exam</h3>
  <ul><li><b>Date:</b> 15 December, afternoon. <b>Duration:</b> 1 h 30. <b>Format:</b> on paper, closed book, calculator allowed (course announcement).</li>
  <li><b>Content:</b> “the whole syllabus (course, exercises, video etc…) from sessions 1 to 6”. <b>Type of questions:</b> “mainly exercises, with a few interpretation and course questions”.</li>
  <li>Weight: 70% of the final grade; the midterm (Sessions 1–2, 20 MCQs, −0.5 per wrong answer) and participation make the other 30%.</li>
  <li>The mandatory videos are part of the syllabus: their links are listed in <code>sources/cost-accounting/_COURSE-INFO.md</code>. Their topics are those of the slides.</li></ul>
  <h3>The three mock exams</h3>
  <ul><li><b>Mock 1 is the course’s own mock exam</b> (CotonRive, farmer, microwave ovens) with the official solution and marks: full costing 10, relevant costs 5, break-even point 5.</li>
  <li><b>Mocks 2 and 3</b> keep this structure (1 h 30, 20 marks, mainly exercises) and add four short course and interpretation questions (2 marks), since the announcement mentions them. Their figures are new. No penalty for a wrong answer on this site; the final’s marking rule is not stated.</li></ul>
  <h3>How to use it before the exam</h3>
  <ol><li>Read the session sheet and open the worked examples (D&amp;W runs through every session). Try them before reading the solution.</li>
  <li>Do the quiz for that session and read every explanation.</li>
  <li>Exercises: the calculations give new numbers each time (BEP, WAC, rates, product mix, special orders); the cases are the course exercises with their official answers.</li>
  <li>Full costing is the biggest exercise of the course mock (10 marks out of 20): do D&amp;W, T&amp;Co, Pizzeria and Armor Lux in the Exercises tab until the table order is automatic.</li>
  <li>In the last days, take the mock exams with the timer, then read the corrected paper and reopen the sheets of what you missed.</li></ol>
  <h3>Sources and limits</h3>
  <ul><li>Sessions 1–5 slides (versions with solutions), session exercises and recommended exercises with solutions, the review session (Session 6), the extra full costing exercise (T&amp;Co) and the mock exam with its solution. Questions and cases marked <span class="pill src">Course exercise</span> come from them with the official answer.</li>
  <li>Questions marked <span class="pill">Practice</span> are new, built on the same rules.</li>
  <li>Some Drury multiple-choice questions in the Session 1 recommended exercises have no answer in the solution file; the answer given here is the course definition.</li>
  <li>Errors found in the material are flagged <b>Check against the slide</b> or <b>Check against the solution</b>, never corrected silently: the 41% CM ratio rounding (Session 2), HoneyBees total (356.51 → 359.10), Armor Lux (wool consumed 247 645 → 241 645; shirts’ customer services 17 982 → 18 450), the brands exercise (A and B → B and D), Rainwear (“200 units” → 2 000), the Session 1 cost equation range.</li>
  <li>Activity-based costing and the apportionment steps (1 and 2) are named in the slides but “not developed in this course”: they are not tested here.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  modules:[
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'One generator per calculation method of Sessions 1–5. Three of them are tables to fill in, like the mock exam: the overhead analysis table, the inventory card at the WAC and the whole full costing chain. Numbers are made up (outside the slides); methods and rounding are the course’s.'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'CVP chart and cost behaviour with sliders, decision tree for Session 5',intro:'Move the sliders of the CVP chart and of the cost behaviour graph; use the decision tree to pick the right method for a special order, a make-or-buy, a dropped segment or a product mix.'}}],
  mocksNote:NOTE('<b>Where the format comes from.</b> The course announcement gives 1 h 30, closed book, calculator allowed, Sessions 1–6, “mainly exercises, with a few interpretation and course questions”. Mock 1 is the course mock exam with its official solution. Mocks 2 and 3 follow its structure; the four short questions and their 2 marks are <b>chosen for this site</b>: details in the <a href="#cost-accounting">Overview</a>.')
});
})();
