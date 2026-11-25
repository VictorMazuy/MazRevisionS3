
/* ---------- topic sheets (content from the course slides, list of tests and past exams) ---------- */
const SHEETS={};
SHEETS.t1=`
<div class="eyebrow">Chapter 1 · Midterm (basics reused at the final)</div><h2>Understand, read and display data</h2>
<p class="lede">Goal: name the type of each variable, choose the right descriptive tool and the right correlation, and read a box plot.</p>
<h3>1. Types of variables</h3>
${T(['Type','Definition','Example'],[
['Qualitative <b>binary</b> (dichotomous)','2 outcomes; an average is not relevant','yes/no, dead/alive'],
['Qualitative <b>nominal</b>','3+ outcomes that cannot be ranked','colour, shape of a car'],
['Qualitative <b>ordinal</b>','outcomes that can be ranked, with a logical order','rank in a competition, a Likert scale'],
['Quantitative <b>discrete / continuous</b>','an average is relevant; integers vs any value','number of babies; a weight'],
['<b>Ratio</b> vs <b>interval</b>','ratio: a true zero (0 km = 0 cm, 0 €); interval: arbitrary zero','price vs temperature in °C']])}
<p>A <b>Likert scale</b> is an ordinal variable with several categories (2026 midterm: a nutri-score with 7 categories A–G can be read as a Likert scale). Population: Greek letters (μ, σ, β); sample: Latin letters (x̄, s, b).</p>
<p><b>Dependent variable (DV)</b>: the outcome, the consequence; typically one per analysis. <b>Extraneous variable</b>: a variable you do not take into consideration that might influence the outcome.</p>
<h3>2. Describing one variable</h3>
<ul><li>Central tendency: mean (sensitive to outliers), median (resistant to outliers), mode.</li>
<li>Box plot: minimum, Q1, median, Q3, maximum; IQR = Q3 − Q1. SPSS flags potential outliers below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR.</li></ul>
<h3>3. Correlation: which one?</h3>
${T(['Situation','Tool','Range'],[
['Two quantitative variables, roughly <b>linear</b> link, few outliers (normality often neglected)','<b>Pearson</b> r','−1 to 1'],
['Two quantitative variables, <b>monotonic</b> but not linear link','<b>Spearman</b> ρ (works on ranks)','−1 to 1'],
['Ordinal + ordinal, or ordinal + quantitative','<b>Spearman</b> or <b>Kendall</b> τ (almost equivalent)','−1 to 1'],
['A nominal variable (e.g. taste “tasty / not tasty”)','<b>No correlation</b>: use a χ² test','—']])}
${F('|r| < 0.4  very small to weak   ·   0.4–0.6  moderate   ·   0.6–1  strong')}
${TRAP('“Correlation does not imply causation.” And a correlation computed with a nominal variable means nothing (2026 midterm: “correlation between calories and taste = +0.73” → nothing can be said, taste is nominal).')}
`;

SHEETS.t2=`
<div class="eyebrow">Chapter 2 · Midterm (basics reused at the final)</div><h2>Sampling and confidence intervals</h2>
<p class="lede">Goal: interpret a confidence interval in the right words and explain what changes its margin of error.</p>
<h3>1. The idea</h3>
<p>A point estimate (x̄) changes from sample to sample. A <b>confidence interval</b> is an interval of values that we can be confident contains the true, unknown population value. The population mean is fixed: it is inside the interval or not.</p>
${F('Correct sentence:  "We are 95% confident that the population mean μ is inside the interval."\nWrong:  "95% of the values are inside"  or  "there is a 95% probability that μ is inside".')}
<h3>2. Formula and margin of error</h3>
${F('σ known (theoretical):   [ x̄ − z(α/2)·σ/√n ;  x̄ + z(α/2)·σ/√n ]\nσ unknown (real life):   [ x̄ − t(α/2)·s/√n ;  x̄ + t(α/2)·s/√n ]      margin of error ME = t(α/2)·s/√n\nStandard deviation of the sample mean:  σx̄ = σ/√n  (estimated by s/√n)')}
${T(['If…','the margin of error…'],[['σ (dispersion between individuals) increases','increases'],['n (sample size) increases','<b>decreases</b>'],['the confidence level increases (α decreases)','increases (wider interval)']])}
<p>A confidence interval is a <b>trade-off between width and accuracy</b>: a narrow interval is interesting for the company but we also want a high confidence; the two objectives conflict.</p>
${TRAP('You only have a sample, so σ is unknown: the standard deviation given for the sample is s, not σx̄ (2026 midterm question 4).')}
`;

