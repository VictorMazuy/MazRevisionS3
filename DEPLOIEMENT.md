# Mettre le site en ligne (GitHub + Netlify, gratuit)

Le site est protégé : chaque personne a son identifiant et son mot de passe.

## 1. Envoyer le dossier sur GitHub (dépôt privé)
1. Crée un compte sur github.com et installe **GitHub Desktop** (desktop.github.com), puis connecte-toi.
2. GitHub Desktop → **File → Add local repository** → choisis le dossier `FINAL S3`.
   S'il propose de « créer un dépôt », accepte (**create a repository**).
3. Clique **Publish repository**. **Coche « Keep this code private »** (dépôt privé). Valide.
4. Le fichier `.gitignore` laisse de côté `sources/`, `MIDTERM S3/`, les PDF/PPTX et les anciens HTML.

## 2. Publier sur Netlify
1. Crée un compte sur netlify.com (le plus simple : « Sign up with GitHub »).
2. **Add new site → Import an existing project → GitHub** ; autorise Netlify, choisis ton dépôt.
3. Ne change rien : le dossier publié (`site`) et la protection sont lus dans `netlify.toml`. Clique **Deploy**.
4. Au bout d'une minute, Netlify donne l'adresse du site (`xxx.netlify.app`).

## 3. Changer les mots de passe
1. Ouvre `netlify/passwords.js` (un éditeur de texte suffit).
2. **Remplace** `change-moi-1` et `change-moi-2` par de vrais mots de passe.
3. **Ajouter quelqu'un** : copie une ligne, change l'identifiant et le mot de passe. **Retirer** : supprime la ligne.
4. Enregistre. Dans GitHub Desktop : écris un petit message, **Commit to main**, puis **Push origin**.
5. Netlify republie tout seul en une minute.

## 4. Tester
1. Ouvre l'adresse du site dans une **fenêtre de navigation privée**.
2. Une fenêtre demande identifiant et mot de passe.
3. Essaie un **mauvais** mot de passe : la fenêtre revient, ou « Accès réservé » s'affiche.
4. Essaie le **bon** : le site s'affiche ; clique sur plusieurs matières.
5. Ferme la fenêtre privée, rouvre-en une : on te redemande le mot de passe.
