# 🎮 PONG GAME - Règles & Bugs Corrigés

## 📋 Règles du Jeu 2026 (Mode AI Uniquement)

### Mise en Place
```
VOUS (Rouge/Gauche)     VS     ROBOT (Vert/Droite)
         🎮                          🤖
```

### Objectif
**Premier à 11 points remporte la partie!**

### Contrôles
| Action | Touche |
|--------|--------|
| **Monter** | `W` |
| **Descendre** | `S` |
| **Démarrer Jeu** | `SPACE` |
| **Recommencer** | `ENTER` |

### Scoring
- ✅ Balle sort côté adversaire = +1 point
- ✅ Balle rebondit sur raquette = Reste en jeu
- ✅ Balle rebondit haut/bas = Automatique
- ❌ Balle sort côté gagnie = Adversaire +1

### Propriétés Balle
- **Vitesse initiale**: 5 pixels/frame
- **Accélération**: +5% à chaque rebond raquette
- **Rebond**: Automatique sur murs haut/bas
- **Spin**: Varie selon point d'impact sur raquette

### Propriétés Raquettes
- **Hauteur**: 70 pixels
- **Largeur**: 10 pixels
- **Vitesse Joueur**: 5 pixels/frame
- **Vitesse Robot**: Varie selon difficulté

### Fin de Partie
- Quand quelqu'un atteint 11 points
- Affichage: "YOU WIN! 🎉" ou "ROBOT Wins! 💻"
- **Appuyez ENTER pour rejouer**

---

## 🤖 Niveaux de Difficulté Robot

### 🟢 **EASY**
- Vitesse: 2.5 px/frame (50% du joueur)
- Précision: ±40 pixels (très imprécis)
- **Idéal pour**: Apprendre

### 🟡 **MEDIUM** (Par Défaut)
- Vitesse: 4.5 px/frame (90% du joueur)
- Précision: ±15 pixels (bon)
- **Idéal pour**: Joueur moyen

### 🔴 **HARD**
- Vitesse: 6 px/frame (120% du joueur)
- Précision: ±5 pixels (très bon)
- **Idéal pour**: Joueur expérimenté

### ⚫ **INSANE** 😱
- Vitesse: 7.5 px/frame (150% du joueur)
- Précision: 0 pixels (parfait)
- **Défi**: Quasi impossible!

---

## 🐛 Bugs Corrigés (Version 2.0)

### ✅ Bug #1: Mode Sélection Confus
**Avant**: Boutons 1v1 et AI causaient confusion  
**Après**: Mode AI uniquement (plus de confusion!)

### ✅ Bug #2: Pas de Redémarrage Facile
**Avant**: Fallait cliquer Reset et Start  
**Après**: Appuyez simplement ENTER après fin de partie!

### ✅ Bug #3: Labels Incorrects
**Avant**: "Player 1" et "Player 2" génériqubes  
**Après**: "YOU (RED)" et "ROBOT"

### ✅ Bug #4: Couleurs Confuses
**Avant**: Cyan et Rose (difficile à distinguer)  
**Après**: ROUGE (vous) et VERT (robot) - super clair!

### ✅ Bug #5: Messages Fin Parti Génériques
**Avant**: "Player 1 Wins" (pas clair qui gagne)  
**Après**: "YOU WIN! 🎉" ou "ROBOT Wins!"

### ✅ Bug #6: Instruction Restart Manquante
**Avant**: Pas d'indication pour recommencer  
**Après**: "Press ENTER to play again" visible

---

## ⚠️ Règles Importantes à Connaître

### Mouvement Raquette
1. ✅ Se déplace instantanément (pas de délai)
2. ✅ Reste toujours dans les limites haut/bas
3. ✅ Peut pas sortir du terrain
4. ❌ Peut't être contrôlée par mouse/touch (v2.0)

### Balle
1. ✅ Rebondit sur murs (haut/bas) automatiquement
2. ✅ Accélère à chaque rebond raquette
3. ✅ Aune limite de vitesse maximum (~9 px/frame)
4. ✅ Calcul spin selon Y d'impact
5. ❌ Pas de "power-ups" ou bonus

