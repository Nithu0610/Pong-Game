# 🎮 Pong Game - Portfolio Project

Un jeu Pong classique avec un design moderne et attrayant. Créé avec **HTML5 Canvas**, **CSS3** et **JavaScript vanilla** pour démontrer vos compétences en développement frontend.

## ✨ Caractéristiques

- 🎯 **Gameplay complet**: Mécaniques de Pong classiques avec physique de balle améliorée
- 🤖 **Mode IA intelligente**: Affrontez un robot avec 4 niveaux de difficulté (Easy, Medium, Hard, Insane)
- 👥 **Mode 2 joueurs local**: Parfait pour amis et famille
- 🎨 **Design moderne**: Interface avec gradient, effets néon et animations fluides
- ⌨️ **Contrôles intuitifs**: 
  - **Joueur 1**: Touches `W` et `S` pour déplacer la raquette
  - **Joueur 2**: Flèches haut `↑` et bas `↓` (mode 1v1 seulement)
  - **Démarrer**: Touche `Space` ou bouton "Start Game"
- 📱 **Responsive**: Fonctionne sur desktop et appareils mobiles
- 🏆 **Système de points**: Premier à 11 points remporte la partie
- 🔊 **Visuels attrayants**: Effets lumineux, animations et transitions intégrées

## 🚀 Fonctionnalités du Jeu

### Jouabilité
- Mode 2 joueurs (local multiplayer)
- **Mode IA Robot** avec 4 niveaux de difficulté
- Détection de collision précise
- Accélération progressive de la balle
- "Spin" de balle selon le point d'impact sur la raquette
- Rebond automatique sur les murs
- Points gagnés quand la balle sort de l'écran

### Technologie
- **Canvas API**: Rendu graphique haute performance
- **Event Listeners**: Gestion fluide des entrées clavier
- **RequestAnimationFrame**: Animation 60 FPS fluide
- **CSS Gradients & Animations**: Design impressionnant
- **IA Adaptative**: Algorithme de prédiction de trajectoire

## 🤖 Système IA Intelligent

L'IA robot s'adapte à votre niveau avec 4 difficultés:

### Difficultés Disponibles

| Niveau | Vitesse | Précision | À Utiliser Pour |
|--------|---------|-----------|-----------------|
| 🟢 Easy | Lente | Mauvaise | Apprendre à jouer |
| 🟡 Medium (Défaut) | Normale | Bonne | Joueur moyen |
| 🔴 Hard | Rapide | Très bonne | Joueur expérimenté |
| ⚫ Insane | Très rapide | Parfaite | Défi extrême |

### Comment L'IA Fonctionne
1. **Détecte** si la balle se dirige vers elle
2. **Calcule** le point d'impact en prédisant la trajectoire
3. **Gère les rebonds** multiples du mur
4. **Ajoute des erreurs intentionnelles** selon la difficulté
5. **Se déplace** précisément pour bloquer

Voir [PORTFOLIO.md](PORTFOLIO.md) pour plus de détails techniques!


## 📋 Structure du Projet

```
pong-game/
├── index.html          # Structure HTML5
├── styles.css          # Mise en page et design responsif
├── script.js           # Logique du jeu Pong + IA Robot
├── logo.svg            # Logo animé
├── logo-icon.svg       # Icon du logo
├── README.md           # Documentation générale
├── PORTFOLIO.md        # Documentation technique complète
├── GAME_GUIDE.md       # Guide pour joueurs
├── TECHNICAL_SUMMARY.md # Résumé technique pour entretiens
├── ASSETS.md           # Guide design et palette
└── DEPLOYMENT.md       # Instructions déploiement
```

## 📚 Documentation Disponible

Selon vos besoins, consultez:

- **[PORTFOLIO.md](PORTFOLIO.md)** 📖 - Documentation technique complète (stack, architecture, concepts avancés, IA)
- **[GAME_GUIDE.md](GAME_GUIDE.md)** 🎮 - Guide complet pour joueurs (règles, stratégies, tips)
- **[TECHNICAL_SUMMARY.md](TECHNICAL_SUMMARY.md)** ⚡ - Résumé technique pour entretiens (à imprimer!)
- **[ASSETS.md](ASSETS.md)** 🎨 - Guide design et palette colorimétriques
- **[DEPLOYMENT.md](DEPLOYMENT.md)** 🚀 - Comment déployer sur GitHub Pages/Netlify


### Méthode 1: Fichier Local
1. Téléchargez les fichiers du projet
2. Placez-les dans un dossier
3. Ouvrez `index.html` dans votre navigateur

