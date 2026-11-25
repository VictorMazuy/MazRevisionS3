/* Sales Techniques . Assessment: final AI simulation on MuchBetter.ai (Session 8,
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
<h3>1. The four types of SPIN questions</h3>
${T(['Step','Purpose','Example'],[['S — Situation','understand the context, facts','“How do you currently train your new team members?”'],['P — Problem','identify what is not working (pain)','“What’s the main challenge with that training process?”'],['I — Implication','explore the consequences, the cost of the problem','“What happens when people are onboarded too slowly?”'],['N — Need-payoff','let the buyer express the value of solving it','“If your team could be trained 30% faster, what would that mean for you?”']])}
<ul><li>SPIN is a <b>flow, not a list</b>: S → P → I → N, each question built on the previous answer. Not a script, not a questionnaire.</li>
<li>Situation: research beforehand to keep these few. Successful sellers ask 2–3 times more <b>problem</b> questions; <b>implication</b> questions are the most powerful and the hardest; top sellers ask 10× more <b>need-payoff</b> questions.</li>
<li>“Is this an issue that affects your department only or others too?” is an <b>implication</b> question (scope and consequence).</li>
<li>Best for discovery meetings, complex or consultative B2B sales; not for basic information calls or when time is very short.</li></ul>
<p><b>Why do implication questions work?</b> A problem the buyer only mentions stays small; when the buyer describes its cost (lost deals, wasted hours, angry customers), the problem becomes urgent in their own words. The need-payoff question then lets the buyer state the value of solving it, so you never have to “sell” it.</p>
<h3>2. Linking the steps into a flow</h3>
${EX('Linking the steps','worked example',`<p><b>S → P</b>: “How many people use your CRM?” — “About 45 reps.” — “What challenges have those teams experienced with it?”<br><b>P → I</b>: “It’s too slow — reports take hours.” — “How does that delay affect your ability to respond to market changes?”<br><b>I → N</b>: “We lose about 15% of potential deals.” — “If you could recapture that 15%, what would that mean for your department?”</p>`)}
${TRAP('Mistakes: jumping to need-payoff before exploring implications (no urgency), situation overload (boredom), skipping implications to avoid “negative” talk (the buyer never feels the cost of the problem).')}
`;

SHEETS.s5=`
<div class="eyebrow">Session 5</div><h2>Pitching and storytelling</h2>
<p class="lede">Goal: build a pitch with CAP (Characteristic, Advantage, Proof), make it memorable with a context-challenge-outcome story, and avoid feature dumping.</p>
<h3>1. CAP: Characteristic, Advantage, Proof</h3>
${T(['Letter','Meaning','Role','Example (water bottle)'],[['C','Characteristic','what it is (the feature)','made from recycled steel'],['A','Advantage','what it does for the customer (the benefit)','keeps drinks cold 24 h or hot 12 h'],['P','Proof','why it is credible (fact, example)','2024 Green Design Award and lifetime guarantee']])}
${F('CAP formula: “We offer [X feature], which helps you [Y benefit],\nand we’ve proven this with [Z proof].”')}
<ul><li>Types of proof: third-party certifications, testimonials, case studies and results, awards, research data.</li>
<li>Feature dumping (“customizable dashboards, multi-language support, user roles…”) vs CAP (“Our dashboards (C) help teams visualize performance in real time (A), which helped Company Y cut reporting time in half (P)”).</li>
<li>Good pitch: clarity and concision (impressions form in 30 seconds), client focus (“What’s in it for me?”), data + emotion.</li></ul>
${NOTE('<b>Check against the slide:</b> the Session 5 summary slide calls CAP “Context-Action-Payoff”, whereas the whole session (and Sessions 7–8) define CAP as <b>Characteristic – Advantage – Proof</b>. The site follows the latter.')}
<p><b>Why CAP and not a list of features?</b> Buyers ask “what’s in it for me?”: a feature means nothing until it is translated into an advantage for <b>their</b> problem, and an advantage is only believed with a proof.</p>
<h3>2. Storytelling</h3>
${T(['Step','Content'],[['Context (≤ 20% of the story)','who, where, when, what: a relatable client'],['Challenge','the specific problem, quantified, with what is at stake'],['Outcome (resolution)','how your solution helped: before/after, measurable results, emotional relief']])}
<p>Stories help buyers visualize, feel the impact, remember and trust (63% trust salespeople who share relevant case studies). Aim for 60–90 seconds. Mistakes: feature fixation, irrelevant stories, too long, exaggeration, missing call to action. Pitch template: <b>Hook</b> (context or problem) → <b>Value</b> (CAP) → <b>Proof</b> (story or result), ending with an open question. B2B: ROI and metrics; B2C: emotional benefits and ease.</p>
`;

SHEETS.s6=`
<div class="eyebrow">Session 6</div><h2>Objections, closing, BATNA and ZOPA</h2>
<p class="lede">Goal: treat objections as interest, answer them with Feel–Felt–Found, spot buying signals, close ethically, and negotiate with BATNA and ZOPA in mind.</p>
<h3>1. Objections</h3>
<p>An objection is a concern, doubt or hesitation: “not yet”, not “no”. <b>Why clarify first?</b> “Too expensive” can mean over budget, poor value, or a cheaper offer elsewhere: each needs a different answer, so ask before you respond.</p>
<p> It shows the buyer is engaged, thinking and imagining using the solution. “If they say nothing, that’s when you should worry.” Causes: lack of clarity, trust, urgency or (perceived) fit.</p>
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
<h3>1. The full sales conversation</h3>
${T(['Tool','Purpose','Components'],[['BANT','qualify leads','Budget – Authority – Need – Timing'],['SPIN','explore needs','Situation – Problem – Implication – Need-payoff'],['CAP','pitch value','Characteristic – Advantage – Proof'],['FFF','handle objections','Feel – Felt – Found'],['Closing','drive decisions','Summary – Assumptive – Trial (– Direct, Urgency)'],['BATNA / ZOPA','negotiate','Best alternative / Zone of possible agreement']])}
${T(['Minutes (16-min conversation, Session 7)','What to do'],[['0–2','greet, rapport, agree an agenda, confirm the buyer’s role'],['2–7','discover needs with a connected SPIN sequence; listen and summarize'],['7–10','focused CAP pitch linked to the buyer’s priorities'],['10–14','explore objections, FFF, trade conditions'],['14–16','check remaining concerns, close, confirm next steps (owner, action, timing)']])}
<p><b>Prep canvas</b> (Session 8): opening · SPIN path (1–2 questions per step) · CAP + story · 2 objections to expect with FFF · negotiation angle (ZOPA, BATNA) · closing line. Acceptable outcomes: an agreement, a specific conditional next step, or a justified no-deal — “I will send an email” alone is not a close.</p>
<h3>2. The final simulation (MuchBetter.ai, Session 8)</h3>
<ul><li>1 hour of preparation in class, then 25 minutes of simulation; <b>score (%) = grade</b>, capped by the chosen level: Beginner max 14/20, Intermediate 16/20, Advanced 20/20. No pause or stop (logs are checked); transcripts are reviewed (no GPT-written answers).</li>
<li>Evaluated on: structure of the pitch (SPIN + CAP), objection handling (FFF), closing strategy, assertiveness and adaptability.</li></ul>
<h3>3. Avril case: your preparation</h3>
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
<h3>4. Practice cases</h3>
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
/* ---------- v2 (24/11/2026): layered sheets, role-play dialogues, glossary, generators and tools (CONVENTIONS.md section 16) ---------- */
const {LAYERED,DIALOG}=Rev.h;
const OUT='<b>Outside the slides:</b>';

