// Builds the SPSS-like outputs (HTML tables + SVG plots) used by site/subjects/econometrics.js.
// Every number shown on the site comes from these simulated datasets, so all outputs are internally consistent.
const S=require('./stats'),fs=require('fs');
const f=(x,d=3)=>{if(x==null)return '';const v=Number(x).toFixed(d);return v.replace(/^(-?)0\./,'$1.')};   // SPSS style: .123
const fn=(x,d=3)=>Number(x).toFixed(d);
const fp=p=>p<0.001?'&lt;.001':f(p,3);
const tbl=(title,head,rows,note)=>`<div class="tbl spss"><table><caption>${title}</caption><thead><tr>${head.map((h,i)=>`<th${i?' class="n"':''}>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td${i?' class="n"':''}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>${note?`<p class="spss-note">${note}</p>`:''}</div>`;
const sumTbl=(m,dv,preds)=>tbl('Model Summary<sup>b</sup>',['Model','R','R Square','Adjusted R Square','Std. Error of the Estimate'],[['1',f(m.R),f(m.R2),f(m.adj),fn(m.syx,3)]],`a. Predictors: (Constant), ${preds.join(', ')} · b. Dependent Variable: ${dv}`);
const anovaTbl=(m,dv,hide)=>tbl('ANOVA<sup>a</sup>',['Model','Sum of Squares','df','Mean Square','F','Sig.'],[
  ['1 Regression',fn(m.SSR,3),m.dfR,fn(m.MSR,3),fn(m.F,3),fp(m.pF)],['Residual',hide==='SSE'?'<b>AAAA</b>':fn(m.SSE,3),m.dfE,fn(m.MSE,3),'',''],['Total',fn(m.SST,3),m.n-1,'','','']],`a. Dependent Variable: ${dv}`);
const coefTbl=(m,dv,opt={})=>tbl('Coefficients<sup>a</sup>',['Model','B','Std. Error','Beta','t','Sig.','95% CI Lower','95% CI Upper','VIF'],
  m.coef.map((c,j)=>[j?c.name:'1 (Constant)',fn(c.b,3),fn(c.se,3),j?f(c.beta):'',fn(c.t,3),fp(c.p),fn(c.lo,3),fn(c.hi,3),j?fn(c.vif,3):'']),`a. Dependent Variable: ${dv}`);
// SVG plots (colours follow the theme through currentColor / CSS variables)
const svg=(w,h,body,label)=>`<figure class="plot"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}" style="width:100%;max-width:${w}px;height:auto;color:var(--ink)">${body}</svg><figcaption>${label}</figcaption></figure>`;
const scatter=(xs,ys,{w=420,h=260,xl='',yl='',zero=true,diag=false,title}={})=>{const pad=36,xmin=Math.min(...xs),xmax=Math.max(...xs),ymin=Math.min(...ys,zero?0:Infinity),ymax=Math.max(...ys,zero?0:-Infinity);
  const X=x=>pad+(x-xmin)/(xmax-xmin||1)*(w-pad-10),Y=y=>h-pad+(-(y-ymin)/(ymax-ymin||1))*(h-pad-10);
  let b=`<rect x="${pad}" y="10" width="${w-pad-10}" height="${h-pad-10}" fill="none" stroke="currentColor" stroke-opacity=".35"/>`;
  if(zero&&!diag)b+=`<line x1="${pad}" x2="${w-10}" y1="${Y(0)}" y2="${Y(0)}" stroke="currentColor" stroke-dasharray="4 3" stroke-opacity=".7"/>`;
  if(diag)b+=`<line x1="${X(0)}" y1="${Y(0)}" x2="${X(1)}" y2="${Y(1)}" stroke="currentColor" stroke-opacity=".7"/>`;
  xs.forEach((x,i)=>b+=`<circle cx="${X(x).toFixed(1)}" cy="${Y(ys[i]).toFixed(1)}" r="2.6" fill="var(--debit)" fill-opacity=".75"/>`);
  b+=`<text x="${(w+pad)/2}" y="${h-6}" font-size="11" text-anchor="middle" fill="currentColor">${xl}</text><text x="11" y="${(h-pad)/2+10}" font-size="11" text-anchor="middle" fill="currentColor" transform="rotate(-90 11 ${(h-pad)/2+10})">${yl}</text>`;
  return svg(w,h,b,title)};
