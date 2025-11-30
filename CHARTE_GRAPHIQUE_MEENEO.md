# CHARTE GRAPHIQUE COMPLÈTE - MEENEO.IO

## 📋 TABLE DES MATIÈRES

1. [Identité Visuelle](#identité-visuelle)
2. [Palette de Couleurs](#palette-de-couleurs)
3. [Typographie](#typographie)
4. [Logo et Signes](#logo-et-signes)
5. [Éléments UI](#éléments-ui)
6. [Espacements & Grille](#espacements--grille)
7. [Effets & Animations](#effets--animations)
8. [Layout & Structure](#layout--structure)
9. [Médias & Assets](#médias--assets)
10. [Spécifications Techniques](#spécifications-techniques)
11. [Règles d'Utilisation](#règles-dutilisation)
12. [Exemples de Code](#exemples-de-code)
13. [Ressources & Liens](#ressources--liens)
14. [Page Dashboard](#page-dashboard)
15. [Notes & Observations](#notes--observations)

---

## 1. IDENTITÉ VISUELLE

### Positionnement
- **Style** : Moderne, minimaliste, professionnel
- **Ambiance** : Institutionnel, premium, technologique
- **Personnalité** : Sobre, élégante, innovante
- **Position** : Infrastructure B2B pour le mining de cryptomonnaies

### Principes de Design
- **Simplicité** : Design épuré avec beaucoup d'espace blanc
- **Clarté** : Hiérarchie visuelle claire et lisible
- **Modernité** : Éléments visuels contemporains (glassmorphism, gradients)
- **Professionnalisme** : Esthétique corporate adaptée au B2B

---

## 2. PALETTE DE COULEURS

### Couleurs Principales

#### Blanc (Background Principal)
- **Hex** : `#FFFFFF`
- **Usage** : Fond principal de la page
- **Contraste** : Utilisé pour créer de l'espace et mettre en valeur le contenu

#### Noir (Texte Principal)
- **Hex** : `#000000` ou très foncé `#333333`
- **Usage** : 
  - Texte principal
  - Logo
  - Navigation
  - Titres
- **Contraste** : Haute lisibilité sur fond blanc

### Couleur d'Accent

#### Orange Principal (Call-to-Action)
- **Hex** : `#F56A3B` (orange vif et chaleureux)
- **Variantes** : 
  - Orange clair pour effets de gradient
  - Orange foncé pour états hover
- **Usage** :
  - Boutons primaires "Get a demo"
  - Éléments d'interaction
  - Accents visuels
- **RVB** : RGB(245, 106, 59)
- **Caractéristiques** : Couleur vibrante pour attirer l'attention sur les CTAs

### Dégradés (Gradients)

#### Gradient Background Hero
- **Début** : Bleu-gris très clair (presque blanc)
- **Fin** : Pêche/Orange clair
- **Direction** : Horizontal (gauche à droite)
- **Usage** : Fond pour la section hero avec logo 3D
- **Style** : Subtil, doux, presque transparent

#### Gradient Logo 3D
- **Type** : Iridescent/Prismatique
- **Effets** : Reflets arc-en-ciel sur verre transparent
- **Caractéristiques** : Glassmorphism avec effets de lumière

### Palette Complète

```
PRIMAIRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Blanc              #FFFFFF  ████████████
Noir               #000000  ████████████
Orange CTA         #F56A3B  ████████████

SECONDAIRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gris Texte         #333333  ████████████
Gris Clair         #E2E2E2  ████████████

DÉGRADÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bleu-Gris → Pêche  Gradient horizontal subtil
```

---

## 3. TYPOGRAPHIE

### Police Principale

#### F37Gruffy
- **Famille** : Sans-serif moderne
- **Variantes utilisées** :
  - `F37Gruffy-Regular` (400)
  - `F37Gruffy-Medium` (500)
- **Format** : `.otf` (OpenType)
- **URLs** :
  - Regular : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/688377bf5897ce22b81384a6_F37Gruffy-Regular.otf`
  - Medium : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/688377b2b0d79a38e795300b_F37Gruffy-Medium.otf`
- **Caractéristiques** : 
  - Sans-serif géométrique
  - Modern et lisible
  - Bien adaptée pour les titres et le texte

### Hiérarchie Typographique

#### Titres (Headings)

**H1 - Titre Principal**
- **Taille** : `38px` / `2.375rem`
- **Line-height** : `44px` / `2.75rem`
- **Poids** : `bold` (700)
- **Usage** : Titres de section principale
- **Exemple** : "Infrastructure", "Performance", "Security"

**H2 - Sous-titre Section**
- **Taille** : `32px` / `2rem`
- **Line-height** : `36px` / `2.25rem`
- **Poids** : `bold` (700)
- **Usage** : Titres de sous-sections

**H3 - Titre Tertiaire**
- **Taille** : `24px` / `1.5rem`
- **Line-height** : `30px` / `1.875rem`
- **Poids** : `bold` (700)
- **Usage** : Titres de cartes, sous-sections

**H4 - Titre Quaternaire**
- **Taille** : `18px` / `1.125rem`
- **Line-height** : `24px` / `1.5rem`
- **Poids** : `bold` (700)

**H5 - Petit Titre**
- **Taille** : `14px` / `0.875rem`
- **Line-height** : `20px` / `1.25rem`

**H6 - Très Petit Titre**
- **Taille** : `12px` / `0.75rem`
- **Line-height** : `18px` / `1.125rem`

#### Texte (Body)

**Paragraphe Standard**
- **Taille** : `14px` / `0.875rem` (base)
- **Line-height** : `20px` / `1.25rem`
- **Poids** : `400` (Regular)
- **Couleur** : `#333333`
- **Espacement** : Margin-bottom `10px`

**Texte de Navigation**
- **Taille** : Variable (responsive)
- **Poids** : `500` (Medium) pour les liens actifs
- **Couleur** : `#000000`

#### Boutons & CTAs

**Bouton Primaire**
- **Taille** : `14px - 16px`
- **Poids** : `500` (Medium)
- **Couleur texte** : `#FFFFFF`
- **Famille** : F37Gruffy-Medium

**Liens Secondaires**
- **Taille** : `14px`
- **Poids** : `400 - 500`
- **Couleur** : `#000000`
- **Style** : Sans soulignement par défaut

### Spécifications CSS

```css
@font-face {
  font-family: 'F37Gruffy';
  src: url('F37Gruffy-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'F37Gruffy';
  src: url('F37Gruffy-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}

body {
  font-family: 'F37Gruffy', Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
```

---

## 4. LOGO ET SIGNES

### Logo Principal

#### Composition
- **Élément 1** : Icône "M" stylisée
  - Forme : Deux rectangles arrondis connectés
  - Style : Évoquant un circuit ou une chaîne de blocs
  - Couleur : Noir (`#000000`)
  - Design : Géométrique, moderne, technologique

- **Élément 2** : Typographie "Meeneo"
  - Police : F37Gruffy
  - Position : À droite de l'icône
  - Couleur : Noir (`#000000`)

#### Formats Disponibles
- **SVG** : `meeneo-logo.svg` (vectoriel, scalable)
- **URL** : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/6880dc89d5bcec7bc161af43_meeneo-logo.svg`

#### Placement
- **Header** : En haut à gauche
- **Taille** : Adaptative selon la largeur d'écran

### Logo 3D (Élément Décoratif)

#### Caractéristiques
- **Type** : Logo "M" en version 3D transparente
- **Format** : `.avif` (AVIF - format moderne)
- **Fichier** : `M_GLASS.avif`
- **URL** : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/6880db996b459d0d231a1d1a_ca4ab6286a28a37c584c35589f3fcd44_M_GLASS.avif`

#### Style Visuel
- **Matière** : Verre transparent (glassmorphism)
- **Effets** : 
  - Iridescence (reflets arc-en-ciel)
  - Transparence avec reflets subtils
  - Profondeur 3D
- **Position** : Centré horizontalement sur fond gradient
- **Usage** : Élément visuel principal de la section hero
- **Taille** : Grande (élément focal)

### Mask SVG (Fond Hero)
- **Fichier** : `fond-hero-mask.svg`
- **Usage** : Forme de masque pour le fond gradient de la section hero
- **Style** : Formes arrondies, géométriques

---

## 5. ÉLÉMENTS UI

### Boutons

#### Bouton Primaire "Get a demo"
- **Background** : `#F56A3B` (Orange)
- **Couleur texte** : `#FFFFFF` (Blanc)
- **Forme** : Rectangle aux coins légèrement arrondis
- **Padding** : `9px 15px` (vertical horizontal)
- **Typographie** : 
  - Poids : `500` (Medium)
  - Taille : `14px - 16px`
- **États** :
  - **Normal** : Orange plein
  - **Hover** : Légèrement plus foncé
  - **Active** : Plus foncé encore
- **Bordure** : Aucune
- **Curseur** : Pointer
- **Animation** : Transition douce au survol

#### Bouton Secondaire "Become partner"
- **Background** : Transparent ou blanc
- **Couleur texte** : `#000000` (Noir)
- **Style** : Lien texte ou bouton outline
- **Typographie** : 
  - Poids : `400 - 500`
  - Taille : `14px`
- **Bordure** : Optionnelle (fine, noire)

### Navigation

#### Menu Principal
- **Position** : Header en haut à droite
- **Liens** :
  - Mission
  - How it works
  - Partners
  - Why Meeneo
  - Contact
- **Style** : 
  - Sans soulignement
  - Couleur : Noir
  - Poids : `400` (Regular)
- **État actif** : Poids `500` (Medium) ou souligné

#### Menu Hamburger
- **Icône** : Trois lignes horizontales
- **Couleur** : Noir
- **Position** : En haut à droite (mobile)
- **Style** : Simple, minimaliste

### Cartes & Sections

#### Sections de Contenu
- **Background** : Blanc ou gradient subtil
- **Padding** : Généreux (espace blanc important)
- **Bordure** : Aucune
- **Ombre** : Subtile si nécessaire

#### Cartes de Partenaires
- **Style** : Conteneur avec logo partenaire
- **Liens** : "Check website"
- **Layout** : Côte à côte (desktop)

### Formulaires

#### Champs de Saisie
- **Bordure** : Fine, gris clair
- **Padding** : `9px 15px`
- **Border-radius** : Légèrement arrondi
- **Focus** : Bordure orange `#F56A3B`

---

## 6. ESPACEMENTS & GRILLE

### Système d'Espacement

#### Unités de Base
- **Unité** : `10px` ou multiples de 10
- **Usage** : Marges, paddings, espacements

#### Espacements Standards

**Petits**
- `10px` : Espacement minimal entre éléments proches
- `20px` : Espacement entre sections légères

**Moyens**
- `30px` : Espacement vertical entre blocs
- `40px` : Espacement horizontal entre colonnes

**Grands**
- `60px` : Espacement entre sections principales
- `80px - 120px` : Espacement hero (très généreux)

### Grille

#### Structure
- **Système** : Grille responsive flexible
- **Colonnes** : 12 colonnes (desktop)
- **Gutters** : `20px - 40px` selon la largeur
- **Breakpoints** : Mobile-first

#### Breakpoints (Estimation)
- **Mobile** : `320px - 768px`
- **Tablet** : `769px - 1024px`
- **Desktop** : `1025px+`

### Marges Typographiques

- **H1** : Margin-top `20px`, Margin-bottom `10px`
- **H2** : Margin-top `20px`, Margin-bottom `10px`
- **Paragraphe** : Margin-top `0`, Margin-bottom `10px`

---

## 7. EFFETS & ANIMATIONS

### Bibliothèques Utilisées

#### GSAP (GreenSock Animation Platform)
- **Version** : `3.13.0`
- **Modules** :
  - `gsap.min.js` : Core
  - `ScrollTrigger.min.js` : Animations au scroll
  - `SplitText.min.js` : Animation de texte
- **Usage** : Animations fluides, scroll-based, text splitting

### Types d'Animations

#### Animations de Texte
- **SplitText** : Découpage du texte en lettres/mots
- **Révélation progressive** : Apparition au scroll
- **Effets** : Fade in, slide up

#### Animations au Scroll
- **ScrollTrigger** : Déclenchement basé sur la position de scroll
- **Parallaxe** : Effets de profondeur
- **Réapparition** : Éléments qui apparaissent en scrollant

#### Transitions
- **Boutons** : Transition douce au hover (`transition: all 0.3s ease`)
- **Liens** : Effet hover subtil

### Effets Visuels

#### Glassmorphism
- **Logo 3D** : Transparence, reflets, iridescence
- **Filtres** : `backdrop-filter: blur()` pour effets de verre

#### Gradients
- **Animation** : Subtile, statique (pas d'animation fluide du gradient)
- **Transitions** : Couleurs qui se fondent doucement

---

## 8. LAYOUT & STRUCTURE

### Structure de Page

#### Header (En-tête)
- **Hauteur** : Variable (responsive)
- **Background** : Blanc ou transparent
- **Position** : Fixe ou sticky (scroll)
- **Contenu** :
  - Logo (gauche)
  - Navigation (droite)
  - Menu hamburger (mobile)

#### Hero Section (Section Principale)
- **Hauteur** : `100vh` ou grande hauteur
- **Background** : Gradient subtil
- **Contenu centré** : 
  - Titre principal
  - Texte descriptif
  - Boutons CTA
- **Élément visuel** : Logo 3D en arrière-plan

#### Sections de Contenu
- **Padding vertical** : Généreux (`60px - 120px`)
- **Padding horizontal** : `20px - 40px`
- **Max-width** : Limitée pour la lisibilité
- **Centrage** : Contenu centré ou aligné à gauche

#### Footer
- **Background** : Blanc ou gris très clair
- **Contenu** :
  - Liens légaux (Privacy Policy, Terms of Service, Cookies Settings)
  - Copyright : "© 2025 Meeneo. All rights reserved."
- **Style** : Minimaliste, discret

### Principes de Layout

- **Centrage** : Contenu principal centré
- **Espace blanc** : Utilisé généreusement
- **Hiérarchie visuelle** : Titres → Texte → CTA
- **Responsive** : Mobile-first approach

---

## 9. MÉDIAS & ASSETS

### Images

#### Format Principal
- **AVIF** : Format moderne pour le logo 3D
- **JPEG** : Pour les images de fond/vidéos
- **SVG** : Pour les logos et icônes vectorielles

### Vidéos

#### Formats & Utilisation
- **Format** : `.mp4` (MPEG-4)
- **Codec** : H.264 (transcode)
- **Posters** : Images JPEG en prévisualisation
- **Vidéos utilisées** :
  - `arrow-video-transcode.mp4`
  - `shield-video-transcode.mp4`
  - `video-$-transcode.mp4`
  - `video-bitcoin-transcode.mp4`
  - `12702793_4096_2160_30fps-transcode.mp4`
  - `cog-video-transcode.mp4`

#### Caractéristiques
- **Qualité** : Haute résolution (jusqu'à 4K)
- **Taux de trame** : `30fps`
- **Usage** : Éléments visuels animés en arrière-plan ou icônes animées

### CDN & Hébergement

- **CDN** : `cdn.prod.website-files.com`
- **Structure** : Tous les assets sont hébergés sur le CDN Webflow
- **Optimisation** : Assets optimisés pour le web

### Icônes

#### Webflow Icons
- **Famille** : `webflow-icons`
- **Format** : Font icon (TTF base64)
- **Icônes disponibles** :
  - Slider right/left
  - Menu navigation
  - Arrow down / Dropdown toggle
  - File upload icons

---

## 10. SPÉCIFICATIONS TECHNIQUES

### Framework & Technologies

#### Webflow
- **Plateforme** : Site construit sur Webflow
- **CMS** : Utilisation possible de Webflow CMS
- **Hébergement** : Webflow hosting

#### JavaScript Libraries
- **jQuery** : `3.5.1` et `3.6.0`
- **GSAP** : `3.13.0`
  - Core
  - ScrollTrigger
  - SplitText

### Structure HTML

#### Sémantique
- Utilisation de balises HTML5 sémantiques :
  - `<header>`
  - `<nav>`
  - `<main>`
  - `<section>`
  - `<footer>`
  - `<article>`

#### Classes Webflow
- **Préfixe** : `w-` (ex: `w-button`, `w-icon-`)
- **Système** : Classes utilitaires Webflow

### Performance

#### Optimisations
- **Lazy loading** : Images et vidéos chargées à la demande
- **CDN** : Distribution mondiale des assets
- **Compression** : Assets optimisés et compressés
- **Format moderne** : AVIF pour meilleure compression

### Accessibilité

#### Standards
- **ARIA** : Rôles et labels pour accessibilité
- **Contraste** : Haute lisibilité (noir sur blanc)
- **Navigation clavier** : Support complet
- **Screen readers** : Structure sémantique appropriée

### Responsive Design

#### Approche
- **Mobile-first** : Design d'abord pour mobile
- **Breakpoints** : Adaptatif selon la largeur
- **Flexible** : Layout flexible et fluide

### CSS

#### Méthodologie
- **Classes utilitaires** : Style via classes
- **Variables** : Possibles via Webflow
- **Reset CSS** : Normalize inclus

---

## 11. RÈGLES D'UTILISATION

### DO (À faire)

✅ **Couleurs**
- Utiliser le blanc comme fond principal
- Utiliser le noir pour le texte et la navigation
- Utiliser l'orange `#F56A3B` pour les CTAs uniquement
- Maintenir un contraste élevé pour la lisibilité

✅ **Typographie**
- Utiliser exclusivement F37Gruffy (Regular et Medium)
- Respecter la hiérarchie des tailles
- Maintenir un line-height confortable (1.4 - 1.6)

✅ **Espacement**
- Utiliser beaucoup d'espace blanc
- Respecter les multiples de 10px pour les espacements
- Créer de la respiration entre les sections

✅ **Logo**
- Conserver les proportions du logo
- Utiliser le SVG pour toutes les utilisations (scalable)
- Respecter la zone d'exclusion autour du logo

### DON'T (À éviter)

❌ **Couleurs**
- Ne pas utiliser d'autres couleurs que celles définies
- Ne pas utiliser l'orange pour autre chose que les CTAs
- Ne pas réduire le contraste texte/fond

❌ **Typographie**
- Ne pas mélanger d'autres polices avec F37Gruffy
- Ne pas utiliser de tailles trop petites (< 12px)
- Ne pas surcharger avec trop de poids différents

❌ **Espacement**
- Ne pas comprimer le contenu
- Ne pas utiliser d'espacements aléatoires
- Ne pas surcharger avec trop d'éléments

❌ **Logo**
- Ne pas déformer le logo
- Ne pas changer les couleurs du logo
- Ne pas placer d'éléments trop près du logo

---

## 12. EXEMPLES DE CODE

### CSS de Base

```css
/* Couleurs principales */
:root {
  --color-primary: #F56A3B;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-text: #333333;
  --color-border: #E2E2E2;
}

/* Typographie */
@font-face {
  font-family: 'F37Gruffy';
  src: url('F37Gruffy-Regular.otf') format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'F37Gruffy';
  src: url('F37Gruffy-Medium.otf') format('opentype');
  font-weight: 500;
}

body {
  font-family: 'F37Gruffy', Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text);
  background-color: var(--color-white);
}

/* Bouton primaire */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 9px 15px;
  border: none;
  border-radius: 4px;
  font-family: 'F37Gruffy', Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #E55A2B; /* Légèrement plus foncé */
}

/* Titre H1 */
h1 {
  font-family: 'F37Gruffy', Arial, sans-serif;
  font-size: 38px;
  line-height: 44px;
  font-weight: bold;
  color: var(--color-black);
  margin-top: 20px;
  margin-bottom: 10px;
}
```

### HTML Structure

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meeneo - Infrastructure</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <a href="/" class="logo">
        <img src="meeneo-logo.svg" alt="Meeneo logo">
      </a>
      <ul class="nav-menu">
        <li><a href="#mission">Mission</a></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#why-meeneo">Why Meeneo</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="btn-primary">Get a demo</button>
    </nav>
  </header>
  
  <main>
    <section class="hero">
      <h1>Infrastructure</h1>
      <p>Meeneo provides tailor-made computing power...</p>
      <div class="cta-group">
        <button class="btn-primary">Get a demo</button>
        <a href="#" class="btn-secondary">Become partner</a>
      </div>
    </section>
  </main>
  
  <footer>
    <nav>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/cookies">Cookies Settings</a>
    </nav>
    <p>&copy; 2025 Meeneo. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

## 13. RESSOURCES & LIENS

### Polices
- **F37Gruffy Regular** : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/688377bf5897ce22b81384a6_F37Gruffy-Regular.otf`
- **F37Gruffy Medium** : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/688377b2b0d79a38e795300b_F37Gruffy-Medium.otf`

### Logo
- **Logo SVG** : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/6880dc89d5bcec7bc161af43_meeneo-logo.svg`
- **Logo 3D AVIF** : `https://cdn.prod.website-files.com/687f61063dcf7ce10f7c8821/6880db996b459d0d231a1d1a_ca4ab6286a28a37c584c35589f3fcd44_M_GLASS.avif`

### Bibliothèques
- **GSAP** : `https://cdn.prod.website-files.com/gsap/3.13.0/`
- **jQuery** : `https://code.jquery.com/jquery-3.6.0.min.js`

### Site Web
- **URL** : `https://www.meeneo.io/`

---

## 14. PAGE DASHBOARD

### Vue d'ensemble

La page Dashboard est l'interface principale de gestion et de visualisation des données pour les utilisateurs de Meeneo. Elle se décline en trois styles distincts pour répondre à différents contextes d'utilisation : **Premium**, **Dynamic** et **Institutionnel**.

### Structure Générale

#### Layout Principal
- **Background** : `#FFFFFF` (Blanc)
- **Padding** : `30px - 60px` (responsive)
- **Grille** : Système de colonnes flexible
- **Espacement** : Généreux, respectant les multiples de 10px

#### Composants Communs
- **Header Dashboard** : Navigation et informations utilisateur
- **Sidebar** : Navigation secondaire (optionnelle selon le style)
- **5 Boxes de Métriques** : Cartes KPI en haut de la page (voir section dédiée)
- **Zone de contenu principal** : Graphiques et métriques
- **Footer** : Actions et informations contextuelles

---

### 5 BOXES DE MÉTRIQUES (Header Dashboard)

#### Structure Générale

**Layout**
- **Position** : Immédiatement sous le header principal
- **Grille** : 5 colonnes égales sur desktop, empilées sur mobile
- **Espacement horizontal** : `20px` entre chaque box
- **Espacement vertical** : `30px` sous le header, `40px` au-dessus du contenu principal
- **Alignement** : Lignes de base alignées pour les valeurs

**Structure d'une Box**
- **Titre/Label** : Indicateur de la métrique (ex: "Revenus", "Hashrate", etc.)
- **Valeur principale** : Chiffre important en grande taille
- **Variation/Indicateur** : Pourcentage ou valeur de changement (optionnel)
- **Icône** : Élément visuel décoratif ou informatif (optionnel)

---

#### 1. BOX PREMIUM

**Dimensions**
- **Hauteur** : `140px - 160px` (fixe pour alignement)
- **Largeur** : Flexible selon la grille
- **Padding** : `30px` (tout autour)

**Style Visuel**
- **Background** : Blanc pur `#FFFFFF`
- **Bordure** : `1px solid #E2E2E2` (subtile)
- **Border-radius** : `12px` (coins arrondis élégants)
- **Ombre** : `0 2px 8px rgba(0, 0, 0, 0.04)` (très subtile)
- **Position** : Relative pour hover effect

**Typographie**

*Label*
- **Police** : F37Gruffy Regular
- **Taille** : `12px`
- **Couleur** : `#666666` (gris moyen)
- **Poids** : `400`
- **Letter-spacing** : `0.5px` (légèrement espacé)
- **Margin-bottom** : `12px`
- **Text-transform** : `uppercase` (optionnel pour élégance)

*Valeur Principale*
- **Police** : F37Gruffy Medium
- **Taille** : `32px - 36px`
- **Couleur** : `#000000` (noir)
- **Poids** : `500`
- **Line-height** : `1.2`
- **Margin-bottom** : `8px`

*Variation/Indicateur*
- **Police** : F37Gruffy Medium
- **Taille** : `14px`
- **Couleur positive** : `#50C878` (vert discret)
- **Couleur négative** : `#E74C3C` (rouge discret)
- **Icône** : Flèche `↑` ou `↓` (2px de décalage)
- **Display** : Flex avec align-items center

**Icône Décorative** (optionnelle)
- **Position** : Absolue en haut à droite
- **Taille** : `40px - 48px`
- **Opacité** : `0.08 - 0.12` (très subtile)
- **Couleur** : `#000000` ou couleur d'accent
- **Z-index** : -1 (derrière le contenu)

**Interactions**
- **Hover** : 
  - Ombre augmentée : `0 4px 16px rgba(0, 0, 0, 0.08)`
  - Transform : `translateY(-2px)` (léger déplacement)
  - Transition : `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Active** : Aucun changement (clic rare)

**Exemple de Structure Premium**
```
┌─────────────────────────────┐
│          (icône)            │
│  REVENUS                    │
│                             │
│  €125,430                   │
│                             │
│  ↑ 12.5% vs mois dernier    │
└─────────────────────────────┘
```

**Responsive**
- **Mobile** : 100% largeur, empilées verticalement
- **Tablet** : 2-3 colonnes selon l'espace
- **Desktop** : 5 colonnes égales

---

#### 2. BOX DYNAMIC

**Dimensions**
- **Hauteur** : `150px - 170px` (légèrement plus haute)
- **Largeur** : Flexible selon la grille
- **Padding** : `30px - 35px`

**Style Visuel**
- **Background** : Blanc `#FFFFFF` ou gradient subtil `linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)`
- **Bordure** : `2px solid transparent` (pour hover effect)
- **Border-radius** : `16px` (plus arrondi)
- **Ombre** : `0 4px 16px rgba(0, 0, 0, 0.08)` (plus prononcée)
- **Border-top** : `3px solid` avec couleur d'accent (optionnel, alterné entre boxes)

**Typographie**

*Label*
- **Police** : F37Gruffy Medium
- **Taille** : `13px`
- **Couleur** : `#333333` (plus foncé)
- **Poids** : `500`
- **Letter-spacing** : `0.3px`
- **Margin-bottom** : `14px`

*Valeur Principale*
- **Police** : F37Gruffy Medium
- **Taille** : `38px - 42px` (plus grande)
- **Couleur** : Couleur d'accent selon la box (ou noir)
  - Box 1 : `#F56A3B` (orange)
  - Box 2 : `#4A90E2` (bleu)
  - Box 3 : `#50C878` (vert)
  - Box 4 : `#9B59B6` (violet)
  - Box 5 : `#F39C12` (jaune/orange)
- **Poids** : `500`
- **Line-height** : `1.2`
- **Margin-bottom** : `10px`

*Variation/Indicateur*
- **Police** : F37Gruffy Medium
- **Taille** : `15px`
- **Couleur positive** : `#50C878` (vert vif)
- **Couleur négative** : `#E74C3C` (rouge vif)
- **Icône animée** : Flèche avec animation de pulsation
- **Background** : `rgba(80, 200, 120, 0.1)` pour positif (optionnel)

**Icône Décorative**
- **Position** : Absolue en haut à droite
- **Taille** : `56px - 64px`
- **Opacité** : `0.15 - 0.2` (plus visible)
- **Couleur** : Couleur d'accent de la box
- **Animation** : Rotation subtile ou pulsation au hover

**Animations**
- **Entrée** : Fade in + slide up avec GSAP
  - `opacity: 0 → 1`
  - `y: 20px → 0`
  - Durée : `0.6s` avec stagger (délai entre chaque box)
- **Hover** :
  - Transform : `translateY(-4px) scale(1.02)`
  - Ombre : `0 8px 24px rgba(0, 0, 0, 0.12)`
  - Bordure : Couleur d'accent visible
  - Transition : `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Valeur** : Animation de compteur si mise à jour (GSAP)

**Effets Spéciaux**
- **Border-top coloré** : Alternance de couleurs pour différencier
- **Glow subtil** : `box-shadow` avec couleur d'accent au hover
- **Particules** : Effet subtil en arrière-plan (optionnel, avec Canvas)

**Exemple de Structure Dynamic**
```
┌─────────────────────────────┐
│      (icône animée)         │
│  ━━━━━━━━━━━━━━━━━━━━━━━  │ ← Border-top colorée
│  HASHRATE                   │
│                             │
│  2.45 TH/s                  │ ← Couleur d'accent
│                             │
│  ↑ 12.5%  🔥               │ ← Avec emoji ou icône
└─────────────────────────────┘
```

**Responsive**
- **Mobile** : 100% largeur, animation de révélation au scroll
- **Tablet** : 2-3 colonnes avec espacement `16px`
- **Desktop** : 5 colonnes avec espacement `20px`

---

#### 3. BOX INSTITUTIONNEL

**Dimensions**
- **Hauteur** : `130px - 150px` (plus compacte)
- **Largeur** : Flexible selon la grille
- **Padding** : `25px` (compact)

**Style Visuel**
- **Background** : Blanc pur `#FFFFFF`
- **Bordure** : `1px solid #E2E2E2` (obligatoire, nette)
- **Border-radius** : `6px` (minimal, formel)
- **Ombre** : Aucune ou très subtile `0 1px 3px rgba(0, 0, 0, 0.05)`
- **Structure** : Layout strict en grille interne

**Typographie**

*Label*
- **Police** : F37Gruffy Regular
- **Taille** : `11px`
- **Couleur** : `#666666`
- **Poids** : `400`
- **Letter-spacing** : `1px` (plus espacé, formel)
- **Text-transform** : `uppercase` (obligatoire)
- **Margin-bottom** : `10px`
- **Border-bottom** : `1px solid #F0F0F0` (séparateur subtil, optionnel)

*Valeur Principale*
- **Police** : F37Gruffy Medium
- **Taille** : `28px - 32px` (modeste mais lisible)
- **Couleur** : `#000000` (noir strict)
- **Poids** : `500`
- **Line-height** : `1.3`
- **Margin-bottom** : `6px`
- **Letter-spacing** : `-0.5px` (plus serré pour les chiffres)

*Variation/Indicateur*
- **Police** : F37Gruffy Regular
- **Taille** : `12px`
- **Couleur** : `#666666` (neutre, ou `#000000`)
- **Format** : `+12.5%` ou `-5.2%` (sans couleur, professionnel)
- **Icône** : `+` ou `-` intégré au texte (pas de flèche)
- **Alignement** : À droite ou sous la valeur

**Icône Décorative**
- **Position** : Absolue en haut à droite ou absente
- **Taille** : `32px` maximum (discret)
- **Opacité** : `0.05 - 0.08` (très subtile)
- **Couleur** : `#000000` (noir uniquement)
- **Style** : Linéaire, pas de remplissage

**Interactions**
- **Hover** : 
  - Background : `#FAFAFA` (très subtil)
  - Bordure : `#CCCCCC` (légèrement plus foncée)
  - Transition : `all 0.2s ease` (rapide, discret)
- **Pas de transformation** : Reste à sa place

**Structure Interne**
- **Grid interne** : Alignement strict des éléments
- **Marges** : Multiples de 5px uniquement
- **Alignement vertical** : Flex avec `justify-content: space-between`

**Exemple de Structure Institutionnel**
```
┌─────────────────────────────┐
│  REVENUS               [i]  │ ← Icône discrète
│  ──────────────────────────│ ← Séparateur (optionnel)
│                             │
│  €125,430                   │ ← Noir, aligné à gauche
│                             │
│  +12.5%  MoM                │ ← Format neutre
└─────────────────────────────┘
```

**Responsive**
- **Mobile** : 100% largeur, bordure conservée
- **Tablet** : 2 colonnes, espacement `16px`
- **Desktop** : 5 colonnes égales, espacement `18px`

---

### Spécifications Techniques des 5 Boxes

#### Layout CSS

```css
.dashboard-metrics {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  padding: 0 30px;
}

.metric-box {
  position: relative;
  padding: 30px;
  background: #FFFFFF;
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 1024px) {
  .dashboard-metrics {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .dashboard-metrics {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

#### Exemple HTML Structure

```html
<div class="dashboard-metrics">
  <div class="metric-box metric-box-premium">
    <div class="metric-icon"></div>
    <div class="metric-label">REVENUS</div>
    <div class="metric-value">€125,430</div>
    <div class="metric-change positive">
      <span class="change-icon">↑</span>
      <span class="change-value">12.5%</span>
    </div>
  </div>
  <!-- ... 4 autres boxes ... -->
</div>
```

---

### 1. GRAPHIQUE PREMIUM

#### Philosophie
Le style **Premium** se caractérise par un design haut de gamme, élégant et sophistiqué. Il met l'accent sur la qualité visuelle et l'expérience utilisateur raffinée.

#### Caractéristiques Visuelles

**Couleurs**
- **Background** : Blanc pur `#FFFFFF` ou gris très clair `#FAFAFA`
- **Accents** : Orange `#F56A3B` utilisé avec parcimonie
- **Bordure graphiques** : Gris fin `#E2E2E2` ou lignes subtiles
- **Zones de focus** : Ombres douces pour créer de la profondeur

**Graphiques**
- **Style** : Lignes fines et élégantes
- **Couleurs de données** : Palette sobre (gris, noir, orange accent)
- **Épaisseur des lignes** : `2px - 3px` (fines et précises)
- **Points de données** : Ronds discrets `4px - 6px`
- **Grid** : Lignes de grille très subtiles (`#F5F5F5`, `1px`)
- **Légendes** : Typographie F37Gruffy Medium, taille `12px - 14px`

**Cartes & Conteneurs**
- **Background** : Blanc `#FFFFFF`
- **Bordure** : Fine `1px solid #E2E2E2` (optionnelle)
- **Border-radius** : `8px - 12px` (coins légèrement arrondis)
- **Ombre** : Subtile `0 2px 8px rgba(0, 0, 0, 0.04)`
- **Padding interne** : `30px - 40px`

**Typographie**
- **Titres de graphiques** : H3 (`24px`, bold)
- **Labels** : `12px - 14px`, couleur `#333333`
- **Valeurs** : F37Gruffy Medium, `16px - 18px`

**Interactions**
- **Hover** : Légère élévation de l'ombre
- **Animation** : Transitions douces `transition: all 0.3s ease`
- **Tooltips** : Design épuré avec fond blanc, bordure fine

**Exemple de Palette Graphique Premium**
```
Ligne principale  : #000000 (Noir)
Ligne secondaire  : #666666 (Gris moyen)
Ligne tertiaire   : #CCCCCC (Gris clair)
Accent            : #F56A3B (Orange - utilisé avec modération)
Zone de gradient  : rgba(245, 106, 59, 0.05) (Orange très transparent)
```

---

### 2. DYNAMIC

#### Philosophie
Le style **Dynamic** met l'accent sur le mouvement, l'interactivité et la visualisation en temps réel. Il utilise des animations fluides et des couleurs plus vives pour représenter des données vivantes et changeantes.

#### Caractéristiques Visuelles

**Couleurs**
- **Background** : Blanc `#FFFFFF` ou fond avec gradient subtil
- **Couleurs vives** : Utilisation plus généreuse de l'orange `#F56A3B` et variations
- **Palette étendue** : Ajout de couleurs complémentaires (bleus, verts) pour différencier les séries
- **États actifs** : Couleurs saturées pour les éléments en cours

**Graphiques**
- **Style** : Lignes plus épaisses `3px - 4px` pour la visibilité
- **Couleurs de données** : Palette variée et vibrante
  - Série 1 : Orange `#F56A3B`
  - Série 2 : Bleu `#4A90E2`
  - Série 3 : Vert `#50C878`
  - Série 4 : Violet `#9B59B6`
- **Animations** : 
  - Dessin progressif des lignes (stroke-dasharray)
  - Pulsation des points de données actifs
  - Transitions fluides entre les états
- **Grid** : Plus visible que Premium (`#E8E8E8`, `1px`)
- **Zones sous courbes** : Gradients avec transparence pour effet de profondeur

**Cartes & Conteneurs**
- **Background** : Blanc ou avec bordure colorée subtile
- **Border-radius** : `12px - 16px` (plus arrondi)
- **Ombre** : Plus prononcée `0 4px 16px rgba(0, 0, 0, 0.08)`
- **Effets** : Possibilité de bordures colorées en accent (`2px solid #F56A3B` en haut)

**Typographie**
- **Titres** : H2-H3 avec possibilité de couleurs vives
- **Valeurs importantes** : Plus grandes `20px - 24px`, en gras
- **Indicateurs de changement** : Flèches animées, couleurs d'état (vert/rouge)

**Interactions**
- **Hover** : 
  - Agrandissement du point de données
  - Ligne mise en évidence (épaisseur augmentée)
  - Tooltip enrichi avec animations
- **Animation continue** : Graphiques qui se mettent à jour avec des transitions fluides
- **Feedback visuel** : Changements de couleur lors des interactions

**Animations GSAP**
- **Entrée** : Graphiques qui apparaissent avec effet de dessin
- **Mise à jour** : Transitions douces pour les nouvelles données
- **Scroll** : Révélation progressive avec ScrollTrigger

**Exemple de Palette Graphique Dynamic**
```
Ligne principale  : #F56A3B (Orange vif)
Ligne secondaire  : #4A90E2 (Bleu dynamique)
Ligne tertiaire   : #50C878 (Vert actif)
Ligne quaternaire : #9B59B6 (Violet moderne)
Zone gradient 1   : rgba(245, 106, 59, 0.2)
Zone gradient 2   : rgba(74, 144, 226, 0.15)
```

---

### 3. INSTITUTIONNEL

#### Philosophie
Le style **Institutionnel** privilégie la sobriété, la clarté et la crédibilité. Il est conçu pour des contextes professionnels et B2B où la lisibilité et la rigueur sont essentielles.

#### Caractéristiques Visuelles

**Couleurs**
- **Background** : Blanc pur `#FFFFFF`
- **Palette restreinte** : Principalement noir, gris et blanc
- **Accents minimalistes** : Orange `#F56A3B` utilisé uniquement pour les éléments critiques
- **Neutralité** : Priorité à la clarté sur la créativité

**Graphiques**
- **Style** : Lignes nettes et précises `2px`
- **Couleurs de données** : Palette monochrome avec nuances de gris
  - Série principale : Noir `#000000`
  - Série secondaire : Gris foncé `#666666`
  - Série tertiaire : Gris moyen `#999999`
- **Points de données** : Carrés ou losanges `5px` (plus formels que les ronds)
- **Grid** : Lignes bien définies `#E2E2E2`, `1px`
- **Zones** : Remplissages solides ou hachurés plutôt que gradients

**Cartes & Conteneurs**
- **Background** : Blanc `#FFFFFF`
- **Bordure** : Obligatoire `1px solid #E2E2E2` (clarté des limites)
- **Border-radius** : Minimal `4px - 6px` (formel)
- **Ombre** : Très subtile ou absente
- **Structure** : Layout en grille strict, alignement précis

**Typographie**
- **Titres** : H2-H3, strictement en noir, alignement à gauche
- **Labels** : `12px`, F37Gruffy Regular, couleur `#333333`
- **Valeurs** : `14px - 16px`, alignement rigoureux
- **Unités** : Toujours affichées, format cohérent

**Tableaux de données** (si applicable)
- **Lignes alternées** : `#F9F9F9` pour la lisibilité
- **Bordures** : `1px solid #E2E2E2` entre les cellules
- **En-têtes** : Fond gris très clair `#F5F5F5`, texte en gras

**Interactions**
- **Hover** : Changement de couleur de fond minimal (`#FAFAFA`)
- **Animation** : Aucune ou très discrète
- **Tooltips** : Design sobre, fond blanc, bordure fine noire

**Spacing & Alignement**
- **Grille stricte** : Tous les éléments alignés sur une grille précise
- **Espacement uniforme** : Multiples de 10px strictement respectés
- **Marges** : Plus importantes pour aérer le contenu (60px - 80px entre sections)

**Exemple de Palette Graphique Institutionnel**
```
Ligne principale  : #000000 (Noir pur)
Ligne secondaire  : #666666 (Gris foncé)
Ligne tertiaire   : #999999 (Gris moyen)
Ligne quaternaire : #CCCCCC (Gris clair)
Accent critique   : #F56A3B (Orange - uniquement si nécessaire)
Grid              : #E2E2E2 (Gris clair net)
```

---

### Spécifications Techniques Dashboard

#### Bibliothèques de Graphiques Recommandées

**Pour Premium**
- **Chart.js** ou **Recharts** : Contrôle fin du style
- **D3.js** : Pour des visualisations custom sophistiquées

**Pour Dynamic**
- **GSAP** + **Chart.js** : Animations fluides
- **ApexCharts** : Animations intégrées et interactivité

**Pour Institutionnel**
- **Chart.js** : Simplicité et contrôle précis
- **Recharts** : Style épuré et professionnel

#### Responsive Design

**Mobile (< 768px)**
- Graphiques en pleine largeur
- Légendes empilées verticalement
- Padding réduit `20px`
- Taille de police adaptée

**Tablet (768px - 1024px)**
- Grille 2 colonnes maximum
- Graphiques adaptatifs
- Padding `30px - 40px`

**Desktop (> 1024px)**
- Layout complet avec sidebar optionnelle
- Graphiques en grille flexible
- Padding `40px - 60px`

---

## 15. NOTES & OBSERVATIONS

### Points Clés
- Design ultra-minimaliste avec focus sur l'espace blanc
- Utilisation stratégique de l'orange uniquement pour les CTAs
- Typographie moderne et lisible
- Éléments visuels sophistiqués (logo 3D glassmorphism)
- Animations fluides avec GSAP

### Évolution Possible
- La charte pourrait évoluer avec l'ajout de nouvelles sections
- Les couleurs secondaires pourraient être introduites pour la différenciation de contenu
- Les animations pourraient être étendues pour plus d'interactivité

---

## 📝 CONCLUSION

Cette charte graphique reflète une identité visuelle **moderne, professionnelle et minimaliste** adaptée au positionnement B2B de Meeneo dans le secteur du mining de cryptomonnaies. L'accent est mis sur la **clarté**, la **lisibilité** et la **crédibilité institutionnelle**, tout en conservant une touche de modernité grâce aux éléments visuels innovants comme le logo 3D.

**Date de création** : 30 novembre 2025  
**Source** : Analyse complète du site www.meeneo.io  
**Version** : 1.0

---

*Document généré automatiquement à partir de l'analyse du site web Meeneo.io*