/* ---------- v2: role-play dialogues ---------- */
const DL_AVRIL={id:'dl-avril',topic:'s7',title:'Avril case: the full conversation with the pharmacist',who:'Pharmacist (Loison)',start:'a',
 intro:'<p>You are the Avril sales rep at the Pharmacie des Érables. Mission: list the Zeste de Citron shower gel with <b>48 bottles of 500 ml</b> and improve the visibility of the range. Choose each reply; every choice is commented with the course method. Dialogue written by the site from the case brief: the AI buyer of the final may react differently.</p>',
 nodes:{
  a:{say:'Bonjour. I have ten minutes, customers are waiting. What did you want to show me?',o:[
   {t:'Thanks for seeing me. Could we talk about the hygiene aisle for a few minutes?',to:'b',q:1,fb:'Polite and sets an agenda, but no relevance to them and no engaging question.'},
   {t:'Thank you for your time. Last visit you seemed interested in our Zeste de Citron gel, and congratulations: your new vaccination service is clearly bringing people in. Could we start with how the Avril deodorants are doing for you?',to:'b',q:2,fb:'The four pillars: greeting, relevance (their news), value hint, engaging question.'},
   {t:'I’d like to present our new organic shower gel. It’s excellent and cheap. Shall I put you down for 48 bottles?',to:'b2',q:0,fb:'Feature talk and a premature close before any discovery.'}]},
  b2:{say:'Forty-eight? I don’t even know what’s special about it. Be quick.',o:[
   {t:'It’s the best gel on the market, trust me.',to:'c',q:0,fb:'An empty claim with no proof, still no discovery.'},
   {t:'Of course. So that I only show you what matters to you: how do your customers usually choose their hygiene products?',to:'c',q:2,fb:'You recover by switching to discovery with a situation question.'}]},
  b:{say:'The deodorants sell a little. They’re on the bottom shelf; people don’t really see them.',o:[
   {t:'Then you need our display, it’s free! Shall I install it today?',to:'c',q:0,fb:'Pitching a solution before understanding the situation.'},
   {t:'Do you have a budget for hygiene products?',to:'c',q:1,fb:'A closed question too early; explore the situation first.'},
   {t:'How do your customers usually choose their hygiene products?',to:'c',q:2,fb:'Situation question: start broad, open, one at a time.'}]},
  c:{say:'Mostly on price. They compare with the parapharmacy across the road and with online pharmacies. Young families come for vaccines and grab something on the way.',o:[
   {t:'Do you find that difficult?',to:'d',q:1,fb:'A closed question: you get “yes” but no detail.'},
   {t:'What’s hardest for you in the hygiene category, with the parapharmacy and online pharmacies nearby?',to:'d',q:2,fb:'Problem question: it brings out the pain in their words.'},
   {t:'Our gel is cheaper than Clairmousse, so price won’t be a problem.',to:'d',q:0,fb:'You answer a problem you have not explored, and you pitch on price.'}]},
  d:{say:'Honestly, they come in for advice on medicines but buy their shower gel elsewhere. The hygiene aisle doesn’t move much.',o:[
   {t:'When those customers buy their hygiene products elsewhere, what does that do to your average basket and your margin?',to:'e',q:2,fb:'Implication question: the buyer states the cost of the problem, which creates urgency.'},
   {t:'So you’d like to sell more hygiene products, right?',to:'e',q:1,fb:'Leading, confirming question: it skips the implications.'},
   {t:'Let me show you our full range.',to:'e',q:0,fb:'Jumping to the pitch: the problem never feels costly.'}]},
  e:{say:'It hurts. Our revenue is below the national average, and the hygiene margin is what keeps the parapharmacy side alive.',o:[
   {t:'Then you definitely need Avril.',to:'f',q:0,fb:'You state the value yourself instead of letting the buyer say it.'},
   {t:'If you had a coherent organic routine at eye level, that customers can only get advised on here, what would that change for you?',to:'f',q:2,fb:'Need-payoff question: the buyer describes the value of the solution.'},
   {t:'So, to sum up: price competition nearby and an aisle that doesn’t move. Is that right?',to:'f',q:1,fb:'Summarizing is good practice, but do not skip the need-payoff step.'}]},
  f:{say:'It would help, if people actually see it and trust it. What’s so special about your gel?',o:[
   {t:'It’s organic, vegan, soap-free, 97% natural, 500 ml, lemon scent, recyclable bottle, made in our own workshop…',to:'g',q:0,fb:'Feature dumping: no advantage for them, no proof.'},
   {t:'It’s 500 ml at about €5.90, cheaper than Clairmousse.',to:'g',q:1,fb:'A characteristic and a price advantage, but nothing for their health-conscious clientele.'},
   {t:'It’s certified organic by Ecocert and 97% natural origin (C), so it answers the health-conscious customers who come to you for advice (A). Clairmousse has 24 ingredients, synthetic fragrance and PEG (P).',to:'g',q:2,fb:'CAP linked to the need they just expressed, with a proof from the case.'}]},
  g:{say:'Fine. But Avril is cheaper in your own shops and online. Why would anyone buy it here?',o:[
   {t:'I can give you 20% off to match.',to:'h',q:0,fb:'Never invent a discount: concessions must stay within the tools provided.'},
   {t:'Fair point. What matters more to your customers here: the price or the advice?',to:'h',q:1,fb:'Clarifying is right, but finish the answer (FFF).'},
   {t:'I understand, nobody wants to be undercut (Feel). Other pharmacists felt the same at first (Felt). What they found is that advice at the counter, the tester and the loyalty card (11th product free) bring customers back to them rather than to a website (Found).',to:'h',q:2,fb:'Feel–Felt–Found with the case’s real arguments.'}]},
  h:{say:'Maybe. But 48 bottles is a lot, and my shelves are full.',o:[
   {t:'When you say a lot, is it the amount or the space? If the display goes on the checkout path, would 48 be realistic given about 300 units of yearly potential?',to:'i',q:2,fb:'Clarify first, then trade a condition (“If…, then…”).'},
   {t:'OK, let’s say 12 bottles then.',to:'i',q:0,fb:'A concession given for nothing: trade, don’t give.'},
   {t:'I understand space is tight. Which shelf could we free if the display goes on the counter?',to:'i',q:1,fb:'Good empathy and exploration, but you have not linked it to the order.'}]},
  i:{say:'If the display is at the checkout… how quickly could you deliver? And does the tester come with it?',o:[
   {t:'Let me first tell you about our deodorants and hand creams.',to:'z2',q:0,fb:'A buying signal ignored: you keep talking after the buyer is ready.'},
   {t:'Yes, the tester and the display come with the first order. So we agree: brand block at eye level, the tester on the counter and 48 bottles to start. Shall I book it for delivery next week?',to:'z',q:2,fb:'Buying signal spotted, summary close, clear next step.'},
   {t:'I’ll send you an email with all the details.',to:'z3',q:0,fb:'“I will send an email” alone is not a close.'},
   {t:'Delivery is within a week. Would you like to go ahead?',to:'z',q:1,fb:'A direct close works, but a summary close secures what was agreed.'}]},
  z:{say:'Fine, book it for next week. And come back in a month to see how it sells.',end:true,verdict:'Agreement with a next step (order, delivery date, follow-up visit): the outcome the evaluation expects.'},
  z2:{say:'Sorry, I need to get back to my customers. Leave me a brochure.',end:true,verdict:'Missed buying signal: when the buyer asks about delivery and the tester, guide to the close.'},
  z3:{say:'Alright, send it. We’ll see.',end:true,verdict:'No close: an agreement, a conditional next step or a justified no-deal is expected.'}}};
