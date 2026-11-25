/* ---------- v3 (24/11): sheets rebuilt. Midterm (t1–t4) = the whole content of the midterm revision site (Trademark Revision.html,
   chapters 1–7, in MID / MIDT) merged with the common slides; end-term (t5–t7) = Sessions 5, 6 and 8 slide by slide. ---------- */
const {NOTION}=Rev.h;
const MIDSRC='<span class="pill src">Midterm site</span>';
const SITE='<b>Answer by the site:</b> the slides ask the question without giving the solution.';

SHEETS.t1=`
<div class="eyebrow">Midterm · Session 1 · midterm site chapters 1–2</div><h2>IP rights and other distinctive signs</h2>
<p class="lede">Goal: define intellectual property, give its aims and its effect, tell the IP rights apart (what they protect, conditions, duration) and distinguish a trademark from a company name, a commercial name and a domain name.</p>
${NOTION({id:'t1-def',title:'1. What intellectual property is, and why it exists',
 ess:'<p>IP = ownership of a creation with <b>no physical form</b> or that is a <b>product of the human mind</b>, as opposed to tangible goods. IP law grants the creator an <b>exclusive right</b>, for a limited time and territory. Four aims: protect creators, promote innovation and investment, give financial incentives and prevent copying, guarantee quality to consumers.</p>',
 understand:MID.c1[1]+'<h4>The four aims of IP law</h4>'+MID.c1[2]+'<h4>Consequence of obtaining an IP right</h4>'+MID.c1[3]+'<p>The common slides (Session 1) sum the aims up as: promote technological innovation, art and culture, and fair competition. Infringing any IP right is both a <b>civil</b> and a <b>criminal</b> offence.</p>',
 example:['YBX (slides)','<p>I launch the clothing brand YBX and register it: the brand itself is protected against copying in the same field; the common designs of the clothes are <b>not</b> protected by the trademark (they would need a design right).</p>'],
 trap:'An IP right is not automatic: a creation is protected only if it meets the specific criteria of that right, and only for a period and a territory.',
 tryit:{q:'Which is NOT one of the four aims of IP law in the course?',o:['Guaranteeing low prices','Protecting creators','Promoting innovation and investment','Guaranteeing quality to consumers'],a:0,e:'Low prices is not an aim; preventing cheap copies is.'}})}
${NOTION({id:'t1-ip',title:'2. The two branches and the main IP rights',
 ess:'<p>French law (Code de la propriété intellectuelle): <b>literary and artistic property</b> (copyright, software, databases) and <b>industrial property</b> (patents, <b>trademarks</b>, designs). Durations: copyright life + 70 years · design 5 years renewable up to 25 · patent 20 years · <b>trademark 10 years renewable indefinitely</b> · GI unlimited while the link lasts.</p>',
 understand:MID.c1[4]+MID.c1[5]+`<p>Also in the common slides: copyright runs 70 years after the death of the author (natural person) or after disclosure (legal person) and needs <b>no registration</b>; design, patent and trademark need a registration.</p>
 <p><b>Why does copyright need no registration while a trademark does?</b> A work is protected because it exists and is original; a trademark is a monopoly on a sign in trade, so competitors must be able to check a public register to know which signs are taken, for which goods and where.</p>`,
 trap:MIDT.c1,
 tryit:{q:'Which IP right can last forever?',o:['A trademark, renewed every 10 years','A patent','Copyright','A design'],a:0,e:'A trademark is renewable indefinitely, as long as it is used and renewed.'}})}
${NOTION({id:'t1-gi',title:'3. Geographical indications',
 ess:'<p><b>PDO</b> (AOP/AOC): production steps in the area give the product its characteristics. <b>PGI</b> (IGP): quality or reputation <b>linked</b> to the origin (agricultural, food, wine). <b>IG for industrial and craft products</b> (France, since 2014): e.g. Limoges porcelain.</p>',
 understand:MID.c1[6]+'<p>Common slides: PDO Champagne, PGI Bayonne ham, GIPICP (industrial and craft products) Limoges porcelain.</p>',
 trap:'A GI is not owned by one company: it protects a name linked to a place. A trademark identifies one undertaking.',
 tryit:{q:'Limoges porcelain is protected as…',o:['a geographical indication for industrial and craft products','a PDO','a collective mark'],a:0,e:'Non-food product: the French IG for industrial and hand-crafted products (since 2014).'}})}
${NOTION({id:'t1-signs',title:'4. Other distinctive signs: company name, commercial name, domain name',
 ess:'<p>Company name (dénomination sociale), commercial name (nom commercial), domain name: distinctive signs but <b>not trademarks</b>. No common legislation; protected only by a <b>tort action for unfair competition</b> (not infringement), against an identical or similar sign for an identical or similar activity creating confusion; commercial and domain names only in the same geographical area.</p>',
 understand:MID.c2[0]+'<h4>Registered name of a company</h4>'+MID.c2[1]+'<h4>Commercial name</h4>'+MID.c2[2]+'<h4>Domain name</h4>'+MID.c2[3],
 example:['Summary tables (midterm site)',MID.c2[5]],
 trap:MIDT.c2,
 tryit:{q:'A competitor copies your domain name (no trademark registered). Which action?',o:['Unfair competition (tort)','Trademark infringement','Opposition at the INPI'],a:0,e:'Without a registered trademark there is no infringement action.'}})}
${NOTION({id:'t1-specialty',title:'5. The principle of specialty',
 ess:'<p>Every distinctive sign, trademarks included, is protected <b>only for the goods and services</b> for which it is used or registered (“Sandro” only for fashion). Exception (Session 5): a <b>reputed</b> trademark.</p>',
 understand:MID.c2[4]+'<p><b>Why specialty?</b> A sign only tells consumers where goods come from in a given market. “Sandro” for clothes does not stop “Sandro” for plumbing: nobody would think they come from the same company, and words must stay available to other businesses.</p>',
 trap:'Do not stop at “the word is already registered”: ask for which goods. Two identical signs can coexist for unrelated goods (unless the earlier mark is reputed).',
 tryit:{q:'“Sandro” is registered for clothes. Can a plumber register “Sandro” for plumbing services?',o:['In principle yes (specialty), unless “Sandro” is a reputed mark','No, never','Only with the consent of the INPI'],a:0,e:'Specialty limits protection to the goods concerned; a reputed mark escapes it (Art. 5(3)).'}})}
`;

SHEETS.t2=`
<div class="eyebrow">Midterm · Session 2 · midterm site chapter 3</div><h2>Sources, definition, categories and functions of the trademark</h2>
<p class="lede">Goal: know the legal sources, the definition of Article 3 of the Directive, the three categories of marks and the functions of a trademark recognised by the CJEU, with their cases.</p>
${NOTION({id:'t2-sources',title:'1. Sources',
 ess:'<p>EU <b>Directive</b> 2015/2436 (to transpose) and <b>Regulation</b> 2017/1001 on the EU trademark (directly applicable); Directive 2004/48 on enforcement; Paris Convention (1883) and Madrid Protocol (1989).</p>',
 understand:`<ul><li><b>Directive (EU) 2015/2436</b> approximates national laws and must be transposed (France: Code de la propriété intellectuelle) ≠ <b>Regulation (EU) 2017/1001</b> on the EU trademark (EUTMR), directly applicable. Directive 2004/48 on the enforcement of IP rights.</li>
 <li>WIPO: <b>Paris Convention</b> (1883) and <b>Madrid Protocol</b> (1989).</li></ul>`,
 trap:'Cite the source of every rule: the definition is <span class="ref">Art. 3 Directive 2015/2436</span>; the grounds for refusal are Art. 4 (absolute) and Art. 5 (relative).',
 tryit:{q:'Which text is directly applicable in all Member States without transposition?',o:['Regulation 2017/1001','Directive 2015/2436','The Paris Convention'],a:0,e:'A regulation applies directly; a directive must be transposed.'}})}
${NOTION({id:'t2-def',title:'2. The legal definition (Art. 3 Directive)',
 ess:'<p>Any sign (words, names, designs, letters, numerals, colours, shapes, sounds…) capable of <b>(a) distinguishing</b> the goods or services of one undertaking and <b>(b) being represented on the register</b> clearly and precisely. Two criteria: distinctiveness + representation; then registration.</p>',
 understand:MID.c3[1]+MID.c3[3],
 trap:'The list of signs in Art. 3 is open (“in particular”): a smell is not excluded by the list, it fails the representation test.',
 tryit:{q:'The two criteria of Art. 3 Directive are…',o:['distinctiveness and capacity of representation','novelty and inventive step','originality and expression'],a:0,e:'Novelty/inventive step: patents. Originality: copyright.'}})}
${NOTION({id:'t2-cat',title:'3. Individual, collective and certification (guarantee) marks',
 ess:'<p><b>Individual</b> mark: one undertaking. <b>Collective</b> mark: members of an association that owns it (membership). <b>Guarantee / certification</b> mark: goods of users meet standards set by an owner who does not supply such goods (Fairtrade).</p>',
 understand:MID.c3[2]+T(['Category (common slides)','Function','Who can apply'],[['Collective mark','distinguishes goods/services of members of an association from non-members','associations of manufacturers, producers, traders, service providers, or public-law legal persons (EU fee €1 500)'],['Guarantee / certification mark','guarantees that goods/services of a user (not the owner) meet standards set by the owner','anyone who does not supply goods/services of the kind certified (EU fee €1 500)'],['Individual mark','distinguishes the goods/services of one undertaking','any person']])+'<p>CSR: collective and guarantee marks let companies signal sustainability commitments, while trademark law blocks misleading (deceptive) claims.</p>',
 trap:'Certification = standards set by the owner, who does not supply the goods. Collective = membership of the association that owns the mark.',
 tryit:{q:'A label certifying organic farming, owned by a body that sells no food, is…',o:['a guarantee (certification) mark','a collective mark','an individual mark'],a:0,e:'The owner sets standards and does not supply the goods certified.'}})}
${NOTION({id:'t2-func',title:'4. The functions of the trademark (CJEU)',
 ess:'<p>Essential function: guarantee the <b>origin</b> (Hoffmann-La Roche, 1978). Other functions: <b>quality</b>, <b>communication / advertising</b>, <b>investment</b> (L’Oréal v Bellure 2009, Google France 2010). The owner can only prohibit uses that affect (or are liable to affect) these functions (Arsenal 2002).</p>',
 understand:MID.c3[4],
 trap:MIDT.c3,
 tryit:{q:'Which case defines the essential function of a trademark?',o:['Hoffmann-La Roche (1978)','Arsenal (2002)','Google France (2010)'],a:0,e:'Guaranteeing the identity of origin of the product to the consumer.'}})}
`;

