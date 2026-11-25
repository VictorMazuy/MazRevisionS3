// Builds site/subjects/trademark-law.js v3 from the v2 backup + midterm site data + the v3 fragments. Run: node tm-assemble.js
const fs=require('fs'),path=require('path');
const ROOT='C:/Users/vmazu/OneDrive/Bureau/FINAL S3/';
const SP=__dirname+'/';
let s=fs.readFileSync(ROOT+'tools/v2-backup-2411/trademark-law.js','utf8');
const d=JSON.parse(fs.readFileSync(SP+'tm-mid.json','utf8'));
const cut=(a,b,ins)=>{const i=s.indexOf(a),j=s.indexOf(b,i+1);if(i<0||j<0)throw new Error('cut '+a.slice(0,40)+' / '+b.slice(0,40));s=s.slice(0,i)+ins+s.slice(j)};
const rep=(a,b)=>{if(!s.includes(a))throw new Error('rep '+a.slice(0,70));s=s.replace(a,b)};

// midterm chapters split into sections; the chapter's trap box goes to MIDT
const MID={},MIDT={};
d.CHAPTERS.forEach(c=>{let h=c.html;const tm=h.match(/<div class="trap">([\s\S]*?)<\/div>\s*$/);if(tm){MIDT[c.id]=tm[1].trim();h=h.slice(0,tm.index)}
  const parts=h.split('<h3>');MID[c.id]=parts.map((p,k)=>k===0?p.trim():p.slice(p.indexOf('</h3>')+5).trim())});
const J=x=>JSON.stringify(x);
const consts=`/* ---------- v3: content of the midterm revision site (Trademark Revision.html), extracted as data ---------- */
const MID=${J(MID)};
const MIDT=${J(MIDT)};
const MIDQUIZ=${J(d.QUIZ)};
const MIDCARDS=${J(d.CARDS)};
const MIDCASES=${J(d.CASES)};
const MIDPRACT=${J(d.PRACTICE)};
const MIDDIST=${J(d.DISTINCTIONS)};
`;
// 1. remove the classic v1 sheets t1–t7 (kept: SHEETS.method and SHEETS.cheat)
cut('SHEETS.t1=`','SHEETS.method=`','');
// 2. replace the v2 LAYERED block by the v3 sheets
cut('SHEETS.t1=LAYERED(','/* ---------- v2: glossary',consts+fs.readFileSync(SP+'tm-v3-sheets.js','utf8')+'\n');
// 3. data (case law, distinctions, practical cases, glossary, quiz, cards) before GLOSS is built
rep('const GLOSS=GL_ROWS.map(([t,fr,d,topic,alias])=>({t,d:`${d} <i>FR: ${fr}</i>`,topic,alias}));',
  fs.readFileSync(SP+'tm-v3-data.js','utf8')+"\nconst GLOSS=GL_ROWS.map(([t,fr,d,topic,alias])=>({t,fr,d,topic,alias,auto:t==='Trademark'?false:undefined}));");
