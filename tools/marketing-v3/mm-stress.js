// Stress test of the Marketing case generators: 300 draws per level.
const {open}=require('./cdp.js');
(async()=>{const B=await open('file:///C:/Users/vmazu/OneDrive/Bureau/FINAL%20S3/site/index.html');await B.sleep(900);
 const r=await B.ev(`(()=>{const s=Rev.subject('marketing-management');const items=s.mods.find(m=>m.tab==='generators').data.items.filter(x=>/-case$/.test(x.id));const out=[];
  for(const g of items)for(let lv=0;lv<g.levels.length;lv++){let bad=0;for(let k=0;k<300;k++){const v=g.gen(Rev.u,lv);const ps=g.parts(v);
    if(ps.length<3||ps.some(p=>!(p.a>=0)||!p.o.length))bad++;const st=g.steps(v);if(!st.length||/undefined|NaN/.test(st.join('')+g.q(v)))bad++}
   out.push(g.id+' L'+lv+' '+g.levels[lv]+': '+(bad?'FAIL '+bad:'ok'))}return out.join('\\n')})()`);
 console.log(r);console.log(B.logs.join('|')||'no console errors');await B.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