SHEETS.t3=`
<div class="eyebrow">Midterm · Sessions 2–3 · midterm site chapters 4–5</div><h2>Types of marks and a sign capable of representation</h2>
<p class="lede">Goal: name the type of each sign, check the first absolute conditions (a sign, represented clearly and precisely) and know exactly what to file for each type, with the cases.</p>
${NOTION({id:'t3-kinds',title:'1. The types of trademarks',
 ess:'<p>Word, figurative, shape, position, pattern, colour, motion, multimedia (image + sound), sound. A store layout can be a mark if distinctive (Apple). Smell and taste: practically never in the EU (the Play-Doh smell is a US registration).</p>',
 understand:MID.c4[0]+'<h4>Layout of a retail store</h4>'+MID.c4[1]+'<h4>Smell (olfactory) and taste marks</h4>'+MID.c4[2],
 trap:MIDT.c4,
 tryit:{q:'A red sole on high heels, always at the same place, is filed as…',o:['a position mark (colour in a position)','a shape mark','a pattern mark'],a:0,e:'Louboutin: a colour applied to a specific position.'}})}
${NOTION({id:'t3-grounds',title:'2. The two requirements; absolute and relative grounds',extra:STEPS_JOE,
 ess:'<p><b>Absolute grounds</b>: the sign itself (a sign, represented, distinctive, lawful), checked by the office. <b>Relative grounds</b>: conflicts with prior rights of others, raised by their owners. A case study starts with the absolute grounds, then the relative ones.</p>',
 understand:MID.c5[1]+'<p><b>Absolute</b> grounds concern the sign itself and are checked by the office for every application; <b>relative</b> grounds concern conflicts with the rights of others and are raised only by the owner of the prior right (opposition, cancellation).</p>'+F('Absolute grounds (definition of a trademark):\n1. any sign  2. capable of being represented on the register  3. capable of being distinctive\nRelative grounds: the sign must not infringe prior rights of third parties'),
 trap:'An office never refuses a mark on its own because of an earlier mark: that is a relative ground, raised by the earlier owner (opposition).',
 tryit:{q:'A prior trademark owner objects to your application. This is…',o:['a relative ground (opposition)','an absolute ground','a revocation'],a:0,e:'Only the owner of the prior right can raise it.'}})}
${NOTION({id:'t3-sign',title:'3. A precise sign, not a concept: Dyson',
 ess:'<p>The subject matter must be a precise <b>sign</b>, not a concept: Dyson’s transparent bin “in all conceivable shapes” was refused (CJEU 2007, C-321/03).</p>',
 understand:MID.c5[2]+'<p><b>Why?</b> Registering “a transparent bin in any shape” would give Dyson a monopoly on an idea, blocking every competitor’s design, not on a precise sign that identifies Dyson.</p>',
 trap:'Dyson is about a concept that is not a sign; Sieckmann is about representation. Do not mix them up.',
 tryit:{q:'Why was Dyson’s transparent bin refused?',o:['It was a concept covering all shapes, not a sign','It was descriptive','It was deceptive'],a:0,e:'A trademark cannot give a monopoly on an idea.'}})}
${NOTION({id:'t3-sieckmann',title:'4. Representation: the Sieckmann criteria',
 ess:'<p>The representation must be <b>clear, precise, self-contained, easily accessible, intelligible, durable and objective</b> (Sieckmann, CJEU 2002, C-273/00). Since the 2015 Directive, no graphic representation is required: audio and video files are allowed.</p>',
 understand:MID.c5[3]+'<p><b>Why so strict?</b> The register is read by the office, by judges and by competitors: each of them must understand exactly the same protected sign, now and in 10 years. A smell described in words or a sample that fades cannot do that.</p>',
 trap:'A chemical formula shows the substance, a description is subjective, a sample fades: none of the three represents a smell (Sieckmann).',
 tryit:{q:'Which is NOT a Sieckmann criterion?',o:['Original','Precise','Durable','Objective'],a:0,e:'Originality is a copyright condition, not a trademark one.'}})}
${NOTION({id:'t3-types',title:'5. What to file for each type of sign',extra:STEPS_GEORGES,
 ess:'<p>Colour: reproduction + <b>colour code</b> (Libertel). Sound: <b>audio file</b> or stave (Shield Mark). Position: position and size + <b>dotted lines</b> for unclaimed parts. Motion: video or still images. Shape: views or photos. Smell and taste: impossible today.</p>',
 understand:T(['Type','What to file (midterm site + common slides)'],[
 ['Word / figurative','a reproduction of the sign (description optional for figurative)'],
 ['Pattern','a reproduction showing the <b>pattern of repetition</b>; a description of how the elements repeat is allowed'],
 ['Shape','a <b>graphic reproduction</b> (computer-generated images allowed) or a <b>photographic reproduction</b>; may contain different views (up to 6 views on paper)'],
 ['Motion','a <b>video file</b> showing the movement, or a <b>series of still sequential images</b>'],
 ['Colour (single)','a sample on paper is <b>not enough</b>: a <b>universal colour code</b> (Pantone, RAL…) must identify it accurately (<b>Libertel</b>, CJEU 2003, C-104/01)'],
 ['Colour combination','reproduction showing the <b>systematic arrangement</b> (mandatory) + generally recognised <b>colour code</b> (mandatory) + description of the arrangement (optional)'],
 ['Position','<b>position and size/proportion</b> (mandatory) + <b>visual disclaimer</b> of the elements not claimed, e.g. dotted lines (mandatory) + description of how it is affixed (optional)'],
 ['Sound (Shield Mark, CJEU 2003, C-283/01)','an <b>audio file</b> (MP3, max 5 MB) or an accurate <b>musical notation</b> (stave with clef, notes and rests). Not accepted alone: an onomatopoeia (“Kukelekuuuuu”), notes alone (E, D#, E…), a sonogram, a description (“a cockcrow”)'],
 ['Smell / taste','currently <b>impossible</b> (smell of ripe strawberries, GC 2005, T-305/04): description, chemical formula or sample are not clear and precise']]),
 example:['Slide exercises: Linda, Georges, Bill',MID.c5[8]],
 trap:MIDT.c5,
 tryit:{q:'How do you represent a sound mark?',o:['An audio file or a stave with clef, notes and rests','The onomatopoeia “Kukelekuuuuu”','A sonogram alone'],a:0,e:'Shield Mark (CJEU 2003); the midterm slides also reject a sonogram alone.'}})}
${NOTION({id:'t3-colour',title:'6. Colour marks: Libertel',
 ess:'<p>A colour alone is in principle not a mark, but can be protected for certain goods if distinctive and represented by an <b>internationally recognised colour code</b> (Libertel, 2003): Milka purple, Tiffany blue.</p>',
 understand:MID.c5[5],
 trap:'Filing a paper sample of the colour: it fades, so it is not durable. Always give the code.',
 tryit:{q:'What must Linda file to register the colour pink?',o:['A reproduction and an internationally recognised colour code','A paper sample of the pink','A written description “bright pink”'],a:0,e:'Libertel (C-104/01).'}})}
${NOTION({id:'t3-sound',title:'7. Sound marks: Shield Mark',
 ess:'<p>A sound can be a mark if it is distinctive and represented clearly and precisely: stave with clef and notes, or today an audio file (Shield Mark, 2003).</p>',
 understand:MID.c5[6],
 trap:'A list of notes or an onomatopoeia alone is not a valid representation.',
 tryit:{q:'Georges files a sonogram of a cow’s moo. Valid?',o:['No: file an audio file or musical notation','Yes, a sonogram is precise','Yes, if he adds the word “moo”'],a:0,e:'Midterm slides: a sonogram alone is not accepted.'}})}
${NOTION({id:'t3-smell',title:'8. Smell marks: the ripe strawberry',
 ess:'<p>The smell of ripe strawberries was refused (GC 2005, T-305/04): a description and a picture of a strawberry do not identify the smell clearly and precisely. Smells and tastes cannot be represented today.</p>',
 understand:MID.c5[7],
 trap:'Do not use the US Play-Doh smell registration to argue that smells are registrable in the EU.',
 tryit:{q:'Eden SARL’s strawberry smell was refused because…',o:['it could not be represented clearly and precisely','it was descriptive of soaps','strawberries are a GI'],a:0,e:'Representation failure (T-305/04).'}})}
`;

