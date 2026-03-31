# 🚀 Guide de Déploiement

## Option 1: GitHub Pages (Gratuit & Professionnel) ⭐

### Étapes:
1. **Créez un repo GitHub** nommé `pong-game` ou similaire
2. **Commettez les fichiers**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Pong game for portfolio"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/pong-game.git
   git push -u origin main
   ```
3. **Allez dans** Settings → Pages
4. **Sélectionnez** "Deploy from a branch" → Main branch
5. **Attendez** 1-2 minutes
6. **Votre jeu sera accessible** à: `https://VOTRE_USERNAME.github.io/pong-game/`

## Option 2: Netlify (Très Simple) ⚡

1. **Connectez-vous** sur [netlify.com](https://netlify.com)
2. **Drag & Drop** le dossier du projet
3. **En 30 secondes**, c'est en ligne avec une URL personnalisée!

## Option 3: Serveur Local (Développement)

### Windows:
```bash
run.bat
```

Ou manuellement:
```bash
python -m http.server 8000
```

### Mac/Linux:
```bash
bash run.sh
```

Ou manuellement:
```bash
python3 -m http.server 8000
```

Puis ouvrez: `http://localhost:8000`

## URL à Partager dans Votre Portfolio

Après déploiement sur GitHub Pages ou Netlify:
- Ajoutez le lien dans votre portfolio
- Mettez le projet dans votre CV
- Partagez sur LinkedIn avec une vidéo du jeu
- Utilisez-le pour impressionner lors des entretiens!

## 📱 Copier-Coller pour CV/Portfolio

```
Pong Game (Portfolio Project)
• Jeu Pong complet avec interface moderne
• Stack: HTML5 Canvas, CSS3, JavaScript Vanilla
• Fonctionnalités: Gameplay 2P, Collision, Scoring, Responsive Design
• Technos démontrées: Canvas API, Event Handling, Game Physics, Responsive UI
🔗 [Voir le projet en ligne](https://VOTRE_URL)
```
