/* Marketing Management 2331, IÉSEG Bachelor 2 (teacher: Florence NIZETTE, group L10). Final exam (50%): all course material.
   Built from the MyCourses material in sources/marketing-management/: the Session 1–7 slides of Florence Nizette (MM S1–S7 2026 FN),
   which follow the common course slides (MM S1–S7 2026, Helen Cocco) and Kotler & Armstrong, Principles of Marketing.
   No past paper, no answer key, no exam format on MyCourses. Topics: s1–s7 (Sessions 1–7).
   Ids: q… quiz, c… cards, x-s<n>-… exercises. Never renumber ids. */
(function(){
const {T,F,EX,TRAP,NOTE,fmt}=Rev.h;

/* ---------- topic sheets ---------- */
const SHEETS={};
SHEETS.s1=`
<div class="eyebrow">Session 1</div><h2>Introduction to marketing</h2>
<p class="lede">Goal: define marketing, explain the core principles, the evolution of marketing concepts, the marketing process (strategic and operational marketing), the two main marketing challenges, and values versus mission.</p>
<h3>1. What is marketing?</h3>
${F('Marketing = the process by which companies\n1) engage customers  2) build strong customer relationships\n3) create customer value  4) in order to capture value in return   (Kotler et al., 2021)')}
<ul><li>Peter Drucker: “The aim of marketing is to know and understand the customer so well that the product or service fits him and sells itself.”</li>
<li><b>Demarketing</b> (Levy and Kotler, 1971, HBR): discouraging consumers from buying a product for the short or longer term, i.e. a strategy that does not aim to maximize demand (drugs, cigarettes, food high in sugar and fat, protecting limited resources).</li>
<li><b>Selling vs marketing</b>: selling focuses on selling existing products through heavy selling (sell what the company makes; <b>push</b>); marketing focuses on understanding and satisfying customer needs at a profit (make what the customer wants; <b>pull</b>).</li></ul>
<h3>2. Core marketing principles</h3>
${T(['Principle','Meaning'],[['Customer value and satisfaction','customers’ perceived expectations about the delivered value and satisfaction'],['Growing valuable relationships','a constant exchange of value through maintained relationships'],['Markets','the set of all actual and potential buyers of a product or service'],['Offers','ideas, products, services, experiences']])}
<ul><li><b>Market</b>: a group of individuals or organizations (<b>buyers</b>) having the willingness and ability to buy goods or services to satisfy a class of wants or needs (food-service market).</li>
<li><b>Industry</b>: a group of firms (<b>sellers</b>) offering similar products or services that are close substitutes (transportation industry, air travel industry).</li>
<li>Modern marketing system: each party adds value. Marketing principles also apply to celebrities (Taylor Swift: Eras Tour above $2 billion, strong fan relationship, merchandising, social media).</li></ul>
${TRAP('Market = the <b>buyers</b>; industry = the <b>sellers</b>.')}
<h3>3. Evolution of marketing concepts</h3>
${T(['Concept','Focus'],[['Production','large production, wide availability at a low price'],['Product','performance, good quality, innovative features'],['Selling','large-scale selling effort'],['Marketing','meeting consumers’ needs and wants, delivering satisfaction'],['Societal marketing','delivering value while contributing to consumers’ and society’s well-being; balances company profits, customer wants and society’s interests']])}
<p>B2C (consumer-driven), B2B (business-driven), and mixed models: banks (B2C and B2B), B2B2C (insurer → broker → consumer), B2B2U (business to business to user).</p>
<h3>4. The marketing process in an organization</h3>
${T(['Step','Content','Level'],[['1. Corporate strategy','marketing objectives, mission, values, SW(OT)','Strategic marketing (analysis and key decisions)'],['2. Environmental scan','market and competitor analysis, (SW)OT, BCG matrix','Strategic'],['3. Segmentation, targeting, positioning','identify segments, target a suitable segment, position in the minds of customers','Strategic'],['4. Marketing mix','the 4 Ps: product, price, place (distribution), promotion, designed on the STP','Operational marketing (action and control)'],['5. Implementation and control','implement, monitor and evaluate the marketing strategy','Operational']])}
<h3>5. Two main marketing challenges</h3>
<ol><li><b>New digital technologies</b>: online, mobile, social media, big data and AI (Netflix disrupting video, Mama Shelter / Jo&amp;Joe in hospitality). AI: personalization, 24/7 chatbots, content matching algorithms, predicting reactions to campaigns.</li>
<li><b>Social and environmental concerns</b>: corporate ethics and social responsibility. <b>Sustainable marketing</b>: socially and environmentally responsible marketing that meets the present needs of consumers and businesses while preserving or enhancing the ability of future generations to meet their needs (L’Oréal, IKEA, Patagonia).</li></ol>
<h3>6. Corporate strategy: values and mission</h3>
<ul><li><b>Values</b>: the core values or standards that guide the way a company does business; they show what it stands for (integrity, innovation, customer focus, sustainability).</li>
<li><b>Mission statement</b>: an action-based statement declaring the <b>purpose</b> of the organization and <b>how</b> it serves its customers (“what does this company do and why?”). It describes the offer, explains the target customer and gives strategic directions to employees.</li></ul>
${NOTE('<b>Grading of the course</b> (S1 slides): 40% continuous assessment (in-class graded exercises: environmental analysis S2, pricing S5; Capstone application, 15% presentation / 85% infographic), 10% participation, <b>50% final exam on all course material</b>, in class, between 3 and 19 December (TBC).')}
`;

SHEETS.s2=`
<div class="eyebrow">Session 2</div><h2>Market analysis</h2>
<p class="lede">Goal: describe the marketing environment (micro and macro), apply PESTEL and SWOT correctly, and analyse competitors (four types of competition, eight questions).</p>
<h3>1. Managing marketing</h3>
<p>Marketing <b>analysis</b> → <b>planning</b> → <b>implementation and organization</b> → <b>control</b>. Café chain example: run a satisfaction survey and analyse the environment, revise the offer, implement the changes in every shop, check their effect on sales.</p>
<h3>2. The marketing environment</h3>
<ul><li><b>Marketing environment</b>: the actors and forces outside marketing that affect management’s ability to build and maintain successful relationships with target customers.</li>
<li><b>Micro-environment</b>: the actors close to the company that affect its ability to serve its customers: <b>the company, suppliers, marketing intermediaries, customers, competitors, publics</b>.</li>
<li><b>Macro-environment</b>: the larger societal forces that affect the micro-environment: <b>PESTEL</b>.</li></ul>
${T(['PESTEL factor','Examples'],[['Political','government bodies (EU), special interest groups, political parties'],['Economic','trade cycles (boom, recession, inflation), unemployment, household disposable income'],['Social','population, age profiles, gender balance, cultural differences, religions, consumer behaviour'],['Technological','new technologies, transport, communication technologies, green technologies'],['Environmental','energy sources, recycling, weather, climate change'],['Legal / regulatory','new laws and regulations, changes in laws']])}
${EX('Tony’s Chocolonely: which PESTEL factor?','course exercise',T(['Challenge','Factor'],[['Global cocoa prices and market dynamics affect farmers’ livelihoods','Economic'],['Recession and low growth lower disposable income','Economic'],['EU regulations specify the permitted ingredients in chocolate','Legal'],['Ethical concerns increasingly influence consumer behaviour','Social'],['The European Parliament passed a resolution urging companies to address child labour','Political'],['Hotter temperatures and less rainfall cause droughts on plantations','Environmental'],['Growing calls for ethical sourcing practices in the chocolate industry','Social'],['Illegal child and forced labour are common in West Africa','Social (ethical); “illegal” also points to Legal']])+NOTE('<b>No answer key</b> on MyCourses: the classification is the site’s.'))}
<h3>3. SWOT analysis</h3>
<p>SWOT is both an <b>internal</b> (strengths, weaknesses) and an <b>external</b> (opportunities, threats) analysis.</p>
${T(['','Content'],[['Strengths (internal)','critical success factors: e.g. Pokawa market leader in Hawaiian food in France, excellent supplier relationships'],['Weaknesses (internal)','internal limitations: limited product range, low advertising budget'],['Opportunities (external)','potential favourable factors in the environment: growing student population and dual-income families'],['Threats (external)','important unfavourable developments: sushi shops launching competing poke bowls']])}
<ul><li><b>Internal analysis</b> covers the company and brand (offer, mission, size and means, portfolio, image, awareness, performance), the marketing strategy (target, positioning) and the marketing mix (4 Ps). <b>Never describe competitors here.</b></li>
<li><b>External analysis</b> covers the macro-environment (PESTEL), the offer on the market (direct and indirect competition, distributors) and demand (needs, purchasing process and behaviour, types of consumers). <b>Never describe the company’s own actions here.</b></li></ul>
${TRAP('A company strength is never an “opportunity”, and a competitor’s move is never a “weakness”: strengths/weaknesses are internal, opportunities/threats are external.')}
<h3>4. Competitor analysis</h3>
${T(['Type of competition','Definition','Example'],[['Direct','almost identical products','Coca-Cola and Pepsi'],['Close','a similar product satisfying the same need','soft drinks'],['Substitute','different products satisfying a similar need','coffee and energy drinks'],['Indirect','a different product targeting the same customers','ice creams, yogurts']])}
<p><b>Eight questions</b> (Masterson et al.): 1 market size and evolution; 2 main competitors; 3 their relative strengths (resources, control of distribution); 4 the market leader; 5 how they compete (price or differentiation); 6 the nature of competing products (direct, indirect, substitute, close); 7 the strengths of those products; 8 competitors’ actions and intentions (range growth, expansion, campaigns, price wars).</p>
`;

SHEETS.s3=`
<div class="eyebrow">Session 3</div><h2>Segmentation, targeting and positioning (STP)</h2>
<p class="lede">Goal: divide a market into segments, evaluate and select target segments, position an offer, and write a positioning statement.</p>
<h3>1. Segmentation</h3>
<p><b>Market segmentation</b>: the process of dividing a total market into subgroups of buyers and users who share similar characteristics.</p>
${T(['Basis (B2C)','Variables'],[['Geographic','country, region, city, urban–rural'],['Demographic','age, gender, family size, life stage, religion, nationality, education, income, socio-economic group (A, B, C1, C2, D, E)'],['Geo-demographic','house type and location (ACORN, MOSAIC)'],['Psychographic','lifestyles, values, motives, personalities (VALS)'],['Mediagraphic','media habits (TV, papers, social media sites)'],['Behavioural','purchase occasion, benefits sought, usage rate, user status, readiness stage, attitude to product, involvement, adopter type, loyalty status']])}
<p>Combining several variables (e.g. social grade ABC1 + age 40–65 + heavy user) gives a more focused, better defined segment.</p>
${T(['A good segment is…','Why'],[['Measurable','size, purchasing power and profile can be measured'],['Accessible','it can be reached and served effectively'],['Substantial','it is big enough to be profitable'],['Differentiable','segments are conceptually distinct and respond differently to marketing-mix elements'],['Operational','the approach helps design a specific marketing mix for each segment']])}
<p>Companies assess segments with market research (similar characteristics), customer data (enough and accurate) and an understanding of the buyer characteristics that matter in the purchase.</p>
<h3>2. Targeting</h3>
<p><b>Market targeting</b>: the selection of one or more segments towards which marketing efforts are directed. Evaluate: <b>size and growth</b>, <b>structural attractiveness</b> (the largest, fastest-growing segment is not always the most attractive), <b>company objectives and resources</b>.</p>
${T(['Strategy (broad → narrow)','Meaning'],[['Undifferentiated (mass) marketing','ignore segment differences, one offer for the whole market'],['Differentiated (segmented) marketing','several segments, a separate offer for each'],['Concentrated (niche) marketing','a large share of a smaller market'],['Micromarketing','local or individual marketing']])}
<h3>3. Positioning</h3>
<p><b>Positioning</b>: the place a brand is perceived to occupy in the minds of the target market relative to competing brands (how customers see it and what they think about it compared with the competition). It drives marketing-mix decisions (design, where and how it is sold, attributes, promotion). Tool: the <b>positioning map</b> (e.g. fast food: wide vs limited choice, junk vs healthy).</p>
${T(['Positioning strategy','Example'],[['On attributes / product features','Head &amp; Shoulders eliminates dandruff'],['By price / quality','Monoprix p’tit prix vs Monoprix Gourmet'],['For specific usage occasions','GoPro first launched for extreme sports'],['On benefits or needs','Mir Black for black clothes'],['By the product end user','SNCF adapts offers and prices to the end user']])}
<p><b>Brand positioning</b> (Kapferer, 2012): brand/product <b>benefits</b>, <b>target</b>, <b>reason to believe</b> (tangible proof that the promise will be kept), <b>main competitors</b>.</p>
${F('Positioning statement: For (target segment and need), our (brand/product) is (concept)\nthat (point of difference to competition).\nAirbnb: For travelers seeking an authentic local experience, Airbnb is a platform\n        that allows you to rent a local’s home while travelling.\nSnickers: For people who like to snack, Snickers is the brand of candy that\n        stills the hunger because it contains peanuts.')}
<p>Why STP? To increase profitability and market share, target new customers, reach a new market, retain existing customers.</p>
`;

SHEETS.s4=`
<div class="eyebrow">Session 4</div><h2>Products, services and branding</h2>
<p class="lede">Goal: define products, services and experiences, apply the three levels of a product, describe the product life cycle and the four characteristics of services, and make attribute, branding, packaging and labelling decisions.</p>
<h3>1. Products, services, experiences</h3>
${T(['','Definition'],[['Product','a tangible good offering a bundle of attributes to satisfy a want or need'],['Service','an intangible activity or benefit that does not result in ownership'],['Experience','an interaction with a brand that affects a multi-dimensional response (a day out at IKEA)']])}
${T(['Level','Question','Colgate example'],[['Core customer value','What is the buyer really buying?','clean teeth'],['Actual product','the means by which the core value is delivered: features, design, quality, brand name, packaging','whitening, gum care, stripes, Colgate brand, tube usable with one hand'],['Augmented product','supporting services and benefits','returns and refunds, extra information online, phone number if unsatisfied']])}
<h3>2. Product life cycle (PLC)</h3>
<p>Product development (losses, investment) → <b>introduction</b> → <b>growth</b> → <b>maturity</b> → <b>decline</b> (→ deletion). Danone examples: Skyr (introduction), Mix (growth), Danone nature (maturity), Bulle de yaourt (decline).</p>
${T(['Stage','Product','Promotion','Place','Price'],[['Introduction','fairly standard','high advertising, trade promotions, publicity, point of sale','sign up distributors, build stocks','market skimming or market penetration'],['Growth','improve quality, add features and products','still high spend, build brand loyalty','new outlets, build relationships','skimming stops, price falls'],['Maturity','further updating, few additions','sales promotion, reminder advertising, database marketing','keep costs down, customer service','competitive, depends on loyalty'],['Decline','scale back, limited range, consider deletion','lower spend, sales promotion','cut back distribution, other markets','keep low']])}
<h3>3. The four characteristics of services</h3>
${T(['Characteristic','Meaning'],[['Intangibility','cannot be seen, tasted, felt, heard or smelled before purchase'],['Inseparability','cannot be separated from their providers'],['Variability','quality depends on who provides them, when, where and how'],['Perishability','cannot be stored for later sale or use']])}
<h3>4. Product and service decisions</h3>
<ol><li><b>Attributes</b>: quality, features, style and design. Differentiate through functionalities, characteristics (Babybel’s red wax), performance (Devialet ADH, Babizen Yoyo folding), durability (The North Face recycling programme, circular economy).</li>
<li><b>Branding</b>: name, term and symbols beyond physical attributes.</li>
<li><b>Packaging</b>: the container or wrapping; primary (close protection), secondary (branding and display), tertiary (protection and shipping). It aids use, supports positioning, can be responsible and innovative, and creates immediate recognition.</li>
<li><b>Labels and logos</b>: labels show brand, variety, line, contents, origin, use, safety, and legal information (weight, calories, ingredients, nutrition). Logos: <b>logo mark</b> (symbol), <b>logo type</b> (typography), <b>combination mark</b>.</li></ol>
<p><b>Product line</b>: closely related products (same function, customers, outlets or price range), e.g. Pringles Original, Flavoured, Light, in 170 g and 40 g.</p>
<h3>5. Branding</h3>
<p><b>Brand</b> (AMA): identifies the goods or services of a seller and differentiates them from competitors.</p>
${T(['Advantages to consumers','Advantages to organizations'],[['identification, communicates features and benefits, reduces purchase risk, quality and value, simplifies the decision, symbolic values, self-esteem, social integration','brand equity, preference and loyalty, barrier to competition, legal protection, premium price, retail leverage, better success for new products, basis for extensions']])}
${T(['','Existing product category','New product category'],[['Existing brand name','<b>Line extension</b> (new forms, colours, sizes, flavours)','<b>Brand extension</b> (current name to a new category)'],['New brand name','<b>Multibrands</b> (many brands in one category)','<b>New brands</b> (weakening name, or new category where the name is inappropriate)']])}
<ul><li>Strong brands are positioned on <b>attributes</b>, then <b>desirable benefits</b>, then <b>beliefs and values</b> (deepest engagement).</li>
<li><b>Identity</b> = how the brand wants to be seen; <b>image</b> = how people actually see it; <b>equity</b> = the economic and strategic value built through identity and image (Apple: $154.1b in 2016, first in Forbes’ ranking).</li>
<li>Sustainable brand: identify relevant issues, implement aligned actions (products, supply chain, communication, employment). Eco-design reduces impact across the life cycle: new concept, raw materials, reduction, production, logistics, usage phase, product life, end of life.</li></ul>
`;

SHEETS.s5=`
<div class="eyebrow">Session 5</div><h2>Price</h2>
<p class="lede">Goal: define price, follow the five-step pricing decision process, calculate mark-up prices and break-even volumes, and explain psychological and ethical pricing.</p>
<p><b>Price</b>: what a company charges for a product or service; the sum of the values customers perceive versus the costs of purchasing it. Viewpoints: customers (best quality at the lowest price), marketers (competitive advantage or profit), economists (supply and demand), accountants (cover all costs).</p>
${F('Pricing decision-making process (Kotler, 2000)\n1. Select the pricing objective\n2. Estimate costs\n3. Analyse competitors’ costs and prices\n4. Select a pricing method\n5. Set the price')}
<h3>1. Pricing objectives</h3>
<ul><li><b>Market penetration</b>: a low initial price to penetrate quickly, win market share and loyal customers.</li>
<li><b>Market skimming</b>: a high initial price to skim revenue layer by layer, then reduce it over time.</li>
<li><b>Product-mix pricing</b>: prices that maximize profit on the whole mix: product line (iPhone versions), optional products (Tesla options), captive products (Gillette razors / blades, HP printers / ink), by-products (wood chips sold as biomass), product bundles (Microsoft 365).</li></ul>
<h3>2. Costs</h3>
${T(['Cost','Definition','Example'],[['Fixed','do not vary with production or sales','rent, interest, insurance, plant, wages, R&amp;D'],['Variable','rise with production','raw materials, parts, packaging, transport'],['Direct','clearly due to one product','cocoa and sugar for Dairy Milk, advertising for that product'],['Indirect','cannot be attributed to one product','the chief executive’s car, plant and wages shared by products']])}
<h3>3. Competitors</h3><p>Track competitors’ prices, quality and features; check in-store and on comparison websites; decide to charge more, the same or less.</p>
<h3>4. Pricing methods</h3>
${F('Mark-up pricing:  unit cost = variable cost + fixed cost / unit sales\n                  mark-up price = unit cost / (1 − desired return on sales)\nTarget-return pricing:  break-even volume = fixed cost / (price − variable cost)\nPerceived-value pricing: based on the customer’s perceived value')}
${EX('Furniture manufacturer (course example)','worked example',F('VC = €90, FC = €30 000, expected sales 1 000 units\nUnit cost = 90 + 30 000 / 1 000 = €120\nManufacturer, 40% mark-up on sales: 120 / (1 − 0.40) = €200\nRetailer, 20% mark-up on sales: 200 / (1 − 0.20) = €250\nBreak-even at a price of €120: 30 000 / (120 − 90) = 1 000 units')+NOTE('<b>Computed by the site</b>: the slides ask the two mark-up questions without giving the answers.'))}
${TRAP('The mark-up “on sales” divides by (1 − r): a 40% mark-up on sales of a €120 cost gives €200, not 120 × 1.4 = €168.')}
<h3>5. Setting the price</h3>
<ul><li>Align with the overall marketing strategy (Tesla’s high-end positioning → high prices), organizational considerations (top management in small firms, a pricing department in large ones) and market demand (<b>price elasticity</b>: the sensitivity of demand to price changes).</li>
<li><b>Consumer psychology</b>: past purchases, online research, formal and informal communications; <b>psychological pricing</b> (Peugeot 206 at €19 950); <b>reference prices</b> (internal reference or an external “regular retail price”).</li>
<li>Perceived value: buyer’s image of performance, on-time delivery, warranty quality, customer support (Louis Vuitton: style, exclusivity, versatility, durability, craftsmanship).</li>
<li>Ethics: Temu (very low prices, suppliers put in competition, gamified promotions, data capture, products not meeting EU standards) vs <b>C’est qui le patron?</b> (cooperative, consumers set specifications, fair price to producers, milk at €0.99, first with Carrefour).</li></ul>
`;

SHEETS.s6=`
<div class="eyebrow">Session 6</div><h2>Distribution (place)</h2>
<p class="lede">Goal: explain how intermediaries add value, describe channel systems (direct, indirect, multichannel, short channels), and make channel-management decisions including sustainability.</p>
<h3>1. How intermediaries add value</h3>
<p>Intermediaries provide <b>economies of scale</b>: they reduce the number of contacts between producers and customers.</p>
${T(['Function','Meaning','Example'],[['Information','gather and distribute information about consumers and producers','research agency, CRM'],['Promotion','develop and communicate offers','designers, promotion agencies'],['Contact','find and engage customers and prospective buyers','brokers, wholesalers'],['Matching','shape offers to buyers’ needs (manufacturing, grading, assembling, packaging)','factories'],['Negotiation','reach an agreement on price','buyers, brokers'],['Physical distribution','transport and store goods','logistics companies']])}
<h3>2. Channel systems</h3>
${T(['Channel','Example'],[['Producer → consumer (direct)','pick-your-own, farmers’ market'],['Producer → retailer → consumer','La Redoute sources furniture from the manufacturer'],['Producer → wholesaler → retailer → consumer','Knorr → wholesalers → Carrefour']])}
<ul><li><b>Short channel</b>: at most one intermediary (farm shops, online marketplace, shop sourcing from producers); renewed interest for environmental, social (direct link) and economic (local economy) reasons, though the footprint is not necessarily better (heated greenhouses).</li>
<li><b>Multiple-channel distribution</b>: one firm uses two or more channels to reach its targets (catalogues/internet, retailers, distributors and dealers, own sales force), e.g. coffee in high-street shops, universities, retailers, supermarkets, vending machines.</li></ul>
<h3>3. Channel management decisions</h3>
<ol><li><b>Analyse customer needs</b>: how customers search, purchase and get after-sales; 73% use multiple channels (click and collect, buy in store and deliver home, QR codes); shopping experience (Castorama city stores, Hyundai showroom in a mall, Apple Stores: 529 stores, 34% of sales, Genius Bar, no sales incentives). Hybrid models: click and collect, book and buy (85% of bookings lead to a purchase), store to web.</li>
<li><b>Evaluate new channel alternatives</b>: type of intermediary (affects image, market entry, prices: Red Bull first sold through student representatives), number of intermediaries (<b>exclusive</b> distribution: few, to control service level; <b>intensive</b> distribution: as many outlets as possible), terms and responsibilities (price policy, conditions of sale, services). Merchandising (Haribo’s six categories).</li>
<li><b>Assess the sustainability of the channel system</b>: sustainable logistics (cleaner vehicles, load factors, collection points, collaborative delivery), promoting sustainable ranges, reducing food waste (retail = 14% of food waste, ADEME), bulk goods.</li></ol>
`;

SHEETS.s7=`
<div class="eyebrow">Session 7</div><h2>Communication (promotion)</h2>
<p class="lede">Goal: describe the five promotion tools of integrated marketing communications, content and digital marketing, and the five steps of an effective communication plan, including budget methods.</p>
<h3>1. Integrated marketing communications (IMC)</h3>
<p><b>IMC</b>: the specific blend of promotion tools the company uses to persuasively communicate customer value and build customer relationships.</p>
${T(['Tool','Definition','Examples'],[['Advertising','paid, non-personal presentation and promotion of goods and services','TV, radio, cinema, billboards, influencers, podcast sponsorships, shoppable video ads'],['Sales promotion','short-term incentives to encourage purchase or sale','buy one get one free, 50% off, free shipping, limited drops, codes, bundles, cashback'],['Personal selling','personal interactions by the sales force to engage customers, sell and build relationships','Vorwerk Thermomix direct selling'],['Public relations','activities to engage the company’s publics and build good relations','news stories, features, sponsorships, events'],['Direct and digital marketing','engaging directly with targeted consumers for an immediate response and lasting relationships','direct mail, email, catalogues, social media, mobile']])}
<ul><li><b>Content marketing</b>: creating, inspiring and sharing brand messages and conversations across paid, owned, earned and shared media (Lena Situations × Vinted); content by the brand, influencers or users; to educate, inform or entertain and engage.</li>
<li>Digital advertising now captures <b>more than 50%</b> of advertising spend; websites, social media, apps and games allow targeted, personalized ads. Back Market’s campaign against “fast tech” (the tech sector ≈ 4% of GHG emissions, 14% by 2040) and ADEME’s responsible-consumption campaign illustrate purpose-driven communication.</li></ul>
<h3>2. Developing effective marketing communications (5 steps)</h3>
<ol><li><b>Identify the target audience</b> (current users or potential buyers, individuals or groups): it affects what, how, when, where and who says it. M&amp;M’s: 15–25-year-olds.</li>
<li><b>Determine the communication objectives</b>: the buyer-readiness stages <b>awareness → knowledge → liking → preference → conviction → purchase</b> (a new product aims at awareness).</li>
<li><b>Design the message</b>: content (appeal: humour, rational, emotional, moral), structure (give the conclusion or ask a question; strengths and weaknesses), format (headline, pictures, colours).</li>
<li><b>Choose channels and media</b>: personal (face-to-face, mail, email, chat) vs non-personal (major media, atmospheres, events).</li>
<li><b>Set the budget and implement</b>.</li></ol>
${T(['Budget method','Principle'],[['Arbitrary','set without a precise rule'],['Affordable','what the company thinks it can afford'],['Percentage of sales','a % of (forecasted) sales'],['Competitive parity','match competitors (e.g. 40% × total market expenditure)'],['Objective and task','set objectives, then compute the cost of the tasks to reach them']])}
<p>Communication plan: audience (from the STP), objectives, message, media, budget; brands use an <b>editorial calendar</b> to plan content.</p>
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
${T(['Topic','Key content'],[
['Marketing','engage customers, build relationships, create value, capture value in return'],
['Concepts','production → product → selling → marketing → societal marketing'],
['Process','corporate strategy → environmental scan → STP (strategic) → 4 Ps → implementation and control (operational)'],
['Environment','micro: company, suppliers, intermediaries, customers, competitors, publics · macro: PESTEL'],
['SWOT','S/W internal (never competitors) · O/T external (never the company)'],
['Competition','direct (Coke/Pepsi) · close (soft drinks) · substitute (coffee/energy drinks) · indirect (ice cream)'],
['Segmentation','geographic, demographic, geo-demographic, psychographic, mediagraphic, behavioural · measurable, accessible, substantial, differentiable, operational'],
['Targeting','undifferentiated → differentiated → concentrated (niche) → micromarketing'],
['Positioning statement','For (target + need), (brand) is (concept) that (point of difference)'],
['Product levels','core value → actual product → augmented product'],
['Services','intangibility, inseparability, variability, perishability'],
['Brand matrix','line extension · brand extension · multibrands · new brands'],
['Pricing process','objective → costs → competitors → method → set the price'],
['Distribution decisions','customer needs → new channel alternatives → sustainability'],
['Promotion tools','advertising, sales promotion, personal selling, PR, direct and digital'],
['Communication steps','audience → objectives (AKLPCP) → message → media → budget']])}
${T(['Formula','Use'],[['Unit cost = VC + FC / unit sales','mark-up pricing'],['Mark-up price = unit cost / (1 − return on sales)','mark-up on sales'],['Break-even volume = FC / (price − VC)','target-return pricing']])}
<h3>Exam checklist</h3>
<ol><li>Define the concept before applying it (definitions from Kotler and Armstrong as on the slides).</li>
<li>Case questions: classify each fact (PESTEL factor, S/W/O/T, type of competition) and justify in one line.</li>
<li>STP: name the segmentation variables, justify the target with the attractiveness criteria, write a positioning statement in the standard form.</li>
<li>Pricing: write the formula, then the numbers; check the mark-up “on sales”.</li>
<li>Always tie the 4 Ps back to the target and positioning.</li></ol>
`;

/* ---------- quiz ---------- */
const Q=(id,topic,src,q,o,e)=>({id,topic,src,q,o,a:0,e});
const QUIZ=[
Q('q0','s1','course','According to Kotler et al. (2021), marketing is the process by which companies engage customers, build strong relationships and create customer value in order to…',['capture value from customers in return','maximize sales volume','reduce costs','sell what the company makes'],'The fourth element of the definition.'),
Q('q1','s1','course','Demarketing aims to:',['discourage consumers from buying a product, for the short or longer term','increase demand for a declining product','market products to businesses','remove a brand from the market'],'Levy and Kotler (1971): e.g. reduce consumption of cigarettes or protect limited resources.'),
Q('q2','s1','course','“Sell what the company makes rather than make what the customer wants” describes:',['the selling concept','the marketing concept','the societal marketing concept','the product concept'],'Selling = heavy selling of existing products (push); marketing = satisfy customer needs (pull).'),
Q('q3','s1','course','A group of buyers willing and able to buy products to satisfy a class of needs is:',['a market','an industry','a segment','a channel'],'An industry is a group of sellers offering close substitutes.'),
Q('q4','s1','course','The societal marketing concept balances:',['company profits, customer wants and society’s interests','production costs and prices','product quality and features','selling effort and promotion'],'Delivering value while contributing to consumers’ and society’s well-being.'),
Q('q5','s1','course','Which concept focuses on large production, wide availability and low prices?',['Production concept','Product concept','Selling concept','Marketing concept'],'Product concept = performance and quality; selling = large-scale selling effort.'),
Q('q6','s1','course','In the marketing process, the marketing mix (4 Ps) belongs to:',['operational marketing','strategic marketing','corporate strategy','the environmental scan'],'Strategic marketing = analysis and key decisions (strategy, scan, STP); operational = action and control (4 Ps, implementation).'),
Q('q7','s1','course','The two main challenges for marketing managers named in the course are:',['new digital technologies, and social and environmental concerns','globalization and inflation','competition and regulation','price wars and distribution'],'Kotler and Armstrong (2021), p. 42.'),
Q('q8','s1','course','Sustainable marketing meets present needs of consumers and businesses while:',['preserving or enhancing the ability of future generations to meet their needs','maximizing short-term profit','reducing all advertising','using only recycled packaging'],'Kotler and Armstrong (2021), p. 47.'),
Q('q9','s1','course','A mission statement declares:',['the purpose of the organization and how it serves its customers','the company’s financial targets','the list of products and prices','the core values only'],'It describes the offer, the target customer and gives strategic directions to employees; values are the standards guiding how business is done.'),
Q('q10','s1','course','An insurer selling through a broker to consumers is an example of:',['B2B2C','B2C','B2B2U','C2C'],'Insurer → broker → consumer.'),
Q('q11','s1','practice','Which is an industry rather than a market?',['The air travel industry: airlines offering close substitutes','People wanting to travel by plane','Consumers ordering prepared meals','Students looking for running shoes'],'Industry = sellers; market = buyers.'),
Q('q12','s2','course','The micro-environment consists of:',['the company, suppliers, marketing intermediaries, customers, competitors and publics','political, economic, social, technological, environmental and legal forces','only the company and its customers','the 4 Ps'],'The macro-environment = PESTEL forces.'),
Q('q13','s2','course','Household disposable income and unemployment figures are which PESTEL factor?',['Economic','Social','Political','Legal'],'Economic factors include trade cycles, unemployment and disposable income.'),
Q('q14','s2','course','Tony’s Chocolonely: “EU regulations specify permitted ingredients in chocolate” is a…',['Legal factor','Political factor','Social factor','Economic factor'],'Laws and regulations = Legal. A European Parliament resolution urging action is Political.'),
Q('q15','s2','course','Tony’s Chocolonely: “hotter temperatures and less rainfall cause droughts on cocoa plantations” is a…',['Environmental factor','Economic factor','Technological factor','Social factor'],'Weather and climate change = Environmental.'),
Q('q16','s2','course','In a SWOT, “sushi shops are developing competing poke bowls” (for Pokawa) is a:',['Threat','Weakness','Opportunity','Strength'],'A development in the external environment.'),
Q('q17','s2','course','In a SWOT, “limited product range and low advertising budget” are:',['Weaknesses','Threats','Opportunities','Strengths'],'Internal limitations.'),
Q('q18','s2','course','Which statement about the SWOT is correct?',['Competitors are never described in the internal analysis','Opportunities are internal factors','The company’s actions belong in the external analysis','SWOT is only an external analysis'],'Internal = company; external = environment, market and competitors.'),
Q('q19','s2','course','Coffee and energy drinks are an example of:',['substitute competition','direct competition','indirect competition','close competition'],'Different products satisfying a similar need.'),
Q('q20','s2','course','Coca-Cola and Pepsi are an example of:',['direct competition','substitute competition','indirect competition','close competition'],'Almost identical products.'),
Q('q21','s2','course','Ice creams and yogurts targeting the same customers as a soft drink brand are:',['indirect competition','direct competition','substitute competition','close competition'],'Different products, same customers.'),
Q('q22','s2','practice','The steps of managing marketing are:',['analysis, planning, implementation and organization, control','planning, selling, pricing, control','PESTEL, SWOT, STP, 4 Ps','research, promotion, distribution, feedback'],'Café chain business challenge (Kotler and Armstrong, p. 74).'),
Q('q23','s2','practice','“A new law bans plastic packaging from 2028” is which PESTEL factor for a food brand?',['Legal','Environmental','Political','Technological'],'New laws and regulations = Legal (the motive may be environmental, but the factor is the law).'),
Q('q24','s3','course','Market segmentation is:',['dividing a total market into subgroups of buyers who share similar characteristics','choosing the segments to serve','placing a brand in consumers’ minds','setting different prices'],'Targeting selects segments; positioning places the offer in minds.'),
Q('q25','s3','course','Lifestyles, values and personalities are bases for:',['psychographic segmentation','demographic segmentation','geographic segmentation','behavioural segmentation'],'VALS is a psychographic tool.'),
Q('q26','s3','course','Usage rate, loyalty status and benefits sought are bases for:',['behavioural segmentation','psychographic segmentation','demographic segmentation','mediagraphic segmentation'],'Behavioural variables relate to the purchase and use of the product.'),
Q('q27','s3','course','A segment that is “big enough to be profitable” is:',['substantial','measurable','accessible','differentiable'],'The five criteria: measurable, accessible, substantial, differentiable, operational.'),
Q('q28','s3','course','Segments that are conceptually distinct and respond differently to marketing-mix elements are:',['differentiable','operational','substantial','accessible'],'Kotler and Armstrong (2021), p. 213.'),
Q('q29','s3','course','Targeting several segments with a separate offer for each is:',['differentiated (segmented) marketing','undifferentiated (mass) marketing','concentrated (niche) marketing','micromarketing'],'Mass ignores differences; niche takes a large share of a small market; micromarketing is local or individual.'),
Q('q30','s3','course','Which factor is NOT one of the three for evaluating segment attractiveness?',['The segment’s preferred advertising medium','Size and growth','Structural attractiveness','Company objectives and resources'],'The largest, fastest-growing segment is not always the most attractive.'),
Q('q31','s3','course','Positioning is:',['the place a brand occupies in the minds of the target market relative to competing brands','the choice of distribution channels','the price level relative to costs','the selection of a target segment'],'How customers see the brand compared with the competition.'),
Q('q32','s3','course','GoPro, first launched for extreme sports, used positioning:',['for specific usage occasions','by price/quality','by the end user','on attributes'],'Masterson et al. (2017).'),
Q('q33','s3','course','Monoprix p’tit prix vs Monoprix Gourmet illustrates positioning:',['by price/quality','on benefits or needs','for usage occasions','on attributes'],'Two quality-price levels.'),
Q('q34','s3','course','In Kapferer’s brand positioning, the “reason to believe” is:',['tangible proof that consumers will receive the promised benefits','the brand’s target','the main competitor','the slogan'],'The four elements: benefits, target, reason to believe, main competitors.'),
Q('q35','s3','course','The standard form of a positioning statement is:',['For (target and need), our (brand) is (concept) that (point of difference)','(Brand) sells (product) at (price)','Our mission is to (purpose)','We target (segment) through (channel)'],'Airbnb: “For travelers seeking an authentic local experience, Airbnb is a platform that…”.'),
Q('q36','s3','practice','A segmentation of running-shoe buyers by “short distance, regular, very long distance/trail” uses:',['behavioural (usage) variables','geographic variables','demographic variables','mediagraphic variables'],'Usage of the product.'),
Q('q37','s4','course','A service is:',['an intangible activity or benefit that does not result in ownership','a tangible good with attributes','an interaction affecting a multi-dimensional response','a product line'],'The latter is an experience.'),
Q('q38','s4','course','For Colgate, “cleans your teeth” is the:',['core customer value','actual product','augmented product','product line'],'Core = what the buyer really buys.'),
Q('q39','s4','course','A phone number to call if unsatisfied belongs to the:',['augmented product','core customer value','actual product','packaging'],'Supporting services and benefits.'),
Q('q40','s4','course','“Services cannot be stored for later sale or use” describes:',['perishability','intangibility','inseparability','variability'],'Kotler and Armstrong (2021), p. 248.'),
Q('q41','s4','course','“The quality of a service depends on who provides it and when, where and how” describes:',['variability','inseparability','perishability','intangibility'],'Inseparability = cannot be separated from the provider.'),
Q('q42','s4','course','Extending an existing brand name to new forms, colours, sizes or flavours in the same category is:',['a line extension','a brand extension','multibranding','a new brand'],'Brand extension = existing name in a new category.'),
Q('q43','s4','course','Extending a current brand name to a product in a new category is:',['a brand extension','a line extension','multibranding','co-branding'],'Kotler and Armstrong (2021), p. 259.'),
Q('q44','s4','course','In the product life cycle, “improve quality, add features, new outlets, skimming stops” corresponds to:',['growth','introduction','maturity','decline'],'Masterson et al. (2017), p. 454.'),
Q('q45','s4','course','In the product life cycle, profits are typically negative during:',['product development and introduction','growth','maturity','decline only'],'Losses and investment before and at launch.'),
Q('q46','s4','course','Packaging that protects the product during shipping is:',['tertiary packaging','primary packaging','secondary packaging','labelling'],'Primary = close protection; secondary = branding and display.'),
Q('q47','s4','course','A logo based only on typography is a:',['logo type','logo mark','combination mark','label'],'Logo mark = symbol; combination mark = both.'),
Q('q48','s4','course','How the brand wants to be seen is its:',['identity','image','equity','positioning statement'],'Image = how people actually see it; equity = the value built through identity and image.'),
Q('q49','s4','course','Which is an advantage of brands to organizations (not to consumers)?',['Legal protection and premium prices','Reduced purchase risk','Simplified purchase decision','Self-esteem and social integration'],'The others are advantages to consumers.'),
Q('q50','s4','practice','Bénédicta launching a spicy mayonnaise in a new squeezable format under the same name is:',['a line extension','a brand extension','a new brand','multibranding'],'Same category (condiments), existing name, new flavour/format.'),
Q('q51','s5','course','Setting a low initial price to win market share quickly is:',['market penetration pricing','market skimming pricing','perceived-value pricing','captive-product pricing'],'Skimming starts high and lowers the price over time.'),
Q('q52','s5','course','Gillette razors priced low with higher-margin blades illustrate:',['captive-product pricing (product-mix pricing)','penetration pricing','bundle pricing','psychological pricing'],'HP printers and ink cartridges work the same way.'),
Q('q53','s5','course','The first step of the pricing decision process is:',['select the pricing objective','estimate costs','analyse competitors','select a pricing method'],'Then costs, competitors, method, set the price.'),
Q('q54','s5','course','Raw materials and product parts are:',['variable costs','fixed costs','indirect costs','overheads'],'They rise with production.'),
Q('q55','s5','course','The chief executive’s car is an example of:',['an indirect cost','a direct cost','a variable cost','a selling price'],'It cannot be attributed to one product.'),
Q('q56','s5','course','Variable cost €90 per unit, fixed costs €30 000, price €120. Break-even volume?',['1 000 units','250 units','333 units','1 333 units'],'30 000 / (120 − 90) = 1 000.'),
Q('q57','s5','course','Unit cost €120; the manufacturer wants a 40% mark-up on sales. Mark-up price?',['€200','€168','€160','€300'],'120 / (1 − 0.40) = 200.'),
Q('q58','s5','course','A price of €19 950 instead of €20 000 (Peugeot 206) is:',['psychological pricing','reference pricing','penetration pricing','cost-plus pricing'],'Just below a round number.'),
Q('q59','s5','course','Microsoft 365 selling Word, Excel and PowerPoint for one subscription is:',['product bundle pricing','by-product pricing','optional-product pricing','skimming'],'One price for a set of products.'),
Q('q60','s5','course','“C’est qui le patron?” illustrates:',['an ethical, customer-centric pricing policy paying producers a fair price','penetration pricing by Temu','psychological pricing','captive-product pricing'],'Consumers set the specifications; first product: milk at €0.99.'),
Q('q61','s5','practice','Selling wood chips left over from furniture production as biomass fuel is:',['by-product pricing','captive-product pricing','bundle pricing','optional-product pricing'],'Product-mix pricing, Kotler and Armstrong p. 320.'),
Q('q62','s6','course','Which intermediary function means “transporting and storing goods”?',['Physical distribution','Matching','Contact','Negotiation'],'Logistics companies.'),
Q('q63','s6','course','“Shaping offers to meet buyers’ needs (grading, assembling, packaging)” is the function of:',['matching','contact','promotion','information'],'Kotler and Armstrong (2021), p. 346.'),
Q('q64','s6','course','Knorr products sold to wholesalers, who sell to Carrefour, which sells to consumers, is:',['a two-level indirect channel (producer → wholesaler → retailer → consumer)','a direct channel','a one-level channel','a short channel'],'Pick-your-own is direct; La Redoute is producer → retailer → consumer.'),
Q('q65','s6','course','A short channel system has:',['at most one intermediary between producer and consumer','no physical store','only online sales','exactly two intermediaries'],'Farm shops, online marketplaces, shops sourcing from producers.'),
Q('q66','s6','course','Placing products in as many outlets as possible is:',['intensive distribution','exclusive distribution','selective franchising','multichannel distribution'],'Exclusive distribution limits intermediaries to control the service level.'),
Q('q67','s6','course','A firm using catalogues, retailers, dealers and its own sales force to reach different segments uses:',['a multiple-channel distribution system','a short channel','exclusive distribution','a direct channel only'],'Kotler and Armstrong (2021), p. 352.'),
Q('q68','s6','course','The three channel management decisions are:',['analyse customer needs, evaluate new channel alternatives, assess sustainability','choose price, product and promotion','select wholesalers, retailers and agents','plan, implement, control'],'Kotler and Armstrong (2021).'),
Q('q69','s6','course','Booking a product online then finalizing the purchase in store is:',['book and buy','click and collect','store to web','drop shipping'],'85% of bookings lead to a purchase.'),
Q('q70','s7','course','Integrated marketing communications is:',['the blend of promotion tools used to persuasively communicate customer value and build relationships','advertising on several TV channels','a single campaign across Europe','the sales department'],'Five tools: advertising, sales promotion, personal selling, PR, direct and digital.'),
Q('q71','s7','course','“Paid, non-personal presentation and promotion of goods and services” defines:',['advertising','public relations','sales promotion','content marketing'],'PR builds good relations with publics.'),
Q('q72','s7','course','Buy one get one free and cashback are:',['sales promotion','advertising','personal selling','public relations'],'Short-term incentives.'),
Q('q73','s7','course','Vorwerk Thermomix sold exclusively through direct selling illustrates:',['personal selling','advertising','PR','sales promotion'],'Personal interactions by the sales force.'),
Q('q74','s7','course','Sponsorships, events and news stories belong to:',['public relations','advertising','direct marketing','sales promotion'],'Kotler and Armstrong (2021), p. 425.'),
Q('q75','s7','course','The buyer-readiness stages are:',['awareness, knowledge, liking, preference, conviction, purchase','attention, interest, desire, action','introduction, growth, maturity, decline','search, purchase, after-sales'],'Used to set the communication objective.'),
Q('q76','s7','course','The first step to develop effective marketing communications is:',['identify the target audience','set the budget','design the message','choose the media'],'Then objectives, message, channels and media, budget.'),
Q('q77','s7','course','Setting objectives, then computing the cost of the tasks needed to reach them, is the:',['objective-and-task method','percentage-of-sales method','competitive-parity method','affordable method'],'The other methods do not start from objectives.'),
Q('q78','s7','course','Humour, rational, emotional and moral appeals concern the message’s:',['content','structure','format','channel'],'Structure = conclusion or question; format = headline, pictures, colours.'),
Q('q79','s7','course','Content marketing shares brand messages across:',['paid, owned, earned and shared media','TV only','sales promotions','personal selling'],'Lena Situations × Vinted.'),
Q('q80','s7','practice','Digital advertising now represents:',['more than 50% of all advertising spend','about 10% of advertising spend','less than radio','nothing measurable'],'Kotler and Armstrong (2021), p. 412.'),
Q('q81','s7','practice','Face-to-face conversations, email and chat are:',['personal communication channels','non-personal communication channels','atmospheres','events'],'Non-personal = major media, atmospheres, events.')];

/* ---------- exercises ---------- */
const EXERCISES=[
{id:'x-s1-concepts',topic:'s1',type:'order',src:'course',title:'Evolution of marketing concepts',q:'Put the marketing concepts in their historical order.',items:['Production concept','Product concept','Selling concept','Marketing concept','Societal marketing concept']},
{id:'x-s1-process',topic:'s1',type:'order',src:'course',title:'The marketing process',q:'Put the steps of the marketing process in order.',items:['Corporate strategy (objectives, mission, values)','Environmental scan (market and competitor analysis)','Segmentation, targeting and positioning','Marketing mix (4 Ps)','Implementation and control']},
{id:'x-s1-defs',topic:'s1',type:'match',src:'course',title:'Session 1 definitions',q:'Match each term with its definition.',
 pairs:[['Market','buyers willing and able to buy to satisfy a class of needs'],['Industry','sellers offering similar products that are close substitutes'],['Demarketing','discouraging consumers from buying a product'],['Values','standards guiding the way the company does business'],['Mission','the purpose of the organization and how it serves customers'],['Sustainable marketing','meeting present needs while preserving future generations’ ability to meet theirs']]},
{id:'x-s1-patagonia',topic:'s1',type:'case',src:'course',title:'Values and mission (self-assessed)',q:'<p>Choose a company you know (or Bénédicta / Patagonia). Write its core values (3) and a mission statement that states its purpose, its offer, its target customer and how it serves them.</p>',
 solution:'<p>Check against the definitions: <b>values</b> = standards guiding how business is done (e.g. integrity, innovation, customer focus, sustainability). <b>Mission</b> = action-based statement of the purpose and how customers are served: it describes the offer, names the target and gives employees a direction. Example (Patagonia’s published purpose): “We’re in business to save our home planet.”</p>'},
{id:'x-s2-pestel',topic:'s2',type:'match',src:'course',title:'Tony’s Chocolonely: PESTEL',q:'Assign each challenge to its PESTEL factor (site’s classification, no answer key).',
 pairs:[['Global cocoa prices affect farmers’ livelihoods','Economic'],['Recession lowers disposable income','Economic'],['EU regulations specify permitted ingredients','Legal'],['Ethical concerns increasingly influence consumers','Social'],['European Parliament resolution on child labour','Political'],['Drought caused by hotter temperatures','Environmental']],extra:['Technological']},
{id:'x-s2-swot',topic:'s2',type:'match',src:'course',title:'SWOT: Pokawa (poke bowls)',q:'Classify each item in Pokawa’s SWOT.',
 pairs:[['Market leader in Hawaiian food in France','Strength'],['Excellent relationships with fresh-ingredient suppliers','Strength'],['Limited product range','Weakness'],['Low advertising and promotion budget','Weakness'],['Growing student population and dual-income families','Opportunity'],['Sushi shops develop competing poke bowls','Threat']]},
{id:'x-s2-compet',topic:'s2',type:'match',src:'course',title:'Four types of competition',q:'Match each example with the type of competition (for a cola brand).',
 pairs:[['Pepsi for Coca-Cola','Direct competition'],['Other soft drinks','Close competition'],['Coffee or energy drinks','Substitute competition'],['Ice creams and yogurts targeting the same customers','Indirect competition']]},
{id:'x-s2-micro',topic:'s2',type:'mcq',src:'course',title:'Micro or macro?',q:'Which actors belong to the micro-environment? (select all)',o:['Suppliers','Marketing intermediaries','Competitors','Publics','Climate change','Inflation'],a:[0,1,2,3],e:'Micro = company, suppliers, intermediaries, customers, competitors, publics. Climate change and inflation are macro (PESTEL) forces.'},
{id:'x-s2-case',topic:'s2',type:'case',src:'practice',title:'Mini case: an oat-milk start-up',q:'<p>OatUp, a French oat-milk brand, is sold in 300 organic shops. It has a patented low-sugar recipe but a small marketing team. Plant-based diets are growing among 18–35-year-olds; Alpro and Oatly are launching cheaper oat drinks; the EU is discussing a ban on dairy terms for plant drinks; the price of oats rose 20% after droughts.</p>',
 parts:[{type:'mcq',q:'The patented low-sugar recipe is a…',o:['Strength','Opportunity','Weakness','Threat'],a:0},{type:'mcq',q:'The small marketing team is a…',o:['Weakness','Threat','Strength','Opportunity'],a:0},
  {type:'mcq',q:'Growth of plant-based diets among 18–35s is a…',o:['Opportunity','Strength','Threat','Weakness'],a:0},{type:'mcq',q:'Alpro and Oatly’s cheaper drinks are a…',o:['Threat','Weakness','Opportunity','Strength'],a:0},
  {type:'mcq',q:'The EU discussion on dairy terms is which PESTEL factor?',o:['Legal (and political)','Social','Technological','Economic'],a:0},{type:'mcq',q:'Oat price rise after droughts: which PESTEL factors?',o:['Economic and environmental','Social only','Technological','Legal'],a:0}],
 solution:'<p>Internal: recipe (S), small team (W). External: diet trend (O), competitors’ cheaper products (T), EU regulation (Legal / Political), oat prices after droughts (Economic, with an Environmental cause).</p>'},
{id:'x-s3-bases',topic:'s3',type:'match',src:'course',title:'Segmentation variables',q:'Match each variable with its segmentation basis.',
 pairs:[['Urban or rural','Geographic'],['Age and family life cycle','Demographic'],['House type and location (ACORN)','Geo-demographic'],['Lifestyle and values (VALS)','Psychographic'],['Social media habits','Mediagraphic'],['Heavy, medium or light user','Behavioural']]},
{id:'x-s3-criteria',topic:'s3',type:'match',src:'course',title:'Criteria for good segments',q:'Match each criterion with its meaning.',
 pairs:[['Measurable','size, purchasing power and profile can be measured'],['Accessible','the segment can be reached and served effectively'],['Substantial','big enough to be profitable'],['Differentiable','responds differently to marketing-mix elements'],['Operational','useful to design a specific marketing mix']]},
{id:'x-s3-target',topic:'s3',type:'order',src:'course',title:'Targeting strategies: from broad to narrow',q:'Order the targeting strategies from the broadest to the narrowest.',items:['Undifferentiated (mass) marketing','Differentiated (segmented) marketing','Concentrated (niche) marketing','Micromarketing (local or individual)']},
{id:'x-s3-posit',topic:'s3',type:'match',src:'course',title:'Positioning strategies',q:'Match each example with its positioning strategy.',
 pairs:[['Head &amp; Shoulders eliminates dandruff','attributes / product features'],['Monoprix p’tit prix vs Gourmet','price / quality'],['GoPro launched for extreme sports','usage occasion'],['Mir Black for black clothes','benefits or needs'],['SNCF offers by type of traveller','end user']]},
{id:'x-s3-stp',topic:'s3',type:'order',src:'course',title:'STP in order',q:'Put the STP steps in order.',items:['Divide the market into segments','Evaluate the attractiveness of each segment','Select the target segment(s)','Position the offer in the minds of the target','Design the marketing mix for the target']},
{id:'x-s3-statement',topic:'s3',type:'case',src:'course',title:'Write a positioning statement (self-assessed)',q:'<p>Write a positioning statement for a new Bénédicta sauce targeting 20–30-year-olds, using the standard form, and give a reason to believe.</p>',
 solution:'<p>Form: <i>For (target segment and need), (brand/product) is (concept) that (point of difference to competition).</i> Example: <i>For 20–30-year-olds who cook quick meals with friends, Bénédicta Street is the sauce range that turns any dish into street food, because it brings bold world flavours in a squeezable sharing bottle.</i> Reason to believe: the Bénédicta know-how in sauces since 1924 (check facts in the brief), recipe or format evidence. Check: one precise target, one need, one point of difference versus competitors (Heinz, Amora, private labels).</p>'},
{id:'x-s4-levels',topic:'s4',type:'match',src:'course',title:'Three levels of a product (Colgate)',q:'Match each element with its product level.',
 pairs:[['Cleans your teeth','Core customer value'],['Whitening and gum care features','Actual product'],['Colgate brand name and packaging','Actual product'],['Returns and refunds offered','Augmented product'],['Telephone number if unsatisfied','Augmented product']]},
{id:'x-s4-services',topic:'s4',type:'match',src:'course',title:'Four characteristics of services',q:'Match each example with the characteristic of services.',
 pairs:[['You cannot test a flight before buying the ticket','Intangibility'],['The restaurant experience depends on the chef present that night','Variability'],['An empty seat on today’s train cannot be sold tomorrow','Perishability'],['A haircut cannot be separated from the hairdresser','Inseparability']]},
{id:'x-s4-brand',topic:'s4',type:'match',src:'course',title:'Brand development strategies',q:'Match each decision with its brand strategy.',
 pairs:[['Existing name, existing category, new flavour','Line extension'],['Existing name, new category','Brand extension'],['New name, existing category','Multibrands'],['New name, new category','New brands']]},
{id:'x-s4-plc',topic:'s4',type:'match',src:'course',title:'Product life cycle: marketing mix by stage',q:'Match each set of decisions with its PLC stage.',
 pairs:[['High advertising, sign up distributors, skimming or penetration','Introduction'],['Add features, build brand loyalty, new outlets, price falls','Growth'],['Reminder advertising, keep costs down, competitive price','Maturity'],['Limited range, cut back distribution, keep price low','Decline']]},
{id:'x-s4-decisions',topic:'s4',type:'order',src:'course',title:'Product and service decisions',q:'Put the four product and service decisions in the order of the course.',items:['Attributes (quality, features, style, design)','Branding','Packaging','Labelling and logos']},
{id:'x-s5-process',topic:'s5',type:'order',src:'course',title:'Pricing decision-making process',q:'Put the five steps in order (Kotler, 2000).',items:['Select the pricing objective','Estimate costs','Analyse competitors’ costs and prices','Select a pricing method','Set the price']},
{id:'x-s5-furniture',topic:'s5',type:'numeric',src:'course',title:'Furniture manufacturer: mark-up pricing',q:'<p>Variable cost €90 per unit, fixed costs €30 000, expected sales 1 000 units.</p>',
 parts:[{label:'Unit cost (€)',answer:120},{label:'Price with a 40% mark-up on sales (€)',answer:200},{label:'Retailer price with a 20% mark-up on sales (€)',answer:250},{label:'Break-even volume at a price of €120',answer:1000,tol:0}],
 solution:F('Unit cost = 90 + 30 000 / 1 000 = 120\nManufacturer: 120 / (1 − 0.40) = 200\nRetailer: 200 / (1 − 0.20) = 250\nBreak-even = 30 000 / (120 − 90) = 1 000 units')+NOTE('<b>Computed by the site</b>: the slides give the questions but not the answers.')},
{id:'x-s5-markup',topic:'s5',type:'calc',src:'practice',title:'Mark-up pricing (new numbers)',
 gen:u=>{const vc=u.step(10,200,5),units=u.pick([500,1000,2000,2500,5000]),fcu=u.step(5,100,5),r=u.pick([0.2,0.25,0.4,0.5]),r2=u.pick([0.2,0.25]);return {vc,units,fc:fcu*units,uc:vc+fcu,r,r2}},
 q:v=>`<p>Variable cost €${fmt(v.vc)} per unit, fixed costs €${fmt(v.fc)}, expected sales ${fmt(v.units)} units. The producer wants a ${v.r*100}% mark-up on sales; the retailer adds a ${v.r2*100}% mark-up on sales.</p>`,
 parts:[{label:'Unit cost (€)',answer:v=>v.uc},{label:'Producer price (€)',answer:v=>v.uc/(1-v.r)},{label:'Retailer price (€)',answer:v=>v.uc/(1-v.r)/(1-v.r2)}],
 solution:v=>F(`Unit cost = ${fmt(v.vc)} + ${fmt(v.fc)} / ${fmt(v.units)} = ${fmt(v.uc)}\nProducer = ${fmt(v.uc)} / (1 − ${v.r}) = ${fmt(Math.round(v.uc/(1-v.r)*100)/100)}\nRetailer = ${fmt(Math.round(v.uc/(1-v.r)*100)/100)} / (1 − ${v.r2}) = ${fmt(Math.round(v.uc/(1-v.r)/(1-v.r2)*100)/100)}`)},
{id:'x-s5-breakeven',topic:'s5',type:'calc',src:'practice',title:'Break-even volume (new numbers)',
 gen:u=>{const vc=u.step(5,100,5),m=u.pick([5,10,15,20,25,40,50]),be=u.step(200,5000,100);return {vc,p:vc+m,fc:m*be,be}},
 q:v=>`<p>Fixed costs €${fmt(v.fc)}, variable cost €${fmt(v.vc)} per unit, price €${fmt(v.p)}.</p>`,
 parts:[{label:'Break-even volume (units)',answer:v=>v.be,tol:0},{label:'Profit if 20% more units than break-even are sold (€)',answer:v=>0.2*v.be*(v.p-v.vc)}],
 solution:v=>F(`Break-even = ${fmt(v.fc)} / (${fmt(v.p)} − ${fmt(v.vc)}) = ${fmt(v.be)} units\nEach unit beyond break-even earns ${fmt(v.p-v.vc)}: ${fmt(0.2*v.be)} × ${fmt(v.p-v.vc)} = ${fmt(0.2*v.be*(v.p-v.vc))}`)},
{id:'x-s5-mix',topic:'s5',type:'match',src:'course',title:'Product-mix pricing',q:'Match each example with the product-mix pricing strategy (Kotler and Armstrong, p. 320).',
 pairs:[['iPhone versions for different segments','Product line pricing'],['Tesla Full Self-Driving option','Optional-product pricing'],['HP printers and ink cartridges','Captive-product pricing'],['Wood chips sold as biomass fuel','By-product pricing'],['Microsoft 365 subscription','Product bundle pricing']]},
{id:'x-s5-costs',topic:'s5',type:'match',src:'course',title:'Types of costs (milk drink factory)',q:'Match each cost with its type.',
 pairs:[['Plant construction','Fixed (and indirect)'],['Milk and sugar','Variable (and direct)'],['Advertising for this specific product','Direct'],['The chief executive’s car','Indirect']]},
{id:'x-s6-functions',topic:'s6',type:'match',src:'course',title:'How intermediaries add value',q:'Match each example with the intermediary function.',
 pairs:[['A research agency and a CRM system','Information'],['Designers and promotion agencies','Promotion'],['Brokers and wholesalers finding buyers','Contact'],['Grading, assembling and packaging the offer','Matching'],['Buyers agreeing on the price','Negotiation'],['Logistics companies transporting and storing','Physical distribution']]},
{id:'x-s6-decisions',topic:'s6',type:'order',src:'course',title:'Channel management decisions',q:'Put the three decisions in order.',items:['Analyse customer needs','Evaluate new channel alternatives','Assess the sustainability of the channel system']},
{id:'x-s6-channels',topic:'s6',type:'match',src:'course',title:'Channel systems and distribution intensity',q:'Match each example with the right concept.',
 pairs:[['Pick-your-own farm','Direct channel'],['La Redoute selling manufacturers’ furniture','One intermediary (retailer)'],['Knorr → wholesaler → Carrefour → consumer','Two intermediaries'],['Products in as many outlets as possible','Intensive distribution'],['Few selected intermediaries to control service','Exclusive distribution']]},
{id:'x-s7-tools',topic:'s7',type:'match',src:'course',title:'The five promotion tools',q:'Match each example with the promotion tool.',
 pairs:[['A billboard campaign','Advertising'],['Buy one, get one free','Sales promotion'],['Thermomix demonstrations at home','Personal selling'],['Sponsoring a festival','Public relations'],['A targeted email with a personal offer','Direct and digital marketing']]},
{id:'x-s7-steps',topic:'s7',type:'order',src:'course',title:'Developing effective marketing communications',q:'Put the five steps in order.',items:['Identify the target audience','Determine the communication objectives','Design the message','Choose the communication channels and media','Set the budget and implement']},
{id:'x-s7-brs',topic:'s7',type:'order',src:'course',title:'Buyer-readiness stages',q:'Put the buyer-readiness stages in order.',items:['Awareness','Knowledge','Liking','Preference','Conviction','Purchase']},
{id:'x-s7-budget',topic:'s7',type:'match',src:'course',title:'Promotion budget methods',q:'Match each description with the budget method.',
 pairs:[['What the company thinks it can afford','Affordable method'],['A share of forecasted sales','Percentage-of-sales method'],['Matching what competitors spend','Competitive-parity method'],['Set objectives, then cost the tasks','Objective-and-task method'],['No precise rule','Arbitrary method']]},
{id:'x-s7-budgetcalc',topic:'s7',type:'calc',src:'practice',title:'Promotion budget (new numbers)',
 gen:u=>{const sales=u.step(200000,5000000,100000),pct=u.pick([2,3,4,5,8,10]),market=u.step(1000000,20000000,500000),share=u.pick([5,10,15,20,40]);return {sales,pct,market,share}},
 q:v=>`<p>Forecasted sales €${fmt(v.sales)}. Total promotion spending in the market €${fmt(v.market)}.</p>`,
 parts:[{label:v=>`Percentage of sales at ${v.pct}% (€)`,answer:v=>v.sales*v.pct/100},{label:v=>`Competitive parity at ${v.share}% of the market’s spending (€)`,answer:v=>v.market*v.share/100}],
 solution:v=>F(`${v.pct}% × ${fmt(v.sales)} = ${fmt(v.sales*v.pct/100)}\n${v.share}% × ${fmt(v.market)} = ${fmt(v.market*v.share/100)}`)},
{id:'x-s7-plan',topic:'s7',type:'case',src:'course',title:'Communication plan (self-assessed)',q:'<p>Using the five steps, outline a communication plan for a new Bénédicta sauce aimed at 20–30-year-olds: audience, objective (buyer-readiness stage), message (content, structure, format), media, budget method.</p>',
 solution:'<p>Model: <b>Audience</b>: 20–30-year-olds cooking at home with friends (from the STP). <b>Objective</b>: awareness then preference (new product). <b>Message</b>: emotional, fun content (“street food at home”), conclusion given, colourful visuals. <b>Media</b>: Instagram and TikTok (content and influencer marketing), in-store sales promotion and sampling, PR at food festivals; personal and non-personal channels. <b>Budget</b>: objective-and-task method, checked against competitive parity. Use an editorial calendar.</p>'}];

/* ---------- flashcards ---------- */
const C=(id,topic,f,b)=>({id,topic,f,b});
const CARDS=[
C('c0','s1','Marketing (Kotler et al., 2021)','engage customers, build strong relationships, create customer value, to capture value in return'),
C('c1','s1','Demarketing','discouraging consumers from buying a product (Levy and Kotler, 1971)'),C('c2','s1','Selling vs marketing','sell what the company makes (push) vs make what the customer wants (pull)'),
C('c3','s1','Market vs industry','market = buyers with willingness and ability to buy · industry = sellers of close substitutes'),
C('c4','s1','Five marketing concepts','production → product → selling → marketing → societal marketing'),C('c5','s1','Societal marketing','balances company profits, customer wants and society’s interests'),
C('c6','s1','Strategic vs operational marketing','strategy, scan, STP (analysis and decisions) vs 4 Ps, implementation and control (action)'),
C('c7','s1','Sustainable marketing','meets present needs while preserving or enhancing future generations’ ability to meet theirs'),C('c8','s1','Mission statement','purpose of the organization and how it serves customers; offer, target, direction'),
C('c9','s2','Micro-environment','company, suppliers, marketing intermediaries, customers, competitors, publics'),C('c10','s2','PESTEL','Political, Economic, Social, Technological, Environmental, Legal'),
C('c11','s2','SWOT rule','S/W internal (never competitors) · O/T external (never the company)'),C('c12','s2','Four types of competition','direct · close · substitute · indirect'),
C('c13','s2','Substitute vs indirect competition','substitute: different product, similar need (coffee vs energy drink) · indirect: different product, same customers (ice cream)'),
C('c14','s3','Segmentation bases (B2C)','geographic, demographic, geo-demographic, psychographic, mediagraphic, behavioural'),
C('c15','s3','Criteria for good segments','measurable, accessible, substantial, differentiable, operational'),C('c16','s3','Evaluating segments','size and growth · structural attractiveness · company objectives and resources'),
C('c17','s3','Targeting strategies','undifferentiated · differentiated · concentrated (niche) · micromarketing'),C('c18','s3','Positioning','the place a brand occupies in the target’s mind relative to competitors'),
C('c19','s3','Positioning statement','For (target + need), (brand) is (concept) that (point of difference)'),C('c20','s3','Kapferer’s positioning','benefits · target · reason to believe · main competitors'),
C('c21','s3','Five positioning strategies','attributes · price/quality · usage occasion · benefits/needs · end user'),
C('c22','s4','Three product levels','core customer value · actual product · augmented product'),C('c23','s4','Four characteristics of services','intangibility, inseparability, variability, perishability'),
C('c24','s4','Product life cycle','(development) introduction, growth, maturity, decline'),C('c25','s4','Four product decisions','attributes · branding · packaging · labelling and logos'),
C('c26','s4','Brand development matrix','line extension · brand extension · multibrands · new brands'),C('c27','s4','Identity, image, equity','how the brand wants to be seen · how it is seen · value built through both'),
C('c28','s4','Packaging levels','primary (close protection) · secondary (branding, display) · tertiary (shipping)'),C('c29','s4','Logo types','logo mark (symbol) · logo type (typography) · combination mark'),
C('c30','s5','Price (definition)','what a company charges; the sum of values customers perceive vs the costs of purchasing'),
C('c31','s5','Pricing process','objective → costs → competitors → method → set the price'),C('c32','s5','Penetration vs skimming','low price to win share fast vs high price lowered over time'),
C('c33','s5','Mark-up price','unit cost / (1 − desired return on sales); unit cost = VC + FC / unit sales'),C('c34','s5','Break-even volume','fixed cost / (price − variable cost)'),
C('c35','s5','Product-mix pricing','product line, optional, captive, by-product, bundle'),C('c36','s5','Psychological and reference pricing','€19 950 instead of €20 000 · comparison with an internal or posted reference price'),
C('c37','s6','Intermediary functions','information, promotion, contact, matching, negotiation, physical distribution'),C('c38','s6','Short channel','at most one intermediary between producer and consumer'),
C('c39','s6','Intensive vs exclusive distribution','as many outlets as possible vs few, to control the service level'),C('c40','s6','Channel management decisions','customer needs → new channel alternatives → sustainability'),
C('c41','s7','Five promotion tools','advertising, sales promotion, personal selling, public relations, direct and digital marketing'),
C('c42','s7','Buyer-readiness stages','awareness, knowledge, liking, preference, conviction, purchase'),C('c43','s7','Five communication steps','audience → objectives → message → media → budget'),
C('c44','s7','Budget methods','arbitrary, affordable, % of sales, competitive parity, objective and task'),C('c45','s7','Content marketing','sharing brand messages across paid, owned, earned and shared media')];

/* ---------- mock exams ---------- */
/* ---------- v2 (24/11/2026): layered sheets, figures, glossary, generators and tools (CONVENTIONS.md section 16) ---------- */
const {FIG,LAYERED}=Rev.h;
const U=Rev.u,n2=x=>fmt(U.round(x,2));
const OUT='<b>Outside the slides:</b>';

/* ---------- v2: figures ---------- */
const FIG_PLC=FIG({xmin:0,xmax:10,ymin:-12,ymax:46,xl:'time',yl:'€',xticks:false,curves:[{f:x=>x<1?0:x<2?6*(x-1):x<3.5?6+28*(x-2)/1.5:x<5.5?34+3*(x-3.5):x<7?40-0.5*(x-5.5)**2:Math.max(0,38.9-6*(x-7)),c:'--debit',l:'sales',lx:4.8},{f:x=>x<1?-3*x:x<2?-3-5*(x-1):x<3.5?-8+16*(x-2):x<5.5?16-1*(x-3.5):x<7?14-4*(x-5.5):Math.max(-10,8-7*(x-7)),c:'--ok',l:'profit',lx:3.2}],
  lines:[{x1:0,y1:0,x2:10,y2:0,c:'--muted',w:1}],vx:[{x:1,l:'intro',c:'--muted',dash:true,ly:44},{x:2,l:'growth',c:'--muted',dash:true,ly:40},{x:4.5,l:'maturity',c:'--muted',dash:true,ly:44},{x:7,l:'decline',c:'--muted',dash:true,ly:44}]},
  'Product life cycle: losses during development and introduction, profits peak in growth to maturity, sales peak in maturity, both fall in decline (shape drawn by the site; Danone: Skyr, Mix, Danone nature, Bulle de yaourt).');
const FIG_MAP=FIG({xmin:0,xmax:10,ymin:0,ymax:10,xl:'unhealthy → healthy',yl:'choice',xticks:false,
  points:[{x:2,y:8.5,l:'Burger chain A'},{x:3,y:3,l:'Burger shop B'},{x:7.5,y:7,l:'Salad chain C',left:true},{x:8.5,y:2.5,l:'Poke bar D',left:true}],lines:[{x1:5,y1:0,x2:5,y2:10,c:'--muted',dash:true,w:1},{x1:0,y1:5,x2:10,y2:5,c:'--muted',dash:true,w:1}]},
  'Positioning map on the axes of the slide (wide vs limited choice, junk vs healthy). The brands are placed by the site to illustrate: a zone with no brand nearby (here healthy with a medium choice) is a possible positioning gap, if enough consumers want it.');
const beSpec=(P,V,FC,xmax,Q)=>{const be=FC/(P-V),ymax=Math.max(P*xmax,FC+V*xmax)*1.05;return {xmax,ymax,xl:'units',yl:'€',curves:[{f:x=>P*x,c:'--debit',l:'total revenue',lx:xmax*0.75},{f:x=>FC+V*x,c:'--credit',l:'total cost',lx:xmax*0.93},{f:()=>FC,c:'--muted',dash:true,l:'fixed cost',lx:xmax*0.85}],
  areas:be>0&&be<xmax?[{pts:[[0,FC],[be,P*be],[0,0]],c:'--bad',l:'losses'},{pts:[[be,P*be],[xmax,P*xmax],[xmax,FC+V*xmax]],c:'--ok',l:'profits'}]:[],points:be>0&&be<xmax?[{x:be,y:P*be,l:'break-even'}]:[],vx:Q?[{x:Q,l:'expected',c:'--ledger',dash:true}]:[]}};
const FIG_BE=FIG(beSpec(120,90,30000,2000,1000),'Furniture manufacturer at a price of €120: total revenue meets total cost (€30 000 + €90 per unit) at 1 000 units. Below: losses; above: profits.');

/* ---------- v2: layered sheets ---------- */
SHEETS.s1=LAYERED(SHEETS.s1,[
 {id:'s1-def',ess:'<p>Marketing: engage customers, build strong relationships and create customer value in order to <b>capture value in return</b> (Kotler). Marketing makes what customers want (pull); selling pushes what the company makes. Demarketing discourages demand.</p>',
  tryit:{q:'A city campaign asking people to use less water is an example of…',o:['demarketing','selling','mass marketing'],a:0,e:'It deliberately reduces demand.'}},
 {id:'s1-principles',ess:'<p>Core principles: customer value and satisfaction, valuable relationships, markets, offers. A <b>market</b> = the buyers; an <b>industry</b> = the sellers of close substitutes.</p>',
  tryit:{q:'All the airlines flying in Europe form…',o:['an industry','a market','a segment'],a:0,e:'Sellers = industry; buyers = market.'}},
 {id:'s1-concepts',ess:'<p>Production → product → selling → marketing → <b>societal marketing</b> (value for the customer and for society’s well-being, balancing profit, wants and society’s interests).</p>',tryit:{q:'A firm focused on producing large volumes cheaply follows the…',o:['production concept','marketing concept','societal marketing concept'],a:0,e:'Wide availability at a low price.'}},
 {id:'s1-process',ess:'<p>Strategic marketing: corporate strategy (mission, values) → environmental scan → <b>STP</b>. Operational marketing: the <b>marketing mix</b> (4 Ps), then implementation and control.</p>',
  tryit:{q:'Which step comes right before the marketing mix?',o:['Segmentation, targeting, positioning','The environmental scan','The corporate strategy'],a:0,e:'You choose and position for a target before designing the 4 Ps for it.'}},
 {id:'s1-challenges',ess:'<p>Two challenges: <b>digital technologies</b> (social media, big data, AI personalization) and <b>social and environmental concerns</b> (sustainable marketing: meet today’s needs without harming future generations).</p>',
  tryit:{q:'Personalized recommendations by an algorithm illustrate which challenge?',o:['New digital technologies','Social and environmental concerns','Demarketing'],a:0,e:'AI and big data.'}},
 {id:'s1-mission',ess:'<p><b>Values</b> = what the company stands for (integrity, innovation…). <b>Mission</b> = what the company does, for whom and why (action-based, gives direction to employees).</p>',
  tryit:{q:'“We make outdoor gear to protect the planet” is…',o:['a mission statement','a value','a positioning map'],a:0,e:'It states the purpose and how the company serves customers.'}}]);
SHEETS.s2=LAYERED(SHEETS.s2,[
 {id:'s2-manage',ess:'<p>Managing marketing: <b>analysis → planning → implementation → control</b> (café chain: survey, revise the offer, apply in every shop, check sales).</p>',
  tryit:{q:'Checking whether a new menu raised sales is the… step',o:['control','planning','analysis'],a:0,e:'Control measures the effect of what was implemented.'}},
 {id:'s2-env',ess:'<p><b>Micro</b>-environment: company, suppliers, intermediaries, customers, competitors, publics. <b>Macro</b>-environment: <b>PESTEL</b> (political, economic, social, technological, environmental, legal).</p>',tryit:{q:'EU rules on the ingredients allowed in chocolate are a… factor',o:['legal','political','social'],a:0,e:'Tony’s Chocolonely exercise: a regulation is legal.'}},
 {id:'s2-swot',ess:'<p>Strengths and weaknesses are <b>internal</b> (the company, its brand and mix); opportunities and threats are <b>external</b> (PESTEL, competition, demand).</p>',
  tryit:{q:'A competitor opens 50 shops near yours. In your SWOT it is…',o:['a threat','a weakness','an opportunity'],a:0,e:'A competitor’s move is external: never a weakness.'}},
 {id:'s2-compet',ess:'<p>Competition: <b>direct</b> (almost identical: Coca-Cola / Pepsi), <b>close</b> (similar product, same need), <b>substitute</b> (different product, similar need: coffee / energy drinks), <b>indirect</b> (different product, same customers).</p>',
  tryit:{q:'Coffee for an energy-drink brand is…',o:['substitute competition','direct competition','indirect competition'],a:0,e:'Different product, similar need (staying awake).'}}]);
SHEETS.s3=LAYERED(SHEETS.s3,[
 {id:'s3-seg',ess:'<p>Segment on geographic, demographic, geo-demographic, psychographic, mediagraphic or behavioural bases. A good segment is <b>measurable, accessible, substantial, differentiable, operational</b>.</p>',
  tryit:{q:'Segmenting by usage rate (heavy vs light users) is…',o:['behavioural','demographic','psychographic'],a:0,e:'Behaviour toward the product.'}},
 {id:'s3-target',ess:'<p>Evaluate size and growth, structural attractiveness, company objectives and resources. Strategies from broad to narrow: undifferentiated, differentiated, concentrated (niche), micromarketing.</p>',
  tryit:{q:'A brand that sells only gluten-free pasta to coeliac consumers practises…',o:['concentrated (niche) marketing','undifferentiated marketing','differentiated marketing'],a:0,e:'A large share of one small segment.'}},
 {id:'s3-pos',ess:'<p>Positioning = the place the brand occupies in the minds of the target versus competitors. Tools: <b>positioning map</b>, positioning strategies, Kapferer’s benefits / target / reason to believe / competitors, positioning statement.</p>',extra:FIG_MAP,
  tryit:{q:'In Kapferer’s model, the proof that the promise will be kept is the…',o:['reason to believe','target','benefit'],a:0,e:'Tangible assets that reassure consumers.'}}]);
SHEETS.s4=LAYERED(SHEETS.s4,[
 {id:'s4-levels',ess:'<p>Three levels: <b>core customer value</b> (what is really bought), <b>actual product</b> (features, design, quality, brand, packaging), <b>augmented product</b> (services and benefits). Colgate: clean teeth → whitening tube → refunds and helpline.</p>',
  tryit:{q:'A 2-year warranty on a phone belongs to the…',o:['augmented product','actual product','core customer value'],a:0,e:'A supporting service.'}},
 {id:'s4-plc',ess:'<p>Introduction → growth → maturity → decline. The 4 Ps change with the stage: high promotion and skimming or penetration at launch, falling prices in growth, defending share in maturity, cutting costs or deleting in decline.</p>',extra:FIG_PLC,
  tryit:{q:'Sales grow fast, competitors enter, prices start to fall: which stage?',o:['Growth','Introduction','Maturity','Decline'],a:0,e:'Danone Mix in the course example.'}},
 {id:'s4-services',ess:'<p>Services are <b>intangible</b>, <b>inseparable</b> from their providers, <b>variable</b> in quality, <b>perishable</b> (cannot be stored).</p>',
  tryit:{q:'Empty seats on a flight that has left illustrate…',o:['perishability','intangibility','variability'],a:0,e:'The seat cannot be stored and sold later.'}},
 {id:'s4-decisions',ess:'<p>Four decisions: <b>attributes</b> (quality, features, style, design), <b>branding</b>, <b>packaging</b> (primary, secondary, tertiary), <b>labels and logos</b> (logo mark, logo type, combination mark).</p>',
  tryit:{q:'The shipping carton holding 24 boxes of cereal is the… packaging',o:['tertiary','primary','secondary'],a:0,e:'Protection and shipping.'}},
 {id:'s4-brand',ess:'<p>Brand strategies: <b>line extension</b> (existing name, existing category), <b>brand extension</b> (existing name, new category), <b>multibrands</b> (new names, existing category), <b>new brands</b>. Identity (wanted) vs image (perceived) → equity.</p>',
  tryit:{q:'A chocolate brand launches an ice cream under its name: this is…',o:['a brand extension','a line extension','a multibrand strategy'],a:0,e:'Existing name, new category.'}}]);
SHEETS.s5=LAYERED(SHEETS.s5,[
 {id:'s5-obj',ess:'<p><b>Penetration</b>: low initial price to win share fast. <b>Skimming</b>: high initial price, lowered over time. Product-mix pricing: line, optional, captive, by-products, bundles.</p>',
  tryit:{q:'Cheap printers and expensive ink cartridges are…',o:['captive-product pricing','by-product pricing','product-bundle pricing'],a:0,e:'HP printers / ink, Gillette razors / blades.'}},
 {id:'s5-costs',ess:'<p><b>Fixed</b> costs do not vary with output (rent, insurance); <b>variable</b> costs rise with output (materials, packaging); <b>direct</b> costs belong to one product; <b>indirect</b> costs are shared.</p>',
  tryit:{q:'Packaging of each chocolate bar is a…',o:['variable cost','fixed cost','indirect cost'],a:0,e:'It rises with each unit produced.'}},
 {id:'s5-compet',ess:'<p>Track competitors’ prices, quality and features (stores, comparison websites) and decide to charge more, the same or less, consistently with your positioning.</p>',
  tryit:{q:'A premium brand finds competitors 20% cheaper. Its first question is…',o:['Does our perceived value justify charging more?','How to copy their price?','How to leave the market?'],a:0,e:'Price follows positioning and perceived value.'}},
 {id:'s5-methods',ess:`${F('Unit cost = VC + FC / unit sales     Mark-up price = unit cost / (1 − mark-up on sales)\nBreak-even volume = FC / (price − VC)')}`,extra:FIG_BE,
  tryit:{q:'Unit cost €120, mark-up of 40% on sales. Price?',answer:200,unit:'€',tol:0.01,e:'120 / (1 − 0.40) = €200, not 120 × 1.4.'}},
 {id:'s5-set',ess:'<p>Set the price in line with the marketing strategy, the organization and demand (<b>price elasticity</b>); use consumer psychology (psychological prices like €19 950, reference prices) and stay ethical (Temu vs C’est qui le patron?).</p>',
  tryit:{q:'Showing a crossed-out “regular price” next to the sale price uses…',o:['an external reference price','captive pricing','penetration pricing'],a:0,e:'Consumers compare with a reference.'}}]);
SHEETS.s6=LAYERED(SHEETS.s6,[
 {id:'s6-value',ess:'<p>Intermediaries cut the number of contacts (economies of scale) and perform information, promotion, contact, matching, negotiation, physical distribution, financing and risk-taking.</p>',
  tryit:{q:'3 producers sell to 3 customers. Contacts without and with one distributor?',o:['9 and 6','6 and 9','9 and 3'],a:0,e:'3 × 3 = 9 direct contacts; 3 + 3 = 6 through one intermediary.'}},
 {id:'s6-channels',ess:'<p>Direct (producer → consumer) or indirect channels with one or more levels; <b>short channels</b> (at most one intermediary); <b>multichannel</b> distribution.</p>',
  tryit:{q:'Knorr → wholesaler → Carrefour → consumer is a channel with…',o:['two intermediaries','one intermediary','no intermediary'],a:0,e:'Wholesaler and retailer.'}},
 {id:'s6-decisions',ess:'<p>Three decisions: analyse customer needs (omnichannel, click and collect), evaluate alternatives (type and number of intermediaries: <b>exclusive</b> vs <b>intensive</b> distribution; terms), assess sustainability.</p>',
  tryit:{q:'A luxury watch sold through a handful of selected boutiques uses…',o:['exclusive distribution','intensive distribution','a short channel by law'],a:0,e:'Few outlets to control image and service.'}}]);
SHEETS.s7=LAYERED(SHEETS.s7,[
 {id:'s7-imc',ess:'<p>IMC blends five tools: <b>advertising</b> (paid, non-personal), <b>sales promotion</b> (short-term incentives), <b>personal selling</b>, <b>public relations</b>, <b>direct and digital marketing</b>; plus content marketing across paid, owned, earned and shared media.</p>',
  tryit:{q:'“Buy one, get one free” is…',o:['sales promotion','advertising','public relations'],a:0,e:'A short-term incentive.'}},
 {id:'s7-steps',ess:'<p>Five steps: target audience → objectives (awareness → knowledge → liking → preference → conviction → purchase) → message → channels and media → budget (arbitrary, affordable, % of sales, competitive parity, objective and task).</p>',
  tryit:{q:'A brand-new product mainly aims at which buyer-readiness stage?',o:['Awareness','Conviction','Purchase'],a:0,e:'People must first know it exists.'}}]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Marketing','Engaging customers, building relationships and creating customer value to capture value in return (Kotler).','s1'],
['Demarketing','A strategy that discourages demand, for a short or longer term.','s1'],
['Market','The set of actual and potential buyers with the willingness and ability to buy.','s1'],
['Industry','The group of firms offering close substitutes (the sellers).','s1'],
['Societal marketing concept','Delivering value while contributing to consumers’ and society’s well-being.','s1',['societal marketing']],
['Sustainable marketing','Marketing that meets present needs while preserving future generations’ ability to meet theirs.','s1'],
['Mission statement','An action-based statement of the organization’s purpose and how it serves customers.','s1',['mission']],
['Marketing mix','The 4 Ps: product, price, place, promotion.','s1',['4 Ps']],
['Marketing environment','Actors and forces outside marketing that affect relationships with target customers.','s2'],
['Micro-environment','Actors close to the company: company, suppliers, intermediaries, customers, competitors, publics.','s2',['micro-environment']],
['Macro-environment','Larger societal forces: PESTEL.','s2'],
['PESTEL','Political, economic, social, technological, environmental and legal factors.','s2'],
['SWOT analysis','Internal strengths and weaknesses, external opportunities and threats.','s2',['SWOT']],
['Direct competition','Competitors with almost identical products (Coca-Cola, Pepsi).','s2'],
['Substitute competition','Different products satisfying a similar need (coffee, energy drinks).','s2'],
['Market segmentation','Dividing a market into subgroups of buyers with similar characteristics.','s3',['segmentation']],
['Behavioural segmentation','Segments based on occasions, benefits sought, usage rate, loyalty…','s3'],
['Psychographic segmentation','Segments based on lifestyles, values, motives, personalities.','s3'],
['Market targeting','Selecting one or more segments to serve.','s3',['targeting']],
['Concentrated marketing','Niche marketing: a large share of a small market.','s3',['niche marketing']],
['Differentiated marketing','Several segments, a separate offer for each.','s3'],
['Undifferentiated marketing','Mass marketing: one offer for the whole market.','s3',['mass marketing']],
['Micromarketing','Local or individual marketing.','s3'],
['Positioning','The place a brand occupies in the minds of the target relative to competitors.','s3'],
['Positioning map','A two-axis map placing brands as consumers perceive them.','s3',['perceptual map']],
['Positioning statement','For (target and need), (brand) is (concept) that (point of difference).','s3'],
['Reason to believe','Tangible proof that a brand will keep its promise (Kapferer).','s3'],
['Product','A tangible good offering a bundle of attributes to satisfy a need.','s4'],
['Service','An intangible activity or benefit that does not result in ownership.','s4'],
['Core customer value','What the buyer is really buying (Colgate: clean teeth).','s4'],
['Augmented product','Supporting services and benefits around the actual product.','s4'],
['Product life cycle','Introduction, growth, maturity and decline of a product’s sales and profits.','s4',['PLC']],
['Perishability','Services cannot be stored for later sale or use.','s4'],
['Brand','A name, term or symbol identifying a seller’s goods and differentiating them (AMA).','s4'],
['Brand equity','The economic and strategic value built by a brand’s identity and image.','s4'],
['Line extension','An existing brand name for new forms, sizes or flavours in the same category.','s4'],
['Brand extension','An existing brand name applied to a new category.','s4'],
['Price','What a company charges; the values customers perceive versus the cost of buying.','s5'],
['Market penetration pricing','A low initial price to win market share quickly.','s5',['penetration']],
['Market skimming pricing','A high initial price lowered over time to skim revenue layer by layer.','s5',['skimming']],
['Captive-product pricing','Low price on the main product, profits on the products that must be used with it.','s5'],
['Mark-up pricing','Unit cost divided by (1 − desired mark-up on sales).','s5',['mark-up']],
['Break-even volume','Fixed costs / (price − variable cost): the volume where profit is zero.','s5',['break-even']],
['Price elasticity','The sensitivity of demand to price changes.','s5'],
['Reference price','The internal or external price consumers compare an observed price with.','s5'],
['Marketing intermediaries','Firms between producer and consumer that add value (wholesalers, retailers).','s6',['intermediaries']],
['Short channel','A distribution channel with at most one intermediary.','s6'],
['Exclusive distribution','A few selected outlets, to control image and service.','s6'],
['Intensive distribution','As many outlets as possible.','s6'],
['Integrated marketing communications','The coordinated blend of promotion tools.','s7',['IMC']],
['Sales promotion','Short-term incentives to encourage purchase.','s7'],
['Public relations','Building good relations with publics and favourable publicity.','s7'],
['Content marketing','Creating and sharing brand content across paid, owned, earned and shared media.','s7'],
['Buyer-readiness stages','Awareness, knowledge, liking, preference, conviction, purchase.','s7'],
['Objective-and-task method','A promotion budget built from the cost of the tasks needed to reach the objectives.','s7']
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators ---------- */
const GENS=[
{kind:'gen',id:'g-s5-markup',topic:'s5',title:'Mark-up pricing along the channel',blurb:'Unit cost, producer price, retailer price; the “× (1 + r)” trap',levels:['Producer price','Producer and retailer','Divide or multiply?'],
 gen:(u,lv)=>{const vc=u.step(10,200,5),units=u.pick([500,1000,2000,2500,5000]),fcu=u.step(5,100,5),r=u.pick([0.2,0.25,0.3,0.4,0.5]),r2=u.pick([0.15,0.2,0.25,0.3]);return {lv,vc,units,fc:fcu*units,uc:vc+fcu,r,r2}},
 q:v=>`<p>Variable cost €${fmt(v.vc)} per unit, fixed costs €${fmt(v.fc)}, expected sales ${fmt(v.units)} units. The producer wants a ${v.r*100}% mark-up on sales${v.lv===1?`; the retailer then adds a ${v.r2*100}% mark-up on sales`:''}.</p>`,
 parts:v=>[{label:'Unit cost (€)',answer:v=>v.uc,tol:0.01},{label:'Producer price (€)',answer:v=>v.uc/(1-v.r),tol:0.01}].concat(v.lv===1?[{label:'Retailer price (€)',answer:v=>v.uc/(1-v.r)/(1-v.r2),tol:0.02}]:v.lv===2?[{label:'Wrong price if you multiply by (1 + r) (€)',answer:v=>v.uc*(1+v.r),tol:0.01},{label:'Actual return on sales at that wrong price (%)',answer:v=>v.r/(1+v.r)*100,tol:0.05}]:[]),
 steps:v=>{const p=v.uc/(1-v.r);const st=[`Unit cost = VC + FC / units = ${fmt(v.vc)} + ${fmt(v.fc)} / ${fmt(v.units)} = <b>${fmt(v.uc)}</b>.`,`Producer price = ${fmt(v.uc)} / (1 − ${v.r}) = <b>${n2(p)}</b>. Check: the mark-up ${n2(p-v.uc)} is ${v.r*100}% of the <b>selling price</b> ${n2(p)}.`];
   if(v.lv===1)st.push(`Retailer: its cost is the producer price → ${n2(p)} / (1 − ${v.r2}) = <b>${n2(p/(1-v.r2))}</b> (furniture example: 120 → 200 → 250).`);
   if(v.lv===2)st.push(`Multiplying gives ${fmt(v.uc)} × ${1+v.r} = <b>${n2(v.uc*(1+v.r))}</b>: the mark-up ${n2(v.uc*v.r)} is only ${n2(v.r/(1+v.r)*100)}% of that price, not ${v.r*100}%. A mark-up “on sales” is a share of the price, hence the division.`);return st}},
{kind:'gen',id:'g-s5-be',topic:'s5',title:'Break-even volume and target profit',blurb:'FC / (P − VC), units for a profit, price for a profit',levels:['Break-even volume','Units for a target profit','Price for a target profit'],
 gen:(u,lv)=>{const vc=u.step(5,150,5),m=u.pick([5,10,15,20,25,30,40,50]),be=u.step(200,5000,100),T=u.step(5000,100000,5000),Q=u.step(500,8000,100);return {lv,vc,p:vc+m,m,fc:m*be,be,T,Q}},
 q:v=>`<p>Fixed costs €${fmt(v.fc)}, variable cost €${fmt(v.vc)} per unit${v.lv<2?`, price €${fmt(v.p)}`:''}.${v.lv===1?` The company wants a profit of €${fmt(v.T)}.`:v.lv===2?` Expected sales ${fmt(v.Q)} units; target profit €${fmt(v.T)}.`:''}</p>`,
 parts:v=>v.lv===0?[{label:'Unit contribution (P − VC) (€)',answer:v=>v.m,tol:0.01},{label:'Break-even volume (units)',answer:v=>v.be,tol:0}]:v.lv===1?[{label:'Break-even volume (units)',answer:v=>v.be,tol:0},{label:'Units for the target profit',answer:v=>Math.ceil((v.fc+v.T)/v.m-1e-9),tol:0}]:[{label:'Price needed (€)',answer:v=>v.vc+(v.fc+v.T)/v.Q,tol:0.01}],
 steps:v=>v.lv===0?[`Each unit sold covers its variable cost and contributes ${fmt(v.p)} − ${fmt(v.vc)} = <b>${fmt(v.m)}</b> to fixed costs.`,`Break-even = ${fmt(v.fc)} / ${fmt(v.m)} = <b>${fmt(v.be)}</b> units: below, losses; above, each unit adds ${fmt(v.m)} of profit.`]
  :v.lv===1?[`Break-even = ${fmt(v.fc)} / ${fmt(v.m)} = <b>${fmt(v.be)}</b> units.`,`${OUT} the slides stop at break-even; the same logic gives the target: (FC + profit) / (P − VC) = (${fmt(v.fc)} + ${fmt(v.T)}) / ${fmt(v.m)} = ${n2((v.fc+v.T)/v.m)} → <b>${Math.ceil((v.fc+v.T)/v.m-1e-9)}</b> units (round up).`]
  :[`${OUT} price covering the variable cost plus a share of (FC + profit) per unit: P = VC + (FC + profit) / Q.`,`P = ${fmt(v.vc)} + (${fmt(v.fc)} + ${fmt(v.T)}) / ${fmt(v.Q)} = <b>${n2(v.vc+(v.fc+v.T)/v.Q)}</b>. Then check it fits the positioning and competitors’ prices (steps 3 and 5).`]},
{kind:'gen',id:'g-s5-elastic',topic:'s5',title:'Price elasticity (intuition)',blurb:'Elastic or inelastic, and what happens to revenue',
 gen:u=>{const p0=u.step(10,100,5),dp=u.pick([-20,-10,-5,5,10,20]),e=u.pick([-0.4,-0.5,-0.8,-1.5,-2,-2.5,-3]),q0=u.step(1000,20000,500);return {p0,dp,e,q0,dq:e*dp}},
 q:v=>`<p>${OUT} the slides only define price elasticity. A product sells ${fmt(v.q0)} units at €${v.p0}. The price changes by ${v.dp>0?'+':''}${v.dp}% and sales change by ${v.dq>0?'+':''}${n2(v.dq)}%.</p>`,
 parts:[{label:'Price elasticity (%Δq / %Δp)',answer:v=>v.e,tol:0.01},{label:'Demand is…',type:'choice',o:['elastic (|e| > 1)','inelastic (|e| < 1)'],a:v=>Math.abs(v.e)>1?0:1},{label:'Change in revenue (%)',answer:v=>((1+v.dp/100)*(1+v.dq/100)-1)*100,tol:0.05}],
 steps:v=>[`e = ${n2(v.dq)}% / ${v.dp}% = <b>${v.e}</b>: ${Math.abs(v.e)>1?'buyers react strongly (elastic)':'buyers react weakly (inelastic)'}.`,`Revenue = price × quantity → (1 ${v.dp>0?'+':'−'} ${Math.abs(v.dp)/100}) × (1 ${v.dq>0?'+':'−'} ${n2(Math.abs(v.dq)/100)}) − 1 = <b>${n2(((1+v.dp/100)*(1+v.dq/100)-1)*100)}%</b>.`,`Lesson: with elastic demand a price cut raises revenue (penetration logic); with inelastic demand a price rise raises revenue (skimming and premium brands).`]},
{kind:'gen',id:'g-s7-budget',topic:'s7',title:'Promotion budget methods',blurb:'Percentage of sales, competitive parity, objective and task',levels:['Percentage of sales','Competitive parity','Objective and task'],
 gen:(u,lv)=>({lv,sales:u.step(200000,5000000,100000),pct:u.pick([2,3,4,5,8,10]),market:u.step(1000000,20000000,500000),share:u.pick([5,10,15,20,40]),ads:u.int(2,8),adc:u.step(5000,40000,1000),inf:u.step(2000,30000,1000),samp:u.step(1000,20000,500),sc:u.pick([0.5,1,1.5,2])}),
 q:v=>v.lv===0?`<p>Forecasted sales €${fmt(v.sales)}. The company spends ${v.pct}% of sales on promotion.</p>`:v.lv===1?`<p>Total promotion spending of the market €${fmt(v.market)}. The company matches its ${v.share}% market share.</p>`
  :`<p>Objective: awareness among students. Tasks: ${v.ads} social-media campaigns at €${fmt(v.adc)} each, an influencer partnership at €${fmt(v.inf)}, ${fmt(v.samp)} free samples at €${v.sc} each.</p>`,
 parts:v=>[{label:'Promotion budget (€)',answer:v=>v.lv===0?v.sales*v.pct/100:v.lv===1?v.market*v.share/100:v.ads*v.adc+v.inf+v.samp*v.sc,tol:0.5},{label:'Which method starts from what must be achieved?',type:'choice',o:['Objective and task','Percentage of sales','Competitive parity','Affordable'],a:()=>0}],
 steps:v=>[v.lv===0?`${v.pct}% × ${fmt(v.sales)} = <b>${fmt(v.sales*v.pct/100)}</b>. Simple, but it makes sales the cause of promotion instead of its result.`:v.lv===1?`${v.share}% × ${fmt(v.market)} = <b>${fmt(v.market*v.share/100)}</b>: keeps pace with competitors, whose goals may differ.`
   :`${v.ads} × ${fmt(v.adc)} + ${fmt(v.inf)} + ${fmt(v.samp)} × ${v.sc} = <b>${fmt(v.ads*v.adc+v.inf+v.samp*v.sc)}</b>: built from the objectives, the most logical method.`,'The objective-and-task method starts from the objectives and costs the tasks needed to reach them.']}
];

/* ---------- v2: tools ---------- */
const TOOLS=[
{kind:'plot',id:'p-s5-be',topic:'s5',title:'Break-even chart',blurb:'Move price, variable cost, fixed costs and expected sales',
 params:[{k:'P',label:'Price (€)',min:50,max:400,step:5,v:120},{k:'V',label:'Variable cost per unit (€)',min:10,max:300,step:5,v:90},{k:'FC',label:'Fixed costs (€)',min:5000,max:100000,step:1000,v:30000},{k:'Q',label:'Expected sales (units)',min:100,max:2000,step:50,v:1000}],
 x:{max:2000,label:'units'},y:p=>({max:Math.max(p.P*2000,p.FC+p.V*2000)*1.05,label:'€'}),
 draw:p=>{const s=beSpec(p.P,p.V,p.FC,2000,p.Q);delete s.xmax;delete s.ymax;delete s.xl;delete s.yl;return s},
 readout:p=>{const m=p.P-p.V;if(m<=0)return '<p>The price does not even cover the variable cost: every unit sold increases the loss.</p>';const be=p.FC/m,pr=p.Q*m-p.FC;
  return T(['','Value'],[['Unit contribution',n2(m)],['Break-even volume',n2(be)],['Profit at expected sales',n2(pr)],['Unit cost at expected sales',n2(p.V+p.FC/p.Q)],['Mark-up price (40% on sales)',n2((p.V+p.FC/p.Q)/0.6)]],[1])+'<p class="hint">Default: the furniture manufacturer at €120 (break-even 1 000 units). Try €200, the price with a 40% mark-up: break-even falls to 273 units.</p>'}},
{kind:'plot',id:'p-s3-map',topic:'s3',title:'Positioning map',blurb:'Place your brand among competitors on two axes',
 params:[{k:'x',label:'Your brand: healthy (10) or junk (0)',min:0,max:10,step:0.5,v:5},{k:'y',label:'Your brand: wide choice (10) or limited (0)',min:0,max:10,step:0.5,v:5}],
 x:{min:0,max:10,label:'unhealthy → healthy'},y:{min:0,max:10,label:'choice'},
 draw:p=>({xticks:false,points:[{x:2,y:8.5,l:'A'},{x:3,y:3,l:'B'},{x:7.5,y:7,l:'C'},{x:8.5,y:2.5,l:'D'},{x:p.x,y:p.y,l:'You',c:'--bad'}],lines:[{x1:5,y1:0,x2:5,y2:10,c:'--muted',dash:true,w:1},{x1:0,y1:5,x2:10,y2:5,c:'--muted',dash:true,w:1}]}),
 readout:p=>{const B=[['A',2,8.5],['B',3,3],['C',7.5,7],['D',8.5,2.5]],d=B.map(b=>Math.hypot(b[1]-p.x,b[2]-p.y)),i=d.indexOf(Math.min(...d));
  return `<p>Closest competitor: <b>${B[i][0]}</b> (distance ${n2(d[i])}). ${d[i]<1.5?'You sit right next to it: consumers will compare you directly, so you need a clear point of difference.':'You hold a distinct place on the map: check that enough consumers want this combination (a segment that is substantial).'}</p><p class="hint">Axes from the slide (fast food); brands A–D placed by the site. A positioning map shows <b>perceptions</b>, not technical facts.</p>`}},
{kind:'tree',id:'tr-s5-price',topic:'s5',title:'Skimming or penetration?',blurb:'Choose the initial pricing objective of a new product',start:'q1',
 nodes:{q1:{q:'Is the market very price-sensitive (buyers compare and switch for a lower price)?',o:[{l:'Yes',to:'r_pen',why:'A low price wins the most buyers.'},{l:'No',to:'q2'}]},
  q2:{q:'Do the product’s quality and image support a high price, with enough buyers ready to pay it?',o:[{l:'Yes',to:'q3'},{l:'No',to:'r_pen2'}]},
  q3:{q:'Can competitors enter easily and undercut a high price?',o:[{l:'Yes',to:'r_pen3'},{l:'No',to:'r_skim'}]},
  r_pen:{end:'Market penetration: low initial price to win share quickly'},r_pen2:{end:'Penetration or a competitive price: a high price would not sell'},
  r_pen3:{end:'Penetration: a low price discourages entrants'},r_skim:{end:'Market skimming: high initial price, lowered over time'}},
 cases:[{text:'A new flagship smartphone with a strong brand and patented features.',path:{q1:1,q2:0,q3:1},why:'Patents and brand slow competitors down: skimming.'},{text:'A new low-cost online marketplace selling basic household items.',path:{q1:0},why:'Buyers compare prices: penetration (Temu-style).'},{text:'A high-end electric car brand targeting technology lovers.',path:{q1:1,q2:0,q3:1},why:'Tesla in the slides: high prices fit the positioning.'},{text:'A new soft drink in a crowded supermarket aisle.',path:{q1:0},why:'Penetration.'},{text:'A premium snack anyone can copy within months.',path:{q1:1,q2:0,q3:0},why:'Easy entry: penetration.'}],
 intro:`<p>${OUT} the slides define skimming and penetration; the conditions used here are the usual ones of Kotler and Armstrong.</p>`},
{kind:'tree',id:'tr-s3-target',topic:'s3',title:'Which targeting strategy?',blurb:'Undifferentiated, differentiated, concentrated or micromarketing',start:'q1',
 nodes:{q1:{q:'Does the company make one offer for the whole market, ignoring differences between segments?',o:[{l:'Yes',to:'r_u'},{l:'No',to:'q2'}]},
  q2:{q:'How does it target?',o:[{l:'Several segments, with a separate offer for each',to:'r_d'},{l:'One small segment, aiming at a large share of it',to:'r_c'},{l:'Local areas or individual customers',to:'r_m'}]},
  r_u:{end:'Undifferentiated (mass) marketing'},r_d:{end:'Differentiated (segmented) marketing'},r_c:{end:'Concentrated (niche) marketing'},r_m:{end:'Micromarketing (local or individual)'}},
 cases:[{text:'A salt producer sells one product to everyone.',path:{q1:0}},{text:'A hotel group runs budget, mid-range and luxury brands.',path:{q1:1,q2:0}},{text:'A brand sells only gluten-free pasta to coeliac consumers.',path:{q1:1,q2:1}},{text:'Sneakers customized online for each buyer.',path:{q1:1,q2:2}},{text:'Monoprix p’tit prix and Monoprix Gourmet for different shoppers.',path:{q1:1,q2:0}}]}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-s2-sortswot',topic:'s2',type:'sort',src:'practice',title:'SWOT of a coffee-shop chain',q:'Sort each item (internal: S/W; external: O/T).',cats:['Strength','Weakness','Opportunity','Threat'],
 items:[['Loyal customers and a strong brand','Strength'],['Excellent supplier relationships','Strength'],['Limited product range','Weakness'],['Low advertising budget','Weakness'],['Growing student population nearby','Opportunity'],['Rising demand for plant-based milk','Opportunity'],['A rival chain opens next door','Threat','a competitor’s move is external'],['Coffee bean prices are rising','Threat']]},
{id:'x-s2-sortpestel',topic:'s2',type:'sort',src:'practice',title:'PESTEL of an e-scooter rental company',q:'Sort each factor.',cats:['Political','Economic','Social','Technological','Environmental','Legal'],
 items:[['The city council debates banning rental scooters','Political'],['Household disposable income falls','Economic'],['Young urban people prefer access to ownership','Social'],['Longer-lasting batteries','Technological'],['Pressure to cut urban CO₂ emissions','Environmental'],['A new law limits scooter speed to 20 km/h','Legal']]},
{id:'x-s1-sort4p',topic:'s1',type:'sort',src:'course',title:'Which P of the marketing mix?',q:'Sort each decision.',cats:['Product','Price','Place','Promotion'],
 items:[['Adding a whitening feature to a toothpaste','Product'],['Designing a recyclable package','Product'],['Charging €19 950 instead of €20 000','Price'],['Bundling software subscriptions','Price'],['Selling through click and collect','Place'],['Choosing exclusive distribution','Place'],['A TikTok influencer campaign','Promotion'],['A “buy one get one free” offer','Promotion']]},
{id:'x-s4-sortserv',topic:'s4',type:'sort',src:'course',title:'Four characteristics of services',q:'Sort each example.',cats:['Intangibility','Inseparability','Variability','Perishability'],
 items:[['You cannot try a haircut before buying it','Intangibility'],['A concert cannot be judged before it happens','Intangibility'],['The singer must be there for the concert','Inseparability'],['A lawyer’s advice cannot be separated from the lawyer','Inseparability'],['The same restaurant is great one night and poor the next','Variability'],['Two bank advisers give different service','Variability'],['An empty hotel room tonight is lost revenue','Perishability'],['Unsold cinema seats cannot be stored','Perishability']]},
{id:'x-s3-sortbases',topic:'s3',type:'sort',src:'course',title:'Segmentation bases',q:'Sort each variable.',cats:['Geographic','Demographic','Psychographic','Behavioural'],
 items:[['Urban vs rural','Geographic'],['Region','Geographic'],['Age','Demographic'],['Income','Demographic'],['Lifestyle','Psychographic'],['Values','Psychographic'],['Usage rate','Behavioural'],['Loyalty status','Behavioural'],['Benefits sought','Behavioural']]},
{id:'x-s4-sortplc',topic:'s4',type:'sort',src:'course',title:'Which stage of the product life cycle?',q:'Sort each situation or decision.',cats:['Introduction','Growth','Maturity','Decline'],
 items:[['Signing up distributors and building stocks','Introduction'],['Skimming or penetration price at launch','Introduction'],['New competitors enter; skimming stops','Growth'],['Adding features and new outlets','Growth'],['Sales peak; defend market share','Maturity'],['Further updating of the product','Maturity'],['Sales and profits fall; cut costs','Decline'],['Product deletion is considered','Decline']]}
);
QUIZ.push(
Q('q82','s1','practice','Why does marketing aim to “capture value in return”?',['Creating value for customers is the way to earn profits and loyalty','Marketing is only about advertising','Customers pay for the marketing budget','It means raising prices'],'Value for customers first, then value for the company.'),
Q('q83','s2','practice','In a SWOT, “our low advertising budget” is…',['a weakness','a threat','an opportunity','a strength'],'Internal and negative.'),
Q('q84','s2','practice','Why should competitors never appear in the internal analysis?',['Internal analysis covers only the company, its brand and its mix','Competitors are always opportunities','They are part of PESTEL','They are irrelevant'],'Competitors belong to the external analysis.'),
Q('q85','s3','practice','Why is the largest, fastest-growing segment not always the best target?',['It may be structurally unattractive (strong competitors) or beyond the company’s resources','Small segments are always cheaper','Large segments are not measurable','Growth is irrelevant'],'Evaluate size, attractiveness and fit with objectives and resources.'),
Q('q86','s3','practice','A good segment must respond differently to the marketing mix. This criterion is…',['differentiable','substantial','accessible','measurable'],'Otherwise separate offers make no sense.'),
Q('q87','s4','practice','Why do prices often fall in the growth stage?',['Competitors enter and economies of scale lower costs','Demand disappears','The product is deleted','Promotion stops'],'Skimming stops as competition grows.'),
Q('q88','s4','practice','A new brand name for a product in a new category where the current name does not fit is…',['a new brand','a line extension','a brand extension','a multibrand'],'New name, new category.'),
Q('q89','s5','practice','Why divide by (1 − r) in mark-up pricing?',['The mark-up is a share of the selling price, not of the cost','To include taxes','To round the price','Because r is a cost'],'120 / 0.6 = 200: the €80 mark-up is 40% of €200.'),
Q('q90','s5','practice','Price €200, variable cost €90, fixed costs €30 000. Break-even volume?',['273 units','1 000 units','150 units','333 units'],'30 000 / 110 = 272.7 → 273.'),
Q('q91','s5','practice','If demand is inelastic, a moderate price increase usually…',['raises revenue','lowers revenue','has no effect on quantity','makes demand elastic'],'Quantity falls proportionally less than price rises (outside the slides).'),
Q('q92','s6','practice','Why does an intermediary create economies of scale?',['It reduces the number of contacts between producers and customers','It always lowers prices','It owns the factories','It removes transport'],'3 × 3 = 9 contacts become 3 + 3 = 6.'),
Q('q93','s6','practice','Intensive distribution suits…',['convenience goods bought often everywhere (chewing gum)','luxury watches','custom yachts','prescription drugs only'],'As many outlets as possible.'),
Q('q94','s7','practice','Which budget method is the most logical according to the course?',['Objective and task','Arbitrary','Affordable','Percentage of sales'],'It starts from what must be achieved.'),
Q('q95','s7','practice','A press release on a brand’s recycling programme is…',['public relations','sales promotion','personal selling','advertising'],'Building good relations and favourable publicity.'),
Q('q96','s7','practice','Content shared by customers about a brand on social media is…',['earned or shared media','paid media','owned media','personal selling'],'The brand did not pay for it.')
);
CARDS.push(
C('c46','s2','SWOT rule','S/W = internal (company, brand, mix) · O/T = external (PESTEL, competition, demand)'),
C('c47','s3','Good segment (5 criteria)','measurable · accessible · substantial · differentiable · operational'),
C('c48','s3','Targeting strategies','undifferentiated · differentiated · concentrated (niche) · micromarketing'),
C('c49','s3','Positioning map','two axes of perceptions; brands placed as consumers see them; empty zones = possible gaps'),
C('c50','s4','PLC and price','introduction: skimming or penetration · growth: prices fall · maturity: defend · decline: cut or delete'),
C('c51','s5','Mark-up on sales','price = unit cost / (1 − r); 120 → 200 (40%) → 250 (20%)'),
C('c52','s5','Break-even','FC / (P − VC); furniture at €120: 30 000 / 30 = 1 000 units'),
C('c53','s5','Elasticity (intuition)','|e| > 1 elastic: a price cut raises revenue · |e| < 1 inelastic: a price rise raises revenue'),
C('c54','s5','Skimming vs penetration','high price lowered over time · low price to win share fast'),
C('c55','s6','Contacts with an intermediary','producers × customers → producers + customers'),
C('c56','s7','Five promotion tools','advertising · sales promotion · personal selling · public relations · direct and digital'),
C('c57','s7','Five budget methods','arbitrary · affordable · % of sales · competitive parity · objective and task')
);

const MQ=(id,topic,q,o,solution)=>({id,topic,type:'mcq',pts:0.5,q,o,a:0,solution});
const MOCKS=[
{id:'m1',title:'Mock exam 1',exam:'final',scope:'Sessions 1–7',duration:90,total:20,calculator:'Non-programmable calculator (the S5 slides ask to bring one)',
 summary:'20 MCQs on the seven sessions, a pricing exercise and a short case (SWOT, STP, 4 Ps).',
 intro:'<p>Part A: one right answer per MCQ, no penalty. Parts B and C: show your working; the case is marked with the grid after hand-in.</p>',
 sections:[
 {title:'Part A · MCQs (10 points)',items:[
  MQ('a1','s1','Which concept balances company profits, customer wants and society’s interests?',['Societal marketing','Marketing','Selling','Production']),
  MQ('a2','s1','A set of all actual and potential buyers of a product is a:',['market','industry','segment','channel']),
  MQ('a3','s1','STP belongs to:',['strategic marketing','operational marketing','implementation and control','the marketing mix']),
  MQ('a4','s2','Special interest groups and political parties are which PESTEL factor?',['Political','Social','Legal','Economic']),
  MQ('a5','s2','In a SWOT, a competitor’s price cut is a:',['threat','weakness','opportunity','strength']),
  MQ('a6','s2','Tea and coffee competing to satisfy the need for a hot drink illustrate:',['substitute competition','direct competition','indirect competition','close competition']),
  MQ('a7','s3','“Media habits (TV viewing, social media)” is a basis for:',['mediagraphic segmentation','psychographic segmentation','behavioural segmentation','geographic segmentation']),
  MQ('a8','s3','A segment that can be reached and served effectively is:',['accessible','measurable','substantial','operational']),
  MQ('a9','s3','Concentrating on a large share of a smaller market is:',['niche marketing','mass marketing','differentiated marketing','micromarketing']),
  MQ('a10','s3','Head &amp; Shoulders “eliminates dandruff” is positioning on:',['attributes / product features','price / quality','usage occasion','end user']),
  MQ('a11','s4','A warranty and after-sales service are part of the:',['augmented product','core customer value','actual product','product line']),
  MQ('a12','s4','“Services cannot be separated from their providers” is:',['inseparability','intangibility','variability','perishability']),
  MQ('a13','s4','A brand launching a new brand name in an existing category uses:',['multibrands','line extension','brand extension','new brands']),
  MQ('a14','s4','During maturity, the typical promotion is:',['sales promotion and reminder advertising','high advertising to build awareness','no promotion at all','trade promotions to sign up distributors']),
  MQ('a15','s5','A high launch price lowered over time is:',['market skimming','market penetration','captive pricing','psychological pricing']),
  MQ('a16','s5','The second step of the pricing process is:',['estimate costs','select a pricing method','analyse competitors','set the price']),
  MQ('a17','s6','Gathering and distributing information about consumers and producers is the function of:',['information','contact','matching','negotiation']),
  MQ('a18','s6','Click and collect is an example of:',['a hybrid (cross-channel) model','exclusive distribution','a short channel','personal selling']),
  MQ('a19','s7','Short-term incentives to encourage a purchase are:',['sales promotion','public relations','advertising','personal selling']),
  MQ('a20','s7','For a new product, the communication objective is usually:',['awareness','conviction','purchase','liking'])]},
 {title:'Part B · Pricing (4 points)',items:[
  {id:'b1',topic:'s5',type:'case',pts:4,title:'B. Kitchen stools',q:'<p>A manufacturer of kitchen stools has a variable cost of €40 per stool, fixed costs of €60 000 and expects to sell 2 000 stools.</p>',
   parts:[{type:'numeric',pts:1,q:'Unit cost (€)',answer:70},{type:'numeric',pts:1,q:'Price with a 30% mark-up on sales (€)',answer:100},{type:'numeric',pts:1,q:'Retail price if the retailer wants a 20% mark-up on sales (€)',answer:125},{type:'numeric',pts:1,q:'Break-even volume at the manufacturer’s price',answer:1000,tol:0}],
   solution:F('Unit cost = 40 + 60 000 / 2 000 = 70\nManufacturer: 70 / (1 − 0.30) = 100\nRetailer: 100 / (1 − 0.20) = 125\nBreak-even = 60 000 / (100 − 40) = 1 000 stools')}]},
 {title:'Part C · Case (6 points)',intro:'<p><b>Case: GreenRide</b>. GreenRide rents electric bikes by subscription in Lille (€29 per month, maintenance included). It has 4 000 subscribers, mostly students, a well-known app, but only one repair workshop. Lille is extending its cycle lanes; fuel prices are high; a large competitor, Velopop, plans to enter at €19 per month without maintenance; and the city may tax operators per bike.</p>',items:[
  {id:'c1',topic:'s2',type:'case',pts:2,title:'C1. SWOT and PESTEL',q:'',parts:[{type:'mcq',pts:0.5,q:'The well-known app is a…',o:['Strength','Opportunity'],a:0},{type:'mcq',pts:0.5,q:'Only one repair workshop is a…',o:['Weakness','Threat'],a:0},{type:'mcq',pts:0.5,q:'Extension of cycle lanes is an…',o:['Opportunity (political / environmental)','Strength'],a:0},{type:'mcq',pts:0.5,q:'Velopop’s entry is a…',o:['Threat (direct competition)','Weakness'],a:0}]},
  {id:'c2',topic:'s3',type:'written',pts:4,title:'C2. STP and marketing mix',lines:10,q:'<p>Propose a second target segment for GreenRide (justify with two segmentation bases and two attractiveness criteria), write a positioning statement against Velopop, and give one decision for each of the 4 Ps.</p>',
   rubric:[{c:'A precise segment described with two bases (e.g. demographic: 25–45 workers; behavioural: daily commuters)',pts:1},{c:'Attractiveness justified (size/growth, structural attractiveness, fit with objectives and resources)',pts:0.75},{c:'Positioning statement in the standard form with a point of difference vs Velopop (maintenance included)',pts:1.25},{c:'One coherent decision for each P, aligned with the target and positioning',pts:1}],
   solution:'<p>Example: <b>target</b> young professionals commuting daily (demographic: 25–40, employed; behavioural: daily usage, values reliability). Substantial and growing with cycle lanes; fits the existing app and fleet. <b>Positioning</b>: “For Lille commuters who need a reliable ride every day, GreenRide is the e-bike subscription that never leaves you stranded, because maintenance and repairs are included within 24 h.” <b>4 Ps</b>: product (premium bikes, 24 h repair), price (€29 kept, company packages paid by employers), place (pick-up points near offices and stations, more workshops), promotion (LinkedIn and employer partnerships, PR with the city).</p>'}]}]},
{id:'m2',title:'Mock exam 2',exam:'final',scope:'Sessions 1–7',duration:90,total:20,calculator:'Non-programmable calculator',
 summary:'20 new MCQs, a break-even and budget exercise, and a communication case.',
 intro:'<p>Same format as Mock 1.</p>',
 sections:[
 {title:'Part A · MCQs (10 points)',items:[
  MQ('a1','s1','Peter Drucker: the aim of marketing is to understand the customer so well that the product…',['sells itself','is cheap','is advertised widely','is produced massively']),
  MQ('a2','s1','B2B2U stands for:',['business to business to user','business to buyer to user','business to bank to user','buyer to business to user']),
  MQ('a3','s1','Values are:',['the standards that guide the way a company does business','the purpose of the organization','the company’s objectives','the target customers']),
  MQ('a4','s2','The macro-environment is:',['the larger societal forces that affect the micro-environment','the company’s suppliers and customers','the company’s internal resources','the marketing mix']),
  MQ('a5','s2','Which belongs to the external analysis of a SWOT?',['Consumers’ purchasing behaviour','The brand’s awareness','The company’s product range','The company’s distribution channels']),
  MQ('a6','s2','“Who is the market leader?” is one of the questions for:',['analysing the competitive environment','segmenting the market','setting a price','choosing media']),
  MQ('a7','s3','Combining social grade, age and usage rate gives:',['a more focused, better defined segment','a mass market','a positioning map','a product line']),
  MQ('a8','s3','A segmentation useful for designing a specific marketing mix per segment is:',['operational','measurable','accessible','substantial']),
  MQ('a9','s3','SNCF adapting offers and prices to the type of traveller is positioning by:',['end user','attributes','usage occasion','price/quality']),
  MQ('a10','s3','Why can the largest, fastest-growing segment be unattractive?',['Its structural factors or the company’s resources may not fit','It is always too small','It cannot be measured','It has no competitors']),
  MQ('a11','s4','An interaction with a brand that affects a multi-dimensional response is:',['an experience','a service','a product','a brand extension']),
  MQ('a12','s4','“The quality depends on who provides the service, when and how” is:',['variability','perishability','inseparability','intangibility']),
  MQ('a13','s4','Apple’s “Think Different”, minimalist design and elegance describe its brand:',['identity','equity','label','packaging']),
  MQ('a14','s4','Packaging used for branding and display on the shelf is:',['secondary packaging','primary packaging','tertiary packaging','a label']),
  MQ('a15','s5','A €19.99 price instead of €20 is:',['psychological pricing','reference pricing','skimming','bundle pricing']),
  MQ('a16','s5','Captive-product pricing is illustrated by:',['razors priced low and blades priced high','one price for a software bundle','selling wood chips as fuel','a car with paid options']),
  MQ('a17','s6','Exclusive distribution:',['limits the number of intermediaries to keep control over service level','uses as many outlets as possible','removes all intermediaries','is always online']),
  MQ('a18','s6','The first channel management decision is to:',['analyse customer needs','assess sustainability','choose wholesalers','set retail prices']),
  MQ('a19','s7','Sponsorships and events belong to:',['public relations','sales promotion','advertising','personal selling']),
  MQ('a20','s7','Matching what competitors spend on promotion is the:',['competitive-parity method','affordable method','objective-and-task method','percentage-of-sales method'])]},
 {title:'Part B · Pricing and budget (4 points)',items:[
  {id:'b1',topic:'s5',type:'case',pts:4,title:'B. Craft lemonade',q:'<p>A craft lemonade brand has fixed costs of €45 000, a variable cost of €0.60 per bottle and sells at €1.50 to retailers. It forecasts sales of €180 000.</p>',
   parts:[{type:'numeric',pts:1.5,q:'Break-even volume (bottles)',answer:50000,tol:0},{type:'numeric',pts:1,q:'Profit if 70 000 bottles are sold (€)',answer:18000},{type:'numeric',pts:0.75,q:'Promotion budget at 5% of forecasted sales (€)',answer:9000},{type:'mcq',pts:0.75,q:'Which method starts from objectives?',o:['Objective-and-task','Percentage of sales','Affordable','Arbitrary'],a:0}],
   solution:F('Break-even = 45 000 / (1.50 − 0.60) = 50 000 bottles\nProfit at 70 000 = 20 000 × 0.90 = 18 000\n5% × 180 000 = 9 000')}]},
 {title:'Part C · Case (6 points)',intro:'<p><b>Case: Maison Lumen</b> launches an eco-designed reading lamp (recycled aluminium, repairable, 10-year warranty) priced at €149 for 25–40-year-old urban professionals who value design and sustainability.</p>',items:[
  {id:'c1',topic:'s4',type:'case',pts:2,title:'C1. Product',q:'',parts:[{type:'mcq',pts:0.5,q:'“Lighting a reading space” is the…',o:['core customer value','augmented product'],a:0},{type:'mcq',pts:0.5,q:'The 10-year warranty is part of the…',o:['augmented product','actual product'],a:0},{type:'mcq',pts:0.5,q:'Recycled aluminium and repairability are product…',o:['attributes (durability, design)','labels'],a:0},{type:'mcq',pts:0.5,q:'At launch, the PLC stage is…',o:['introduction','maturity'],a:0}]},
  {id:'c2',topic:'s7',type:'written',pts:4,title:'C2. Communication plan',lines:10,q:'<p>Using the five steps of effective marketing communications, design the launch communication of the lamp. Name at least two promotion tools and a budget method.</p>',
   rubric:[{c:'Target audience consistent with the case (25–40 urban professionals)',pts:0.5},{c:'Objective tied to a buyer-readiness stage (awareness / knowledge at launch)',pts:0.75},{c:'Message: content (appeal), structure, format',pts:1},{c:'Channels/media and at least two promotion tools, justified',pts:1},{c:'Budget method named and explained',pts:0.75}],
   solution:'<p>Model: audience = design-conscious urban professionals; objective = awareness then knowledge (new product); message = rational and emotional appeal (“light that lasts ten years”), conclusion given, clean visuals; media = Instagram and Pinterest (content marketing, design influencers), PR in design magazines, pop-up in concept stores (personal selling), launch code (sales promotion); budget = objective and task, cross-checked with percentage of forecasted sales.</p>'}]}]}];

// Shuffle MCQ options once, deterministically (seeded by the id), so the answer is not always "a".
const seed=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const mix=(x,key)=>{if(!x||x.type&&x.type!=='mcq'||!Array.isArray(x.o))return;let r=seed(key);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};
  const idx=x.o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  const pos=i=>idx.indexOf(i);x.a=Array.isArray(x.a)?x.a.map(pos).sort((p,q)=>p-q):pos(x.a);x.o=idx.map(i=>x.o[i])};
QUIZ.forEach(q=>mix(q,q.id));
EXERCISES.forEach(x=>{mix(x,x.id);(x.parts||[]).forEach((p,i)=>mix(p,x.id+'-'+i))});
MOCKS.forEach(m=>m.sections.forEach(s=>s.items.forEach(x=>{mix(x,m.id+x.id);(x.parts||[]).forEach((p,i)=>mix(p,m.id+x.id+'-'+i))})));

registerSubject({
  slug:'marketing-management',
  name:'Marketing Management',
  short:'Marketing',
  tagline:'IÉSEG Bachelor 2 · Final exam (50%): Sessions 1–7',
  status:'Sessions 1–7 done · layered sheets, 4 generators, 4 tools · 2 mock exams',
  exams:[{id:'final',label:'Final exam',scope:'Sessions 1–7'}],
  topics:[
    {id:'s1',label:'Session 1',title:'Introduction to marketing',short:'S1 Intro',exam:'final',summary:'Definition, concepts, marketing process, challenges, values and mission',sheet:SHEETS.s1},
    {id:'s2',label:'Session 2',title:'Market analysis',short:'S2 Analysis',exam:'final',summary:'Micro/macro environment, PESTEL, SWOT, competitors',sheet:SHEETS.s2},
    {id:'s3',label:'Session 3',title:'Segmentation, targeting, positioning',short:'S3 STP',exam:'final',summary:'Segmentation bases, criteria, targeting, positioning statement',sheet:SHEETS.s3},
    {id:'s4',label:'Session 4',title:'Products, services and branding',short:'S4 Product',exam:'final',summary:'Product levels, PLC, services, brand strategies, packaging',sheet:SHEETS.s4},
    {id:'s5',label:'Session 5',title:'Price',short:'S5 Price',exam:'final',summary:'Pricing process, objectives, costs, mark-up, break-even',sheet:SHEETS.s5},
    {id:'s6',label:'Session 6',title:'Distribution',short:'S6 Place',exam:'final',summary:'Intermediary functions, channels, channel decisions, sustainability',sheet:SHEETS.s6},
    {id:'s7',label:'Session 7',title:'Communication',short:'S7 Promotion',exam:'final',summary:'IMC tools, content and digital, 5 steps, budget methods',sheet:SHEETS.s7}],
  cheatsheet:SHEETS.cheat,
  glossary:GLOSS,
  overview:{
    eyebrow:'Marketing Management',
    title:'Sessions 1–7 of Florence Nizette’s course, on one site',
    lede:'Built from the MyCourses material of MARKETING MANAGEMENT 2331: the Session 1–7 slides of your teacher Florence Nizette (group L10), which follow the common course slides and Kotler and Armstrong’s Principles of Marketing. Read a session sheet, then practise: quiz, classification and ordering exercises, pricing calculations, flashcards and mock exams.',
    blurbs:{cheat:'Every model and formula on one page',exercises:'Classify, order and calculate, plus short cases',cards:'Definitions and lists to know by heart',mocks:'1 h 30 · 20 MCQs + pricing + a case · out of 20'},
    html:`<h3>The final exam</h3>
  <ul><li><b>50% of the grade: “End of term exam on all course material”</b>, in class, between 3 and 19 December (TBC). Continuous assessment 40% (graded exercises in S2 and S5, Capstone application) and participation 10%.</li>
  <li>MyCourses gives <b>no exam format, no past paper and no answer key</b>. The two graded in-class exercises were paper case exercises (environmental analysis, pricing, 30 minutes), and the S5 slides ask students to bring a non-programmable calculator.</li></ul>
  <h3>The mock exams: format chosen</h3>
  <ul><li><b>Chosen for this site</b>: 1 h 30, 20 points. Part A: 20 MCQs (10 points). Part B: a pricing calculation (4 points). Part C: a short case mixing auto-marked questions and a written answer marked with a grid (6 points). If your teacher announces another format, trust the teacher.</li></ul>
  <h3>Sources and limits</h3>
  <ul><li>Your teacher is identified from MyCourses: only the “L10 FINAL Presentations” assignment of Florence Nizette’s section is visible on your account. Her slides (MM S1–S7 2026 FN) are the common slides plus her examples and Capstone tasks. Slides shown as images (buyer characteristics, product life cycle, services, channel systems) were read as pictures.</li>
  <li><span class="pill src">Course exercise</span>: content and examples from the slides; the classifications of in-class exercises (Tony’s Chocolonely PESTEL) and the answers to the mark-up questions are the site’s, as no answer key is on MyCourses. <span class="pill">Practice</span>: new questions and cases.</li>
  <li>Not covered: the textbook chapters themselves (only referenced on the slides), the Microsoft SWOT and the paper graded cases (Apple, Spirit Airlines, Joli Home, Wonder Home) whose texts are not on MyCourses, and the Capstone (graded separately).</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  modules:[
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'Mark-up pricing along the channel, break-even and target profit, price elasticity (intuition) and promotion budgets: new numbers every time, solution step by step.'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'Break-even chart, positioning map, two decision trees',intro:'Move the sliders of the break-even chart and place your brand on a positioning map; train on the decision trees for the pricing objective and the targeting strategy.'}}],
  mocksNote:NOTE('<b>Where the format comes from.</b> MyCourses only says “end of term exam on all course material” (50%). The duration, the three parts and the points are <b>chosen for this site</b>.')
});
})();
