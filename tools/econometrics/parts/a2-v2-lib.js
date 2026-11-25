
/* ---------- v2 (24/11/2026): statistics and SPSS-like tables computed in the browser (generators, annotated outputs) ---------- */
const {NOTION,FIG,PLOT,STEPS,TREE,TRY,GL,ANNOT,svgPlot}=Rev.h;
const U=Rev.u,esc=Rev.h.esc,r2=x=>U.round(x,2);
const OUT='<b>Outside the slides:</b>';
// same functions as tools/econometrics/stats.js (used for the mocks), so generated outputs follow the course's SPSS logic
const ST=(()=>{const S={};
  const lgamma=x=>{const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];
    let y=x,t=x+5.5;t-=(x+0.5)*Math.log(t);let ser=1.000000000190015;for(const ci of c)ser+=ci/++y;return -t+Math.log(2.5066282746310005*ser/x)};
  const betacf=(a,b,x)=>{let qab=a+b,qap=a+1,qam=a-1,c=1,d=1-qab*x/qap;if(Math.abs(d)<1e-30)d=1e-30;d=1/d;let h=d;
    for(let m=1;m<=300;m++){const m2=2*m;let aa=m*(b-m)*x/((qam+m2)*(a+m2));d=1+aa*d;if(Math.abs(d)<1e-30)d=1e-30;c=1+aa/c;if(Math.abs(c)<1e-30)c=1e-30;d=1/d;h*=d*c;
      aa=-(a+m)*(qab+m)*x/((a+m2)*(qap+m2));d=1+aa*d;if(Math.abs(d)<1e-30)d=1e-30;c=1+aa/c;if(Math.abs(c)<1e-30)c=1e-30;d=1/d;const del=d*c;h*=del;if(Math.abs(del-1)<3e-12)break}return h};
  S.ibeta=(a,b,x)=>{if(x<=0)return 0;if(x>=1)return 1;const bt=Math.exp(lgamma(a+b)-lgamma(a)-lgamma(b)+a*Math.log(x)+b*Math.log(1-x));
    return x<(a+1)/(a+b+2)?bt*betacf(a,b,x)/a:1-bt*betacf(b,a,1-x)/b};
  S.tP2=(t,df)=>S.ibeta(df/2,0.5,df/(df+t*t));
  S.tCrit=(df,alpha=0.05)=>{let lo=0,hi=50;for(let i=0;i<100;i++){const m=(lo+hi)/2;if(S.tP2(m,df)>alpha)lo=m;else hi=m}return (lo+hi)/2};
  S.fP=(F,d1,d2)=>S.ibeta(d2/2,d1/2,d2/(d2+d1*F));
  S.mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
  S.sd=a=>{const m=S.mean(a);return Math.sqrt(a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-1))};
  S.inv=M=>{const n=M.length,A=M.map((r,i)=>[...r,...Array.from({length:n},(_,j)=>i===j?1:0)]);
    for(let c=0;c<n;c++){let p=c;for(let r=c+1;r<n;r++)if(Math.abs(A[r][c])>Math.abs(A[p][c]))p=r;[A[c],A[p]]=[A[p],A[c]];const d=A[c][c];for(let j=0;j<2*n;j++)A[c][j]/=d;
      for(let r=0;r<n;r++)if(r!==c){const f=A[r][c];for(let j=0;j<2*n;j++)A[r][j]-=f*A[c][j]}}return A.map(r=>r.slice(n))};
  const fit=(y,cols)=>{const n=y.length,k=cols.length,X=y.map((_,i)=>[1,...cols.map(c=>c[i])]);
    const XtX=Array.from({length:k+1},(_,a)=>Array.from({length:k+1},(_,b)=>X.reduce((s,r)=>s+r[a]*r[b],0)));
    const Xty=Array.from({length:k+1},(_,a)=>X.reduce((s,r,i)=>s+r[a]*y[i],0)),XI=S.inv(XtX),b=XI.map(r=>r.reduce((s,v,j)=>s+v*Xty[j],0));
    const yhat=X.map(r=>r.reduce((s,v,j)=>s+v*b[j],0)),res=y.map((v,i)=>v-yhat[i]),ym=S.mean(y);
    return {n,k,b,XI,yhat,res,SST:y.reduce((s,v)=>s+(v-ym)**2,0),SSE:res.reduce((s,v)=>s+v*v,0)}};
  S.ols=(y,cols,names)=>{const m=fit(y,cols),{n,k,b,XI}=m,SSR=m.SST-m.SSE,dfR=k,dfE=n-k-1,MSE=m.SSE/dfE,MSR=SSR/dfR,F=MSR/MSE,R2=SSR/m.SST,tc=S.tCrit(dfE);
    const coef=b.map((bi,j)=>{const se=Math.sqrt(MSE*XI[j][j]),t=bi/se;return {name:j?names[j-1]:'(Constant)',b:bi,se,t,p:S.tP2(t,dfE),lo:bi-tc*se,hi:bi+tc*se}});
    const sy=S.sd(y);cols.forEach((c,j)=>{coef[j+1].beta=b[j+1]*S.sd(c)/sy;if(k<2){coef[j+1].vif=1;return}const o=fit(c,cols.filter((_,q)=>q!==j));coef[j+1].vif=1/(o.SSE/o.SST)});
    return Object.assign(m,{SSR,dfR,dfE,MSE,MSR,F,pF:S.fP(F,dfR,dfE),R:Math.sqrt(R2),R2,adj:1-(1-R2)*(n-1)/dfE,syx:Math.sqrt(MSE),coef,tc})};
  S.normPdf=z=>Math.exp(-z*z/2)/Math.sqrt(2*Math.PI);
  return S})();
