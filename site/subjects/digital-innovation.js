/* Digital Innovation . Final exam: all sessions.
   Built from the course material in sources/digital-innovation/: Session 1–9 slides (spring 2025 edition),
   the Fall 2026 syllabus, the poster guidelines, the "First block" practice MCQs (no answer key), the group
   exercises (Digital Business Models, Carbon Creek Gardens) and the readings (Unseen Cyberazzi, TIME/OpenAI, Reuters/Amazon).
   Topics = Sessions 1–9 (s1…s9). Ids: q… quiz, c… cards, x-s<n>-… exercises. Never renumber ids. */
(function(){
const {T,F,EX,TRAP,NOTE}=Rev.h;

const PRINCIPLES=[
['The Golden Rule','Do unto others as you would have them do unto you.'],
['The Categorical Imperative','If an action is not right for everyone to take, it is not right for anyone. “If everyone did this, could the organization, or society, survive?”'],
['The Slippery Slope Rule','If an action cannot be taken repeatedly, it is not right to take at all: a small acceptable change now may bring unacceptable changes in the long run.'],
['The Utilitarian Principle','Take the action that achieves the higher or greater value for the greatest number of people (assumes you can rank values and know the consequences).'],
['The Risk Aversion Principle','Take the action that produces the least harm or the least potential cost (e.g. a nuclear plant in an urban area: very low probability, extremely high failure cost).'],
['The No-free Lunch Rule','Assume that virtually everything is owned by someone else unless declared otherwise; if someone’s creation is useful to you, assume the creator wants compensation.']];

/* ---------- topic sheets ---------- */
const SHEETS={};
SHEETS.s1=`
<div class="eyebrow">Session 1</div><h2>Introduction: business processes and innovating with digital technologies</h2>
<p class="lede">Goal: model a business process with BPMN symbols and swimlanes, say why processes are standardized, list the ways digital technologies improve processes, and place an innovation in the innovation matrix.</p>

<h3>1. Course learning outcomes (syllabus)</h3>
<ol><li>Make a case for digital initiatives with sustainability-related issues in mind.</li><li>Examine the design and use of digital technologies from an ethical point of view.</li><li>Assess the complexities and consequences of transformations through implementing digital innovations.</li><li>Identify the most common cybersecurity issues in digital environments.</li><li>Explain some of the broader social, economic, and legal implications of digital innovations.</li></ol>

<h3>2. Business process and BPMN</h3>
<p>A <b>business process</b> is “a <b>sequence of activities &amp; decisions</b> for accomplishing a <b>function</b>”. Processes are drawn with BPMN (Business Process Model and Notation), with <b>swimlanes to organize by roles and actors</b>.</p>
${T(['Symbol','Meaning','Drive-thru example'],[
['Light circle','Start','Process starts here'],['Bold circle','Stop','Process ends here'],
['Rounded rectangle','Activity','Greeting'],['Rounded rectangle with “+”','Activity documented elsewhere (sub-process)','Enter Order'],
['Diamond','Decision','Do All Myself? (yes / no)'],['Solid arrow','Process flow','Greeting → Enter Order'],
['Dotted arrow with a small circle','Data flow','Order, Time, Amount'],['Cylinder','Repository (data store)','Order DB'],['Bracket with dotted line','Annotation','“Process starts here”']])}
${EX('Drive-thru process (group exercise of Session 1)','worked case',`<p>Lanes: <b>Cashier</b> (Greeting → Enter Order → Read Back Order → Customer Payment), <b>Order Tracker</b> (Record Order and Start Timer → Order DB → Record Payment → Stop Timer), <b>Presenter</b> (decision “Do All Myself?”; yes → Assemble Order → Hand Food to Customer), <b>Food Runner</b> (no → Assemble Order). The order data (order, time, amount) flows from the cashier to the order tracker and is stored in the Order DB.</p>`)}

<h3>3. Why standardize business processes?</h3>
<ul><li>Enforce policies</li><li>Produce consistent results</li><li>Reduce risk</li></ul>
<h4>Some ideas to achieve process improvement (slide)</h4>
<ul><li>Organize around outcomes, not tasks.</li><li>Have those who use the outcomes of the process perform the process.</li><li>Merge information processing work into the real work that produces the information.</li><li>Treat geographically dispersed resources as though they were centralized.</li><li>Link parallel activities instead of integrating their results.</li><li>Capture information once, at the source.</li><li>Put the decision points where the work is performed and build controls into the process.</li></ul>
<p>Modelling tools named: diagrams.net (recommended, no sign-up), Creately, Lucidchart, MS Visio.</p>

<h3>4. How digital technologies improve processes</h3>
${T(['Way','Pizza shop','Health clinic'],[
['<b>Improve an activity</b>','Driving activity improved with GPS','Prescription writing improved with a medication checker'],
['<b>Improve data flow among activities</b>','Order data displayed on GPS in the delivery process','Prescription data recorded electronically and shared with the pharmacy'],
['<b>Improve control of activities</b>','Better control of order details','Appointment no-shows reduced'],
['<b>Use automation</b>','Scheduled tweets in the Tweet Promotion process','Phone answering system in the Office Reception process'],
['<b>Improve procedures</b>','Payment procedure improved, payment process performs better','Office procedures rewritten to improve office processes']])}

<h3>5. Innovation vs invention, and the innovation matrix</h3>
<p>The slide contrasts the iPhone (innovation) with an early telephone (invention): an <b>invention</b> creates something new; an <b>innovation</b> turns ideas into value on the market.</p>
${NOTE('<b>Outside the slides:</b> the slide only shows the two pictures; the one-line distinction above is the usual reading, not a slide definition.')}
${T(['','Low technology newness','High technology newness'],[
['<b>High impact on the market</b>','<b>Sustaining</b>: a significant improvement on a product that aims to sustain the position in an existing market','<b>Disruptive</b>: technology or new business model that disrupts the existing market'],
['<b>Low impact on the market</b>','<b>Incremental</b>: gradual, continuous improvements on existing products and services','<b>Radical</b>: technological breakthrough that transforms industries, often creates a new market']])}
${TRAP('Disruptive is defined by the <b>market impact</b> (it disrupts an existing market, possibly through a new business model); radical by the <b>technology</b> (a breakthrough that often creates a new market). Read both axes.')}
`;

SHEETS.s2=`
<div class="eyebrow">Session 2</div><h2>Basic IT-related concepts: systems, hardware, software, ERP, sustainability</h2>
<p class="lede">Goal: explain what an information system is, distinguish hardware, operating systems and application software, know open-source and ERP characteristics, and link digital technologies to the three dimensions of sustainability.</p>

<h3>1. Systems thinking and information systems</h3>
<p>A bicycle is a system (parts that work together), a business (a bakery) is a system, and an <b>information system</b> is “the whole (like the frog in the video) that emerges where <b>people and IT interact</b> for doing some work”.</p>

<h3>2. Hardware and software</h3>
<ul><li><b>Hardware</b>: “the physical portion of a computer system, including the electrical/electronic components (e.g. devices and circuits), electromechanical components (e.g. a disk drive)” (Oxford).</li>
<li><b>Software</b>: “the programs used by a computer for doing particular jobs” (Oxford); “the instructions that control what a computer does” (Cambridge).</li>
<li>Two main types of software: <b>operating systems (OS)</b> and <b>application software (apps)</b>.</li></ul>
${T(['Operating system: three functions','Application software'],[[`1. Managing the hardware resources of the computer<br>2. Providing the user-interface components<br>3. Providing a platform for software developers to write applications`,'Set to accomplish a specific goal (word processing, spreadsheet calculations, web browsing); works on mobile or desktop; categories: productivity, multimedia, home, communication and collaboration']])}
<h4>Vocabulary from the practice questions</h4>
${T(['Term','Meaning'],[
['Utility software','Programs that allow you to fix or modify your computer in some way'],
['Collaborative systems','Let users brainstorm ideas together without physical, face-to-face meetings'],
['Word processing','Software where users create and edit documents'],
['Virtualization','Using software to simulate a computer or some other device'],
['Private cloud','A service provider sections off web server space for a specific organization'],
['Software as a service (SaaS)','Software rented rather than purchased, accessible through the Internet'],
['Boot program','Loads the operating system into the computer'],
['Killer app','An application so essential that many people buy a device just to run it'],
['64-bit','Size of data moved within the computer, supported by Windows 10 and Mac OS'],
['Linux','Operating system that powers a large percentage of the world’s web servers'],
['Software licence','Software you purchase is not owned by you: you bought the licence to use it']])}
${TRAP('Android, Windows, Mac OS and Linux are <b>operating systems</b>, not applications. Java, C++ and Python are programming languages; “MIS” is not.')}

<h3>3. Open-source software</h3>
${T(['Advantages','Disadvantages'],[['Available for free','Technical support is not available like with traditional software products'],['Source code is available: it can be examined and reviewed before it is installed','Software companies provide updates and features as required by the users'],['A large community of programmers leads to quick bug-fixing and feature additions','The user interface may be more challenging to use']])}
<p>With open-source software you can view the source code, modify it and use the software freely (“all of the choices”). Examples in Session 3: Red Hat, GitHub.</p>
${NOTE('<b>Check against the slide:</b> the slide defines open-source software as software “where the source code is <b>not</b> available to others to use or copy”. Its own table (“the software source-code is available”) and the practice questions say the opposite: open source makes the source code <b>available</b> for anyone to copy and use.')}

<h3>4. ERP (Enterprise Resource Planning)</h3>
<ul><li>Two key characteristics: a <b>single source of truth</b> (consolidated database) and <b>integrated processes</b>.</li>
<li>ERP applications integrate the processes of: <b>SCM, manufacturing, CRM, human resources, accounting</b>.</li>
<li>ERPs manage data and business processes across a company, integrate functional areas and operate on a centralized database (“all of the choices”).</li></ul>

<h3>5. Digital technologies and sustainability</h3>
<p>Three dimensions: <b>people</b> (socially / ethically sustainable), <b>planet</b> (environmentally sustainable), <b>profit</b> (financially sustainable); sustainability sits where society, environment and economics overlap (social-economic: business ethics, fair trade, worker benefits; social-environmental: conservation, environmental justice, global stewardship; environmental-economic: energy efficiency, renewable fuels, subsidies, green technology).</p>
${T(['Tech lever (BCG)','Use case','Example'],[
['Digitized operations','More sustainable operations and processes','Textile-dyeing technology that reduces water, energy and chemicals'],
['Digital products and services','New distribution channels that expand reach at affordable cost','Parcel delivery reimagined with fewer emissions'],
['Cloud, IoT and blockchain','Track environmental/societal impacts across the value chain','Blockchain “value chain transparency” from producer to retailer'],
['AI and advanced analytics','Insights on the impacts of a product or service','IoT- and AI-based real-time energy efficiency optimization'],
['Data sharing and ecosystems','Collaboration across industries on joint solutions','Insurance + telecom software delivering microinsurance via phone subscriptions']])}
`;

SHEETS.s3=`
<div class="eyebrow">Session 3</div><h2>ERP implementation, digital ethics and digital business models</h2>
<p class="lede">Goal: name the challenges of implementing an ERP, apply the six ethical principles and the five-step ethical analysis, identify a digital business model type and analyze it with the four VTDF components.</p>

<h3>1. Challenges of implementing ERPs</h3>
<div class="grid2"><div class="panel"><h4>Decision-making challenges</h4><ul><li>ERP vendor selection</li><li>Gap analysis: decide on a limited number of “like to dos” and what to do with gaps</li><li>Configuration</li><li>Data structure and format issues</li><li>How to move from legacy systems to the ERP system?</li></ul></div>
<div class="panel"><h4>People challenges</h4><ul><li><b>Management</b>: moves on prematurely, oversells, fails to anticipate cultural resistance</li><li><b>Team</b>: collaboration breaks down</li><li><b>Individual users</b>: feel pain and get no gain</li></ul></div></div>

<h3>2. Sidebar Digital &amp; Ethical: the Moral Machine</h3>
<p>The Moral Machine (moralmachine.net, linked on the course platform) puts you in front of unavoidable accidents of a self-driving car and asks whom it should spare; the slides link the Nature article on its results.</p>
<h4>Candidate ethical principles (Laudon &amp; Laudon, ch. 4)</h4>
${T(['Principle','Rule'],PRINCIPLES.map(p=>['<b>'+p[0]+'</b>',p[1]]))}
<h4>Ethical analysis: a five-step process</h4>
<ol><li><b>Facts</b>: identify and clearly describe the facts</li><li><b>Dilemma</b>: identify the conflict/dilemma and the higher-order values involved</li><li><b>Stakeholders</b>: identify the stakeholders</li><li><b>Options</b>: identify the options that you can reasonably take</li><li><b>Consequences</b>: identify the potential consequences of your options</li></ol>
${TRAP('Utilitarian = greatest value for the greatest number; risk aversion = least harm or least potential cost. Categorical imperative = “what if everyone did it?”; slippery slope = “what if it is repeated?”.')}

<h3>3. Digital business models (FourWeekMBA map)</h3>
${T(['Type','Examples on the slide'],[['E-commerce / marketplace','Amazon, Alibaba, Zappos, Zalando'],['Free – freemium','Spotify, Mailchimp, Dropbox'],['Peer-to-peer, two-sided marketplace','HyreCar, Uber, Airbnb, LinkedIn'],['Ad-supported','Google, Facebook, Twitter, Quora'],['Subscription-based','Netflix, Salesforce, Wolfram'],['Hidden revenue generation','Google, Facebook'],['Open source model','Red Hat, GitHub']])}
<h4>How to analyze a digital business model: four components (VTDF)</h4>
${T(['Component','Guiding question (group exercise)'],[['<b>Value</b> model (value proposition)','What differentiates the brand? What innovations, services, products or features attract customers?'],['<b>Tech</b> model','How does the company leverage technology to stay innovative and competitive?'],['<b>Distribution</b> model','How does it communicate and sell its products/services to the right audience?'],['<b>Financial</b> model','How does the company make money?']])}
${EX('Cases shown in class','worked examples',`<ul>
<li><b>Spotify</b> (freemium, 2017): ad-supported service free with limited on-demand access, €416 million = 10.17% of revenues; premium subscriptions €3.6 billion = 89.83%. Revenues €1.9 bn (2015) → €4 bn (2017); 71 million premium subscribers (2017); average revenue per user fell 7.06 → 6 → 5.24 € (2015–2017), “critical to Spotify future financial success”.</li>
<li><b>Alphabet/Google</b> (2023): Google Search &amp; other $175B (57%), YouTube ads $31.31B (10.20%), Google Network $31.51B (10.26%), Google Cloud $33B (10.75%), Google other $34.69B (11.30%), Other Bets $1.53B (0.50%). Advertising was over 77% of turnover.</li>
<li><b>Facebook (Meta)</b>: an attention merchant, hidden revenue generation: users get the service free, the platform owns the data, repackages it and sells targeted ads; 2021 revenues $117.9B, of which $114.9B advertising (97.4%), $2.2B Reality Labs.</li>
<li><b>Amazon</b>: e-commerce brings most revenue (total $469.8B in 2021) but <b>AWS</b> brings 74% of the $24.8B operating profit.</li>
<li><b>Netflix</b>: subscription (basic, standard, premium); $33.7B revenue in 2023, streaming 99.75%; over 260 million paying members.</li>
<li><b>Dynamic pricing</b>: multiple price points based on customer segments, peak times, time-based consumption, instead of a single static price.</li>
<li><b>HyreCar</b>: peer-to-peer marketplace matching car owners (amortize a car parked most of the time; 15% fee) with drivers who need a car to drive for Uber/Lyft (10% fee).</li>
<li><b>Uber</b>: two-sided marketplace; drivers earn flexible income, riders avoid car ownership; the platform takes a fee from both sides.</li></ul>`)}
${TRAP('Google and Facebook appear under both “ad-supported” and “hidden revenue generation”: the user does not pay, advertisers pay for access to the users’ attention and data.')}
`;

SHEETS.s4=`
<div class="eyebrow">Session 4</div><h2>The Fourth Industrial Revolution, Web 3.0 and digital initiatives</h2>
<p class="lede">Goal: describe the four industrial revolutions and Industry 4.0, explain why the digital revolution is happening now, discuss privacy issues of process improvement, and build a business case for a digital initiative.</p>

<h3>1. Why a digital revolution now?</h3>
<ul><li><b>Data abundance</b> → data technologies</li><li><b>Unprecedented computing power</b> → cloud computing</li><li><b>Ubiquitous connectivity</b></li><li><b>Advanced algorithms</b> → AI</li></ul>

<h3>2. The four industrial revolutions</h3>
${T(['Revolution','Slides','Practice questions'],[['1.0 (1760–1840)','Mechanization, steam and water power; steam engineering','Britain in the late 1700s'],['2.0 (1830s–1915)','Mass production and electricity; assembly line','Initiated by electricity'],['3.0 (1969–2010s)','Electronic and IT systems, automation; computing/Internet, nuclear energy','Triggered by the transistor'],['4.0','Cyber-physical systems','Qualities: velocity, scope, and impact']])}
<p><b>Industry 4.0</b> rests on: (1) digitization/integration of value chains, (2) digitization of product and service offerings, (3) digital business models and customer access. Technologies around it: mobile devices, IoT platforms, location detection, advanced human-machine interfaces, authentication and fraud detection, 3D printing, smart sensors, big data analytics, multilevel customer interaction and profiling, augmented reality, cloud computing.</p>
${NOTE('<b>Answers without an official key:</b> the “Practice questions” column comes from the First block practice MCQs, which have no answer key. These are the answers consistent with the slides and the LinkedIn Learning 4IR course they prepare.')}

<h3>3. Technology hands-on: smart and sustainable cities (PwC, “4IR for the Earth”)</h3>
<p>Game-changers in 4IR for emerging cities: <b>adaptive</b> cities (making the most of multifunctional space), <b>seamless</b> cities (connecting people and places), <b>empowered</b> cities (optimising urban energy systems), <b>living</b> cities (advancing circular resource management), <b>regenerative</b> cities (intelligently responding to catastrophic risk). Enablers: IoT, AI, blockchain, drones, robots, 3D printers, advanced materials, sensor platforms, autonomous vehicles, VR/AR. Questions raised: how each technology helps sustainability, other possibilities, and ethics/privacy concerns of smart cities.</p>

<h3>4. Web 3.0, metaverse and blockchain (LinkedIn preparation, practice questions)</h3>
<ul><li>First wave of the Internet (Web 1.0): websites <b>broadcasting static information</b>. Web 2.0: companies created tools that enabled <b>more participation</b> online. Web3: users will have <b>more control and ownership over their data</b>.</li>
<li>Distributed ledger technology brings to transactions: <b>not needing to trust other human actors</b>. A transaction’s blocks are stored on <b>each miner’s computer</b> (no central server).</li>
<li>A cryptocurrency’s <b>white paper</b> describes its purpose and technology.</li>
<li>Augmented reality overlays the physical world with digital information; <b>virtual reality creates a new environment, augmented reality merges the real and virtual worlds</b>. VR training gives realistic situations in a low-risk environment.</li>
<li><b>Interoperability</b> in the metaverse: products can move easily between platforms and environments.</li>
<li>Major downside of increased connectedness: dependency on connections and vulnerability to threats.</li></ul>

<h3>5. Sidebar Digital &amp; Ethical: process improvement or privacy problem?</h3>
<p>Connected car insurance (“YouDrive”: a box analyses your driving; a monthly score can only lower the premium) and vehicle tracking systems improve fleet routing, theft prevention and pricing (20–30% discounts for cautious drivers) but raise privacy questions: a parent secretly installing it on a 16-year-old’s car, the insurer selling the data to a car maker, courts using it as evidence. Do all process improvements reduce privacy?</p>
${EX('OpenAI used Kenyan workers on less than $2 per hour (TIME, reading)','reading',`<p>To make ChatGPT less toxic, OpenAI built an AI safety filter trained on labelled examples of violence, hate speech and sexual abuse. From November 2021 it sent tens of thousands of text snippets to <b>Sama</b>, a San Francisco firm employing workers in Kenya, Uganda and India that markets itself as “ethical AI”. Kenyan data labellers earned a take-home wage of about $1.32 to $2 per hour. The Partnership on AI notes the precarious conditions of these “data enrichment professionals”, partly hidden to celebrate AI’s efficiency: “out of sight is also out of mind”.</p>
<p>Use it with the five-step ethical analysis: facts, dilemma (safe AI for users vs dignity and pay of hidden workers), stakeholders (labellers, Sama, OpenAI, users, investors), options, consequences.</p>`)}

<h3>6. Digital initiatives</h3>
<ul><li><b>Redesigned with digital</b> (online banking) vs <b>born digital</b> (cryptocurrency banking).</li></ul>
<h4>How to build a better business case for digital initiatives</h4>
<ol><li>Don’t build your business case as a series of technology investments.</li><li>Link operational changes to tangible business benefits.</li><li>Run small pilots, evaluate results, and refine your approach.</li><li>Work out the costs, the benefits, and the timing of return.</li></ol>
`;

SHEETS.s5=`
<div class="eyebrow">Session 5</div><h2>Data science and data technologies</h2>
<p class="lede">Goal: relate big data and AI, define data governance and GDPR, walk through the data value chain, link data to the SDGs and assess the ethics of data brokers.</p>

<h3>1. Big data in the age of AI (in-class questions, answers shown on the slides)</h3>
${T(['Question','Answer'],[['Relationship between big data and AI?','<b>Big data makes AI possible</b>'],['Data visualization is important no matter the decision maker is human or algorithmic machine.','<b>FALSE</b>'],['Which one is NOT true about GDPR?','<b>“Facebook loves GDPR!”</b> (true: it requires explanation and consent when collecting data, protects against collecting certain private information, it is the “accept all cookies” thing)'],['Data governance is about…','<b>Handling data properly</b>']])}

<h3>2. The data value chain</h3>
<p><b>Structure</b> (data platform): data sources (databases, legacy systems, SaaS apps, applications, web services, files) → data loaders → data lake (raw data, trusted data, service data; catalog, discovery, lineage) → data sharing, data visualization, ML development → add-ons (insights stores, AI store).</p>
${T(['Stage (GSMA)','Activities','Players'],[['Generation','1. Acquisition · 2. Consent','Capturers (human inputs, devices, system generators)'],['Collection','3. Transmission · 4. Validation','Collectors (communication services, transport)'],['Analytics','5. Processing · 6. Analysis','Developers/enrichers (software, analytics services)'],['Exchange','7. Packaging · 8. Selling','Providers (trading in, trading on, non-traded)']])}
<h4>From opinion to action (Google re:Work)</h4>
${T(['Step','Example'],[['Opinion','People spend too much time on their expense reports'],['Data','Employees spent more than 100 000 hours on expense reporting last year'],['Metrics','Average user spends 10 hours/year in the system'],['Analysis','“Heavy” users spend less than 10 minutes/session: efficiency rises with usage'],['Insight','A minor user-interface change would reduce application time for heavy users by 25%'],['Action','Interface change implemented']])}

<h3>3. Data technologies and sustainability (UN Global Pulse: big data and the SDGs)</h3>
${T(['SDG','How data helps (examples)'],[['1 No poverty','Mobile phone spending patterns as proxy indicators of income'],['5 Gender equality','Financial transactions reveal spending patterns and impacts of shocks on men and women'],['8 Decent work and growth','Global postal traffic patterns indicate growth, remittances, trade, GDP'],['13 Climate action','Satellite imagery, crowd-sourced witness accounts and open data track deforestation'],['16 Peace, justice','Sentiment analysis of social media reveals opinion on governance and services'],['3 Health · 6 Water · 7 Energy · 11 Cities','Mobile movement data for epidemics; sensors on water pumps; smart metering; satellite sensing of encroachment']])}
<p><b>Blockchain demo</b> and the <b>environmental impact of cryptocurrencies</b>: Bitcoin’s annualized electricity consumption (estimate above 100 TWh in 2021, maximum above 400 TWh) is compared with countries: UK 300, Spain 242, Sweden 131, Argentina 125, Israel 56 TWh.</p>

<h3>4. Sidebar Digital &amp; Ethical: Unseen Cyberazzi (data brokers)</h3>
<p>A <b>data broker</b> (data aggregator) acquires consumer data from public records, retailers, cookie vendors, social media trackers and other sources, and sells business intelligence to companies and governments (Datalogix, Acxiom: 23 000 servers, 50 trillion transactions on 500 million consumers, over 15 000 data points on some people). Viewing your data is torturous; the processing techniques and their accuracy are unknown: an error about a pizza coupon does not matter, an error about being a terrorist does.</p>
<ul><li>Litmus test of the categorical imperative: if you are willing to publish your behaviour on Facebook, it conforms. The inverse (“not willing to publish ⇒ unethical”) does not follow.</li>
<li>Targeting junk-food offers at people prone to overeating; marketing college materials to one inferred ethnic group (like ethnic profiling?); referring a grandmother who plays online hearts to a gambling vendor: assess with the categorical imperative and utilitarianism.</li></ul>
${EX('Carbon Creek Gardens (group exercise)','case',`<p>Mary Keeling has run her garden nursery for 16 years and has grown so large she lost track of her customers: Tootsie Swan, one of her best customers, stopped coming after a bad experience over a year ago, and Mary did not know. “I’ve got all sorts of data in my sales database… how do I get it out?”</p>
<p>Questions: (1) which part of the data value chain is most problematic? (2) is a weekly PDF report of the top buyers, compared by hand with last year’s top 50, a good solution? (3) suggest a specific digital/data technology and justify it.</p>
<p>Course-based reading: the data is <b>generated and collected</b> (the sales database exists); the weak part is <b>analytics</b> (processing/analysis), so no insight reaches Mary. Static reports compared by hand do not scale and only show who is missing after the fact.</p>`)}
${NOTE('<b>No official solution:</b> the Carbon Creek exercise has no answer key on the course platform; the reading above applies the data value chain of the slides.')}
`;

SHEETS.s6=`
<div class="eyebrow">Session 6</div><h2>Cloud computing (and AI ethics)</h2>
<p class="lede">Goal: define cloud computing, distinguish public, private and hybrid clouds and SaaS / PaaS / IaaS, weigh the cloud’s environmental effects, and analyze AI bias with the ethical principles.</p>

<h3>1. Definition and types</h3>
<p><b>Cloud computing</b>: “the use of services, computer programs, etc. that are on the internet rather than ones that you buy and put on your computer” (Cambridge).</p>
<ul><li><b>Public cloud</b>, <b>private cloud</b> (a provider sections off web server space for a specific organization), <b>hybrid cloud</b> (both, linked).</li></ul>
${T(['Service','What it is','Example on the slide'],[['<b>SaaS</b> Software as a Service','Applications delivered over the internet through a browser','Microsoft Office 365, Google Drive, Dropbox'],['<b>PaaS</b> Platform as a Service','Rent predefined platforms for software development','Microsoft Azure'],['<b>IaaS</b> Infrastructure as a Service','Rent storage and computing capacity on the provider’s servers','Amazon Web Services (AWS)']])}
<p>“Data in the cloud”: a video in which an Amazon Web Services presenter shows a device used to move data to the cloud.</p>
${T(['Advantages (practice questions)','Disadvantages'],[['Installation and upgrades handled by the cloud supplier','You rely on a third party to provide the services'],['Services leased for a limited time, as needed','Your information is stored on someone else’s computer'],['Access from any computer connected to the Internet','']])}

<h3>2. Cloud computing for sustainability (Deloitte)</h3>
<ol><li><b>One.</b> Cloud is the greener option.</li><li><b>Two.</b> Smarter use of energy.</li><li><b>Three.</b> Trouble is the boom in cloud computing means more energy is needed for data centres.</li><li><b>Four.</b> The good news is major tech players have ambitious plans.</li></ol>
<p>Cloud-based solutions also help manage sustainability issues: <b>Microsoft Cloud for Sustainability</b>.</p>

<h3>3. Sidebar Digital &amp; Ethical: Amazon scraps secret AI recruiting tool (Reuters)</h3>
<ul><li>From 2014 an Amazon team built AI to score applicants from one to five stars (“give you 100 resumes, it will spit out the top five”).</li>
<li>Models were trained on resumes submitted over a <b>10-year period</b>, mostly from men: the system taught itself that male candidates were preferable. It penalized resumes with the word “women’s” and downgraded graduates of two all-women’s colleges; it favoured verbs like “executed” and “captured”.</li>
<li>Editing the programs to be neutral to these terms gave no guarantee against other discrimination; unqualified candidates were also recommended almost at random. The team was disbanded; Amazon says recruiters never relied solely on the rankings.</li>
<li>Lesson: limitations of machine learning; fairness, interpretability and explainability of algorithms; candidates may never know AI was used.</li></ul>
<p>Session 6 also included “A collaboration with generative AI” (in-class activity) and the six candidate ethical principles.</p>
`;

SHEETS.s7=`
<div class="eyebrow">Session 7</div><h2>Digital transformation</h2>
<p class="lede">Goal: distinguish digital innovation from digital transformation, explain why most transformations fail, apply the five lessons and the three-stage roadmap.</p>

<h3>1. Digital innovation vs digital transformation (Forbes)</h3>
<ul><li>“Innovation is the start of something great. What happens after is transformation, the implementation process following that first spark of innovation.”</li>
<li>The relationship is <b>mutually causal</b>: transformation can lead to innovation, and innovation to transformation; this is often overlooked because they are thought to mean the same thing.</li>
<li>Goals of a digital transformation can include broadening the company’s reach, improving operational efficiency, transmuting the company’s culture and image: <b>all the above</b>.</li></ul>

<h3>2. Why transformations fail</h3>
<p><b>70% of all digital transformation initiatives do not reach their goals.</b> Digital technologies offer efficiency gains and customer intimacy, “but if people lack the right mindset to change and the current organizational practices are flawed, digital transformation will simply <b>magnify those flaws</b>.”</p>
<h4>Digital transformation is not (just) about technology: five lessons</h4>
<ol><li>Figure out your business strategy before you invest in anything.</li><li>Leverage insiders.</li><li>Design customer experience from the outside in.</li><li>Recognize employees’ fear of being replaced.</li><li>Bring Silicon Valley start-up culture inside.</li></ol>

<h3>3. A roadmap for a digital transformation (McKinsey)</h3>
${T(['Stage','Steps'],[['<b>1. Defining value</b>','1 Secure senior management commitment · 2 Set clear, ambitious targets · 3 Secure investment'],['<b>2. Launch and acceleration</b>','4 Start with lighthouse projects · 5 Appoint a high-caliber launch team · 6 Organize to promote new, agile ways of working · 7 Nurture a digital culture'],['<b>3. Scaling up</b>','8 Sequence initiative for quick returns · 9 Build capabilities · 10 Adopt a new operating model']])}

<h3>4. Group case analysis: UCB, “Data is the New Drug”</h3>
<p>Questions discussed: which strategic conditions pushed UCB to the next stage with data analytics; what achievements and what failures De Prins should bring to the executive meeting in Shanghai (March 2016), using the tips of the LinkedIn course “Digital Transformation Tips”.</p>
${NOTE('<b>Not available:</b> the UCB case (Harvard Coursepack) and the LinkedIn course are not on the course platform, so the case facts are not covered here.')}
`;

SHEETS.s8=`
<div class="eyebrow">Session 8</div><h2>Cybersecurity</h2>
<p class="lede">Goal: show that cybersecurity is not all about technology, using the McCumber Cube.</p>
<h3>1. Is cybersecurity all about technology? The McCumber Cube</h3>
${T(['Dimension','Elements'],[['<b>Desired goals</b>','Confidentiality · Integrity · Availability'],['<b>Information states</b>','Transmission · Storage · Processing'],['<b>Safeguards</b>','Technology · Policy and Practices · Human Factors']])}
<p>Technology is only one of three safeguards: policies and practices and human factors protect information as much as tools do. Every combination (goal × state × safeguard) is a cell of the cube to secure.</p>
<h3>2. IT Management Simulation: Cyber Attack!</h3>
<p>Session 8 is built around the Harvard simulation “Cyber Attack!”, then a debrief and lecture. Preparation: Chapter 8 of <i>Information Systems for Business and Beyond</i> (Quiz 5).</p>
${NOTE('<b>Limited material:</b> the Session 8 slides only contain the McCumber Cube; the simulation and Chapter 8 are not on the course platform. This sheet covers only what the slides show. For the final, also review the GDPR courses assigned after Session 8 (Learning GDPR, GDPR Compliance) if you did them.')}
`;

SHEETS.s9=`
<div class="eyebrow">Session 9</div><h2>Legal, social and economic issues in the digital age</h2>
<p class="lede">Goal: relate digital ethics, regulation and governance, and discuss workforce diversity in tech and digital inclusiveness.</p>

<h3>1. From digital ethics to digital regulations to for-privacy digital technologies/governance</h3>
<ul><li><b>Digital ethics (DE)</b> shapes digital governance and digital regulation <b>through moral evaluation</b>.</li>
<li><b>Digital regulation (DR)</b> shapes digital governance <b>through legal compliance</b>.</li>
<li><b>Digital governance (DG)</b> sits where both meet. The cycle: shaping the future → debating the future → projecting the future.</li></ul>
<p>Opening question: Facebook, Google, Amazon, Apple: “Do you trust them?”</p>

<h3>2. Group case analysis: The Experience of Wendy Chan</h3>
<p>Challenges faced by women leaders in STEM: which gender-related challenges Wendy Chan faced as a data science team lead in Europa, how she coped, and what must change in society so more women enter and climb the ranks in STEM.</p>
${NOTE('<b>Not available:</b> the Harvard case itself is not on the course platform; only the questions are in the slides.')}

<h3>3. Workforce diversity (in tech)</h3>
<ul><li>Diversity and inclusion is one of the biggest challenges facing the tech industry today.</li>
<li>When businesses consist of people from the same backgrounds, they often leave diverse ideas and perspectives behind.</li>
<li>The two biggest barriers for women in tech: a <b>lack of mentors</b> and a <b>lack of female role models</b>.</li></ul>
<p>Most demanded digital/IT jobs (2021 list): AI/machine learning engineer, data analyst, information security analyst, IT manager, web developer, computer network architect, Java / PHP / Python developer, network and systems administrator, web designer (UI/UX).</p>

<h3>4. Digital innovation and inclusiveness (OECD)</h3>
<ul><li>Innovation activities are unevenly distributed: <b>innovation hot spots</b> in dynamic urban areas (Boston, London, Tel Aviv).</li>
<li>Despite the availability of digital tools, disparities persist: <b>“dual economy”</b>, a few highly innovative firms and a long tail of non-innovative ones.</li>
<li>High inequality hurts wellbeing and economic performance; under-representation of social groups (discrimination, stereotypes) means human resources are not used to their full potential.</li>
<li><b>Winner-take-all dynamics</b>: a small advantage lets firms seize a large part of the market, widening the gap between “the best” and “the rest”.</li></ul>

<h3>5. The poster project (Session 10, 25%)</h3>
<p>A hypothetical company using digital technologies in an industry set by the teacher. The poster shows: name and logo; value proposition, revenue model, use of digital technologies and distribution; <b>two</b> ways it helps or hurts environmental sustainability; <b>two</b> ethical matters (using the Session 3 principles and steps); a comparison with <b>two</b> real companies of the same sector on value proposition and revenue, use of digital technologies, and their role for environmental or social sustainability. Every member must present; generative AI is allowed for ideation only if the group can defend the ideas.</p>
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
<h3>Frameworks</h3>
${T(['Framework','Content'],[
['Business process','A sequence of activities &amp; decisions for accomplishing a function; BPMN with swimlanes by roles/actors'],
['Why standardize processes','Enforce policies · produce consistent results · reduce risk'],
['Digital process improvement','Improve an activity · improve data flow · improve control · use automation · improve procedures'],
['Innovation matrix','Incremental (low/low) · sustaining (low tech, high market) · radical (high tech, low market) · disruptive (high/high)'],
['OS functions','Manage hardware · provide the user interface · platform for developers'],
['ERP','Single source of truth + integrated processes; SCM, manufacturing, CRM, HR, accounting'],
['ERP challenges','Decisions: vendor, gap analysis, configuration, data format, legacy migration · People: management (moves on prematurely, oversells, ignores resistance), team, users (pain, no gain)'],
['Sustainability','People (social/ethical) · planet (environmental) · profit (financial)'],
['Ethical analysis (5 steps)','Facts → dilemma → stakeholders → options → consequences'],
['Ethical principles (6)','Golden rule · categorical imperative · slippery slope · utilitarian · risk aversion · no-free lunch'],
['Digital business model (VTDF)','Value · Tech · Distribution · Financial models'],
['Why a digital revolution now','Data abundance · computing power · ubiquitous connectivity · advanced algorithms'],
['Industrial revolutions','1.0 steam/water · 2.0 electricity, mass production · 3.0 electronics/IT, automation · 4.0 cyber-physical systems'],
['Business case for digital','Not a series of tech investments · link operational changes to tangible benefits · small pilots · costs, benefits, timing of return'],
['Data value chain (GSMA)','Generation (acquisition, consent) → collection (transmission, validation) → analytics (processing, analysis) → exchange (packaging, selling)'],
['Opinion to action','Opinion → data → metrics → analysis → insight → action'],
['Cloud','Public · private · hybrid; SaaS (Office 365, Drive, Dropbox) · PaaS (Azure) · IaaS (AWS)'],
['Cloud and sustainability','Greener option · smarter energy use · but data-centre energy boom · tech players’ ambitious plans'],
['Transformation lessons','Strategy first · leverage insiders · customer experience outside-in · employees’ fear · start-up culture inside'],
['McKinsey roadmap','Defining value (1–3) → launch and acceleration (4–7) → scaling up (8–10)'],
['McCumber Cube','Goals: C-I-A · states: transmission, storage, processing · safeguards: technology, policy &amp; practices, human factors'],
['Ethics → regulation → governance','DE shapes DG and DR through moral evaluation; DR shapes DG through legal compliance'],
['OECD inclusiveness','Innovation hot spots · dual economy · inequality · winner-take-all']])}
<h3>Classic traps</h3>
<ul><li>Android is an operating system, not an app; MIS is not a programming language.</li>
<li>Open source = source code <b>available</b> (the slide says “not available”: an error).</li>
<li>Data visualization matters “no matter the decision maker”: <b>FALSE</b> (slide answer). Big data makes AI possible (not the reverse).</li>
<li>70% of digital transformations do not reach their goals: technology magnifies flawed practices.</li>
<li>Google/Facebook: ad-supported <i>and</i> hidden revenue generation; Spotify: freemium; HyreCar/Uber: two-sided marketplace.</li></ul>
<h3>Exam checklist</h3>
<ol><li>Practice questions can come back word for word (syllabus): know the First block MCQs and the in-class questions.</li>
<li>For a case: name the framework (5 steps, principles, VTDF, data value chain, lessons, roadmap), then apply it to the facts.</li>
<li>For ethics: cite at least two principles that lead to different conclusions, and the stakeholders.</li>
<li>For sustainability: say which dimension (people, planet, profit) and give a concrete technology lever.</li></ol>
`;

/* ---------- quiz ---------- */
const QUIZ=[
// Session 1
{id:'q0',topic:'s1',src:'course',q:'What is a business process?',o:['A sequence of activities and decisions for accomplishing a function','A software that automates a task','A department of the company','A diagram drawn with BPMN symbols'],a:0,e:'Slide definition: “A sequence of activities & decisions for accomplishing a function”. BPMN is only the notation used to draw it.'},
{id:'q1',topic:'s1',src:'course',q:'Why do organizations standardize business processes?',o:['To enforce policies, produce consistent results and reduce risk','To eliminate all employees','To avoid using IT','To increase the number of decisions'],a:0,e:'The three reasons on the slide: enforce policies, produce consistent results, reduce risk.'},
{id:'q2',topic:'s1',src:'practice',q:'In a BPMN diagram, what does a diamond represent?',o:['A decision','A repository','An activity documented elsewhere','A data flow'],a:0,e:'Diamond = decision (“Do All Myself?”). Cylinder = repository; rounded rectangle with “+” = activity documented elsewhere; dotted arrow = data flow.'},
{id:'q3',topic:'s1',src:'practice',q:'What are swimlanes used for in a process diagram?',o:['To organize the activities by roles and actors','To show the data stored','To mark the start and stop','To show decisions'],a:0,e:'“Swimlanes to organize by roles and actors” (cashier, order tracker, presenter, food runner).'},
{id:'q4',topic:'s1',src:'practice',q:'A clinic sends prescriptions electronically to the pharmacy. Which way of improving processes with digital technologies is this?',o:['Improve data flow among activities','Use automation','Improve control of activities','Improve procedures'],a:0,e:'Slide example of “improve data flow among activities”: prescription data electronically recorded and shared with the pharmacy.'},
{id:'q5',topic:'s1',src:'practice',q:'A pizza shop’s drivers use GPS. Which improvement is this?',o:['Improve an activity','Improve procedures','Improve data flow','Use automation'],a:0,e:'Slide: “Driving activity improved with GPS” = improve an activity. Showing order data on the GPS would be data flow.'},
{id:'q6',topic:'s1',src:'practice',q:'In the innovation matrix, a technological breakthrough that transforms industries and often creates a new market is…',o:['incremental','sustaining','radical','disruptive'],a:2,e:'Radical: high technology newness. Disruptive: technology or new business model that disrupts an existing market (high market impact).'},
{id:'q7',topic:'s1',src:'practice',q:'Gradual, continuous improvements on existing products and services are…',o:['incremental innovation','disruptive innovation','radical innovation','an invention'],a:0,e:'Incremental: low technology newness, low market impact.'},
{id:'q8',topic:'s1',src:'practice',q:'Which idea for process improvement appears on the slides?',o:['Capture information once, at the source','Organize around tasks, not outcomes','Separate decision points from where the work is done','Integrate the results of parallel activities at the end'],a:0,e:'Slide ideas: organize around outcomes (not tasks); link parallel activities instead of integrating their results; put decision points where the work is performed; capture information once, at the source.'},
// Session 2
{id:'q10',topic:'s2',src:'course',q:'What can be an information system?',o:['The whole that emerges where people and IT interact for doing some work','Only the computers of a company','Only the software','The internet'],a:0,e:'Slide: “The whole (like the frog in the video) that emerges where people and IT interact for doing some work.”'},
{id:'q11',topic:'s2',src:'bank',q:'What are the two main types of software?',o:['Personal productivity and enterprise-wide software','Application software and enterprise-wide software','Operating systems and application software','Apps and data analysis'],a:2,e:'Session 2: “Software: OS (operating system) and APP (application software)”.'},
{id:'q12',topic:'s2',src:'bank',q:'What are the functions of the operating system?',o:['All of the choices','To provide a platform for developers to write software applications','To provide the user-interface components','To manage the hardware resources of the computer'],a:0,e:'The three OS functions on the slide: managing hardware resources, providing user-interface components, providing a platform for developers.'},
{id:'q13',topic:'s2',src:'bank',q:'An application software is…',o:['a software to run the computer','a software to connect a computer to other computers','a software to accomplish a specific goal','a software to keep the computer running well'],a:2,e:'Slide: application software is “set to accomplish a specific goal such as word processing, calculations on a spreadsheet, or surfing the internet”.'},
{id:'q14',topic:'s2',src:'bank',q:'Which of the following is NOT an application?',o:['iTunes','Google Chrome','Microsoft Excel','Android'],a:3,e:'Android is an operating system.'},
{id:'q15',topic:'s2',src:'bank',q:'Which of the following are examples of application software?',o:['All of the choices','Microsoft Word','Google Docs','Candy Crush'],a:0,e:'All three accomplish a specific goal for the user.'},
{id:'q16',topic:'s2',src:'bank',q:'What is the name of the operating system that powers a large percentage of web servers in the world?',o:['Linux','Windows','Mac OS','Android'],a:0,e:'Linux (open source).'},
{id:'q17',topic:'s2',src:'bank',q:'What is open-source software?',o:['Software that makes the source code available for anyone to copy and use','The database from which data is gathered','An application that acts as a data harmonizer','Software aggregating web-scraped and manually registered data'],a:0,e:'Open source makes the source code available. The Session 2 slide wrongly says “not available”, while its own table says it is.'},
{id:'q18',topic:'s2',src:'bank',q:'Which of these actions are possible with open-source software?',o:['View the source code of the application','All of the choices','Modify the source code of the application','Use the software freely'],a:1,e:'View, modify and use freely: all of them.'},
{id:'q19',topic:'s2',src:'practice',q:'Which is a disadvantage of open-source software according to the slide?',o:['Technical support is not available like with traditional software products','The source code cannot be examined','It is always expensive','Bugs are never fixed'],a:0,e:'Disadvantages: no traditional technical support; updates and features depend on the users’ requirements; the user interface may be harder to use.'},
{id:'q20',topic:'s2',src:'bank',q:'… includes programs that allow you to fix or modify your computer in some way.',o:['Utility software','Collaborative systems','Private cloud','Enterprise software'],a:0,e:'Utility software.'},
{id:'q21',topic:'s2',src:'bank',q:'… allow users to brainstorm ideas together without the necessity of physical, face-to-face meetings.',o:['Utility software','Private cloud','Collaborative systems','Enterprise software'],a:2,e:'Collaborative systems.'},
{id:'q22',topic:'s2',src:'bank',q:'… software where users can create and edit documents.',o:['Word processing','Utility software','Collaborative systems','Enterprise software'],a:0,e:'Word processing.'},
{id:'q23',topic:'s2',src:'bank',q:'What is the name of the program that loads the operating system into the computer?',o:['File program','Memory program','Boot program','Application program'],a:2,e:'The boot program.'},
{id:'q24',topic:'s2',src:'bank',q:'What is the term for a software application so essential that large numbers of people buy a device just to run it?',o:['Essential app','Killer app','Popular app','Vital app'],a:1,e:'Killer app.'},
{id:'q25',topic:'s2',src:'bank',q:'Software that you purchase…',o:['can be resold by you','is not owned by you: you have bought the licence to use it','is leased to you for a given period of time','is owned by you'],a:1,e:'You buy a licence, not the software itself.'},
{id:'q26',topic:'s2',src:'bank',q:'What is the term that indicates the size of data that can be moved within the computer and is supported by both Windows 10 and Mac OS?',o:['32-bit','8-bit','64-bit','16-bit'],a:2,e:'64-bit.'},
{id:'q27',topic:'s2',src:'bank',q:'Which one is NOT a programming language used to create modern software applications?',o:['Java','C++','MIS','Python'],a:2,e:'MIS (management information systems) is a field, not a language.'},
{id:'q28',topic:'s2',src:'bank',q:'Enterprise Resources Planning (ERP) applications do what?',o:['Manage the data and business processes across a company','All of the choices','Integrate different functional areas of a company','Operate using a centralized database'],a:1,e:'Session 2: single source of truth (consolidated database) and integrated processes across SCM, manufacturing, CRM, HR and accounting.'},
{id:'q29',topic:'s2',src:'practice',q:'What are the two key characteristics of ERPs?',o:['Single source of truth and integrated processes','Cloud hosting and open source','Mobile apps and social media','Low cost and easy implementation'],a:0,e:'Slide: “Single source of truth (consolidated database); integrated processes.”'},
{id:'q30',topic:'s2',src:'practice',q:'Which BCG tech lever matches “a blockchain value-chain transparency solution guaranteeing product integrity from producer to retailer”?',o:['Cloud, IoT and blockchain','Digitized operations','Data sharing and ecosystems','AI and advanced analytics'],a:0,e:'Cloud, IoT and blockchain: unlock new levels of tracking of environmental/societal impacts across the value chain.'},
// Session 3
{id:'q32',topic:'s3',src:'practice',q:'Which is a PEOPLE challenge of implementing an ERP, at the level of management?',o:['Fails to anticipate cultural resistance','Vendor selection','Gap analysis','Data format issues'],a:0,e:'Management: moves on prematurely, oversells, fails to anticipate cultural resistance. Vendor selection, gap analysis and data format are decision-making challenges.'},
{id:'q33',topic:'s3',src:'practice',q:'“Individual users feel pain and get no gain” is…',o:['a people challenge of ERP implementation','a decision-making challenge','an ERP characteristic','an ethical principle'],a:0,e:'People challenges: management, team (collaboration breaks down), individual users (pain, no gain).'},
{id:'q34',topic:'s3',src:'practice',q:'“Take the action that achieves the higher or greater value for the greatest number of people.” Which principle?',o:['Utilitarian principle','Risk aversion principle','Golden rule','Categorical imperative'],a:0,e:'Utilitarian principle (assumes values can be ranked and consequences known).'},
{id:'q35',topic:'s3',src:'practice',q:'“If an action cannot be taken repeatedly, it is not right to take at all.” Which principle?',o:['Slippery slope rule','Categorical imperative','No-free lunch rule','Golden rule'],a:0,e:'Slippery slope: small acceptable change now, unacceptable if repeated.'},
{id:'q36',topic:'s3',src:'practice',q:'A student copies a classmate’s code because “it is useful and nobody said it was protected”. Which principle does this violate most directly?',o:['No-free lunch rule','Utilitarian principle','Risk aversion principle','Slippery slope rule'],a:0,e:'No-free lunch: assume things are owned by someone else unless declared otherwise, and that the creator wants compensation.'},
{id:'q37',topic:'s3',src:'practice',q:'What is the FIRST step of the five-step ethical analysis?',o:['Identify and clearly describe the facts','Identify the stakeholders','Identify the options','Identify the consequences'],a:0,e:'Facts → dilemma → stakeholders → options → consequences.'},
{id:'q38',topic:'s3',src:'practice',q:'What are the four components used to analyze a digital business model?',o:['Value, tech, distribution and financial models','Product, price, place, promotion','Strengths, weaknesses, opportunities, threats','People, planet, profit, process'],a:0,e:'VTDF: value model, tech model, distribution model, financial model (FourWeekMBA).'},
{id:'q39',topic:'s3',src:'practice',q:'HyreCar matches car owners with drivers who need a car to work for Uber or Lyft. Its business model is…',o:['a peer-to-peer, two-sided marketplace','subscription-based','open source','ad-supported'],a:0,e:'Peer-to-peer marketplace: owners amortize a car parked most of the time (15% fee), drivers pay a 10% fee.'},
{id:'q40',topic:'s3',src:'practice',q:'Spotify (2017): which share of revenues came from premium subscriptions?',o:['About 90% (89.83%)','About 10%','About 50%','About 77%'],a:0,e:'Premium €3.6 billion = 89.83%; ad-supported €416 million = 10.17%.'},
{id:'q41',topic:'s3',src:'practice',q:'Facebook gives its service for free, owns the users’ data and sells targeted ads. Which model does the slide call this?',o:['Hidden revenue generation','Freemium','Open source','Subscription'],a:0,e:'“Hidden revenue generation”: users get the service for free; the data is repackaged and sold in the advertising marketplace. Advertising = 97.4% of 2021 revenues.'},
{id:'q42',topic:'s3',src:'practice',q:'Where does most of Amazon’s operating profit come from, according to the slide?',o:['Amazon Web Services (74%)','E-commerce (74%)','Advertising','Prime Video'],a:0,e:'AWS: 74% of the $24.8B operating profit in 2021, although e-commerce brings most revenue.'},
{id:'q43',topic:'s3',src:'practice',q:'What is dynamic pricing?',o:['Several price points based on factors such as customer segment, peak times and time-based consumption','One fixed price for every customer','A price set only by competitors','A discount for new users'],a:0,e:'Dynamic pricing vs static (single price point) pricing.'},
// Session 4
{id:'q45',topic:'s4',src:'practice',q:'Which is NOT one of the four reasons the slide gives for “why a digital revolution now”?',o:['Lower taxes on technology','Data abundance','Unprecedented computing power','Ubiquitous connectivity'],a:0,e:'Data abundance, unprecedented computing power, ubiquitous connectivity, advanced algorithms.'},
{id:'q46',topic:'s4',src:'bank',q:'Where and when can we date the first industrial revolution?',o:['Germany in the early 1900s','Britain in the late 1700s','The USA in the early 1900s','Britain in the late 1800s'],a:1,e:'Slide: 1.0, 1760–1840, steam engineering.'},
{id:'q47',topic:'s4',src:'bank',q:'What technology initiated the second industrial revolution?',o:['Nuclear power','The World Wide Web','Electricity','The Internet'],a:2,e:'Slide: 2nd revolution = mass production and electricity.'},
{id:'q48',topic:'s4',src:'bank',q:'What was the most important technology that triggered the third industrial revolution?',o:['The FTP','The TCP/IP','The transistor','The IoT'],a:2,e:'The 3rd revolution is electronic and IT systems; the transistor is the electronic component behind them.'},
{id:'q49',topic:'s4',src:'bank',q:'Which qualities best describe the fourth industrial revolution?',o:['Velocity, variety, veracity','Impact, veracity, and depth','Velocity, scope, and impact','Scope, speed, and velocity'],a:2,e:'Velocity, scope and impact (systems impact). Velocity, variety, veracity describe big data.'},
{id:'q50',topic:'s4',src:'practice',q:'The 4th industrial revolution is characterized on the slide by…',o:['cyber-physical systems','mass production and electricity','mechanization, steam and water power','electronic and IT systems, automation'],a:0,e:'4.0 = cyber-physical systems.'},
{id:'q51',topic:'s4',src:'bank',q:'What was the main characteristic of the websites in the first wave of the Internet?',o:['They were largely focusing on broadcasting static information','They were ubiquitous and connected','They were app-native and mobile-friendly','They were dynamic and interactive'],a:0,e:'Web 1.0: static information.'},
{id:'q52',topic:'s4',src:'bank',q:'How did the shift from Web 1.0 to Web 2.0 change the way companies did business?',o:['None of the choices','During the Web 1.0 era, people started interacting with each other more','During the Web 2.0 era, companies created tools that enabled more participation online','Web 1.0 faded and Web 2.0 took over in popularity'],a:2,e:'Web 2.0 = participation (user-generated content, social media).'},
{id:'q53',topic:'s4',src:'bank',q:'How will Web3 change the way blockchains work?',o:['Users will use more advanced forms of blockchains','Users will give the server owner more rights to monetize their data','Users will be able to store more data in blockchains','Users will have more control and ownership over their data'],a:3,e:'Web3: ownership and control return to users.'},
{id:'q54',topic:'s4',src:'bank',q:'What does distributed ledger technology bring to all transactions?',o:['Timeliness','Taxation and reporting','Machine learning and device triggering','Not needing to trust other human actors'],a:3,e:'Trust is placed in the shared ledger, not in intermediaries.'},
{id:'q55',topic:'s4',src:'bank',q:'A blockchain transaction generates 3 blocks. Where are they stored?',o:['None of the choices','Each block on a different miner’s computer','The 3 blocks on each miner’s computer','Each block on a different miner’s computer, with a central server knowing the 3 hashes'],a:2,e:'The ledger is distributed: every node keeps the whole chain; there is no central server.'},
{id:'q56',topic:'s4',src:'bank',q:'Why is a white paper used to introduce cryptocurrencies to the marketplace?',o:['None of the choices','To designate the regulatory agency overseeing it','To explain its legality in the user’s country','To describe the cryptocurrency’s purpose and technology'],a:3,e:'A white paper describes the purpose and the technology.'},
{id:'q57',topic:'s4',src:'bank',q:'Which way of entering the metaverse overlays the physical world with digital visual, auditory, or other sensory information?',o:['None of the choices','Augmented reality','Visual reality','“Shopping mall” reality'],a:1,e:'Augmented reality overlays; virtual reality replaces.'},
{id:'q58',topic:'s4',src:'bank',q:'What is the difference between virtual reality and augmented reality?',o:['VR is more immersive, AR more accessible','VR is computer generated, AR data driven','VR creates a new environment, while AR merges the real and virtual worlds','VR uses headsets, AR uses smartphones'],a:2,e:'The defining difference: a new environment vs the real world augmented.'},
{id:'q59',topic:'s4',src:'bank',q:'Ki wants to use virtual reality to train her salesforce on new products. Most significant advantage of this relatively inexpensive training?',o:['It can provide realistic situations in a low-risk environment','It can change the training process','It can be provided to a wider audience','It can provide insights on products not yet introduced'],a:0,e:'VR simulates realistic situations without real-world risk.'},
{id:'q60',topic:'s4',src:'bank',q:'Why is interoperability important for a company doing business in the metaverse?',o:['Rewards can be paid in digital assets or crypto','Products can move easily between platforms and environments','It is needed to improve cybersecurity','The platform can support Apple and Android'],a:1,e:'Interoperability = assets move across platforms and environments.'},
{id:'q61',topic:'s4',src:'bank',q:'What is IoT?',o:['Interconnection of telecommunication networks','Internet of Things, the Internet of connected devices','A new mobile advertising format','A new mobile network technology'],a:1,e:'Internet of Things.'},
{id:'q62',topic:'s4',src:'bank',q:'How do the levels of vehicle automation differ?',o:['By their connectedness to other vehicles','By their need for human intervention','By their ability to navigate','By their use of machine learning'],a:1,e:'Levels of automation are defined by how much the human must intervene.'},
{id:'q63',topic:'s4',src:'bank',q:'What is the major downside of increased connectedness?',o:['Decreased change and improvement','Increased frequency of errors','Dependency on connections and vulnerability to threats','Complacency and laziness'],a:2,e:'More connections = more dependency and more attack surface.'},
{id:'q64',topic:'s4',src:'bank',q:'Which branch of computer science develops systems able to process information the same way humans do?',o:['Cognitive computing','Machine optimization','Data mining','Artificial design'],a:0,e:'Cognitive computing.'},
{id:'q65',topic:'s4',src:'practice',q:'Online banking vs cryptocurrency banking illustrates…',o:['redesigned with digital vs born digital','incremental vs radical innovation','SaaS vs IaaS','B2B vs B2C'],a:0,e:'Two forms of digital initiatives: redesigned with digital (online banking) and born digital (cryptocurrency banking).'},
{id:'q66',topic:'s4',src:'practice',q:'Which is advice for building a better business case for digital initiatives?',o:['Run small pilots, evaluate results, and refine your approach','Build the case as a series of technology investments','Ignore the timing of return','Launch everything at once'],a:0,e:'Do not frame it as technology investments; link operational changes to tangible benefits; run small pilots; work out costs, benefits and timing of return.'},
{id:'q67',topic:'s4',src:'practice',q:'In the TIME investigation, how much did Kenyan data labellers working for Sama on OpenAI’s project take home?',o:['About $1.32 to $2 per hour','About $15 per hour','About $2 per day','Nothing: they were volunteers'],a:0,e:'Take-home wage of around $1.32 to $2 per hour depending on seniority and performance.'},
// Session 5
{id:'q70',topic:'s5',src:'course',q:'What is the relationship between big data and AI?',o:['AI always drives big data tools','AI makes big data analysis possible','Big data makes AI possible','AI tools can work better without big data'],a:2,e:'Answer highlighted on the slide: big data makes AI possible.'},
{id:'q71',topic:'s5',src:'course',q:'True or false: data visualization is important no matter the decision maker is human or algorithmic machine.',o:['True','False'],a:1,e:'The slide marks FALSE: an algorithm does not need a visual; visualization serves human decision makers.'},
{id:'q72',topic:'s5',src:'course',q:'Which one of these is NOT true about GDPR?',o:['It requires explanation and obtaining consent when collecting data','It protects against collecting certain private information','It’s the accept “All Cookies” thing','Facebook loves GDPR!'],a:3,e:'Answer highlighted on the slide: “Facebook loves GDPR!”.'},
{id:'q73',topic:'s5',src:'course',q:'Data governance is about…',o:['Handling data properly','Using data','Storing data','Getting access to data'],a:0,e:'Answer highlighted on the slide: handling data properly.'},
{id:'q74',topic:'s5',src:'practice',q:'In the GSMA data value chain, “consent” belongs to which stage?',o:['Generation','Collection','Analytics','Exchange'],a:0,e:'Generation: 1 acquisition, 2 consent. Collection: transmission, validation. Analytics: processing, analysis. Exchange: packaging, selling.'},
{id:'q75',topic:'s5',src:'practice',q:'“A minor user-interface change would reduce application time for heavy users by 25%.” In the opinion-to-action chain, this is…',o:['an insight','a metric','data','an action'],a:0,e:'Opinion → data → metrics → analysis → insight → action. The implemented change is the action.'},
{id:'q76',topic:'s5',src:'practice',q:'Which SDG example comes from the UN Global Pulse slide?',o:['Combining satellite imagery and crowd-sourced accounts to track deforestation (climate action)','Using blockchain to vote','Replacing teachers with AI','Banning mobile phones'],a:0,e:'SDG 13 climate action: satellite imagery, crowd-sourced witness accounts and open data help track deforestation.'},
{id:'q77',topic:'s5',src:'practice',q:'What is a data broker?',o:['A company that acquires consumer data from many sources and sells business intelligence to companies and governments','A bank that trades data centres','A government agency that protects data','A cloud provider'],a:0,e:'Data broker / aggregator: Datalogix, Acxiom.'},
{id:'q78',topic:'s5',src:'practice',q:'Unseen Cyberazzi: “if you are not willing to publish your behaviour on Facebook, it is unethical.” What is wrong with this reasoning?',o:['It inverts the litmus test: willingness to publish suggests conformity with the categorical imperative, but unwillingness does not prove unethical behaviour','Nothing, it is the categorical imperative','It is the utilitarian principle','It is the golden rule'],a:0,e:'The litmus test is one-directional. Privacy can be a legitimate reason not to publish.'},
{id:'q79',topic:'s5',src:'practice',q:'In the Carbon Creek Gardens case, which part of the data value chain is the weakest?',o:['Analytics: the sales data exists but is not processed into insight','Generation: there is no data','Exchange: Mary sells too much data','Consent'],a:0,e:'Mary has a sales database; she lacks the processing and analysis that would flag customers who stop coming.'},
{id:'q80',topic:'s5',src:'practice',q:'The Session 5 slide compares Bitcoin’s annualized electricity use with countries. Which statement matches the chart?',o:['The 2021 maximum estimate (above 400 TWh) exceeds the UK’s 300 TWh','Bitcoin uses less electricity than Israel (56 TWh)','Bitcoin’s consumption fell after 2020','The chart shows water consumption'],a:0,e:'Maximum estimate above 400 TWh vs UK 300, Spain 242, Sweden 131, Argentina 125, Israel 56 TWh.'},
// Session 6
{id:'q82',topic:'s6',src:'bank',q:'What is the term for software that is rented rather than purchased and accessible through the Internet?',o:['Cloud computing','Web application','Software as a service (SaaS)','Software as a product (SaaP)'],a:2,e:'SaaS.'},
{id:'q83',topic:'s6',src:'bank',q:'… where a service provider sections off the web server space for a specific organization.',o:['Utility software','Private cloud','Virtualization','Enterprise software'],a:1,e:'Private cloud.'},
{id:'q84',topic:'s6',src:'bank',q:'… is the process of using software to simulate a computer or some other device.',o:['Word processing','Private cloud','Enterprise software','Virtualization'],a:3,e:'Virtualization.'},
{id:'q85',topic:'s6',src:'bank',q:'What is one disadvantage of cloud computing?',o:['You are limited by the memory or disk space on your computer','You pay for each individual copy of the software','You cannot scale to many users easily','You are relying on a third party to provide the services'],a:3,e:'Dependence on the provider. The other options are disadvantages of traditional installed software.'},
{id:'q86',topic:'s6',src:'bank',q:'Which of the following is NOT an advantage of cloud computing?',o:['Installation and upgrades are handled by the cloud supplier','Your information is stored on someone else’s computer','Services can be leased for a limited time as needed','Access from any computer connected to the Internet'],a:1,e:'Storing your information on someone else’s computer is a risk, not an advantage.'},
{id:'q87',topic:'s6',src:'practice',q:'Microsoft Azure renting predefined platforms for software development is an example of…',o:['PaaS','SaaS','IaaS','a private cloud'],a:0,e:'SaaS: Office 365, Google Drive, Dropbox. PaaS: Azure. IaaS: AWS storage and computing.'},
{id:'q88',topic:'s6',src:'practice',q:'Which point on cloud and environmental sustainability is a concern, not a benefit?',o:['The boom in cloud computing means more energy is needed for data centres','Cloud is the greener option','Smarter use of energy','Major tech players have ambitious plans'],a:0,e:'Deloitte’s four points: one and two and four are positive; three is the energy boom of data centres.'},
{id:'q89',topic:'s6',src:'practice',q:'Why did Amazon’s AI recruiting tool penalize women?',o:['It was trained on ten years of resumes, mostly from men','Engineers coded a rule against women','It only read cover letters','It used facial recognition'],a:0,e:'It learned the male dominance in its training data: it penalized “women’s” and downgraded two all-women’s colleges.'},
{id:'q90',topic:'s6',src:'practice',q:'Amazon edited its recruiting programs to be neutral to the terms found. Why was this not enough?',o:['There was no guarantee the machine would not find other ways to discriminate','Editing code is illegal','The tool became too slow','Recruiters refused it'],a:0,e:'Removing known biased terms does not remove proxies; the team was disbanded.'},
// Session 7
{id:'q92',topic:'s7',src:'course',q:'The goals of a digital transformation can include:',o:['broadening the company’s reach','improving operational efficiency','transmuting the company’s culture and image','all the above'],a:3,e:'Answer on the slide: all the above.'},
{id:'q93',topic:'s7',src:'practice',q:'What share of digital transformation initiatives do not reach their goals, according to the slide?',o:['70%','30%','50%','90%'],a:0,e:'70%: if mindsets and practices are flawed, digital transformation magnifies those flaws.'},
{id:'q94',topic:'s7',src:'practice',q:'How does the slide relate digital innovation and digital transformation?',o:['Innovation is the start; transformation is the implementation that follows; they are mutually causal','They mean exactly the same thing','Transformation always comes first','Innovation only concerns products'],a:0,e:'“Innovation is the start of something great. What happens after is transformation”; transformation can also lead to innovation.'},
{id:'q95',topic:'s7',src:'practice',q:'Which is lesson 1 of “Digital transformation is not (just) about technology”?',o:['Figure out your business strategy before you invest in anything','Bring Silicon Valley start-up culture inside','Leverage insiders','Recognize employees’ fear of being replaced'],a:0,e:'Lessons 1–5: strategy first; leverage insiders; customer experience outside in; employees’ fear; start-up culture inside.'},
{id:'q96',topic:'s7',src:'practice',q:'In McKinsey’s roadmap, “start with lighthouse projects” belongs to which stage?',o:['Launch and acceleration','Defining value','Scaling up','None'],a:0,e:'Stage 2 (steps 4–7): lighthouse projects, high-caliber launch team, agile ways of working, digital culture.'},
// Session 8
{id:'q98',topic:'s8',src:'practice',q:'In the McCumber Cube, which three elements are the desired goals?',o:['Confidentiality, integrity, availability','Transmission, storage, processing','Technology, policy and practices, human factors','Prevention, detection, response'],a:0,e:'Goals: CIA. Information states: transmission, storage, processing. Safeguards: technology, policy & practices, human factors.'},
{id:'q99',topic:'s8',src:'practice',q:'What does the McCumber Cube show about the question “Cybersecurity is all about technology?”',o:['No: technology is only one of three safeguards, with policy and practices and human factors','Yes: only technology protects information','It only concerns stored data','It only concerns availability'],a:0,e:'The safeguards dimension lists technology, policy and practices, human factors.'},
// Session 9
{id:'q101',topic:'s9',src:'practice',q:'According to the Session 9 diagram, how does digital regulation shape digital governance?',o:['Through legal compliance','Through moral evaluation','Through market prices','It does not'],a:0,e:'DE shapes DG and DR through moral evaluation; DR shapes DG through legal compliance.'},
{id:'q102',topic:'s9',src:'practice',q:'What are the two biggest barriers for women in tech, according to the study on the slide?',o:['A lack of mentors and a lack of female role models','Salaries and working hours','Education and age','Remote work and travel'],a:0,e:'Slide (diversityintech.co.uk).'},
{id:'q103',topic:'s9',src:'practice',q:'A few highly innovative firms coexist with a long tail of non-innovative ones. The OECD calls this…',o:['a “dual economy”','winner-take-all dynamics','an innovation hot spot','a two-sided market'],a:0,e:'Dual economy. Winner-take-all: a small advantage lets firms seize a large part of the market.'},
{id:'q104',topic:'s9',src:'practice',q:'Which statement about digital innovation and inclusiveness is on the slides?',o:['Innovation activities are unevenly distributed, in hot spots such as Boston, London and Tel Aviv','Digital tools have removed all disparities','Inequality improves economic performance','Innovation is evenly spread across regions'],a:0,e:'OECD: innovation hot spots in dynamic urban areas; high inequality hurts wellbeing and performance.'}];

/* ---------- flashcards ---------- */
const CARDS=[
{id:'c0',topic:'s1',f:'Business process',b:'A sequence of activities & decisions for accomplishing a function.'},
{id:'c1',topic:'s1',f:'Why standardize business processes?',b:'Enforce policies · produce consistent results · reduce risk'},
{id:'c2',topic:'s1',f:'BPMN symbols',b:'Circles: start / stop · rounded rectangle: activity (+ = documented elsewhere) · diamond: decision · arrows: process flow / data flow · cylinder: repository · bracket: annotation · swimlanes: roles and actors'},
{id:'c3',topic:'s1',f:'5 ways digital technologies improve processes',b:'Improve an activity · improve data flow · improve control · use automation · improve procedures'},
{id:'c4',topic:'s1',f:'Innovation matrix',b:'Incremental (low tech, low market) · sustaining (low tech, high market) · radical (high tech, low market) · disruptive (high tech, high market)'},
{id:'c5',topic:'s2',f:'Information system',b:'The whole that emerges where people and IT interact for doing some work.'},
{id:'c6',topic:'s2',f:'3 functions of an operating system',b:'Manage hardware resources · provide user-interface components · provide a platform for developers'},
{id:'c7',topic:'s2',f:'Open source: pros and cons',b:'+ free, source code available and reviewable, large community → quick fixes\n− no traditional support, updates driven by users, harder interface'},
{id:'c8',topic:'s2',f:'ERP: 2 characteristics and 5 functions',b:'Single source of truth + integrated processes\nSCM · manufacturing · CRM · HR · accounting'},
{id:'c9',topic:'s2',f:'Utility software / collaborative systems / virtualization',b:'Fix or modify the computer · brainstorm without face-to-face meetings · simulate a computer or device with software'},
{id:'c10',topic:'s2',f:'Three dimensions of sustainability',b:'People (social/ethical) · planet (environmental) · profit (financial)'},
{id:'c11',topic:'s2',f:'BCG tech levers for sustainability',b:'Digitized operations · digital products and services · cloud, IoT and blockchain · AI and advanced analytics · data sharing and ecosystems'},
{id:'c12',topic:'s3',f:'ERP implementation challenges',b:'Decisions: vendor selection, gap analysis, configuration, data format, legacy migration\nPeople: management, team, individual users'},
{id:'c13',topic:'s3',f:'Five-step ethical analysis',b:'Facts → dilemma → stakeholders → options → consequences'},
{id:'c14',topic:'s3',f:'Categorical imperative vs slippery slope',b:'Categorical: not right for everyone → not right for anyone\nSlippery slope: cannot be repeated → not right at all'},
{id:'c15',topic:'s3',f:'Utilitarian vs risk aversion',b:'Utilitarian: greatest value for the greatest number\nRisk aversion: least harm or least potential cost'},
{id:'c16',topic:'s3',f:'Golden rule / no-free lunch',b:'Treat others as you want to be treated\nEverything is owned by someone; creators want compensation'},
{id:'c17',topic:'s3',f:'VTDF',b:'Value model · Tech model · Distribution model · Financial model'},
{id:'c18',topic:'s3',f:'Business model types and examples',b:'E-commerce: Amazon · freemium: Spotify, Dropbox · P2P marketplace: HyreCar, Uber, Airbnb · ad-supported: Quora · subscription: Netflix · hidden revenue: Google, Facebook · open source: Red Hat, GitHub'},
{id:'c19',topic:'s3',f:'Spotify 2017 revenue split',b:'Premium €3.6 bn (89.83%) · ad-supported €416 m (10.17%)'},
{id:'c20',topic:'s4',f:'Why a digital revolution now?',b:'Data abundance · unprecedented computing power · ubiquitous connectivity · advanced algorithms'},
{id:'c21',topic:'s4',f:'Four industrial revolutions',b:'1.0 steam and water power (Britain, late 1700s) · 2.0 electricity, mass production · 3.0 electronics, IT, automation · 4.0 cyber-physical systems (velocity, scope, impact)'},
{id:'c22',topic:'s4',f:'Industry 4.0: three pillars',b:'Digitization/integration of value chains · digitization of product and service offerings · digital business models and customer access'},
{id:'c23',topic:'s4',f:'Web 1.0 / 2.0 / 3.0',b:'Static information · participation · user control and ownership of data'},
{id:'c24',topic:'s4',f:'VR vs AR',b:'VR creates a new environment; AR overlays / merges digital information with the real world'},
{id:'c25',topic:'s4',f:'Business case for digital initiatives',b:'Not a series of tech investments · link operational changes to tangible benefits · small pilots · costs, benefits, timing of return'},
{id:'c26',topic:'s4',f:'Redesigned with digital vs born digital',b:'Online banking vs cryptocurrency banking'},
{id:'c27',topic:'s5',f:'Four in-class answers (big data and AI)',b:'Big data makes AI possible · visualization regardless of decision maker: FALSE · NOT true about GDPR: “Facebook loves GDPR!” · data governance: handling data properly'},
{id:'c28',topic:'s5',f:'GSMA data value chain',b:'Generation (acquisition, consent) → collection (transmission, validation) → analytics (processing, analysis) → exchange (packaging, selling)'},
{id:'c29',topic:'s5',f:'From opinion to action',b:'Opinion → data → metrics → analysis → insight → action'},
{id:'c30',topic:'s5',f:'Data broker',b:'Acquires consumer data (public records, retailers, cookies, social trackers) and sells business intelligence; opaque processing, hard to see or correct your data.'},
{id:'c31',topic:'s6',f:'Cloud computing (definition)',b:'Using services and programs on the internet rather than ones you buy and put on your computer (Cambridge).'},
{id:'c32',topic:'s6',f:'SaaS / PaaS / IaaS',b:'SaaS: Office 365, Google Drive, Dropbox · PaaS: Microsoft Azure · IaaS: AWS storage and computing'},
{id:'c33',topic:'s6',f:'Cloud and sustainability: 4 points',b:'Greener option · smarter energy use · data-centre energy boom · ambitious plans of tech players'},
{id:'c34',topic:'s6',f:'Amazon AI recruiting tool',b:'Trained on 10 years of mostly male resumes → penalized “women’s”, all-women’s colleges; edits gave no guarantee; project scrapped.'},
{id:'c35',topic:'s7',f:'Innovation vs transformation',b:'Innovation = the start; transformation = the implementation after it; mutually causal.'},
{id:'c36',topic:'s7',f:'Why 70% of transformations fail',b:'Without the right mindset and with flawed practices, digital technology magnifies the flaws.'},
{id:'c37',topic:'s7',f:'Five lessons of digital transformation',b:'Strategy before investment · leverage insiders · customer experience outside in · recognize employees’ fear · start-up culture inside'},
{id:'c38',topic:'s7',f:'McKinsey roadmap',b:'Defining value (commitment, targets, investment) → launch and acceleration (lighthouse projects, launch team, agile, digital culture) → scaling up (quick returns, capabilities, new operating model)'},
{id:'c39',topic:'s8',f:'McCumber Cube',b:'Goals: confidentiality, integrity, availability · states: transmission, storage, processing · safeguards: technology, policy & practices, human factors'},
{id:'c40',topic:'s9',f:'Ethics, regulation, governance',b:'Digital ethics shapes governance and regulation through moral evaluation; regulation shapes governance through legal compliance.'},
{id:'c41',topic:'s9',f:'Barriers for women in tech',b:'Lack of mentors · lack of female role models'},
{id:'c42',topic:'s9',f:'OECD: innovation and inclusiveness',b:'Innovation hot spots · dual economy · inequality hurts performance · winner-take-all dynamics'},
{id:'c43',topic:'s9',f:'Poster requirements',b:'Name, logo · value prop, revenue, tech, distribution · 2 sustainability effects · 2 ethical matters · comparison with 2 real companies'}];

/* ---------- exercises: matching, ordering, short cases ---------- */
const EXERCISES=[
// Session 1
{id:'x-s1-bpmn',topic:'s1',type:'match',src:'course',title:'BPMN symbols',q:'Match each BPMN symbol with its meaning.',
 pairs:[['Light circle','Start'],['Bold circle','Stop'],['Diamond','Decision'],['Rounded rectangle with “+”','Activity documented elsewhere'],['Cylinder','Repository'],['Dotted arrow with a small circle','Data flow'],['Bracket with a dotted line','Annotation']],extra:['Swimlane']},
{id:'x-s1-drive',topic:'s1',type:'order',src:'course',title:'Drive-thru: the cashier lane',q:'Put the cashier’s activities in the order of the drive-thru diagram.',items:['Greeting','Enter Order','Read Back Order','Customer Payment']},
{id:'x-s1-lanes',topic:'s1',type:'match',src:'course',title:'Drive-thru: who does what?',q:'In the drive-thru diagram, which swimlane performs each activity?',
 pairs:[['Record Order and Start Timer','Order Tracker'],['Stop Timer','Order Tracker'],['Read Back Order','Cashier'],['Decision “Do All Myself?”','Presenter'],['Hand Food to Customer','Presenter'],['Assemble Order when the presenter does not do it all','Food Runner']]},
{id:'x-s1-improve',topic:'s1',type:'match',src:'course',title:'Improving processes with digital technologies',q:'Match each example with the way digital technology improves the process.',
 pairs:[['Driving activity improved with GPS','Improve an activity'],['Prescription data shared electronically with the pharmacy','Improve data flow among activities'],['Appointment no-shows reduced','Improve control of activities'],['Phone answering system at the clinic reception','Use automation'],['Office procedures rewritten','Improve procedures']]},
{id:'x-s1-matrix',topic:'s1',type:'match',src:'course',title:'Innovation matrix',q:'Match each type of innovation with its definition.',
 pairs:[['Incremental','Gradual, continuous improvements on existing products and services'],['Sustaining','A significant improvement on a product that aims to sustain the position in an existing market'],['Disruptive','Technology or new business model that disrupts the existing market'],['Radical','Technological breakthrough that transforms industries, often creates a new market']]},
// Session 2
{id:'x-s2-soft',topic:'s2',type:'match',src:'course',title:'Software vocabulary',q:'Match each term with its definition (practice questions).',
 pairs:[['Utility software','Programs that allow you to fix or modify your computer'],['Collaborative systems','Brainstorm ideas together without face-to-face meetings'],['Virtualization','Using software to simulate a computer or some other device'],['Private cloud','A provider sections off web server space for a specific organization'],['Word processing','Create and edit documents'],['Boot program','Loads the operating system into the computer'],['Killer app','So essential that people buy a device just to run it']],extra:['Enterprise software']},
{id:'x-s2-osapp',topic:'s2',type:'match',src:'course',title:'Operating system or application?',q:'Classify each item.',
 pairs:[['Android','Operating system'],['Linux','Operating system'],['Mac OS','Operating system'],['Microsoft Excel','Application software'],['Google Chrome','Application software'],['iTunes','Application software'],['Candy Crush','Application software']]},
{id:'x-s2-erp',topic:'s2',type:'mcq',src:'course',title:'ERP functions',q:'Which functions do ERP applications integrate, according to the slide? Select all.',o:['SCM','Manufacturing','CRM','Human resources','Accounting','Social media posting'],a:[0,1,2,3,4],e:'SCM, manufacturing, CRM, human resources, accounting.'},
{id:'x-s2-bcg',topic:'s2',type:'match',src:'course',title:'Tech levers for sustainability (BCG)',q:'Match each tech lever with its example.',
 pairs:[['Digitized operations','Textile-dyeing technology that reduces water, energy and chemicals'],['Digital products and services','Parcel delivery reimagined to reduce emissions'],['Cloud, IoT and blockchain','Value-chain transparency from producer to retailer'],['AI and advanced analytics','Real-time energy-efficiency optimization'],['Data sharing and ecosystems','Microinsurance delivered through phone subscriptions']]},
{id:'x-s2-tbl',topic:'s2',type:'match',src:'course',title:'People, planet, profit',q:'Match each overlap of the sustainability diagram with its content.',
 pairs:[['Social – economic','Business ethics, fair trade, worker’s benefits'],['Social – environmental','Conservation policies, environmental justice, global stewardship'],['Environmental – economic','Energy efficiency, renewable fuels, subsidies, green technology']]},
// Session 3
{id:'x-s3-steps',topic:'s3',type:'order',src:'course',title:'Five-step ethical analysis',q:'Put the steps of the ethical analysis in order.',items:['Facts: identify and clearly describe the facts','Dilemma: identify the conflict and the higher-order values involved','Stakeholders: identify the stakeholders','Options: identify the options you can reasonably take','Consequences: identify the potential consequences of your options']},
{id:'x-s3-princ',topic:'s3',type:'match',src:'course',title:'Six candidate ethical principles',q:'Match each principle with its rule.',pairs:PRINCIPLES.map(p=>[p[0],p[1]])},
{id:'x-s3-erp',topic:'s3',type:'match',src:'course',title:'ERP implementation challenges',q:'Is each item a decision-making or a people challenge?',
 pairs:[['ERP vendor selection','Decision-making'],['Gap analysis','Decision-making'],['Moving from legacy systems','Decision-making'],['Management oversells','People'],['Team collaboration breaks down','People'],['Users feel pain and get no gain','People']]},
{id:'x-s3-models',topic:'s3',type:'match',src:'course',title:'Digital business models',q:'Match each company with the model it illustrates on the slide.',
 pairs:[['Zalando','E-commerce / marketplace'],['Dropbox','Free – freemium'],['Airbnb','Peer-to-peer, two-sided marketplace'],['Quora','Ad-supported'],['Salesforce','Subscription-based'],['GitHub','Open source model']],extra:['Hidden revenue generation']},
{id:'x-s3-vtdf',topic:'s3',type:'match',src:'course',title:'VTDF guiding questions',q:'Match each VTDF component with its guiding question (group exercise).',
 pairs:[['Value proposition','What differentiates the brand and makes it attractive to customers?'],['Technology','How does the company leverage technology to stay innovative and competitive?'],['Distribution','How does it communicate and sell to the right audience?'],['Finance','How does the company make money?']]},
{id:'x-s3-spotify',topic:'s3',type:'case',src:'course',title:'Spotify’s digital business model',
 q:'<p>Spotify (2017): an ad-supported service with no subscription fee and limited on-demand access, and a premium service with unlimited online and offline high-quality streaming. Revenues €4 billion (€1.9 billion in 2015); 71 million premium subscribers; average revenue per user 7.06 € (2015), 6 € (2016), 5.24 € (2017).</p>',
 parts:[{type:'mcq',q:'a. Primary type of digital business model',o:['Free – freemium','Peer-to-peer marketplace','Open source','Hidden revenue generation'],a:0},
  {type:'mcq',q:'b. Which share of revenues came from premium memberships?',o:['89.83%','10.17%','50%','77%'],a:0},
  {type:'mcq',q:'c. Which trend does the slide call “critical to Spotify future financial success”?',o:['The average revenue per user, which fell from 7.06 € to 5.24 €','The number of free users','The price of the premium plan','Advertising revenue'],a:0}],
 solution:'<p>Freemium: a free ad-supported tier attracts users and converts them to premium (89.83% of revenues, €3.6 bn; ads €416 m, 10.17%). Revenues grow, but the falling ARPU is the metric to watch.</p>'},
{id:'x-s3-moral',topic:'s3',type:'case',src:'practice',title:'Moral Machine (self-assessed)',
 q:'<p>A self-driving car’s brakes fail. It can stay in its lane and hit three pedestrians crossing on a red light, or swerve and kill its single passenger. Using two of the six principles, explain what each would recommend and why the conclusions can differ.</p>',
 solution:'<p><b>Utilitarian principle</b>: greatest value for the greatest number → swerve (one death instead of three), if the consequences can be known. <b>Golden rule</b> or <b>categorical imperative</b>: would you accept a car designed to sacrifice its passenger if you were the passenger, and could society survive if every car did so? People may refuse to buy such cars. <b>Risk aversion</b>: least harm or least potential cost, which here again points to minimizing deaths. Different principles weigh numbers, rules and duties differently: that is the dilemma the Moral Machine illustrates.</p>'},
// Session 4
{id:'x-s4-rev',topic:'s4',type:'order',src:'course',title:'Industrial revolutions',q:'Put the industrial revolutions in chronological order.',items:['Mechanization, steam and water power','Mass production and electricity','Electronic and IT systems, automation','Cyber-physical systems']},
{id:'x-s4-revmatch',topic:'s4',type:'match',src:'course',title:'Revolutions and their markers',q:'Match each revolution with what the course associates with it.',
 pairs:[['1st','Britain, late 1700s; steam engineering'],['2nd','Electricity; assembly line'],['3rd','The transistor; computing and Internet'],['4th','Velocity, scope and impact; cyber-physical systems']]},
{id:'x-s4-web',topic:'s4',type:'order',src:'course',title:'Web eras',q:'Put the waves of the web in order.',items:['Websites broadcasting static information','Tools that enable more participation online','Users with more control and ownership over their data']},
{id:'x-s4-why',topic:'s4',type:'match',src:'course',title:'Why a digital revolution now?',q:'Match each driver with the technology family the slide links it to.',
 pairs:[['Data abundance','Data technologies'],['Unprecedented computing power','Cloud computing'],['Advanced algorithms','AI']],extra:['Blockchain']},
{id:'x-s4-cities',topic:'s4',type:'match',src:'course',title:'4IR game-changers for emerging cities',q:'Match each type of city with its definition (PwC).',
 pairs:[['Adaptive cities','Making the most of multifunctional space'],['Seamless cities','Connecting people and places'],['Empowered cities','Optimising urban energy systems'],['Living cities','Advancing circular resource management'],['Regenerative cities','Intelligently responding to catastrophic risk']]},
{id:'x-s4-case',topic:'s4',type:'order',src:'course',title:'Business case for a digital initiative',q:'A bank wants to launch a mobile savings app. Put the slide’s advice in a sensible working order.',
 items:['Link the operational changes to tangible business benefits (not a list of tech investments)','Run a small pilot','Evaluate the results and refine the approach','Work out the costs, the benefits and the timing of return before scaling']},
{id:'x-s4-openai',topic:'s4',type:'case',src:'course',title:'OpenAI and Kenyan data labellers',
 q:'<p>TIME: to build a filter that removes toxic content from ChatGPT, OpenAI sent tens of thousands of text snippets describing violence, hate speech and abuse to Sama, whose Kenyan labellers took home about $1.32–$2 per hour. Sama markets itself as an “ethical AI” company.</p>',
 parts:[{type:'mcq',q:'a. Which statement best describes the dilemma?',o:['Making AI safe for millions of users vs the pay, mental health and visibility of the workers who make it safe','Whether ChatGPT should be free or paid','Whether Kenya should regulate Microsoft','Whether GPT-3 had enough training data'],a:0},
  {type:'mcq',q:'b. Which is NOT a stakeholder named or implied in the article?',o:['The Kenyan labellers','Sama','OpenAI and its investors (Microsoft)','The Moral Machine team'],a:3},
  {type:'mcq',q:'c. “Out of sight is also out of mind” (Partnership on AI) points to…',o:['the hidden human labour behind AI’s efficiency','the energy use of data centres','the metaverse','open-source code'],a:0}],
 solution:'<p>Apply the five steps: facts (the filter, the wages, the content), dilemma (safety for users vs dignity of workers), stakeholders (labellers, Sama, OpenAI, Microsoft, users), options (pay more, psychological support, transparency on outsourcing, other partners), consequences. Utilitarian reasoning may justify the filter; the golden rule questions the conditions.</p>'},
{id:'x-s4-privacy',topic:'s4',type:'case',src:'course',title:'Process improvement or privacy problem? (self-assessed)',
 q:'<p>An insurer offers a connected box that scores your driving every month and can only lower your premium. A parent installs it on their 16-year-old’s car without telling them. The insurer considers selling the driving data to a car manufacturer. Give two arguments for and two against, and say which principle supports each.</p>',
 solution:'<p><b>For</b>: safer driving and lower premiums for cautious drivers (utilitarian: value for many); better process control for the insurer. <b>Against</b>: secretly tracking a teenager fails the golden rule (would you accept being watched without knowing?); selling the data without consent fails the categorical imperative (if every insurer sold driving data, trust would collapse) and the no-free lunch rule (the data belongs to the driver). The slides’ question: do all process improvements with employees or customers reduce privacy?</p>'},
// Session 5
{id:'x-s5-gsma',topic:'s5',type:'order',src:'course',title:'Data value chain (GSMA)',q:'Put the eight activities of the data value chain in order.',items:['Acquisition','Consent','Transmission','Validation','Processing','Analysis','Packaging','Selling']},
{id:'x-s5-stages',topic:'s5',type:'match',src:'course',title:'Data value chain stages',q:'Match each activity with its stage.',
 pairs:[['Acquisition','Generation'],['Consent','Generation'],['Transmission','Collection'],['Validation','Collection'],['Processing','Analytics'],['Analysis','Analytics'],['Packaging','Exchange'],['Selling','Exchange']]},
{id:'x-s5-o2a',topic:'s5',type:'order',src:'course',title:'From opinion to action',q:'Put the steps of the analytics value chain in order.',items:['Opinion','Data','Metrics','Analysis','Insight','Action']},
{id:'x-s5-o2amatch',topic:'s5',type:'match',src:'course',title:'Expense reports: from opinion to action',q:'Match each statement with its step.',
 pairs:[['People spend too much time on their expense reports','Opinion'],['Employees spent more than 100 000 hours on expense reporting last year','Data'],['Average user spends 10 hours/year in the system','Metrics'],['Heavy users spend less than 10 minutes/session','Analysis'],['A minor interface change would cut application time by 25% for heavy users','Insight'],['Interface change implemented','Action']]},
{id:'x-s5-sdg',topic:'s5',type:'match',src:'course',title:'Big data and the SDGs',q:'Match each data use with its SDG (UN Global Pulse).',
 pairs:[['Spending patterns on mobile phone services as proxy for income','No poverty'],['Crowdsourcing food prices listed online','Zero hunger'],['Sensors connected to water pumps','Clean water and sanitation'],['Smart metering of electricity, gas and water','Affordable and clean energy'],['Satellite imagery and crowd-sourced accounts to track deforestation','Climate action'],['Maritime vessel tracking reveals illegal fishing','Life below water']]},
{id:'x-s5-carbon',topic:'s5',type:'case',src:'course',title:'Carbon Creek Gardens',
 q:'<p>Mary Keeling’s nursery has grown so much that she lost track of her customers: Tootsie Swan, one of her best customers, stopped coming a year ago after poor service and Mary did not notice. “I’ve got all sorts of data in my sales database… how do I get it out?” One idea: a PDF report of last year’s top 50 customers, compared each week with a report of that week’s top buyers.</p>',
 parts:[{type:'mcq',q:'1. Which part of the data value chain is most problematic?',o:['Analytics (processing and analysis): the data exists but no insight comes out','Generation: there is no data','Exchange: data is sold','Collection: transmission fails'],a:0},
  {type:'mcq',q:'2. Is comparing PDF reports by hand a good solution?',o:['Not really: manual, static, slow, it only reveals lost customers late and does not scale','Yes: it is the best possible solution','Yes, because PDF is secure','No, because Mary has no data'],a:0},
  {type:'mcq',q:'3. Which suggestion best fits the course’s data technologies?',o:['Analyze the sales database automatically and alert Mary when a regular customer’s purchase frequency drops','Print more reports','Delete old customer data','Buy a new cash register'],a:0}],
 solution:'<p>The problem sits in the analytics stage: the sales database holds the purchase history, but nothing turns it into the insight “a regular customer has stopped buying”. An automated analysis (a query or a dashboard on purchase frequency, with an alert) moves Mary from opinion to action. No official answer key exists for this exercise.</p>'},
{id:'x-s5-broker',topic:'s5',type:'case',src:'course',title:'Unseen Cyberazzi (self-assessed)',
 q:'<p>A data broker identifies that your grandmother plays online hearts a lot, knows heavy hearts players are strong prospects for online gambling, and refers her data to a gambling vendor. She loses her savings. The broker says: “It’s not us, it’s our customer.” Is the broker’s behaviour ethical? Use the categorical imperative and utilitarianism.</p>',
 solution:'<p><b>Categorical imperative</b>: if every broker sold the data of vulnerable people to the businesses most likely to exploit them, society could not trust any data use: the action fails. <b>Utilitarianism</b>: the vendor’s gain is small compared with the harm to the grandmother and her family; the action does not maximize value for the greatest number. The “it’s our customer” defence fails: the broker made the referral knowing the likely consequence. The case also shows the opacity of brokers: people cannot see or correct their data.</p>'},
// Session 6
{id:'x-s6-svc',topic:'s6',type:'match',src:'course',title:'Cloud services',q:'Match each example with its service model.',
 pairs:[['Microsoft Office 365','SaaS'],['Google Drive','SaaS'],['Dropbox','SaaS'],['Microsoft Azure predefined development platforms','PaaS'],['AWS storage and computing capacity on its servers','IaaS']]},
{id:'x-s6-pros',topic:'s6',type:'match',src:'course',title:'Cloud: advantage or disadvantage?',q:'Classify each statement.',
 pairs:[['Installation and upgrades are handled by the cloud supplier','Advantage'],['Services can be leased for a limited time as needed','Advantage'],['Access from any computer connected to the Internet','Advantage'],['You are relying on a third party to provide the services','Disadvantage'],['Your information is stored on someone else’s computer','Disadvantage']]},
{id:'x-s6-green',topic:'s6',type:'order',src:'course',title:'Cloud and sustainability (Deloitte)',q:'Put Deloitte’s four points in the order of the slides.',items:['Cloud is the greener option','Smarter use of energy','Trouble is the boom in cloud computing means more energy is needed for data centres','The good news is major tech players have ambitious plans']},
{id:'x-s6-amazon',topic:'s6',type:'case',src:'course',title:'Amazon’s AI recruiting tool',
 q:'<p>Reuters: Amazon built AI to rate job applicants from one to five stars, trained on resumes submitted over ten years.</p>',
 parts:[{type:'mcq',q:'a. Why did the tool discriminate against women?',o:['Most resumes in the training data came from men, so the system learned that male candidates were preferable','A recruiter typed a rule against women','Women applied less','It analyzed photos'],a:0},
  {type:'mcq',q:'b. Which of these did the tool do?',o:['Penalize resumes containing “women’s” and downgrade graduates of two all-women’s colleges','Reject all candidates over 40','Favour candidates with coding skills','Ignore verbs'],a:0},
  {type:'mcq',q:'c. What happened in the end?',o:['Amazon disbanded the team; a watered-down version only removes duplicate profiles','Amazon sold the tool to Hilton','Amazon uses it for all hires','Amazon was fined under GDPR'],a:0}],
 solution:'<p>Machine learning reproduces the patterns of its training data. Editing out known terms did not guarantee fairness, and results were close to random, so the project was dropped. Ethical angles: fairness, explainability, and candidates who may never know AI was used.</p>'},
// Session 7
{id:'x-s7-lessons',topic:'s7',type:'order',src:'course',title:'Five lessons of digital transformation',q:'Put the five lessons in the order of the slides.',items:['Figure out your business strategy before you invest in anything','Leverage insiders','Design customer experience from the outside in','Recognize employees’ fear of being replaced','Bring Silicon Valley start-up culture inside']},
{id:'x-s7-road',topic:'s7',type:'match',src:'course',title:'McKinsey roadmap',q:'Match each step with its stage.',
 pairs:[['Secure senior management commitment','Defining value'],['Set clear, ambitious targets','Defining value'],['Start with lighthouse projects','Launch and acceleration'],['Nurture a digital culture','Launch and acceleration'],['Build capabilities','Scaling up'],['Adopt a new operating model','Scaling up']]},
{id:'x-s7-roadorder',topic:'s7',type:'order',src:'course',title:'Roadmap stages',q:'Put the stages of the digital transformation roadmap in order.',items:['Defining value','Launch and acceleration','Scaling up']},
{id:'x-s7-case',topic:'s7',type:'case',src:'practice',title:'A transformation that stalls (self-assessed)',
 q:'<p>A retailer buys an expensive AI platform before deciding what it wants to achieve, hires an outside team that ignores store managers, and never explains to cashiers what will happen to their jobs. A year later nothing works. Name three of the five lessons it ignored and one roadmap step it skipped.</p>',
 solution:'<p>Lessons ignored: <b>figure out your business strategy before you invest</b> (platform bought first); <b>leverage insiders</b> (store managers ignored); <b>recognize employees’ fear of being replaced</b> (cashiers left in the dark). Roadmap: stage 1 “defining value” was skipped (clear, ambitious targets; senior commitment), and no lighthouse project was run before scaling. The 70% failure rate comes from such flawed practices: technology magnifies them.</p>'},
// Session 8
{id:'x-s8-cube',topic:'s8',type:'match',src:'course',title:'McCumber Cube',q:'Match each element with its dimension of the cube.',
 pairs:[['Confidentiality','Desired goals'],['Integrity','Desired goals'],['Availability','Desired goals'],['Transmission','Information states'],['Storage','Information states'],['Processing','Information states'],['Technology','Safeguards'],['Policy and practices','Safeguards'],['Human factors','Safeguards']]},
// Session 9
{id:'x-s9-gov',topic:'s9',type:'match',src:'course',title:'Ethics, regulation, governance',q:'Complete the relationships of the Session 9 diagram.',
 pairs:[['Digital ethics shapes digital governance and regulation through…','Moral evaluation'],['Digital regulation shapes digital governance through…','Legal compliance']],extra:['Market competition']},
{id:'x-s9-oecd',topic:'s9',type:'match',src:'course',title:'Digital innovation and inclusiveness (OECD)',q:'Match each concept with its description.',
 pairs:[['Innovation hot spots','Innovation concentrated in dynamic urban areas such as Boston, London, Tel Aviv'],['Dual economy','A few highly innovative firms and a long tail of non-innovative ones'],['Winner-take-all dynamics','A small advantage lets firms seize a large part of the market'],['Under-representation of social groups','Human resources not used to their full potential']]},
{id:'x-s9-poster',topic:'s9',type:'mcq',src:'course',title:'Poster requirements',q:'Which elements must the poster contain? Select all.',o:['Name and logo of the hypothetical company','Value proposition, revenue model, use of digital technologies and distribution','Two ways digital technologies help or hurt environmental sustainability','Two ethical matters','A comparison with two real companies of the same sector','A full financial statement over five years'],a:[0,1,2,3,4],e:'Everything except financial statements (poster guidelines).'}];

/* ---------- mock exams ---------- */
/* ---------- v2 (24/11/2026): layered sheets, figures, glossary, generators and tools (CONVENTIONS.md section 16) ---------- */
const {FIG,STEPS,LAYERED,fmt}=Rev.h;
const U=Rev.u,n2=x=>fmt(U.round(x,2));
const OUT='<b>Outside the slides:</b>';
// boxes in a vertical flow (phone friendly)
function boxFlow(steps,cap,arrows=true){const W=360,bh=36,gap=16,H=steps.length*(bh+gap);let g='';
  steps.forEach((s,i)=>{const y=i*(bh+gap)+4;g+=`<rect x="20" y="${y}" width="320" height="${bh}" rx="6" style="fill:var(--ledger-soft);stroke:var(--ledger)"/><text x="180" y="${y+15}" text-anchor="middle" class="pp">${s.t}</text><text x="180" y="${y+29}" text-anchor="middle" class="pt" style="font-family:var(--f-body)">${s.d||''}</text>`;
    if(arrows&&i<steps.length-1)g+=`<line x1="180" y1="${y+bh}" x2="180" y2="${y+bh+gap-3}" style="stroke:var(--muted);stroke-width:1.5"/><path d="M175 ${y+bh+gap-8} L180 ${y+bh+gap-2} L185 ${y+bh+gap-8}" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>`});
  return `<figure class="fig"><svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="Flow">${g}</svg>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`}
// 2 × 2 matrix
function matrix2(xl,yl,cells,cap){const W=360,H=300,L=56,B=40,cw=(W-L-8)/2,ch=(H-B-8)/2;let g='';
  cells.forEach((c,k)=>{const col=k%2,row=Math.floor(k/2),x=L+col*cw,y=8+row*ch;g+=`<rect x="${x+2}" y="${y+2}" width="${cw-4}" height="${ch-4}" rx="6" style="fill:var(${c.c}-soft,var(--ledger-soft));stroke:var(${c.c})"/><text x="${x+cw/2}" y="${y+ch/2-6}" text-anchor="middle" class="pp">${c.t}</text><text x="${x+cw/2}" y="${y+ch/2+12}" text-anchor="middle" class="pt" style="font-family:var(--f-body)">${c.d}</text>`});
  g+=`<text x="${L+cw/2}" y="${H-22}" text-anchor="middle" class="pt">low</text><text x="${L+1.5*cw}" y="${H-22}" text-anchor="middle" class="pt">high</text><text x="${L+cw}" y="${H-6}" text-anchor="middle" class="pl">${xl}</text>`;
  g+=`<text x="${L-6}" y="${8+ch/2}" text-anchor="end" class="pt">high</text><text x="${L-6}" y="${8+1.5*ch}" text-anchor="end" class="pt">low</text><text x="12" y="${8+ch}" text-anchor="middle" class="pl" transform="rotate(-90 12 ${8+ch})">${yl}</text>`;
  return `<figure class="fig"><svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="Matrix">${g}</svg>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`}

/* ---------- v2: figures and step-by-step ---------- */
const FIG_INNOV=matrix2('technology newness','impact on the market',[{t:'Sustaining',d:'improve to keep the position',c:'--ledger'},{t:'Disruptive',d:'disrupts an existing market',c:'--bad'},{t:'Incremental',d:'gradual improvements',c:'--ok'},{t:'Radical',d:'breakthrough, new market',c:'--warn'}],'The innovation matrix of Session 1: read both axes before naming the type.');
const FIG_CHAIN=boxFlow([{t:'GENERATION',d:'acquisition · consent (capturers)'},{t:'COLLECTION',d:'transmission · validation (collectors)'},{t:'ANALYTICS',d:'processing · analysis (developers, enrichers)'},{t:'EXCHANGE',d:'packaging · selling (providers)'}],'The GSMA data value chain: data only creates value once it is analysed and used. Carbon Creek Gardens breaks at analytics.');
const FIG_CUBE=boxFlow([{t:'DESIRED GOALS',d:'confidentiality · integrity · availability'},{t:'INFORMATION STATES',d:'transmission · storage · processing'},{t:'SAFEGUARDS',d:'technology · policy and practices · human factors'}],'McCumber Cube: three dimensions of three elements each (3 × 3 × 3 = 27 cells to secure); technology is only one of the three safeguards.',false);
const STEPS_AMAZON=STEPS({title:'Five-step ethical analysis: Amazon’s AI recruiting tool',intro:'<p>Write each step yourself before opening it (Reuters reading, Session 6).</p>',
 steps:['<b>1. Facts</b>: from 2014 Amazon trained an AI to rate candidates 1 to 5 stars on 10 years of resumes, mostly from men; it penalized “women’s” and all-women colleges; the project was scrapped.','<b>2. Dilemma</b>: hiring efficiency vs fairness and non-discrimination; higher values: equal opportunity, transparency.','<b>3. Stakeholders</b>: applicants (especially women), recruiters, Amazon, the engineers, regulators, society.','<b>4. Options</b>: keep the tool as it is; edit it to be neutral to some terms (no guarantee); use it only as an aid with human review and audits; abandon it.','<b>5. Consequences</b>: keeping it entrenches bias (fails the Golden Rule and the categorical imperative); editing it hides other biases; abandoning it costs efficiency but protects fairness, as Amazon finally did.']});

/* ---------- v2: layered sheets ---------- */
const K={keep:true};
SHEETS.s1=LAYERED(SHEETS.s1,[K,
 {id:'s1-bpmn',ess:'<p>A business process = a <b>sequence of activities and decisions</b> for accomplishing a function. BPMN: circles start/stop, rounded rectangles activities, diamonds decisions, solid arrows process flow, dotted arrows data flow, cylinders repositories, <b>swimlanes</b> for roles.</p>',
  tryit:{q:'In BPMN, the “Order DB” where orders are stored is drawn as a…',o:['cylinder (repository)','diamond','bold circle'],a:0,e:'A repository is a data store.'}},
 {id:'s1-standard',ess:'<p>Standardize processes to <b>enforce policies, produce consistent results and reduce risk</b>. Improve them by organizing around outcomes, letting users of the outcome perform the process, merging information work into real work.</p>',
  tryit:{q:'Which is a reason to standardize a business process?',o:['Produce consistent results','Let every employee work their own way','Increase the number of steps'],a:0,e:'Also enforce policies and reduce risk.'}},
 {id:'s1-improve',ess:'<p>Digital technologies improve processes in five ways: improve an activity, improve the data flow among activities, improve control, use automation, improve procedures.</p>',
  tryit:{q:'Prescription data shared electronically with the pharmacy improves…',o:['the data flow among activities','an activity','procedures'],a:0,e:'Data moves between the clinic and the pharmacy.'}},
 {id:'s1-innov',ess:'<p>Two axes: <b>technology newness</b> and <b>impact on the market</b>. Incremental (low, low), sustaining (low tech, high impact), radical (high tech, new market), disruptive (high tech or new business model, disrupts an existing market).</p>',extra:FIG_INNOV,
  tryit:{q:'Video streaming that wiped out DVD rental stores is…',o:['disruptive','incremental','sustaining'],a:0,e:'It disrupted an existing market with technology and a new business model.'}}]);
SHEETS.s2=LAYERED(SHEETS.s2,[
 {id:'s2-is',ess:'<p>An <b>information system</b> is the whole that emerges when <b>people and IT interact</b> to do some work: not just the technology.</p>',
  tryit:{q:'Which is an information system in the course’s sense?',o:['Cashiers using a till and an order database to serve customers','A server alone in a cupboard','A spreadsheet file'],a:0,e:'People + IT + work.'}},
 {id:'s2-hwsw',ess:'<p>Hardware = physical components; software = instructions. The <b>OS</b> manages hardware, provides the user interface and a platform for developers; <b>applications</b> accomplish a specific goal.</p>',
  tryit:{q:'Android is…',o:['an operating system','an application','a programming language'],a:0,e:'Classic trap: Android, Windows, macOS, Linux are OSs.'}},
 {id:'s2-open',ess:'<p>Open-source software: the <b>source code is available</b> to view, modify and use freely; free, reviewable, community-built; but limited formal support. (The slide’s definition says “not available”: a slide error.)</p>',
  tryit:{q:'Main disadvantage of open-source software in the course?',o:['Technical support is not available like with traditional software','The code cannot be checked','It is always expensive'],a:0,e:'Advantages: free, code available, large community.'}},
 {id:'s2-erp',ess:'<p>ERP: a <b>single source of truth</b> (one consolidated database) and <b>integrated processes</b> across SCM, manufacturing, CRM, HR and accounting.</p>',
  tryit:{q:'The two key characteristics of an ERP are…',o:['a single source of truth and integrated processes','free licences and open code','cloud hosting and AI'],a:0,e:'Session 2.'}},
 {id:'s2-sust',ess:'<p>Sustainability = <b>people, planet, profit</b>. BCG levers: digitized operations, digital products and services, cloud/IoT/blockchain for traceability, AI and analytics, data sharing and ecosystems.</p>',
  tryit:{q:'Blockchain tracing a product from producer to retailer uses which lever?',o:['Cloud, IoT and blockchain (value-chain transparency)','Digitized operations','Data sharing and ecosystems'],a:0,e:'It tracks impacts across the value chain.'}}]);
SHEETS.s3=LAYERED(SHEETS.s3,[
 {id:'s3-erp',ess:'<p>ERP projects fail on <b>decisions</b> (vendor, gap analysis, configuration, data, legacy migration) and on <b>people</b> (management oversells and moves on, teams stop collaborating, users “feel pain and get no gain”).</p>',
  tryit:{q:'“Users feel pain and get no gain” is a…',o:['people challenge','decision-making challenge','technical bug'],a:0,e:'Individual users see costs and no benefit, so they resist.'}},
 {id:'s3-ethics',ess:'<p>Six principles: Golden Rule, categorical imperative (what if everyone did it?), slippery slope (what if repeated?), utilitarian (greatest value for the greatest number), risk aversion (least harm), no-free-lunch (assume it is owned). Analysis: facts → dilemma → stakeholders → options → consequences.</p>',extra:STEPS_AMAZON,
  tryit:{q:'“Choose the action that produces the least harm” is the…',o:['risk aversion principle','utilitarian principle','Golden Rule'],a:0,e:'Utilitarian = greatest value for the greatest number.'}},
 {id:'s3-bm',ess:'<p>Digital business models: e-commerce/marketplace, freemium, peer-to-peer two-sided marketplace, ad-supported, subscription, hidden revenue generation, open source. Analyse them with <b>VTDF</b>: value, tech, distribution, financial model.</p>',
  tryit:{q:'Spotify’s free tier with ads plus a paid premium tier is…',o:['freemium','open source','peer-to-peer'],a:0,e:'Premium subscriptions brought 89.83% of revenues in 2017.'}}]);
SHEETS.s4=LAYERED(SHEETS.s4,[
 {id:'s4-why',ess:'<p>Why now: <b>data abundance</b>, <b>unprecedented computing power</b> (cloud), <b>ubiquitous connectivity</b>, <b>advanced algorithms</b> (AI).</p>',
  tryit:{q:'Which is NOT one of the four drivers of the digital revolution?',o:['Cheaper oil','Data abundance','Ubiquitous connectivity','Advanced algorithms'],a:0,e:'Data, computing power, connectivity, algorithms.'}},
 {id:'s4-revs',ess:'<p>1.0 mechanization and steam (Britain, late 1700s) → 2.0 electricity and mass production → 3.0 electronics, IT, automation (transistor) → 4.0 <b>cyber-physical systems</b> (velocity, scope, impact).</p>',
  tryit:{q:'The Third Industrial Revolution was triggered by…',o:['the transistor','electricity','the steam engine'],a:0,e:'Electronics and IT systems.'}},
 {id:'s4-cities',ess:'<p>PwC “4IR for the Earth”: adaptive, seamless, empowered, living and regenerative cities, using 4IR technologies for sustainable urban life.</p>',
  tryit:{q:'Optimising urban energy systems describes…',o:['empowered cities','seamless cities','adaptive cities'],a:0,e:'Seamless = connecting people and places; adaptive = multifunctional space.'}},
 {id:'s4-web3',ess:'<p>Web 1.0 broadcast static information; Web 2.0 enabled participation; Web3 gives users <b>control and ownership of their data</b>. Distributed ledgers remove the need to trust other human actors; AR merges real and virtual, VR creates a new environment.</p>',
  tryit:{q:'Distributed ledger technology brings transactions…',o:['no need to trust other human actors','a central server','free electricity'],a:0,e:'Blocks are stored on each miner’s computer.'}},
 {id:'s4-privacy',ess:'<p>Process improvements can become privacy problems: connected-car insurance and vehicle tracking improve pricing and safety but expose drivers’ data and behaviour; hidden labour behind AI (OpenAI/Sama).</p>',
  tryit:{q:'A parent secretly installs a driving tracker in a teenager’s car. Which principle questions it first?',o:['The Golden Rule (would you accept being tracked secretly?)','The no-free-lunch rule','Risk aversion'],a:0,e:'Treat others as you would want to be treated.'}},
 {id:'s4-init',ess:'<p>Digital initiatives are <b>redesigned with digital</b> or <b>born digital</b>. Business case: not a list of tech investments; link changes to tangible benefits; run small pilots; work out costs, benefits and timing of return.</p>',
  tryit:{q:'Online banking added to a traditional bank is…',o:['redesigned with digital','born digital'],a:0,e:'A crypto bank would be born digital.'}}]);
SHEETS.s5=LAYERED(SHEETS.s5,[
 {id:'s5-bigdata',ess:'<p><b>Big data makes AI possible</b>; data governance and GDPR frame how personal data is collected and used.</p>',
  tryit:{q:'Relationship between big data and AI in the course?',o:['Big data makes AI possible','AI makes big data useless','They are unrelated'],a:0,e:'In-class question, answer on the slide.'}},
 {id:'s5-chain',ess:'<p>GSMA data value chain: <b>generation</b> (acquisition, consent) → <b>collection</b> (transmission, validation) → <b>analytics</b> (processing, analysis) → <b>exchange</b> (packaging, selling). From opinion to action: opinion → data → metrics → analysis → action.</p>',extra:FIG_CHAIN,
  tryit:{q:'Carbon Creek Gardens has a full sales database but Mary never sees who stopped buying. Weak stage?',o:['Analytics','Generation','Collection'],a:0,e:'The data exists; nobody processes and analyses it.'}},
 {id:'s5-sdg',ess:'<p>Data helps the SDGs (UN Global Pulse): phone spending as a proxy for income, financial transactions by gender, postal traffic for growth. But crypto-mining uses as much electricity as countries.</p>',
  tryit:{q:'Mobile phone spending patterns used to estimate income support which SDG?',o:['1 No poverty','5 Gender equality','13 Climate action'],a:0,e:'Proxy indicators of income.'}},
 {id:'s5-brokers',ess:'<p>Data brokers aggregate data from public records, retailers, cookies and social media and sell profiles. Judge their uses with the categorical imperative and utilitarianism (junk food to over-eaters, gambling offers to a grandmother).</p>',
  tryit:{q:'“If you are willing to publish your behaviour on Facebook, it conforms.” This is a test of…',o:['the categorical imperative','the slippery slope','risk aversion'],a:0,e:'Unseen Cyberazzi reading.'}}]);
SHEETS.s6=LAYERED(SHEETS.s6,[
 {id:'s6-cloud',ess:'<p>Cloud = services and programs on the internet rather than on your computer. <b>Public, private, hybrid</b>; <b>SaaS</b> (applications: Office 365), <b>PaaS</b> (development platforms: Azure), <b>IaaS</b> (storage and computing: AWS).</p>',
  tryit:{q:'Renting raw storage and computing capacity from AWS is…',o:['IaaS','SaaS','PaaS'],a:0,e:'Infrastructure as a Service.'}},
 {id:'s6-green',ess:'<p>Deloitte: the cloud is greener and uses energy more smartly, but the boom means more data-centre energy; big tech players have ambitious plans; tools like Microsoft Cloud for Sustainability help manage impacts.</p>',
  tryit:{q:'Main environmental worry about the cloud boom?',o:['Rising energy needs of data centres','Less paper','Faster internet'],a:0,e:'Point three of the Deloitte article.'}},
 {id:'s6-amazon',ess:'<p>Amazon’s recruiting AI learned from 10 years of mostly male resumes and penalized women: <b>biased data gives biased models</b>; fairness, interpretability and explainability matter.</p>',
  tryit:{q:'Why did Amazon’s tool discriminate against women?',o:['It was trained on 10 years of resumes, mostly from men','Engineers programmed it to','Women applied less'],a:0,e:'It reproduced the pattern in its training data.'}}]);
SHEETS.s7=LAYERED(SHEETS.s7,[
 {id:'s7-def',ess:'<p>Innovation is the spark; <b>transformation</b> is the implementation that follows. The relationship is <b>mutually causal</b>.</p>',
  tryit:{q:'The relationship between digital innovation and digital transformation is…',o:['mutually causal','one-way: innovation always comes first','none'],a:0,e:'Each can lead to the other.'}},
 {id:'s7-fail',ess:'<p><b>70%</b> of digital transformations miss their goals: with the wrong mindset and flawed practices, digital “magnifies the flaws”. Five lessons: strategy first, leverage insiders, design from the outside in, recognize fear of replacement, bring start-up culture inside.</p>',
  tryit:{q:'Lesson 1 of the course on digital transformation?',o:['Figure out your business strategy before you invest','Buy the newest technology first','Replace all insiders'],a:0,e:'It is not (just) about technology.'}},
 {id:'s7-road',ess:'<p>McKinsey roadmap: <b>1. defining value</b> (commitment, targets, investment) → <b>2. launch and acceleration</b> (lighthouse projects, launch team, agile organization…) → <b>3. scaling up</b>.</p>',
  tryit:{q:'Starting with lighthouse projects belongs to which stage?',o:['Launch and acceleration','Defining value','Scaling up'],a:0,e:'Step 4 of the roadmap.'}},K]);
SHEETS.s8=LAYERED(SHEETS.s8,[
 {id:'s8-cube',ess:'<p>McCumber Cube: <b>goals</b> (confidentiality, integrity, availability) × <b>states</b> (transmission, storage, processing) × <b>safeguards</b> (technology, policy and practices, human factors). Security is not only technology.</p>',extra:FIG_CUBE,
  tryit:{q:'Training staff to spot phishing emails is which safeguard?',o:['Human factors','Technology','Policy and practices'],a:0,e:'People are a safeguard, not only tools.'}},K]);
SHEETS.s9=LAYERED(SHEETS.s9,[
 {id:'s9-ethreg',ess:'<p><b>Digital ethics</b> shapes governance and regulation through moral evaluation; <b>digital regulation</b> shapes governance through legal compliance; <b>digital governance</b> sits where both meet.</p>',
  tryit:{q:'Digital regulation shapes digital governance through…',o:['legal compliance','moral evaluation','market prices'],a:0,e:'Ethics works through moral evaluation.'}},K,
 {id:'s9-div',ess:'<p>Diversity and inclusion is one of tech’s biggest challenges: homogeneous teams miss ideas. The two biggest barriers for women in tech: <b>lack of mentors</b> and <b>lack of female role models</b>.</p>',
  tryit:{q:'The two biggest barriers for women in tech (course)?',o:['Lack of mentors and lack of female role models','Lack of computers and of degrees','Salaries and holidays'],a:0,e:'Session 9.'}},
 {id:'s9-incl',ess:'<p>OECD: innovation <b>hot spots</b>, a <b>dual economy</b> (a few innovative firms, a long tail of others), and <b>winner-take-all</b> dynamics widen gaps; under-represented groups waste talent.</p>',
  tryit:{q:'A small advantage letting a firm capture most of the market is…',o:['a winner-take-all dynamic','a dual economy','an innovation hot spot'],a:0,e:'It widens the gap between the best and the rest.'}},K]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Business process','A sequence of activities and decisions for accomplishing a function.','s1'],
['BPMN','Business Process Model and Notation: the standard symbols for drawing processes.','s1'],
['Swimlane','A lane of a process diagram grouping the activities of one role or actor.','s1',['swimlanes']],
['Innovation','Turning ideas into value on the market (vs invention: creating something new).','s1'],
['Incremental innovation','Gradual, continuous improvements on existing products and services.','s1'],
['Sustaining innovation','A significant improvement that sustains the position in an existing market.','s1'],
['Disruptive innovation','Technology or a new business model that disrupts an existing market.','s1'],
['Radical innovation','A technological breakthrough that transforms industries, often creating a new market.','s1'],
['Information system','The whole that emerges where people and IT interact to do some work.','s2',['information systems']],
['Operating system','Software managing the hardware, the user interface and a platform for applications.','s2',['OS']],
['Application software','Software set to accomplish a specific goal (apps).','s2'],
['Open-source software','Software whose source code is available to view, modify and use freely.','s2',['open source']],
['ERP','Enterprise Resource Planning: one database and integrated processes across the company.','s2'],
['Single source of truth','One consolidated database used by every function (ERP).','s2'],
['Virtualization','Using software to simulate a computer or another device.','s2'],
['Killer app','An application so essential that people buy a device to run it.','s2'],
['Gap analysis','Deciding which “like to dos” an ERP will cover and what to do with the gaps.','s3'],
['Golden Rule','Do unto others as you would have them do unto you.','s3'],
['Categorical imperative','If an action is not right for everyone, it is not right for anyone.','s3'],
['Slippery slope rule','If an action cannot be taken repeatedly, it is not right at all.','s3'],
['Utilitarian principle','Take the action that achieves the greatest value for the greatest number.','s3'],
['Risk aversion principle','Take the action that produces the least harm or potential cost.','s3'],
['No-free-lunch rule','Assume everything is owned by someone who wants compensation.','s3'],
['Freemium','A free basic tier funded by a paid premium tier (Spotify).','s3'],
['Two-sided marketplace','A platform matching two groups of users and charging fees (Uber, Airbnb).','s3'],
['Hidden revenue generation','Users get the service free; the platform sells their attention and data (Google, Meta).','s3'],
['VTDF','Value, tech, distribution and financial model: the four components of a digital business model.','s3'],
['Dynamic pricing','Several price points by segment, peak time or consumption, instead of one static price.','s3'],
['Industry 4.0','Digitization of value chains, of offerings and of business models; cyber-physical systems.','s4',['Fourth Industrial Revolution','4IR']],
['Cyber-physical systems','Physical processes controlled and monitored by computer-based algorithms.','s4'],
['Web3','The internet where users have more control and ownership of their data.','s4',['Web 3.0']],
['Distributed ledger','A record of transactions stored on many computers, with no central authority.','s4',['blockchain']],
['Metaverse','Shared virtual environments; interoperability lets products move between platforms.','s4'],
['Augmented reality','Digital information overlaid on the real world.','s4'],
['Born digital','An initiative built digital from the start (crypto banking).','s4'],
['Data governance','Rules and roles framing how data is collected, stored and used.','s5'],
['GDPR','The EU General Data Protection Regulation on personal data.','s5'],
['Data value chain','Generation → collection → analytics → exchange (GSMA).','s5'],
['Data lake','A store of raw, trusted and service data feeding analytics and machine learning.','s5'],
['Data broker','A company aggregating consumer data from many sources and selling it.','s5',['data brokers']],
['Cloud computing','Using services and programs on the internet rather than on your own computer.','s6',['cloud']],
['SaaS','Software as a Service: applications delivered through a browser.','s6'],
['PaaS','Platform as a Service: rented development platforms.','s6'],
['IaaS','Infrastructure as a Service: rented storage and computing capacity.','s6'],
['Private cloud','Server space sectioned off by a provider for one organization.','s6'],
['Algorithmic bias','Systematic unfairness learned by a model from biased data (Amazon recruiting).','s6'],
['Digital transformation','Implementing digital innovation across the organization.','s7'],
['Lighthouse project','A visible pilot project launching a transformation.','s7'],
['McCumber Cube','Security framework: goals × information states × safeguards.','s8'],
['CIA triad','Confidentiality, integrity, availability: the security goals.','s8',['confidentiality','integrity','availability']],
['Digital governance','Where digital ethics and digital regulation meet.','s9'],
['Dual economy','A few highly innovative firms and a long tail of non-innovative ones (OECD).','s9'],
['Winner-take-all','A small advantage lets a firm seize a large part of the market.','s9']
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators ---------- */
const INNOV=['Incremental','Sustaining','Radical','Disruptive'];
// [innovation, tech newness high?, market impact high?, comment] (examples chosen by the site)
const INNOV_BANK=[['A new flavour of crisps',0,0,'small change, no market shift'],['This year’s phone with a slightly better camera',0,0,'continuous improvement'],['A razor brand adds a fifth blade to defend its flagship',0,1,'improvement to keep its position in an existing market'],['A carmaker’s much more fuel-efficient version of its best-seller',0,1,'significant improvement, same market'],['Video streaming replacing DVD rental stores',1,1,'technology + business model that disrupted an existing market'],['App-based ride hailing against taxis',1,1,'new business model disrupting an existing market'],['Lab-grown meat creating a new market',1,0,'technological breakthrough creating a new market'],['A quantum-computing breakthrough',1,0,'breakthrough technology, new uses'],['mRNA vaccine technology',1,0,'breakthrough that transforms an industry']];
const PRIN=['The Golden Rule','The Categorical Imperative','The Slippery Slope Rule','The Utilitarian Principle','The Risk Aversion Principle','The No-free Lunch Rule'];
const PRIN_BANK=[['“Would I accept being tracked like this if I were the customer?”',0],['“If every company sold its users’ data, could society trust any app?”',1],['“Reading one employee email today will lead to reading all of them tomorrow.”',2],['“This choice gives the greatest benefit to the greatest number of users.”',3],['“Avoid the option with even a tiny chance of a catastrophic data leak.”',4],['“That code on GitHub was written by someone who may want to be paid or credited.”',5],['“Treat our suppliers’ data as we want ours to be treated.”',0],['“If everyone copied this, the whole market would collapse.”',1],['“Choose the plan that causes the least potential harm.”',4],['“Assume the photos online belong to someone unless stated otherwise.”',5]];
const CUBE=[['Confidentiality','Integrity','Availability'],['Transmission','Storage','Processing'],['Technology','Policy and practices','Human factors']];
const CUBE_BANK=[['A hacker reads customer emails sent over public Wi-Fi; the company deploys encryption.',0,0,0],['A virus alters salaries in the payroll database; staff must log every change by procedure.',1,1,1],['A server crash makes the shop’s website unreachable; engineers add a backup server.',2,2,0],['Employees share passwords on sticky notes; the firm trains them.',0,1,2],['Orders are modified while being processed; access rules are rewritten.',1,2,1],['A phishing email tricks an accountant into a transfer; awareness training follows.',1,0,2],['Medical files stored in the cloud leak; the hospital adds encryption at rest.',0,1,0]];
const GENS=[
{kind:'gen',id:'g-s1-innov',topic:'s1',title:'Innovation matrix',blurb:'Technology newness × market impact → type of innovation',
 gen:u=>({b:u.pick(INNOV_BANK)}),q:v=>`<p>${v.b[0]}.</p><p class="hint">Examples chosen by the site.</p>`,
 parts:[{label:'Technology newness',type:'choice',o:['Low','High'],a:v=>v.b[1]},{label:'Impact on the (existing) market',type:'choice',o:['Low','High'],a:v=>v.b[2]},{label:'Type of innovation',type:'choice',o:INNOV,a:v=>v.b[1]*2+v.b[2]}],
 steps:v=>[`Technology: <b>${v.b[1]?'high':'low'}</b> newness. Market: <b>${v.b[2]?'high':'low'}</b> impact on an existing market.`,`Matrix: low/low incremental · low tech, high impact sustaining · high tech, new market radical · high tech or new model disrupting a market disruptive → <b>${INNOV[v.b[1]*2+v.b[2]]}</b> (${v.b[3]}).`]},
{kind:'gen',id:'g-s3-principle',topic:'s3',title:'Which ethical principle?',blurb:'Recognize the six candidate principles (Laudon and Laudon)',
 gen:u=>({b:u.pick(PRIN_BANK)}),q:v=>`<p>A manager says: ${v.b[0]}</p>`,parts:[{label:'Principle',type:'choice',o:PRIN,a:v=>v.b[1]}],
 steps:v=>[`Key words: ${['putting yourself in the other’s place','“if everyone did it”','“repeated, leads to worse”','“greatest number”','“least harm”, “catastrophic”','“owned by someone”, “paid or credited”'][v.b[1]]}.`,`→ <b>${PRIN[v.b[1]]}</b>: ${PRINCIPLES[v.b[1]][1]}`]},
{kind:'gen',id:'g-s8-cube',topic:'s8',title:'McCumber Cube',blurb:'Goal, information state and safeguard of a security incident',
 gen:u=>({b:u.pick(CUBE_BANK)}),q:v=>`<p>${v.b[0]}</p>`,
 parts:[{label:'Security goal at stake',type:'choice',o:CUBE[0],a:v=>v.b[1]},{label:'State of the information',type:'choice',o:CUBE[1],a:v=>v.b[2]},{label:'Safeguard used in response',type:'choice',o:CUBE[2],a:v=>v.b[3]}],
 steps:v=>[`Goal: ${['data seen by someone unauthorized','data changed without permission','data or service not reachable'][v.b[1]]} → <b>${CUBE[0][v.b[1]]}</b>.`,`State: ${['moving over a network','stored','being processed'][v.b[2]]} → <b>${CUBE[1][v.b[2]]}</b>.`,`Safeguard: <b>${CUBE[2][v.b[3]]}</b>. Technology is only one of the three safeguards.`]},
{kind:'gen',id:'g-s3-revenue',topic:'s3',title:'Revenue shares of a digital business model',blurb:'Shares of revenue, growth and revenue per user (Spotify, Alphabet, Meta style)',levels:['Revenue shares','Growth and revenue per user'],
 gen:(u,lv)=>{const a=u.step(100,5000,10),b=u.step(100,5000,10),c=u.step(0,2000,10),users0=u.step(20,300,5),g=u.pick([10,20,25,40,60,80]),ug=u.pick([20,30,50,70,100]);return {lv,a,b,c,users0,g,ug,name:u.pick(['StreamCo','TuneUp','Vidly','Podster'])}},
 valid:v=>v.a!==v.b,
 q:v=>v.lv===0?`<p>${v.name} earned €${fmt(v.a)} million from premium subscriptions, €${fmt(v.b)} million from advertising and €${fmt(v.c)} million from other sources.</p>`:`<p>${v.name}’s revenue grew by ${v.g}% while its number of users grew by ${v.ug}% (from ${v.users0} million).</p>`,
 parts:v=>v.lv===0?[{label:'Share of subscriptions (%)',answer:v=>v.a/(v.a+v.b+v.c)*100,tol:0.05},{label:'Share of advertising (%)',answer:v=>v.b/(v.a+v.b+v.c)*100,tol:0.05},{label:'Main revenue model',type:'choice',o:['Subscription','Ad-supported'],a:v=>v.a>v.b?0:1}]
  :[{label:'Users after the growth (millions)',answer:v=>v.users0*(1+v.ug/100),tol:0.05},{label:'Change in revenue per user (%)',answer:v=>((1+v.g/100)/(1+v.ug/100)-1)*100,tol:0.05}],
 steps:v=>v.lv===0?[`Total = ${fmt(v.a)} + ${fmt(v.b)} + ${fmt(v.c)} = ${fmt(v.a+v.b+v.c)} million.`,`Subscriptions ${fmt(v.a)} / ${fmt(v.a+v.b+v.c)} = <b>${n2(v.a/(v.a+v.b+v.c)*100)}%</b>; advertising <b>${n2(v.b/(v.a+v.b+v.c)*100)}%</b> (Spotify 2017: 89.83% premium, 10.17% ads).`,`The larger share shows the real model: <b>${v.a>v.b?'subscription':'ad-supported'}</b>.`]
  :[`Users: ${v.users0} × ${1+v.ug/100} = <b>${n2(v.users0*(1+v.ug/100))}</b> million.`,`Revenue per user changes by (1 + ${v.g/100}) / (1 + ${v.ug/100}) − 1 = <b>${n2(((1+v.g/100)/(1+v.ug/100)-1)*100)}%</b>: ${v.ug>v.g?'users grow faster than revenue, so revenue per user falls (Spotify 2015–2017: 7.06 → 5.24 €).':'revenue grows faster than users.'}`]}
];

/* ---------- v2: tools ---------- */
const TOOLS=[
{kind:'tree',id:'tr-s1-innov',topic:'s1',title:'Which type of innovation?',blurb:'Read the two axes of the innovation matrix',start:'q1',
 nodes:{q1:{q:'Is the technology new (a breakthrough or a new business model enabled by technology)?',o:[{l:'No, existing technology',to:'q2'},{l:'Yes',to:'q3'}]},
  q2:{q:'Does the change have a high impact on the market (a significant improvement to keep the position)?',o:[{l:'No, small continuous changes',to:'r_inc'},{l:'Yes',to:'r_sus'}]},
  q3:{q:'Does it disrupt an existing market, or does it create a new one?',o:[{l:'Disrupts an existing market',to:'r_dis'},{l:'Creates a new market / transforms industries',to:'r_rad'}]},
  r_inc:{end:'Incremental innovation'},r_sus:{end:'Sustaining innovation'},r_dis:{end:'Disruptive innovation'},r_rad:{end:'Radical innovation'}},
 gen:u=>{const b=u.pick(INNOV_BANK);return {text:b[0],path:b[1]?{q1:1,q3:b[2]?0:1}:{q1:0,q2:b[2]},why:b[3]}}},
{kind:'steps',id:'st-s3-ethics',topic:'s3',title:'Five-step ethical analysis, step by step',blurb:'The Amazon recruiting AI case',intro:'<p>Write each step yourself before opening it (Reuters reading, Session 6).</p>',
 steps:['<b>1. Facts</b>: from 2014 Amazon trained an AI to rate candidates 1 to 5 stars on 10 years of resumes, mostly from men; it penalized “women’s” and all-women colleges; the project was scrapped.','<b>2. Dilemma</b>: hiring efficiency vs fairness and non-discrimination; higher values: equal opportunity, transparency.','<b>3. Stakeholders</b>: applicants (especially women), recruiters, Amazon, the engineers, regulators, society.','<b>4. Options</b>: keep the tool; edit it to be neutral to some terms (no guarantee); use it only as an aid with human review and audits; abandon it.','<b>5. Consequences</b>: keeping it entrenches bias (fails the Golden Rule and the categorical imperative); editing hides other biases; abandoning costs efficiency but protects fairness.']}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-s2-sortsw',topic:'s2',type:'sort',src:'course',title:'Operating system or application?',q:'Sort each software.',cats:['Operating system','Application software'],
 items:[['Android','Operating system'],['Windows','Operating system'],['Linux','Operating system'],['macOS','Operating system'],['A word processor','Application software'],['A spreadsheet','Application software'],['A web browser','Application software'],['A music streaming app','Application software']]},
{id:'x-s6-sortcloud',topic:'s6',type:'sort',src:'course',title:'SaaS, PaaS or IaaS?',q:'Sort each service.',cats:['SaaS','PaaS','IaaS'],
 items:[['Microsoft Office 365','SaaS'],['Google Drive','SaaS'],['Dropbox','SaaS'],['Microsoft Azure development platform','PaaS'],['A rented environment to build and test apps','PaaS'],['Amazon Web Services storage and servers','IaaS'],['Renting virtual machines by the hour','IaaS']]},
{id:'x-s3-sortbm',topic:'s3',type:'sort',src:'course',title:'Digital business models',q:'Sort each company (FourWeekMBA map of the slides).',cats:['E-commerce / marketplace','Freemium','Two-sided marketplace','Subscription','Open source'],
 items:[['Zalando','E-commerce / marketplace'],['Alibaba','E-commerce / marketplace'],['Spotify','Freemium'],['Mailchimp','Freemium'],['Airbnb','Two-sided marketplace'],['HyreCar','Two-sided marketplace'],['Netflix','Subscription'],['Salesforce','Subscription'],['Red Hat','Open source']]},
{id:'x-s4-sortrev',topic:'s4',type:'sort',src:'course',title:'Which industrial revolution?',q:'Sort each element.',cats:['1.0','2.0','3.0','4.0'],
 items:[['Steam engine','1.0'],['Britain, late 1700s','1.0'],['Electricity','2.0'],['Assembly line','2.0'],['Transistor','3.0'],['Computing and the Internet','3.0'],['Cyber-physical systems','4.0'],['Velocity, scope and impact','4.0']]},
{id:'x-s5-sortchain',topic:'s5',type:'sort',src:'course',title:'Data value chain stages',q:'Sort each activity (GSMA).',cats:['Generation','Collection','Analytics','Exchange'],
 items:[['Acquisition','Generation'],['Consent','Generation'],['Transmission','Collection'],['Validation','Collection'],['Processing','Analytics'],['Analysis','Analytics'],['Packaging','Exchange'],['Selling','Exchange']]},
{id:'x-s3-sorterp',topic:'s3',type:'sort',src:'course',title:'ERP implementation challenges',q:'Decision-making or people challenge?',cats:['Decision-making challenge','People challenge'],
 items:[['ERP vendor selection','Decision-making challenge'],['Gap analysis','Decision-making challenge'],['Data structure and format issues','Decision-making challenge'],['Moving from legacy systems','Decision-making challenge'],['Management oversells and moves on too early','People challenge'],['Team collaboration breaks down','People challenge'],['Users feel pain and get no gain','People challenge']]}
);
const QV2=(id,topic,q,o,e)=>({id,topic,src:'practice',q,o,a:0,e});
QUIZ.push(
QV2('q105','s1','An innovation with low technology newness but a high impact on its market is…',['sustaining','radical','disruptive','incremental'],'It improves significantly to keep the position.'),
QV2('q106','s1','What distinguishes radical from disruptive innovation in the matrix?',['Radical creates a new market through a breakthrough; disruptive upsets an existing market','Radical is cheaper','Disruptive needs no technology at all','They are synonyms'],'Read both axes.'),
QV2('q107','s2','Why is an information system more than its technology?',['It emerges where people and IT interact to do work','It only means hardware','It excludes users','It is a database'],'Session 2 definition.'),
QV2('q108','s3','Why do ERP projects often fail even when the software works?',['People challenges: management oversells, teams stop collaborating, users see no gain','ERPs cannot store data','Vendors refuse to sell','ERPs have no database'],'Decision-making and people challenges.'),
QV2('q109','s3','Why are Google and Meta free for users?',['Advertisers pay for users’ attention and data (hidden revenue generation)','They are open source','Governments pay them','They are subscriptions'],'Meta: 97.4% of 2021 revenues from advertising.'),
QV2('q110','s3','Amazon earns most revenue from e-commerce, but most operating profit from…',['AWS (74% of 2021 operating profit)','advertising','Prime Video','physical stores'],'Revenue share is not profit share.'),
QV2('q111','s5','In the data value chain, “consent” belongs to…',['generation','analytics','exchange','collection'],'Acquisition and consent.'),
QV2('q112','s6','Why can an AI trained on past decisions be unfair?',['It learns the biases contained in its training data','It cannot compute','It always favours women','It is open source'],'Amazon recruiting tool.'),
QV2('q113','s7','Why do 70% of digital transformations miss their goals?',['Wrong mindset and flawed practices: digital magnifies the flaws','Technology is too cheap','Customers refuse apps','Laws forbid them'],'It is not (just) about technology.'),
QV2('q114','s8','In the McCumber Cube, “policy and practices” is a…',['safeguard','security goal','information state','threat'],'Safeguards: technology, policy and practices, human factors.'),
QV2('q115','s8','A website made unreachable by an attack affects which goal?',['Availability','Confidentiality','Integrity','Processing'],'CIA triad.'),
QV2('q116','s9','Digital ethics shapes digital governance through…',['moral evaluation','legal compliance','taxes','advertising'],'Regulation works through legal compliance.')
);
CARDS.push(
{id:'c44',topic:'s1',f:'Innovation matrix (two axes)',b:'technology newness × market impact → incremental, sustaining, radical, disruptive'},
{id:'c45',topic:'s3',f:'Six ethical principles (key words)',b:'Golden Rule: in their place · categorical: everyone · slippery slope: repeated · utilitarian: greatest number · risk aversion: least harm · no free lunch: owned'},
{id:'c46',topic:'s3',f:'Revenue share vs profit share',b:'Amazon: e-commerce = most revenue, AWS = 74% of operating profit'},
{id:'c47',topic:'s5',f:'GSMA data value chain',b:'generation (acquisition, consent) → collection (transmission, validation) → analytics (processing, analysis) → exchange (packaging, selling)'},
{id:'c48',topic:'s6',f:'Why AI can discriminate',b:'it learns from biased training data (Amazon: 10 years of mostly male resumes)'},
{id:'c49',topic:'s7',f:'Why transformations fail (70%)',b:'wrong mindset + flawed practices: digital magnifies the flaws'},
{id:'c50',topic:'s8',f:'McCumber Cube',b:'goals (C, I, A) × states (transmission, storage, processing) × safeguards (technology, policy, human factors)'},
{id:'c51',topic:'s9',f:'Ethics, regulation, governance',b:'ethics → moral evaluation · regulation → legal compliance · governance where both meet'}
);

const MC=(id,topic,q,o,a,solution)=>({id,topic,type:'mcq',pts:0.5,q,o,a,solution});
const MOCK_INTRO=`<div class="panel"><h4>Instructions</h4><ul>
<li>1 h 30, individual, closed book (the format of the final is not published: see the Overview).</li>
<li><b>Part A</b>: 24 multiple-choice questions, one right answer each, 0.5 point, no penalty on this site.</li>
<li><b>Part B</b>: one auto-marked exercise (matching / ordering, 3 points) and one short case analysis written in your own words (5 points), marked after hand-in with the grid.</li>
<li>Each mock covers Sessions 1 to 9.</li></ul></div>`;
const PART_A={title:'Part A · Multiple-choice questions (12 points)',intro:'<p>One right answer per question. 0.5 point each.</p>'};
const MCALC='Not needed.';

/* Mock 1: foundation (recall of the slides) */
const M1_A=[
MC('a1','s1','In a BPMN diagram, what does a cylinder represent?',['A repository (data store)','A decision','The start of the process','An annotation'],0,'<p>Cylinder = repository (Order DB). Diamond = decision; light circle = start; bracket = annotation.</p>'),
MC('a2','s1','Which is NOT one of the reasons the slide gives for standardizing business processes?',['Enforce policies','Produce consistent results','Reduce risk','Increase the number of exceptions'],3,'<p>The three reasons: enforce policies, produce consistent results, reduce risk.</p>'),
MC('a3','s1','“A significant improvement on a product that aims to sustain the position in an existing market” defines…',['sustaining innovation','incremental innovation','radical innovation','disruptive innovation'],0,'<p>Sustaining: low technology newness, high impact on the market.</p>'),
MC('a4','s2','Hardware is…',['the physical portion of a computer system, including electrical/electronic and electromechanical components','the instructions that control what a computer does','the people who use the computer','the data stored in the cloud'],0,'<p>Oxford definition on the slide. “The instructions that control what a computer does” is software (Cambridge).</p>'),
MC('a5','s2','Which is an advantage of open-source software, according to the slide?',['A large community of programmers leads to quick bug-fixing and feature additions','Technical support like traditional software','An easier user interface','Updates provided whatever the users want'],0,'<p>Advantages: free; source code can be examined before installation; large community → quick fixes. The others are listed as disadvantages or are wrong.</p>'),
MC('a6','s2','The “single source of truth” of an ERP means…',['a consolidated database shared across the company','one employee validates all data','the ERP vendor owns the data','each department keeps its own database'],0,'<p>Two key characteristics of ERPs: single source of truth (consolidated database) and integrated processes.</p>'),
MC('a7','s3','“Do unto others as you would have them do unto you” is…',['the Golden Rule','the Utilitarian Principle','the No-free Lunch Rule','the Slippery Slope Rule'],0,'<p>The Golden Rule (Laudon &amp; Laudon).</p>'),
MC('a8','s3','Which company illustrates the subscription-based model on the slides?',['Netflix','Uber','Quora','Red Hat'],0,'<p>Subscription: Netflix, Salesforce. Uber: two-sided marketplace; Quora: ad-supported; Red Hat: open source.</p>'),
MC('a9','s3','Which of these is a decision-making challenge of implementing an ERP?',['Configuration','Management oversells','Team collaboration breaks down','Users feel pain and get no gain'],0,'<p>Decision-making: vendor selection, gap analysis, configuration, data structure and format, migration from legacy systems. The other three are people challenges.</p>'),
MC('a10','s4','Which is one of the four reasons the slide gives for a digital revolution now?',['Advanced algorithms','Cheaper office rents','Fewer regulations','Longer working hours'],0,'<p>Data abundance, unprecedented computing power, ubiquitous connectivity, advanced algorithms.</p>'),
MC('a11','s4','Cryptocurrency banking is an example of a digital initiative that is…',['born digital','redesigned with digital','incremental','an ERP'],0,'<p>Born digital (cryptocurrency banking) vs redesigned with digital (online banking).</p>'),
MC('a12','s4','Which is one of the three pillars of Industry 4.0 on the slide?',['Digital business models and customer access','Steam engineering','Assembly line','Nuclear energy'],0,'<p>Pillars: digitization/integration of value chains; digitization of product and service offerings; digital business models and customer access.</p>'),
MC('a13','s5','In the GSMA data value chain, packaging and selling belong to the stage…',['Exchange','Generation','Collection','Analytics'],0,'<p>Exchange = packaging and selling, by providers.</p>'),
MC('a14','s5','In the chain “from opinion to action”, which step comes right after metrics?',['Analysis','Data','Insight','Action'],0,'<p>Opinion → data → metrics → analysis → insight → action.</p>'),
MC('a15','s5','Which company is cited as a prominent data broker in “Unseen Cyberazzi”?',['Acxiom Corporation','Netflix','Sama','Spotify'],0,'<p>Datalogix and Acxiom Corporation.</p>'),
MC('a16','s6','How does the slide (Cambridge) define cloud computing?',['The use of services and programs on the internet rather than ones you buy and put on your computer','A private network of a single company','Software you install from a CD','Storing files on a USB key'],0,'<p>Cambridge definition on the slide.</p>'),
MC('a17','s6','A company keeps sensitive data in its own private cloud and uses a public cloud for its website. This is…',['a hybrid cloud','IaaS only','an ERP','virtualization'],0,'<p>Types on the slide: private, public and hybrid cloud (the combination).</p>'),
MC('a18','s6','Renting storage and computing capacity on Amazon Web Services’ servers is…',['IaaS','SaaS','PaaS','open source'],0,'<p>IaaS example on the slide: AWS rents out storage and computing capacities.</p>'),
MC('a19','s7','“Innovation is the start of something great. What happens after is…”',['transformation','invention','disruption','regulation'],0,'<p>Forbes quote on the slide: transformation is the implementation after the first spark of innovation.</p>'),
MC('a20','s7','Lesson 3 of “Digital transformation is not (just) about technology” is…',['Design customer experience from the outside in','Leverage insiders','Bring Silicon Valley start-up culture inside','Figure out your business strategy first'],0,'<p>1 strategy first; 2 leverage insiders; 3 customer experience from the outside in; 4 employees’ fear; 5 start-up culture.</p>'),
MC('a21','s8','In the McCumber Cube, “storage” is…',['an information state','a desired goal','a safeguard','a type of attack'],0,'<p>Information states: transmission, storage, processing.</p>'),
MC('a22','s9','“When businesses consist of people from the same backgrounds…”',['they often leave diverse ideas and perspectives behind','they always innovate faster','they avoid all bias','they need no mentors'],0,'<p>Workforce diversity slide.</p>'),
MC('a23','s9','Which job is on the slide’s list of most demanded digital/IT jobs?',['Information security analyst','Typist','Switchboard operator','Film projectionist'],0,'<p>The list includes AI/ML engineer, data analyst, information security analyst, IT manager, developers, network architect, UI/UX designer.</p>'),
MC('a24','s9','Which is a requirement of the poster project?',['Compare the hypothetical company with two real companies of the same sector','Write a 20-page report','Build a working app','Present it alone'],0,'<p>Poster guidelines: name, logo, value proposition and revenue, two sustainability effects, two ethical matters, comparison with two actual companies; every member presents.</p>')];
const M1_B=[
{id:'b1',topic:'s3',type:'case',pts:3,title:'Exercise 1 · Ethical analysis toolkit',q:'',
 parts:[{type:'order',q:'a. Put the five steps of the ethical analysis in order.',pts:1.5,items:['Facts','Dilemma','Stakeholders','Options','Consequences']},
  {type:'match',q:'b. Match each principle with the question it asks.',pts:1.5,pairs:[['Categorical imperative','If everyone did this, could the organization or society survive?'],['Slippery slope rule','Is it still acceptable if it is repeated again and again?'],['Risk aversion principle','Which action produces the least harm or potential cost?']],extra:['Who owns this creation?']}],
 solution:F('Facts → dilemma → stakeholders → options → consequences')+'<p>The no-free lunch rule asks who owns a creation (distractor).</p>'},
{id:'b2',topic:'s3',type:'written',pts:5,title:'Exercise 2 · Digital business model',lines:12,
 q:'<p><b>GreenBasket</b> is an app that lets supermarkets sell food close to its expiry date at a discount. Users open the app, see “surprise baskets” near them, pay in the app and pick the basket up at the shop. GreenBasket keeps a commission on each basket and sells a monthly “partner” subscription to supermarkets that want more visibility. Its algorithm suggests baskets from each user’s location and past purchases.</p><p>Identify its primary type of digital business model, analyze it with the four VTDF components, and give one well-developed suggestion to make it run sustainably.</p>',
 rubric:[{c:'Primary model: a two-sided (peer-to-peer) marketplace matching supermarkets and consumers, with a subscription element for partners',pts:1},{c:'Value: cheaper food for users, extra revenue and less waste for shops',pts:1},{c:'Tech: app, geolocation, recommendation algorithm on past purchases, in-app payment',pts:1},{c:'Distribution: app stores, pick-up in shop, visibility for partners; Finance: commission per basket + partner subscription',pts:1},{c:'One developed sustainability suggestion linked to people, planet or profit (e.g. measure and display CO₂ saved, extend to donations, low-energy hosting)',pts:1}],
 solution:'<p><b>Model</b>: two-sided marketplace (shops ↔ consumers) with a subscription for partners. <b>Value</b>: users get food cheaper; shops recover revenue on stock they would throw away; less food waste. <b>Tech</b>: mobile app, geolocation, recommendation algorithm, in-app payment. <b>Distribution</b>: app stores, word of mouth, in-shop pick-up; partners get visibility in the app. <b>Finance</b>: commission per basket and monthly partner subscription. <b>Sustainability</b>: e.g. show each user the CO₂ and kilos of food saved (planet), offer unsold baskets to food banks at closing (people), or host the app on a provider with renewable energy (cloud, Session 6).</p>'}];

/* Mock 2: intermediate (application to short scenarios) */
const M2_A=[
MC('a1','s1','A restaurant replaces paper slips with tablets that send each order straight to the kitchen screen. Which way of improving processes is this?',['Improve data flow among activities','Improve procedures','Use automation','Improve control of activities'],0,'<p>The order data now flows electronically from one activity (taking the order) to another (cooking), like the prescription shared with the pharmacy.</p>'),
MC('a2','s1','“Have those who use the outcomes of the process perform the process” is…',['one of the slide’s ideas for process improvement','a BPMN symbol','a type of innovation','an ERP challenge'],0,'<p>One of the seven ideas to achieve process improvement.</p>'),
MC('a3','s1','A start-up lets people rent out their parked cars through an app, shaking up the car-rental market with a new business model. In the innovation matrix this is closest to…',['disruptive','incremental','sustaining','an invention without market impact'],0,'<p>Disruptive: technology or new business model that disrupts the existing market (high market impact).</p>'),
MC('a4','s2','A program lets a Mac run a simulated Windows PC. This is…',['virtualization','utility software','a private cloud','an ERP'],0,'<p>Virtualization: using software to simulate a computer or some other device.</p>'),
MC('a5','s2','Which is NOT one of the three functions of an operating system?',['Writing the user’s documents','Managing the hardware resources','Providing user-interface components','Providing a platform for developers'],0,'<p>Writing documents is a job for application software (word processing).</p>'),
MC('a6','s2','A hospital uses IoT sensors and AI to optimize its energy use in real time. Which BCG tech lever is this closest to?',['AI and advanced analytics','Data sharing and ecosystems','Digital products and services','Digitized operations only through paperwork'],0,'<p>Example on the slide: IoT- and AI-based real-time energy-efficiency optimization.</p>'),
MC('a7','s3','A manager thinks: “If every employee took office supplies home, the company could not survive, so I won’t.” Which principle?',['Categorical imperative','No-free lunch rule','Risk aversion','Slippery slope'],0,'<p>“If everyone did this, could the organization, or society, survive?”</p>'),
MC('a8','s3','“Building a nuclear generating facility in an urban area” illustrates which principle?',['Risk aversion principle','Utilitarian principle','Golden rule','Categorical imperative'],0,'<p>Very low probability, extremely high failure cost: take the action with the least potential harm.</p>'),
MC('a9','s3','In Uber’s two-sided marketplace, who pays the platform?',['A fee is collected from both sides of the transaction','Only advertisers','Only the drivers','Nobody: it is open source'],0,'<p>FourWeekMBA: the owner of the platform collects a fee from both sides.</p>'),
MC('a10','s4','Smart sensors, 3D printing, augmented reality and big data analytics appear on the slide as…',['technologies surrounding Industry 4.0','the four reasons for a digital revolution','steps of the data value chain','ERP modules'],0,'<p>They circle the three pillars of Industry 4.0.</p>'),
MC('a11','s4','In PwC’s 4IR game-changers for emerging cities, “seamless cities” are about…',['connecting people and places','optimising urban energy systems','circular resource management','responding to catastrophic risk'],0,'<p>Seamless: connecting people and places. Empowered: energy. Living: circular resources. Regenerative: catastrophic risk.</p>'),
MC('a12','s4','A CIO presents a digital project as a list of servers and licences to buy. What does the slide advise instead?',['Link operational changes to tangible business benefits','Add more technology to the list','Skip the pilot','Ignore costs'],0,'<p>Don’t build the business case as a series of technology investments; link operational changes to tangible benefits; pilot; costs, benefits, timing.</p>'),
MC('a13','s5','In the GSMA data value chain, “validation” belongs to the stage…',['Collection','Generation','Analytics','Exchange'],0,'<p>Collection: transmission and validation.</p>'),
MC('a14','s5','A telecom uses mobile-phone spending patterns as proxy indicators of income levels. Which SDG does UN Global Pulse link this to?',['No poverty','Life on land','Quality education','Peace, justice and strong institutions'],0,'<p>SDG 1 no poverty.</p>'),
MC('a15','s5','Why does “Unseen Cyberazzi” worry about how data brokers process data?',['The techniques and their accuracy are unknown, and an error (e.g. predicting someone is a terrorist) can matter a lot','Brokers process too little data','Federal law bans all consumer data','Brokers give everyone easy access to their data'],0,'<p>The processing is opaque; viewing your own data is “torturous”; errors can be serious.</p>'),
MC('a16','s6','A start-up rents storage and computing power on a provider’s servers instead of buying its own. Which service model?',['IaaS','SaaS','PaaS','hybrid cloud'],0,'<p>Infrastructure as a Service (AWS example on the slide).</p>'),
MC('a17','s6','Microsoft Cloud for Sustainability is shown on the slide as an example of…',['cloud-based solutions that help manage sustainability-related issues','a private cloud','the energy boom of data centres','a SaaS word processor'],0,'<p>Slide: “Cloud-based solutions can also help manage sustainability-related issues.”</p>'),
MC('a18','s6','According to Reuters, which kind of verbs did Amazon’s recruiting engine favour?',['Verbs more common on male engineers’ resumes, such as “executed” and “captured”','Verbs describing coding skills','Verbs in the passive voice','Verbs about teamwork'],0,'<p>It gave little weight to common IT skills and favoured “masculine” verbs.</p>'),
MC('a19','s7','Digital technologies offer efficiency gains and customer intimacy. Why do they still often fail to transform a company?',['Without the right mindset and with flawed practices, digital transformation magnifies the flaws','Because the technology is always too expensive','Because customers refuse apps','Because regulations forbid it'],0,'<p>Slide explanation of the 70% failure rate.</p>'),
MC('a20','s7','“Appoint a high-caliber launch team” belongs to which stage of the roadmap?',['Launch and acceleration','Defining value','Scaling up','Post-mortem'],0,'<p>Stage 2, steps 4–7.</p>'),
MC('a21','s8','A company encrypts the files it sends between its offices so outsiders cannot read them. Which goal and information state of the McCumber Cube?',['Confidentiality during transmission','Availability during storage','Integrity during processing','Human factors during storage'],0,'<p>Goal: confidentiality (no unauthorized reading); state: transmission; the safeguard used is technology.</p>'),
MC('a22','s9','“Winner-take-all dynamics” (OECD) mean that…',['a small advantage lets firms seize a large part of the market, widening the gap between “the best” and “the rest”','all firms share the market equally','governments pick the winners','innovation spreads evenly'],0,'<p>OECD slide on digital innovation and inclusiveness.</p>'),
MC('a23','s9','The Wendy Chan group case analysis focuses on…',['gender-related challenges of a woman leading a data science team in STEM','cloud migration costs','the history of computers','cryptocurrency mining'],0,'<p>Questions: challenges faced, how she coped, what society must change.</p>'),
MC('a24','s9','What does the OECD slide say about high levels of inequality?',['They negatively affect wellbeing and weaken economic performance','They speed up innovation everywhere','They have no economic effect','They only affect large firms'],0,'<p>And under-representation of groups means human resources are not used to their full potential.</p>')];
const M2_B=[
{id:'b1',topic:'s5',type:'case',pts:3,title:'Exercise 1 · A smart-parking app',
 q:'<p>A city installs sensors in parking spaces. Data travels over an IoT network, is checked, analyzed, and parking insights are sold to navigation apps.</p>',
 parts:[{type:'match',q:'a. Match each activity of the project with its GSMA stage.',pts:1.5,pairs:[['Sensors detect whether each space is occupied','Generation'],['Data is sent over the IoT network and checked for errors','Collection'],['Occupancy is processed and analyzed by hour and street','Analytics'],['Parking insights are packaged and sold to navigation apps','Exchange']]},
  {type:'order',q:'b. Put the project’s statements in the “opinion to action” order.',pts:1.5,items:['Drivers say finding a space downtown takes forever','Sensors record 2 million parking events per month','Average search time per driver is 12 minutes','Search time is highest near the station at 8–9 am','Showing free spaces near the station on the app would cut search time','The city adds live free-space counts to the app']}],
 solution:'<p>Generation (acquisition) → collection (transmission, validation) → analytics (processing, analysis) → exchange (packaging, selling). Opinion → data → metrics → analysis → insight → action.</p>'},
{id:'b2',topic:'s4',type:'written',pts:5,title:'Exercise 2 · Ethical analysis',lines:12,
 q:'<p>A supermarket chain’s loyalty app records every purchase. The chain plans to sell this data to an insurer, which would use it to adjust health-insurance premiums (frequent buyers of alcohol and sweets would pay more). Customers accepted “general terms” when they downloaded the app.</p><p>Apply the five-step ethical analysis and use two of the course’s ethical principles to reach a recommendation.</p>',
 rubric:[{c:'Facts: purchase data collected through the app, planned sale to an insurer, premiums adjusted, consent only through general terms',pts:0.5},{c:'Dilemma: new revenue and “fair” risk pricing vs privacy, informed consent and discrimination',pts:1},{c:'Stakeholders: customers, the chain, the insurer, employees, regulators (GDPR)',pts:1},{c:'Options: do not sell; sell anonymized/aggregated data only; ask explicit opt-in consent; sell and inform',pts:1},{c:'Consequences + two principles applied correctly (e.g. golden rule, categorical imperative, utilitarian, no-free lunch) and a reasoned recommendation',pts:1.5}],
 solution:'<p><b>Facts</b>: the app collects purchase data; the chain wants to sell it to an insurer for premium pricing; consent was given through general terms. <b>Dilemma</b>: extra revenue and risk-based pricing vs customers’ privacy, real consent and possible discrimination. <b>Stakeholders</b>: customers (and their families), the chain, the insurer, employees, regulators. <b>Options</b>: refuse; sell only anonymized, aggregated data; ask an explicit opt-in; sell with full disclosure. <b>Consequences</b>: loss of trust and GDPR risk if sold quietly; lost revenue if refused. <b>Principles</b>: golden rule (would the managers accept higher premiums based on their shopping?), categorical imperative (if every retailer sold purchase data to insurers, customers could no longer shop freely), no-free lunch (the data is about the customers; using it requires their agreement). Recommendation: do not sell identifiable data without explicit, informed consent.</p>'}];

/* Mock 3: advanced (scenarios and finer distinctions) */
const M3_A=[
MC('a1','s1','In the drive-thru diagram, what happens when the presenter answers “No” to “Do All Myself?”',['The food runner assembles the order','The cashier assembles the order','The order is cancelled','The order tracker stops the timer'],0,'<p>“No” → the Food Runner lane assembles the order; then the presenter hands the food to the customer.</p>'),
MC('a2','s1','A bank lets customers type their data once in its app instead of filling paper forms that staff re-type. Which idea for process improvement is this?',['Capture information once, at the source','Treat dispersed resources as centralized','Organize around tasks','Link parallel activities'],0,'<p>The data is captured once, where it is produced.</p>'),
MC('a3','s1','A word-processing app gets small yearly updates (new fonts, faster saving) with no change to its market. In the innovation matrix this is…',['incremental','radical','disruptive','sustaining with high market impact'],0,'<p>Incremental: gradual, continuous improvements on existing products; low technology newness and low market impact.</p>'),
MC('a4','s2','A firm buys 50 licences of an accounting software. Which statement is right?',['The firm does not own the software; it bought the licence to use it','The firm can resell the software freely','The firm owns the source code','The software is open source'],0,'<p>Practice question: software you purchase is not owned by you.</p>'),
MC('a5','s2','Which ERP function would handle deliveries from suppliers?',['SCM (supply chain management)','CRM','Human resources','Accounting'],0,'<p>ERP functions on the slide: SCM, manufacturing, CRM, HR, accounting.</p>'),
MC('a6','s2','Business ethics, fair trade and workers’ benefits lie at the overlap of which two sustainability dimensions?',['Social and economic','Social and environmental','Environmental and economic','Only environmental'],0,'<p>Social-economic aspects. Social-environmental: conservation, environmental justice. Environmental-economic: energy efficiency, renewable fuels, green tech.</p>'),
MC('a7','s3','Alphabet 2023: which revenue segment is by far the largest?',['Google Search & other (about 57%)','Google Cloud','YouTube ads','Other Bets'],0,'<p>Search & other $175B (57%); YouTube ads, Network, Cloud and “other” are each around 10–11%; Other Bets 0.5%.</p>'),
MC('a8','s3','In an ethical analysis, stating “the conflict is road safety vs the teenager’s privacy” is which step?',['Dilemma','Facts','Options','Consequences'],0,'<p>Dilemma: identify the conflict and the higher-order values involved.</p>'),
MC('a9','s3','For a music app, “free tier with ads, paid premium subscription” describes which VTDF component?',['Financial model','Tech model','Distribution model','Value model only'],0,'<p>The financial model answers “how does the company make money?”.</p>'),
MC('a10','s4','In the TIME article, how does Sama describe itself?',['As an “ethical AI” company that claims to have helped lift more than 50 000 people out of poverty','As a government agency','As OpenAI’s parent company','As a cryptocurrency exchange'],0,'<p>Sama, San Francisco-based, employs workers in Kenya, Uganda and India for clients like Google, Meta and Microsoft.</p>'),
MC('a11','s4','A machine maker adds sensors to its machines and sells remote-monitoring services. Which pillar of Industry 4.0 is this?',['Digitization of product and service offerings','Digitization and integration of value chains','Steam and water power','Mass production'],0,'<p>The product itself becomes digital and service-based.</p>'),
MC('a12','s4','A parent secretly installs a driving tracker on their teenager’s car. Which principle most directly condemns the secrecy?',['The Golden Rule: would the parent accept being tracked without knowing?','The No-free Lunch Rule','The Risk Aversion Principle','The Utilitarian Principle'],0,'<p>The golden rule asks you to treat others as you would want to be treated; secret tracking fails this test. Risk aversion or utilitarianism might even support the tracking.</p>'),
MC('a13','s5','In the data-platform view of the value chain, raw data, trusted data and service data are kept in…',['the data lake','the data loaders','the add-ons','the AI store'],0,'<p>Data sources → data loaders → data lake (raw, trusted, service data; catalog, discovery, lineage) → sharing, visualization, ML → add-ons.</p>'),
MC('a14','s5','A hospital asks patients for their agreement before using their records for research. Which GSMA activity is this?',['Consent','Validation','Packaging','Analysis'],0,'<p>Consent is activity 2, in the generation stage.</p>'),
MC('a15','s5','Which reasoning applies the categorical imperative to junk-food offers targeted at people prone to overeating?',['If every company targeted vulnerable people with harmful offers, society could not stay healthy: the practice is not right for anyone','It brings value to most shareholders, so it is right','It is legal, so it is ethical','The broker did not sell the food, so it is fine'],0,'<p>The categorical imperative universalizes the action; the second option is a (weak) utilitarian argument.</p>'),
MC('a16','s6','Cloud services make each data centre more efficient, yet total electricity demand of data centres keeps rising because cloud use booms. Which Deloitte point is this?',['Point three: the boom means more energy is needed for data centres','Point one: cloud is the greener option','Point two: smarter use of energy','Point four: ambitious plans'],0,'<p>The rebound: efficiency per task, but more total demand.</p>'),
MC('a17','s6','Which conclusion does the Reuters article support about AI in hiring?',['Removing known biased terms does not guarantee a fair system; fairness, interpretability and explainability are still far off','AI is ready to make hiring decisions alone','Bias only comes from programmers’ intentions','Using more data always removes bias'],0,'<p>Nihar Shah (Carnegie Mellon) and LinkedIn’s John Jersin: the technology “is just not ready yet”.</p>'),
MC('a18','s6','Employees use Microsoft Office 365 in a browser instead of installing Office. Which service model?',['SaaS','PaaS','IaaS','Private cloud'],0,'<p>SaaS: applications delivered over the internet through a browser-based interface.</p>'),
MC('a19','s7','In the UCB group case, the class assessed De Prins’s achievements and failures with data analytics using…',['the tips of the LinkedIn course “Digital Transformation Tips”','the McCumber Cube','the GSMA value chain','the innovation matrix'],0,'<p>Session 7 group case questions.</p>'),
MC('a20','s7','A firm “sequences initiatives for quick returns” and “builds capabilities”. Which roadmap stage is it in?',['Scaling up','Defining value','Launch and acceleration','Not in the roadmap'],0,'<p>Stage 3: sequence initiatives for quick returns, build capabilities, adopt a new operating model.</p>'),
MC('a21','s8','A company has firewalls and encryption, but staff keep clicking phishing links. Which safeguard of the McCumber Cube is weakest?',['Human factors','Technology','Integrity','Storage'],0,'<p>Safeguards: technology, policy and practices, human factors. Integrity is a goal; storage a state.</p>'),
MC('a22','s9','Complete the Session 9 title: “From digital ethics to … to for-privacy digital technologies/governance.”',['Digital regulations','Digital transformation','Digital business models','Digital marketing'],0,'<p>From digital ethics to digital regulations to for-privacy digital technologies/governance.</p>'),
MC('a23','s9','Which of these is NOT on the slide’s list of most demanded digital/IT jobs?',['Bitcoin miner','Data analyst','Python developer','Web designer (UI/UX)'],0,'<p>The list: AI/ML engineer, data analyst, information security analyst, IT manager, web developer, network architect, Java/PHP/Python developers, network and systems administrator, UI/UX designer.</p>'),
MC('a24','s9','How does digital ethics influence digital regulation, according to the diagram?',['Through moral evaluation','Through legal compliance','Through market prices','It does not'],0,'<p>DE shapes DG and DR through moral evaluation; DR shapes DG through legal compliance.</p>')];
const M3_B=[
{id:'b1',topic:'s8',type:'case',pts:3,title:'Exercise 1 · Securing a clinic',
 q:'<p>A clinic reviews the security of its patient records.</p>',
 parts:[{type:'match',q:'a. Match each measure or requirement with its place in the McCumber Cube.',pts:1.5,pairs:[['Only doctors may read patient records','Confidentiality'],['Records must not be altered without trace','Integrity'],['The system must be reachable 24/7','Availability'],['A firewall filters network traffic','Technology'],['A written password policy','Policy and practices'],['Staff training on phishing','Human factors']]},
  {type:'order',q:'b. The clinic also starts a digital transformation. Put these roadmap steps in order.',pts:1.5,topic:'s7',items:['Secure senior management commitment','Secure investment','Start with lighthouse projects','Nurture a digital culture','Build capabilities','Adopt a new operating model']}],
 solution:'<p>Goals: confidentiality, integrity, availability; safeguards: technology, policy and practices, human factors. Roadmap: steps 1, 3 (defining value), 4, 7 (launch and acceleration), 9, 10 (scaling up).</p>'},
{id:'b2',topic:'s7',type:'written',pts:5,title:'Exercise 2 · Hôtels Lebrun goes digital',lines:12,
 q:'<p>Hôtels Lebrun, a family chain of 12 hotels, wants to “become digital”. The new CEO has already signed a contract to move all systems to a public cloud and to install self-check-in kiosks, but has not defined targets. Receptionists fear for their jobs, and long-time managers were not consulted. The CEO also claims “moving to the cloud makes us green”.</p><p>(a) Distinguish digital innovation from digital transformation in this case. (b) Using the five lessons, identify two risks and how to reduce them. (c) Which roadmap stage was skipped, and what should come first? (d) Discuss the CEO’s claim on the cloud and sustainability.</p>',
 rubric:[{c:'(a) Kiosks/cloud = innovations; transformation = implementing them and changing processes, culture and operating model; mutually causal',pts:1},{c:'(b) Two lessons applied: strategy before investment (contract signed without targets); leverage insiders (managers ignored); employees’ fear (receptionists); customer experience from the outside in',pts:1.5},{c:'(c) Defining value skipped: secure management commitment, set clear ambitious targets, secure investment; then a lighthouse project (e.g. kiosks in one hotel)',pts:1},{c:'(d) Cloud can be greener and use energy more smartly, but the data-centre boom raises energy demand; the claim needs evidence (provider’s plans, measurement)',pts:1},{c:'Clear structure and use of course vocabulary (70% failure rate, magnifying flaws)',pts:0.5}],
 solution:'<p>(a) The kiosks and the cloud are <b>innovations</b>; the <b>transformation</b> is what happens after: new processes, roles, culture and operating model. Innovation can lead to transformation and vice versa. (b) Risks: investing before a strategy (lesson 1) → define what value the kiosks and cloud must bring; ignoring insiders (lesson 2) → involve long-time managers; employees’ fear (lesson 4) → explain new roles for receptionists (guest experience); also design the guest experience from the outside in (lesson 3). Otherwise the chain joins the 70% that fail: technology magnifies flawed practices. (c) Stage 1, <b>defining value</b>, was skipped: senior commitment, clear and ambitious targets, investment; then a lighthouse project in one hotel before scaling up. (d) Deloitte: cloud can be the greener option and a smarter use of energy, but the cloud boom increases data-centre energy demand; “green” must be shown with the provider’s energy plans and measures.</p>'}];

const MOCKS=[
 {id:'m1',title:'Mock exam 1 · Foundation',exam:'final',scope:'Sessions 1–9',duration:90,total:20,calculator:MCALC,intro:MOCK_INTRO,
  summary:'Level 1: recall of the slides’ definitions and frameworks; a VTDF analysis of a new start-up.',
  sections:[Object.assign({items:M1_A},PART_A),{title:'Part B · Exercises (8 points)',items:M1_B}]},
 {id:'m2',title:'Mock exam 2 · Intermediate',exam:'final',scope:'Sessions 1–9',duration:90,total:20,calculator:MCALC,intro:MOCK_INTRO,
  summary:'Level 2: short scenarios to classify; a smart-parking data project; a full ethical analysis of a data sale.',
  sections:[Object.assign({items:M2_A},PART_A),{title:'Part B · Exercises (8 points)',items:M2_B}]},
 {id:'m3',title:'Mock exam 3 · Advanced',exam:'final',scope:'Sessions 1–9',duration:90,total:20,calculator:MCALC,intro:MOCK_INTRO,
  summary:'Level 3: finer distinctions and traps; securing a clinic; a digital-transformation case mixing cloud and sustainability.',
  sections:[Object.assign({items:M3_A},PART_A),{title:'Part B · Exercises (8 points)',items:M3_B}]}];

// The engine shows MCQ options in the order given: shuffle them once, deterministically (seeded by the id), so the answer is not always "a".
const seed=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const mix=(x,key)=>{if(!x||x.type&&x.type!=='mcq'||!Array.isArray(x.o))return;let r=seed(key);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};
  const idx=x.o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  const pos=i=>idx.indexOf(i);x.a=Array.isArray(x.a)?x.a.map(pos).sort((p,q)=>p-q):pos(x.a);x.o=idx.map(i=>x.o[i])};
QUIZ.forEach(q=>mix(q,q.id));
EXERCISES.forEach(x=>{mix(x,x.id);(x.parts||[]).forEach((p,i)=>mix(p,x.id+'-'+i))});
MOCKS.forEach(m=>m.sections.forEach(s=>s.items.forEach(x=>{mix(x,m.id+x.id);(x.parts||[]).forEach((p,i)=>mix(p,m.id+x.id+'-'+i))})));

registerSubject({
  slug:'digital-innovation',
  name:'Digital Innovation',
  short:'Digital',
  tagline:'Bachelor 2 · Final exam (1 h 30): Sessions 1–9',
  status:'Sessions 1–9 done · layered sheets, 4 generators, 2 tools · 3 mock exams',
  sources:{course:'Course exercise',bank:'Practice MCQ (no key)',practice:'Practice'},
  exams:[{id:'final',label:'Final exam',scope:'Sessions 1–9'}],
  topics:[
    {id:'s1',label:'Session 1',title:'Processes and innovation',short:'S1 Processes',exam:'final',summary:'Business processes, BPMN, process improvement, innovation matrix',sheet:SHEETS.s1},
    {id:'s2',label:'Session 2',title:'Basic IT concepts',short:'S2 IT basics',exam:'final',summary:'Information systems, hardware, OS vs apps, open source, ERP, sustainability',sheet:SHEETS.s2},
    {id:'s3',label:'Session 3',title:'ERP, ethics, business models',short:'S3 Models & ethics',exam:'final',summary:'ERP challenges, six principles, five-step analysis, VTDF, Spotify, Uber',sheet:SHEETS.s3},
    {id:'s4',label:'Session 4',title:'4IR and Web 3.0',short:'S4 4IR & Web3',exam:'final',summary:'Industrial revolutions, Industry 4.0, Web3, privacy, digital initiatives',sheet:SHEETS.s4},
    {id:'s5',label:'Session 5',title:'Data science and technologies',short:'S5 Data',exam:'final',summary:'Big data and AI, GDPR, data value chain, SDGs, data brokers',sheet:SHEETS.s5},
    {id:'s6',label:'Session 6',title:'Cloud computing',short:'S6 Cloud',exam:'final',summary:'Cloud types, SaaS/PaaS/IaaS, sustainability, Amazon AI bias',sheet:SHEETS.s6},
    {id:'s7',label:'Session 7',title:'Digital transformation',short:'S7 Transformation',exam:'final',summary:'Innovation vs transformation, 70% failure, five lessons, roadmap',sheet:SHEETS.s7},
    {id:'s8',label:'Session 8',title:'Cybersecurity',short:'S8 Cyber',exam:'final',summary:'McCumber Cube, cyber-attack simulation',sheet:SHEETS.s8},
    {id:'s9',label:'Session 9',title:'Legal, social, economic issues',short:'S9 Society',exam:'final',summary:'Ethics, regulation, governance; diversity; inclusiveness; poster',sheet:SHEETS.s9}],
  cheatsheet:SHEETS.cheat,
  glossary:GLOSS,
  overview:{
    eyebrow:'Digital Innovation',
    title:'Everything in Sessions 1–9, on one site',
    lede:'Built only from the course material: the slides of Sessions 1–9, the practice MCQs, the group exercises and readings, and the Fall 2026 syllabus. Read a session sheet, then test yourself: quiz, matching and ordering exercises, short cases, flashcards and mock exams. Your progress is saved in this browser.',
    blurbs:{cheat:'Every framework and the classic traps on one page',exercises:'Matching, ordering the steps of the frameworks, short cases',cards:'Definitions, frameworks and lists',mocks:'1 h 30 · 24 MCQs + 2 exercises · out of 20'},
    html:`<h3>The final exam</h3>
  <ul><li><b>Final exam: 1.5 hours, individual, 45% of the grade</b>, on “all course material and readings for all sessions covered and assigned inside and outside the classroom” (syllabus, Fall 2026). Mid-term (1 hour, 30%) covered Sessions 1–4; the poster (group, Session 10) counts for 25%.</li>
  <li>The syllabus warns: <b>“Exam questions can be the exact same ones appearing in the in-class practice question reviews and exercises.”</b> The quiz therefore includes every usable practice MCQ and every in-class question with its answer.</li>
  <li>No past paper, no answer key and no instructions on the number or type of questions are on the course platform.</li></ul>
  <h3>The three mock exams: format chosen</h3>
  <ul><li><b>Known</b>: 1 h 30, all sessions, questions taken from the practice question reviews (MCQs) and the in-class exercises (group cases).</li>
  <li><b>Chosen for this site</b>: 20 points. <b>Part A</b>: 24 MCQs (about three per session), 0.5 point each, no penalty. <b>Part B</b>: one auto-marked exercise (matching / ordering, 3 points) and one short case analysis in your own words (5 points), marked with a grid after hand-in. This mixes the two sources the syllabus names. If your teacher announces another format, trust the teacher.</li>
  <li>Each mock covers Sessions 1–9; none of their questions repeats the quiz or another mock. Difficulty rises from Mock 1 (recall) to Mock 3 (scenarios and traps).</li></ul>
  <h3>How to use it before the exam</h3>
  <ol><li>Read the session sheet; open the worked cases.</li>
  <li>Do the quiz with the filter <span class="pill src">Practice MCQ (no key)</span>: these questions can come back word for word.</li>
  <li>Exercises: match the concepts and put the steps of each framework in order until it is automatic (ethical analysis, data value chain, opinion to action, roadmap, lessons).</li>
  <li>Take the mock exams with the timer, then mark your written answers honestly with the grid.</li></ol>
  <h3>Sources and limits</h3>
  <ul><li><b>Slides</b>: Sessions 1–9 from the course. They come from the <b>spring 2025 edition</b> (assignment dates February–March 2025); the Fall 2026 syllabus keeps the same themes in a slightly different order (10 sessions, poster in Session 10). New slides for this semester may differ.</li>
  <li><span class="pill src">Course exercise</span>: an in-class question whose answer is shown on the slide, or a group exercise of the course. <span class="pill src">Practice MCQ (no key)</span>: the “First block” practice questions for the mid-term, which have <b>no answer key</b>: the answer given is the one consistent with the slides and the textbook definitions, and is explained. Six of the 46 are left out: four ambiguous ones (Web 2.0 date, three metaverse-strategy questions), one whose answer is not in the material (what the metaverse “cannot exist without”) and one that repeats another open-source question. <span class="pill">Practice</span>: new questions on the same content.</li>
  <li><b>Not available on the course platform</b>, so not covered beyond what the slides show: the LinkedIn Learning courses (SAP ERP, 4IR, Web3, Big Data in the Age of AI, Blockchains, Cloud Computing, Digital Transformation Tips, GDPR), textbook chapters 4 and 8, the “ERP Systems” PDF, the HBR article, the Harvard cases (UCB, Wendy Chan) and the cyber-attack simulation. The final exam can include them.</li>
  <li>Errors in the material are flagged, never corrected silently: the open-source definition (Session 2 slide).</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  modules:[
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'Place innovations in the matrix, recognize the ethical principles, analyse security incidents with the McCumber Cube and compute revenue shares of digital business models. Examples are chosen by the site; the frameworks are the course’s.'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'Innovation decision tree and the five-step ethical analysis',intro:'Practise the innovation matrix as a decision tree on new cases, and the five-step ethical analysis on the Amazon recruiting case.'}}],
  mocksNote:NOTE('<b>Where the format comes from.</b> The syllabus gives 1 h 30 and says exam questions can be taken from the practice question reviews and the in-class exercises. The split into 24 MCQs and two exercises, and the points, are <b>chosen for this site</b>: details in the <a href="#digital-innovation">Overview</a>.')
});
})();