const DL_COLD={id:'dl-cold',topic:'s2',title:'Cold call: open and qualify with BANT (Soleil du Nord Pro)',who:'Mr Chazal (maintenance manager)',start:'a',
 intro:'<p>You call Flandres Food (Seclin, 6 500 m² roof, about €180 000 of electricity a year). Aim: a free technical study, not a sale. Case from Session 7; dialogue written by the site.</p>',
 nodes:{
  a:{say:'Chazal speaking.',o:[
   {t:'Sorry to bother you, do you have a minute?',to:'b0',q:0,fb:'Apologizing and asking for time: a weak, generic opener.'},
   {t:'Good morning Mr Chazal, this is Sam from Soleil du Nord. Congratulations on the new line at Seclin. We help food plants cut electricity bills with solar roofs. Can I ask how you are handling the rise in electricity costs?',to:'b',q:2,fb:'Greeting, relevance, value hint, engaging question, in under 30 seconds.'},
   {t:'Good morning, Soleil du Nord here; we install solar roofs on industrial sites. Could we talk about your energy costs?',to:'b',q:1,fb:'Clear, but nothing about them: add relevance.'}]},
  b0:{say:'Not really. We had a solar quote 18 months ago: too expensive and unclear.',o:[
   {t:'Our prices are much lower, I promise.',to:'zf',q:0,fb:'An unsupported promise that ignores the real concern (clarity).'},
   {t:'I understand. When you say unclear, what was missing for you?',to:'c',q:2,fb:'Clarify the objection before answering it.'}]},
  b:{say:'Costs are up a lot, about €180 000 a year. But I don’t decide alone.',o:[
   {t:'Are you the decision-maker?',to:'c',q:0,fb:'The course says never ask it this way.'},
   {t:'Who else is involved in a decision like this?',to:'c',q:2,fb:'Authority, asked the recommended way.'},
   {t:'So who signs the cheque?',to:'c',q:1,fb:'The right topic, clumsy wording.'}]},
  c:{say:'Mrs Clément, our MD, decides; I would prepare the file. A quote from SUNPROV 18 months ago was expensive and hard to follow.',o:[
   {t:'Do you have a budget?',to:'d',q:1,fb:'Budget matters, but ask about the need first, openly.'},
   {t:'What would need to be different this time for a proposal to be useful to Mrs Clément?',to:'d',q:2,fb:'Need: it brings out the decision criteria.'},
   {t:'Our quote will be cheaper than SUNPROV’s, guaranteed.',to:'d',q:0,fb:'Pitching on price before knowing what matters.'}]},
  d:{say:'Something clear: the payback, and what we save each year. With the APER law we’ll have to do something anyway.',o:[
   {t:'Shall we sign for the installation, then?',to:'zc',q:0,fb:'Far too early: the realistic aim is a technical study.'},
   {t:'When does the APER deadline apply to your site? Could we book a free technical study of your roof, with a clear payback you can present to Mrs Clément: would next Tuesday work?',to:'z',q:2,fb:'Timing (T of BANT) and a precise next step.'},
   {t:'Great, I’ll send you a brochure.',to:'zb',q:0,fb:'No next step owned by anyone.'},
   {t:'Would you like a free study?',to:'z',q:1,fb:'Right aim, but propose a date and involve the decision-maker.'}]},
  z:{say:'Tuesday works. I’ll invite Mrs Clément.',end:true,verdict:'Qualified lead (B, A, N, T explored) and a concrete next step with the decision-maker.'},
  zb:{say:'OK, send it.',end:true,verdict:'No commitment: a brochure is not a next step.'},
  zc:{say:'Sign? We haven’t even seen a study.',end:true,verdict:'Premature close: match the close to the buyer’s stage.'},
  zf:{say:'Then send me your price list. Goodbye.',end:true,verdict:'The objection was not clarified: the call ends.'}}};