const residPlot=(xs,res,xl,title)=>scatter(xs,res,{xl,yl:'Unstandardized residual',title});
const ppPlot=(res,title)=>{const z=res.map(r=>r/S.sd(res)).sort((a,b)=>a-b),n=z.length;const obs=z.map(v=>S.normCdf(v)),exp=z.map((_,i)=>(i+0.5)/n);
  return scatter(exp,obs,{xl:'Observed cumulative probability',yl:'Expected cumulative probability',zero:false,diag:true,title}).replace(/<circle/g,'<circle');};
const loadPlot=(rot,names,title)=>{const w=360,h=360,c=180,s=150;let b=`<line x1="${c-s}" x2="${c+s}" y1="${c}" y2="${c}" stroke="currentColor" stroke-opacity=".5"/><line y1="${c-s}" y2="${c+s}" x1="${c}" x2="${c}" stroke="currentColor" stroke-opacity=".5"/>`;
  b+=`<text x="${c+s}" y="${c-6}" font-size="11" text-anchor="end" fill="currentColor">Component 1</text><text x="${c+6}" y="${c-s+10}" font-size="11" fill="currentColor">Component 2</text>`;
  rot.forEach((r,i)=>{const x=c+r[0]*s,y=c-r[1]*s;b+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" fill="var(--credit)"/><text x="${(x+5).toFixed(1)}" y="${(y-5).toFixed(1)}" font-size="11" fill="currentColor">${names[i]}</text>`});
  b+=`<text x="${c-s}" y="${c+s+4}" font-size="10" fill="currentColor">-1</text><text x="${c+s-8}" y="${c+s+4}" font-size="10" fill="currentColor">1</text>`;return svg(w,h+10,b,title)};
const pcaTables=(p,title)=>{const n=p.names.length;
  const tv=tbl('Total Variance Explained',['Component','Total (eigenvalue)','% of Variance','Cumulative %'],p.values.map((v,i)=>[i+1,fn(v,3),fn(p.pct[i],3),fn(p.cumPct[i],3)]),'Extraction Method: Principal Component Analysis.');
  const cm=tbl('Communalities',['Variable','Initial','Extraction'],p.names.map((nm,i)=>[nm,'1.000',f(p.comm[i])]),'Extraction Method: Principal Component Analysis.');
  const rc=tbl('Rotated Component Matrix<sup>a</sup>',['Variable',...Array.from({length:p.keep},(_,j)=>`Component ${j+1}`)],p.names.map((nm,i)=>[nm,...p.rot[i].map(v=>f(v))]),'Extraction Method: Principal Component Analysis. Rotation Method: Varimax with Kaiser Normalization.');
  const cr=tbl('Correlation Matrix',['',...p.names],p.names.map((nm,i)=>[nm,...p.R[i].map(v=>f(v))]));
  return {tv,cm,rc,cr}};
const groupStats=(lab,vlab,g1,g2,t)=>tbl('Group Statistics',[lab,'N','Mean','Std. Deviation','Std. Error Mean'],[[g1,t.n1,fn(t.m1,3),fn(t.s1,3),fn(t.s1/Math.sqrt(t.n1),3)],[g2,t.n2,fn(t.m2,3),fn(t.s2,3),fn(t.s2/Math.sqrt(t.n2),3)]],`Variable: ${vlab}`);
const indepTbl=(vlab,t)=>tbl('Independent Samples Test',['',"Levene's F","Levene's Sig.",'t','df','Two-sided p','Mean Difference','Std. Error Difference','95% CI Lower','95% CI Upper'],[
  ['Equal variances assumed',fn(t.leveneF,3),fp(t.leveneP),fn(t.eq.t,3),t.eq.df,fp(t.eq.p),fn(t.eq.diff,3),fn(t.eq.se,3),fn(t.eq.lo,3),fn(t.eq.hi,3)],
  ['Equal variances not assumed','','',fn(t.uneq.t,3),fn(t.uneq.df,3),fp(t.uneq.p),fn(t.uneq.diff,3),fn(t.uneq.se,3),fn(t.uneq.lo,3),fn(t.uneq.hi,3)]],`Test variable: ${vlab}`);
const crossTbl=(rl,cl,rows,cols,tab,c)=>tbl(`${rl} * ${cl} Crosstabulation`,['',...cols,'Total'],[].concat(...rows.map((r,i)=>[[`${r} · Count`,...tab[i],c.rt[i]],[`${r} · Expected Count`,...c.E[i].map(v=>fn(v,1)),fn(c.rt[i],1)]])),'');
const chiTbl=c=>tbl('Chi-Square Tests',['','Value','df','Asymptotic Significance (2-sided)','Exact Sig. (2-sided)'],[['Pearson Chi-Square',fn(c.chi2,3)+'<sup>a</sup>',c.df,fp(c.p),''],...(c.fisher!=null?[["Fisher's Exact Test",'','','',fp(c.fisher)]]:[]),['N of Valid Cases',c.N,'','','']],
  `a. ${c.low} cells (${fn(c.low/c.E.flat().length*100,1)}%) have expected count less than 5. The minimum expected count is ${fn(c.minE,2)}.`);
const corrTbl=(a,b,r,kind='Pearson Correlation')=>tbl('Correlations',['','',a,b],[[a,kind,'1',f(r.r)],['','Sig. (2-tailed)','',fp(r.p)],['','N',r.n,r.n]]);
const oneTbl=(vlab,mu0,t)=>tbl('One-Sample Test',['',`t (Test Value = ${mu0})`,'df','Two-sided p','Mean Difference','95% CI Lower','95% CI Upper'],[[vlab,fn(t.t,3),t.df,fp(t.p),fn(t.diff,3),fn(t.lo,3),fn(t.hi,3)]])+tbl('One-Sample Statistics',['','N','Mean','Std. Deviation','Std. Error Mean'],[[vlab,t.n,fn(t.m,3),fn(t.s,3),fn(t.se,3)]]);
const pairTbl=(a,b,t)=>tbl('Paired Samples Test',['','Mean','Std. Deviation','Std. Error Mean','95% CI Lower','95% CI Upper','t','df','Two-sided p'],[[`${a} - ${b}`,fn(t.m,3),fn(t.s,3),fn(t.se,3),fn(t.lo,3),fn(t.hi,3),fn(t.t,3),t.df,fp(t.p)]])+tbl('Paired Samples Statistics',['','Mean','N','Std. Deviation'],[[a,fn(t.m1,3),t.n,fn(t.s1,3)],[b,fn(t.m2,3),t.n,fn(t.s2,3)]]);
const out={};const keep={};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const round=(v,d=0)=>Math.round(v*10**d)/10**d;
/* ===================== MOCK 1 ===================== */
{const r=S.rng(1101),n=120,c={seats:[],foot:[],price:[],terrace:[],comp:[]},y=[];
 for(let i=0;i<n;i++){const seats=r.int(20,80),foot=round(5+r.u()*35,1),price=round(1.5+r.u()*2,2),ter=r.u()<0.45?1:0,comp=r.int(0,6);
  c.seats.push(seats);c.foot.push(foot);c.price.push(price);c.terrace.push(ter);c.comp.push(comp);
  y.push(round(20+0.9*seats+2.2*foot-6*price+9*ter-0*comp+r.n()*12,1))}
 const names=['Seats','Footfall','EspressoPrice','Terrace','Competitors'];const m=S.ols(y,[c.seats,c.foot,c.price,c.terrace,c.comp],names);
 out.m1p1={sum:sumTbl(m,'MonthlySales',names),anova:anovaTbl(m,'MonthlySales'),coef:coefTbl(m,'MonthlySales'),resid:residPlot(m.yhat,m.res,'Unstandardized predicted value','Residual plot: residuals vs predicted value'),pp:ppPlot(m.res,'Normal P-P plot of the regression residuals'),
  ranges:Object.fromEntries(Object.entries(c).map(([k,v])=>[k,[Math.min(...v),Math.max(...v)]]))};keep.m1p1=m;keep.m1p1c=c;
 // P2: customer tests
 const r2=S.rng(1102),N=400,gender=[],card=[],basket=[],age=[];for(let i=0;i<N;i++){const g=r2.u()<0.52?1:0;const cd=r2.u()<(g?0.48:0.34)?1:0;gender.push(g);card.push(cd);age.push(r2.int(18,75));basket.push(round(42+(cd?7:0)+r2.n()*(cd?16:9),2))}
 const tab=[[0,0],[0,0]];gender.forEach((g,i)=>tab[g][card[i]?0:1]++);const ch=S.chi2(tab);
 const b1=basket.filter((_,i)=>card[i]),b0=basket.filter((_,i)=>!card[i]);const tt=S.twoT(b1,b0);const cr=S.corrTest(age,basket);const on=S.oneT(basket,45);
 out.m1p2={cross:crossTbl('Gender','LoyaltyCard',['Male','Female'],['Yes','No'],[tab[0],tab[1]],ch),chi:chiTbl(ch),group:groupStats('LoyaltyCard','Basket (€)','Yes','No',tt),indep:indepTbl('Basket (€)',tt),corr:corrTbl('Age','Basket',cr),one:oneTbl('Basket',45,on)};
 keep.m1p2={ch,tt,cr,on,tab};
 // P3: e-bike price with a missing SSE cell and a qualitative variable coded 1,2,3
 const r3=S.rng(1103),n3=60,bat=[],wt=[],brand=[],cargo=[],py=[];for(let i=0;i<n3;i++){const b=r3.int(300,800),w=round(18+r3.u()*12,1),br=r3.int(1,3),cg=r3.u()<0.3?1:0;bat.push(b);wt.push(w);brand.push(br);cargo.push(cg);
  py.push(round(900+2.1*b-15*w+(br===2?150:br===3?-80:0)+420*cg+r3.n()*160,0))}
 const m3=S.ols(py,[bat,wt,brand,cargo],['Battery','Weight','Brand','Cargo']);out.m1p3={anova:anovaTbl(m3,'Price','SSE'),coef:coefTbl(m3,'Price'),sum:sumTbl(m3,'Price',['Battery','Weight','Brand','Cargo'])};keep.m1p3=m3;
 // P4: PCA leisure habits
 const r4=S.rng(1104),n4=500,v=Array.from({length:8},()=>[]);for(let i=0;i<n4;i++){const a=r4.n(),b=r4.n(),cc=r4.n();
  const vals=[a+0.55*r4.n(),a+0.6*r4.n(),0.8*a+0.7*r4.n(),b+0.5*r4.n(),b+0.6*r4.n(),0.85*b+0.7*r4.n(),cc+0.55*r4.n(),cc+0.65*r4.n()];vals.forEach((x,j)=>v[j].push(x))}
 const nm=['Netflix','DisneyPlus','Cinema','Football','Gym','Running','Books','Podcasts'];const p=S.pca(v,nm);out.m1p4={...pcaTables(p),plot:loadPlot(p.rot.map(r=>[r[0],r[1]]),nm,'Component plot in rotated space (components 1 and 2)')};keep.m1p4=p;}
/* ===================== MOCK 2 ===================== */
{const r=S.rng(2201),n=150,c={stars:[],dist:[],rating:[],satis:[],reviews:[],spa:[],breakfast:[]},y=[];
 for(let i=0;i<n;i++){const st=r.int(1,5),d=round(0.2+r.u()*12,1),rt=round(clamp(5+st*0.6+r.n()*0.9,1,10),1),sa=round(clamp(rt*9.5+r.n()*3,0,100),1),rv=round(0.5+r.u()*20,1),spa=r.u()<0.35?1:0,bf=r.u()<0.6?1:0;
  c.stars.push(st);c.dist.push(d);c.rating.push(rt);c.satis.push(sa);c.reviews.push(rv);c.spa.push(spa);c.breakfast.push(bf);
  const mu=40+22*st-4.5*d+6*rt+0.05*sa+2.2*rv+18*spa+0*bf;y.push(round(mu+r.n()*(4+5.5*st),1))}
 const names=['Stars','DistanceCentre','Rating','Satisfaction','Reviews','Spa','Breakfast'];const m=S.ols(y,names.map(k=>c[{Stars:'stars',DistanceCentre:'dist',Rating:'rating',Satisfaction:'satis',Reviews:'reviews',Spa:'spa',Breakfast:'breakfast'}[k]]),names);
 out.m2p1={sum:sumTbl(m,'PricePerNight',names),anova:anovaTbl(m,'PricePerNight'),coef:coefTbl(m,'PricePerNight'),residStars:residPlot(c.stars,m.res,'Stars','Residual plot: residuals vs Stars'),residPred:residPlot(m.yhat,m.res,'Unstandardized predicted value','Residual plot: residuals vs predicted value'),pp:ppPlot(m.res,'Normal P-P plot of the regression residuals'),
  ranges:Object.fromEntries(Object.entries(c).map(([k,v])=>[k,[Math.min(...v),Math.max(...v)]]))};keep.m2p1=m;
 // P2 tests: paired, one-sample, Fisher, Spearman
 const r2=S.rng(2202),before=[],after=[];for(let i=0;i<64;i++){const b=round(60+r2.n()*12,1);before.push(b);after.push(round(b+2.4+r2.n()*6,1))}const pt=S.pairedT(after,before);
 const rate=[];for(let i=0;i<90;i++)rate.push(round(clamp(7.8+r2.n()*1.1,1,10),1));const ot=S.oneT(rate,8);
 const ftab=[[7,2],[3,8]];const fc=S.chi2(ftab);
 const stars=[],price=[];for(let i=0;i<80;i++){const s=r2.int(1,5);stars.push(s);price.push(round(50*Math.exp(0.35*s)+r2.n()*25,1))}const sp=S.spearman(stars,price);
 out.m2p2={paired:pairTbl('After','Before',pt),one:oneTbl('Rating',8,ot),cross:crossTbl('Chain','RenovatedRecently',['Independent','Chain'],['Yes','No'],ftab,fc),chi:chiTbl(fc),spear:corrTbl('Stars','PricePerNight',sp,"Spearman's rho")};keep.m2p2={pt,ot,fc,sp};
 // P3: three-category dummy (location), reference = city centre
 const r3=S.rng(2203),n3=90,size=[],sub=[],air=[],py=[];for(let i=0;i<n3;i++){const sz=r3.int(15,45),loc=r3.int(0,2);size.push(sz);sub.push(loc===1?1:0);air.push(loc===2?1:0);py.push(round(35+2.6*sz-28*(loc===1)-12*(loc===2)+r3.n()*9,1))}
 const m3=S.ols(py,[size,sub,air],['RoomSize','Suburb','Airport']);out.m2p3={coef:coefTbl(m3,'PricePerNight'),sum:sumTbl(m3,'PricePerNight',['RoomSize','Suburb','Airport'])};keep.m2p3=m3;
 // P4: PCA on hotel-guest expectations, one unrelated variable (Age) breaking "identical concept"
 const r4=S.rng(2204),v=Array.from({length:9},()=>[]);for(let i=0;i<300;i++){const a=r4.n(),b=r4.n();
  const vals=[a+0.5*r4.n(),a+0.55*r4.n(),a+0.6*r4.n(),-0.85*b+0.6*r4.n(),b+0.5*r4.n(),b+0.55*r4.n(),0.9*a+0.75*r4.n(),r4.n(),b*0.2+r4.n()];vals.forEach((x,j)=>v[j].push(x))}
 const nm=['Spa','Pool','Gym','PriceSensitivity','CentralLocation','PublicTransport','RoomService','Age','Parking'];const p=S.pca(v,nm);out.m2p4={...pcaTables(p),plot:loadPlot(p.rot.map(r=>[r[0],r[1]]),nm,'Component plot in rotated space')};keep.m2p4=p;}
/* ===================== MOCK 3 ===================== */
{const r=S.rng(3301),n=200,c={age:[],mileage:[],power:[],region:[],auto:[],owners:[],warranty:[]},y=[];
 for(let i=0;i<n;i++){const ag=round(1+r.u()*11,1),mi=round(5+r.u()*195,1),pw=r.int(70,250),rg=r.int(0,3),au=r.u()<0.5?1:0,ow=r.int(1,4),wa=r.u()<0.4?1:0;
  c.age.push(ag);c.mileage.push(mi);c.power.push(pw);c.region.push(rg);c.auto.push(au);c.owners.push(ow);c.warranty.push(wa);
  const mu=21000-900*ag-120*mi+0.42*mi*mi+60*pw+[0,800,-600,300][rg]+1500*au-150*ow+1200*wa;y.push(round(mu+r.n()*1800,0))}
 // two outliers (data entry problems) to discuss
 y[17]+=14000;y[133]-=12000;
 const names=['Age','Mileage','Power','Region','Automatic','PreviousOwners','Warranty'];const m=S.ols(y,[c.age,c.mileage,c.power,c.region,c.auto,c.owners,c.warranty],names);
 out.m3p1={sum:sumTbl(m,'Price',names),anova:anovaTbl(m,'Price'),coef:coefTbl(m,'Price'),residMil:residPlot(c.mileage,m.res,'Mileage (thousand km)','Residual plot: residuals vs Mileage'),resid:residPlot(m.yhat,m.res,'Unstandardized predicted value','Residual plot: residuals vs predicted value'),pp:ppPlot(m.res,'Normal P-P plot of the regression residuals'),
  ranges:Object.fromEntries(Object.entries(c).map(([k,v])=>[k,[Math.min(...v),Math.max(...v)]]))};keep.m3p1=m;
 // P3 PCA customers of an online electronics shop with a negative loading and prospects
 const r4=S.rng(3304),v=Array.from({length:10},()=>[]);for(let i=0;i<800;i++){const a=r4.n(),b=r4.n(),cc=r4.n();
  const vals=[a+0.5*r4.n(),a+0.55*r4.n(),-0.9*a+0.6*r4.n(),a*0.85+0.6*r4.n(),b+0.5*r4.n(),b+0.6*r4.n(),cc+0.5*r4.n(),cc+0.55*r4.n(),-0.8*cc+0.65*r4.n(),r4.n()];vals.forEach((x,j)=>v[j].push(x))}
 const nm=['Gaming','Streaming','PaperBooks','TechNews','Photography','Travel','PriceComparison','Coupons','BrandLoyalty','CityPopulation'];const p=S.pca(v,nm);
 let plot=loadPlot(p.rot.map(r=>[r[0],r[1]]),nm,'Component plot in rotated space (components 1 and 2); A and B are two prospects');
 plot=plot.replace('</svg>',`<text x="${180+0.75*150}" y="${180-0.7*150}" font-size="14" font-weight="700" fill="var(--ledger)">A</text><text x="${180-0.7*150}" y="${180+0.6*150}" font-size="14" font-weight="700" fill="var(--ledger)">B</text></svg>`);
 out.m3p3={...pcaTables(p),plot};keep.m3p3=p;}
/* ===================== Exercises (Exercises tab) ===================== */
{const r=S.rng(4401),a=[],b=[];for(let i=0;i<240;i++){const g=r.u()<0.5;(g?a:b).push(round(52+(g?2.1:0)+r.n()*14,2))}const t=S.twoT(a,b);
 out.x1={group:groupStats('Netflix','Income (k$)','Yes','No',t),indep:indepTbl('Income (k$)',t)};keep.x1=t;
 const r2=S.rng(4402),tab=[[62,48],[41,69]];const c=S.chi2(tab);out.x2={cross:crossTbl('Location','PurchasedTV',['Lille','Paris'],['Yes','No'],tab,c),chi:chiTbl(c)};keep.x2=c;
 const r3=S.rng(4403),pr=[],ad=[],sales=[];for(let i=0;i<40;i++){const p=round(4+r3.u()*3,2),d=round(2+r3.u()*3,1);pr.push(p);ad.push(d);sales.push(round(300-25*p+75*d+r3.n()*45,0))}
 const m=S.ols(sales,[pr,ad],['Price','Advertising']);out.x3={sum:sumTbl(m,'PieSales',['Price','Advertising']),anova:anovaTbl(m,'PieSales'),coef:coefTbl(m,'PieSales')};keep.x3=m;}
fs.writeFileSync(__dirname+'/eco-data.json',JSON.stringify(out));
// key numbers for writing the questions
const K={};for(const [k,m] of Object.entries(keep)){if(m&&m.coef)K[k]={n:m.n,R2:+m.R2.toFixed(3),adj:+m.adj.toFixed(3),syx:+m.syx.toFixed(3),F:+m.F.toFixed(3),pF:m.pF,SSR:+m.SSR.toFixed(3),SSE:+m.SSE.toFixed(3),SST:+m.SST.toFixed(3),dfR:m.dfR,dfE:m.dfE,coef:m.coef.map(c=>({n:c.name,b:+c.b.toFixed(3),se:+c.se.toFixed(3),t:+c.t.toFixed(3),p:+c.p.toFixed(4),lo:+c.lo.toFixed(3),hi:+c.hi.toFixed(3),vif:c.vif&&+c.vif.toFixed(3)}))};
 else if(m&&m.values)K[k]={values:m.values.map(v=>+v.toFixed(3)),pct:m.pct.map(v=>+v.toFixed(3)),cum:m.cumPct.map(v=>+v.toFixed(3)),keep:m.keep,rot:m.rot.map((r,i)=>m.names[i]+': '+r.map(v=>v.toFixed(3)).join(' ')),comm:m.comm.map(v=>+v.toFixed(3))};
 else K[k]=JSON.parse(JSON.stringify(m,(key,v)=>typeof v==='number'?+v.toFixed(4):v))}
K.ranges={m1:out.m1p1.ranges,m2:out.m2p1.ranges,m3:out.m3p1.ranges};
fs.writeFileSync(__dirname+'/eco-keys.json',JSON.stringify(K,null,1));
console.log('ok',Object.keys(out).join(','),'size',JSON.stringify(out).length);
