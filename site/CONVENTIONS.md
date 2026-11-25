# Conventions du site de révision (Revision Ledger)

À lire en début de chaque session. Ce fichier suffit pour ajouter ou compléter une matière : il n'y a pas besoin de lire `assets/engine.js` (sauf pour modifier le moteur lui-même).

Contraintes permanentes :

- Le site s'ouvre par **double-clic** sur `site/index.html` (`file://`), sans serveur. Tout le JavaScript est chargé par des balises `<script src>`. **Jamais de `fetch`**, jamais d'import de module ES.
- **Aucune dépendance** à part Google Fonts (déjà chargé dans `index.html`).
- La progression vit dans le `localStorage` du navigateur ; le moteur fait toutes les lectures et écritures (dans des `try/catch`). Un fichier matière n'accède jamais au `localStorage` lui-même.
- **Les fiches ne sont jamais repliées** : aucun `<details>`, aucune classe `collapsed`, aucun `display:none` dans une fiche, une cheat sheet ou un fichier matière. Les blocs « Understand », « Worked example », « Exam trap » et les `EX` s'affichent ouverts, avec un titre de bloc et une bordure de couleur. Seules restent cachées jusqu'à l'action de l'étudiant : les réponses du quiz, des « Your turn », des générateurs, des exercices et des mocks, le dos des flashcards et les étapes suivantes d'un pas-à-pas `STEPS`.
- Interface en **anglais** (comme l'ancien site AFA). Le contenu est dans la langue du cours.

---

## 1. Arborescence

```
FINAL S3/
├── AFA Revision Ledger.html      ancien site AFA (modèle, ne pas modifier)
├── PROGRESS.md                   avancement par matière : à mettre à jour à chaque session
├── sources/<slug>/               supports de cours déposés par l'étudiant (PDF, slides, corrigés)
└── site/
    ├── index.html                page unique : catalogue des 10 matières + balises <script>
    ├── CONVENTIONS.md            ce fichier
    ├── assets/style.css          design commun (tokens clair/sombre)
    ├── assets/engine.js          moteur : navigation, vues communes, types d'exercices, progression
    ├── assets/widgets.js         blocs interactifs (fiches en couches, glossaire, pas-à-pas, arbres, jeux, graphiques, générateurs, tri, dialogues), module « lab », page #demo (section 16)
    ├── modules/accounting.js     modules partagés "journal" et "taccounts" + helper J()
    ├── modules/law.js            modules partagés "caselaw", "distinctions", "casework" (section 9.4)
    └── subjects/<slug>.js        une matière = un fichier de données
```

Ordre de chargement dans `index.html` (à respecter) : `engine.js` → `widgets.js` → catalogue (`Rev.catalog([...])`) → `modules/*.js` → `subjects/*.js` → `hub.js`. L'ordre des balises des matières n'a **aucun effet** sur l'affichage.

**Ordre des matières (ordre chronologique des examens)** : défini à **un seul endroit**, le tableau `SUBJECT_ORDER` (slugs) en tête de `assets/engine.js`, juste au-dessus de `Rev.catalog`. `Rev.catalog` trie le catalogue sur ce tableau ; tout le site lit ensuite `CATALOG` ou `Rev.subjects()` : cartes de l'accueil (avec leur numéro 1–10), sélecteur de matière (« 1. Digital Innovation »), page Global progress, export, recherche globale (#search), révision mixte (#mixed). Pour changer l'ordre : déplacer les slugs dans `SUBJECT_ORDER`, puis reconstruire `Revision S3.html`. Une matière du catalogue absente de `SUBJECT_ORDER` s'affiche à la fin, sans numéro. Ne jamais changer un slug (clé de stockage `revledger:subject:<slug>`). `EXAM_DATES` (même endroit) affiche une date d'examen sur une carte : uniquement une date donnée par les supports (aujourd'hui Marketing « 3–19 Dec (TBC) » et Cost Accounting « 15 Dec, afternoon »).

## 2. Enregistrer une nouvelle matière (checklist)

1. Créer `site/subjects/<slug>.js` avec le **slug exact du catalogue** (tableau ci-dessous). Partir de l'exemple complet de la section 14.
2. Dans `site/index.html`, bloc 4, ajouter une ligne : `<script src="subjects/<slug>.js"></script>`.
3. Ne pas modifier le catalogue : les 10 matières y sont déjà. Une matière du catalogue sans fichier chargé apparaît « Not added yet ».
4. Vérifier dans le navigateur (section 13).
5. Mettre à jour `PROGRESS.md`.

| Matière | slug | Fichier |
|---|---|---|
| Digital Innovation | `digital-innovation` | `subjects/digital-innovation.js` (fait : Sessions 1–9, 3 mocks) |
| Advanced Financial Accounting | `afa` | `subjects/afa.js` (midterm et end-term faits) |
| Market Structures and Price | `market-structures` | `subjects/market-structures.js` (v3 : chapitres 1–2 « Midterm » fusionnés avec le site midterm, labs de théorie des jeux dans les fiches et l'onglet Labs, 21 générateurs, 4 mocks ; construit par `tools/market-structures-v3/`) |
| Espagnol | `espagnol` | `subjects/espagnol.js` (fait : Temas 7, 8, Repaso, drill de conjugaison, 3 mocks) |
| Econometrics & Data Analysis | `econometrics` | `subjects/econometrics.js` (fait, v2 : fiches en couches, 15 générateurs, 8 outils dont sorties SPSS annotées, 3 mocks ; construit depuis `tools/econometrics/parts/`) |
| Sales Techniques | `sales-techniques` | `subjects/sales-techniques.js` (fait : Sessions 1–8, cas Avril, 1 mock écrit) |
| Marketing Management | `marketing-management` | `subjects/marketing-management.js` (v3 : chaque notion avec intuition, exemple du cours, piège ; 16 schémas ; 14 tris dans les fiches ; 6 générateurs de cas ; 3 mocks ; construit par `tools/marketing-v3/`) |
| Cost Accounting | `cost-accounting` | `subjects/cost-accounting.js` (fait, v2 : fiches converties par LAYERED, 15 générateurs dont 3 tableaux à remplir, 3 outils, 3 mocks) |
| Operations Management | `operations-management` | `subjects/operations-management.js` (fait : classes 1–9, 3 mocks dont le practice exam 2024) |
| Trademark Law | `trademark-law` | `subjects/trademark-law.js` (v3 : midterm = site midterm intégré, end-term Sessions 5–8 ; onglets Case law, Distinctions, Practical cases ; 3 mocks ; construit par script, voir PROGRESS) |

Un slug : minuscules, chiffres et tirets (`^[a-z0-9]+(-[a-z0-9]+)*$`). `home` et `progress` sont réservés.

## 3. Format exact d'un fichier matière

Toujours une fonction auto-exécutée qui récupère les helpers puis appelle **une seule fois** `registerSubject({...})` :

```js
/* <Nom de la matière>: <ce qui est couvert, d'où vient le contenu>. */
(function(){
const {T,F,EX,TRAP,NOTE,J,fmt}=Rev.h;   // J n'existe que si modules/accounting.js est chargé
// ... constantes de contenu (fiches, questions, etc.)
registerSubject({ /* champs ci-dessous */ });
})();
```

Champs de `registerSubject` (seul `slug` est techniquement obligatoire ; une matière utile a au moins `name`, `topics`, et du contenu) :

| Champ | Type | Rôle |
|---|---|---|
| `slug` | string | Identique au catalogue. Sert pour le hash et la clé de stockage. |
| `name` | string | Nom complet (« Cost Accounting »). |
| `short` | string | Nom court (« Cost »), utilisé dans les titres et boutons. |
| `tagline` | string | Sous-titre de l'en-tête (masqué sur téléphone). Court : « Bachelor 2 · Midterm: Topics 1–4 ». |
| `status` | string | Ligne d'état sur la carte de l'accueil (« Midterm migrated (Topics 1–4) · End-term to do »). |
| `exams` | `[{id, label, scope?, empty?}]` | Examens (voir section 4). `scope` : pastille dans l'index des fiches (« Topics 1–4 »). `empty` : note affichée tant qu'aucun topic n'a cet examen. |
| `topics` | `[{id, label, title, short, exam, summary, sheet}]` | Chapitres, dans l'ordre. `id` unique (`t1`…). `label` « Topic 1 ». `title` « Accounting cycle ». `short` « T1 Cycle » (pastilles). `exam` = id d'un examen. `summary` : une ligne pour les cartes. `sheet` : HTML de la fiche (section 5) ; absent → « No sheet yet ». |
| `cheatsheet` | string **ou** `[{exam?, title?, html}]` | Cheat sheet. Plusieurs entrées (ex. midterm puis end-term) sont affichées l'une après l'autre ; `title` ajoute un `<h2>` (inutile si le HTML a déjà son propre `<h2>`). |
| `overview` | `{eyebrow?, title?, lede?, html?, blurbs?}` | Onglet Overview. Le moteur génère les cartes (topics, cheat sheet, quiz, exercices, modules, flashcards) entre `lede` et `html`. `html` contient « How to use it » et « Sources and limits ». `blurbs` : textes des cartes `{cheat, quiz, exercises, cards}`. |
| `sources` | `{clé: libellé}` | Libellés des provenances de questions. Défaut : `{course:'Course exercise', practice:'Practice'}`. |
| `quiz` | tableau | QCM de l'onglet Quiz (section 6). |
| `exercises` | tableau | Exercices de l'onglet Exercises (section 7). |
| `flashcards` | tableau | Section 8. |
| `modules` | tableau | Onglets spécifiques (section 9). |
| `mocks`, `mocksNote` | tableau, HTML | Examens blancs (section 15). |
| `legacy` | `{key, convert(old)}` | Import unique d'une progression d'un ancien site (AFA seulement). |
| `glossary` | `[{t, d, topic?, alias?, auto?}]` | Glossaire (section 16.2) : onglet Glossary + termes soulignés dans les fiches. |

**Identifiants** : chaque élément de `quiz`, `exercises`, `flashcards` a un `id` unique dans sa liste, et chaque `topic` référencé doit exister. Le moteur refuse sinon la matière et affiche un encadré orange « Loading problem » en haut de chaque page (et une erreur console). Les ids sont **définitifs** : la progression est enregistrée sous ces ids. Ne jamais renuméroter ni réutiliser un id ; ajouter à la fin avec un nouvel id. Conventions : `q…` quiz, `c…` cartes, `x-t3-depr` exercices (préfixe `x-`, topic, mot-clé).

## 4. Midterm / End-term (et autres examens)

- L'examen est porté par le **topic** : `exam:'midterm'` ou `exam:'endterm'` (ids libres, déclarés dans `exams`). Questions, exercices, cartes et drills héritent de l'examen de leur topic : ne pas mettre `exam` sur les éléments.
- Les filtres « All exams / Midterm / End-term » apparaissent automatiquement dans Quiz, Exercises, Flashcards et les modules dès que les éléments couvrent au moins deux examens.
- Une matière à examen unique déclare un seul examen (ex. `{id:'final',label:'Final exam'}`), ou aucun (`exams` vide, `exam` absent des topics).
- Ne jamais affirmer qu'un chapitre est « hors programme » sans source. Écrire « outside the midterm » si cela ne vaut que pour le midterm.

**Market Structures (v3)** : examens `midterm` (c1–c2, aussi au final) et `final` (c3–c4, libellé « End-term ») ; topics `c1`–`c4`. Ne pas éditer le fichier à la main : fragments et script dans `tools/market-structures-v3/`. Quiz « Midterm site » `q98`+, cartes `c60`+, mock `m4` (mock midterm), questions ouvertes `x-c<n>-open-…`, labs `gm-c2-lab`, `pl-c2-pd`, `g-c2-exam`, `g-c<n>-ab`, `st-c2-varian1..4` ; QCM dont l'ordre des options compte : `keep:true` (non mélangées). Seuls les MSP#INSIGHTS sont examinables. Helpers internes : `plot(o)` (graphique SVG, couleurs `var(--…)` dans `style`), `MONO_PLOT(a,b,c,d,F,xmax,ymax,légende)` (monopole p = a − bq, TC = F + cq + dq²), `mtx(matrice)` (matrice de gains), `gameSolve` (équilibres de Nash, stratégies dominantes). Les QCM Vrai/Faux utilisent le tableau `TF` et ne sont pas mélangés par `mix`. Ids : quiz `q0`–`q97`, cartes `c0`–`c59`. **v2** : fiches en `NOTION` (ids `c1-…` à `c4-…`), helpers de modèles `mono`/`monoSpec`, `taker`/`takerSpec`, `market`, `spne`/`seqTree` (arbre de jeu SVG), `hotel`/`beach` (plage de Hotelling) ; glossaire `GLOSS` ; onglets `lab` « Generators » (`GENS`, ids `g-c<n>-…`) et « Tools » (`TOOLS` : `p-…` graphiques, `gm-…` matrices, `pl-…` parties, `tr-…` arbres) ; `cf(x)` écrit un coefficient devant q (pas de « 1q », 5 décimales).

**Espagnol (fait)** : examen unique `final` ; topics `t7`, `t8`, `t9` (Tema 7, Tema 8, Repaso). Les formes verbales (fonctions `imperf`, `indef`, `pres`, tables `IMPV`, `GER`) sont la seule source des tableaux des fiches, des exercices et du module interne `verbs` (Verb drill, état `{pres|impv|imp|ind|ger: {ok, n}}`). Helper `GAP(intro, texte)` : `[[réponse/variante|indice]]` → texte à trous + une partie `text` par blanc. Options des QCM mélangées par `mix` (comme Digital Innovation). Ids : quiz `q0`–`q93`, cartes `c0`–`c53`. Dans un encadré `TRAP`, un `<b>` peut désormais être placé n'importe où (le titre est le seul `<b>` enfant direct).

**Econometrics (fait)** : examens `midterm` (passé) et `final` ; topics `t1`–`t9`. Les tableaux SPSS et graphiques SVG sont générés hors du site (`tools/econometrics/`) puis intégrés au fichier matière (`ECO` = HTML, `EK` = chiffres clés lus par les questions). Pour modifier un mock, régénérer avec les mêmes graines ou réécrire les questions. Quiz jusqu'à `q100`, cartes `c0`–`c48`. **v2** : ne jamais éditer `site/subjects/econometrics.js` directement : éditer les parts de `tools/econometrics/parts/` puis reconstruire (commande dans le README de l'outil). Nouvelles parts : `a2-v2-lib.js` (`ST.ols` et lois t/F dans le navigateur, `regTables`/`regNotes` = tableaux SPSS annotables), `a2b-v2-tests.js` (`TEST_TREE`, `TEST_CASES`), `a3-v2-sheets.js`, `a4-v2-tools.js` (`GLOSS`, `GENS` ids `g-t<n>-…`, `TOOLS`), `c2-v2-push.js`.

**Digital Innovation (fait)** : examen unique `final` ; topics `s1`–`s9`. Trois provenances de quiz (`sources`) : `course`, `bank` (QCM d'entraînement sans corrigé) et `practice`. Les options des QCM sont mélangées une fois, de façon déterministe (graine = id), dans le fichier matière (fonction `mix`) : réutiliser ce procédé quand les bonnes réponses sont écrites en premier. Ids : quiz jusqu'à `q104` (non contigus), cartes `c0`–`c43`.

**Cost Accounting (fait)** : examen unique `final` ; topics `s1`–`s5` (Sessions 1–5, la review session 6 est répartie dedans). Exercices `x-s<n>-…`, quiz `q0`–`q111` (ids non contigus), cartes `c0`–`c51`. **v2** : bloc inséré avant `const MOCKS` : fiches passées par `LAYERED` (notions `s<n>-…`), `GLOSS`, `GENS` (`g-s<n>-…`, dont `g-s3-rates`, `g-s3-wac`, `g-s4-chain` en tableau à remplir), `TOOLS`, helpers `QV` (QCM mélangé une fois, graine = id) et `CV`. Le mock `m1` reproduit le mock officiel du cours.

**AFA (fait)** : les Topics 5–8 (`exam:'endterm'`) suivent les Topics 1–4 (`exam:'midterm'`) ; l'examen final couvre les huit (annonce MyCourses du 28 nov. 2025). Les ids end-term commencent à `q64`, `c42`, `d40` et `x-t5-…` ; un ajout ultérieur continue la numérotation (`q127`, `c73`, `d71`…). `cheatsheet` contient deux entrées (end-term puis midterm). Les supports sont dans `sources/afa/` ; ce qui manque et les erreurs relevées dans les supports sont listés dans `PROGRESS.md`.

## 5. Rédiger une fiche (`sheet`) et la cheat sheet

Une fiche est une chaîne HTML (template literal). Structure type, reprise d'AFA :

```js
const SHEET_T1=`
<div class="eyebrow">Topic 1</div><h2>Titre complet du chapitre</h2>
<p class="lede">Goal: ce que l'étudiant doit savoir faire à la fin.</p>
<h3>1. Première notion</h3>
<p>Texte court. <b>Mots-clés en gras.</b></p>
${F('Formule = a + b\nDeuxième ligne de la formule')}
${T(['Colonne 1','Colonne 2'],[['a','b'],['c','d']])}
${TRAP('Le piège classique de l\'examen.')}
${EX('Titre de l\'exemple','worked example',`<p>Énoncé, puis solution.</p>`)}
${NOTE('<b>Outside the slides:</b> ce qui ne vient pas des supports.')}
`;
```

Helpers disponibles dans `Rev.h` :

| Helper | Sortie |
|---|---|
| `T(entêtes, lignes, colsNum=[])` | Tableau dans un conteneur qui défile horizontalement sur téléphone. `colsNum` : indices des colonnes numériques (alignées à droite, chiffres tabulaires). |
| `F(texte)` | Encadré formule (police mono, `\n` = retour à la ligne). |
| `EX(titre, étiquette, corps)` | Bloc **toujours ouvert** (exemple corrigé ou exercice) : titre + étiquette, bordure bleue à gauche. Rendu : `<section class="ex">`. Étiquettes utilisées : `worked case`, `worked example`, `worked examples`, `exercise`, `calculation`, `example`, `read first`. |
| `TRAP(html, libellé='Exam trap')` | Encadré jaune « Exam trap ». |
| `NOTE(html)` | Encadré pointillé pour les remarques de périmètre ou de source. Commencer par `<b>Outside the slides:</b>`, `<b>Outside the midterm:</b>`, `<b>Check against the slide:</b>`… |
| `J(lignes, avecDate=true)` | Écriture comptable au format du cours ; lignes `[date, compte, type, débit, crédit]`. Les montants non numériques (`'xx'`) sont affichés tels quels. Fourni par `modules/accounting.js`. |
| `fmt(n)` | `1234.5` → `1 234.50` (espace comme séparateur de milliers). |
| `esc(s)` | Échappe du texte pour l'insérer dans du HTML. |
| `bar(a, b)` | Barre de progression a/b. |

Classes CSS utilisables dans le HTML : `eyebrow`, `lede`, `grid2` (grille de `panel`), `panel`, `pill`, `pill src`, `formula`, `trap`, `note`, `tbl`, `num`, `n` (cellule numérique), `je` (table d'écriture), `toc`. Couleurs dans le texte : uniquement via les variables, par ex. `<span style="color:var(--debit)">Debit</span>`.

**Ton et niveau de détail (modèle AFA)** : phrases courtes, factuelles, en anglais ; pas de remplissage. Chaque topic : objectif (`lede`), sections numérotées (`h3`), définitions en listes, formules en `F`, tableaux de synthèse, pièges en `TRAP`, exemples du cours en `EX` avec les vrais chiffres et la solution, puis « What the course MCQs test » quand c'est pertinent. Tout ce qui ne vient pas des supports est signalé (`Outside the slides`). Si un chiffre d'une slide est faux, le dire (`Check against the slide`) et utiliser le bon calcul. Ne rien inventer : le contenu vient de `sources/<slug>/`.

**Cheat sheet** : une page ; `eyebrow` « One page », `h2` « Cheat sheet », un tableau « Formulas » (`T(['What','Formula'], …)`), un tableau des règles ou écritures types, et une checklist de réponse à l'examen.

## 6. Quiz (QCM, onglet Quiz)

```js
{id:'q0', topic:'t1', src:'course', q:'Question (\\n autorisé)', o:['option a','option b','option c','option d'], a:2, e:'Explication affichée après la réponse, juste ou fausse.'}
```

- `a` : index de la bonne réponse (0 = a). Jusqu'à 10 options.
- `src` : `'course'` (question tirée des supports, réponse officielle ; pastille contour) ou `'practice'` (question nouvelle construite sur les mêmes règles ; pastille pleine). Autres clés possibles via `sources`.
- Le quiz tire les questions au hasard, une à la fois ; filtres par examen, topic, provenance et « Wrong last time only ». Seule la **dernière réponse** compte pour la progression.

## 7. Exercices (onglet Exercises) : types génériques

Champs communs à tous les types :

| Champ | Rôle |
|---|---|
| `id`, `topic`, `type`, `title` | Obligatoires (`title` : court, affiché en gras). |
| `q` | Énoncé HTML, ou fonction `v => html` si l'exercice a un `gen`. |
| `src` | `'course'` ou `'practice'` (informatif). |
| `e` | Explication affichée après une vérification **juste** (et toujours pour un QCM). Aussi affichée dans « Solution » s'il n'y a pas de `solution`. |
| `hint` | Indice affiché après une vérification fausse (facultatif). |
| `solution` | Corrigé détaillé HTML (ou `v => html`), affiché par le bouton « Solution » sous la réponse attendue. |
| `gen` | `u => ({...})` : génère des données aléatoires `v`. Toutes les propriétés qui acceptent une fonction la reçoivent : `q`, `answer`, `label`, `accept`, `pairs`, `items`, `o`, `solution`, `e`, `hint`. Ajoute le bouton « New numbers ». |

Chaque carte d'exercice a les boutons **Check**, **Solution**, **Reset** (ou **New numbers**) ; pas de Check pour un QCM à réponse unique (correction au clic) ni pour un cas auto-évalué. Le statut « ✓ solved / ✗ last try wrong » est celui de la dernière vérification.

### `mcq` (QCM)

```js
{id:'x-a', topic:'t1', type:'mcq', title:'…', q:'…', o:['…','…','…'], a:1, e:'…'}       // une réponse : correction immédiate au clic
{id:'x-b', topic:'t1', type:'mcq', title:'…', q:'…', o:['…','…','…','…'], a:[0,2], e:'…'} // plusieurs réponses : cocher puis Check
```

### `numeric` (réponse numérique avec tolérance)

```js
{id:'x-c', topic:'t2', type:'numeric', title:'…', q:'…', answer:3000, unit:'€'}
{id:'x-d', topic:'t2', type:'numeric', title:'…', q:'…', parts:[
  {label:'COGS', answer:3000, unit:'€'},
  {label:'Gross profit %', answer:55.4, unit:'%', tol:0.1}]}
```

- Tolérance : `tol` absolue (défaut **0.01**), `tolPct` relative en %. La plus large des deux s'applique. `tol:0` = valeur exacte (nombre d'actions, d'unités).
- Saisies acceptées : `1 000`, `1,000`, `12,5` (virgule décimale), `€40`, `55%`, `−3 500`, `(3 500)` (négatif). Pour une perte, l'énoncé doit dire « Enter a loss as a negative number ».

### `calc` (calcul à données aléatoires : générateur + formule + corrigé)

```js
{id:'x-t3-depr', topic:'t3', type:'calc', title:'Straight-line depreciation',
 gen:u=>{const life=u.pick([4,5,8]),annual=u.step(2400,12000,1200),res=u.step(1000,6000,1000);return {life,annual,res,cost:res+life*annual}},
 q:v=>`Cost €${fmt(v.cost)}, residual €${fmt(v.res)}, life ${v.life} years. Annual depreciation?`,
 answer:v=>(v.cost-v.res)/v.life, unit:'€',                    // ou parts:[{label, answer:v=>…, unit, tol}]
 solution:v=>F(`(${fmt(v.cost)} − ${fmt(v.res)}) / ${v.life} = ${fmt(v.annual)}`)}
```

Outils du générateur (`u`, aussi `Rev.u`) : `u.int(lo,hi)` entier inclus ; `u.step(lo,hi,pas)` valeur `lo + k×pas ≤ hi` ; `u.pick(tableau)` ; `u.shuffle(tableau)` ; `u.round(x, décimales=2)` ; `u.num(texte)` (lecture d'un nombre saisi). Concevoir le générateur pour produire des **nombres propres** (multiples choisis, pas de division qui tombe mal) et des cas valides (pas de stock négatif, pas de prix nul). Toujours tester des milliers de tirages (section 13).

### `text` (réponse courte, accents tolérés mais signalés)

```js
{id:'x-e', topic:'t2', type:'text', title:'…', q:'…', accept:['LIFO','last in first out']}
{id:'x-f', topic:'t1', type:'text', title:'Conjugaison', q:'…', accents:'strict', parts:[
  {label:'yo', accept:['canté']}, {label:'tú', accept:['cantaste']}]}
```

- Comparaison insensible à la casse ; espaces multiples, ponctuation (`. , ; : ! ? ¿ ¡ " « » ( ) [ ] { }`), tirets, `_` et `/` ignorés ; apostrophes unifiées. Lister toutes les variantes acceptables dans `accept` (articles compris : `'journal'` et `'the journal'`). La première variante est celle montrée dans la solution.
- Accents : par défaut (`accents:'tolerate'`), une réponse juste à un accent près est **acceptée** et signalée en orange (« Accepted, but mind the accents: “canción” »). `accents:'strict'` la compte fausse (à utiliser en Espagnol quand l'accent est l'objet de la question).

### `match` (association)

```js
{id:'x-g', topic:'t1', type:'match', title:'…', q:'Match each account with its type.',
 pairs:[['Cash','A (asset)'],['Accounts payable','L (liability)'],['Share capital','SE (equity)']], extra:['XA (contra-asset)']}
```

Colonne de gauche en HTML ; colonne de droite en **texte brut** (menu déroulant, valeurs mélangées, doublons fusionnés : plusieurs gauches peuvent partager la même droite). `extra` : distracteurs.

### `order` (remise dans l'ordre)

```js
{id:'x-h', topic:'t1', type:'order', title:'…', q:'Put the steps in order.', items:['Étape 1','Étape 2','Étape 3','Étape 4']}
```

`items` dans **l'ordre correct** ; le moteur les mélange, l'étudiant les déplace avec ↑ ↓ (utilisable au clavier et au doigt).

### `case` (cas pratique avec corrigé détaillé)

```js
{id:'x-t2-xyz', topic:'t2', type:'case', title:'XYZ August: perpetual FIFO',
 q:'<p>Énoncé complet du cas…</p>',
 parts:[
  {type:'numeric', q:'a. COGS of the Aug 12 sale', answer:800, unit:'€'},
  {type:'text',    q:'b. Which method is used?', accept:['FIFO']},
  {type:'mcq',     q:'c. …', o:['…','…'], a:0}],
 solution:T([…])+F('…')}
```

- `parts` : sous-questions de type `mcq`, `numeric`, `calc`, `text`, `match` ou `order` (pas de `case` imbriqué), chacune avec son `q`. Un seul bouton Check corrige tout (« 3 of 5 parts correct »). Un `gen` au niveau du cas est transmis aux parties (leurs `answer` peuvent être des fonctions de `v`).
- Sans `parts`, le cas est **auto-évalué** : « Solution » affiche le corrigé puis « Did you get it right? Yes / Not yet ». Utile pour les questions de rédaction (droit, marketing).

### Ajouter un type d'exercice

Pour un besoin propre à une matière (ex. écriture comptable dans un cas) : dans un fichier de `modules/`, appeler

```js
Rev.registerExerciseType('montype', {label:'Mon type', mount(box, item, api){
  box.innerHTML = '…';                       // dessiner la zone de réponse ; api.v = données générées, api.uid = préfixe d'id unique
  return {
    check(){ return {ok:true|false, msg:'…', warn:false, empty:false}; },  // empty:true si rien n'est saisi (rien n'est enregistré)
    answer(){ return 'HTML de la réponse attendue'; }                     // montré par « Solution »
  };                                          // {instant:true} : le type appelle lui-même api.report({ok,msg})
}});
```

## 8. Flashcards

```js
{id:'c0', topic:'t1', f:'Recto (question)', b:'Verso (réponse)\nDeuxième ligne'}
```

`\n` = retour à la ligne ; HTML simple autorisé. L'étudiant marque « Got it » ou « Again » ; « Not yet known only » filtre les cartes non sues.

## 9. Modules (onglets propres à une matière)

Un module ajoute un onglet entre Exercises et Flashcards. Hash : `#<slug>-<tab>` (et `#<slug>-<tab>-<param>`, `param` reçu par `render`). Noms de `tab` interdits : `overview`, `sheets`, `cheat`, `glossary`, `quiz`, `exercises`, `flashcards`, `mocks`, `progress`.

### 9.1 Utiliser un module partagé

```js
modules:[
  {use:'journal',   tab:'drills',    label:'Journal drills', data:{drills:DRILLS, extraAccounts:['Supplies','Rent expense']}},
  {use:'taccounts', tab:'taccounts', label:'T-accounts',     data:{accounts:TA, missing:MISS, topic:'t1', eyebrow:'Topic 1 · Practice', blurb:'…'}}]
```

Modules disponibles (`modules/accounting.js`) :

- **`journal`** : écritures à compléter au format du cours (Date | Account | Type | Debit | Credit), correction ligne par ligne (vert, rouge, orange pour un mauvais type).
  `data.drills` : `[{id, topic, date?, title, p, l:[{a:['Nom accepté','Variante'], d:montant} | {a:[…], c:montant}]}]` (`p` = énoncé, `l` = lignes attendues, la première variante de `a` est affichée dans la solution, `date` = date de la première ligne) ; `extraAccounts` : comptes ajoutés au menu ; `kinds` : `{'Nom du compte':'A'|'XA'|'L'|'SE'|'D'|'R'|'E'}` pour les comptes absents de la liste de base (tout compte contenant « expense » est `E`) ; `intro` : HTML remplaçant l'encadré DEALER.
- **`taccounts`** : comptes en T générés à l'infini (poster des transactions ; trouver le chiffre manquant).
  `data.accounts` : `{'Cash':{n:'d', open:[min,max], tpl:[{s:'d'|'c'|null, t:a=>'texte', r:[min,max], st:pas?, p:a=>montant posté?, e:'écriture'|a=>'écriture'}]}}` ; `data.missing` : `[[compte, côté normal, libellé débit, libellé crédit, inconnue 'd'|'c'|'end', [ouv.], [débits], [crédits]]]` ; `topic` : topic auquel rattacher les statistiques.

### 9.2 Écrire un module propre à la matière (dans le fichier matière)

```js
modules:[{tab:'timeline', label:'Timeline',
  card:ctx=>({eyebrow:'Tool', title:'Timeline', text:'Key dates of the course'}),     // carte de l'Overview (facultatif)
  stats:ctx=>[{topic:'t2', label:'Dates placed', done:ctx.state.ok||0, total:12}],    // lignes de progression (facultatif)
  css:'.tl{…}',                                                                       // CSS injecté une fois (facultatif)
  render(ctx, main, param){
    main.innerHTML = `<div class="eyebrow">Practice</div><h2>Timeline</h2>…`;
    main.querySelector('…').onclick = ()=>{ ctx.state.ok=(ctx.state.ok||0)+1; ctx.save(); };
  }}]
```

`ctx` fourni à `render`, `stats` et `card` :

| Propriété | Rôle |
|---|---|
| `ctx.subject` | La matière normalisée (`topics`, `quiz`, …). |
| `ctx.data` | Le `data` passé dans `modules`. |
| `ctx.state` | Objet **persistant** propre au module (JSON uniquement). Modifier puis appeler `ctx.save()`. |
| `ctx.mem` | Objet en mémoire (filtres, exercice en cours) : survit aux changements d'onglet, pas au rechargement. |
| `ctx.h`, `ctx.u` | Helpers HTML (`Rev.h`) et utilitaires (`Rev.u`). |
| `ctx.topicShort(id)`, `ctx.topicName(id)` | « T1 Cycle », « Topic 1 · Accounting cycle ». |
| `ctx.scopeChips(items, f, extraHtml?)`, `ctx.bindScope(root, f, redessiner)`, `ctx.inScope(f)` | Filtres examen/topic standard : `f = {exam:'', topic:''}` ; `items.filter(ctx.inScope(f))`. |
| `ctx.link(view, param?)` | Hash d'un onglet de la matière. |

Lignes de `stats` : `{topic, label, done, total, tried?, count?}`. `count:false` = affiché mais exclu du pourcentage (ex. « T-accounts: right first time »). `tried` = nombre d'éléments tentés (sert à détecter l'activité).

### 9.3 Module partagé entre plusieurs matières

Créer `site/modules/<nom>.js` : `(function(){ registerModule('<id>', {label, css?, card?, stats?, render(ctx, main, param){…}}); })();`, l'ajouter dans `index.html` (bloc 3, avant les matières), puis l'utiliser avec `{use:'<id>', tab, label, data}`.

### 9.4 Modules partagés pour les matières à cas (`modules/law.js`)

Trois onglets génériques, utilisables par toute matière (Trademark Law les utilise) :

```js
modules:[
  {use:'caselaw', tab:'caselaw', label:'Case law', data:{intro?, blurb?, cases:[{id, name, court, date, no, topic, theme?, src?, facts, question, holding, why, flag?}]}},
  {use:'distinctions', tab:'distinctions', label:'Distinctions', data:{intro?, items:[{id, topic, t, rows:[[en-têtes…],[critère, cellules…]…], trap?, note?}]}},
  {use:'casework', tab:'cases', label:'Practical cases', data:{intro?, method?, cases:[{id, topic, src?, title, facts, tasks:[…], hints:[…], model}]}}]
```

- **caselaw** : une carte par arrêt (faits, question, solution, portée = `why`), recherche, filtres examen/topic, mode « Recall » (solution et portée cachées jusqu'au clic), boutons Known / To review (`st.mod.caselaw.k`, ligne « Judgments known » de la progression). `#<slug>-caselaw-<id>` ouvre la liste sur l'arrêt.
- **distinctions** : tableaux de notions proches ; « Test yourself » masque les cellules (sauf la 1re colonne) jusqu'au toucher. Pas de progression.
- **casework** : cas pratique rédigé ; brouillon enregistré (`st.mod.cases.d`), indices un par un, corrigé caché jusqu'au bouton, puis auto-évaluation (`r[id]`, ligne « Practical cases right »). Corrigés au format de la méthode du cours (`<div class="irac"><b>1. …</b><div>…</div>…</div>`).

Classes de contenu disponibles partout (fin de `style.css`) : `.ref` (référence d'article ou d'arrêt), `.fr` (terme français), `.key` (point clé), `.flag` (encadré orange « hors slides ou slide différente »), `.quote` (citation), `.irac` (grille de corrigé). Glossaire : champ facultatif `fr` (traduction affichée en pastille et cherchable).

## 10. Progression et stockage

- Clés `localStorage` : `revledger:prefs` (thème, dernière page) et `revledger:subject:<slug>` (une par matière).
- État d'une matière : `{v:1, quiz:{id:{ok,n}}, ex:{id:{ok,n}}, cards:{id:'known'|'again'}, read:{topicId:date}, mod:{tab:{…}}, mock:{…}, notions:{notionId:'ok'|'review'}, w:{widgetId:{n, ok, streak, best…}}, last:date}`. Les clés `notions` et `w` (v2) sont ajoutées vides aux anciennes sauvegardes : rien à migrer.
- « Notions understood » (boutons des fiches en couches) est une partie du pourcentage dès qu'une matière a des NOTION ; les items du module `lab` comptent comme un module.
- Pourcentage d'une matière = **moyenne** des parties qui existent : fiches lues, questions de quiz dont la dernière réponse est juste, exercices résolus, éléments de modules résolus (lignes `count` ≠ false), flashcards sues.
- « Review next » (onglet Progress) : topic le plus faible d'après précision au quiz (50 %), exercices et modules résolus (30 %), flashcards (20 %).
- Page **Global progress** (`#progress`) : toutes les matières, moyenne globale, export et import de la progression (fichier `.json`) pour changer de navigateur.
- Reset par matière dans son onglet Progress (confirmation intégrée à la page, jamais de `confirm()`).
- Supprimer un élément supprime sa progression ; changer son id aussi.

## 11. Navigation (hash)

| Hash | Page |
|---|---|
| `#home` ou vide | Accueil : une carte par matière et sa progression |
| `#progress` | Progression globale |
| `#<slug>` | Overview de la matière |
| `#<slug>-sheets` / `#<slug>-sheets-<topicId>` | Index des fiches / une fiche (ex. `#afa-sheets-t3`) |
| `#<slug>-cheat`, `-quiz`, `-exercises`, `-flashcards`, `-progress` | Onglets standard (ex. `#cost-accounting-quiz`) |
| `#<slug>-<tab>` | Onglet d'un module (ex. `#afa-drills`, `#afa-taccounts`) |
| `#<slug>-glossary` | Glossaire de la matière (si `glossary` n'est pas vide) |
| `#<slug>-<tab>-<id>` | Un item du module `lab` (ex. `#market-structures-generators-g-cournot`) |
| `#demo` | Démonstration de tous les blocs interactifs (rien n'est enregistré) |

Le sélecteur de matière (en-tête, toujours visible) et les onglets utilisent ces liens ; le bouton retour du navigateur fonctionne. Une matière du catalogue sans fichier affiche « Not added yet ».

## 12. Règles de design

- Design repris d'AFA : fond papier vert-gris, colonne de lecture de 980 px max, en-tête collant (marque, sous-titre, sélecteur de matière, bouton de thème, onglets défilants).
- Polices : `--f-display` Archivo (titres), `--f-body` Source Sans 3 (texte), `--f-mono` IBM Plex Mono (montants, formules).
- Couleurs : **uniquement les variables** de `style.css`, jamais de couleur en dur, sinon le mode sombre casse. `--paper` fond, `--surface` cartes, `--ink` texte, `--muted` texte secondaire, `--rule`/`--rule-strong` filets, `--ledger`/`--ledger-soft` accent vert, `--debit` bleu, `--credit` rouge, `--ok`/`--ok-soft` juste, `--bad`/`--bad-soft` faux, `--warn`/`--warn-soft` piège ou avertissement.
- Thème : automatique (système), clair ou sombre via le bouton de l'en-tête (`data-theme` sur `<html>`). Tout ce qui utilise les variables suit le thème sans rien faire.
- Téléphone (390 px) : aucun défilement horizontal de la page. Les tableaux larges passent par `T()` (conteneur `.tbl` qui défile seul) ; pas de largeur fixe au-delà de 340 px ; grilles en `auto-fit`/`minmax`. Les grilles d'écritures comptables défilent dans leur propre cadre.
- Accessibilité : `<button type="button">`, un `<label for>` par champ, pas de `alert()`/`confirm()`/`prompt()` (confirmations dans la page).
- Contenu : anglais pour les matières enseignées en anglais ; titres de section numérotés ; pas de paragraphe de plus de 4 lignes ; chiffres au format `1 234.50`.

## 13. Vérification en fin de session

1. Ouvrir `site/index.html` par double-clic. Aucun encadré orange « Loading problem » en haut de page.
2. Console du navigateur : **zéro erreur**.
3. Parcourir tous les onglets de la matière, en largeur téléphone (390 px) et en mode sombre.
4. Résoudre au moins un exercice de chaque type utilisé (Check juste et faux, Solution, New numbers).
5. Pour chaque `gen`, vérifier sur quelques milliers de tirages que les réponses sont des nombres finis et propres.
6. Mettre à jour `PROGRESS.md` (statut et ce qui reste à faire).

## 14. Exemple complet de fichier matière

Fichier fictif (slug `example`, absent du catalogue, non chargé par `index.html`) qui utilise tous les champs, chaque type d'exercice et un module interne. Il a été testé : copier, renommer, remplacer le contenu.

<!-- example:start -->
```js
/* Example subject: shows every field of a subject file. Not a real subject. */
(function(){
const {T,F,EX,TRAP,NOTE,fmt}=Rev.h;

const SHEET_T1=`
<div class="eyebrow">Topic 1</div><h2>Percentages and growth rates</h2>
<p class="lede">Goal: compute a percentage change and chain two changes.</p>
<h3>1. Percentage change</h3>
${F('Change (%) = (New − Old) / Old × 100')}
${T(['Change','Multiplier'],[['+25%','1.25'],['−20%','0.80']],[1])}
${TRAP('+10% then −10% is not 0%: 100 → 110 → 99, so −1% overall.')}
${EX('Sales from 200 to 250','worked example',`<p>(250 − 200) / 200 = <b>+25%</b>.</p>`)}
${NOTE('<b>Outside the slides:</b> flag here anything that does not come from the course material.')}
`;

registerSubject({
  slug:'example',
  name:'Example subject',
  short:'Example',
  tagline:'Template · not a real subject',
  status:'Template',
  exams:[
    {id:'midterm',label:'Midterm',scope:'Topic 1'},
    {id:'endterm',label:'End-term',empty:'no end-term topic yet.'}],
  topics:[
    {id:'t1',label:'Topic 1',title:'Percentages',short:'T1 %',exam:'midterm',summary:'Percentage change, chained changes',sheet:SHEET_T1}],
  cheatsheet:[{exam:'midterm',html:`<div class="eyebrow">One page</div><h2>Cheat sheet</h2>${T(['What','Formula'],[['Percentage change','(New − Old) / Old × 100'],['Chained changes','Multiply the multipliers']])}`}],
  overview:{
    title:'Example subject',
    lede:'Shows every field of a subject file.',
    blurbs:{cheat:'All formulas on one page'},
    html:`<h3>Sources and limits</h3><ul><li>Say which course material the content comes from.</li></ul>`},
  quiz:[
    {id:'q0',topic:'t1',src:'course',q:'Sales rise from 200 to 250. Percentage change?',o:['+20%','+25%','+50%','+125%'],a:1,e:'(250 − 200) / 200 = 25%.'},
    {id:'q1',topic:'t1',src:'practice',q:'A price rises by 10%, then falls by 10%. Overall change?',o:['0%','−1%','+1%'],a:1,e:'1.10 × 0.90 = 0.99, so −1%.'}],
  exercises:[
    {id:'x-t1-mcq',topic:'t1',type:'mcq',src:'practice',title:'Multipliers',q:'Which multipliers mean a decrease?',o:['0.80','1.25','0.99','1.01'],a:[0,2],e:'A multiplier below 1 is a decrease.'},
    {id:'x-t1-num',topic:'t1',type:'numeric',src:'practice',title:'Growth rate',q:'A value goes from 80 to 100. Percentage change?',answer:25,unit:'%',tol:0.1},
    {id:'x-t1-calc',topic:'t1',type:'calc',src:'practice',title:'Growth rate, new numbers',
     gen:u=>{const a=u.step(100,500,20),p=u.pick([5,10,20,25]);return {a,p,b:a*(1+p/100)}},
     q:v=>`Sales go from ${fmt(v.a)} to ${fmt(v.b)}. Percentage change?`,
     answer:v=>v.p,unit:'%',
     solution:v=>F(`(${fmt(v.b)} − ${fmt(v.a)}) / ${fmt(v.a)} × 100 = ${v.p}%`)},
    {id:'x-t1-text',topic:'t1',type:'text',src:'practice',title:'Vocabulary',q:'French word for the change of a value over time (starts with “é”)?',accept:['évolution','une évolution']},
    {id:'x-t1-match',topic:'t1',type:'match',src:'practice',title:'Change and multiplier',q:'Match each change with its multiplier.',pairs:[['+25%','1.25'],['−20%','0.80']],extra:['1.20']},
    {id:'x-t1-order',topic:'t1',type:'order',src:'practice',title:'Method',q:'Put the steps in order.',items:['Take the new value','Subtract the old value','Divide by the old value','Multiply by 100']},
    {id:'x-t1-case',topic:'t1',type:'case',src:'practice',title:'Mini case',q:'<p>A shop sells 400 units in year 1 and 500 units in year 2.</p>',
     parts:[{type:'numeric',q:'a. Growth in %',answer:25,unit:'%'},{type:'text',q:'b. Increase or decrease?',accept:['increase','an increase']}],
     solution:F('(500 − 400) / 400 × 100 = 25%: an increase.')},
    {id:'x-t1-essay',topic:'t1',type:'case',src:'practice',title:'Short essay (self-assessed)',q:'<p>Explain in three lines why +10% then −10% is not 0%.</p>',
     solution:'<p>The second change applies to a larger base: 110 × 0.90 = 99.</p>'}],
  flashcards:[
    {id:'c0',topic:'t1',f:'Percentage change',b:'(New − Old) / Old × 100'},
    {id:'c1',topic:'t1',f:'Chained changes',b:'Multiply the multipliers:\n1.10 × 0.90 = 0.99'}],
  modules:[
    {tab:'counter',label:'Counter',
     card:ctx=>({eyebrow:'Tool',title:'Counter',text:'A module written inside the subject file'}),
     stats:ctx=>[{topic:'t1',label:'Counter clicks',done:Math.min(ctx.state.n||0,5),total:5}],
     render(ctx,main){
       const draw=()=>{main.innerHTML=`<div class="eyebrow">Module</div><h2>Counter</h2><p>Clicked ${ctx.state.n||0} times.</p><button type="button" class="btn" id="plus">+1</button>`;
         main.querySelector('#plus').onclick=()=>{ctx.state.n=(ctx.state.n||0)+1;ctx.save();draw()}};
       draw();
     }}]
});
})();
```
<!-- example:end -->

## 15. Mock exams (onglet « Mock exams », toutes les matières)

Le moteur ajoute un onglet **Mock exams** à chaque matière (entre Flashcards et Progress ; vue vide « Not added yet » tant que `mocks` est vide). Hash : `#<slug>-mocks` (liste), `#<slug>-mocks-<id>` (page de garde, copie, puis correction), `#<slug>-mocks-<id>-print` (version imprimable). `mocks` est un nom d'onglet réservé.

Mode examen : minuteur (barre fixe en bas, rouge sous 5 min, remise automatique à 0), aucune correction avant « Hand in » (confirmation dans la page), puis note sur le barème, points par partie et par topic, copie corrigée (réponses en vert/rouge, réponse attendue, `solution`, lien vers la fiche de chaque topic touché). Les réponses restent en mémoire si l'on change d'onglet, pas après un rechargement. Meilleure et dernière note enregistrées dans `st.mock[id] = {best, last, n, at, total}` (ajoutées à la progression de la matière). Version imprimable : sujet seul, puis corrigé sur une nouvelle page (choix « Paper + answer key / Paper only / Answer key only »).

Champs (`registerSubject`) : `mocks` (tableau ci-dessous) et `mocksNote` (HTML affiché au-dessus de la liste, par ex. d'où vient le format).

| Champ d'un mock | Rôle |
|---|---|
| `id` | Unique, minuscules/chiffres/tirets, ne finit pas par `print`. |
| `title`, `summary?`, `exam?` (id d'examen), `scope?` | Affichage (carte, page de garde). |
| `duration` | Minutes. `total` : barème (points). |
| `calculator?`, `intro?` | Texte de la page de garde et de l'imprimé. |
| `sections` | `[{title, intro?, items}]`. `intro` peut porter un cas commun à plusieurs questions. |

Une question = un élément d'exercice (section 7, n'importe quel type enregistré) **plus `pts`**. Validation au chargement (sinon encadré « Loading problem ») : ids uniques dans le mock, types et topics connus, somme des `pts` = `total`. Notation partielle : `numeric`/`text` (part des réponses justes, pondérée par `pts` des sous-réponses), `match`, `order`, `journal` (ligne juste = 1, bon compte et montant mais mauvais type = ½, divisé par max(lignes attendues, lignes écrites)), `case` (somme des points de ses parties ; si une partie a `pts`, toutes en ont et leur somme = `pts` du cas ; une partie peut avoir son propre `topic`), `mcq` tout ou rien. Rédaction : type **`written`** (zone de texte) avec `rubric:[{c:'critère', pts}]` (somme = `pts`) et `solution` = corrigé type ; l'étudiant coche la grille après la remise et la note se met à jour. Un type personnalisé doit fonctionner en mode `deferred` (`check()` qui renvoie `score` 0..1) et peut fournir `print(item, v)` pour l'imprimé.

Type `journal` (dans `modules/accounting.js`, utilisable aussi dans Exercises et dans les parties d'un `case`) : `{type:'journal', l:[{a:['Compte','Variante'], d:montant, dt?:'date'} | {a:[…], c:montant}], date?, rows?, accounts?:[menu], kinds?:{compte:'A'|…}}`. Lignes dans l'ordre du corrigé ; `dt` ouvre une nouvelle écriture dans le corrigé. Donner le même menu `accounts` à toutes les écritures d'un mock (sinon les variantes acceptées apparaissent dans le menu).

Exemple complet (une section QCM, une section exercices avec écriture, calcul et rédaction) :

```js
mocks:[{id:'m1',title:'Mock exam 1',exam:'final',scope:'Topics 1–2',duration:60,total:10,calculator:'Basic calculator',
  summary:'One hour, all topics.',intro:'<p>No notes. One right answer per MCQ.</p>',
  sections:[
   {title:'Part A · MCQs',items:[
     {id:'a1',topic:'t1',type:'mcq',pts:1,q:'Sales go from 200 to 250. Change?',o:['+20%','+25%','+50%'],a:1,solution:F('(250 − 200) / 200 = 25%')},
     {id:'a2',topic:'t1',type:'numeric',pts:1,q:'A value goes from 80 to 100. Change in %?',answer:25,unit:'%',tol:0.1}]},
   {title:'Part B · Exercises',intro:'<p>Case: a shop in 2024.</p>',items:[
     {id:'b1',topic:'t1',type:'case',pts:5,title:'Exercise 1',q:'<p>Record and compute.</p>',parts:[
       {type:'journal',q:'a. Shares issued for 1 000 cash.',pts:2,l:[{a:['Cash'],d:1000},{a:['Share capital'],c:1000}],date:'Jan 1'},
       {type:'numeric',q:'b. Growth from 400 to 500 (%)',pts:2,answer:25,unit:'%'},
       {type:'mcq',q:'c. Increase or decrease?',pts:1,o:['Increase','Decrease'],a:0}],
      solution:F('b. (500 − 400) / 400 = 25%')},
     {id:'b2',topic:'t1',type:'written',pts:3,title:'Exercise 2',q:'<p>Explain why +10% then −10% is not 0%.</p>',lines:6,
      rubric:[{c:'Says the second change applies to a larger base',pts:2},{c:'Gives 110 × 0.90 = 99',pts:1}],
      solution:'<p>110 × 0.90 = 99: −1% overall.</p>'}]}]}]
```

Vérifier un mock (section 13) : le remplir entièrement juste (note = barème après la grille), puis partiellement faux, rendre la copie, contrôler les deux tableaux (par partie et par topic = la note), les liens vers les fiches et la version imprimable à 390 px.

## 16. Blocs interactifs (v2, `assets/widgets.js`)

Tous les blocs sont des **helpers de `Rev.h`** qui renvoient un emplacement HTML (`<div data-w="n">`) : on les écrit dans une fiche comme `T()` ou `F()`, et le moteur les monte après chaque affichage (`Rev.hydrate`). Leur configuration peut contenir des fonctions. Ils n'utilisent que les variables de couleur, marchent au clavier, au doigt (390 px) et en mode sombre. Démonstration vivante : **`#demo`** (lien en bas de l'accueil). Récupération : `const {NOTION,GL,STEPS,TREE,GAME,PLAY,PLOT,FIG,svgPlot,GEN,DIALOG,TRY,LAYER,EXI}=Rev.h;`.

Enregistrement : chaque bloc qui a un `id` enregistre son résultat dans `st.w[id]` (`{n, ok, streak, best}` ; voir section 10). Les `id` de blocs sont **définitifs** et uniques dans la matière (préfixes conseillés : `g-` générateur, `tr-` arbre, `gm-` jeu, `pl-` partie, `dl-` dialogue).

### 16.1 Fiche en couches : `NOTION`

**Quand l'utiliser** : pour chaque notion d'une fiche réécrite en v2. Une fiche = `eyebrow`, `h2`, `lede`, puis une suite de `NOTION` (le moteur ajoute le sommaire cliquable « On this sheet » dès qu'une fiche a deux `h3`). **Toutes les couches sont ouvertes** : pas de bouton de dépliage, chaque couche a son titre (pastille) et sa bordure de couleur (vert Understand, bleu Worked example, jaune Exam trap).

```js
${NOTION({id:'c3-mr', title:'3. Marginal revenue',
  ess:'<p>3 à 5 lignes visibles : la règle, la formule clé.</p>',        // « Essential », toujours visible
  extra:FIG({...}),                                                     // facultatif : schéma, tableau, graphique, toujours visible
  understand:'<p>Intuition, puis explication pas à pas.</p>',            // couche « Understand » (toujours ouverte)
  example:['Titre de l\'exemple', '<p>Énoncé et corrigé (chiffres du cours).</p>'],   // « Worked example »
  trap:'Le piège classique de l\'examen.',                              // « Exam trap »
  tryit:{q:'Question ?', o:['a','b','c'], a:1, e:'Correction.'}})}     // « Your turn » : QCM (o, a), nombre (answer, unit, tol) ou texte (accept:[…]) ; un tableau = plusieurs questions
```

- `id` unique dans la matière (préfixe = topic : `c3-mr`) ; le moteur lit les notions dans le HTML des fiches (attribut `data-notion`) et refuse un doublon.
- Boutons **« ✓ Got it / ↻ To review »** sous chaque notion : `st.notions[id]`. L'onglet Progress affiche « Notions understood » par topic et la liste des notions à revoir (lien direct vers la notion).
- `LAYER(kind, html, titre?)` : une couche isolée (`'understand'`, `'example'`, `'trap'`) hors `NOTION`. `TRY({...})` : une question « Your turn » isolée.

### 16.2 Glossaire

**Quand l'utiliser** : tout terme du cours qu'un étudiant pourrait ne pas savoir définir (au moins tous les mots en gras des slides).

```js
glossary:[{t:'Price elasticity', d:'%Δq / %Δp: how strongly demand reacts to the price.', topic:'c1', alias:['elasticity']}]
```

- Onglet **Glossary** (`#<slug>-glossary`) : recherche, filtre par topic, lien vers la fiche.
- Dans les fiches et la cheat sheet, la **première occurrence** de chaque terme ou alias est soulignée automatiquement (pas dans les titres, formules, boutons, liens). `auto:false` l'empêche ; `GL('Price elasticity','elasticities')` souligne à la main. Survol, focus clavier ou toucher : la définition s'affiche ; Échap la ferme.
- Un alias tout en majuscules (`MR`, `NE`) est cherché en respectant la casse.

### 16.3 Pas-à-pas : `STEPS`

**Quand l'utiliser** : un calcul ou un raisonnement du cours en plusieurs étapes, à essayer avant de voir l'étape suivante (exemple corrigé « actif »).

```js
${STEPS({title:'Cournot equilibrium', intro:'<p>Énoncé.</p>', steps:['Étape 1','Étape 2','Étape 3']})}
${STEPS({gen:u=>({a:u.int(2,9)}), intro:v=>`…${v.a}…`, steps:v=>[`…`,`…`]})}   // avec « New numbers »
```

### 16.4 Arbre de décision : `TREE`

**Quand l'utiliser** : une méthode de choix enseignée (quel test, quelle procédure, le signe est-il enregistrable…).

```js
${TREE({id:'tr-test', title:'Which test?', intro:'…', start:'q1', nodes:{
  q1:{q:'How many groups?', help:'facultatif', o:[{l:'One', to:'r1', why:'raison affichée en correction'}, {l:'Two', to:'q2', why:'…'}]},
  r1:{end:'One-sample t-test', why:'justification de la conclusion'}, …},
  cases:[{text:'Énoncé d\'un cas', path:{q1:1, q2:0}, why:'commentaire final'}],   // entraînement
  gen:u=>({text:'…', path:{…}})})}                                                 // ou cas générés
```

Trois modes : **Explore** (chemin affiché, chaque étape cliquable pour revenir, ← Back), **Practice on a case** (l'étudiant choisit chaque branche, correction immédiate, la bonne branche est suivie ; score « branches right first time » ; un cas sans erreur = réussi), **Whole tree** (carte complète). Le moteur vérifie que chaque `to` existe.

### 16.5 Jeux : `GAME` et `PLAY`

**Quand l'utiliser** : théorie des jeux. `GAME` pour trouver soi-même meilleures réponses, équilibres de Nash et stratégies dominantes ; `PLAY` pour jouer un jeu répété contre l'ordinateur.

```js
${GAME({id:'gm-pd', title:'…', rl:'Firm 1', cl:'Firm 2', rows:['High','Low'], cols:['High','Low'], m:[[[5,5],[1,8]],[[8,1],[2,2]]], tasks:['br','ne','dom']})}
${GAME({id:'gm-gen', rl:'Player 1', cl:'Player 2', gen:{sizes:[[2,2],[3,3]], max:9}})}     // matrices générées (gains distincts : pas d'égalité)
${PLAY({id:'pl-pd', title:'…', rows:['Cooperate','Defect'], m:[[[3,3],[0,5]],[[5,0],[1,1]]], rounds:[1,5,10,'?'], delta:0.8,
  strategies:['allc','alld','tft','grim','tf2t','random'], notes:o=>'commentaire de fin (o.strat, o.rounds, o.h)'})}
```

- `m[i][j] = [gain ligne, gain colonne]`. Correction : meilleures réponses (gains cliqués, vert / rouge / manqué en pointillé), équilibres (cases), dominantes (menus). « Solution » détaille chaque meilleure réponse. `Rev.W.solveGame(m)` et `Rev.W.gameSolution(m, rows, cols, rl, cl)` sont réutilisables dans les corrigés.
- `MATRIX({id, name?, desc?, pl:[joueur ligne, joueur colonne], r, c, p, min?, compact?, gen?})` (`compact`, `gen` : section 16.15) : le labo de matrice **au format du site midterm** (noms des joueurs sur les deux axes, joueur ligne à la verticale). L'étudiant clique les cases qu'il croit être des équilibres de Nash puis « Check my Nash equilibria » (vert = juste ou manqué, rouge = faux, explication des meilleures réponses) ; « Show best responses » souligne les meilleures réponses (couleur par joueur) ; « Clear » ; questions « Answer like the exam » (stratégies dominantes, équilibre en dominantes, Nash, solution attendue, équilibre séquentiel) révélées une par une ; pour une matrice ≤ 3 × 3, version séquentielle (arbre, « Reveal backward induction »). `min:true` = plus petit est meilleur. Dans un onglet `lab` : `kind:'matrix'` (fait après un check juste). Le format des jeux du site midterm (`GAMES`) se passe tel quel.
- `GAME` options (v3) : `edit:true` ajoute « Edit the payoffs » (l'étudiant tape sa propre matrice, toutes les tâches sont corrigées dessus) ; `seq:true` (ou `'seq'` dans `tasks`) ajoute la tâche « 4 · Sequential game » : le joueur ligne joue en premier, l'étudiant clique la case atteinte par l'équilibre parfait en sous-jeux ; arbre dessiné, puis branches choisies en gras après correction ; « Solution » ajoute l'arbre et l'induction à rebours pas à pas. Réutilisables : `Rev.W.seqSolve(m, lower)`, `Rev.W.seqTreeSVG(m, rows, cols, rl, cl, lower, show)`, `Rev.W.seqSteps(...)`.
- `PLAY` (v3) : l'historique affiche les totaux cumulés ; en fin de partie, un encadré « Why this result » explique le résultat (stratégie dominante de la partie unique, fin connue → détricotage, fin inconnue → donnant-donnant) et commente la stratégie de l'ordinateur. `names:{allc:'…'}` renomme une stratégie.
- `PLAY` : action 0 = coopérer, 1 = trahir ; stratégie de l'ordinateur au choix ou « Mystery » ; `'?'` = fin inconnue (probabilité `delta` de continuer). En fin de partie : comparaison avec « always cooperate », « always defect », « tit-for-tat » sur le même nombre de tours. `higher:false` si les gains sont des coûts (années de prison).

### 16.6 Graphiques : `PLOT`, `FIG`, `svgPlot`

**Quand l'utiliser** : tout schéma ou modèle du cours. `FIG` pour un schéma fixe, `PLOT` dès qu'un paramètre peut bouger (équilibre, surplus, perte sèche, points clés recalculés en direct).

```js
${PLOT({title:'Monopoly', params:[{k:'a', label:'Demand intercept a', min:50, max:150, step:5, v:100, fmt?:x=>…}],
  x:{max:60, label:'q'}, y:p=>({max:p.a*1.1, label:'p'}), random?:true,
  draw:(p,R)=>({curves:[{f:x=>p.a-2*x, c:'--debit', l:'D', from?, to?, dash?}], areas:[{pts:[[0,10],[0,40],[15,40]], c:'--ok', l:'CS'}],
    lines:[{x1,y1,x2,y2,c,dash,l}], marks:[{x, y, lx:'q*', ly:'p*'}], points:[{x, y, l:'E', c, left?}], dots:[[x, y, '--debit']], vx:[{x, l, c, dash}]}),
  readout:p=>T(['','Value'],[…],[1]), legend:'texte sous le graphique'})}
${FIG({xmax:60, ymax:120, xl:'q', yl:'p', curves:[…], …}, 'Légende')}        // graphique statique
```

`presets:[{l:'Libellé', v:{k:valeur} | p=>({k:valeur})}]` ajoute des boutons qui placent les curseurs sur une situation nommée (optimum social, équilibre de Nash, « un tour »…). `xticks:false` (dans la spec ou le retour de `draw`) supprime la grille verticale et les nombres de l'axe x : diagramme en barres dont les abscisses n'ont pas de sens (postes d'une ligne). `R` = tirages aléatoires fixes (`R.z` normales, `R.u` uniformes, 200 de chaque) : le nuage ne change pas quand on bouge un curseur ; `random:true` ajoute « New sample ». Couleurs : uniquement `'--debit'`, `'--credit'`, `'--ledger'`, `'--ok'`, `'--bad'`, `'--warn'`, `'--muted'`, `'--ink'`.

### 16.7 Générateur d'exercices : `GEN` (et module `lab`)

**Quand l'utiliser** : **chaque méthode de calcul ou de raisonnement** du cours. Un générateur = une méthode.

```js
{kind:'gen', id:'g-cournot', topic:'c3', title:'Cournot duopoly', blurb:'ligne de la carte',
 levels:['Basic','Exam','Hard'],                       // facultatif ; gen reçoit l'indice du niveau
 gen:(u,lv)=>({a:…, c:…}), valid?:v=>true,             // valid : retirage tant que faux (200 essais max)
 q:v=>`Énoncé avec ${v.a}…`,
 parts:[{label:'q1*', answer:v=>…, unit:'units', tol:0.01, tolPct?}, {label:'Who wins?', type:'choice', o:v=>[…], a:v=>0}, {label:'…', type:'text', accept:v=>[…]}],
 steps:v=>['Étape 1 du corrigé', 'Étape 2', …], hint?:v=>'…'}
```

- Boutons : Check, « Solution step by step » (une étape par clic), « Whole solution », « New exercise » (illimité). Seul le **premier** Check d'un exercice compte ; ouvrir la solution avant de répondre compte comme raté. Score « x/n right · streak » ; un générateur est **maîtrisé** après 3 bonnes réponses.
- Placement : dans un onglet `lab` (`modules:[{use:'lab', tab:'generators', label:'Generators', data:{intro, items:[…]}}]`), ou dans une fiche avec `GEN({...})`. Le même module sert pour un onglet d'outils : `{use:'lab', tab:'tools', label:'Tools', data:{items:[{kind:'tree'|'game'|'play'|'plot'|'steps'|'dialog', id, topic, title, blurb, …config}]}}`. Index filtrable par topic, une page par item (`#<slug>-<tab>-<id>`), progression par topic (générateur maîtrisé, cas d'arbre sans erreur, 2 checks justes à un jeu, une partie jouée, dialogue ≥ 80 %, graphiques non comptés).
- Test obligatoire (section 13) : pour chaque générateur, des milliers de tirages par niveau : réponses finies, `valid` respecté, et au moins 5 exercices recalculés à la main.

### 16.8 Tri dans des catégories : type d'exercice `sort`

**Quand l'utiliser** : classer des exemples dans les concepts du cours (formes de marché, types de marques, phases du cycle de vie…). C'est un type d'exercice : il marche dans Exercises, dans un `case` et dans les mocks (correction différée, impression).

```js
{id:'x-c1-sort', topic:'c1', type:'sort', title:'…', q:'Put each market in its form.', cats:['Monopoly','Oligopoly'],
 items:[['Electricity grid','Monopoly','natural monopoly: one network'], ['Mobile operators','Oligopoly']], pick:8}   // pick : tirage de n cartes parmi les items
```

Glisser une carte dans une boîte (souris ou doigt), ou toucher une carte puis le nom de la boîte (clavier : Tab, Entrée). Correction carte par carte, avec la raison (`why`) des cartes mal placées. La remise dans l'ordre (`order`) a aussi gagné le glisser-déposer (poignée ⠿), en plus de ↑ ↓.

### 16.9 Dialogue à embranchements : `DIALOG`

**Quand l'utiliser** : jeux de rôle (vente, oral de langue) où chaque réplique se commente.

```js
${DIALOG({id:'dl-avril', title:'…', intro:'…', who:'Pharmacist', start:'a', nodes:{
  a:{say:'Réplique du client', o:[{t:'Ta réponse', to:'b', q:2, fb:'Commentaire selon la méthode du cours'}, {t:'…', to:'c', q:0, fb:'…'}]},
  z:{say:'Dernière réplique', end:true, verdict:'Bilan'}}})}
```

`q` = qualité (2 bonne, 1 acceptable, 0 mauvaise) ; score = points obtenus / 2 par réplique ; meilleur score enregistré.

### 16.10 Exercice dans une fiche : `EXI`

`EXI({id:'w-…', type:'sort'|'order'|'match'|…, …})` place un exercice de n'importe quel type dans une fiche (résultat dans `st.w`, pas dans l'onglet Exercises).

### 16.11 Convertir une fiche existante : `LAYERED`

**Quand l'utiliser** : une fiche classique déjà juste (sections `<h3>`) à passer en couches sans rien réécrire ni perdre.

```js
SHEETS.s2=LAYERED(SHEETS.s2,[
  {id:'s2-cvp', ess:'<p>3 à 5 lignes.</p>', extra:FIG({...}), tryit:{q:'…', answer:505, tol:0}},   // section 1
  {id:'s2-formulas', ess:'…', understand:'…si la section est vide…'},                         // section 2
  {keep:true}]);                                                                              // section laissée telle quelle
```

Pour chaque section : les `EX(...)` vont dans la couche « Worked example », les `TRAP(...)` dans « Exam trap », le reste dans « Understand ». À appeler **avant** `registerSubject` (les topics lisent `SHEETS`).

### 16.12 Générateur à tableau à remplir : `table`

**Quand l'utiliser** : l'examen fait remplir un tableau (répartition des charges, fiche de stock, chaîne du full costing).

```js
{kind:'gen', id:'g-s3-wac', …, parts:[{label:'WAC', answer:v=>…}, …],
 table:v=>({head:['','Quantity','€ per unit','Total €'], rows:[['Opening', '1 000', '4.22', '4 220'], ['Out', '4 000', {p:0}, {p:1}]]})}
```

Une cellule `{p:i}` est la case de la partie `i` (sa réponse, sa tolérance). Les parties absentes du tableau s'affichent dessous.

### 16.13 Sortie annotée : `ANNOT`

**Quand l'utiliser** : un tableau de résultats (sortie SPSS, compte de résultat) dont chaque chiffre doit être compris.

```js
ANNOT({id:'an-…', title:'…', gen?:u=>v, html:v=>'<table>… <td data-note="R2">.581</td> …', notes:v=>({R2:{t:'R²', d:'58.1% of the variation…'}})})
```

Modes : « Explore » (clic ou Entrée sur un chiffre : son sens), « Test yourself » (un chiffre surligné, son sens à choisir parmi quatre, score enregistré), « All notes ». Dans un onglet `lab` : `kind:'annot'` (fait après 5 bonnes réponses).

### 16.14 Schémas en HTML (v3)

Classes CSS de `style.css` pour dessiner un modèle du cours sans SVG, lisibles en sombre et à 390 px : `ol.dg-flow` (étapes reliées par des flèches, verticales sur téléphone ; `li.dg-b` = seconde phase), `table.dg-mx` (matrice à deux axes), `.dg-rings` / `.dg-ring` imbriqués (niveaux de produit, environnement), `.dg-diamond` (losange de Kapferer : `.dg-d1`…`.dg-d4`, centre `.dg-dc`), `.dg-wheel` (outils autour d'un moyeu `.dg-hub`, `.dg-s0`…`.dg-s4`). Exemples d'aides : `FLOW`, `MX`, `RINGS` dans `tools/marketing-v3/mm-v3-a.js`. Un `<span>` de description doit être enfant direct du bloc (`>span`), pour ne pas casser les termes du glossaire.

### 16.15 Format « workbook » du site midterm (`.wb`) et matrices au même format

**Quand l'utiliser** : pour reproduire la mise en page d'un site midterm (chapitre 2 de Market Structures : points 2.1 à 2.3). La structure et la mise en forme sont celles du modèle ; les couleurs, polices et le mode sombre restent ceux du site.

- Conteneur `<div class="wb">…</div>` dans `extra` d'une `NOTION` (la notion garde son id, son « Your turn » et ses boutons Got it / To review ; pas de couches Understand / Example / Trap). Titre numéroté : `title:'<span class="secnum">2.1.1</span>The prisoner’s dilemma'` (numéro en avant, fiche plus grande).
- Blocs (classes du modèle) : `.def > b.term + p` (carte de définition), `.key > .eyebrow + p` (encadré clé : sur-titre + méthode ou idée centrale), `.grid2 > .card > h4 + ul` (cartes côte à côte), `.prose` / `p.prose` (raisonnement sur les tableaux des slides), `.note`, `.trap > .eyebrow + p`, `.src`, `.dgcap`, `h4.wb-h3` (intertitre de section : jamais `h3`, réservé aux notions).
- Matrices dans le texte : `MATRIX({…, compact:true})` (matrice seule avec Check / Show best responses / Clear, comme le site midterm) ; `MATRIX({…})` complet dans l'onglet Labs (questions « Answer like the exam », version séquentielle) ; `MATRIX({gen:true})` = labo aléatoire du site midterm (« New random 2×2 / 4×4 » ; `gen:{sizes:[2,3,4]}` pour choisir les tailles) ; `edit:true` ajoute « Edit the payoffs » (l'étudiant saisit sa matrice, plus grand = meilleur ; vérification, questions et arbre portent ensuite sur elle). Dans Market Structures, tous les labs de matrices utilisent `MATRIX` (plus aucun `GAME`). Les données `GAMES` du site midterm (`name, desc, pl, r, c, p, min`) se passent telles quelles.
- Énoncés d'exercices, générateurs et mocks : `Rev.W.pmTable(m, rows, cols, rowPlayer, colPlayer)` donne la même matrice en HTML statique (aucune solution affichée).
- Dans Market Structures, le HTML du modèle est repris mot pour mot depuis `tools/market-structures-v3/model-c2.html` (lignes 495–578 de `MIDTERM S3/MSP Revision.html`) par `msp-assemble.js` ; les blocs propres au site viennent ensuite, dans le même format (`msp-v3-wb.js`).

## 17. Pages communes à toutes les matières et version mono-fichier

`assets/hub.js` (chargé **après** les matières dans `index.html`) ajoute deux pages de site, visibles dans les onglets de l'accueil :

- **`#search`** (`#search-<mots>` pour un lien direct) : recherche dans les dix matières (titres des fiches, notions, glossaire avec alias, quiz, flashcards, exercices, générateurs et outils, mocks), sans tenir compte des accents ni des majuscules ; filtres par type ; un résultat « Notion » ouvre la fiche à la bonne notion (`data-goto-notion`). L'index est construit au premier usage à partir de `Rev.subjects()` : une nouvelle matière ou notion y apparaît sans rien déclarer.
- **`#mixed`** : révision mixte. Questions de quiz tirées au hasard dans les matières choisies (QCM à une réponse ; chaque réponse est enregistrée dans `st.quiz` de la matière, comme dans son onglet Quiz), liste de toutes les notions « à revoir », et six générateurs au hasard.

**Version mono-fichier** : `node tools/build-single.js` (depuis le dossier du projet) écrit `Revision S3.html` à côté de `site/` : CSS et tous les scripts de `index.html` intégrés (les polices restent chargées depuis Google Fonts). **À relancer après chaque modification du site.** La progression est enregistrée par le navigateur selon l'adresse du fichier : le site et le fichier unique ont donc des progressions séparées (utiliser l'export / import de la page Progress pour passer de l'un à l'autre).