const DL_OBJ={id:'dl-obj',topic:'s6',title:'Objection drill: the Girard family (Soleil du Nord Particuliers)',who:'Mrs Girard',start:'a',
 intro:'<p>B2C solar case: a 6 kWc system (about €11 000). Both spouses must agree; they had a bad door-to-door experience and are planning a new kitchen. Answer each objection; dialogue written by the site.</p>',
 nodes:{
  a:{say:'€11 000 is a lot of money for panels.',o:[
   {t:'When you say a lot, do you mean compared with your budget, or with what it would save you?',to:'b',q:2,fb:'Clarify first: price objections hide different concerns.'},
   {t:'It’s actually cheap compared with others.',to:'b',q:0,fb:'Dismissive, and no value is shown.'},
   {t:'I understand how you feel; many families felt the same until they found the bill savings paid most of it back.',to:'b',q:1,fb:'FFF, but without clarifying or quantifying the savings.'}]},
  b:{say:'Compared with what we save. We pay about €2 200 a year in electricity. And honestly, the last salesman at our door lied to us.',o:[
   {t:'That sounds frustrating (Feel). Other families felt the same after a bad experience (Felt). What they found reassuring was a written study with production figures they could check (Found).',to:'c',q:2,fb:'Trust objection → empathy and proof.'},
   {t:'We’re not like them.',to:'c',q:0,fb:'A claim with no proof does not rebuild trust.'},
   {t:'Let’s look at the figures instead.',to:'c',q:1,fb:'Proof helps, but acknowledge the emotion first.'}]},
  c:{say:'Anyway, we’re doing the kitchen first this year.',o:[
   {t:'Then call me when the kitchen is done.',to:'d',q:0,fb:'You accept “not now” without exploring the cost of waiting.'},
   {t:'I understand. What would a year of waiting cost you on a €2 200 bill, if electricity keeps rising?',to:'d',q:2,fb:'Timing objection → create urgency with their own numbers.'},
   {t:'The kitchen can wait, can’t it?',to:'d',q:0,fb:'Pressure: unethical and counter-productive.'}]},
  d:{say:'Maybe… but my husband isn’t here, and we decide together.',o:[
   {t:'Could we meet again with both of you, say Saturday morning, with the study ready?',to:'z',q:2,fb:'A realistic next step involving both decision-makers.'},
   {t:'Sign today and he’ll be happy.',to:'zx',q:0,fb:'Pressure close on half of the decision unit.'},
   {t:'Shall I leave you the documents?',to:'zy',q:1,fb:'Polite, but no date and no commitment.'}]},
  z:{say:'Saturday is fine. We’ll look at it together.',end:true,verdict:'Objections clarified and answered; a second meeting with both spouses.'},
  zx:{say:'No, we don’t sign anything without talking about it.',end:true,verdict:'Pressure lost the deal: close only when the decision unit is present.'},
  zy:{say:'Yes, leave them, we’ll call you.',end:true,verdict:'No clear next step.'}}};

/* ---------- v2: layered sheets ---------- */
SHEETS.s1=LAYERED(SHEETS.s1,[
 {id:'s1-advisor',ess:'<p>The modern salesperson is a <b>trusted advisor</b>: solves problems, listens, customizes, aims at long-term value, asks “what does the client need?”. Trust builds deals, not features alone.</p>',
  tryit:{q:'Which behaviour belongs to the modern salesperson?',o:['Customizing the solution to the client’s problem','Pushing the product of the month','Talking most of the time'],a:0,e:'Old school pushes; modern solves.'}},
 {id:'s1-b2b',ess:'<p><b>B2B</b>: buying committees, long cycles (3–6 months+), high value, ~60% logic. <b>B2C</b>: one person, quick, often emotional, ~60% emotion.</p>',
  tryit:{q:'A buying committee with IT, finance and operations points to…',o:['B2B','B2C'],a:0,e:'Several decision-makers and formal evaluation.'}},
 {id:'s1-journey',ess:'<p>B2B buyer journey: awareness → consideration → evaluation → decision → post-purchase; the seller is educator, then resource, then differentiator, then reassurer, then partner.</p>',
  tryit:{q:'At the awareness stage, the seller should mainly…',o:['help the buyer identify the problem with insightful questions','push a quote','negotiate the price'],a:0,e:'“Do we have a problem worth solving?”'}}]);
SHEETS.s2=LAYERED(SHEETS.s2,[
 {id:'s2-opener',ess:'<p>Opener in 20–30 s with four pillars: <b>greeting, relevance</b> (about them), <b>value hint, engaging question</b>. Never “How are you today?”, never apologize.</p>',
  tryit:{q:'Which opener is best?',o:['“Hi Alex, I saw your product launch, congrats. I help start-ups grow through automation; how are you handling onboarding?”','“Sorry to bother you, do you have a minute?”','“I’m calling to sell you our amazing tool. Interested?”'],a:0,e:'Relevance, value hint, open question.'}},
 {id:'s2-chitchat',ess:'<p>Chitchat builds rapport: <b>personalized, relevant, short</b>. C.L.I.P.: Company news, LinkedIn post, Industry topic, Personal (only if public).</p>',
  tryit:{q:'In C.L.I.P., the P stands for…',o:['Personal (only if public)','Price','Product'],a:0,e:'Company, LinkedIn, Industry, Personal.'}},
 {id:'s2-bant',ess:'<p>Qualify with <b>BANT</b>: Budget, Authority (“Who else is involved?”), Need, Timing. A compass, not a checklist: ask naturally, explore what is missing.</p>',
  tryit:{q:'“Who else is involved in the decision-making process?” explores…',o:['Authority','Budget','Timing'],a:0,e:'Never ask “Are you the decision-maker?”.'}}]);