// 4. third mock
rep('const seed=s=>',fs.readFileSync(SP+'tm-v3-mock.js','utf8')+'const seed=s=>');
// 4b. French terms of the midterm site's glossary kept next to the common glossary's ones
rep("['Absolute ground of refusal','Motif absolu de rejet',","['Absolute ground of refusal','Motif absolu de rejet (motifs absolus de refus)',");
rep("['Relative ground of refusal','Motif relatif de rejet',","['Relative ground of refusal','Motif relatif de rejet (motifs relatifs de refus)',");
rep("['Design right','Droit de dessin (2D) ou modèle (3D)',","['Design right','Droit de dessin (2D) ou modèle (3D) · dessin et modèle',");
rep("['Protected designation of origin','Appellation d’origine protégée',","['Protected designation of origin','Appellation d’origine protégée (AOP)',");
rep("['Protected geographical indication','Indication géographique protégée',","['Protected geographical indication','Indication géographique protégée (IGP)',");
rep("['Generic sign','Signe générique',","['Generic sign','Signe générique (usuel / générique)',");
rep("['Applicant','Demandeur (à l’enregistrement)',","['Applicant','Demandeur (à l’enregistrement) · déposant / déposer',");
rep("['Court of Justice of the European Union','Cour de justice de l’Union européenne',","['Court of Justice of the European Union','Cour de justice de l’Union européenne · CJUE (Cour de justice de l’UE)',");
rep("['General Court of the European Union','Tribunal de l’Union européenne',","['General Court of the European Union','Tribunal de l’Union européenne · Tribunal de l’UE (TUE)',");
// 4c. cheat sheet: rows for the notions added in v3
rep("['Enforcement',",`['Types of marks','word, figurative, shape, position, pattern, colour, motion, multimedia, sound · store layout if distinctive (Apple) · smell/taste: no (strawberries; Play-Doh is US only)'],
['Acquired distinctiveness','saves devoid, descriptive, customary signs with proof (long use, surveys, market share, advertising, turnover) · never shapes, public policy, deceptive'],
['Unlawful signs','public policy/morality judged for the goods and public (BIN LADIN refused; SCREW YOU refused, but accepted for sex-shop goods) · flags only with consent · deceptive (OrganicFresh)'],
['Likelihood of confusion','same or economically linked undertakings (Canon) · signs: visual, aural, conceptual + dominant element · goods: nature, users, use, competition, complementarity (not the Nice class) · strength of the earlier mark · average consumer, imperfect recollection (Lloyd)'],
['Other prior rights','copyright, designs, (patents), GIs → IP infringement · company, commercial, domain names, public institutions → unfair competition'],
['Courts (FR)','law of the country of protection · civil: 10 specialised tribunaux judiciaires · criminal: tribunal correctionnel'],
['Enforcement',`);
// 5. registerSubject
rep("tagline:'Bachelor 2 · MCQ 25% + case study 25% + final open question 40%',","tagline:'Bachelor 2 · midterm MCQ 25% + case study 25% + end-term open question 40%',");
rep("status:'Sessions 1–8 done · layered sheets, 4 generators, 4 case-study tools · 2 mocks',","status:'Midterm (midterm site merged) + end-term Sessions 5–8 · case law, distinctions, practical cases · 3 mocks',");
rep("exams:[{id:'mid',label:'Midterm MCQ',scope:'Sessions 1–6'},{id:'final',label:'Final exam',scope:'Sessions 1–8'}],","exams:[{id:'mid',label:'Midterm',scope:'Sessions 1–4'},{id:'final',label:'End-term',scope:'Sessions 5–8'}],\n  sources:{course:'Course exercise',practice:'Practice',midterm:'Midterm site'},");
rep("{id:'t3',label:'Session 3',title:'A sign capable of representation',short:'S3 Representation',exam:'mid',summary:'Dyson, Sieckmann, colour, sound, smell',sheet:SHEETS.t3},",
    "{id:'t3',label:'Session 3',title:'Types of marks and representation',short:'S3 Representation',exam:'mid',summary:'Eight types of marks, Dyson, Sieckmann, what to file, Libertel, Shield Mark, strawberries',sheet:SHEETS.t3},");
rep("summary:'Copyright, design, patent, GI, trademark; company, commercial and domain names',","summary:'What IP is, its aims, the IP rights, GIs; company, commercial and domain names; specialty',");
rep("summary:'Sources, collective/guarantee/individual marks, functions',","summary:'Sources, Art. 3 definition, collective/certification/individual marks, functions (Hoffmann, Arsenal, Bellure, Google)',");
rep("summary:'Distinctiveness, excluded signs, shapes, deceptive and unlawful signs',","summary:'Distinctiveness, Art. 4 grounds, Baby-Dry, acquired distinctiveness, Apple, Audi, Lindt, shapes, Louboutin, public policy, deceptive',");
rep("summary:'Relative grounds, likelihood of confusion, reputed marks',","summary:'Art. 5 three cases, likelihood of confusion (Sabel, Canon, Lloyd), reputed marks, other prior rights, Sandra',");
rep("summary:'Territoriality, fees, priority, Madrid, opposition, cancellation, revocation',","summary:'Registration and exceptions, owner, territoriality, fees, priority, Madrid, examination, opposition, duration, cancellation, revocation, Champollion',");
rep("summary:'Licence, assignment, infringement, remedies, unfair competition',","summary:'Use, licences, franchising, assignment, infringement, honest use, exhaustion, evidence, courts, remedies, unfair competition',");
rep("lede:'Built from the common course material of TRADEMARK LAW: the preliminary remarks, the Session 1–6 and 8 slides, the case law list, the glossary and the case study method.',",
    "lede:'Midterm: the whole content of your midterm revision site (chapters 1–7, case law, quiz bank, flashcards, practical cases, distinctions, glossary), merged with the common slides. End-term: Sessions 5, 6 and 8 of the common course material, the case-law list, the glossary and the case study method.',");
