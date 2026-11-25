// Builds site/subjects/marketing-management.js v3 = v2 backup + fragments mm-v3-a.js (diagrams, sorts), mm-v3-b.js (per-notion additions),
// mm-v3-c.js (case generators, quiz, cards, glossary), mm-v3-mock.js (mock 3).
const fs=require('fs');
const ROOT='C:/Users/vmazu/OneDrive/Bureau/FINAL S3/',SP=__dirname+'/';
let s=fs.readFileSync(ROOT+'tools/v2-backup-2411/marketing-management.js','utf8');
const rd=f=>fs.readFileSync(SP+f,'utf8');
const rep=(a,b)=>{if(!s.includes(a))throw new Error('rep: '+a.slice(0,90));s=s.replace(a,b)};
// positioning map shared by the S3 sheet and the Tools tab
const mi=s.indexOf("{kind:'plot',id:'p-s3-map'");let dep=0,me=mi;for(;me<s.length;me++){if(s[me]==='{')dep++;if(s[me]==='}'){dep--;if(!dep)break}}
const mapTxt=s.slice(mi,me+1);s=s.slice(0,mi)+'MAP_PLOT'+s.slice(me+1);
// fragments A + B before the layered sheets; LAYERED → intuition, example, trap, extras
rep('/* ---------- v2: layered sheets ---------- */',rd('mm-v3-a.js')+`\nconst MAP_PLOT=${mapTxt};\n`+rd('mm-v3-b.js')+'\nconst LAYV3=(h,specs)=>LAYERED(intro(h,specs),addv3(specs));\n/* ---------- v2: layered sheets ---------- */');
for(let n=1;n<=7;n++)rep(`SHEETS.s${n}=LAYERED(SHEETS.s${n},[`,`SHEETS.s${n}=LAYV3(SHEETS.s${n},[`);
// fragment C before the mocks; generators added to the lab
rep('const MQ=(id,topic,q,o,solution)=>',rd('mm-v3-c.js')+'\nGENS.push(...CASE_GENS);\nconst MQ=(id,topic,q,o,solution)=>');
// mock 3 before the deterministic shuffle
rep('// Shuffle MCQ options once',rd('mm-v3-mock.js')+'\n// Shuffle MCQ options once');
// registerSubject
rep("status:'Sessions 1–7 done · layered sheets, 4 generators, 4 tools · 2 mock exams',","status:'Sessions 1–7 · every notion with intuition, course example, trap · 16 course diagrams · 10 generators · 3 mock exams',");
rep("mocks:'1 h 30 · 20 MCQs + pricing + a case · out of 20'}","mocks:'3 mocks · 1 h 30 · 20 MCQs + pricing + a case · out of 20',quiz:'Course details of the seven sessions'}");
rep("  <h3>The mock exams: format chosen</h3>",`  <h3>How the sheets work</h3>
  <ul><li>Every notion: <b>Essential</b> (definition), <b>Intuition</b> (first lines of Understand), the course content, a <b>course example</b>, an <b>exam trap</b> and <b>Your turn</b>.</li>
  <li>The course’s models are drawn in the sheets: marketing process, micro/macro environment, SWOT grid, types of competition, targeting strategies, Kapferer’s diamond, positioning map (move your brand), three product levels, brand matrix, packaging layers, eco-design cycle, pricing process, break-even, channel systems, intermediary functions, IMC tools, buyer-readiness stages, the five steps of communication.</li>
  <li><b>Sort the course examples</b> into the concepts directly in the sheets (14 sorting exercises), and <b>apply the frameworks to a generated case</b> in the Generators tab (PESTEL, SWOT, competition, segmentation, targeting, positioning, product levels, PLC, brand development, pricing objective and method, product-mix pricing, intermediary functions, distribution intensity, cross-channel models, promotion tools, buyer-readiness, budget methods), with a model answer each time.</li></ul>
  <h3>The mock exams: format chosen</h3>`);
fs.writeFileSync(ROOT+'site/subjects/marketing-management.js',s);console.log('written',s.length);
