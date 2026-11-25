# PROGRESS : site de révision S3 (IÉSEG Bachelor 2)

Une session = une matière. En début de session : lire `site/CONVENTIONS.md`, puis la section de la matière ci-dessous. En fin de session : mettre à jour cette page.

Ouvrir le site : double-clic sur `site/index.html` (aucun serveur nécessaire).

## Fondations du site : fait (23/11/2026)

- Moteur commun : `site/index.html`, `site/assets/engine.js`, `site/assets/style.css` (design AFA, thème clair/sombre, adapté au téléphone).
- Accueil avec une carte par matière et sa progression ; sélecteur de matière toujours visible ; onglets Overview / Sheets / Cheat sheet / Quiz / Exercises / Flashcards / Progress, plus les onglets de modules ; navigation par hash (`#cost-accounting-quiz`…).
- Types d'exercices corrigés automatiquement : QCM (une ou plusieurs réponses), numérique avec tolérance, calcul à données aléatoires, réponse courte (accents tolérés mais signalés), association, remise dans l'ordre, cas pratique (corrigé détaillé, ou auto-évalué). Une matière peut ajouter son propre module ou type.
- Progression dans `localStorage` par matière, page de progression globale, export/import `.json`.
- Modules partagés `journal` (journal drills) et `taccounts` (T-accounts générés) dans `site/modules/accounting.js`, réutilisables pour Cost Accounting.
- Documentation : `site/CONVENTIONS.md` (format d'un fichier matière, types d'exercices, design, exemple complet testé).
- Supports de cours : un dossier par matière dans `sources/<slug>/` (seul `sources/afa/` est rempli).
- Vérifié dans Chrome (headless, ouverture en `file://`) : tous les onglets, largeur téléphone 390 px, mode sombre, zéro erreur console.

## Matières

Ordre = ordre chronologique des examens (comme le site : `SUBJECT_ORDER`).

### 1. Digital Innovation (`digital-innovation`)
**Statut : fait (23/11/2026), prêt pour l'examen final**

**Examen** (syllabus Fall 2026) :
- **Final de 1 h 30**, individuel, 45 % de la note, sur « all course material and readings for all sessions ». Mid-term (1 h, 30 %) : jusqu'à la Session 4 incluse. Poster en groupe : 25 % (Session 10).
- Le syllabus prévient : « Exam questions can be the exact same ones appearing in the in-class practice question reviews and exercises. »
- Aucune annale, aucun corrigé, aucune consigne sur le nombre ou le type de questions.

**Contenu de `site/subjects/digital-innovation.js`** (examen unique `final`, topics `s1`–`s9` = Sessions 1–9) :
- 9 fiches et une cheat sheet (frameworks et pièges).
- 96 questions de quiz (q0–q104, ids non contigus), réparties en trois provenances (`sources`) :
  - `course` : question posée en classe dont la réponse est sur la slide ;
  - `bank` : « Practice MCQ (no key) », 40 des 46 QCM d'entraînement ;
  - `practice` : questions nouvelles.
- 44 exercices : associations concept ↔ définition ou exemple, remises dans l'ordre des frameworks (analyse éthique en 5 étapes, chaîne de valeur des données GSMA, de l'opinion à l'action, révolutions industrielles, 5 leçons, feuille de route McKinsey), études de cas (Spotify, Carbon Creek, OpenAI/Sama, Amazon, Unseen Cyberazzi, Moral Machine, YouDrive) dont 4 auto-évaluées. 44 flashcards (c0–c43).
- 3 mocks de 1 h 30 sur 20, de difficulté croissante, couvrant tous les topics. Toutes les questions sont différentes du quiz et d'un mock à l'autre (contrôle automatique).
  - Partie A : 24 QCM à 0,5 pt.
  - Partie B : un exercice corrigé automatiquement (association ou ordre, 3 pts) et une analyse de cas rédigée (5 pts) avec grille d'auto-évaluation.
  - Le format est **choisi pour le site** et justifié dans l'Overview.
- Les options des QCM sont mélangées une fois, de façon déterministe (graine = id), dans le fichier matière : le moteur les affiche dans l'ordre donné. Moteur non modifié.
- Vérifications (Edge headless, `file://`) :
  - 40 exercices résolus via l'interface (faux puis juste) et 4 cas auto-évalués ;
  - chaque mock rempli juste (20/20) puis avec des erreurs (≈ 12/20) ;
  - 31 pages en bureau clair et en téléphone 390 px sombre, autres matières comprises, sans défilement horizontal ;
  - aucune erreur console ;
  - pourcentages cités (Spotify, Alphabet, Meta, Netflix) recalculés : cohérents avec les slides.

**Sources utilisées** (`sources/digital-innovation/`, liste et contexte dans `_COURSE-INFO.md`) :
- slides des Sessions 1–9 (section de Chadi NANAA) ;
- syllabus Fall 2026 et consignes du poster ;
- « First block - questions - blocks 1-2 » ;
- exercices de groupe Digital Business Models et Carbon Creek Gardens ;
- lectures Unseen Cyberazzi, TIME/OpenAI (PDF scanné, lu en image) et Reuters/Amazon.
- Les slides ont été converties en images (API PDF de Windows) pour lire schémas et tableaux.

**Documents manquants** :
- Le corrigé des QCM d'entraînement, et les blocs de questions 3 à 5.
- Les cours LinkedIn Learning (SAP ERP, 4IR, Web3, Big Data in the Age of AI, Blockchains, Cloud Computing, Digital Transformation Tips, GDPR).
- Les chapitres 4 et 8 du manuel, le PDF « ERP Systems » et l'article HBR.
- Les cas Harvard (UCB, Wendy Chan) et la simulation Cyber Attack!.
- La section « Quizzes » (vide) et les annonces (aucune).

**Points à te signaler** :
1. **Les slides datent de l'édition de printemps 2025** (dates des devoirs : février-mars 2025), alors que le syllabus est celui de Fall 2026 (10 séances, ordre un peu différent). Les slides de ton semestre peuvent différer.
2. **Les QCM d'entraînement n'ont pas de corrigé.** La réponse donnée est celle qui concorde avec les slides et le manuel, chaque fois expliquée. Six questions sont écartées : quatre ambiguës (la date du Web 2.0, et trois questions de « stratégie metaverse » : John, Ann, SportswearUK), une dont la réponse n'est pas dans les supports (ce sans quoi le metaverse « cannot exist ») et un doublon sur l'open source.
3. **Erreur de slide (Session 2)** : l'open source y est défini comme un logiciel dont le code source n'est « **not** available ». Le tableau de la même slide et les QCM disent le contraire (signalé).
4. **Session 8 (cybersécurité)** : les slides ne contiennent que le cube de McCumber. La fiche est donc courte, et le chapitre 8 du manuel n'est pas couvert.
5. Le format de l'examen final n'est pas publié : demande-le au prof (nombre de QCM, questions ouvertes ou non, points négatifs).

### 2. Advanced Financial Accounting (`afa`)
**Statut : midterm et end-term faits (Topics 1–8), prêt pour l'examen final** (mis à jour le 23/11/2026)

**Périmètre et format de l'examen final** (seule source : l'annonce MyCourses du 28 nov. 2025, aucun syllabus en ligne) : les **huit topics** (« All eight AFA topics covered this semester […] every concept that will appear in the final exam »), donc Topics 1–4 compris. Format : « MCQs + exercises », même esprit que le midterm, **2 heures**.

Midterm (Topics 1–4, session précédente) :
- `site/subjects/afa.js` reprend tout `AFA Revision Ledger.html` : 4 fiches, cheat sheet, 64 questions (28 tirées des exercices du cours), 39 journal drills, générateur de T-accounts, 42 flashcards, 19 exercices de pratique. Revérifié dans cette session : identique à l'ancien fichier.
- La progression de l'ancien fichier est importée automatiquement ; `AFA Revision Ledger.html` est conservé, intact.

End-term (Topics 5–8, cette session) :
- 4 fiches étiquetées « End-term » : Topic 5 *End-of-period adjustments*, Topic 6 *Profit appropriation & dividends*, Topic 7 *Cash flow statement*, Topic 8 *Tutorial & limitations*. Plus une cheat sheet end-term (affichée avant celle des Topics 1–4).
- 63 questions (q64–q126 : 32 « Course exercise », 31 « Practice », chacune avec son explication), 31 journal drills (d40–d70), 31 flashcards (c42–c72), 24 exercices (calculs à nouveaux chiffres, association, ordre, réponses courtes, QCM, cas Apollyon, RedLotus, SOCE, Edison, RESPIR, tutorial ABC).
- Filtres Midterm / End-term automatiques dans Quiz, Exercises, Journal drills et Flashcards.
- Notes du midterm corrigées (le Topic 5 fait partie de l'examen final) : Topic 2 (règle LCNRV, développée au Topic 5), Topic 3 (goodwill : le Topic 5 traite la dépréciation des PPE, des créances et des stocks, pas du goodwill), Topic 4 (ajustement de fin d'année des emprunts, absent des slides du Topic 5), puce de l'Overview.
- Vérifications : midterm intact ; chaque écriture équilibrée (fiches, drills, corrigés générés) ; chaque total de tableau et chaque chiffre cité recalculé (30 309 contrôles, 0 échec) ; 43/43 exercices et 70/70 drills résolus via l'interface ; tous les onglets testés sur ordinateur, téléphone et en mode sombre, ainsi que les 9 autres matières ; aucune erreur console.

Sources utilisées (`sources/afa/`, 32 fichiers téléchargés depuis MyCourses, cours « ADVANCED FINANCIAL ACCOUNTING 3874 ») :
- Slides des Topics 1 à 8 (versions étudiants et solutions pour les Topics 4 à 7).
- Exercices supplémentaires et corrigés des Topics 1 à 7 :
  - Topic 5 : Apollyon (.docx) ;
  - Topic 6 : *Exercise for session 7*, Goldsmith et Eagle (.docx) ;
  - Topic 7 : Edison (.docx et .pdf) et RESPIR.
- Séance Q&A (session 5).
- Template du tutorial de la session 9 (.pptx).
- Consignes du projet Capstone.

Documents introuvables sur MyCourses :
- Syllabus, annales d'end-term, consignes d'examen détaillées (date, documents ou calculatrice autorisés).
- Corrigé officiel du tutorial du Topic 8 (ABC Antwerp) : seul le template étudiant existe.
- Aucun QCM dans les supports end-term : les questions « Course exercise » end-term reprennent un exercice ou un exemple des slides avec la réponse officielle, et les mauvaises options ont été rédigées pour le site.
- Non consultés : les modules de l'appli externe « Complement », la vidéo de présentation de Complement.

Points à te signaler :
1. **Erreur dans le corrigé Apollyon (Topic 5, Q3)** : l'article 2 vaut 90 × 200 = 18 000 €, pas 40 000 €. Le stock à reporter est donc de **326 000 €**, pas 348 000 €. La dépréciation de 15 000 € reste juste. Autres coquilles dans ce corrigé :
   - l'écriture de dépréciation des stocks est recopiée au début de Q5 ;
   - le bilan de Q7 est intitulé « 2022 » au lieu de « 2023 ».
2. **Slide Unicorn (Topic 5)** : « 15 0000 » au lieu de 15 000 pour les A/R.
3. **Slide RedLotus f (Topic 6)** : le texte dit « Accumulated Depreciation (an ASSET account) decreases by 400 ». L'écriture elle-même (XA+ 400) est juste.
4. **Topic 5, prorata** : la slide dit « number of days » puis calcule en mois ; le cours retient les mois.
5. **Topic 5, valeur nette de réalisation** : la slide dit que la NRV « is sometimes called replacement cost ». En IFRS, ce sont deux mesures différentes (signalé « Outside the slides »).
6. **Dividende en actions (Topic 6)** : la slide passe toute la valeur de marché (150 000 €) en capital social, sans prime d'émission, au débit de « Net income of 2023 ». Ce n'est pas forcément une erreur : c'est la convention du cours, et le site la suit.
7. **Accruals** : les slides du Topic 5 marquent *Accruals* et *Provisions for risks* « Not discussed in this course ». Pourtant, les exercices des Topics 6 et 8 utilisent des charges et produits à recevoir/payer ; le site couvre ces écritures-là, pas les provisions.
8. **Tutorial Topic 8** : la solution du site est calculée avec les règles du cours, pas officielle. À vérifier avec le prof, notamment la conversion A/P → note payable dans le tableau des flux de trésorerie.
9. **Séance Q&A (session 5)** : non intégrée. C'est une révision du midterm et ses corrigés contiennent des incohérences ; elle peut être ajoutée aux Topics 1–4 dans une prochaine session.
10. **Liens Complement** (externes) : les Topics 1 et 2 pointent vers le même module, de même que les Topics 7 et 8.
11. **Accès MyCourses** : l'extension Claude in Chrome n'était connectée à aucun navigateur. La collecte s'est faite dans une fenêtre Edge séparée, où tu t'es connecté toi-même. Son profil temporaire a été supprimé après la collecte.

**3 mock exams end-term ajoutés** (23/11/2026) : onglet *Mock exams*, `m1` Foundation, `m2` Intermediate, `m3` Advanced.
- **Format retenu** : 2 h, sur 20. Partie A : 16 QCM (deux par topic, 0,5 pt, une seule bonne réponse, pas de point négatif). Partie B : 5 exercices (12 pts) : transactions T1–4 (3), ajustements T5 (3,5), affectation du résultat T6 (2), tableau des flux T7 (2,5), rédaction sur les limites T8 (1, auto-évaluée avec grille). Chaque mock couvre les 8 topics (périmètre de l'examen final). Difficulté croissante ; le Mock 3 est un cas intégré (Harbor Analytics), comme le tutorial du Topic 8.
- **Sources** : l'annonce MyCourses du 28 nov. 2025 (périmètre, « MCQs + exercises », 2 h) et la séance Q&A 5 (`sources/afa/QA and exercises`), qui montre « how the midterm and final exam could look like » (QCM théoriques et chiffrés à 4 options, grands exercices avec écritures puis états). MyCourses n'a pas été rouvert : la collecte du même jour n'y avait trouvé ni annales, ni syllabus, ni consignes. Le barème, le nombre de questions et la règle sur la calculatrice sont **choisis pour le site** (dit dans l'Overview et sur la page Mock exams).
- Moteur : module Mock exams générique (`assets/engine.js`, pour toutes les matières), type `written` (rédaction et grille), type `journal` (`modules/accounting.js`), score partiel pour les types existants, version imprimable. Documenté dans `CONVENTIONS.md`, section 15.
- Vérifications : 846 contrôles indépendants (chaque réponse recalculée depuis les énoncés, chaque écriture équilibrée, 158 égalités des corrigés réévaluées, cas Harbor rejoué écriture par écriture), 0 échec. Dans Chrome (headless, `file://`) : chaque mock rempli en entier puis rendu (20/20) et rendu avec des erreurs (notes partielles exactes), minuteur et remise automatique, persistance entre onglets, liens vers les 8 fiches, impression ; 34 pages en bureau clair et en téléphone 390 px sombre, sans défilement horizontal ; quiz, exercices, drills, flashcards et autres matières intacts ; aucune erreur console.

**Points à te signaler (mocks)** :
1. Le format de l'end-term n'est connu qu'en gros : à confirmer avec le prof (barème, nombre de questions, calculatrice, points négatifs).
2. L'annonce citée est datée du 28 nov. **2025** : si elle concerne la promo précédente, le format a pu changer.
3. Mock 2, exercice 1c : un apport en nature crédité en capital et en prime d'émission, en combinant les règles des Topics 3 et 4 (signalé « Outside the slides »).
4. Les salaires dus en fin d'année (Mock 3) viennent des exercices des Topics 6 et 8, alors que les slides du Topic 5 marquent les accruals « Not discussed » (signalé dans le corrigé).
5. La séance Q&A 5 n'a servi que de modèle de format ; ses corrigés contiennent toujours des incohérences (non reprises).

### 3. Market Structures and Price (`market-structures`)
**Statut : fait (24/11/2026), prêt pour l'examen final**

**Examen** (section Evaluation de MyCourses) :
- **Seuls les 4 fichiers MSP#INSIGHTS sont examinables** (les slides et les articles servent à comprendre).
- Final **70 %**, sur papier, sans documents, tous les chapitres. Midterm 30 % (ch. 1–2, 1 h, 2 questions ouvertes + 16 QCM, sans calculatrice).
- Le mock officiel 2026-27 : 4 questions sur 20 (formes de marché et explications 6, matrice de jeu 4, monopole avec graphique 6, concurrence parfaite avec entrée 4). La durée de l'examen final n'est pas indiquée.

**Contenu de `site/subjects/market-structures.js`** (examen unique `final`, topics `c1`–`c4` = chapitres 1–4) :
- 4 fiches fidèles aux INSIGHTS (tableau des définitions de théorie des jeux, exemples chiffrés recalculés) et une cheat sheet.
- 78 questions de quiz (q0–q77), dont 33 officielles (vrai/faux et QCM des exercices corrigés, mock) ; 44 flashcards (c0–c43).
- 45 exercices : tous les exercices du cours (ch. 1 à 4, jeux séquentiels et cas Amazon/Apple/Uber/Airbnb, Pizza Challenge, Sand Economics, cookies, railway, exemples des INSIGHTS), 9 générateurs (élasticité, markup/Lerner, jeu 2 × 2 avec équilibres de Nash et SPNE, monopole à coût marginal constant ou croissant, segmentation, minimum du coût moyen, firme price taker, équilibre de long terme).
- 3 mocks sur 20 : `m1` = le mock officiel avec son barème ; `m2`, `m3` = même structure, nouvelles questions. Graphiques de monopole en SVG (helper `plot`/`MONO_PLOT`, couleurs par variables CSS) dans les corrigés.
- Moteur non modifié.
- Vérifications (Edge headless, `file://`) :
  - 9 générateurs × 4 000 tirages (réponses finies) et 5 000 tirages vérifiés indépendamment (MR = MC, AC = MC, équilibre du marché, n* entier, Lerner = 1/|ε|) : 0 échec ;
  - 34 exercices résolus via l'interface (faux puis juste), 9 générateurs, 2 cas auto-évalués ;
  - chaque mock rempli juste (20/20) puis avec des erreurs ;
  - 23 pages en bureau clair et téléphone 390 px sombre, autres matières comprises ; graphique contrôlé en clair et sombre ; aucune erreur console ;
  - tous les exemples chiffrés des INSIGHTS et du mock recalculés à la main (équilibres de Nash du tableau 4, segmentation 27 → 33, No Grain No Gain, T-shirts, cookies).