SHEETS.t3=`
<div class="eyebrow">Chapter 3 · Part 1 · Final</div><h2>The logic of hypothesis testing and the p-value</h2>
<p class="lede">Goal: write H0 and H1 correctly, define the errors, the significance level and the p-value, and conclude a test in the course’s words.</p>
<h3>1. Null and alternative hypotheses</h3>
<ul><li><b>H0</b>: what we assume to be true, the status quo, “nothing specific happens” (innocent; not pregnant; the vaccine has no effect; the two means are equal; no correlation).</li>
<li><b>H1</b>: the claim, the opposite, often the research question. It never contains =, ≥ or ≤.</li>
<li>We <b>reject</b> or <b>fail to reject</b> H0. We never say H0 or H1 is “true”, and never “we accept H0”.</li></ul>
${T(['Left-tailed','Two-tailed','Right-tailed'],[['H0: μ ≥ μ0 · H1: μ < μ0','H0: μ = μ0 · H1: μ ≠ μ0','H0: μ ≤ μ0 · H1: μ > μ0']])}
<p>A two-tailed test checks if the value is equal or not to the expected value; a one-tailed test checks if it is above (or below).</p>
<h3>2. Errors and significance level</h3>
${T(['','H0 true','H1 true'],[['Decide H0 (do not reject)','Correct (1 − α)','<b>Type II error</b> · false negative · β'],['Decide H1 (reject H0)','<b>Type I error</b> · false positive · false alarm · α','Correct · power = 1 − β']])}
<p><b>α</b> = significance level = risk of a false positive = P(conclude H1 | H0 true). Usual value 5% (assume 5% if not given). Power is not covered.</p>
<h3>3. The 8 steps of a test</h3>
<ol><li>Set up H0 and H1.</li><li>Understand what you work on (a mean, a proportion, one or several groups, qualitative variables…).</li><li>Select the relevant test.</li><li>Check its assumptions (or find a backup test).</li><li>Choose the significance level α.</li><li>Obtain the p-value (or the critical value) and compare.</li><li>Decide: reject H0 or not.</li><li>State a global conclusion in the words of the problem.</li></ol>
<h3>4. The test statistic (one sample t-test)</h3>
${F('tSTAT = (x̄ − μ0) / (s/√n)     with n − 1 degrees of freedom\nReject H0 if tSTAT < −t(α/2) or tSTAT > t(α/2)   (normal table: 1.96 at 5%)')}
<p>We use <b>Student’s distribution</b> because σ is unknown and estimated by s. <b>Degrees of freedom</b> (imperfect definition): the quantity of information available above the minimum needed to obtain a result; here n − 1. More data → larger df → Student closer to the normal.</p>
<h3>5. The p-value</h3>
<p>The p-value is the probability, <b>if H0 is true</b>, that another random sample gives a value equal to or more extreme than the observed one. It is an area, between 0 and 1. The smaller it is, the further the observed value is from H0.</p>
${F('p-value < α   →  reject H0: the result is statistically significant\np-value ≥ α   →  fail to reject H0: not enough evidence (this does NOT prove H0)')}
${T(['p-value','Usual wording'],[['> 10%','not significant'],['5–10%','not very significant'],['1–5%','significant'],['0.1–1%','very significant'],['< 0.1%','highly significant']])}
${TRAP('The p-value is not “the probability that H0 is true” nor “the likelihood of H1”. A larger α makes rejection more likely; when α is smaller than the p-value, H0 cannot be rejected.')}
${EX('Wedding example (slides)','worked example',`<p>H0: μ = 30, H1: μ ≠ 30; n = 100, x̄ = 25, s = 20 → s/√n = 2 → tSTAT = (25 − 30)/2 = −2.5. Critical value with 99 df ≈ 2.00: −2.5 &lt; −2 → reject H0: at a 5% risk, the mean age at the wedding is not 30.</p><p>One-tailed version (H1: μ &lt; 30): p-value = 0.007 &lt; 5% → the mean age is significantly below 30.</p>`)}
`;

