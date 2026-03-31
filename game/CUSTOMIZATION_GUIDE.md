# 🛠️ Customization & Development Guide

Guide pour modifier, étendre et améliorer le jeu Pong.

---

## 🎨 Design Customization

### Changer les Couleurs

#### Méthode 1: Variables CSS (Recommandée)

Éditez [styles.css](styles.css) ligne ~10:

```css
:root {
    --primary-color: #00d4ff;      /* Joueur 1 - Changez ici */
    --secondary-color: #ff006e;    /* Joueur 2 - Changez ici */
    --dark-bg: #0a0a0a;            /* Fond noir */
    --lighter-bg: #1a1a2e;         /* Fond gris */
    --accent-dark: #2a2a2a;        /* Gris accent */
    --text-light: #ffffff;         /* Texte blanc */
    --neon-glow: 0 0 20px rgba(0, 212, 255, 0.5);
}
```

**Exemples de palettes**:

Palette Purple:
```css
--primary-color: #7c3aed;   /* Purple */
--secondary-color: #ec4899;  /* Pink */
```

Palette Green (Dark Mode):
```css
--primary-color: #10b981;   /* Green */
--secondary-color: #06b6d4;  /* Cyan */
```

Palette Orange:
```css
--primary-color: #f97316;   /* Orange */
--secondary-color: #fbbf24;  /* Amber */
```

#### Méthode 2: Modifier les Logos

Éditez [logo.svg](logo.svg) et [logo-icon.svg](logo-icon.svg):

1. Trouvez `#00d4ff` (cyan) → remplacez par votre couleur
2. Trouvez `#ff006e` (rose) → remplacez par votre couleur

---

### Changer les Polices

Éditez [styles.css](styles.css) ligne ~13:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Changez 'Segoe UI' par votre police préférée */
}
```

Polices Google Fonts recommandées:

```css
/* Futuriste */
font-family: 'Orbitron', monospace;

/* Moderne */
font-family: 'Space Mono', monospace;

/* Joueur */
font-family: 'Press Start 2P', monospace;

/* Professionnel */
font-family: 'Roboto Mono', monospace;
```

Pour utiliser Google Fonts, additionnez dans `<head>` du HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
```

---

### Ajouter des Effets CSS

#### Ombres Personnalisées

```css
/* Glow Rose (remplace cyan) */
box-shadow: 0 0 20px rgba(255, 0, 110, 0.5),
            0 0 40px rgba(255, 0, 110, 0.3);

/* Double Glow */
box-shadow: 0 0 10px rgba(0, 212, 255, 0.3),
            0 0 20px rgba(255, 0, 110, 0.3),
            0 0 40px rgba(0, 212, 255, 0.1);

/* Ombre Classique */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
```

#### Animations Personnalisées

Ajoutez dans `<style>`:

```css
@keyframes customAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.my-element {
    animation: customAnimation 2s infinite;
}
```

---

## ⚙️ Gameplay Customization

### Modifier le Score Gagnant

Éditez [script.js](script.js) ligne ~220:

**Avant**:
```javascript
if (paddle1.score >= 11) {
    endGame('Player 1 Wins! 🎉');
}
```

**Après** (pour 21 points):
```javascript
if (paddle1.score >= 21) {
    endGame('Player 1 Wins! 🎉');
}
```

### Augmenter la Vitesse

Éditez [script.js](script.js) ligne ~20-25:

**Vitesse raquette** (plus = plus rapide):
```javascript
const paddleSpeed = 5;  // Défaut
// Augmentez à 7-8 pour raquettes plus rapides
```

**Vitesse balle** (initiale):
```javascript
ball.dx = 5;  // Vitesse horizontale
ball.dy = 5;  // Vitesse verticale
// Augmentez à 7 pour balle plus rapide
```

**Accélération**:
```javascript
// Dans checkCollisions(), cherchez:
ball.dx = Math.abs(ball.dx) * 1.05;
// Changez 1.05 en 1.10 pour accélération plus rapide
```

### Modifier la Hauteur de la Raquette

Éditez [script.js](script.js) ligne ~18:

```javascript
const paddleHeight = 70;  // Défaut
// Augmentez à 100 pour raquettes plus grandes
// Diminuez à 50 pour raquettes plus petites
```

### Modifier la Taille de la Balle

Éditez [script.js](script.js) ligne ~24:

