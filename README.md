# NeoDigital - Site Web de l'Agence

Site web moderne et professionnel pour l'agence NeoDigital, spécialisée dans la création de sites web sur mesure pour entrepreneurs, PME et marques marocaines.

## 🚀 Technologies

- **React 18** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Three Fiber** - Rendu 3D avec Three.js
- **React Router DOM** - Routing côté client
- **@react-three/drei** - Helpers pour React Three Fiber

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Build pour la production :
```bash
npm run build
```

4. Prévisualiser le build :
```bash
npm run preview
```

## 📂 Structure du Projet

```
NeoDigital/
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   └── Hero3D.jsx
│   ├── pages/            # Pages du site
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Composant principal avec routing
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Pages

- **Accueil** (`/`) - Section hero 3D, présentation et CTA
- **Services** (`/services`) - Liste des services proposés
- **Portfolio** (`/portfolio`) - Galerie de projets réalisés
- **À propos** (`/about`) - Présentation de l'agence et valeurs
- **Contact** (`/contact`) - Formulaire de contact et informations

## 🎯 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations fluides avec Framer Motion
- ✅ Effet 3D sur la page d'accueil (desktop uniquement)
- ✅ Navigation avec indicateur de page active
- ✅ Formulaire de contact fonctionnel
- ✅ Bouton WhatsApp flottant
- ✅ SEO optimisé (meta tags, structure sémantique)
- ✅ Mode clair uniquement (design futuriste)

## 🚀 Déploiement

### Vercel
1. Connecter votre repository GitHub
2. Vercel détectera automatiquement Vite
3. Le site sera déployé automatiquement

### Netlify
1. Connecter votre repository
2. Build command : `npm run build`
3. Publish directory : `dist`

## 📝 Notes

- Les images du portfolio utilisent Unsplash (remplacez par vos propres images)
- Le numéro WhatsApp est un placeholder (remplacez par votre numéro réel)
- L'email de contact est configuré dans le footer et la page contact
- Les liens réseaux sociaux pointent vers des URLs génériques (à mettre à jour)

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
- `primary`: #0ea5e9 (bleu)
- `dark`: #0f172a (gris foncé)

### Contenu
Tous les textes sont directement dans les composants pages. Modifiez-les selon vos besoins.

## 📧 Contact

Email : contact@neodigital.ma

---

Développé avec ❤️ par NeoDigital