SHEETS.t4=`
<div class="eyebrow">Chapter 3 · Parts 2–4 · Final</div><h2>Selecting the right test and reading SPSS outputs</h2>
<p class="lede">Goal: answer the four questions, name the test with its H0 and H1 and its assumption, then read the right p-value in the SPSS table.</p>
<h3>1. The four questions</h3>
<ol><li>How many groups or samples? (one, two, more; two variables measured on the <b>same</b> sample = one sample)</li><li>What are we working on? (a mean/median, a dispersion, a proportion, a distribution, a correlation, independence)</li><li>Are the groups independent or dependent (paired)?</li><li>Are the assumptions met?</li></ol>
<h3>2. The tests you must know</h3>
${T(['Situation','Test','H0 / H1','Assumption'],[
['One mean vs a target μ0','<b>One sample t-test</b>','μ = μ0 / μ ≠ μ0','n > 50 (or normal data)'],
['One proportion (2 outcomes) vs p0','<b>Binomial test</b>','π = π0 / π ≠ π0','none (SPSS shows a one-tailed p: double it)'],
['Proportions of 3+ outcomes vs expected %','Chi² goodness of fit','as expected / not','expected counts (no exam question)'],
['Two quantitative variables, linear link','<b>Pearson correlation test</b>','r = 0 (no linear link) / r ≠ 0','linear relationship'],
['Ordinal (or monotonic) variables','<b>Spearman / Kendall</b> correlation test','no correlation / correlation','monotonic relationship'],
['Two means, independent groups','<b>Independent samples t-test / Welch test</b>','μA = μB / μA ≠ μB','each group n > 50; Levene decides the line'],
['Two means, paired data (same cases twice)','<b>Paired (dependent) samples t-test</b>','μbefore = μafter / ≠','n > 50 or normal'],
['Two qualitative variables','<b>Chi² test for independence</b>','independent / dependent','≥ 5 expected per cell (2×2)'],
['Same, too few observations','<b>Fisher’s exact test</b>','independent / dependent','backup of the χ²'],
['Proportions in 2+ groups','<b>Chi² test</b> (same test as independence)','proportions equal / not','same as χ²'],
['Normality of one variable','Shapiro-Wilk (or QQ-plot)','normal / not normal','—']])}
<p>Not to know (grey in the list): Wilcoxon, Mann-Whitney, McNemar, Kruskal-Wallis, one-way ANOVA (more than two means), Fisher’s test on variances. The exam counts a sample below 50 as too small (and gives either &lt; 30 or &gt; 50); in a two-sample test <b>both</b> groups need more than 50.</p>
<h3>3. Reading the two-sample t-test table</h3>
${F("1. Read Levene's test:  H0 equal variances.\n   Sig. ≥ 0.05 → variances may be equal → read line 1 \"Equal variances assumed\" (t-test)\n   Sig. < 0.05 → variances differ → read line 2 \"Equal variances not assumed\" (Welch test)\n2. Read the two-sided p on that line and compare with α.")}
${EX('Netflix and income (slides)','worked example',`<p>Mean income $52.1k (subscribed) vs $55.3k (not). Levene p = 0.219 → line 1; t-test p = 0.272 &gt; 0.05 → not enough evidence that income differs. The 95% CI of the difference [−2.49k; 8.82k] contains 0. The sample means differ, but not enough to conclude for the population.</p>`)}
<h3>4. Reading the χ² table</h3>
<p>Compare the <b>observed</b> and the <b>expected</b> counts (expected = row total × column total / overall total). χ² = Σ (O − E)²/E: 0 means perfect independence. Check the footnote “x cells have expected count less than 5”: if a cell of a 2×2 table is below 5, read <b>Fisher’s exact test</b> instead.</p>
${EX('Exam-style answer (official example)','worked example',`<p>“In this test H0 is independence between the two variables, H1 is non-independence. We use a χ² test. Given the p-value 0.01, we reject H0 and conclude that the variables are dependent.” One or two lines are enough.</p>`)}
<h3>5. Paired samples</h3>
<p>Paired when each row is the same case measured twice (before/after, twins, married couples). Two columns “before” and “after” are <b>not</b> paired if you are not told the rows match (trap). Kebab example: difference −1.87, 95% CI [−3.09; −0.65], p = 0.003 → preferences changed.</p>
<h3>6. Normality</h3>
<p>Histogram with normal curve, QQ-plot or PP-plot (points on the line → normal), or Shapiro-Wilk (H0: normal). The eye is bad at judging normality; with large samples the assumption is less important.</p>
${TRAP('SPSS’s binomial test shows a one-tailed p-value: for a two-tailed test, double it (0.396 × 2 = 0.79). And a correlation test checks a linear link: do not write “the variables are independent” as H0.')}
`;

