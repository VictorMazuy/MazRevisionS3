# Trademark Law v3 (24/11/2026)

`site/subjects/trademark-law.js` est construit, ne pas l'éditer à la main pour les fiches :

1. `node extract.js "<dossier du site midterm>/Trademark Revision.html" "/* ===================== APP" tm-mid.json CHAPTERS CASES CARDS QUIZ PRACTICE DISTINCTIONS GLOSSARY` (données du site midterm, lecture seule).
2. `node tm-assemble.js` : part de `tools/v2-backup-2411/trademark-law.js`, insère les données midterm et les fragments `tm-v3-sheets.js` (fiches), `tm-v3-data.js` (arrêts, distinctions, cas pratiques, glossaire, quiz et cartes midterm), `tm-v3-mock.js` (mock m3), puis écrit le fichier matière.

Modifier un fragment puis relancer l'étape 2.