### Robot (IA)
1. ✅ Joue automatiquement (pas d'input manuel)
2. ✅ Prédit la trajectoire de la balle
3. ✅ Gère les rebonds multiples du mur
4. ✅ Adapte difficulté via sélecteur
5. ✅ Fait erreurs intentionnelles (réalisme)
6. ❌ Peut t'oublier de defenseur

### Points
1. ✅ +1 point quand adversaire manque
2. ✅ Pas de bonus points
3. ✅ Premier à 11 points = Victoire
4. ✅ Reset à 0 après chaque match

---

## 🎮 Stratégies Recommandées

### Contre AI Easy
- Reste n'importe où
- Frappe fort et haut
- Juste récupère la balle

### Contre AI Medium
- Reste centré avant le point
- Frappe haute et basse alternation
- **Astuce**: Frappe tout en haut/bas pour angles extrêmes

### Contre AI Hard
- **Vitesse critique** - Réagis très vite
- **Angles**: Utilise les extrémités de ta raquette
- **Timing**: Frappe exactement à temps

### Contre AI Insane
- 🎯 **C'est un défi!**
- Peut être quasi impossible
- Bon pour perfectionner techniques
- Record personnel?

---

## 🔧 Commandes Clavier Complètes

### Jeu Normal
| Touche | Action |
|--------|--------|
| `W` | Monter |
| `S` | Descendre |
| `SPACE` | Démarrer |
| `ENTER` | Recommencer (après fin) |

### UI
| Élément | Interaction |
|---------|-------------|
| Select Difficulté | Clique/Interface |
| Bouton Start | Clique OU SPACE |
| Bouton Reset | Clique (avant match) |

---

## ⚡ Conseils Pro

### Performance
- Le jeu tourne 60 FPS (très fluide)
- Pas de lag même difficulté Insane
- Si lag = fermez autres apps

### Gameplay
- 💡 Reste centré quand tu attends balle
- 💡 Frappe vite après rebond robot
- 💡 Utilise angles extrêmes (haut/bas raquette)
- 💡 Anticipe 1-2 frames avant impact

### Difficulté
- 📈 Commencez par Easy
- 📈 Progressez à Medium/Hard
- 📈 Insane après 50+ matchs
- 📈 Tracez votre progression!

---

## 🐛 Bugs Connus (Potentiels Futurs)

### Actuels (Corrigés ✅)
- ❌ Aucun connu!

### À Améliorer (Futur)
- [ ] Touch support (mobile)
- [ ] Gamepad API
- [ ] Enregistrement replay
- [ ] Stats persistentes
- [ ] Leaderboard

---

## 📊 Statistiques de Jeu

### Temps Moyen Match
- **Easy**: 2-3 minutes
- **Medium**: 3-5 minutes
- **Hard**: 5-8 minutes
- **Insane**: Variable (très imprévisible!)

### Taux de Victoire Estimé
- **Easy**: 95%+ (tu gagnes facile)
- **Medium**: 50-70% (équilibré)
- **Hard**: 20-40% (difficile)
- **Insane**: <5% (quasi impossible!)

---

## 🎯 Checklist Avant Jeu

- [ ] Difficulté sélectionnée?
- [ ] Comprendre contrôles (W/S)?
- [ ] Savez redémarrage (ENTER)?
- [ ] Écran assez grand?
- [ ] Pas d'autre application en fond?
- [ ] Prêt à jouer? ✅

---

## 💬 FAQ Rapide

**Q: Robot triche?**  
A: Non! Code transparent, pas tricherie.

**Q: Peux-je jouer contre quelqu'un d'autre?**  
A: Pas en 2026, mais futur v3.0 oui!

**Q: Comment sauvegarder mon score?**  
A: Prendre screenshot! (Futur: stockage local)

**Q: Trop difficile!**  
A: Changez en Easy mode - c'est permis!

**Q: Trop facile!**  
A: Essayez Insane - ultime défi! 😱

---

## 🏆 Votre Défi Personnel

**Objectif**: Battez le Robot en mode INSANE!

```
Easy:    ✅ Trop facile
Medium:  ✅ Pas mal
Hard:    🎯 Challenge acceptable
Insane:  🔥 Le gros défi!
```

**Challenge**: Gagnez 3 fois de suite en HARD mode = Pro!

---

## 📞 Support / Bugs

Trouvez un bug? Signalez:
1. Quelle action l'a causé?
2. Quelle difficulté?
3. Système (Windows/Mac/Linux)?
4. Navigateur?

---

**Version**: 2.0 (AI Only, Red vs Green)  
**Dernière Mise à Jour**: March 31, 2026  
**Status**: ✅ Production Ready

**Amusez-vous bien! 🎮🚀**