SHEETS.t5=`
<div class="eyebrow">Chapter 4 · Part 1 · Final</div><h2>Linear regression: model, coefficients and quality</h2>
<p class="lede">Goal: write the population and the estimated equations, interpret a coefficient, predict a value inside the data range, and judge quality with R², adjusted R² and the standard error of the estimate.</p>
<h3>1. Vocabulary and equations</h3>
<ul><li>Y: dependent / explained variable, quantitative. X1 … Xk: independent / explicative variables. n: sample size; <b>k variables but k + 1 coefficients</b>.</li>
<li>The <b>error</b> ε (population) comes from missing variables, a wrong shape, faulty data or outliers; it is never observed. The <b>residual</b> e (sample) is its observable estimate.</li></ul>
${F('Population:          Yi = β0 + β1·X1i + … + βk·Xki + εi\nSample (estimated):  Yi = b0 + b1·X1i + … + bk·Xki + ei\nPredicted value:     Ŷi = b0 + b1·X1i + … + bk·Xki          (no error term!)')}
<p>Coefficients are estimated by <b>ordinary least squares (OLS)</b>: minimize the sum of squared errors Σ(Yi − Ŷi)².</p>
<h3>2. Interpreting coefficients</h3>
${F('bj: "If Xj increases by one unit, Y changes by bj units on average, everything else remaining the same."\nb0: Y when all X = 0 (often meaningless: a house of 0 sq ft).')}
<p>Example (slides): price (k$) = 98.24 + 0.110 × sq ft → one more sq ft adds $110; a 2 000 sq ft house: 98.24 + 0.110 × 2 000 = 318 k$. Pies: sales = 306.526 − 24.975 × price + 74.131 × advertising (in $100): price 5.5 and $350 → ≈ 429 pies.</p>
${TRAP('A model is only meaningful <b>inside the data interval</b>: houses between 1 000 and 2 500 sq ft cannot predict a 500 sq ft house (2022 final: a laptop with weight and screen outside the range cannot be predicted). Watch the units (advertising in $100 → 350 $ = 3.5).')}
<h3>3. Quality</h3>
${F('SST = SSR + SSE      total = explained (regression) + unexplained (error)\nR² = SSR/SST = 1 − SSE/SST          0 ≤ R² ≤ 1\nAdjusted R² = 1 − (1 − R²)(n − 1)/(n − k − 1)\nSYX = √( SSE / (n − k − 1) )')}
${T(['R² or adjusted R²','Quality (subjective scale of the slides)'],[['&lt; 0.5','low'],['0.5–0.6','limited'],['0.6–0.7','medium'],['0.7–0.8','good'],['0.8–0.9','very good'],['≥ 0.9','excellent… or danger (too good to be true)']])}
<ul><li>With several variables, use the <b>adjusted R²</b>: R² never decreases when a variable is added; the adjusted R² penalizes useless variables, takes n and k into account, is smaller than R² and can be negative.</li>
<li>A small gap between R² and adjusted R² suggests that all or most variables have a significant effect.</li>
<li><b>Standard error of the estimate</b> SYX: the average distance between the observed and the predicted values (average dispersion around the regression line), in the unit of Y. Judge it against the size of Y; often “we cannot say if it is large”.</li></ul>
${EX('Model A or B? (slides)','worked example',`${F('A: R² = 0.80, n = 100, k = 2  → adj = 1 − 0.2 × 99/97 = 0.796\nB: R² = 0.81, n = 100, k = 90 → adj = 1 − 0.19 × 99/9 ≈ −1.09 (the slide writes “close to 1%”)')}<p>Model A is much better: 88 extra variables bring 1% of R².</p>
${NOTE('<b>Check against the slide:</b> with k = 90 and n = 100, 1 − 0.19 × 99/9 = −1.09, a negative adjusted R², not “close to 1%”. The conclusion (model A is better) does not change.')}`)}
`;