rep("blurbs:{cheat:'All the rules, the cases and the case-study method on one page',","blurbs:{cheat:'All the rules, the cases and the case-study method on one page',quiz:'Course questions and the midterm site’s question bank',");
rep("<h3>How to train for the case study (40%)</h3>",
`<h3>How to answer an open question (midterm site)</h3>
  <div class="irac"><b>Issue</b><div>Rephrase the legal question: “Can X register Y as a trademark for Z?”</div><b>Rule</b><div>State the rule <b>with its source</b> (<span class="ref">Art. 3 Directive 2015/2436</span>, <span class="ref">Art. 4 Directive</span>, Art. 7(1)(b) EUTMR) and the leading case.</div><b>Application</b><div>Apply each condition to the facts, for the goods concerned and through the average consumer. Weigh both sides when it is arguable.</div><b>Conclusion</b><div>Answer clearly, then give the <b>business consequence</b>: risk, what to file, what to change.</div></div>
  <p>The course’s own method (Case study methodology) adds a first step, <b>classification of facts</b>: facts → legal question → rule(s) of law → application → conclusion. The practical cases of the site follow these five steps.</p>
  <h3>Method for any sign (absolute grounds, midterm site)</h3>
  <ol><li><b>Type of mark?</b> Word, figurative, shape, position, pattern, colour, motion, multimedia, sound.</li><li><b>Representation?</b> Sieckmann criteria + the filing rules for that type.</li><li><b>Distinctive for the goods?</b> Devoid, descriptive, customary? Average consumer.</li><li><b>If a shape:</b> the three exclusions.</li><li><b>Public policy, flags, deceptive?</b></li><li><b>Saved by acquired distinctiveness?</b> Only for devoid/descriptive/customary.</li></ol>
  <h3>How to train for the case study (40%)</h3>`);
rep("<li>Then write the course cases (Georges, Linda, Bill, Sarah, Sandra, Champollion) in full and compare with the model answers.</li></ol>",
    "<li><b>Practical cases</b>: write the course cases (Linda, Georges, Bill, Sarah, Pierre, Sandra, Champollion) and the new scenarios in full, with hints, then compare with the model answer.</li><li><b>Case law</b>: facts, question, solution and scope of all 23 judgments (recall mode); <b>Distinctions</b>: the notions exams mix up.</li></ol>");
rep("<li>Model answers to the course cases (Georges, Linda, Bill, Sarah, Sandra, Champollion) are written by the site; the slides give no solutions.</li></ul>",
    "<li>Model answers to the course cases are written by the site (or by the midterm site); the slides give no solutions.</li><li><b>Midterm</b> content comes from your midterm revision site (built on slides 1–200); its orange boxes flag what is not in the slides or where the slides differ from the judgment (Arsenal, Baby-Dry). Questions from its bank are labelled “Midterm site”.</li><li>French terms of the glossary not in the course’s translated glossary are standard legal translations added by the site.</li></ul>");
rep("  modules:[\n    {use:'lab',tab:'generators'",
`  modules:[
    {use:'caselaw',tab:'caselaw',label:'Case law',data:{cases:CASELAW,blurb:'23 judgments: facts, question, solution, scope',intro:'The 20 judgments of the course’s case-law list and three EUIPO / CJEU decisions of the midterm slides (Baby-Dry, BIN LADIN, SCREW YOU). Each one: facts, legal question, solution and scope (why it matters in an answer).'}},
    {use:'distinctions',tab:'distinctions',label:'Distinctions',data:{items:DISTINCTIONS,blurb:'Close notions compared side by side',intro:'Notions that case studies and MCQs like to mix up, criterion by criterion: ten from the midterm site, twelve for the end-term. Turn on “Test yourself” to hide the answers.'}},
    {use:'casework',tab:'cases',label:'Practical cases',data:{cases:PRACT,blurb:'Write the case, hints, model answer',method:'<b>Course method</b> (Case study methodology): 1. classification of facts → 2. legal question → 3. rule(s) of law → 4. application → 5. conclusion. Cite articles and cases; end with the business consequence.',intro:'The cases of the slides (midterm site, Sessions 5 and 6) and new exam-style scenarios. Write your answer first (saved in this browser), ask for hints one at a time, then open the model answer and mark yourself.'}},
    {use:'lab',tab:'generators'`);
fs.writeFileSync(ROOT+'site/subjects/trademark-law.js',s);
console.log('written',s.length);
