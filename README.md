# Dashboard Meeneo

Dashboard de visualisation et de gestion des données pour Meeneo, conforme à la charte graphique.

## 🎨 Styles Disponibles

Le dashboard propose trois styles distincts :

### 1. **Premium**
- Design élégant et sophistiqué
- Ombres subtiles et transitions douces
- Palette sobre (noir, gris, orange accent)

### 2. **Dynamic**
- Animations fluides et interactivité
- Couleurs vives et gradients
- Effets visuels prononcés

### 3. **Institutionnel**
- Design sobre et professionnel
- Layout strict et alignement précis
- Palette monochrome avec accents minimaux

## 📦 Structure du Projet

```
.
├── index.html          # Structure HTML du dashboard
├── styles.css          # Styles CSS pour les 3 variantes
├── app.js             # Logique JavaScript et animations
├── CHARTE_GRAPHIQUE_MEENEO.md  # Charte graphique complète
└── README.md          # Ce fichier
```

## 🚀 Utilisation

### Installation

1. Installez les dépendances :
```bash
npm install
```

2. Démarrez le serveur local :
```bash
npm start
```

3. Ouvrez votre navigateur sur : **http://localhost:3000**

### Alternative (sans Node.js)

Si vous n'avez pas Node.js, vous pouvez utiliser Python :
```bash
python3 -m http.server 8000
```
Puis ouvrez : **http://localhost:8000**

### Fonctionnalités

1. **Sélecteur de style** : Changez entre Premium, Dynamic et Institutionnel
2. **5 Boxes de métriques** : 
   - Revenus
   - Hashrate
   - Actifs miniers
   - Efficacité
   - Coût opérationnel
3. **Graphiques interactifs** :
   - Évolution des revenus (ligne)
   - Performance Hashrate (ligne)
   - Répartition des coûts (donut)
4. **Animations** :
   - Animations d'entrée au chargement
   - Animations au scroll (GSAP ScrollTrigger)
   - Compteurs animés pour les valeurs
   - Transitions au changement de style

## 🎯 Spécifications Techniques

### Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles avec variables CSS et responsive design
- **JavaScript ES6+** : Logique et interactions
- **Chart.js 4.4.0** : Bibliothèque de graphiques
- **GSAP 3.13.0** : Animations fluides
  - Core GSAP
  - ScrollTrigger

### Polices

- **F37Gruffy Regular** (400) : Texte standard
- **F37Gruffy Medium** (500) : Titres et valeurs importantes

### Responsive Design

- **Mobile** : < 768px - Layout empilé verticalement
- **Tablet** : 768px - 1024px - Grille 2-3 colonnes
- **Desktop** : > 1024px - Layout complet 5 colonnes

## 🎨 Personnalisation

### Changer les données

Modifiez les fonctions dans `app.js` :
- `getRevenueData()` : Données des revenus
- `getHashrateData()` : Données du hashrate
- `getCostsData()` : Données des coûts

### Modifier les couleurs

Les couleurs sont définies dans `:root` de `styles.css`. Modifiez les variables CSS pour personnaliser la palette.

### Ajouter des métriques

1. Ajoutez une nouvelle box dans `index.html` dans la section `.dashboard-metrics`
2. Ajoutez les styles correspondants dans `styles.css`
3. Mettez à jour les animations dans `app.js` si nécessaire

## 📱 Compatibilité

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Développement

Pour tester en local, vous pouvez utiliser un serveur HTTP simple :

```bash
# Python 3
python -m http.server 8000

# Node.js (avec http-server)
npx http-server -p 8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via CLI Vercel

1. Installez Vercel CLI :
```bash
npm i -g vercel
```

2. Connectez-vous :
```bash
vercel login
```

3. Déployez :
```bash
vercel
```

4. Pour la production :
```bash
vercel --prod
```

### Méthode 2 : Via GitHub (Recommandé)

1. Créez un repository GitHub
2. Poussez votre code :
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <votre-repo-url>
git push -u origin main
```

3. Allez sur [vercel.com](https://vercel.com)
4. Importez votre repository
5. Vercel détectera automatiquement la configuration

### Configuration Vercel

Le projet inclut déjà `vercel.json` avec la configuration optimale pour le déploiement.

## 📝 Notes

- Les données affichées sont des données de démonstration
- Les graphiques utilisent Chart.js avec configuration personnalisée selon le style
- Les animations GSAP sont optimisées pour les performances
- Le design respecte strictement la charte graphique Meeneo

## 📄 Licence

© 2025 Meeneo. All rights reserved.