SHEETS.s3=LAYERED(SHEETS.s3,[
 {id:'s3-listen',ess:'<p>Five keys: full attention, no interrupting, mirror/paraphrase, clarifying questions, acknowledge emotions. The client should speak about 80% of the time.</p>',
  tryit:{q:'“That sounds frustrating” is…',o:['acknowledging emotions','interrupting','a closed question'],a:0,e:'Key 5 of active listening.'}},
 {id:'s3-questions',ess:'<p>Open questions (what, how, why, tell me about) explore; closed ones confirm. Flow: broad → narrow → confirm; one question at a time; 5–7 s of silence.</p>',
  tryit:{q:'Turn “Do you use a CRM?” into an open question.',o:['“How do you track your sales leads today?”','“You use a CRM, right?”','“Is your CRM good?”'],a:0,e:'Open, exploratory.'}},
 {id:'s3-reform',ess:'<p>Reformulate by paraphrasing, summarizing, clarifying or reflecting emotion: it shows listening and confirms understanding. Avoid parroting and adding your agenda.</p>',
  tryit:{q:'“Just to be clear: is the issue more about speed or accuracy?” is…',o:['clarifying','paraphrasing','summarizing'],a:0,e:'It narrows the meaning.'}}]);
SHEETS.s4=LAYERED(SHEETS.s4,[
 {id:'s4-spin',ess:'<p><b>S</b>ituation (context, few), <b>P</b>roblem (pain), <b>I</b>mplication (consequences: the most powerful), <b>N</b>eed-payoff (the buyer states the value).</p>',
  tryit:{q:'“What happens when people are onboarded too slowly?” is a… question',o:['Implication','Problem','Situation','Need-payoff'],a:0,e:'It explores the consequences.'}},
 {id:'s4-flow',ess:'<p>SPIN is a <b>flow</b>: each question builds on the previous answer. Mistakes: need-payoff before implications, too many situation questions, skipping implications.</p>',
  tryit:{q:'Main risk of skipping implication questions?',o:['The buyer never feels the cost of the problem, so no urgency','The call is too short','The buyer talks too much'],a:0,e:'Implications create urgency.'}}]);
SHEETS.s5=LAYERED(SHEETS.s5,[
 {id:'s5-cap',ess:`${F('“We offer [X feature], which helps you [Y benefit], and we’ve proven this with [Z proof].”')}<p>Characteristic → Advantage → Proof (certifications, testimonials, case studies, awards, data).</p>`,
  tryit:{q:'“2024 Green Design Award” is the… of the CAP',o:['Proof','Characteristic','Advantage'],a:0,e:'Why the claim is credible.'}},
 {id:'s5-story',ess:'<p>Story: <b>context</b> (≤ 20%) → <b>challenge</b> (quantified) → <b>outcome</b> (measurable results), 60–90 s. Pitch: hook → value (CAP) → proof (story), ending with an open question.</p>',
  tryit:{q:'In a sales story, the context should take at most…',o:['20% of the story','50% of the story','the whole first minute'],a:0,e:'Get quickly to the challenge and the outcome.'}}]);
SHEETS.s6=LAYERED(SHEETS.s6,[
 {id:'s6-obj',ess:'<p>An objection is “not yet”, not “no”. Types: price (reframe ROI), timing (urgency), need (back to SPIN), trust (proof). <b>Clarify, then FFF</b>: Feel, Felt, Found. LACE, RAIN, LAARC for complex cases.</p>',
  tryit:{q:'“We’re using another provider” is mainly a… objection',o:['trust','timing','price'],a:0,e:'Answer with proof, credibility, a story.'}},
 {id:'s6-close',ess:'<p>Buying signals (“How quickly could we start?”, detailed price questions, involving colleagues): <b>pause, acknowledge, confirm readiness, guide</b>. Closes: summary, assumptive, direct, trial, urgency.</p>',
  tryit:{q:'The buyer already talks like a customer (“when we roll it out…”). Best close?',o:['Assumptive close','Trial close','Urgency close'],a:0,e:'“Shall we schedule the implementation for next month?”'}},
 {id:'s6-batna',ess:'<p><b>BATNA</b> = your plan B (your power). <b>ZOPA</b> = between the seller’s minimum and the buyer’s maximum. Trade concessions: “If you can confirm X, I can offer Y.”</p>',
  tryit:{q:'Seller minimum €2 800, buyer maximum €3 000. Width of the ZOPA?',answer:200,unit:'€',tol:0,e:'From €2 800 to €3 000.'}}]);
