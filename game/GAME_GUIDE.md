# 📖 Guide Complet du Jeu Pong

Guide complet pour joueurs, avec règles, stratégies et conseils.

---

## 🎮 Comment Jouer

### Démarrage Rapide

1. **Ouvrer** `index.html` dans un navigateur
2. **Choisir** mode: "1v1 Local" ou "vs AI Robot"
3. **Si AI**: Sélectionner niveau difficulté
4. **Cliquer** "Start Game" ou appuyer **SPACE**
5. **Jouer et gagner!**

---

## ⌨️ Contrôles

### Joueur 1 (Bleu/Cyan)
- **Monter**: `W`
- **Descendre**: `S`
- **Démarrer Jeu**: `SPACE` ou Bouton
- **Réinitialiser**: Bouton "Reset"

### Joueur 2 (Rose) ou AI Robot
- **Monter**: `↑` (Flèche Haut) - Mode 1v1 seulement
- **Descendre**: `↓` (Flèche Bas) - Mode 1v1 seulement
- **Mode AI**: L'ordinateur se contrôle automatiquement

---

## 🏆 Règles du Jeu

### Scoring
| Situation | Résultat |
|-----------|----------|
| Balle sort côté adversaire | +1 point |
| Balle rebondit sur raquette | Reste en jeu |
| Balle sort haut/bas | Rebond automatique |

### Victoire
- **Premier à 11 points** remporte le match
- Affichage du gagnant sur l'écran
- Option de recommencer

### Terrain
- **Largeur**: 800 pixels
- **Hauteur**: 400 pixels
- **Ligne centrale**: Décorative (pas de collision)
- **Pas de zones mortes**: Tout est jouable

---

## 🎯 Physique & Mécanique

### Balle
- **Rebond automatique** sur:
  - Mur haut (0px)
  - Mur bas (400px)
- **Pas de rebond** sur:
  - Côté gauche (perte de point)
  - Côté droit (perte de point)

