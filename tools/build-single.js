// Builds "Revision S3.html": the whole site in one file (CSS and every script inlined), for opening anywhere or sharing.
// Usage (from the project folder): node tools/build-single.js   → writes ../Revision S3.html next to site/
const fs=require('fs'),path=require('path');
const SITE=path.join(__dirname,'..','site'),OUT=path.join(__dirname,'..','Revision S3.html');
let html=fs.readFileSync(path.join(SITE,'index.html'),'utf8');
const read=f=>fs.readFileSync(path.join(SITE,f),'utf8');
html=html.replace(/<link rel="stylesheet" href="(assets\/[^"]+\.css)">/g,(m,f)=>`<style>\n${read(f)}\n</style>`);
let n=0;html=html.replace(/<script src="([^"]+\.js)"><\/script>/g,(m,f)=>{n++;return `<script>/* ${f} */\n${read(f).replace(/<\/script/gi,'<\/script')}\n</script>`});
html=html.replace('<title>Revision Ledger</title>','<title>MazRévision</title>');
fs.writeFileSync(OUT,html);
console.log(`${OUT}: ${n} scripts inlined, ${(Buffer.byteLength(html)/1024/1024).toFixed(2)} MB`);