SHEETS.t4=`
<div class="eyebrow">Midterm · Session 4 · midterm site chapters 6–7</div><h2>A distinctive and lawful sign</h2>
<p class="lede">Goal: assess distinctiveness for the goods concerned and through the average consumer, apply the excluded signs (devoid, descriptive, customary, functional shapes, public policy, flags, deceptive), save a weak sign by acquired distinctiveness, and use the key cases.</p>
${NOTION({id:'t4-dist',title:'1. Distinctiveness: definition and assessment',
 ess:'<p>The sign must make the relevant public believe the goods come from a <b>particular company</b>. It is assessed <b>for the goods and services claimed</b> and through the <b>average consumer</b>. Scale: fanciful &gt; arbitrary &gt; suggestive &gt; descriptive or generic (refused).</p>',
 understand:MID.c6[1]+MID.c6[3]+'<p>Scale of distinctiveness (common slides): <b>fanciful</b> (invented word) &gt; <b>arbitrary</b> (real word unrelated to the goods) &gt; <b>suggestive / evocative</b> &gt; not distinctive.</p><p><b>Why refuse descriptive signs?</b> “Leather” for bags tells nothing about origin, and every bag maker must stay free to say its bags are leather. The more a sign describes the goods, the weaker it is; an invented word (Kodak) is the strongest.</p>',
 trap:'Assessing distinctiveness in the abstract: always for the goods claimed and through the average consumer (Apple: distinctive for computers, generic for fruit).',
 tryit:{q:'“Apple” for computers is…',o:['arbitrary','fanciful','descriptive','generic'],a:0,e:'A real word unrelated to the goods. For fresh fruit it would be generic.'}})}
${NOTION({id:'t4-excl',title:'2. Signs refused (Art. 4(1) Directive)',
 ess:'<p>Art. 4(1): (b) devoid of distinctive character · (c) descriptive · (d) customary/generic · (e) shapes (nature, technical result, substantial value) · (f) public policy or morality · (g) deceptive · (h) flags and emblems without consent · bad faith (invalidity).</p>',
 understand:'<p>Article 4 lists the grounds for refusal or invalidity. A sign is not distinctive if it is devoid of distinctive character, descriptive or customary (too common); the other grounds follow.</p>'+T(['Ground (Art. 4(1))','Meaning','Examples (slides)'],[
 ['(b) devoid of any distinctive character','does not allow the product to be recognised as coming from a particular company: too generic or common','“Shoes” for shoes, “Food” for a restaurant, “the coffee” to sell coffee; a basic shape or a colour commonly used for the goods'],
 ['(c) descriptive','consists exclusively of signs that may designate a characteristic: kind, quality, quantity, intended purpose, value, geographical origin, date (time) of production','“Red Wine from Bordeaux” for wine, “Soft Soap” for soap, “Leather” for leather bags'],
 ['(d) customary / generic (too common)','consists exclusively of signs that have become customary in current language or established trade practices','“Cola” for a soft drink, “pack” to sell bags, “Bag” for bags'],
 ['(e) shapes or other characteristics','resulting from the nature of the goods, necessary to obtain a technical result, or giving substantial value','see notion 6 (Lego, Panton chair)'],
 ['(f) public policy, morality','offensive or contrary to public order, judged for the goods and the public','BIN LADIN, SCREW YOU (notion 7)'],
 ['(g) deceptive','misleads on nature, quality or geographical origin','“OrganicFresh” on non-organic apples'],
 ['(h) flags, state emblems, official badges','not without the consent of the competent authority','a national flag in a logo'],
 ['Bad faith','a mark filed in bad faith may also be declared invalid','no example in the slides']])+'<p>Slide summary: not distinctive if the sign (1) <b>designates</b> the goods (generic: “bags” for bags), (2) refers to a <b>characteristic</b> (descriptive: “leather” for leather bags, “cola” for a cola drink), (3) is <b>commonly used</b> to designate them (“pack” for bags).</p>'+NOTE('<b>Check against the slides:</b> the slide on excluded signs is titled “Article 4 e) TMD” but quotes (b), (c) and (d); and one “unlawful signs” slide says flags and emblems “<i>can</i> be registered” where the rule (and the previous slide) says they <b>cannot</b> without consent. The site follows the Directive.'),
 trap:'Descriptive is not deceptive: “Organic” for organic apples is descriptive (true), for non-organic apples it is deceptive (false).',
 tryit:{q:'Which ground can NOT be overcome by acquired distinctiveness?',o:['A shape needed to obtain a technical result','A descriptive word','A colour commonly used for the goods'],a:0,e:'Functional shapes are excluded forever (no perpetual monopoly on a technical solution).'}})}
${NOTION({id:'t4-babydry',title:'3. Baby-Dry',
 ess:'<p>The slides present “BABY-DRY” for nappies as refused for being too descriptive. The real judgment (2001, C-383/99 P) allowed it as an unusual juxtaposition of words. Know both.</p>',
 understand:MID.c6[4],
 trap:'In an answer, write “the slides present Baby-Dry as…” and show you know the actual outcome.',
 tryit:{q:'In the actual Baby-Dry judgment, the Court…',o:['set aside the refusal: not exclusively descriptive','confirmed the refusal','sent it to the INPI'],a:0,e:'See the orange box: the slides present it the other way round.'}})}
${NOTION({id:'t4-acquired',title:'4. Distinctiveness acquired through use',
 ess:'<p>A devoid, descriptive or customary sign can be registered if it <b>has become distinctive through use</b>, with <b>proof</b>: long exclusive use, surveys, market share, advertising, turnover (L’Équipe, Milka purple, “Just do it”). It cannot save shapes, public policy or deceptive signs.</p>',
 understand:MID.c6[5],
 trap:'Forgetting acquired distinctiveness as the way to save a weak sign, or using it for a functional shape (impossible).',
 tryit:{q:'Which evidence does NOT prove acquired distinctiveness?',o:['The date the logo was designed','Consumer surveys','Market share','Advertising spending'],a:0,e:'What counts is how the public perceives the sign after long use.'}})}
${NOTION({id:'t4-cases',title:'5. Special signs: store layout, slogan, shape, sound',
 ess:'<p>Apple (2014): a store layout can be a mark if distinctive. Audi “Vorsprung durch Technik” (2010): a slogan can be distinctive. Lindt (2012): a shape must depart from the norms of the sector (gold bunny refused). Ardagh (2021): the sound of a can opening is functional, not distinctive.</p>',
 understand:MID.c6[6]+'<h4>Sound: Ardagh (common slides)</h4><p><b>Ardagh (GC 2021, T-668/19)</b>: the sound of a can opening is functional and perceived as a quality of the goods: not distinctive.</p>',
 trap:'Saying Lindt won: the principle was accepted but the bunny was refused.',
 tryit:{q:'Lindt’s gold bunny was refused because…',o:['it did not depart significantly from the norms of the sector','it was a technical shape','it was deceptive'],a:0,e:'Consumers saw a usual Easter chocolate shape, not an origin.'}})}
${NOTION({id:'t4-shapes',title:'6. The three shape exclusions',
 ess:'<p>A shape (or other characteristic) is excluded when it <b>results from the nature of the goods</b>, is <b>necessary to obtain a technical result</b> (Lego) or <b>gives substantial value</b> (Panton chair). Reason: no perpetual monopoly on what patents and designs protect for a limited time.</p>',
 understand:MID.c6[7]+'<p>Lego Juris (CJEU 2010, C-48/09 P): a shape whose essential characteristics perform a technical function is excluded, even if other shapes give the same result; earlier patents are evidence. Unlike (b)–(d), these shapes stay excluded even after long use.</p>',
 trap:'The three exclusions cannot be cured by acquired distinctiveness.',
 tryit:{q:'The interlocking Lego brick is excluded because its shape…',o:['is necessary to obtain a technical result','results from the nature of toys','is deceptive'],a:0,e:'Technical shape: that is patent territory, limited in time.'}})}
${NOTION({id:'t4-louboutin',title:'7. Position: Louboutin',
 ess:'<p>Louboutin (2018, C-163/16): the red colour applied to the sole is a <b>colour in a specific position</b>, not a shape, so the shape exclusion (substantial value) does not apply: valid against Van Haren.</p>',
 understand:MID.c6[8],
 example:['Slide exercise: Pierre’s drop-shipping',MID.c6[9]],
 trap:MIDT.c6,
 tryit:{q:'Van Haren argued Louboutin’s mark was invalid because…',o:['it was a shape giving substantial value','it was descriptive','it was not represented'],a:0,e:'Rejected: the mark is a colour in a position, not a shape.'}})}
${NOTION({id:'t4-unlawful',title:'8. Public policy, flags and deceptive signs',
 ess:'<p><b>Public policy / morality</b>: judged for the goods and the public (BIN LADIN refused; SCREW YOU refused for general goods, accepted for sex-shop products). <b>Flags and emblems</b>: not without consent. <b>Deceptive</b>: misleads on nature, quality or geographical origin (“OrganicFresh” on non-organic apples).</p>',
 understand:MID.c7[1]+MID.c7[2]+MID.c7[3]+'<p>Common slides: a deceptive sign is refused if there is actual deceit or a sufficiently serious risk; the average consumer is reasonably attentive, not particularly vulnerable; account for market reality and habits.</p>',
 example:['Wrap-up exercises of the slides',MID.c7[4]],
 trap:MIDT.c7,
 tryit:{q:'“Swiss Made” for watches made in China is refused as…',o:['deceptive (geographical origin)','descriptive','a shape'],a:0,e:'It misleads the consumer about the origin.'}})}
`;

