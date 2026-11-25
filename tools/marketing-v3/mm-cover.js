// Slide-by-slide coverage of the Marketing Management FN slides by the site (sheets, cheat, glossary, quiz, cards, exercises, labs).
// node mm-cover.js [threshold=0.6] → slides whose content words are < threshold found in the site
const {open}=require('./cdp.js'),fs=require('fs');
const STOP=new Set('the a an of to and or in on is are be by for with that this it as at from its their they not no can but if so when which what who than then there these those has have was were will would one two more most also only each other into any all does do your you our we how why kotler anderson principles marketing armstrong session slide page about over very like just them his her she him use used using make made new well way between both such some many much'.split(' '));
const words=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').split(' ').filter(w=>w.length>3&&!STOP.has(w));
const th=+(process.argv[2]||0.6);
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html',{w:1200,h:900});await B.sleep(900);
 let site='';const slug='marketing-management';
 const hs=await B.ev(`(()=>{const s=Rev.subject('${slug}');return ['cheat','glossary'].map(v=>Rev.link(s.slug,v)).concat(s.topics.map(t=>Rev.link(s.slug,'sheets',t.id)))})()`);
 for(const h of hs){await B.ev(`location.hash=${JSON.stringify(h)}`);await B.sleep(250);site+=' '+await B.ev(`document.querySelector('main').innerText`)}
 site+=' '+await B.ev(`(()=>{const s=Rev.subject('${slug}');const f=(k,v)=>typeof v==='function'?undefined:v;return JSON.stringify([s.quiz,s.flashcards,s.exercises,s.mods.map(m=>m.data),s.mocks],f)})()`);
 const S=new Set(words(site));let tot=0;
 for(let n=1;n<=7;n++){const pages=fs.readFileSync(`${__dirname}/mm/MM S${n} 2026 FN.txt`,'utf8').split('\f');
  pages.forEach((p,i)=>{const w=[...new Set(words(p))];if(w.length<6)return;const c=w.filter(x=>S.has(x)).length/w.length;if(c<th){tot++;console.log(`S${n} p${i+1} ${Math.round(c*100)}% missing: ${w.filter(x=>!S.has(x)).slice(0,25).join(' ')}`)}})}
 console.log('slides under threshold:',tot);await B.close();process.exit(0)})();