```javascript
const ballSize = 7;  // Défaut
// Augmentez à 10 pour balle plus grande
// Diminuez à 5 pour balle plus petite
```

### Modifier les Dimensions du Canvas

Éditez [index.html](index.html):

```html
<canvas id="gameCanvas" width="800" height="400"></canvas>
<!-- Changez 800 (largeur) et 400 (hauteur) -->
<!-- Par exemple: width="1024" height="600" -->
```

**Importante**: Mettez à jour aussi dans [script.js](script.js) les positions initiales!

---

## 🤖 Customizer l'IA

### Ajuster les Paramètres de Difficulté

Éditez [script.js](script.js) ligne ~330 (fonction `updateAIPaddle`):

```javascript
switch(aiDifficulty) {
    case 'easy':
        aiSpeed = 2.5;        // Vitesse IA
        errorMargin = 40;     // Erreur (±40px)
        break;
    case 'medium':
        aiSpeed = paddleSpeed * 0.9;
        errorMargin = 15;
        break;
    // ... autres cas
}
```

**Créer une Difficulté Personnalisée**:

Ajoutez une case après 'insane':

```javascript
case 'custom':
    aiSpeed = 3;            // Votre vitesse
    errorMargin = 25;       // Votre erreur
    break;
```

Puis dans le HTML [index.html](index.html), ajoutez:

```html
<option value="custom">Custom</option>
```

### Créer des Modes IA Avancés

#### IA Agressif (Rarement manque)
```javascript
case 'aggressive':
    aiSpeed = paddleSpeed * 1.3;
    errorMargin = 3;
    break;
```

#### IA Défensif (Se défend bien mais attaque peu)
```javascript
case 'defensive':
    aiSpeed = paddleSpeed;
    errorMargin = 20;
    break;
```

#### IA Chaotique (Aléatoire!)
```javascript
case 'chaotic':
    aiSpeed = paddleSpeed * (0.5 + Math.random());
    errorMargin = 60 + Math.random() * 40;
    break;
```

### Rendre l'IA Plus "Humaine"

Ajoutez des délais réactifs:

```javascript
function updateAIPaddle() {
    // ... code existant ...
    
    // Ajouter délai réactionnel (lag intentionnel)
    const reactionDelay = aiDifficulty === 'insane' ? 0 : 50;
    if (Math.random() * 100 < reactionDelay) {
        return; // Saute un frame
    }
    
    // ... reste du code ...
}
```

---

## 🎮 Ajouter des Modes de Jeu

### Mode 3 Joueurs (Balles Multiples)

1. Dupliquez l'objet `ball`:
```javascript
const ball1 = { x: 100, y: 100, dx: 5, dy: 5 };
const ball2 = { x: 200, y: 200, dx: -5, dy: 3 };
```

2. Mettez à jour la boucle pour gérer 2 balles
3. Mettez à jour le dessin

### Mode Sandbox (Pas de Scoring)

Modifiez `checkScore()`:

```javascript
function checkScore() {
    if (isSandboxMode) return;  // Pas de points
    
    // ... code scoring normal ...
}
```

### Mode Time Attack (Limite de Temps)

Ajoutez un timer:

```javascript
let gameTime = 60; // 60 secondes

gameLoop() {
    gameTime -= 0.016; // 60 FPS = ~0.016s per frame
    if (gameTime <= 0) {
        endGame(`Time's Up! Final Score: ${paddle1.score}-${paddle2.score}`);
    }
}
```

---

## 📱 Ajouter Touch/Gamepad Support

### Support Touchscreen

Ajoutez dans [script.js](script.js):

```javascript
canvas.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const y = touch.clientY - rect.top;
    
    paddle1.y = y - paddle1.height / 2;
    paddle1.y = Math.max(0, Math.min(paddle1.y, canvas.height - paddle1.height));
});
```

### Support Gamepad API

```javascript
function updateGamepad() {
    const gamepads = navigator.getGamepads();
    if (!gamepads[0]) return;
    
    const gp = gamepads[0];
    
    // Left stick Y axis
    if (gp.axes[1] < -0.5) {
        paddle1.y = Math.max(paddle1.y - paddleSpeed, 0);
    }
    if (gp.axes[1] > 0.5) {
        paddle1.y = Math.min(paddle1.y + paddleSpeed, canvas.height - paddle1.height);
    }
}
```

---

## 🔊 Ajouter du Son

### Web Audio API Basique

```javascript
function playSound(frequency, duration) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Dans checkCollisions():
playSound(440, 0.1); // Note A, 100ms
```

### Utiliser des Fichiers Audio

```html
<audio id="hitSound" src="sounds/hit.mp3"></audio>
<audio id="scoreSound" src="sounds/score.mp3"></audio>
```

```javascript
document.getElementById('hitSound').play();
document.getElementById('scoreSound').play();
```

---

## 📊 Ajouter des Statistiques

### Sauvegarde dans localStorage

```javascript
function saveStatistics() {
    const stats = {
        gamesPlayed: parseInt(localStorage.getItem('gamesPlayed') || '0') + 1,
        wins: parseInt(localStorage.getItem('wins') || '0') + (paddle1.score > paddle2.score ? 1 : 0),
        bestScore: Math.max(
            parseInt(localStorage.getItem('bestScore') || '0'),
            paddle1.score
        ),
        lastPlayed: new Date().toISOString()
    };
    
    Object.keys(stats).forEach(key => {
        localStorage.setItem(key, stats[key]);
    });
}