### Raquettes
- **Hauteur**: 70 pixels
- **Largeur**: 10 pixels
- **Mouvement**: Instantané (pas d'inertie)
- **Limites**: Restent dans les limites haut/bas

### Vitesse Balle
- **Initiale**: 5 pixels/frame
- **Accélération**: +5% à chaque rebond raquette
- **Max théorique**: ~9 pixels/frame
- **Réinitialise**: À chaque point marqué

### Spin (Angle)
La position d'impact sur la raquette affecte l'angle:
- **Haut raquette**: Balle monte fort
- **Centre raquette**: Balle droit
- **Bas raquette**: Balle descend fort

---

## 🤖 Modes de Jeu

### Mode 1v1 Local (Joueur vs Joueur)
- Parfait pour amis/famille
- Pas d'IA, contrôle = W/S vs Flèches
- Accessible à tous les niveaux

### Mode vs AI Robot
Affrontez l'ordinateur sur 4 niveaux:

#### 🟢 Easy
- **Difficulté**: Très facile
- **Vitesse IA**: Lente (2.5 px/frame)
- **Erreurs**: Beaucoup (+40px)
- **Idéal pour**: Apprendre à jouer

#### 🟡 Medium (Défaut)
- **Difficulté**: Équilibrée
- **Vitesse IA**: Normale (4.5 px/frame)
- **Erreurs**: Modérées (+15px)
- **Idéal pour**: Joueur moyen

#### 🔴 Hard
- **Difficulté**: Difficile
- **Vitesse IA**: Rapide (6 px/frame)
- **Erreurs**: Minimes (+5px)
- **Idéal pour**: Joueur expert

#### ⚫ Insane
- **Difficulté**: Extrême (quasi impossible)
- **Vitesse IA**: Très rapide (7.5 px/frame)
- **Erreurs**: Aucune (parfait)
- **Idéal pour**: Défi personnel

---

## 💡 Stratégies & Tips

### Pour Gagner Contre L'IA

#### Niveau Easy/Medium
1. **Utiliser les angles**: Frapper bas/haut de votre raquette
2. **Accélération**: Plus le jeu dure, plus c'est rapide
3. **Patience**: Laissez l'IA faire des erreurs
4. **Positions**: Restez centré quand possible

#### Niveau Hard/Insane
1. **Vitesse vs Technique**: L'IA est rapide mais prévisible
2. **Placements extrêmes**: Balle tout haut/bas
3. **Changements d'angle**: Dérouter les calculs IA
4. **Fatigue mentale**: Jouez court avec pauses

### Pro Tips
- 🎯 **Centrez votre raquette** avant chaque point
- ⚡ **Réagissez vite** mais restez contrôlé
- 📍 **Observez la trajectoire** 1-2 frames avant impact
- 🔄 **Altérez les angles** pour gagner des points
- 💪 **Restez concentré** dans les ralentis

---

## 🎮 Conseils d'Expérience

### Progression Recommandée
1. **Jour 1**: Mode Easy (apprendre les contrôles)
2. **Jour 2**: Mode Medium (technique de base)
3. **Jour 3-5**: Mode Hard (maîtrise avancée)
4. **Challenge**: Mode Insane (~30min max streak?)

### Challenges Personnels
- Gagner 5 points d'affilée sans faute
- Battre "Hard" IA 3 fois de suite
- Durée record d'un match
- Score le plus élevé possible

---

## 🐛 Dépannage

### Le jeu se gèle/ralentit?
- Rafraîchir la page (F5 ou Ctrl+R)
- Fermer autres onglets/applications
- Vérifier connexion internet

### Les contrôles ne répondent pas?
- Cliquer sur le canvas pour focus
- Vérifier que les touches correspondent
- Essayer shift+F5 (hard refresh)

### L'IA semble buggée?
- Changer de difficulté
- Réinitialiser le match
- Signaler sur GitHub (si open source)

### Problèmes graphiques?
- Vérifier taille écran (résolution)
- Mettre à jour navigateur
- Tester sur navigateur différent

---

## 📊 Statistiques & Records

### Votre Record Personnel
**Votre meilleur score**: _ / 11 points  
**Niveau atteint**: _______________  
**Durée record du match**: _______________  
**Victoires consecutives**: _______________  

*(À compléter au fur et à mesure!)*

---

## 🎨 Personnalisation

### Changer les Couleurs
Éditez `styles.css`:
```css
:root {
    --primary-color: #00d4ff;      /* Couleur Joueur 1 */
    --secondary-color: #ff006e;    /* Couleur Joueur 2 */
}
```

### Augmenter la Difficulté
Éditez `script.js`:
```javascript
const paddleSpeed = 5;  // Diminuez pour ralentir
ball.dx = 5;            // Augmentez pour aller plus vite
```

### Changer le Score Gagnant
Dans `script.js` cherchez:
```javascript
if (paddle1.score >= 11)  // Changez 11 en X points
```

---

## ❓ FAQ

**Q: Puis-je jouer sur mobile?**  
A: Avec clavier virtuel seulement. Touch controls à venir.

**Q: Y a-t-il une limite de temps?**  
A: Non, jouez aussi longtemps que vous voulez.

**Q: Puis-je jouer réseau?**  
A: Pas pour l'instant. Multijoueur en ligne planifié.

**Q: L'IA triche-t-elle?**  
A: Non! Elle suit des règles mathématiques comme vous.

**Q: Puis-je enregistrer mes stats?**  
A: Stats locales oui (localStorage), cloud non.

**Q: Peut-on modifier les règles?**  
A: Oui, le code est modifiable! (voir section Personnalisation)

---

## 🎬 Options & Paramètres

### Difficultés IA Disponibles
- ✅ Easy
- ✅ Medium (Recommandé)
- ✅ Hard
- ✅ Insane

### Modes de Jeu Disponibles
- ✅ 1v1 Local (2 joueurs)
- ✅ vs AI Robot (1 joueur + AI)

### Fonctionnalités Futures
- 🔲 Difficultés custom
- 🔲 Thèmes alternatifs
- 🔲 Enregistrement de stats
- 🔲 Mode réseau

---

## 📺 Ressources

- 📖 [Portfolio du Créateur](#)
- 💻 [Code Source GitHub](#)
- 🎨 [Design Assets](ASSETS.md)
- ⚙️ [Documentation Technique](PORTFOLIO.md)

---

**Amusez-vous bien et devenez maître du Pong!** 🎮🏆

*Dernière mise à jour: Mars 2026*