**Sources** : `sources/market-structures/` (57 fichiers ; détail dans `_COURSE-INFO.md`).

**Points à te signaler** :
1. **Pas de corrigé sur MyCourses** pour les exercices des chapitres 3 et 4, Pizza Challenge, Sand Economics, cookies et railway (le fichier cookies s'appelle « Exercise and complete solution » mais ne contient que les questions) : réponses calculées par le site, signalées dans chaque corrigé.
2. **Erreurs dans les supports** (signalées sur le site) :
   - solution 2.A6 : la matrice met 300 au lieu de 225 (la conclusion (NC ; NC) ne change pas) ;
   - mock Q2 : les sous-points font 5 alors que la question vaut 4 (le site les ramène à 4) ;
   - exercice 4.2.6 : 5 firmes au départ ne vident pas le marché à p0 = 14 (35 offerts, 18 demandés) ;
   - exercices 4.3 : la demande change entre les exercices 3–4 (420 − 20p) et 5–6 (110 − 2p) ;
   - exercices 3.1 et 3.A1 : deux quantités donnent le même profit ; le site retient MR = MC (q = 4, resp. q = 3).
3. **Les 8 tests QCM d'entraînement** de MyCourses (BASIC et INTERMEDIATE par chapitre) n'ont pas été ouverts : cela crée des tentatives sur ton compte. Dis-moi si tu veux que je les récupère.
4. La durée du final (2 h dans les mocks) est un choix du site.

### 4. Espagnol (`espagnol`)
**Statut : fait (24/11/2026), prêt pour l'examen final**

**Examen** (programme 2026-27) :
- Final **35 %**, aucun détail de format (durée, nombre de questions) ; « Todo el contenido del curso podrá ser evaluado en el examen final ».
- Le reste de la note : CC1 25 % (oral + écrit), CC2 25 % (oral « abuelos años 50 » + audio), projet digital 15 %.
- Contenu : Vitamina A2 unités 7 (De compras) et 8 (Otras épocas), plus une unité de révision de *Socios* (Productos de ayer y hoy).

**Contenu de `site/subjects/espagnol.js`** (examen unique `final`, topics `t7`, `t8`, `t9` = Tema 7, Tema 8, Repaso) :
- 3 fiches (en anglais, exemples en espagnol) et une cheat sheet. Tous les tableaux de conjugaison sont générés à partir d'une seule source de données (presente, imperfecto, indefinido, imperativo vosotros/ustedes, gerundio), réutilisée par les exercices et le drill.
- 94 questions de quiz (q0–q93), dont 72 tirées du cuadernillo (provenance « Cuadernillo exercise ») ; 54 flashcards (c0–c53).
- 49 exercices : tous les textes à trous du cuadernillo (Luis y Clara, tan/tanto, Vamos de compras, imperfecto p. 58, discman, VHS, Bic, Ejercicios para comprobar el nivel 1 et 3 à 7, pronoms p. 63 et p. 45, imperativo, Londres/El Cairo, Seat, La Perla, chocolate Águila, ya/todavía), 5 générateurs (comparaisons, présent des verbes de magasin, se lo/se la, indefinido, imperfecto ou indefinido), associations de vocabulaire, 6 rédactions auto-évaluées. Accents stricts (`accents:'strict'`) pour toutes les conjugaisons.
- Module propre **Verb drill** (onglet `#espagnol-verbs`) : conjugaison à l'infini par temps, accent manquant = faux, objectif de 30 bonnes réponses par temps dans la progression.
- 3 mocks de 1 h 30 sur 20 (format **choisi pour le site**) : grammaire 10, vocabulaire et situations en magasin 4, compréhension écrite 3 (textes originaux), expression écrite 3 (grille). Pas d'écoute ni d'oral.
- Moteur : un seul changement, dans `assets/style.css` : `.trap b:first-child` devient `.trap>b:first-child` (un `<b>` en tête d'un `<i>` dans un encadré « Exam trap » s'affichait comme un titre). Rien ne change pour les autres matières.
- Vérifications (Edge headless, `file://`) :
  - 5 générateurs × 4 000 tirages : réponses non vides, aucun texte « undefined/NaN » ;
  - 38 exercices résolus via l'interface (faux puis juste), 5 générateurs, 6 cas auto-évalués ;
  - chaque mock rempli juste (20/20) puis avec des erreurs (≈ 16/20) ;
  - drill : réponse juste, réponse sans accent (comptée fausse avec la bonne forme), pronom sujet tapé ; compteurs enregistrés ;
  - imperfecto recalculé indépendamment (0 écart) ; indefinido et présent relus forme par forme ;
  - 24 pages en bureau clair et en téléphone 390 px sombre (autres matières comprises), sans défilement horizontal ; aucune erreur console.

**Sources** : `sources/espagnol/` (2 PDF ; détail dans `_COURSE-INFO.md`). Le cuadernillo est en grande partie scanné : lu en images (API PDF de Windows).

**Documents manquants** : tout corrigé ; annales et format de l'examen ; le libro del alumno Vitamina A2 (cité p. 70 et p. 44) ; les pistes audio (ex. 8 p. 53, ex. 17 p. 63, non repris) ; la section « Preguntas vídeo CA » (cachée).

**Points à te signaler** :
1. **Aucun corrigé n'existe** : toutes les réponses sont celles du site, expliquées. Vérifie avec ton prof en cas de doute.
2. **« Ejercicios para comprobar el nivel » 1 à 3** : la consigne demande l'imperfecto, mais plusieurs phrases contiennent « ahora » (présent nécessaire : « ahora ya no viven », « ahora sabe »), et la phrase 3.4 n'a de sens qu'avec une négation (« no sabía nadar, pero ahora sabe »). Le site accepte les variantes et le signale ; les phrases incompréhensibles (1.5, exercice 2) ne sont pas reprises.
3. **Ex. 1 p. 50, blanc (3)** : « ¡Sí! ___ gusta la idea » admet *me* (Luis) ou *le* (mamá) : les deux sont acceptés.
4. **Odd-one-out « desierto »** (p. 55) : le site retient *la bufanda* (le pañuelo protège du sable) ; réponse non officielle.
5. Les traductions anglaises du lexique, les comparatifs irréguliers (mejor, mayor…), la liste des expressions pour débattre et la liste complète des indefinidos irréguliers viennent du site (signalé « Outside the workbook ») : le libro del alumno qui les contient n'est pas sur MyCourses.
6. Le format des mocks (1 h 30, 4 parties) est une hypothèse : demande le format réel au prof.

**Collecte** : faite dans Edge (profil temporaire, la session MyCourses était déjà ouverte via le compte Windows ; profil supprimé ensuite).

### 5. Econometrics & Data Analysis (`econometrics`)
**Statut : fait (23/11/2026), prêt pour l'examen final**

**Examen** (page du cours et annales) :
- Final de **2 h**, calculatrice non programmable, **50 %** de la note.
- Programme : chapitres 3 à 5, sans test de normalité, sans linéarisation ni clustering.
- **Pas de QCM** : il faut expliquer en une ou deux lignes à partir des tableaux SPSS fournis.
- Les finals 2021, 2022, 2023 et 2025 suivent tous le même schéma : grande régression, choix et lecture de tests, dummies et SSE, ACP.

**Contenu de `site/subjects/econometrics.js`** (examens `midterm` (passé) et `final` ; topics `t1`–`t9`) :
- 9 fiches (chapitres 1–2 en rappel, 3 logique, 3 tests, 4 modèle et qualité, 4 LINE, 4 inférence, 4 problèmes, 5 ACP) et une cheat sheet (règles de réponse, formules, choix du test, modèles de phrases).
- 63 questions de quiz (q0–q82, ids non contigus), dont 20 « Past exam (official answer) » reprises des MCQ2 2021–2022 et des finals, uniquement celles lisibles sans capture SPSS. 38 flashcards (c0–c37).
- 25 exercices :
  - 11 calculs à nouveaux chiffres : décision avec la p-value, tSTAT, effectif attendu, R² ajusté, case SSE manquante, prédiction, t d'un coefficient, IC d'un coefficient, VIF, dummies, règle de Kaiser ;
  - choix du test, associations, remises dans l'ordre (étapes d'un test, d'une régression, d'une ACP, traitement des outliers) ;
  - 3 lectures complètes de sorties SPSS ;
  - 2 réponses rédigées auto-évaluées.
