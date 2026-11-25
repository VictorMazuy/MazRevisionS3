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
<p>IP rights aim to promote technological innovation, art and culture, and fair competition. Two families: <b>literary and artistic property</b> (copyright) and <b>industrial property</b> (designs, patents, trademarks, PDO/PGI). Infringing any IP right is both a civil and a criminal offence.</p>
${T(['Right','Protects','Conditions','Duration'],[
['Copyright','a literary, dramatic, musical or artistic work','original; <b>no registration</b>','70 years after the author’s death (natural person) or after disclosure (legal person)'],
['Design','the appearance / shape of a product','new, individual character; registration','5 years, renewable up to 25 years'],
['Patent','an invention (product or process)','new, inventive step (not obvious), industrial application; registration','20 years'],
['Geographical indication','a product linked to a place (PDO: Champagne; PGI: Bayonne ham; GIPICP: Limoges porcelain)','production steps / quality linked to the area','—'],
['Trademark','a sign distinguishing goods or services of one undertaking','distinctive, representable, available, lawful; registration','10 years, renewable indefinitely']])}
<h3>Other distinctive signs</h3>
<p>All distinctive signs (trademarks included) are limited by the <b>principle of specialty</b>: a sign is only protected for the goods and services for which it is used or registered (“Sandro” only for fashion). The other signs have no common legislation and are protected only by a <b>tort lawsuit for unfair competition</b>, not an IP infringement action.</p>
${T(['Sign','What it is','Protection'],[['Registered company name','the name of the legal person','against an identical/similar sign for an identical/similar activity in France creating confusion'],['Commercial name','the name under which a merchant trades (door, products)','same, but only in the merchant’s geographical area'],['Domain name','the address of a website (www.ieseg.fr)','same, where the website is active']])}
${TRAP('A company name or a domain name is not a trademark: its owner sues for unfair competition (tort), not for trademark infringement (contrefaçon).')}
`;

SHEETS.t2=`
<div class="eyebrow">Session 2</div><h2>Sources, categories and functions of trademarks</h2>
<p class="lede">Goal: know the legal sources, the three categories of trademarks, the definition of Article 3 of the Directive and the functions of a trademark recognized by the CJEU.</p>
<h3>Sources</h3>
<ul><li><b>Directive (EU) 2015/2436</b> (approximates national laws, must be transposed) ≠ <b>Regulation (EU) 2017/1001</b> on the EU trademark (directly applicable). Directive 2004/48 on the enforcement of IP rights.</li>
<li>WIPO: <b>Paris Convention</b> (1883) and <b>Madrid Protocol</b> (1989).</li></ul>
<h3>Three categories</h3>
${T(['Category','Function','Who can apply'],[['Collective mark','distinguishes goods/services of members of an association from non-members','associations of manufacturers, producers, traders, service providers, or public-law legal persons (EU fee €1 500)'],['Guarantee / certification mark','guarantees that goods/services of a user (not the owner) meet standards set by the owner','anyone who does not supply goods/services of the kind certified (EU fee €1 500)'],['Individual mark','distinguishes the goods/services of one undertaking','any person']])}
<p>CSR: collective and guarantee marks let companies signal sustainability commitments, while trademark law blocks misleading (deceptive) claims.</p>
${F('Article 3 Directive: a trademark may consist of any signs (words, personal names, designs,\nletters, numerals, colours, shape of goods or packaging, sounds) capable of\n(a) distinguishing the goods or services of one undertaking from those of others, and\n(b) being represented on the register clearly and precisely.')}
<h3>Functions (case law)</h3>
${T(['Case','Holding'],[['Hoffmann-La Roche (CJEU 1978, C-102/77)','<b>essential function</b>: guarantee the identity of origin of the product to the consumer'],['Arsenal (CJEU 2002, C-206/01)','the owner may only prohibit a use that can affect his interests having regard to the functions of the mark'],['L’Oréal v Bellure (CJEU 2009, C-487/07)','other functions: guarantee of <b>quality</b>, <b>communication</b>, <b>investment</b>, <b>advertising</b>'],['Google France (CJEU 2010, C-236/08 to C-238/08)','the owner can prohibit an identical use for identical goods that adversely affects the <b>advertising</b> function']])}
`;

SHEETS.t3=`
<div class="eyebrow">Session 3</div><h2>A sign capable of representation</h2>
<p class="lede">Goal: check the first two absolute conditions (any sign, represented on the register) and know how each type of mark must be represented.</p>
${F('Absolute grounds (definition of a trademark):\n1. any sign  2. capable of being represented on the register  3. capable of being distinctive\nRelative grounds: the sign must not infringe prior rights of third parties')}
<ul><li><b>Dyson (CJEU 2007, C-321/03)</b>: a transparent collecting bin of a vacuum cleaner, in all conceivable shapes, is a mere <b>concept</b>, not a sign.</li>
<li>Old Directive 2008/95 required a <b>graphic</b> representation; the 2015 Directive only requires a representation allowing authorities and the public to determine the clear and precise subject matter.</li>
<li><b>Sieckmann (CJEU 2002, C-273/00)</b>: the representation must be <b>clear, precise, self-contained, easily accessible, intelligible, durable and objective</b> (the “Sieckmann criteria”).</li></ul>
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
<p>Scale of distinctiveness: <b>fanciful</b> (invented word) &gt; <b>arbitrary</b> (real word unrelated to the goods) &gt; <b>suggestive / evocative</b> &gt; not distinctive. Distinctiveness is assessed for the goods and services applied for (specialty) and can be <b>acquired through use</b> (surveys, market share, advertising, turnover) or lost.</p>
<h3>Excluded signs (Article 4(1) Directive)</h3>
${T(['Ground','Example'],[
['(b) devoid of distinctive character','a basic shape or a colour commonly used for the goods'],
['(c) descriptive: kind, quality, quantity, purpose, value, geographical origin, time of production','“Leather” for leather bags'],
['(d) customary / generic','“Bag” for bags; a usual symbol for the goods'],
['(e) shape or other characteristic resulting from the nature of the goods, necessary to obtain a technical result, or giving substantial value','Lego brick (technical): invalid'],
['(f)–(g) contrary to public policy or morality; deceptive (nature, quality, origin)','a sign suggesting a false origin or composition'],
['(h) flags, state emblems, official badges without consent','a national flag in a logo']])}
<p>Why exclude shapes (e)? To avoid a perpetual trademark monopoly on technical solutions (patent: limited in time) or on aesthetic features (design: limited in time).</p>
${T(['Case','Lesson'],[
['Apple (CJEU 2014, C-421/13)','the layout of a flagship store can be registered as a trademark for services if it is distinctive'],
['Audi “Vorsprung durch Technik” (CJEU 2010, C-398/08)','a <b>slogan</b> can be distinctive if it has some originality or resonance and requires interpretation'],
['Lindt (CJEU 2012, C-98/11 P)','a shape is distinctive only if it <b>departs significantly from the norms of the sector</b> (gold chocolate bunny refused)'],
['Ardagh (GC 2021, T-668/19)','the sound of a can opening is functional and perceived as a quality of the goods: not distinctive'],
['Lego Juris (CJEU 2010, C-48/09 P)','a shape whose essential characteristics perform a technical function is excluded, even if other shapes give the same result; earlier patents are evidence'],
['Louboutin (CJEU 2018, C-163/16)','a red colour applied to the sole is not a sign consisting “exclusively” of a shape: valid']])}
<ul><li><b>Deceptive</b>: refused if actual deceit or a sufficiently serious risk; the average consumer is reasonably attentive, not particularly vulnerable; account for market reality and habits.</li>
<li><b>Morality</b>: depends on the goods and the public targeted (the same word can be refused for one product and accepted for another).</li></ul>
${NOTE('<b>Check against the slides:</b> the slide on excluded signs is titled “Article 4 e) TMD” but quotes (b), (c) and (d); and one “unlawful signs” slide says flags and emblems “<i>can</i> be registered” where the rule (and the previous slide) says they <b>cannot</b> without consent. The site follows the Directive.')}
`;

SHEETS.t5=`
<div class="eyebrow">Session 5</div><h2>An available sign: relative grounds</h2>
<p class="lede">Goal: decide whether a new sign conflicts with a prior trademark (three cases) or another prior right, using the global assessment of the likelihood of confusion.</p>
${T(['Case (Art. 5 Directive)','Sign','Goods / services','Extra condition','Example vs “Vuitton” for bags'],[
['1. Double identity','identical','identical','adverse effect on a function of the mark (Arsenal)','“Vuitton” for bags'],
['2. Likelihood of confusion','identical or similar','identical or similar','likelihood of confusion (incl. association)','“Vouton” for bags'],
['3. Reputed mark','identical or similar','even <b>not similar</b>','a link in the public’s mind + unfair advantage of, or detriment to, distinctiveness or repute (exception to specialty)','“Vouitton” for cars']])}
<h3>Likelihood of confusion</h3>
<p><b>Canon (CJEU 1998, C-39/97)</b>: the risk that the public believes the goods come from the same undertaking or from economically linked undertakings. A mere link is only enough for reputed marks. <b>Sabel (1997, C-251/95)</b> and Canon: a <b>global assessment</b> of interdependent factors:</p>
<ol><li>similarity of the signs: <b>visual, aural, conceptual</b> (“Ball” vs “Bell”, “Balloon”);</li>
<li>focus on the <b>distinctive and dominant elements</b> (“BALL print”: “print” is descriptive);</li>
<li>similarity of goods/services: nature, end users, method of use, competition or complementarity — <b>not</b> whether they are goods or services, <b>not</b> the Nice class;</li>
<li>distinctiveness of the earlier mark (descriptive elements, duration and scope of use, promotional budget, share of the public who knows it): the stronger, the higher the risk;</li>
<li>the <b>relevant public</b> (Lloyd, 1999, C-342/97): average consumer, reasonably well-informed, observant and circumspect, attention varying with the goods, relying on an <b>imperfect recollection</b>.</li></ol>
<p><b>Reputation</b>: known by a significant part of the public concerned (duration, scope, budget, share of the public), in a substantial part of the country (or of the EU for an EU mark).</p>
<h3>Other prior rights</h3>
<p>Prior IP rights (copyright, designs, GIs; infringing a patent is unlikely) and other prior distinctive signs (company name, commercial name, domain name). Search tools: TMview (trademarks), DesignView, Espacenet, GIview.</p>
`;

SHEETS.t6=`
<div class="eyebrow">Session 6</div><h2>Registration, duration and loss</h2>
<p class="lede">Goal: explain how a trademark is acquired (registration, territoriality, priority, Madrid), how the office examines it, and how it can be cancelled or revoked.</p>
<ul><li><b>Registration is required</b> (Art. 10 Directive). Exceptions: a <b>well-known mark</b> (Art. 6bis Paris Convention) and the <b>unregistered “TM”</b> of common-law countries — both only protected by a tort action, not infringement.</li>
<li>The owner is the registrant; the real owner defrauded can ask for cancellation or reassignment.</li>
<li><b>Territoriality</b>: one mark = one territory (INPI → France); exception: the <b>EU trademark</b> (EUIPO) covers the 27 Member States.</li>
<li>Application: form with a valid representation, list of goods/services by <b>Nice class</b>, fee.</li></ul>
${F('INPI (France):   €190 for 1 class + €40 per additional class\nEUIPO (EU):      €850 for 1 class + €50 for the 2nd + €150 per class from the 3rd')}
<ul><li><b>Priority right</b> (Art. 4 Paris Convention, 179 countries): <b>6 months</b> from the first filing to file in other member states with the same date.</li>
<li><b>Madrid System</b> (Protocol 1989, 131 countries): based on a first mark, one form, one language (EN/FR/ES), fees by country; result = bundle of national rights called an “international trademark”.</li></ul>
${T(['Office step','Grounds','Who'],[['Examination','absolute grounds: sign, representation, distinctiveness, lawfulness, non-deceptive','the office, systematically'],['Opposition','relative grounds: prior mark (applied, registered, well-known), GI/PDO, other signs depending on the law','only the owner of the prior right; <b>3 months</b> (EU) or <b>2 months</b> (FR) after publication']])}
<h3>Duration and loss</h3>
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
<h3>2. Infringement action</h3>
<p>Any use in the course of trade (affixing, selling, importing, business papers, advertising incl. comparative) in one of the <b>three cases</b> (double identity, likelihood of confusion, reputed mark — see Session 5).</p>
${T(['Exception','Content'],[['Honest use','descriptive use; use to indicate the purpose of goods/services (“We fix BMW cars”); a person’s own name or address; a prior local sign'],['Exhaustion of rights','goods put on the market in the EEA by the owner or with his consent can be resold; except legitimate reasons (alteration of the goods)']])}
<ul><li><b>Detection</b>: own watch; <b>customs</b> can seize counterfeits (ex officio or on request).</li>
<li><b>Saisie-contrefaçon</b> (Directive 2004/48 Art. 7; FR L.716-4-7 IPC): on request of the claimant alone, with prima facie evidence; description or seizure; then sue within a reasonable time (<b>FR: 15 days</b>). <b>Right of information</b> on origin and networks (Art. 8).</li>
<li><b>Applicable law</b>: the country where the right is protected. Civil court: place of the act/harm or defendant’s residence; FR: 10 specialized <b>tribunaux judiciaires</b> (incl. Lille, Paris); criminal: tribunal correctionnel.</li>
<li><b>Civil remedies</b>: injunction, confiscation/destruction, damages (lost earnings, infringer’s profits, moral prejudice; <b>no punitive damages in France</b>), publication.</li>
<li><b>Criminal (FR)</b>: misdemeanour, fine up to <b>€400 000</b> and <b>4 years</b> in prison (€750 000 and 7 years in an organized group).</li></ul>
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
['Enforcement','honest use · exhaustion (EEA) · customs · saisie-contrefaçon (15 days) · damages, no punitive · €400k / 4 y']])}
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
  status:'Sessions 1–8 done · 2 mocks',
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
  overview:{
    eyebrow:'Trademark Law',
    title:'Trademark law from the sign to the lawsuit',
    lede:'Built from the common MyCourses material of TRADEMARK LAW 2311 (coordinator Elsa Mimoun): the preliminary remarks, the Session 1–6 and 8 slides, the case law list, the glossary and the case study method.',
    blurbs:{cheat:'All the rules and the 20 cases on one page',exercises:'Match cases, grounds and deadlines, compute filing fees, solve the course cases',cards:'Cases and definitions',mocks:'An MCQ midterm and a case study final'},
    html:`<h3>How you are assessed</h3>
  <ul><li>Participation 10% · team case study 25% (Session 8) · midterm MCQ 25% · <b>final exam: open question 40%</b> (Preliminary remarks; same weights in the 2023-24 course outline). Retake: a case study.</li>
  <li>For case studies, always follow the method: facts → legal question → rule → application → conclusion.</li></ul>
  <h3>Sources and limits</h3>
  <ul><li>MyCourses has one section per teacher and none is restricted to group L10: the site uses the coordinator’s common slides. Your own teacher may have added examples.</li>
  <li>Session 7 is not in the common material (probably the midterm or the DINO project).</li>
  <li>Model answers to the course cases (Georges, Linda, Bill, Sarah, Champollion) are written by the site; the slides give no solutions.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  mocks:MOCKS,
  mocksNote:NOTE('<b>Mocks written by the site.</b> No past paper is available on MyCourses; formats follow the assessment described in the preliminary remarks.')
});
})();