SHEETS.t6=`
<div class="eyebrow">Chapter 4 · Part 2 · Final</div><h2>The L.I.N.E. assumptions and the residual plot</h2>
<p class="lede">Goal: read residual plots and normality plots, name the problem (linearity, independence, normality, equal variance) and say what can no longer be used.</p>
<h3>1. The residual plot</h3>
<p>Residual e = observed − predicted. A residual plot shows a predictor (or the predicted value Ŷ) on the x-axis and the residuals on the y-axis. A <b>good</b> plot: residuals randomly spread above and below 0, with the same dispersion everywhere.</p>
${T(['Assumption','Meaning','How to detect','If violated'],[
['<b>L</b>inearity','the X–Y relationship is linear','residual plot shows a curve / U shape','change the specification or the shape (non-linear model)'],
['<b>I</b>ndependence','errors are not related to each other','residuals follow a pattern (runs above/below); typical of time series','tests and confidence intervals unusable (very sensitive)'],
['<b>N</b>ormality','errors are normally distributed (not the X!)','histogram, QQ/PP plot of residuals, Shapiro-Wilk','tests and CIs less reliable (robust if n large)'],
['<b>E</b>qual variance (homoscedasticity)','the dispersion around the line stays the same','<b>conic / funnel shape</b> in the residual plot','see below']])}
<h3>2. Heteroscedasticity: what can still be used?</h3>
<ul><li>The estimated coefficients (the slope) <b>remain usable</b>: not biased.</li>
<li>The standard errors are wrong → <b>confidence intervals and significance tests are not usable</b> any more: we get 10 but cannot say if it is 10 ± 2 or 10 ± 12.</li>
<li>Remedies: look for a missing explicative variable; change the shape of the model; other ways to compute intervals (S5).</li></ul>
${T(['Objective','Linearity','Independence','Normality','Equal variance'],[['Prediction intervals','nonsense','very sensitive','sensitive','sensitive'],['Tests','nonsense','very sensitive','robust (n > 50)','sensitive'],['Confidence intervals','nonsense','very sensitive','robust','sensitive']])}
${TRAP('Exam answers must say <b>which plot</b> you read and <b>what you see</b>: “using the PP plot, points stay close to the line: no obvious normality problem”; “the residual plot for X has a conic shape: heteroscedasticity”. A bare “yes/no” earns nothing; to show a problem, draw a curved QQ/PP plot or a skewed histogram.')}
`;

