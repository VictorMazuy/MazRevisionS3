# Market Structures v3 (24/11/2026)

`site/subjects/market-structures.js` est construit : `node msp-assemble.js` (part de `tools/v2-backup-2411/market-structures.js`, insère les données du site midterm `msp-mid.json` et les fragments `msp-v3-a.js` (avant les fiches) et `msp-v3-b.js` (avant le mélange des options)).

Données : `node extract.js "<dossier du site midterm>/MSP Revision.html" "const $=(s,r=document)" msp-mid.json GAMES TF MCQ OPEN1 OPEN2 CARDS TRAPS`.
Vérification indépendante des labs et des générateurs du chapitre 1 : `msp-verify.js` (pilote CDP `cdp.js` du dossier de test).
