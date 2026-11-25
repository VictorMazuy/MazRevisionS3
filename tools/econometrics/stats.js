// Small statistics library used to generate consistent SPSS-like outputs for the Econometrics site.
const S={};
// seeded PRNG + normal draws
S.rng=seed=>{let s=seed>>>0||1;const u=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return (s+0.5)/4294967296};
  const n=()=>Math.sqrt(-2*Math.log(u()))*Math.cos(2*Math.PI*u());return {u,n,int:(a,b)=>a+Math.floor(u()*(b-a+1))}};
// special functions
const lgamma=x=>{const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];
  let y=x,t=x+5.5;t-=(x+0.5)*Math.log(t);let ser=1.000000000190015;for(const ci of c)ser+=ci/++y;return -t+Math.log(2.5066282746310005*ser/x)};
const betacf=(a,b,x)=>{let qab=a+b,qap=a+1,qam=a-1,c=1,d=1-qab*x/qap;if(Math.abs(d)<1e-30)d=1e-30;d=1/d;let h=d;
  for(let m=1;m<=300;m++){const m2=2*m;let aa=m*(b-m)*x/((qam+m2)*(a+m2));d=1+aa*d;if(Math.abs(d)<1e-30)d=1e-30;c=1+aa/c;if(Math.abs(c)<1e-30)c=1e-30;d=1/d;h*=d*c;
    aa=-(a+m)*(qab+m)*x/((a+m2)*(qap+m2));d=1+aa*d;if(Math.abs(d)<1e-30)d=1e-30;c=1+aa/c;if(Math.abs(c)<1e-30)c=1e-30;d=1/d;const del=d*c;h*=del;if(Math.abs(del-1)<3e-12)break}return h};
S.ibeta=(a,b,x)=>{if(x<=0)return 0;if(x>=1)return 1;const bt=Math.exp(lgamma(a+b)-lgamma(a)-lgamma(b)+a*Math.log(x)+b*Math.log(1-x));
  return x<(a+1)/(a+b+2)?bt*betacf(a,b,x)/a:1-bt*betacf(b,a,1-x)/b};