SHEETS.t7=`
<div class="eyebrow">Chapter 4 · Part 3 · Final</div><h2>Inference: global significance, individual significance, confidence intervals</h2>
<p class="lede">Goal: run and conclude the F test and the t tests with complete H0/H1, and interpret the confidence interval of a coefficient.</p>
<h3>1. Global significance: Fisher’s F test</h3>
${F('H0: β1 = β2 = … = βk = 0   (no explicative variable has an effect)\nH1: at least one βj ≠ 0       (at least one variable has an effect)\nF = MSR / MSE = (SSR/k) / (SSE/(n − k − 1))     → read Sig. in the ANOVA table')}
<p>If Sig. &lt; 0.05: reject H0, the model is globally significant. It does not mean the model is perfect: at least one variable partly explains Y.</p>
${TRAP('Official marking (2022): H0 must say that <b>all β coefficients are equal to 0</b> and H1 that <b>at least one is not</b>. “No effect / effect” alone is not enough. With one variable, the F test and the t test give the same p-value.')}
<h3>2. Individual significance: the t test of each coefficient</h3>
${F('H0: βj = 0  (Xj has no linear effect on Y)     H1: βj ≠ 0\ntSTAT = bj / s(bj)      df = n − k − 1      → read Sig. in the Coefficients table')}
<p>Sig. &lt; 0.05 → the variable has a significant effect. Sig. ≥ 0.05 → no significant effect: we do <b>not</b> interpret its coefficient (we cannot show its real effect differs from 0).</p>
<h3>3. Confidence interval of a coefficient</h3>
${F('[ bj − t(α/2)·s(bj) ;  bj + t(α/2)·s(bj) ]\n"We are 95% confident that when Xj increases by one unit, Y changes by between LOWER and UPPER, everything else remaining the same."')}
<p>Slides: surface 0.110, CI [0.034; 0.186] → one more sq ft adds between $34 and $186: significant but far too wide to be useful (tiny sample, missing variables). An interval that contains 0 ↔ the variable is not significant at 5%.</p>
${EX('Pie sales (slides)','worked example',`<p>F test p = 0.012 → at least one of price and advertising influences sales. Price p = 0.04, advertising p = 0.014: both significant. CIs: price [−48.57; −1.37], advertising [17.56; 130.70]: scandalously wide (15 weeks of data).</p>`)}
`;

