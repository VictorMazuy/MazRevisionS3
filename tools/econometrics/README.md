# Générateur des sorties SPSS d'Econometrics

- `stats.js` : petite bibliothèque statistique (MCO, VIF, tests t/Welch/Levene, χ², Fisher, corrélations, ACP + varimax, lois t/F/χ²).
- `build.js` : simule les jeux de données (graines fixes) et produit `eco-data.json` (tableaux HTML + SVG) et `eco-keys.json` (chiffres clés).
- `parts/` : les fragments du fichier matière. `site/subjects/econometrics.js` = concaténation, dans cet ordre, de `00-head.js`, `a0-data.js`, `a1-sheets.js`, `a2-v2-lib.js` (statistiques et tableaux SPSS calculés dans le navigateur, données Regression1 et Regression2 du cours), `a2b-v2-tests.js` (arbre de choix des tests), `a3-v2-sheets.js` (fiches en couches, remplacent celles de a1), `a4-v2-tools.js` (glossaire, générateurs, outils), `b-quiz.js`, `c-exercises.js`, `c2-v2-push.js` (quiz, cartes, tris ajoutés), `d-mocks.js`.
- Reconstruire : `cd parts && cat 00-head.js a0-data.js a1-sheets.js a2-v2-lib.js a2b-v2-tests.js a3-v2-sheets.js a4-v2-tools.js b-quiz.js c-exercises.js c2-v2-push.js d-mocks.js > ../../../site/subjects/econometrics.js`
- Régénérer : `node build.js`, puis reconstruire `parts/a0-data.js` (voir PROGRESS.md) et concaténer. Ne pas changer les graines si les questions des mocks ne sont pas réécrites : les énoncés citent les résultats.
