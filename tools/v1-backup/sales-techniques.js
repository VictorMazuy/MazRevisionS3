/* Sales Techniques 2332, IÉSEG Bachelor 2 (coordinator: Romain FRANCK). Assessment: final AI simulation on MuchBetter.ai (Session 8,
   Avril case), Squad Job 20%, presence; the 2025 "What to expect" also lists a written exam (MCQs, SPIN/BANT/CAP, objections, closing, BATNA).
   Built from sources/sales-techniques/: Session 1–8 slides, "What to expect", the Session 8 evaluation brief (Avril case), the Soleil du Nord
   B2B/B2C cases, the Session 7 student pack and the Alpha Partner competition case. Topics: s1–s7 (s7 = Sessions 7–8, full cycle).
   Ids: q… quiz, c… cards, x-s<n>-… exercises. Never renumber ids. */
(function(){
const {T,F,EX,TRAP,NOTE,fmt}=Rev.h;

/* ---------- topic sheets ---------- */
const SHEETS={};
SHEETS.s1=`
<div class="eyebrow">Session 1</div><h2>Preparing the sale</h2>
<p class="lede">Goal: describe the modern salesperson (trusted advisor), compare B2B and B2C selling, and map the five-step B2B buyer journey with the seller’s role at each step.</p>
<h3>1. From old-school seller to trusted advisor</h3>
${T(['Old-school seller','Modern salesperson'],[['pushes products','solves problems'],['talks a lot','listens actively'],['one-size-fits-all','customizes solutions'],['focused on closing','focused on long-term value'],['“What do I sell?”','“What does the client need?”']])}
<ul><li>The modern salesperson is a consultant, problem-solver, guide, connector and trusted partner (before, during and after the sale).</li>
<li>Core responsibilities: <b>prospect, qualify, discover, pitch</b> (value, not features), <b>handle objections, negotiate and close, follow up</b>.</li>
<li>Success factors: active listening, empathy, problem-solving, trust-building (plus teamwork, CRM and AI tools, constant learning). <b>Trust builds deals, not features alone.</b></li>
<li>Sales matters as a revenue engine, a source of market intelligence and relationship capital. Sales is communication with purpose.</li></ul>
<h3>2. B2B vs B2C</h3>
${T(['','B2B','B2C'],[['Decision','buying committees, several decision-makers (IT, finance, operations), formal evaluations, contracts','usually one person, quick, often emotional'],['Cycle','3–6 months or longer, many touchpoints','minutes to days'],['Relationship','deep, consultative, ongoing support','transactional, immediate satisfaction'],['Value / volume','high value ($1K–$1M+), low volume','low value ($5–$500), high volume'],['Content','white papers, case studies, ROI calculators; LinkedIn, events','short videos, reviews, lifestyle content; social media, mass advertising'],['Specific skills','solution selling, stakeholder mapping, business cases, account management','quick rapport, emotional intelligence, fast closing, high volume']])}
<p>Common ground: customer-centricity, trust, brand consistency, omnichannel presence. Pure B2B: Salesforce, Cisco, SAP; pure B2C: Nike, Netflix, Coca-Cola; hybrid: Amazon, Apple, Microsoft. B2B buyers want about 60% logic / 40% emotion; B2C about 40/60.</p>
<h3>3. The B2B buyer journey</h3>
${T(['Step','Buyer','Seller’s role'],[['1. Awareness — problem recognition','“Do we have a problem worth solving?”','educator and consultant: help identify issues, ask insightful questions'],['2. Consideration — information search','“What solutions exist?”','thought leader and resource: useful content, case studies, no pushing'],['3. Evaluation of alternatives','“Which option is best for us?”','differentiator and problem-solver: tailor, compare transparently, show ROI'],['4. Purchase decision','“How do we get the best value and terms?”','facilitator and negotiator: fair terms, last concerns, next steps'],['5. Post-purchase','“Did we make the right choice? What next?”','partner and advocate: implementation, support, measure success']])}
${NOTE('Course organization: 8 sessions of 1 h 50 (theory then practice), a Fil Rouge case, Sales Squads (4–5 students, not for roleplays: preparation, feedback, Capstone), AI simulations on MuchBetter.ai (30 simulations in total, at least 5 per session). The cold-start simulation of Session 1 shows why preparation matters: without it you ask poor questions, miss needs, pitch too early, sound scripted and fail to close.')}
`;

SHEETS.s2=`
<div class="eyebrow">Session 2</div><h2>Prospecting and qualifying</h2>
<p class="lede">Goal: open a sales conversation in 20–30 seconds, use professional chitchat to build trust, and qualify a lead with BANT.</p>
<h3>1. Cold calls and openers</h3>
<p>A <b>cold call</b> is an unsolicited outreach to a new prospect with no prior relationship. Goals: first contact, qualify the fit, schedule a follow-up. 72% of cold calls go to voicemail, but 2/3 of buyers are open to relevant calls; good openings raise success by 2–5%.</p>
${T(['4 pillars of an opener','Example'],[['1. Greeting','polite and confident: “Hi Alex…”'],['2. Relevance','something about them, not you: “I saw your recent product launch—congrats!”'],['3. Value hint','a reason to care: “I help startups like yours grow faster through automation.”'],['4. Engaging question','to spark dialogue: “Can I ask how you’re managing remote onboarding?”']])}
<ul><li>Good openings are confident, personalized, conversational, value-focused, honest. Bad ones are robotic, self-centered, aggressive, generic or apologetic.</li>
<li>Do: focus on their needs, respect their time, get to the point (30 s), research, practise. Don’t: read a script, oversell, start with “How are you today?”, apologize (“Sorry to bother you”), use jargon.</li></ul>
${TRAP('“Hello, I’m calling to sell you our amazing insurance options. Are you interested?” fails: generic, self-centered, vague value (“amazing”), premature close.')}
<h3>2. Professional chitchat</h3>
<p>Chitchat breaks the ice, builds psychological safety, humanizes the interaction, creates rapport and gets the buyer talking. Three golden rules: <b>personalized</b>, <b>relevant</b>, <b>short</b> (20–30 s; one smart comment beats three generic ones). Memory tool <b>C.L.I.P.</b>: Company news, LinkedIn post, Industry topic, Personal (only if public).</p>
<h3>3. Qualifying with BANT</h3>
<p><b>Qualifying</b> = deciding whether a lead is a good fit, worth your time and likely to move forward (and disqualifying saves time).</p>
${T(['Letter','Meaning','Good question'],[['B','Budget','“Have you allocated a budget for this project?” / “What’s the typical approval process for investments of this size?”'],['A','Authority','“Who else is involved in the decision-making process?” (never “Are you the decision-maker?”)'],['N','Need','“What problems are you trying to solve right now?” / “What happens if this isn’t addressed?”'],['T','Timing','“When are you planning to take action?” / “Is there a deadline driving your timeline?”']])}
<p>BANT is a compass, not a checklist: ask naturally, listen, adapt; if one element is missing, explore. In the Session 2 simulation, the student must identify at least 3 of the 4 criteria.</p>
`;

SHEETS.s3=`
<div class="eyebrow">Session 3</div><h2>Discovering needs</h2>
<p class="lede">Goal: listen actively, ask open exploratory questions in the right order, and reformulate to confirm and dig deeper.</p>
<h3>1. Active listening</h3>
<p>Listening ≠ hearing: hearing is passive; listening is purposeful attention to the meaning. If the client speaks about 80% of the time, you are probably doing it right.</p>
${T(['5 keys of active listening','Fake listening'],[['1. Pay full attention (no distractions)','interrupting or jumping in too fast'],['2. Avoid interrupting','“yeah” without understanding'],['3. Mirror / paraphrase','preparing your answer while they speak'],['4. Ask clarifying questions','checking phone or watch'],['5. Acknowledge emotions (“That sounds frustrating”)','changing the subject without acknowledging']])}
<p>Myths: listening is not just being silent; you cannot listen while multitasking; listening is a learnable skill. 74% of buyers buy from reps who listen attentively.</p>
<h3>2. Questions</h3>
${T(['Closed question','Open question'],[['“Do you use a CRM?”','“How do you track your sales leads today?”'],['“Is your team remote?”','“What challenges do you face with remote work?”'],['“Do you have a budget?”','“How do you usually allocate budget for tools like this?”']])}
<ul><li>Open (exploratory) questions start with <b>what, how, why, tell me about</b>; closed ones with do, is, are, can. 11–14 exploratory questions → 74% higher close rate.</li>
<li>Flow: <b>start broad → gradually narrow → confirm understanding</b> (confirming questions too early feel like an interrogation).</li>
<li>Pitfalls: too broad (“Tell me about your business”), several questions at once, leading questions (“I’m guessing efficiency is your main concern, right?”), closed questions disguised as open (“Wouldn’t you agree…?”).</li>
<li>Golden rules: listen → ask → summarize; embrace silence (5–7 seconds); one question at a time.</li></ul>
<h3>3. Reformulation</h3>
${T(['Type','Wording'],[['Paraphrasing','“So you’re saying that…”'],['Summarizing','“Let me make sure I understood your key points…”'],['Clarifying','“Just to be clear — is the issue more about speed or accuracy?”'],['Reflecting emotion','“That sounds frustrating. What impact has it had?”']])}
<p>Reformulation shows you listen, clarifies, builds trust and slows the tempo. Pitfalls: parroting, oversimplifying, inserting your own agenda, reformulating too often. <b>Mirroring</b>: language, pace, energy, posture. “When the client says something once — hear it. Twice — explore it.”</p>
`;

SHEETS.s4=`
<div class="eyebrow">Session 4</div><h2>SPIN Selling</h2>
<p class="lede">Goal: structure discovery with Situation, Problem, Implication and Need-payoff questions, linked logically so the buyer sells the value to himself.</p>
${T(['Step','Purpose','Example'],[['S — Situation','understand the context, facts','“How do you currently train your new team members?”'],['P — Problem','identify what is not working (pain)','“What’s the main challenge with that training process?”'],['I — Implication','explore the consequences, the cost of the problem','“What happens when people are onboarded too slowly?”'],['N — Need-payoff','let the buyer express the value of solving it','“If your team could be trained 30% faster, what would that mean for you?”']])}
<ul><li>SPIN is a <b>flow, not a list</b>: S → P → I → N, each question built on the previous answer. Not a script, not a questionnaire.</li>
<li>Situation: research beforehand to keep these few. Successful sellers ask 2–3 times more <b>problem</b> questions; <b>implication</b> questions are the most powerful and the hardest; top sellers ask 10× more <b>need-payoff</b> questions.</li>
<li>“Is this an issue that affects your department only or others too?” is an <b>implication</b> question (scope and consequence).</li>
<li>Best for discovery meetings, complex or consultative B2B sales; not for basic information calls or when time is very short.</li></ul>
${EX('Linking the steps','worked example',`<p><b>S → P</b>: “How many people use your CRM?” — “About 45 reps.” — “What challenges have those teams experienced with it?”<br><b>P → I</b>: “It’s too slow — reports take hours.” — “How does that delay affect your ability to respond to market changes?”<br><b>I → N</b>: “We lose about 15% of potential deals.” — “If you could recapture that 15%, what would that mean for your department?”</p>`)}
${TRAP('Mistakes: jumping to need-payoff before exploring implications (no urgency), situation overload (boredom), skipping implications to avoid “negative” talk (the buyer never feels the cost of the problem).')}
`;

SHEETS.s5=`
<div class="eyebrow">Session 5</div><h2>Pitching and storytelling</h2>
<p class="lede">Goal: build a pitch with CAP (Characteristic, Advantage, Proof), make it memorable with a context-challenge-outcome story, and avoid feature dumping.</p>
${T(['Letter','Meaning','Role','Example (water bottle)'],[['C','Characteristic','what it is (the feature)','made from recycled steel'],['A','Advantage','what it does for the customer (the benefit)','keeps drinks cold 24 h or hot 12 h'],['P','Proof','why it is credible (fact, example)','2024 Green Design Award and lifetime guarantee']])}
${F('CAP formula: “We offer [X feature], which helps you [Y benefit],\nand we’ve proven this with [Z proof].”')}
<ul><li>Types of proof: third-party certifications, testimonials, case studies and results, awards, research data.</li>
<li>Feature dumping (“customizable dashboards, multi-language support, user roles…”) vs CAP (“Our dashboards (C) help teams visualize performance in real time (A), which helped Company Y cut reporting time in half (P)”).</li>
<li>Good pitch: clarity and concision (impressions form in 30 seconds), client focus (“What’s in it for me?”), data + emotion.</li></ul>
${NOTE('<b>Check against the slide:</b> the Session 5 summary slide calls CAP “Context-Action-Payoff”, whereas the whole session (and Sessions 7–8) define CAP as <b>Characteristic – Advantage – Proof</b>. The site follows the latter.')}
<h3>Storytelling</h3>
${T(['Step','Content'],[['Context (≤ 20% of the story)','who, where, when, what: a relatable client'],['Challenge','the specific problem, quantified, with what is at stake'],['Outcome (resolution)','how your solution helped: before/after, measurable results, emotional relief']])}
<p>Stories help buyers visualize, feel the impact, remember and trust (63% trust salespeople who share relevant case studies). Aim for 60–90 seconds. Mistakes: feature fixation, irrelevant stories, too long, exaggeration, missing call to action. Pitch template: <b>Hook</b> (context or problem) → <b>Value</b> (CAP) → <b>Proof</b> (story or result), ending with an open question. B2B: ROI and metrics; B2C: emotional benefits and ease.</p>
`;

SHEETS.s6=`
<div class="eyebrow">Session 6</div><h2>Objections, closing, BATNA and ZOPA</h2>
<p class="lede">Goal: treat objections as interest, answer them with Feel–Felt–Found, spot buying signals, close ethically, and negotiate with BATNA and ZOPA in mind.</p>
<h3>1. Objections</h3>
<p>An objection is a concern, doubt or hesitation: “not yet”, not “no”. It shows the buyer is engaged, thinking and imagining using the solution. “If they say nothing, that’s when you should worry.” Causes: lack of clarity, trust, urgency or (perceived) fit.</p>
${T(['Type','Example','Strategy'],[['Price','“It’s too expensive.”','reframe value / ROI'],['Timing','“We’re not ready yet.”','create urgency or anchor future steps'],['Need','“I’m not sure we need this.”','return to pain points / SPIN'],['Trust','“We’re using another provider.”','proof, credibility, story']])}
${F('FFF: Feel   — acknowledge the concern, show empathy (“I understand how you feel…”)\n     Felt   — normalize it (“Many of our clients felt the same at first.”)\n     Found  — share the positive outcome (“What they found was that…”)')}
${EX('FFF on price','worked example','<p>“That sounds expensive.” — “I totally understand how you feel. (Feel) Some of our clients felt the same at first. (Felt) But they found that the time saved made the investment worth it in the first month. (Found)”</p>')}
<p>Other frameworks: <b>LACE</b> (Listen, Accept, Commit, Explicit action plan) for complex technical objections; <b>RAIN</b> (React, Ask, Implement, Next steps) for several objections or committees; <b>LAARC</b> (Listen, Acknowledge, Assess, Respond, Confirm) to deepen a single critical objection; FFF for emotional objections. “Yes, but…” → “Yes, and…”. Session 7 rule: clarify first (“When you say expensive, are you comparing total spend, scope or risk?”) and never invent social proof.</p>
<h3>2. Buying signals and closing</h3>
<ul><li><b>Buying signal</b>: a verbal or non-verbal cue that the buyer is interested, seeking reassurance, moving toward a decision. Verbal: “How quickly could we start?”, “What’s included?”, “What are the next steps?”. Behavioural: nodding, detailed price questions, notes, repeating benefits, involving colleagues.</li>
<li>When you see one: <b>pause, acknowledge, confirm readiness, guide to the close</b>.</li>
<li>Closing is helping the buyer decide, confirming alignment and creating a clear next step — not forcing, rushing or manipulating.</li></ul>
${T(['Technique','Example','Use when'],[['Summary close','“We’ve discussed how our solution addresses your concerns… shall we…?”','signals but hesitation'],['Assumptive close','“Shall we schedule the implementation for next month?”','buyer already behaves like a customer'],['Direct close','“Would you like to move forward with this?”','signals are clear'],['Trial close','“Is there anything else you need before deciding?”','buyer not ready, you want a small yes'],['Urgency close','“The special pricing is available until the end of the quarter.”','a real reason to act now (never false scarcity)']])}
<p>Mistakes: talking too much after the pitch, asking “Do you want to buy?” too soon, ignoring objections, being afraid to ask clearly.</p>
<h3>3. BATNA and ZOPA</h3>
<ul><li><b>BATNA</b> (Best Alternative To a Negotiated Agreement): your plan B if the deal fails. Knowing it = knowing your power: set boundaries, avoid desperate concessions, stay calm.</li>
<li><b>ZOPA</b> (Zone Of Possible Agreement): between the seller’s minimum and the buyer’s maximum. If it exists, negotiate; if not, use your BATNA. If your price is €3 000 and their limit €2 500, negotiate scope, timing, extras.</li>
<li>Trade concessions: “If you can confirm X, I can offer Y.” Explain value before discussing a discount.</li></ul>
${TRAP('Ethical selling: no pressure tricks, misleading pricing, false scarcity or false promises. “You’re not closing a sale. You’re opening a relationship.”')}
`;

SHEETS.s7=`
<div class="eyebrow">Sessions 7–8</div><h2>Full-cycle simulation and the Avril case</h2>
<p class="lede">Goal: run a complete sales conversation (opening, SPIN, CAP + story, objections with FFF, negotiation, close) and prepare the Session 8 final simulation on the Avril case.</p>
${T(['Tool','Purpose','Components'],[['BANT','qualify leads','Budget – Authority – Need – Timing'],['SPIN','explore needs','Situation – Problem – Implication – Need-payoff'],['CAP','pitch value','Characteristic – Advantage – Proof'],['FFF','handle objections','Feel – Felt – Found'],['Closing','drive decisions','Summary – Assumptive – Trial (– Direct, Urgency)'],['BATNA / ZOPA','negotiate','Best alternative / Zone of possible agreement']])}
${T(['Minutes (16-min conversation, Session 7)','What to do'],[['0–2','greet, rapport, agree an agenda, confirm the buyer’s role'],['2–7','discover needs with a connected SPIN sequence; listen and summarize'],['7–10','focused CAP pitch linked to the buyer’s priorities'],['10–14','explore objections, FFF, trade conditions'],['14–16','check remaining concerns, close, confirm next steps (owner, action, timing)']])}
<p><b>Prep canvas</b> (Session 8): opening · SPIN path (1–2 questions per step) · CAP + story · 2 objections to expect with FFF · negotiation angle (ZOPA, BATNA) · closing line. Acceptable outcomes: an agreement, a specific conditional next step, or a justified no-deal — “I will send an email” alone is not a close.</p>
<h3>The final simulation (MuchBetter.ai, Session 8)</h3>
<ul><li>1 hour of preparation in class, then 25 minutes of simulation; <b>score (%) = grade</b>, capped by the chosen level: Beginner max 14/20, Intermediate 16/20, Advanced 20/20. No pause or stop (logs are checked); transcripts are reviewed (no GPT-written answers).</li>
<li>Evaluated on: structure of the pitch (SPIN + CAP), objection handling (FFF), closing strategy, assertiveness and adaptability.</li></ul>
<h3>Avril case: your preparation</h3>
<p>You are a pharmacy sales rep for <b>Avril</b> (certified organic cosmetics, Bondues, founded 2012 by Alexis Dhellemmes, ex-Auchan; affordable organic: no advertising, no celebrity, simple packaging; own workshop; born in the Nord). Client: Mr./Ms. <b>Loison</b>, Pharmacie des Érables (€1.3M revenue vs €1.5M national average, affluent town near Lille, young team, strong growth from vaccination and rapid tests). Already lists the Avril roll-on and spray deodorants since January 2025, on a lower shelf with no signage. Not loyal to any brand; competition: two pharmacies within 800 m, a hypermarket parapharmacy, online pharmacies, Avril’s own boutiques and a national beauty retailer sometimes at outlet prices.</p>
<p><b>Mission</b>: list the Zeste de Citron shower gel with an initial order of <b>48 bottles of 500 ml</b>, and improve the visibility of the whole Avril range (deodorants included).</p>
${T(['Step','Model content (adapt in the conversation)'],[
['Opening','“Bonjour Mr./Ms. Loison, thank you for making time. Last visit you seemed interested in our Zeste de Citron gel — and congratulations, your new vaccination and test services are clearly bringing more people in. Could we start with how the Avril deodorants are doing for you?”'],
['S','“How do your customers choose their hygiene products today?” · “How is the hygiene aisle organized?”'],
['P','“What’s hardest in the hygiene category with the parapharmacy and online pharmacies nearby?” · “How do the deodorants sell from the lower shelf?”'],
['I','“When customers find the same products cheaper elsewhere, what does that do to your basket and margin?” · “What does it mean for your image with health-conscious customers?”'],
['N','“If you had a coherent organic routine at eye level that customers can only get advised on here, what would that change for you?”'],
['CAP 1','Certified organic by Ecocert, 97% natural-origin, soap-free, vegan (C) → a credible answer to your responsible, health-focused clientele (A) → vs Clairmousse: not certified, 24 ingredients, synthetic fragrance, PEG and artificial colorants (P)'],
['CAP 2','500 ml at about €5.90 retail (C) → more volume for less than Clairmousse’s 400 ml at €6.50: an easy recommendation at the counter (A) → comparison table, Appendix 1 (P)'],
['CAP 3','Brand block + counter tester + display, shelf strip, window poster, loyalty card (11th product free) (C) → lifts the deodorants already listed and builds a routine (cross-selling with hand cream and scrub) (A) → estimated potential 300 units per pharmacy per year (illustrative) (P)'],
['Objection: “Avril is cheaper in its own shops and online.”','Feel: “I understand, nobody wants to be undercut.” Felt: “Other pharmacists felt the same.” Found: “They found that pharmacy advice, the tester and the routine create loyalty that price alone doesn’t — and the loyalty card brings customers back to you.”'],
['Objection: “48 bottles is a lot / shelf space is limited.”','Clarify (total spend or space?), then trade: “If we place the counter display at the checkout path, would 48 be realistic given ~300 units of yearly potential? Otherwise, which quantity and placement would you commit to?”'],
['ZOPA / BATNA','Target: 48 bottles + brand block at eye level. Possible concessions within the tools provided (tester, display, materials) — never invent discounts. BATNA: keep the deodorant relationship and plan a follow-up with sales data.'],
['Close','Summary close: “So we agree on a brand block at eye level, the tester on the counter and 48 bottles to start — shall I book the order for delivery next week?” Then confirm the next step (date, who, what).']])}
${NOTE('<b>Model answers by the site</b> built from the case brief; the actual AI buyer may raise other objections. Use your own words: transcripts are reviewed.')}
<h3>Practice cases</h3>
<ul><li><b>Soleil du Nord Pro (B2B)</b>: Flandres Food (Seclin, ~85 employees, 6 500 m² roof, €180 000/year electricity and rising; MD Mrs. Clément decides, maintenance manager Mr. Chazal is the champion; a SUNPROV quote 18 months ago was expensive and unclear; APER law). Realistic aim: a free technical study. Price logic: installation €/kWc (≈ €1 000–1 300) vs grid €/kWh (≈ €0.18–0.25) vs solar cost €/kWh (≈ €0.06–0.08).</li>
<li><b>Soleil du Nord Particuliers (B2C)</b>: the Girard family (Wambrechies, electric heating, ~€2 200/year, both spouses must agree, bad door-to-door experience, competing kitchen project). Aim: a signed study/quote or a second meeting with both spouses; a right-sized system (6 kWc ≈ €11 000, ~6 000 kWh/year).</li>
<li><b>Session 7 negotiation lab</b>: SOLE District × Pulse Collective (pop-up activation, Core €1 800 / Plus €2 200) and FlowBook × Rise Studio; keep floors and BATNA private, trade concessions, record the deal.</li></ul>
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
${T(['Tool','Content'],[
['Opener (4 pillars)','greeting · relevance (about them) · value hint · engaging question'],['Chitchat','personalized, relevant, short; C.L.I.P. = Company news, LinkedIn, Industry, Personal (public)'],
['BANT','Budget · Authority (“Who else is involved?”) · Need · Timing'],['Active listening (5 keys)','full attention · no interrupting · mirror/paraphrase · clarifying questions · acknowledge emotions'],
['Questions','open (what, how, why) to explore; broad → narrow → confirm; one at a time; 5–7 s of silence'],['Reformulation','paraphrase · summarize · clarify · reflect emotion'],
['SPIN','Situation → Problem → Implication → Need-payoff'],['CAP','Characteristic → Advantage → Proof'],['Story','context → challenge → outcome (60–90 s)'],
['Objection types','price (ROI) · timing (urgency) · need (SPIN) · trust (proof)'],['FFF','Feel · Felt · Found'],['Signals → close','pause · acknowledge · confirm readiness · guide'],
['Closes','summary · assumptive · direct · trial · urgency'],['BATNA / ZOPA','plan B / between seller minimum and buyer maximum'],['Buyer journey','awareness · consideration · evaluation · decision · post-purchase']])}
<h3>Exam and simulation checklist</h3>
<ol><li>Never pitch before discovering: at least one connected question per SPIN step, then summarize.</li>
<li>Pitch with CAP and a proof from the case only (no invented figures).</li>
<li>Clarify each objection before answering with FFF; trade concessions (“If…, then…”).</li>
<li>Close with a clear next step: who, what, when.</li></ol>
`;

/* ---------- quiz ---------- */
const Q=(id,topic,src,q,o,e)=>({id,topic,src,q,o,a:0,e});
const QUIZ=[
Q('q0','s1','course','The modern salesperson is best described as:',['a trusted advisor who solves problems and focuses on long-term value','a product pusher focused on closing','a script reader','a negotiator who wins arguments'],'Session 1: from product pusher to value partner.'),
Q('q1','s1','course','Which is typical of B2B sales?',['Long cycles (3–6 months+) and several decision-makers','One decision-maker deciding in minutes','Low-value, high-volume transactions','Mainly emotional, impulse purchases'],'B2C is the opposite.'),
Q('q2','s1','course','First stage of the B2B buyer journey:',['Awareness: “I have a problem”','Evaluation','Decision','Post-purchase'],'Awareness → consideration → evaluation → decision → post-purchase.'),
Q('q3','s1','course','During the evaluation stage, the seller’s role is:',['differentiator and problem-solver','educator and consultant','partner and advocate','thought leader and resource'],'Tailor, compare transparently, show ROI.'),
Q('q4','s1','course','Amazon (Amazon.com and Amazon Business) is an example of:',['a hybrid B2B/B2C model','a pure B2B company','a pure B2C company','a B2B2C insurer'],'Apple and Microsoft are hybrid too.'),
Q('q5','s1','course','What does the Session 1 cold-start simulation show?',['Without preparation you ask poor questions, pitch too early and fail to close','Improvisation is the best method','Scripts are essential','Closing is the first step'],'Sales is structured conversation.'),
Q('q6','s2','course','Which is NOT one of the 4 pillars of a strong opener?',['An apology for the call','Greeting','Relevance','Value hint'],'The fourth pillar is an engaging question. Never apologize.'),
Q('q7','s2','course','“Hi Alex, I saw your recent product launch—congrats! I help startups like yours grow faster through automation.” is a good opener because it is:',['personalized, relevant and value-focused','generic and polite','long and detailed','focused on the seller’s company'],'Name, research, value.'),
Q('q8','s2','course','In C.L.I.P., the L stands for:',['LinkedIn post','Listening','Lead','Logic'],'Company news, LinkedIn post, Industry topic, Personal (only if public).'),
Q('q9','s2','course','Good chitchat is:',['personalized, relevant and short (20–30 s)','about the weather','long and personal','about the seller'],'One smart comment > three generic ones.'),
Q('q10','s2','course','BANT stands for:',['Budget, Authority, Need, Timing','Benefit, Advantage, Need, Trust','Budget, Advantage, Negotiation, Timing','Buyer, Authority, Need, Trust'],'Session 2.'),
Q('q11','s2','course','Which authority question is recommended?',['“Who else is involved in the decision-making process?”','“Are you the decision maker?”','“Can I speak to your boss?”','“Do you have authority?”'],'“Are you the decision-maker?” puts prospects on the defensive.'),
Q('q12','s2','course','“We want something in place next quarter” is a BANT signal of:',['Timing','Budget','Authority','Need'],'Session 2 simulation brief.'),
Q('q13','s2','course','What percentage of cold calls go to voicemail?',['72%','12%','50%','95%'],'But 2/3 of buyers are open to relevant calls.'),
Q('q14','s2','practice','Disqualifying a lead is:',['useful: it saves time','always a failure','forbidden','the same as closing'],'Session 2 bonus.'),
Q('q15','s3','course','Which is an open question?',['“How do you track your sales leads today?”','“Do you use a CRM?”','“Is your team remote?”','“Do you have a budget?”'],'Open questions start with what, how, why.'),
Q('q16','s3','course','“I’m guessing efficiency is your main concern, right?” is a:',['leading question (weak)','good exploratory question','reformulation','need-payoff question'],'It suggests the answer.'),
Q('q17','s3','course','The recommended flow of questions is:',['start broad, narrow down, then confirm','confirm first, then explore','closed questions first','several questions at once'],'Confirming too early feels like an interrogation.'),
Q('q18','s3','course','After asking a question, you should allow silence for about:',['5–7 seconds','1 second','30 seconds','none'],'Embrace silence.'),
Q('q19','s3','course','“So you’re saying that…” is:',['paraphrasing','summarizing','clarifying','reflecting emotion'],'Four types of reformulation.'),
Q('q20','s3','course','Which is a sign of fake listening?',['Preparing your response while the customer is still speaking','Summarizing key points','Thoughtful follow-up questions','Taking relevant notes'],'Session 3.'),
Q('q21','s3','course','If the client speaks about 80% of the time in a sales meeting:',['you are probably doing it right','you are losing control','you should interrupt','you talk too little to close'],'The more they talk, the more you understand.'),
Q('q22','s4','course','“How do you currently train your new team members?” is a SPIN question of type:',['Situation','Problem','Implication','Need-payoff'],'Facts and context.'),
Q('q23','s4','course','“What happens when people are onboarded too slowly?” is:',['Implication','Problem','Situation','Need-payoff'],'It explores consequences.'),
Q('q24','s4','course','“If your team could be trained 30% faster, what would that mean for you?” is:',['Need-payoff','Implication','Situation','Problem'],'The buyer expresses the value.'),
Q('q25','s4','course','“Is this an issue that affects your department only or others too?” is:',['Implication (scope and consequence)','Situation','Problem','Need-payoff'],'The “trickier” example of Session 4.'),
Q('q26','s4','course','Which SPIN questions are the most powerful yet hardest to master?',['Implication','Situation','Problem','Need-payoff'],'They create urgency.'),
Q('q27','s4','course','Asking too many situation questions:',['bores the prospect and signals poor preparation','builds urgency','is the core of SPIN','replaces need-payoff'],'Research in advance.'),
Q('q28','s4','course','Skipping from Problem directly to Need-payoff results in:',['the customer not recognizing the full cost of the problem','more urgency','a faster close','better rapport'],'Implication avoidance.'),
Q('q29','s4','course','SPIN is NOT ideal for:',['basic product information calls or very short calls','discovery meetings','complex B2B sales','consultative selling'],'Session 4.'),
Q('q30','s5','course','In CAP, the A stands for:',['Advantage (what it does for the customer)','Action','Attribute','Agreement'],'Characteristic – Advantage – Proof.'),
Q('q31','s5','course','“They won the 2024 Green Design Award and come with a lifetime guarantee” is the:',['Proof','Characteristic','Advantage','Hook'],'Evidence that validates the claim.'),
Q('q32','s5','course','Pitch A lists 256-bit encryption, multi-user access and API integration; Pitch B tells how an HR client saves 20 hours per onboarding. Pitch B is better because it:',['focuses on outcomes and tells a story about the client','is more technical','lists more features','is longer'],'Feature dumping vs value.'),
Q('q33','s5','course','The three steps of a sales story are:',['context, challenge, outcome','problem, price, close','feature, benefit, proof','greeting, question, close'],'Context ≤ 20% of the story time.'),
Q('q34','s5','course','Recommended length of most sales stories:',['60–90 seconds','10 seconds','5 minutes','15 minutes'],'Long stories lose attention.'),
Q('q35','s5','course','B2B buyers prefer content that is roughly:',['60% logical / 40% emotional','40% logical / 60% emotional','100% logical','100% emotional'],'B2C: 40/60.'),
Q('q36','s5','course','The pitch builder template is:',['Hook → Value (CAP) → Proof (story or result)','Price → Discount → Close','Features → Specs → Price','Greeting → BANT → Close'],'End with an open question.'),
Q('q37','s6','course','An objection usually means:',['“not yet”: the buyer is engaged but has a doubt','a definitive no','the buyer is not interested','the sale is lost'],'Objections are signs of interest.'),
Q('q38','s6','course','For a price objection, the course strategy is to:',['reframe value / ROI','cut the price immediately','ignore it','change the subject'],'Timing → urgency; need → SPIN; trust → proof.'),
Q('q39','s6','course','“We’re using another provider” is mainly an objection of:',['trust','price','timing','need'],'Answer with proof, credibility, story.'),
Q('q40','s6','course','In FFF, “Many of our clients felt the same way” is the step:',['Felt','Feel','Found','Follow'],'It normalizes the concern.'),
Q('q41','s6','course','In FFF, “What they found was that the ROI justified the investment in 6 months” is:',['Found','Feel','Felt','Close'],'A positive outcome or insight.'),
Q('q42','s6','course','LAARC stands for:',['Listen, Acknowledge, Assess, Respond, Confirm','Listen, Ask, Accept, Reply, Close','Learn, Act, Assess, Report, Commit','Listen, Agree, Argue, Resolve, Close'],'Best to deepen a single critical objection.'),
Q('q43','s6','course','“How quickly could we start?” is:',['a buying signal','an objection','a trust issue','a BANT question'],'The buyer projects himself as a client.'),
Q('q44','s6','course','When you see a buying signal you should first:',['pause and stop talking','give more features','offer a discount','ask “Do you want to buy?” immediately'],'Pause, acknowledge, confirm readiness, guide.'),
Q('q45','s6','course','“Based on our discussion, shall we schedule the implementation for next month?” is a:',['assumptive close','summary close','trial close','urgency close'],'Proceed as if the decision is made.'),
Q('q46','s6','course','A trial close is best when:',['the buyer is not ready and you want a small yes','the buyer already behaves like a customer','there is a deadline','you want to end the call'],'“Is there anything else you need before deciding?”'),
Q('q47','s6','course','BATNA means:',['Best Alternative To a Negotiated Agreement','Best Agreement To Negotiate Again','Buyer’s Available Target Negotiation Amount','Budget And Timing Negotiation Analysis'],'Your plan B.'),
Q('q48','s6','course','Your minimum is €2 800 and the buyer’s maximum is €2 500. Then:',['there is no ZOPA: negotiate scope or use your BATNA','the ZOPA is €2 500–2 800','you must accept €2 500','the buyer must pay €2 800'],'ZOPA exists only if buyer max ≥ seller min.'),
Q('q49','s6','course','Which is unethical?',['False scarcity to rush the buyer','Respecting the client’s pace','Asking real questions','Delivering value honestly'],'Ethical selling ≠ pressure.'),
Q('q50','s7','course','In the Session 7 flow, minutes 2–7 are for:',['discovering needs with a connected SPIN sequence','the pitch','objections','closing'],'0–2 rapport, 7–10 CAP, 10–14 objections, 14–16 close.'),
Q('q51','s7','course','Which is NOT an acceptable outcome in the Session 7 lab?',['“I will send an email” with no owner, timing or issue','A viable agreement','A specific conditional next step','A justified no-deal'],'Name the owner, action, timing and unresolved issue.'),
Q('q52','s7','course','In the Session 8 final simulation, choosing the Intermediate level caps your grade at:',['16/20','14/20','20/20','12/20'],'Beginner 14, Intermediate 16, Advanced 20.'),
Q('q53','s7','course','Avril case: the initial order you must secure is:',['48 bottles of 500 ml Zeste de Citron shower gel','300 bottles','a new deodorant','a price cut on deodorants'],'Plus better visibility for the Avril range.'),
Q('q54','s7','course','Avril vs Clairmousse: which is a valid proof for your CAP?',['Avril is Ecocert certified, 97% natural-origin, soap-free and vegan; Clairmousse is not certified and uses synthetic fragrance','Avril has a celebrity ambassador','Avril is the cheapest everywhere','Clairmousse is banned'],'Use only supplied facts (Appendix 1).'),
Q('q55','s7','course','Soleil du Nord Pro: the realistic aim of the first meeting with Flandres Food is:',['agreement for a free technical study','signing the installation today','a 30% discount','a meeting with the competitor'],'Not necessarily to sign today.'),
Q('q56','s7','course','In the Soleil du Nord cases, kWc measures:',['installed power (capacity)','energy produced and billed','the price per kWh','the roof surface'],'kWh = energy produced and billed.'),
Q('q57','s7','practice','“If you can confirm the order within 48 hours, I can include the counter display” is an example of:',['trading concessions','an urgency trick','a trial close','an objection'],'Exchange concessions: “If X, then Y.”')];

/* ---------- exercises ---------- */
const EXERCISES=[
{id:'x-s1-journey',topic:'s1',type:'order',src:'course',title:'The B2B buyer journey',q:'Put the five stages in order.',items:['Awareness: “I have a problem”','Consideration: “I’m exploring solutions”','Evaluation: “I’m comparing offers”','Decision: “I choose a provider”','Post-purchase: “Am I satisfied?”']},
{id:'x-s1-roles',topic:'s1',type:'match',src:'course',title:'Seller’s role at each stage',q:'Match each stage with the seller’s role.',
 pairs:[['Problem recognition','Educator and consultant'],['Information search','Thought leader and resource'],['Evaluation','Differentiator and problem-solver'],['Purchase','Facilitator and negotiator'],['Post-purchase','Partner and advocate']]},
{id:'x-s1-b2b',topic:'s1',type:'match',src:'course',title:'B2B or B2C?',q:'Match each characteristic with B2B or B2C.',
 pairs:[['Formal buying committees and approval hierarchies','B2B'],['White papers, case studies, ROI calculators','B2B'],['Quick, often emotion-driven choices','B2C'],['Short videos, user reviews, lifestyle content','B2C'],['Stakeholder mapping and account management','B2B'],['Fast closing and high-volume customer management','B2C']]},
{id:'x-s2-opener',topic:'s2',type:'order',src:'course',title:'The 4 pillars of an opener',q:'Put the pillars of a strong opener in order.',items:['Greeting (polite and confident)','Relevance (something about them)','Value hint (a reason to care)','Engaging question (to spark dialogue)']},
{id:'x-s2-bant',topic:'s2',type:'match',src:'course',title:'BANT questions',q:'Match each question with the BANT criterion.',
 pairs:[['“Have you allocated a budget for this project?”','Budget'],['“Who else is involved in the decision-making process?”','Authority'],['“What happens if this issue isn’t addressed?”','Need'],['“Is there a specific event driving your timeline?”','Timing'],['“I’ll present options to our head of operations.”','Authority'],['“We want to reduce turnover in remote teams.”','Need']]},
{id:'x-s2-clip',topic:'s2',type:'match',src:'course',title:'C.L.I.P. chitchat topics',q:'Match each line with its C.L.I.P. source.',
 pairs:[['“I saw your recent acquisition announcement…”','Company news'],['“Your article about industry trends was insightful…”','LinkedIn post'],['“How is the new regulation affecting your operations?”','Industry topic'],['“Congrats on your recent promotion!”','Personal (only if public)']]},
{id:'x-s2-openers',topic:'s2',type:'mcq',src:'course',title:'Which openers work?',q:'Select the good openers.',o:['“Hi, I noticed your team is hiring — can I ask how you’re managing remote onboarding?”','“Hi Alex, I saw your recent product launch—congrats! I help startups like yours grow faster through automation.”','“Hello, I’m calling to sell you our amazing insurance options. Are you interested?”','“Sorry to bother you, do you have a moment?”','“Hi, I’d love to tell you about our new SaaS platform.”'],a:[0,1],e:'Good openers are about them, add value and end with a question.'},
{id:'x-s3-open',topic:'s3',type:'match',src:'course',title:'Turn closed into open questions',q:'Match each closed question with its open version.',
 pairs:[['“Do you use a CRM?”','“How do you track your sales leads today?”'],['“Is your team remote?”','“What challenges do you face with remote work?”'],['“Do you have a budget?”','“How do you usually allocate budget for tools like this?”'],['“Do you need help with efficiency?”','“What challenges are you hoping to solve with this solution?”']]},
{id:'x-s3-reform',topic:'s3',type:'match',src:'course',title:'Types of reformulation',q:'Match each line with its type.',
 pairs:[['“So you’re saying that…”','Paraphrasing'],['“Let me make sure I understood your key points…”','Summarizing'],['“Just to be clear — is the issue more about speed or accuracy?”','Clarifying'],['“That sounds frustrating. What impact has it had?”','Reflecting emotion']]},
{id:'x-s3-pitfalls',topic:'s3',type:'match',src:'course',title:'Weak questions',q:'Match each weak question with its pitfall.',
 pairs:[['“Tell me about your business.”','Too broad or vague'],['“What problems are you having, how long, and what have you tried?”','Several questions at once'],['“I’m guessing efficiency is your main concern, right?”','Leading question'],['“Wouldn’t you agree that reducing costs is important?”','Closed question disguised as open']]},
{id:'x-s4-spin',topic:'s4',type:'match',src:'course',title:'Guess the SPIN step',q:'Match each question with its SPIN step.',
 pairs:[['“How many people use your current CRM system?”','Situation'],['“What frustrates you about the reporting system?”','Problem'],['“How does that delay affect your ability to respond to market changes?”','Implication'],['“If you could recapture that 15%, what would that mean for your department?”','Need-payoff'],['“Where does it usually get messy?”','Problem'],['“What would it mean for you to track all this in real time?”','Need-payoff']]},
{id:'x-s4-flow',topic:'s4',type:'order',src:'course',title:'Build a SPIN flow',q:'Put this sequence (team productivity software) in SPIN order.',items:['“How do you currently manage task assignments?”','“Where does it usually get messy?”','“What happens when a task is missed or delayed?”','“What would it mean for you to track all this in real time?”']},
{id:'x-s4-write',topic:'s4',type:'case',src:'practice',title:'Write a SPIN sequence for Avril (self-assessed)',q:'<p>Write one connected question per SPIN step for your meeting with the owner of the Pharmacie des Érables (Avril case, Sessions 7–8 sheet).</p>',
 solution:'<p>Model: <b>S</b> “How do your customers usually choose their shower gels and deodorants here?” → <b>P</b> “What’s most difficult in the hygiene category with the parapharmacy and online pharmacies nearby?” → <b>I</b> “When customers buy those products elsewhere, what does that do to their basket and to your image with health-conscious customers?” → <b>N</b> “If you had a coherent organic routine at eye level that customers can only get advised on here, what would that change for you?” Check: each question builds on the previous answer, the implication explores cost, the need-payoff lets the buyer state the value.</p>'},
{id:'x-s5-cap',topic:'s5',type:'match',src:'course',title:'Label the CAP',q:'Match each part of the pitch with C, A or P.',
 pairs:[['“Our water bottles are made from recycled steel…”','Characteristic'],['“…which keeps drinks cold for 24 hours or hot for 12 hours…”','Advantage'],['“…they won the 2024 Green Design Award.”','Proof'],['“This platform automates onboarding…”','Characteristic'],['“…it reduces HR workload by 30%…”','Advantage'],['“…like at Danone.”','Proof']]},
{id:'x-s5-story',topic:'s5',type:'order',src:'course',title:'Story arc',q:'Order the parts of this story.',items:['A mid-sized HR team, growing fast this year…','…spent days onboarding each new hire and kept making admin errors.','We digitized the process in under a week: they now save 20 hours per onboarding.']},
{id:'x-s5-pitch',topic:'s5',type:'case',src:'practice',title:'One-minute CAP pitch for the shower gel (self-assessed)',q:'<p>Write a 60-second pitch (Hook → CAP → Proof → open question) for the Avril Zeste de Citron shower gel to the pharmacy owner.</p>',
 solution:'<p>Model: “Many of your customers come for advice and care about what they put on their skin (hook). Our Zeste de Citron gel is Ecocert-certified, 97% natural-origin, soap-free and vegan (C): a credible organic choice you can recommend with confidence (A). Compared with Clairmousse, it has 17 ingredients instead of 24, no PEG, no artificial colorants, and it’s 500 ml for about €5.90 versus 400 ml at €6.50 (P). With the counter tester, customers smell it first — how do you see it fitting next to the deodorants they already buy from you?” Check: one feature → benefit → proof chain, supplied facts only, an open question at the end.</p>'},
{id:'x-s6-types',topic:'s6',type:'match',src:'course',title:'Objection types and strategies',q:'Match each objection with the right strategy.',
 pairs:[['“It’s too expensive.”','Reframe value / ROI'],['“We’re not ready yet.”','Create urgency or anchor future steps'],['“I’m not sure we need this.”','Return to pain points (SPIN)'],['“We’re using another provider.”','Proof, credibility, story']]},
{id:'x-s6-fff',topic:'s6',type:'match',src:'course',title:'Label the FFF',q:'Match each sentence with its FFF step.',
 pairs:[['“I hear that — it’s a busy season for many.”','Feel'],['“Others felt the same and hesitated too.”','Felt'],['“But when they saw how quickly the tool was up and running, they were relieved they didn’t wait.”','Found']]},
{id:'x-s6-closes',topic:'s6',type:'match',src:'course',title:'Closing techniques',q:'Match each line with the closing technique.',
 pairs:[['“We’ve covered your concerns on timing and support. Shall we confirm the package?”','Summary close'],['“Let’s look at the timeline for onboarding.”','Assumptive close'],['“Would you like to move forward with this?”','Direct close'],['“Is there anything else you need before deciding?”','Trial close'],['“The pricing we discussed is valid until the end of the quarter.”','Urgency close']]},
{id:'x-s6-frameworks',topic:'s6',type:'match',src:'course',title:'Objection frameworks',q:'Match each framework with its best use.',
 pairs:[['FFF','Emotional objections, building rapport'],['LACE','Complex technical objections needing a clear action plan'],['RAIN','Several objections or buying committees'],['LAARC','Deepening a single critical objection']]},
{id:'x-s6-zopa',topic:'s6',type:'calc',src:'practice',title:'ZOPA (new numbers)',
 gen:u=>{const min=u.step(1500,6000,100),gap=u.step(-800,1500,100);return {min,max:min+gap}},
 q:v=>`<p>The seller’s minimum acceptable price is €${fmt(v.min)}; the buyer’s maximum budget is €${fmt(v.max)}.</p><p>Width of the ZOPA in € (enter 0 if there is no ZOPA)?</p>`,
 answer:v=>Math.max(0,v.max-v.min),tol:0,unit:'€',
 solution:v=>v.max>=v.min?F(`ZOPA = from €${fmt(v.min)} to €${fmt(v.max)} → width €${fmt(v.max-v.min)}: negotiate inside it`):F(`Buyer max €${fmt(v.max)} < seller min €${fmt(v.min)} → no ZOPA: negotiate scope, timing or extras, or use your BATNA`)},
{id:'x-s6-signals',topic:'s6',type:'mcq',src:'course',title:'Spot the buying signals',q:'Which are buying signals?',o:['“How quickly could we start?”','“What’s included in the service?”','Asking detailed pricing questions','Involving a colleague in the meeting','“Just send me an email.”','Checking the phone repeatedly'],a:[0,1,2,3],e:'Signals mean the buyer projects himself as a client.'},
{id:'x-s6-objection-write',topic:'s6',type:'case',src:'practice',title:'Answer an objection with FFF (self-assessed)',q:'<p>The pharmacy owner says: “Avril is cheaper in its own shops and online. Why would customers buy it here?” Clarify, then answer with FFF and finish with a question.</p>',
 solution:'<p>Model: Clarify: “When you say cheaper, are you worried about losing the sale or about your margin?” Feel: “I understand — nobody wants to feel undercut.” Felt: “Other pharmacists I work with felt the same at first.” Found: “What they found is that customers come to a pharmacy for advice: with the tester on the counter, the brand block and the loyalty card (11th product free), they come back to them for the whole routine.” Question: “Would a placement on the path to the checkout make sense for you?” Never invent figures or discounts.</p>'},
{id:'x-s7-flow',topic:'s7',type:'order',src:'course',title:'A full-cycle conversation',q:'Put the steps of the 16-minute conversation in order.',items:['Greet, build rapport, agree an agenda, confirm the buyer’s role','Discover needs with a connected SPIN sequence and summarize','Give a focused CAP pitch linked to the buyer’s priorities','Explore objections, use FFF, trade conditions','Check remaining concerns, close and confirm the next step']},
{id:'x-s7-toolbox',topic:'s7',type:'match',src:'course',title:'The sales toolbox',q:'Match each tool with its purpose.',
 pairs:[['BANT','Qualify leads'],['SPIN','Explore needs'],['CAP','Pitch value'],['FFF','Handle objections'],['BATNA / ZOPA','Negotiate effectively'],['Summary / assumptive / trial','Drive decisions']]},
{id:'x-s7-avril',topic:'s7',type:'case',src:'course',title:'Avril case: key facts',q:'<p>Avril case (Session 8 evaluation brief).</p>',
 parts:[{type:'numeric',q:'Initial order to secure (bottles)',answer:48,tol:0},{type:'numeric',q:'Bottle size (ml)',answer:500,tol:0},{type:'numeric',q:'Estimated yearly potential per pharmacy (units)',answer:300,tol:0},{type:'numeric',q:'Percentage of natural-origin ingredients',answer:97,tol:0},
  {type:'mcq',q:'Products already listed',o:['Roll-on and spray deodorants','Shower gels','Hand cream','Nothing'],a:0},{type:'mcq',q:'Loyalty card mechanism',o:['Buy 10 Avril products, the 11th is free','10% off everything','A free gift with 48 bottles','None'],a:0}],
 solution:'<p>See the Sessions 7–8 sheet for the full preparation canvas.</p>'},
{id:'x-s7-canvas',topic:'s7',type:'case',src:'practice',title:'Prep canvas for the final simulation (self-assessed)',q:'<p>Fill the six zones of the Session 8 prep canvas for the Avril case: opening, SPIN path, CAP + story, two objections with FFF, negotiation angle (ZOPA/BATNA), closing line.</p>',
 solution:'<p>Compare with the model table in the Sessions 7–8 sheet. Check that: your opening refers to the last visit and the pharmacy’s growth; you have one question per SPIN step; each CAP uses a supplied proof (Appendix 1–3); each objection is clarified before FFF; your concessions stay within the tools provided (no invented discounts); your close names the quantity, placement and delivery date.</p>'}];

/* ---------- flashcards ---------- */
const C=(id,topic,f,b)=>({id,topic,f,b});
const CARDS=[
C('c0','s1','Old-school vs modern seller','pushes, talks, one-size-fits-all, closing vs solves, listens, customizes, long-term value'),C('c1','s1','Core sales responsibilities','prospect, qualify, discover, pitch, handle objections, negotiate and close, follow up'),
C('c2','s1','B2B buyer journey','awareness → consideration → evaluation → decision → post-purchase'),C('c3','s1','B2B vs B2C cycle and value','months, $1K–$1M+, committees vs minutes–days, $5–$500, one person'),
C('c4','s2','4 pillars of an opener','greeting · relevance · value hint · engaging question'),C('c5','s2','C.L.I.P.','Company news · LinkedIn post · Industry topic · Personal (only if public)'),
C('c6','s2','Chitchat golden rules','personalized · relevant · short (20–30 s)'),C('c7','s2','BANT','Budget · Authority · Need · Timing'),C('c8','s2','Never ask…','“Are you the decision-maker?” → “Who else is involved in the decision?”'),
C('c9','s3','5 keys of active listening','full attention · no interrupting · mirror/paraphrase · clarifying questions · acknowledge emotions'),C('c10','s3','Open vs closed questions','what/how/why/tell me about vs do/is/are/can'),
C('c11','s3','Questioning flow','start broad → narrow → confirm; one question at a time; 5–7 s silence'),C('c12','s3','Four reformulations','paraphrase · summarize · clarify · reflect emotion'),C('c13','s3','Mirroring','language · pace · energy · posture'),
C('c14','s4','SPIN','Situation · Problem · Implication · Need-payoff'),C('c15','s4','Implication question','explores consequences, creates urgency: “What happens when…?”'),C('c16','s4','Need-payoff question','buyer states the value: “What would it mean for you if…?”'),
C('c17','s4','Three SPIN mistakes','premature need-payoff · situation overload · implication avoidance'),C('c18','s5','CAP','Characteristic (feature) · Advantage (benefit) · Proof (evidence)'),
C('c19','s5','CAP formula','We offer [X], which helps you [Y], and we’ve proven this with [Z]'),C('c20','s5','Story arc','context (≤ 20%) → challenge → outcome; 60–90 s'),C('c21','s5','Pitch template','Hook → Value (CAP) → Proof (story) → open question'),
C('c22','s6','Objection types and strategies','price → ROI · timing → urgency · need → SPIN · trust → proof'),C('c23','s6','FFF','Feel (empathy) · Felt (normalize) · Found (outcome)'),
C('c24','s6','LACE · RAIN · LAARC','Listen-Accept-Commit-Explicit · React-Ask-Implement-Next · Listen-Acknowledge-Assess-Respond-Confirm'),
C('c25','s6','When you see a buying signal','pause · acknowledge · confirm readiness · guide to the close'),C('c26','s6','Closing techniques','summary · assumptive · direct · trial · urgency'),
C('c27','s6','BATNA','Best Alternative To a Negotiated Agreement: your plan B'),C('c28','s6','ZOPA','between the seller’s minimum and the buyer’s maximum'),
C('c29','s7','Final simulation grade caps','Beginner 14/20 · Intermediate 16/20 · Advanced 20/20'),C('c30','s7','Avril mission','list Zeste de Citron gel: 48 × 500 ml + visibility for the Avril range'),
C('c31','s7','Prep canvas (6 zones)','opening · SPIN path · CAP + story · objections + FFF · ZOPA/BATNA · closing line'),C('c32','s7','A real close','agreement, conditional next step or justified no-deal — with owner, action and timing')];

/* ---------- mock exams ---------- */
const MQ=(id,topic,q,o)=>({id,topic,type:'mcq',pts:0.5,q,o,a:0});
const MOCKS=[
{id:'m1',title:'Mock written exam 1',exam:'final',scope:'Sessions 1–8',duration:60,total:20,calculator:'No material',
 summary:'MCQs, SPIN/BANT/CAP exercises, an objection to answer and a closing / BATNA question, as listed in “What to expect”.',
 intro:'<p>Format chosen for the site from the 2025 “What to expect” (written exam: MCQs, SPIN/BANT/CAP exercises, objection responses, closing and BATNA questions).</p>',
 sections:[
 {title:'Part A · MCQs (8 points)',items:[
  MQ('a1','s1','The seller’s role during “information search” is:',['thought leader and resource','facilitator and negotiator','partner and advocate','differentiator']),
  MQ('a2','s1','B2C purchases are typically:',['quick and often emotion-driven','decided by committees','worth $1M+','3–6 months long']),
  MQ('a3','s2','Which is a bad opener?',['“Sorry to bother you, I’m calling from ProTech, do you have a moment?”','“I noticed your team is hiring — how are you managing onboarding?”','“I saw your Series B — congrats! How is the team handling growth?”','“We help HR teams with remote onboarding — can I ask how you do it today?”']),
  MQ('a4','s2','“We have some budget for HR tools, but we’re still deciding priorities” signals:',['Budget','Authority','Timing','Need']),
  MQ('a5','s3','Which is an open question?',['“What challenges do you face with remote work?”','“Is your team remote?”','“Do you use a CRM?”','“Can we meet Monday?”']),
  MQ('a6','s3','“Just to be clear — is the issue more about speed or accuracy?” is:',['clarifying','paraphrasing','summarizing','reflecting emotion']),
  MQ('a7','s4','“What happens when data is wrong in your spreadsheets?” is a SPIN question of type:',['Implication','Situation','Problem','Need-payoff']),
  MQ('a8','s4','Top sellers ask many more questions of type:',['Need-payoff','Situation','closed','leading']),
  MQ('a9','s5','“…which helped Company Y cut reporting time in half” is the:',['Proof','Characteristic','Advantage','Hook']),
  MQ('a10','s5','The middle part of a sales story is the:',['challenge','context','outcome','close']),
  MQ('a11','s6','“We’re not ready yet” is an objection of:',['timing','price','trust','need']),
  MQ('a12','s6','Which framework fits several objections raised by a buying committee?',['RAIN','FFF','LACE','LAARC']),
  MQ('a13','s6','“Let’s look at the timeline for onboarding” is a:',['assumptive close','summary close','trial close','direct close']),
  MQ('a14','s6','If the buyer’s maximum is above the seller’s minimum:',['a ZOPA exists','there is no deal possible','the BATNA must be used','the price is fixed']),
  MQ('a15','s7','In the final AI simulation, the Advanced level allows up to:',['20/20','16/20','14/20','18/20']),
  MQ('a16','s7','Which is NOT a valid close in the Session 7 lab?',['“I will send an email.”','A signed package','A conditional next step with owner and deadline','A justified no-deal'])]},
 {title:'Part B · SPIN, BANT, CAP (6 points)',items:[
  {id:'b1',topic:'s4',type:'match',pts:2,title:'B1 · SPIN',q:'Classify these questions (HR onboarding software).',pairs:[['“How do you onboard new hires today?”','Situation'],['“What is inconsistent in that process?”','Problem'],['“How does that affect turnover in remote teams?”','Implication'],['“What would a consistent onboarding mean for your managers?”','Need-payoff']]},
  {id:'b2',topic:'s2',type:'match',pts:2,title:'B2 · BANT',q:'Which BANT criterion does each buyer sentence reveal?',pairs:[['“I’ll present the options to our head of operations.”','Authority'],['“We want something in place next quarter.”','Timing'],['“We want to reduce turnover in remote teams.”','Need'],['“Investments above €10K need the CFO’s approval.”','Budget']]},
  {id:'b3',topic:'s5',type:'match',pts:2,title:'B3 · CAP',q:'Label the pitch: “Our panels come with a production guarantee… so your savings are protected for 25 years… 9 000 installations since 2009 in the region.”',pairs:[['“Our panels come with a production guarantee”','Characteristic'],['“so your savings are protected for 25 years”','Advantage'],['“9 000 installations since 2009 in the region”','Proof']]}]},
 {title:'Part C · Objection and closing (6 points)',items:[
  {id:'c1',topic:'s6',type:'written',pts:3,title:'C1 · Objection',lines:6,q:'<p>Soleil du Nord Pro: Mrs. Clément says “We had a quote from SUNPROV 18 months ago: too expensive and unclear. Why would yours be different?” Write your answer.</p>',
   rubric:[{c:'Clarifies the concern (price, clarity or risk)',pts:0.75},{c:'Feel and Felt: empathy and normalization',pts:0.75},{c:'Found: a credible resolution from the case (transparent quote, free study, financing options, production guarantee) without invented figures',pts:1},{c:'Ends with a question or next step',pts:0.5}],
   solution:'<p>Model: “When you say expensive and unclear, was it the total investment or not understanding the numbers? (clarify) I understand — a quote you can’t read is frustrating (Feel). Other plant managers felt the same after a first quote (Felt). What they found with us is a transparent study: €/kWc for the installation, versus about €0.07 per solar kWh compared with about €0.20 from the grid, with purchase, leasing or zero-upfront PPA options and a production guarantee (Found). Shall we start with the free technical study with Mr. Chazal?”</p>'},
  {id:'c2',topic:'s6',type:'written',pts:3,title:'C2 · Close and BATNA',lines:6,q:'<p>The buyer says: “Assuming we go ahead… what’s the next step?” Write your closing line and explain your BATNA and how you would use the ZOPA if the buyer then asks for a lower price.</p>',
   rubric:[{c:'Recognizes the buying signal and uses an appropriate close (summary or assumptive)',pts:1},{c:'Defines BATNA correctly with a concrete plan B',pts:1},{c:'Explains ZOPA and trades concessions (“If…, then…”) instead of cutting the price',pts:1}],
   solution:'<p>Model: “Great — so we agree on the scope, the timing and the support. Shall we book the kick-off for next week?” (summary/assumptive close). BATNA = my best alternative if this deal fails (another prospect, keeping the current relationship). If they ask for a lower price: check whether a ZOPA exists between my minimum and their maximum, explain value first, then trade: “If you confirm this week with 50% upfront, I can include…”.</p>'}]}]}];

// Shuffle MCQ options once, deterministically (seeded by the id), so the answer is not always "a".
const seed=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const mix=(x,key)=>{if(!x||x.type&&x.type!=='mcq'||!Array.isArray(x.o))return;let r=seed(key);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};
  const idx=x.o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  const pos=i=>idx.indexOf(i);x.a=Array.isArray(x.a)?x.a.map(pos).sort((p,q)=>p-q):pos(x.a);x.o=idx.map(i=>x.o[i])};
QUIZ.forEach(q=>mix(q,q.id));
EXERCISES.forEach(x=>{mix(x,x.id);(x.parts||[]).forEach((p,i)=>mix(p,x.id+'-'+i))});
MOCKS.forEach(m=>m.sections.forEach(s=>s.items.forEach(x=>{mix(x,m.id+x.id);(x.parts||[]).forEach((p,i)=>mix(p,m.id+x.id+'-'+i))})));

registerSubject({
  slug:'sales-techniques',
  name:'Sales Techniques',
  short:'Sales',
  tagline:'IÉSEG Bachelor 2 · Final AI simulation (Avril case) + written exam',
  status:'Sessions 1–8 done · Avril case prep · 1 mock',
  exams:[{id:'final',label:'Final assessment',scope:'Sessions 1–8'}],
  topics:[
    {id:'s1',label:'Session 1',title:'Preparing the sale',short:'S1 Prepare',exam:'final',summary:'Trusted advisor, B2B vs B2C, buyer journey',sheet:SHEETS.s1},
    {id:'s2',label:'Session 2',title:'Prospecting and qualifying',short:'S2 BANT',exam:'final',summary:'Openers, chitchat (C.L.I.P.), BANT',sheet:SHEETS.s2},
    {id:'s3',label:'Session 3',title:'Discovering needs',short:'S3 Listening',exam:'final',summary:'Active listening, open questions, reformulation',sheet:SHEETS.s3},
    {id:'s4',label:'Session 4',title:'SPIN Selling',short:'S4 SPIN',exam:'final',summary:'Situation, Problem, Implication, Need-payoff',sheet:SHEETS.s4},
    {id:'s5',label:'Session 5',title:'Pitching and storytelling',short:'S5 CAP',exam:'final',summary:'CAP, story arc, pitch template',sheet:SHEETS.s5},
    {id:'s6',label:'Session 6',title:'Objections and closing',short:'S6 Objections',exam:'final',summary:'Objection types, FFF, signals, closes, BATNA, ZOPA',sheet:SHEETS.s6},
    {id:'s7',label:'Sessions 7–8',title:'Full cycle and the Avril case',short:'S7–8 Simulation',exam:'final',summary:'Full-cycle flow, prep canvas, Avril case',sheet:SHEETS.s7}],
  cheatsheet:SHEETS.cheat,
  overview:{
    eyebrow:'Sales Techniques',
    title:'Every method of the course, and your Avril case prep',
    lede:'Built from the MyCourses material of SALES TECHNIQUES 2332 (coordinator Romain Franck): the Session 1–8 slides, the course page, the Session 8 evaluation brief (Avril case), the Soleil du Nord cases and the Session 7 student pack. Read the sheets, drill SPIN, BANT, CAP and FFF, then prepare the final simulation with the Avril canvas.',
    blurbs:{cheat:'All the sales tools on one page',exercises:'Classify questions, label pitches and objections, prepare the Avril case',cards:'Frameworks and definitions',mocks:'A written exam in the format of “What to expect”'},
    html:`<h3>How you are assessed</h3>
  <ul><li><b>Course page (2026-27)</b>: Session 8 final simulation on MuchBetter.ai — 1 h of preparation in class, 25 minutes of simulation; your score (%) is your grade, capped by the level you choose (Beginner 14/20, Intermediate 16/20, Advanced 20/20). No pause or stop. Session 9: Capstone video pitch (Bénédicta, group, deadline 18 November). Squad Job: 20%.</li>
  <li><b>“What to expect” (slides dated 2025)</b>: presence 5%, Squad Work 20%, <b>written exam 50%</b> (MCQs, SPIN/BANT/CAP exercises, objection responses, closing and BATNA questions), final AI simulation 25%.</li>
  <li>The two documents disagree on whether a written exam exists this year: <b>ask your teacher</b>. The site prepares both: theory and drills for a written exam, and the Avril case canvas for the simulation.</li></ul>
  <h3>Sources and limits</h3>
  <ul><li>The Avril preparation (SPIN questions, CAP, objections, close) is a <b>model written by the site</b> from the case brief: use your own words in the simulation (transcripts are reviewed).</li>
  <li>The CAP acronym is inconsistent in the Session 5 summary slide (“Context-Action-Payoff”); the course otherwise uses Characteristic – Advantage – Proof.</li>
  <li>Not available: the Wooclap quizzes (external), the MuchBetter.ai simulations themselves, the Alpha Partner appendix.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  mocksNote:NOTE('<b>Where the format comes from.</b> The 2025 “What to expect” lists a written exam (MCQs, SPIN/BANT/CAP exercises, objection responses, closing and BATNA). Its duration and points are <b>chosen for this site</b>; the 2026-27 course page only mentions the AI simulation.')
});
})();