S.tP2=(t,df)=>S.ibeta(df/2,0.5,df/(df+t*t));                 // two-sided p of a t statistic
S.tCdf=(t,df)=>{const p=S.ibeta(df/2,0.5,df/(df+t*t))/2;return t>0?1-p:p};
S.tCrit=(df,alpha=0.05)=>{let lo=0,hi=50;for(let i=0;i<100;i++){const m=(lo+hi)/2;if(S.tP2(m,df)>alpha)lo=m;else hi=m}return (lo+hi)/2};
S.fP=(F,d1,d2)=>S.ibeta(d2/2,d1/2,d2/(d2+d1*F));             // upper tail of F
const gser=(a,x)=>{let sum=1/a,del=sum,ap=a;for(let n=0;n<500;n++){ap++;del*=x/ap;sum+=del;if(Math.abs(del)<Math.abs(sum)*1e-14)break}return sum*Math.exp(-x+a*Math.log(x)-lgamma(a))};
const gcf=(a,x)=>{let b=x+1-a,c=1e300,d=1/b,h=d;for(let i=1;i<500;i++){const an=-i*(i-a);b+=2;d=an*d+b;if(Math.abs(d)<1e-300)d=1e-300;c=b+an/c;if(Math.abs(c)<1e-300)c=1e-300;d=1/d;const del=d*c;h*=del;if(Math.abs(del-1)<1e-14)break}return Math.exp(-x+a*Math.log(x)-lgamma(a))*h};
S.chiP=(x,df)=>{if(x<=0)return 1;const a=df/2,y=x/2;return y<a+1?1-gser(a,y):gcf(a,y)};
S.normCdf=z=>{const t=1/(1+0.2316419*Math.abs(z)),d=0.3989422804014327*Math.exp(-z*z/2);const p=d*t*(0.31938153+t*(-0.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return z>0?1-p:p};
// descriptive
S.mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
S.sd=a=>{const m=S.mean(a);return Math.sqrt(a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-1))};
S.corr=(a,b)=>{const ma=S.mean(a),mb=S.mean(b);let sab=0,sa=0,sb=0;for(let i=0;i<a.length;i++){sab+=(a[i]-ma)*(b[i]-mb);sa+=(a[i]-ma)**2;sb+=(b[i]-mb)**2}return sab/Math.sqrt(sa*sb)};
S.corrTest=(a,b)=>{const r=S.corr(a,b),n=a.length,t=r*Math.sqrt((n-2)/(1-r*r));return {r,p:S.tP2(t,n-2),n}};
const rank=a=>{const idx=a.map((v,i)=>[v,i]).sort((x,y)=>x[0]-y[0]),r=new Array(a.length);for(let i=0;i<idx.length;){let j=i;while(j+1<idx.length&&idx[j+1][0]===idx[i][0])j++;for(let k=i;k<=j;k++)r[idx[k][1]]=(i+j)/2+1;i=j+1}return r};
S.spearman=(a,b)=>S.corrTest(rank(a),rank(b));
// matrices
S.inv=M=>{const n=M.length,A=M.map((r,i)=>[...r,...Array.from({length:n},(_,j)=>i===j?1:0)]);
  for(let c=0;c<n;c++){let p=c;for(let r=c+1;r<n;r++)if(Math.abs(A[r][c])>Math.abs(A[p][c]))p=r;[A[c],A[p]]=[A[p],A[c]];const d=A[c][c];for(let j=0;j<2*n;j++)A[c][j]/=d;
    for(let r=0;r<n;r++)if(r!==c){const f=A[r][c];for(let j=0;j<2*n;j++)A[r][j]-=f*A[c][j]}}return A.map(r=>r.slice(n))};
// OLS: y vector, X = array of columns (no intercept), names
S.ols=(y,cols,names)=>{const n=y.length,k=cols.length,X=y.map((_,i)=>[1,...cols.map(c=>c[i])]);
  const XtX=Array.from({length:k+1},(_,a)=>Array.from({length:k+1},(_,b)=>X.reduce((s,r)=>s+r[a]*r[b],0)));
  const Xty=Array.from({length:k+1},(_,a)=>X.reduce((s,r,i)=>s+r[a]*y[i],0));const XI=S.inv(XtX);
  const b=XI.map(r=>r.reduce((s,v,j)=>s+v*Xty[j],0));const yhat=X.map(r=>r.reduce((s,v,j)=>s+v*b[j],0)),res=y.map((v,i)=>v-yhat[i]);
  const ym=S.mean(y),SST=y.reduce((s,v)=>s+(v-ym)**2,0),SSE=res.reduce((s,v)=>s+v*v,0),SSR=SST-SSE;const dfR=k,dfE=n-k-1;
  const MSE=SSE/dfE,MSR=SSR/dfR,F=MSR/MSE,R2=SSR/SST,adj=1-(1-R2)*(n-1)/dfE,syx=Math.sqrt(MSE);const tc=S.tCrit(dfE);
  const coef=b.map((bi,j)=>{const se=Math.sqrt(MSE*XI[j][j]),t=bi/se;return {name:j?names[j-1]:'(Constant)',b:bi,se,t,p:S.tP2(t,dfE),lo:bi-tc*se,hi:bi+tc*se}});
  // VIF: regress each X on the others
  cols.forEach((c,j)=>{if(k<2){coef[j+1].vif=1;return}const others=cols.filter((_,q)=>q!==j);const sub=S.olsLite(c,others);coef[j+1].vif=1/(1-sub)});
  // standardized beta
  const sy=S.sd(y);cols.forEach((c,j)=>coef[j+1].beta=b[j+1]*S.sd(c)/sy);
  return {n,k,b,coef,yhat,res,SST,SSE,SSR,dfR,dfE,MSE,MSR,F,pF:S.fP(F,dfR,dfE),R:Math.sqrt(R2),R2,adj,syx}};
S.olsLite=(y,cols)=>{const n=y.length,k=cols.length,X=y.map((_,i)=>[1,...cols.map(c=>c[i])]);
  const XtX=Array.from({length:k+1},(_,a)=>Array.from({length:k+1},(_,b)=>X.reduce((s,r)=>s+r[a]*r[b],0)));
  const Xty=Array.from({length:k+1},(_,a)=>X.reduce((s,r,i)=>s+r[a]*y[i],0));const XI=S.inv(XtX);const b=XI.map(r=>r.reduce((s,v,j)=>s+v*Xty[j],0));
  const ym=S.mean(y),SST=y.reduce((s,v)=>s+(v-ym)**2,0),SSE=y.reduce((s,v,i)=>s+(v-X[i].reduce((q,w,j)=>q+w*b[j],0))**2,0);return 1-SSE/SST};
// tests
S.oneT=(a,mu0)=>{const n=a.length,m=S.mean(a),s=S.sd(a),se=s/Math.sqrt(n),t=(m-mu0)/se,tc=S.tCrit(n-1);return {n,m,s,se,t,df:n-1,p:S.tP2(t,n-1),diff:m-mu0,lo:m-mu0-tc*se,hi:m-mu0+tc*se}};
S.twoT=(a,b)=>{const n1=a.length,n2=b.length,m1=S.mean(a),m2=S.mean(b),s1=S.sd(a),s2=S.sd(b);
  // Levene (absolute deviations from the mean) = one-way ANOVA on |x - mean|
  const z1=a.map(x=>Math.abs(x-m1)),z2=b.map(x=>Math.abs(x-m2)),zm=S.mean([...z1,...z2]),z1m=S.mean(z1),z2m=S.mean(z2);
  const ssb=n1*(z1m-zm)**2+n2*(z2m-zm)**2,ssw=z1.reduce((s,z)=>s+(z-z1m)**2,0)+z2.reduce((s,z)=>s+(z-z2m)**2,0),Fl=ssb/(ssw/(n1+n2-2));
  const sp=Math.sqrt(((n1-1)*s1*s1+(n2-1)*s2*s2)/(n1+n2-2)),seE=sp*Math.sqrt(1/n1+1/n2),tE=(m1-m2)/seE,dfE=n1+n2-2;
  const v1=s1*s1/n1,v2=s2*s2/n2,seW=Math.sqrt(v1+v2),tW=(m1-m2)/seW,dfW=(v1+v2)**2/(v1*v1/(n1-1)+v2*v2/(n2-1));
  const cE=S.tCrit(dfE),cW=S.tCrit(dfW);
  return {n1,n2,m1,m2,s1,s2,leveneF:Fl,leveneP:S.fP(Fl,1,dfE),eq:{t:tE,df:dfE,p:S.tP2(tE,dfE),diff:m1-m2,se:seE,lo:m1-m2-cE*seE,hi:m1-m2+cE*seE},
    uneq:{t:tW,df:dfW,p:S.tP2(tW,dfW),diff:m1-m2,se:seW,lo:m1-m2-cW*seW,hi:m1-m2+cW*seW}}};
S.pairedT=(a,b)=>{const d=a.map((x,i)=>x-b[i]);const r=S.oneT(d,0);return {...r,m1:S.mean(a),m2:S.mean(b),s1:S.sd(a),s2:S.sd(b),corr:S.corr(a,b)}};
S.chi2=tab=>{const R=tab.length,C=tab[0].length,rt=tab.map(r=>r.reduce((s,v)=>s+v,0)),ct=tab[0].map((_,j)=>tab.reduce((s,r)=>s+r[j],0)),N=rt.reduce((s,v)=>s+v,0);
  const E=tab.map((r,i)=>r.map((_,j)=>rt[i]*ct[j]/N));let x=0;tab.forEach((r,i)=>r.forEach((o,j)=>x+=(o-E[i][j])**2/E[i][j]));const df=(R-1)*(C-1);
  const low=E.flat().filter(e=>e<5).length;let fisher=null;
  if(R===2&&C===2){const [a,b]=tab[0],[c,d]=tab[1],r1=a+b,c1=a+c;const lf=n=>lgamma(n+1);const pr=x=>Math.exp(lf(r1)+lf(N-r1)+lf(c1)+lf(N-c1)-lf(N)-lf(x)-lf(r1-x)-lf(c1-x)-lf(N-r1-c1+x));
    const p0=pr(a);let p=0;for(let x=Math.max(0,r1+c1-N);x<=Math.min(r1,c1);x++){const q=pr(x);if(q<=p0*(1+1e-7))p+=q}fisher=Math.min(1,p)}
  return {E,chi2:x,df,p:S.chiP(x,df),rt,ct,N,low,minE:Math.min(...E.flat()),fisher}};
// PCA on the correlation matrix + varimax
S.jacobi=A=>{const n=A.length;let a=A.map(r=>[...r]),V=a.map((_,i)=>a.map((_,j)=>i===j?1:0));
  for(let sweep=0;sweep<100;sweep++){let off=0;for(let i=0;i<n;i++)for(let j=i+1;j<n;j++)off+=a[i][j]**2;if(off<1e-20)break;
    for(let p=0;p<n;p++)for(let q=p+1;q<n;q++){if(Math.abs(a[p][q])<1e-15)continue;const th=(a[q][q]-a[p][p])/(2*a[p][q]),t=Math.sign(th||1)/(Math.abs(th)+Math.sqrt(th*th+1)),c=1/Math.sqrt(t*t+1),s=t*c;
      for(let k=0;k<n;k++){const akp=a[k][p],akq=a[k][q];a[k][p]=c*akp-s*akq;a[k][q]=s*akp+c*akq}
      for(let k=0;k<n;k++){const apk=a[p][k],aqk=a[q][k];a[p][k]=c*apk-s*aqk;a[q][k]=s*apk+c*aqk}
      for(let k=0;k<n;k++){const vkp=V[k][p],vkq=V[k][q];V[k][p]=c*vkp-s*vkq;V[k][q]=s*vkp+c*vkq}}}
  const ev=a.map((r,i)=>r[i]);const order=ev.map((v,i)=>i).sort((x,y)=>ev[y]-ev[x]);return {values:order.map(i=>ev[i]),vectors:order.map(i=>V.map(r=>r[i]))}};
S.varimax=L=>{const p=L.length,m=L[0].length;if(m<2)return L.map(r=>[...r]);const h=L.map(r=>Math.sqrt(r.reduce((s,v)=>s+v*v,0)));let A=L.map((r,i)=>r.map(v=>v/h[i]));
  for(let it=0;it<100;it++){let changed=0;for(let i=0;i<m;i++)for(let j=i+1;j<m;j++){let u,v,A_=0,B=0,C=0,D=0;
      for(let k=0;k<p;k++){const x=A[k][i],y=A[k][j];u=x*x-y*y;v=2*x*y;A_+=u;B+=v;C+=u*u-v*v;D+=2*u*v}
      const num=D-2*A_*B/p,den=C-(A_*A_-B*B)/p,phi=Math.atan2(num,den)/4;if(Math.abs(phi)>1e-10){changed=1;const c=Math.cos(phi),s=Math.sin(phi);for(let k=0;k<p;k++){const x=A[k][i],y=A[k][j];A[k][i]=c*x+s*y;A[k][j]=-s*x+c*y}}}
    if(!changed)break}
  A=A.map((r,i)=>r.map(v=>v*h[i]));
  // sign: make the largest loading of each column positive; order columns by explained variance
  for(let j=0;j<m;j++){const s=A.reduce((q,r)=>q+r[j]**3,0);if(s<0)A.forEach(r=>r[j]=-r[j])}
  const varj=Array.from({length:m},(_,j)=>A.reduce((q,r)=>q+r[j]**2,0));const ord=varj.map((v,j)=>j).sort((x,y)=>varj[y]-varj[x]);return A.map(r=>ord.map(j=>r[j]))};
S.pca=(cols,names)=>{const p=cols.length,R=cols.map(a=>cols.map(b=>S.corr(a,b)));const e=S.jacobi(R);const keep=e.values.filter(v=>v>1).length;
  const L=names.map((_,i)=>Array.from({length:keep},(_,j)=>e.vectors[j][i]*Math.sqrt(e.values[j])));const rot=S.varimax(L);
  const comm=L.map(r=>r.reduce((s,v)=>s+v*v,0));const pct=e.values.map(v=>v/p*100);let cum=0;const cumPct=pct.map(v=>cum+=v);
  const n=cols[0].length,corrP=cols.map(a=>cols.map(b=>a===b?0:S.corrTest(a,b).p));
  return {R,corrP,values:e.values,pct,cumPct,keep,L,rot,comm,names,n}};
module.exports=S;