SHEETS.t5=`
<div class="eyebrow">End-term · Session 5</div><h2>An available sign: relative grounds for refusal</h2>
<p class="lede">Goal: decide whether a new sign conflicts with a prior trademark (three cases of Art. 5) or another prior right; run the global assessment of the likelihood of confusion factor by factor (Sabel, Canon, Lloyd); assess reputation; know where to search.</p>
${NOTION({id:'t5-why',title:'1. Why a sign must be available',
 ess:'<p>The essential function of a trademark is to distinguish goods of one undertaking from others on the market, so a trademark <b>cannot consist in a sign already used</b> by someone else. Relative grounds = infringement of <b>third parties’ rights</b>: (1) a prior trademark, (2) other prior rights (prior IP right, other prior protected sign).</p>',
 understand:`<p>Session 5 closes Part II (what makes a valid trademark): after the <b>absolute grounds</b> (the sign must fit the definition of a trademark: Sessions 3–4) come the <b>relative grounds</b> (the sign must not infringe the rights of others).</p>
 ${T(['Part of the course','Question','Raised by'],[['Absolute grounds (Art. 3–4)','Is the sign itself able to be a trademark?','the office, systematically'],['Relative grounds (Art. 5)','Does the sign infringe a prior right of a third party?','the owner of the prior right (opposition, cancellation, infringement action)']])}
 <p>Plan of the session: 1. prior trademark right (a. three cases of infringement; b. the legal concepts: likelihood of confusion, reputed trademark, adverse effect on a function) · 2. other prior rights (a. prior IP rights; b. other prior protected signs).</p>`,
 trap:'Availability is checked for the territory and the goods concerned: a sign can be available in France and taken in the US.',
 tryit:{q:'Why must a new trademark be available?',o:['A mark must distinguish one undertaking’s goods; a sign already used by another cannot do it','Because the office checks every prior mark itself','Because of the principle of territoriality'],a:0,e:'Essential function (origin) of the trademark.'}})}
${NOTION({id:'t5-cases',title:'2. The three cases of conflict with a prior trademark (Art. 5 Directive)',
 ess:'<p>(1) <b>identical</b> sign + <b>identical</b> goods + adverse effect on a function (“Vuitton” for bags); (2) identical or <b>similar</b> sign + identical or similar goods + <b>likelihood of confusion</b> (“Vouton” for bags); (3) identical or similar sign + even <b>dissimilar</b> goods if the earlier mark is <b>reputed</b>: link + unfair advantage or detriment (“Vouitton” for cars).</p>',
 extra:T(['Case','Sign','Goods / services','Extra condition','Example vs “Vuitton” for bags'],[
 ['1. Double identity (Art. 5(1)(a))','identical','identical','adverse effect on a function of the mark (Arsenal)','“Vuitton” for bags'],
 ['2. Likelihood of confusion (Art. 5(1)(b))','identical or similar','identical or similar','likelihood of confusion (incl. likelihood of association)','“Vouton” for bags'],
 ['3. Reputed mark (Art. 5(3)(a))','identical or similar','identical, similar <b>or not similar</b>','link in the public’s mind + unfair advantage of, or detriment to, distinctiveness or repute, without due cause (exception to specialty)','“Vouitton” for cars']]),
 understand:`<div class="quote">Article 5 Directive 2015/2436: “1. A trade mark shall not be registered or, if registered, shall be liable to be declared invalid where: (a) it is identical with an earlier trade mark, and the goods or services […] are identical with the goods or services for which the earlier trade mark is protected; (b) because of its identity with, or similarity to, the earlier trade mark and the identity or similarity of the goods or services covered by the trade marks, there exists a likelihood of confusion on the part of the public; the likelihood of confusion includes the likelihood of association with the earlier trade mark […] 3. (a) it is identical with, or similar to, an earlier trade mark irrespective of whether the goods or services […] are identical with, similar to or not similar to those for which the earlier trade mark is registered, where the earlier trade mark has a reputation […] and the use of the later trade mark without due cause would take unfair advantage of, or be detrimental to, the distinctive character or the repute of the earlier trade mark.”</div>
 <p>“Earlier trademark” includes a <b>well-known trademark</b> in the sense of Art. 6bis of the Paris Convention (Session 6).</p>
 <p><b>Method</b>: compare the <b>signs</b> (identical, similar, different), then the <b>goods and services</b> (identical, similar, different), then pick the case. Different signs: no conflict. Different goods: a conflict only if the earlier mark is <b>reputed</b>. Search prior marks on <b>TMview</b>.</p>`,
 example:['Vuitton, Vouton, Vouitton (slides)','<p>Prior “Vuitton” for bags. “Vuitton” for bags: same sign, same goods → case 1 (double identity), infringement if a function is affected. “Vouton” for bags: similar sign, same goods → case 2, likelihood of confusion. “Vouitton” for cars: similar sign, goods not similar → only case 3, and only because Vuitton is reputed.</p>'],
 trap:'Case 3 is the only exception to the principle of specialty. For an ordinary (non-reputed) earlier mark, dissimilar goods = no conflict.',
 tryit:{q:'Prior “Vuitton” (reputed) for bags. “Vouitton” for cars falls under…',o:['the reputed-mark case','double identity','likelihood of confusion','no conflict (specialty)'],a:0,e:'Dissimilar goods: only a reputed mark is protected beyond specialty.'}})}
${NOTION({id:'t5-confusion',title:'3. Likelihood of confusion: the definition (Canon)',
 ess:'<p>Canon (CJCE 29 Sept 1998, C-39/97): “the risk that the public might believe that the goods or services in question come from the <b>same undertaking</b> or from <b>economically-linked undertakings</b>”. A mere <b>link</b> is enough only for reputed marks.</p>',
 understand:`<p>Likelihood of confusion includes the risk that the relevant public would:</p><ul><li>believe that the goods and services come from the <b>same undertaking</b>, or</li><li>believe that they come from <b>economically linked undertakings</b> (a licensee, a subsidiary…), or</li><li>establish a <b>link</b> between the sign and the prior trademark (<b>only for reputed trademarks</b>).</li></ul>
 <p><b>Why include economically linked undertakings?</b> A consumer who thinks “Vouton” bags are a cheaper line of Vuitton, or made under licence, is misled about origin just as much.</p>`,
 trap:'Do not stop at “the signs look alike”: the test is whether the public may believe the goods come from the same or linked undertakings.',
 tryit:{q:'A consumer thinks the new brand is a subsidiary of the earlier one. This is…',o:['a likelihood of confusion (economically linked undertakings)','not a confusion, since the companies differ','only relevant for reputed marks'],a:0,e:'Canon: same or economically linked undertakings.'}})}
${NOTION({id:'t5-global',title:'4. The global assessment: five interdependent factors (Sabel, Canon)',
 ess:'<p>Sabel (1997, C-251/95) and Canon (1998): a <b>global assessment</b> of interdependent factors: (1) similarity of the signs, (2) their distinctive and dominant elements, (3) similarity of the goods and services, (4) distinctiveness of the earlier mark, all (5) through the <b>relevant public</b>.</p>',
 understand:`<ol><li>the similarity of the signs,</li><li>taking into account the distinctive and dominant elements of the conflicting signs,</li><li>the similarity of the goods and services,</li><li>the distinctiveness of the earlier mark,</li><li>all analysed through the relevant public (reasonably well-informed, reasonably observant and circumspect, who does not have the two signs in front of him at the same time).</li></ol>
 <p><b>Why “global” and “interdependent”?</b> The factors compensate each other (Canon): very similar signs can create confusion for only moderately similar goods, and a strong, well-known earlier mark is confused more easily than a weak one. The judge weighs them together, as a consumer would.</p>`,
 trap:'Answering factor by factor without a final weighing. End with the global conclusion: is there a likelihood of confusion overall?',
 tryit:{q:'In the global assessment, a lower similarity between the goods can be offset by…',o:['a higher similarity between the signs','the Nice class','the price of the goods'],a:0,e:'Interdependence of the factors (Canon).'}})}
${NOTION({id:'t5-signs',title:'5. Similarity of the signs: visual, aural, conceptual; dominant elements',
 ess:'<p>Two signs are <b>identical</b> if they are the same or show only <b>insignificant differences</b>. Otherwise compare them <b>visually</b> (look alike?), <b>aurally</b> (sound alike?) and <b>conceptually</b> (same idea?) (Sabel), giving more weight to the <b>distinctive and dominant elements</b>.</p>',
 understand:'<p>Prior mark “Ball” for copy services. The slides ask what happens with “ball’”, “bell”, “balloon” and “BALL print”: the analysis below is the method applied.</p>'+T(['Later sign','Visual','Aural','Conceptual','Likely outcome'],[['ball’','same letters, an apostrophe','same','same','<b>identical</b> (insignificant difference) → double identity for copy services'],['bell','one letter differs','close','different (a bell is not a ball)','<b>similar</b>; confusion likely for identical services'],['balloon','begins with “ball”','partly similar','related (a balloon evokes a ball)','similar to a lower degree: weigh with the other factors'],['BALL print','contains “BALL”','contains “ball”','same idea + “print”','<b>similar</b>: “print” is descriptive of copy services, “BALL” is dominant']])+NOTE(SITE),
 example:['BALL print (slides)','<p>“BALL print” for copy services vs prior “Ball”: “print” describes the services, so the public remembers “BALL”, the dominant and distinctive element. The signs are highly similar and the services identical: likelihood of confusion.</p>'],
 trap:'Adding a descriptive word (“print”, “shop”, “online”) to an earlier mark does not create a different sign.',
 tryit:{q:'Which element dominates in “BALL print” for copy services?',o:['BALL','print','both equally'],a:0,e:'“print” is descriptive of copy services.'}})}
${NOTION({id:'t5-goods',title:'6. Similarity of goods and services',
 ess:'<p>Taken into account: <b>nature</b>, <b>end users</b>, <b>method of use</b>, whether they are <b>in competition</b> (substitutable) or <b>complementary</b> (one indispensable or important for the use of the other), so that consumers may believe they come from the same undertaking. Not taken into account: goods vs services, the <b>Nice class</b>.</p>',
 extra:T(['Taken into account','Not taken into account'],[['Nature','Whether they are goods or services'],['End users','Whether they belong to the same class of the Nice classification'],['Method of use',''],['In competition (substitutable) or complementary (one is indispensable or important for the use of the other)','']]),
 understand:'<p>The slides ask: pen and pencil? pen and printer? printer and printing services?</p>'+T(['Pair','Analysis','Likely outcome'],[['Pen / pencil','same nature (writing instruments), same users and method of use, substitutable','similar'],['Pen / printer','different nature and use, not substitutable, neither indispensable to the other','not similar (or very low)'],['Printer / printing services','a good and a service (irrelevant); a printer is indispensable to printing services (complementary), but the users differ','arguably similar to a low degree: argue both sides']])+NOTE(SITE),
 trap:'“Same Nice class, so similar” is wrong: the Nice classification is administrative only.',
 tryit:{q:'Which factor is NOT used to compare goods and services?',o:['Being in the same Nice class','Their nature','Their end users','Whether they compete'],a:0,e:'The Nice class is administrative only.'}})}
${NOTION({id:'t5-strength',title:'7. Distinctiveness of the earlier mark (Lloyd)',
 ess:'<p>The greater the capacity of the earlier mark to identify the goods as coming from one undertaking, the higher the likelihood of confusion. Factors: descriptive elements in the sign, duration and territorial scope of use, promotional budget, share of the relevant public who knows it (Lloyd, 1999, C-342/97).</p>',
 understand:'<p><b>Why does a strong mark get more protection?</b> The public remembers a strong mark and looks for it everywhere, so even a vaguer resemblance makes them think of it. A weak, descriptive mark is remembered for its meaning, not as an origin, and small differences are enough.</p>',
 trap:'Distinctiveness of the earlier mark (a factor of confusion, all marks) ≠ reputation (a separate case, Art. 5(3)).',
 tryit:{q:'Which fact does NOT increase the distinctiveness of the earlier mark?',o:['The mark contains a descriptive element','A large promotional budget','Long use across the territory','Many consumers know it'],a:0,e:'Descriptive elements weaken it.'}})}
${NOTION({id:'t5-public',title:'8. The relevant public (Lloyd)',
 ess:'<p>The average consumer of the goods: <b>reasonably well-informed, observant and circumspect</b>; attention varies with the goods; he does not compare the signs side by side but relies on the <b>imperfect picture</b> he kept; his knowledge of foreign languages and technical vocabulary depends on the goods (Lloyd).</p>',
 understand:'<p><b>Why an imperfect recollection?</b> In a shop the consumer rarely has both products in front of him: he compares the new sign with his memory of the old one. Differences that are obvious side by side may go unnoticed.</p><p>Attention: high for expensive or technical goods (cars, medicines for professionals), low for everyday goods (drinks, snacks).</p>',
 trap:'Comparing the two signs side by side in your answer: the course test is the imperfect recollection of the average consumer.',
 tryit:{q:'For cheap everyday goods, the level of attention of the average consumer is…',o:['lower, so confusion is more likely','higher, so confusion is less likely','irrelevant'],a:0,e:'Attention varies with the category of goods (Lloyd).'}})}
${NOTION({id:'t5-reputed',title:'9. The reputed trademark',
 ess:'<p>Reputation is assessed <b>quantitatively</b> (known by a <b>significant part of the public concerned</b>: duration and scope of use, promotional budget, share of the public) and <b>territorially</b> (in a <b>substantial part</b> of the country, or of the EU for an EU mark). It then escapes specialty: link + unfair advantage or detriment.</p>',
 understand:'<p><b>Why protect reputed marks beyond their goods?</b> A famous name attracts customers by itself (Vuitton on cars would borrow its prestige) and can be weakened by being used everywhere (dilution) or tarnished. The law protects that investment (see the investment and communication functions, Bellure).</p>',
 example:['Vouitton for cars (slides)','<p>“Vouitton” for cars: the goods are not similar to bags, but Vuitton is known by a significant part of the public in a substantial part of the EU; the public makes a link and the car maker takes unfair advantage of its prestige → refused / infringement under Art. 5(3)(a).</p>'],
 trap:'A reputed mark (renommée, Art. 5(3)) is a registered mark known by the public; a well-known mark (notoire, Art. 6bis Paris) may be protected without registration. Do not confuse them.',
 tryit:{q:'Reputation of an EU trademark must exist…',o:['in a substantial part of the EU','in every Member State','only in the country of the applicant'],a:0,e:'Territorial test: a substantial part of the territory.'}})}
${NOTION({id:'t5-function',title:'10. Double identity: adverse effect on a function (Arsenal)',
 ess:'<p>For an identical sign on identical goods, the use must <b>adversely affect one of the functions</b> of the trademark (Arsenal, 2002, C-206/01): origin (essential), quality, investment, communication, advertising.</p>',
 understand:'<p>Double identity looks automatic, but the CJEU requires an adverse effect on a function: a use that does not harm origin, quality, investment, communication or advertising (for instance a purely descriptive or referential use) is not caught. In practice, selling fake goods under the identical mark always harms the origin function.</p>',
 trap:'Forgetting the extra condition of case 1. Identity + identity is not enough on its own: name the function affected.',
 tryit:{q:'Which is NOT a function listed by the course?',o:['Price control','Origin','Investment','Advertising'],a:0,e:'Origin, quality, investment, communication, advertising.'}})}
${NOTION({id:'t5-prior',title:'11. Other prior rights: prior IP rights',
 ess:'<p>The new trademark cannot infringe a prior <b>copyright</b> (what makes the work original), <b>design</b> (its individual character), <b>patent</b> (its inventiveness; unlikely in practice) or <b>geographical indication</b> (likelihood of confusion or taking advantage of its reputation). Action: <b>IP infringement lawsuit</b> by the owner of the prior right.</p>',
 extra:T(['Prior IP right','The new trademark copies…','Where to search'],[['Copyright','what makes the originality of the protected work','Internet (no official database)'],['Designs','what makes the individual character of the protected design','DesignView (tmdn.org)'],['Patents*','what makes the inventiveness of the patented invention as claimed','Espacenet'],['Geographical indications','the indication: likelihood of confusion, or taking advantage of its reputation','GIview (tmdn.org)']])+'<p class="meta">* Not likely that the registration of a trademark can infringe a prior patent. EUIPO search: euipo.europa.eu/fr/search-ip.</p>',
 understand:'<p><b>Why can a patent rarely be infringed by a trademark?</b> A patent protects a technical invention; a trademark is a sign. A logo does not reproduce an invention.</p>',
 trap:'A logo drawn by a designer is protected by copyright: registering it without his assignment infringes his right.',
 tryit:{q:'Which database searches geographical indications?',o:['GIview','Espacenet','DesignView'],a:0,e:'Espacenet: patents; DesignView: designs.'}})}
${NOTION({id:'t5-othersigns',title:'12. Other prior rights: other prior protected signs',
 ess:'<p>Company name, commercial name, domain name (“not only local”), name of a public institution: action for <b>unfair competition (tortious liability)</b> if the new trademark creates a <b>likelihood of confusion</b>. Also the name, image or reputation of a regional authority and the name or image rights of a natural person.</p>',
 extra:T(['Prior sign','Unfair competition if the new mark creates…','Example in France: where to search'],[['Company name','a likelihood of confusion','Infogreffe, INPI (data.inpi.fr)'],['Commercial name (not only local)','a likelihood of confusion','Internet'],['Domain name (not only local)','a likelihood of confusion','WHOIS: Afnic (FR), Eurid (EU); general: domain.com, Raynette'],['Name, image or reputation of a regional authority','/','Internet'],['Name of public institutions','a likelihood of confusion','Internet'],['Name or image rights of a natural person','/','Internet']]),
 understand:'<p>These signs have no IP right behind them (Session 1): their owners act in <b>tort</b>, not for infringement. A local commercial name only matters where it is used, hence “not only local”.</p>',
 trap:'Checking only trademark databases before filing: a company name or domain name used nationally can also block you.',
 tryit:{q:'Your new mark is identical to a company name registered nationally for the same activity. The company sues for…',o:['unfair competition (likelihood of confusion)','trademark infringement','revocation'],a:0,e:'Other prior protected sign: tort action.'}})}
${NOTION({id:'t5-sandra',title:'13. Case study: Sandra’s brand “My Cave of Wonders”',
 ess:'<p>Sandra will sell furniture and audio/video devices under a word-and-figurative sign “MY CAVE OF WONDERS” (three stars, a pyramid), with 2 shops in Paris, then the EU and the US. Check validity (absolute) and <b>availability</b> (relative), then choose the filing route.</p>',
 understand:'<p>Full model answer in the <b>Practical cases</b> tab. Method: facts → legal question (is the sign valid and available for classes 20 and 9 in France, the EU and the US?) → rules (Art. 3–5 Directive; other prior rights; territoriality, priority) → application → conclusion.</p>',
 trap:'Forgetting the territorial plan in the conclusion: an EU trademark covers France and the EU expansion; the US needs Madrid (within 6 months to keep priority).',
 tryit:{q:'Sandra files an EU trademark for 2 classes. Fee?',answer:900,unit:'€',tol:0,e:'850 + 50 = €900.'}})}
`;

