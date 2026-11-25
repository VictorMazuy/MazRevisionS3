// node extract.js <html> <stopMarker> <out.json> NAMES...  (all inline scripts, cut at stopMarker)
const fs=require('fs'),vm=require('vm');const [f,stop,out,...names]=process.argv.slice(2);
const html=fs.readFileSync(f,'utf8');let js=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n;\n');
const i=js.indexOf(stop);if(i>0)js=js.slice(0,i);
const ctx={document:{documentElement:{setAttribute(){}},querySelector(){return null}},localStorage:{getItem(){return null}},window:{}};vm.createContext(ctx);vm.runInContext(js+'\n;globalThis.__o={'+names.join(',')+'}',ctx);
fs.writeFileSync(out,JSON.stringify(ctx.__o,null,1));for(const n of names){const v=ctx.__o[n];console.log(n,Array.isArray(v)?v.length:typeof v,Array.isArray(v)&&v[0]?Object.keys(v[0]).join(','):'')}