SHEETS.t8=`
<div class="eyebrow">Chapter 4 · Part 4 · Final</div><h2>Outliers, dummy variables and multicollinearity</h2>
<p class="lede">Goal: detect and treat outliers, code and interpret dummy variables against a reference group, and detect multicollinearity with the VIF.</p>
<h3>1. Outliers (all problematic points are called outliers in S3)</h3>
<ul><li>Outlier: Y far from the predicted value while X is in the usual range. Extreme value (leverage): X far from the other values. Influential point: changes the model by itself.</li>
<li>Detection: the residual plot (points far from the others).</li>
<li>Treatment, in order: (1) correct obvious errors (age = 210); (2) remove cases that do not belong to the target (the single Ferrari among family cars); (3) look for a <b>missing explicative variable</b> (the most common explanation); (4) look for non-linearity. Never remove a point only because it does not suit you; if in doubt, report with and without.</li></ul>
<h3>2. Dummy variables</h3>
<p>A qualitative variable cannot enter the model as text or as codes 1, 2, 3 (the model would be meaningless). It is replaced by <b>dummy variables</b> (0/1). With m categories, create <b>m − 1</b> dummies; the missing category is the <b>reference group</b>.</p>
${F('Price = β0 + β1·Speed + β2·Compact + ε     (family car = reference)\nfamily car:  Price = β0 + β1·Speed\ncompact car: Price = (β0 + β2) + β1·Speed      → same slope, different intercept')}
<p>Interpretation: “compared with a family car, a compact car is β2 € more expensive, everything else remaining the same” (only if β2 is significant). Slides: Price = 10 000 + 30 × Speed + 5 000 × Compact.</p>
${EX('Three categories: Disney (slides)','worked example',`<p>Profit = 30 + 30 × Princess − 20 × Few − 10 × Some (reference: many songs). “Few” = −20: compared with a movie with many songs, a movie with few songs earns 20 m less. Princess and many songs: 60; princess and some songs: 30 + 30 − 10 = 50.</p>`)}
${TRAP('Interpreting a dummy coefficient without the reference group is the classic mistake (2022 final: BrandA = −31.3 means “31 units cheaper than brand C”, the reference). A colour coded 1 = black, 2 = blue, 3 = red cannot be used as such: two dummies are needed (2025 final).')}
<h3>3. Multicollinearity</h3>
<p><b>Multicollinearity</b> exists when two or more predictors are strongly correlated: they deliver the same information. Symptoms: precision of coefficients falls, a significant variable becomes non-significant, unexpected signs, coefficients change a lot when a variable is added.</p>
${F('VIFj = 1 / (1 − R²j)    where R²j: Xj explained by all the other X\nVIF > 5 → Xj is highly correlated with the other independent variables')}
<p>Treatment: remove the most redundant variable (highest VIF) <b>first, one at a time</b>, then check again; never remove all problematic variables at once.</p>
${NOTE('<b>Outside the final:</b> non-linear models (log, exponential, power) and linearization are in the slides for the project only: “no question at the exam”.')}
`;