// SPSS formatting: .123, <.001; cells may carry a note key (annotated outputs)
const f3=(x,d=3)=>{if(x==null||x==='')return '';const v=Number(x).toFixed(d);return v.replace(/^(-?)0\./,'$1.')};
const fn3=(x,d=3)=>Number(x).toFixed(d);
const fp3=p=>p<0.001?'&lt;.001':f3(p,3);
const C_=(v,note)=>({v,note});
const tblS=(title,head,rows,note)=>`<div class="tbl spss"><table><caption>${title}</caption><thead><tr>${head.map((h,i)=>`<th${i?' class="n"':''}>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>{const o=c&&typeof c==='object'?c:{v:c};return `<td${i?' class="n"':''}${o.note?` data-note="${o.note}"`:''}>${o.v==null?'':o.v}</td>`}).join('')}</tr>`).join('')}</tbody></table>${note?`<p class="spss-note">${note}</p>`:''}</div>`;
function regTables(m,dv,preds,o={}){
  const sum=tblS('Model Summary',['Model','R','R Square','Adjusted R Square','Std. Error of the Estimate'],[['1',C_(f3(m.R),'R'),C_(f3(m.R2),'R2'),C_(f3(m.adj),'adj'),C_(fn3(m.syx),'syx')]],`a. Predictors: (Constant), ${preds.join(', ')} · b. Dependent Variable: ${dv}`);
  const anova=tblS('ANOVA',['Model','Sum of Squares','df','Mean Square','F','Sig.'],[['1 Regression',C_(fn3(m.SSR),'SSR'),C_(m.dfR,'dfR'),C_(fn3(m.MSR),'MSR'),C_(fn3(m.F),'F'),C_(fp3(m.pF),'pF')],
    ['Residual',o.hideSSE?'<b>AAAA</b>':C_(fn3(m.SSE),'SSE'),C_(m.dfE,'dfE'),C_(fn3(m.MSE),'MSE'),'',''],['Total',C_(fn3(m.SST),'SST'),m.n-1,'','','']],`a. Dependent Variable: ${dv}`);
  const coef=tblS('Coefficients',['Model','B','Std. Error','Beta','t','Sig.','95% CI Lower','95% CI Upper'].concat(o.vif?['VIF']:[]),
    m.coef.map((c,j)=>[j?c.name:'1 (Constant)',C_(fn3(c.b),'b'+j),C_(fn3(c.se),'se'+j),j?C_(f3(c.beta),'beta'+j):'',C_(fn3(c.t),'t'+j),C_(fp3(c.p),'p'+j),C_(fn3(c.lo),'lo'+j),C_(fn3(c.hi),'hi'+j)].concat(o.vif?[j?C_(fn3(c.vif),'vif'+j):'']:[])),`a. Dependent Variable: ${dv}`);
  return {sum,anova,coef,all:sum+anova+coef};
}
const sig=p=>p<0.05;
const QUAL=r=>r<0.5?'low':r<0.6?'limited':r<0.7?'medium':r<0.8?'good':r<0.9?'very good':'excellent (or too good to be true)';
// notes of a regression output: what each number means, with the numbers of this output
function regNotes(m,dv,preds,units={}){
  const N={R:{t:'R (multiple correlation)',d:`Correlation between the observed and the predicted ${dv}; R² = ${f3(m.R)}² = ${f3(m.R2)}. Not used to judge the model: read R² or the adjusted R².`},
   R2:{t:'R² (coefficient of determination)',d:`${(m.R2*100).toFixed(1)}% of the variation of ${dv} is explained by the variation of ${preds.join(', ')}. = SSR/SST = ${fn3(m.SSR)} / ${fn3(m.SST)}.`},
   adj:{t:'Adjusted R²',d:`${(m.adj*100).toFixed(1)}%: R² penalized for the number of variables (k = ${m.k}) and the sample size (n = ${m.n}). Use it with several variables: quality ${QUAL(m.adj)} on the slides’ scale. 1 − (1 − R²)(n − 1)/(n − k − 1).`},
   syx:{t:'Standard error of the estimate (SYX)',d:`On average, the observed ${dv} is ${fn3(m.syx)} units away from the predicted value. Judge it against the size of ${dv}. = √(SSE/(n − k − 1)) = √MSE.`},
   SSR:{t:'SSR, regression (explained) sum of squares',d:'The part of the variation of Y explained by the model. SST = SSR + SSE.'},
   SSE:{t:'SSE, error (unexplained) sum of squares',d:'The part of the variation of Y the model cannot explain (missing variables…). SSE = SST − SSR.'},
   SST:{t:'SST, total sum of squares',d:`Total variation of ${dv} around its mean: the quantity to explain.`},
   dfR:{t:'df of the regression = k',d:`The number of explicative variables: k = ${m.k}.`},
   dfE:{t:'df of the residual = n − k − 1',d:`${m.n} − ${m.k} − 1 = ${m.dfE}. So the sample size is n = ${m.dfE} + ${m.k} + 1 = ${m.n} (Total df = n − 1).`},
   MSR:{t:'MSR = SSR/k',d:'The explained variation per variable (the “mean quality provided per variable”).'},
   MSE:{t:'MSE = SSE/(n − k − 1)',d:'The unexplained variation per degree of freedom; √MSE = SYX.'},
   F:{t:'F statistic of the global test',d:`F = MSR/MSE = ${fn3(m.F)}. The larger F, the more confident we are that at least one variable has an effect.`},
   pF:{t:'Sig. of the F test (global significance)',d:`H0: ${preds.map((_,j)=>'β'+(j+1)).join(' = ')} = 0 (no variable has an effect); H1: at least one βj ≠ 0. p ${m.pF<0.001?'&lt; .001':'= '+f3(m.pF)} ${sig(m.pF)?'&lt; 0.05: reject H0, the model is globally significant (at least one variable influences '+dv+').':'≥ 0.05: we cannot reject H0: no evidence that any variable has an effect.'}`}};
  m.coef.forEach((c,j)=>{const nm=j?c.name:'the constant',u=units[c.name]||'unit';
    if(!j){N.b0={t:'b0, the intercept',d:`Predicted ${dv} when every X = 0: ${fn3(c.b)}. Often meaningless (no case with all X = 0).`};}
    else N['b'+j]={t:`B of ${c.name}`,d:sig(c.p)?`If ${c.name} increases by one ${u}, ${dv} ${c.b>=0?'increases':'decreases'} by ${fn3(Math.abs(c.b))} on average, everything else remaining the same.`:`Not significant (p = ${f3(c.p)} ≥ 0.05): we do not interpret this coefficient.`};
    N['se'+j]={t:`Std. error of b (${nm})`,d:`The estimated standard deviation of the coefficient s(b) = ${fn3(c.se)}: used in t = b/s(b) and in the confidence interval.`};
    if(j)N['beta'+j]={t:`Standardized Beta of ${c.name}`,d:'The coefficient once all variables are standardized. Not used at the exam.'};
    N['t'+j]={t:`t statistic (${nm})`,d:`t = b/s(b) = ${fn3(c.b)} / ${fn3(c.se)} = ${fn3(c.t)}, with n − k − 1 = ${m.dfE} df.`};
    N['p'+j]={t:`Sig. of the t test (${nm})`,d:j?`H0: β${j} = 0 (${c.name} has no linear effect on ${dv}); H1: β${j} ≠ 0. p ${c.p<0.001?'&lt; .001':'= '+f3(c.p)} ${sig(c.p)?'&lt; 0.05: reject H0, '+c.name+' has a significant effect.':'≥ 0.05: no significant effect.'}`:'Test that the intercept is 0: not interpreted at the exam.'};
    N['lo'+j]={t:`Lower bound of the 95% CI (${nm})`,d:j?`We are 95% confident that when ${c.name} increases by one ${u}, ${dv} changes by between ${fn3(c.lo)} and ${fn3(c.hi)}, everything else remaining the same.${c.lo<0&&c.hi>0?' The interval contains 0: not significant at 5%.':''}`:`[${fn3(c.lo)}; ${fn3(c.hi)}] = b0 ± t·s(b0).`};
    N['hi'+j]=Object.assign({},N['lo'+j],{t:`Upper bound of the 95% CI (${nm})`});
    if(j&&c.vif!=null)N['vif'+j]={t:`VIF of ${c.name}`,d:`1/(1 − R²j) = ${fn3(c.vif)} where R²j explains ${c.name} by the other X. ${c.vif>5?'&gt; 5: multicollinearity, remove the variable with the highest VIF first, then rerun.':'≤ 5: no multicollinearity problem for this variable.'}`}});
  return N;
}
// the course datasets (textbook examples used in the slides): Regression1 (10 houses) and Regression2 (15 weeks of pie sales)
const HOUSE={size:[1400,1600,1700,1875,1100,1550,2350,2450,1425,1700],price:[245,312,279,308,199,219,405,324,319,255]};
const PIES={sales:[350,460,350,430,350,380,430,470,450,490,340,300,440,450,300],price:[5.5,7.5,8,8,6.8,7.5,4.5,6.4,7,5,7.2,7.9,5.9,5,7],adv:[3.3,3.3,3,4.5,3,4,3,3.7,3.5,4,3.5,3.2,4,3.5,2.7]};
const M_HOUSE=ST.ols(HOUSE.price,[HOUSE.size],['Size']),M_PIES=ST.ols(PIES.sales,[PIES.price,PIES.adv],['Price','Advertising']);
// generated regression datasets: contexts with plausible units
const CTX=[
 {dv:'MonthlySales',u:'k€',x:[['Footfall','100 visitors/day',0.6,3,1.6],['Seats','seat',0.15,10,1.1],['Price','€',1.5,4,-5],['Competitors','competitor',0,6,-1.2]],b0:20,noise:6},
 {dv:'Rent',u:'€',x:[['Surface','m²',20,110,9.5],['Floor','floor',0,8,6],['DistanceMetro','100 m',1,20,-7],['Age','year',0,60,-0.8]],b0:150,noise:70},
 {dv:'BikePrice',u:'€',x:[['Battery','Wh',300,800,1.8],['Weight','kg',18,32,-12],['Gears','gear',1,12,9],['Warranty','year',1,5,25]],b0:600,noise:160},
 {dv:'HotelPrice',u:'€',x:[['Stars','star',1,5,22],['DistanceCentre','km',0.2,8,-4.5],['Rating','point',5,10,18],['Rooms','room',20,300,0.02]],b0:20,noise:22}];
function genReg(u,k=2,n){const c=U.pick(CTX),xs=U.shuffle(c.x.slice()).slice(0,k);n=n||u.pick([40,60,80,100,120,150]);
  // one variable may have a tiny true effect, so that it is often not significant
  const weak=u.int(0,k);const cols=xs.map(x=>Array.from({length:n},()=>U.round(x[2]+Math.random()*(x[3]-x[2]),x[3]-x[2]>20?0:1)));
  const y=Array.from({length:n},(_,i)=>{let v=c.b0+c.noise*Rz();xs.forEach((x,j)=>{v+=(j===weak?x[4]*0.05:x[4])*cols[j][i]});return U.round(v,1)});
  const m=ST.ols(y,cols,xs.map(x=>x[0]));return {m,dv:c.dv,u:c.u,names:xs.map(x=>x[0]),units:Object.fromEntries(xs.map(x=>[x[0],x[1]])),cols,ranges:xs.map((x,j)=>[Math.min(...cols[j]),Math.max(...cols[j])])}}
function Rz(){let a=0,b=0;while(!a)a=Math.random();while(!b)b=Math.random();return Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*b)}