- 3 mocks de 2 h sur 20, au format des finals : 4 ou 3 problèmes avec tableaux SPSS (Model Summary, ANOVA, Coefficients avec IC et VIF, tests t et Levene, χ²/Fisher, corrélations, ACP), graphiques de résidus, P-P plots et graphique des composantes. Choix et nombres corrigés automatiquement ; explications rédigées notées avec une grille.
- **Sorties SPSS simulées** : les jeux de données sont générés et les statistiques calculées pour de vrai. Le générateur est dans `tools/econometrics/` (bibliothèque validée sur l'exemple Regression1 du cours : 98,24 ; 0,110 ; R² 0,581 ; SYX 41,33 ; F 11,085). Le fichier matière contient les tableaux (`ECO`) et les chiffres clés (`EK`), et les réponses des mocks sont lues dans `EK`.
- Options des QCM mélangées de façon déterministe (comme Digital Innovation). Moteur non modifié.
- Vérifications (Edge headless, `file://`) :
  - 11 générateurs × 4 000 tirages ;
  - 12 exercices résolus via l'interface (faux puis juste) ;
  - chaque mock rempli juste (20/20) puis avec des erreurs (≈ 13/20) ;
  - 29 pages en bureau clair et en téléphone sombre, autres matières comprises ;
  - aucune erreur console ;
  - 149 contrôles indépendants de cohérence des tableaux : SST = SSR + SSE, R², R² ajusté, F, SYX, ddl, p-values, IC, somme des valeurs propres, Kaiser, valeur critique t. Seuls 2 écarts, dus à l'arrondi de l'erreur standard à 3 décimales comme dans SPSS.

**Sources** : `sources/econometrics/` (76 fichiers ; détail dans `_COURSE-INFO.md`).

**Documents manquants** :
- les jeux de données .sav (non téléchargés volontairement) ;
- les vidéos ;
- la grille de réponses QCM du midterm 2026 (image) ;
- le tutoriel SPSS pour Mac.

**Points à te signaler** :
1. **Erreur de slide (chapitre 4, partie 1)** : pour le « model B » (R² 0,81 ; n = 100 ; k = 90), le R² ajusté vaut 1 − 0,19 × 99/9 ≈ −1,09, pas « close to 1% ». La conclusion (préférer le modèle A) ne change pas.
2. Les mocks utilisent des données simulées, pas des données réelles du cours. Le format, les types de questions et les barèmes reprennent les finals officiels.
3. Le corrigé du final 2021 contient une coquille : H1 du test t est écrit « the variable is not significant, β ≠ 0 ». Le site écrit « β ≠ 0 : effet significatif ».
4. Les QCM des anciens papiers qui dépendent d'une capture SPSS n'ont pas été repris tels quels : leur logique est retravaillée dans les mocks et les exercices.

### 6. Sales Techniques (`sales-techniques`)
**Statut : fait (24/11/2026)**

**Évaluation** : selon la page du cours 2026-27, l'épreuve finale est la **simulation IA de la Session 8 sur MuchBetter.ai** (cas Avril, 25 min, note plafonnée selon le niveau : 14, 16 ou 20/20) ; Squad Job 20 %. Les slides « What to expect » (2025) parlent aussi d'un **examen écrit de 50 %** (QCM, SPIN/BANT/CAP, objections, closing, BATNA) : contradiction à vérifier avec le professeur.

**Contenu de `site/subjects/sales-techniques.js`** (examen unique `final`, topics `s1`–`s7`, `s7` = Sessions 7–8) :
- 7 fiches (conseiller de confiance, B2B/B2C, parcours d'achat, openers et C.L.I.P., BANT, écoute active, SPIN, CAP et storytelling, objections et FFF, closing, BATNA/ZOPA) ; la fiche 7 contient une **préparation complète du cas Avril** (canevas, questions SPIN, CAP, objections, close) ; cheat sheet.
- 58 questions de quiz (q0–q57), 33 flashcards (c0–c32).
- 27 exercices (associations, remises dans l'ordre, QCM multiples, générateur ZOPA, 5 rédactions auto-évaluées dont la préparation du cas Avril).
- 1 mock d'examen écrit (1 h, 20 points, format **choisi pour le site** d'après « What to expect »).
- Moteur non modifié. Vérifications : 22 exercices résolus via l'interface, mock 20/20 puis ≈ 15/20, 23 pages en bureau et téléphone sombre, aucune erreur console.

**Points à te signaler** :
1. **Examen écrit ou non ?** Les deux documents se contredisent (voir ci-dessus).
2. La slide de synthèse de la Session 5 définit CAP comme « Context-Action-Payoff », alors que tout le cours dit Characteristic – Advantage – Proof (signalé sur le site).
3. La préparation du cas Avril est un **modèle écrit par le site** : utilise tes propres mots, les transcriptions sont relues.
4. Le concours de vente (Alpha Partner) est optionnel ; la finale a lieu le 27 novembre 2026.

### 7. Marketing Management (`marketing-management`)
**Statut : fait (24/11/2026), prêt pour l'examen final**

**Examen** (slides S1) : final **50 %** « on all course material », en classe, entre le 3 et le 19 décembre (TBC). Format non publié. Contrôle continu 40 %, participation 10 %.

**Enseignante** : Florence NIZETTE, groupe L10 (déduit de MyCourses : seul son devoir L10 est visible). Le site suit ses slides S1–S7 (= slides communes + ses exemples).

**Contenu de `site/subjects/marketing-management.js`** (examen unique `final`, topics `s1`–`s7`) :
- 7 fiches (définitions Kotler & Armstrong, tableaux PESTEL, SWOT, segmentation, PLC, services, marques, pricing, distribution, communication) et une cheat sheet.
- 82 questions de quiz (q0–q81) ; 46 flashcards (c0–c45).
- 35 exercices : associations (PESTEL Tony's, SWOT Pokawa, concurrence, segmentation, positionnement, niveaux de produit, services, marques, PLC, intermédiaires, outils de promotion, budgets), remises dans l'ordre (concepts, processus marketing, STP, pricing, communication, étapes de préparation de l'acheteur), calculs (mark-up, seuil de rentabilité, budget) dont 3 générateurs, 3 cas rédigés auto-évalués.
- 2 mocks de 1 h 30 sur 20 (format **choisi pour le site** : 20 QCM, calcul de prix, cas).
- Moteur non modifié.
- Vérifications (Edge headless) : 3 générateurs × 4 000 tirages ; 29 exercices résolus via l'interface (faux puis juste) ; mocks 20/20 puis ≈ 11/20 ; 25 pages en bureau clair et téléphone sombre ; aucune erreur console.

**Points à te signaler** :
1. **Ton devoir « L10 FINAL Presentations »** apparaît sur MyCourses comme « aucun devoir remis, en retard de 6 jours ». Peut-être remis par un autre membre du groupe : à vérifier.
2. Aucun corrigé : les classements de l'exercice Tony's Chocolonely et les réponses aux questions de mark-up (120 → 200 → 250 €) sont calculés par le site.
3. Les textes des exercices notés en classe (Apple, Spirit Airlines, Joli Home, Wonder Home) et le cas Microsoft (image) ne sont pas exploitables sur MyCourses.
4. Le format de l'examen est inconnu : demande-le à ta prof.

### 8. Cost Accounting (`cost-accounting`)
**Statut : fait (23/11/2026), prêt pour l'examen final**

Contenu de `site/subjects/cost-accounting.js` (examen unique `final`, topics `s1`–`s5` = Sessions 1–5, la review session est répartie dedans) :
- 5 fiches (une par session ; D&W suivi d'une session à l'autre avec les vrais chiffres des slides), une cheat sheet (formules, coûts pertinents, inducteurs par centre, checklist d'examen).
- 83 questions de quiz (q0–q99, ids non contigus), dont 75 tirées des exercices du cours ; 44 flashcards (c0–c43).
- 56 exercices : 19 calculs à nouveaux chiffres (coût mixte, coût par paliers, seuil de rentabilité, ratio de marge, profit cible, marge de sécurité, levier opérationnel, taux d'inducteur, coût moyen pondéré, coût d'achat, coût de production, coût complet, choix de production sous contrainte, commande spéciale, make or buy) et tous les cas du cours (D&W, Alpha, TechXL, McGregor, HoneyBees, étagères, Pizzeria, T&Co, Armor Lux, Norvik, Drury, Lambda, Sigma, pulls, Rainwear, marques, HopeShelter, interrupteur, XYZ…).
- 3 mock exams de 1 h 30 sur 20 :
  - `m1` = le mock officiel du cours (CotonRive, agriculteur, micro-ondes) avec son corrigé et son barème (10 + 5 + 5) ;
  - `m2` et `m3` = même structure, nouveaux chiffres, plus 4 questions de cours ou d'interprétation (2 pts, choix du site).
- Moteur : correction dans `assets/engine.js` (mocks). Un clic ↑/↓ dans une question « remise dans l'ordre » levait une erreur et la question ne comptait pas comme répondue. L'écouteur est passé en phase de capture.
- Vérifications (Edge headless, `file://`) :
  - 19 générateurs × 4 000 tirages : réponses finies, entières quand il le faut, aucun NaN ;
  - 36 exercices du cours résolus via l'interface (faux puis juste), solutions affichées ;
  - chaque mock rempli juste (20/20) puis avec des erreurs (note partielle) ;
  - 25 pages en bureau clair et en téléphone 390 px sombre, sans défilement horizontal ;
  - AFA intact ; aucune erreur console ;
  - les chiffres des corrigés longs recalculés de façon indépendante.

**Points à te signaler (erreurs dans les supports, signalées sur le site, jamais corrigées en silence)** :
1. **Session 2, D&W** : le ratio de marge arrondi à 41 % avant la division donne un seuil de rentabilité en valeur de 48 780,49 € et une marge de sécurité de 28,26 %. Avec le ratio exact (41,18 %), on obtient 48 571,43 € et 28,57 %. Le site accepte les deux.
2. **Drury (Session 2)** : seuil de rentabilité révisé à 61 833 dans les exercices recommandés et à 61 834 dans ceux de la séance. La règle du cours (arrondi au supérieur) donne 61 834.
3. **HoneyBees (Session 3)** : le corrigé donne 356,51 € et un prix de 475,35 €, mais la somme de ses propres termes fait 359,10 € (prix 478,80 €). L'énoncé applique aussi le taux d'achat (au kg) à 5 heures de personnel.
4. **Armor Lux (Session 4)** :
   - laine consommée écrite 247 645 au lieu de 241 645 ;
   - frais de service client des chemises 17 982 au lieu de 3 548 × 5,20 = 18 450, donc un profit de 7 798 € (1,9 %) et non 8 266 € (2,0 %). La conclusion ne change pas.
5. **Pizzeria (Session 4)** : la ligne « Pizzas sold: 60 000 for Imperiale + 80 000 for Royale » est inversée (le tableau utilise bien 80 000 Imperiale).
6. **Marques (Session 5)** : l'énoncé dit « drop segment A and B », alors que le corrigé traite B et D.
7. **Rainwear (review session)** : le tableau indique « 200 units × 45 € », mais il s'agit de 2 000 unités (90 000 €).
8. **Session 1, exercice 2** : l'équation 59,8x + 23 400 vaut de 1 801 à 2 400 unités (à 1 800 unités, seulement 3 paliers de location).
9. Certains QCM Drury des exercices recommandés de la Session 1 n'ont pas de réponse dans le corrigé : le site donne la réponse selon la définition du cours.
10. Les vidéos obligatoires font partie du programme mais n'ont pas été visionnées. Leurs sujets recoupent les slides, et leurs liens sont dans `_COURSE-INFO.md`.

Collecte des supports :
- 41 fichiers téléchargés depuis MyCourses (« COST ACCOUNTING 2313 », id 5544) dans `sources/cost-accounting/` : pour chaque Session 1–5, les slides (avec et sans solutions), le handout, les exercices de séance et les exercices recommandés (avec et sans solutions) ; Session 6 : review session, exercice supplémentaire de full costing, mock exam et son corrigé (exercice 3 corrigé).
- `sources/cost-accounting/_COURSE-INFO.md` : annonce d'examen en texte intégral, correspondance fichier ↔ intitulé MyCourses, 44 liens de vidéos (obligatoires et recommandées, non téléchargées).
- **Examen final** (annonce MyCourses) : 15 décembre, après-midi, **1 h 30**, sur papier, sans documents, calculatrice autorisée. Programme : Sessions 1 à 6 (cours, exercices, vidéos). Surtout des exercices, plus quelques questions d'interprétation et de cours. Midterm (21 oct., Sessions 1–2) : 20 QCM, +1 / −0,5 / 0.
- Collecte faite dans Edge (profil temporaire supprimé ensuite), comme le demande l'utilisateur pour tout accès à internet.
- Les modules `journal` et `taccounts` sont réutilisables si le cours contient des écritures.

### 9. Operations Management (`operations-management`)
**Statut : fait (24/11/2026), prêt pour l'examen final**

**Examen** (informations du cours) : final **60 %**, QCM + exercices, **90 min**, sans documents, calculatrice ; contenu = slides, exercices, articles de presse, matériel en ligne, jeu. Mid-term 20 % (passé), contrôle continu 10 %, beer game 10 %.

**Contenu de `site/subjects/operations-management.js`** (examen unique `final`, topics `o1`, `o2`, `o3`, `o4` (classes 4–5), `o6`, `o7`, `o8`, `o9` (classe 9 + beer game)) :
- **v2 (24/11/2026)** : fiches en couches, glossaire, 14 générateurs, 7 outils ; détail dans « Enrichissement v2, étape 4 » plus bas. Les chiffres ci-dessous sont ceux de la v1.
- 8 fiches (productivité, localisation, optimisation et transport, goulot et TOC, EOQ, ordonnancement et méthode hongroise, flexibilité, défis et effet coup de fouet) avec les exemples officiels (mid-term corrigé, exercices corrigés) ; cheat sheet.
- 62 questions de quiz (q0–q61), 34 flashcards (c0–c33).
- 30 exercices dont 7 générateurs (productivité, break-even de localisation, centre de gravité, ligne avec machines en parallèle, mix produit TOC, EOQ, règles de priorité).
- 3 mocks de 90 min sur 20 : `m1` = practice exam de décembre 2024 (réponses calculées par le site), `m2` et `m3` = nouveaux, style mid-term.
- Moteur non modifié.
- Vérifications (Edge headless) : 7 générateurs × 4 000 tirages ; 22 exercices résolus via l'interface (faux puis juste) ; mocks 20/20 puis ≈ 11/20 ; 27 pages en bureau clair et téléphone sombre ; aucune erreur console. Tous les corrigés du mid-term et du practice exam recalculés à la main.

**Points à te signaler** :
1. Le practice exam de décembre 2024 n'a **pas de solutions** sur MyCourses : les réponses du Mock 1 sont calculées par le site (Q4 : goulot M2, priorité D-B-A-C, 55 C, profit 770, perte 10 ; Q6 : profit 950).
2. La fin de la solution TOC à trois produits n'est pas dans le texte : le site donne 39 B et 6 070 € (6 081 € sans arrondir).
3. Les 3 tests en ligne et le jeu de localisation (fichiers Excel) ne sont pas repris.

### 10. Trademark Law (`trademark-law`)
**Statut : fait (24/11/2026)**

**Évaluation** : participation 10 %, cas pratique en équipe 25 %, QCM de mi-parcours 25 %, **examen final : question ouverte (cas pratique) 40 %**. Le rattrapage est aussi un cas pratique.

**Contenu de `site/subjects/trademark-law.js`** (examens `mid` = t1–t4 et `final` = t5–t7 ; `t7` = Session 8) :
- 7 fiches (droits de PI et signes distinctifs, catégories et fonctions, représentation, distinctivité et signes exclus, disponibilité et risque de confusion, dépôt et perte, licence, cession et contrefaçon). Les 20 arrêts de la liste de jurisprudence sont couverts. Cheat sheet avec la méthode du cas pratique.
- 57 questions de quiz (q0–q56) et 35 flashcards (c0–c34).
- 26 exercices : associations, remises dans l'ordre, QCM multiples, 2 générateurs de taxes de dépôt (INPI et EUIPO), délais, et 3 cas du cours (Georges/Linda/Bill, Sarah, Champollion) avec corrigés **écrits par le site**.
- 2 mocks : un QCM (20 questions) et un examen final de 2 cas pratiques notés par barème.
- **v2 (24/11/2026)** : voir « Enrichissement v2, étape 5 ». Correction : 18 des 20 arrêts étaient couverts en v1 (Grundig et Centrafarm manquaient) ; ils sont ajoutés.
- Moteur non modifié. Vérifications : 21 exercices résolus via l'interface, mocks à 20/20, 25 pages en bureau et téléphone sombre, aucune erreur console.

**Points à te signaler** :
1. **Professeur non identifié** : chaque prof a sa section sur MyCourses, mais aucune n'est réservée au groupe L10. Le site est construit sur les slides communes de la coordinatrice (Elsa Mimoun). Ton prof a pu ajouter ses propres exemples.
2. Il n'y a pas de Session 7 dans le support commun.
3. Deux erreurs dans les slides de la Session 4, signalées sur le site :
   - une slide intitulée « Article 4 e) » cite en fait les points (b) à (d) ;
   - une slide dit que les drapeaux et emblèmes « can be registered », alors que la règle est l'inverse : pas d'enregistrement sans l'accord de l'autorité compétente.
4. Aucun sujet d'examen passé n'est disponible : les deux mocks sont écrits par le site.

---

## Enrichissement v2 (commencé le 24/11/2026)

**Statut : terminé le 24/11/2026 (étapes 0 à 10 et étape finale).** Objectif : amener les 9 matières hors AFA au niveau d'AFA (fiches en couches, glossaire, générateurs illimités, outils interactifs), puis vérifier AFA. Ordre : 0 moteur · 1 Market Structures · 2 Econometrics · 3 Cost Accounting · 4 Operations · 5 Trademark Law · 6 Marketing · 7 Digital Innovation · 8 Sales · 9 Espagnol · 10 AFA · finale (harmonisation, recherche globale, révision mixte, `IESEG Revision.html` mono-fichier).

Constat de départ : la recherche globale, la révision mixte et la version mono-fichier **n'existent pas encore** dans le site (aucune trace dans `engine.js`) : elles seront créées à l'étape finale.

Textes extraits des supports (pdftotext, docx, pptx) : scratchpad de session uniquement (à refaire si besoin, commande dans la section Étape 0).

### Étape 0 · Moteur : fait (24/11/2026)
- Nouveau fichier `site/assets/widgets.js` (chargé après `engine.js`) + styles en fin de `style.css` ; documentation : CONVENTIONS.md section 16 ; démonstration : page **#demo** (lien en bas de l'accueil).
- Blocs : fiche en couches `NOTION` (essentiel, Understand / Worked example / Exam trap, « Your turn » corrigé tout de suite, boutons Got it / To review enregistrés), sommaire cliquable automatique de chaque fiche (+ « Open all layers »), glossaire (onglet Glossary, termes soulignés automatiquement, définition au survol, focus ou toucher), `STEPS`, `TREE` (explorer, s'entraîner sur des cas, carte complète), `GAME` (meilleures réponses, Nash, dominantes, matrices générées), `PLAY` (jeu répété contre l'ordinateur, 6 stratégies, fin connue ou inconnue), `PLOT`/`FIG` (graphique SVG à curseurs), `GEN` (générateur à niveaux, tolérance, corrigé pas à pas, score), type d'exercice `sort` (glisser-déposer ou toucher), `DIALOG`, `EXI`, module partagé `lab` (onglets Generators / Tools).
- Moteur : clés d'état `notions` et `w` (anciennes sauvegardes complétées automatiquement, vérifié), partie « Notions understood » dans la progression, notions à revoir listées dans Progress, pages de site `Rev.addPage`, glisser-déposer (poignée ⠿) pour tous les exercices « order » existants.
- Vérifications (Edge headless, `file://`) : chaque bloc de #demo manipulé (corrections justes et fausses, calculs contrôlés), 179 pages des 10 matières en téléphone 390 px sombre : aucune erreur console, aucun bloc cassé. Seul défaut relevé, préexistant : versions imprimables des mocks d'Econometrics 3 px trop larges sur téléphone (à traiter à l'étape 2).
- Outils de test (scratchpad de session, à recréer si besoin) : pilote CDP d'Edge en Node, test de toutes les pages, stress des générateurs.

### Étape 1 · Market Structures and Price : audit (24/11/2026)

Sources relues : les 4 MSP#INSIGHTS (seuls examinables), les slides des chapitres 1 à 4 (pptx), le mock officiel 2026-27. Format de l'examen (mock) : Q1 définitions et explications 6 pts, Q2 matrice de jeu 4 pts, Q3 monopole avec graphique 6 pts, Q4 concurrence parfaite avec entrée 4 pts. « Answers are only considered correct when the asked explanation/definition is also correct. »

**Couverture** (B = bien expliqué, M = mal ou trop sec, A = absent)
- Ch. 1 : élasticité-prix, formule, tableau 1 (B) ; Figure 1 élasticité et pente (A) ; 4 conditions (B) ; price taker / price setter (B) ; tableau 2 des formes (B) ; oligopole, concurrence monopolistique, court et long terme (B, sans intuition) ; 4 barrières (B) ; markup, Lerner, relation inverse avec |ε| (M : formule sans intuition ni exemple chiffré) ; De Loecker (B) ; « Is market power bad? », Pareto, statique / dynamique, brevets (B).
- Ch. 2 : vocabulaire, hypothèses, cartel (B) ; dilemme du prisonnier, tableaux 2, 3, 4 (B, mais statiques : rien à manipuler) ; définitions mot pour mot (B) ; bataille des sexes, CO₂ scénarios 1 et 2, mechanism design (B) ; maintain-break et art. 101 (B) ; jeux répétés, fin connue / inconnue, tit-for-tat (M : texte seul, rien à jouer) ; jeux séquentiels, arbre, induction à rebours (M : aucun arbre dessiné) ; centipede (M : pas de figure) ; menace crédible (B) ; ultimatum (B) ; Bertrand (B) ; Hotelling, figures 2 à 5 (M : aucune figure, distances moyennes 250 m / 500 m non expliquées).
- Ch. 3 : coûts CT, FC, VC, AC, AFC, AVC, MC (B) ; tableau AC/MC de TC = 200 + 2q + 0,02q² des slides (A) ; analogie du vélo (slides) (A) ; figures 1-2 (A) ; rendements d'échelle et figures 3-6 (M : liste sans figure) ; exercice tabulaire LAC (q_SE = 400, IRS/DRS, 3 usines) et LTC cubique (q_SE = 20) des slides (A) ; recette, MR = a − 2bq (B, sans intuition « baisser le prix de toutes les unités ») ; tableau 1 des livres (ΔTR/Δq) (A) ; figure 8 (A) ; règle en deux étapes, condition suffisante (B) ; figure 9 TR − TC (A) ; exemple 30 − 0,0125q (B) ; figure 10 (A, seul le graphique du T-shirt existe) ; discrimination au 1er degré (B, figure 11 A) ; segmentation (B, figures 12-14 A) ; concurrence monopolistique court / long terme, tangence (M : pas de figure, tangence non expliquée).
- Ch. 4 : price taker p = AR = MR (B, figure 1 A) ; p = MC, produire ou non, AVC à court terme (B) ; courbe d'offre de la firme (B, figure 3 A) ; exemple TC = 2q + 2q² (B) ; No Grain No Gain, conditions d'équilibre, n* (B, figures 4-7 A) ; monopole naturel (B, figures 8-10 A) ; chocs de demande et de coût, efficacité statique / dynamique (B).

**Compréhension** (où un étudiant décroche) : pourquoi MR < p ; pourquoi p = MC (et non p = AC) ; différence sortie (p < AC) / fermeture temporaire (p < AVC) ; pourquoi MC coupe AC à son minimum (l'analogie du vélo des slides n'est pas reprise) ; « expected solution » vs équilibre de Nash ; notation complète d'un SPNE ; somme horizontale des demandes ; markup µ vs indice de Lerner ; « zero economic profit » = rendement normal ; tangence demande / AC à long terme ; pourquoi les glaciers vont au centre à prix fixes et s'en écartent à prix libres. Aucun glossaire.

**Pratique** : 9 générateurs (élasticité, markup, jeu 2 × 2, monopole MC constant / croissant, segmentation, min AC, price taker, équilibre de long terme), sans niveaux ni corrigé pas à pas. Sans générateur : MR et maximum de TR, tableau AC/MC (sens de variation), LAC tabulaire (q_SE, IRS/DRS, nombre d'usines), q_SE d'une LTC cubique, produire / fermer / sortir, discrimination au 1er degré, situation initiale du marché (n0, sens de l'entrée), monopole naturel, jeu séquentiel (SPNE), matrices 3 × 3 et 4 × 4, solution attendue, Lerner depuis ε. Aucune question « À toi ». Aucun outil interactif : pas de dilemme jouable, pas de graphique à curseurs.

**Examen** : les 3 mocks suivent le format officiel (Q1 à Q4) et couvrent les 4 chapitres ; corrigés contrôlés à la création (20/20 juste, notes partielles exactes), à recontrôler en vérification. Limite : les graphiques demandés (Q3 f) ne peuvent qu'être auto-évalués ; le corrigé montre le graphique. Rien de faux relevé ; les erreurs des supports restent signalées (voir section 6 ci-dessus).

**Priorités** (points à l'examen d'abord)
1. Q3 + Q4 (10 pts) : fiches 3 et 4 en couches avec figures, graphiques à curseurs (monopole MC constant / croissant avec surplus et perte de bien-être, firme price taker, entrée sur le marché, segmentation, 1er degré, concurrence monopolistique, monopole naturel, courbes de coûts), générateurs pas à pas pour chaque calcul.
2. Q2 (4 pts) : matrices générées (meilleures réponses, Nash, dominantes, solution attendue), générateur de jeu séquentiel (SPNE), arbre de décision « dominant / Nash / expected solution ».
3. Q1 (6 pts) : fiches 1 et 2 en couches avec « À toi », Hotelling interactif, tris (formes de marché, barrières, élasticités), définitions mot pour mot.
4. Glossaire complet ; dilemme du prisonnier et maintain-break jouables (partie unique, répétée, fin inconnue) ; exemples des slides (tableaux AC/MC et LAC).
5. Quiz et flashcards pour les notions ajoutées.

### Étape 1 · Market Structures and Price : fait (24/11/2026)

**Enrichissement** (`site/subjects/market-structures.js`, ancienne version gardée hors du site) :
- **4 fiches réécrites en couches** : 36 notions (c1 : 9, c2 : 10, c3 : 11, c4 : 6), chacune avec Essential, Understand, Worked example, Exam trap et une question « Your turn ». Tout le contenu juste des anciennes fiches est conservé (tableaux, exemples officiels, pièges).
- **Figures des INSIGHTS reproduites en SVG** :
  - Ch. 1 : figure 1 (élasticité), déplacement de la demande en concurrence monopolistique.
  - Ch. 2 : arbre de jeu du main exercise avec le SPNE en gras ; figures 2 à 5 de Hotelling (parts de marché et distance moyenne).
  - Ch. 3 : figures 1-2 (TC/VC, AC/AVC/AFC/MC), 3 à 6 (rendements d'échelle, LAC en U), 8 (TR, AR/MR), 9 (TR − TC), 10 (monopole), 11 (1er degré contre prix uniforme), 12 (segments), 15-16 (court et long terme).
  - Ch. 4 : figures 1 (marché / firme), 2-3 (firme price taker, courbe d'offre), 4-6 (entrée de 4 à 6 firmes), 8-10 (monopole naturel).
- **Exemples des slides ajoutés** : analogie du vélo, tableau AC/MC de 200 + 2q + 0,02q², tableau LAC du producteur de cookies (q_SE = 400, 3 usines), LTC = 80q − 4q² + 0,1q³ (q_SE = 20).
- **Blocs interactifs dans les fiches** : dilemme du prisonnier (tableau 1, années de prison : le plus petit est le meilleur), tableau 2, tableau 4 (4 × 4), maintain-break jouable, pas-à-pas (induction à rebours, centipede, guerre des prix de Bertrand).
- **Glossaire** de 71 termes (onglet Glossary, soulignés dans les fiches et la cheat sheet).
- **Onglet Generators** : 16 générateurs, chacun avec niveaux et corrigé pas à pas.
  - Ch. 1 : élasticité, Lerner / markup.
  - Ch. 2 : jeu 2 × 2 au format de la Q2 du mock, jeu séquentiel (SPNE et crédibilité d'une menace).
  - Ch. 3 : coûts et min AC, tableau LAC, LTC cubique, MR et TR max, monopole (MC constant, croissant, avec coût fixe et décision court / long terme), segmentation contre prix uniforme, 1er degré, concurrence monopolistique.
  - Ch. 4 : price taker (3 cas de coût fixe), situation initiale → équilibre (format de la Q4 du mock), prix d'équilibre avec n firmes, monopole naturel.
- **Onglet Tools** : 20 outils.
  - 10 graphiques à curseurs : élasticité le long d'une demande linéaire, courbes de coûts, monopole (surplus, profit, perte de bien-être, markup, Lerner), segmentation, 1er degré, concurrence monopolistique court → long terme, firme price taker, entrée sur le marché, monopole naturel, plage de Hotelling.
  - 5 matrices : générées (2 × 2, 3 × 3, 4 × 4), tableau 3, bataille des sexes, CO₂ scénarios 1 et 2.
  - 2 parties contre l'ordinateur : dilemme du prisonnier et maintain-break, en partie unique, 5 ou 10 tours, ou fin inconnue ; stratégies du cours (tit-for-tat, toujours maintenir, toujours rompre) plus un joueur aléatoire.
  - 3 arbres de décision avec entraînement : résoudre une matrice (cas générés), quelle forme de marché, produire / fermer / sortir.
- **Pratique ajoutée** : 5 exercices de tri (formes de marché, barrières, élasticités du tableau 1, coûts fixes / variables, type de solution des jeux), 20 questions de quiz (q78–q97), 16 flashcards (c44–c59).
- **Cheat sheet** : lignes q_SE et long terme de la concurrence monopolistique ajoutées. Overview mise à jour.
- **Moteur** (pendant cette étape) :
  - matrices où « plus petit = meilleur » (`lower`) ;
  - noms des stratégies dans le vocabulaire du cours ;
  - `parts` d'un générateur dépendant du tirage ;
  - réponses attendues affichées avec 4 décimales : `fmt` arrondissait à 2, et −0,025 s'affichait « −0.03 » (bug trouvé par le test).

**Audit traité** : tous les points de couverture, de compréhension et de pratique ci-dessus sont couverts.
- Restent volontairement hors du site : Cournot et Stackelberg (non enseignés, simple renvoi à Varian), le grim trigger (absent du cours).
- La figure 7 (MC constant contre MC croissant) est couverte par le graphique du monopole à curseurs (paramètre d), pas par une figure fixe.
- Le calcul de l'aire de perte de bien-être est signalé « Outside the slides ».
- Mocks : contenu inchangé (aucune erreur relevée) ; lancement, remise et correction testés ; je ne les ai pas re-remplis en entier.

**Vérifications** (Edge headless, `file://`, téléphone 390 px sombre) :
- 16 générateurs × 3 000 tirages par niveau : 0 échec. 2 exercices par générateur recalculés à la main.
- Via l'interface, 5 exercices par générateur et par niveau : réponse fausse → « Not yet » avec la réponse attendue, puis réponse attendue → « Correct », corrigé pas à pas complet.
- 20 outils manipulés, chaque curseur à min / max / milieu : aucune valeur NaN. Valeurs par défaut recalculées à la main (monopole 3 / 14 / CS 4,5 / perte 1,5 ; segmentation 33 contre 27 ; TFT 24 / 24 ; maintain-break 28 000 / 28 000).
- Matrices résolues juste dans les 3 tâches ; arbres parcourus (explorer, s'entraîner, carte).
- 5 tris justes puis faux ; 36 « Your turn » justes puis faux ; boutons des notions enregistrés et listés dans Progress.
- 57 pages de la matière et 218 pages du site sans erreur console. Ancienne sauvegarde chargée sans perte.

**Points à te signaler** :
1. Cournot et Stackelberg ne sont pas au programme : les INSIGHTS y renvoient seulement en note (Varian). Il n'y a donc pas de graphique Cournot / Stackelberg, contrairement à la liste de départ.
2. Le slide du tableau LAC marque q = 400 « CRS » (c'est le minimum) ; le site reprend l'étiquette du slide.

### Étape 2 · Econometrics & Data Analysis : audit (24/11/2026)

Sources relues : slides du chapitre 3 (parties 1, 2, 4), du chapitre 4 (parties 1 à 4) et du chapitre 5 (partie 1, ACP) ; list_of_tests (M. Buisine). Les slides des chapitres 1-2 (midterm passé) et le clustering (hors final) n'ont pas été relus en détail. Final : 2 h, chapitres 3 à 5, pas de QCM, réponses en une ou deux lignes à partir de sorties SPSS. Schéma des annales : grande régression (7 à 12 pts), choix et lecture d'un test (2 à 4 pts), dummies / cellule SSE manquante, ACP (4 à 6 pts).

**Couverture** (B = bien, M = mal ou trop sec, A = absent)
- Ch. 3 partie 1 : H0/H1 (B) ; exemples du cours, Mister Bunny, voiture électrique 400 km, ventes de 46 € en unilatéral (A) ; erreurs de type I et II (M : tableau sans l'exemple d'Anna) ; logique des bornes et standardisation Z (A, aucun schéma de zone de rejet) ; Student et ddl (B) ; House.SAV (t = 7,67, 86 ddl) (A) ; p-value et ses trois définitions (M : sans figure) ; vocabulaire de la significativité (B) ; mariage (B).
- Ch. 3 partie 2 : les quatre questions (B, sans exemple) ; exemples de Healthy-Cereals Inc. et des maisons bleues (A) ; paramétrique / non paramétrique (A) ; tableau des tests (B) ; Levene (B) ; χ² (B, sans calcul d'un effectif attendu) ; échantillons appariés (B). Partie 4, normalité (B ; le test n'est pas à l'examen).
- Ch. 4 partie 1 : définitions, sources de l'erreur, MCO (B) ; décomposition SST avec le schéma A/B/C (A) ; formes de nuages selon r² (A) ; échelle de qualité, SYX, R² ajusté, modèle A ou B (B) ; exemples des tartes et des maisons (B).
- Ch. 4 partie 2 : pourquoi les hypothèses (estimateurs sans biais) (A) ; graphique résidus / prédicteur et résidus / valeurs prédites (M) ; trois graphiques types (A : aucune figure) ; L.I.N.E. et tableau d'importance (B) ; hétéroscédasticité (B) ; normalité « trop de petits résidus » de l'exemple House (A).
- Ch. 4 partie 3 : test t (B) ; test F, sens de MSR/MSE (M) ; revue des tartes (B) ; IC (B).
- Ch. 4 partie 4 : valeurs aberrantes, trois catégories, traitement (B) ; dummies (B) ; tableau de la maison orientation/qualité/centre-ville (A) ; trois modalités bleu/blanc (M) ; Disney (B) ; VIF par sous-modèles (B) ; exemple des téléphones (A).
- Ch. 5 : logique géométrique de l'ACP, projection de l'écharpe, Lego/Playmobil (A) ; FruitCo pas à pas (M : sans les chiffres) ; Kaiser, seuil, rotation, noms (B) ; lecture du graphique des composantes (B).

**Compréhension** : la p-value reste abstraite sans schéma ; zone de rejet et valeur critique jamais dessinées ; SST = SSR + SSE sans image ; graphiques de résidus décrits seulement en mots ; ACP sans intuition géométrique ; MSR/MSE non expliqués ; aucun glossaire.

**Pratique** : 11 générateurs (décision, tSTAT, effectif attendu, R² ajusté, SSE, prédiction, t d'un coefficient, IC, VIF, dummies, Kaiser), sans niveaux ni corrigé pas à pas. Manquent :
- un arbre de choix du test avec des cas d'entraînement (un seul exercice de choix existe) ;
- une sortie de régression annotée et un générateur de sorties complètes à interpréter ;
- un test d'hypothèse pas à pas ;
- un graphique de régression à curseurs ;
- la reconnaissance des problèmes L.I.N.E. sur des graphiques générés ;
- F à partir de l'ANOVA, et le % de variance d'une composante ;
- des questions « À toi ».

**Examen** : les 3 mocks suivent le format des finals avec des sorties simulées cohérentes ; aucun corrigé faux relevé. Défaut : leurs versions imprimables débordent de 3 px sur téléphone.

**Priorités**
1. Lecture d'une régression (7 à 12 pts) : sortie annotée cliquable, générateur de sorties complètes à interpréter (F, t, IC, R², SYX, prédiction, dummies, VIF), générateurs F, R², SYX.
2. Choix d'un test (2 à 4 pts) : arbre de décision du cours avec cas générés et cas du cours, test pas à pas.
3. ACP (4 à 6 pts) : générateur de tables (valeurs propres, Kaiser, % de variance, loadings, communalités), lecture du graphique des composantes.
4. Diagnostic L.I.N.E. : graphiques de résidus générés à reconnaître, régression à curseurs (pente, bruit, valeur aberrante, hétéroscédasticité, non-linéarité).
5. Fiches t3 à t9 en couches avec schémas (zone de rejet, p-value, SST, nuages, résidus, ACP) ; t1 et t2 mises au même format ; glossaire ; quiz et flashcards ; débordement de l'impression.

### Étape 2 · Econometrics & Data Analysis : fait (24/11/2026)

**Enrichissement** (`tools/econometrics/parts/` puis reconstruction de `site/subjects/econometrics.js` ; voir le README de l'outil) :
- **9 fiches réécrites en couches**, 33 notions, chacune avec Essential, couches et « Your turn ». Les chapitres 1-2 (midterm) sont passés au même format sans perte.
- **Exemples des slides ajoutés** : Mister Bunny, voiture électrique et ventes de 46 € (unilatéral), grossesse d'Anna, standardisation Z, House.SAV (t = 7,67, 86 ddl), Healthy-Cereals Inc., paramétrique / non paramétrique, valeurs aberrantes « trop de petits résidus », maison orientation / centre-ville, couleurs bleu / blanc, FruitCo, idée géométrique de l'ACP (écharpe, décathlon, Lego / Playmobil).
- **Schémas SVG** : courbe normale avec zones de rejet (bilatéral) et aire de la p-value (unilatéral) ; nuage et droite de Regression1 ; décomposition A = B + C de SST ; nuages r² = 1 / entre 0 et 1 / 0 ; 4 graphiques de résidus types ; valeur aberrante ; deux droites parallèles d'une dummy ; projection de l'ACP ; graphique des composantes.
- **Calculs dans le navigateur** : MCO, lois t et F, IC, VIF, mêmes fonctions que le générateur des mocks. Les sorties de Regression1 (10 maisons) et Regression2 (tartes) reproduisent les chiffres des slides (98.248 / 0.110 / R² .581 / SYX 41.33 / F 11.085 ; 306.526 / −24.975 / 74.131 / R² .521 / ajusté .442 / p .012, .040, .014).
- **Glossaire** de 69 termes.
- **Onglet Generators** : 15 générateurs, chacun avec corrigé pas à pas.
  - Ch. 3 : H0/H1, décision et vocabulaire de la p-value, test t (bilatéral / unilatéral), choix du test sur les cas du cours, tableau χ² (effectif attendu, χ² ou Fisher, décision), Levene.
  - Ch. 4 : sortie de régression complète à interpréter (2 ou 3 variables, données simulées), table ANOVA (SSE, R², R² ajusté, SYX, F), prédiction dans ou hors de l'intervalle, t et IC d'un coefficient, dummies, VIF, reconnaissance du problème sur un graphique de résidus généré.
  - Ch. 5 : valeurs propres (Kaiser, %, 80 %), matrice des composantes (rattacher, lier, communalité).
- **Onglet Tools** : 8 outils.
  - Arbre de choix du test (les quatre questions du cours, 15 cas de la list_of_tests et des slides) ; il est aussi intégré à la fiche t4.
  - 3 sorties SPSS annotées (maisons, tartes, régression nouvelle à chaque fois) : clic sur chaque chiffre pour son sens, mode « Test yourself ».
  - Graphiques à curseurs : p-value et zone de rejet ; régression (pente, bruit, hétéroscédasticité, courbure, valeur aberrante) avec R², SYX et graphique des résidus recalculés ; marge d'erreur d'un IC.
  - Test complet en 8 étapes, nouveaux chiffres à chaque fois.
- **Pratique ajoutée** : 3 exercices de tri (situations → test, observations → L.I.N.E., outils → étape de l'ACP), 18 questions de quiz (q83–q100), 11 flashcards (c38–c48).
- **Moteur** :
  - bloc générique `ANNOT` (sortie annotée) ;
  - hauteur d'étiquette des lignes verticales des graphiques ;
  - marge des anciennes `<figure class="plot">` corrigée : les versions imprimables des mocks ne débordent plus sur téléphone (défaut relevé à l'étape 0).

**Audit traité** : tous les points listés.
- Restent hors du site : HCA (hors final), linéarisation (hors final).
- Les slides des chapitres 1-2 n'ont pas été relues en détail : midterm passé, base reprise de la v1.
- Mocks : contenu inchangé, aucune erreur relevée.

**Vérifications** (Edge headless, `file://`, téléphone 390 px sombre) :
- 15 générateurs × 2 000 tirages par niveau : 0 échec. 2 exercices par générateur recalculés à la main.
- Via l'interface, 5 exercices par générateur et par niveau : faux → réponse attendue → juste, corrigé pas à pas.
- 8 outils manipulés : arbre parcouru et entraîné, notes des sorties annotées, curseurs aux bornes sans NaN, p-value bilatérale pour z = −2,5 = 0,0124. Chiffres des sorties du cours comparés aux slides.
- 33 « Your turn » justes puis faux, 3 tris, notions enregistrées dans Progress.
- 49 pages de la matière : aucune erreur, aucun débordement.

**Point à te signaler** : les IC de la publicité des tartes calculés par le site ([17.553 ; 130.709]) diffèrent légèrement de la slide ([17.56 ; 130.70]) : la slide arrondit. Rien à corriger.

### Étape 3 · Cost Accounting : audit (24/11/2026)

Sources relues : slides des Sessions 1 à 5 (avec solutions), list des exercices de séance et recommandés, review session, mock et son corrigé. Recherche ciblée dans les supports : pas de méthode high-low, de seuil multi-produits, d'ABC (seulement cité), de section réciproque, de coûts joints, de coût cible ni d'écarts sur standards (un seul énoncé « budget and standard cost » en Session 2, traité comme un calcul de CVP). Examen : 1 h 30, surtout des exercices, quelques questions d'interprétation ; le mock du cours remplit des tableaux vides (0,1 pt par case).

**Couverture** : les 5 fiches existantes couvrent tout le programme avec les chiffres du cours (D&W suivi de session en session, Alpha, CotonRive, XYZ, HopeShelter, Pizzeria, marques). Note B partout sur le fond. Manquent :
- les **schémas** : graphiques des comportements de coûts (variable, fixe, palier, mixte), graphique CVP du seuil (A), chaîne de valeur de D&W (M : en texte seulement), flux du full costing (M : en formule seulement) ;
- l'**intuition** des formules (pourquoi le seuil s'arrondit au supérieur, pourquoi le levier est maximal près du seuil, pourquoi le CMUP) : souvent donnée en une phrase (M).

**Compréhension** : la fiche 4 (full costing) est un long enchaînement de tableaux sans pas-à-pas ni rappel de l'ordre ; les décisions de la Session 5 mélangent court et long terme dans un même bloc ; aucun glossaire ; aucune question « À toi ».

**Pratique** : 19 générateurs (type calc), sans niveaux ni corrigé pas à pas, et aucun tableau à remplir alors que l'examen est fait de tableaux. Manquent :
- le tableau de répartition des charges indirectes (taux par centre) ;
- la fiche de stock au CMUP ;
- la chaîne complète du full costing (achat, CMUP matières, production, CMUP produits finis, coût complet, résultat) ;
- l'effet d'un changement dans l'analyse de sensibilité ;
- la commande spéciale sans capacité disponible (coût d'opportunité) ;
- l'abandon d'un segment ;
- le prix minimum.

Outils absents : graphique CVP à curseurs, comportement des coûts, arbre de décision court / long terme.

**Examen** : 3 mocks (le mock officiel et deux sur le même modèle) ; corrigés contrôlés à la création ; erreurs des supports signalées (section 2 ci-dessus). Rien de faux relevé.

**Priorités**
1. Full costing (le plus gros exercice du mock) : générateurs à tableau à remplir pour la répartition, le CMUP et la chaîne complète, et le pas-à-pas D&W.
2. CVP : graphique à curseurs, générateurs pas à pas (seuil, objectif, sensibilité, levier).
3. Décisions de la Session 5 : générateurs (mix, commande spéciale avec ou sans capacité, make or buy, abandon, prix minimum) et arbre de décision.
4. Fiches en couches avec schémas et « Your turn », glossaire, tris (coûts directs / indirects, fixes / variables, coûts environnementaux, pertinent ou non).

### Étape 3 · Cost Accounting : fait (24/11/2026)

**Enrichissement** (`site/subjects/cost-accounting.js`, bloc v2 avant `const MOCKS`) :
- **5 fiches converties en couches** (28 notions) avec le nouveau helper `LAYERED`. Tout le contenu existant est conservé : les exemples du cours passent en « Worked example », les pièges en « Exam trap ».
- Pour chaque notion : un essentiel écrit et une question « Your turn ».
- **Schémas** :
  - 4 graphiques de comportement des coûts (chiffres D&W) ;
  - graphique CVP des fenêtres D&W (seuil 285,71 → 286, zones de perte et de profit) ;
  - courbe du levier opérationnel autour du seuil ;
  - flux du full costing (achats → stock matières → production → stock produits finis → distribution → résultat), dans les fiches 3 et 4.
- **Pas-à-pas** de toute la chaîne D&W de février.
- **Glossaire** de 44 termes.
- **Onglet Generators** : 15 générateurs, chacun avec corrigé pas à pas.
  - Session 1 : comportement d'un coût à partir de deux niveaux (variable, fixe, mixte, palier), coût total et unitaire.
  - Session 2 : seuil et marge de sécurité, profit cible, sensibilité, levier opérationnel.
  - Sessions 3-4 : **tableau de répartition** (nombre d'inducteurs et taux, avec le piège « 100 € de ventes »), taux unique contre taux par centre (Alpha), **fiche de stock au CMUP** (tableau à remplir), **chaîne complète du full costing** (tableau à remplir, arrondis à 2 décimales comme le cours).
  - Session 5 : mix sous contrainte, commande spéciale (capacité libre ou coût d'opportunité), make or buy (court et long terme), abandon d'un segment, prix minimum.
- **Onglet Tools** : graphique CVP à curseurs (valeurs par défaut D&W : seuil 48 571,43 €, marge de sécurité 28,57 %, levier 3,5), comportement des coûts à curseurs, arbre de décision de la Session 5 entraînable sur 7 cas du cours.
- **Pratique ajoutée** : 4 tris (quatre catégories de coûts, coûts environnementaux, inducteurs par flux, pertinent ou non), 12 questions de quiz (q100–q111, options mélangées), 8 flashcards (c44–c51).
- **Moteur** : `LAYERED` (conversion d'une fiche classique), générateur à **tableau à remplir** (`table`). Les deux sont documentés dans CONVENTIONS.md (sections 16.11 et 16.12), avec `ANNOT` (16.13).

**Audit traité** : tous les points listés. Mocks : contenu inchangé.

**Vérifications** (Edge headless, `file://`, téléphone 390 px sombre) :
- 15 générateurs × 2 000 à 3 000 tirages : 0 échec. Un défaut corrigé au passage : une hausse du coût variable pouvait annuler la marge sur coût variable.
- 2 exercices par générateur recalculés à la main (dont la chaîne complète : 5,50 → 5,38 → 50,14 → 50,08 → 56,50).
- Via l'interface, 5 exercices par générateur et par niveau : faux → attendu → juste, corrigé pas à pas. Les tableaux à remplir sont compris.
- Outils : valeurs par défaut du CVP identiques à la slide corrigée.
- 28 « Your turn » et 4 tris justes puis faux.
- 40 pages de la matière sans erreur ni débordement.


### Étape 4 · Operations Management : audit (24/11/2026)

Sources relues : slides des classes 1 à 9 et course recap ; recherches ciblées dans tous les supports. Le cours **n'enseigne ni les prévisions ni les files d'attente**, pas plus que le point de commande, le stock de sécurité (cité seulement), l'analyse ABC, Gantt, Johnson ou les 5 étapes de la TOC : pas de générateur pour ces sujets. Examen : QCM et exercices, 90 min.

**Couverture** : les 8 fiches existantes couvrent les notions et les exemples officiels, mais en version condensée :
- 4 fiches n'ont pas de sections numérotées : la 2 (facteurs de localisation), la 3, la 6 et la 8 ;
- aucun schéma : coûts de localisation en fonction du volume, centre de gravité, région admissible d'un programme linéaire, ligne de production et goulot, courbes de coûts de l'EOQ, effet coup de fouet.

**Compréhension** : intuitions absentes. Pourquoi améliorer un poste qui n'est pas le goulot ne sert à rien. Pourquoi coût de commande = coût de possession à l'EOQ. Pourquoi SPT minimise le temps d'écoulement. Pourquoi une localisation avec FC et CV plus élevés n'est jamais optimale. Comment se forme l'effet coup de fouet. Ni glossaire ni « À toi ».

**Pratique** : 7 générateurs (productivité, seuil de localisation, centre de gravité, ligne à machines parallèles, mix TOC, EOQ, règles de priorité), sans niveaux ni corrigé pas à pas. Manquent :
- marketing contre opérations ;
- factor rating ;
- coût de l'EOQ pour un Q donné et nombre de commandes ;
- affectation (méthode hongroise) ;
- valeur de la flexibilité ;
- programme linéaire graphique (sommets) ;
- faisabilité d'un problème de transport ;
- utilisation et capacité.

Outils absents : simulateur de ligne (temps des postes → goulot, débit), courbes de l'EOQ et coûts de localisation à curseurs, programme linéaire graphique.

**Examen** : 3 mocks (practice exam 2024 et deux sur le modèle du mid-term) ; rien de faux relevé.

**Priorités** : générateurs pas à pas pour chaque calcul (y compris les manquants), simulateur de ligne, graphiques à curseurs, fiches en couches avec schémas, glossaire, tris, quiz et cartes.

### Étape 4 · Operations Management : fait (24/11/2026)

**Enrichissement** (`site/subjects/operations-management.js`, bloc v2 avant les mocks ; ancienne version gardée dans `tools/v1-backup/`) :
- **8 fiches en couches** (28 notions) avec `LAYERED`, après ajout de sections numérotées aux fiches o2, o3, o4, o6, o7, o8 et o9. Chaque notion : Essential, Understand, exemples du cours, piège, « Your turn ».
- **Intuitions ajoutées** (couche Understand) : pourquoi un poste hors goulot ne sert à rien, pourquoi la marge par minute de goulot, pourquoi coût de commande = coût de possession à l'EOQ, pourquoi SPT minimise le temps d'écoulement, pourquoi une localisation à FC et CV plus élevés n'est jamais optimale, pourquoi la solution d'un PL est à un sommet, pourquoi la méthode hongroise peut retrancher une constante, comment se forme l'effet coup de fouet, quand la flexibilité ne vaut pas son prix.
- **Exemples des supports ajoutés** : exercices à faire chez soi de la classe 4 (contrainte demande / capacité / fournisseur, temps d'écoulement contre temps de goulot, ajout d'une machine, TOC à trois produits 6 160 € et 4 950 €, Little Italia à deux goulots 2 320 € contre 2 340 €), classe 5 (exemples 1 et 2 ; l'exemple 2 sans corrigé est calculé par le site : 40 tables, 32 chaises, 5 600 €), classe 6 (exercices 2, 3, 4, 6), Scheduling (exemple des slides FCFS 77/11, SPT 65/9, EDD 68/6, LPT 103/48 ; exercice 1 avec utilisation, nombre moyen de travaux, temps moyen, retard moyen ; exercices 4 et 5 de la méthode hongroise ; maximisation des enseignants, 111).
- **Schémas SVG** : droites de coût Cuba / US / Italie, centre de gravité, région admissible du T-shirt avec sommets et droite d'iso-profit, barres de la ligne 10/15/5, courbes de l'EOQ (montres), effet coup de fouet simulé. Pas-à-pas de la méthode hongroise (typesetters).
- **Glossaire** de 60 termes.
- **Onglet Generators** : 14 générateurs (30 niveaux), corrigé pas à pas : productivité (avec loyer maximal d'une machine), marketing contre opérations, factor rating, seuil de localisation (2 ou 3 sites, site jamais optimal), centre de gravité, PL graphique, transport 2 × 2 (formulation, faisabilité, coût minimal), ligne (série, machines parallèles, ajout d'une machine), contrainte, mix TOC (2 ou 3 produits), EOQ (de base, H en % du prix et Q actuel, à partir du stock moyen), méthode hongroise (3 × 3 min et max, 4 × 4, toutes les étapes avec les lignes), règles de priorité (une règle, toutes les mesures, comparaison), flexibilité (usine fixe ou flexible, lignes dédiées + flexible).
- **Onglet Tools** : 7 outils. Simulateur de ligne (4 postes, machines, demande, utilisation), droites de seuil de localisation, PL graphique du T-shirt, courbes de l'EOQ, simulateur d'effet coup de fouet (hors slides), arbre « Quelle méthode pour cette question ? » (13 cas du mid-term et du practice exam), arbre « Qu'est-ce qui limite la production ? » (5 cas).
- **Pratique ajoutée** : 6 tris (biens / services, contraintes internes / externes, temps d'écoulement / de goulot, raisons de stocker ou non, types de flexibilité, coup de fouet), 20 questions de quiz (q62–q81), 16 cartes (c34–c49). Totaux : 82 questions, 50 cartes, 36 exercices.
- **Erreur corrigée** : l'exemple des typesetters (fiche o7, exercice `x-o7-assign`, quiz q50) était mal étiqueté par rapport à la slide (lignes et colonnes inversées). Le site suit maintenant la slide : R-34 → C (6 $), S-66 → B (10 $), T-50 → A (9 $), total 25 $.
- **Moteur** : option `xticks:false` de `svgPlot` (diagramme en barres sans graduations x), documentée dans CONVENTIONS.md 16.6.

**Audit traité** : tous les points. Restent hors du site, car absents du cours : prévisions, files d'attente, point de commande, stock de sécurité, ABC, Gantt, Johnson, 5 étapes de la TOC. Mocks : contenu inchangé.

**Vérifications** (Edge headless, `file://`, téléphone 390 px sombre) :
- 14 générateurs × 3 000 tirages par niveau (30 niveaux) : 0 échec. Un exercice par niveau recalculé à la main.
- Méthode hongroise : 4 500 tirages, le pas-à-pas donne toujours l'optimum trouvé par énumération ; les 5 exemples du cours retrouvés (25, 111, 116, 33, et 16 du Mock 3).
- Via l'interface, 5 exercices par générateur et par niveau (150) : faux → « Not yet », attendu → « Correct », corrigé complet.
- 28 notions : 56 « Your turn » justes puis faux ; bouton « To review » enregistré.
- 5 graphiques, chaque curseur à min / max / milieu : aucun NaN. Valeurs par défaut identiques au cours (ligne 4 / h et 30 min, Cuba / US / Italie 1 000 et 2 500, T-shirt 740 €, montres EOQ 309,84 et 1 060 € pour Q = 100).
- 2 arbres : 18 cas résolus. 6 tris justes puis faux.
- 43 pages de la matière, puis 268 pages du site (après le changement de `widgets.js`) : aucune erreur, aucun débordement. Captures d'écran des figures contrôlées.

**Outils de test** (scratchpad de session, à recréer si besoin) : `cdp.js` (pilote CDP d'Edge en Node 26, WebSocket natif), `stress.js <slug> <n>` (stress des générateurs), `ui.js <slug>` (pages, « Your turn », générateurs via l'interface, curseurs, arbres), `ui2.js` (tris), `allpages.js` (toutes les pages du site), `shots.js` (captures), `tree-gen.js` (arbres à cas générés), `count.js <slug>` (totaux). Le point de reprise est à la fin de la dernière étape.

### Étape 5 · Trademark Law : audit (24/11/2026)

Sources relues : Preliminary remarks, Sessions 1 à 6 et 8, liste de jurisprudence (20 arrêts), glossaire EN/FR, méthodologie du cas pratique, fiche de cours. Examen final : **cas pratique (question ouverte) 40 %** ; QCM de mi-parcours 25 %.

**Couverture** : les 7 fiches couvrent les slides communes, mais :
- **2 arrêts de la liste manquent** (PROGRESS disait à tort « les 20 arrêts couverts ») : Consten et Grundig (CJCE 1966, 56/64 et 58/64) et Centrafarm c. Winthrop (CJCE 1974, 16/74). Ils ne sont pas développés dans les slides communes (épuisement des droits, Session 8).
- **Cas Sandra de la Session 5 absent** (meubles et appareils audio / vidéo, Paris puis UE et États-Unis : la marque est-elle disponible ?).
- Fiches t1, t3 à t7 sans sections numérotées suffisantes ; aucun schéma (échelle de distinctivité, arbre des motifs absolus, trois cas de conflit, frise des délais).

**Compréhension** : tableaux denses sans intuition : pourquoi le principe de spécialité, pourquoi exclure les signes descriptifs (les laisser libres pour les concurrents), pourquoi les formes fonctionnelles (monopole perpétuel), pourquoi l'appréciation globale est « interdépendante » (Canon), pourquoi l'épuisement. Pas de glossaire alors que le cours fournit un glossaire anglais / français. Aucune question « À toi ».

**Pratique** : 2 générateurs (taxes INPI et EUIPO), sans corrigé pas à pas. Rien pour s'entraîner au cas pratique (40 % de la note) : pas d'arbre « le signe est-il enregistrable ? » avec des cas, pas de générateur des trois cas de conflit (art. 5), pas d'aide au choix de l'action (opposition, nullité, déchéance, contrefaçon, concurrence déloyale) ni de la voie de dépôt (INPI, EUIPO, Madrid, priorité), pas de calcul de dates (priorité, opposition, renouvellement, non-usage).

**Examen** : 2 mocks (QCM 20 questions ; 2 cas pratiques avec barème), corrigés écrits par le site ; rien de faux relevé.

**Priorités** : (1) cas pratique : méthode en 5 étapes pas à pas (exemple Joe du cours), arbre des motifs absolus avec banque de cas (Sarah, Georges, Linda, Bill, arrêts), générateur des conflits de l'art. 5, arbres « quelle action ? » et « où déposer ? » ; (2) fiches en couches avec intuitions, Grundig et Centrafarm, cas Sandra ; (3) générateurs taxes (pas à pas) et dates ; (4) glossaire EN/FR, tris, quiz, cartes.

### Étape 5 · Trademark Law : fait (24/11/2026)

**Enrichissement** (`site/subjects/trademark-law.js`, bloc v2 avant les mocks ; v1 dans `tools/v1-backup/`) :
- **7 fiches en couches** (25 notions) après ajout de sections numérotées ; « Your turn » pour chaque notion.
- **Intuitions** (couche Understand) : pourquoi un registre (marque) et pas de dépôt (droit d'auteur), pourquoi la spécialité, absolus contre relatifs, pourquoi Dyson est refusé, pourquoi les critères Sieckmann, pourquoi refuser les signes descriptifs, pourquoi les formes fonctionnelles restent exclues, méthode et interdépendance des facteurs (Canon), choix de la voie de dépôt, pourquoi l'épuisement.
- **Arrêts manquants ajoutés** (résumés par le site, signalés) : Consten et Grundig (1966) et Centrafarm c. Winthrop (1974), fiche Session 8, cheat sheet, quiz et cartes. **Cas Sandra** (Session 5) ajouté avec un corrigé du site (le logo n'est qu'une image dans la slide : corrigé de méthode).
- **Méthode du cas pratique** en pas-à-pas : l'exemple de Joe (slides) et Georges (meuglement) sur une marque.
- **Glossaire** de 52 termes : le glossaire anglais / français du cours (la mise en page du PDF décale la colonne française sur la 2e page : réalignée à la main) avec une définition pour chaque terme.
- **Onglet Generators** : 4 générateurs : motifs absolus (banque de 27 signes : cas de Sarah, Georges, Linda, Dyson, fraises, Lego, Lindt, Louboutin, Audi, Ardagh, Apple, plus des exemples inventés ; issue, motif, représentation), trois cas de l'art. 5 (signes et produits identiques / similaires / différents, marque renommée ou non), taxes INPI / EUIPO / comparaison, dates (priorité, opposition, renouvellement, déchéance pour non-usage).
- **Onglet Tools** : arbre « Le signe est-il enregistrable ? » (cas tirés de la banque), arbre « Quelle action ? » (8 cas), arbre « Où déposer ? » (5 cas dont Champollion et Sandra), méthode du cas pratique pas à pas.
- **Pratique ajoutée** : 5 tris (motif absolu / relatif, échelle de distinctivité pour les parfums, nullité / déchéance, contrefaçon / concurrence déloyale, quel droit de PI), cas Sandra, 15 questions (q57–q71), 12 cartes (c35–c46). Totaux : 72 questions, 47 cartes, 32 exercices.

**Audit traité** : tous les points. Mocks : contenu inchangé.

**Vérifications** (Edge headless, téléphone 390 px sombre) : 4 générateurs × 3 000 tirages par niveau : 0 échec (dates et taxes recalculées à la main) ; via l'interface 30 exercices faux → attendu → juste ; 50 « Your turn » justes puis faux ; arbre des motifs absolus : 80 cas générés suivis sans erreur ; 2 autres arbres : 13 cas ; 5 tris justes puis faux ; 28 pages sans erreur ni débordement.

**Point de reprise** : étapes 0 à 5 faites ; prochaine : **étape 6, Marketing Management** (audit puis enrichissement).

### Étape 6 · Marketing Management : audit (24/11/2026)

Sources relues : slides S1 à S7 de Florence Nizette (versions « FN ») et le SWOT Microsoft. Examen final 50 % « sur tout le cours », format non publié.

**Couverture** : les 7 fiches v1 reprennent fidèlement les slides (définitions Kotler & Armstrong, PESTEL Tony's, SWOT Pokawa, STP, Colgate, PLC Danone, services, marques, pricing, distribution, communication) ; sections déjà numérotées. Absents : tout **schéma** (processus marketing, cycle de vie, carte de positionnement de la slide fast-food, seuil de rentabilité, étapes de préparation de l'acheteur) ; la matrice BCG n'est que citée dans le plan du cours (pas développée : rien à ajouter).

**Compréhension** : texte et tableaux sans intuition : pourquoi segmenter, pourquoi le plus gros segment n'est pas le meilleur, pourquoi diviser par (1 − r) dans le mark-up, pourquoi les 4 P changent selon l'étape du cycle, pourquoi le mix push / pull. Pas de glossaire, pas de « À toi ».

**Pratique** : 3 générateurs (mark-up, seuil, budget) sans corrigé pas à pas ; beaucoup d'associations et de remises dans l'ordre. Manquent : tris (SWOT interne / externe, PESTEL, 4 P, caractéristiques des services, bases de segmentation, étapes du cycle de vie), arbres de décision (stratégie de ciblage, prix d'écrémage ou de pénétration, outil de communication), générateurs à niveaux (chaîne de mark-up, seuil avec profit cible, budgets), graphiques à curseurs (seuil de rentabilité, cycle de vie).

**Examen** : 2 mocks au format choisi par le site ; rien de faux relevé.

**Priorités** : fiches en couches avec intuitions et « Your turn » ; schémas ; glossaire ; générateurs pas à pas ; outils (seuil à curseurs, carte de positionnement, arbres) ; tris, quiz, cartes.

### Étape 6 · Marketing Management : fait (24/11/2026)

**Enrichissement** (`site/subjects/marketing-management.js`, bloc v2 avant les mocks ; v1 dans `tools/v1-backup/`) :
- **7 fiches en couches** (28 notions, sections existantes) avec Essential et « Your turn » ; le contenu v1 passe dans Understand, les exemples et pièges dans leurs couches.
- **Schémas** : cycle de vie (ventes et profits, étapes ; forme dessinée par le site), carte de positionnement sur les axes de la slide fast-food (marques placées par le site, signalé), seuil de rentabilité du fabricant de meubles (1 000 unités à 120 €).
- **Glossaire** de 55 termes.
- **Onglet Generators** : 4 générateurs à niveaux, corrigé pas à pas : mark-up le long du canal (producteur, détaillant, piège « × (1 + r) »), seuil et profit cible (hors slides pour le profit cible, signalé), élasticité-prix (intuition, hors slides), budgets de communication (% des ventes, parité concurrentielle, objectifs et tâches).
- **Onglet Tools** : seuil de rentabilité à curseurs, carte de positionnement à curseurs, arbres « écrémage ou pénétration ? » (conditions de Kotler & Armstrong, signalé) et « quelle stratégie de ciblage ? » (5 cas chacun).
- **Pratique ajoutée** : 6 tris (SWOT, PESTEL, 4 P, caractéristiques des services, bases de segmentation, étapes du cycle de vie), 15 questions (q82–q96), 12 cartes (c46–c57). Totaux : 97 questions, 58 cartes, 41 exercices.

**Audit traité** : tous les points. Mocks : contenu inchangé.

**Vérifications** (Edge headless, téléphone 390 px sombre) : 4 générateurs × 3 000 tirages par niveau : 0 échec, un exercice par niveau recalculé à la main ; 50 exercices via l'interface (faux → juste, corrigé complet) ; 56 « Your turn » justes puis faux ; 2 graphiques sans NaN (valeurs par défaut : seuil 1 000, mark-up 200) ; 2 arbres, 10 cas ; 6 tris justes puis faux ; 28 pages sans erreur ni débordement ; captures des figures contrôlées.

**Point de reprise** : étapes 0 à 6 faites ; prochaine : **étape 7, Digital Innovation** (audit puis enrichissement).

### Étape 7 · Digital Innovation : audit (24/11/2026)

Sources : slides des Sessions 1 à 9, syllabus, QCM d'entraînement « First block » (sans corrigé), exercices de groupe et lectures (déjà exploités en v1). Final 1 h 30, 45 %, « all course material » ; le syllabus prévient que des questions d'examen peuvent reprendre celles des révisions en classe.

**Couverture** : les 9 fiches reprennent les slides, sections numérotées. Limites connues et déjà signalées en v1 : cas Harvard (UCB, Wendy Chan), simulation Cyber Attack!, chapitres du manuel et cours LinkedIn absents de MyCourses. Aucun schéma : matrice de l'innovation, chaîne de valeur des données, cube de McCumber, éthique → régulation → gouvernance.

**Compréhension** : les notions sont des listes et tableaux sans « pourquoi » : différence disruptive / radicale (deux axes), pourquoi l'ERP échoue côté humain, pourquoi Google et Meta sont « gratuits », pourquoi 70 % des transformations échouent, pourquoi la sécurité n'est pas que technique, pourquoi l'IA d'Amazon a discriminé. Pas de glossaire, pas de « À toi ».

**Pratique** : aucun générateur ni outil. Manquent : classement d'innovations dans la matrice, principes éthiques à reconnaître, cube de McCumber, parts de revenus des modèles d'affaires (calcul : Spotify, Alphabet, Meta), arbre « quel type d'innovation ? », analyse éthique en 5 étapes en pas-à-pas, tris (OS / application, SaaS / PaaS / IaaS, modèles d'affaires, révolutions industrielles, étapes de la chaîne de valeur, défis ERP).

**Examen** : 3 mocks au format choisi par le site, toutes questions distinctes ; rien de faux relevé.

**Priorités** : couches + intuitions + « Your turn » (sections sans contenu propre gardées telles quelles), schémas, glossaire, générateurs (matrice, principes, McCumber, parts de revenus), outils (arbres, analyse éthique pas à pas), tris, quiz, cartes.

### Étape 7 · Digital Innovation : fait (24/11/2026)

**Enrichissement** (`site/subjects/digital-innovation.js`, bloc v2 avant les mocks ; v1 dans `tools/v1-backup/`) :
- **9 fiches en couches** : 32 notions avec Essential et « Your turn ». Les 5 sections sans contenu propre (objectifs du syllabus, cas UCB et Wendy Chan absents de MyCourses, simulation Cyber Attack!, poster) restent telles quelles.
- **Intuitions** dans les Essential et les corrections : deux axes de la matrice, ERP qui échoue côté humain, gratuité de Google et Meta, chiffre d'affaires contre profit (AWS), IA biaisée par ses données, 70 % d'échecs des transformations, sécurité qui n'est pas que technique.
- **Schémas** : matrice de l'innovation, chaîne de valeur des données GSMA, cube de McCumber. **Pas-à-pas** de l'analyse éthique en 5 étapes sur le cas Amazon.
- **Glossaire** de 53 termes.
- **Onglet Generators** : 4 générateurs : matrice de l'innovation (exemples choisis par le site), principe éthique à reconnaître, cube de McCumber (objectif, état, protection), parts de revenus et revenu par utilisateur (style Spotify, Alphabet, Meta).
- **Onglet Tools** : arbre « Quel type d'innovation ? » (cas générés), analyse éthique pas à pas.
- **Pratique ajoutée** : 6 tris (OS / application, SaaS / PaaS / IaaS, modèles d'affaires, révolutions industrielles, chaîne de valeur, défis ERP), 12 questions (q105–q116), 8 cartes (c44–c51). Totaux : 108 questions, 52 cartes, 50 exercices.

**Audit traité** : tous les points réalisables ; les documents absents de MyCourses restent absents (signalés en v1). Mocks : contenu inchangé.

**Vérifications** (Edge headless, téléphone 390 px sombre) : 4 générateurs × 3 000 tirages par niveau : 0 échec ; 25 exercices via l'interface ; 64 « Your turn » justes puis faux ; arbre : 40 cas générés suivis sans erreur ; 6 tris justes puis faux ; 29 pages sans erreur ni débordement ; captures des schémas contrôlées.

**Point de reprise** : étapes 0 à 7 faites ; prochaine : **étape 8, Sales Techniques** (audit puis enrichissement).

### Étape 8 · Sales Techniques : audit (24/11/2026)

Sources : slides des Sessions 1 à 8, « What to expect », cas Avril, pack de la Session 7, cas Soleil du Nord (B2B et B2C), Alpha Partner (déjà exploités en v1). Épreuve finale : simulation IA du cas Avril (MuchBetter.ai) ; un examen écrit est aussi évoqué (contradiction signalée en v1).

**Couverture** : complète sur le fond (outils BANT, SPIN, CAP, FFF, closing, BATNA / ZOPA, préparation Avril). Fiches s4 et s5 sans sections numérotées ; s7 commence par un long bloc sans titre.

**Compréhension** : pourquoi les questions d'implication créent l'urgence, pourquoi une objection est un signe d'intérêt, pourquoi clarifier avant de répondre, pourquoi ne jamais inventer de remise : présents mais dispersés ; pas de glossaire, pas de « À toi ».

**Pratique** : rien pour **s'entraîner à une conversation** alors que l'épreuve est une simulation orale : il manque des dialogues à embranchements (cas Avril complet, appel à froid avec BANT, objections). Un seul générateur (ZOPA). Manquent aussi : reconnaître le type de question SPIN, la lettre BANT, le type d'objection et sa stratégie, la technique de closing ; arbres (quel cadre d'objection ? quel closing ?) ; tris (vendeur d'antan / moderne, B2B / B2C, questions ouvertes / fermées).

**Priorités** : (1) dialogues Avril, appel à froid, objections ; (2) générateurs SPIN, BANT, objections, closing, ZOPA à niveaux ; (3) couches, glossaire, arbres, tris, quiz, cartes.

### Étape 8 · Sales Techniques : fait (24/11/2026)

**Enrichissement** (`site/subjects/sales-techniques.js`, bloc v2 avant le mock ; v1 dans `tools/v1-backup/`) :
- **3 dialogues à embranchements** (onglet **Role-plays**, et le premier aussi dans la fiche Sessions 7–8) : **cas Avril complet** (ouverture, S, P, I, N, CAP, objection prix en ligne, objection 48 bouteilles, signal d'achat, closing ; 3 fins possibles), **appel à froid** Soleil du Nord Pro (ouverture en 4 piliers, BANT, prochaine étape = étude technique avec la directrice), **exercice d'objections** famille Girard (prix, confiance, calendrier, décision à deux). Chaque réplique est notée bonne / acceptable / mauvaise avec le commentaire de la méthode du cours ; la place de la meilleure réponse varie. Dialogues écrits par le site (signalé).
- **7 fiches en couches** (19 notions) après ajout de sections aux fiches s4, s5 et s7 ; intuitions : pourquoi les questions d'implication, pourquoi CAP plutôt qu'une liste, pourquoi clarifier une objection.
- **Glossaire** de 32 termes.
- **Onglet Generators** : 5 générateurs : type de question SPIN (13 questions du cours et du cas Avril), élément BANT, type d'objection et stratégie, technique de closing, ZOPA et BATNA (2 niveaux).
- **Arbre** « Quel cadre d'objection ? » (FFF, LACE, RAIN, LAARC ; 4 cas).
- **Pratique ajoutée** : 4 tris (vendeur d'antan / moderne, B2B / B2C, question ouverte / fermée, types SPIN), 12 questions (q58–q69), 10 cartes (c33–c42). Totaux : 70 questions, 43 cartes, 31 exercices.

**Audit traité** : tous les points. Mock : inchangé.

**Vérifications** (Edge headless, téléphone 390 px sombre) : 3 dialogues joués par le meilleur chemin (100 %) et le pire (0 %) ; 5 générateurs × 3 000 tirages : 0 échec ; 30 exercices via l'interface ; 38 « Your turn » justes puis faux ; arbre 4 cas ; 4 tris justes puis faux ; 28 pages sans erreur ni débordement.

**Point de reprise** : étapes 0 à 8 faites ; prochaine : **étape 9, Espagnol** (audit puis enrichissement).

### Étape 9 · Espagnol : audit (24/11/2026)

Sources : programme 2026-27 et cuadernillo (déjà exploités en v1 ; pas de corrigé, pas de libro del alumno). Final 35 %, format non publié.

**Couverture** : complète pour le cuadernillo (tous les textes à trous, conjugaisons générées à partir d'une seule source, drill de verbes). Sections numérotées dans les 3 fiches.

**Compréhension** : règles claires mais sans « pourquoi » ni question rapide : le choix imperfecto / indefinido (le point le plus difficile) n'a pas d'arbre de décision ; pourquoi *le* devient *se* devant *lo/la* ; *tan* contre *tanto*. Pas de glossaire (termes de grammaire + lexique des magasins).

**Pratique** : 5 générateurs de type calc sans corrigé pas à pas ; aucun jeu de rôle alors que la note comprend de l'oral (dialogue en magasin, fórmulas de cortesía) ; pas de tri (marqueurs de temps, emplois de l'imperfecto / indefinido, tiendas → produits).

**Priorités** : arbre imperfecto / indefinido avec cas du cuadernillo ; générateurs pas à pas (imperfecto, indefinido, choix du temps en contexte, double pronom, comparaisons) ; dialogue « En una tienda » ; couches, glossaire, tris, quiz, cartes.

### Étape 9 · Espagnol : fait (24/11/2026)

**Enrichissement** (`site/subjects/espagnol.js`, bloc v2 avant le drill ; v1 dans `tools/v1-backup/`) :
- **3 fiches en couches** (17 notions, les deux sections de lecture gardées telles quelles), « Your turn » en espagnol (réponse courte).
- **Jeu de rôle** « En una zapatería » (7 répliques : quería, número / talla, probármelos, me quedan, me los llevo, con tarjeta / en efectivo, devolver) dans la fiche Tema 7 et l'onglet Tools.
- **Arbre** « Imperfecto o indefinido ? » avec cas générés à partir de 14 phrases (cuadernillo et site).
- **Glossaire** de 28 termes (grammaire et magasins).
- **Onglet Generators** : 5 générateurs pas à pas : imperfecto (réguliers / avec ser, ir, ver), indefinido (réguliers / irréguliers), choix du temps en contexte + forme, deux pronoms ensemble (le → se), comparaisons (tan, tanto, más, menos). Accents exigés pour les formes verbales.
- **Pratique ajoutée** : 3 tris (marqueurs de temps, quel magasin, tan / tanto / tanta / tantos / tantas), 8 questions (q94–q101), 6 cartes (c54–c59). Totaux : 102 questions, 60 cartes, 52 exercices.

**Vérifications** (Edge headless, téléphone 390 px sombre) : 5 générateurs × 3 000 tirages par niveau : 0 échec, formes relues ; 35 exercices via l'interface ; dialogue 100 % / 0 % ; arbre 40 cas générés ; 34 « Your turn » ; 3 tris justes puis faux ; 25 pages sans erreur ni débordement.

**Point de reprise** : étapes 0 à 9 faites ; prochaine : **étape 10, AFA** (vérification et enrichissement), puis l'étape finale.

### Étape 10 · AFA : audit (24/11/2026)

AFA est la matière de référence (fiches complètes, 70 journal drills, générateur de T-accounts, 17 calculs à nouveaux chiffres, 3 mocks, 30 309 contrôles en v1). Rien de faux relevé à la relecture des formules (amortissement linéaire et dégressif, dépréciations, provision clients, LCNRV, réserve légale, flux de trésorerie indirects).

**Écart avec le niveau v2 des autres matières** : pas de fiches en couches ni de « Your turn » (45 sections) ; pas de glossaire ; les 17 générateurs n'ont pas d'onglet dédié ni de score de maîtrise ; aucun graphique à curseurs (plan d'amortissement) ; pas d'arbre (débit ou crédit ? quelle section du tableau des flux ? immobiliser ou passer en charge ?) ; pas de tri (types de comptes, sections du tableau des flux, courant / non courant).

**Priorités** : couches + « Your turn » sur les 45 sections ; glossaire ; onglet Generators (les 17 calculs + débit / crédit, TVA, section du tableau des flux) ; outils (plan d'amortissement linéaire / dégressif à curseurs, 3 arbres) ; tris ; quelques questions et cartes.

### Étape 10 · AFA : fait (24/11/2026)

**Enrichissement** (`site/subjects/afa.js`, bloc v2 avant les mocks ; v1 dans `tools/v1-backup/`) :
- **8 fiches en couches** : 45 notions avec Essential et « Your turn » (le contenu v1 passe dans Understand, exemples et pièges dans leurs couches).
- **Glossaire** de 50 termes.
- **Onglet Generators** (20) : les 17 calculs du cours, désormais avec score et maîtrise (corrigé = solution du cours), plus 3 nouveaux : débit ou crédit (type de compte et notation A+, L−…), TVA sur une vente, section du tableau des flux.
- **Onglet Tools** : plan d'amortissement linéaire contre dégressif à curseurs (défaut : 120 000, 12 000, 4 ans → 27 000 par an), arbres « Débit ou crédit ? » et « Quelle section du tableau des flux ? » (cas générés), « Immobiliser ou passer en charge ? » (5 cas du cours).
- **Pratique ajoutée** : 3 tris (type de compte, sections du tableau des flux, courant / non courant), 5 questions (q127–q131), 4 cartes (c73–c76). Totaux : 132 questions, 77 cartes, 46 exercices.
- Journal drills, T-accounts, mocks et import de l'ancienne progression : inchangés.

**Vérifications** (Edge headless, téléphone 390 px sombre) : 20 générateurs × 2 000 tirages : 0 échec ; 100 exercices via l'interface ; 90 « Your turn » justes puis faux ; graphique sans NaN aux bornes ; arbres : 80 cas générés + 5 cas ; 3 tris ; 48 pages sans erreur ni débordement.

**Point de reprise** : étapes 0 à 10 faites ; prochaine : **étape finale** (harmonisation, recherche globale, révision mixte, `IESEG Revision.html` mono-fichier).

### Étape finale : fait (24/11/2026)

- **Recherche globale** (`#search`, onglet « Search » de l'accueil) et **révision mixte** (`#mixed`, onglet « Mixed revision ») : nouveau fichier `site/assets/hub.js`, styles en fin de `style.css`, documentation CONVENTIONS.md section 17.
- **`IESEG Revision.html`** (2,3 Mo) à la racine du projet : tout le site dans un seul fichier, construit par `node tools/build-single.js`. **À reconstruire après toute modification du site.** Sa progression est séparée de celle du site (export / import dans Progress pour la transférer).
- **Harmonisation** : les 10 matières ont des fiches en couches, un glossaire, un onglet Generators et un onglet Tools (tableau ci-dessous).

| Matière | Notions | Glossaire | Générateurs | Outils | Quiz | Cartes | Exercices | Mocks |
|---|---|---|---|---|---|---|---|---|
| AFA | 45 | 50 | 20 | 4 | 132 | 77 | 46 | 3 |
| Cost Accounting | 28 | 44 | 15 | 3 | 95 | 52 | 60 | 3 |
| Digital Innovation | 32 | 53 | 4 | 2 | 108 | 52 | 50 | 3 |
| Econometrics | 33 | 69 | 15 | 8 | 81 | 49 | 28 | 3 |
| Espagnol | 17 | 28 | 5 | 2 (+ drill) | 102 | 60 | 52 | 3 |
| Market Structures | 36 | 71 | 16 | 20 | 98 | 60 | 50 | 3 |
| Marketing | 28 | 55 | 4 | 4 | 97 | 58 | 41 | 2 |
| Operations | 28 | 60 | 14 | 7 | 82 | 50 | 36 | 3 |
| Sales Techniques | 19 | 32 | 5 | 4 (3 dialogues) | 70 | 43 | 31 | 1 |
| Trademark Law | 25 | 52 | 4 | 4 | 72 | 47 | 32 | 2 |

**Vérifications** (Edge headless, `file://`, téléphone 390 px sombre) : 7 recherches (une par matière) avec les bons résultats, lien « Notion » qui ouvre la bonne notion, série de 10 questions mixtes avec correction et score, même test sur `IESEG Revision.html` (10 matières chargées) ; **346 pages** du site (y compris #search, #mixed, #demo) sans erreur console, sans bloc vide, sans débordement.

**Enrichissement v2 terminé.** Pistes si tu veux aller plus loin : relire les « Points à te signaler » de chaque matière avec tes profs (formats d'examen non publiés, corrigés absents), et reconstruire `IESEG Revision.html` après chaque retouche.

---

## Corrections 24/11

Quatre tâches dans l'ordre : 1 fiches toujours ouvertes · 2 Trademark Law (site midterm + end-term) · 3 Market Structures (chapitres 1–2 du site midterm, labs de théorie des jeux) · 4 Marketing Management. Sites midterm lus dans `MIDTERM S3/` **en lecture seule**. Copie de sécurité des fichiers modifiés : `tools/v2-backup-2411/`.

### Tâche 1 · Fiches toujours ouvertes : fait (24/11/2026)
- Moteur uniquement (aucun fichier matière à toucher : aucun `<details>`, `collapsed` ou `display:none` écrit dans les matières, vérifié par recherche) :
  - `EX` (`engine.js`) rend un `<section class="ex">` ouvert : titre + étiquette, bordure bleue ;
  - couches `NOTION` / `LAYER` (`widgets.js`) : `<div class="layer">` ouvert, pastille de titre et bordure de couleur (vert Understand, bleu Worked example, jaune Exam trap) ; `LAYERED` lit le nouveau format ;
  - bouton « Open all layers » supprimé du sommaire ; couche « Why » des arbres ouverte ;
  - CSS : sélecteurs `details.*` remplacés (écran et impression).
- Restent cachés jusqu'à l'action : réponses du quiz, « Your turn », générateurs, exercices, mocks, dos des flashcards, étapes suivantes des pas-à-pas `STEPS`.
- CONVENTIONS.md : règle « les fiches ne sont jamais repliées » (contraintes permanentes, sections 5 et 16.1).
- Vérification (Edge headless, 390 px sombre) : 77 pages (fiches + cheat sheets des 10 matières) : 0 `<details>`, 0 bloc caché ou de hauteur nulle, 0 erreur console ; captures en clair (900 px) et sombre (390 px).

### Tâche 2 · Trademark Law : fait (24/11/2026)

**Inventaire du site midterm** (`MIDTERM S3/Trademark Revision.html`, lu sans modification) : 7 chapitres (slides 1–200 de ton prof : IP, autres signes, définition et fonctions, types de marques, représentation, distinctivité, autres motifs absolus), 17 arrêts (faits, question, solution, portée, mode « recall »), 54 flashcards, 59 questions (QCM et vrai/faux) + mock « 20 questions sans aide », 8 cas pratiques (brouillon, indices, corrigé), 10 distinctions, glossaire EN/FR de 49 termes, progression par chapitre, méthode IRAC et méthode « any sign ».

**Fait** (`site/subjects/trademark-law.js` v3, construit par `tools/trademark-v3/` ; v2 dans `tools/v2-backup-2411/`) :
- **Moteur** : nouveau fichier `site/modules/law.js` (onglets génériques `caselaw`, `distinctions`, `casework`), classes de contenu (`.ref`, `.key`, `.flag`, `.quote`, `.irac`) en fin de `style.css`, champ `fr` du glossaire (pastille « FR » + recherche) ; documenté dans CONVENTIONS.md section 9.4.
- **Midterm (t1–t4, étiqueté « Midterm »)** : tout le contenu des 7 chapitres du site midterm, fusionné avec les slides communes (tableaux en double fusionnés : représentation par type, motifs de l'art. 4) ; 25 notions avec Essential, Understand, exemple, piège, « Your turn ». Encadrés orange du site midterm conservés (Arsenal, Baby-Dry, Bellure…).
- **End-term (t5–t7, « End-term »)** : Sessions 5, 6 et 8 relues slide par slide (y compris les slides en image : tableaux des droits antérieurs et des autres signes, logo de Sandra « My Cave of Wonders », encadré opposition, cas Champollion) ; 37 notions : 13 (S5), 12 (S6), 12 (S8). Réponses du site aux questions des slides sans corrigé (Ball / Bell / Balloon, stylo / crayon / imprimante) signalées.
- **Onglet Case law** : 23 arrêts (17 du site midterm + Ardagh, Sabel, Canon, Lloyd, Grundig, Centrafarm ; faits hors slides signalés). **Distinctions** : 22 (10 midterm + 12 end-term). **Practical cases** : 12 cas, dont 11 corrigés au format de la méthode du cours en 5 étapes (8 du site midterm, Sandra, Champollion, 2 nouveaux scénarios) ; les 4 cas auto-évalués de l'onglet Exercises y sont déplacés (anciens corrigés conservés en « short version »).
- **Glossaire** 81 termes EN/FR ; **quiz** 129 questions (57 du site midterm, étiquette « Midterm site » ; 2 doublons écartés) ; **cartes** 101 ; **mocks** : m1 et m2 inchangés + **m3 = mock du site midterm** (20 questions). Cheat sheet complétée ; Overview avec les deux méthodes du site midterm.

**Vérifications** (Edge headless) : 89 pages à 390 px sombre sans erreur ni débordement ; contrôle automatique « sans perte » : 920 phrases du site midterm, toutes retrouvées sauf des titres de section renommés et des lignes de tableaux fusionnés (contenu présent) ; recall, test des distinctions, brouillon, indices, corrigé, auto-évaluation et lignes de progression testés ; captures contrôlées.

**Points à te signaler** : le site midterm suivait les slides de ton prof (1–200) et la méthode IRAC ; le cours officiel demande 5 étapes (avec « classification of facts ») : les corrigés sont passés à 5 étapes. Les mocks m1 et m2 restent écrits par le site.

**Point de reprise** : tâches 1 et 2 faites ; prochaine : **tâche 3, Market Structures** (lecture du site midterm `MSP Revision.html`).

### Tâche 3 · Market Structures : fait (24/11/2026)

**Inventaire du site midterm** (`MIDTERM S3/MSP Revision.html`, lu sans modification) : ch. 1 (décision de la firme, élasticité et tableau 1, 4 formes, 4 barrières, oligopole, concurrence monopolistique, exercice 1.7, pouvoir de marché et Lerner, « is market power bad? », discussion Big Tech) ; ch. 2 (vocabulaire, dilemme du prisonnier, dominantes, Nash, bataille des sexes et CO₂, maintain-break, jeux répétés, séquentiels, arbres de crédibilité de Varian, mille-pattes, ultimatum, Bertrand, Hotelling) ; labo de matrices (2 × 2 / 4 × 4 aléatoires, questions « Answer like the exam », version séquentielle), plage de Hotelling (optimum, un tour, Nash, prix libres), banque de questions (76 V/F, 31 QCM, format A/B, 6 + 7 questions ouvertes), 36 définitions mot pour mot, 16 pièges, mock midterm (16 QCM + 2 ouvertes, 60 min), « what the exam rewards ».

**Fait** (`site/subjects/market-structures.js` v3, construit par `tools/market-structures-v3/`) :
- **Examens** : c1–c2 étiquetés « Midterm » (aussi au final), c3–c4 « End-term ».
- **Chapitre 1** : 2 notions ajoutées (0. décision de la firme ; 10. discussion Big Tech) et les apports du site midterm fusionnés dans les notions existantes (pays du tableau 1, Giffen/Veblen, monopsone, différenciation et publicité, court/long terme, exercice 1.7 complet avec « why », exemple Lerner, part du travail, pièges 1.5 / 1.6 / 1.A2 / 1.A3). Dans la fiche : générateur « variation de q prédite », générateur « In how many of the four market forms…? », **tri de 16 marchés réels**.
- **Chapitre 2** : apports du site midterm fusionnés (dilemme, crédibilité selon les slides, sous-jeu, engagement, chiffres de l'ultimatum, biais de rationalité, oligopole différencié) ; **dans la fiche, à côté de la théorie** : dilemme du prisonnier jouable (partie unique, 5, 10 tours ou fin inconnue ; toujours nier, toujours avouer, donnant-donnant, aléatoire, + grim trigger et tit-for-two-tats signalés hors cours ; totaux cumulés et explication), matrice générée **ou saisie par l'étudiant** (meilleures réponses, Nash, dominantes, version séquentielle avec arbre), générateur « Answer like the exam », 4 arbres de crédibilité de Varian, figure du mille-pattes, plage de Hotelling à curseurs avec les boutons du site midterm.
- **Onglet « Labs »** (ancien « Tools ») : les mêmes labs + les matrices du mock midterm (MCQ 5–7, 4 × 4 MCQ 8, séquentiel MCQ 9–10) et du mock final Q2, le mille-pattes pas à pas. **Generators** : 21 (5 nouveaux : variation de q, formes de marché, A/B ch. 1, A/B ch. 2, « Answer like the exam » à 3 niveaux).
- **Banque** : 82 questions du site midterm ajoutées (« Midterm site », 25 doublons écartés), 13 questions ouvertes au format midterm (auto-évaluées avec les points de barème), 21 définitions ajoutées aux flashcards (les autres existaient), cheat sheet page 2 : les 36 définitions mot pour mot, les 16 pièges et la méthode de réponse. **Mock 4** = mock midterm du site (16 QCM + 2 questions ouvertes, 60 min, sur 20). Mocks 1–3 inchangés.
- **Moteur** : `GAME` (`edit`, `seq`), `PLAY` (totaux cumulés, « Why this result »), `PLOT` (`presets`) ; documentés dans CONVENTIONS.md section 16.

**Vérifications** (Edge headless) : 71 pages de la matière sans erreur ni débordement ; **dilemme du prisonnier** : 12 parties (6 stratégies × partie unique et 5 tours), coups de l'ordinateur et totaux recalculés indépendamment (ex. donnant-donnant sur 5 tours, mes coups A-N-A-A-N : 30 / 30) ; **matrice** : 5 jeux générés (2 × 2, 3 × 3, 4 × 4), meilleures réponses, Nash, dominantes et équilibre séquentiel calculés par le test puis corrigés justes par le site (dont un 4 × 4 sans équilibre de Nash) ; **générateurs du chapitre 1** : 5 exercices par niveau (40 au total) recalculés à partir de l'énoncé, tous justes ; couverture du site midterm : 175 blocs sur 177 retrouvés (les 2 restants sont reformulés).

**Points à te signaler** : grim trigger et tit-for-two-tats ne sont pas dans le cours (ajoutés pour comparer, signalés). Le site midterm générait un nouveau mock à chaque fois ; ici le mock 4 est fixe (les labs et générateurs donnent l'illimité).

**Point de reprise** : tâches 1 à 3 faites ; prochaine : **tâche 4, Marketing Management**.

### Tâche 4 · Marketing Management : fait (24/11/2026)

**Audit slide par slide** (slides S1–S7 de Florence Nizette, 393 slides ; couverture mesurée mot à mot puis relue ; B = bien expliqué, M = mal ou trop sec, A = absent du site v2) :
- S1 : définition en 4 parties, Drucker, demarketing (B) ; marché vs industrie, B2B/B2C/B2B2C/B2B2U, système marketing (B, sans exemple) ; vente vs marketing, push/pull (M) ; concepts production → sociétal (B, sans tri) ; processus marketing stratégique/opérationnel (M : pas de schéma) ; défis numériques et IA, marketing durable, L'Oréal/IKEA (B) ; valeurs et mission, Patagonia (M) ; Uber Eats, Taylor Swift, Netflix (exemples peu exploités).
- S2 : gestion du marketing (café, 4 fonctions) (M) ; micro/macro, PESTEL et ses items, cas Tony's (B, schéma A) ; SWOT, Pokawa, règle interne/externe (B, grille A) ; 4 types de concurrence, 8 questions (B, schéma A) ; Microsoft, Apple / Spirit Airlines (textes non disponibles).
- S3 : segmentation, 5 critères, 3 façons d'évaluer, attractivité (B) ; stratégies de ciblage (M : pas de schéma) ; positionnement, 5 stratégies (H&S, Monoprix, GoPro, Mir, SNCF), Kapferer, Airbnb, énoncé Snickers, carte fast-food, take-aways (B, sans exemple ni tri en fiche).
- S4 : produit/service/expérience, 3 niveaux Colgate, 4,4 tubes (B, schéma A) ; PLC (figure B, exemples Danone A) ; 4 caractéristiques des services (B, exemple A) ; attributs (Babizen, Babybel, Devialet, North Face), lignes Pringles, Heinz (M) ; marque AMA, avantages, matrice de développement, Disney, Apple/Forbes, marque durable (B, matrice A) ; packaging 3 niveaux, éco-conception 8 étapes, étiquettes, logos (M : pas de schéma).
- S5 : définition, 4 points de vue, processus en 5 étapes (B, schéma A) ; pénétration/écrémage, prix de gamme (Gillette, iPhone, Tesla, HP, copeaux, Microsoft 365) (M) ; coûts fixes/variables/directs/indirects, exemple laitier (M) ; concurrents, ketchup Heinz (B) ; mark-up, target return, seuil, Louis Vuitton (B) ; prix final, Tesla, Peugeot 19 950, prix de référence, Temu, C'est qui le patron ? (B, sans piège).
- S6 : Decathlon, Zara (A) ; valeur des intermédiaires, 6 fonctions (B, schéma A) ; systèmes de canaux La Redoute, Knorr (B, schéma A) ; circuits courts, multicanal café (B) ; 3 décisions, 73 %, Castorama, Hyundai, Primark, Apple Store, modèles hybrides, Red Bull, exclusif/intensif, Haribo, logistique durable, 14 % du gaspillage, Danone (B/M : plusieurs exemples A).
- S7 : Back Market (B) ; IMC et 5 outils, IKEA, Thermomix, Burger King, contenu (Lena Situations x Vinted, Typology), digital > 50 %, IA (Le Mal Aimé vs Coca-Cola), ADEME (M : plusieurs A) ; 5 étapes M&M's, étapes de préparation, contenu/structure/format du message, canaux personnels/non personnels, 5 méthodes de budget, plan et calendrier éditorial (B, schémas A).
- Diapositives non reprises (non examinables) : présentation de la prof, consignes de cours, Capstone, échéances, vidéos sans texte.

**Fait** (`site/subjects/marketing-management.js` v3, construit par `tools/marketing-v3/`) :
- **Les 28 notions** ont maintenant : définition (Essential), **intuition** (début de Understand), le contenu du cours, **un exemple du cours** (Uber Eats, Taylor Swift, marché/industrie aérienne, Patagonia, capstone Heinz, Netflix et IA, café, Tony's, Pokawa, 8 questions, magasin de running, Airbnb et Snickers, Colgate, Danone, avion et restaurant, Pringles et logos, Apple et Disney, prix de gamme, coûts laitiers, ketchup Heinz, target return et Louis Vuitton, Tesla, Peugeot, Temu, C'est qui le patron ?, Decathlon et Zara, circuits courts et café, Apple Store, Red Bull, Haribo, Danone, Back Market, M&M's), **un piège d'examen** et un ou plusieurs « Your turn » (39 au total).
- **16 schémas du cours** : processus marketing, environnement micro/macro, SWOT, types de concurrence, stratégies de ciblage, losange de Kapferer, carte de positionnement à manipuler (dans la fiche S3), 3 niveaux de produit, matrice des marques, emballages, éco-conception, 4 caractéristiques des services, processus de prix, systèmes de canaux, fonctions des intermédiaires, outils IMC, étapes de préparation, 5 étapes de la communication (+ cycle de vie et seuil existants).
- **14 tris dans les fiches** (concepts marketing, B2B/B2C, micro/macro, concurrence, ciblage, positionnement, attributs, marques, prix de gamme, coûts, fonctions des intermédiaires, modèles hybrides, outils de promotion, budgets).
- **6 générateurs « applique le framework à un cas généré »** (un par session S2–S7, 3 niveaux chacun : PESTEL, SWOT, concurrence, segmentation, ciblage, positionnement, niveaux de produit, PLC, marques, objectif de prix, méthode, prix de gamme, fonctions, exclusif/intensif, cross-canal, outils, étapes de préparation, budgets), corrigé fait par fait et réponse type.
- **27 questions** (q97–q123), **20 flashcards** (c58–c77), **18 termes** de glossaire ; **Mock 3** ajouté (même format : 20 QCM, prix, cas distribution + communication) ; mocks 1 et 2 inchangés.
- Moteur : classes de schémas HTML (`dg-flow`, `dg-mx`, `dg-rings`, `dg-diamond`, `dg-wheel`), CONVENTIONS.md section 16.14.

**Vérifications** (Edge headless) : 35 pages de la matière sans erreur ni débordement ; 28 notions sur 28 avec Essential, intuition, exemple, piège et « Your turn » ; 6 générateurs × 3 niveaux × 300 tirages : 0 échec ; schémas contrôlés en clair et en sombre à 390 px.

**Points à te signaler** : il n'y avait que **2 mocks** Marketing (pas 3) : le 3e est ajouté. Les analyses des images de slides sans texte (avion, restaurant) et les modèles de réponse sont écrits par le site (signalé). Le format de l'examen n'est toujours pas publié.

**Point de reprise** : tâches 1 à 4 faites ; reste la **vérification finale** et la reconstruction de `IESEG Revision.html`.

### Vérification finale : faite (24/11/2026)
- **Fiches toujours ouvertes** : 77 pages (fiches + cheat sheets des 10 matières), sur le site et sur `IESEG Revision.html` : 0 bloc replié, 0 bloc caché.
- **Toutes les pages** (393 : 10 matières, onglets, items des labs, mocks, #demo, #search, #mixed, #progress) à 390 px en mode sombre, sur le site **et** sur `IESEG Revision.html` : 0 erreur console, 0 débordement, 0 bloc vide.
- **Trademark** et **Market Structures (ch. 1–2)** comparés au site midterm onglet par onglet (voir tâches 2 et 3 : contrôle automatique « sans perte »).
- **Dilemme du prisonnier** : 12 parties (6 stratégies × partie unique et 5 tours) ; **matrice** : 5 jeux générés, 4 tâches chacun ; **générateurs du ch. 1** : 40 exercices recalculés ; tous justes.
- **`IESEG Revision.html` reconstruit** (`node tools/build-single.js`, 15 scripts, 2,6 Mo) : 10 matières chargées, labs fonctionnels.

## Ordre des matières = ordre des examens (24/11/2026)
- Ordre défini une seule fois : `SUBJECT_ORDER` dans `site/assets/engine.js` (documenté dans CONVENTIONS.md, section 2). `Rev.catalog` trie le catalogue dessus ; accueil, sélecteur, Global progress (et notes des mocks), export, recherche (à pertinence égale), révision mixte suivent. Matière hors liste : à la fin, sans numéro.
- Accueil : numéro 1–10 sur chaque carte ; dates d'examen affichées seulement quand les supports en donnent (Marketing 3–19 déc. TBC, Cost Accounting 15 déc. après-midi). Sélecteur : « 1. Digital Innovation »…
- Slugs, clés localStorage et contenu des matières inchangés ; sections « Matières » de ce fichier rangées dans le même ordre.
- Vérifié (Edge headless, 390 px sombre) sur le site et sur `IESEG Revision.html` reconstruit : ordre correct sur l'accueil, le sélecteur, Global progress et la révision mixte ; progression enregistrée relue après rechargement ; 393 pages sans erreur ni débordement.

## Market Structures : jeux du chapitre 2 au format du site midterm (24/11/2026)
- Nouveau bloc générique `MATRIX` (`assets/widgets.js`, styles en fin de `style.css`, CONVENTIONS.md section 16.5) : la matrice et le labo du site midterm (cases à cliquer pour les équilibres de Nash et correction, meilleures réponses soulignées, Clear, questions « Answer like the exam » révélées une par une, version séquentielle avec induction à rebours).
- Fiche du chapitre 2, aux places du site midterm : dilemme du prisonnier (notion 2), tableau 2 (notion 3), tableaux 3 et 4 (notion 4), bataille des sexes et CO₂ scénarios 1 et 2 (notion 5), maintain–break (notion 6, avant la partie contre l'ordinateur). Ils remplacent les anciennes grilles `GAME` de ces notions et les tableaux statiques ; les 8 jeux sont aussi dans l'onglet Labs. Contenu et autres labs inchangés (construit par `tools/market-structures-v3/`).
- Vérifié (Edge headless, 390 px sombre) : pour les 8 jeux, une case fausse puis les bonnes cases (équilibres recalculés par le test, conformes au cours : 1, 1, 2, 3, 2, 2, 1, 1), meilleures réponses, questions et arbre ; aucune erreur console ; `IESEG Revision.html` reconstruit.

## Market Structures : points 1 à 6 du chapitre 2 au format du site midterm (24/11/2026)

**Modèle étudié** (`MIDTERM S3/MSP Revision.html`, titre « MSP Exam Workbook », lu sans modification ; captures ordinateur 1 280 px et téléphone 390 px) : sections `section.block` avec numéro en avant (`.secnum` 2.1, 2.1.1, 2.1.2, 2.1.3, 2.2, 2.3), cartes de définition (`.def` : terme en gras + définition), encadrés clés (`.key` : sur-titre + méthode / idée centrale), cartes côte à côte (`.grid2 > .card`), texte qui déroule le raisonnement sur les tableaux (`.prose`), notes (`.note`), sources (`.src`), matrices `GAMES` (pd, t2, t3, t4, bos, co2a, co2b, mb) insérées dans le texte (joueur 2 au-dessus, joueur 1 à la verticale, « Years in prison: lower is better » pour pd) ; labo : clic sur les équilibres de Nash puis correction, meilleures réponses soulignées, questions « Answer like the exam », version séquentielle avec arbre et induction à rebours.

**Mise au format** (`site/subjects/market-structures.js`, construit par `tools/market-structures-v3/` ; nouveaux fichiers `msp-v3-wb.js` et `model-c2.html`) :
- Les 6 points (2.1 vocabulaire, 2.1.1 dilemme du prisonnier, 2.1.2 équilibre en stratégies dominantes, 2.1.3 Nash, 2.2 coopération et climat, 2.3 Big Tech : maintain–break et jeux répétés) reprennent **le HTML du modèle mot pour mot**, dans le même ordre, avec ses titres numérotés ; les 8 matrices du modèle sont aux mêmes endroits, **interactives** (`MATRIX` compact : cliquer les équilibres, « Check my Nash equilibria », « Show best responses », « Clear » ; solutions cachées jusqu'à la demande).
- Le contenu propre à la fiche du site (400 / 600, définitions du corrigé du mock, méthode de test d'une stratégie dominante, égalités du tableau 4, corrigé du mock Q2, « false promises and disillusionment », conclusion des INSIGHTS, pièges) suit dans le même format (cartes, encadrés, pièges), puis les labs (dilemme jouable, maintain–break jouable, matrice générée ou saisie, « Answer like the exam ») et les « Your turn ». Rien de juste supprimé ; les boutons Got it / To review et les ids de notions sont conservés (progression intacte).
- Points 7 à 10 : contenu inchangé, numérotés sur le modèle (2.3 séquentiel, 2.3 mille-pattes et ultimatum, 2.4 Bertrand, 2.4 Hotelling).
- Moteur : format `.wb` (CSS), `MATRIX` options `compact` et `gen`, `Rev.W.pmTable` ; termes des cartes de définition non soulignés par le glossaire ; documenté dans CONVENTIONS.md section 16.15.

**Cohérence des autres rubriques, vérifiée et corrigée** :
- **Quiz et banque** (72 questions du chapitre 2) : définitions, « maintain = output faible », solution attendue, « lower is better », chiffres des tableaux : conformes ; renvois « INSIGHTS Ch 2, §2.1.1… §2.3.2 » conformes à la nouvelle numérotation. Rien à corriger.
- **Flashcards** (32) et **glossaire** (21 termes) : mêmes définitions (stratégie dominante, Nash, solution attendue, cartel, tit-for-tat, mechanism design, payoff matrix « first number = row player »). Rien à corriger (doublons de cartes c18/c54, c17/c56, c19/c55, c15/c73 laissés : ids de progression).
- **Cheat sheet** (règles, définitions mot pour mot, pièges) : conforme.
- **Exercices** (cas 2.4 à 2.8, 2.A6 à 2.A8, tableau 4, jeu généré) : solutions conformes à la méthode du chapitre ; **corrigé** : leurs matrices s'affichaient en tableau simple, elles sont au format du chapitre (`pmTable`).
- **Générateurs** (`g-c2-dom`, `g-c2-exam`, `g-c2-ab`, `g-c2-seq`) : méthode identique (meilleures réponses par colonne / par ligne) ; **corrigé** : matrices des énoncés au format du chapitre.
- **Mocks** (m1 Q2, m2 Q1c-Q2, m3 Q1b-Q2, m4 QCM 2 à 9 et 15) : réponses conformes aux matrices recalculées ; **corrigé** : matrices au format du chapitre (statiques : pas de solution pendant l'épreuve).
- **Labs** : **corrigé** : les doublons à l'ancien format (`gm-t3`, `gm-bos`, `gm-co2a`, `gm-co2b`, dilemme `pl-pd` à 4 stratégies) sont retirés au profit des 8 matrices `mx-c2-…` et du dilemme `pl-c2-pd` (6 stratégies) ; les matrices des mocks (`gm-mid5`, `gm-mid8`, `gm-mid9`, `gm-fin2`) passent au composant du chapitre ; ajout du labo aléatoire du site midterm (`mx-c2-random`). Les deux derniers labs `GAME` (`gm-gen`, `gm-c2-lab`) sont remplacés à ta demande par un seul lab `MATRIX` `mx-c2-lab` (jeux aléatoires 2 × 2, 3 × 3, 4 × 4 ou « Edit the payoffs »), en tête de l'onglet Labs et dans le point 2.1.3 ; leur progression enregistrée est perdue. Hotelling et arbres de Varian inchangés.
- **Présentation de la matière** : renvoi « sheets 1–2 » corrigé (chapitre 2 au format du site midterm).
- **Recherche globale, révision mixte, progression** : titres numérotés indexés automatiquement, ids inchangés ; vérifiés dans les tests de pages.

**Vérifications** (Edge headless) : comparaison automatique avec le modèle : titres identiques, 112 phrases du modèle retrouvées (4 signalées seulement parce que mon extraction colle un intertitre à la phrase qui suit, contenu présent), blocs dans le même ordre ; 8 matrices dans la fiche et 8 dans Labs : équilibres, meilleures réponses et équilibre séquentiel identiques au modèle (dont pd « lower is better ») ; labo aléatoire : 5 jeux ; générateurs : 25 exercices recalculés justes ; mocks : toutes les questions des points 1 à 6 refaites dans l'interface, notées au maximum ; quiz V/F et QCM, 3 exercices, 6 « Your turn », flashcards ; régression : 397 pages du site et 397 de `IESEG Revision.html` (reconstruit) sans erreur ni débordement, 77 fiches sans bloc replié, labs du chapitre 1 et dilemme (`msp-verify`) toujours justes.

- **Ajout (même jour)** : plus aucun composant `GAME` dans Market Structures. Nouveau lab `mx-c2-lab` testé dans Labs et dans la fiche : 3 jeux aléatoires (2 × 2, 3 × 3, 4 × 4) et une matrice saisie à la main (dilemme en profits : équilibre et stratégies dominantes justes) ; `MATRIX` options `gen.sizes` et `edit` documentées (CONVENTIONS.md 16.15).

## Retrait des mentions de l'école et des professeurs : FAIT (25/11/2026)
**Statut : remplacements appliqués dans `site/` et dans les fragments `tools/*-v3/`.** `Revision S3.html` reconstruit (`node tools/build-single.js`), `IESEG Revision.html` supprimé. Plus aucune occurrence de IÉSEG, MyCourses (devenu « the course platform » / « course »), noms de professeurs, codes de cours, groupe L10 ni `MIDTERM S3/` dans `site/` et le fichier unique. `node --check` OK sur tous les scripts, page d'accueil chargée sans erreur (test rapide, pas la vérification complète des 397 pages). Restent volontairement : les formules génériques « your teacher / your professor », ieseg.fr remplacé par www.example.fr, et les noms dans ce PROGRESS.md (historique). Les scripts `msp-assemble.js` et `tm-assemble.js` ont été modifiés des deux côtés de leurs règles `rep()` : à revérifier si on les relance.

(Audit initial ci-dessous, conservé pour mémoire.)

**Résultats de la recherche dans `site/`** (par grep, sans casse ni accents) :
- **École** : « IÉSEG » dans les commentaires de tête de chaque matière (« …, IÉSEG Bachelor 2 »), dans les `tagline:` de chaque matière (« IÉSEG Bachelor 2 · … »), dans `assets/engine.js` (lignes ~270 : « IÉSEG · Bachelor 2 · Semester 3 », ~844 : repli de la ligne de titre). `ieseg.fr` : 1 fois, dans `trademark-law.js` (exemple de nom de domaine « www.ieseg.fr » du cours : à garder ou à remplacer par un exemple neutre, à décider). « School of Management », campus, Paris La Défense, @ieseg : aucun résultat.
- **MyCourses** : environ 68 occurrences, dans afa, cost-accounting, digital-innovation, econometrics, espagnol, market-structures, marketing-management, operations-management, sales-techniques, trademark-law (textes « Overview », notes « no solution on MyCourses », commentaires).
- **Codes de cours** : 2313 (Cost), 3810 (Digital), 2310 (Econometrics), 3398 (Espagnol, « niveau 2, BA S3 »), 4422 (MSP), 2331 (Marketing), 2315 (Operations), 2332 (Sales), 2311 (Trademark) ; groupe « L10 » (marketing-management, trademark-law).
- **Professeurs** : Chadi NANAA (digital-innovation), Marijn Verschelde (market-structures), Florence Nizette et Helen Cocco (marketing-management, y compris « MM S1–S7 2026 FN » et « *FN.pdf »), Maud Van den Broeke (operations-management), Romain Franck (sales-techniques), Elsa Mimoun (trademark-law), M. Buisine (econometrics, « the list of tests »). Formules « your teacher / the teacher / your professor / prof. / coordinator » : afa (2), digital-innovation, econometrics, espagnol, market-structures, marketing-management, operations-management, sales-techniques, trademark-law. Aucun autre nom des sections d'enseignants (Babli, Beyeler, Dourthe, Dris, Kazankova, Kessous, Morel, Trasani, Spy) n'apparaît dans `site/`.
- `<title>` (« Revision Ledger »), balises meta, logos, attributs alt : rien à retirer.
- **À corriger aussi hors de `site/`** pour que la mention ne revienne pas à la prochaine reconstruction : les fragments `tools/marketing-v3/`, `tools/market-structures-v3/`, `tools/trademark-v3/` et `tools/build-single.js` (nom du fichier unique). `PROGRESS.md` et CONVENTIONS.md citent aussi des noms.

**Cas ambigus, à ne pas toucher et à te signaler** :
- « Lille » (cas d'entreprise ou exemples de données, pas l'école) : econometrics (tableaux et tests Lille / Paris), marketing-management (cas GreenRide, Brûlerie, liste de villes), operations-management (Mid-term Q1 Lille, Paris, Lyon ; liste de villes), sales-techniques (« town near Lille »), trademark-law (cas KORVA, TERRA-LOC, tribunal judiciaire de Lille).
- « Mr. / Mrs. » (joueurs de la bataille des sexes), « Mrs Clément », « Mr. Chazal », « Mrs Girard » (personnages des cas de vente), « A professor corrects 200 exams » (énoncé d'OM), « teachers and courses » (exemple de maximisation, OM), « Replacing teachers with AI » (quiz Digital) : contenu de cours, conservé.
- « S3 » = Session 3 (« S3 Models », « slide 35 of S3 ») : contenu, conservé ; « MIDTERM S3/… » dans des commentaires = nom de dossier de l'utilisateur, à reformuler.
- « B2 » : exercices d'espagnol / cellule Excel : contenu, conservé.

**Reprise** : écrire un script Node de remplacements (une règle par formulation, compteur par matière), relire chaque phrase modifiée, `node --check` sur chaque fichier, générer « Revision S3.html » (adapter `tools/build-single.js`), supprimer « IESEG Revision.html », relancer toutes les recherches, mettre à jour CONVENTIONS.md et ajouter ici la ligne « Mentions de l'école et des professeurs retirées ».
