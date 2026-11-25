
// the course's method to select a test (chapter 3 part 2, list_of_tests): the four questions as a decision tree
const TEST_TREE={
 q1:{q:'Question 1: how many groups or samples, and what is the shape of the dataset?',o:[
  {l:'One sample: compare a value with a target',to:'q2',why:'“Most of the time the question is: we want to compare a value to a target.”'},
  {l:'One sample, two variables measured on the same cases (a link)',to:'q3',why:'One row per case, two columns: one sample, two variables.'},
  {l:'Two groups or samples to compare',to:'q4',why:'We compare two groups.'},
  {l:'More than two groups',to:'q5',why:'We look for a group different from the others.'}]},
 q2:{q:'Question 2: what are we working on?',o:[{l:'A mean',to:'q2b',why:'A quantitative variable, its central tendency.'},{l:'A proportion with two outcomes',to:'r_bin',why:'Coded 0/1 (men / women, defective or not).'},{l:'Proportions of three or more outcomes',to:'r_gof',why:'Expected percentages per category.'},{l:'The distribution (is it normal?)',to:'r_norm',why:'A test of normality.'}]},
 q2b:{q:'Question 4: assumptions: is n > 50 (or are the data normal)?',o:[{l:'Yes',to:'r_t1',why:'The one sample t-test applies.'},{l:'No: small sample, not normal',to:'r_wil1',why:'Assumption violated: a non-parametric backup.'}]},
 q3:{q:'Question 2: which kind of variables?',o:[{l:'Two quantitative variables with a linear link',to:'r_pear',why:'A linear relationship.'},{l:'Ordinal (ranked) variables, or a monotonic link',to:'r_spear',why:'A monotonic relationship: ranks.'},{l:'Two qualitative variables',to:'q3b',why:'Independence of two qualitative variables.'}]},
 q3b:{q:'Question 4: are there enough observations (expected counts ≥ 5 in a 2×2 table)?',o:[{l:'Yes',to:'r_chi',why:'The χ² test applies.'},{l:'No, too few',to:'r_fish',why:'Backup: Fisher’s exact test.'}]},
 q4:{q:'Question 2: what are we comparing?',o:[{l:'Two means',to:'q4b',why:'A quantitative variable in two groups.'},{l:'Two proportions',to:'r_chi2g',why:'A proportion in two groups: χ² test.'}]},
 q4b:{q:'Question 3: are the groups independent or paired?',o:[{l:'Independent (no link between the cases of the two groups)',to:'q4c',why:'E.g. customers in Lille and in Paris.'},{l:'Paired (each row is the same case measured twice)',to:'r_paired',why:'Before/after on the same people, twins, married couples.'}]},
 q4c:{q:'Question 4: does each group have more than 50 observations?',o:[{l:'Yes, both',to:'r_t2',why:'Two-sample t-test or Welch, chosen with Levene.'},{l:'No',to:'r_mw',why:'Assumption violated: non-parametric backup.'}]},
 q5:{q:'Question 2: what are we comparing?',o:[{l:'Means',to:'r_anova',why:'More than two means.'},{l:'Proportions',to:'r_chik',why:'Proportions in several groups.'}]},
 r_t1:{end:'One sample t-test · H0: μ = μ0, H1: μ ≠ μ0',why:'Assumption: normal data or n &gt; 50.'},
 r_wil1:{end:'Wilcoxon signed-rank test for one sample (not to know for the exam)',why:'The list of tests: no solution with the t-test when n &lt; 50 and data not normal.'},
 r_bin:{end:'Binomial test · H0: π = π0, H1: π ≠ π0',why:'No constraint; SPSS shows a one-tailed p: double it for a two-tailed test.'},
 r_gof:{end:'χ² goodness of fit · H0: proportions as expected',why:'Expected frequencies ≥ 1, no more than 20% below 5 (no exam question).'},
 r_norm:{end:'Shapiro-Wilk (or a QQ/PP plot) · H0: the variable is normal',why:'The test is not asked at the final.'},
 r_pear:{end:'Pearson correlation test · H0: r = 0, H1: r ≠ 0',why:'Linear relationship (normality often neglected).'},
 r_spear:{end:'Spearman (or Kendall) correlation test · H0: no correlation',why:'Monotonic relationship; works on ranks.'},
 r_chi:{end:'χ² test for independence · H0: the variables are independent, H1: dependent',why:'At least 5 expected per cell in a 2×2 table.'},
 r_fish:{end:'Fisher’s exact test · H0: independent, H1: dependent',why:'The backup of the χ² when expected counts are too small.'},
 r_chi2g:{end:'χ² test (same test as independence) · H0: the proportions are equal',why:'Fisher if an expected count is below 5.'},
 r_t2:{end:'Independent samples t-test / Welch test · H0: μA = μB, H1: μA ≠ μB',why:'Read Levene first: Sig. ≥ 0.05 → line 1 (t-test), &lt; 0.05 → line 2 (Welch).'},
 r_mw:{end:'Mann-Whitney test (not to know for the exam)',why:'The exam counts a group below 50 as too small; the backup is grey in the list.'},
 r_paired:{end:'Paired (dependent) samples t-test · H0: μbefore = μafter',why:'n &gt; 50 or normal differences.'},
 r_anova:{end:'One-way ANOVA (not to know for the exam)',why:'More than two means: grey in the list of tests.'},
 r_chik:{end:'χ² test · H0: the proportions are the same in all groups',why:'Same test as independence.'}};
