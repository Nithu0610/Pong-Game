# 🎨 Brand & Assets Guide

Guide complet des assets visuels, logos, et styles du jeu Pong.

## 📦 Assets Disponibles

### Logos

#### `logo.svg` (Main Logo)
- **Dimensions**: Carré (responsive)
- **Style**: Complet avec animations
- **Utilisation**: 
  - En-tête du site
  - Favicon
  - Partage sur réseaux sociaux
- **Couleurs**: Cyan (#00d4ff) et Rose (#ff006e)
- **Animation**: Flottement + Glow neon

#### `logo-icon.svg` (Icon Logo)
- **Dimensions**: Carré (responsive)
- **Style**: Compacte et simple
- **Utilisation**:
  - Avatar de profil
  - Favicon alternatif
  - Imprint/watermark
  - Thumbnails YouTube/social

## 🎨 Palette de Couleurs

### Principales
```
Cyan Principal:     #00d4ff (RGB: 0, 212, 255)
Cyan Foncé:         #0099cc (RGB: 0, 153, 204)
Rose Principal:     #ff006e (RGB: 255, 0, 110)
Rose Foncé:         #cc0055 (RGB: 204, 0, 85)
```

### Fond
```
Noir Profond:       #0a0a0a (RGB: 10, 10, 10)
Gris Très Foncé:    #1a1a2e (RGB: 26, 26, 46)
Gris Foncé:         #2a2a2a (RGB: 42, 42, 42)
```

### Texte
```
Blanc Principal:    #ffffff (RGB: 255, 255, 255)
Blanc Semi:         rgba(255, 255, 255, 0.6)
Blanc Faible:       rgba(255, 255, 255, 0.3)
```

## 🌟 Éléments de Design

### Gradient Horizontal (Titres)
```css
background: linear-gradient(90deg, #00d4ff, #ff006e);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Glow Neon
```css
box-shadow: 0 0 20px rgba(0, 212, 255, 0.5),
            0 0 60px rgba(255, 0, 110, 0.3);
```

### Drop Shadow Cyan
```css
filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.6));
```

## 📐 Guide de Typographie

### Titres
- **Font**: Segoe UI, systèmes sans-serif
- **Poids**: 900 (bold)
- **Taille**: 4rem (desktop), 2.5rem (tablet), 1.8rem (mobile)
- **Espacement**: 3px letter-spacing
- **Cas**: UPPERCASE

### Sous-titre
- **Poids**: 400-500
- **Taille**: 0.95rem
- **Espacement**: 1px letter-spacing
- **Transformation**: uppercase

### Labels
- **Poids**: 600
- **Taille**: 0.8rem
- **Espacement**: 1.5px letter-spacing

## 🎬 Animations

### Glow Pulsant
```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}
```

### Flottement
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
```

### Glisse Horizontale
```css
@keyframes slide {
    0%, 100% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
}
```

## 🖼️ Générer des Formats Alternatifs

### PNG depuis SVG
Utilisez un outil en ligne:
- [CloudConvert](https://cloudconvert.com/svg-to-png)
- [Online-Convert](https://image.online-convert.com/convert-to-png)
- Ou exportez depuis Inkscape/Figma

### Icône Favicon ICO
```bash
# Avec ImageMagick
convert logo.svg -define icon:auto-resize=256,128,96,64,48,32,16 logo.ico
```

### Pour les Réseaux Sociaux

**Avatar (1:1)**:
- Utilisez: `logo-icon.svg`
- Dimensions: 400x400px+

**Bannière LinkedIn (16:9)**:
- Créez horizontal avec texte
- Dimensions: 1200x627px

**Thumbnail YouTube (1280x720)**:
- Placez logo à gauche
- Texte centré: "PONG GAME"

## 🎨 Customization

### Changer les Couleurs Principales

**Dans styles.css**:
```css
:root {
    --primary-color: #00d4ff;      /* Changez ici */
    --secondary-color: #ff006e;    /* Changez ici */
    --dark-bg: #0a0a0a;
    --lighter-bg: #1a1a1a;
}
```

**Puis mettez à jour les logos SVG**:
- Remplacez `#00d4ff` par votre couleur primaire
- Remplacez `#ff006e` par votre couleur secondaire

### Variantes de Logo

**Monochrome (Blanc)**:
Changez tous les `#00d4ff` et `#ff006e` en `#ffffff`

**Dark Mode**:
Les logos existent déjà en mode sombre (fond noir)

**Light Mode** (alternative):
Fond blanc avec même gradient

## 📱 Responsivité

Les logos s'adaptent automatiquement:
- **Desktop**: 100x100px (logo), plein écran SVG
- **Tablet**: 80x80px
- **Mobile**: 60x60px

Le SVG étant vectoriel, il s'adapte parfaitement à n'importe quelle taille!

## 📝 Usage Rights

Ces assets sont libres d'utilisation pour:
- ✅ Votre portfolio personnel
- ✅ Projets open-source
- ✅ Modifications personnelles
- ✅ Redistribution avec crédit

---

**Design créé pour votre portfolio Pong Game**
