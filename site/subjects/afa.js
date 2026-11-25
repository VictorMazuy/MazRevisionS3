/* Advanced Financial Accounting (AFA). The final exam covers Topics 1–8.
   Midterm (Topics 1–4): migrated without loss from "AFA Revision Ledger.html": topic sheets, cheat sheet, quiz,
   journal drills, T-account generator, flashcards. The Exercises tab holds practice items built on the same sheets.
   End-term (Topics 5–8, exam:'endterm'): built from the course slides and extra exercises (sources/afa/);
   end-term ids start at q64, d40, c42 and x-t5-… (see site/CONVENTIONS.md).
   Never renumber ids: progress is saved under them. q0–q63, c0–c41 and d1–d39 keep the ids of the old site,
   so progress saved by the old file in this browser is imported on first visit. */
(function(){
const {T,F,EX,TRAP,NOTE,J,fmt}=Rev.h;

/* ---------- topic sheets (content from the course slides and extra exercises) ---------- */
const SHEETS={};
SHEETS.t1=`
<div class="eyebrow">Topic 1</div><h2>Introduction to the accounting cycle</h2>
<p class="lede">Goal: understand the accounting cycle, journalize transactions (double entry) and see how they flow into the financial statements.</p>

<h3>1. The three activities of a business</h3>
${T(['Activity','What it covers'],[
['<b>Operating</b>','Core activities that generate revenue: cash from sales, payments to suppliers and employees.'],
['<b>Investing</b>','Acquisition or disposal of long-term assets (PPE) and investments in other businesses.'],
['<b>Financing</b>','Transactions with suppliers of capital: issuing/repurchasing shares, obtaining/repaying loans.']])}

<h3>2. The accounting equation</h3>
${F('Assets = Liabilities + Equity\n(resources the firm has/controls) = (financed by others) + (financed by owners)')}
<p>Every activity that changes the firm's financial position <b>must</b> be recorded, and the equation must stay in balance.</p>
<div class="grid2">
<div class="panel"><h4>Assets</h4><ul><li>Owned or <b>controlled</b> (e.g. a leased airplane)</li><li>Result of a <b>past event</b></li><li>Provide <b>future benefits</b></li><li>Within 12 months → <b>current</b> (cash, A/R, inventory); after → <b>non-current</b> (factory, machinery, software)</li></ul></div>
<div class="panel"><h4>Liabilities</h4><ul><li>Obligations to third parties (creditors), settled in the future</li><li>Within 12 months → <b>current</b> (A/P, salaries payable)</li><li>After → <b>non-current</b> (long-term debt, provisions)</li></ul></div>
<div class="panel"><h4>Equity</h4><ul><li>Ownership claim of shareholders on total assets</li><li><b>Share capital</b> = exogenous wealth</li><li><b>Retained earnings + net income of the year</b> = endogenous wealth (performance)</li></ul></div>
</div>

<h3>3. The financial statements and how they link</h3>
<ul>
<li><b>Income statement</b>: profitability over a <b>period</b>. Net profit = Revenues − Expenses.</li>
<li><b>Balance sheet</b> (statement of financial position): <b>snapshot</b> at a date. Total assets = total liabilities + equity.</li>
<li><b>Cash flow statement</b> and <b>statement of changes in equity</b> explain how you get from the opening to the closing balance sheet.</li>
</ul>
<p>Net income of the year sits in equity on the closing balance sheet; that is the link between the income statement and the balance sheet.</p>

${EX('Schubert case: tabular analysis (budget 2024)','worked case',`
<p>Opening balance sheet 31/12/2023 (k€): PPE 900, acc. depr. (300), RM 80, FG 120, A/R 140, cash 250 = 1 190. Share capital 500, retained earnings 200, NI 2023 168, financial debt 100, income tax payable 112, A/P 110.</p>
<p>Key calculations from the solution:</p>
${F('COGS = labour + opening RM + opening FG + purchases RM − ending RM − ending FG\n     = 0 + (80 + 120) + 520 − (130 + 140) = 450\n\nΔ RM = 80 + 520 − 130 = 470 used;  Δ FG = 120 − 140 = −20 (RM moved to FG, not sold)\n\nIncome tax = (1 300 − 220 − 100 − 400 − 10 − 20 − 450) × 40% = 100 × 40% = 40\nDividend paid = 50% × 168 = 84')}
<p>Cash would end at <b>−106</b>, which is impossible, so a <b>bank overdraft of 106</b> (≈ short-term bank loan) is recorded. Closing: assets 1 260 = liabilities 316 + equity 944.</p>
<p>Why tabular analysis matters: it is slow, but it shows exactly how each event moves the equation. Journal entries do the same job faster.</p>`)}

<h3>4. The accounting cycle (8 steps)</h3>
<ol>
<li>Identify transactions (and record them in the <b>journal</b>, the book of original entry)</li>
<li>Post ledger entries</li>
<li>Unadjusted trial balance</li>
<li>Adjusting entries</li>
<li>Adjusted trial balance</li>
<li>Financial statements</li>
<li>Closing entries</li>
<li>Post-closing trial balance</li>
</ol>
<p>Order to remember (course MCQ): <b>journal → ledger → trial balance → financial statements</b>.</p>
<ul>
<li><b>Transaction</b>: any economic event that affects the financial position (assets, liabilities or equity).</li>
<li><b>Account</b>: record of a specific asset, liability, equity, revenue or expense item. It is the basic summary device. Drawn as a <b>T-account</b>: left = debit, right = credit.</li>
<li><b>Account balance</b>: difference between total debits and total credits.</li>
<li><b>Chart of accounts</b>: numbered list of all accounts a company uses.</li>
<li><b>Trial balance</b>: list of all accounts with their balances.</li>
<li><b>Journal</b>: chronological record. A journal entry is the first time a transaction enters the accounting information system.</li>
</ul>

<h3>5. Debits and credits</h3>
<p>Debit and credit are neither good nor bad, and they are not "add" and "subtract". They express the <b>duality</b> of every transaction: for money to go to one account, it must come from another.</p>
${F('Double entry: every transaction debits ≥1 account and credits ≥1 account\nSum of debits = Sum of credits')}
${T(['Account type','Increase','Decrease','Normal balance'],[
['Asset (A)','<span style="color:var(--debit)">Debit</span>','Credit','Debit'],
['Contra-asset (XA), e.g. accumulated depreciation','Credit','Debit','Credit'],
['Liability (L)','<span style="color:var(--credit)">Credit</span>','Debit','Credit'],
['Equity (SE)','<span style="color:var(--credit)">Credit</span>','Debit','Credit'],
['Revenue (R) → increases equity','Credit','Debit','Credit'],
['Expense (E) → decreases equity','Debit','Credit','Debit'],
['Dividends → decrease equity','Debit','Credit','Debit']])}
${F('DEALER: Dividends, Expenses, Assets increase on the DEBIT side\n        Liabilities, Equity, Revenues increase on the CREDIT side')}
${TRAP('A debit <b>increases assets</b> (and expenses), it does <b>not</b> increase equity or liabilities. Revenue, liability and equity accounts have normal <b>credit</b> balances.')}

<h3>6. The journal entry format used in this course</h3>
${J([['Sept. 1','Cash','A+',15000,''],['','Sales revenue','R+','',15000]])}
<p>Always show: <b>date</b>, <b>account title</b>, <b>type and effect</b> (A+, L−, SE+, R+, E+, XA−), <b>debit</b> amount, <b>credit</b> amount. Debits first, credits indented below.</p>

${EX('J&amp;J Food: the 7 course transactions','worked examples',`
<p><b>1. Jan 2</b>: founders invest €20 000.</p>${J([['Jan 2','Cash','A+',20000,''],['','Share capital','SE+','',20000]])}
<p><b>2. Jan 31</b>: 5-year bank loan of €32 000.</p>${J([['Jan 31','Cash','A+',32000,''],['','Loan payable','L+','',32000]])}
<p><b>3. Feb 1</b>: buys a truck for €20 000 cash.</p>${J([['Feb 1','PPE','A+',20000,''],['','Cash','A−','',20000]])}
<p><b>4. Feb 3</b>: inventory €2 000, 60% cash, rest on credit.</p>${J([['Feb 3','Inventory','A+',2000,''],['','Cash','A−','',1200],['','A/P','L+','',800]])}
<p><b>5. Feb 5</b>: sells food for €1 000 (cost €600), 80% cash. <b>Two entries</b>: revenue, then COGS.</p>${J([['Feb 5','Cash','A+',800,''],['','Accounts receivable','A+',200,''],['','Revenue','R+','',1000],['Feb 5','COGS','E+',600,''],['','Inventory','A−','',600]])}
<p><b>6. Feb 29</b>: pays salaries €2 000 and utilities €1 000.</p>${J([['Feb 29','Salary expense','E+',2000,''],['','Utility expense','E+',1000,''],['','Cash','A−','',3000]])}
<p><b>7. Apr 5</b>: inventory €10 000 payable in 25 days + shipping €300 paid cash by J&amp;J. Shipping is part of inventory cost.</p>${J([['Apr 5','Inventory','A+',10300,''],['','Cash','A−','',300],['','A/P','L+','',10000]])}`)}

${EX('RedLotus Travel (extra exercise 1): what to remember','exercise',`
<ul>
<li>Shares issued for cash → Dr Cash / Cr Share capital.</li>
<li>Supplies bought on account → Dr Supplies / Cr Accounts payable.</li>
<li>Services on account → Dr A/R / Cr Service revenue; later collection → Dr Cash / Cr A/R (no revenue again).</li>
<li><b>Transaction 8</b>: the major shareholder remodels his <b>personal</b> house → <b>not a transaction of the business, not recorded</b>.</li>
<li>Half the land (cost $40 000 → $20 000) sold for $22 000 → Dr Cash 22 000 / Cr Land 20 000 / Cr Gain on sale of land 2 000.</li>
<li>Cash dividends paid → Dr Dividends / Cr Cash.</li>
</ul>`)}
${EX('Cash T-account logic (course MCQ 7)','calculation',`${F('Ending cash = Beginning cash + Receipts − Payments\n12 000 = 8 000 + Receipts − 24 000  →  Receipts = 28 000')}<p>Same logic for any account: A/P opening 1 700 Cr, debits 200, credits 700 → ending <b>2 200 credit</b>.</p>`)}
`;

SHEETS.t2=`
<div class="eyebrow">Topic 2</div><h2>Adding complexity to operating transactions</h2>
<p class="lede">Accrual accounting, revenue and expense recognition, VAT, and inventory (perpetual system, FIFO).</p>

<h3>1. Accrual basis vs cash basis</h3>
<div class="grid2">
<div class="panel"><h4>Accrual basis (required)</h4><p>Records the impact of transactions in the period in which they <b>occur</b>, even if cash moves in a past or future period. More faithful picture of performance.</p><p>Records non-cash events too: sales and purchases on account, expenses incurred not yet paid, depreciation, use of prepaid items, revenue earned on cash received in advance.</p></div>
<div class="panel"><h4>Cash basis (not allowed under IFRS)</h4><p>Only cash receipts (= revenues) and cash payments (= expenses). Profit if receipts &gt; payments.</p></div>
</div>
<p><b>Cash ≠ profit.</b> Profit can be spent on new assets, unpaid expenses or prepaid expenses; cash can come in from customers paying in advance.</p>
<div class="grid2">
<div class="panel"><h4>Revenue recognition principle</h4><p>Revenue is recognised when the <b>performance obligation is satisfied</b>: when goods or services are delivered to customers, regardless of cash.</p></div>
<div class="panel"><h4>Expense recognition (matching principle)</h4><p>"Let the expenses follow the revenues": recognise an expense when resources are <b>consumed</b> or services <b>received</b>, in the period it occurs.</p></div>
</div>

<h3>2. The timing grid: cash, on account, in advance</h3>
${T(['','Cash now','Paid later (late payment)','Paid early (early payment)'],[
['<b>Revenue</b>','Dr Cash / Cr Revenue','Dr <b>Accounts receivable</b> (A) / Cr Revenue','Dr Cash / Cr <b>Unearned revenue</b> (L)<br><small>Revenue only when delivered</small>'],
['<b>Expense</b>','Dr Expense / Cr Cash','Dr Expense / Cr <b>Accounts payable</b> (L)','Dr <b>Prepaid expenses</b> (A) / Cr Cash<br><small>Expense only when consumed</small>']])}
<p>Why is unearned revenue a <b>liability</b>? The firm owes the customer goods or services. Why is a prepaid expense an <b>asset</b>? The firm will receive a future service it has already paid for.</p>
${TRAP('Paying an A/P or collecting an A/R has <b>no income statement impact</b>: the revenue or expense was already recorded when earned or incurred. Same for receiving an advance or paying in advance: balance sheet only.')}

${EX('Course examples with financial statement impact','worked examples',`
<p><b>Sale 900 units × €10, 60% cash, rest next month</b> (NI +9 000; assets +9 000):</p>${J([['Apr 5','Accounts receivable','A+',3600,''],['','Cash','A+',5400,''],['','Revenues','R+','',9000]])}
<p><b>Customer pays €10 000 in advance</b> (no revenue, no NI effect):</p>${J([['Apr 5','Cash','A+',10000,''],['','Unearned revenues','L+','',10000]])}
<p><b>Ad campaign launched May 5, €4 500 paid April 5</b> (no expense in April; total assets unchanged):</p>${J([['Apr 5','Prepaid expenses','A+',4500,''],['','Cash','A−','',4500]])}
<p><b>Mixed day</b>: electricity €300 cash; maintenance €5 000 half paid; supplies €2 000 paid, delivered next week. NI −5 300; assets −2 800; L +2 500.</p>${J([['Apr 5','Electricity expense','E+',300,''],['','Maintenance expense','E+',5000,''],['','Prepaid expenses','A+',2000,''],['','Cash','A−','',4800],['','Accounts payable','L+','',2500]])}
<p><b>Wages €3 000 earned in June, paid July 5</b>:</p>${J([['June','Wages expense','E+',3000,''],['','Salaries payable','L+','',3000],['July 5','Salaries payable','L−',3000,''],['','Cash','A−','',3000]])}`)}

<h3>3. Balance sheet classification (course list)</h3>
<div class="grid2">
<div class="panel"><h4>Current assets</h4><ul><li><b>Cash and cash equivalents</b>: cash, bank, instruments convertible to cash in &lt;90 days</li><li><b>Receivables</b>: A/R, notes receivable</li><li><b>Prepaid expenses</b></li><li><b>Inventory</b>: held to sell (RM, WIP, FG)</li><li><b>Supplies</b>: held to use in the short run</li></ul></div>
<div class="panel"><h4>Non-current assets</h4><ul><li><b>PPE</b>: physical, long-term use (land, buildings, vehicles)</li><li><b>Intangibles</b>: patents, licences, brands</li><li><b>Long-term investments</b>: investment property, shares, bonds</li></ul></div>
<div class="panel"><h4>Current liabilities (&lt;1 year)</h4><ul><li>Accounts payable (suppliers)</li><li>Salaries payable (employees)</li><li>Taxes payable (government)</li><li>Unearned revenues</li><li>Short-term loans</li></ul></div>
<div class="panel"><h4>Non-current liabilities (&gt;1 year)</h4><ul><li>Notes payable (promissory note, interest-bearing)</li><li>Long-term loans or borrowings</li></ul></div>
</div>

<h3>4. VAT (sales tax)</h3>
<p>A consumption tax. The seller collects it for the tax authority, so it is a <b>liability</b>, not revenue.</p>
${J([['','Cash (200 000 × 1.20)','A+',240000,''],['','Sales revenues','R+','',200000],['','VAT payable','L+','',40000],['Remittance','VAT payable','L−',40000,''],['','Cash','A−','',40000]])}
${TRAP('VAT has <b>no impact on revenue or equity</b>. VAT is also <b>excluded</b> from the cost of PPE (Topic 3).')}

<h3>5. Inventory</h3>
<ul>
<li><b>Inventory</b>: goods and materials held for resale or production. Types: raw materials, work in progress, finished goods.</li>
<li>Service companies have no inventory; merchandising companies buy and resell.</li>
<li>In this course COGS = cost of material only (labour and overhead assumed 0).</li>
<li>Sales revenue at <b>selling price</b>; COGS and inventory at <b>cost</b>. <b>Gross profit</b> = Sales revenue − COGS.</li>
</ul>
${EX('Shirts example','example',`<p>3 shirts cost €30 each; 2 sold at €50. Income statement: sales 100, COGS 60, gross profit 40. Balance sheet: inventory 30 (1 shirt at cost).</p>`)}
<div class="grid2">
<div class="panel"><h4>Perpetual system (used in the course)</h4><p>Continuous record of each item: inventory on hand known at all times. COGS recorded at every sale.</p></div>
<div class="panel"><h4>Periodic system (concept only)</h4><p>No continuous record. Physical count at period end; apply unit costs to find ending inventory.</p></div>
</div>
<h4>Which units belong to the company?</h4>
<ul>
<li><b>Consignment</b>: the owner (<b>consignor</b>) keeps the goods in its inventory until sold. Goods held for others (as <b>consignee</b>) are <b>not</b> included.</li>
<li><b>Goods in transit</b>: included if they legally belong to the company at year-end, based on <b>FOB</b> shipping terms (free/freight on board).</li>
</ul>
${NOTE('<b>Outside the slides:</b> the usual reading is FOB shipping point = buyer owns the goods once shipped; FOB destination = seller owns them until delivered. The slides only say that FOB terms decide ownership. Check with your professor before relying on the detail.')}

<h4>Net purchases</h4>
${F('Net purchases = Purchase price + Freight-in − Purchase returns − Purchase allowances − Purchase discounts')}
${EX('Ten East (June 2024)','calculation',`${F('600 000 + 4 000 − 25 000 − 5 000 − 14 000 = 560 000')}`)}
<h4>Recording in a perpetual system</h4>
${EX('Natalie: purchase and sale','worked example',`<p>Invoice €2 000 after 10% bulk discount, freight €50 paid by the buyer, 30 days to pay. Freight is part of cost.</p>${J([['1 Jan','Inventory','A+',2050,''],['','Accounts payable','L+','',2050]])}<p>Sells a romper suit costing €15 for €25 cash: <b>two entries</b>.</p>${J([['5 Jan','Cash','A+',25,''],['','Sales revenue','R+','',25],['5 Jan','Cost of goods sold','E+',15,''],['','Inventory','A−','',15]])}<p>NI +10, total assets +10.</p>`)}

<h4>COGS equation</h4>
${F('Beginning inventory + Purchases − Ending inventory = COGS\nGoods available for sale = Beginning inventory + Purchases')}
${EX('Zerillo &amp; Sons','calculation',`${F('15 000 + P − 28 000 = 168 000  →  P = 181 000')}`)}

<h3>6. Cost flow assumption: FIFO</h3>
<ul>
<li><b>FIFO</b> (first in, first out): the method taught. Oldest costs go to COGS; ending inventory carries the <b>latest</b> costs.</li>
<li><b>LIFO</b>: not allowed under IFRS.</li>
<li><b>Weighted average</b>: covered in Cost Accounting.</li>
</ul>
${EX('UNIQLO (periodic illustration)','calculation',`<p>BI 10 @ €10; Jul 1: 25 @ €14; Jul 13: 25 @ €18; sold 40.</p>${F('COGS = 10×10 + 25×14 + 5×18 = 100 + 350 + 90 = 540\nEnding inventory = 20 × 18 = 360')}`)}
${EX('XYZ August (perpetual FIFO): full solution','exercise',`<p>Selling price €20. BI 100 @ €10; Aug 5 buy 50 @ €12; Aug 12 sell 80; Aug 15 buy 150 @ €14; Aug 20 sell 100; Aug 25 buy 50 @ €15; Aug 30 sell 70.</p>
${T(['Date','Event','COGS','Inventory left'],[
['Aug 12','Sell 80','80×10 = 800','20@10, 50@12'],
['Aug 20','Sell 100','20×10 + 50×12 + 30×14 = 1 220','120@14'],
['Aug 30','Sell 70','70×14 = 980','50@14, 50@15']])}
${F('Total COGS = 3 000;  Ending inventory = 50×14 + 50×15 = 1 450\nGross profit = (80+100+70) × 20 − 3 000 = 5 000 − 3 000 = 2 000')}`)}
<h4>What the course MCQs test</h4>
<ul>
<li>Rising prices: <b>FIFO gives the highest net income and the highest ending inventory</b> (old, cheap costs go to COGS).</li>
<li>Overstating ending inventory → understates COGS → <b>overstates</b> net income.</li>
<li>The inventory valuation rule can bring inventory <b>below cost</b>.</li>
<li><b>Sales discounts</b> are a deduction from sales.</li>
<li>Gross profit % = Gross profit / Net sales.</li>
</ul>
${NOTE('<b>Outside the Topic 2 slides:</b> the "inventory valuation rule" in MCQ 6 is the lower of cost and net realisable value. Topic 2 does not develop it; <b>Topic 5 (end-term) does</b>: inventory is written down to its net realizable value, item by item (Topic 5 sheet, section 7).')}
${EX('Highway Company (course MCQs 9–10)','calculation',`${F('Net purchases = 93 000 − 7 000 + 3 000 = 89 000\nCOGS = 28 000 + 89 000 − 35 000 = 82 000\nGross profit = 184 000 − 82 000 = 102 000  →  102/184 ≈ 55%')}`)}
${EX('MusicNotes (extra exercise 2): FIFO + income statement','exercise',`<p>Apr 1: 17 @ $38; Apr 2: buy 5 @ $68; Apr 7: sell 9 @ $106; Apr 13: sell 5 @ $92. Operating expenses $430; tax 30%.</p>
${F('COGS = 9×38 + 5×38 = 532;  Ending inventory = 3×38 + 5×68 = 454\nSales = 9×106 + 5×92 = 1 414\nGross profit = 882;  − Opex 430 = 452 before tax\nTax 30% = 136;  Net income = 316')}`)}
`;

SHEETS.t3=`
<div class="eyebrow">Topic 3</div><h2>Investing transactions: PPE and intangibles</h2>
<p class="lede">Types of long-term assets, initial cost of PPE, subsequent costs, depreciation, disposal, intangibles and goodwill.</p>

<h3>1. Investment decisions and long-term assets</h3>
<p>Acquiring = investment; disposing = disinvestment. These decisions are strategic, taken by top management, less repetitive, and economically important.</p>
<p>An asset has three characteristics: an <b>economic resource</b> (identifiable, positive value); the entity has <b>rights or privileged access</b> to it (control); both <b>exist at the reporting date</b>.</p>
<p>Non-current assets are durable (&gt;1 year) and usually depreciated or amortised.</p>
<div class="grid2">
<div class="panel"><h4>Tangible (PPE, fixed assets)</h4><p>Physical: land, buildings, equipment, furniture.</p></div>
<div class="panel"><h4>Intangible</h4><p>No physical substance, contractual rights: patents, trademarks, copyrights, franchises, goodwill.</p></div>
</div>

<h3>2. Cost of PPE at initial recognition</h3>
<p>Cost = <b>all costs incurred to bring the asset to its intended use</b>.</p>
<div class="grid2">
<div class="panel"><h4>Include (capitalise)</h4><ul><li>Purchase price</li><li>Site preparation</li><li>Installation and assembly</li><li>Transport</li><li>Commissions</li><li>Other costs to make it ready for use (stamp duty, survey fee)</li></ul></div>
<div class="panel"><h4>Exclude (expense)</h4><ul><li>Introducing a new product (advertising, promotion)</li><li>Administration and general overheads (annual maintenance)</li><li><b>VAT</b></li><li>Personnel <b>training</b> (XYZ example)</li><li>Supplies used in operations (oil for the first year, Vermeer)</li></ul></div>
</div>
${J([['','PPE','A+','xx',''],['','Cash or Accounts payable','A− / L+','','xx'],['In kind','PPE','A+','xx',''],['','Share capital (shareholder contribution in kind)','SE+','','xx']])}
${EX('Airbus logistic site','worked example',`<p>Note payable €300 000; cash: commission €10 000, stamp duty €13 000, survey €1 000, parking paving €16 000.</p>${F('Building = 300 000 + 10 000 + 13 000 + 1 000 = 324 000')}<p>The parking lot (€16 000) is PPE but a <b>separate component/asset</b>, not part of the building.</p>${J([['Feb 2023','PPE (building)','A+',324000,''],['','Cash','A−','',24000],['','Notes payable','L+','',300000]])}`)}
${EX('XYZ machine','worked example',`${F('500 000 + 24 000 transport + 2 000 installation = 526 000  (training 12 000 excluded)')}${J([['Mar 2022','PPE (machinery)','A+',526000,''],['','A/P','L+','',526000]])}`)}
${EX('Hotcake House (extra exercise 2)','exercise',`${F('Building = 57 000 + 108 000 + 60 000 remodel = 225 000\nDepreciation = (225 000 − 55 000) / 20 = 8 500 per year\nFurniture: 54 000 / 5 = 10 800 per year\nSupplies (current asset): 10 200 bought − 1 900 left = 8 300 supplies expense')}`)}

<h3>3. Depreciation (straight-line)</h3>
${F('Annual depreciation = (Cost − Residual value) / Useful life\nBook value = Cost − Accumulated depreciation\nPart year: × months used / 12')}
${J([['31 Dec','Depreciation expense','E+','xx',''],['','Accumulated depreciation','XA+','','xx']])}
<ul><li>Depreciation <b>allocates cost</b> over the useful life (matching principle). It does <b>not</b> create a fund to replace the asset.</li><li>Accumulated depreciation is a <b>contra-asset</b> (XA) with a credit balance.</li><li>Land is not depreciated; goodwill is not amortised.</li></ul>
${EX('Amir Communications (course MCQs 2–4)','calculation',`${F('Cost 65 000, residual 5 000, 10 years → 6 000 per year\nBought 1 July 20X6 → 20X6 expense = 6 000 × 6/12 = 3 000\nBought 1 Jan 20X6 → BV end 20X7 = 65 000 − 12 000 = 53 000\nBought 1 July 20X5, sold 1 July 20X9 for 44 500: AD = 4 × 6 000 = 24 000\n  BV = 41 000 → gain = 3 500')}`)}
${EX('West Side Pizza van (extra exercise 1)','exercise',`${F('(19 200 − 3 200) / 4 = 4 000 per year')}${T(['Year','Depreciation','Acc. depreciation','Book value'],[['1','4 000','4 000','15 200'],['2','4 000','8 000','11 200'],['3','4 000','12 000','7 200'],['4','4 000','16 000','3 200']],[1,2,3])}`)}

<h3>4. Subsequent costs: capitalise or expense?</h3>
<div class="grid2">
<div class="panel"><h4>Capital expenditure → asset</h4><p>Increases capacity or extends useful life: major engine overhaul, added storage capacity, body modification for a new use, building wing, new motor.</p></div>
<div class="panel"><h4>Repairs and maintenance → expense</h4><p>Ordinary: transmission repair, oil change, lubrication, tyres, windshield, paint job, <b>tune-up</b>.</p></div>
</div>
<p>A life-extending improvement increases book value and the depreciation is <b>revised for the remaining years</b>:</p>
${F('Revised depreciation = (Book value + capex − Residual) / Remaining life')}
${EX('XYZ truck: revised schedule','worked example',`<p>Truck €41 000 (1 Jan 2021), 4 years, residual €1 000 → 10 000/year. End of 2022: new engine €7 000 on account, total life now 5 years.</p>
${T(['Year','Depreciation','Book value'],[['2021','10 000','31 000'],['2022','10 000','21 000 + 7 000 = 28 000'],['2023','(28 000 − 1 000)/3 = 9 000','19 000'],['2024','9 000','10 000'],['2025','9 000','1 000']],[1])}
${J([['31 Dec 2022','PPE (truck)','A+',7000,''],['','A/P','L+','',7000]])}`)}

<h3>5. Disposal of PPE</h3>
<p><b>First</b> bring depreciation up to date (to update book value and record the expense to the disposal date). Then remove the asset <b>and</b> its accumulated depreciation, record what was received, and book the gain or loss.</p>
${F('Gain (loss) = Proceeds − Book value     (Book value = Cost − Accumulated depreciation)')}
${T(['Case','Situation','Entry'],[
['I','End of life, fully depreciated, no proceeds','Dr Acc. depreciation / Cr PPE'],
['II (A)','Before end of life, proceeds = 0','Dr Acc. depreciation, Dr Loss on disposal / Cr PPE'],
['II (B)','Proceeds &lt; book value','Dr Cash (or A/R), Dr Acc. depreciation, Dr Loss / Cr PPE'],
['II (C)','Proceeds &gt; book value','Dr Cash (or A/R), Dr Acc. depreciation / Cr PPE, Cr Gain on disposal']])}
${EX('FedEx and Apple examples','worked examples',`<p><b>FedEx</b>: cost 200 000, AD 150 000 (BV 50 000), sold for 40 000 → loss 10 000.</p>${J([['','Accumulated depreciation','XA−',150000,''],['','Cash','A+',40000,''],['','Loss on disposal of PPE','E+',10000,''],['','PPE (equipment)','A−','',200000]])}
<p><b>Apple</b>: cost 10 000, AD 3 750 at 30/09/2023 (BV 6 250), sold for 7 300 → gain 1 050.</p>${J([['30 Sep','Accumulated depreciation','XA−',3750,''],['','Cash','A+',7300,''],['','PPE (equipment)','A−','',10000],['','Gain on disposal of PPE','R+','',1050]])}`)}
${EX('Vermeer NV: three scenarios','exercise',`<p>Machine €35 000 + installation €3 300 + shipping €1 700 = <b>€40 000</b> (oil €500 is an operating expense). Depreciation €8 000/year; AD end 2022 = €18 000; + 9 months 2023 = €6 000 → <b>AD €24 000</b>, BV €16 000 on 1 Oct 2023.</p>
${T(['Scenario','Result','Entry'],[['Scrapped','Loss 16 000','Dr AD 24 000, Dr Loss 16 000 / Cr PPE 40 000'],['Sold €24 000','Gain 8 000','Dr AD 24 000, Dr Cash 24 000 / Cr PPE 40 000, Cr Gain 8 000'],['Sold €10 000','Loss 6 000','Dr AD 24 000, Dr Cash 10 000, Dr Loss 6 000 / Cr PPE 40 000']])}`)}
${TRAP('Never credit PPE for the book value only: remove the <b>full cost</b> from PPE and the <b>full accumulated depreciation</b>. Gains are revenue-type (R+), losses expense-type (E+).')}

<h3>6. Intangible assets</h3>
${T(['','Externally acquired','Internally generated'],[['Recognised?','<b>Yes</b>, as an asset','<b>No</b>'],['Why','Value available (contract, invoice): high reliability','Needs estimation (future cash flows): low reliability']])}
${T(['Life','Treatment','Examples'],[['Finite','<b>Amortisation</b>','Patent'],['Indefinite','<b>Annual impairment test</b>, no amortisation','Goodwill; some trademarks, franchises']])}
<ul>
<li><b>Patents</b>: granted by government, exclusive right to produce and sell an invention for a period.</li>
<li><b>Copyrights</b>: exclusive right to reproduce and sell a work; extend 70 years beyond the author's life.</li>
<li><b>Trademarks and trade names</b>: life may be set by contract; may be indefinite (then not amortised).</li>
<li><b>Franchises and licences</b>: often indefinite lives.</li>
<li><b>Goodwill</b>: excess of acquisition cost over the market value of the acquired company's net assets. Only recorded when <b>acquired</b>, never when created. Impairment test, not amortisation.</li>
</ul>
${F('Amortisation = Cost / Useful life (use the economic life if shorter than the legal life)\nRevised amortisation = Book value / Remaining (revised) life')}
${EX('Master Printers patent (extra exercise 3)','exercise',`<p>Patent $920 000; legal life 20 years, competitive advantage 10 years → amortise over <b>10</b>.</p>${J([['','Patent','A+',920000,''],['','Cash','A−','',920000],['Year 1','Amortization expense','E+',92000,''],['','Accumulated amortization – patent','XA+','',92000]])}
<p>After 5 years, total life revised to 7 → BV 460 000 over the remaining 2 years = <b>230 000</b> in year 6 (prospective change, past years not restated).</p>`)}
${EX('Goodwill: FedEx acquires Europa','worked example',`${F('Price paid 10 000 000\nMarket value of assets 9 000 000 − financial loans 2 000 000 = net assets 7 000 000\nGoodwill = 10 000 000 − 7 000 000 = 3 000 000')}${J([['','Assets','A+',9000000,''],['','Goodwill','A+',3000000,''],['','Financial loan','L+','',2000000],['','Cash','A−','',10000000]])}`)}
${NOTE('<b>End-term:</b> the slides send goodwill impairment to "Topic 5". Topic 5 is part of the final exam and develops the impairment of PPE (net book value vs recoverable amount), of A/R and of inventory, but it has no goodwill example. For goodwill, know that it is tested for impairment instead of being amortised.')}

<h3>7. Financial assets (overview only)</h3>
<ul>
<li>Shares (investor / investee) and bonds (investor / debtor).</li>
<li>Financial assets, short or long term: trading, held-to-maturity, available-for-sale.</li>
<li><b>Associates</b>: significant influence, not control; usually 20–50% of voting shares (not a strict rule).</li>
<li><b>Subsidiaries</b>: typically &gt;50%; long-term investments.</li>
</ul>
`;

SHEETS.t4=`
<div class="eyebrow">Topic 4</div><h2>Financing decisions</h2>
<p class="lede">Self-financing, new capital (share issues, par value, share premium), dividends, share buybacks, and new debt (notes, bank loans).</p>

<h3>1. Debt vs equity: what managers weigh</h3>
<div class="grid2">
<div class="panel"><h4>Debt</h4><ul><li>Usually more costly than equity because of interest</li><li>New fixed payments: interest + repayment</li><li>Lender has no control, except through debt covenants</li></ul></div>
<div class="panel"><h4>Equity</h4><ul><li>New shares can dilute share value and the control of current shareholders</li><li>Depends on the state of the capital market</li></ul></div>
</div>
<p><b>Sources:</b> self-financing (cash from operations not distributed + cash from asset sales) or new resources: <b>increase in share capital</b> or <b>increase in debt</b> (private debt from a bank, public debt = bonds). Financing debt must not arise from operating activities (A/P, unearned revenue are operating).</p>
<p><b>Self-financing</b> is good for renewal investments and financial autonomy, but the firm must keep enough cash for its working capital needs. Growth investments usually need external funds. ISOLAB (cash €20k) cannot self-finance a €180k project.</p>

<h3>2. New capital (share issue)</h3>
${F('Issue price (non-listed) = Total equity / Number of shares outstanding\nIssue price (listed) = based on market price (a discount may be given)\nNumber of new shares = Amount to raise / Issue price  (round up)\nPar value = Share capital / Number of shares outstanding\n\nFrench practice:   Share capital = Par value × new shares\n                   Share premium = (Issue price − Par value) × new shares\nAnglo-Saxon:       Share capital = Issue price × new shares (no premium)')}
<p><b>Par value</b> (nominal value): value assigned when the share is first issued; stays the same; different from market value.</p>
${EX('ISOLAB (non-listed) raises €180 000','worked example',`${F('Price = (200 000 + 100 000 + 50 000) / 20 000 = 17.50\nShares = 180 000 / 17.50 = 10 285.7 → 10 286  (10 286 × 17.50 = 180 005)\nPar = 200 000 / 20 000 = 10\nShare capital = 10 × 10 286 = 102 860\nShare premium = (17.50 − 10) × 10 286 = 77 145')}
<p>French practice:</p>${J([['Jan 2024','Cash','A+',180005,''],['','Share capital','SE+','',102860],['','Share premium','SE+','',77145]])}
<p>Anglo-Saxon practice:</p>${J([['Jan 2024','Cash','A+',180005,''],['','Share capital','SE+','',180005]])}`)}
${EX('KiMi group: seasoned equity offering (SEO)','exercise',`<p>144 000 000 shares; share capital €288m; December high €47.29, low €43.10; discount 15%; need €9 000 000.</p>
${F('a. Average December price ≈ (47.29 + 43.10)/2 = 45.195\n   Issue price = 45.195 × 0.85 = 38.416 ≈ 38.4\nb. Shares = 9 000 000 / 38.4 = 234 375\nc. Par = 288 000 000 / 144 000 000 = 2;  premium per share = 38.4 − 2 = 36.4\nd. Share capital = 234 375 × 2 = 468 750;  premium = 234 375 × 36.4 = 8 531 250')}
${J([['1 April','Cash','A+',9000000,''],['','Share capital','SE+','',468750],['','Share premium','SE+','',8531250]])}
<p>A high share premium signals market confidence, strong reputation or demand, expected future profitability, or a deliberately low par value. It also raises investors' return expectations.</p>`)}
<p><b>New capital, pros:</b> keeps financial autonomy; no periodic interest. <b>Cons:</b> more dividends to pay if declared; <b>dilution</b> for shareholders who do not participate.</p>

<h3>3. Rewarding shareholders: dividends</h3>
<ul>
<li>Shareholders earn through <b>dividends</b> or a <b>capital gain</b> on selling shares.</li>
<li>Dividends can only be declared out of <b>retained earnings or prior-year net income</b>, never out of share capital, share premium or legal reserves.</li>
<li>Dividends are <b>not an expense</b>: they reduce equity directly.</li>
<li>Two dates: <b>declaration</b> (decision, liability created) and <b>payment</b> (cash out).</li>
</ul>
${EX('XYZ: €1.50 × 20 000 shares on 2023 profit','worked example',`${J([['15/03/2024','Net income of 2023 (or Retained earnings)','SE−',30000,''],['','Dividends payable','L+','',30000],['05/05/2024','Dividends payable','L−',30000,''],['','Cash','A−','',30000]])}<p>Statement of changes in equity: opening 350 + NI 40 − dividends 30 = 360 (k€).</p>`)}
${TRAP('Timing: on 31 Dec N+1, retained earnings = RE of N + NI of N − dividends on N (declared in N+1). Dividends on N+1 are not known yet; they are decided at the meeting in N+2.')}

<h3>4. Share sale and share repurchase</h3>
<ul>
<li>Shares sold <b>between shareholders</b>: no effect on the company, <b>nothing recorded</b>.</li>
<li>Shares bought back by the company: <b>treasury shares</b>, shown as a <b>negative</b> amount in equity. Not retired, but they lose dividend and voting rights; shares outstanding decrease.</li>
</ul>
${J([['1 Feb','Treasury shares (4 000 × €16)','SE−',64000,''],['','Cash','A−','',64000]])}
<p>Why buy back? Increase <b>EPS</b> (= Net income / shares outstanding), remove hostile shareholders, reduce dispersion, keep shares for bonuses or acquisitions, signal under-pricing.</p>

<h3>5. New debt</h3>
<ul>
<li>Private loan vs public loan (bond). Short-term credits for cash needs vs long-term credits for big projects.</li>
<li>Short-term credit and public debt: periodic interest, principal repaid at the end.</li>
<li>Long-term credit: interest and principal repaid periodically, either a constant <b>annuity</b> or variable amounts.</li>
<li>At inception, split the loan into <b>long-term</b> and <b>short-term</b> (current portion = principal repaid within the year).</li>
</ul>
${F('Interest for the period = Outstanding principal × annual rate × (months / 12)\nConstant annuity: principal repaid = Annuity − Interest')}
${EX('ISOLAB note payable (supplier credit converted)','worked example',`<p>€50 000 A/P converted on 1 March into a 2-month note at 10%, interest paid monthly.</p>${F('Monthly interest = 50 000 × 10% × 1/12 = 417')}
${J([['1 Mar','A/P','L−',50000,''],['','Notes payable','L+','',50000],['31 Mar','Interest expense','E+',417,''],['','Cash','A−','',417],['30 Apr','Interest expense','E+',417,''],['','Notes payable','L−',50000,''],['','Cash','A−','',50417]])}`)}
${EX('ISOLAB bank loan: constant monthly annuity','worked example',`<p>€200 000, 7%, 120 months, annuity €2 332.17, released 1 February.</p>
${F('First interest = 200 000 × 7% × 1/12 = 1 166.67\nPrincipal repaid = 2 332.17 − 1 166.67 = 1 165.50')}
${J([['1 Feb','Cash','A+',200000,''],['','Financial loan LT','L+','',186912.83],['','Financial loan ST (principal due within the year)','L+','',13087.17],['1 Mar','Interest expense','E+',1166.67,''],['','Financial loan ST','L−',1165.50,''],['','Cash','A−','',2332.17]])}
${NOTE('<b>Check against the slide:</b> the slide shows ST 13 087.82 and a principal of 1 155.50. The arithmetic gives 13 087.17 (so the entry balances at 200 000) and 2 332.17 − 1 166.67 = 1 165.50. The figures above use the arithmetic; the slide figures look like typos.')}`)}
${EX('XYZ loan: 50% principal per year (non-constant)','worked example',`<p>€100 000 on 1 Jan 2024, 6%, 2 years, each 31 Dec: 50% of principal + interest.</p>
${T(['Date','Remaining capital','Interest','Repayment','Total'],[['01/01/2024','100 000','','',''],['31/12/2024','50 000','6 000','50 000','56 000'],['31/12/2025','0','3 000','50 000','53 000']],[1,2,3,4])}
${J([['1 Jan 24','Cash','A+',100000,''],['','Financial loan LT','L+','',50000],['','Financial loan ST','L+','',50000],['31 Dec 24','Interest expense','E+',6000,''],['','Financial loan ST','L−',50000,''],['','Cash','A−','',56000],['31 Dec 24','Financial loan LT','L−',50000,''],['','Financial loan ST (reclassification)','L+','',50000],['31 Dec 25','Interest expense','E+',3000,''],['','Financial loan ST','L−',50000,''],['','Cash','A−','',53000]])}`)}
<p><b>New debt, pros:</b> no dilution, shareholder control unaffected; <b>interest is tax-deductible</b> (an expense, unlike dividends). <b>Cons:</b> higher expenses and periodic cash needs; loan conditions can be imposed; less financial autonomy.</p>
<p><b>Conclusion:</b> projects can be financed by own cash, new capital, new debt, or a mix (sometimes imposed: maximum dilution rate, maximum debt-to-equity ratio).</p>
${NOTE('<b>End-term:</b> the slides refer to a "Topic 5" for the end-of-year loan adjustment. Topic 5 is part of the final exam, but its slides do not show this adjustment; the XYZ example above shows the reclassification used in the course: Dr Financial loan LT / Cr Financial loan ST. The Topic 8 tutorial adds a loan repayment with accrued interest.')}
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
<p class="lede">Every formula and standard entry from Topics 1–4. Learn the patterns, then drill them in the Journal drills tab.</p>
<h3>Formulas</h3>
${T(['What','Formula'],[
['Accounting equation','Assets = Liabilities + Equity'],
['Net income','Revenues − Expenses'],
['Account balance','Opening + increases − decreases'],
['Net purchases','Price + freight-in − returns − allowances − purchase discounts'],
['COGS','Beginning inventory + Purchases − Ending inventory'],
['Gross profit','Net sales − COGS;  GP% = GP / Net sales'],
['Cost of PPE','Price + all costs to bring to intended use (not VAT, training, ads, overheads)'],
['Straight-line depreciation','(Cost − Residual) / Life  × months/12 if part year'],
['Book value','Cost − Accumulated depreciation'],
['Revised depreciation','(BV + capex − Residual) / Remaining life'],
['Gain / loss on disposal','Proceeds − Book value at disposal date'],
['Goodwill','Price paid − (FV of assets − liabilities assumed)'],
['Issue price (non-listed)','Total equity / Shares outstanding'],
['New shares','Amount to raise / Issue price (round up)'],
['Par value','Share capital / Shares outstanding'],
['Share premium','(Issue price − Par) × new shares'],
['EPS','Net income / Shares outstanding'],
['Interest','Principal outstanding × rate × months/12'],
['Annuity split','Principal repaid = Annuity − Interest']])}
<h3>Standard entries</h3>
${T(['Event','Debit','Credit'],[
['Shares issued for cash','Cash','Share capital (+ Share premium)'],
['Contribution in kind','PPE','Share capital'],
['Sale on account','A/R','Revenue'],
['…and its cost (perpetual)','COGS','Inventory'],
['Customer pays in advance','Cash','Unearned revenue'],
['Expense on account','Expense','A/P'],
['Expense paid in advance','Prepaid expenses','Cash'],
['Sale with VAT','Cash','Revenue + VAT payable'],
['Purchase inventory on credit (+freight)','Inventory','A/P (+ Cash)'],
['Buy PPE','PPE','Cash / A/P / Notes payable'],
['Depreciation','Depreciation expense','Accumulated depreciation'],
['Amortisation','Amortization expense','Accumulated amortization'],
['Disposal','Cash + Acc. depreciation (+ Loss)','PPE (+ Gain)'],
['Acquisition with goodwill','Assets + Goodwill','Liabilities + Cash'],
['Dividend declared','Net income of prior year / RE','Dividends payable'],
['Dividend paid','Dividends payable','Cash'],
['Share buyback','Treasury shares','Cash'],
['A/P converted to note','A/P','Notes payable'],
['Loan received','Cash','Financial loan LT + ST'],
['Loan instalment','Interest expense + Financial loan ST','Cash'],
['Year-end reclassification','Financial loan LT','Financial loan ST']],[])}
<h3>Answer checklist for every exam question</h3>
<ol>
<li>Is it a transaction of the <b>business</b>? (personal ones are not recorded)</li>
<li>Which accounts, which <b>type</b> (A, L, SE, R, E, XA) and which <b>direction</b>?</li>
<li><b>When</b>: recognition date (delivery, consumption, declaration) vs cash date.</li>
<li><b>How much</b>: initial measurement (what is capitalised), subsequent measurement (depreciation, revision).</li>
<li>Entry <b>balances</b>?</li>
<li><b>Impact</b> on assets, liabilities, equity, net income and cash.</li>
</ol>
`;

/* ---------- end-term topic sheets (Topics 5–8: slides and extra exercises on the course platform) ---------- */
SHEETS.t5=`
<div class="eyebrow">Topic 5</div><h2>End-of-period adjustments</h2>
<p class="lede">Why the unadjusted trial balance is not ready for the financial statements, and the adjusting entries of the course: prepaids, depreciation (straight-line and declining-balance), impairment of PPE, impairment of A/R and write-down of inventory.</p>

<h3>1. From the journal to the trial balance</h3>
<ul>
<li>After journalizing, every change is <b>posted</b> to its T-account. The book or file holding all the T-accounts is the <b>general ledger</b>.</li>
<li>A <b>trial balance</b> lists the balances of all ledger accounts at a specific point in time. It checks that total debit balances = total credit balances, and it is used to prepare the financial statements.</li>
</ul>
${EX('Posting two entries (Topic 5 slide)','worked example',`${J([['1','Cash','A+',2000,''],['','A/R','A−','',2000],['2','A/P','L−',500,''],['','Cash','A−','',500]])}
${T(['Account','Beginning','Movements','Ending'],[['Cash (debit)','1 000','+ 2 000 − 500','2 500'],['Accounts payable (credit)','2 000','− 500','1 500'],['Accounts receivable (debit)','3 000','− 2 000','1 000']],[1,3])}`)}

<h3>2. Why adjust at the end of the period?</h3>
<p>The trial balance prepared right after posting (the <b>unadjusted trial balance</b>) is not up to date. GadgetGalaxy (year-end 31 Dec; unadjusted trial balance on 20 Dec 2023) shows why:</p>
<ul>
<li>The books show 2 500 of office supplies, but only 1 000 are counted at year-end.</li>
<li>An insurance period paid in advance is over on 31 Dec.</li>
<li>The second half of December salaries is due on 31 Dec and still unpaid.</li>
<li>A full year of using PPE to earn revenue is over.</li>
<li>Orders paid in advance were delivered between 20 and 31 Dec.</li>
<li>Some clients are not expected to settle their open account.</li>
</ul>
<p>Adjustments are recorded with <b>adjusting journal entries</b>. Each one adjusts <b>one balance sheet account and one income statement account</b>.</p>
${T(['Category','Items'],[['<b>Prepaids</b>','1. Unearned revenues · 2. Prepaid expenses'],['<b>Adjustment of assets</b>','1. Depreciation of PPE · 2. Impairment of PPE · 3. Impairment of A/R · 4. Write-down of inventory'],['<b>Accruals</b>','1. Accrued revenues · 2. Accrued expenses'],['<b>Provisions for risks</b>','1. Customer warranties · 2. Litigation · 3. Onerous contracts …']])}
${NOTE('<b>Scope from the slides:</b> the slides stamp <i>Accruals</i> and <i>Provisions for risks</i> "Not discussed in this course". Accrual-type entries still appear in the course exercises (Topic 2 wages, the Topic 6 RedLotus and Goldsmith exercises, the Topic 8 tutorial): Dr Expense / Cr Salary payable (or A/P), Dr A/R / Cr Revenue, Dr Income tax expense / Cr Income tax payable. Provisions for risks appear nowhere.')}

<h3>3. Prepaids</h3>
<h4>Unearned revenue</h4>
<p>On 19 Dec, GadgetGalaxy receives an order for 20 PartyBoxes at 200 (4 000) and asks for 50% in advance. It delivers on 23 Dec (cost 1 700) and the customer pays the rest immediately.</p>
${J([['Dec 19','Cash','A+',2000,''],['','Unearned revenue','L+','',2000],['Dec 23','Unearned revenue','L−',2000,''],['','Cash','A+',2000,''],['','Sales revenue','R+','',4000],['Dec 23','COGS','E+',1700,''],['','Inventory','A−','',1700]])}
<p>Paid before delivery: the performance obligation is not satisfied, so the advance is a liability. On delivery the obligation is satisfied: revenue <b>and</b> the related cost are recognised. Effect on the statements: cash +2 000, inventory −1 700, unearned revenue −2 000, net income +2 300 (400 → 2 700); total assets 60 700 → 61 000.</p>
<h4>Prepaid expense</h4>
<p>On 30 June, GadgetGalaxy pays a one-year insurance contract of 500. On 31 Dec, 6 months are consumed: 500 × 6/12 = 250.</p>
${J([['June 30','Prepaid insurance','A+',500,''],['','Cash','A−','',500],['Dec 31','Insurance expense','E+',250,''],['','Prepaid insurance','A−','',250]])}
<p>Paying before the service is received creates a resource (an asset); the expense appears when the resource is consumed. Effect: prepaid insurance 500 → 250, net income 400 → 150, total assets 60 700 → 60 450.</p>

<h3>4. Depreciation</h3>
<p>Depreciation allocates the cost of PPE (less its residual value) over its useful life, reflecting the consumption of its benefits through use, wear and obsolescence. PPE work like prepaid expenses: paid when acquired, used to produce revenue, used up over time.</p>
<ul>
<li>The expense is recognised for each year of useful life.</li>
<li>All plant assets <b>except land</b> are depreciable. <b>Land improvements</b> (driveways, walkways, lighting, parking lots) are depreciable.</li>
<li>Three methods exist: straight-line (marked "Covered in FAF" on the slide, and used in all the exercises), <b>declining-balance</b> ("Only this one covered in this course") and units-of-activity (not covered).</li>
</ul>
<h4>Straight-line</h4>
${F('Depreciable cost = Asset cost − Residual value\nAnnual depreciation = Depreciable cost / Useful life (years)')}
${EX('GadgetGalaxy scanner, straight-line','worked example',`<p>Cost 22 000, bought 1 Jan 2023, residual (salvage) value 2 000, life 5 years: (22 000 − 2 000) / 5 = <b>4 000</b> a year (rate 20%).</p>
${T(['Year','Depreciable cost','Annual expense','Accum. depreciation','Book value'],[['2023','20 000','4 000','4 000','18 000'],['2024','20 000','4 000','8 000','14 000'],['2025','20 000','4 000','12 000','10 000'],['2026','20 000','4 000','16 000','6 000'],['2027','20 000','4 000','20 000','2 000']],[1,2,3,4])}
${J([['Dec 31','Depreciation expense','E+',4000,''],['','Accumulated depreciation','XA+','',4000]])}`)}
<h4>Partial year</h4>
<ul>
<li>The first period starts on the first day of the month of purchase (course assumption: the asset is bought on the 1st and put into use at once) and ends on the last day of the accounting period.</li>
<li>Depreciation then runs over <b>N + 1</b> accounting periods (N = useful life in years).</li>
</ul>
${F('Year of purchase: annual depreciation × months in use / 12\nYear N+1: annual depreciation × (12 − months of the first year) / 12')}
${NOTE('<b>Check against the slide:</b> the slide first says the pro rata "MUST be calculated in number of days", then computes it in months, and its footnote says the course works in months (asset bought on the first day of a month). Use months.')}
${EX('GadgetGalaxy, bought on 1 April','worked example',`${T(['Year','Annual','Partial year','Expense','Accum. depreciation','Book value'],[['2023','4 000','× 9/12','3 000','3 000','19 000'],['2024','4 000','','4 000','7 000','15 000'],['2025','4 000','','4 000','11 000','11 000'],['2026','4 000','','4 000','15 000','7 000'],['2027','4 000','','4 000','19 000','3 000'],['2028','4 000','× 3/12','1 000','20 000','2 000']],[1,3,4,5])}`)}
<p><b>Straight-line, pros:</b> simple; suits assets used at a constant rate with an easy-to-estimate life; profits are easier to compare. <b>Con:</b> some assets (computers) are used more in their early years; the declining-balance method reflects that better.</p>
<h4>Declining-balance (accelerated) method</h4>
<ul>
<li>Larger expense in the early years, decreasing afterwards.</li>
<li>The rate is applied to the <b>book value at the beginning of the year</b>, not to the depreciable cost: the residual value is not deducted first.</li>
<li>Rate = 100% / useful life × multiplier. USA: multiplier 2 (<b>double declining-balance</b>, used in the exercises). France: 1.25 (N = 3 or 4), 1.75 (N = 5 or 6), 2.25 (N &gt; 6).</li>
<li>A constant rate times a declining base never reaches zero: in the <b>final year</b> the expense is adjusted so that the book value ends exactly at the residual value.</li>
</ul>
${F('DB rate = 100% / Useful life × 2\nAnnual depreciation = Beginning book value × DB rate\nEnding book value = Beginning book value − Depreciation\nFinal year: depreciation = Beginning book value − Residual value')}
${EX('GadgetGalaxy, double declining-balance (40%)','worked example',`${T(['Year','Beginning book value','Rate','Expense','Accum. depreciation','Book value'],[['2023','22 000','40%','8 800','8 800','13 200'],['2024','13 200','40%','5 280','14 080','7 920'],['2025','7 920','40%','3 168','17 248','4 752'],['2026','4 752','40%','1 901','19 149','2 851'],['2027','2 851','','851','20 000','2 000']],[1,3,4,5])}
<p>2027: 2 851 × 40% = 1 140.40 would take the book value below the residual value of 2 000, so the expense is cut to 2 851 − 2 000 = <b>851</b>. (2026: 4 752 × 40% = 1 900.80, rounded to 1 901 on the slide.)</p>
${J([['Dec 31, 2023','Depreciation expense','E+',8800,''],['','Accumulated depreciation','XA+','',8800]])}
<p>Effect on the 2023 statements: PPE shown net at 22 000 − 8 800 = 13 200; total assets 60 700 → 51 900; net income 400 → −8 400.</p>`)}
<p>Accumulated depreciation is a contra-asset with a credit balance, shown in the asset section with PPE.</p>
${EX('Winchester plc (Topic 5 exercise)','exercise',`<p>Machine bought 1 Sep 2017 for 120 000; residual value 12 000; life 4 years.</p>
${F('I. Straight-line: (120 000 − 12 000) / 4 = 27 000 a year\n   2017: 27 000 × 4/12 = 9 000;   2018: 27 000')}
${J([['Dec 31, 2017','Depreciation expense','E+',9000,''],['','Accumulated depreciation','XA+','',9000],['Dec 31, 2018','Depreciation expense','E+',27000,''],['','Accumulated depreciation','XA+','',27000]])}
<p>II. If the machine were bought on 1 Jan 2017, double declining-balance (100% / 4 × 2 = 50%):</p>
${T(['Year','Beginning book value','Rate','Expense','Accum. depreciation','Book value'],[['2017','120 000','50%','60 000','60 000','60 000'],['2018','60 000','50%','30 000','90 000','30 000'],['2019','30 000','50%','15 000','105 000','15 000'],['2020','15 000','','3 000','108 000','12 000']],[1,3,4,5])}
<p>2020 is the final year: 15 000 − 12 000 = 3 000, not 7 500.</p>`)}

<h3>5. Impairment of PPE</h3>
<ul>
<li>When there is an indication that the value of PPE fell beyond depreciation, the company <b>must</b> run an <b>impairment test</b>. Indications are <b>internal</b> (disuse of PPE, drop in turnover or production rate) or <b>external</b> (economic situation, drop in the market value of PPE).</li>
<li>Compare the <b>net book value</b> (carrying amount = gross value − accumulated depreciation) with the <b>recoverable amount</b> (the highest amount the company can get from the asset, by selling it or by keeping and using it).</li>
</ul>
${F('If Net book value > Recoverable amount:\nImpairment loss = Net book value − Recoverable amount')}
${J([['Dec 31','Impairment expense','E+','xx',''],['','Impairment of PPE','XA+','','xx']])}
<p><i>Impairment of PPE</i> is a contra-asset, like accumulated depreciation. Depreciation and impairment both reduce the net book value of PPE (balance sheet) and are always recorded as expenses (income statement).</p>
${EX('GadgetGalaxy and Alpha Company (Topic 5)','worked examples',`<p><b>GadgetGalaxy</b>, end of 2023: a permanent drop in turnover is expected. Cost 22 000, accumulated depreciation 2 000, recoverable amount 14 700.</p>
${F('Net book value = 22 000 − 2 000 = 20 000 > 14 700\nImpairment loss = 20 000 − 14 700 = 5 300')}
${J([['Dec 31','Impairment expense','E+',5300,''],['','Impairment of PPE','XA+','',5300]])}
<p><b>Alpha Company</b>: PPE bought 1 Jan 2023 for 120 000, life 20 years, salvage value 20 000, straight-line. Recoverable amount on 31 Dec 2023: 105 000.</p>
${F('Depreciation 2023 = (120 000 − 20 000) / 20 = 5 000\nNet book value = 120 000 − 5 000 = 115 000 > 105 000  →  impairment = 10 000')}
${J([['31/12/2023','Impairment expense','E+',10000,''],['','Impairment of PPE','XA+','',10000]])}`)}

<h3>6. Impairment of accounts receivable</h3>
<ul>
<li>The balance sheet shows <b>net</b> A/R, not the gross amount sold on credit, because some customers may not pay.</li>
<li>The company estimates the uncollectible part and records it in <b>Allowance for doubtful accounts</b>, a contra-asset shown under A/R. The matching expense is <b>Bad debt expense</b>. (Estimation methods are not covered.)</li>
<li>When the company is certain a customer will not pay (bankruptcy), it <b>writes off</b> the receivable against the allowance.</li>
</ul>
${F('Net realizable value of A/R = Gross A/R − Allowance for doubtful accounts\nBad debt expense = Required ending allowance − (Opening allowance − Write-offs)')}
${T(['Event','Debit','Credit'],[['Year-end estimate (allowance method)','Bad debt expense (E+)','Allowance for doubtful accounts (XA+)'],['Customer certain not to pay (write-off method)','Allowance for doubtful accounts (XA−)','A/R (A−)']])}
${TRAP('A write-off changes neither net A/R nor net income (both accounts fall by the same amount): the loss was recognised when the allowance was built. Only the year-end adjustment goes through the income statement.')}
${NOTE('<b>Wording on the slide:</b> "Accounting standards do not allow to directly write-off A/R" means the expected loss must first go through the allowance; the write-off itself is then Dr Allowance for doubtful accounts / Cr A/R.')}
${EX('GadgetGalaxy and Berta Company (Topic 5)','worked examples',`<p><b>GadgetGalaxy</b> estimates at 31 Dec 2023 that 600 of A/R will not be collected:</p>
${J([['Dec 31','Bad debt expense','E+',600,''],['','Allowance for doubtful accounts','XA+','',600]])}
<p>A/R of 3 200 is now shown net at 2 600; net income 400 → −200. Later, a customer owing 1 000 goes bankrupt:</p>
${J([['Dec 31','Allowance for doubtful accounts','XA−',1000,''],['','A/R','A−','',1000]])}
<p><b>Berta</b>: on 31 Dec 2022, A/R 10 000 and allowance 2 500 (net 7 500). In 2023: credit sales 5 000, collections 3 500, customer A (1 000) goes bankrupt; at year-end only one customer owing 1 800 will not pay.</p>
${F('A/R: 10 000 + 5 000 − 3 500 − 1 000 = 10 500\nAllowance before adjustment: 2 500 − 1 000 = 1 500;  needed 1 800  →  bad debt expense 300')}
${J([['During 2023','A/R','A+',5000,''],['','Sales revenue','R+','',5000],['During 2023','Cash','A+',3500,''],['','A/R','A−','',3500],['During 2023','Allowance for doubtful accounts','XA−',1000,''],['','A/R','A−','',1000],['31 Dec 2023','Bad debt expense','E+',300,''],['','Allowance for doubtful accounts','XA+','',300]])}`)}
${EX('Unicorn Corp. (Topic 5 exercise)','exercise',`<p>Start of 2024: cash 50 000, A/R 35 000, allowance 7 500. Sales of 85 000, of which 70 000 collected in cash. On 3 Oct 2024 the client John (6 000) files for bankruptcy. At the end of 2024 the allowance must be 2 000.</p>
${J([['During 2024','Cash','A+',70000,''],['','A/R','A+',15000,''],['','Sales revenue','R+','',85000],['October 3','Allowance for doubtful accounts','XA−',6000,''],['','A/R','A−','',6000],['End of 2024','Bad debt expense','E+',500,''],['','Allowance for doubtful accounts','XA+','',500]])}
${F('Allowance: 7 500 (Cr) − 6 000 (Dr) = 1 500 (Cr);  needed 2 000  →  add 500')}
${NOTE('<b>Check against the slide:</b> the solution slide prints "15 0000" for A/R. It is 15 000 (85 000 − 70 000); the entry balances at 85 000.')}`)}

<h3>7. Write-down of inventory</h3>
<ul>
<li>Inventory is reported at the <b>lower of its cost and net realizable value</b> (LCNRV, also "lower of cost or market"); otherwise the information is not faithful.</li>
<li><b>Net realizable value</b> = expected selling price in the ordinary course of business − estimated costs of completion − estimated costs necessary to make the sale.</li>
<li>Steps: compute the cost (FIFO or weighted average) → compare it with the NRV <b>item by item</b> → write down to NRV where the cost is higher.</li>
<li>NRV falls below cost when inventory is disused or damaged.</li>
</ul>
${J([['Dec 31','Loss on inventory write-down','E+','xx',''],['','Allowance for inventory losses','XA+','','xx']])}
${NOTE('<b>Outside the slides:</b> the slide adds that NRV "is sometimes called replacement cost". Under IFRS (IAS 2) they are two different measures; for the exam, use the NRV definition above.')}
${EX('GadgetGalaxy (Topic 5)','worked example',`${T(['Item','Cost','NRV','LCNRV','Adjustment'],[['Item 1','600','500','500','−100'],['Item 2','1 100','1 200','1 100','0'],['Item 3','700','600','600','−100'],['Item 4','500','300','300','−200'],['<b>Total</b>','2 900','','2 500','−400']],[1,2,3,4])}
${J([['Dec 31','Loss on inventory write-down','E+',400,''],['','Allowance for inventory losses','XA+','',400]])}
<p>Inventory is shown at 2 900 − 400 = 2 500; total assets 60 700 → 60 300; net income 400 → 0.</p>`)}
${TRAP('Compare item by item: an item whose NRV is above its cost (Item 2) stays at cost, and its margin does not offset the losses on the other items (−400, not −300).')}

<h3>8. Putting it together: Apollyon Inc. (Topic 5 extra exercise)</h3>
${EX('Apollyon: depreciation, impairment, inventory, A/R and income statement','exercise',`<p>Machinery bought 1 April 2020 for €2 000 000; life 20 years; salvage value €200 000; straight-line. On 31 Dec 2023 a competitor's new model cuts the recoverable amount to €1 500 000.</p>
${F('Depreciation 2020 = (2 000 000 − 200 000) / 20 × 9/12 = 67 500;   2021 = 90 000\nAccumulated depreciation end 2023 = 67 500 + 3 × 90 000 = 337 500\nCarrying amount = 2 000 000 − 337 500 = 1 662 500 > 1 500 000  →  impairment 162 500')}
${J([['31 Dec 2023','Impairment expense','E+',162500,''],['','Impairment of PPE','XA+','',162500]])}
<p>Inventory counted at the end of 2023:</p>
${T(['Item','Quantity','Unit cost','NRV per unit','Unit value kept','Total'],[['Item 1','100','600','580','580','58 000'],['Item 2','90','200','220','200','18 000'],['Item 3','150','820','800','800','120 000'],['Item 4','200','700','650','650','130 000'],['<b>Total</b>','','','','','326 000']],[1,2,3,4,5])}
${F('Write-down = 100 × 20 + 150 × 20 + 200 × 50 = 15 000')}
${J([['31 Dec 2023','Loss on inventory write-down','E+',15000,''],['','Allowance for inventory losses','XA+','',15000]])}
${NOTE('<b>Check against the solution:</b> the official solution gives Item 2 a total of €40 000 and total inventory of €348 000. With 90 units × €200 the total is €18 000, so the inventory to report is <b>€326 000</b>. The €15 000 write-down is not affected.')}
<p>A/R: sales of €6 250 000, 40% still unpaid; a client owing €150 000 goes bankrupt; €600 000 of A/R is doubtful at year-end; the allowance was €500 000 at the end of 2022.</p>
${J([['During 2023','A/R','A+',6250000,''],['','Revenue','R+','',6250000],['During 2023','Cash','A+',3750000,''],['','A/R','A−','',3750000],['During 2023','Allowance for doubtful accounts','XA−',150000,''],['','A/R','A−','',150000],['31 Dec 2023','Bad debt expense','E+',250000,''],['','Allowance for doubtful accounts','XA+','',250000]])}
${F('Allowance: 500 000 − 150 000 = 350 000;  needed 600 000  →  bad debt expense 250 000')}
<p>Income statement 2023 (thousands of €):</p>
${T(['Line','Amount'],[['Revenue','6 250'],['COGS','(170)'],['Depreciation','(90)'],['Impairment expense (PPE)','(162.5)'],['Salaries (150 paid + 20 still to be paid)','(170)'],['Supplies expense (70% × 100)','(70)'],['Loss on inventory write-down','(15)'],['Bad debt expense','(250)'],['Interest expense','(150)'],['<b>Income before tax</b>','5 172.5'],['Income tax (25%)','(1 293.1)'],['<b>Net income</b>','3 879.4']],[1])}
<p>The €1 150 000 paid to the bank is €1 000 000 of loan principal (not an expense) and €150 000 of interest. Paying the salaries payable of the 2022 balance sheet is not a 2023 expense. Equity at 31 Dec 2023 (no dividend, no capital increase): share capital 10 000, retained earnings 4 700, net income 2023 3 879 (thousands of €).</p>
${NOTE('<b>Check against the solution:</b> the official solution rounds income before tax to 5 173, tax to 1 293 and net income to 3 879. It also repeats the inventory write-down entry at the start of Q5 (copy error) and titles the Q7 balance sheet "As of Dec 31, 2022" instead of 2023.')}`)}
`;

SHEETS.t6=`
<div class="eyebrow">Topic 6</div><h2>Profit appropriation and dividends</h2>
<p class="lede">Corporate income tax, how the net profit is distributed (cash and share dividends, France vs Anglo-Saxon rules), the statement of changes in equity, and the full path from an unadjusted trial balance to the final statements.</p>

<h3>1. Corporate income tax</h3>
<ul>
<li>The tax on business profits. Its base is <b>income before tax</b> (taxable income) = revenues − all expenses except the income tax expense.</li>
<li>In the case of losses, no corporate income tax is due.</li>
<li>The rate depends on the country (France: 25% in 2024).</li>
</ul>
${F('Income tax expense = Profit before tax × Corporate tax rate')}
${EX('P&amp;E ltd, January 2023','worked example',`${T(['Income statement','Amount'],[['Revenues','35 000'],['COGS','15 500'],['Rent expense','7 000'],['Electricity expense','1 100'],['Insurance expense','1 500'],['Depreciation expense','1 000'],['Interest expense','125'],['Total expenses','26 225'],['<b>Profit before tax</b>','8 775'],['Tax expense (25%)','2 194']],[1])}`)}
${EX('ABC: recording and paying the income tax','worked example',`<p>31 Dec 2023: income before taxes 125 000, rate 25% → 31 250. The tax is paid in cash on 28 Feb 2024.</p>
${J([['Dec 31','Income tax expense','E+',31250,''],['','Income tax payable','L+','',31250],['Feb 28','Income tax payable','L−',31250,''],['','Cash','A−','',31250]])}
<p>31 Dec: net income −31 250 and a liability +31 250. 28 Feb: cash and the liability both fall by 31 250 (no income statement effect).</p>`)}

<h3>2. Profit appropriation</h3>
<p>Allocating the net profit (= revenue − all expenses, including corporate income tax) to its uses: <b>dividends</b>, bonuses, reserves, retained earnings. The course focuses on dividends.</p>

<h3>3. Dividends</h3>
<ul>
<li>A dividend is a distribution by a firm to its shareholders, usually based on its earnings: in <b>cash</b> or in <b>shares</b> (very common), in non-cash assets (very rare: retained earnings and the cost of the assets given both decrease).</li>
<li>To pay cash dividends, a firm must have enough retained earnings/profit to declare them <b>and</b> enough cash to pay them.</li>
</ul>
${T(['','Interim dividend','Final (ordinary) dividend'],[['When','During the fiscal year, mostly after the first 6 months','After the end of the year, when the financial reports are published'],['Who','Declared by the board of directors; payable immediately','Recommended by the board of directors; may need shareholders’ approval (French vs Anglo-Saxon approaches)'],['Basis','Realized net income since the last year-end, if legal conditions are met (e.g. losses of previous years covered first)','Usually the largest dividend']])}
${J([['June 19','Net income of the year','SE−',15000,''],['','Dividend payable','L+','',15000],['June 30','Dividend payable','L−',15000,''],['','Cash','A−','',15000]])}
<p>ABC, interim dividend of 15 000: the declaration creates a liability and reduces equity; the payment reduces cash and removes the liability.</p>
${TRAP('A dividend is never an expense: it reduces equity directly and does not appear in the income statement.')}
<h4>Share dividends</h4>
<ul>
<li>The firm distributes its own shares to its existing shareholders, in proportion to the shares they own (1 000 shares × 10% = 100 new shares → 1 100 shares).</li>
<li>Share capital increases; net income of the year (French) or retained earnings (Anglo-Saxon) decreases. No asset or liability changes: <b>total equity is unchanged</b>.</li>
<li>Why: keep paying dividends while conserving cash; lower the share's market price (more shares outstanding) so that it attracts more investors.</li>
</ul>
${F('New shares = Shares outstanding × Share dividend %\nValue of the share dividend = New shares × Current share price')}
${EX('ABC: 15% share dividend','worked example',`<p>10 July 2024: 100 000 shares outstanding, originally issued at €5, trading at €10. New shares = 100 000 × 15% = 15 000; value = 15 000 × 10 = 150 000.</p>
${J([['July 10','Net income of 2023','SE−',150000,''],['','Share capital','SE+','',150000]])}
${NOTE('<b>Course convention:</b> the slide values the share dividend at the current market price, credits the whole €150 000 to Share capital (no share premium, although the shares were issued at €5) and debits "Net income of 2023". Use this entry.')}`)}

<h3>4. Distribution of results: France vs Anglo-Saxon world</h3>
${T(['','France','Anglo-Saxon world'],[['Legal reserve','Yes','No'],['What can be distributed','Net income of the year only (no dividend when it is negative)','Net income of the year and retained earnings; their sum must be positive (a dividend is possible after a loss of the year)'],['Who decides','Shareholders (annual general meeting)','Board of directors (no need to wait for the end of the year)'],['Presentation of the statements','Before appropriation: "Net income of the year" appears distinctly in equity','After appropriation: only the retained part appears in retained earnings']])}
${F('France: legal reserve += 5% of annual profit, until the legal reserve equals 10% of share capital\n        dividends at most 95% of annual profit while this restriction holds')}

<h3>5. From the trial balance to the final statements</h3>
<p>Journal → ledger → unadjusted trial balance → adjusting entries → adjusted trial balance → balance sheet, income statement, statement of changes in equity, cash flow statement (Topic 7). The accounts are used during the period; the statements are edited after the period has ended.</p>
<h4>Statement of changes in equity (SOCE)</h4>
<ul>
<li>Reports the changes in shareholders' equity over the period: changes in share capital (new issues +, buybacks −), the effect of the profit or loss on retained earnings, dividends.</li>
<li>It links the <b>income statement</b> and the <b>balance sheet</b>.</li>
<li>Columns: share capital, share premium, treasury shares, retained earnings (other reserves: not covered). Rows: beginning balance, each reason for a change, ending balance.</li>
</ul>
${F('Ending equity = Beginning equity + new shares (capital + premium) − buybacks + net income − dividends')}
${EX('ABC Corporation, SOCE 2023 (Topic 6)','worked example',`<p>1 Jan 2023: share capital 100 000 (10 000 shares, par 10), share premium 15 000, retained earnings 15 000. In 2023: 2 000 new shares issued at 25 (French principle: capital 2 000 × 10 = 20 000, premium 2 000 × 15 = 30 000); 1 000 own shares bought back at 15 on 1 Oct; net profit 25 000; interim dividends of 12 000 declared and paid.</p>
${T(['','Share capital','Share premium','Treasury shares','Ret. earn. &amp; net inc.','Total'],[['1 Jan 2023','100 000','15 000','','15 000','130 000'],['Issue of new shares at a premium','20 000','30 000','','','50 000'],['Share buyback','','','(15 000)','','(15 000)'],['Net profit','','','','25 000','25 000'],['Interim dividends','','','','(12 000)','(12 000)'],['<b>31 Dec 2023</b>','120 000','45 000','(15 000)','28 000','178 000']],[1,2,3,4,5])}
<p>Equity section of the balance sheet: share capital 120 000, share premium 45 000, treasury shares (15 000), retained earnings 15 000, net income of 2023 13 000 (25 000 − 12 000).</p>`)}

<h3>6. Large overview exercise: RedLotus Travel (30 June 2024)</h3>
${EX('RedLotus: unadjusted trial balance → adjustments → final statements','exercise',`
${T(['Unadjusted trial balance','Debit','Credit'],[['Cash','34 800',''],['Accounts receivable','2 200',''],['Supplies','700',''],['Prepaid rent','3 000',''],['Land','23 200',''],['Equipment','24 000',''],['Accounts payable','','13 100'],['Unearned service revenue','','400'],['Share capital','','50 000'],['Retained earnings','','18 800'],['Service revenue','','7 000'],['Salary expense','900',''],['Utilities expense','500',''],['<b>Total</b>','89 300','89 300']],[1,2])}
<p>In France the net income of the year is not in the unadjusted trial balance: it is only known after the adjustments.</p>
${T(['','Information','Adjusting entry'],[['a','Rent of 3 000 prepaid on 1 June; rent is 1 000 a month','Dr Rent expense 1 000 / Cr Prepaid rent 1 000'],['b','Supplies of 700 bought on 1 June; 400 left on 30 June','Dr Supplies expense 300 / Cr Supplies 300'],['c','400 collected on 15 June for 10 bookings within 30 days; 5 made','Dr Unearned service revenue 200 / Cr Service revenue 200'],['d','First half-month salary of 900 paid on 15 June; the second 900 is paid on Monday 1 July','Dr Salary expense 900 / Cr Salary payable 900'],['e','Commission of 30 per booking from a hotel chain; 10 bookings; paid after 30 days','Dr Accounts receivable 300 / Cr Service revenue 300'],['f','Equipment bought on 2 June for 24 000 on account; 5 years; no residual value; one full month','Dr Depreciation expense 400 / Cr Accumulated depreciation 400'],['g','Income tax of 25% on adjusted pre-tax income','Dr Income tax expense 875 / Cr Income tax payable 875']])}
${F('Service revenue = 7 000 + 200 + 300 = 7 500\nExpenses before tax = rent 1 000 + salaries 1 800 + supplies 300 + depreciation 400 + utilities 500 = 4 000\nTaxable income = 3 500;  income tax 25% = 875;  net income = 2 625')}
${T(['Adjusted trial balance','Debit','Credit'],[['Cash','34 800',''],['Accounts receivable','2 500',''],['Supplies','400',''],['Prepaid rent','2 000',''],['Land','23 200',''],['Equipment','24 000',''],['Accumulated depreciation, equipment','','400'],['Accounts payable','','13 100'],['Salary payable','','900'],['Unearned service revenue','','200'],['Income tax payable','','875'],['Share capital','','50 000'],['Retained earnings','','18 800'],['Service revenue','','7 500'],['Rent expense','1 000',''],['Salary expense','1 800',''],['Supplies expense','300',''],['Depreciation expense','400',''],['Utilities expense','500',''],['Income tax expense','875',''],['<b>Total</b>','91 775','91 775']],[1,2])}
<div class="grid2"><div class="panel"><h4>Balance sheet, 30/06/2024</h4>${T(['Assets','Amount'],[['Land','23 200'],['Equipment','24 000'],['Accumulated depreciation','(400)'],['Prepaid rent','2 000'],['Supplies','400'],['A/R','2 500'],['Cash','34 800'],['<b>Total assets</b>','86 500']],[1])}${T(['Equity and liabilities','Amount'],[['Share capital','50 000'],['Retained earnings','18 800'],['Net income until June 2024','2 625'],['Income tax payable','875'],['Unearned revenue','200'],['Salary payable','900'],['A/P','13 100'],['<b>Total</b>','86 500']],[1])}</div>
<div class="panel"><h4>Income statement, period ended 30/06/2024</h4>${T(['Line','Amount'],[['Service revenue','7 500'],['Salary expense','(1 800)'],['Rent expense','(1 000)'],['Supplies expense','(300)'],['Depreciation expense','(400)'],['Utilities expense','(500)'],['Income tax expense','(875)'],['<b>Net income</b>','2 625']],[1])}</div></div>
${NOTE('<b>Check against the slide:</b> in step f the slide says accumulated depreciation "(an ASSET account) decreases by 400". The entry itself is right: accumulated depreciation is a contra-asset that increases (XA+) by 400.')}
<p>No SOCE here: the equity components at 30/06/2023 and the other equity changes are not given.</p>`)}
${EX('Goldsmith Company and Eagle Express (session 7 extra exercises)','exercise',`<p><b>Goldsmith</b>, unadjusted trial balance at 31 Dec 2023 (total 1 174 000). Adjustments:</p>
${T(['','Information','Entry'],[['a','Supplies 6 000; 2 000 on hand','Dr Supplies expense 4 000 / Cr Supplies 4 000'],['b','Depreciation on equipment','Dr Depreciation expense, equipment 20 000 / Cr Accumulated depreciation, equipment 20 000'],['c','Depreciation on building','Dr Depreciation expense, building 10 000 / Cr Accumulated depreciation, building 10 000'],['d','Salaries owed, not yet paid','Dr Salary expense 5 000 / Cr Salary payable 5 000'],['e','Accrued service revenue','Dr Accounts receivable 12 000 / Cr Service revenue 12 000'],['f','32 000 of the 45 000 unearned revenue earned','Dr Unearned service revenue 32 000 / Cr Service revenue 32 000'],['g','Accrued income tax','Dr Income tax expense 35 000 / Cr Income tax payable 35 000']])}
<p>Adjusted trial balance total: <b>1 256 000</b> (service revenue 286 000 + 12 000 + 32 000 = 330 000; unearned revenue 13 000; A/R 382 000; supplies 2 000).</p>
<p><b>Eagle Express</b> prepaid four years of rent (24 000) on 1 Jan 2022 and adjusts once a year. The unadjusted trial balance at 31 Dec 2022 shows prepaid rent of <b>24 000</b>; the adjustment is 24 000 / 4 = 6 000.</p>
${J([['Dec 31','Rent expense','E+',6000,''],['','Prepaid rent','A−','',6000]])}`)}
`;

SHEETS.t7=`
<div class="eyebrow">Topic 7</div><h2>Cash flow statement</h2>
<p class="lede">What the cash flow statement shows, how to classify cash flows (operating, investing, financing), and how to build it with the direct and the indirect methods.</p>

<h3>1. Why a cash flow statement?</h3>
<p>The income statement is on an accrual basis; the cash flow statement reports the cash generated and spent during a period ("cash is king"). It is the bridge between two balance sheets:</p>
${F('Opening cash (last balance sheet) + Cash in − Cash out = Closing cash (latest balance sheet)')}
${T(['Use','What it shows'],[['Liquidity assessment','Ability to meet short-term obligations and keep healthy cash reserves'],['Financial planning','Future cash needs, for decisions on growth, investments, financing and operations'],['Performance evaluation','Operational efficiency: ability to generate cash from the core business'],['Financial risk','Reliance on external financing and the risk for long-term stability']])}

<h3>2. Three sections</h3>
${T(['Section','Cash inflows (+)','Cash outflows (−)'],[['<b>Operating</b>: core revenue-producing activities','Sale of goods or services; interest and dividends received','Suppliers for inventory; employees for wages; government for taxes; others for operating expenses; lenders for interest'],['<b>Investing</b>: acquisition and disposal of long-term assets and investments','Sale of PPE; sale of investments in debt or equity securities of other entities; collection of principal on loans to other entities','Purchase of PPE; purchase of such investments; loans made to other entities'],['<b>Financing</b>: raising or repaying capital','Sale (issue) of ordinary shares; issue of long-term debt (bonds and notes)','Dividends to shareholders; reacquiring own shares (treasury shares); redeeming long-term debt']])}
${NOTE('<b>From the slides:</b> interest and dividends received, and interest paid, are classified in operating activities, with the remark "alternative categorization possible in IFRS". Use operating in the exam.')}
${EX('Classify: operating, investing or financing? Cash or no cash?','worked example',`${T(['Activity','Classification'],[['Issuance of shares','Financing / cash inflow'],['Purchase of inventory on account','Operating / no cash'],['Depreciation of equipment','Operating / no cash'],['Services provided on account','Operating / no cash'],['Services provided with cash payment','Operating / cash inflow'],['Purchase of supplies paid in cash','Operating / cash outflow'],['Services received, paid in cash','Operating / cash outflow'],['Dividend distribution','Financing / cash outflow'],['Purchase of land in cash','Investing / cash outflow'],['Taking out a loan from a bank','Financing / cash inflow'],['Rent payment','Operating / cash outflow'],['Recovery of accounts receivable','Operating / cash inflow'],['Payment of wages','Operating / cash outflow'],['Impairment expense on accounts receivable','Operating / no cash']])}`)}

<h3>3. Direct and indirect methods</h3>
<p>The two methods only concern the <b>operating</b> section; the investing and financing sections are identical.</p>
${T(['','Direct method','Indirect method'],[['Presentation','List of operating cash receipts and payments','Starts from net income and adjusts it'],['Level of detail','More detail on the sources and uses of cash','More summarised'],['Usefulness','Liquidity and cash management','Financial reporting and analysis'],['IFRS','Encouraged','Permitted; used by most companies']])}
${F('Net increase (decrease) in cash = Operating (A) + Investing (B) + Financing (C)\nCash at end of period = Cash at beginning (D) + A + B + C')}
<h4>Direct method: Alpha Company, 2023</h4>
<p>Cash at 31 Dec 2022: 30 000. During 2023: shares issued for 20 000, fully paid in; equipment bought for 200 000 cash; operating charges paid 7 000; payment of a recognised rent expense of 10 000 postponed; land costing 250 000 sold for 250 000 cash; dividend of 18 000 declared and paid; merchandise sold for 20 000 cash; suppliers paid 5 000 for inventory; interest paid 1 000; dividends of 12 000 received on share investments; bank loan reimbursed 3 000; goods sold to customers on 20 days' credit.</p>
${T(['Statement of cash flows, Alpha Company, 2023','Amount'],[['<b>Operating activities</b>',''],['Cash receipts from customers','20 000'],['Dividends received on share investments','12 000'],['Paid to suppliers','(5 000)'],['Paid for operating expenses','(7 000)'],['Paid for interest','(1 000)'],['Net cash provided by operating activities','19 000'],['<b>Investing activities</b>',''],['Cash receipt from sale of land','250 000'],['Purchase of equipment','(200 000)'],['Net cash provided by investing activities','50 000'],['<b>Financing activities</b>',''],['Cash receipt from issuance of shares','20 000'],['Loan reimbursement','(3 000)'],['Dividends','(18 000)'],['Net cash used by financing activities','(1 000)'],['<b>Net increase in cash</b>','68 000'],['Cash at the beginning of the period','30 000'],['<b>Cash at the end of the period</b>','98 000']],[1])}
<p>The postponed rent and the credit sale move no cash: they are not in the statement.</p>

<h3>4. Indirect method, step by step</h3>
<ol><li>Opening cash balance.</li><li>Operating cash flow: start from <b>net income</b> and adjust it.</li><li>Investing cash flow.</li><li>Financing cash flow.</li><li>Closing cash = opening cash + the three flows.</li></ol>
<p>Net income follows the accrual principle, so it is adjusted for:</p>
<ul>
<li><b>Items with no cash effect</b>, added back: depreciation and amortisation, impairment expenses, changes in provisions (e.g. bad debt expense).</li>
<li><b>Changes in working capital</b> = current assets (A/R, inventory) − current liabilities (A/P, unearned revenue, other payables). They affect operating cash but are not in the income statement.</li>
<li><b>Non-operating items</b> in net income: gains or losses on the sale of assets or investments (the cash received goes to investing).</li>
</ul>
${T(['Account','Increase','Decrease'],[['Assets (A/R, inventory, …)','Cash outflow (−)','Cash inflow (+)'],['Liabilities (A/P, unearned revenue, other payables)','Cash inflow (+)','Cash outflow (−)']])}
${F('Operating cash flow = Net income\n  + depreciation, amortisation, impairment, bad debt expense\n  − gains on sale + losses on sale\n  − increase in operating assets + decrease in operating assets\n  + increase in operating liabilities − decrease in operating liabilities')}
${EX('ABC Company, 2021 (Topic 7)','worked example',`<p>Net income 15 000; PPE depreciation 350; A/R up by 150; a new salaries payable account of 200; new equipment bought for 1 200 cash; old equipment sold for 500 cash; 250 of long-term debt reimbursed; dividends of 750; opening cash 20 000.</p>
${T(['Line','Amount'],[['Net income','15 000'],['PPE depreciation','350'],['Increase in A/R','(150)'],['Increase in salaries payable','200'],['<b>Operating cash flow</b>','15 400'],['Proceeds from sale of tangible assets','500'],['Purchase of equipment','(1 200)'],['<b>Investing cash flow</b>','(700)'],['Reimbursement of long-term debt','(250)'],['Dividends distribution','(750)'],['<b>Financing cash flow</b>','(1 000)'],['Net increase in cash','13 700'],['Cash at the beginning','20 000'],['<b>Cash at the end</b>','33 700']],[1])}`)}
${EX('Alpha Company, 2023, indirect method','worked example',`<p>Same Alpha data, plus: net income 19 000; depreciation 8 000; amortisation 2 000; A/R +15 000; inventory +4 000; A/P −2 000; rent payable +10 000 (the postponed rent); income taxes payable +1 000. The land was sold at book value (no gain or loss).</p>
${F('19 000 + 8 000 + 2 000 − 15 000 − 4 000 − 2 000 + 10 000 + 1 000 = 19 000')}
<p>The operating cash flow is the same as with the direct method (19 000); investing (50 000) and financing (−1 000) do not change, so cash still goes from 30 000 to 98 000.</p>`)}
${TRAP('With the indirect method, cash sales, payments to suppliers or interest paid do not appear line by line: they are already inside net income and the working-capital changes.')}

<h3>5. Extra exercises</h3>
${EX('Edison Corporation, 2017 (Topic 7 extra exercise 1)','exercise',`<p>Income statement 2017: sales 3 450, COGS 2 350, selling and administrative expenses 465, gain on sale of investments 40, income tax 270, <b>net income 405</b>. A dividend of 130 was declared and paid. Plant assets were bought by issuing common stock for 35.</p>
${T(['Balance sheet','2017','2016'],[['Cash and cash equivalents','900','575'],['Accounts receivable','875','650'],['Inventory','800','950'],['Plant assets','950','850'],['Accumulated depreciation','(600)','(585)'],['Long-term investments','650','710'],['<b>Total</b>','3 575','3 150'],['Accounts payable','600','450'],['Accrued liabilities','100','125'],['Bonds payable','700','775'],['Capital stock','950','850'],['Retained earnings','1 225','950'],['<b>Total</b>','3 575','3 150']],[1,2])}
${F('Depreciation = 600 − 585 = 15\nCash from sale of investments = cost sold (710 − 650) + gain 40 = 100\nPlant assets bought for cash = (950 − 850) − 35 = 65\nShares issued for cash = (950 − 850) − 35 = 65')}
${T(['Statement of cash flows 2017','Amount'],[['Net income','405'],['+ Depreciation expense','15'],['+ Decrease in inventory','150'],['+ Increase in accounts payable','150'],['− Increase in accounts receivable','(225)'],['− Decrease in accrued liabilities','(25)'],['− Gain on sale of investments','(40)'],['<b>Net cash provided by operating activities</b>','430'],['Proceeds from sale of investments','100'],['Purchase of plant assets','(65)'],['<b>Net cash provided by investing activities</b>','35'],['Issuance of capital stock','65'],['Retirement of bonds payable','(75)'],['Payment of cash dividends','(130)'],['<b>Net cash used by financing activities</b>','(140)'],['Net increase in cash','325'],['Cash on 1 January 2017','575'],['<b>Cash on 31 December 2017</b>','900']],[1])}
<p>Supplementary schedule (non-cash investing and financing activities): issuance of common stock for plant assets, 35. It does not appear in the three sections.</p>`)}
${EX('RESPIR, 2020 (Topic 7 extra exercise 2)','exercise',`${T(['Balance sheet on 31 Dec (€)','2020','2019'],[['Tangible assets','125 977','100 000'],['Accumulated depreciation of tangible assets','(36 791)','(25 520)'],['Long-term investments','10 510','12 000'],['Inventories','657','1 113'],['A/R','12 624','12 972'],['Cash','6 605','2 885'],['<b>Total</b>','119 582','103 450'],['Share capital','71 389','50 000'],['Retained earnings','7 245','7 245'],['Net income','10 246','14 500'],['Long-term debt','28 215','23 500'],['A/P','2 487','3 186'],['Salaries payable','0','5 019'],['<b>Total</b>','119 582','103 450']],[1,2])}
<p>2020: the change in gross fixed assets is a purchase; the change in accumulated depreciation is the year's expense; LT investments with a gross value of 1 490 were sold for 845; capital increase with a cash contribution of 12 000; dividends paid 5 111; new bank loan 6 000; 1 285 of long-term debt repaid; the 5 019 of salaries forgotten in December 2019 were booked by an adjusting entry.</p>
${T(['RESPIR cash flow statement 2020','Amount'],[['Net income','10 246'],['Depreciation expenses','11 271'],['Loss on sale of LT investments (1 490 − 845)','645'],['Change in A/R','348'],['Change in inventories','456'],['Change in A/P','(699)'],['Change in salaries payable','(5 019)'],['<b>Operating cash flow</b>','17 248'],['Purchase of tangible assets','(25 977)'],['Proceeds from the sale of investments','845'],['<b>Investing cash flow</b>','(25 132)'],['Increase in capital','12 000'],['New bank loan','6 000'],['LT debt reimbursement','(1 285)'],['Dividends paid','(5 111)'],['<b>Financing cash flow</b>','11 604'],['Net change in cash','3 720'],['Opening cash','2 885'],['<b>Closing cash</b>','6 605']],[1])}
<p>Starting point of the indirect method: net income (10 246). The new bank loan is a financing inflow. The sale of LT investments hits investing (845 received) and operating (the 645 loss is added back).</p>`)}
`;

SHEETS.t8=`
<div class="eyebrow">Topic 8</div><h2>Tutorial session and limitations of financial statements</h2>
<p class="lede">The five key limitations of financial statements, and a full tutorial case: adjusting entries, adjusted trial balance, balance sheet, income statement and cash flow statement.</p>

<h3>1. Limitations of financial statements</h3>
<p>Financial statements are a major source of information for users' economic decisions on the financial health and performance of a business, but some factors limit their usefulness.</p>
${T(['Limitation','What it means'],[['<b>1. Based on historical data</b>','They reflect past transactions and events and show book values; (changes in) market values of assets, liabilities and equity are not always reflected.'],['<b>2. Based on estimates and judgements</b>','Accounting standards (IFRS, US GAAP, French GAAP …) give management flexibility: depreciation method, inventory valuation method, allowance for doubtful debts. This brings subjectivity and potential bias.'],['<b>3. Potential for manipulation</b>','Management can use this flexibility to present performance more favourably: <b>earnings management</b> (e.g. changing the inventory valuation method or the allowance for doubtful accounts). It can mislead investors and regulators.'],['<b>4. Exclusion of non-financial information</b>','Only transactions measured in money are included. Missing: <b>sustainability reporting</b> (environmental, social and governance impact), customer satisfaction, market conditions, reputation …'],['<b>5. Static in nature</b>','A picture at a date or over a period (annual, semi-annual, quarterly), not real-time information; the time lag before publication reduces relevance.']])}
<p><b>Summary:</b> financial statements focus on the financial side of a business and may not give a complete view of its performance; users should complement them with essential non-financial information.</p>

<h3>2. Tutorial: ABC, a consulting company in Antwerp (31 Dec 2023)</h3>
<p>Record the end-of-year adjustments, then set up the adjusted trial balance, the balance sheet at 31 Dec 2023, and the 2023 income statement and cash flow statement.</p>
${T(['Unadjusted trial balance, 31 Dec 2023','Debit','Credit'],[['Cash','46 200',''],['Accounts receivable','5 000',''],['Prepaid insurance','1 800',''],['Office equipment','15 000',''],['Unearned revenue','','18 000'],['Accounts payable','','5 000'],['Bank loan','','20 000'],['Share capital','','15 000'],['Retained earnings','','10 000'],['<b>Total</b>','68 000','68 000']],[1,2])}
<ol>
<li>1 500 of December employee work, to be paid in January 2024.</li>
<li>5 000 of consulting services provided in December; the client postponed the payment.</li>
<li>Insurance of 1 800 bought on 1 Dec 2023 for six months.</li>
<li>One month earned of a 6 000 advance received on 1 Dec 2023 for a four-month service contract.</li>
<li>Equipment of 15 000 bought on 1 Jan 2023 in cash; 10 years; no salvage value; straight-line.</li>
<li>First part of an ads campaign (600) completed; to be paid on 15 Jan 2024.</li>
<li>Utility bill of 800 for December, not yet paid.</li>
<li>One month of rent revenue earned on a 12 000 advance received on 1 Dec 2023 for six months.</li>
<li>On 31 Dec, 10 000 of principal repaid on the 20 000 loan taken on 1 July 2023 (6% a year, interest due annually), with the accrued interest.</li>
<li>1 000 shares issued at 10 on 31 Dec.</li>
<li>An account payable of 5 000 converted into a formal note payable.</li>
</ol>
<p>Notes: an interim dividend of 500 is declared and paid on 31 Dec (no other dividend on this year's income); cash on 31 Dec 2022 was 25 000; tax rate 0%; expense accounts are not in the unadjusted trial balance.</p>
${NOTE('<b>No official solution:</b> the course platform only has the students’ template for this tutorial. The solution below is computed with the course rules (Topics 4–7) and is therefore <b>Outside the slides</b>. Check it with your professor, especially the account names and the note payable in the cash flow statement.')}
${EX('Solution: entries (computed, not official)','solution',`${J([['31/12/2023','Salary expense','E+',1500,''],['','Salary payable','L+','',1500],['31/12/2023','Accounts receivable','A+',5000,''],['','Service revenue','R+','',5000],['31/12/2023','Insurance expense','E+',300,''],['','Prepaid insurance','A−','',300],['31/12/2023','Unearned revenue','L−',1500,''],['','Service revenue','R+','',1500],['31/12/2023','Depreciation expense','E+',1500,''],['','Accumulated depreciation','XA+','',1500],['31/12/2023','Advertising expense','E+',600,''],['','Accounts payable','L+','',600],['31/12/2023','Utility expense','E+',800,''],['','Accounts payable','L+','',800],['31/12/2023','Unearned revenue','L−',2000,''],['','Rent revenue','R+','',2000],['31/12/2023','Interest expense','E+',600,''],['','Bank loan','L−',10000,''],['','Cash','A−','',10600],['31/12/2023','Cash','A+',10000,''],['','Share capital','SE+','',10000],['31/12/2023','Accounts payable','L−',5000,''],['','Notes payable','L+','',5000],['31/12/2023','Net income of the year','SE−',500,''],['','Dividend payable','L+','',500],['31/12/2023','Dividend payable','L−',500,''],['','Cash','A−','',500]])}
${F('3. 1 800 × 1/6 = 300     4. 6 000 / 4 = 1 500     5. 15 000 / 10 = 1 500\n8. 12 000 / 6 = 2 000     9. interest = 20 000 × 6% × 6/12 = 600\n10. no par value is given: the whole 10 000 goes to share capital')}`)}
${EX('Solution: adjusted trial balance (computed, not official)','solution',`${T(['Account','Debit','Credit'],[['Cash','45 100',''],['Accounts receivable','10 000',''],['Prepaid insurance','1 500',''],['Office equipment','15 000',''],['Accumulated depreciation','','1 500'],['Unearned revenue','','14 500'],['Accounts payable','','1 400'],['Salary payable','','1 500'],['Notes payable','','5 000'],['Bank loan','','10 000'],['Share capital','','25 000'],['Retained earnings','','10 000'],['Net income of the year (interim dividend)','500',''],['Service revenue','','6 500'],['Rent revenue','','2 000'],['Salary expense','1 500',''],['Insurance expense','300',''],['Depreciation expense','1 500',''],['Advertising expense','600',''],['Utility expense','800',''],['Interest expense','600',''],['<b>Total</b>','77 400','77 400']],[1,2])}
${F('Cash = 46 200 − 10 600 + 10 000 − 500 = 45 100')}`)}
${EX('Solution: income statement and balance sheet (computed, not official)','solution',`<div class="grid2"><div class="panel"><h4>Income statement 2023</h4>${T(['Line','Amount'],[['Service revenue','6 500'],['Rent revenue','2 000'],['Salary expense','(1 500)'],['Insurance expense','(300)'],['Depreciation expense','(1 500)'],['Advertising expense','(600)'],['Utility expense','(800)'],['Interest expense','(600)'],['Income tax (0%)','0'],['<b>Net income</b>','3 200']],[1])}</div>
<div class="panel"><h4>Balance sheet, 31/12/2023</h4>${T(['Assets','Amount'],[['Office equipment','15 000'],['Accumulated depreciation','(1 500)'],['Prepaid insurance','1 500'],['Accounts receivable','10 000'],['Cash','45 100'],['<b>Total assets</b>','70 100']],[1])}${T(['Equity and liabilities','Amount'],[['Share capital','25 000'],['Retained earnings','10 000'],['Net income of 2023 (3 200 − interim dividend 500)','2 700'],['Bank loan','10 000'],['Notes payable','5 000'],['Unearned revenue','14 500'],['Salary payable','1 500'],['Accounts payable','1 400'],['<b>Total</b>','70 100']],[1])}</div></div>`)}
${EX('Solution: cash flow statement, indirect method (computed, not official)','solution',`<p>The 2022 balance sheet is not given. The cash movements show that A/R (5 000) and A/P (5 000) already existed at the start of 2023: 25 000 + 20 000 (loan) − 15 000 (equipment) − 1 800 (insurance) + 18 000 (advances) = 46 200, the cash in the unadjusted trial balance.</p>
${T(['Cash flow statement 2023','Amount'],[['Net income','3 200'],['Depreciation expense','1 500'],['Increase in A/R','(5 000)'],['Increase in prepaid insurance','(1 500)'],['Increase in unearned revenue','14 500'],['Increase in salary payable','1 500'],['Increase in accounts payable (ads 600 + utilities 800)','1 400'],['<b>Operating cash flow</b>','15 600'],['Purchase of office equipment','(15 000)'],['<b>Investing cash flow</b>','(15 000)'],['New bank loan','20 000'],['Loan reimbursement','(10 000)'],['Issuance of shares','10 000'],['Interim dividend paid','(500)'],['<b>Financing cash flow</b>','19 500'],['Net increase in cash','20 100'],['Cash on 31 Dec 2022','25 000'],['<b>Cash on 31 Dec 2023</b>','45 100']],[1])}
<p>Check with the direct method: advances received 18 000 − insurance paid 1 800 − interest paid 600 = 15 600. The A/P converted into a note (5 000) moves no cash: like Edison's shares issued for plant assets, it is a non-cash transaction left out of the three sections.</p>`)}
`;

SHEETS.cheatEnd=`
<div class="eyebrow">One page · End-term</div><h2>Cheat sheet: Topics 5–8</h2>
<p class="lede">Every formula, adjusting entry and cash-flow rule of the end-term topics. The final exam covers Topics 1–8: the Topics 1–4 cheat sheet is just below.</p>
<h3>Formulas</h3>
${T(['What','Formula'],[
['Depreciable cost','Asset cost − Residual value'],
['Straight-line','Depreciable cost / Life;  first year × months in use / 12;  year N+1 × (12 − first-year months) / 12'],
['Double declining-balance rate','100% / Life × 2'],
['Declining-balance expense','Beginning book value × rate (residual not deducted);  final year = Beginning book value − Residual'],
['Impairment of PPE','If NBV > recoverable amount: loss = NBV − recoverable amount'],
['Net A/R','Gross A/R − Allowance for doubtful accounts'],
['Bad debt expense','Required ending allowance − (Opening allowance − Write-offs)'],
['Inventory','Lower of cost and NRV, item by item;  NRV = selling price − costs to complete − costs to sell'],
['Income tax','Income before tax × rate (no tax on a loss)'],
['Share dividend','New shares = shares outstanding × %;  value = new shares × current share price'],
['French legal reserve','5% of annual profit until it equals 10% of share capital;  dividends ≤ 95% of profit'],
['SOCE','Ending equity = opening + new shares − buybacks + net income − dividends'],
['Closing cash','Opening cash + operating + investing + financing'],
['Indirect operating cash flow','NI + non-cash expenses − gains + losses − ↑assets + ↓assets + ↑liabilities − ↓liabilities']])}
<h3>Adjusting and appropriation entries</h3>
${T(['Event','Debit','Credit'],[
['Unearned revenue earned','Unearned revenue','Revenue'],
['Prepaid expense consumed','Expense (e.g. insurance, rent)','Prepaid …'],
['Supplies used','Supplies expense','Supplies'],
['Depreciation','Depreciation expense','Accumulated depreciation'],
['Impairment of PPE','Impairment expense','Impairment of PPE'],
['Doubtful receivables (year-end)','Bad debt expense','Allowance for doubtful accounts'],
['Customer bankrupt (write-off)','Allowance for doubtful accounts','A/R'],
['Inventory below cost','Loss on inventory write-down','Allowance for inventory losses'],
['Salaries owed (from the exercises)','Salary expense','Salary payable'],
['Revenue earned, not yet billed (from the exercises)','A/R','Revenue'],
['Income tax','Income tax expense','Income tax payable'],
['Income tax paid','Income tax payable','Cash'],
['Interim dividend declared','Net income of the year','Dividend payable'],
['Dividend paid','Dividend payable','Cash'],
['Share dividend (course convention)','Net income of the year','Share capital']])}
<h3>Cash flow statement</h3>
${T(['Item','Where'],[['Interest and dividends received; interest paid','Operating (IFRS allows another category)'],['Purchase or sale of PPE and investments','Investing (gain/loss adjusted in operating)'],['Shares issued, buybacks, dividends paid, loans received or repaid','Financing'],['Depreciation, impairment, bad debt expense','Added back in operating (no cash)'],['Shares issued for PPE, A/P turned into a note','Not in the statement (non-cash)']])}
<h3>Answer checklist</h3>
<ol>
<li>Adjustment: which balance sheet account and which income statement account? (one of each)</li>
<li>Time: how many months are consumed or earned? Partial year: months in use / 12.</li>
<li>Depreciation: straight-line or declining-balance? Final year of declining-balance: stop at the residual value.</li>
<li>Impairment: compare net book value with the recoverable amount (PPE), the allowance needed (A/R), NRV item by item (inventory).</li>
<li>Income tax on the <b>adjusted</b> pre-tax income; dividends are never expenses.</li>
<li>Cash flow: start from net income, add back non-cash items, adjust working capital, put the cash from disposals in investing, leave non-cash transactions out, check opening + flows = closing.</li>
</ol>
`;

/* ---------- quiz bank ---------- */
// src:'course' = question taken from the course extra exercises (answer as given in the solutions)
const QUIZ=[
// Topic 1 course
{id:'q0',topic:'t1',src:'course',q:'A debit entry to an account',o:['increases shareholders’ equity','increases liabilities','increases assets','both a and c'],a:2,e:'Assets increase on the debit side. Equity and liabilities increase on the credit side.'},
{id:'q1',topic:'t1',src:'course',q:'Which account types normally have a debit balance?',o:['Revenues','Expenses','Liabilities','Both a and b'],a:1,e:'Expenses reduce equity, so they increase with debits. Revenues and liabilities have credit balances.'},
{id:'q2',topic:'t1',src:'course',q:'An attorney performs services of $800 and receives $200 cash, the rest on account. The entry would',o:['debit Cash, credit Service Revenue','debit Cash, debit Accounts Receivable, credit Service Revenue','debit Cash, debit Service Revenue, credit Accounts Receivable','debit Cash, credit Accounts Receivable, credit Service Revenue'],a:1,e:'Dr Cash 200, Dr A/R 600 / Cr Service revenue 800. Revenue is earned in full when the service is performed.'},
{id:'q3',topic:'t1',src:'course',q:'Accounts Payable had a normal beginning balance of $1,700. Debit postings $200, credit postings $700. Ending balance?',o:['$2,200 credit','$2,200 debit','$1,000 debit','$1,000 credit'],a:0,e:'A/P is a liability (credit balance): 1 700 − 200 + 700 = 2 200 credit.'},
{id:'q4',topic:'t1',src:'course',q:'The list of all accounts with their balances is the',o:['Balance Sheet','chart of accounts','trial balance','journal'],a:2,e:'The chart of accounts lists account names only; the trial balance lists them with balances.'},
{id:'q5',topic:'t1',src:'course',q:'The basic summary device of business transactions is the',o:['journal','ledger','trial balance','account'],a:3,e:'The account summarises the increases and decreases of one item.'},
{id:'q6',topic:'t1',src:'course',q:'Beginning cash $8,000, ending cash $12,000, cash paid out $24,000. Cash receipts were',o:['$32,000','$28,000','$44,000','$36,000'],a:1,e:'12 000 = 8 000 + R − 24 000 → R = 28 000.'},
{id:'q7',topic:'t1',src:'course',q:'In a double-entry accounting system',o:['a debit entry is recorded on the left side of a T-account','liabilities, owners’ equity and revenue accounts all have normal debit balances','half of all accounts have a credit balance and half a debit balance','both a and c are correct'],a:0,e:'Debit = left. There is no rule that half the accounts are debit and half credit.'},
{id:'q8',topic:'t1',src:'course',q:'Which accounts appear on which statement? (Balance sheet | Income statement)',o:['Cash, receivables, payables | Revenues, expenses','Receivables, land, payables | Revenues, supplies','Cash, revenues, land | Expenses, payables','Expenses, payables, cash | Revenues, receivables, land'],a:0,e:'Supplies, land, receivables and payables are balance sheet items; only revenues and expenses go to the income statement.'},
{id:'q9',topic:'t1',src:'course',q:'A doctor buys medical supplies of $740, pays $320 cash, the rest on account. The entry is',o:['Debit Supplies / Credit Accounts Payable / Credit Cash','Debit Supplies / Debit Accounts Payable / Credit Cash','Debit Supplies / Credit Accounts Receivable / Credit Cash','Debit Supplies / Debit Cash / Credit Accounts Payable'],a:0,e:'Dr Supplies 740 / Cr Cash 320 / Cr A/P 420.'},
{id:'q10',topic:'t1',src:'course',q:'Correct sequence for recording transactions and preparing financial statements?',o:['Journal, ledger, trial balance, financial statements','Ledger, journal, trial balance, financial statements','Ledger, trial balance, journal, financial statements','Financial statements, trial balance, ledger, journal'],a:0,e:'The journal is the book of original entry; entries are then posted to the ledger.'},
// Topic 1 extra
{id:'q11',topic:'t1',src:'practice',q:'The main shareholder buys a car for personal use with his own money. The company should',o:['Debit PPE, credit Share capital','Debit PPE, credit Cash','Record nothing','Debit Dividends, credit Cash'],a:2,e:'Entity concept: it is not a transaction of the business (RedLotus transaction 8).'},
{id:'q12',topic:'t1',src:'practice',q:'A customer pays €5 000 owed for last month’s services. Effect on total assets and on net income?',o:['Assets +5 000; NI +5 000','Assets unchanged; NI unchanged','Assets +5 000; NI unchanged','Assets unchanged; NI +5 000'],a:1,e:'Dr Cash / Cr A/R: one asset replaces another. Revenue was already recognised last month.'},
{id:'q13',topic:'t1',src:'practice',q:'What is the normal balance of Accumulated depreciation?',o:['Debit, because it is an asset','Credit, because it is a contra-asset','Debit, because it is an expense','Credit, because it is a liability'],a:1,e:'It is a contra-asset (XA): it reduces PPE and has a credit balance.'},
{id:'q14',topic:'t1',src:'practice',q:'Schubert: opening RM 80, opening FG 120, RM purchases 520, ending RM 130, ending FG 140, labour 0. COGS?',o:['470','520','450','490'],a:2,e:'0 + (80 + 120) + 520 − (130 + 140) = 450.'},
{id:'q15',topic:'t1',src:'practice',q:'Which activity is a financing activity?',o:['Paying suppliers','Buying a machine','Repaying a bank loan','Selling goods'],a:2,e:'Financing = transactions with capital providers (shares, loans). Buying a machine is investing; suppliers and sales are operating.'},
// Topic 2 course
{id:'q16',topic:'t2',src:'course',q:'Which statement is true?',o:['The invoice is the purchaser’s request for collection from the customer','A service company purchases products from suppliers and then sells them','Gross profit is the excess of sales revenue over cost of goods sold','The Sales account is used to record only sales on account'],a:2,e:'Gross profit = Sales − COGS. Service companies have no inventory.'},
{id:'q17',topic:'t2',src:'course',q:'Sales discounts should appear in the financial statements',o:['as an addition to inventory','as a deduction from sales','among the current liabilities','as an addition to sales','as an operating expense'],a:1,e:'Sales discounts reduce sales (net sales).'},
{id:'q18',topic:'t2',src:'course',q:'How is inventory classified in the financial statements?',o:['As a liability','As a contra account to COGS','As an expense','As an asset','As a revenue'],a:3,e:'Inventory is a current asset until sold; it becomes COGS (expense) when sold.'},
{id:'q19',topic:'t2',src:'course',q:'Dana (FIFO): BI 15 @ $6; Apr 25 buys 40 @ $7; Nov 13 buys 10 @ $9; sells 40 units. COGS?',o:['$300','$283','$265','$195'],a:2,e:'15 × 6 + 25 × 7 = 90 + 175 = 265.'},
{id:'q20',topic:'t2',src:'course',q:'With rising prices, which method gives the highest net income and asset value?',o:['LIFO','FIFO','specific identification','average cost'],a:1,e:'FIFO sends the oldest (cheapest) costs to COGS and keeps the latest (highest) costs in inventory.'},
{id:'q21',topic:'t2',src:'course',q:'Which statement is true?',o:['The method that best matches current expense with current revenue is FIFO','With rising prices, FIFO gives the lowest ending inventory','Overstating 2010 ending inventory understates 2010 net income','The inventory valuation rule may result in an inventory value lower than cost'],a:3,e:'(a) FIFO matches old costs; (b) FIFO gives the highest EI; (c) overstated EI → understated COGS → overstated NI.'},
{id:'q22',topic:'t2',src:'course',q:'Ending inventory $75,000; beginning $86,000; goods available $127,000. COGS?',o:['$41,000','$52,000','$86,000','$138,000','none of the above'],a:1,e:'Goods available − EI = 127 000 − 75 000 = 52 000.'},
{id:'q23',topic:'t2',src:'course',q:'COGS $148,000; beginning inventory $16,000; ending $28,000. Purchases?',o:['$136,000','$160,000','$164,000','$176,000','$192,000'],a:1,e:'P = 148 000 − 16 000 + 28 000 = 160 000.'},
{id:'q24',topic:'t2',src:'course',q:'Highway: BI $28,000, EI $35,000, purchases $93,000, returns & allowances $7,000, freight-in $3,000. COGS?',o:['$96,000','$98,000','$82,000','$81,000','none of the above'],a:2,e:'Net purchases 89 000; 28 000 + 89 000 − 35 000 = 82 000.'},
{id:'q25',topic:'t2',src:'course',q:'Highway: net sales $184,000, COGS $82,000. Gross profit % (rounded)?',o:['50%','55%','45%','None of the above'],a:1,e:'(184 000 − 82 000) / 184 000 = 55.4% ≈ 55%.'},
// Topic 2 practice
{id:'q26',topic:'t2',src:'practice',q:'On 5 April a customer pays €10 000 in advance for products delivered in May. Effect on April net income?',o:['+10 000','0','−10 000','+10 000 only if the products are in stock'],a:1,e:'Dr Cash / Cr Unearned revenues (liability). Revenue is recognised on delivery in May.'},
{id:'q27',topic:'t2',src:'practice',q:'Is the cash basis of accounting allowed under IFRS?',o:['Yes, for small companies','Yes, if disclosed','No','Only for services'],a:2,e:'The course states the cash basis is not allowed under IFRS.'},
{id:'q28',topic:'t2',src:'practice',q:'A store sells goods for €50 000 plus 20% VAT, paid in cash. Revenue recognised?',o:['€60 000','€50 000','€40 000','€10 000'],a:1,e:'Dr Cash 60 000 / Cr Revenue 50 000 / Cr VAT payable 10 000. VAT is a liability.'},
{id:'q29',topic:'t2',src:'practice',q:'Purchases €50 000, freight-in €1 000, returns €3 000, allowances €500, early-payment discounts €1 000. Net purchases?',o:['€46 500','€48 500','€47 500','€45 500'],a:0,e:'50 000 + 1 000 − 3 000 − 500 − 1 000 = 46 500.'},
{id:'q30',topic:'t2',src:'practice',q:'FIFO: BI 20 @ €5; buy 30 @ €6; sell 40. Ending inventory?',o:['€50','€60','€220','€55'],a:1,e:'COGS = 20 × 5 + 20 × 6 = 220; 10 units left at the latest cost €6 = 60.'},
{id:'q31',topic:'t2',src:'practice',q:'Company A holds goods on consignment for Company B (A sells them for a commission). Whose inventory are they?',o:['A’s (consignee)','B’s (consignor)','Both, 50/50','Neither until sold'],a:1,e:'The consignor keeps ownership until the goods are sold.'},
{id:'q32',topic:'t2',src:'practice',q:'In April a company pays €4 500 for an ad campaign that runs in May. The April entry is',o:['Dr Advertising expense / Cr Cash','Dr Prepaid expenses / Cr Cash','Dr Cash / Cr Unearned revenue','Dr Advertising expense / Cr A/P'],a:1,e:'The service is not yet received: prepaid expense (asset). It becomes an expense in May.'},
{id:'q33',topic:'t2',src:'practice',q:'Wages of €3 000 earned in June are paid on 5 July. In which month is the expense recognised?',o:['June','July','Half in each','When the payslip is issued'],a:0,e:'Accrual basis: expense when the service is received (June). June: Dr Wages expense / Cr Salaries payable.'},
// Topic 3 course
{id:'q34',topic:'t3',src:'course',q:'Which statement is false?',o:['Depreciation is based on the matching principle','Depreciation allocates the cost of PPE over its useful life','Depreciation creates a fund to replace the asset at the end of its useful life','Cost of PPE minus accumulated depreciation equals book value'],a:2,e:'Depreciation is a cost allocation; it sets no cash aside.'},
{id:'q35',topic:'t3',src:'course',q:'Equipment bought 1 July 20X6 for $65,000, life 10 years, residual $5,000. 20X6 straight-line depreciation?',o:['$3,000','$6,000','$3,250','$6,500'],a:0,e:'(65 000 − 5 000)/10 = 6 000 per year × 6/12 = 3 000.'},
{id:'q36',topic:'t3',src:'course',q:'Same equipment bought 1 January 20X6. Book value at end of 20X7?',o:['$54,000','$59,000','$48,000','$53,000'],a:3,e:'65 000 − 2 × 6 000 = 53 000.'},
{id:'q37',topic:'t3',src:'course',q:'Bought 1 July 20X5, sold 1 July 20X9 for $44,500 (straight-line, $6,000/yr). Gain (loss)?',o:['$3,500','$8,500','$(15,500)','$0'],a:0,e:'4 years × 6 000 = 24 000 AD; BV 41 000; 44 500 − 41 000 = 3 500 gain.'},
{id:'q38',topic:'t3',src:'course',q:'Which is not a capital expenditure?',o:['A complete overhaul of an air-conditioning system','Replacement of an old motor with a new one','The cost of installing a piece of equipment','The addition of a building wing','A tune-up of a company vehicle'],a:4,e:'A tune-up is ordinary maintenance: expense.'},
{id:'q39',topic:'t3',src:'course',q:'Which asset is not subject to a decreasing book value through depreciation, depletion or amortisation?',o:['Goodwill','Land improvements','Natural resources','Intangibles'],a:0,e:'Goodwill is tested for impairment, not amortised.'},
{id:'q40',topic:'t3',src:'course',q:'Which item is not an intangible asset?',o:['A copyright','A patent','A trademark','Goodwill','All of the above are intangible assets'],a:4,e:'All four are intangibles.'},
// Topic 3 practice
{id:'q41',topic:'t3',src:'practice',q:'Machine: price €80 000, transport €3 000, installation €2 000, staff training €1 500, VAT €16 000. Cost of the machine?',o:['€86 500','€85 000','€101 000','€80 000'],a:1,e:'80 000 + 3 000 + 2 000. Training and VAT are excluded.'},
{id:'q42',topic:'t3',src:'practice',q:'An annual oil change on a delivery truck should be',o:['Capitalised to PPE','Expensed','Recorded as a prepaid expense','Added to accumulated depreciation'],a:1,e:'Ordinary maintenance is expensed.'},
{id:'q43',topic:'t3',src:'practice',q:'Asset €50 000, residual €5 000, life 5 years, bought 1 April. Year-1 straight-line depreciation (Dec year-end)?',o:['€9 000','€6 750','€7 500','€10 000'],a:1,e:'45 000 / 5 = 9 000 × 9/12 = 6 750.'},
{id:'q44',topic:'t3',src:'practice',q:'Equipment cost €30 000, accumulated depreciation €22 000, sold for €10 000. Result?',o:['Gain €2 000','Loss €2 000','Gain €10 000','Loss €20 000'],a:0,e:'BV 8 000; 10 000 − 8 000 = 2 000 gain.'},
{id:'q45',topic:'t3',src:'practice',q:'A company estimates its internally created brand is worth €2m. Accounting treatment?',o:['Recognise an intangible asset of €2m','Recognise goodwill of €2m','Do not recognise it','Recognise it and amortise over 10 years'],a:2,e:'Internally generated intangibles (and goodwill) are not recognised: value is not reliable.'},
{id:'q46',topic:'t3',src:'practice',q:'A buys B for €15m. Fair value of B’s assets €20m, liabilities €8m. Goodwill?',o:['€5m','€3m','€7m','€0'],a:1,e:'Net assets 12m; 15 − 12 = 3m.'},
{id:'q47',topic:'t3',src:'practice',q:'Patent €600 000 amortised over 10 years. After 4 years total life is revised to 6 years. Year-5 amortisation?',o:['€60 000','€100 000','€180 000','€120 000'],a:2,e:'BV = 600 000 − 240 000 = 360 000 over the remaining 2 years = 180 000.'},
{id:'q48',topic:'t3',src:'practice',q:'Truck €41 000, residual €1 000, 4 years. End of year 2: €7 000 engine extends total life to 5 years. Year-3 depreciation?',o:['€10 000','€9 000','€12 000','€8 000'],a:1,e:'BV 21 000 + 7 000 = 28 000; (28 000 − 1 000)/3 = 9 000.'},
{id:'q49',topic:'t3',src:'practice',q:'An investor holds 35% of the voting shares and has significant influence. The investee is usually',o:['A subsidiary','An associate','A trading financial asset','A held-to-maturity asset'],a:1,e:'20–50% with significant influence = associate (not a strict rule). >50% = subsidiary.'},
// Topic 4 practice
{id:'q50',topic:'t4',src:'practice',q:'Non-listed firm: total equity €500 000, 25 000 shares. It wants to raise €100 000. How many new shares?',o:['4 000','5 000','10 000','2 500'],a:1,e:'Price = 500 000 / 25 000 = 20; 100 000 / 20 = 5 000.'},
{id:'q51',topic:'t4',src:'practice',q:'Same firm: share capital €250 000 (25 000 shares). French practice: share premium on the issue of 5 000 shares at €20?',o:['€100 000','€50 000','€0','€25 000'],a:1,e:'Par = 10; premium = (20 − 10) × 5 000 = 50 000; share capital +50 000.'},
{id:'q52',topic:'t4',src:'practice',q:'Under the Anglo-Saxon practice (no par value), the issue of 5 000 shares at €20 is recorded as',o:['Share capital 50 000, share premium 50 000','Share capital 100 000','Share premium 100 000','Revenue 100 000'],a:1,e:'All proceeds go to share capital.'},
{id:'q53',topic:'t4',src:'practice',q:'Dividends are',o:['An operating expense','A financial expense','A reduction of equity, not an expense','A liability from the end of the financial year'],a:2,e:'Dividends reduce equity. The liability (dividends payable) appears at the declaration date.'},
{id:'q54',topic:'t4',src:'practice',q:'Which equity item can be used to pay dividends?',o:['Share capital','Share premium','Legal reserves','Retained earnings'],a:3,e:'Only retained earnings or the past year’s net income.'},
{id:'q55',topic:'t4',src:'practice',q:'Shareholder X sells 1 000 shares to investor Y on the stock exchange. The company records',o:['Dr Cash / Cr Share capital','Dr Treasury shares / Cr Cash','Nothing','Dr Share capital / Cr Cash'],a:2,e:'A sale between shareholders does not affect the company.'},
{id:'q56',topic:'t4',src:'practice',q:'How are treasury shares presented?',o:['As a current asset','As a financial asset','As a negative amount in equity','As a liability'],a:2,e:'Dr Treasury shares (SE−) / Cr Cash.'},
{id:'q57',topic:'t4',src:'practice',q:'A €60 000 note at 8% a year. Interest for one month?',o:['€480','€400','€4 800','€500'],a:1,e:'60 000 × 8% × 1/12 = 400.'},
{id:'q58',topic:'t4',src:'practice',q:'Loan €100 000 at 6%, constant monthly annuity €1 110.21. Principal repaid in the first instalment?',o:['€1 110.21','€500.00','€610.21','€6 000.00'],a:2,e:'Interest = 100 000 × 6%/12 = 500; principal = 1 110.21 − 500 = 610.21.'},
{id:'q59',topic:'t4',src:'practice',q:'Loan €120 000 at 5%, €40 000 principal repaid each 31 Dec for 3 years. Short-term portion recorded at inception?',o:['€0','€40 000','€120 000','€6 000'],a:1,e:'Current portion = principal due within the year; LT 80 000, ST 40 000.'},
{id:'q60',topic:'t4',src:'practice',q:'Why does debt "help save taxes" compared with equity?',o:['Loans are not taxed','Interest is an expense that reduces taxable profit, unlike dividends','Repayment of principal is deductible','Debt reduces VAT'],a:1,e:'Interest is deductible; dividends are a distribution of profit.'},
{id:'q61',topic:'t4',src:'practice',q:'A company buys back its own shares. Which is NOT a reason given in the course?',o:['Increase EPS','Eliminate hostile shareholders','Signal under-pricing','Increase share capital'],a:3,e:'A buyback reduces equity; it never increases share capital.'},
{id:'q62',topic:'t4',src:'practice',q:'Listed firm: average December price €40, issue at a 10% discount, need €3 600 000. Shares to issue?',o:['90 000','100 000','81 000','110 000'],a:1,e:'Price = 40 × 0.9 = 36; 3 600 000 / 36 = 100 000.'},
{id:'q63',topic:'t4',src:'practice',q:'Main disadvantage of new capital for existing shareholders who do not subscribe?',o:['Interest payments','Dilution of their ownership','Debt covenants','Lower tax savings'],a:1,e:'Their share of ownership and control is diluted.'},
// Topic 5 (course = exercise or example of the slides, official answer; the wrong options were written for this site)
{id:'q64',topic:'t5',src:'course',q:'Winchester buys a machine on 1 Sep 2017 for 120 000 (residual value 12 000, life 4 years). Straight-line depreciation for 2017?',o:['9 000','27 000','10 000','36 000'],a:0,e:'(120 000 − 12 000) / 4 = 27 000 a year; 27 000 × 4/12 = 9 000 for September–December.'},
{id:'q65',topic:'t5',src:'course',q:'Same machine bought on 1 Jan 2017, double declining-balance. Depreciation for 2018?',o:['30 000','27 000','60 000','15 000'],a:0,e:'Rate = 100% / 4 × 2 = 50%. 2017: 120 000 × 50% = 60 000; 2018: 60 000 × 50% = 30 000.'},
{id:'q66',topic:'t5',src:'course',q:'Same declining-balance table: depreciation in the final year (2020), when the beginning book value is 15 000?',o:['7 500','3 000','15 000','0'],a:1,e:'In the final year the book value must end at the residual value: 15 000 − 12 000 = 3 000.'},
{id:'q67',topic:'t5',src:'course',q:'Alpha buys PPE on 1 Jan 2023 for 120 000 (20 years, salvage value 20 000, straight-line). Recoverable amount on 31 Dec 2023: 105 000. Impairment to record?',o:['None','10 000','15 000','5 000'],a:1,e:'Depreciation 5 000; net book value 115 000 > 105 000 → impairment 10 000.'},
{id:'q68',topic:'t5',src:'course',q:'GadgetGalaxy: PPE cost 22 000, accumulated depreciation 2 000, recoverable amount 14 700. Entry?',o:['Dr Impairment expense 5 300 / Cr Impairment of PPE 5 300','Dr Impairment of PPE 5 300 / Cr PPE 5 300','Dr Depreciation expense 7 300 / Cr Accumulated depreciation 7 300','No entry: the recoverable amount is positive'],a:0,e:'Net book value 20 000 − 14 700 = 5 300. Impairment of PPE is a contra-asset (XA+).'},
{id:'q69',topic:'t5',src:'course',q:'Unicorn: allowance for doubtful accounts 7 500 at the start of 2024; a 6 000 receivable is written off; the allowance must be 2 000 at year-end. Bad debt expense for 2024?',o:['2 000','500','8 000','6 500'],a:1,e:'7 500 − 6 000 = 1 500 left; 2 000 needed → 500.'},
{id:'q70',topic:'t5',src:'course',q:'Berta: allowance 2 500 at the start of 2023; a 1 000 customer goes bankrupt; at year-end 1 800 is doubtful. Bad debt expense for 2023?',o:['1 800','300','800','1 300'],a:1,e:'2 500 − 1 000 = 1 500; 1 800 needed → 300.'},
{id:'q71',topic:'t5',src:'course',q:'Inventory items (cost / NRV): 600 / 500, 1 100 / 1 200, 700 / 600, 500 / 300. Amount reported in the balance sheet?',o:['2 900','2 500','2 600','2 400'],a:1,e:'Item by item: 500 + 1 100 + 600 + 300 = 2 500 (write-down 400). Item 2 stays at cost.'},
{id:'q72',topic:'t5',src:'course',q:'Apollyon buys machinery on 1 April 2020 for €2 000 000 (20 years, salvage €200 000, straight-line). Depreciation for 2020?',o:['90 000','67 500','100 000','75 000'],a:1,e:'(2 000 000 − 200 000) / 20 = 90 000 a year × 9/12 = 67 500.'},
{id:'q73',topic:'t5',src:'course',q:'Same machinery: recoverable amount €1 500 000 on 31 Dec 2023. Impairment loss?',o:['162 500','500 000','337 500','0'],a:0,e:'Accumulated depreciation 67 500 + 3 × 90 000 = 337 500; carrying amount 1 662 500 − 1 500 000 = 162 500.'},
{id:'q74',topic:'t5',src:'course',q:'Apollyon: allowance €500 000 at the end of 2022; a client owing €150 000 goes bankrupt in 2023; €600 000 of A/R is doubtful at year-end. Bad debt expense for 2023?',o:['600 000','250 000','450 000','100 000'],a:1,e:'500 000 − 150 000 = 350 000; 600 000 needed → 250 000.'},
{id:'q75',topic:'t5',src:'course',q:'GadgetGalaxy pays a one-year insurance contract of 500 on 30 June. Insurance expense at 31 Dec?',o:['500','250','0','125'],a:1,e:'6 months consumed: 500 × 6/12 = 250 (Dr Insurance expense / Cr Prepaid insurance).'},
{id:'q76',topic:'t5',src:'practice',q:'Double declining-balance rate for an asset with a 5-year life?',o:['20%','40%','50%','25%'],a:1,e:'100% / 5 × 2 = 40%.'},
{id:'q77',topic:'t5',src:'practice',q:'Under the declining-balance method, the rate is applied to',o:['the depreciable cost (cost − residual value)','the book value at the beginning of the year','the original cost every year','the residual value'],a:1,e:'Unlike straight-line, the residual value is not deducted first; it only caps the final year.'},
{id:'q78',topic:'t5',src:'practice',q:'Which asset is not depreciated?',o:['Land improvements (a parking lot)','A building','Land','Equipment'],a:2,e:'All plant assets except land are depreciable; land improvements are depreciable.'},
{id:'q79',topic:'t5',src:'practice',q:'A customer owing 1 000 goes bankrupt; the allowance already covers this amount. Effect of the write-off on net income?',o:['−1 000','0','+1 000','−2 000'],a:1,e:'Dr Allowance / Cr A/R: net A/R and net income do not change. The expense was recognised when the allowance was built.'},
{id:'q80',topic:'t5',src:'practice',q:'Allowance for doubtful accounts is',o:['a liability','a contra-asset shown under A/R','an expense','a revenue'],a:1,e:'Net A/R = gross A/R − allowance. The matching expense is bad debt expense.'},
{id:'q81',topic:'t5',src:'practice',q:'An impairment loss on PPE is recorded when',o:['the net book value is lower than the recoverable amount','the net book value is higher than the recoverable amount','the asset is fully depreciated','the market value rises'],a:1,e:'Impairment loss = net book value − recoverable amount, only if positive.'},
{id:'q82',topic:'t5',src:'practice',q:'Which adjustment categories are stamped "Not discussed in this course" on the Topic 5 slides?',o:['Prepaids and adjustment of assets','Accruals and provisions for risks','Depreciation and impairment','Unearned revenue and prepaid expenses'],a:1,e:'Accrual-type entries still appear in the exercises of Topics 6 and 8 (salaries owed, revenue earned not yet billed, income tax).'},
{id:'q83',topic:'t5',src:'practice',q:'Each adjusting journal entry adjusts',o:['two balance sheet accounts','two income statement accounts','one balance sheet account and one income statement account','cash and one other account'],a:2,e:'For example: Dr Insurance expense (IS) / Cr Prepaid insurance (BS).'},
{id:'q84',topic:'t5',src:'practice',q:'Net realizable value of inventory equals',o:['expected selling price − estimated costs of completion − estimated costs to make the sale','purchase price + freight-in','replacement cost + margin','cost − accumulated depreciation'],a:0,e:'Inventory is reported at the lower of cost and net realizable value.'},
{id:'q85',topic:'t5',src:'practice',q:'An asset bought on 1 October has a straight-line depreciation of 8 000 a year and a 4-year life. Depreciation in the last period (the 5th)?',o:['8 000','2 000','6 000','0'],a:2,e:'First year: 3 months (2 000). Depreciation runs over N + 1 periods; the last one gets the other 9 months: 8 000 × 9/12 = 6 000.'},
// Topic 6
{id:'q86',topic:'t6',src:'course',q:'ABC: income before taxes 125 000, tax rate 25%. Entry on 31 Dec 2023?',o:['Dr Income tax expense 31 250 / Cr Income tax payable 31 250','Dr Income tax payable 31 250 / Cr Cash 31 250','Dr Net income 31 250 / Cr Cash 31 250','Dr Income tax expense 31 250 / Cr Cash 31 250'],a:0,e:'The expense belongs to 2023; it is paid on 28 Feb 2024, so a liability is recorded now.'},
{id:'q87',topic:'t6',src:'course',q:'P&E ltd: revenues 35 000, expenses before tax 26 225, tax rate 25%. Income tax expense (rounded)?',o:['8 775','2 194','8 750','6 581'],a:1,e:'Profit before tax 8 775 × 25% = 2 193.75 ≈ 2 194.'},
{id:'q88',topic:'t6',src:'course',q:'On 19 June the board declares an interim dividend of 15 000. Entry?',o:['Dr Dividend expense 15 000 / Cr Cash 15 000','Dr Net income of the year 15 000 / Cr Dividend payable 15 000','Dr Dividend payable 15 000 / Cr Cash 15 000','No entry until the payment'],a:1,e:'The declaration creates a liability and reduces equity. Dividends are never an expense.'},
{id:'q89',topic:'t6',src:'course',q:'ABC has 100 000 shares (issued at €5, trading at €10) and declares a 15% share dividend. Amount recorded?',o:['75 000','150 000','15 000','1 500 000'],a:1,e:'15 000 new shares × €10 = 150 000: Dr Net income of 2023 / Cr Share capital (course convention).'},
{id:'q90',topic:'t6',src:'course',q:'A shareholder owns 1 000 shares; the company distributes a 10% share dividend. Shares held afterwards?',o:['1 000','1 100','1 010','900'],a:1,e:'1 000 × 10% = 100 new shares → 1 100.'},
{id:'q91',topic:'t6',src:'course',q:'RedLotus: adjusted pre-tax income 3 500, tax rate 25%. Income tax expense?',o:['875','700','2 625','1 750'],a:0,e:'3 500 × 25% = 875; net income 2 625.'},
{id:'q92',topic:'t6',src:'course',q:'RedLotus collected 400 in advance for 10 bookings; 5 are made by 30 June. Adjusting entry?',o:['Dr Unearned service revenue 200 / Cr Service revenue 200','Dr Cash 200 / Cr Service revenue 200','Dr Service revenue 200 / Cr Unearned service revenue 200','Dr Unearned service revenue 400 / Cr Service revenue 400'],a:0,e:'Half of the performance obligation is satisfied: half of the advance becomes revenue.'},
{id:'q93',topic:'t6',src:'course',q:'ABC Corporation: equity 130 000 on 1 Jan 2023; shares issued 50 000 (capital + premium); buyback 15 000; net profit 25 000; interim dividends 12 000. Total equity at 31 Dec 2023?',o:['178 000','190 000','163 000','130 000'],a:0,e:'130 000 + 50 000 − 15 000 + 25 000 − 12 000 = 178 000.'},
{id:'q94',topic:'t6',src:'course',q:'Goldsmith: supplies of 6 000 in the unadjusted trial balance; 2 000 on hand at year-end. Adjustment?',o:['Dr Supplies expense 4 000 / Cr Supplies 4 000','Dr Supplies expense 2 000 / Cr Supplies 2 000','Dr Supplies 4 000 / Cr Supplies expense 4 000','Dr Supplies expense 6 000 / Cr Cash 6 000'],a:0,e:'6 000 − 2 000 = 4 000 used.'},
{id:'q95',topic:'t6',src:'course',q:'Eagle Express prepaid four years of rent (24 000) on 1 Jan 2022. Prepaid rent in the unadjusted trial balance at 31 Dec 2022, and the adjustment?',o:['24 000; Dr Rent expense 6 000 / Cr Prepaid rent 6 000','18 000; no adjustment','24 000; Dr Rent expense 24 000 / Cr Prepaid rent 24 000','6 000; Dr Prepaid rent 6 000 / Cr Rent expense 6 000'],a:0,e:'The adjustment is made only once a year: before it, the full 24 000 is still prepaid; one year = 24 000 / 4.'},
{id:'q96',topic:'t6',src:'practice',q:'Effect of a share dividend on total equity?',o:['Increase','Decrease','No effect','Depends on the share price'],a:2,e:'Share capital goes up and net income of the year (or retained earnings) goes down by the same amount.'},
{id:'q97',topic:'t6',src:'practice',q:'In France, who decides the dividends?',o:['The board of directors','The shareholders at the annual general meeting','The auditors','The tax authority'],a:1,e:'In the Anglo-Saxon world, the board of directors decides.'},
{id:'q98',topic:'t6',src:'practice',q:'Anglo-Saxon world: what can be distributed?',o:['Only the net income of the year','The net income of the year and retained earnings, if their sum is positive','Share capital','Only retained earnings'],a:1,e:'So a dividend is possible even after a loss of the year. In France, only the net income of the year.'},
{id:'q99',topic:'t6',src:'practice',q:'French legal reserve?',o:['5% of annual profit, until the reserve equals 10% of share capital','10% of profit, until the reserve equals 5% of share capital','5% of share capital every year','There is no legal reserve in France'],a:0,e:'While this restriction holds, dividends are at most 95% of annual profit.'},
{id:'q100',topic:'t6',src:'practice',q:'Profit before tax is a loss of 20 000 (tax rate 25%). Corporate income tax?',o:['A 5 000 refund','0','5 000','20 000'],a:1,e:'In the case of losses, no corporate income tax is due.'},
{id:'q101',topic:'t6',src:'practice',q:'Which statement links the income statement and the balance sheet by showing how profit and dividends change equity?',o:['Cash flow statement','Statement of changes in equity','Trial balance','General ledger'],a:1,e:'The SOCE shows share issues, buybacks, net income and dividends between two balance sheets.'},
{id:'q102',topic:'t6',src:'practice',q:'Interim dividends are',o:['paid after year-end on the final accounts','paid during the fiscal year and declared by the board of directors','always paid in shares','an expense of the period'],a:1,e:'They are based on the realized net income since the last year-end. Final dividends are paid after year-end.'},
// Topic 7
{id:'q103',topic:'t7',src:'course',q:'Alpha (direct method): cash sales 20 000; dividends received 12 000; paid to suppliers 5 000, operating charges 7 000, interest 1 000. Operating cash flow?',o:['19 000','32 000','13 000','68 000'],a:0,e:'32 000 received − 13 000 paid = 19 000. The postponed rent and the credit sale move no cash.'},
{id:'q104',topic:'t7',src:'course',q:'Alpha sold land for 250 000 cash and bought equipment for 200 000 cash. Investing cash flow?',o:['+50 000','−200 000','+250 000','−50 000'],a:0,e:'250 000 − 200 000 = 50 000.'},
{id:'q105',topic:'t7',src:'course',q:'Alpha: opening cash 30 000; operating 19 000; investing 50 000; financing −1 000. Closing cash?',o:['98 000','68 000','100 000','38 000'],a:0,e:'Net increase 68 000; 30 000 + 68 000 = 98 000.'},
{id:'q106',topic:'t7',src:'course',q:'ABC: net income 15 000; depreciation 350; A/R up by 150; a new salaries payable of 200. Operating cash flow?',o:['15 400','15 700','14 900','15 000'],a:0,e:'15 000 + 350 − 150 + 200 = 15 400.'},
{id:'q107',topic:'t7',src:'course',q:'Edison: net income 405; depreciation 15; inventory −150; A/P +150; A/R +225; accrued liabilities −25; gain on sale of investments 40. Operating cash flow?',o:['430','510','470','390'],a:0,e:'405 + 15 + 150 + 150 − 225 − 25 − 40 = 430.'},
{id:'q108',topic:'t7',src:'course',q:'Edison: long-term investments fall from 710 to 650; the sale gave a gain of 40. Cash received?',o:['60','100','40','650'],a:1,e:'Cost sold 60 + gain 40 = 100, shown in investing; the gain is subtracted in operating.'},
{id:'q109',topic:'t7',src:'course',q:'Edison paid for plant assets by issuing common stock for 35. In the cash flow statement?',o:['Investing outflow 35 and financing inflow 35','Not in the three sections: a non-cash investing and financing activity, disclosed separately','Operating outflow 35','Financing outflow 35'],a:1,e:'No cash moved; it appears in the supplementary schedule.'},
{id:'q110',topic:'t7',src:'course',q:'RESPIR sold long-term investments with a gross value of 1 490 for 845. Indirect method?',o:['Add back the 645 loss in operating; 845 in investing','Subtract 645 in operating; 1 490 in investing','845 in operating','Nothing in operating; 1 490 in investing'],a:0,e:'The loss is a non-cash, non-operating item in net income; the cash received is an investing inflow.'},
{id:'q111',topic:'t7',src:'course',q:'Classify: impairment expense on accounts receivable.',o:['Operating / cash outflow','Operating / no cash','Investing / no cash','Financing / cash outflow'],a:1,e:'An expense with no cash effect: added back in the indirect method.'},
{id:'q112',topic:'t7',src:'course',q:'Classify: recovery (collection) of accounts receivable.',o:['Operating / cash inflow','Investing / cash inflow','Financing / cash inflow','No cash'],a:0,e:'Cash received from customers is operating.'},
{id:'q113',topic:'t7',src:'practice',q:'Indirect method: an increase in inventory is',o:['added to net income','subtracted from net income','shown in investing','ignored'],a:1,e:'An increase in an asset is a cash outflow.'},
{id:'q114',topic:'t7',src:'practice',q:'Indirect method: an increase in unearned revenue is',o:['a cash inflow (+)','a cash outflow (−)','an investing item','not shown'],a:0,e:'An increase in a liability is a cash inflow (the customer paid before delivery).'},
{id:'q115',topic:'t7',src:'practice',q:'Which method does IFRS encourage?',o:['Indirect','Direct','Neither','Both are forbidden'],a:1,e:'IFRS encourages the direct method and permits the indirect one, which most companies use.'},
{id:'q116',topic:'t7',src:'practice',q:'Repayment of a long-term loan is',o:['an operating outflow','an investing outflow','a financing outflow','not a cash flow'],a:2,e:'Raising or repaying capital (shares, long-term debt) is financing. Interest paid is operating in the course.'},
{id:'q117',topic:'t7',src:'practice',q:'In the course, interest paid to lenders is classified in',o:['financing','operating (alternative categorization possible in IFRS)','investing','no section'],a:1,e:'Same for interest and dividends received.'},
{id:'q118',topic:'t7',src:'practice',q:'The direct and indirect methods differ in',o:['all three sections','the operating section only','the financing section only','the closing cash only'],a:1,e:'Investing and financing sections are identical under both methods.'},
// Topic 8
{id:'q119',topic:'t8',src:'practice',q:'Which is NOT one of the limitations of financial statements listed in the course?',o:['Based on historical data','Static in nature','Audited by an external auditor','Exclusion of non-financial information'],a:2,e:'The five limitations: historical data; estimates and judgements; potential for manipulation; exclusion of non-financial information; static nature.'},
{id:'q120',topic:'t8',src:'practice',q:'Changing the inventory valuation method to present better results is called',o:['earnings management','sustainability reporting','impairment','profit appropriation'],a:0,e:'It exploits the flexibility of estimates and judgements and can mislead investors and regulators.'},
{id:'q121',topic:'t8',src:'practice',q:'Sustainability (ESG) reporting illustrates which limitation?',o:['Static nature','Exclusion of non-financial information','Historical data','Estimates and judgements'],a:1,e:'Other examples: customer satisfaction, market conditions, reputation.'},
{id:'q122',topic:'t8',src:'practice',q:'Why are financial statements "static"?',o:['They show a date or a period, not real-time information, and are published with a time lag','They never change once audited','They use historical cost','They exclude estimates'],a:0,e:'They are prepared annually, semi-annually or quarterly; the time lag reduces relevance.'},
{id:'q123',topic:'t8',src:'practice',q:'The choice of a depreciation method and the allowance for doubtful debts are examples of',o:['estimates and judgements by management','non-financial information','market values','cash flows'],a:0,e:'Standards give management discretion, which brings subjectivity and potential bias.'},
{id:'q124',topic:'t8',src:'practice',q:'Topic 8 tutorial: a 20 000 loan at 6% a year was taken on 1 July; on 31 Dec the company repays 10 000 of principal with the accrued interest. Cash paid?',o:['10 600','11 200','10 000','10 300'],a:0,e:'Interest = 20 000 × 6% × 6/12 = 600. (No official solution for the tutorial: computed with the course rules.)'},
{id:'q125',topic:'t8',src:'practice',q:'Topic 8 tutorial: insurance of 1 800 paid on 1 Dec for six months. Expense at 31 Dec?',o:['300','1 800','1 500','150'],a:0,e:'1 800 × 1/6 = 300; prepaid insurance left 1 500.'},
{id:'q126',topic:'t8',src:'practice',q:'Topic 8 tutorial: 12 000 received on 1 Dec for six months of rent. Rent revenue at 31 Dec?',o:['12 000','2 000','1 000','6 000'],a:1,e:'12 000 / 6 = 2 000 earned; unearned revenue keeps 10 000 of it.'}
];

/* ---------- journal drills (module "journal") ---------- */
// l: lines {a:[accepted names], d:debit} or {a:[…], c:credit}; date: first-line date shown in the solution
const DRILLS=[
{id:'d1',topic:'t1',date:'Jan 2',title:'Founders invest cash',p:'Jan 2: Jack and Jill invest €20 000 of personal savings in J&J Food.',l:[{a:['Cash'],d:20000},{a:['Share capital'],c:20000}]},
{id:'d2',topic:'t1',date:'Jan 31',title:'Bank loan received',p:'Jan 31: J&J Food takes out a 5-year bank loan of €32 000.',l:[{a:['Cash'],d:32000},{a:['Loan payable','Financial loan LT'],c:32000}]},
{id:'d3',topic:'t1',date:'Feb 3',title:'Inventory, part cash',p:'Feb 3: J&J buys drinks and desserts for €2 000, 60% paid cash, rest on credit.',l:[{a:['Inventory'],d:2000},{a:['Cash'],c:1200},{a:['Accounts payable'],c:800}]},
{id:'d4',topic:'t1',date:'Feb 5',title:'Sale, revenue side',p:'Feb 5: J&J sells food for €1 000 (cost €600). 80% paid cash, rest on credit. Record the revenue entry only.',l:[{a:['Cash'],d:800},{a:['Accounts receivable'],d:200},{a:['Revenues'],c:1000}]},
{id:'d5',topic:'t1',date:'Feb 5',title:'Sale, cost side',p:'Same sale (cost €600). Record the cost entry (perpetual system).',l:[{a:['Cost of goods sold'],d:600},{a:['Inventory'],c:600}]},
{id:'d6',topic:'t1',date:'Apr 5',title:'Inventory with shipping',p:'Apr 5: J&J buys inventory for €10 000 payable in 25 days, and pays €300 cash for shipping.',l:[{a:['Inventory'],d:10300},{a:['Cash'],c:300},{a:['Accounts payable'],c:10000}]},
{id:'d7',topic:'t1',title:'Land sold at a gain',p:'RedLotus sells half of its land (total land cost $40 000) for $22 000 cash.',l:[{a:['Cash'],d:22000},{a:['Land','PPE'],c:20000},{a:['Gain on disposal'],c:2000}]},
{id:'d8',topic:'t1',title:'Cash dividends paid',p:'RedLotus pays its shareholders cash dividends of $2 100.',l:[{a:['Dividends'],d:2100},{a:['Cash'],c:2100}]},
{id:'d9',topic:'t2',date:'Apr 5',title:'Sale 60% cash',p:'Apr 5: 900 units sold at €10 each; customers pay 60% in cash and the rest in one month.',l:[{a:['Accounts receivable'],d:3600},{a:['Cash'],d:5400},{a:['Revenues'],c:9000}]},
{id:'d10',topic:'t2',date:'Apr 5',title:'Customer advance',p:'Apr 5: a customer pays €10 000 in advance to pre-order 100 products.',l:[{a:['Cash'],d:10000},{a:['Unearned revenues'],c:10000}]},
{id:'d11',topic:'t2',date:'Apr 5',title:'Mixed expenses day',p:'Apr 5: pays €300 cash for electricity; maintenance of €5 000, half paid today; pays €2 000 for supplies delivered next week.',l:[{a:['Electricity expense'],d:300},{a:['Maintenance expense'],d:5000},{a:['Prepaid expenses'],d:2000},{a:['Cash'],c:4800},{a:['Accounts payable'],c:2500}]},
{id:'d12',topic:'t2',date:'June 30',title:'Wages earned, unpaid',p:'Employees earned €3 000 in the last week of June, to be paid in July. Record the June entry.',l:[{a:['Wages expense'],d:3000},{a:['Salaries payable','Accounts payable'],c:3000}]},
{id:'d13',topic:'t2',date:'April',title:'Utility bill paid',p:'Company B pays in April the €600 utility bill recorded in March.',l:[{a:['Accounts payable'],d:600},{a:['Cash'],c:600}]},
{id:'d14',topic:'t2',title:'Sale with VAT',p:'IKEA store sells €200 000 of goods plus 20% VAT, all in cash.',l:[{a:['Cash'],d:240000},{a:['Revenues'],c:200000},{a:['VAT payable'],c:40000}]},
{id:'d15',topic:'t2',title:'Inventory with freight',p:'Natalie receives clothing invoiced €2 000 (after a 10% bulk discount) plus €50 freight, both payable in 30 days.',l:[{a:['Inventory'],d:2050},{a:['Accounts payable'],c:2050}]},
{id:'d16',topic:'t2',title:'Perpetual sale, both entries',p:'Natalie sells a romper suit costing €15 for €25 cash. Record both entries in one table.',l:[{a:['Cash'],d:25},{a:['Revenues'],c:25},{a:['Cost of goods sold'],d:15},{a:['Inventory'],c:15}]},
{id:'d17',topic:'t3',title:'Building with costs',p:'Airbus signs a €300 000 note to buy a building and pays cash: commission €10 000, stamp duty €13 000, survey fee €1 000. (Ignore the parking lot.)',l:[{a:['PPE'],d:324000},{a:['Cash'],c:24000},{a:['Notes payable'],c:300000}]},
{id:'d18',topic:'t3',date:'Mar 2022',title:'Machine on account',p:'XYZ buys a machine on account: price €500 000, transport €24 000, installation €2 000, staff training €12 000. Record the machine only.',l:[{a:['PPE'],d:526000},{a:['Accounts payable'],c:526000}]},
{id:'d19',topic:'t3',title:'Contribution in kind',p:'A shareholder contributes a building worth €150 000 in exchange for shares.',l:[{a:['PPE'],d:150000},{a:['Share capital'],c:150000}]},
{id:'d20',topic:'t3',date:'31 Dec',title:'Annual depreciation',p:'Truck cost €41 000, residual €1 000, 4-year life. Record one year of straight-line depreciation.',l:[{a:['Depreciation expense'],d:10000},{a:['Accumulated depreciation'],c:10000}]},
{id:'d21',topic:'t3',date:'31 Dec 2022',title:'Engine improvement',p:'End of 2022: new engine for the truck, €7 000 on account, extending its life.',l:[{a:['PPE'],d:7000},{a:['Accounts payable'],c:7000}]},
{id:'d22',topic:'t3',title:'Scrapped before end of life',p:'Machine cost €60 000, accumulated depreciation €50 000, disposed of for nothing (technical failure).',l:[{a:['Accumulated depreciation'],d:50000},{a:['Loss on disposal'],d:10000},{a:['PPE'],c:60000}]},
{id:'d23',topic:'t3',title:'Sold at a loss',p:'FedEx sells equipment (cost €200 000, accumulated depreciation €150 000) for €40 000 cash.',l:[{a:['Accumulated depreciation'],d:150000},{a:['Cash'],d:40000},{a:['Loss on disposal'],d:10000},{a:['PPE'],c:200000}]},
{id:'d24',topic:'t3',title:'Sold at a gain',p:'Apple sells equipment (cost €10 000, accumulated depreciation €3 750) for €7 300 cash.',l:[{a:['Accumulated depreciation'],d:3750},{a:['Cash'],d:7300},{a:['PPE'],c:10000},{a:['Gain on disposal'],c:1050}]},
{id:'d25',topic:'t3',date:'1 Oct 2023',title:'Vermeer sold for €24 000',p:'Machine cost €40 000, accumulated depreciation €24 000 at 1 Oct 2023 (already updated). Sold for €24 000 cash.',l:[{a:['Accumulated depreciation'],d:24000},{a:['Cash'],d:24000},{a:['PPE'],c:40000},{a:['Gain on disposal'],c:8000}]},
{id:'d26',topic:'t3',title:'Patent purchase',p:'Master Printers buys a patent for $920 000 cash.',l:[{a:['Intangible assets (patent)'],d:920000},{a:['Cash'],c:920000}]},
{id:'d27',topic:'t3',title:'Patent amortisation',p:'Patent $920 000, competitive advantage 10 years (legal life 20). Record year-1 amortisation.',l:[{a:['Amortization expense'],d:92000},{a:['Accumulated amortization'],c:92000}]},
{id:'d28',topic:'t3',title:'Acquisition with goodwill',p:'FedEx buys Europa for $10 000 000 cash. Europa’s assets: market value $9 000 000; financial loans $2 000 000.',l:[{a:['Assets acquired (at market value)'],d:9000000},{a:['Goodwill'],d:3000000},{a:['Financial loan LT','Loan payable'],c:2000000},{a:['Cash'],c:10000000}]},
{id:'d29',topic:'t4',date:'Jan 2024',title:'Share issue, French practice',p:'ISOLAB issues 10 286 shares at €17.50 (par value €10), all in cash.',l:[{a:['Cash'],d:180005},{a:['Share capital'],c:102860},{a:['Share premium'],c:77145}]},
{id:'d30',topic:'t4',title:'Share issue, Anglo-Saxon',p:'Same issue (10 286 shares at €17.50) under the Anglo-Saxon practice (no par value).',l:[{a:['Cash'],d:180005},{a:['Share capital'],c:180005}]},
{id:'d31',topic:'t4',date:'1 April',title:'KiMi SEO',p:'KiMi issues 234 375 shares at €38.40 (par €2), French practice.',l:[{a:['Cash'],d:9000000},{a:['Share capital'],c:468750},{a:['Share premium'],c:8531250}]},
{id:'d32',topic:'t4',date:'15/03/2024',title:'Dividend declared',p:'15/03/2024: shareholders approve a €1.50 dividend on 20 000 shares, out of 2023 profit.',l:[{a:['Net income of prior year','Retained earnings'],d:30000},{a:['Dividends payable'],c:30000}]},
{id:'d33',topic:'t4',date:'05/05/2024',title:'Dividend paid',p:'05/05/2024: the €30 000 dividend is paid.',l:[{a:['Dividends payable'],d:30000},{a:['Cash'],c:30000}]},
{id:'d34',topic:'t4',date:'1 Feb',title:'Share buyback',p:'ISOLAB buys back 4 000 of its own shares at €16.',l:[{a:['Treasury shares'],d:64000},{a:['Cash'],c:64000}]},
{id:'d35',topic:'t4',date:'1 Mar',title:'A/P converted to a note',p:'1 March: a €50 000 supplier debt is converted into a 2-month note payable at 10%.',l:[{a:['Accounts payable'],d:50000},{a:['Notes payable'],c:50000}]},
{id:'d36',topic:'t4',date:'30 Apr',title:'Note: final payment',p:'30 April: last month of interest on the €50 000 note (10%/year, rounded to €417) and repayment of the note, in cash.',l:[{a:['Interest expense'],d:417},{a:['Notes payable'],d:50000},{a:['Cash'],c:50417}]},
{id:'d37',topic:'t4',date:'1 Jan 2024',title:'Loan released',p:'1 Jan 2024: XYZ receives a €100 000 bank loan; 50% of principal is repaid on 31 Dec 2024 and 50% on 31 Dec 2025.',l:[{a:['Cash'],d:100000},{a:['Financial loan LT'],c:50000},{a:['Financial loan ST'],c:50000}]},
{id:'d38',topic:'t4',date:'31 Dec 2024',title:'First instalment',p:'31 Dec 2024: XYZ pays 6% interest on €100 000 and repays €50 000 of principal.',l:[{a:['Interest expense'],d:6000},{a:['Financial loan ST'],d:50000},{a:['Cash'],c:56000}]},
{id:'d39',topic:'t4',date:'31 Dec 2024',title:'Year-end reclassification',p:'31 Dec 2024: the remaining €50 000 becomes due within one year.',l:[{a:['Financial loan LT'],d:50000},{a:['Financial loan ST'],c:50000}]},
{id:'d40',topic:'t5',date:'Dec 19',title:'Customer advance',p:'Dec 19: GadgetGalaxy receives 2 000 in cash, 50% of an order of 20 PartyBoxes at 200, to be delivered on Dec 23.',l:[{a:['Cash'],d:2000},{a:['Unearned revenue','Unearned revenues'],c:2000}]},
{id:'d41',topic:'t5',date:'Dec 23',title:'Prepaid order delivered (revenue)',p:'Dec 23: GadgetGalaxy delivers the order (total 4 000); the customer pays the remaining 2 000 immediately. Record the revenue entry only.',l:[{a:['Unearned revenue','Unearned revenues'],d:2000},{a:['Cash'],d:2000},{a:['Sales revenue','Revenues'],c:4000}]},
{id:'d42',topic:'t5',date:'Dec 23',title:'Prepaid order delivered (cost)',p:'Same delivery: the PartyBoxes cost 1 700. Record the cost entry.',l:[{a:['Cost of goods sold'],d:1700},{a:['Inventory'],c:1700}]},
{id:'d43',topic:'t5',date:'Dec 31',title:'Insurance consumed',p:'A one-year insurance contract of 500 was paid on June 30 (Prepaid insurance). Record the adjustment at Dec 31.',l:[{a:['Insurance expense'],d:250},{a:['Prepaid insurance'],c:250}]},
{id:'d44',topic:'t5',date:'Dec 31, 2017',title:'Straight-line, part year',p:'Winchester bought a machine on Sep 1, 2017 for 120 000 (residual 12 000, life 4 years). Record the 2017 straight-line depreciation.',l:[{a:['Depreciation expense'],d:9000},{a:['Accumulated depreciation'],c:9000}]},
{id:'d45',topic:'t5',date:'Dec 31',title:'Double declining-balance, year 1',p:'GadgetGalaxy: scanner bought Jan 1, 2023 for 22 000 (residual 2 000, life 5 years), double declining-balance. Record the 2023 depreciation.',l:[{a:['Depreciation expense'],d:8800},{a:['Accumulated depreciation'],c:8800}]},
{id:'d46',topic:'t5',date:'Dec 31',title:'Impairment of PPE',p:'GadgetGalaxy: PPE cost 22 000, accumulated depreciation 2 000, recoverable amount 14 700.',l:[{a:['Impairment expense'],d:5300},{a:['Impairment of PPE'],c:5300}]},
{id:'d47',topic:'t5',date:'31/12/2023',title:'Impairment test, Alpha',p:'Alpha: PPE bought Jan 1, 2023 for 120 000 (20 years, salvage 20 000, straight-line, depreciation already recorded). Recoverable amount on Dec 31, 2023: 105 000.',l:[{a:['Impairment expense'],d:10000},{a:['Impairment of PPE'],c:10000}]},
{id:'d48',topic:'t5',date:'Dec 31',title:'Doubtful receivables',p:'GadgetGalaxy estimates at Dec 31 that 600 of its A/R will not be collected (allowance method; the allowance starts at zero).',l:[{a:['Bad debt expense'],d:600},{a:['Allowance for doubtful accounts'],c:600}]},
{id:'d49',topic:'t5',date:'Dec 31',title:'Customer bankrupt',p:'A customer owing 1 000 goes bankrupt; the amount is covered by the allowance for doubtful accounts.',l:[{a:['Allowance for doubtful accounts'],d:1000},{a:['Accounts receivable'],c:1000}]},
{id:'d50',topic:'t5',date:'During 2024',title:'Unicorn: sales of the year',p:'Unicorn made total sales of 85 000 in 2024, of which 70 000 were collected in cash. Record the sales in one entry.',l:[{a:['Cash'],d:70000},{a:['Accounts receivable'],d:15000},{a:['Sales revenue','Revenues'],c:85000}]},
{id:'d51',topic:'t5',date:'End of 2024',title:'Unicorn: allowance top-up',p:'Unicorn’s allowance was 7 500; a 6 000 receivable was written off; the allowance must be 2 000 at year-end.',l:[{a:['Bad debt expense'],d:500},{a:['Allowance for doubtful accounts'],c:500}]},
{id:'d52',topic:'t5',date:'Dec 31',title:'Inventory write-down',p:'Inventory items (cost / NRV): 600 / 500, 1 100 / 1 200, 700 / 600, 500 / 300.',l:[{a:['Loss on inventory write-down'],d:400},{a:['Allowance for inventory losses'],c:400}]},
{id:'d53',topic:'t5',date:'31 Dec 2023',title:'Apollyon impairment',p:'Apollyon’s machinery has a carrying amount of 1 662 500 on Dec 31, 2023; its recoverable amount is 1 500 000.',l:[{a:['Impairment expense'],d:162500},{a:['Impairment of PPE'],c:162500}]},
{id:'d54',topic:'t6',date:'Dec 31',title:'Income tax expense',p:'ABC made an income before taxes of 125 000 in 2023; the tax rate is 25%. The tax will be paid in February.',l:[{a:['Income tax expense'],d:31250},{a:['Income tax payable'],c:31250}]},
{id:'d55',topic:'t6',date:'Feb 28',title:'Income tax paid',p:'Feb 28, 2024: ABC pays in cash the 31 250 of income tax related to 2023.',l:[{a:['Income tax payable'],d:31250},{a:['Cash'],c:31250}]},
{id:'d56',topic:'t6',date:'June 19',title:'Interim dividend declared',p:'June 19, 2024: ABC declares an interim dividend of 15 000.',l:[{a:['Net income of the year'],d:15000},{a:['Dividend payable','Dividends payable'],c:15000}]},
{id:'d57',topic:'t6',date:'June 30',title:'Interim dividend paid',p:'June 30, 2024: the 15 000 interim dividend is paid in cash.',l:[{a:['Dividend payable','Dividends payable'],d:15000},{a:['Cash'],c:15000}]},
{id:'d58',topic:'t6',date:'July 10',title:'Share dividend',p:'July 10, 2024: ABC (100 000 shares issued at €5, trading at €10) distributes a 15% share dividend out of 2023 net income. Course convention.',l:[{a:['Net income of 2023','Net income of the year','Net income of prior year'],d:150000},{a:['Share capital'],c:150000}]},
{id:'d59',topic:'t6',date:'June 30',title:'RedLotus a: rent',p:'RedLotus prepaid 3 000 of rent on June 1; rent is 1 000 a month. Adjust on June 30.',l:[{a:['Rent expense'],d:1000},{a:['Prepaid rent'],c:1000}]},
{id:'d60',topic:'t6',date:'June 30',title:'RedLotus b: supplies',p:'RedLotus bought 700 of cleaning supplies on June 1; 400 remain on June 30.',l:[{a:['Supplies expense'],d:300},{a:['Supplies'],c:300}]},
{id:'d61',topic:'t6',date:'June 30',title:'RedLotus c: bookings made',p:'RedLotus collected 400 in advance for 10 bookings; 5 are made by June 30.',l:[{a:['Unearned service revenue','Unearned revenue','Unearned revenues'],d:200},{a:['Service revenue'],c:200}]},
{id:'d62',topic:'t6',date:'June 30',title:'RedLotus d: salary owed',p:'The second half-month salary of 900 for June will only be paid on Monday July 1.',l:[{a:['Salary expense'],d:900},{a:['Salary payable','Salaries payable'],c:900}]},
{id:'d63',topic:'t6',date:'June 30',title:'RedLotus e: commission earned',p:'A hotel chain owes RedLotus 30 per booking; 10 bookings were made in June; the hotel pays at the end of the 30-day period.',l:[{a:['Accounts receivable'],d:300},{a:['Service revenue'],c:300}]},
{id:'d64',topic:'t6',date:'June 30',title:'RedLotus f: depreciation',p:'Equipment of 24 000, 5 years, no residual value, straight-line; record one full month of depreciation.',l:[{a:['Depreciation expense'],d:400},{a:['Accumulated depreciation'],c:400}]},
{id:'d65',topic:'t6',date:'June 30',title:'RedLotus g: income tax',p:'RedLotus’ adjusted pre-tax income is 3 500; the tax rate is 25%.',l:[{a:['Income tax expense'],d:875},{a:['Income tax payable'],c:875}]},
{id:'d66',topic:'t6',date:'Dec 31',title:'Goldsmith f: unearned revenue earned',p:'Goldsmith: of the 45 000 balance of unearned service revenue, 32 000 was earned during the year.',l:[{a:['Unearned service revenue','Unearned revenue','Unearned revenues'],d:32000},{a:['Service revenue'],c:32000}]},
{id:'d67',topic:'t6',date:'Dec 31',title:'Goldsmith e: accrued service revenue',p:'Goldsmith: accrued service revenue of 12 000 (services performed, not yet billed or collected).',l:[{a:['Accounts receivable'],d:12000},{a:['Service revenue'],c:12000}]},
{id:'d68',topic:'t8',date:'31/12/2023',title:'Tutorial: loan instalment',p:'Topic 8 tutorial (no official solution): a 20 000 loan at 6% was taken on July 1; on Dec 31 the company repays 10 000 of principal with the accrued interest, in cash.',l:[{a:['Interest expense'],d:600},{a:['Bank loan','Loan payable'],d:10000},{a:['Cash'],c:10600}]},
{id:'d69',topic:'t8',date:'31/12/2023',title:'Tutorial: A/P turned into a note',p:'Topic 8 tutorial: an account payable of 5 000 is converted into a formal note payable.',l:[{a:['Accounts payable'],d:5000},{a:['Notes payable'],c:5000}]},
{id:'d70',topic:'t8',date:'31/12/2023',title:'Tutorial: one month of a service contract',p:'Topic 8 tutorial: a client paid 6 000 in advance on Dec 1 for a four-month service contract; one month is earned.',l:[{a:['Unearned revenue','Unearned revenues'],d:1500},{a:['Service revenue'],c:1500}]}
];
const EXTRA_ACCOUNTS=['Supplies','Rent expense','Utility expense','Advertising expense','Salary expense','Retained earnings','Revenues','Land','Goodwill','Loan payable','Salaries payable','Dividends'];

/* ---------- flashcards ---------- */
const CARDS=[
{id:'c0',topic:'t1',f:'The accounting equation',b:'Assets = Liabilities + Equity\nResources the firm has/controls = financed by others + financed by owners.'},
{id:'c1',topic:'t1',f:'Three characteristics of an asset (Topic 1 wording)',b:'Owned or controlled · result of a past event · provides future benefits.'},
{id:'c2',topic:'t1',f:'Current vs non-current',b:'Current: converted/settled within 12 months. Non-current: after 12 months.'},
{id:'c3',topic:'t1',f:'Exogenous vs endogenous equity',b:'Exogenous: share capital brought by investors.\nEndogenous: retained earnings + net income (performance).'},
{id:'c4',topic:'t1',f:'Transaction',b:'Any economic event that affects the financial position (assets, liabilities or equity) of the company.'},
{id:'c5',topic:'t1',f:'Double entry',b:'Every transaction debits at least one account and credits at least one other. Total debits = total credits.'},
{id:'c6',topic:'t1',f:'Journal vs ledger vs trial balance',b:'Journal: chronological book of original entry.\nLedger: all accounts (T-accounts).\nTrial balance: list of all accounts with balances.'},
{id:'c7',topic:'t1',f:'The 8 steps of the accounting cycle',b:'Identify transactions → post ledger entries → unadjusted trial balance → adjusting entries → adjusted trial balance → financial statements → closing entries → post-closing trial balance.'},
{id:'c8',topic:'t1',f:'Normal balances',b:'Debit: assets, expenses, dividends.\nCredit: liabilities, equity, revenues, contra-assets.'},
{id:'c9',topic:'t2',f:'Accrual basis',b:'Records transactions in the period they occur, even if cash moves in another period. Cash basis is not allowed under IFRS.'},
{id:'c10',topic:'t2',f:'Revenue recognition principle',b:'Revenue is recognised when the performance obligation is satisfied: goods or services delivered.'},
{id:'c11',topic:'t2',f:'Matching principle',b:'Expenses follow revenues: recognised when resources are consumed or services received.'},
{id:'c12',topic:'t2',f:'Unearned revenue',b:'Liability: cash received before delivering goods/services. Becomes revenue on delivery.'},
{id:'c13',topic:'t2',f:'Prepaid expense',b:'Asset: cash paid before receiving a service/good. Becomes an expense when consumed.'},
{id:'c14',topic:'t2',f:'VAT on sales',b:'Collected for the State → VAT payable (liability). No effect on revenue or equity.'},
{id:'c15',topic:'t2',f:'Perpetual vs periodic',b:'Perpetual: continuous record, COGS at each sale (used in course).\nPeriodic: physical count at period end.'},
{id:'c16',topic:'t2',f:'FIFO, LIFO, WA in this course',b:'FIFO: taught. LIFO: not allowed under IFRS. Weighted average: Cost Accounting course.'},
{id:'c17',topic:'t2',f:'COGS equation',b:'Beginning inventory + Purchases − Ending inventory = COGS'},
{id:'c18',topic:'t2',f:'Net purchases',b:'Price + freight-in − returns − allowances − purchase discounts'},
{id:'c19',topic:'t2',f:'Consignment',b:'Consignor (owner) keeps goods in inventory until sold. Consignee does not include them.'},
{id:'c20',topic:'t2',f:'FIFO with rising prices',b:'Lowest COGS → highest net income and highest ending inventory.'},
{id:'c21',topic:'t3',f:'Cost of PPE',b:'All costs to bring the asset to its intended use: price, site prep, installation, transport, commissions, duties.\nNot: VAT, training, ads, admin overheads, maintenance.'},
{id:'c22',topic:'t3',f:'Capital expenditure vs maintenance',b:'Capex (increase capacity or life) → capitalise.\nOrdinary repairs (oil change, tyres, tune-up, paint) → expense.'},
{id:'c23',topic:'t3',f:'Straight-line depreciation',b:'(Cost − residual) / useful life; × months/12 for part years.'},
{id:'c24',topic:'t3',f:'Revised depreciation after a capex',b:'(Book value + capex − residual) / remaining life. Past years are not changed.'},
{id:'c25',topic:'t3',f:'First step before a disposal',b:'Bring depreciation up to date (update book value, record expense to the disposal date).'},
{id:'c26',topic:'t3',f:'Gain or loss on disposal',b:'Proceeds − book value. Remove full cost and full accumulated depreciation.'},
{id:'c27',topic:'t3',f:'Internally generated intangibles',b:'Not recognised: value needs estimation, low reliability. Externally acquired ones are recognised.'},
{id:'c28',topic:'t3',f:'Finite vs indefinite intangibles',b:'Finite (patent): amortisation.\nIndefinite (goodwill): annual impairment test.'},
{id:'c29',topic:'t3',f:'Goodwill',b:'Price paid − market value of net assets acquired. Only recorded when acquired, never when created.'},
{id:'c30',topic:'t3',f:'Copyright duration',b:'Extends 70 years beyond the author’s life.'},
{id:'c31',topic:'t3',f:'Associate vs subsidiary',b:'Associate: significant influence, usually 20–50%.\nSubsidiary: typically >50% (control).'},
{id:'c32',topic:'t4',f:'Issue price, non-listed company',b:'Total equity / number of shares outstanding.'},
{id:'c33',topic:'t4',f:'Par value',b:'Nominal value assigned at first issue = share capital / shares outstanding. Never changes; differs from market price.'},
{id:'c34',topic:'t4',f:'French vs Anglo-Saxon share issue',b:'French: share capital (par × n) + share premium ((price − par) × n).\nAnglo-Saxon: everything to share capital.'},
{id:'c35',topic:'t4',f:'Dividend rules',b:'Only out of retained earnings / prior-year NI. Not an expense. Liability at declaration; cash at payment.'},
{id:'c36',topic:'t4',f:'Treasury shares',b:'Own shares bought back. Negative equity; no dividend or voting rights; outstanding shares fall.'},
{id:'c37',topic:'t4',f:'EPS',b:'Net income / number of shares outstanding.'},
{id:'c38',topic:'t4',f:'Pros of debt',b:'No dilution, control unchanged; interest is tax-deductible.'},
{id:'c39',topic:'t4',f:'Cons of debt',b:'Higher expenses and periodic cash needs; covenants; less financial autonomy.'},
{id:'c40',topic:'t4',f:'Current portion of a loan',b:'Principal repaid within the year, recorded as Financial loan ST at inception; LT part reclassified to ST at year-end.'},
{id:'c41',topic:'t4',f:'Constant annuity',b:'Same payment each period. Interest = outstanding × rate × period; principal repaid = annuity − interest.'},
{id:'c42',topic:'t5',f:'Unadjusted vs adjusted trial balance',b:'Unadjusted: right after posting, not up to date.\nAdjusted: after the adjusting entries; used for the financial statements.'},
{id:'c43',topic:'t5',f:'The four categories of end-of-period adjustments',b:'Prepaids (unearned revenue, prepaid expenses) · adjustment of assets (depreciation, impairment of PPE and A/R, inventory write-down) · accruals · provisions for risks.\nAccruals and provisions: "Not discussed in this course".'},
{id:'c44',topic:'t5',f:'Rule for every adjusting entry',b:'It adjusts one balance sheet account and one income statement account.'},
{id:'c45',topic:'t5',f:'Unearned revenue at delivery',b:'Dr Unearned revenue / Cr Revenue (+ the cost entry: Dr COGS / Cr Inventory).'},
{id:'c46',topic:'t5',f:'Prepaid expense at year-end',b:'Dr Expense / Cr Prepaid … for the part consumed (e.g. 500 × 6/12).'},
{id:'c47',topic:'t5',f:'Partial-year straight-line depreciation',b:'First year: × months in use / 12. Runs over N + 1 periods; year N+1: × (12 − first-year months) / 12.'},
{id:'c48',topic:'t5',f:'Double declining-balance',b:'Rate = 100% / life × 2, applied to the beginning book value (residual not deducted). Final year: beginning book value − residual value.'},
{id:'c49',topic:'t5',f:'Impairment test for PPE',b:'Compare net book value with the recoverable amount (highest of selling or using). If NBV is higher: loss = NBV − recoverable amount.\nDr Impairment expense / Cr Impairment of PPE (XA).'},
{id:'c50',topic:'t5',f:'Allowance for doubtful accounts',b:'Contra-asset under A/R. Year-end: Dr Bad debt expense / Cr Allowance.\nNet A/R = gross A/R − allowance.'},
{id:'c51',topic:'t5',f:'Write-off of a receivable',b:'Dr Allowance for doubtful accounts / Cr A/R. No effect on net A/R or net income.'},
{id:'c52',topic:'t5',f:'Bad debt expense of the year',b:'Required ending allowance − (opening allowance − write-offs).'},
{id:'c53',topic:'t5',f:'Lower of cost and net realizable value',b:'Item by item. NRV = selling price − costs to complete − costs to sell.\nDr Loss on inventory write-down / Cr Allowance for inventory losses.'},
{id:'c54',topic:'t6',f:'Taxable income and income tax',b:'Income before tax = revenues − all expenses except income tax. Tax = income before tax × rate. No tax on a loss.\nDr Income tax expense / Cr Income tax payable.'},
{id:'c55',topic:'t6',f:'Elements of profit appropriation',b:'Dividends, bonuses, reserves, retained earnings.'},
{id:'c56',topic:'t6',f:'Interim vs final dividend',b:'Interim: during the year, declared by the board, payable immediately.\nFinal (ordinary): after year-end, recommended by the board, may need shareholders’ approval.'},
{id:'c57',topic:'t6',f:'Cash dividend entries',b:'Declaration: Dr Net income of the year / Cr Dividend payable.\nPayment: Dr Dividend payable / Cr Cash. Never an expense.'},
{id:'c58',topic:'t6',f:'Share dividend',b:'New shares = outstanding × %; value = new shares × current price.\nDr Net income of the year (or RE) / Cr Share capital. Total equity unchanged.'},
{id:'c59',topic:'t6',f:'Why issue share dividends?',b:'Keep paying dividends while conserving cash; lower the market price per share to attract more investors.'},
{id:'c60',topic:'t6',f:'France vs Anglo-Saxon: who decides, what is distributed',b:'France: shareholders; net income of the year only; legal reserve; statements before appropriation.\nAnglo-Saxon: board of directors; net income + retained earnings; no legal reserve; after appropriation.'},
{id:'c61',topic:'t6',f:'French legal reserve',b:'5% of annual profit each year until it equals 10% of share capital; dividends at most 95% of profit meanwhile.'},
{id:'c62',topic:'t6',f:'Statement of changes in equity',b:'Opening equity + share issues − buybacks + net income − dividends = ending equity. Links the income statement and the balance sheet.'},
{id:'c63',topic:'t7',f:'What the cash flow statement shows',b:'Cash generated and spent in the period. Opening cash + cash in − cash out = closing cash.'},
{id:'c64',topic:'t7',f:'Operating, investing, financing',b:'Operating: core activities (customers, suppliers, wages, taxes, interest).\nInvesting: long-term assets and investments.\nFinancing: shares, dividends, buybacks, long-term debt.'},
{id:'c65',topic:'t7',f:'Direct vs indirect method',b:'Only the operating section differs.\nDirect: receipts and payments (IFRS encourages).\nIndirect: from net income (IFRS permits; most companies).'},
{id:'c66',topic:'t7',f:'Indirect method: what to add back',b:'Depreciation, amortisation, impairment, bad debt expense; losses on sale. Subtract gains on sale.'},
{id:'c67',topic:'t7',f:'Working-capital rule',b:'Asset up → cash outflow; asset down → inflow.\nLiability up → inflow; liability down → outflow.'},
{id:'c68',topic:'t7',f:'Non-cash investing and financing',b:'E.g. shares issued for plant assets: not in the three sections; disclosed in a supplementary schedule.'},
{id:'c69',topic:'t7',f:'Interest and dividends in the CFS (course)',b:'Interest and dividends received, interest paid: operating (alternative categorization possible in IFRS). Dividends paid: financing.'},
{id:'c70',topic:'t8',f:'The five limitations of financial statements',b:'1. Historical data · 2. Estimates and judgements · 3. Potential for manipulation · 4. Exclusion of non-financial information · 5. Static in nature.'},
{id:'c71',topic:'t8',f:'Earnings management',b:'Using the flexibility of estimates and judgements (inventory method, allowance for doubtful accounts…) to present results more favourably.'},
{id:'c72',topic:'t8',f:'Non-financial information missing from the statements',b:'Sustainability reporting (ESG), customer satisfaction, market conditions, reputation.'}
];

/* ---------- T-account practice (module "taccounts", Topic 1): one account per exercise, generated ---------- */
const eur=a=>'€'+fmt(a);
// Each account: n = normal side; open = opening balance range (none = starts the period at zero).
// Templates: s = side posted in THIS account ('d'/'c') or null (no effect); r = amount range; st = rounding step;
// p = amount posted in this account (default: the amount a); e = the journal entry, shown in the solution.
const TA={
'Cash':{n:'d',open:[4000,15000],tpl:[
 {s:'d',t:a=>`Shareholders invest ${eur(a)} in cash in exchange for shares.`,r:[5000,20000],e:'Dr Cash / Cr Share capital'},
 {s:'d',t:a=>`The company receives a bank loan of ${eur(a)}.`,r:[5000,25000],e:'Dr Cash / Cr Loan payable'},
 {s:'d',t:a=>`Performs services for ${eur(a)}, paid in cash.`,r:[1000,8000],e:'Dr Cash / Cr Service revenue'},
 {s:'d',t:a=>`Collects ${eur(a)} from customers on account.`,r:[500,5000],e:'Dr Cash / Cr Accounts receivable'},
 {s:'d',t:a=>`Sells goods for ${eur(a)}: 60% in cash, the rest on account.`,r:[2000,10000],st:500,p:a=>a*.6,e:a=>`Dr Cash ${fmt(a*.6)}, Dr Accounts receivable ${fmt(a*.4)} / Cr Revenues ${fmt(a)}`},
 {s:'c',t:a=>`Pays the monthly rent of ${eur(a)}.`,r:[500,3000],e:'Dr Rent expense / Cr Cash'},
 {s:'c',t:a=>`Buys equipment for ${eur(a)} in cash.`,r:[2000,9000],e:'Dr Equipment / Cr Cash'},
 {s:'c',t:a=>`Pays ${eur(a)} to suppliers.`,r:[500,5000],e:'Dr Accounts payable / Cr Cash'},
 {s:'c',t:a=>`Pays salaries of ${eur(a)}.`,r:[1000,6000],e:'Dr Salary expense / Cr Cash'},
 {s:'c',t:a=>`Repays ${eur(a)} of the bank loan.`,r:[1000,5000],e:'Dr Loan payable / Cr Cash'},
 {s:'c',t:a=>`Pays cash dividends of ${eur(a)}.`,r:[500,3000],e:'Dr Dividends / Cr Cash'},
 {s:'c',t:a=>`Buys inventory for ${eur(a)}: half in cash, the rest on account.`,r:[2000,8000],st:200,p:a=>a/2,e:a=>`Dr Inventory ${fmt(a)} / Cr Cash ${fmt(a/2)}, Cr Accounts payable ${fmt(a/2)}`},
 {s:null,t:a=>`Performs services on account for ${eur(a)}.`,r:[1000,6000],e:'Dr Accounts receivable / Cr Service revenue: no cash moves'},
 {s:null,t:a=>`Buys supplies on account for ${eur(a)}.`,r:[300,2000],e:'Dr Supplies / Cr Accounts payable: no cash moves'},
 {s:null,t:a=>`The main shareholder buys a ${eur(a)} car for his personal use with his own money.`,r:[10000,30000],st:1000,e:'Not a transaction of the business: nothing is recorded'},
 {s:null,t:a=>`A shareholder sells shares worth ${eur(a)} to another investor.`,r:[5000,20000],st:1000,e:'A sale between shareholders: the company records nothing'}]},
'Accounts receivable':{n:'d',open:[2000,9000],tpl:[
 {s:'d',t:a=>`Performs services on account for ${eur(a)}.`,r:[1000,7000],e:'Dr Accounts receivable / Cr Service revenue'},
 {s:'d',t:a=>`Sells goods for ${eur(a)} on account.`,r:[1000,8000],e:'Dr Accounts receivable / Cr Revenues'},
 {s:'d',t:a=>`Sells goods for ${eur(a)}: 40% in cash, the rest on account.`,r:[2000,10000],st:500,p:a=>a*.6,e:a=>`Dr Cash ${fmt(a*.4)}, Dr Accounts receivable ${fmt(a*.6)} / Cr Revenues ${fmt(a)}`},
 {s:'c',t:a=>`Collects ${eur(a)} from customers on account.`,r:[1000,6000],e:'Dr Cash / Cr Accounts receivable'},
 {s:'c',t:a=>`A customer pays ${eur(a)} of what he owes.`,r:[500,3000],e:'Dr Cash / Cr Accounts receivable'},
 {s:null,t:a=>`Performs services for ${eur(a)}, paid in cash.`,r:[1000,5000],e:'Dr Cash / Cr Service revenue: nothing is owed by the customer'},
 {s:null,t:a=>`Pays ${eur(a)} to suppliers.`,r:[500,4000],e:'Dr Accounts payable / Cr Cash: that is a payable, not a receivable'},
 {s:null,t:a=>`Buys supplies on account for ${eur(a)}.`,r:[300,2000],e:'Dr Supplies / Cr Accounts payable'}]},
'Accounts payable':{n:'c',open:[1500,7000],tpl:[
 {s:'c',t:a=>`Buys supplies on account for ${eur(a)}.`,r:[300,2500],e:'Dr Supplies / Cr Accounts payable'},
 {s:'c',t:a=>`Buys inventory on account for ${eur(a)}.`,r:[1000,8000],e:'Dr Inventory / Cr Accounts payable'},
 {s:'c',t:a=>`Receives the ${eur(a)} electricity bill for this month, to be paid next month.`,r:[200,900],e:'Dr Utility expense / Cr Accounts payable'},
 {s:'c',t:a=>`Buys equipment for ${eur(a)}: 25% in cash, the rest on account.`,r:[4000,12000],st:400,p:a=>a*.75,e:a=>`Dr Equipment ${fmt(a)} / Cr Cash ${fmt(a*.25)}, Cr Accounts payable ${fmt(a*.75)}`},
 {s:'d',t:a=>`Pays ${eur(a)} to suppliers.`,r:[1000,6000],e:'Dr Accounts payable / Cr Cash'},
 {s:'d',t:a=>`Settles ${eur(a)} of the supplier invoices received last month.`,r:[500,3000],e:'Dr Accounts payable / Cr Cash'},
 {s:null,t:a=>`Pays the monthly rent of ${eur(a)} in cash.`,r:[500,3000],e:'Dr Rent expense / Cr Cash: nothing is owed'},
 {s:null,t:a=>`Collects ${eur(a)} from customers on account.`,r:[500,5000],e:'Dr Cash / Cr Accounts receivable: that is a receivable'},
 {s:null,t:a=>`Buys supplies for ${eur(a)}, paid in cash.`,r:[200,1500],e:'Dr Supplies / Cr Cash: paid now, so no payable'}]},
'Inventory':{n:'d',open:[3000,12000],tpl:[
 {s:'d',t:a=>`Buys goods for resale for ${eur(a)} on account.`,r:[1000,8000],e:'Dr Inventory / Cr Accounts payable'},
 {s:'d',t:a=>`Buys goods for resale for ${eur(a)} on account and pays ${eur(a/20)} cash for transport.`,r:[2000,10000],st:1000,p:a=>a*1.05,e:a=>`Dr Inventory ${fmt(a*1.05)} / Cr Accounts payable ${fmt(a)}, Cr Cash ${fmt(a/20)}: transport is part of the cost`},
 {s:'d',t:a=>`Buys goods for resale for ${eur(a)} in cash.`,r:[1000,6000],e:'Dr Inventory / Cr Cash'},
 {s:'c',t:a=>`Sells goods for ${eur(a*1.5)}; the goods cost ${eur(a)}.`,r:[1000,6000],st:200,e:a=>`Dr Cash or A/R / Cr Revenues ${fmt(a*1.5)}, and Dr Cost of goods sold / Cr Inventory ${fmt(a)}: only the cost leaves Inventory`},
 {s:'c',t:a=>`Sells goods that cost ${eur(a)} for ${eur(a*2)} on account.`,r:[500,4000],st:100,e:a=>`Dr Accounts receivable / Cr Revenues ${fmt(a*2)}, and Dr Cost of goods sold / Cr Inventory ${fmt(a)}`},
 {s:null,t:a=>`Buys office supplies for ${eur(a)} in cash.`,r:[200,1500],e:'Dr Supplies / Cr Cash: supplies are used, not resold'},
 {s:null,t:a=>`Pays ${eur(a)} to suppliers.`,r:[1000,5000],e:'Dr Accounts payable / Cr Cash'},
 {s:null,t:a=>`Pays the shop rent of ${eur(a)}.`,r:[500,3000],e:'Dr Rent expense / Cr Cash'}]},
'Supplies':{n:'d',open:[300,1500],tpl:[
 {s:'d',t:a=>`Buys supplies on account for ${eur(a)}.`,r:[300,2000],e:'Dr Supplies / Cr Accounts payable'},
 {s:'d',t:a=>`Buys supplies for ${eur(a)}, paid in cash.`,r:[200,1500],e:'Dr Supplies / Cr Cash'},
 {s:'c',t:a=>`${eur(a)} of supplies are used during the month.`,r:[300,1500],e:'Dr Supplies expense / Cr Supplies'},
 {s:null,t:a=>`Pays ${eur(a)} to the supplier for the supplies bought last month.`,r:[300,1500],e:'Dr Accounts payable / Cr Cash: the supplies were already recorded last month'},
 {s:null,t:a=>`Buys goods for resale for ${eur(a)} on account.`,r:[1000,5000],e:'Dr Inventory / Cr Accounts payable: goods to resell are inventory'},
 {s:null,t:a=>`Pays salaries of ${eur(a)}.`,r:[1000,5000],e:'Dr Salary expense / Cr Cash'}]},
'Loan payable':{n:'c',open:[10000,40000],tpl:[
 {s:'c',t:a=>`Receives a new bank loan of ${eur(a)}.`,r:[5000,20000],st:1000,e:'Dr Cash / Cr Loan payable'},
 {s:'c',t:a=>`Borrows ${eur(a)} from the bank to buy a delivery van.`,r:[8000,20000],st:1000,e:'Dr Cash / Cr Loan payable (the van is a separate entry)'},
 {s:'d',t:a=>`Repays ${eur(a)} of the loan principal.`,r:[1000,6000],st:500,e:'Dr Loan payable / Cr Cash'},
 {s:'d',t:a=>`Makes the yearly principal repayment of ${eur(a)}.`,r:[2000,8000],st:1000,e:'Dr Loan payable / Cr Cash'},
 {s:null,t:a=>`Pays ${eur(a)} of interest on the loan.`,r:[100,900],e:'Dr Interest expense / Cr Cash: interest is an expense, it does not reduce the loan'},
 {s:null,t:a=>`Pays ${eur(a)} to suppliers.`,r:[1000,5000],e:'Dr Accounts payable / Cr Cash: suppliers are not lenders'},
 {s:null,t:a=>`Buys a delivery van for ${eur(a)} in cash.`,r:[8000,20000],st:1000,e:'Dr PPE / Cr Cash'}]},
'Share capital':{n:'c',open:[20000,80000],tpl:[
 {s:'c',t:a=>`Issues new shares for ${eur(a)} in cash.`,r:[5000,30000],st:1000,e:'Dr Cash / Cr Share capital'},
 {s:'c',t:a=>`A shareholder contributes a building worth ${eur(a)} in exchange for new shares.`,r:[20000,60000],st:1000,e:'Dr PPE / Cr Share capital'},
 {s:'c',t:a=>`New investors join and pay ${eur(a)} for shares.`,r:[5000,20000],st:1000,e:'Dr Cash / Cr Share capital'},
 {s:null,t:a=>`Pays cash dividends of ${eur(a)}.`,r:[1000,5000],e:'Dr Dividends / Cr Cash: dividends do not reduce share capital'},
 {s:null,t:a=>`A shareholder sells shares worth ${eur(a)} to another investor.`,r:[5000,20000],st:1000,e:'A sale between shareholders: the company records nothing'},
 {s:null,t:a=>`Receives a bank loan of ${eur(a)}.`,r:[5000,20000],st:1000,e:'Dr Cash / Cr Loan payable: a lender is not a shareholder'}]},
'Service revenue':{n:'c',tpl:[
 {s:'c',t:a=>`Performs services for ${eur(a)}, paid in cash.`,r:[1000,6000],e:'Dr Cash / Cr Service revenue'},
 {s:'c',t:a=>`Performs services on account for ${eur(a)}.`,r:[1000,6000],e:'Dr Accounts receivable / Cr Service revenue'},
 {s:'c',t:a=>`Completes a consulting job for ${eur(a)}; the client pays half now and half next month.`,r:[2000,8000],st:200,e:a=>`Dr Cash ${fmt(a/2)}, Dr Accounts receivable ${fmt(a/2)} / Cr Service revenue ${fmt(a)}`},
 {s:null,t:a=>`Collects ${eur(a)} from customers for services performed last month.`,r:[1000,5000],e:'Dr Cash / Cr Accounts receivable: the revenue was recorded last month'},
 {s:null,t:a=>`Receives a bank loan of ${eur(a)}.`,r:[5000,20000],st:1000,e:'Dr Cash / Cr Loan payable: borrowing is not revenue'},
 {s:null,t:a=>`Shareholders invest ${eur(a)} in cash.`,r:[5000,20000],st:1000,e:'Dr Cash / Cr Share capital: an investment is not revenue'}]},
'Salary expense':{n:'d',tpl:[
 {s:'d',t:a=>`Pays salaries of ${eur(a)}.`,r:[1000,6000],e:'Dr Salary expense / Cr Cash'},
 {s:'d',t:a=>`Pays the part-time staff ${eur(a)} for this week.`,r:[300,1500],e:'Dr Salary expense / Cr Cash'},
 {s:'d',t:a=>`Employees earned ${eur(a)} this month; they will be paid next month.`,r:[1000,4000],e:'Dr Salary expense / Cr Salaries payable'},
 {s:null,t:a=>`Pays the monthly rent of ${eur(a)}.`,r:[500,3000],e:'Dr Rent expense / Cr Cash'},
 {s:null,t:a=>`Pays the owner a cash dividend of ${eur(a)}.`,r:[500,3000],e:'Dr Dividends / Cr Cash: a dividend is not a salary'},
 {s:null,t:a=>`Pays ${eur(a)} to suppliers.`,r:[500,4000],e:'Dr Accounts payable / Cr Cash'}]},
'Dividends':{n:'d',tpl:[
 {s:'d',t:a=>`Pays cash dividends of ${eur(a)}.`,r:[500,4000],e:'Dr Dividends / Cr Cash'},
 {s:'d',t:a=>`Pays a second cash dividend of ${eur(a)} to its shareholders.`,r:[500,3000],e:'Dr Dividends / Cr Cash'},
 {s:'d',t:a=>`Pays an interim dividend of ${eur(a)} in cash.`,r:[500,2500],e:'Dr Dividends / Cr Cash'},
 {s:null,t:a=>`Pays salaries of ${eur(a)}.`,r:[1000,5000],e:'Dr Salary expense / Cr Cash: salaries are an expense'},
 {s:null,t:a=>`Issues new shares for ${eur(a)} in cash.`,r:[5000,20000],st:1000,e:'Dr Cash / Cr Share capital'},
 {s:null,t:a=>`Pays ${eur(a)} of interest on the bank loan.`,r:[100,900],e:'Dr Interest expense / Cr Cash'}]}
};
// Missing figure: [account, normal side, debit label, credit label, unknown ('d','c','end'), opening range, debit range, credit range]
const MISS=[
 ['Cash','d','Cash receipts','Cash payments','d',[3000,12000],[15000,35000],[15000,30000]],
 ['Cash','d','Cash receipts','Cash payments','c',[3000,12000],[15000,35000],[15000,30000]],
 ['Cash','d','Cash receipts','Cash payments','end',[3000,12000],[15000,35000],[15000,30000]],
 ['Accounts receivable','d','Sales on account','Collections from customers','c',[2000,8000],[10000,25000],[8000,22000]],
 ['Accounts receivable','d','Sales on account','Collections from customers','d',[2000,8000],[10000,25000],[8000,22000]],
 ['Accounts receivable','d','Sales on account','Collections from customers','end',[2000,8000],[10000,25000],[8000,22000]],
 ['Accounts payable','c','Payments to suppliers','Purchases on account','c',[1500,6000],[6000,18000],[7000,20000]],
 ['Accounts payable','c','Payments to suppliers','Purchases on account','d',[1500,6000],[6000,18000],[7000,20000]],
 ['Accounts payable','c','Payments to suppliers','Purchases on account','end',[1500,6000],[6000,18000],[7000,20000]],
 ['Loan payable','c','Repayments','New borrowing','d',[10000,40000],[2000,8000],[5000,15000]],
 ['Loan payable','c','Repayments','New borrowing','end',[10000,40000],[2000,8000],[5000,15000]],
 ['Supplies','d','Supplies bought','Supplies used','c',[300,1500],[1000,4000],[800,3500]],
 ['Inventory','d','Purchases','Cost of goods sold','c',[3000,12000],[10000,30000],[9000,28000]],
 ['Inventory','d','Purchases','Cost of goods sold','d',[3000,12000],[10000,30000],[9000,28000]]
];

/* ---------- exercises (generic types): practice built only on the rules and worked examples of the sheets ---------- */
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const EXERCISES=[
// Topic 1
{id:'x-t1-cycle',topic:'t1',type:'order',src:'practice',title:'The accounting cycle',
 q:'Put the 8 steps of the accounting cycle in order.',
 items:['Identify transactions (record them in the journal)','Post ledger entries','Unadjusted trial balance','Adjusting entries','Adjusted trial balance','Financial statements','Closing entries','Post-closing trial balance'],
 e:'Order to remember: journal → ledger → trial balance → financial statements.'},
{id:'x-t1-types',topic:'t1',type:'match',src:'practice',title:'Account types',
 q:'Match each account with its type (course notation).',
 pairs:[['Cash','A (asset)'],['Accumulated depreciation','XA (contra-asset)'],['Accounts payable','L (liability)'],['Share capital','SE (equity)'],['Service revenue','R (revenue)'],['Salary expense','E (expense)']],
 e:'DEALER: dividends, expenses and assets increase on the debit side; liabilities, equity and revenues on the credit side. A contra-asset behaves like a credit account.'},
{id:'x-t1-equity',topic:'t1',type:'calc',src:'practice',title:'Accounting equation',
 gen:u=>{const L=u.step(20000,80000,1000),SC=u.step(20000,60000,1000),EN=u.step(5000,40000,1000);return {L,SC,EN,A:L+SC+EN}},
 q:v=>`A company reports total assets of <b>€${fmt(v.A)}</b> and total liabilities of <b>€${fmt(v.L)}</b>. Its share capital is <b>€${fmt(v.SC)}</b>.`,
 parts:[{label:'Total equity',answer:v=>v.A-v.L,unit:'€'},{label:'Retained earnings + net income (endogenous equity)',answer:v=>v.EN,unit:'€'}],
 solution:v=>F(`Equity = Assets − Liabilities = ${fmt(v.A)} − ${fmt(v.L)} = ${fmt(v.A-v.L)}\nEndogenous equity = Equity − Share capital = ${fmt(v.A-v.L)} − ${fmt(v.SC)} = ${fmt(v.EN)}`)+'<p>Share capital is exogenous wealth (brought by investors); retained earnings and net income of the year are endogenous wealth (performance).</p>'},
{id:'x-t1-journal',topic:'t1',type:'text',src:'practice',title:'Book of original entry',
 q:'In which book is a transaction recorded first, in chronological order?',
 accept:['journal','the journal','general journal','the general journal'],
 e:'The journal is the book of original entry. Entries are then posted to the ledger (the accounts).'},
// Topic 2
{id:'x-t2-netpurch',topic:'t2',type:'calc',src:'practice',title:'Net purchases',
 gen:u=>({P:u.step(100000,600000,5000),fr:u.step(1000,8000,500),ret:u.step(5000,30000,1000),al:u.step(1000,8000,500),di:u.step(2000,15000,1000)}),
 q:v=>`Purchases at invoice price €${fmt(v.P)}; freight-in €${fmt(v.fr)}; purchase returns €${fmt(v.ret)}; purchase allowances €${fmt(v.al)}; purchase discounts €${fmt(v.di)}. Compute net purchases.`,
 answer:v=>v.P+v.fr-v.ret-v.al-v.di,unit:'€',
 solution:v=>F(`Net purchases = Price + freight-in − returns − allowances − discounts\n= ${fmt(v.P)} + ${fmt(v.fr)} − ${fmt(v.ret)} − ${fmt(v.al)} − ${fmt(v.di)} = ${fmt(v.P+v.fr-v.ret-v.al-v.di)}`)},
{id:'x-t2-cogs',topic:'t2',type:'calc',src:'practice',title:'COGS and gross profit',
 gen:u=>{const BI=u.step(10000,40000,1000),P=u.step(60000,150000,1000),EI=u.step(10000,40000,1000),cogs=BI+P-EI,S=Math.round(cogs*u.pick([1.4,1.5,1.6,1.8,2])/1000)*1000;
   return {BI,P,EI,S,cogs,gp:S-cogs,pct:u.round((S-cogs)/S*100,1)}},
 q:v=>`Beginning inventory €${fmt(v.BI)}, purchases €${fmt(v.P)}, ending inventory €${fmt(v.EI)}, net sales €${fmt(v.S)}.`,
 parts:[{label:'COGS',answer:v=>v.cogs,unit:'€'},{label:'Gross profit',answer:v=>v.gp,unit:'€'},{label:'Gross profit % (one decimal)',answer:v=>v.pct,unit:'%',tol:0.1}],
 solution:v=>F(`COGS = Beginning inventory + Purchases − Ending inventory = ${fmt(v.BI)} + ${fmt(v.P)} − ${fmt(v.EI)} = ${fmt(v.cogs)}\nGross profit = Net sales − COGS = ${fmt(v.S)} − ${fmt(v.cogs)} = ${fmt(v.gp)}\nGP% = Gross profit / Net sales = ${fmt(v.gp)} / ${fmt(v.S)} = ${v.pct.toFixed(1)}%`)},
{id:'x-t2-fifo',topic:'t2',type:'calc',src:'practice',title:'FIFO: COGS and ending inventory',
 gen:u=>{const n1=u.step(10,40,5),c1=u.int(8,15),n2=u.step(20,60,5),c2=c1+u.int(1,5),s=n1+u.step(5,n2-5,5);return {n1,c1,n2,c2,s,cogs:n1*c1+(s-n1)*c2,ei:(n1+n2-s)*c2}},
 q:v=>`Beginning inventory: ${v.n1} units @ €${v.c1}. Purchase: ${v.n2} units @ €${v.c2}. The company then sells ${v.s} units. Perpetual system, FIFO.`,
 parts:[{label:'COGS',answer:v=>v.cogs,unit:'€'},{label:'Ending inventory',answer:v=>v.ei,unit:'€'}],
 solution:v=>F(`FIFO: the oldest units leave first.\nCOGS = ${v.n1} × ${v.c1} + ${v.s-v.n1} × ${v.c2} = ${fmt(v.n1*v.c1)} + ${fmt((v.s-v.n1)*v.c2)} = ${fmt(v.cogs)}\nEnding inventory = ${v.n1+v.n2-v.s} × ${v.c2} = ${fmt(v.ei)}  (latest cost)`)},
{id:'x-t2-xyz',topic:'t2',type:'case',src:'practice',title:'XYZ August: perpetual FIFO',
 q:'<p>Selling price €20 per unit. Beginning inventory 100 units @ €10. Aug 5: buy 50 @ €12. Aug 12: sell 80. Aug 15: buy 150 @ €14. Aug 20: sell 100. Aug 25: buy 50 @ €15. Aug 30: sell 70. Perpetual system, FIFO.</p>',
 parts:[
  {type:'numeric',q:'a. COGS of the Aug 12 sale',answer:800,unit:'€'},
  {type:'numeric',q:'b. COGS of the Aug 20 sale',answer:1220,unit:'€'},
  {type:'numeric',q:'c. COGS of the Aug 30 sale',answer:980,unit:'€'},
  {type:'numeric',q:'d. Ending inventory at 31 August',answer:1450,unit:'€'},
  {type:'numeric',q:'e. Gross profit for August',answer:2000,unit:'€'}],
 solution:T(['Date','Event','COGS','Inventory left'],[
['Aug 12','Sell 80','80×10 = 800','20@10, 50@12'],
['Aug 20','Sell 100','20×10 + 50×12 + 30×14 = 1 220','120@14'],
['Aug 30','Sell 70','70×14 = 980','50@14, 50@15']])+F('Total COGS = 3 000;  Ending inventory = 50×14 + 50×15 = 1 450\nGross profit = (80+100+70) × 20 − 3 000 = 5 000 − 3 000 = 2 000')},
{id:'x-t2-lifo',topic:'t2',type:'text',src:'practice',title:'Cost flow under IFRS',
 q:'Which cost flow assumption is <b>not</b> allowed under IFRS?',
 accept:['LIFO','last in first out','last-in first-out','last in, first out'],
 e:'LIFO (last in, first out) is not allowed under IFRS. FIFO is the method taught; weighted average is covered in Cost Accounting.'},
{id:'x-t2-liab',topic:'t2',type:'mcq',src:'practice',title:'Which ones are liabilities?',
 q:'Select every item that is a liability.',
 o:['Unearned revenue','Prepaid expenses','VAT payable','Accounts receivable','Salaries payable'],a:[0,2,4],
 e:'Unearned revenue (goods or services still owed to the customer), VAT payable (collected for the State) and salaries payable are liabilities. Prepaid expenses and accounts receivable are assets.'},
// Topic 3
{id:'x-t3-depr',topic:'t3',type:'calc',src:'practice',title:'Straight-line depreciation, part year',
 gen:u=>{const life=u.pick([4,5,8,10]),annual=u.step(2400,12000,1200),res=u.step(1000,6000,1000),M=u.pick([2,3,4,5,7,9,10]),mo=13-M;
   return {life,annual,res,cost:res+life*annual,M,mo,y1:annual*mo/12}},
 q:v=>`A machine is bought on 1 ${MONTHS[v.M-1]} for €${fmt(v.cost)}. Residual value €${fmt(v.res)}, useful life ${v.life} years, straight-line method, year-end 31 December.`,
 parts:[{label:'Annual depreciation',answer:v=>v.annual,unit:'€'},{label:'Depreciation expense in year 1',answer:v=>v.y1,unit:'€'},{label:'Book value at the end of year 2',answer:v=>v.cost-v.y1-v.annual,unit:'€'}],
 solution:v=>F(`Annual depreciation = (Cost − Residual) / Life = (${fmt(v.cost)} − ${fmt(v.res)}) / ${v.life} = ${fmt(v.annual)}\nYear 1 = ${fmt(v.annual)} × ${v.mo}/12 = ${fmt(v.y1)}\nBook value end of year 2 = ${fmt(v.cost)} − ${fmt(v.y1)} − ${fmt(v.annual)} = ${fmt(v.cost-v.y1-v.annual)}`)+J([['31 Dec','Depreciation expense','E+',v.y1,''],['','Accumulated depreciation','XA+','',v.y1]])},
{id:'x-t3-disposal',topic:'t3',type:'calc',src:'practice',title:'Gain or loss on disposal',
 gen:u=>{const cost=u.step(20000,90000,5000),ad=u.step(Math.round(cost*.3/1000)*1000,Math.round(cost*.8/1000)*1000,1000),bv=cost-ad;
   let pr=Math.max(0,bv+u.step(-8000,8000,500));if(pr===bv)pr+=1000;return {cost,ad,bv,pr,g:pr-bv}},
 q:v=>`Equipment that cost €${fmt(v.cost)}, with accumulated depreciation of €${fmt(v.ad)} (already updated to the disposal date), is sold for €${fmt(v.pr)} in cash. Enter a loss as a negative number.`,
 parts:[{label:'Book value at the disposal date',answer:v=>v.bv,unit:'€'},{label:'Gain (+) or loss (−)',answer:v=>v.g,unit:'€'}],
 solution:v=>F(`Book value = Cost − Accumulated depreciation = ${fmt(v.cost)} − ${fmt(v.ad)} = ${fmt(v.bv)}\nGain (loss) = Proceeds − Book value = ${fmt(v.pr)} − ${fmt(v.bv)} = ${v.g>0?fmt(v.g)+' gain':'('+fmt(-v.g)+') loss'}`)+
   J(v.g>0?[['','Accumulated depreciation','XA−',v.ad,''],['','Cash','A+',v.pr,''],['','PPE (equipment)','A−','',v.cost],['','Gain on disposal of PPE','R+','',v.g]]
          :[['','Accumulated depreciation','XA−',v.ad,''],...(v.pr?[['','Cash','A+',v.pr,'']]:[]),['','Loss on disposal of PPE','E+',-v.g,''],['','PPE (equipment)','A−','',v.cost]])},
{id:'x-t3-capex',topic:'t3',type:'match',src:'practice',title:'Capitalise or expense?',
 q:'For each cost on an existing asset, choose the treatment.',
 pairs:[['Major engine overhaul','Capitalise (asset)'],['Oil change','Expense'],['Addition of a building wing','Capitalise (asset)'],['Tune-up of a company vehicle','Expense'],['Replacement of an old motor with a new one','Capitalise (asset)'],['New tyres','Expense']],
 e:'Capital expenditure increases capacity or extends useful life; ordinary repairs and maintenance are expensed.'},
{id:'x-t3-vermeer',topic:'t3',type:'case',src:'practice',title:'Vermeer NV: cost and disposal',
 q:'<p>Vermeer NV buys a machine: price €35 000, installation €3 300, shipping €1 700, and oil for the first year of operation €500. Depreciation is €8 000 a year; accumulated depreciation at the end of 2022 is €18 000. The machine is disposed of on 1 October 2023. Enter a loss as a negative number.</p>',
 parts:[
  {type:'numeric',q:'a. Cost of the machine',answer:40000,unit:'€'},
  {type:'numeric',q:'b. Accumulated depreciation on 1 October 2023, after updating',answer:24000,unit:'€'},
  {type:'numeric',q:'c. Gain (loss) if the machine is scrapped for nothing',answer:-16000,unit:'€'},
  {type:'numeric',q:'d. Gain (loss) if it is sold for €24 000',answer:8000,unit:'€'},
  {type:'numeric',q:'e. Gain (loss) if it is sold for €10 000',answer:-6000,unit:'€'}],
 solution:'<p>Cost = 35 000 + 3 300 + 1 700 = <b>40 000</b> (the oil is an operating expense). First bring depreciation up to date: 18 000 + 8 000 × 9/12 = <b>24 000</b>, so the book value is 16 000.</p>'+
   T(['Scenario','Result','Entry'],[['Scrapped','Loss 16 000','Dr AD 24 000, Dr Loss 16 000 / Cr PPE 40 000'],['Sold €24 000','Gain 8 000','Dr AD 24 000, Dr Cash 24 000 / Cr PPE 40 000, Cr Gain 8 000'],['Sold €10 000','Loss 6 000','Dr AD 24 000, Dr Cash 10 000, Dr Loss 6 000 / Cr PPE 40 000']])},
// Topic 4
{id:'x-t4-issue',topic:'t4',type:'calc',src:'practice',title:'Share issue of a non-listed company',
 gen:u=>{const N=u.step(10000,50000,5000),par=u.pick([1,2,5,10]),price=par+u.pick([2.5,5,7.5,10,12.5,15]),raise=u.step(50000,300000,10000),n=Math.ceil(raise/price-1e-9);
   return {N,par,price,raise,n,SC:N*par,other:N*(price-par),eq:N*price}},
 q:v=>`A non-listed company has ${fmt(v.N)} shares outstanding. Its equity is share capital €${fmt(v.SC)} plus reserves and retained earnings €${fmt(v.other)}. It wants to raise €${fmt(v.raise)} by issuing new shares. French practice.`,
 parts:[{label:'Issue price per share',answer:v=>v.price,unit:'€'},{label:'Number of new shares',answer:v=>v.n,tol:0},{label:'Increase in share capital',answer:v=>v.n*v.par,unit:'€'},{label:'Share premium',answer:v=>v.n*(v.price-v.par),unit:'€'}],
 solution:v=>F(`Issue price = Total equity / Shares outstanding = ${fmt(v.eq)} / ${fmt(v.N)} = ${fmt(v.price)}\nNew shares = ${fmt(v.raise)} / ${fmt(v.price)} = ${fmt(v.raise/v.price)} → ${fmt(v.n)} (round up)\nPar value = Share capital / Shares outstanding = ${fmt(v.SC)} / ${fmt(v.N)} = ${fmt(v.par)}\nShare capital = ${fmt(v.par)} × ${fmt(v.n)} = ${fmt(v.n*v.par)}\nShare premium = (${fmt(v.price)} − ${fmt(v.par)}) × ${fmt(v.n)} = ${fmt(v.n*(v.price-v.par))}`)+
   J([['','Cash','A+',v.n*v.price,''],['','Share capital','SE+','',v.n*v.par],['','Share premium','SE+','',v.n*(v.price-v.par)]])},
{id:'x-t4-kimi',topic:'t4',type:'numeric',src:'practice',title:'KiMi: seasoned equity offering',
 q:'KiMi needs €9 000 000. December share price: high €47.29, low €43.10. New shares are issued at a 15% discount on the average December price.',
 parts:[{label:'Issue price',answer:38.416,unit:'€',tol:0.02},{label:'Shares to issue at €38.40',answer:234375,tol:0}],
 solution:F('Average December price ≈ (47.29 + 43.10) / 2 = 45.195\nIssue price = 45.195 × 0.85 = 38.416 ≈ 38.4\nShares = 9 000 000 / 38.4 = 234 375')},
{id:'x-t4-annuity',topic:'t4',type:'calc',src:'practice',title:'Constant annuity: first instalment',
 gen:u=>{const P=u.step(50000,300000,10000),r=u.pick([3,4,5,6,7,8]),n=u.pick([60,84,120]),i=r/1200,A=u.round(P*i/(1-Math.pow(1+i,-n)),2),I=u.round(P*i,2);
   return {P,r,n,A,I,K:u.round(A-I,2)}},
 q:v=>`A bank loan of €${fmt(v.P)} at ${v.r}% a year is repaid by ${v.n} constant monthly instalments of €${fmt(v.A)}.`,
 parts:[{label:'Interest in the first instalment',answer:v=>v.I,unit:'€'},{label:'Principal repaid in the first instalment',answer:v=>v.K,unit:'€',tol:0.02}],
 solution:v=>F(`Interest = Outstanding principal × rate × 1/12 = ${fmt(v.P)} × ${v.r}% × 1/12 = ${fmt(v.I)}\nPrincipal repaid = Annuity − Interest = ${fmt(v.A)} − ${fmt(v.I)} = ${fmt(v.K)}`)+
   J([['','Interest expense','E+',v.I,''],['','Financial loan ST','L−',v.K,''],['','Cash','A−','',v.A]])},
{id:'x-t4-divdate',topic:'t4',type:'mcq',src:'practice',title:'When is the dividend liability created?',
 q:'Shareholders approve a dividend on 15 March; it is paid on 5 May. When is <i>Dividends payable</i> credited?',
 o:['On 31 December of the year the profit was made','On 15 March, at the declaration','On 5 May, at the payment','Never: dividends go straight to cash'],a:1,
 e:'Declaration: Dr Net income of prior year (or Retained earnings) / Cr Dividends payable. Payment: Dr Dividends payable / Cr Cash.'},
{id:'x-t4-treasury',topic:'t4',type:'text',src:'practice',title:'Own shares bought back',
 q:'What are a company’s own shares, bought back by the company, called? (two words)',
 accept:['treasury shares','treasury share','treasury stock'],
 e:'Treasury shares are shown as a negative amount in equity; they lose dividend and voting rights.'},
// Topic 5
{id:'x-t5-db',topic:'t5',type:'calc',src:'practice',title:'Double declining-balance',
 gen:u=>{const N=u.pick([4,5]),pct=200/N,cost=u.step(20000,120000,2500),res=u.step(1000,Math.max(1000,Math.round(cost*(1-pct/100)**(N-1)*0.8/1000)*1000),500);const y1=cost*pct/100,y2=(cost-y1)*pct/100;return {N,pct,cost,res,y1,y2,bv2:cost-y1-y2}},
 q:v=>`An asset bought on 1 January costs €${fmt(v.cost)}; residual value €${fmt(v.res)}; useful life ${v.N} years. Double declining-balance method.`,
 parts:[{label:'Rate (%)',answer:v=>v.pct,unit:'%'},{label:'Depreciation, year 1',answer:v=>v.y1,unit:'€'},{label:'Depreciation, year 2',answer:v=>v.y2,unit:'€'},{label:'Book value at the end of year 2',answer:v=>v.bv2,unit:'€'}],
 solution:v=>F(`Rate = 100% / ${v.N} × 2 = ${v.pct}%\nYear 1 = ${fmt(v.cost)} × ${v.pct}% = ${fmt(v.y1)}\nYear 2 = (${fmt(v.cost)} − ${fmt(v.y1)}) × ${v.pct}% = ${fmt(v.y2)}\nBook value end of year 2 = ${fmt(v.cost)} − ${fmt(v.y1)} − ${fmt(v.y2)} = ${fmt(v.bv2)}\nThe residual value (${fmt(v.res)}) only caps the final year.`)},
{id:'x-t5-partial',topic:'t5',type:'calc',src:'practice',title:'Straight-line over N + 1 periods',
 gen:u=>{const N=u.pick([4,5,8,10]),annual=u.step(2400,12000,1200),res=u.step(1000,5000,1000),M=u.pick([2,3,4,5,7,9,10,11]),mo=13-M;return {N,annual,res,cost:res+N*annual,M,mo,first:annual*mo/12,last:annual*(12-mo)/12}},
 q:v=>`A machine is bought on 1 ${MONTHS[v.M-1]} for €${fmt(v.cost)}; residual value €${fmt(v.res)}; useful life ${v.N} years; straight-line; year-end 31 December.`,
 parts:[{label:'Depreciation in the year of purchase',answer:v=>v.first,unit:'€'},{label:'Depreciation in the last period (year N+1)',answer:v=>v.last,unit:'€'}],
 solution:v=>F(`Annual = (${fmt(v.cost)} − ${fmt(v.res)}) / ${v.N} = ${fmt(v.annual)}\nFirst year: ${fmt(v.annual)} × ${v.mo}/12 = ${fmt(v.first)}\nYear N+1: ${fmt(v.annual)} × (12 − ${v.mo})/12 = ${fmt(v.last)}`)},
{id:'x-t5-impair',topic:'t5',type:'calc',src:'practice',title:'Impairment test on PPE',
 gen:u=>{const life=u.pick([5,10,20]),annual=u.step(2000,10000,1000),res=u.step(0,20000,5000),cost=res+life*annual,yrs=u.int(1,Math.min(4,life-1)),ad=annual*yrs,nbv=cost-ad,rec=nbv-u.step(1000,Math.max(1000,Math.round(nbv*0.3/1000)*1000),1000);return {life,annual,res,cost,yrs,ad,nbv,rec,loss:nbv-rec}},
 q:v=>`PPE bought on 1 January for €${fmt(v.cost)}; useful life ${v.life} years; salvage value €${fmt(v.res)}; straight-line. After ${v.yrs} full year${v.yrs>1?'s':''}, signs of a drop in value lead to an impairment test: recoverable amount €${fmt(v.rec)}.`,
 parts:[{label:'Accumulated depreciation',answer:v=>v.ad,unit:'€'},{label:'Net book value',answer:v=>v.nbv,unit:'€'},{label:'Impairment loss',answer:v=>v.loss,unit:'€'}],
 solution:v=>F(`Annual depreciation = (${fmt(v.cost)} − ${fmt(v.res)}) / ${v.life} = ${fmt(v.annual)}\nAccumulated depreciation = ${v.yrs} × ${fmt(v.annual)} = ${fmt(v.ad)}\nNet book value = ${fmt(v.cost)} − ${fmt(v.ad)} = ${fmt(v.nbv)} > ${fmt(v.rec)}\nImpairment loss = ${fmt(v.nbv)} − ${fmt(v.rec)} = ${fmt(v.loss)}`)+J([['Dec 31','Impairment expense','E+',v.loss,''],['','Impairment of PPE','XA+','',v.loss]])},
{id:'x-t5-baddebt',topic:'t5',type:'calc',src:'practice',title:'Allowance for doubtful accounts',
 gen:u=>{const open=u.step(3000,20000,500),wo=u.step(500,open-500,500),need=u.step(1000,15000,500),exp=need-(open-wo);return exp>0?{open,wo,need,exp,left:open-wo}:{open,wo,need:open-wo+1500,exp:1500,left:open-wo}},
 q:v=>`The allowance for doubtful accounts is €${fmt(v.open)} at the start of the year. During the year, receivables of €${fmt(v.wo)} are written off (bankrupt customers). At year-end, €${fmt(v.need)} of A/R is estimated uncollectible.`,
 parts:[{label:'Allowance before the year-end adjustment',answer:v=>v.left,unit:'€'},{label:'Bad debt expense of the year',answer:v=>v.exp,unit:'€'}],
 solution:v=>F(`Allowance: ${fmt(v.open)} − ${fmt(v.wo)} (write-offs) = ${fmt(v.left)}\nNeeded ${fmt(v.need)}  →  bad debt expense = ${fmt(v.need)} − ${fmt(v.left)} = ${fmt(v.exp)}`)+J([['During the year','Allowance for doubtful accounts','XA−',v.wo,''],['','A/R','A−','',v.wo],['Year-end','Bad debt expense','E+',v.exp,''],['','Allowance for doubtful accounts','XA+','',v.exp]])},
{id:'x-t5-lcnrv',topic:'t5',type:'calc',src:'practice',title:'Lower of cost and NRV',
 gen:u=>{const items=[0,1,2,3].map(()=>{const c=u.step(300,1500,100);return {c,n:Math.max(100,c+u.pick([-400,-300,-200,-100,100,200,300]))}});const kept=items.reduce((s,i)=>s+Math.min(i.c,i.n),0),cost=items.reduce((s,i)=>s+i.c,0);return {items,kept,cost,wd:cost-kept}},
 q:v=>`Year-end inventory (cost / net realizable value): ${v.items.map((i,k)=>`item ${k+1}: €${fmt(i.c)} / €${fmt(i.n)}`).join('; ')}.`,
 parts:[{label:'Inventory reported in the balance sheet',answer:v=>v.kept,unit:'€'},{label:'Loss on inventory write-down',answer:v=>v.wd,unit:'€'}],
 solution:v=>T(['Item','Cost','NRV','LCNRV','Adjustment'],v.items.map((i,k)=>[String(k+1),fmt(i.c),fmt(i.n),fmt(Math.min(i.c,i.n)),i.n<i.c?fmt(i.n-i.c):'0']).concat([['<b>Total</b>',fmt(v.cost),'',fmt(v.kept),fmt(-v.wd)]]),[1,2,3,4])+(v.wd?J([['Dec 31','Loss on inventory write-down','E+',v.wd,''],['','Allowance for inventory losses','XA+','',v.wd]]):'<p>No write-down needed.</p>')},
{id:'x-t5-cat',topic:'t5',type:'match',src:'practice',title:'Which category of adjustment?',
 q:'Match each adjustment with its category (Topic 5 slides).',
 pairs:[['Unearned revenue earned on delivery','Prepaids'],['Insurance paid in advance and consumed','Prepaids'],['Depreciation of PPE','Adjustment of assets'],['Impairment of A/R','Adjustment of assets'],['Write-down of inventory','Adjustment of assets'],['Accrued expenses','Accruals'],['Customer warranties','Provisions for risks']],
 e:'Accruals and provisions for risks are stamped "Not discussed in this course"; accrual-type entries still appear in the Topic 6 and 8 exercises.'},
{id:'x-t5-apollyon',topic:'t5',type:'case',src:'course',title:'Apollyon Inc. (Topic 5 extra exercise)',
 q:'<p>Machinery bought 1 April 2020 for €2 000 000 (20 years, salvage €200 000, straight-line); recoverable amount €1 500 000 on 31 Dec 2023. Inventory (qty × unit cost / NRV): 100 × 600 / 580; 90 × 200 / 220; 150 × 820 / 800; 200 × 700 / 650. Allowance €500 000 at the end of 2022; a €150 000 client goes bankrupt in 2023; €600 000 doubtful at year-end. Other 2023 data (thousands €): revenue 6 250; COGS 170; salaries 150 paid + 20 to pay; supplies used 70% of 100; interest 150; tax 25%.</p>',
 parts:[{type:'numeric',q:'a. Depreciation for 2020 (€)',answer:67500,unit:'€'},{type:'numeric',q:'b. Impairment loss on 31 Dec 2023 (€)',answer:162500,unit:'€'},{type:'numeric',q:'c. Inventory write-down (€)',answer:15000,unit:'€'},{type:'numeric',q:'d. Bad debt expense 2023 (€)',answer:250000,unit:'€'},{type:'numeric',q:'e. Net income 2023 (thousands €)',answer:3879.375,tol:1}],
 solution:F('a. (2 000 000 − 200 000) / 20 × 9/12 = 67 500\nb. 2 000 000 − (67 500 + 3 × 90 000) = 1 662 500 − 1 500 000 = 162 500\nc. 100 × 20 + 150 × 20 + 200 × 50 = 15 000\nd. 600 000 − (500 000 − 150 000) = 250 000\ne. 6 250 − 170 − 90 − 162.5 − 170 − 70 − 15 − 250 − 150 = 5 172.5;  − 25% tax = 3 879.4')+'<p>Note: the official solution gives total inventory €348 000; with Item 2 at 90 × €200 = €18 000 it is €326 000. See the Topic 5 sheet.</p>'},
// Topic 6
{id:'x-t6-tax',topic:'t6',type:'calc',src:'practice',title:'Income tax and net income',
 gen:u=>{const R=u.step(40000,150000,1000),E=u.step(10000,Math.round(R*0.8/1000)*1000,1000);return {R,E,pbt:R-E,tax:(R-E)*0.25,ni:(R-E)*0.75}},
 q:v=>`Revenues €${fmt(v.R)}; expenses other than income tax €${fmt(v.E)}; corporate tax rate 25%.`,
 parts:[{label:'Income before tax',answer:v=>v.pbt,unit:'€'},{label:'Income tax expense',answer:v=>v.tax,unit:'€'},{label:'Net income',answer:v=>v.ni,unit:'€'}],
 solution:v=>F(`Income before tax = ${fmt(v.R)} − ${fmt(v.E)} = ${fmt(v.pbt)}\nIncome tax = ${fmt(v.pbt)} × 25% = ${fmt(v.tax)}\nNet income = ${fmt(v.ni)}`)+J([['Dec 31','Income tax expense','E+',v.tax,''],['','Income tax payable','L+','',v.tax]])},
{id:'x-t6-sharediv',topic:'t6',type:'calc',src:'practice',title:'Share dividend',
 gen:u=>{const N=u.step(20000,200000,10000),p=u.pick([5,10,15,20]),price=u.pick([8,10,12,15,20,25]);return {N,p,price,n:N*p/100,val:N*p/100*price}},
 q:v=>`The company has ${fmt(v.N)} shares outstanding, trading at €${v.price}. It declares a ${v.p}% share dividend, distributed immediately (course convention).`,
 parts:[{label:'New shares distributed',answer:v=>v.n,tol:0},{label:'Amount debited to net income of the year',answer:v=>v.val,unit:'€'}],
 solution:v=>F(`New shares = ${fmt(v.N)} × ${v.p}% = ${fmt(v.n)}\nValue = ${fmt(v.n)} × €${v.price} = ${fmt(v.val)}`)+J([['','Net income of the year','SE−',v.val,''],['','Share capital','SE+','',v.val]])+'<p>Total equity is unchanged.</p>'},
{id:'x-t6-legal',topic:'t6',type:'calc',src:'practice',title:'French legal reserve',
 gen:u=>{const P=u.step(20000,400000,10000),SC=u.step(500000,2000000,100000);return {P,SC,lr:P*5/100,max:P*95/100}},
 q:v=>`A French company makes an annual profit of €${fmt(v.P)}. Its share capital is €${fmt(v.SC)} and its legal reserve is still far below 10% of share capital.`,
 parts:[{label:'Amount allocated to the legal reserve',answer:v=>v.lr,unit:'€'},{label:'Maximum dividend',answer:v=>v.max,unit:'€'}],
 solution:v=>F(`Legal reserve: 5% × ${fmt(v.P)} = ${fmt(v.lr)} (until the reserve equals 10% × ${fmt(v.SC)} = ${fmt(v.SC/10)})\nMaximum dividend: 95% × ${fmt(v.P)} = ${fmt(v.max)}`)},
{id:'x-t6-fras',topic:'t6',type:'match',src:'practice',title:'France or Anglo-Saxon world?',
 q:'Match each rule with the system it belongs to.',
 pairs:[['A legal reserve is required','France'],['The board of directors decides the dividends','Anglo-Saxon world'],['Statements are presented before appropriation','France'],['Retained earnings can also be distributed','Anglo-Saxon world'],['Shareholders decide at the annual general meeting','France'],['Statements are presented after appropriation','Anglo-Saxon world']],
 e:'France: legal reserve, net income of the year only, shareholders decide, before appropriation. Anglo-Saxon: no legal reserve, net income + retained earnings, board decides, after appropriation.'},
{id:'x-t6-path',topic:'t6',type:'order',src:'course',title:'From the journal to the final statements',
 q:'Put the steps in order (Topic 6 slide "Preparing final financial statements").',
 items:['Journal','Ledger','Unadjusted trial balance','Adjusting entries','Adjusted trial balance','Financial statements (balance sheet, income statement, SOCE, cash flow statement)']},
{id:'x-t6-redlotus',topic:'t6',type:'case',src:'course',title:'RedLotus Travel, 30 June 2024',
 q:'<p>Unadjusted trial balance (total 89 300): cash 34 800, A/R 2 200, supplies 700, prepaid rent 3 000, land 23 200, equipment 24 000, A/P 13 100, unearned service revenue 400, share capital 50 000, retained earnings 18 800, service revenue 7 000, salary expense 900, utilities expense 500. Adjustments: a) one month of rent (1 000); b) 400 of the 700 supplies left; c) 5 of 10 prepaid bookings made (400 advance); d) salary of 900 owed; e) commission 30 × 10 bookings earned; f) one month of depreciation on 24 000 over 5 years; g) income tax 25%.</p>',
 parts:[{type:'numeric',q:'a. Adjusted service revenue',answer:7500,unit:'€'},{type:'numeric',q:'b. Adjusted salary expense',answer:1800,unit:'€'},{type:'numeric',q:'c. Income tax expense',answer:875,unit:'€'},{type:'numeric',q:'d. Net income',answer:2625,unit:'€'},{type:'numeric',q:'e. Total of the adjusted trial balance',answer:91775,unit:'€'},{type:'numeric',q:'f. Total assets in the final balance sheet',answer:86500,unit:'€'}],
 solution:F('a. 7 000 + 200 + 300 = 7 500\nb. 900 + 900 = 1 800\nc. (7 500 − 1 000 − 1 800 − 300 − 400 − 500) × 25% = 3 500 × 25% = 875\nd. 3 500 − 875 = 2 625\ne. 89 300 + adjustments on both sides: 91 775\nf. 23 200 + 24 000 − 400 + 2 000 + 400 + 2 500 + 34 800 = 86 500')},
{id:'x-t6-soce',topic:'t6',type:'case',src:'course',title:'ABC Corporation: statement of changes in equity',
 q:'<p>1 Jan 2023: share capital 100 000 (par 10), share premium 15 000, retained earnings 15 000. 2023: 2 000 shares issued at 25 (French principle); 1 000 own shares bought back at 15; net profit 25 000; interim dividends 12 000 declared and paid.</p>',
 parts:[{type:'numeric',q:'a. Share capital at 31 Dec 2023',answer:120000,unit:'€'},{type:'numeric',q:'b. Share premium at 31 Dec 2023',answer:45000,unit:'€'},{type:'numeric',q:'c. Net income of 2023 left in equity',answer:13000,unit:'€'},{type:'numeric',q:'d. Total equity at 31 Dec 2023',answer:178000,unit:'€'}],
 solution:F('a. 100 000 + 2 000 × 10 = 120 000\nb. 15 000 + 2 000 × (25 − 10) = 45 000\nc. 25 000 − 12 000 = 13 000\nd. 130 000 + 50 000 − 15 000 + 25 000 − 12 000 = 178 000')},
// Topic 7
{id:'x-t7-classify',topic:'t7',type:'match',src:'course',title:'Classify the cash flows',
 q:'Classify each activity (Topic 7 slide).',
 pairs:[['Issuance of shares','Financing / cash inflow'],['Purchase of inventory on account','Operating / no cash'],['Depreciation of equipment','Operating / no cash'],['Services provided with cash payment','Operating / cash inflow'],['Dividends distribution','Financing / cash outflow'],['Purchase of land in cash','Investing / cash outflow'],['Taking out a loan from a bank','Financing / cash inflow'],['Payment of wages','Operating / cash outflow']],
 extra:['Investing / cash inflow'],
 e:'Operating = core activities; investing = long-term assets; financing = shares, dividends, loans. Depreciation and purchases on account move no cash.'},
{id:'x-t7-indirect',topic:'t7',type:'calc',src:'practice',title:'Operating cash flow, indirect method',
 gen:u=>{const NI=u.step(5000,40000,500),dep=u.step(500,8000,100),ar=u.step(-3000,3000,100),inv=u.step(-3000,3000,100),ap=u.step(-2000,2000,100),g=u.pick([-800,-500,0,0,300,600]);return {NI,dep,ar,inv,ap,g,cfo:NI+dep-ar-inv+ap-g}},
 q:v=>`Net income €${fmt(v.NI)}; depreciation €${fmt(v.dep)}; A/R ${v.ar>=0?'increased':'decreased'} by €${fmt(Math.abs(v.ar))}; inventory ${v.inv>=0?'increased':'decreased'} by €${fmt(Math.abs(v.inv))}; A/P ${v.ap>=0?'increased':'decreased'} by €${fmt(Math.abs(v.ap))}${v.g?`; ${v.g>0?'gain':'loss'} on the sale of equipment €${fmt(Math.abs(v.g))}`:''}.`,
 answer:v=>v.cfo,unit:'€',
 solution:v=>F(`Operating cash flow = ${fmt(v.NI)} + ${fmt(v.dep)} ${v.ar>=0?'−':'+'} ${fmt(Math.abs(v.ar))} (A/R) ${v.inv>=0?'−':'+'} ${fmt(Math.abs(v.inv))} (inventory) ${v.ap>=0?'+':'−'} ${fmt(Math.abs(v.ap))} (A/P)${v.g?` ${v.g>0?'−':'+'} ${fmt(Math.abs(v.g))} (${v.g>0?'gain':'loss'})`:''} = ${fmt(v.cfo)}`)+'<p>Asset up → outflow; liability up → inflow; gains are subtracted and losses added back (the sale proceeds go to investing).</p>'},
{id:'x-t7-wc',topic:'t7',type:'mcq',src:'practice',title:'Added to net income?',
 q:'Indirect method: which items are <b>added</b> to net income?',
 o:['Depreciation expense','Decrease in A/R','Increase in inventory','Increase in A/P','Gain on sale of equipment','Loss on sale of investments'],a:[0,1,3,5],
 e:'Added: non-cash expenses, decreases in operating assets, increases in operating liabilities, losses on sale. Subtracted: increases in operating assets and gains on sale.'},
{id:'x-t7-start',topic:'t7',type:'text',src:'course',title:'Starting point of the indirect method',
 q:'With the indirect method, what is the starting point of the cash flow statement? (two words)',
 accept:['net income','the net income','net profit','net income of the year'],
 e:'RESPIR question 1: the indirect method starts from net income (10 246) and adjusts it.'},
{id:'x-t7-edison',topic:'t7',type:'case',src:'course',title:'Edison Corporation, 2017',
 q:'<p>Net income 405 (including a gain on sale of investments of 40). Balance sheets 2017 / 2016: cash 900 / 575; A/R 875 / 650; inventory 800 / 950; plant assets 950 / 850; accumulated depreciation (600) / (585); long-term investments 650 / 710; A/P 600 / 450; accrued liabilities 100 / 125; bonds payable 700 / 775; capital stock 950 / 850; retained earnings 1 225 / 950. Dividend paid 130; plant assets of 35 paid by issuing common stock.</p>',
 parts:[{type:'numeric',q:'a. Operating cash flow',answer:430},{type:'numeric',q:'b. Investing cash flow',answer:35},{type:'numeric',q:'c. Financing cash flow (negative if outflow)',answer:-140},{type:'numeric',q:'d. Net increase in cash',answer:325}],
 solution:F('a. 405 + 15 + 150 + 150 − 225 − 25 − 40 = 430\nb. sale of investments 60 + 40 = 100;  plant assets (950 − 850) − 35 = 65 paid  →  100 − 65 = 35\nc. shares (950 − 850) − 35 = 65;  bonds −75;  dividends −130  →  −140\nd. 430 + 35 − 140 = 325;  575 + 325 = 900')},
{id:'x-t7-respir',topic:'t7',type:'case',src:'course',title:'RESPIR, 2020',
 q:'<p>Net income 10 246; accumulated depreciation 25 520 → 36 791; tangible assets 100 000 → 125 977 (purchase); LT investments (gross 1 490) sold for 845; inventories 1 113 → 657; A/R 12 972 → 12 624; A/P 3 186 → 2 487; salaries payable 5 019 → 0; capital increase in cash 12 000; dividends paid 5 111; new bank loan 6 000; LT debt repaid 1 285; opening cash 2 885.</p>',
 parts:[{type:'numeric',q:'a. Operating cash flow',answer:17248,unit:'€'},{type:'numeric',q:'b. Investing cash flow',answer:-25132,unit:'€'},{type:'numeric',q:'c. Financing cash flow',answer:11604,unit:'€'},{type:'numeric',q:'d. Closing cash',answer:6605,unit:'€'}],
 solution:F('a. 10 246 + 11 271 + 645 + 348 + 456 − 699 − 5 019 = 17 248\nb. −25 977 + 845 = −25 132\nc. 12 000 + 6 000 − 1 285 − 5 111 = 11 604\nd. 2 885 + 17 248 − 25 132 + 11 604 = 6 605')},
// Topic 8
{id:'x-t8-limits',topic:'t8',type:'mcq',src:'practice',title:'Limitations of financial statements',
 q:'Which are limitations of financial statements listed in Topic 8?',
 o:['Based on historical data','Based on estimates and judgements','Prepared in one currency only','Potential for manipulation','Exclusion of non-financial information','Audited only once every five years','Static in nature'],a:[0,1,3,4,6],
 e:'The five limitations: historical data, estimates and judgements, potential for manipulation, exclusion of non-financial information, static nature.'},
{id:'x-t8-em',topic:'t8',type:'text',src:'practice',title:'Name the practice',
 q:'Management uses the flexibility of estimates (inventory method, allowance for doubtful accounts) to present results more favourably. What is this practice called?',
 accept:['earnings management','earning management','managing earnings'],
 e:'Earnings management can distort the true performance and mislead investors and regulators.'},
{id:'x-t8-abc',topic:'t8',type:'case',src:'practice',title:'Tutorial ABC, Antwerp (computed solution)',
 q:'<p>Use the Topic 8 tutorial data (sheet, section 2). <b>No official solution exists</b>: the answers are computed with the course rules.</p>',
 parts:[{type:'numeric',q:'a. Total revenue 2023',answer:8500,unit:'€'},{type:'numeric',q:'b. Net income 2023',answer:3200,unit:'€'},{type:'numeric',q:'c. Total of the adjusted trial balance',answer:77400,unit:'€'},{type:'numeric',q:'d. Total assets on 31 Dec 2023',answer:70100,unit:'€'},{type:'numeric',q:'e. Operating cash flow',answer:15600,unit:'€'},{type:'numeric',q:'f. Cash on 31 Dec 2023',answer:45100,unit:'€'}],
 solution:F('a. 5 000 + 1 500 + 2 000 = 8 500\nb. 8 500 − (1 500 + 300 + 1 500 + 600 + 800 + 600) = 3 200\nd. 13 500 + 1 500 + 10 000 + 45 100 = 70 100\ne. 3 200 + 1 500 − 5 000 − 1 500 + 14 500 + 1 500 + 1 400 = 15 600\nf. 25 000 + 15 600 − 15 000 + 19 500 = 45 100')+'<p>Full entries and statements: Topic 8 sheet.</p>'},
{id:'x-t8-essay',topic:'t8',type:'case',src:'practice',title:'Explain two limitations',
 q:'<p>In five lines, explain two limitations of financial statements and give an example for each.</p>',
 solution:'<ul><li><b>Historical data</b>: book values of past transactions; market values are not always reflected.</li><li><b>Estimates and judgements</b>: depreciation method, inventory valuation, allowance for doubtful debts → subjectivity and possible bias.</li><li><b>Manipulation</b>: earnings management, e.g. changing the inventory method.</li><li><b>Non-financial information</b>: sustainability (ESG) reporting, customer satisfaction, reputation are missing.</li><li><b>Static</b>: a date or a period, not real time; published with a time lag.</li></ul>'}
];

/* ---------- mock exams (end-term: MCQs + exercises, 2 hours, Topics 1–8) ----------
   No past end-term paper on the course platform: the format follows the announcement (scope, "MCQs + exercises", 2 hours) and the Q&A session 5.
   Chosen for the site: 20 points = Part A, 16 MCQs × 0.5 (two per topic) + Part B, 5 exercises (12 points: Topics 1–4, 5, 6, 7, 8).
   Every question is new (none repeats the quiz, the drills or the exercises); difficulty rises from Mock 1 to Mock 3. */
const Dr=(a,d,dt)=>({a:[].concat(a),d,dt}),Cr=(a,c,dt)=>({a:[].concat(a),c,dt});
/* ---------- v2 (24/11/2026): layered sheets, glossary, generators tab, tools (CONVENTIONS.md section 16) ---------- */
const {LAYERED}=Rev.h;
const U=Rev.u,n2=x=>fmt(U.round(x,2));
const OUT='<b>Outside the slides:</b>';

/* ---------- v2: layered sheets (45 notions) ---------- */
const NT=(id,ess,tryit)=>({id,ess:`<p>${ess}</p>`,tryit});
SHEETS.t1=LAYERED(SHEETS.t1,[
 NT('t1-activities','A business does three things: <b>financing</b> (raise funds from owners and lenders), <b>investing</b> (buy long-term assets), <b>operating</b> (produce, sell, pay expenses).',{q:'Buying a delivery truck is a… activity',o:['investing','financing','operating'],a:0,e:'A long-term asset.'}),
 NT('t1-equation','<b>Assets = Liabilities + Equity</b> after every transaction. Equity grows with share capital and net income, shrinks with dividends.',{q:'Assets 80 000, liabilities 30 000. Equity?',answer:50000,tol:0,e:'80 000 − 30 000.'}),
 NT('t1-statements','Income statement (revenues − expenses = net income) → statement of changes in equity (retained earnings) → balance sheet; the cash flow statement explains the change in cash.',{q:'Net income flows from the income statement into…',o:['retained earnings (equity)','cash only','liabilities'],a:0,e:'It links the statements.'}),
 NT('t1-cycle','Accounting cycle: analyse → journalize → post → trial balance → adjust → adjusted trial balance → statements → close.',{q:'Which comes first?',o:['Journalize the transaction','Prepare the trial balance','Close the accounts'],a:0,e:'Then post to the ledger.'}),
 NT('t1-dc','Every transaction debits and credits equal amounts. <b>DEALER</b>: Dividends, Expenses, Assets increase on the <b>debit</b>; Liabilities, Equity, Revenues on the <b>credit</b>.',{q:'Paying cash for salaries: cash is…',o:['credited (A−)','debited (A+)'],a:0,e:'Cash decreases: credit. Salary expense increases: debit.'}),
 NT('t1-format','Course format: date, account, type and effect (A+, L−, SE+, R+, E+, XA−), debit, credit; debits first. Personal transactions of owners are not recorded.',{q:'A sale for cash is written Cash A+ / Sales revenue…',o:['R+','R−','SE−'],a:0,e:'Revenue increases.'})]);
SHEETS.t2=LAYERED(SHEETS.t2,[
 NT('t2-accrual','<b>Accrual basis</b>: revenue when earned, expense when incurred, whatever the cash timing (IFRS). Cash basis records only cash movements.',{q:'Services delivered in December, paid in January: revenue in…',o:['December','January'],a:0,e:'Earned in December.'}),
 NT('t2-timing','Cash now → cash; later → receivable/payable (on account); before → unearned revenue or prepaid expense (in advance).',{q:'A customer pays in advance for next month: credit…',o:['Unearned revenue (L+)','Sales revenue (R+)'],a:0,e:'Not earned yet: a liability.'}),
 NT('t2-class','Current (&lt; 1 year) vs non-current. Current assets: cash, receivables, prepaids, inventory, supplies. Non-current: PPE, intangibles, long-term investments.',{q:'Supplies are…',o:['a current asset','a non-current asset','an expense when bought'],a:0,e:'Held to use in the short run.'}),
 NT('t2-vat','VAT is collected for the State: a <b>liability</b> (VAT payable), never revenue; excluded from the cost of PPE.',{q:'Sale of 200 000 excluding VAT at 20%: VAT payable?',answer:40000,tol:0,e:'200 000 × 20%.'}),
 NT('t2-inv','Inventory includes purchase price + transport-in, minus returns and discounts. COGS = opening inventory + net purchases − closing inventory; gross profit = sales − COGS.',{q:'Opening 5 000, net purchases 20 000, closing 7 000. COGS?',answer:18000,tol:0,e:'5 000 + 20 000 − 7 000.'}),
 NT('t2-fifo','<b>FIFO</b>: the oldest units are sold first, so closing inventory is valued at the most recent prices.',{q:'Under FIFO, closing inventory reflects…',o:['the most recent purchase prices','the oldest prices','an average'],a:0,e:'First in, first out.'})]);
SHEETS.t3=LAYERED(SHEETS.t3,[
 NT('t3-invest','Investment decisions buy long-term assets: PPE (tangible), intangibles, financial assets.',{q:'A patent is…',o:['an intangible asset','PPE','a financial asset'],a:0,e:'Non-physical, long-term.'}),
 NT('t3-cost','Cost of PPE = price + all costs needed to bring it to working condition (transport, installation, non-refundable taxes, fees); <b>not</b> training, VAT or administration.',{q:'Machine 500 000 + transport 24 000 + installation 2 000 + training 12 000. Cost?',answer:526000,tol:0,e:'Training is excluded.'}),
 NT('t3-dep','Straight-line: <b>(cost − residual value) / useful life</b>, × months used / 12 in a partial year. Book value = cost − accumulated depreciation.',{q:'Cost 65 000, residual 5 000, 10 years, bought 1 July. Depreciation of year 1?',answer:3000,tol:0,e:'6 000 × 6/12.'}),
 NT('t3-sub','Capitalise costs that extend life, capacity or quality; expense repairs and maintenance. Then revise depreciation on the new book value over the remaining life.',{q:'Repainting a building as routine maintenance is…',o:['an expense','capitalised'],a:0,e:'No extension of life or capacity.'}),
 NT('t3-disp','On disposal: remove cost and accumulated depreciation; <b>gain (loss) = proceeds − book value</b>.',{q:'Book value 41 000, sold for 44 500. Gain?',answer:3500,tol:0,e:'Proceeds − book value.'}),
 NT('t3-intang','Intangibles are amortised over the shorter of legal and economic life. Goodwill = price paid − net assets at market value (not amortised).',{q:'Price 10 M, net assets at market value 7 M. Goodwill?',answer:3000000,tol:0,e:'10 − 7 = 3 M.'}),
 NT('t3-fin','Financial assets (shares, bonds held) are only introduced: their measurement is outside this course.',{q:'Shares of another company held for the long term are…',o:['a financial asset','PPE','inventory'],a:0,e:'Long-term investment.'})]);
SHEETS.t4=LAYERED(SHEETS.t4,[
 NT('t4-choice','Debt brings interest (deductible) and repayment obligations; equity brings no fixed payment but dilutes control and expects returns.',{q:'Which source creates a fixed repayment obligation?',o:['A bank loan','A share issue'],a:0,e:'Debt must be repaid.'}),
 NT('t4-issue','Share issue: share capital = par × new shares; share premium = (issue price − par) × new shares. Non-listed issue price = total equity / shares outstanding.',{q:'1 000 new shares, par 10, issue price 17.50. Share premium?',answer:7500,tol:0,e:'(17.50 − 10) × 1 000.'}),
 NT('t4-div','Dividends come only from retained earnings or prior-year net income, never from share capital, premium or legal reserves.',{q:'Can share premium be used to pay dividends (course rule)?',o:['No','Yes'],a:0,e:'Only retained earnings or prior-year net income.'}),
 NT('t4-buy','Share repurchase reduces equity and cash; selling shares between investors does not affect the company’s books.',{q:'Shareholder A sells her shares to B. Entry in the company’s books?',o:['None','Dr Cash / Cr Share capital'],a:0,e:'A transaction between owners.'}),
 NT('t4-debt','Interest = principal × rate × months / 12. Constant annuity: principal repaid = annuity − interest.',{q:'200 000 at 7%, first month interest?',answer:1166.67,tol:0.01,e:'200 000 × 7% / 12.'})]);
SHEETS.t5=LAYERED(SHEETS.t5,[
 NT('t5-tb','Journal → ledger → unadjusted trial balance (debits = credits) → adjusting entries → adjusted trial balance.',{q:'A trial balance checks that…',o:['total debits equal total credits','profit is positive','cash is correct'],a:0,e:'It does not find every error.'}),
 NT('t5-why','Adjust so revenues and expenses match the period (accrual basis): prepaids used, depreciation, impairments, write-downs.',{q:'Adjusting entries are needed because of…',o:['the accrual basis','VAT','share issues'],a:0,e:'Match income and expenses to the period.'}),
 NT('t5-prepaid','Prepaid used up: Dr expense / Cr prepaid (A−). Amount = prepaid × months used / months covered.',{q:'Insurance 1 800 paid for 6 months, 1 month used. Expense?',answer:300,tol:0,e:'1 800 × 1/6.'}),
 NT('t5-dep','Depreciation adjustment: Dr depreciation expense (E+) / Cr accumulated depreciation (XA+). Straight-line, N + 1 periods for part years, or double declining-balance (rate = 2 / life).',{q:'Double declining rate for a 4-year life?',answer:50,unit:'%',tol:0,e:'100% / 4 × 2.'}),
 NT('t5-impair','Impairment of PPE when book value &gt; recoverable amount: loss = book value − recoverable amount.',{q:'Book value 20 000, recoverable 14 700. Impairment?',answer:5300,tol:0,e:'20 000 − 14 700.'}),
 NT('t5-ar','Allowance method: bad debt expense = required ending allowance − (opening allowance − write-offs). Net realizable value of A/R = gross A/R − allowance.',{q:'Allowance after write-offs 1 500, required 1 800. Bad debt expense?',answer:300,tol:0,e:'1 800 − 1 500.'}),
 NT('t5-lcnrv','Inventory at the <b>lower of cost and net realizable value</b>, item by item: write-down = cost − NRV when NRV is lower.',{q:'100 units, cost 50, NRV 30. Write-down?',answer:2000,tol:0,e:'100 × (50 − 30).'}),
 NT('t5-apollyon','Apollyon puts it together: adjust, then prepare the statements; watch the corrigé’s error (item 2: 18 000, stock 326 000).',{q:'In the site’s check of Apollyon, the corrected inventory to report is…',answer:326000,tol:0,e:'Item 2 = 90 × 200 = 18 000, not 40 000.'})]);
SHEETS.t6=LAYERED(SHEETS.t6,[
 NT('t6-tax','Income tax expense = profit before tax × rate (France 25% in 2024); recorded at year end, paid later (tax payable).',{q:'Profit before tax 125 000 at 25%. Tax?',answer:31250,tol:0,e:'125 000 × 25%.'}),
 NT('t6-approp','Profit appropriation: the general meeting allocates net income to reserves, dividends and retained earnings.',{q:'Who decides the appropriation of profit?',o:['The shareholders’ general meeting','The accountant','The tax office'],a:0,e:'Session 6.'}),
 NT('t6-div','Cash dividend: Dr net income (or retained earnings) / Cr dividends payable, then paid. Share dividend: new shares = shares × %, valued at the market price (course convention).',{q:'10 000 shares, 10% share dividend. New shares?',answer:1000,tol:0,e:'10 000 × 10%.'}),
 NT('t6-fr','France: legal reserve += 5% of profit until it reaches 10% of share capital; only the year’s profit can be distributed. Anglo-Saxon: no legal reserve; profit + retained earnings.',{q:'Profit 40 000, share capital 100 000, legal reserve 8 000. Allocation to the legal reserve?',answer:2000,tol:0,e:'5% × 40 000 = 2 000, and 8 000 + 2 000 = 10 000 = the 10% ceiling.'}),
 NT('t6-final','From the adjusted trial balance: income statement, then equity, then balance sheet; tax on profit before tax.',{q:'Which statement is prepared first?',o:['The income statement','The balance sheet','The cash flow statement'],a:0,e:'Net income feeds equity.'}),
 NT('t6-redlotus','RedLotus Travel rehearses the whole year-end: adjustments, tax at 25%, statements.',{q:'RedLotus: taxable income 3 500 at 25%. Net income?',answer:2625,tol:0,e:'3 500 − 875.'})]);
SHEETS.t7=LAYERED(SHEETS.t7,[
 NT('t7-why','Profit is not cash: the cash flow statement explains how cash moved (accruals, investments, financing).',{q:'A profitable firm can run out of cash because…',o:['sales on credit and stock build-ups tie up cash','profit is always cash','depreciation is paid in cash'],a:0,e:'Accruals vs cash.'}),
 NT('t7-three','Operating (A) + investing (B) + financing (C) = net change in cash; beginning cash + A + B + C = ending cash.',{q:'Paying dividends is a… cash flow',o:['financing','operating','investing'],a:0,e:'Owners.'}),
 NT('t7-methods','Direct method: cash receipts and payments. Indirect method: start from net income and adjust (the course’s focus).',{q:'Which method starts from net income?',o:['Indirect','Direct'],a:0,e:'Then adjusts for non-cash items and working capital.'}),
 NT('t7-indirect','Net income + depreciation, impairments, bad debts − gains + losses − increase in operating assets + increase in operating liabilities.',{q:'Net income 19 000, depreciation 8 000, A/R up 4 000. Partial operating cash flow?',answer:23000,tol:0,e:'19 000 + 8 000 − 4 000.'}),
 NT('t7-extra','Edison and RESPIR: rebuild hidden flows from T-accounts (depreciation from accumulated depreciation, assets bought, sale proceeds = book value sold + gain).',{q:'Accumulated depreciation 585 → 600, nothing sold. Depreciation?',answer:15,tol:0,e:'600 − 585.'})]);
SHEETS.t8=LAYERED(SHEETS.t8,[
 NT('t8-limits','Limits: historical cost, estimates (lives, allowances), choices of methods, off-balance-sheet items, non-financial value (brand, people) missing, possible manipulation.',{q:'Which is a limitation of financial statements?',o:['Many figures rely on estimates','They are audited','They follow IFRS'],a:0,e:'Useful lives, allowances, NRV…'}),
 NT('t8-abc','The ABC Antwerp tutorial combines every topic: entries, adjustments, tax, appropriation, statements and cash flow (site solution, not official).',{q:'In which order do you work the tutorial?',o:['Entries → adjustments → tax → statements → cash flow','Cash flow first','Statements first'],a:0,e:'The accounting cycle.'})]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Accounting equation','Assets = Liabilities + Equity.','t1'],['Debit','Left side of an account: increases assets, expenses, dividends.','t1'],['Credit','Right side: increases liabilities, equity, revenues.','t1'],
['DEALER','Dividends, Expenses, Assets increase by debit; Liabilities, Equity, Revenues by credit.','t1'],['Trial balance','List of all ledger balances; total debits = total credits.','t5'],
['Journal entry','Date, accounts, type and effect, debit and credit amounts.','t1'],['Ledger','The set of accounts (T-accounts) to which entries are posted.','t1',['T-account']],
['Accrual basis','Revenues when earned, expenses when incurred, whatever the cash timing.','t2'],['Unearned revenue','Cash received before the service is delivered: a liability.','t2'],
['Prepaid expense','Cash paid before the expense is used: an asset.','t2',['prepaids']],['Accounts receivable','Amounts customers owe the company.','t2',['A/R']],['Accounts payable','Amounts the company owes suppliers.','t2',['A/P']],
['VAT payable','VAT collected on sales, owed to the State: a liability.','t2',['VAT']],['Cost of goods sold','Opening inventory + net purchases − closing inventory.','t2',['COGS']],['FIFO','First in, first out: oldest costs go to COGS first.','t2'],
['Gross profit','Sales − cost of goods sold.','t2'],['PPE','Property, plant and equipment: physical long-term assets.','t3'],['Depreciation','Allocation of the cost of PPE over its useful life.','t3'],
['Residual value','Expected value at the end of the useful life.','t3'],['Book value','Cost − accumulated depreciation (and impairments).','t3',['carrying amount','net book value']],['Accumulated depreciation','Contra-asset (XA) summing past depreciation.','t3'],
['Capitalise','Record a cost as part of an asset instead of an expense.','t3'],['Gain on disposal','Proceeds above book value when an asset is sold.','t3'],['Intangible asset','Non-physical long-term asset (patent, licence, brand).','t3',['intangibles']],
['Amortisation','Depreciation of an intangible asset.','t3'],['Goodwill','Price paid for a business − its net assets at market value.','t3'],
['Share capital','Par value × number of shares issued.','t4'],['Share premium','(Issue price − par value) × shares issued.','t4'],['Par value','Nominal value of a share: share capital / shares.','t4'],
['Dividend','Distribution of profit to shareholders.','t4',['dividends']],['Share repurchase','The company buys back its own shares.','t4'],['Annuity','Constant payment covering interest and principal.','t4'],
['Adjusting entry','Year-end entry matching revenues and expenses to the period.','t5',['adjusting entries']],['Double declining-balance','Depreciation = beginning book value × 2 / useful life.','t5'],
['Impairment','Loss when book value exceeds the recoverable amount.','t5'],['Recoverable amount','The value the asset can still bring (sale or use).','t5'],
['Allowance for doubtful accounts','Contra-asset estimating uncollectible receivables.','t5',['allowance']],['Bad debt expense','Expense raising the allowance to its required level.','t5'],
['Net realizable value','Estimated selling price − costs to complete and sell.','t5',['NRV']],['Write-down','Reduction of inventory to NRV when lower than cost.','t5'],
['Income tax expense','Profit before tax × tax rate.','t6'],['Legal reserve','France: 5% of profit until 10% of share capital.','t6'],['Retained earnings','Accumulated undistributed profits.','t6'],
['Share dividend','A dividend paid in new shares.','t6'],['Profit appropriation','Allocation of net income to reserves, dividends and retained earnings.','t6'],
['Cash flow statement','Statement of operating, investing and financing cash flows.','t7'],['Operating activities','Cash flows from the day-to-day business.','t7'],['Investing activities','Cash flows from buying and selling long-term assets.','t7'],
['Financing activities','Cash flows with owners and lenders.','t7'],['Indirect method','Operating cash flow from net income adjusted for non-cash items and working capital.','t7']
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators tab (the 17 calculations, now with a mastery score, plus three new ones) ---------- */
const TYPES=[['Cash','A'],['Inventory','A'],['Accounts receivable','A'],['Prepaid insurance','A'],['PPE','A'],['Accounts payable','L'],['Loan payable','L'],['Unearned revenue','L'],['VAT payable','L'],['Share capital','SE'],['Retained earnings','SE'],['Sales revenue','R'],['Service revenue','R'],['Salary expense','E'],['Depreciation expense','E'],['COGS','E'],['Accumulated depreciation','XA'],['Allowance for doubtful accounts','XA'],['Dividends','D']];
const DEBIT_UP=['A','E','D'];
const CFS=['Operating','Investing','Financing','No cash flow'];
const CFS_B=[['Cash received from customers',0],['Salaries paid',0],['Income tax paid',0],['Interest paid on a loan',0],['Purchase of a machine for cash',1],['Proceeds from selling land',1],['Purchase of shares of another company',1],['Issue of new shares for cash',2],['Dividends paid',2],['New bank loan received',2],['Repayment of a loan',2],['Depreciation of the year',3],['Shares issued in exchange for a building',3]];
const wrapCalc=x=>({kind:'gen',id:'g-'+x.id,topic:x.topic,title:x.title,blurb:'New numbers every time, with the course solution',gen:u=>x.gen(u),q:x.q,parts:x.parts||[{label:x.label||'Answer',answer:x.answer,unit:x.unit,tol:x.tol,tolPct:x.tolPct}],steps:v=>[typeof x.solution==='function'?x.solution(v):x.solution]});
const GENS=[
{kind:'gen',id:'g-t1-dc',topic:'t1',title:'Debit or credit?',blurb:'Account type, increase or decrease → side and course notation',
 gen:u=>{const t=u.pick(TYPES),up=u.int(0,1);return {t,up}},
 q:v=>`<p><b>${v.t[0]}</b> ${v.up?'increases':'decreases'}.</p>`,
 parts:[{label:'Type of account',type:'choice',o:['Asset (A)','Liability (L)','Equity (SE)','Revenue (R)','Expense (E)','Contra-asset (XA)','Dividends'],a:v=>['A','L','SE','R','E','XA','D'].indexOf(v.t[1])},{label:'Side',type:'choice',o:['Debit','Credit'],a:v=>DEBIT_UP.includes(v.t[1])===!!v.up?0:1}],
 steps:v=>[`${v.t[0]} is ${{A:'an asset',L:'a liability',SE:'an equity account',R:'a revenue',E:'an expense',XA:'a contra-asset',D:'dividends (reduces equity)'}[v.t[1]]}.`,`DEALER: ${DEBIT_UP.includes(v.t[1])?'it increases on the debit side':'it increases on the credit side'} → ${v.up?'increase':'decrease'} = <b>${DEBIT_UP.includes(v.t[1])===!!v.up?'debit':'credit'}</b> (${v.t[1]==='D'?'Dividends':v.t[1]}${v.up?'+':'−'}).`]},
{kind:'gen',id:'g-t2-vat',topic:'t2',title:'VAT on a sale',blurb:'Revenue, VAT payable and cash received',
 gen:u=>({ht:u.step(1000,500000,500),r:u.pick([5.5,10,20])}),
 q:v=>`<p>A sale of €${fmt(v.ht)} excluding VAT, VAT rate ${v.r}%, paid in cash.</p>`,
 parts:[{label:'Sales revenue (€)',answer:v=>v.ht,tol:0.01},{label:'VAT payable (€)',answer:v=>v.ht*v.r/100,tol:0.01},{label:'Cash received (€)',answer:v=>v.ht*(1+v.r/100),tol:0.01}],
 steps:v=>[`Revenue = the price excluding VAT: <b>${fmt(v.ht)}</b> (VAT is never revenue).`,`VAT payable (L+) = ${fmt(v.ht)} × ${v.r}% = <b>${n2(v.ht*v.r/100)}</b>; cash (A+) = <b>${n2(v.ht*(1+v.r/100))}</b>. When remitted: Dr VAT payable / Cr Cash.`]},
{kind:'gen',id:'g-t7-section',topic:'t7',title:'Which section of the cash flow statement?',blurb:'Operating, investing, financing or no cash flow',
 gen:u=>({b:u.pick(CFS_B)}),q:v=>`<p>${v.b[0]}.</p>`,parts:[{label:'Section',type:'choice',o:CFS,a:v=>v.b[1]}],
 steps:v=>[`${['Day-to-day business with customers, suppliers, employees, the State, lenders’ interest','Buying or selling long-term assets and investments','Flows with owners and lenders (shares, dividends, loans)','No cash moves: not in the statement (depreciation is added back in the indirect method)'][v.b[1]]} → <b>${CFS[v.b[1]]}</b>.`]}
].concat(EXERCISES.filter(x=>x.type==='calc').map(wrapCalc));

/* ---------- v2: tools ---------- */
const depSched=(C,R,L,ddb)=>{const rows=[];let bv=C;for(let y=1;y<=L;y++){let d=ddb?(y===L?bv-R:Math.min(bv*2/L,bv-R)):(C-R)/L;d=Math.max(0,d);bv-=d;rows.push([y,d,bv])}return rows};
const TOOLS=[
{kind:'plot',id:'p-t3-dep',topic:'t5',title:'Depreciation schedule: straight-line vs double declining-balance',blurb:'Move cost, residual value and useful life',
 params:[{k:'C',label:'Cost (€)',min:10000,max:200000,step:1000,v:120000},{k:'R',label:'Residual value (€)',min:0,max:50000,step:1000,v:12000},{k:'L',label:'Useful life (years)',min:2,max:10,step:1,v:4}],
 x:p=>({max:p.L,label:'year'}),y:p=>({max:p.C*1.05,label:'book value (€)'}),
 draw:p=>{const R=Math.min(p.R,p.C),sl=depSched(p.C,R,p.L,false),db=depSched(p.C,R,p.L,true),pts=(rows)=>[[0,p.C]].concat(rows.map(r=>[r[0],r[2]]));const f=rows=>x=>{const P=pts(rows),i=Math.min(P.length-2,Math.floor(x)),t=x-i;return P[i][1]*(1-t)+P[i+1][1]*t};
  return {curves:[{f:f(sl),c:'--debit',l:'straight-line'},{f:f(db),c:'--credit',l:'declining',lx:p.L*0.4}],lines:[{x1:0,y1:R,x2:p.L,y2:R,c:'--muted',dash:true,w:1,l:'residual'}]}},
 readout:p=>{const R=Math.min(p.R,p.C),sl=depSched(p.C,R,p.L,false),db=depSched(p.C,R,p.L,true);
  return T(['Year','SL depreciation','SL book value','DDB depreciation','DDB book value'],sl.map((r,i)=>[String(r[0]),n2(r[1]),n2(r[2]),n2(db[i][1]),n2(db[i][2])]),[1,2,3,4])+`<p class="hint">Default: the course example (120 000, residual 12 000, 4 years: 27 000 a year). DDB rate = 2 / ${p.L} = ${n2(200/p.L)}%; in the final year the depreciation brings the book value to the residual value. Both methods end at the same residual value: only the timing differs.</p>`}},
{kind:'tree',id:'tr-t1-dc',topic:'t1',title:'Debit or credit?',blurb:'DEALER as a decision tree',start:'q1',
 nodes:{q1:{q:'Which type of account?',o:[{l:'Asset, expense or dividends',to:'q2'},{l:'Liability, equity, revenue or contra-asset',to:'q3'}]},
  q2:{q:'Does it increase or decrease?',o:[{l:'Increase',to:'r_d1'},{l:'Decrease',to:'r_c1'}]},q3:{q:'Does it increase or decrease?',o:[{l:'Increase',to:'r_c2'},{l:'Decrease',to:'r_d2'}]},
  r_d1:{end:'Debit'},r_c1:{end:'Credit'},r_c2:{end:'Credit'},r_d2:{end:'Debit'}},
 gen:u=>{const t=u.pick(TYPES),up=u.int(0,1),deb=DEBIT_UP.includes(t[1]);return {text:`${t[0]} ${up?'increases':'decreases'}.`,path:deb?{q1:0,q2:up?0:1}:{q1:1,q3:up?0:1}}}},
{kind:'tree',id:'tr-t7-cfs',topic:'t7',title:'Which section of the cash flow statement?',blurb:'Operating, investing, financing',start:'q1',
 nodes:{q1:{q:'Does cash actually move?',o:[{l:'No (depreciation, share-for-asset exchange)',to:'r_none'},{l:'Yes',to:'q2'}]},
  q2:{q:'Is it with owners or lenders (shares, dividends paid, borrowing, repaying)?',o:[{l:'Yes',to:'r_fin'},{l:'No',to:'q3'}]},
  q3:{q:'Is it buying or selling a long-term asset or an investment?',o:[{l:'Yes',to:'r_inv'},{l:'No: day-to-day business',to:'r_op'}]},
  r_none:{end:'Not a cash flow (added back or disclosed separately)'},r_fin:{end:'Financing activities'},r_inv:{end:'Investing activities'},r_op:{end:'Operating activities'}},
 gen:u=>{const b=u.pick(CFS_B);return {text:b[0],path:b[1]===3?{q1:0}:b[1]===2?{q1:1,q2:0}:{q1:1,q2:1,q3:b[1]===1?0:1}}}},
{kind:'tree',id:'tr-t3-cap',topic:'t3',title:'Capitalise or expense?',blurb:'Initial cost and subsequent costs of PPE',start:'q1',
 nodes:{q1:{q:'When is the cost incurred?',o:[{l:'When the asset is acquired',to:'q2'},{l:'After the asset is in use',to:'q3'}]},
  q2:{q:'Is it needed to bring the asset to working condition (price, transport, installation, non-refundable taxes, fees)?',o:[{l:'Yes',to:'r_cap'},{l:'No (training, administration, VAT)',to:'r_exp'}]},
  q3:{q:'Does it extend the useful life, increase capacity or improve quality?',o:[{l:'Yes',to:'r_cap2'},{l:'No (repairs, maintenance)',to:'r_exp2'}]},
  r_cap:{end:'Part of the cost of the asset (capitalise)'},r_exp:{end:'Expense of the period'},r_cap2:{end:'Capitalise, then revise depreciation over the remaining life'},r_exp2:{end:'Expense (repairs and maintenance)'}},
 cases:[{text:'Transport of a new machine: 24 000.',path:{q1:0,q2:0}},{text:'Training of the staff on the new machine: 12 000.',path:{q1:0,q2:1}},{text:'Remodelling that extends a building’s life: 60 000.',path:{q1:1,q3:0}},{text:'Routine repainting of the offices.',path:{q1:1,q3:1}},{text:'Installation of the machine: 2 000.',path:{q1:0,q2:0}}]}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-t1-sorttype',topic:'t1',type:'sort',src:'course',title:'Type of account',q:'Sort each account.',cats:['Asset','Liability','Equity','Revenue','Expense'],
 items:[['Cash','Asset'],['Inventory','Asset'],['Prepaid insurance','Asset'],['Accounts payable','Liability'],['Unearned revenue','Liability'],['VAT payable','Liability'],['Share capital','Equity'],['Retained earnings','Equity'],['Service revenue','Revenue'],['Salary expense','Expense'],['COGS','Expense']],pick:9},
{id:'x-t7-sortcfs',topic:'t7',type:'sort',src:'course',title:'Cash flow statement sections',q:'Sort each cash flow.',cats:['Operating','Investing','Financing'],
 items:CFS_B.filter(b=>b[1]<3).map(b=>[b[0],CFS[b[1]]]),pick:9},
{id:'x-t2-sortcurrent',topic:'t2',type:'sort',src:'course',title:'Current or non-current?',q:'Sort each balance sheet item (course list).',cats:['Current asset','Non-current asset','Current liability','Non-current liability'],
 items:[['Supplies','Current asset'],['Accounts receivable','Current asset'],['Prepaid expenses','Current asset'],['PPE','Non-current asset'],['Patents','Non-current asset'],['Long-term investments','Non-current asset'],['Salaries payable','Current liability'],['Unearned revenues','Current liability'],['Notes payable (long-term)','Non-current liability'],['Long-term bank loan','Non-current liability']]}
);
QUIZ.push(
{id:'q127',topic:'t1',src:'practice',q:'Why can every transaction be written with equal debits and credits?',o:['Money going to one account must come from another (duality)','Debits are always good','Credits are always cash','Because of VAT'],a:0,e:'Double entry.'},
{id:'q128',topic:'t3',src:'practice',q:'Why is training excluded from the cost of a machine?',o:['It does not bring the asset itself to working condition','It is too small','It is paid in cash','It is VAT'],a:0,e:'Only costs needed to make the asset work are capitalised.'},
{id:'q129',topic:'t5',src:'practice',q:'Straight-line and double declining-balance on the same asset end with…',o:['the same residual value; only the timing differs','different residual values','no depreciation','the same yearly expense'],a:0,e:'Total depreciation = cost − residual in both.'},
{id:'q130',topic:'t7',src:'practice',q:'Why is depreciation added back in the indirect method?',o:['It reduced net income without any cash payment','It is a cash inflow','It is a financing flow','It is paid to the bank'],a:0,e:'A non-cash expense.'},
{id:'q131',topic:'t6',src:'practice',q:'Why does France cap dividends while the legal reserve is below 10% of capital?',o:['5% of each profit must first go to the legal reserve, so at most 95% can be distributed','To raise taxes','Because dividends are expenses','There is no such rule'],a:0,e:'Legal reserve rule.'}
);
CARDS.push(
{id:'c73',topic:'t1',f:'DEALER',b:'Dividends, Expenses, Assets ↑ debit · Liabilities, Equity, Revenues ↑ credit (contra-assets ↑ credit)'},
{id:'c74',topic:'t3',f:'Capitalise or expense?',b:'acquisition: costs to bring to working condition → asset · later: extends life/capacity/quality → asset; repairs → expense'},
{id:'c75',topic:'t7',f:'Cash flow sections',b:'operating: day-to-day · investing: long-term assets · financing: owners and lenders · non-cash: not a flow'},
{id:'c76',topic:'t5',f:'SL vs DDB',b:'SL: (cost − residual)/life · DDB: book value × 2/life, last year to residual; same total'}
);

const MC=(id,topic,q,o,a,solution)=>({id,topic,type:'mcq',pts:0.5,q,o,a,solution});
const JE=(q,pts,topic,l,date)=>({type:'journal',q,pts,topic,l,date});
const NUM1=(q,pts,topic,answer)=>({type:'numeric',q,pts,topic,answer,unit:'€'});
const MCP=(q,pts,topic,o,a)=>({type:'mcq',q,pts,topic,o,a});
const MOCK_CALC='Not stated by the course. Assumed here: a basic calculator (every figure also works by hand).';
const MOCK_INTRO=`<div class="panel"><h4>Instructions</h4><ul>
<li><b>Part A</b>: 16 multiple-choice questions, two per topic. One right answer each; 0.5 point; no penalty for a wrong answer.</li>
<li><b>Part B</b>: 5 exercises, 12 points. Journal entries in the course format: account title, type (A+, L−, XA+, SE−, R+, E+ …) and the amount in the debit or the credit column, debits first. Choose the account names from the list.</li>
<li>Amounts in euros. Type numbers as 1 250 or 1250; enter an outflow or a loss as a negative number when asked.</li>
<li>Exam conditions: no notes, no sheets. The structure (2 hours, MCQs + exercises, Topics 1–8) follows the course; the points are chosen for this site (see the Overview).</li></ul></div>`;
const PART_A={title:'Part A · Multiple-choice questions',intro:'<p>One right answer per question. 0.5 point each; no penalty for a wrong answer.</p>'};

/* Mock 1: foundation */
const M1_A=[
MC('a1','t1','Which transaction increases both total assets and total equity?',
 ['Buying equipment on account','Issuing new shares for cash','Paying a supplier invoice already recorded','Collecting an account receivable'],1,
 T(['Transaction','Assets','Liabilities','Equity'],[['Equipment on account','+ (PPE)','+ (A/P)','0'],['<b>Shares issued for cash</b>','<b>+ (Cash)</b>','0','<b>+ (Share capital)</b>'],['Supplier paid','− (Cash)','− (A/P)','0'],['Receivable collected','+ Cash − A/R = 0','0','0']])+'<p>Assets = Liabilities + Equity: only the share issue raises assets with an equal rise in equity (Dr Cash / Cr Share capital).</p>'),
MC('a2','t1','A trial balance shows these balances: Cash 12 000; Accounts receivable 5 000; Equipment 30 000; Accumulated depreciation 6 000; Accounts payable 4 000; Share capital 25 000; Revenues 20 000; Expenses 8 000. Total of the debit column?',
 ['55 000','47 000','61 000','110 000'],0,
 F('Debit balances (assets, expenses): 12 000 + 5 000 + 30 000 + 8 000 = 55 000\nCredit balances (contra-asset, liabilities, equity, revenues): 6 000 + 4 000 + 25 000 + 20 000 = 55 000')+'<p>The two columns are equal. Accumulated depreciation is a contra-asset with a <b>credit</b> balance (61 000 counts it as a debit); expenses have <b>debit</b> balances (47 000 leaves them out).</p>'),
MC('a3','t2','A company sells goods for 12 000 excluding VAT (20%), on account. The goods cost 7 000 (perpetual system). Effect on net income?',
 ['+12 000','+14 400','+5 000','+7 400'],2,
 J([['','Accounts receivable','A+',14400,''],['','Sales revenue','R+','',12000],['','VAT payable','L+','',2400],['','Cost of goods sold','E+',7000,''],['','Inventory','A−','',7000]])+F('VAT = 12 000 × 20% = 2 400 (a liability, not revenue)\nNet income = Revenue − COGS = 12 000 − 7 000 = + 5 000')),
MC('a4','t2','Opening inventory: 40 units at 15. 3 March: buys 60 units at 18. 9 March: sells 70 units. Perpetual system, FIFO. Cost of goods sold of the sale?',
 ['1 050','1 176','1 260','1 140'],3,
 F('FIFO: the 40 oldest units leave first, then 30 of the 3 March units\nCOGS = 40 × 15 + 30 × 18 = 600 + 540 = 1 140\nLeft in inventory: 30 × 18 = 540 (latest cost)')+'<p>1 260 values every unit at the latest cost; 1 176 is a weighted average (not the course method).</p>'),
MC('a5','t3','A company buys a warehouse in exchange for a note payable of 400 000. It also pays in cash: agent’s commission 12 000, stamp duty 8 000, survey 2 000, and the paving of a new car park next to the warehouse 20 000. Cost of the warehouse?',
 ['400 000','420 000','422 000','442 000'],2,
 F('Cost = all costs to bring the asset to its intended use\nWarehouse = 400 000 + 12 000 + 8 000 + 2 000 = 422 000')+J([['','PPE (warehouse)','A+',422000,''],['','Notes payable','L+','',400000],['','Cash','A−','',22000]])+'<p>The car park is PPE too, but a <b>separate asset</b> (as in the Airbus example of Topic 3), not part of the building.</p>'),
MC('a6','t3','A machine that cost 50 000 has accumulated depreciation of 32 000 (up to date). It is sold for 15 000 in cash. Which entry is correct?',
 ['Dr Cash 15 000, Dr Accumulated depreciation 32 000, Dr Loss on disposal 3 000 / Cr PPE 50 000','Dr Cash 15 000 / Cr PPE 15 000','Dr Cash 15 000, Dr Loss on disposal 3 000 / Cr PPE 18 000','Dr Cash 15 000, Dr Accumulated depreciation 32 000 / Cr PPE 47 000'],0,
 F('Book value = 50 000 − 32 000 = 18 000\nGain (loss) = Proceeds − Book value = 15 000 − 18 000 = (3 000)  →  loss')+J([['','Cash','A+',15000,''],['','Accumulated depreciation','XA−',32000,''],['','Loss on disposal','E+',3000,''],['','PPE','A−','',50000]])+'<p>Remove the <b>full cost</b> from PPE and the full accumulated depreciation; never credit PPE for the book value only.</p>'),
MC('a7','t4','Share capital is 300 000, made of 30 000 shares. The company issues 4 000 new shares at 25 each, in cash (French practice). Entry?',
 ['Dr Cash 100 000 / Cr Share capital 100 000','Dr Cash 100 000 / Cr Share capital 60 000 / Cr Share premium 40 000','Dr Cash 40 000 / Cr Share capital 40 000','Dr Cash 100 000 / Cr Share capital 40 000 / Cr Share premium 60 000'],3,
 F('Par value = 300 000 / 30 000 = 10\nCash = 4 000 × 25 = 100 000\nShare capital = 4 000 × 10 = 40 000\nShare premium = 4 000 × (25 − 10) = 60 000')+J([['','Cash','A+',100000,''],['','Share capital','SE+','',40000],['','Share premium','SE+','',60000]])+'<p>Option a is the Anglo-Saxon practice (no premium).</p>'),
MC('a8','t4','A company buys back 2 000 of its own shares at 18 each, in cash. Effect on total equity?',
 ['No effect: the shares become an asset of the company','Equity increases by 36 000','Equity decreases by 36 000','Only share capital decreases, by the par value of the shares'],2,
 J([['','Treasury shares','SE−',36000,''],['','Cash','A−','',36000]])+'<p>2 000 × 18 = 36 000. Treasury shares are shown as a <b>negative amount in equity</b>; share capital itself does not change. The shares lose their dividend and voting rights, and fewer shares are outstanding.</p>'),
MC('a9','t5','Equipment bought on 1 January 2024 for 50 000; residual value 5 000; useful life 4 years; double declining-balance method. Depreciation for 2025?',
 ['11 250','22 500','12 500','25 000'],2,
 F('Rate = 100% / 4 × 2 = 50%\n2024: 50 000 × 50% = 25 000  →  book value 50 000 − 25 000 = 25 000\n2025: 25 000 × 50% = 12 500  →  book value 12 500')+'<p>The rate applies to the book value at the beginning of the year; the residual value is not deducted first (11 250 deducts it). It only caps the final year.</p>'),
MC('a10','t5','On 1 November 2024 a company pays 3 600 for 12 months of rent and debits Prepaid rent. Adjusting entry on 31 December 2024?',
 ['Dr Rent expense 600 / Cr Prepaid rent 600','Dr Rent expense 3 000 / Cr Prepaid rent 3 000','Dr Prepaid rent 600 / Cr Rent expense 600','Dr Rent expense 600 / Cr Cash 600'],0,
 F('Rent per month = 3 600 / 12 = 300\nConsumed in 2024 (November, December) = 2 × 300 = 600\nPrepaid rent left on 31 Dec = 3 600 − 600 = 3 000')+J([['31 Dec','Rent expense','E+',600,''],['','Prepaid rent','A−','',600]])),
MC('a11','t6','Revenues 180 000; expenses before tax 140 000 (including depreciation of 10 000); tax rate 25%. Net income?',
 ['40 000','30 000','45 000','20 000'],1,
 F('Profit before tax = 180 000 − 140 000 = 40 000\nIncome tax = 40 000 × 25% = 10 000\nNet income = 40 000 − 10 000 = 30 000')+'<p>Depreciation is already inside the 140 000. 45 000 applies the rate to revenues; 40 000 forgets the tax.</p>'),
MC('a12','t6','In France, how does the net income of the year appear in the balance sheet at year-end?',
 ['Inside retained earnings, after appropriation','As a separate line, “Net income of the year”, in equity','As a liability until the shareholders’ meeting','It does not appear in the balance sheet'],1,
 T(['','France','Anglo-Saxon world'],[['Presentation of the statements','<b>Before appropriation</b>: "Net income of the year" appears distinctly in equity','After appropriation: only the retained part appears in retained earnings'],['Who decides the dividend','Shareholders (annual general meeting)','Board of directors']])),
MC('a13','t7','A company pays 2 400 of interest on its bank loan and repays 10 000 of the principal. How are these cash flows classified in the course?',
 ['Operating: −2 400; financing: −10 000','Financing: −12 400','Operating: −12 400','Operating: −2 400; investing: −10 000'],0,
 '<p><b>Interest paid</b> is an operating cash flow in the course (the slides note that IFRS allow another category). <b>Repaying the principal</b> of a loan is financing: a transaction with a provider of capital.</p>'),
MC('a14','t7','Net income 42 000; depreciation 6 000; accounts receivable decreased by 3 000; inventory increased by 5 000; accounts payable increased by 2 000. Operating cash flow (indirect method)?',
 ['42 000','58 000','36 000','48 000'],3,
 T(['Line','Amount'],[['Net income','42 000'],['+ Depreciation (no cash)','6 000'],['+ Decrease in A/R (asset ↓ = cash in)','3 000'],['− Increase in inventory (asset ↑ = cash out)','(5 000)'],['+ Increase in A/P (liability ↑ = cash in)','2 000'],['<b>Operating cash flow</b>','<b>48 000</b>']],[1])+F('42 000 + 6 000 + 3 000 − 5 000 + 2 000 = 48 000')),
MC('a15','t8','A company still shows the land it bought in 1995 at its purchase price, although similar land is now worth three times more. Which limitation of financial statements does this illustrate?',
 ['Static in nature','Based on historical data','Exclusion of non-financial information','Potential for manipulation'],1,
 '<p><b>Based on historical data</b>: the statements reflect past transactions and show book values; changes in the market value of assets are not always reflected.</p>'),
MC('a16','t8','Which of these is <b>not</b> an estimate or judgement made by management, as described in the course?',
 ['The depreciation method of the machines','The inventory valuation method','The allowance for doubtful debts','The cash balance confirmed by the bank statement'],3,
 '<p>The course gives three examples of management flexibility: the depreciation method, the inventory valuation method and the allowance for doubtful debts. They bring subjectivity and potential bias. A bank balance is a fact, not an estimate.</p>')];
const M1_B=[
{id:'b1',topic:'t1',type:'case',pts:3,title:'Exercise 1 · Transactions of 2024 (Topics 1–4)',
 q:'<p>Record Brightwave’s journal entries for these transactions.</p>',
 parts:[
  JE('a. 2 January: buys 200 lamps at 30 each, on account.',0.5,'t2',[Dr('Inventory',6000),Cr('Accounts payable',6000)],'Jan 2'),
  JE('b. 10 January: sells 120 of these lamps at 55 each. The customer pays half in cash and the rest in 30 days. Record the revenue entry and the cost entry.',1,'t2',[Dr('Cash',3300),Dr('Accounts receivable',3300),Cr(['Sales revenue','Revenues'],6600),Dr('Cost of goods sold',3600,'Jan 10'),Cr('Inventory',3600)],'Jan 10'),
  JE('c. 1 February: buys a delivery van for 24 000 plus 1 000 of delivery costs. Pays 5 000 in cash and signs a note payable for the rest.',0.5,'t3',[Dr('PPE',25000),Cr('Cash',5000),Cr('Notes payable',20000)],'Feb 1'),
  JE('d. 1 March: issues 1 000 new shares at 15 each, in cash (French practice).',0.5,'t4',[Dr('Cash',15000),Cr('Share capital',10000),Cr('Share premium',5000)],'Mar 1'),
  JE('e. 15 March: pays the supplier of transaction a.',0.5,'t1',[Dr('Accounts payable',6000),Cr('Cash',6000)],'Mar 15')],
 solution:F('b. Revenue = 120 × 55 = 6 600:  cash 6 600 × 50% = 3 300, receivable 3 300\n   Cost (perpetual system) = 120 × 30 = 3 600\nc. Cost of the van = 24 000 + 1 000 = 25 000 (delivery brings it to its intended use)\n   Note payable = 25 000 − 5 000 = 20 000\nd. Par value = 50 000 / 5 000 shares = 10\n   Share capital = 1 000 × 10 = 10 000;  share premium = 1 000 × (15 − 10) = 5 000\ne. Paying a supplier: no expense (the inventory was recorded in a)')+'<p>Every entry balances: a 6 000 = 6 000; b 6 600 = 6 600 and 3 600 = 3 600; c 25 000 = 5 000 + 20 000; d 15 000 = 10 000 + 5 000; e 6 000 = 6 000.</p>'},
{id:'b2',topic:'t5',type:'case',pts:3.5,title:'Exercise 2 · Year-end adjustments, 31 December 2024 (Topic 5)',
 q:`<p>Brightwave prepares its adjusting entries on 31 December 2024.</p><ul>
 <li>Office supplies: the Supplies account shows 1 800; the count finds 500 on hand.</li>
 <li>The van of Exercise 1 (cost 25 000, in use from 1 February 2024): useful life 5 years, residual value 1 000, straight-line method.</li>
 <li>Accounts receivable: 14 000 at year-end. The allowance for doubtful accounts is 300 before adjustment (no write-off this year); 900 of the receivables are now doubtful.</li>
 <li>Inventory at year-end, at the lower of cost and net realizable value, item by item:</li></ul>${T(['Item','Quantity','Unit cost','NRV per unit'],[['Lamps','80','30','26'],['Lampshades','40','12','15']],[1,2,3])}`,
 parts:[
  JE('a. Supplies',0.5,'t5',[Dr('Supplies expense',1300),Cr('Supplies',1300)],'Dec 31'),
  JE('b. Depreciation of the van for 2024',0.75,'t5',[Dr('Depreciation expense',4400),Cr('Accumulated depreciation',4400)],'Dec 31'),
  JE('c. Doubtful receivables',0.75,'t5',[Dr('Bad debt expense',600),Cr('Allowance for doubtful accounts',600)],'Dec 31'),
  JE('d. Inventory',0.75,'t5',[Dr('Loss on inventory write-down',320),Cr('Allowance for inventory losses',320)],'Dec 31'),
  {type:'numeric',q:'e. Amounts shown in the balance sheet on 31 December 2024',pts:0.75,topic:'t5',parts:[{label:'Van, net book value',answer:20600,unit:'€'},{label:'Accounts receivable, net',answer:13100,unit:'€'},{label:'Inventory, net',answer:2560,unit:'€'}]}],
 solution:F('a. Supplies used = 1 800 − 500 = 1 300\nb. Annual depreciation = (25 000 − 1 000) / 5 = 4 800\n   2024: February to December = 11 months → 4 800 × 11/12 = 4 400\nc. Allowance needed 900 − allowance already there 300 = 600 bad debt expense\nd. Lamps: NRV 26 < cost 30 → write-down 80 × (30 − 26) = 320\n   Lampshades: NRV 15 > cost 12 → they stay at cost (their margin does not offset the lamps)\ne. Van: 25 000 − 4 400 = 20 600\n   A/R: 14 000 − 900 = 13 100\n   Inventory at cost: 80 × 30 + 40 × 12 = 2 400 + 480 = 2 880;  2 880 − 320 = 2 560')+'<p>Each adjustment touches one balance sheet account and one income statement account.</p>'},
{id:'b3',topic:'t6',type:'case',pts:2,title:'Exercise 3 · Income tax, dividend and equity (Topic 6)',
 q:'<p>Brightwave’s adjusted income before tax for 2024 is <b>36 000</b>; the tax rate is 25%, and the tax will be paid in 2025. On 1 January 2024 equity was: share capital 50 000 (5 000 shares) and retained earnings 20 000. In 2024 the only other change in equity is the share issue of Exercise 1 (transaction d); no dividend was paid in 2024. On 30 April 2025 the shareholders’ meeting approves a dividend of 1.50 per share on the 6 000 shares, out of the 2024 net income; it is paid on 31 May 2025.</p>',
 parts:[
  JE('a. Income tax, 31 December 2024',0.5,'t6',[Dr('Income tax expense',9000),Cr('Income tax payable',9000)],'Dec 31, 2024'),
  NUM1('b. Net income for 2024',0.25,'t6',27000),
  NUM1('c. Total equity on 31 December 2024',0.5,'t6',112000),
  JE('d. The dividend: entries of 30 April and 31 May 2025',0.75,'t6',[Dr(['Net income of prior year','Retained earnings'],9000),Cr(['Dividend payable','Dividends payable'],9000),Dr(['Dividend payable','Dividends payable'],9000,'May 31, 2025'),Cr('Cash',9000)],'Apr 30, 2025')],
 solution:F('a. Income tax = 36 000 × 25% = 9 000\nb. Net income = 36 000 − 9 000 = 27 000\nc. Equity = 50 000 + 20 000 (1 January)\n          + 15 000 (share issue: 10 000 capital + 5 000 premium)\n          + 27 000 (net income) = 112 000\nd. Dividend = 6 000 shares × 1.50 = 9 000')+'<p>The declaration (30 April) creates the liability and reduces equity; the payment (31 May) reduces cash and removes the liability. A dividend is never an expense. On 31 December 2024 it is not recorded yet: in France the shareholders decide it in 2025.</p>'},
{id:'b4',topic:'t7',type:'case',pts:2.5,title:'Exercise 4 · Cash flow statement (Topic 7)',
 q:`<p><b>Norfield Ltd</b>, another company, gives this information for 2024. Use the <b>indirect method</b>. Enter cash outflows as negative numbers.</p><ul>
 <li>Net income 30 000, after depreciation of 8 000 and a loss of 1 000 on the sale of equipment.</li>
 <li>The equipment sold had cost 12 000, with accumulated depreciation of 7 000; it was sold for 4 000 in cash.</li>
 <li>Changes over the year: accounts receivable +4 000; inventory −2 000; accounts payable +3 000; salaries payable −1 000.</li>
 <li>New equipment bought for 25 000 in cash.</li>
 <li>New shares issued for 10 000 in cash; 6 000 of the bank loan repaid; dividends paid 5 000.</li>
 <li>Cash on 1 January 2024: 18 000.</li></ul>`,
 parts:[
  NUM1('a. Net cash from operating activities',0.75,'t7',39000),
  NUM1('b. Net cash from investing activities',0.5,'t7',-21000),
  NUM1('c. Net cash from financing activities',0.5,'t7',-1000),
  NUM1('d. Cash on 31 December 2024',0.25,'t7',35000),
  MCP('e. How does the sale of the equipment appear in the statement?',0.5,'t7',['4 000 in investing activities, and the 1 000 loss added back in operating activities','5 000 (the book value) in investing activities, nothing in operating activities','4 000 in operating activities','1 000 subtracted in operating activities, and 4 000 in financing activities'],0)],
 solution:T(['Norfield Ltd, statement of cash flows 2024','Amount'],[['Net income','30 000'],['+ Depreciation','8 000'],['+ Loss on sale of equipment','1 000'],['− Increase in accounts receivable','(4 000)'],['+ Decrease in inventory','2 000'],['+ Increase in accounts payable','3 000'],['− Decrease in salaries payable','(1 000)'],['<b>Net cash from operating activities</b>','<b>39 000</b>'],['Proceeds from the sale of equipment','4 000'],['Purchase of equipment','(25 000)'],['<b>Net cash from investing activities</b>','<b>(21 000)</b>'],['Issue of shares','10 000'],['Repayment of the bank loan','(6 000)'],['Dividends paid','(5 000)'],['<b>Net cash from financing activities</b>','<b>(1 000)</b>'],['Net increase in cash','17 000'],['Cash on 1 January 2024','18 000'],['<b>Cash on 31 December 2024</b>','<b>35 000</b>']],[1])+
  F('Book value of the equipment sold = 12 000 − 7 000 = 5 000;  4 000 − 5 000 = (1 000) loss\nOperating = 30 000 + 8 000 + 1 000 − 4 000 + 2 000 + 3 000 − 1 000 = 39 000\nInvesting = 4 000 − 25 000 = (21 000)\nFinancing = 10 000 − 6 000 − 5 000 = (1 000)\nClosing cash = 18 000 + 39 000 − 21 000 − 1 000 = 35 000')+'<p>The loss reduced net income but moved no cash: it is added back, and the 4 000 actually received goes to investing.</p>'},
{id:'b5',topic:'t8',type:'written',pts:1,lines:8,title:'Exercise 5 · Limitations of financial statements (Topic 8)',
 q:'<p>Brightwave’s banker reads its 2024 statements. Name <b>two</b> limitations of financial statements and illustrate each one with an item from Exercises 1 to 3 (about five lines).</p>',
 rubric:[{c:'First limitation named correctly (one of the five of the course)',pts:0.25},{c:'Illustrated with a relevant Brightwave item',pts:0.25},{c:'Second limitation named correctly',pts:0.25},{c:'Illustrated with a relevant Brightwave item',pts:0.25}],
 solution:'<p>Any two of these, each with an example:</p><ul><li><b>Based on estimates and judgements</b>: the van’s useful life (5 years) and residual value (1 000), the 900 of doubtful receivables, the net realizable value of the lamps (26). Another manager could choose other figures and report another profit.</li><li><b>Potential for manipulation</b>: those same estimates could be bent to show a better profit (earnings management).</li><li><b>Based on historical data</b>: the van is shown at its cost (25 000) less depreciation, not at what it could be sold for today.</li><li><b>Exclusion of non-financial information</b>: customer satisfaction, the quality of the lamps or their environmental impact do not appear.</li><li><b>Static in nature</b>: the balance sheet is a picture on 31 December 2024, published months later; the dividend paid in May 2025 is not in it.</li></ul>'}];

/* Mock 2: intermediate */
const M2_A=[
MC('a1','t1','Accounts receivable: opening balance 7 500; credit sales of the month 42 000; closing balance 9 000. Cash collected from customers during the month?',
 ['33 000','43 500','40 500','51 000'],2,
 F('A/R is an asset: closing = opening + debits (credit sales) − credits (collections)\n9 000 = 7 500 + 42 000 − collections\nCollections = 7 500 + 42 000 − 9 000 = 40 500')),
MC('a2','t1','For the year, revenues are 64 000 and expenses 51 000. Dividends of 5 000 are declared and paid; no shares are issued. Change in total equity over the year?',
 ['+8 000','+13 000','+18 000','−5 000'],0,
 F('Net income = 64 000 − 51 000 = 13 000\nChange in equity = + 13 000 (net income) − 5 000 (dividends) = + 8 000')+'<p>Dividends reduce equity directly; they are not an expense, so net income stays 13 000.</p>'),
MC('a3','t2','No opening inventory. 1 June: buys 30 units at 40. 5 June: buys 50 units at 44. 20 June: buys 20 units at 50. 25 June: sells 75 units. FIFO: value of the ending inventory on 30 June?',
 ['1 000','1 220','1 100','1 250'],1,
 F('Units left = 30 + 50 + 20 − 75 = 25\nFIFO: the oldest units are sold, the latest stay\nEnding inventory = 20 × 50 + 5 × 44 = 1 000 + 220 = 1 220\nCheck: COGS = 30 × 40 + 45 × 44 = 1 200 + 1 980 = 3 180\n       3 180 + 1 220 = 4 400 = total purchases (1 200 + 2 200 + 1 000)')),
MC('a4','t2','On 1 October 2024 a gym sells 40 twelve-month memberships at 600 each, all paid in advance. Revenue for 2024 (year-end 31 December)?',
 ['0','6 000','18 000','24 000'],1,
 F('Cash received = 40 × 600 = 24 000  →  unearned revenue (a liability)\nEarned in 2024 = 24 000 × 3/12 (October to December) = 6 000\nStill unearned on 31 Dec = 24 000 − 6 000 = 18 000')+J([['Oct 1','Cash','A+',24000,''],['','Unearned revenue','L+','',24000],['Dec 31','Unearned revenue','L−',6000,''],['','Service revenue','R+','',6000]])),
MC('a5','t3','A machine bought on 1 January 2021 for 90 000 (residual value 10 000, life 8 years, straight-line). On 1 January 2024 an overhaul of 6 000 extends its total life to 10 years; the residual value does not change. Depreciation for 2024?',
 ['10 000','8 600','9 429','8 000'],3,
 F('2021–2023: (90 000 − 10 000) / 8 = 10 000 a year\nBook value on 1 Jan 2024 = 90 000 − 3 × 10 000 = 60 000\n+ overhaul (capital expenditure) 6 000 = 66 000\nRemaining life = 10 − 3 = 7 years\nRevised depreciation = (66 000 − 10 000) / 7 = 8 000')+'<p>The change is prospective: past years are not restated. 8 600 spreads the new total over 10 years from the start; 9 429 forgets the residual value.</p>'),
MC('a6','t3','P buys 100% of Q for 2 400 000 in cash. Q’s identifiable assets have a fair value of 3 100 000 and its liabilities are 1 000 000. Goodwill, and how is it treated afterwards?',
 ['300 000, amortised over its useful life','700 000, tested for impairment every year','300 000, tested for impairment every year and not amortised','No goodwill: Q’s assets are worth more than the price'],2,
 F('Net assets acquired = 3 100 000 − 1 000 000 = 2 100 000\nGoodwill = Price paid − Net assets = 2 400 000 − 2 100 000 = 300 000')+J([['','Assets acquired (at market value)','A+',3100000,''],['','Goodwill','A+',300000,''],['','Liabilities assumed','L+','',1000000],['','Cash','A−','',2400000]])+'<p>Goodwill is only recorded when acquired. It is not amortised: it is tested for impairment every year.</p>'),
MC('a7','t4','On 1 July 2024 a company borrows 60 000 at 4% a year. It repays the principal in three equal instalments, each on 30 June, together with the interest of the past twelve months. Cash paid on 30 June 2025?',
 ['20 000','2 400','22 400','21 600'],2,
 F('Principal instalment = 60 000 / 3 = 20 000\nInterest = 60 000 (outstanding during the year) × 4% × 12/12 = 2 400\nCash paid = 20 000 + 2 400 = 22 400')+'<p>21 600 computes the interest on the 40 000 left <b>after</b> the repayment: interest runs on the principal outstanding during the period.</p>'),
MC('a8','t4','A non-listed company has share capital 400 000 (40 000 shares), share premium 60 000 and retained earnings 140 000. It issues new shares at its equity value per share (French practice). Issue price and share premium per new share?',
 ['Price 10; premium 0','Price 11.50; premium 1.50','Price 15; premium 15','Price 15; premium 5'],3,
 F('Issue price (non-listed) = Total equity / Shares outstanding = (400 000 + 60 000 + 140 000) / 40 000 = 15\nPar value = Share capital / Shares outstanding = 400 000 / 40 000 = 10\nShare premium per share = 15 − 10 = 5')),
MC('a9','t5','An item in inventory cost 840. Its expected selling price is 900; it still needs 50 of costs to complete it and 80 of costs to sell it. Value in the balance sheet?',
 ['770','840','850','820'],0,
 F('NRV = Expected selling price − costs of completion − costs to sell = 900 − 50 − 80 = 770\nLower of cost (840) and NRV (770) = 770  →  write-down 70')+J([['31 Dec','Loss on inventory write-down','E+',70,''],['','Allowance for inventory losses','XA+','',70]])),
MC('a10','t5','On 1 January the allowance for doubtful accounts is 4 000. During the year, 2 500 of receivables are written off. On 31 December gross A/R is 60 000, of which 3 000 is not expected to be collected. Bad debt expense for the year, and net A/R?',
 ['3 000 and 57 000','1 500 and 57 000','1 500 and 58 500','3 000 and 55 500'],1,
 F('Allowance before adjustment = 4 000 − 2 500 (write-offs) = 1 500\nBad debt expense = 3 000 (needed) − 1 500 = 1 500\nNet A/R = 60 000 − 3 000 = 57 000')+J([['31 Dec','Bad debt expense','E+',1500,''],['','Allowance for doubtful accounts','XA+','',1500]])),
MC('a11','t6','40 000 shares are outstanding (par value 5); the market price is 12. The company distributes a 10% share dividend out of the net income of the year (course convention). Effect?',
 ['Share capital +20 000 and total equity +20 000','Cash −48 000 and total equity −48 000','Share capital +48 000 and total equity +48 000','Share capital +48 000, net income of the year −48 000, total equity unchanged'],3,
 F('New shares = 40 000 × 10% = 4 000\nValue = 4 000 × 12 (current share price) = 48 000')+J([['','Net income of the year','SE−',48000,''],['','Share capital','SE+','',48000]])+NOTE('<b>Course convention:</b> the Topic 6 slide values a share dividend at the current share price and credits all of it to share capital (no share premium). No asset or liability changes, so total equity is unchanged.')),
MC('a12','t6','A US company starts the year with retained earnings of 50 000 and makes a loss of 20 000 for the year. Maximum dividend it can distribute?',
 ['30 000','0','50 000','70 000'],0,
 F('Anglo-Saxon world: net income of the year + retained earnings must be positive\n− 20 000 + 50 000 = 30 000')+'<p>In France only the net income of the year can be distributed: no dividend after a loss.</p>'),
MC('a13','t7','A company buys shares of another company as a long-term investment for 15 000 in cash, and later receives a dividend of 600 on them. Classification in the course?',
 ['Investing −15 000; operating +600','Financing −15 000; financing +600','Investing −14 400','Operating −15 000; operating +600'],0,
 '<p>Purchase of equity securities of other entities: <b>investing</b> outflow. Dividends <b>received</b>: <b>operating</b> inflow, like interest received (IFRS allow another category). Dividends <b>paid</b> to the company’s own shareholders would be financing.</p>'),
MC('a14','t7','Sales of the year are 120 000, all on account. Accounts receivable are 18 000 at the start of the year and 25 000 at the end. Cash received from customers (direct method)?',
 ['95 000','120 000','127 000','113 000'],3,
 F('A/R: 18 000 + 120 000 (sales) − cash received = 25 000\nCash received = 18 000 + 120 000 − 25 000 = 113 000')+'<p>Indirect view: the 7 000 increase in A/R is subtracted from net income.</p>'),
MC('a15','t8','A company publishes its 2024 financial statements in April 2025. An investor deciding in April 2025 has no accounting information on January to April 2025. Which limitation?',
 ['Based on historical data','Potential for manipulation','Static in nature','Based on estimates and judgements'],2,
 '<p><b>Static in nature</b>: the statements are a picture at a date or over a period, not real-time information, and the time lag before publication reduces their relevance.</p>'),
MC('a16','t8','Which information is <b>not</b> found in the financial statements, according to the course?',
 ['The amount owed to suppliers','The results of a customer satisfaction survey','The depreciation expense of the year','The dividends declared'],1,
 '<p><b>Exclusion of non-financial information</b>: only transactions measured in money are included. Customer satisfaction, market conditions, reputation and sustainability (ESG) reporting are missing.</p>')];
const M2_B=[
{id:'b1',topic:'t2',type:'case',pts:3,title:'Exercise 1 · Transactions of 2024 (Topics 1–4)',
 q:'<p>Record Kestrel’s journal entries. On 1 March 2024, before the sale below, the inventory holds 100 rackets bought at 45, then 300 rackets bought at 50.</p>',
 parts:[
  JE('a. 1 March: sells 300 rackets at 80 each excluding VAT; the customers pay in cash. Revenue entry.',0.5,'t2',[Dr('Cash',28800),Cr(['Sales revenue','Revenues'],24000),Cr('VAT payable',4800)],'Mar 1'),
  JE('b. Same sale: cost entry (FIFO).',0.5,'t2',[Dr('Cost of goods sold',14500),Cr('Inventory',14500)],'Mar 1'),
  JE('c. 1 April: a shareholder contributes a machine valued at 50 000 in exchange for 2 000 new shares of par value 20 (French practice).',0.5,'t4',[Dr('PPE',50000),Cr('Share capital',40000),Cr('Share premium',10000)],'Apr 1'),
  JE('d. 1 July: sells an old machine for 9 000 in cash. It cost 30 000; its accumulated depreciation was 18 000 on 31 December 2023; its depreciation is 4 000 a year (straight-line). Record the depreciation up to the sale date, then the disposal.',1,'t3',[Dr('Depreciation expense',2000),Cr('Accumulated depreciation',2000),Dr('Cash',9000,'Jul 1'),Dr('Accumulated depreciation',20000),Dr('Loss on disposal',1000),Cr('PPE',30000)],'Jul 1'),
  JE('e. 1 October: buys back 1 500 of its own shares at 14 each, in cash.',0.5,'t4',[Dr('Treasury shares',21000),Cr('Cash',21000)],'Oct 1')],
 solution:F('a. Revenue = 300 × 80 = 24 000;  VAT = 24 000 × 20% = 4 800;  cash = 28 800\nb. FIFO: 100 × 45 + 200 × 50 = 4 500 + 10 000 = 14 500  (100 rackets at 50 are left)\nc. Share capital = 2 000 × 20 = 40 000;  share premium = 50 000 − 40 000 = 10 000\nd. Depreciation 1 Jan – 1 Jul 2024 = 4 000 × 6/12 = 2 000\n   Accumulated depreciation = 18 000 + 2 000 = 20 000;  book value = 30 000 − 20 000 = 10 000\n   Loss = 9 000 − 10 000 = (1 000)\ne. Treasury shares = 1 500 × 14 = 21 000 (a negative amount in equity)')+
  NOTE('<b>Outside the slides (c):</b> the Topic 3 slide records a contribution in kind as Dr PPE / Cr Share capital. Here the shares have a par value of 20 and the machine is worth 50 000, so the French rule of Topic 4 splits the credit into share capital (par value) and share premium (the excess).')+'<p>VAT is a liability: it is not revenue and has no effect on net income.</p>'},
{id:'b2',topic:'t5',type:'case',pts:3.5,title:'Exercise 2 · Year-end adjustments, 31 December 2024 (Topic 5)',
 q:`<ul><li>The machine contributed on 1 April 2024 (Exercise 1c, 50 000): useful life 5 years, residual value 5 000, straight-line method.</li>
 <li>A warehouse (cost 400 000) has accumulated depreciation of 120 000 <b>after</b> the 2024 depreciation. The local property market has collapsed: its recoverable amount is now 250 000.</li>
 <li>On 1 September 2024 Kestrel received 7 200 for 12 months of court rental starting that day, recorded in Unearned revenue.</li>
 <li>The allowance for doubtful accounts was 2 000 on 1 January 2024. On 15 November customer Delta, who owed 1 200, went bankrupt: nothing has been recorded yet. At year-end the allowance must be 2 600.</li>
 <li>Inventory on 31 December, item by item:</li></ul>${T(['Item','Quantity','Unit cost','Expected selling price','Costs to complete','Costs to sell'],[['Rackets','120','50','60','0','12'],['Ball boxes','500','6','9','0','1'],['Custom shoes','40','70','75','3','7']],[1,2,3,4,5])}`,
 parts:[
  JE('a. Depreciation of the contributed machine for 2024',0.5,'t5',[Dr('Depreciation expense',6750),Cr('Accumulated depreciation',6750)],'Dec 31'),
  JE('b. The warehouse',0.75,'t5',[Dr('Impairment expense',30000),Cr('Impairment of PPE',30000)],'Dec 31'),
  JE('c. Court rental',0.5,'t5',[Dr('Unearned revenue',2400),Cr(['Service revenue','Rent revenue','Revenues'],2400)],'Dec 31'),
  JE('d. Delta, then the allowance at year-end (two entries)',1,'t5',[Dr('Allowance for doubtful accounts',1200),Cr('Accounts receivable',1200),Dr('Bad debt expense',1800,'Dec 31'),Cr('Allowance for doubtful accounts',1800)],'Nov 15'),
  JE('e. Inventory',0.75,'t5',[Dr('Loss on inventory write-down',440),Cr('Allowance for inventory losses',440)],'Dec 31')],
 solution:F('a. (50 000 − 5 000) / 5 = 9 000 a year;  April to December = 9 months → 9 000 × 9/12 = 6 750\nb. Net book value = 400 000 − 120 000 = 280 000 > recoverable amount 250 000\n   Impairment loss = 280 000 − 250 000 = 30 000\nc. 7 200 / 12 = 600 a month;  September to December = 4 months → 2 400 earned\nd. Write-off: the allowance covers Delta (1 200);  allowance left = 2 000 − 1 200 = 800\n   Bad debt expense = 2 600 − 800 = 1 800\ne. NRV = selling price − costs to complete − costs to sell\n   Rackets: 60 − 0 − 12 = 48 < 50 → 120 × 2 = 240\n   Ball boxes: 9 − 0 − 1 = 8 > 6 → they stay at cost\n   Custom shoes: 75 − 3 − 7 = 65 < 70 → 40 × 5 = 200\n   Write-down = 240 + 200 = 440 (item by item)')+'<p>The write-off itself changes neither net A/R nor net income; only the year-end top-up of 1 800 goes to the income statement.</p>'},
{id:'b3',topic:'t6',type:'case',pts:2,title:'Exercise 3 · Profit appropriation and equity (Topic 6)',
 q:'<p>On 1 January 2024 Kestrel’s equity was: share capital 200 000 (10 000 shares of par value 20), share premium 30 000, retained earnings 45 000 and net income of 2023 24 000. On 20 April 2024 the shareholders’ meeting approved a dividend of 1.20 per share on the 12 000 shares then outstanding, paid on 10 May; the rest of the 2023 net income was kept in retained earnings. The other changes in equity in 2024 are the contribution in kind and the buyback of Exercise 1. Income before tax for 2024 is 38 000; the tax rate is 25%. Ignore the legal reserve.</p>',
 parts:[
  JE('a. Income tax, 31 December 2024',0.5,'t6',[Dr('Income tax expense',9500),Cr('Income tax payable',9500)],'Dec 31'),
  JE('b. The dividend: entries of 20 April and 10 May 2024',0.5,'t6',[Dr(['Net income of prior year','Retained earnings'],14400),Cr(['Dividend payable','Dividends payable'],14400),Dr(['Dividend payable','Dividends payable'],14400,'May 10'),Cr('Cash',14400)],'Apr 20'),
  NUM1('c. Retained earnings on 31 December 2024 (without the net income of 2024)',0.5,'t6',54600),
  NUM1('d. Total equity on 31 December 2024',0.5,'t6',342100)],
 solution:F('a. Income tax = 38 000 × 25% = 9 500;  net income 2024 = 38 000 − 9 500 = 28 500\nb. Shares on 20 April = 10 000 + 2 000 (contribution of 1 April) = 12 000\n   Dividend = 12 000 × 1.20 = 14 400\nc. Retained earnings = 45 000 + (24 000 − 14 400) = 45 000 + 9 600 = 54 600\nd. Equity on 1 January = 200 000 + 30 000 + 45 000 + 24 000 = 299 000')+
  T(['Statement of changes in equity 2024','Share capital','Share premium','Treasury shares','Ret. earn. &amp; net income','Total'],[['1 January 2024','200 000','30 000','','69 000','299 000'],['Contribution in kind','40 000','10 000','','','50 000'],['Dividend on the 2023 net income','','','','(14 400)','(14 400)'],['Share buyback','','','(21 000)','','(21 000)'],['Net income 2024','','','','28 500','28 500'],['<b>31 December 2024</b>','<b>240 000</b>','<b>40 000</b>','<b>(21 000)</b>','<b>83 100</b>','<b>342 100</b>']],[1,2,3,4,5])+
  '<p>Equity section on 31 December 2024: share capital 240 000, share premium 40 000, treasury shares (21 000), retained earnings 54 600, net income of 2024 28 500 (54 600 + 28 500 = 83 100).</p>'},
{id:'b4',topic:'t7',type:'case',pts:2.5,title:'Exercise 4 · Cash flow statement from two balance sheets (Topic 7)',
 q:`<p><b>Orwell Trading</b>, another company. Use the <b>indirect method</b>; enter cash outflows as negative numbers.</p>${T(['Balance sheet, 31 December','2024','2023'],[['PPE (gross)','180 000','150 000'],['Accumulated depreciation','(64 000)','(52 000)'],['Inventory','22 000','25 000'],['Accounts receivable','33 000','28 000'],['Prepaid insurance','1 000','1 500'],['Cash','40 000','26 000'],['<b>Total assets</b>','<b>212 000</b>','<b>178 500</b>'],['Share capital','90 000','80 000'],['Retained earnings','51 000','39 000'],['Financial loan LT','50 000','40 000'],['Accounts payable','19 000','16 000'],['Salaries payable','2 000','3 500'],['<b>Total equity and liabilities</b>','<b>212 000</b>','<b>178 500</b>']],[1,2])}<ul><li>Net income for 2024: 20 000. No PPE was sold in 2024.</li><li>A new loan of 15 000 was received and 5 000 of the old loan was repaid.</li><li>Shares were issued for cash; dividends were paid in cash.</li></ul>`,
 parts:[
  NUM1('a. Depreciation expense for 2024',0.25,'t7',12000),
  NUM1('b. Dividends paid in 2024',0.25,'t7',8000),
  NUM1('c. Net cash from operating activities',1,'t7',32000),
  NUM1('d. Net cash from investing activities',0.5,'t7',-30000),
  NUM1('e. Net cash from financing activities',0.5,'t7',12000)],
 solution:F('a. No PPE sold: depreciation = change in accumulated depreciation = 64 000 − 52 000 = 12 000\nb. Retained earnings: 39 000 + 20 000 − dividends = 51 000  →  dividends = 8 000\n   PPE bought = 180 000 − 150 000 = 30 000;  shares issued = 90 000 − 80 000 = 10 000')+
  T(['Orwell Trading, statement of cash flows 2024','Amount'],[['Net income','20 000'],['+ Depreciation','12 000'],['− Increase in accounts receivable (33 000 − 28 000)','(5 000)'],['+ Decrease in inventory (25 000 − 22 000)','3 000'],['+ Decrease in prepaid insurance (1 500 − 1 000)','500'],['+ Increase in accounts payable (19 000 − 16 000)','3 000'],['− Decrease in salaries payable (3 500 − 2 000)','(1 500)'],['<b>Net cash from operating activities</b>','<b>32 000</b>'],['Purchase of PPE','(30 000)'],['<b>Net cash from investing activities</b>','<b>(30 000)</b>'],['New loan','15 000'],['Loan repaid','(5 000)'],['Issue of shares','10 000'],['Dividends paid','(8 000)'],['<b>Net cash from financing activities</b>','<b>12 000</b>'],['Net increase in cash','14 000'],['Cash on 1 January 2024','26 000'],['<b>Cash on 31 December 2024</b>','<b>40 000</b>']],[1])+
  '<p>Check: 26 000 + 32 000 − 30 000 + 12 000 = 40 000, the cash of the 2024 balance sheet. The loan: 40 000 + 15 000 − 5 000 = 50 000.</p>'},
{id:'b5',topic:'t8',type:'written',pts:1,lines:8,title:'Exercise 5 · Limitations of financial statements (Topic 8)',
 q:'<p>Kestrel’s CEO says: “Our balance sheet shows the warehouse at 250 000 and our net income is 28 500, so investors know everything they need about us.” Using <b>two</b> limitations of financial statements, explain why this is not quite true (about five lines).</p>',
 rubric:[{c:'First limitation named correctly',pts:0.25},{c:'Explained with a Kestrel item (for example, the 250 000 recoverable amount is an estimate)',pts:0.25},{c:'Second limitation named correctly',pts:0.25},{c:'Explained with a Kestrel item or a missing piece of information',pts:0.25}],
 solution:'<ul><li><b>Based on estimates and judgements</b>: the 250 000 is management’s estimate of the recoverable amount; the 2 600 allowance, the NRV of the rackets and the machine’s five-year life are estimates too. Other estimates would give another net income.</li><li><b>Potential for manipulation</b>: these estimates could be chosen to show a better profit (earnings management).</li><li><b>Static in nature</b>: a picture on 31 December 2024, published later; what happened since is not in it.</li><li><b>Exclusion of non-financial information</b>: customer satisfaction, the brand’s reputation and sustainability (ESG) are missing.</li><li><b>Based on historical data</b>: the other assets are shown at book values, not at market values.</li></ul><p>Conclusion of the course: users should complement the statements with essential non-financial information.</p>'}];

/* Mock 3: advanced, with one integrated case (Harbor Analytics) */
const M3_A=[
MC('a1','t1','On the same day a company collects 4 000 from a customer and pays a 1 500 supplier invoice recorded last month. Combined effect on the accounting equation?',
 ['Assets +2 500; equity +2 500','Assets +4 000; liabilities −1 500; equity +5 500','Assets −1 500; liabilities −1 500; equity unchanged','Assets −1 500; equity −1 500'],2,
 J([['','Cash','A+',4000,''],['','Accounts receivable','A−','',4000],['','Accounts payable','L−',1500,''],['','Cash','A−','',1500]])+F('Assets: + 4 000 − 4 000 − 1 500 = − 1 500\nLiabilities: − 1 500\nEquity: no revenue, no expense → unchanged')+'<p>Collecting a receivable swaps one asset for another; paying a recorded invoice reduces an asset and a liability. Neither touches the income statement.</p>'),
MC('a2','t1','A cash payment of rent of 900 is posted as a debit of 900 to Rent expense and a credit of 90 to Cash. What does the trial balance show?',
 ['It still balances: a trial balance cannot detect this error','Total credits exceed total debits by 810','Total debits exceed total credits by 990','Total debits exceed total credits by 810'],3,
 F('Debits posted 900;  credits posted 90\nDifference = 900 − 90 = 810 more on the debit side')+'<p>The trial balance checks that total debit balances equal total credit balances: a one-sided posting error makes it fail.</p>'),
MC('a3','t2','Opening inventory 50 units at 20. 3 Feb: buys 100 at 22. 10 Feb: sells 120. 15 Feb: buys 80 at 25. 25 Feb: sells 70. Perpetual system, FIFO. Cost of goods sold of the 25 February sale?',
 ['1 540','1 660','1 600','1 750'],1,
 T(['Date','Event','Cost of goods sold','Inventory left'],[['10 Feb','Sell 120','50 × 20 + 70 × 22 = 1 000 + 1 540 = 2 540','30 @ 22'],['15 Feb','Buy 80 @ 25','','30 @ 22, 80 @ 25'],['25 Feb','Sell 70','30 × 22 + 40 × 25 = 660 + 1 000 = <b>1 660</b>','40 @ 25']])+'<p>In a perpetual system each sale takes the oldest units still on hand at that date.</p>'),
MC('a4','t2','Gross sales 250 000; sales discounts 10 000; cost of goods sold 150 000. Gross profit percentage?',
 ['37.5%','40%','36%','62.5%'],0,
 F('Net sales = 250 000 − 10 000 (sales discounts are a deduction from sales) = 240 000\nGross profit = 240 000 − 150 000 = 90 000\nGP% = Gross profit / Net sales = 90 000 / 240 000 = 37.5%')+'<p>40% ignores the discount; 36% divides 90 000 by gross sales.</p>'),
MC('a5','t3','A truck bought on 1 January 2021 for 36 000 (residual value 4 000, life 4 years, straight-line) is sold on 30 September 2024 for 7 000. Gain or loss on disposal?',
 ['Loss of 5 000','Gain of 1 000','Loss of 1 000','Gain of 3 000'],1,
 F('Annual depreciation = (36 000 − 4 000) / 4 = 8 000\nAccumulated depreciation on 31 Dec 2023 = 3 × 8 000 = 24 000\nUpdate to 30 Sep 2024: 8 000 × 9/12 = 6 000  →  30 000\nBook value = 36 000 − 30 000 = 6 000\nGain = 7 000 − 6 000 = 1 000')+J([['30 Sep','Depreciation expense','E+',6000,''],['','Accumulated depreciation','XA+','',6000],['30 Sep','Cash','A+',7000,''],['','Accumulated depreciation','XA−',30000,''],['','PPE','A−','',36000],['','Gain on disposal','R+','',1000]])+'<p>The loss of 5 000 forgets to bring depreciation up to date (book value 12 000).</p>'),
MC('a6','t3','A company spends 200 000 developing its own software internally, and buys from another company a licence for 60 000 (a five-year contract). What is recognised as intangible assets, and how?',
 ['260 000, amortised over 5 years','200 000, tested for impairment every year','60 000, amortised 12 000 a year','60 000, never amortised'],2,
 F('Internally generated: not recognised (its value needs estimation: low reliability)\nExternally acquired licence: recognised at its cost, 60 000\nFinite life (five-year contract): amortisation = 60 000 / 5 = 12 000 a year')),
MC('a7','t4','A listed company has share capital of 50 000 000 (25 000 000 shares). Its average share price is 18; new shares are issued at a 10% discount to raise 8 100 000 (French practice). Share premium recorded?',
 ['1 000 000','7 100 000','8 000 000','8 100 000'],1,
 F('Issue price = 18 × (1 − 10%) = 16.20\nNew shares = 8 100 000 / 16.20 = 500 000\nPar value = 50 000 000 / 25 000 000 = 2\nShare capital = 500 000 × 2 = 1 000 000\nShare premium = 500 000 × (16.20 − 2) = 7 100 000')+J([['','Cash','A+',8100000,''],['','Share capital','SE+','',1000000],['','Share premium','SE+','',7100000]])),
MC('a8','t4','Net income is 192 000. The company has issued 100 000 shares, of which 4 000 were bought back and are held as treasury shares. Earnings per share?',
 ['1.84','1.92','2.08','2.00'],3,
 F('Shares outstanding = 100 000 − 4 000 = 96 000\nEPS = Net income / Shares outstanding = 192 000 / 96 000 = 2.00')+'<p>Treasury shares are not outstanding. That is why a buyback can increase EPS (1.92 if they were counted).</p>'),
MC('a9','t5','A French company uses the French declining-balance method for a machine bought on 1 January 2024 for 40 000 (useful life 5 years, no residual value). Depreciation for 2025?',
 ['8 000','9 600','9 100','14 000'],2,
 F('French multiplier for N = 5: 1.75\nRate = 100% / 5 × 1.75 = 35%\n2024: 40 000 × 35% = 14 000  →  book value 26 000\n2025: 26 000 × 35% = 9 100')+'<p>9 600 is the double declining-balance answer (40%, the multiplier used in the course exercises); 8 000 is straight-line.</p>'),
MC('a10','t5','Equipment bought on 1 January 2022 for 120 000 (no residual value, 10 years, straight-line). On 31 December 2024 its recoverable amount is 70 000. How does it appear in the balance sheet on that date?',
 ['Equipment 120 000; accumulated depreciation (36 000); net 84 000; the 14 000 only in the notes','Equipment 70 000, with no contra-account','Equipment 120 000; accumulated depreciation (36 000); impairment of PPE (14 000); net 70 000','Equipment 84 000, the 14 000 being deducted from equity directly'],2,
 F('Accumulated depreciation = 3 × (120 000 / 10) = 36 000\nNet book value = 120 000 − 36 000 = 84 000 > recoverable amount 70 000\nImpairment loss = 84 000 − 70 000 = 14 000')+J([['31 Dec 2024','Impairment expense','E+',14000,''],['','Impairment of PPE','XA+','',14000]])+'<p>Impairment of PPE is a contra-asset, like accumulated depreciation; the loss is an expense of the year.</p>'),
MC('a11','t6','A company distributes goods from its inventory (cost 8 000) to its shareholders as a dividend. Effect, according to the course?',
 ['Retained earnings −8 000 and inventory −8 000','An expense of 8 000 in the income statement','No effect: no cash is paid','Share capital −8 000 and inventory −8 000'],0,
 '<p>A dividend in non-cash assets is very rare: retained earnings and the cost of the assets given both decrease. Like any dividend, it is never an expense.</p>'),
MC('a12','t6','A French company has share capital of 500 000, a legal reserve already of 50 000, no retained earnings, and a net income for the year of 80 000. Maximum dividend?',
 ['0','72 000','76 000','80 000'],3,
 F('Legal reserve ceiling = 10% × 500 000 = 50 000: already reached\n→ no 5% allocation, and the 95% limit no longer applies\nMaximum dividend (France: the net income of the year) = 80 000')+'<p>76 000 (95%) applies only while the legal reserve is below 10% of share capital.</p>'),
MC('a13','t7','Net income of 50 000 includes a gain of 6 000 on the sale of land (sold for 26 000 in cash) and depreciation of 9 000. Changes: accounts receivable +7 000; unearned revenue +4 000; accounts payable −3 000; income tax payable +2 000. Operating cash flow (indirect method)?',
 ['49 000','55 000','61 000','75 000'],0,
 F('50 000 + 9 000 − 6 000 − 7 000 + 4 000 − 3 000 + 2 000 = 49 000')+'<p>The gain is removed from operating; the 26 000 received is an investing inflow. 55 000 forgets the gain; 61 000 adds it.</p>'),
MC('a14','t7','PPE (gross) is 300 000 at the start of 2024 and 360 000 at the end. Accumulated depreciation is 120 000 at the start and 135 000 at the end. In 2024 a machine with a gross value of 40 000 and accumulated depreciation of 30 000 was sold. PPE bought in 2024, and depreciation expense for 2024?',
 ['60 000 and 15 000','100 000 and 15 000','60 000 and 45 000','100 000 and 45 000'],3,
 F('PPE: 300 000 + purchases − 40 000 (sold) = 360 000  →  purchases = 100 000\nAccumulated depreciation: 120 000 + expense − 30 000 (removed on the sale) = 135 000  →  expense = 45 000')+'<p>Reading only the change in each balance (60 000, 15 000) forgets the asset that left the books.</p>'),
MC('a15','t8','Just before year-end, with no new information, management lowers the allowance for doubtful accounts so that profit reaches the bonus target. Which limitation does this illustrate best?',
 ['Static in nature','Potential for manipulation (earnings management)','Based on historical data','Exclusion of non-financial information'],1,
 '<p>Management uses the flexibility of an estimate to present performance more favourably: <b>earnings management</b>. It can mislead investors and regulators.</p>'),
MC('a16','t8','According to the course summary, what should users do about the limitations of financial statements?',
 ['Complement the statements with essential non-financial information','Rely on the cash flow statement only','Ignore every estimate made by management','Use market values instead of the balance sheet'],0,
 '<p>Financial statements focus on the financial side of a business and may not give a complete view of its performance: users should complement them with essential non-financial information.</p>')];
const M3_CASE=`<p>Exercises 1 to 4 follow <b>Harbor Analytics SAS</b>, a consulting firm (France, year-end 31 December, tax rate 25%, no VAT). Exercise 5 asks for a short discussion.</p>
${T(['Balance sheet, 31 December 2023','Amount'],[['Office equipment (bought 1 January 2023)','40 000'],['Accumulated depreciation','(16 000)'],['Accounts receivable','18 000'],['Allowance for doubtful accounts','(1 200)'],['Cash','21 200'],['<b>Total assets</b>','<b>62 000</b>'],['Share capital (4 000 shares, par value 10)','40 000'],['Retained earnings','6 000'],['Net income of 2023','9 000'],['Accounts payable','5 000'],['Salary payable','2 000'],['<b>Total equity and liabilities</b>','<b>62 000</b>']],[1])}
<p><b>Transactions of 2024</b>, already recorded during the year (they are in the trial balance below):</p><ol>
<li>1 January: bank loan of 45 000 at 4% a year, repaid in three equal instalments of principal on 31 December 2024, 2025 and 2026, each with the interest of the year.</li>
<li>1 March: 1 000 new shares issued at 16 in cash (par value 10, French practice).</li>
<li>15 April: the shareholders’ meeting declares a dividend of 1 per share on the 5 000 shares, out of the 2023 net income; paid on 15 May. The rest of the 2023 net income goes to retained earnings.</li>
<li>Services billed on account: 120 000. Cash collected from customers: 118 000.</li>
<li>10 June: a customer owing 900 went bankrupt; the receivable was written off against the allowance.</li>
<li>1 July: a server bought for 12 000 in cash (office equipment; life 4 years, no residual value, straight-line).</li>
<li>1 September: insurance of 4 800 paid for 12 months (Prepaid insurance).</li>
<li>1 November: 9 000 received in advance for a six-month contract starting on 1 November (Unearned revenue).</li>
<li>Salaries paid in cash: 38 000, of which 2 000 owed at the end of 2023.</li>
<li>Rent paid in cash: 12 000. Utilities of 3 200 received on account; 6 200 paid to suppliers.</li></ol>
${T(['Unadjusted trial balance, 31 December 2024','Debit','Credit'],[['Cash','131 200',''],['Accounts receivable','19 100',''],['Allowance for doubtful accounts','','300'],['Prepaid insurance','4 800',''],['Office equipment','52 000',''],['Accumulated depreciation','','16 000'],['Unearned revenue','','9 000'],['Accounts payable','','2 000'],['Financial loan ST','','15 000'],['Financial loan LT','','30 000'],['Share capital','','50 000'],['Share premium','','6 000'],['Retained earnings','','10 000'],['Service revenue','','120 000'],['Salary expense','36 000',''],['Rent expense','12 000',''],['Utility expense','3 200',''],['<b>Total</b>','<b>258 300</b>','<b>258 300</b>']],[1,2])}`;
const M3_B=[
{id:'b1',topic:'t4',type:'case',pts:3,title:'Exercise 1 · Transactions and the bank loan (Topics 1–4)',
 q:'<p>Record these entries of Harbor. Entries a to d are already included in the trial balance; entry e is not.</p>',
 parts:[
  JE('a. Transaction 1: the loan, 1 January 2024.',0.5,'t4',[Dr('Cash',45000),Cr('Financial loan LT',30000),Cr('Financial loan ST',15000)],'Jan 1'),
  JE('b. Transaction 2: the share issue, 1 March 2024.',0.5,'t4',[Dr('Cash',16000),Cr('Share capital',10000),Cr('Share premium',6000)],'Mar 1'),
  JE('c. Transaction 3: declaration (15 April) and payment (15 May) of the dividend.',0.5,'t4',[Dr(['Net income of prior year','Retained earnings'],5000),Cr(['Dividend payable','Dividends payable'],5000),Dr(['Dividend payable','Dividends payable'],5000,'May 15'),Cr('Cash',5000)],'Apr 15'),
  JE('d. Transaction 8: the advance received on 1 November 2024.',0.5,'t2',[Dr('Cash',9000),Cr('Unearned revenue',9000)],'Nov 1'),
  JE('e. 31 December 2024: Harbor pays the first instalment of the loan, then reclassifies the loan for 2025.',1,'t4',[Dr('Interest expense',1800),Dr('Financial loan ST',15000),Cr('Cash',16800),Dr('Financial loan LT',15000,'Dec 31'),Cr('Financial loan ST',15000)],'Dec 31')],
 solution:F('a. Principal due within one year = 45 000 / 3 = 15 000 (ST);  the other 30 000 is long-term\nb. Share capital = 1 000 × 10 = 10 000;  share premium = 1 000 × (16 − 10) = 6 000\nc. Dividend = 5 000 shares × 1 = 5 000, out of the 2023 net income (9 000)\n   The other 4 000 go to retained earnings: 6 000 + 4 000 = 10 000 (trial balance)\nd. No revenue yet on 1 November: the service has not been performed\ne. Interest = 45 000 × 4% × 12/12 = 1 800;  principal repaid = 15 000;  cash paid = 16 800\n   Reclassification: the 15 000 due on 31 December 2025 moves from LT to ST\n   After e: Financial loan ST 15 000, Financial loan LT 15 000, cash 131 200 − 16 800 = 114 400')},
{id:'b2',topic:'t5',type:'case',pts:3.5,title:'Exercise 2 · Year-end adjustments, 31 December 2024 (Topic 5)',
 q:'<ul><li>Office equipment: the equipment bought on 1 January 2023 (40 000, residual value 2 000, life 5 years) is depreciated by the <b>double declining-balance</b> method; the server of transaction 6 by the straight-line method. Record <b>one entry</b> for both.</li><li>After this depreciation, the recoverable amount of the 2023 equipment is 11 000: a newer technology has appeared.</li><li>Insurance: see transaction 7. Contract paid in advance: see transaction 8.</li><li>At year-end the allowance for doubtful accounts must be 1 200.</li><li>December salaries of 3 000 will be paid on 5 January 2025.</li></ul>',
 parts:[
  JE('a. Depreciation for 2024 (one entry)',0.75,'t5',[Dr('Depreciation expense',11100),Cr('Accumulated depreciation',11100)],'Dec 31'),
  JE('b. Impairment of the 2023 equipment',0.5,'t5',[Dr('Impairment expense',3400),Cr('Impairment of PPE',3400)],'Dec 31'),
  JE('c. Insurance',0.25,'t5',[Dr('Insurance expense',1600),Cr('Prepaid insurance',1600)],'Dec 31'),
  JE('d. Contract paid in advance',0.25,'t5',[Dr('Unearned revenue',3000),Cr('Service revenue',3000)],'Dec 31'),
  JE('e. Allowance for doubtful accounts',0.5,'t5',[Dr('Bad debt expense',900),Cr('Allowance for doubtful accounts',900)],'Dec 31'),
  JE('f. December salaries',0.25,'t5',[Dr('Salary expense',3000),Cr(['Salary payable','Salaries payable'],3000)],'Dec 31'),
  NUM1('g. Net book value of all the office equipment on 31 December 2024',0.5,'t5',21500),
  NUM1('h. Net accounts receivable on 31 December 2024',0.5,'t5',17900)],
 solution:F('a. 2023 equipment: DDB rate = 100% / 5 × 2 = 40%\n   2023: 40 000 × 40% = 16 000 (the accumulated depreciation of the trial balance)\n   2024: (40 000 − 16 000) × 40% = 24 000 × 40% = 9 600  (residual value not deducted)\n   Server: 12 000 / 4 = 3 000 a year;  July to December = 6 months → 1 500\n   Total = 9 600 + 1 500 = 11 100\nb. Net book value of the 2023 equipment = 40 000 − (16 000 + 9 600) = 14 400 > 11 000\n   Impairment = 14 400 − 11 000 = 3 400\nc. 4 800 / 12 = 400 a month;  September to December = 4 months → 1 600\nd. 9 000 / 6 = 1 500 a month;  November and December → 3 000\ne. Allowance before adjustment = 1 200 − 900 (write-off, transaction 5) = 300\n   Bad debt expense = 1 200 − 300 = 900\nf. Salaries owed at year-end: Dr Salary expense / Cr Salary payable\ng. 52 000 − (16 000 + 11 100) − 3 400 = 52 000 − 27 100 − 3 400 = 21 500\nh. 19 100 − 1 200 = 17 900')+
  NOTE('<b>From the course exercises (f):</b> the Topic 5 slides stamp accruals "Not discussed in this course", but salaries owed at year-end appear with this entry in the Topic 6 (RedLotus) and Topic 8 (tutorial) exercises.')},
{id:'b3',topic:'t6',type:'case',pts:2,title:'Exercise 3 · Income tax, interim dividend and equity (Topic 6)',
 q:'<p>Use the trial balance and your entries of Exercises 1e and 2. On 31 December 2024 the board of directors also declares an interim dividend of 1.20 per share on the 5 000 shares, paid the same day.</p>',
 parts:[
  NUM1('a. Income before tax for 2024',0.5,'t6',50000),
  JE('b. Income tax (25%)',0.25,'t6',[Dr('Income tax expense',12500),Cr('Income tax payable',12500)],'Dec 31'),
  JE('c. Interim dividend: declaration and payment',0.5,'t6',[Dr('Net income of the year',6000),Cr(['Dividend payable','Dividends payable'],6000),Dr(['Dividend payable','Dividends payable'],6000,'Dec 31'),Cr('Cash',6000)],'Dec 31'),
  NUM1('d. Total equity on 31 December 2024',0.5,'t6',97500),
  MCP('e. In an Anglo-Saxon presentation (after appropriation), how would the 2024 profit appear in equity?',0.25,'t6',['As a separate line, “Net income of the year”','Only the retained part, inside retained earnings','As a liability until the dividend is paid','It would not appear in equity'],1)],
 solution:T(['Income statement 2024','Amount'],[['Service revenue (120 000 + 3 000)','123 000'],['Salary expense (36 000 + 3 000)','(39 000)'],['Rent expense','(12 000)'],['Utility expense','(3 200)'],['Interest expense','(1 800)'],['Depreciation expense','(11 100)'],['Impairment expense','(3 400)'],['Insurance expense','(1 600)'],['Bad debt expense','(900)'],['<b>Income before tax</b>','<b>50 000</b>'],['Income tax expense (25%)','(12 500)'],['<b>Net income</b>','<b>37 500</b>']],[1])+
  F('Expenses before tax = 39 000 + 12 000 + 3 200 + 1 800 + 11 100 + 3 400 + 1 600 + 900 = 73 000\nIncome before tax = 123 000 − 73 000 = 50 000;  tax = 50 000 × 25% = 12 500\nInterim dividend = 5 000 × 1.20 = 6 000 (declared by the board, out of the net income of the year)\nEquity = 50 000 + 6 000 + 10 000 + (37 500 − 6 000) = 97 500')+
  '<p>Equity section (France, before appropriation): share capital 50 000, share premium 6 000, retained earnings 10 000, net income of 2024 31 500 (37 500 − interim dividend 6 000).</p>'},
{id:'b4',topic:'t7',type:'case',pts:2.5,title:'Exercise 4 · Cash flow statement 2024, direct method (Topic 7)',
 q:'<p>Prepare Harbor’s 2024 cash flow statement with the <b>direct method</b>, from the cash movements of transactions 1 to 10 and of Exercises 1 to 3. Enter outflows as negative numbers.</p>',
 parts:[
  NUM1('a. Net cash from operating activities',1,'t7',64200),
  NUM1('b. Net cash from investing activities',0.25,'t7',-12000),
  NUM1('c. Net cash from financing activities',0.5,'t7',35000),
  NUM1('d. Cash on 31 December 2024',0.25,'t7',108400),
  MCP('e. With the indirect method, how is the change in accounts payable (5 000 → 2 000) treated?',0.5,'t7',['Added to net income: +3 000','Subtracted from net income: −3 000','Shown in financing activities','Left out: suppliers are not an operating item'],1)],
 solution:T(['Harbor Analytics, statement of cash flows 2024 (direct method)','Amount'],[['Cash received from customers','118 000'],['Advance received from a customer (transaction 8)','9 000'],['Paid for insurance','(4 800)'],['Paid to employees','(38 000)'],['Paid for rent','(12 000)'],['Paid to suppliers','(6 200)'],['Interest paid','(1 800)'],['<b>Net cash from operating activities</b>','<b>64 200</b>'],['Purchase of the server','(12 000)'],['<b>Net cash from investing activities</b>','<b>(12 000)</b>'],['New bank loan','45 000'],['Loan repaid','(15 000)'],['Issue of shares','16 000'],['Dividend on the 2023 net income','(5 000)'],['Interim dividend 2024','(6 000)'],['<b>Net cash from financing activities</b>','<b>35 000</b>'],['Net increase in cash','87 200'],['Cash on 1 January 2024','21 200'],['<b>Cash on 31 December 2024</b>','<b>108 400</b>']],[1])+
  F('Check with the indirect method:\n  37 500 (net income) + 11 100 (depreciation) + 3 400 (impairment)\n− 1 100 (net A/R: 16 800 → 17 900)   − 3 200 (prepaid insurance: 0 → 3 200)\n+ 6 000 (unearned revenue: 0 → 6 000)   − 3 000 (A/P: 5 000 → 2 000)\n+ 1 000 (salary payable: 2 000 → 3 000)   + 12 500 (income tax payable: 0 → 12 500)\n= 64 200')+
  '<p>The allowance for doubtful accounts is 1 200 at both dates (no change in the provision): the bad debt expense of 900 only replaces the 900 written off, so it is already inside the change in net A/R. Cash check: 131 200 − 16 800 (loan instalment) − 6 000 (interim dividend) = 108 400.</p>'},
{id:'b5',topic:'t8',type:'written',pts:1,lines:8,title:'Exercise 5 · Limitations of financial statements (Topic 8)',
 q:'<p>Harbor’s 2024 profit depends on several choices made by management: the declining-balance method, the recoverable amount of 11 000, the allowance of 1 200. In about five lines, explain which <b>two</b> limitations of financial statements this illustrates, and what a user of the statements should do about it.</p>',
 rubric:[{c:'Names “based on estimates and judgements”',pts:0.25},{c:'Links it to at least one of Harbor’s choices and explains the subjectivity (another choice → another profit)',pts:0.25},{c:'Names “potential for manipulation” (earnings management) and explains how these choices could raise the profit',pts:0.25},{c:'Says what users should do: complement the statements with essential non-financial information',pts:0.25}],
 solution:'<p><b>Based on estimates and judgements</b>: the standards give management flexibility. The declining-balance method, the recoverable amount of 11 000 and the 1 200 allowance are judgements: with straight-line depreciation ((40 000 − 2 000) / 5 = 7 600 instead of 9 600) or a higher recoverable amount, the 2024 profit would be higher. This brings subjectivity and potential bias.</p><p><b>Potential for manipulation</b>: the same flexibility could be used to present performance more favourably (earnings management), for example by lowering the allowance or raising the recoverable amount; it can mislead investors and regulators.</p><p><b>What users should do</b>: read the statements critically and complement them with essential non-financial information.</p>'}];

const MOCKS=[
 {id:'m1',title:'Mock exam 1 · Foundation',exam:'endterm',scope:'Topics 1–8',duration:120,total:20,calculator:MOCK_CALC,intro:MOCK_INTRO,
  summary:'Level 1: one or two steps per question. Part B follows Brightwave SARL, a lamp shop, through 2024.',
  sections:[Object.assign({items:M1_A},PART_A),{title:'Part B · Exercises',intro:'<p>Exercises 1 to 3 and 5 follow <b>Brightwave SARL</b>, a French shop selling lamps (year-end 31 December, no VAT, perpetual inventory). On 1 January 2024 it has 5 000 shares of par value 10. Exercise 4 is about another company.</p>',items:M1_B}]},
 {id:'m2',title:'Mock exam 2 · Intermediate',exam:'endterm',scope:'Topics 1–8',duration:120,total:20,calculator:MOCK_CALC,intro:MOCK_INTRO,
  summary:'Level 2: partial years, VAT, a contribution in kind, a disposal, write-offs and a cash flow statement from two balance sheets.',
  sections:[Object.assign({items:M2_A},PART_A),{title:'Part B · Exercises',intro:'<p>Exercises 1 to 3 and 5 follow <b>Kestrel Sports SA</b>, a French sports retailer (year-end 31 December, VAT 20% on sales, perpetual inventory, FIFO). Exercise 4 is about another company.</p>',items:M2_B}]},
 {id:'m3',title:'Mock exam 3 · Advanced',exam:'endterm',scope:'Topics 1–8',duration:120,total:20,calculator:MOCK_CALC,intro:MOCK_INTRO,
  summary:'Level 3: multi-step questions and one integrated case, Harbor Analytics, from the 2024 transactions to the cash flow statement, like the Topic 8 tutorial.',
  sections:[Object.assign({items:M3_A},PART_A),{title:'Part B · Exercises',intro:M3_CASE,items:M3_B}]}];
// one account menu for every journal question: all the accepted names, plus the usual course accounts as distractors
const MOCK_KINDS={'Sales revenue':'R','Rent revenue':'R','Unearned revenue':'L','Prepaid insurance':'A','Prepaid rent':'A','Impairment of PPE':'XA','Allowance for doubtful accounts':'XA','Allowance for inventory losses':'XA','Loss on inventory write-down':'E','Income tax payable':'L','Dividend payable':'L','Salary payable':'L','Net income of the year':'SE'};
const mockJournals=MOCKS.flatMap(m=>m.sections.flatMap(sec=>sec.items.flatMap(x=>[x,...(x.parts||[])]))).filter(p=>p.type==='journal');
const MOCK_ACCOUNTS=[...new Set(['Cash','Accounts receivable','Inventory','Supplies','Prepaid insurance','Prepaid rent','PPE','Land','Goodwill','Accumulated depreciation','Impairment of PPE','Allowance for doubtful accounts','Allowance for inventory losses','Accounts payable','Notes payable','Financial loan LT','Financial loan ST','Unearned revenue','VAT payable','Salary payable','Income tax payable','Dividend payable','Share capital','Share premium','Treasury shares','Retained earnings','Net income of the year','Net income of prior year','Sales revenue','Service revenue','Rent revenue','Gain on disposal','Cost of goods sold','Salary expense','Rent expense','Insurance expense','Supplies expense','Utility expense','Interest expense','Depreciation expense','Impairment expense','Bad debt expense','Loss on disposal','Loss on inventory write-down','Income tax expense'].concat(mockJournals.flatMap(p=>p.l.flatMap(y=>y.a))))].sort((a,b)=>a.localeCompare(b));
mockJournals.forEach(p=>{p.accounts=MOCK_ACCOUNTS;p.kinds=MOCK_KINDS});

registerSubject({
  slug:'afa',
  name:'Advanced Financial Accounting',
  short:'AFA',
  tagline:'Bachelor 2 · Final exam: Topics 1–8',
  status:'Topics 1–8 done · layered sheets, 20 generators, 4 tools · 3 end-term mock exams',
  exams:[
    {id:'midterm',label:'Midterm',scope:'Topics 1–4'},
    {id:'endterm',label:'End-term',scope:'Topics 5–8 (the final exam also covers 1–4)'}],
  topics:[
    {id:'t1',label:'Topic 1',title:'Accounting cycle',short:'T1 Cycle',exam:'midterm',summary:'Equation, debits/credits, journalizing',sheet:SHEETS.t1},
    {id:'t2',label:'Topic 2',title:'Operating transactions',short:'T2 Operating',exam:'midterm',summary:'Accrual, A/R–A/P, prepaid/unearned, VAT, FIFO',sheet:SHEETS.t2},
    {id:'t3',label:'Topic 3',title:'PPE & intangibles',short:'T3 PPE',exam:'midterm',summary:'Cost of PPE, depreciation, disposal, goodwill',sheet:SHEETS.t3},
    {id:'t4',label:'Topic 4',title:'Financing',short:'T4 Financing',exam:'midterm',summary:'Share issues, dividends, buybacks, loans',sheet:SHEETS.t4},
    {id:'t5',label:'Topic 5',title:'End-of-period adjustments',short:'T5 Adjustments',exam:'endterm',summary:'Prepaids, depreciation (SL, DB), impairment of PPE, A/R, inventory',sheet:SHEETS.t5},
    {id:'t6',label:'Topic 6',title:'Profit appropriation & dividends',short:'T6 Dividends',exam:'endterm',summary:'Income tax, cash and share dividends, France vs Anglo-Saxon, SOCE',sheet:SHEETS.t6},
    {id:'t7',label:'Topic 7',title:'Cash flow statement',short:'T7 Cash flows',exam:'endterm',summary:'Operating, investing, financing; direct and indirect methods',sheet:SHEETS.t7},
    {id:'t8',label:'Topic 8',title:'Tutorial & limitations',short:'T8 Limitations',exam:'endterm',summary:'Five limitations of financial statements; full tutorial case',sheet:SHEETS.t8}],
  cheatsheet:[{exam:'endterm',html:SHEETS.cheatEnd},{exam:'midterm',html:SHEETS.cheat}],
  glossary:GLOSS,
  overview:{
    eyebrow:'Advanced Financial Accounting',
    title:'Everything in Topics 1–8, on one site',
    lede:'Built only from your course slides and extra exercises on the course platform. The final exam covers all eight topics: Topics 1–4 (midterm) and Topics 5–8 (end-term). Read a topic sheet, then test yourself: quiz, exercises, journal drills, T-accounts, flashcards. Your progress is saved in this browser.',
    blurbs:{cheat:'All formulas and standard entries, Topics 1–8',exercises:'Calculations, matching, short answers, cases',cards:'Definitions and rules',mocks:'End-term format: 2 hours, 16 MCQs + 5 exercises, out of 20'},
    html:`<h3>The final exam</h3>
  <ul><li><b>Scope: all eight topics.</b> Announcement of 28 Nov 2025 on the course platform: "All eight AFA topics covered this semester — from the accounting cycle to cash flows and financial statement limitations […] You can revise every concept that will appear in the final exam."</li>
  <li><b>Format:</b> "the same spirit as the midterm: MCQs + exercises, but over a longer duration (2 hours)."</li>
  <li>The course platform has no syllabus, no past end-term paper and no other exam instructions: this announcement is the only source on the scope and the format.</li></ul>
  <h3>The three mock exams: format chosen</h3>
  <ul><li><b>No past paper and no exam instructions exist</b>, so the mock format is built from the only two course sources on the exam: the announcement above (all eight topics; MCQs + exercises; 2 hours) and the <b>Q&amp;A session 5</b>, whose stated goal is to show "how the midterm and final exam could look like": four-option MCQs on theory and on calculations, and exercises with journal entries in the course format, then statements.</li>
  <li><b>Chosen for this site (not in any source):</b> 20 points. <b>Part A</b>: 16 MCQs, two per topic, 0.5 point each, one right answer, no penalty for a wrong answer. <b>Part B</b>: 5 exercises, 12 points: transactions (Topics 1–4, 3 points), year-end adjustments (Topic 5, 3.5), profit appropriation (Topic 6, 2), cash flow statement (Topic 7, 2.5), a short written answer on the limitations (Topic 8, 1). Calculator: not stated anywhere; the figures work with a basic calculator or by hand.</li>
  <li>Each mock covers <b>all eight topics</b>, the scope of the final exam. Difficulty rises from Mock 1 (one or two steps) to Mock 3 (an integrated case, like the Topic 8 tutorial). None of their questions repeats the quiz, the drills or the exercises.</li></ul>
  <h3>How to use it before the exam</h3>
  <ol><li>Read the topic sheet. Open the worked examples and try them before reading the solution.</li><li>Do the quiz for that topic. Read every explanation, including for correct answers. The "Midterm / End-term" filters split Topics 1–4 and 5–8.</li><li>Do the journal drills without looking at the sheet. Account names are chosen from the course list. The Exercises tab adds calculations with new numbers every time and the full cases of the course (Apollyon, RedLotus, Edison, RESPIR, the Topic 8 tutorial).</li><li>Check <b>Progress</b> to see your weakest topic and go back to it.</li><li>In the last days, take the <b>Mock exams</b> in exam conditions (2 hours, timer on), then read the corrected paper and reopen the sheets of the questions you missed.</li></ol>
  <h3>Sources and limits</h3>
  <ul><li>Topics 1–4: <b>Topic 1–4 slides</b> and the <b>extra exercises with solutions</b>. Questions marked <span class="pill src">Course exercise</span> are copied from them with the official answer.</li>
  <li>Topics 5–8: the course slides (students and solutions versions), the extra exercises with solutions (Apollyon, session 7 Goldsmith and Eagle Express, Edison, RESPIR) and the Topic 8 tutorial. End-term questions marked <span class="pill src">Course exercise</span> reuse an exercise or example of the slides with its official answer; their wrong options were written for this site.</li>
  <li>Questions marked <span class="pill">Practice</span> are new questions built on the same rules and numbers style. The items in the Exercises tab are practice too, unless marked otherwise.</li>
  <li>Anything not in the slides is flagged <b>Outside the slides</b>. Apparent errors in a slide or an official solution are flagged <b>Check against the slide</b> or <b>Check against the solution</b>, never corrected silently.</li>
  <li>The Topic 8 tutorial has <b>no official solution</b> on the course platform: the solution on this site is computed with the course rules and flagged as such.</li>
  <li>Not turned into revision content: the Q&amp;A session of session 5 (a midterm review), the Complement app (external tool), the capstone project guidelines (group project, not the exam).</li>
  <li>No past exam was available, so the quiz mixes the formats seen in the extra exercises: MCQs, calculations and journal entries.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  mocksNote:NOTE('<b>Where the format comes from.</b> The course platform has no past end-term paper, syllabus or exam instructions. The course only gives the scope (all eight topics), "MCQs + exercises" and 2 hours (announcement of 28 Nov 2025), and the Q&amp;A session 5, meant to show "how the midterm and final exam could look like". The points, the number of questions and the calculator rule are <b>chosen for this site</b>: details in the <a href="#afa">Overview</a>.'),
  modules:[
    {use:'journal',tab:'drills',label:'Journal drills',data:{drills:DRILLS,extraAccounts:EXTRA_ACCOUNTS,
      kinds:{'Unearned revenue':'L','Unearned service revenue':'L','Sales revenue':'R','Rent revenue':'R','Prepaid insurance':'A','Prepaid rent':'A',
        'Impairment of PPE':'XA','Allowance for doubtful accounts':'XA','Allowance for inventory losses':'XA','Loss on inventory write-down':'E',
        'Income tax payable':'L','Dividend payable':'L','Salary payable':'L','Bank loan':'L','Net income of the year':'SE','Net income of 2023':'SE'}}},
    {use:'taccounts',tab:'taccounts',label:'T-accounts',data:{accounts:TA,missing:MISS,topic:'t1',eyebrow:'Topic 1 · Practice',blurb:'Topic 1: one account per exercise, new numbers every time'}},
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'The 17 calculations of the course with new numbers every time (now with a score and mastery), plus debit or credit, VAT on a sale and the cash flow sections. The solution follows the course method.'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'Depreciation schedule with sliders and three decision trees',intro:'Compare straight-line and double declining-balance depreciation with sliders; train on three decision trees: debit or credit, which cash flow section, capitalise or expense.'}}],
  // progress saved by the old single-subject site (same browser, same ids)
  legacy:{key:'afa-revision-v1',convert:old=>({quiz:old.quiz||{},cards:old.cards||{},mod:{drills:{items:old.drills||{}},taccounts:old.ta||{done:0,ok:0}}})}
});
})();