// Appelez après chaque match:
endGame() {
    saveStatistics();
}
```

### Afficher les Statistiques

```javascript
function displayStats() {
    const stats = {
        gamesPlayed: localStorage.getItem('gamesPlayed') || '0',
        wins: localStorage.getItem('wins') || '0',
        bestScore: localStorage.getItem('bestScore') || '0'
    };
    
    console.log('Games Played:', stats.gamesPlayed);
    console.log('Wins:', stats.wins);
    console.log('Best Score:', stats.bestScore);
}
```

---

## 🎨 Ajouter des Effets Visuels

### Particules sur Collision

```javascript
function createParticles(x, y) {
    for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5;
        const vx = Math.cos(angle) * 3;
        const vy = Math.sin(angle) * 3;
        
        particles.push({
            x, y, vx, vy,
            life: 20,
            color: `hsla(0, 100%, 50%, ${Math.random()})`
        });
    }
}
```

### Shake de Caméra

```javascript
let screenShake = 0;

function cameraShake(intensity = 5) {
    screenShake = intensity;
}

function updateShake() {
    if (screenShake > 0) {
        const offset = {
            x: (Math.random() - 0.5) * screenShake,
            y: (Math.random() - 0.5) * screenShake
        };
        ctx.save();
        ctx.translate(offset.x, offset.y);
        screenShake *= 0.95; // Decay
    }
}
```

### Slow Motion (Bullet-time)

```javascript
let gameSpeed = 1;

function activateSlowMo() {
    gameSpeed = 0.5;
    setTimeout(() => gameSpeed = 1, 500);
}

function updateBall() {
    ball.x += ball.dx * gameSpeed;
    ball.y += ball.dy * gameSpeed;
}
```

---

## 🧪 Debugging & Testing

### Mode Debug

Ajoutez à [script.js](script.js):

```javascript
const DEBUG = true;

function drawDebug() {
    if (!DEBUG) return;
    
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    
    ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Afficher infos
    ctx.fillStyle = 'white';
    ctx.font = '12px Arial';
    ctx.fillText(`Ball: ${Math.round(ball.x)},${Math.round(ball.y)}`, 10, 20);
    ctx.fillText(`Velocity: ${ball.dx},${ball.dy}`, 10, 35);
}
```

### Tests Unitaires (Jest)

```javascript
// __tests__/collision.test.js

describe('Collision Detection', () => {
    test('paddle and ball collide', () => {
        const paddle = { x: 10, y: 50, width: 10, height: 70 };
        const ball = { x: 20, y: 85, size: 5 };
        
        expect(checkCollision(paddle, ball)).toBe(true);
    });
});
```

---

## 📚 Ressources pour Aller Plus Loin

- **MDN Canvas**: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- **Game Development**: https://gamedevelopment.tutsplus.com/
- **Three.js (3D)**: https://threejs.org/
- **Phaser (Framework)**: https://phaser.io/

---

## 🚀 Prochaines Étapes

- [ ] Ajouter son
- [ ] Ajouter effets visuels
- [ ] Supporter gamepad
- [ ] Support multiplayer réseau
- [ ] Mode campagne
- [ ] Leaderboard cloud
- [ ] Version mobile native

---

**Besoin d'aide? Consultez le code source ou les autres documentations!** 💻

Happy coding! 🚀