SHEETS.t6=`
<div class="eyebrow">End-term · Session 6</div><h2>Registration, duration and loss of the trademark</h2>
<p class="lede">Goal: explain how a trademark is acquired (registration and its exceptions, owner, territoriality, application, fees, priority, Madrid), how the office processes it (examination, opposition, registration) and how it is lost (duration, cancellation, revocation).</p>
${NOTION({id:'t6-reg',title:'1. Registration is required (Art. 10 Directive)',
 ess:'<p>“The registration of a trademark shall confer on the proprietor exclusive rights therein” (Art. 10 Directive 2015/2436): a trademark must be <b>registered</b> to be valid and to allow its owner to claim protection.</p>',
 understand:'<p><b>Why registration?</b> Competitors must know which signs are taken, for which goods and where: the register makes the monopoly public and dated. Without registration there is no trademark right, only tort (unfair competition).</p>',
 trap:'Using a sign for years does not make it a registered trademark in France or the EU.',
 tryit:{q:'In France, the right on a trademark is acquired by…',o:['registration','first use','creation of the logo'],a:0,e:'Art. 10 Directive.'}})}
${NOTION({id:'t6-except',title:'2. Exceptions: well-known marks and “unregistered trademarks”',
 ess:'<p><b>Well-known trademark</b> (Art. 6bis §1 Paris Convention): protected without registration in all signatory countries against an identical or similar sign for identical or similar goods creating a likelihood of confusion. <b>Unregistered trademark</b> (“TM”) in common-law countries (US, UK, Canada). In both cases: only an action for <b>tortious liability</b>, not infringement.</p>',
 understand:'<p>The well-known mark is protected only against confusion for identical or similar goods (not beyond specialty, unlike a <b>reputed</b> registered mark). The “TM” symbol signals use as an unregistered trademark; ® is for registered marks (outside the slides).</p>',
 trap:'A well-known or unregistered mark does not give an infringement action: the owner sues in tort.',
 tryit:{q:'The owner of a well-known but unregistered mark can sue for…',o:['tortious liability','trademark infringement','revocation'],a:0,e:'Art. 6bis Paris Convention, as presented in the slides.'}})}
${NOTION({id:'t6-owner',title:'3. The trademark owner',
 ess:'<p>The owner is the <b>registrant</b>. But the real owner of a defrauded right, prevented from registering it in his name, can ask for the <b>cancellation</b> of the fraudulent registration or, in some cases, for the right to be <b>reassigned</b> to him.</p>',
 understand:'<p>Typical fraud: an agent or distributor registers the principal’s mark in his own name (see the opposition ground “TM applied by an agent without consent”).</p>',
 trap:'The registrant is the owner by default: the real owner must act (cancellation or reassignment).',
 tryit:{q:'A distributor registered the foreign maker’s mark in his own name. The maker can ask for…',o:['cancellation or reassignment','nothing: the registrant is the owner','a licence fee only'],a:0,e:'Defrauded real owner.'}})}
${NOTION({id:'t6-territory',title:'4. Territoriality: national marks and the EU trademark',
 ess:'<p>Principle: one trademark protects in <b>one national territory</b> (INPI → all of France). To be protected in several countries, register in each. Exception: the <b>EU trademark</b> filed at the <b>EUIPO</b> covers the <b>27 Member States</b>.</p>',
 understand:'<p>The 27 (slides): Belgium, Bulgaria, Czechia, Denmark, Germany, Estonia, Ireland, Greece, Spain, France, Croatia, Italy, Cyprus, Latvia, Lithuania, Luxembourg, Hungary, Malta, the Netherlands, Austria, Poland, Portugal, Romania, Slovenia, Slovakia, Finland and Sweden.</p><p>The UK, Switzerland, Norway are <b>not</b> EU Member States (outside the slides: the UK left the EU in 2020).</p>',
 trap:'An EU trademark does not cover Switzerland or the UK.',
 tryit:{q:'A French INPI registration protects the mark in…',o:['France only','the whole EU','every Paris Convention country'],a:0,e:'Territoriality: one mark, one territory.'}})}
${NOTION({id:'t6-fees',title:'5. The application and the fees',
 ess:`<p>File: a form with a <b>valid representation</b> of the mark and the <b>list of goods and services</b> by <b>Nice class</b>, and pay the fee (online).</p>${F('INPI (France):   €190 for 1 class + €40 per additional class\nEUIPO (EU):      €850 for 1 class + €50 for the 2nd + €150 per class from the 3rd')}`,
 understand:'<p>The slides give 190 + 40 (FR) and 850 + 50 for the 2nd class (EU); <b>Outside the slides:</b> the €150 per class from the 3rd comes from the EUIPO fee schedule (used by the site’s generators). Each extra class extends the protection to other goods (specialty), so it costs more.</p>',
 example:['Fees for 3 classes','<p>INPI: 190 + 40 + 40 = <b>€270</b>. EUIPO: 850 + 50 + 150 = <b>€1 050</b>.</p>'],
 trap:'The fee depends on the number of classes, not on the number of products listed in a class.',
 tryit:{q:'EUIPO fee for 3 classes?',answer:1050,unit:'€',tol:0,e:'850 + 50 + 150 = €1 050.'}})}
${NOTION({id:'t6-priority',title:'6. The priority right (Art. 4 Paris Convention)',
 ess:'<p>From the date of the filing in one of the <b>179</b> signatory states of the Paris Convention (administered by WIPO), the owner has <b>6 months</b> to file the trademark in other signatory states <b>with the same date</b>.</p>',
 understand:'<p><b>Why priority?</b> It gives time to decide where else to file without being overtaken: a competitor who files the same sign abroad during those 6 months comes second.</p>',
 example:['Dates','<p>First filing in France on 1 March → file in Japan until 1 September with the date of 1 March.</p>'],
 trap:'6 months for trademarks (12 months is for patents, outside the slides).',
 tryit:{q:'A French mark filed on 15 January can be filed abroad with the same date until…',o:['15 July','15 April','15 January next year'],a:0,e:'6 months.'}})}
${NOTION({id:'t6-madrid',title:'7. The Madrid System (Madrid Protocol 1989)',
 ess:'<p>Based on a <b>first trademark</b>, the owner asks for the same right (sign + goods and services) in several countries with <b>one form</b>; the applications go to each national office; fee by chosen country (online calculator). Result: national marks linked together, called an “<b>international trademark</b>”. 131 countries; languages EN, FR, ES.</p>',
 understand:'<p>Advantages (slides): international protection (131 countries); one procedure, no need to adapt to each national legislation; official languages English, French, Spanish, so no translation into each national language.</p><p><b>Which route?</b> Only EU countries → one EU trademark (27 states). EU countries + others → EU or national mark first, then Madrid within 6 months to keep the priority date. One country → the national office.</p>',
 trap:'The “international trademark” is not one worldwide right: it is a bundle of national rights, each examined by its office.',
 tryit:{q:'The Madrid System requires…',o:['a first (basic) trademark','a patent','an EU trademark only'],a:0,e:'It extends an existing mark to other countries.'}})}
${NOTION({id:'t6-exam',title:'8. Processing the application: examination of the absolute grounds',
 ess:'<p>The office processes the application to control the validity of the mark and decides either to <b>reject</b> it or to <b>register</b> it. It only <b>systematically</b> examines the <b>intrinsic validity</b>: a sign with a valid representation, distinctiveness, lawfulness, non-deceptiveness (absolute grounds).</p>',
 understand:'<p>The office does not search prior rights on its own: that is the job of their owners, through <b>opposition</b>. Last remark of the slides: INPI procedures are now fully digital (procedures.inpi.fr: registration, opposition…).</p>',
 trap:'The office does not refuse a mark because an identical earlier mark exists unless its owner opposes.',
 tryit:{q:'Which ground does the office examine systematically?',o:['Distinctiveness','An earlier identical mark','An earlier company name'],a:0,e:'Absolute grounds only.'}})}
${NOTION({id:'t6-opposition',title:'9. Opposition by the owner of a prior right',
 ess:'<p>The owner of a prior right can <b>oppose</b> the registration before the office, within <b>3 months (EU)</b> or <b>2 months (FR)</b> from the <b>publication</b> of the application. Opposable rights (at least): an earlier applied, registered or well-known trademark covering the same territory, a protected GI or designation of origin.</p>',
 understand:'<p>EU harmonisation ≠ uniformisation: the opposition procedure varies with the office. Added grounds in national law: another prior distinctive sign (EU, FR); a TM applied by an agent without consent, i.e. fraud (EU, FR); the name, image or reputation of a regional authority (FR); the name of a public institution if likelihood of confusion (FR).</p><p>The owners of <b>other</b> prior rights (copyright, design…) must wait until the registration is effective and then ask for its <b>cancellation</b>.</p>',
 example:['Deadline','<p>EU application published on 10 March: opposition until 10 June. French application published on 10 March: until 10 May.</p>'],
 trap:'Opposition is before registration (against an application); cancellation is after registration.',
 tryit:{q:'Publication of an EU trademark application on 10 March. Last month to oppose?',o:['June (3 months)','May (2 months)','September (6 months)'],a:0,e:'3 months at EUIPO: until 10 June.'}})}
${NOTION({id:'t6-duration',title:'10. Registration and duration',
 ess:'<p>If no ground blocks it, the mark is <b>registered</b> (registration certificate). It lasts <b>10 years</b>, renewable at the end of each period on payment of a new fee, with <b>no limit</b> on the number of renewals.</p>',
 understand:'<p>Duration runs from the filing date (outside the slides: INPI and EUIPO practice). A mark can therefore last forever, unlike patents (20 years) and designs (25 years maximum), as long as it is renewed and used.</p>',
 trap:'Renewal is not automatic: the fee must be paid every 10 years.',
 tryit:{q:'How many times can a trademark be renewed?',o:['Without limit','Twice','Once'],a:0,e:'10 years, renewable indefinitely.'}})}
${NOTION({id:'t6-loss',title:'11. Cancellation and revocation',
 ess:'<p><b>Cancellation</b> (nullité): a condition of validity (absolute or relative ground) was missing <b>at registration</b>; no time limit, but a prior owner who knowingly tolerated the use for <b>5 successive years</b> can no longer act. <b>Revocation</b> (déchéance): <b>after</b> registration, the mark lost its distinctiveness or was not genuinely used for <b>5 years</b> (3 in the US). By the office or the judge; total or partial.</p>',
 extra:T(['','Cancellation (nullité)','Revocation (déchéance)'],[['Why','a condition of validity was missing <b>at registration</b> (absolute or relative ground)','<b>after</b> registration: loss of distinctiveness, or no genuine use for <b>5 years</b> (3 in the US)'],['When','no time limit, but <b>acquiescence</b>: a prior owner who knowingly tolerated use for 5 successive years can no longer act','—'],['Who decides','office or judge (EU mark: EUIPO in first instance)','office or judge (EU mark: EUIPO in first instance)'],['Scope','total or partial (only the goods for which it is not valid)','total or partial']]),
 understand:'<p><b>Why revoke an unused mark?</b> A registered but unused sign blocks others for nothing: use it or lose it. <b>Why revoke a mark that became generic?</b> Once the public uses it as the name of the product (escalator, thermos), it no longer indicates origin.</p>',
 trap:'Revocation looks at what happened after registration; cancellation at what was wrong at the time of registration.',
 tryit:{q:'A mark became the common name of the product (like “escalator”). Which action?',o:['Revocation','Cancellation','Opposition'],a:0,e:'Distinctiveness was lost after registration.'}})}
${NOTION({id:'t6-champollion',title:'12. Case study: Champollion',
 ess:'<p>TM1 in Germany, Poland, Austria, Hungary, Czech Republic; TM2 in France, Belgium, Switzerland, Canada; TM3 in the same five EU countries + Japan and China, and the UK and US within 4 years. Choose the route for each mark.</p>',
 understand:'<p>Model answer in the <b>Practical cases</b> tab. Key: all-EU list → one EU trademark; non-EU countries → Madrid from a first mark, within 6 months for priority.</p>',
 trap:'Filing five national marks for five EU countries: one EU trademark is simpler and cheaper.',
 tryit:{q:'TM1 (Germany, Poland, Austria, Hungary, Czech Republic): best route?',o:['One EU trademark at EUIPO','Five national filings','Madrid only'],a:0,e:'All five are EU Member States.'}})}
`;