SHEETS.t9=`
<div class="eyebrow">Chapter 5 · Parts 1–2 · Final</div><h2>Principal component analysis (PCA)</h2>
<p class="lede">Goal: check the assumptions and the relevance of a PCA, choose the number of components, interpret and name them with the loadings, and read the component plot.</p>
<h3>1. What a PCA does</h3>
<p>It groups many quantitative variables into a few <b>principal components</b> (families of variables that behave the same way), ordered by importance, to remove redundant information and increase readability. The human still has to give each component a meaning. Decathlon example: dimension 1 = 100 m, 110 m, 400 m, long jump; dimension 2 = discus, shot put; dimension 3 = pole vault vs 1 500 m (opposition).</p>
<h3>2. Assumptions (step 1)</h3>
<ol><li>Quantitative variables (Likert scales accepted).</li><li><b>Identical concept</b>: all variables describe the same concept (adding “age” to school grades breaks it).</li><li>Independence of observations.</li><li>Sample size: at least 5 cases per variable.</li><li>Variables (more or less) normally distributed: QQ/PP plot.</li></ol>
<h3>3. Is the PCA relevant? (step 2)</h3>
<p>The PCA studies links between variables, so they must be <b>correlated</b>: as many correlations as possible at least 0.3 in absolute value (0.5 preferable). If variables were independent, you would get as many families as variables. Saying “variables need to be independent” is completely wrong.</p>
<h3>4. Steps 3–8</h3>
${T(['Step','Tool','Rule'],[
['3. Variables related to components','<b>Communalities</b>','≥ 0.5; below → the variable is badly represented'],
['4. Importance of each component','<b>Eigenvalue</b>, % of variance, cumulative %','sum of eigenvalues = number of variables; % = eigenvalue / number of variables'],
['5. Number of components','<b>Kaiser’s rule</b> (eigenvalue &gt; 1) or a threshold of cumulative variance (often 80%)','SPSS applies Kaiser by default'],
['6. Which variable in which component','<b>Rotated component matrix</b> (varimax); loading = correlation variable–component','|loading| &gt; 0.6 related; |loading| &lt; 0.3 not related; mind the sign'],
['7. Inconclusive variables','remove one at a time and rerun','not because data are “bad”'],
['8. Name the components','subjective','“pleasant flavours”, “gamers vs mobility”…']])}
<h3>5. Reading the component plot</h3>
<ul><li>Two variables in the <b>same component, same side</b>: they go together (more A ↔ more B).</li>
<li><b>Same component, opposite signs</b>: opposition (more parties ↔ worse grades).</li>
<li><b>Different components</b>: no link can be concluded (illiteracy and number of libraries; History Channel and gamers).</li>
<li>An individual (prospect) placed in a quadrant is described only with the components of the plot (top right: high on component 1 and on component 2).</li></ul>
${EX('Exam pattern (2022, 2023, 2025 finals)','worked example',`<p>Typical questions: assumption not valid (normality on the PP plot; identical concept); is the PCA relevant (correlations &gt; 0.3); how many dimensions (Kaiser: 4); interpret and name components 1 and 2 with signs; can we link X and Y (same component or not); describe a prospect from its position; draw a 2D plot of components 1 and 2 from a 3D plot.</p>`)}
${NOTE('<b>Outside the final:</b> clustering (HCA, chapter 5 parts 3–4) is not examined at the final.')}
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
<h3>Answering rules (final exam instructions)</h3>
<ul><li>Say <b>which number you read</b> and <b>what it means</b>; “yes/no” alone earns nothing. Assume α = 5% if not given. One or two lines are enough.</li>
<li>Name the test, write H0 and H1 in words of the problem, give the p-value, decide, conclude.</li></ul>
<h3>Formulas</h3>
${T(['What','Formula / rule'],[
['Decision','p &lt; α → reject H0 · p ≥ α → fail to reject H0'],
['One sample t','tSTAT = (x̄ − μ0)/(s/√n), df = n − 1'],
['CI of a mean','x̄ ± t(α/2)·s/√n'],
['Expected count (χ²)','row total × column total / grand total; ≥ 5 per cell, else Fisher'],
['Levene','Sig. ≥ .05 → line 1 (t-test) · Sig. &lt; .05 → line 2 (Welch)'],
['Regression','Ŷ = b0 + b1X1 + … + bkXk (population: β and ε)'],
['Sums of squares','SST = SSR + SSE; R² = SSR/SST'],
['Adjusted R²','1 − (1 − R²)(n − 1)/(n − k − 1)'],
['Standard error of the estimate','SYX = √(SSE/(n − k − 1)): average distance to the line'],
['F test','F = (SSR/k)/(SSE/(n − k − 1)); H0: all β = 0'],
['t test of a coefficient','t = b/s(b); H0: βj = 0'],
['VIF','1/(1 − R²j); &gt; 5 → multicollinearity, remove the highest first'],
['PCA','eigenvalue &gt; 1 (Kaiser); % = eigenvalue/p; |loading| &gt; 0.6; communality ≥ 0.5; correlations ≥ 0.3']])}
<h3>Which test?</h3>
${T(['Data','Test'],[['1 mean vs target','one sample t-test'],['1 proportion vs target','binomial test'],['2 quantitative (linear)','Pearson correlation test'],['ordinal / monotonic','Spearman or Kendall'],['2 independent means','two-sample t-test / Welch'],['2 paired means','paired t-test'],['2 qualitative / 2+ proportions','χ² test (Fisher if expected &lt; 5)']])}
<h3>Interpretation templates</h3>
<ul><li>Coefficient: “if X increases by one unit, Y increases by b units on average, everything else remaining the same.”</li>
<li>Dummy: “compared with [reference], [category] is b units more/less…”</li>
<li>CI: “we are 95% confident that one more unit of X changes Y by between L and U.”</li>
<li>Heteroscedasticity: coefficients usable; standard errors, tests and CIs not.</li></ul>
`;