const TEST_CASES=[
 {text:'Can I say that the mean age of my customers is (not) equal to 40? Sample of 200 customers.',path:{q1:0,q2:0,q2b:0}},
 {text:'In France 60% of my customers are men. Can I say that the proportion of men among my customers in Lille is (not) 60%?',path:{q1:0,q2:1}},
 {text:'Can I say that the surface and the price of a house are correlated (the scatter plot is roughly linear)?',path:{q1:1,q3:0}},
 {text:'Is buying a smartphone (Y/N) related to nationality (French / non-French)? 400 customers.',path:{q1:1,q3:2,q3b:0}},
 {text:'We collect the weight of 80 customers before and after a diet; row i is customer i before and after.',path:{q1:2,q4:0,q4b:1}},
 {text:'Is the proportion of blue houses the same in Lille and in Paris?',path:{q1:2,q4:1}},
 {text:'I expect 30% of my customers from Lille, 40% from Paris and 30% from other cities. Are these percentages valid?',path:{q1:0,q2:2}},
 {text:'Is customer satisfaction (very unhappy … very happy) correlated with the customer’s rank in the loyalty program?',path:{q1:1,q3:1}},
 {text:'Is getting a discount (Y/N) related to gender? Only 16 customers, some expected counts below 5.',path:{q1:1,q3:2,q3b:1}},
 {text:'Do customers in Lille (120) and in Paris (150) have the same mean age?',path:{q1:2,q4:0,q4b:0,q4c:0}},
 {text:'Is the proportion of blue houses the same in Lille, Paris and London?',path:{q1:3,q5:1}},
 {text:'Healthy-Cereals Inc.: is the mean quantity of fungus per box 1 g? 30 boxes, the data are clearly not normal.',path:{q1:0,q2:0,q2b:1}},
 {text:'Healthy-Cereals Inc.: compare the mean contamination levels of four plants.',path:{q1:3,q5:0}},
 {text:'Is the variable “age” of customer_dbase normally distributed?',path:{q1:0,q2:3}},
 {text:'Compare the mean income of Netflix subscribers (35) and non-subscribers (40).',path:{q1:2,q4:0,q4b:0,q4c:1}}];
// the end node reached by a case
const testOf=cs=>{let id='q1';while(TEST_TREE[id]&&!TEST_TREE[id].end){id=TEST_TREE[id].o[cs.path[id]].to}return id};