SHEETS.s7=LAYERED(SHEETS.s7,[
 {id:'s7-flow',ess:'<p>Full cycle in 16 minutes: rapport and agenda → SPIN discovery → CAP pitch → objections (FFF, trade) → close with a next step (owner, action, time).</p>',
  tryit:{q:'Which outcome is NOT an acceptable close in the course?',o:['“I will send an email.”','An agreement','A justified no-deal','A specific conditional next step'],a:0,e:'An email alone is not a next step.'}},
 {id:'s7-sim',ess:'<p>Final: 1 h of preparation, 25 min on MuchBetter.ai, score = grade capped by level (14, 16 or 20/20); evaluated on SPIN + CAP structure, FFF, closing, assertiveness and adaptability.</p>',
  tryit:{q:'Which level allows the maximum grade of 20/20?',o:['Advanced','Intermediate','Beginner'],a:0,e:'Beginner max 14, intermediate 16.'}},
 {id:'s7-avril',ess:'<p>Avril: list the Zeste de Citron gel (<b>48 × 500 ml</b>) and the brand block; proofs from the case (Ecocert, 97% natural, vs Clairmousse; ~€5.90 for 500 ml); never invent discounts; close with a summary and a delivery date.</p>',extra:DIALOG(DL_AVRIL),
  tryit:{q:'Which concession is allowed in the Avril simulation?',o:['The tools provided (tester, display, materials)','A 20% discount','Free products you invent'],a:0,e:'Never invent discounts.'}},
 {keep:true}]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Trusted advisor','A salesperson who solves the client’s problems and builds long-term value.','s1'],
['B2B','Business to business: committees, long cycles, high value.','s1'],
['B2C','Business to consumer: one buyer, quick, often emotional.','s1'],
['Buyer journey','Awareness, consideration, evaluation, decision, post-purchase.','s1'],
['Cold call','An unsolicited outreach to a new prospect with no prior relationship.','s2'],
['Opener','The first 20–30 s: greeting, relevance, value hint, engaging question.','s2'],
['C.L.I.P.','Chitchat topics: Company news, LinkedIn post, Industry topic, Personal (public).','s2',['CLIP']],
['BANT','Qualification: Budget, Authority, Need, Timing.','s2'],
['Qualifying','Deciding whether a lead is a good fit and worth your time.','s2'],
['Active listening','Purposeful attention to meaning: attention, no interrupting, mirroring, clarifying, acknowledging emotions.','s3'],
['Open question','A question starting with what, how, why or tell me about.','s3',['open questions']],
['Closed question','A question answered by yes or no (do, is, are, can).','s3',['closed questions']],
['Reformulation','Paraphrasing, summarizing, clarifying or reflecting emotion.','s3'],
['Mirroring','Matching the client’s language, pace, energy and posture.','s3'],
['SPIN','Situation, Problem, Implication, Need-payoff questions.','s4'],
['Implication question','Explores the consequences or cost of a problem.','s4',['implication questions']],
['Need-payoff question','Lets the buyer state the value of solving the problem.','s4',['need-payoff']],
['CAP','Characteristic, Advantage, Proof: the structure of a value pitch.','s5'],
['Feature dumping','Listing features without advantages or proof.','s5'],
['Storytelling','Context → challenge → outcome, 60–90 seconds.','s5'],
['Objection','A concern, doubt or hesitation: “not yet”, not “no”.','s6',['objections']],
['FFF','Feel, Felt, Found: empathy, normalizing, positive outcome.','s6',['Feel–Felt–Found']],
['LACE','Listen, Accept, Commit, Explicit action plan (complex technical objections).','s6'],
['RAIN','React, Ask, Implement, Next steps (several objections or committees).','s6'],
['LAARC','Listen, Acknowledge, Assess, Respond, Confirm (one critical objection).','s6'],
['Buying signal','A verbal or non-verbal cue that the buyer is moving toward a decision.','s6',['buying signals']],
['Summary close','Recap what was agreed, then ask for the next step.','s6'],
['Assumptive close','Talk as if the decision is made (“Shall we schedule…?”).','s6'],
['Trial close','Test readiness (“Is there anything else you need?”).','s6'],
['BATNA','Best Alternative To a Negotiated Agreement: your plan B.','s6'],
['ZOPA','Zone Of Possible Agreement: between seller minimum and buyer maximum.','s6'],
['Prep canvas','Opening, SPIN path, CAP + story, objections with FFF, negotiation angle, closing line.','s7']
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators (banks of course examples and new ones) ---------- */
const SPIN_L=['Situation','Problem','Implication','Need-payoff'];
const SPIN_B=[['How do you currently train your new team members?',0],['How many people use your CRM?',0],['How is the hygiene aisle organized today?',0],['What’s the main challenge with that training process?',1],['What challenges have those teams experienced with the CRM?',1],['What’s hardest for you in the hygiene category right now?',1],['What happens when people are onboarded too slowly?',2],['How does that delay affect your ability to respond to market changes?',2],['Is this an issue that affects your department only or others too?',2],['What does losing those customers do to your margin?',2],['If you could recapture those deals, what would it mean for your targets?',3],['How would a faster onboarding help your managers?',3],['If customers could get advice and the product here, what would that change for you?',3]];
const BANT_L=['Budget','Authority','Need','Timing'];
const BANT_B=[['Have you allocated a budget for this project?',0],['What’s the typical approval process for investments of this size?',0],['Who else is involved in the decision-making process?',1],['Who will sign off on the final choice?',1],['What problems are you trying to solve right now?',2],['What happens if this isn’t addressed?',2],['When would you like a solution in place?',3],['Is there a deadline driving this project?',3]];
const OBJ_L=['Price','Timing','Need','Trust'],OBJ_S=['Reframe value and ROI','Create urgency or anchor future steps','Go back to the pain points (SPIN)','Proof, credibility, a story'];
const OBJ_B=[['It’s too expensive.',0],['We can get it cheaper online.',0],['We’re not ready yet.',1],['Call me back next quarter.',1],['I’m not sure we need this.',2],['Our current process works fine.',2],['We’re using another provider.',3],['I’ve never heard of your company.',3],['The last salesman lied to us.',3]];
const CLOSE_L=['Summary close','Assumptive close','Direct close','Trial close','Urgency close'];
const CLOSE_B=[['Clear signals but some hesitation after a long discussion.',0],['The buyer already speaks as a customer (“when we roll it out…”).',1],['Signals are clear and no concern is left.',2],['You want to test whether anything is still blocking.',3],['A real, honest deadline exists (price change, limited production slot).',4]];
const pickGen=(id,topic,title,blurb,bank,L,label,steps)=>({kind:'gen',id,topic,title,blurb,gen:u=>({b:u.pick(bank)}),q:v=>`<p>“${v.b[0]}”</p>`,parts:[{label,type:'choice',o:L,a:v=>v.b[1]}],steps:v=>steps(v)});
const GENS=[
pickGen('g-s4-spin','s4','SPIN: which type of question?','Situation, problem, implication or need-payoff',SPIN_B,SPIN_L,'Type of question',v=>[`${['Situation: facts and context.','Problem: what is not working.','Implication: consequences and cost of the problem.','Need-payoff: the value of solving it, in the buyer’s words.'][v.b[1]]} → <b>${SPIN_L[v.b[1]]}</b>.`]),
pickGen('g-s2-bant','s2','BANT: which letter?','Budget, authority, need or timing',BANT_B,BANT_L,'BANT element',v=>[`This question explores <b>${BANT_L[v.b[1]]}</b>. Ask it naturally, as a conversation, not a checklist.`]),
{kind:'gen',id:'g-s6-obj',topic:'s6',title:'Objections: type and strategy',blurb:'Price, timing, need or trust, and how to answer',gen:u=>({b:u.pick(OBJ_B)}),q:v=>`<p>The buyer says: “${v.b[0]}”</p>`,
 parts:[{label:'Type of objection',type:'choice',o:OBJ_L,a:v=>v.b[1]},{label:'Strategy',type:'choice',o:OBJ_S,a:v=>v.b[1]}],
 steps:v=>[`Clarify first (“When you say…, what do you mean?”).`,`Type: <b>${OBJ_L[v.b[1]]}</b> → <b>${OBJ_S[v.b[1]]}</b>, then Feel–Felt–Found if the concern is emotional.`]},
pickGen('g-s6-close','s6','Which closing technique?','Summary, assumptive, direct, trial or urgency',CLOSE_B,CLOSE_L,'Closing technique',v=>[`→ <b>${CLOSE_L[v.b[1]]}</b>. ${['Recap the agreement, then propose the next step.','“Shall we schedule the implementation for next month?”','“Would you like to move forward with this?”','“Is there anything else you need to feel confident?”','Only if the deadline is true: false scarcity is unethical.'][v.b[1]]}`]),
{kind:'gen',id:'g-s6-zopa',topic:'s6',title:'ZOPA and BATNA',blurb:'Is there a zone of agreement? Accept the offer or use your BATNA?',levels:['ZOPA','Offer vs BATNA'],
 gen:(u,lv)=>{const min=u.step(1500,6000,100),gap=u.step(-800,1500,100),batna=u.step(1000,5000,100),offer=batna+u.step(-600,800,100);return {lv,min,max:min+gap,batna,offer}},valid:v=>v.lv===0||v.offer!==v.batna,
 q:v=>v.lv===0?`<p>The seller’s minimum acceptable price is €${fmt(v.min)}; the buyer’s maximum budget is €${fmt(v.max)}.</p>`:`<p>Your best alternative if this deal fails is another client paying €${fmt(v.batna)}. This buyer offers €${fmt(v.offer)} for the same work.</p>`,
 parts:v=>v.lv===0?[{label:'Width of the ZOPA in € (0 if none)',answer:v=>Math.max(0,v.max-v.min),tol:0},{label:'What to do?',type:'choice',o:['Negotiate inside the ZOPA','No ZOPA: negotiate scope, timing or extras, or use the BATNA'],a:v=>v.max>=v.min?0:1}]
  :[{label:'Decision',type:'choice',o:['Accept (better than the BATNA)','Walk away or trade conditions (below the BATNA)'],a:v=>v.offer>v.batna?0:1},{label:'Gain or loss vs the BATNA (€)',answer:v=>v.offer-v.batna,tol:0}],
 steps:v=>v.lv===0?[v.max>=v.min?`ZOPA from €${fmt(v.min)} to €${fmt(v.max)}: width <b>€${fmt(v.max-v.min)}</b>. Negotiate inside it, trading concessions.`:`Buyer maximum €${fmt(v.max)} &lt; seller minimum €${fmt(v.min)}: <b>no ZOPA</b>. Change scope, timing or extras, or use your BATNA.`]
  :[`Compare with your plan B: €${fmt(v.offer)} vs €${fmt(v.batna)} → ${v.offer>v.batna?`<b>accept</b> (+€${fmt(v.offer-v.batna)})`:`<b>do not accept as is</b> (−€${fmt(v.batna-v.offer)}): trade conditions or walk away`}. Knowing your BATNA avoids desperate concessions.`]}
];

/* ---------- v2: tools ---------- */
const TOOLS=[
Object.assign({kind:'dialog',blurb:'Opening, SPIN, CAP, objections, close: the final simulation’s structure'},DL_AVRIL),
Object.assign({kind:'dialog',blurb:'Four-pillar opener and BANT qualification on the phone'},DL_COLD),
Object.assign({kind:'dialog',blurb:'Price, trust, timing and decision-unit objections'},DL_OBJ),
{kind:'tree',id:'tr-s6-frame',topic:'s6',title:'Which objection framework?',blurb:'FFF, LACE, RAIN or LAARC',start:'q1',
 nodes:{q1:{q:'What kind of objection is it?',o:[{l:'Emotional (worry, frustration, bad experience)',to:'r_fff'},{l:'Complex and technical',to:'r_lace'},{l:'Several objections, or a buying committee',to:'r_rain'},{l:'One critical objection to dig into',to:'r_laarc'}]},
  r_fff:{end:'FFF: Feel, Felt, Found'},r_lace:{end:'LACE: Listen, Accept, Commit, Explicit action plan'},r_rain:{end:'RAIN: React, Ask, Implement, Next steps'},r_laarc:{end:'LAARC: Listen, Acknowledge, Assess, Respond, Confirm'}},
 cases:[{text:'“The last salesman lied to us.”',path:{q1:0}},{text:'“Your API will not integrate with our ERP’s security layer.”',path:{q1:1}},{text:'Finance worries about cost, IT about security and operations about training, all in one meeting.',path:{q1:2}},{text:'“Our board will never accept a 3-year contract.”',path:{q1:3}}]}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-s1-sortseller',topic:'s1',type:'sort',src:'course',title:'Old-school seller or modern salesperson?',q:'Sort each behaviour.',cats:['Old-school seller','Modern salesperson'],
 items:[['Pushes products','Old-school seller'],['Talks a lot','Old-school seller'],['One-size-fits-all','Old-school seller'],['Focused on closing','Old-school seller'],['Solves problems','Modern salesperson'],['Listens actively','Modern salesperson'],['Customizes solutions','Modern salesperson'],['Focused on long-term value','Modern salesperson']]},
{id:'x-s1-sortb2b',topic:'s1',type:'sort',src:'course',title:'B2B or B2C?',q:'Sort each feature.',cats:['B2B','B2C'],
 items:[['Buying committee','B2B'],['Cycle of 3–6 months or more','B2B'],['High value, low volume','B2B'],['About 60% logic','B2B'],['One decision-maker','B2C'],['Minutes to days','B2C'],['Often emotional','B2C'],['Transactional relationship','B2C']]},
{id:'x-s3-sortq',topic:'s3',type:'sort',src:'course',title:'Open or closed question?',q:'Sort each question.',cats:['Open question','Closed question'],
 items:[['How do you track your sales leads today?','Open question'],['What challenges do you face with remote work?','Open question'],['Tell me about your onboarding process.','Open question'],['Why did you change supplier last year?','Open question'],['Do you use a CRM?','Closed question'],['Is your team remote?','Closed question'],['Wouldn’t you agree that speed matters?','Closed question','a closed question disguised as open'],['Can you decide this month?','Closed question']]},
{id:'x-s4-sortspin',topic:'s4',type:'sort',src:'course',title:'SPIN question types',q:'Sort each question.',cats:SPIN_L,items:SPIN_B.map(b=>[b[0],SPIN_L[b[1]]]),pick:8}
);
QUIZ.push(
Q('q58','s2','practice','Why should you never start a cold call with “Sorry to bother you”?',['It frames your call as an intrusion with no value','It is too short','It is illegal','It sounds too confident'],'Openers must be confident and value-focused.'),
Q('q59','s3','practice','Why stay silent 5–7 seconds after a question?',['The buyer often adds the most useful information','To look busy','To end the call','To show disagreement'],'Embrace silence.'),
Q('q60','s4','practice','Why do top sellers ask many need-payoff questions?',['The buyer states the value of the solution in their own words','They are the easiest','They replace the pitch entirely','They avoid objections'],'People believe what they say themselves.'),
Q('q61','s4','practice','What happens if you jump from problem to pitch without implications?',['The buyer never feels the cost of the problem, so no urgency','The pitch is shorter and better','The buyer trusts you more','Nothing'],'Implications create urgency.'),
Q('q62','s5','practice','Why is a feature list weak?',['It does not say what it does for the buyer, nor prove it','It is too short','Features are illegal','It contains numbers'],'Use CAP.'),
Q('q63','s6','practice','Why clarify an objection before answering?',['The same words can hide different concerns (budget, value, cheaper offer)','To gain time only','To avoid answering','To close faster'],'“When you say expensive, do you mean…?”'),
Q('q64','s6','practice','A buyer asks “How quickly could we start?”. What should you do?',['Pause, acknowledge, confirm readiness and guide to the close','Add three more features','Change the subject','Offer a discount'],'It is a buying signal.'),
Q('q65','s6','practice','Seller minimum €3 000, buyer maximum €2 500. What now?',['No ZOPA: negotiate scope, timing or extras, or use your BATNA','Split the difference at €2 750','Accept €2 500','Insist on €3 000'],'Course example.'),
Q('q66','s6','practice','Why is knowing your BATNA a source of power?',['You avoid desperate concessions because you know your plan B','It raises the buyer’s budget','It replaces the ZOPA','It is the opening price'],'Session 6.'),
Q('q67','s7','practice','In the Avril case, the initial order to obtain is…',['48 bottles of 500 ml','12 bottles of 400 ml','300 bottles','one display only'],'Mission of the case.'),
Q('q68','s7','practice','Which proof is credible in the Avril pitch?',['Ecocert certification and the comparison with Clairmousse from the case','An invented sales figure','A celebrity endorsement','A 20% discount'],'Use only proofs from the case.'),
Q('q69','s7','practice','Which ending scores best in the final simulation?',['A summary close with a dated next step','“I’ll send you an email.”','Leaving a brochure','Talking about other products'],'Agreement + next step.')
);
CARDS.push(
C('c33','s2','Opener in 30 seconds','greeting · relevance (about them) · value hint · engaging question'),
C('c34','s3','Question flow','broad → narrow → confirm; one at a time; 5–7 s silence'),
C('c35','s4','Why implication questions','the buyer states the cost of the problem → urgency'),
C('c36','s5','CAP sentence','“We offer X, which helps you Y, proven by Z.”'),
C('c37','s6','Clarify, then FFF','“When you say…?” → Feel · Felt · Found'),
C('c38','s6','Which framework?','emotional FFF · technical LACE · several/committee RAIN · one critical LAARC'),
C('c39','s6','Buying signal → action','pause · acknowledge · confirm readiness · guide to the close'),
C('c40','s6','Trade, don’t give','“If you can confirm X, I can offer Y.”'),
C('c41','s7','Avril mission','48 × 500 ml Zeste de Citron + brand block; tester, display, loyalty card; no invented discount'),
C('c42','s7','Acceptable outcomes','agreement · specific conditional next step · justified no-deal (not “I’ll email you”)')
);

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
  tagline:'Bachelor 2 · Final AI simulation (Avril case) + written exam',
  status:'Sessions 1–8 done · 3 role-play dialogues (Avril) · 5 generators · 1 mock',
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
  glossary:GLOSS,
  overview:{
    eyebrow:'Sales Techniques',
    title:'Every method of the course, and your Avril case prep',
    lede:'Built from the course material of SALES TECHNIQUES: the Session 1–8 slides, the course page, the Session 8 evaluation brief (Avril case), the Soleil du Nord cases and the Session 7 student pack. Read the sheets, drill SPIN, BANT, CAP and FFF, then prepare the final simulation with the Avril canvas.',
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
  modules:[
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'Recognize SPIN question types, BANT elements, objection types and strategies, the right closing technique, and decide with ZOPA and BATNA. Questions come from the course and from the site.'}},
    {use:'lab',tab:'tools',label:'Role-plays',data:{items:TOOLS,blurb:'Avril simulation, cold call, objection drill, framework tree',intro:'Three role-play dialogues to rehearse the final simulation: choose each reply and get feedback from the course methods. Your best score is saved. Dialogues are written by the site from the cases; the AI buyer may react differently.'}}],
  mocksNote:NOTE('<b>Where the format comes from.</b> The 2025 “What to expect” lists a written exam (MCQs, SPIN/BANT/CAP exercises, objection responses, closing and BATNA). Its duration and points are <b>chosen for this site</b>; the 2026-27 course page only mentions the AI simulation.')
});
})();