SHEETS.t7=`
<div class="eyebrow">End-term · Session 8</div><h2>Using and protecting the trademark</h2>
<p class="lede">Goal: describe the owner’s powers (use, licence, assignment), the infringement action (acts, conditions, exceptions, detection, evidence, court, remedies) and compare it with unfair competition / passing off.</p>
${NOTION({id:'t7-powers',title:'1. Use of the trademark',
 ess:'<p>The owner uses the mark by affixing it on goods or for services, selling, storing, importing or exporting goods bearing it, advertising, business papers. It must be used <b>as registered</b> (only minor changes not altering its distinctive character) to avoid revocation for non-use after 5 years and to be able to sue for infringement.</p>',
 understand:'<p>Powers of the owner (as over any good he owns): <b>use</b>, <b>allow the use by others</b> (licence), <b>transfer</b> (assignment). A word mark has a wider protection: it can be used in a figurative form. In an infringement case, the comparison is made between the infringing sign and the registered sign (or the slightly modified sign used).</p>',
 trap:'Using a heavily modified logo for 5 years can lead to revocation for non-use of the registered sign.',
 tryit:{q:'Why must the mark be used as registered?',o:['To avoid revocation for non-use and to be able to sue','To pay a lower fee','To obtain priority'],a:0,e:'Slides, Session 8.'}})}
${NOTION({id:'t7-licence',title:'2. Licence: definition and main clauses',
 ess:'<p>A <b>licence</b> is the contract by which the owner (<b>licensor</b>) allows a third party (<b>licensee</b>) to exploit the mark within the limits of the contract, usually against a price (lump sum, royalties). It appears on the register. Clauses: the mark (registration number), territory, goods and services, activity, duration, price (often a % of turnover).</p>',
 understand:'<p>Like any contract, it must meet validity conditions; in an international contract they depend on the applicable law: add a <b>governing law clause</b>.</p>'+T(['Clause','Content'],[['TM right concerned','referred to precisely: registration number'],['Territory','one country or just a region'],['Goods and services','only some of those registered'],['Activity','limited to specific uses'],['Duration','limited in time, renewable'],['Price','a fee, generally a percentage of the turnover made with the mark']]),
 trap:'A licence does not transfer ownership: the licensor stays the owner.',
 tryit:{q:'The usual price of a trademark licence is…',o:['royalties, a percentage of turnover','a single lump sum always','nothing: licences are free'],a:0,e:'Assignment: lump sum; licence: often royalties.'}})}
${NOTION({id:'t7-kinds',title:'3. Kinds of licences and franchising',
 ess:'<p><b>Non-exclusive</b>: several licensees, the owner keeps using. <b>Exclusive</b>: one licensee, the owner can no longer use. <b>Sole</b>: one licensee, the owner can still use. <b>Cross</b> licence: mutual. <b>Sub-licence</b>: the licensee may license. <b>Franchising</b>: licence of IP and know-how + continuous support to replicate a business concept (McDonald’s).</p>',
 extra:T(['Licence','Licensees','Owner can still use?'],[['Non-exclusive','several','yes'],['Exclusive','one','no'],['Sole','one','yes'],['Cross licence','mutual licences between two owners','yes'],['Sub-licence','the licensee grants licences himself','depends on the main licence']]),
 understand:'<p><b>Franchising</b>: a special type of licensing that enables the replication of the owner’s (franchisor’s) business concept in another location, with continuous support and training to the franchisee. Business concepts include the use of IP, especially the trademark, so franchising is based on licensing of IP rights and know-how.</p>',
 trap:'Exclusive vs sole: in both there is one licensee; only in a sole licence can the owner keep using the mark.',
 tryit:{q:'One licensee and the owner can still use the mark: this is…',o:['a sole licence','an exclusive licence','a non-exclusive licence'],a:0,e:'Exclusive: even the owner can no longer use it.'}})}
${NOTION({id:'t7-assign',title:'4. Assignment',
 ess:'<p>An <b>assignment</b> is the contract by which the owner (<b>assignor</b>) <b>permanently transfers</b> ownership to the <b>assignee</b>; it appears on the register. Clauses: the mark (registration number), goods and services (possibly some only), territory (for an international mark, some countries only), price (<b>lump sum</b>), and a <b>warranty clause</b>.</p>',
 understand:'<p>Like any contract of sale, the assignment must include a <b>warranty</b>: the assignor warrants that he is the only owner of the mark and that it is free of any burdens, such as infringements of third-party rights. Validity conditions and a governing law clause, as for a licence.</p>',
 trap:'Licence = temporary authorisation, owner unchanged; assignment = permanent transfer of ownership.',
 tryit:{q:'In an assignment, the warranty clause guarantees that…',o:['the assignor is the only owner and the mark is free of burdens','the mark will be profitable','the assignee will renew it'],a:0,e:'Warranty of quiet possession.'}})}
${NOTION({id:'t7-infr',title:'5. Infringement: the acts and the three cases',
 ess:'<p>Infringement = <b>any use of the sign in the course of trade</b> (affixing, selling, storing, importing, exporting, business papers, advertising including comparative advertising) in one of the <b>three cases</b> of Session 5: double identity + adverse effect on a function; similar sign/goods + likelihood of confusion; reputed mark + link + unfair advantage or detriment.</p>',
 understand:'<p>The conditions are the same as for the relative grounds (Session 5): the earlier mark becomes the registered mark of the claimant, the later sign is the one used by the defendant.</p>',
 example:['Fake sneakers','<p>A Lille shop sells fake “KORVA” sneakers bearing the identical mark: identical sign, identical goods, the origin function is affected → infringement (case 1).</p>'],
 trap:'Private, non-commercial use is not “in the course of trade”.',
 tryit:{q:'Which use can be infringement?',o:['Using the mark in comparative advertising','Talking about the brand with friends','Writing a school essay about the brand'],a:0,e:'Use in the course of trade, including advertising.'}})}
${NOTION({id:'t7-honest',title:'6. Exception 1: honest use',
 ess:'<p>The owner cannot prohibit the <b>honest use</b> in the course of trade of: a <b>descriptive use</b> (kind, quality, purpose, geographical origin, value…); a use of the mark to refer to the <b>purpose</b> of goods or services (“we fix BMW cars”); the <b>name or address</b> of another natural person; a <b>local prior distinctive sign</b> (commercial name).</p>',
 understand:'<p><b>Why?</b> A garage must be able to say which cars it repairs, and a person must be able to trade under his own name: the mark protects origin, not the right to speak about the goods.</p>',
 trap:'Honest use is not a licence to imitate the logo or suggest an official link.',
 tryit:{q:'A garage sign “We fix BMW cars” is…',o:['an honest use the owner cannot prohibit','infringement (double identity)','unfair competition'],a:0,e:'Use to indicate the purpose of the services.'}})}
${NOTION({id:'t7-exhaust',title:'7. Exception 2: exhaustion of rights (Centrafarm, Grundig)',
 ess:'<p>The owner cannot prohibit the use of his mark for a product <b>put on the market in the EU / EEA</b> under that mark <b>by himself or with his consent</b>. Exception: <b>legitimate reasons</b>, including the <b>alteration</b> of the goods after they were put on the market (guarantee of quality).</p>',
 understand:'<p><b>Why exhaustion?</b> Once the owner has sold the goods in the EEA and been paid, the mark has done its job; letting him block resale would split the single market into national markets with different prices.</p><p><b>Two cases of the case-law list, not developed in the common slides</b> (summaries by the site): <b>Consten and Grundig (CJEU 1966, joined cases 56/64 and 58/64)</b>: national trademark rights cannot be used to partition the common market (EU competition law): the <b>existence</b> of the right is untouched, its <b>exercise</b> is limited. <b>Centrafarm v Winthrop (CJEU 1974, C-16/74)</b>: the owner cannot oppose the import of goods put on the market in another Member State by himself or with his consent; the specific subject matter of a trademark is the exclusive right to put the goods into circulation for the first time: the origin of <b>exhaustion</b>. Details in the <b>Case law</b> tab.</p>',
 example:['Perfumes bought in Spain','<p>A shop resells genuine perfumes bought from the brand’s distributor in Spain: put on the EEA market with consent → rights exhausted, the owner cannot stop the resale, unless the perfumes were altered (repackaged, diluted).</p>'],
 trap:'Goods first sold <b>outside</b> the EEA (e.g. in the US) are not exhausted in the EU (outside the slides: no international exhaustion in the EU).',
 tryit:{q:'A shop resells genuine perfumes bought from the brand in Spain. Can the owner stop it?',o:['No: rights are exhausted (unless the goods were altered)','Yes: it is infringement','Yes: double identity'],a:0,e:'Exhaustion of rights in the EEA.'}})}
${NOTION({id:'t7-detect',title:'8. Before the lawsuit: detection',
 ess:'<p>Every owner should run his <b>own watch</b> to check that no third party infringes his rights. <b>Customs</b> can seize counterfeit goods on their own decision or at the owner’s request (request for customs intervention).</p>',
 understand:'<p>A watch covers new filings (to oppose within 2 or 3 months) and the market (shops, websites, marketplaces).</p>',
 trap:'The office will not warn you of a conflicting new filing: watch it yourself.',
 tryit:{q:'Who can seize counterfeits at the border on their own initiative?',o:['Customs','The INPI','The EUIPO'],a:0,e:'Customs, ex officio or on request.'}})}
${NOTION({id:'t7-evidence',title:'9. Gathering evidence: saisie-contrefaçon and right of information',
 ess:'<p><b>Saisie-contrefaçon</b> (Art. 7 Directive 2004/48; FR: L.716-4-7 IPC): at the request of the claimant <b>alone</b>, with reasonable prima facie evidence, the judge orders the description (with or without samples) or the <b>physical seizure</b> of infringing goods, materials and documents; then sue within a reasonable time (<b>FR: 15 days</b>). <b>Right of information</b> (Art. 8; FR: L.716-4-9): origin and distribution networks.</p>',
 understand:'<p><b>Why without the defendant (ex parte)?</b> Because of the risk that the evidence is destroyed. The defendant is notified just before the seizure starts and may ask for a review of the decision. The right of information can be ordered against the defendant or any third party involved, even after the trial begins.</p>',
 trap:'Forgetting the 15-day deadline in France after a saisie-contrefaçon.',
 tryit:{q:'After a saisie-contrefaçon in France, the claimant must sue within…',answer:15,unit:'days',tol:0,e:'Slides: “within a reasonable period of time (FR: 15 days)”.'}})}
${NOTION({id:'t7-proc',title:'10. The trial: applicable law and courts',
 ess:'<p><b>Applicable law</b>: always the law of the country where the IP right is protected. <b>Court</b>: civil: place of the infringing act or harm, or the defendant’s residence; criminal: place of the act or the defendant’s residence. France: civil = <b>tribunal judiciaire</b> (only 10 specialised: Bordeaux, Lille, Lyon, Marseille, Nanterre, Nancy, Paris, Rennes, Strasbourg, Fort-de-France); criminal = <b>tribunal correctionnel</b>.</p>',
 understand:'<p>Specialised courts build expertise in IP. A Lille student sued for infringement of a French mark would go before the tribunal judiciaire of Lille (civil) or the tribunal correctionnel (criminal).</p>',
 trap:'Applicable law is not chosen by the parties: it is the law of the country of protection.',
 tryit:{q:'Which law applies to the infringement of a French trademark?',o:['French law (country of protection)','The law of the defendant’s nationality','The law chosen by the claimant'],a:0,e:'Law of the country where the right is protected.'}})}
${NOTION({id:'t7-remedies',title:'11. Remedies: civil and criminal',
 ess:'<p><b>Civil</b>: injunction to stop, confiscation/destruction of the goods, <b>damages</b> for the entire damage (lost earnings, infringer’s unfair profits, moral prejudice; <b>no punitive damages in France</b>), publication of the decision. <b>Criminal</b> (France): misdemeanour, fine up to <b>€400 000</b> and <b>4 years</b> in prison (€750 000 and 7 years in an organised criminal group).</p>',
 understand:'<p>Criminal law is freely decided by each national law; in France, IP infringement is a misdemeanour (délit). The civil remedies come from Directive 2004/48.</p>',
 trap:'Saying the French judge can award punitive damages: he cannot.',
 tryit:{q:'Maximum criminal fine for trademark infringement in France (not in an organised group)?',answer:400000,unit:'€',tol:0,e:'€400 000 and 4 years; €750 000 and 7 years in an organised group.'}})}
${NOTION({id:'t7-unfair',title:'12. Infringement vs unfair competition / passing off',
 ess:'<p>Other distinctive signs (commercial name, domain name, company name, well-known marks) are protected only by a civil action for <b>tortious liability</b>, mostly passing off / unfair competition: prove an <b>act</b> (identity or similarity creating a risk of confusion, use of trade secrets…), a <b>damage</b> and a <b>causal link</b>. A trademark owner can cumulate both actions if he proves a <b>distinct prejudice</b>.</p>',
 extra:T(['','Trademark infringement','Unfair competition / passing off'],[['Protects','a registered trademark','company name, commercial name, domain name, well-known or unregistered marks'],['Proof','use of the sign in one of the 3 cases','an act (confusion…) + a damage + a causal link'],['Nature','civil and criminal','civil (tort)']]),
 understand:'<p>Cumulation example: the sign is at the same time the claimant’s trademark and his company or domain name; he sues for infringement of the mark and, for a distinct prejudice, in tort.</p>',
 trap:'Asking for trademark infringement when the claimant only has a company name or domain name.',
 tryit:{q:'What must be proved in an unfair competition action?',o:['A fault, a damage and a causal link','Only the use of a similar sign','A registration'],a:0,e:'It is a tort action.'}})}
`;