### Méthode 2: Serveur Local (Recommandé)
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec VS Code Live Server
# Clic droit sur index.html → "Open with Live Server"
```

Puis accédez à `http://localhost:8000` dans votre navigateur.

## 🎮 Comment Jouer

### Mode 1v1 Local (Deux Joueurs)
1. **Sélectionner** "1v1 Local"
2. **Cliquez** sur "Start Game" ou appuyez sur **Space**
3. **Joueur 1** contrôle sa raquette avec `W` (haut) et `S` (bas)
4. **Joueur 2** contrôle sa raquette avec `↑` (haut) et `↓` (bas)
5. La balle rebondit automatiquement sur les raquettes et les murs
6. Gagnez un point chaque fois que votre adversaire ne peut pas renvoyer la balle
7. **Premier à 11 points gagne la partie!**

### Mode vs AI Robot (1 Joueur + Ordinateur)
1. **Sélectionner** "vs AI Robot"
2. **Choisir** niveau de difficulté (Easy/Medium/Hard/Insane)
3. **Cliquer** sur "Start Game" ou appuyer **Space**
4. **Joueur 1** contrôle sa raquette avec `W` (haut) et `S` (bas)
5. **L'IA se contrôle automatiquement** (côté droit)
6. Battez l'IA pour gagner!

### Après un Match
- Cliquez "Reset" pour recommencer
- Changez le mode/difficulté si désiré
- Rejouer!

## 🎨 Éléments de Design

- **Thème Neon**: Gradient cyan et rose sur fond noir
- **Animations fluides**: Entrées avec délai progressif
- **Effets lumineux**: Halos CSS autour des éléments interactifs
- **Typographie moderne**: Gradient de texte pour les éléments clés
- **Responsive**: S'adapte à tous les écrans (desktop, tablette, mobile)

## 🔧 Personnalisation

### Modifier la difficulté
Dans `script.js`, changez ces valeurs:
```javascript
// Vitesse de la raquette (augmentez pour plus facile)
const paddleSpeed = 5;

// Vitesse initiale de la balle
ball.dx = 5;
ball.dy = 5;
```

### Modifier les couleurs
Dans `styles.css`, modifiez les variables CSS:
```css
:root {
    --primary-color: #00d4ff;      /* Couleur principale (cyan) */
    --secondary-color: #ff006e;    /* Couleur secondaire (rose) */
    --dark-bg: #0a0a0a;            /* Fond sombre */
}
```

### Modifier les contrôles
Dans `script.js`, modifiez les mappings de touches dans les Event Listeners.

## 📊 Statistiques du Projet

- **HTML**: ~90 lignes (structure sémantique)
- **CSS**: ~450 lignes (design responsive + animations)
- **JavaScript**: ~350 lignes (logique pure + pas de dépendances)
- **Total**: ~890 lignes de code de haute qualité
- **Dépendances**: Aucune (Vanilla JavaScript)
- **Taille**: ~15 KB (très léger)

## 🎓 Concepts Apprenneurs

Ce projet démontre:

✅ HTML5 sémantique  
✅ CSS3 avancé (gradients, animations, Flexbox)  
✅ Canvas API  
✅ Event handling (clavier)  
✅ RequestAnimationFrame  
✅ Détection de collision  
✅ Gestion d'état de jeu  
✅ Responsive design  
✅ Design moderne (néon/glassmorphism)  
✅ Optimisation de performance  

## 🌐 Browser Support

- ✅ Chrome/Edge (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Conseils pour le Portfolio

Utilisez ce projet pour montrer:

1. **Compétences Frontend**: HTML5, CSS3, JavaScript vanille
2. **Pensée algorithmique**: Physique du jeu, détection de collision
3. **UX/UI Design**: Interface nette et accessible
4. **Responsive Design**: Fonctionne sur tous les appareils
5. **Code Quality**: Code propre, commenté et bien organisé

**Conseil** 💡: Déployez sur GitHub Pages ou Netlify pour un portfolio online impressionnant!

## 🚀 Améliorations Futures Possibles

- [ ] Difficulté progressive (IA pour l'ordinateur)
- [ ] Système de son (audio feedback)
- [ ] Différents niveaux de difficulté
- [ ] Mode solo contre l'ordinateur
- [ ] Leaderboard local (localStorage)
- [ ] Thèmes visuels supplémentaires
- [ ] FullScreen mode
- [ ] Enregistrement de replays

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

---

**Créé avec** ❤️ **pour votre portfolio**

Profitez du jeu et montrez vos compétences! 🎮
