/* Trademark Law 2311, IÉSEG Bachelor 2 (coordinator: Elsa Mimoun). Assessment (Preliminary remarks): participation 10%, team case study 25%,
   midterm MCQ 25%, final exam = open question / case study 40%. Retake = case study.
   Built from sources/trademark-law/: the coordinator's common slides (Preliminary remarks, Sessions 1–6 and 8), the case law list, the translated
   glossary, the case study methodology and the course outline. Topics t1–t7 (t7 = Session 8). Ids: q… quiz, c… cards, x-t<n>-… exercises. */
(function(){
const {T,F,EX,TRAP,NOTE,fmt}=Rev.h;

const SHEETS={};
SHEETS.t1=`
<div class="eyebrow">Session 1</div><h2>IP rights and other distinctive signs</h2>
<p class="lede">Goal: tell the five IP rights apart (what they protect, how long, whether registration is needed) and distinguish a trademark from a company name, a commercial name and a domain name.</p>
<h3>1. The five IP rights</h3>
<p>IP rights aim to promote technological innovation, art and culture, and fair competition. Two families: <b>literary and artistic property</b> (copyright) and <b>industrial property</b> (designs, patents, trademarks, PDO/PGI). Infringing any IP right is both a civil and a criminal offence.</p>
${T(['Right','Protects','Conditions','Duration'],[
['Copyright','a literary, dramatic, musical or artistic work','original; <b>no registration</b>','70 years after the author’s death (natural person) or after disclosure (legal person)'],
['Design','the appearance / shape of a product','new, individual character; registration','5 years, renewable up to 25 years'],
['Patent','an invention (product or process)','new, inventive step (not obvious), industrial application; registration','20 years'],
['Geographical indication','a product linked to a place (PDO: Champagne; PGI: Bayonne ham; GIPICP: Limoges porcelain)','production steps / quality linked to the area','—'],
['Trademark','a sign distinguishing goods or services of one undertaking','distinctive, representable, available, lawful; registration','10 years, renewable indefinitely']])}
<p><b>Why does copyright need no registration while a trademark does?</b> A work is protected because it exists and is original; a trademark is a monopoly on a sign in trade, so competitors must be able to check a public register to know which signs are taken, for which goods and where.</p>
<h3>2. Other distinctive signs and the principle of specialty</h3>
<p>All distinctive signs (trademarks included) are limited by the <b>principle of specialty</b>: a sign is only protected for the goods and services for which it is used or registered (“Sandro” only for fashion). The other signs have no common legislation and are protected only by a <b>tort lawsuit for unfair competition</b>, not an IP infringement action.</p>
${T(['Sign','What it is','Protection'],[['Registered company name','the name of the legal person','against an identical/similar sign for an identical/similar activity in France creating confusion'],['Commercial name','the name under which a merchant trades (door, products)','same, but only in the merchant’s geographical area'],['Domain name','the address of a website (www.ieseg.fr)','same, where the website is active']])}
<p><b>Why specialty?</b> A sign only tells consumers where goods come from in a given market. “Sandro” for clothes does not stop “Sandro” for plumbing: nobody would think they come from the same company, and words must stay available to other businesses.</p>
${TRAP('A company name or a domain name is not a trademark: its owner sues for unfair competition (tort), not for trademark infringement (contrefaçon).')}
`;

SHEETS.t2=`
<div class="eyebrow">Session 2</div><h2>Sources, categories and functions of trademarks</h2>
<p class="lede">Goal: know the legal sources, the three categories of trademarks, the definition of Article 3 of the Directive and the functions of a trademark recognized by the CJEU.</p>
<h3>1. Sources</h3>
<ul><li><b>Directive (EU) 2015/2436</b> (approximates national laws, must be transposed) ≠ <b>Regulation (EU) 2017/1001</b> on the EU trademark (directly applicable). Directive 2004/48 on the enforcement of IP rights.</li>
<li>WIPO: <b>Paris Convention</b> (1883) and <b>Madrid Protocol</b> (1989).</li></ul>
<h3>2. Three categories</h3>
${T(['Category','Function','Who can apply'],[['Collective mark','distinguishes goods/services of members of an association from non-members','associations of manufacturers, producers, traders, service providers, or public-law legal persons (EU fee €1 500)'],['Guarantee / certification mark','guarantees that goods/services of a user (not the owner) meet standards set by the owner','anyone who does not supply goods/services of the kind certified (EU fee €1 500)'],['Individual mark','distinguishes the goods/services of one undertaking','any person']])}
<p>CSR: collective and guarantee marks let companies signal sustainability commitments, while trademark law blocks misleading (deceptive) claims.</p>
${F('Article 3 Directive: a trademark may consist of any signs (words, personal names, designs,\nletters, numerals, colours, shape of goods or packaging, sounds) capable of\n(a) distinguishing the goods or services of one undertaking from those of others, and\n(b) being represented on the register clearly and precisely.')}
<h3>3. Functions (case law)</h3>
${T(['Case','Holding'],[['Hoffmann-La Roche (CJEU 1978, C-102/77)','<b>essential function</b>: guarantee the identity of origin of the product to the consumer'],['Arsenal (CJEU 2002, C-206/01)','the owner may only prohibit a use that can affect his interests having regard to the functions of the mark'],['L’Oréal v Bellure (CJEU 2009, C-487/07)','other functions: guarantee of <b>quality</b>, <b>communication</b>, <b>investment</b>, <b>advertising</b>'],['Google France (CJEU 2010, C-236/08 to C-238/08)','the owner can prohibit an identical use for identical goods that adversely affects the <b>advertising</b> function']])}
`;

SHEETS.t3=`
<div class="eyebrow">Session 3</div><h2>A sign capable of representation</h2>
<p class="lede">Goal: check the first two absolute conditions (any sign, represented on the register) and know how each type of mark must be represented.</p>
<h3>1. Absolute and relative grounds</h3>
${F('Absolute grounds (definition of a trademark):\n1. any sign  2. capable of being represented on the register  3. capable of being distinctive\nRelative grounds: the sign must not infringe prior rights of third parties')}
<p><b>Absolute</b> grounds concern the sign itself and are checked by the office for every application; <b>relative</b> grounds concern conflicts with the rights of others and are raised only by the owner of the prior right (opposition, cancellation). A case study always starts with the absolute grounds, then the relative ones.</p>
<h3>2. A sign, not a concept (Dyson)</h3>
<ul><li><b>Dyson (CJEU 2007, C-321/03)</b>: a transparent collecting bin of a vacuum cleaner, in all conceivable shapes, is a mere <b>concept</b>, not a sign.</li></ul>
<p><b>Why?</b> Registering “a transparent bin in any shape” would give Dyson a monopoly on an idea, blocking every competitor’s design, not on a precise sign that identifies Dyson.</p>
<h3>3. Representation: the Sieckmann criteria</h3>
<ul><li>Old Directive 2008/95 required a <b>graphic</b> representation; the 2015 Directive only requires a representation allowing authorities and the public to determine the clear and precise subject matter.</li>
<li><b>Sieckmann (CJEU 2002, C-273/00)</b>: the representation must be <b>clear, precise, self-contained, easily accessible, intelligible, durable and objective</b> (the “Sieckmann criteria”).</li></ul>
<p><b>Why so strict?</b> The register is read by the office, by judges and by competitors: each of them must understand exactly the same protected sign, now and in 10 years. A smell described in words or a sample that fades cannot do that.</p>
<h3>4. Representation by type of mark</h3>
${T(['Type','Valid representation'],[
['Word / figurative','a reproduction of the sign (description optional for figurative)'],
['Pattern','a reproduction showing the pattern of repetition (description allowed)'],
['Colour (Libertel, CJEU 2003, C-104/01)','reproduction + <b>internationally recognized colour code</b> (mandatory); a paper sample alone is not enough; for combinations, the systematic arrangement'],
['Shape','graphic (incl. computer-generated) or photographic reproduction; up to 6 views on paper'],
['Position','position and size relative to the goods + <b>visual disclaimer</b> (dotted lines) for elements not protected; description optional'],
['Motion','a video file or a series of sequential still images'],
['Sound (Shield Mark, CJEU 2003, C-283/01)','an <b>audio file</b> or a stave with clef, notes and rests; not an onomatopoeia (“Kukelekuuuuu”), not a written list of notes (E, D#, E…), not a description (“a cockcrow”)'],
['Smell / taste','currently <b>impossible</b> (smell of ripe strawberries, GC 2005, T-305/04): description, chemical formula or sample are not clear and precise']])}
`;

SHEETS.t4=`
<div class="eyebrow">Session 4</div><h2>A distinctive and lawful sign</h2>
<p class="lede">Goal: assess distinctiveness for the goods concerned, apply the excluded signs (descriptive, generic, customary, functional shapes, deceptive, unlawful) and use the key cases.</p>
<h3>1. Distinctiveness</h3>
<p>Scale of distinctiveness: <b>fanciful</b> (invented word) &gt; <b>arbitrary</b> (real word unrelated to the goods) &gt; <b>suggestive / evocative</b> &gt; not distinctive. Distinctiveness is assessed for the goods and services applied for (specialty) and can be <b>acquired through use</b> (surveys, market share, advertising, turnover) or lost.</p>
<p><b>Why refuse descriptive signs?</b> “Leather” for bags tells nothing about origin, and every bag maker must stay free to say its bags are leather. The more a sign describes the goods, the weaker it is; an invented word (Kodak) is the strongest.</p>
<h3>2. Excluded signs (Article 4(1) Directive)</h3>
${T(['Ground','Example'],[
['(b) devoid of distinctive character','a basic shape or a colour commonly used for the goods'],
['(c) descriptive: kind, quality, quantity, purpose, value, geographical origin, time of production','“Leather” for leather bags'],
['(d) customary / generic','“Bag” for bags; a usual symbol for the goods'],
['(e) shape or other characteristic resulting from the nature of the goods, necessary to obtain a technical result, or giving substantial value','Lego brick (technical): invalid'],
['(f)–(g) contrary to public policy or morality; deceptive (nature, quality, origin)','a sign suggesting a false origin or composition'],
['(h) flags, state emblems, official badges without consent','a national flag in a logo']])}
<p>Why exclude shapes (e)? To avoid a perpetual trademark monopoly on technical solutions (patent: limited in time) or on aesthetic features (design: limited in time). Unlike (b)–(d), these shapes stay excluded even after long use.</p>
<h3>3. Key cases on distinctiveness and shapes</h3>
${T(['Case','Lesson'],[
['Apple (CJEU 2014, C-421/13)','the layout of a flagship store can be registered as a trademark for services if it is distinctive'],
['Audi “Vorsprung durch Technik” (CJEU 2010, C-398/08)','a <b>slogan</b> can be distinctive if it has some originality or resonance and requires interpretation'],
['Lindt (CJEU 2012, C-98/11 P)','a shape is distinctive only if it <b>departs significantly from the norms of the sector</b> (gold chocolate bunny refused)'],
['Ardagh (GC 2021, T-668/19)','the sound of a can opening is functional and perceived as a quality of the goods: not distinctive'],
['Lego Juris (CJEU 2010, C-48/09 P)','a shape whose essential characteristics perform a technical function is excluded, even if other shapes give the same result; earlier patents are evidence'],
['Louboutin (CJEU 2018, C-163/16)','a red colour applied to the sole is not a sign consisting “exclusively” of a shape: valid']])}
<h3>4. Deceptive and unlawful signs</h3>
<ul><li><b>Deceptive</b>: refused if actual deceit or a sufficiently serious risk; the average consumer is reasonably attentive, not particularly vulnerable; account for market reality and habits.</li>
<li><b>Morality</b>: depends on the goods and the public targeted (the same word can be refused for one product and accepted for another).</li></ul>
${NOTE('<b>Check against the slides:</b> the slide on excluded signs is titled “Article 4 e) TMD” but quotes (b), (c) and (d); and one “unlawful signs” slide says flags and emblems “<i>can</i> be registered” where the rule (and the previous slide) says they <b>cannot</b> without consent. The site follows the Directive.')}
`;

SHEETS.t5=`
<div class="eyebrow">Session 5</div><h2>An available sign: relative grounds</h2>
<p class="lede">Goal: decide whether a new sign conflicts with a prior trademark (three cases) or another prior right, using the global assessment of the likelihood of confusion.</p>
<h3>1. Three cases of conflict (Art. 5 Directive)</h3>
${T(['Case (Art. 5 Directive)','Sign','Goods / services','Extra condition','Example vs “Vuitton” for bags'],[
['1. Double identity','identical','identical','adverse effect on a function of the mark (Arsenal)','“Vuitton” for bags'],
['2. Likelihood of confusion','identical or similar','identical or similar','likelihood of confusion (incl. association)','“Vouton” for bags'],
['3. Reputed mark','identical or similar','even <b>not similar</b>','a link in the public’s mind + unfair advantage of, or detriment to, distinctiveness or repute (exception to specialty)','“Vouitton” for cars']])}
<p>Method: compare the <b>signs</b> (identical, similar, different), then the <b>goods and services</b> (identical, similar, different), then pick the case. Different signs: no conflict. Different goods: a conflict only if the earlier mark is <b>reputed</b>.</p>
<h3>2. Likelihood of confusion: the global assessment</h3>
<p><b>Canon (CJEU 1998, C-39/97)</b>: the risk that the public believes the goods come from the same undertaking or from economically linked undertakings. A mere link is only enough for reputed marks. <b>Sabel (1997, C-251/95)</b> and Canon: a <b>global assessment</b> of interdependent factors:</p>
<ol><li>similarity of the signs: <b>visual, aural, conceptual</b> (“Ball” vs “Bell”, “Balloon”);</li>
<li>focus on the <b>distinctive and dominant elements</b> (“BALL print”: “print” is descriptive);</li>
<li>similarity of goods/services: nature, end users, method of use, competition or complementarity — <b>not</b> whether they are goods or services, <b>not</b> the Nice class;</li>
<li>distinctiveness of the earlier mark (descriptive elements, duration and scope of use, promotional budget, share of the public who knows it): the stronger, the higher the risk;</li>
<li>the <b>relevant public</b> (Lloyd, 1999, C-342/97): average consumer, reasonably well-informed, observant and circumspect, attention varying with the goods, relying on an <b>imperfect recollection</b>.</li></ol>
<p><b>Why “global” and “interdependent”?</b> The factors compensate each other (Canon): very similar signs can create confusion for only moderately similar goods, and a strong, well-known earlier mark is confused more easily than a weak one. The judge weighs them together, as a consumer would.</p>
<h3>3. Reputed marks</h3>
<p><b>Reputation</b>: known by a significant part of the public concerned (duration, scope, budget, share of the public), in a substantial part of the country (or of the EU for an EU mark).</p>
<h3>4. Other prior rights</h3>
<p>Prior IP rights (copyright, designs, GIs; infringing a patent is unlikely) and other prior distinctive signs (company name, commercial name, domain name). Search tools: TMview (trademarks), DesignView, Espacenet, GIview.</p>
`;

SHEETS.t6=`
<div class="eyebrow">Session 6</div><h2>Registration, duration and loss</h2>
<p class="lede">Goal: explain how a trademark is acquired (registration, territoriality, priority, Madrid), how the office examines it, and how it can be cancelled or revoked.</p>
<h3>1. Acquisition by registration</h3>
<ul><li><b>Registration is required</b> (Art. 10 Directive). Exceptions: a <b>well-known mark</b> (Art. 6bis Paris Convention) and the <b>unregistered “TM”</b> of common-law countries — both only protected by a tort action, not infringement.</li>
<li>The owner is the registrant; the real owner defrauded can ask for cancellation or reassignment.</li>
<li><b>Territoriality</b>: one mark = one territory (INPI → France); exception: the <b>EU trademark</b> (EUIPO) covers the 27 Member States.</li>
<li>Application: form with a valid representation, list of goods/services by <b>Nice class</b>, fee.</li></ul>
<h3>2. Fees, priority and the Madrid System</h3>
${F('INPI (France):   €190 for 1 class + €40 per additional class\nEUIPO (EU):      €850 for 1 class + €50 for the 2nd + €150 per class from the 3rd')}
<ul><li><b>Priority right</b> (Art. 4 Paris Convention, 179 countries): <b>6 months</b> from the first filing to file in other member states with the same date.</li>
<li><b>Madrid System</b> (Protocol 1989, 131 countries): based on a first mark, one form, one language (EN/FR/ES), fees by country; result = bundle of national rights called an “international trademark”.</li></ul>
<p><b>Which route?</b> Only EU countries → one EU trademark (27 states). EU countries + others → EU or national mark first, then Madrid within 6 months to keep the priority date. One country → national office.</p>
<h3>3. Examination and opposition</h3>
${T(['Office step','Grounds','Who'],[['Examination','absolute grounds: sign, representation, distinctiveness, lawfulness, non-deceptive','the office, systematically'],['Opposition','relative grounds: prior mark (applied, registered, well-known), GI/PDO, other signs depending on the law','only the owner of the prior right; <b>3 months</b> (EU) or <b>2 months</b> (FR) after publication']])}
<h3>4. Duration and loss</h3>
${T(['','Cancellation (nullité)','Revocation (déchéance)'],[['Why','a condition of validity was missing <b>at registration</b> (absolute or relative ground)','<b>after</b> registration: loss of distinctiveness, or no genuine use for <b>5 years</b> (3 in the US)'],['When','no time limit, but <b>acquiescence</b>: a prior owner who knowingly tolerated use for 5 successive years can no longer act','—'],['Who decides','office or judge (EU mark: EUIPO in first instance)','office or judge']])}
<p>A trademark lasts <b>10 years</b>, renewable indefinitely. Cancellation or revocation can be total or partial (only some goods/services).</p>
`;

SHEETS.t7=`
<div class="eyebrow">Session 8</div><h2>Using and protecting the trademark</h2>
<p class="lede">Goal: describe the owner’s powers (use, licence, assignment), the infringement action (cases, exceptions, evidence, court, remedies) and compare it with unfair competition.</p>
<h3>1. Powers of the owner</h3>
<ul><li><b>Use</b>: affix, sell, store, import/export, advertise, business papers. Use the mark <b>as registered</b> (minor changes only) to avoid revocation for non-use and to be able to sue.</li>
<li><b>Licence</b>: the licensor lets a licensee exploit the mark (registered). Clauses: mark (registration number), territory, goods/services, activity, duration, price (often royalties on turnover), governing law clause.</li></ul>
${T(['Licence','Meaning'],[['Non-exclusive','several licensees; the owner keeps using'],['Exclusive','one licensee; the owner can no longer use'],['Sole','one licensee; the owner can still use'],['Cross licence','mutual licences'],['Sub-licence','the licensee may grant licences'],['Franchising','licence of IP and know-how + continuous support to replicate a business concept (McDonald’s)']])}
<ul><li><b>Assignment</b>: permanent transfer of ownership (assignor → assignee), registered; lump-sum price; <b>warranty clause</b> (sole owner, no burdens or third-party claims).</li></ul>
<h3>2. Infringement: acts and exceptions</h3>
<p>Any use in the course of trade (affixing, selling, importing, business papers, advertising incl. comparative) in one of the <b>three cases</b> (double identity, likelihood of confusion, reputed mark — see Session 5).</p>
${T(['Exception','Content'],[['Honest use','descriptive use; use to indicate the purpose of goods/services (“We fix BMW cars”); a person’s own name or address; a prior local sign'],['Exhaustion of rights','goods put on the market in the EEA by the owner or with his consent can be resold; except legitimate reasons (alteration of the goods)']])}
<p><b>Why exhaustion?</b> Once the owner has sold the goods in the EEA and been paid, the mark has done its job; letting him block resale would split the single market into national markets with different prices.</p>
<p><b>Two cases of the case-law list, not developed in the common slides</b> (summaries by the site): <b>Consten and Grundig (CJEU 1966, joined cases 56/64 and 58/64)</b>: Grundig gave Consten exclusive distribution in France and let it register the “GINT” mark there to stop parallel imports; national trademark rights cannot be used to partition the common market (EU competition law, now Art. 101 TFEU): the <b>existence</b> of the right is untouched, its <b>exercise</b> is limited. <b>Centrafarm v Winthrop (CJEU 1974, C-16/74)</b>: the owner cannot oppose the import of goods put on the market in another Member State by himself or with his consent; the specific subject matter of a trademark is the exclusive right to put the goods into circulation for the first time: the origin of <b>exhaustion</b>.</p>
<h3>3. Procedure and remedies</h3>
<ul><li><b>Detection</b>: own watch; <b>customs</b> can seize counterfeits (ex officio or on request).</li>
<li><b>Saisie-contrefaçon</b> (Directive 2004/48 Art. 7; FR L.716-4-7 IPC): on request of the claimant alone, with prima facie evidence; description or seizure; then sue within a reasonable time (<b>FR: 15 days</b>). <b>Right of information</b> on origin and networks (Art. 8).</li>
<li><b>Applicable law</b>: the country where the right is protected. Civil court: place of the act/harm or defendant’s residence; FR: 10 specialized <b>tribunaux judiciaires</b> (incl. Lille, Paris); criminal: tribunal correctionnel.</li>
<li><b>Civil remedies</b>: injunction, confiscation/destruction, damages (lost earnings, infringer’s profits, moral prejudice; <b>no punitive damages in France</b>), publication.</li>
<li><b>Criminal (FR)</b>: misdemeanour, fine up to <b>€400 000</b> and <b>4 years</b> in prison (€750 000 and 7 years in an organized group).</li></ul>
<h3>4. Infringement or unfair competition?</h3>
${T(['','Trademark infringement','Unfair competition / passing off'],[['Protects','a registered trademark','company name, commercial name, domain name, well-known or unregistered marks'],['Proof','use of the sign in one of the 3 cases','an act (confusion…) + a damage + a causal link'],['Nature','civil and criminal','civil (tort)']])}
<p>Both actions can be combined if the claimant proves a distinct prejudice.</p>
`;

SHEETS.method=`
<h3>Case study method (final exam and retake)</h3>
${T(['Step','What to write'],[['1. Classification of facts','the legal qualification of the relevant facts'],['2. Legal question','the question the rule of law answers'],['3. Rule(s) of law','articles and case law'],['4. Application','apply each condition to the facts'],['5. Conclusion','answer the legal question and the client’s question']])}`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
${T(['Topic','Key points'],[
['IP rights','copyright 70 y post mortem, no registration · design 5 y → 25 y · patent 20 y · trademark 10 y renewable · PDO/PGI'],
['Other signs','company name, commercial name, domain name → unfair competition only; specialty principle'],
['Categories','collective (members) · guarantee (standards, owner not a supplier) · individual'],
['Functions','origin (Hoffmann-La Roche) · quality, communication, investment, advertising (Bellure, Google)'],
['Absolute grounds','sign (Dyson) · represented (Sieckmann criteria) · distinctive · not descriptive/generic/functional shape · lawful · not deceptive'],
['Representation','colour: code (Libertel) · sound: audio or stave (Shield Mark) · smell: impossible (strawberries)'],
['Distinctiveness','fanciful > arbitrary > suggestive; acquired by use; slogan OK (Audi); shape must depart from norms (Lindt)'],
['Shapes','nature · technical result (Lego) · substantial value; colour on a sole ≠ shape (Louboutin)'],
['Relative grounds','double identity + function · similar + confusion (Sabel, Canon, Lloyd) · reputed: link + unfair advantage/detriment'],
['Registration','INPI €190 + €40/class · EUIPO €850 + €50 + €150/class · priority 6 months · Madrid · opposition 3 m EU / 2 m FR'],
['Loss','10 y renewable · cancellation (invalid at filing; 5 y acquiescence) · revocation (non-use 5 y, lost distinctiveness)'],
['Exploitation','licence (exclusive/sole/non-exclusive) · assignment + warranty · franchising'],
['Enforcement','honest use · exhaustion (EEA; Centrafarm 1974, Grundig 1966) · customs · saisie-contrefaçon (15 days) · damages, no punitive · €400k / 4 y']])}
${SHEETS.method}
`;

const Q=(id,topic,src,q,o,e)=>({id,topic,src,q,o,a:0,e});
const QUIZ=[
Q('q0','t1','course','Which IP right protects an original work without registration?',['Copyright','Patent','Trademark','Design'],'Copyright lasts 70 years after the author’s death.'),
Q('q1','t1','course','A patent is protected for:',['20 years','10 years renewable','70 years after death','25 years'],'New, inventive step, industrial application.'),
Q('q2','t1','course','A trademark registration lasts:',['10 years, renewable indefinitely','20 years, not renewable','5 years renewable up to 25','for life'],'Session 6.'),
Q('q3','t1','course','A design is protected for:',['5 years, renewable up to 25 years','10 years renewable indefinitely','20 years','70 years'],'New appearance with individual character.'),
Q('q4','t1','course','Champagne is an example of:',['a PDO','a PGI','a collective mark','a commercial name'],'Bayonne ham is a PGI; Limoges porcelain a GIPICP.'),
Q('q5','t1','course','The principle of specialty means that a sign is protected:',['only for the goods and services for which it is used or registered','in all countries','for all goods','only in the region of use'],'“Sandro” for fashion only.'),
Q('q6','t1','course','The owner of a domain name copied by a competitor can sue for:',['unfair competition (tort)','trademark infringement','patent infringement','breach of contract'],'Other distinctive signs are protected only by tort.'),
Q('q7','t1','course','A commercial name is protected against confusing signs:',['in the geographical area where the merchant trades','throughout the EU','worldwide','only after registration at INPI'],'Session 1.'),
Q('q8','t2','course','Which text is directly applicable to the EU trademark?',['Regulation (EU) 2017/1001','Directive (EU) 2015/2436','Directive 2004/48','Paris Convention'],'A directive must be transposed into national law.'),
Q('q9','t2','course','A mark guaranteeing that products meet standards set by the owner, who does not supply such products, is:',['a guarantee (certification) mark','a collective mark','an individual mark','a well-known mark'],'Anyone may apply if not supplying the certified goods.'),
Q('q10','t2','course','A collective mark can be applied for by:',['an association of manufacturers, producers, traders or service providers, or a public-law legal person','any natural person','only the EU','any company'],'It distinguishes members from non-members.'),
Q('q11','t2','course','According to Hoffmann-La Roche, the essential function of a trademark is to:',['guarantee the identity of origin of the product','guarantee its quality','advertise the product','protect the shape'],'CJEU 1978, C-102/77.'),
Q('q12','t2','course','Which case lists the quality, communication, investment and advertising functions?',['L’Oréal v Bellure (2009)','Hoffmann-La Roche (1978)','Dyson (2007)','Sabel (1997)'],'C-487/07, §58.'),
Q('q13','t2','course','Google France (2010) concerned mainly the protection of the trademark’s:',['advertising function','essential function only','shape','colour'],'Keyword advertising.'),
Q('q14','t3','course','In Dyson (2007), the transparent bin was refused because it was:',['a concept, not a sign','descriptive','deceptive','contrary to morality'],'All conceivable shapes = a mere property of the product.'),
Q('q15','t3','course','Which is NOT one of the Sieckmann criteria?',['attractive','clear','durable','objective'],'Clear, precise, self-contained, easily accessible, intelligible, durable, objective.'),
Q('q16','t3','course','A single colour mark must be represented by a reproduction and:',['an internationally recognized colour code','a paper sample only','a description in words','a photograph of the product'],'Libertel, CJEU 2003.'),
Q('q17','t3','course','Which representation of a sound mark is valid?',['An audio file or a stave with clef, notes and rests','An onomatopoeia such as “Kukelekuuuuu”','The written list of notes E, D#, E…','“The cry of a rooster”'],'Shield Mark, CJEU 2003.'),
Q('q18','t3','course','Can a smell be registered as an EU trademark today?',['No: it cannot be represented clearly and precisely','Yes, with a chemical formula','Yes, with a sample','Yes, with a description'],'Smell of ripe strawberries, GC 2005.'),
Q('q19','t3','course','A position mark requires:',['the position and size relative to the goods with a visual disclaimer (dotted lines)','a video file','an audio file','a colour code only'],'The description cannot replace the disclaimer.'),
Q('q20','t3','course','A motion mark is represented by:',['a video file or a series of sequential images','a stave','a single photograph','a description'],'Session 3.'),
Q('q21','t4','course','Which sign is the most distinctive for cosmetics?',['An invented word such as “Zylora”','“Beauty Cares”','“Beautiful”','“Cream”'],'Fanciful > arbitrary > suggestive > descriptive.'),
Q('q22','t4','course','“Leather” for leather bags is refused because it is:',['descriptive','deceptive','contrary to morality','a shape'],'Article 4(1)(c).'),
Q('q23','t4','course','A descriptive sign can still be registered if:',['it has acquired distinctiveness through use','it is in English','the applicant is famous','it is registered at EUIPO'],'Evidence: surveys, market share, advertising, turnover.'),
Q('q24','t4','course','What did the CJEU hold in Audi “Vorsprung durch Technik”?',['A slogan can be distinctive if it has some originality and requires interpretation','Slogans can never be trademarks','Slogans are always descriptive','Only German slogans are protected'],'C-398/08, 2010.'),
Q('q25','t4','course','According to Lindt (2012), a shape is distinctive only if it:',['departs significantly from the norms or customs of the sector','is gold-coloured','is protected by a design','is famous'],'The chocolate bunny was refused.'),
Q('q26','t4','course','Why was the Lego brick trademark invalid?',['Its shape is necessary to obtain a technical result','It was deceptive','It was not represented','It was not distinctive in colour'],'Lego Juris, 2010: other shapes giving the same result do not save it.'),
Q('q27','t4','course','In Louboutin (2018), the red sole mark was:',['valid: the sign is a colour applied to a position, not exclusively a shape','invalid as a shape giving substantial value','invalid as descriptive','a copyright'],'C-163/16.'),
Q('q28','t4','course','The exclusion of functional and value-giving shapes aims to:',['avoid perpetual monopolies on technical or aesthetic features protected for a limited time by patents and designs','protect consumers from deception','protect public morality','limit fees'],'Article 4(1)(e).'),
Q('q29','t4','course','In Ardagh (2021), the sound of a can opening was refused because:',['the public perceives it as a functional element, not as an origin indication','sounds cannot be marks','it was not recorded','it was deceptive'],'T-668/19.'),
Q('q30','t4','course','To assess whether a sign is deceptive, the consumer is considered:',['reasonably attentive, not particularly vulnerable','very vulnerable','an expert','a child'],'A sufficiently serious risk of deception is required.'),
Q('q31','t4','course','A national flag in a logo can be registered:',['only with the consent of the competent authority','freely','never, even with consent','only in France'],'Unlawful signs.'),
Q('q32','t5','course','A sign identical to a prior mark for identical goods infringes if:',['it adversely affects one of the functions of the mark','there is a likelihood of confusion','the prior mark is reputed','the goods are in the same Nice class'],'Double identity (Arsenal).'),
Q('q33','t5','course','“Vouitton” for cars may infringe Louis Vuitton because:',['Vuitton is a reputed mark and the use takes unfair advantage of its repute','cars and bags are similar','the signs are identical','there is double identity'],'Exception to specialty.'),
Q('q34','t5','course','According to Canon (1998), likelihood of confusion is:',['the risk that the public believes the goods come from the same or economically linked undertakings','any mental link between signs','identity of signs','the same Nice class'],'A simple link suffices only for reputed marks.'),
Q('q35','t5','course','Which factor is NOT taken into account to compare goods and services?',['Whether they belong to the same Nice class','Their nature','Their end users','Whether they are complementary'],'Nor whether they are goods or services.'),
Q('q36','t5','course','The three aspects of the similarity of signs are:',['visual, aural and conceptual','colour, shape and size','price, quality and origin','legal, economic and social'],'Sabel, 1997.'),
Q('q37','t5','course','The relevant public is a consumer who:',['is reasonably well-informed, observant and circumspect and relies on an imperfect recollection','compares both signs side by side','is an expert','is careless'],'Lloyd, 1999.'),
Q('q38','t5','course','The stronger the distinctiveness of the earlier mark:',['the higher the likelihood of confusion','the lower the likelihood of confusion','it does not matter','the shorter the protection'],'Global assessment.'),
Q('q39','t5','course','Which database searches prior trademarks across EU offices?',['TMview','Espacenet','GIview','DesignView'],'Espacenet = patents.'),
Q('q40','t6','course','In the EU, registration is required to obtain trademark rights, except for:',['a well-known mark under Art. 6bis Paris Convention (protected by tort only)','any used sign','marks under 1 year','slogans'],'Same for the US/UK unregistered “TM”.'),
Q('q41','t6','course','An EU trademark is registered with:',['EUIPO and covers the 27 Member States','INPI and covers France','WIPO and covers 131 countries','each national office'],'Exception to territoriality.'),
Q('q42','t6','course','The priority right of the Paris Convention lasts:',['6 months','12 months','3 months','5 years'],'Article 4.'),
Q('q43','t6','course','The Madrid System allows:',['one application, based on a first mark, designating many countries','a single worldwide trademark','free registration','to skip national examination'],'Result: a bundle of national rights.'),
Q('q44','t6','course','The office examines on its own initiative:',['absolute grounds only','relative grounds only','both','neither'],'Prior rights must be raised by their owners (opposition).'),
Q('q45','t6','course','The opposition period at EUIPO is:',['3 months after publication','2 months','6 months','5 years'],'2 months at INPI.'),
Q('q46','t6','course','A trademark not genuinely used for 5 years can be:',['revoked','cancelled for an absolute ground','renewed automatically','transferred'],'3 years in the US.'),
Q('q47','t6','course','A prior owner who knowingly tolerated the use of a later registered mark for 5 successive years:',['can no longer ask for its cancellation','can always ask for cancellation','must buy the mark','loses his own mark'],'Acquiescence.'),
Q('q48','t7','course','In an exclusive licence:',['one licensee, and the owner can no longer use the mark','several licensees','one licensee and the owner keeps using','the licensee owns the mark'],'Sole licence: the owner keeps using.'),
Q('q49','t7','course','An assignment is:',['a permanent transfer of ownership of the trademark','a temporary right to use','a franchise','an opposition'],'Requires a warranty clause.'),
Q('q50','t7','course','A garage displaying “We fix BMW cars” is:',['honest use allowed to indicate the purpose of its services','trademark infringement','unfair competition','a licence'],'Exception to infringement.'),
Q('q51','t7','course','Exhaustion of rights means the owner cannot prevent resale of goods:',['put on the EEA market by him or with his consent','sold anywhere in the world','that are counterfeit','that were altered'],'Legitimate reasons: alteration of the goods.'),
Q('q52','t7','course','After a saisie-contrefaçon in France, the claimant must sue within:',['15 days','2 months','1 year','5 years'],'Reasonable period.'),
Q('q53','t7','course','Which remedy does NOT exist in France?',['Punitive damages','Injunction','Destruction of counterfeits','Publication of the decision'],'Damages compensate the actual prejudice.'),
Q('q54','t7','course','Criminal sanction for trademark counterfeiting in France (individual):',['up to €400 000 and 4 years','up to €10 000 and no prison','up to €1M and 10 years','only civil damages'],'€750 000 and 7 years in an organized group.'),
Q('q55','t7','course','In unfair competition, the claimant must prove:',['an act, a damage and a causal link','only the registration','only the identity of signs','the reputation of the mark'],'Tort liability.'),
Q('q56','t7','course','Which law applies to the infringement of a French trademark?',['French law (where the right is protected)','the defendant’s law','EU law only','US law'],'Territoriality.')];

const EXERCISES=[
{id:'x-t1-rights',topic:'t1',type:'match',src:'course',title:'Which IP right?',q:'Match each object with the IP right that protects it.',
 pairs:[['A novel','Copyright'],['A new chair appearance with individual character','Design'],['A new, inventive manufacturing process','Patent'],['Bayonne ham','Geographical indication (PGI)'],['A brand name for shoes','Trademark']]},
{id:'x-t1-durations',topic:'t1',type:'match',src:'course',title:'Durations',q:'Match each right with its duration.',
 pairs:[['Patent','20 years'],['Trademark','10 years, renewable indefinitely'],['Design','5 years, renewable up to 25 years'],['Copyright (natural person)','70 years after the author’s death']]},
{id:'x-t1-signs',topic:'t1',type:'match',src:'course',title:'Distinctive signs',q:'Match each sign with what it identifies.',
 pairs:[['Registered company name','the legal person'],['Commercial name','the business of a merchant in an area'],['Domain name','the address of a website'],['Trademark','goods or services of an undertaking']]},
{id:'x-t2-cat',topic:'t2',type:'match',src:'course',title:'Categories of trademarks',q:'Match each situation with the right category.',
 pairs:[['An association of Breton cider makers wants a sign for its members','Collective mark'],['A body certifying fair-trade cotton, which sells no cotton','Guarantee mark'],['A start-up names its app','Individual mark']]},
{id:'x-t2-cases',topic:'t2',type:'match',src:'course',title:'Functions in the case law',q:'Match each case with its holding.',
 pairs:[['Hoffmann-La Roche (1978)','Essential function: origin'],['Arsenal (2002)','Use must affect the functions of the mark'],['L’Oréal v Bellure (2009)','Quality, communication, investment, advertising functions'],['Google France (2010)','Advertising function']]},
{id:'x-t3-repr',topic:'t3',type:'match',src:'course',title:'How to represent it',q:'Match each type of mark with a valid representation.',
 pairs:[['Single colour','Reproduction + international colour code'],['Sound','Audio file or stave with clef and notes'],['Motion','Video file or sequential images'],['Position','Position and size + dotted-line disclaimer'],['Shape','Graphic or photographic reproduction (views)'],['Smell','Not currently possible']]},
{id:'x-t3-cases',topic:'t3',type:'match',src:'course',title:'Representation cases',q:'Match each case with its holding.',
 pairs:[['Dyson (2007)','A concept is not a sign'],['Sieckmann (2002)','Clear, precise, self-contained… representation'],['Libertel (2003)','Colour per se with a recognized code'],['Shield Mark (2003)','No onomatopoeia or bare list of notes'],['Ripe strawberries (2005)','Smell cannot be represented']]},
{id:'x-t3-clients',topic:'t3',type:'case',src:'course',title:'Session 3 clients (self-assessed)',q:'<p>Advise on registration: (1) Georges: the mooing of a cow; (2) Linda: the colour pink; (3) Linda: an orange strip covering the toe area of a sock; (4) Bill: the shape of an egg for cosmetics. Which type of mark, which representation, any obstacle?</p>',
 solution:'<p>Model answer by the site: (1) <b>sound mark</b>: an audio file (not “moo” or a description, Shield Mark); distinctive only if not linked to the goods (e.g. fine for software, not for dairy where it is descriptive). (2) <b>colour per se</b>: reproduction + code (Pantone, Libertel); a single colour is rarely distinctive per se: usually needs acquired distinctiveness. (3) <b>position mark</b>: drawing of the sock with the strip, dotted lines for the unprotected sock contour, colour code; distinctive if it departs from the norms of socks. (4) <b>shape mark</b>: photos or 3D images; check it does not result from the nature of the goods, perform a technical function or give substantial value, and that it departs significantly from the norms of cosmetic packaging (Lindt).</p>'},
{id:'x-t4-dist',topic:'t4',type:'match',src:'course',title:'Scale of distinctiveness (cosmetics)',q:'Classify each sign for cosmetics.',
 pairs:[['“Zylora” (invented word)','Fanciful'],['“Volcano” for shampoo','Arbitrary'],['“Silkskin” for a body lotion','Suggestive'],['“Moisturizing cream”','Not distinctive (descriptive)']]},
{id:'x-t4-grounds',topic:'t4',type:'match',src:'course',title:'Absolute grounds',q:'Match each refused sign with its ground.',
 pairs:[['“Bag” for bags','Generic / customary'],['“Leather” for leather bags','Descriptive'],['The Lego brick shape','Shape necessary for a technical result'],['“Organic” for non-organic products','Deceptive'],['A national flag without consent','Unlawful (state emblem)'],['The sound of a can opening for drinks','Devoid of distinctive character']]},
{id:'x-t4-valid',topic:'t4',type:'mcq',src:'course',title:'Valid or not?',q:'Which signs were held valid (or capable of being valid) by the courts?',o:['Louboutin’s red sole','Audi’s slogan “Vorsprung durch Technik”','Apple’s store layout','The Lego brick','Lindt’s gold bunny shape','Dyson’s transparent bin'],a:[0,1,2],e:'Lego, Lindt and Dyson were refused or invalid.'},
{id:'x-t4-sarah',topic:'t4',type:'case',src:'course',title:'Sarah’s cosmetics (self-assessed)',q:'<p>Session 4 case. Sarah sells perfumes, body and face care and make-up. Advise on: “Beauty Cares”, “Beautiful”, the colour white, bubbles in motion, the meowing of a cat, “Cannabis”, “Milky care”. Absolute grounds, representation, strongest mark?</p>',
 solution:'<p>Model answer by the site (method: facts → question → rule → application → conclusion). <b>Beauty Cares</b> and <b>Beautiful</b>: descriptive/laudatory for cosmetics (Art. 4(1)(b)–(c)): refused unless acquired distinctiveness; word mark. <b>White</b>: colour commonly used for cosmetics, devoid of distinctiveness per se; reproduction + code. <b>Bubbles in motion</b>: motion mark (video or sequence); weak, evokes foam/bath products. <b>Meowing of a cat</b>: sound mark (audio file); arbitrary for cosmetics → distinctive. <b>Cannabis</b>: risk of being contrary to public policy and deceptive if the products contain none. <b>Milky care</b>: descriptive if the products contain milk, deceptive if they do not. Strongest: the arbitrary meowing sound (or an invented word).</p>'},
{id:'x-t5-cases',topic:'t5',type:'match',src:'course',title:'Three cases of infringement',q:'Prior mark: “Vuitton” for bags (reputed). Match each new sign with the applicable case.',
 pairs:[['“Vuitton” for bags','Double identity + adverse effect on a function'],['“Vouton” for bags','Similarity + likelihood of confusion'],['“Vouitton” for cars','Reputed mark: link + unfair advantage or detriment']]},
{id:'x-t5-factors',topic:'t5',type:'mcq',src:'course',title:'Comparing goods and services',q:'Which factors ARE taken into account to compare goods and services?',o:['Nature','End users','Method of use','Competition or complementarity','Same Nice class','Whether they are goods or services'],a:[0,1,2,3],e:'The Nice class and the goods/services distinction are not relevant.'},
{id:'x-t5-sim',topic:'t5',type:'match',src:'course',title:'Similarity of signs',q:'Prior mark “Ball” for copy services. Match each sign with its main similarity.',
 pairs:[['“Bell”','Visual and aural similarity'],['“Balloon”','Visual and aural, partly conceptual'],['“BALL print”','Dominant element identical (“print” descriptive)']]},
{id:'x-t5-global',topic:'t5',type:'order',src:'course',title:'Global assessment (Sabel/Canon)',q:'Put the steps of the analysis in the course’s order.',items:['Similarity of the signs (visual, aural, conceptual)','Distinctive and dominant elements','Similarity of the goods and services','Distinctiveness of the earlier mark','Relevant public (average consumer)']},
{id:'x-t6-fee-fr',topic:'t6',type:'calc',src:'practice',title:'INPI fee (new numbers)',
 gen:u=>({n:u.step(1,8,1)}),
 q:v=>`<p>Online filing of a French trademark at INPI in <b>${v.n}</b> class${v.n>1?'es':''}. Fee in €?</p>`,
 answer:v=>190+40*(v.n-1),tol:0,unit:'€',
 solution:v=>F(`€190 for the 1st class + €40 × ${v.n-1} = €${fmt(190+40*(v.n-1))}`)},
{id:'x-t6-fee-eu',topic:'t6',type:'calc',src:'practice',title:'EUIPO fee (new numbers)',
 gen:u=>({n:u.step(1,8,1)}),
 q:v=>`<p>Online filing of an EU trademark at EUIPO in <b>${v.n}</b> class${v.n>1?'es':''}. Fee in €?</p>`,
 answer:v=>850+(v.n>=2?50:0)+150*Math.max(0,v.n-2),tol:0,unit:'€',
 solution:v=>F(`€850 (1st class)${v.n>=2?' + €50 (2nd class)':''}${v.n>2?` + €150 × ${v.n-2} (3rd class onwards)`:''} = €${fmt(850+(v.n>=2?50:0)+150*Math.max(0,v.n-2))}`)},
{id:'x-t6-dates',topic:'t6',type:'case',src:'practice',title:'Deadlines',q:'<p>Give the numbers.</p>',
 parts:[{type:'numeric',q:'Priority period (months)',answer:6,tol:0},{type:'numeric',q:'Opposition period at EUIPO (months)',answer:3,tol:0},{type:'numeric',q:'Opposition period at INPI (months)',answer:2,tol:0},{type:'numeric',q:'Years of non-use before revocation (EU)',answer:5,tol:0},{type:'numeric',q:'A mark filed in 2026 expires (if not renewed) in year…',answer:2036,tol:0},{type:'numeric',q:'Countries covered by an EU trademark',answer:27,tol:0}],
 solution:'<p>Session 6.</p>'},
{id:'x-t6-loss',topic:'t6',type:'match',src:'course',title:'Cancellation or revocation?',q:'Match each situation with the right action.',
 pairs:[['The sign was descriptive at the time of registration','Cancellation'],['The mark was not used for 6 years','Revocation'],['The mark became the common name of the product (“escalator”)','Revocation'],['The mark infringed a prior mark when registered','Cancellation']]},
{id:'x-t6-champo',topic:'t6',type:'case',src:'course',title:'Champollion (self-assessed)',q:'<p>Session 6 case. Champollion needs: TM1 in Germany, Poland, Austria, Hungary, Czech Republic; TM2 in France, Belgium, Switzerland, Canada; TM3 in the same five EU countries + Japan and China, and the UK and US within 4 years. Which routes?</p>',
 solution:'<p>Model answer by the site. <b>TM1</b>: all five are EU Member States → one <b>EU trademark</b> at EUIPO (from €850, covers all 27), cheaper and simpler than five national filings. <b>TM2</b>: Switzerland and Canada are outside the EU → a first French filing at INPI, then the <b>Madrid System</b> designating Benelux, Switzerland and Canada (within 6 months to keep the <b>priority</b> date). <b>TM3</b>: EU trademark + Madrid designating Japan and China (within 6 months for priority); the UK and the US can be added later by subsequent designation, but without priority after 6 months, so file early if the plan is firm.</p>'},
{id:'x-t7-licence',topic:'t7',type:'match',src:'course',title:'Types of licence',q:'Match each licence with its definition.',
 pairs:[['Exclusive','One licensee; the owner cannot use'],['Sole','One licensee; the owner keeps using'],['Non-exclusive','Several licensees and the owner'],['Sub-licence','The licensee grants licences'],['Franchising','Licence of IP and know-how with support']]},
{id:'x-t7-exceptions',topic:'t7',type:'mcq',src:'course',title:'Is it infringement?',q:'Which uses can the owner NOT prohibit?',o:['A garage sign “We fix BMW cars”','Reselling in Lyon genuine bags first sold in Spain by the owner','Using one’s own surname honestly','Selling fake bags bearing the mark','Reselling genuine perfume after diluting it'],a:[0,1,2],e:'Altered goods: legitimate reason to oppose resale.'},
{id:'x-t7-proc',topic:'t7',type:'order',src:'course',title:'Infringement procedure',q:'Put the steps in a logical order.',items:['Detect the infringement (own watch, customs)','Obtain a saisie-contrefaçon order (prima facie evidence)','Sue within 15 days before the specialized tribunal judiciaire','Obtain remedies: injunction, destruction, damages, publication']},
{id:'x-t7-compare',topic:'t7',type:'match',src:'course',title:'Infringement vs unfair competition',q:'Match each statement with the right action.',
 pairs:[['Protects a registered trademark','Infringement'],['Protects a company or domain name','Unfair competition'],['Requires an act, a damage and a causal link','Unfair competition'],['Can lead to a fine of up to €400 000','Infringement']]},
{id:'x-t7-method',topic:'t7',type:'order',src:'course',title:'Case study method',q:'Put the steps of the course method in order.',items:['Classification of the facts','Legal question','Rule(s) of law','Application to the facts','Conclusion']}];

const C=(id,topic,f,b)=>({id,topic,f,b});
const CARDS=[
C('c0','t1','Copyright','original work, no registration, 70 years after death'),C('c1','t1','Patent','new + inventive step + industrial application; 20 years'),C('c2','t1','Design','new appearance with individual character; 5 years → 25 years'),
C('c3','t1','Trademark','distinctive sign, registered, 10 years renewable indefinitely'),C('c4','t1','PDO vs PGI','PDO: main steps in the area (Champagne) · PGI: quality linked to origin (Bayonne ham)'),
C('c5','t1','Principle of specialty','a sign is protected only for its goods/services'),C('c6','t1','Other distinctive signs','company name, commercial name, domain name → unfair competition'),
C('c7','t2','Directive vs Regulation','Directive 2015/2436 (transposed) · Regulation 2017/1001 (EU mark, direct)'),C('c8','t2','Collective mark','members of an association vs non-members'),
C('c9','t2','Guarantee mark','certifies standards; owner does not supply the goods'),C('c10','t2','Hoffmann-La Roche','essential function = guarantee of origin'),C('c11','t2','Bellure','quality, communication, investment, advertising functions'),
C('c12','t3','Dyson','a concept is not a sign'),C('c13','t3','Sieckmann criteria','clear, precise, self-contained, easily accessible, intelligible, durable, objective'),
C('c14','t3','Libertel','colour per se + international code'),C('c15','t3','Shield Mark','sound: stave or audio, not onomatopoeia or notes'),C('c16','t3','Smell mark','impossible to represent (ripe strawberries, 2005)'),
C('c17','t4','Scale of distinctiveness','fanciful > arbitrary > suggestive > descriptive/generic'),C('c18','t4','Acquired distinctiveness','through use: surveys, market share, advertising, turnover'),
C('c19','t4','Audi','a slogan can be distinctive'),C('c20','t4','Lindt','shape must depart significantly from the sector’s norms'),C('c21','t4','Lego Juris','technical shape excluded, even if alternatives exist'),
C('c22','t4','Louboutin','colour on a position ≠ exclusively a shape: valid'),C('c23','t4','Excluded shapes','nature of goods · technical result · substantial value'),
C('c24','t5','3 relative-ground cases','double identity + function · similar + confusion · reputed + link + unfair advantage/detriment'),C('c25','t5','Canon','confusion = belief in same or linked undertakings'),
C('c26','t5','Sabel factors','signs (visual, aural, conceptual), dominant elements, goods, earlier mark’s distinctiveness, relevant public'),C('c27','t5','Lloyd','average consumer with imperfect recollection'),
C('c28','t6','Fees','INPI €190 + €40/class · EUIPO €850 + €50 + €150/class'),C('c29','t6','Priority right','6 months (Paris Convention)'),C('c30','t6','Opposition','relative grounds, 3 months EU / 2 months FR'),
C('c31','t6','Cancellation vs revocation','invalid at filing vs non-use 5 years / lost distinctiveness'),C('c32','t7','Exhaustion','first sale in the EEA by or with consent of the owner'),
C('c33','t7','Saisie-contrefaçon','ex parte evidence order; sue within 15 days (FR)'),C('c34','t7','Criminal sanctions (FR)','€400 000 and 4 years; €750 000 and 7 years in a gang')];

/* ---------- v2 (24/11/2026): layered sheets, glossary, generators and case-study tools (CONVENTIONS.md section 16) ---------- */
const {STEPS,LAYERED}=Rev.h;
const OUT='<b>Outside the slides:</b>';
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
const addM=(d,m)=>{const y=d.y+Math.floor((d.m+m)/12),mm=(d.m+m)%12,last=new Date(Date.UTC(y,mm+1,0)).getUTCDate();return {y,m:mm,d:Math.min(d.d,last)}};
const addD=(d,n)=>{const t=new Date(Date.UTC(d.y,d.m,d.d+n));return {y:t.getUTCFullYear(),m:t.getUTCMonth(),d:t.getUTCDate()}};
const ds=d=>`${d.d} ${MON[d.m]} ${d.y}`;
const feeFR=n=>190+40*(n-1),feeEU=n=>850+(n>=2?50:0)+150*Math.max(0,n-2);
// choice with the right answer at a random place: returns {o, a}
const opts=(u,right,wrong)=>{const o=u.shuffle([right].concat(wrong.filter((w,i,a)=>w!==right&&a.indexOf(w)===i)).slice(0,4));return {o,a:o.indexOf(right)}};

/* ---------- v2: bank of signs for the absolute grounds (cases of the course + made-up ones) ---------- */
const GROUNDS=['None: registrable','Not a sign but a concept (Dyson)','Cannot be represented clearly and precisely (smell, taste)','Descriptive, generic or devoid of distinctive character','Shape: nature of the goods, technical result or substantial value','Contrary to public policy or morality, or deceptive','Flag or state emblem without consent'];
const REPRS=['Word mark: the word itself','Figurative mark: the image','Colour mark: reproduction + colour code (Pantone)','Sound mark: audio file or stave','Motion mark: video or sequence of images','Shape mark: photos or 3D views','Position mark: drawing with dotted lines for the unprotected parts','No valid representation exists'];
// [sign, goods, ground index, representation index, acquired distinctiveness possible?, comment, source]
const BANK=[
['The word “Beauty Cares”','cosmetics',3,0,true,'laudatory and descriptive of the purpose of the goods','Sarah (Session 4)'],
['The word “Beautiful”','cosmetics',3,0,true,'laudatory: tells the quality, not the origin','Sarah (Session 4)'],
['The colour white','cosmetics',3,2,true,'a colour commonly used for the goods: devoid of distinctive character per se','Sarah (Session 4)'],
['Bubbles in motion','cosmetics',0,4,false,'evocative of foam but not descriptive: registrable as a motion mark (weak)','Sarah (Session 4)'],
['The meowing of a cat','cosmetics',0,3,false,'arbitrary for cosmetics: a strong sound mark','Sarah (Session 4)'],
['The word “Cannabis”','cosmetics',5,0,false,'risk of being contrary to public policy, and deceptive if the products contain none','Sarah (Session 4)'],
['The words “Milky care”','cosmetics containing no milk',5,0,false,'deceptive as to the composition of the goods','Sarah (Session 4)'],
['The mooing of a cow','software',0,3,false,'arbitrary for software: registrable with an audio file (Shield Mark)','Georges (Session 3)'],
['The mooing of a cow','milk and dairy products',3,3,true,'it evokes the origin of the goods: weak, close to descriptive','Georges (Session 3)'],
['The colour pink alone','clothes',3,2,true,'a single colour is rarely distinctive per se: usually needs acquired distinctiveness (Libertel)','Linda (Session 3)'],
['An orange strip covering the toe of a sock','socks',0,6,false,'position mark; registrable if it departs from the norms of the sector','Linda (Session 3)'],
['A transparent collecting bin, in any shape','vacuum cleaners',1,7,false,'a mere concept covering all conceivable shapes','Dyson (CJEU 2007)'],
['The smell of ripe strawberries','soaps',2,7,false,'no clear, precise, durable representation (description, formula, sample all fail)','Strawberries (GC 2005)'],
['The red Lego brick with studs','construction toys',4,5,false,'its essential characteristics perform a technical function','Lego Juris (CJEU 2010)'],
['A gold-wrapped chocolate bunny with a red ribbon','chocolate',3,5,true,'does not depart significantly from the norms of the sector','Lindt (CJEU 2012)'],
['A red colour applied to the sole of a shoe','high-heeled shoes',0,6,false,'not a sign consisting exclusively of a shape: valid','Louboutin (CJEU 2018)'],
['“Vorsprung durch Technik”','cars',0,0,false,'a slogan with originality and resonance that requires interpretation','Audi (CJEU 2010)'],
['The sound of a can being opened','drinks',3,3,true,'perceived as a functional sound of the goods, not as an origin','Ardagh (GC 2021)'],
['The layout of a flagship store','retail services of electronics',0,1,false,'distinctive store layout for services','Apple (CJEU 2014)'],
['The word “Leather”','leather bags',3,0,true,'describes the kind of goods','Course example (Session 4)'],
['The word “Bag”','bags',3,0,false,'generic name of the goods: no distinctiveness can be acquired in practice','Course example (Session 4)'],
['A national flag in a logo, no consent','clothes',6,1,false,'state emblems need the consent of the competent authority','Course example (Session 4)'],
['The invented word “Zelvoria”','perfumes',0,0,false,'fanciful: the strongest kind of mark','Made-up example'],
['The word “Apple”','computers',0,0,false,'arbitrary: a real word unrelated to the goods','Made-up example (arbitrary sign)'],
['The word “Apple”','fresh fruit',3,0,false,'generic for the goods','Made-up example (specialty)'],
['The words “Swiss Made”','watches made in China',5,0,false,'deceptive as to the geographical origin','Made-up example'],
['The shape of a banana','bananas',4,5,false,'the shape results from the nature of the goods','Made-up example']];
const pathOf=b=>{const g=b[2];if(g===1)return {q1:1};if(g===2)return {q1:0,q2:1};if(g===3)return {q1:0,q2:0,q3:0,q3b:1};if(g===4)return {q1:0,q2:0,q3:1,q4:0};if(g>=5)return {q1:0,q2:0,q3:1,q4:1,q5:0};return {q1:0,q2:0,q3:1,q4:1,q5:1}};

/* ---------- v2: layered sheets ---------- */
const STEPS_JOE=STEPS({title:'The course method on the Joe example',intro:'<p>Joe, 18, bought a Ferrari for €200 000 with his inheritance. His parents want to give the car back: did Joe have the capacity to contract alone? Write each step yourself, then open the model.</p>',
 steps:['<b>1. Classification of facts</b>: Joe, who is 18, made a contract of sale.','<b>2. Legal question</b>: is the contract valid; was Joe capable of making it?','<b>3. Rule of law</b>: a contract is valid if the parties have capacity, give a non-vitiated consent and its content is certain and lawful; a person under 18 or adjudicated mentally incompetent cannot contract.','<b>4. Application</b>: Joe is over 18 and, as far as we know, has not been adjudicated incompetent.','<b>5. Conclusion</b>: Joe had capacity; the contract is valid (unless another condition fails); the parents cannot give the car back.']});
const STEPS_GEORGES=STEPS({title:'The method on a trademark case: Georges and the mooing of a cow',intro:'<p>Georges wants to register the mooing of a cow. Apply the five steps (here for software, then think about dairy products).</p>',
 steps:['<b>Facts</b>: Georges wants to register a sound (the mooing of a cow) as a trademark for software.','<b>Question</b>: can a sound be a valid trademark, and how must it be represented?','<b>Rules</b>: Art. 3 Directive (any sign, distinctive, represented clearly and precisely); Sieckmann criteria; Shield Mark: a sound is represented by an audio file or a stave with clef, notes and rests, not by an onomatopoeia or a description; Art. 4(1)(b)–(c) on distinctiveness.','<b>Application</b>: a sound is a sign; an audio file of the mooing meets the Sieckmann criteria; for software the mooing is arbitrary, so distinctive. For milk, it would evoke the goods: weak or descriptive.','<b>Conclusion</b>: Georges can register a sound mark for software by filing an audio file; then check the relative grounds (prior sound marks) before filing.']});

SHEETS.t1=LAYERED(SHEETS.t1,[
 {id:'t1-ip',ess:'<p>Five IP rights: <b>copyright</b> (original work, no registration, 70 years after death), <b>design</b> (appearance, 5 → 25 years), <b>patent</b> (invention, 20 years), <b>geographical indications</b> (PDO, PGI), <b>trademark</b> (sign distinguishing goods or services, 10 years renewable indefinitely).</p>',
  tryit:{q:'Which IP right can last forever?',o:['A trademark, renewed every 10 years','A patent','Copyright','A design'],a:0,e:'A trademark is renewable indefinitely, as long as it is used and renewed.'}},
 {id:'t1-signs',ess:'<p>Company name, commercial name and domain name are distinctive signs but not trademarks: they are protected only by an action for <b>unfair competition</b>. All distinctive signs follow the <b>principle of specialty</b>: protection only for the goods or services concerned.</p>',
  tryit:{q:'A competitor copies your domain name (no trademark registered). Which action?',o:['Unfair competition (tort)','Trademark infringement','Opposition at the INPI'],a:0,e:'Without a registered trademark there is no infringement action.'}}]);
SHEETS.t2=LAYERED(SHEETS.t2,[
 {id:'t2-sources',ess:'<p>EU <b>Directive</b> 2015/2436 (to transpose) and <b>Regulation</b> 2017/1001 on the EU trademark (directly applicable); Directive 2004/48 on enforcement; Paris Convention (1883) and Madrid Protocol (1989).</p>',
  tryit:{q:'Which text is directly applicable in all Member States without transposition?',o:['Regulation 2017/1001','Directive 2015/2436','The Paris Convention'],a:0,e:'A regulation applies directly; a directive must be transposed.'}},
 {id:'t2-cat',ess:'<p><b>Individual</b> mark (one undertaking), <b>collective</b> mark (members of an association), <b>guarantee / certification</b> mark (users meet standards set by an owner who does not supply such goods).</p>',
  tryit:{q:'A label certifying organic farming, owned by a body that sells no food, is…',o:['a guarantee (certification) mark','a collective mark','an individual mark'],a:0,e:'The owner sets standards and does not supply the goods certified.'}},
 {id:'t2-func',ess:'<p>Essential function: guarantee the <b>origin</b> (Hoffmann-La Roche). Other functions: quality, communication, investment, advertising (L’Oréal v Bellure, Google France). The owner can only prohibit uses affecting these functions (Arsenal).</p>',
  tryit:{q:'Which case defines the essential function of a trademark?',o:['Hoffmann-La Roche (1978)','Arsenal (2002)','Google France (2010)'],a:0,e:'Guaranteeing the identity of origin of the product to the consumer.'}}]);
SHEETS.t3=LAYERED(SHEETS.t3,[
 {id:'t3-grounds',extra:STEPS_JOE,ess:'<p><b>Absolute grounds</b>: the sign itself (a sign, represented, distinctive, lawful), checked by the office. <b>Relative grounds</b>: conflicts with prior rights of others, raised by their owners.</p>',
  tryit:{q:'A prior trademark owner objects to your application. This is…',o:['a relative ground (opposition)','an absolute ground','a revocation'],a:0,e:'Only the owner of the prior right can raise it.'}},
 {id:'t3-sign',ess:'<p>The subject matter must be a precise <b>sign</b>, not a concept: Dyson’s transparent bin “in all conceivable shapes” was refused.</p>',
  tryit:{q:'Why was Dyson’s transparent bin refused?',o:['It was a concept covering all shapes, not a sign','It was descriptive','It was deceptive'],a:0,e:'A trademark cannot give a monopoly on an idea.'}},
 {id:'t3-sieckmann',ess:'<p>The 2015 Directive no longer requires a graphic representation but one that is <b>clear, precise, self-contained, easily accessible, intelligible, durable and objective</b> (Sieckmann).</p>',
  tryit:{q:'Which is NOT a Sieckmann criterion?',o:['Original','Precise','Durable','Objective'],a:0,e:'Originality is a copyright condition, not a trademark one.'}},
 {id:'t3-types',ess:'<p>Colour: code (Libertel). Sound: audio file or stave (Shield Mark). Position: dotted lines for unprotected parts. Motion: video or still images. Shape: views or photos. Smell and taste: impossible today.</p>',
  extra:STEPS_GEORGES,
  tryit:{q:'How do you represent a sound mark?',o:['An audio file or a stave with clef, notes and rests','The onomatopoeia “Kukelekuuuuu”','A written list of notes'],a:0,e:'Shield Mark (CJEU 2003).'}}]);
SHEETS.t4=LAYERED(SHEETS.t4,[
 {id:'t4-dist',ess:'<p>Distinctiveness is judged <b>for the goods applied for</b>: fanciful &gt; arbitrary &gt; suggestive &gt; descriptive or generic (refused). It can be <b>acquired</b> through use (surveys, market share, advertising) or lost.</p>',
  tryit:{q:'“Apple” for computers is…',o:['arbitrary','fanciful','descriptive','generic'],a:0,e:'A real word unrelated to the goods. For fresh fruit it would be generic.'}},
 {id:'t4-excl',ess:'<p>Art. 4(1): devoid of distinctive character, descriptive, generic or customary; shapes resulting from the nature of the goods, needed for a technical result or giving substantial value; contrary to public policy or morality; deceptive; flags and emblems without consent.</p>',
  tryit:{q:'Which ground can NOT be overcome by acquired distinctiveness?',o:['A shape needed to obtain a technical result','A descriptive word','A colour commonly used for the goods'],a:0,e:'Functional shapes are excluded forever (no perpetual monopoly on a technical solution).'}},
 {id:'t4-cases',ess:'<p>Apple (store layout OK), Audi (slogan OK if original), Lindt (shape must depart from the norms), Ardagh (functional sound refused), Lego (technical shape refused), Louboutin (red sole is not a shape: valid).</p>',
  tryit:{q:'Lindt’s gold bunny was refused because…',o:['it did not depart significantly from the norms of the sector','it was a technical shape','it was deceptive'],a:0,e:'Consumers saw a usual Easter chocolate shape, not an origin.'}},
 {id:'t4-unlawful',ess:'<p><b>Deceptive</b>: a real risk of misleading the average consumer (nature, quality, origin). <b>Public policy / morality</b>: judged for the goods and public concerned. Flags and emblems: not without consent.</p>',
  tryit:{q:'“Swiss Made” for watches made in China is refused as…',o:['deceptive (geographical origin)','descriptive','a shape'],a:0,e:'It misleads the consumer about the origin.'}}]);
SHEETS.t5=LAYERED(SHEETS.t5,[
 {id:'t5-cases',ess:'<p>Art. 5: (1) identical sign + identical goods + adverse effect on a function; (2) identical or similar sign + identical or similar goods + <b>likelihood of confusion</b>; (3) <b>reputed</b> mark: even for dissimilar goods, a link + unfair advantage or detriment.</p>',
  tryit:{q:'Prior “Vuitton” (reputed) for bags. “Vouitton” for cars falls under…',o:['the reputed-mark case','double identity','likelihood of confusion','no conflict (specialty)'],a:0,e:'Dissimilar goods: only a reputed mark is protected beyond specialty.'}},
 {id:'t5-confusion',ess:'<p>Global assessment (Sabel, Canon): visual, aural and conceptual similarity, dominant elements, similarity of goods (nature, users, use, competition, complementarity; not the Nice class), distinctiveness of the earlier mark, relevant public with an <b>imperfect recollection</b> (Lloyd).</p>',
  tryit:{q:'Which factor is NOT used to compare goods and services?',o:['Being in the same Nice class','Their nature','Their end users','Whether they compete'],a:0,e:'The Nice class is administrative only.'}},
 {id:'t5-reputed',ess:'<p>A mark is <b>reputed</b> when known by a significant part of the public concerned (duration, scope, budget, share of the public) in a substantial part of the territory. It then escapes the principle of specialty.</p>',
  tryit:{q:'A reputed mark is protected against use for dissimilar goods if…',o:['the public makes a link and there is unfair advantage or detriment','any similar sign is used','the goods are in the same class'],a:0,e:'Exception to specialty with extra conditions.'}},
 {id:'t5-prior',ess:'<p>Other prior rights block a new mark too: copyright, designs, GIs, company names, commercial names, domain names. Search before filing: TMview, DesignView, Espacenet, GIview.</p>',
  tryit:{q:'Which database searches trademarks across offices?',o:['TMview','Espacenet','GIview'],a:0,e:'Espacenet is for patents, GIview for geographical indications.'}}]);
SHEETS.t6=LAYERED(SHEETS.t6,[
 {id:'t6-reg',ess:'<p>A trademark is acquired by <b>registration</b> (exceptions: well-known marks, unregistered “TM”, protected by tort only). <b>Territoriality</b>: one office, one territory; the EU trademark covers the 27 Member States.</p>',
  tryit:{q:'A French INPI registration protects the mark in…',o:['France only','the whole EU','every Paris Convention country'],a:0,e:'Territoriality: one mark, one territory.'}},
 {id:'t6-fees',ess:`${F('INPI: €190 + €40 per extra class      EUIPO: €850 + €50 (2nd class) + €150 per class from the 3rd\nPriority: 6 months after the first filing      Madrid: one form, a bundle of national rights')}`,
  tryit:{q:'EUIPO fee for 3 classes?',answer:1050,unit:'€',tol:0,e:'850 + 50 + 150 = €1 050.'}},
 {id:'t6-exam',ess:'<p>The office examines the <b>absolute grounds</b> systematically. <b>Opposition</b> on relative grounds: only by the prior owner, within <b>2 months</b> (INPI) or <b>3 months</b> (EUIPO) after publication.</p>',
  tryit:{q:'Publication of an EU trademark application on 10 March. Last month to oppose?',o:['June (3 months)','May (2 months)','September (6 months)'],a:0,e:'3 months at EUIPO: until 10 June.'}},
 {id:'t6-loss',ess:'<p>10 years, renewable indefinitely. <b>Cancellation</b> (nullité): a condition was missing at registration (no time limit, but 5 years of known tolerance = acquiescence). <b>Revocation</b> (déchéance): after registration, no genuine use for 5 years or loss of distinctiveness.</p>',
  tryit:{q:'A mark became the common name of the product (like “escalator”). Which action?',o:['Revocation','Cancellation','Opposition'],a:0,e:'Distinctiveness was lost after registration.'}}]);
SHEETS.t7=LAYERED(SHEETS.t7,[
 {id:'t7-powers',ess:'<p>The owner uses the mark <b>as registered</b>, grants <b>licences</b> (exclusive, sole, non-exclusive, sub-licence, franchising) or <b>assigns</b> it (permanent transfer, lump sum, warranty clause).</p>',
  tryit:{q:'One licensee and the owner can still use the mark: this is…',o:['a sole licence','an exclusive licence','a non-exclusive licence'],a:0,e:'Exclusive: even the owner can no longer use it.'}},
 {id:'t7-infr',ess:'<p>Infringement = use in the course of trade in one of the three cases of Art. 5. Exceptions: <b>honest use</b> (descriptive use, “we repair BMW”, own name) and <b>exhaustion</b> (goods first put on the EEA market by the owner or with consent; Centrafarm, Grundig).</p>',
  tryit:{q:'A shop resells genuine perfumes bought from the brand in Spain. Can the owner stop it?',o:['No: rights are exhausted (unless the goods were altered)','Yes: it is infringement','Yes: double identity'],a:0,e:'Exhaustion of rights in the EEA.'}},
 {id:'t7-proc',ess:'<p>Customs seizures, <b>saisie-contrefaçon</b> (then sue within 15 days in France), right of information; specialized courts (10 tribunaux judiciaires); injunction, destruction, damages (no punitive damages in France), publication; criminal: up to €400 000 and 4 years.</p>',
  tryit:{q:'Maximum criminal fine for trademark infringement in France (not in an organized group)?',answer:400000,unit:'€',tol:0,e:'€400 000 and 4 years; €750 000 and 7 years in an organized group.'}},
 {id:'t7-unfair',ess:'<p>Infringement protects a registered mark (proof: use in one of the 3 cases; civil and criminal). <b>Unfair competition</b> protects other signs (proof: fault + damage + causal link; civil only). Both can be combined if the prejudice is distinct.</p>',
  tryit:{q:'What must be proved in an unfair competition action?',o:['A fault, a damage and a causal link','Only the use of a similar sign','A registration'],a:0,e:'It is a tort action.'}}]);

/* ---------- v2: glossary (the course’s English–French glossary, with definitions) ---------- */
const GL_ROWS=[
['Absolute ground of refusal','Motif absolu de rejet','A reason linked to the sign itself (not a sign, not represented, not distinctive, unlawful, deceptive); examined by the office.','t3',['absolute grounds']],
['Relative ground of refusal','Motif relatif de rejet','A conflict with a prior right of a third party; raised by that owner.','t3',['relative grounds']],
['Applicant','Demandeur (à l’enregistrement)','The person who files a trademark application.','t6'],
['Arbitrary sign','Signe arbitraire','A real word with no link to the goods (“Apple” for computers).','t4',['arbitrary']],
['Fanciful sign','Signe fantaisiste','An invented word; the strongest kind of mark.','t4',['fanciful']],
['Suggestive sign','Signe évocateur','A sign that evokes the goods without describing them.','t4',['suggestive']],
['Descriptive sign','Signe descriptif','A sign describing the kind, quality, quantity, purpose, value or origin of the goods; refused.','t4',['descriptive']],
['Generic sign','Signe générique','The common name of the goods (“Bag” for bags); refused.','t4',['generic']],
['Deceptive sign','Signe trompeur','A sign misleading the public about the nature, quality or origin of the goods.','t4',['deceptive']],
['Unlawful sign','Signe illicite','A sign contrary to the law: public policy, morality, protected emblems.','t4'],
['Distinctiveness','Distinctivité','The ability of a sign to identify the commercial origin of the goods, judged for the goods applied for.','t4',['distinctive']],
['Assignment of rights','Cession de droit','Permanent transfer of the trademark to an assignee, usually for a lump sum.','t7',['assignment']],
['License of rights','Licence de droits','Authorization to exploit the trademark, often against royalties.','t7',['licence','license']],
['Cancellation of the trademark','Nullité de la marque','Annulment because a condition of validity was missing at registration.','t6',['cancellation']],
['Revocation of the trademark','Déchéance de la marque','Loss of the right after registration: no genuine use for 5 years or loss of distinctiveness.','t6',['revocation']],
['Colour trademark','Marque de couleur','A mark consisting of a colour or combination of colours, filed with a colour code.','t3',['colour mark']],
['Sound trademark','Marque sonore','A mark consisting of a sound, filed as an audio file or a stave.','t3',['sound mark']],
['Motion trademark','Marque de mouvement','A mark showing a movement, filed as a video or still images.','t3',['motion mark']],
['Pattern trademark','Marque de motif','A set of elements repeated regularly.','t3',['pattern mark']],
['Shape trademark','Marque tridimensionnelle','A three-dimensional mark: the shape of the goods or packaging.','t3',['shape mark']],
['Figurative trademark','Marque figurative','A mark with stylized characters or images.','t3',['figurative']],
['Word trademark','Marque verbale','A mark made only of words, letters or numerals in standard characters.','t3',['word mark']],
['Commercial name','Nom commercial','The name under which a merchant trades.','t1',['trade name']],
['Registered name of a company','Raison ou dénomination sociale','The name of the legal person (company name).','t1',['company name']],
['Domain name','Nom de domaine','The address of a website.','t1'],
['Copyright','Droit d’auteur','Protection of original works, without registration, until 70 years after the author’s death.','t1'],
['Design right','Droit de dessin (2D) ou modèle (3D)','Protection of the appearance of a product, 5 years renewable up to 25.','t1',['design']],
['Patent right','Droit de brevet','Protection of an invention for 20 years.','t1',['patent']],
['Protected designation of origin','Appellation d’origine protégée','A name linking a product to a place where all steps take place (Champagne).','t1',['PDO']],
['Protected geographical indication','Indication géographique protégée','A name linking a product to a place where at least one step takes place (Bayonne ham).','t1',['PGI']],
['Principle of specialty','Principe de spécialité','A distinctive sign is protected only for the goods or services concerned.','t1',['specialty']],
['Counterfeits','Contrefaçons, produits contrefaisants','Goods bearing a sign that infringes a trademark.','t7'],
['Infringement of an IP right','Acte de contrefaçon','An unauthorized use of a protected right (trademark, patent…).','t7',['infringement']],
['Likelihood of confusion','Risque de confusion','The risk that the public believes the goods come from the same or linked undertakings (Canon).','t5'],
['Reputed trademark','Marque de renommée','A mark known by a significant part of the public concerned; protected beyond specialty.','t5',['reputed mark']],
['Well-known trademark','Marque notoire','A mark protected without registration (Art. 6bis Paris Convention), by a tort action.','t6',['well-known mark']],
['Undertaking','Entreprise (unité économique)','Any entity carrying on an economic activity.','t2'],
['Unfair competition','Concurrence déloyale','Tort action requiring a fault, a damage and a causal link.','t7'],
['Tortious liability','Responsabilité (civile) délictuelle','Civil liability for a fault causing damage, outside any contract.','t7',['tort']],
['Physical seizure of the infringing goods','Saisie-contrefaçon','Court-authorized description or seizure of allegedly infringing goods, as evidence.','t7',['saisie-contrefaçon']],
['Remedies','Réparations','What the court orders: injunction, destruction, damages, publication.','t7'],
['Misdemeanour','Délit','Criminal offence of medium gravity; infringement is one in France.','t7'],
['Governing law clause','Clause de droit applicable','Contract clause choosing the law that applies.','t7'],
['Warranty of quiet possession clause','Clause de garantie de non-éviction','The assignor guarantees the assignee will not be disturbed by claims on the mark.','t7',['warranty clause']],
['Register','Registre','The public list of registered trademarks kept by an office.','t6'],
['Trademark application','Demande d’enregistrement','The filing asking an office to register a sign.','t6'],
['Legal person','Personne morale','A company or other entity with legal personality.','t1'],
['Natural person','Personne physique','A human being, as holder of rights.','t1'],
['Court of Justice of the European Union','Cour de justice de l’Union européenne','The EU’s highest court (CJEU), interpreting EU law.','t2',['CJEU']],
['General Court of the European Union','Tribunal de l’Union européenne','EU court hearing appeals against EUIPO decisions.','t2',['General Court']],
['Exhaustion of rights','Épuisement des droits','Goods first put on the EEA market by the owner or with consent can be resold freely.','t7',['exhaustion']],
['Priority right','Droit de priorité','6 months after a first filing to file abroad with the same date (Paris Convention).','t6',['priority']]
];
const GLOSS=GL_ROWS.map(([t,fr,d,topic,alias])=>({t,d:`${d} <i>FR: ${fr}</i>`,topic,alias}));

/* ---------- v2: generators ---------- */
const MARKS=[{m:'Vuitton',g:'bags',sim:'Vouton',sg:'wallets',dg:'cars',rep:true},{m:'Ball',g:'copy services',sim:'Bell',sg:'printing services',dg:'restaurants',rep:false},{m:'Zorba',g:'yoghurts',sim:'Zorbo',sg:'desserts',dg:'tyres',rep:false},{m:'Lumina',g:'lamps',sim:'Lumena',sg:'light bulbs',dg:'insurance',rep:false},{m:'Kestrel',g:'bicycles',sim:'Kestral',sg:'scooters',dg:'perfumes',rep:true},{m:'Orvane',g:'cosmetics',sim:'Orvana',sg:'perfumes',dg:'software',rep:true}];
const CASES5=['Double identity (Art. 5(1)(a))','Likelihood of confusion (Art. 5(1)(b))','Reputed mark (Art. 5(2))','No conflict'];
const PROVE=['An adverse effect on a function of the mark (Arsenal)','A likelihood of confusion, global assessment (Sabel, Canon)','A link in the public’s mind + unfair advantage or detriment','Nothing: the later sign is free to use'];
const GENS=[
{kind:'gen',id:'g-t6-fees',topic:'t6',title:'Filing fees: INPI and EUIPO',blurb:'Fees by number of classes, step by step',levels:['INPI','EUIPO','Both offices'],
 gen:(u,lv)=>({lv,n:u.int(1,lv===0?6:8)}),
 q:v=>`<p>A client files a trademark for <b>${v.n}</b> Nice class${v.n>1?'es':''}${v.lv===0?' at the INPI (France)':v.lv===1?' at the EUIPO (EU trademark)':', and compares a French filing (INPI) with an EU trademark (EUIPO)'}.</p>`,
 parts:v=>(v.lv!==1?[{label:'INPI fee (€)',answer:v=>feeFR(v.n),tol:0}]:[]).concat(v.lv?[{label:'EUIPO fee (€)',answer:v=>feeEU(v.n),tol:0}]:[]).concat(v.lv===2?[{label:'Extra cost of the EU trademark (€)',answer:v=>feeEU(v.n)-feeFR(v.n),tol:0}]:[]),
 steps:v=>{const st=[];if(v.lv!==1)st.push(`INPI: €190 for the first class + €40 × ${v.n-1} extra class${v.n-1===1?'':'es'} = <b>€${fmt(feeFR(v.n))}</b>.`);
   if(v.lv)st.push(`EUIPO: €850 for the first class${v.n>=2?' + €50 for the second':''}${v.n>=3?` + €150 × ${v.n-2} (classes 3 to ${v.n})`:''} = <b>€${fmt(feeEU(v.n))}</b>.`);
   if(v.lv===2)st.push(`Difference: ${fmt(feeEU(v.n))} − ${fmt(feeFR(v.n))} = <b>€${fmt(feeEU(v.n)-feeFR(v.n))}</b>, for protection in 27 countries instead of one: worth it as soon as the client targets several EU countries.`);return st}},
{kind:'gen',id:'g-t6-dates',topic:'t6',title:'Deadlines: priority, opposition, renewal, non-use',blurb:'Dates of a trademark’s life, from the filing date',
 gen:u=>{const f={y:u.int(2024,2028),m:u.int(0,11),d:u.int(1,28)},eu=u.int(0,1),pub=addD(f,u.int(20,70)),reg=addM(pub,u.int(4,8));
   const pri=addM(f,6),opp=addM(pub,eu?3:2),ren=addM(f,120),rev=addM(reg,60);
   return {f,eu,pub,reg,pri,opp,ren,rev,o1:opts(u,ds(pri),[ds(addM(f,3)),ds(addM(f,12)),ds(addM(f,2))]),o2:opts(u,ds(opp),[ds(addM(pub,eu?2:3)),ds(addM(pub,6)),ds(addM(f,eu?3:2))]),o3:opts(u,ds(ren),[ds(addM(f,60)),ds(addM(f,240)),ds(addM(reg,120))]),o4:opts(u,ds(rev),[ds(addM(reg,36)),ds(addM(reg,120)),ds(addM(f,24))])}},
 q:v=>`<p>A client files a${v.eu?'n EU':' French'} trademark application at the <b>${v.eu?'EUIPO':'INPI'}</b> on <b>${ds(v.f)}</b>. It is published on ${ds(v.pub)} and registered on ${ds(v.reg)}. Assume the mark is never used after registration.</p>`,
 parts:[{label:'Last day to file abroad with the priority date',type:'choice',o:v=>v.o1.o,a:v=>v.o1.a},{label:'Last day for a third party to oppose',type:'choice',o:v=>v.o2.o,a:v=>v.o2.a},{label:'Renewal due (end of protection if not renewed)',type:'choice',o:v=>v.o3.o,a:v=>v.o3.a},{label:'From when can a third party seek revocation for non-use?',type:'choice',o:v=>v.o4.o,a:v=>v.o4.a}],
 steps:v=>[`Priority (Art. 4 Paris Convention): <b>6 months</b> from the first filing → <b>${ds(v.pri)}</b>.`,`Opposition: ${v.eu?'<b>3 months</b> (EUIPO)':'<b>2 months</b> (INPI)'} from the publication → <b>${ds(v.opp)}</b>.`,`Duration: <b>10 years</b> from the filing date → renewal due on <b>${ds(v.ren)}</b>, renewable without limit.`,`Revocation: no genuine use for <b>5 years</b> after registration → from <b>${ds(v.rev)}</b>. ${OUT} the exact counting rules of each office (end of month, working days) are not in the slides.`]},
{kind:'gen',id:'g-t5-conflict',topic:'t5',title:'Relative grounds: which case of Art. 5?',blurb:'Compare signs and goods, pick the case and what must be proved',
 gen:u=>{const M=u.pick(MARKS),s=u.int(0,2),g=u.int(0,2),rep=M.rep;return {M,s,g,rep,sign:[M.m,M.sim,u.pick(['Tavolo','Norrik','Pimento'])][s],goods:[M.g,M.sg,M.dg][g]}},
 q:v=>`<p>Earlier registered mark <b>“${v.M.m}”</b> for ${v.M.g}${v.rep?' (a <b>reputed</b> mark)':' (not reputed)'}. A competitor starts using <b>“${v.sign}”</b> for ${v.goods}.</p>`,
 parts:[{label:'Which case applies?',type:'choice',o:CASES5,a:v=>v.s===2?3:v.s===0&&v.g===0?0:v.g<2?1:v.rep?2:3},{label:'What must the owner also show?',type:'choice',o:PROVE,a:v=>v.s===2?3:v.s===0&&v.g===0?0:v.g<2?1:v.rep?2:3}],
 steps:v=>{const k=v.s===2?3:v.s===0&&v.g===0?0:v.g<2?1:v.rep?2:3;return [`Signs: “${v.M.m}” vs “${v.sign}” → <b>${['identical','similar','different'][v.s]}</b>${v.s===1?' (visual and aural similarity, imperfect recollection)':''}.`,`Goods: ${v.M.g} vs ${v.goods} → <b>${['identical','similar (nature, users, complementarity)','different'][v.g]}</b>.`,
   [`Identical sign for identical goods: <b>double identity</b>; the owner must show an adverse effect on a function of the mark (Arsenal), usually the origin function.`,`Similar sign and/or similar goods: <b>likelihood of confusion</b>, assessed globally (Sabel, Canon, Lloyd).`,`Different goods: specialty would normally protect the newcomer, but the earlier mark is <b>reputed</b>: the owner must show a link and an unfair advantage or a detriment to its distinctiveness or repute.`,v.s===2?'The signs are different: <b>no conflict</b>, whatever the goods.':`Different goods and the earlier mark is not reputed: <b>no conflict</b> (principle of specialty).`][k]]}},
{kind:'gen',id:'g-t4-abs',topic:'t4',title:'Absolute grounds: can this sign be registered?',blurb:'Cases of the course and new ones: ground, representation, outcome',
 gen:u=>{const b=u.pick(BANK);return {b}},
 q:v=>`<p>Your client wants to register <b>${v.b[0]}</b> for <b>${v.b[1]}</b>.</p>`,
 parts:[{label:'Outcome on the absolute grounds',type:'choice',o:['Registrable','Refused, unless distinctiveness is acquired through use','Refused'],a:v=>v.b[2]===0?0:v.b[4]?1:2},{label:'Main ground (or none)',type:'choice',o:GROUNDS,a:v=>v.b[2]},{label:'Representation to file',type:'choice',o:REPRS,a:v=>v.b[3]}],
 steps:v=>[`<b>Facts</b>: ${v.b[0]} for ${v.b[1]}. <b>Question</b>: is it a valid trademark (absolute grounds)?`,`<b>Rules</b>: Art. 3 Directive (a sign, represented clearly and precisely, distinctive); Art. 4(1) (descriptive, generic, functional shapes, unlawful, deceptive signs); Sieckmann.`,
   `<b>Application</b>: ${v.b[5]}. Representation: ${REPRS[v.b[3]]}.`,`<b>Conclusion</b>: ${v.b[2]===0?'registrable on the absolute grounds; next, check prior rights (relative grounds).':v.b[4]?'refused as such; it could be registered if the client proves acquired distinctiveness (surveys, market share, advertising).':'refused: '+GROUNDS[v.b[2]].toLowerCase()+'.'} <i>Source: ${v.b[6]}.</i>`]}
];

/* ---------- v2: tools ---------- */
const TOOLS=[
{kind:'tree',id:'tr-t4-abs',topic:'t4',title:'Can this sign be registered? (absolute grounds)',blurb:'The order of the analysis, with cases from the course',start:'q1',
 nodes:{q1:{q:'Is it a precise sign (not a mere concept covering every shape or variant)?',o:[{l:'Yes',to:'q2'},{l:'No',to:'r1',why:'Dyson: a concept is not a sign.'}]},
  q2:{q:'Can it be represented clearly, precisely and durably on the register (Sieckmann)?',o:[{l:'Yes',to:'q3'},{l:'No',to:'r2',why:'Smells and tastes cannot be represented today.'}]},
  q3:{q:'For the goods applied for, is it descriptive, generic, customary or devoid of distinctive character?',o:[{l:'Yes',to:'q3b'},{l:'No',to:'q4',why:'Fanciful, arbitrary or suggestive signs are distinctive.'}]},
  q3b:{q:'Has it acquired distinctiveness through use (surveys, market share, advertising)?',o:[{l:'Yes',to:'q4',why:'Acquired distinctiveness cures grounds (b) to (d).'},{l:'No',to:'r3'}]},
  q4:{q:'Does it consist exclusively of a shape (or characteristic) resulting from the nature of the goods, needed for a technical result, or giving substantial value?',o:[{l:'Yes',to:'r4',why:'Excluded even after long use (Lego).'},{l:'No',to:'q5'}]},
  q5:{q:'Is it contrary to public policy or morality, deceptive, or a protected emblem without consent?',o:[{l:'Yes',to:'r5'},{l:'No',to:'r6'}]},
  r1:{end:'Refused: not a sign but a concept (Dyson)'},r2:{end:'Refused: no valid representation (smell of ripe strawberries)'},r3:{end:'Refused as descriptive / non-distinctive (Art. 4(1)(b)–(d)), unless distinctiveness is acquired'},
  r4:{end:'Refused: excluded shape (Art. 4(1)(e)); acquired distinctiveness cannot help'},r5:{end:'Refused: unlawful or deceptive sign (Art. 4(1)(f)–(h))'},r6:{end:'Valid on the absolute grounds: now check prior rights (relative grounds)'}},
 gen:u=>{const b=u.pick(BANK);return {text:`${b[0]} for ${b[1]} <small>(${b[6]})</small>`,path:pathOf(b),why:b[5]}}},
{kind:'tree',id:'tr-t-action',topic:'t7',title:'Which action or procedure?',blurb:'Opposition, cancellation, revocation, infringement, unfair competition, licence or assignment',start:'q1',
 nodes:{q1:{q:'What does your client want?',o:[{l:'Register a new sign',to:'r_file'},{l:'Stop a competitor’s trademark application that conflicts with the client’s earlier right',to:'r_opp'},{l:'Remove a trademark that is already registered',to:'q2'},{l:'Stop someone using a sign in trade',to:'q3'},{l:'Let someone else use the mark, or sell it',to:'q4'}]},
  q2:{q:'Why should the mark disappear?',o:[{l:'A condition of validity was missing when it was registered',to:'r_null'},{l:'Since registration it has not been used for 5 years, or it became generic',to:'r_rev'}]},
  q3:{q:'Does the client own a registered trademark covering the sign?',o:[{l:'Yes',to:'r_inf'},{l:'No: only a company name, trade name, domain name or unregistered mark',to:'r_uc'}]},
  q4:{q:'Should the client remain the owner?',o:[{l:'Yes, temporary use against royalties',to:'r_lic'},{l:'No, permanent transfer',to:'r_ass'}]},
  r_file:{end:'Check the absolute grounds, search prior rights (TMview…), choose the office (INPI, EUIPO, Madrid) and classes, then file',why:'Session 6.'},
  r_opp:{end:'Opposition on relative grounds: 2 months (INPI) or 3 months (EUIPO) after publication; only the prior owner',why:'Session 6.'},
  r_null:{end:'Cancellation (nullité): no time limit, but 5 years of known tolerance bar the prior owner (acquiescence)',why:'Session 6.'},
  r_rev:{end:'Revocation (déchéance): non-use for 5 years or loss of distinctiveness',why:'Session 6.'},
  r_inf:{end:'Infringement action: one of the 3 cases of Art. 5; customs, saisie-contrefaçon (sue within 15 days), civil and criminal remedies',why:'Session 8.'},
  r_uc:{end:'Unfair competition (tort): prove a fault, a damage and a causal link',why:'Sessions 1 and 8.'},
  r_lic:{end:'Licence agreement: mark, territory, goods, duration, royalties, exclusive / sole / non-exclusive, governing law',why:'Session 8.'},
  r_ass:{end:'Assignment: registered transfer, lump-sum price, warranty of quiet possession',why:'Session 8.'}},
 cases:[{text:'Sandra wants to sell furniture and audio-video devices under her new brand in Paris.',path:{q1:0}},{text:'“Vouton” for bags has just been published at the EUIPO; your client owns “Vuitton”.',path:{q1:1}},
  {text:'A registered mark “Leather” for leather bags should never have been accepted.',path:{q1:2,q2:0}},{text:'A competitor’s mark registered 7 years ago has never been used.',path:{q1:2,q2:1}},
  {text:'Counterfeit bags bearing your client’s registered mark are sold at a market.',path:{q1:3,q3:0}},{text:'A rival copies your client’s domain name; no trademark was filed.',path:{q1:3,q3:1}},
  {text:'Your client wants a Spanish distributor to use the mark for 5 years against royalties.',path:{q1:4,q4:0}},{text:'Your client sells the mark to a competitor for €2 million.',path:{q1:4,q4:1}}]},
{kind:'tree',id:'tr-t6-route',topic:'t6',title:'Where should the client file?',blurb:'INPI, EUIPO, Madrid and the 6-month priority',start:'q1',
 nodes:{q1:{q:'Which countries does the client need?',o:[{l:'France only',to:'r_fr'},{l:'Several EU Member States only',to:'r_eu'},{l:'EU countries and non-EU countries',to:'q2'},{l:'Non-EU countries only',to:'r_mad'}]},
  q2:{q:'Are the non-EU filings made within 6 months of the first filing?',o:[{l:'Yes',to:'r_prio'},{l:'No, later (in a few years)',to:'r_late'}]},
  r_fr:{end:'INPI: €190 + €40 per extra class'},r_eu:{end:'One EU trademark at the EUIPO: 27 Member States, from €850'},
  r_prio:{end:'EU (or national) mark first, then the Madrid System designating the other countries with the priority date'},
  r_late:{end:'Madrid later by subsequent designation, but without priority: a conflicting mark filed meanwhile wins'},
  r_mad:{end:'A base mark at the home office, then the Madrid System (one form, fees per country), or national filings'}},
 cases:[{text:'Champollion TM1: Germany, Poland, Austria, Hungary, Czech Republic.',path:{q1:1}},{text:'Champollion TM2: France, Belgium, Switzerland, Canada, all now.',path:{q1:2,q2:0}},{text:'Champollion TM3: the same EU countries plus Japan and China now; the UK and the US in 4 years.',path:{q1:2,q2:1}},{text:'A bakery with two shops in Lille.',path:{q1:0}},{text:'Sandra: Paris now, then the whole EU and the US soon.',path:{q1:2,q2:0}}]},
{kind:'steps',id:'st-t-method',topic:'t1',title:'Case study method, step by step',blurb:'The five steps of the final exam on the course example (Joe)',...STEPS_JOE_CFG()}
];
function STEPS_JOE_CFG(){return {intro:'<p>Joe, 18, bought a Ferrari for €200 000 with his inheritance. His parents want to give the car back: did Joe have the capacity to contract alone? Write each step, then open the model answer.</p>',
 steps:['<b>1. Classification of facts</b>: Joe, who is 18, made a contract of sale.','<b>2. Legal question</b>: is the contract valid; was Joe capable of making it?','<b>3. Rule of law</b>: a contract is valid if the parties have capacity, give a non-vitiated consent and its content is certain and lawful; a person under 18 or adjudicated mentally incompetent cannot contract.','<b>4. Application</b>: Joe is over 18 and, as far as we know, has not been adjudicated incompetent.','<b>5. Conclusion</b>: Joe had capacity; the contract is valid (unless another condition fails); the parents cannot give the car back.']}}

/* ---------- v2: sorting exercises, case, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-t3-sortgrounds',topic:'t3',type:'sort',src:'course',title:'Absolute or relative ground?',q:'Sort each obstacle to registration.',cats:['Absolute ground','Relative ground'],
 items:[['The sign is descriptive of the goods','Absolute ground'],['The sign cannot be represented clearly','Absolute ground'],['The sign is deceptive','Absolute ground'],['The shape gives a technical result','Absolute ground'],['An earlier similar mark for similar goods','Relative ground'],['An earlier company name in the same activity','Relative ground'],['An earlier copyright on the logo','Relative ground'],['An earlier reputed mark, even for other goods','Relative ground']]},
{id:'x-t4-sortscale',topic:'t4',type:'sort',src:'course',title:'Scale of distinctiveness for perfumes',q:'Classify each sign for perfumes.',cats:['Fanciful','Arbitrary','Suggestive','Descriptive or generic'],
 items:[['“Zelvoria”','Fanciful','an invented word'],['“Vrimo” (invented word)','Fanciful'],['“Opium”','Arbitrary','a real word unrelated to perfume'],['“Granite”','Arbitrary'],['“Bloom”','Suggestive','evokes flowers and freshness'],['“Velvet Night”','Suggestive'],['“Perfume”','Descriptive or generic'],['“Eau de toilette”','Descriptive or generic'],['“Rose scent”','Descriptive or generic']]},
{id:'x-t6-sortloss',topic:'t6',type:'sort',src:'course',title:'Cancellation or revocation?',q:'Sort each situation.',cats:['Cancellation (nullité)','Revocation (déchéance)'],
 items:[['The sign was descriptive when registered','Cancellation (nullité)'],['An earlier mark existed at filing','Cancellation (nullité)'],['The sign was deceptive from the start','Cancellation (nullité)'],['No genuine use for 5 years','Revocation (déchéance)'],['The mark became the common name of the product','Revocation (déchéance)'],['The mark became misleading through the owner’s use','Revocation (déchéance)']]},
{id:'x-t7-sortaction',topic:'t7',type:'sort',src:'course',title:'Infringement or unfair competition?',q:'Which action protects each sign?',cats:['Trademark infringement','Unfair competition only'],
 items:[['A registered EU trademark','Trademark infringement'],['A registered French trademark','Trademark infringement'],['A company name','Unfair competition only'],['A commercial name','Unfair competition only'],['A domain name','Unfair competition only'],['An unregistered “TM” sign','Unfair competition only'],['A well-known but unregistered mark','Unfair competition only']]},
{id:'x-t1-sortip',topic:'t1',type:'sort',src:'course',title:'Which IP right?',q:'Sort each object.',cats:['Copyright','Design','Patent','Trademark','Geographical indication'],
 items:[['A novel','Copyright'],['A song','Copyright'],['The look of a chair','Design'],['A new battery process','Patent'],['A logo identifying a brand','Trademark'],['Champagne','Geographical indication'],['Bayonne ham','Geographical indication']]},
{id:'x-t5-sandra',topic:'t5',type:'case',src:'course',title:'Sandra’s brand (Session 5 case, self-assessed)',q:'<p>Sandra wants to sell furniture and audio and video devices under her brand. She opens 2 shops in Paris and will soon expand across the EU and to the US. Can the brand be registered as a trademark? (The logo is shown only as an image in the slide: answer with the method.)</p>',
 solution:'<p>Model answer by the site. <b>Facts</b>: a sign to be used for furniture (Nice class 20) and audio/video devices (class 9), in France, then the EU and the US. <b>Question</b>: can it be registered, i.e. is it valid and <b>available</b>? <b>Rules</b>: absolute grounds (Art. 3 and 4 Directive); relative grounds (Art. 5: earlier identical or similar marks for identical or similar goods, reputed marks for any goods; other prior rights: company names, domain names, copyright); territoriality and priority. <b>Application</b>: check the sign is distinctive for furniture and electronics (not descriptive); search TMview, company registers and domain names in France, the EU and the US for identical or similar signs in classes 9 and 20 and for reputed marks; compare signs (visual, aural, conceptual) and goods (nature, users, complementarity). <b>Conclusion</b>: if no conflicting prior right is found, file an <b>EU trademark</b> (covers France and the EU expansion: €850 + €50 for 2 classes = €900) and use the Madrid System for the US within <b>6 months</b> to keep the priority date.</p>'}
);
QUIZ.push(
Q('q57','t1','practice','Why is copyright protected without registration while a trademark must be registered?',['A trademark is a monopoly on a sign in trade that competitors must be able to check on a register','Copyright lasts less long','Trademarks are always foreign','Registration is optional for both'],'The register tells everyone which signs are taken, for which goods and where.'),
Q('q58','t3','practice','Who raises a relative ground of refusal?',['Only the owner of the earlier right','The office systematically','Any consumer','The court on its own motion'],'Opposition or cancellation on relative grounds is in the hands of the prior owner.'),
Q('q59','t3','practice','In a case study, the first step is…',['the classification of facts','the conclusion','quoting the Directive','listing all cases'],'Facts → legal question → rules → application → conclusion.'),
Q('q60','t4','practice','“Apple” for fresh fruit is…',['generic','arbitrary','fanciful','suggestive'],'Distinctiveness depends on the goods: arbitrary for computers, generic for apples.'),
Q('q61','t4','practice','Why are technical shapes excluded even after years of use?',['To avoid a perpetual monopoly on a technical solution that patents only protect for 20 years','Because shapes cannot be represented','Because they are always deceptive','Because they are generic'],'Lego Juris.'),
Q('q62','t5','practice','Very similar signs, goods only moderately similar. Likelihood of confusion?',['Possible: the factors compensate each other (Canon)','Impossible: goods must be identical','Only if the mark is reputed','Only if the Nice class is the same'],'Interdependence of the factors in the global assessment.'),
Q('q63','t5','practice','“Bell” for printing services against an earlier “Ball” for copy services: which case?',['Likelihood of confusion','Double identity','Reputed mark','No conflict'],'Similar sign, similar services.'),
Q('q64','t5','practice','An earlier mark that is NOT reputed and a similar sign used for completely different goods:',['no conflict (principle of specialty)','likelihood of confusion','double identity','always infringement'],'Only reputed marks escape specialty.'),
Q('q65','t6','practice','A client wants protection in Germany, Poland and Austria only. Best route?',['One EU trademark at the EUIPO','Three national filings','The Madrid System only','No filing: Paris Convention'],'One application covers the 27 Member States (Champollion TM1).'),
Q('q66','t6','practice','First filing at the INPI on 15 January. Last day to file in Japan with the same date?',['15 July','15 April','15 March','15 January next year'],'Priority: 6 months.'),
Q('q67','t6','practice','A prior owner has knowingly tolerated a later registered mark for 6 years. Can he still seek cancellation on his prior right?',['No: acquiescence after 5 years','Yes, there is no time limit','Only for revocation','Only at the EUIPO'],'Foreclosure by acquiescence.'),
Q('q68','t7','practice','Centrafarm v Winthrop (1974) is the origin of…',['the exhaustion of trademark rights','the likelihood of confusion','the Sieckmann criteria','the protection of slogans'],'The owner cannot oppose imports of goods put on the market in another Member State with his consent.'),
Q('q69','t7','practice','Consten and Grundig (1966) held that trademark rights…',['cannot be exercised to partition the common market','can block all parallel imports','are only national','are invalid when assigned'],'Existence of the right untouched; its exercise limited by EU competition law.'),
Q('q70','t7','practice','A garage advertises “We repair BMW cars”. Infringement?',['No: honest use indicating the purpose of the service','Yes: double identity','Yes: reputed mark','Only if it uses the logo'],'Exception of honest use.'),
Q('q71','t7','practice','Which damages are NOT available in France for infringement?',['Punitive damages','Lost earnings','The infringer’s profits','Moral prejudice'],'No punitive damages in France.')
);
CARDS.push(
C('c35','t3','Order of a trademark case','absolute grounds (sign, representation, distinctiveness, lawfulness) → relative grounds (prior rights) → filing route'),
C('c36','t3','Case study method','facts → legal question → rules (articles + cases) → application → conclusion'),
C('c37','t4','Grounds curable by use','descriptive, generic/customary, devoid of distinctiveness: yes · functional shapes: never'),
C('c38','t4','Why refuse descriptive signs','they say nothing about origin and must stay free for all competitors'),
C('c39','t5','Art. 5 decision','different signs → no conflict · identical + identical → double identity · similar → confusion · different goods → only if reputed'),
C('c40','t5','Interdependence (Canon)','a lower similarity of goods can be offset by a higher similarity of signs, and vice versa'),
C('c41','t6','Filing route','France: INPI · EU only: EUIPO · EU + others: EU mark + Madrid within 6 months (priority)'),
C('c42','t6','Key periods','priority 6 months · opposition 2 m (FR) / 3 m (EU) · 10 years renewable · non-use 5 years · acquiescence 5 years'),
C('c43','t7','Exhaustion','goods first put on the EEA market by the owner or with consent can be resold (Centrafarm 1974)'),
C('c44','t7','Consten and Grundig (1966)','trademark rights cannot be used to partition the common market (existence vs exercise)'),
C('c45','t7','Which action?','registered mark → infringement · other signs → unfair competition (fault, damage, causal link)'),
C('c46','t7','Sanctions in France','injunction, destruction, damages (no punitive), publication · criminal €400 000 / 4 years')
);

const MQ=(id,topic,q,o)=>({id,topic,type:'mcq',pts:1,q,o,a:0});
const MOCKS=[
{id:'m1',title:'Mock MCQ',exam:'mid',scope:'Sessions 1–6',duration:30,total:20,calculator:'No material',
 summary:'20 MCQs on IP rights, categories, representation, distinctiveness, availability and registration.',
 intro:'<p>Format chosen by the site for the midterm MCQ (25%): 20 questions, 1 point each, no negative marking assumed.</p>',
 sections:[{title:'MCQs',items:[
  MQ('a1','t1','Which right requires no registration?',['Copyright','Trademark','Patent','Design']),
  MQ('a2','t1','Limoges porcelain is protected as:',['a geographical indication for industrial and craft products','a PDO','a collective mark','a design']),
  MQ('a3','t1','A merchant’s commercial name is copied in his town. He sues for:',['unfair competition','trademark infringement','patent infringement','breach of a licence']),
  MQ('a4','t2','The Paris Convention dates from:',['1883','1989','2015','1978']),
  MQ('a5','t2','A guarantee mark can be applied for by:',['anyone not supplying the certified goods','only producers of the goods','only public bodies','members of an association']),
  MQ('a6','t2','Which function is called “essential”?',['Guarantee of origin','Advertising','Investment','Quality']),
  MQ('a7','t3','A colour mark requires:',['a reproduction and an internationally recognized code','a sample on paper','a word description','nothing special']),
  MQ('a8','t3','“The notes E, D#, E, D#, E, B, D, C, A” is:',['not a valid representation of a sound mark','a valid sound mark','a valid word mark','a motion mark']),
  MQ('a9','t3','Which case concerns a transparent vacuum-cleaner bin?',['Dyson','Lego Juris','Libertel','Sabel']),
  MQ('a10','t4','“Bag” for bags is:',['generic','fanciful','arbitrary','suggestive']),
  MQ('a11','t4','“Apple” for computers is:',['arbitrary','descriptive','generic','fanciful']),
  MQ('a12','t4','Lindt’s gold bunny was refused because:',['the shape does not depart significantly from the sector’s norms','it is deceptive','gold cannot be registered','it is a patent']),
  MQ('a13','t4','A shape giving substantial value to the goods is:',['excluded, to avoid a perpetual monopoly normally given by design law','always registrable','registrable after 5 years','a collective mark']),
  MQ('a14','t5','Likelihood of confusion includes:',['the likelihood of association','any mental link','identity of classes','price comparison']),
  MQ('a15','t5','A reputed mark is protected even for:',['dissimilar goods, if there is a link and unfair advantage or detriment','any use worldwide','unregistered signs','descriptive uses']),
  MQ('a16','t5','“BALL print” vs prior “Ball” for copy services: the key is that',['“Ball” is the dominant and distinctive element','“print” is dominant','the signs are identical','the goods are different']),
  MQ('a17','t6','An EUIPO filing in 3 classes costs:',['€1 050','€950','€900','€1 150']),
  MQ('a18','t6','Who raises relative grounds before the office?',['The owner of the prior right, by opposition','The office on its own initiative','The customs','The applicant']),
  MQ('a19','t6','A French mark filed on 1 March can be filed in Japan with the same date until:',['1 September','1 June','1 March next year','never']),
  MQ('a20','t6','A trademark not used for 5 years can be:',['revoked','cancelled for lack of representation','renewed for free','assigned automatically'])]}]},
{id:'m2',title:'Mock final: case study',exam:'final',scope:'Sessions 1–8',duration:90,total:20,calculator:'No material',
 summary:'Two case studies to solve with the course method (facts, question, rule, application, conclusion).',
 intro:'<p>The final exam is an open question (40%). Cases and marking written by the site, following the course method.</p>',
 sections:[{title:'Case studies',items:[
  {id:'c1',topic:'t5',type:'written',pts:10,title:'Case 1 · “NOVALUX”',lines:14,q:'<p>Inès wants to register “NOVALUX” as an EU trademark for lamps and lighting installation services, and to open shops in Lille and Brussels. A search on TMview shows a prior EU mark “NOVALUCE” registered in 2019 for lamps by an Italian company, well known among lighting professionals. Can Inès register and use her sign? What should she do?</p>',
   rubric:[{c:'Facts qualified (EU application, prior EU mark, identical/similar goods)',pts:1.5},{c:'Legal question stated (relative ground / infringement: likelihood of confusion)',pts:1.5},{c:'Rule: Art. 5 Directive, 3 cases; Sabel/Canon global assessment; Lloyd relevant public',pts:2.5},{c:'Application: visual/aural/conceptual similarity (NOVA-, -LUX/-LUCE = light), identical goods, complementary services, distinctiveness of the prior mark',pts:3},{c:'Conclusion + advice: high risk of opposition within 3 months and of infringement; choose another sign or negotiate a coexistence/licence',pts:1.5}],
   solution:'<p>Model: Inès’s application conflicts with a prior EU mark for identical goods (lamps) and similar/complementary services. Question: is there a likelihood of confusion (Art. 5(1)(b))? Rule: global assessment (Sabel, Canon) of signs, goods, distinctiveness, relevant public (Lloyd). Application: same prefix NOVA-, endings LUX/LUCE both evoke light (conceptual and aural similarity); identical goods; the prior mark is distinctive among professionals; the average consumer relies on an imperfect recollection. Conclusion: likelihood of confusion is likely; the Italian owner can oppose within 3 months of publication or later sue for infringement. Advice: choose a different sign after a search, or negotiate a coexistence agreement or licence.</p>'},
  {id:'c2',topic:'t7',type:'written',pts:10,title:'Case 2 · Counterfeits and licence',lines:14,q:'<p>“KORVA”, a French registered trademark for sneakers, discovers that a Lille shop sells sneakers bearing “KORVA” that it never manufactured. The shop also sells genuine KORVA sneakers bought in Germany. KORVA also wants to let a Spanish company make and sell KORVA sneakers in Spain only, while continuing to sell its own. Advise KORVA.</p>',
   rubric:[{c:'Identifies double identity for the fakes and the adverse effect on the origin function',pts:2},{c:'Exhaustion: genuine sneakers first sold in the EEA with consent cannot be blocked (unless altered)',pts:2},{c:'Procedure: saisie-contrefaçon, sue within 15 days, specialized tribunal judiciaire (Lille), customs',pts:2},{c:'Remedies: injunction, destruction, damages (no punitive), publication; criminal up to €400 000 / 4 years',pts:2},{c:'Licence: sole licence (owner keeps using) for Spain, with clauses: registration number, territory, goods, duration, royalties, governing law — and checks that the French mark covers Spain (needs an EU or Spanish mark)',pts:2}],
   solution:'<p>Model: the fakes are a sign identical to the mark for identical goods that affects the origin function (double identity) → infringement. The genuine sneakers bought in Germany were put on the EEA market with consent → exhaustion, KORVA cannot oppose resale unless altered. Procedure: obtain a saisie-contrefaçon with prima facie evidence, sue within 15 days before the tribunal judiciaire of Lille; remedies: injunction, destruction, damages, publication; criminal sanctions possible. Licence: a <b>sole</b> licence for Spain (owner keeps selling) with registration number, territory, goods, duration, royalties, governing law clause. Warning: a French mark does not cover Spain (territoriality): KORVA needs an EU or Spanish mark first.</p>'}]}]}];

const seed=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const mix=(x,key)=>{if(!x||x.type&&x.type!=='mcq'||!Array.isArray(x.o))return;let r=seed(key);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};
  const idx=x.o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  const pos=i=>idx.indexOf(i);x.a=Array.isArray(x.a)?x.a.map(pos).sort((p,q)=>p-q):pos(x.a);x.o=idx.map(i=>x.o[i])};
QUIZ.forEach(q=>mix(q,q.id));
EXERCISES.forEach(x=>{mix(x,x.id);(x.parts||[]).forEach((p,i)=>mix(p,x.id+'-'+i))});
MOCKS.forEach(m=>m.sections.forEach(s=>s.items.forEach(x=>{mix(x,m.id+x.id);(x.parts||[]).forEach((p,i)=>mix(p,m.id+x.id+'-'+i))})));

registerSubject({
  slug:'trademark-law',
  name:'Trademark Law',
  short:'Trademark',
  tagline:'IÉSEG Bachelor 2 · MCQ 25% + case study 25% + final open question 40%',
  status:'Sessions 1–8 done · layered sheets, 4 generators, 4 case-study tools · 2 mocks',
  exams:[{id:'mid',label:'Midterm MCQ',scope:'Sessions 1–6'},{id:'final',label:'Final exam',scope:'Sessions 1–8'}],
  topics:[
    {id:'t1',label:'Session 1',title:'IP rights and other distinctive signs',short:'S1 IP rights',exam:'mid',summary:'Copyright, design, patent, GI, trademark; company, commercial and domain names',sheet:SHEETS.t1},
    {id:'t2',label:'Session 2',title:'Categories and functions',short:'S2 Functions',exam:'mid',summary:'Sources, collective/guarantee/individual marks, functions',sheet:SHEETS.t2},
    {id:'t3',label:'Session 3',title:'A sign capable of representation',short:'S3 Representation',exam:'mid',summary:'Dyson, Sieckmann, colour, sound, smell',sheet:SHEETS.t3},
    {id:'t4',label:'Session 4',title:'A distinctive and lawful sign',short:'S4 Distinctive',exam:'mid',summary:'Distinctiveness, excluded signs, shapes, deceptive and unlawful signs',sheet:SHEETS.t4},
    {id:'t5',label:'Session 5',title:'An available sign',short:'S5 Available',exam:'final',summary:'Relative grounds, likelihood of confusion, reputed marks',sheet:SHEETS.t5},
    {id:'t6',label:'Session 6',title:'Registration and loss',short:'S6 Registration',exam:'final',summary:'Territoriality, fees, priority, Madrid, opposition, cancellation, revocation',sheet:SHEETS.t6},
    {id:'t7',label:'Session 8',title:'Using and protecting the trademark',short:'S8 Protection',exam:'final',summary:'Licence, assignment, infringement, remedies, unfair competition',sheet:SHEETS.t7}],
  cheatsheet:SHEETS.cheat,
  glossary:GLOSS,
  overview:{
    eyebrow:'Trademark Law',
    title:'Trademark law from the sign to the lawsuit',
    lede:'Built from the common MyCourses material of TRADEMARK LAW 2311 (coordinator Elsa Mimoun): the preliminary remarks, the Session 1–6 and 8 slides, the case law list, the glossary and the case study method.',
    blurbs:{cheat:'All the rules, the cases and the case-study method on one page',exercises:'Match cases, grounds and deadlines, compute filing fees, solve the course cases',cards:'Cases and definitions',mocks:'An MCQ midterm and a case study final'},
    html:`<h3>How you are assessed</h3>
  <ul><li>Participation 10% · team case study 25% (Session 8) · midterm MCQ 25% · <b>final exam: open question 40%</b> (Preliminary remarks; same weights in the 2023-24 course outline). Retake: a case study.</li>
  <li>For case studies, always follow the method: facts → legal question → rule → application → conclusion.</li></ul>
  <h3>How to train for the case study (40%)</h3>
  <ol><li>Read each sheet: Essential box, then “Understand” (the <b>why</b> of each rule), the cases, the trap; answer “Your turn”.</li>
  <li><b>Tools</b>: follow the method on the Joe example, then train on the decision trees: “Can this sign be registered?” (new case each time), “Which action?”, “Where to file?”.</li>
  <li><b>Generators</b>: absolute grounds (ground, representation, outcome), the three cases of Art. 5, fees and deadlines, with a model reasoning step by step.</li>
  <li>Then write the course cases (Georges, Linda, Bill, Sarah, Sandra, Champollion) in full and compare with the model answers.</li></ol>
  <h3>Sources and limits</h3>
  <ul><li>Two cases of the case-law list are not developed in the common slides: <b>Consten and Grundig (1966)</b> and <b>Centrafarm v Winthrop (1974)</b>; the Session 8 sheet summarizes them (summary by the site).</li>
  <li>MyCourses has one section per teacher and none is restricted to group L10: the site uses the coordinator’s common slides. Your own teacher may have added examples.</li>
  <li>Session 7 is not in the common material (probably the midterm or the DINO project).</li>
  <li>Model answers to the course cases (Georges, Linda, Bill, Sarah, Sandra, Champollion) are written by the site; the slides give no solutions.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  modules:[
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'Absolute grounds on cases of the course and new ones, the three cases of Art. 5, filing fees and deadlines: new case every time, model reasoning step by step (facts, question, rules, application, conclusion).'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'The case-study method and three decision trees',intro:'The five steps of the case study on the course example, then three decision trees to practise on cases: is the sign registrable, which action or procedure, which filing route.'}}],
  mocksNote:NOTE('<b>Mocks written by the site.</b> No past paper is available on MyCourses; formats follow the assessment described in the preliminary remarks.')
});
})();
