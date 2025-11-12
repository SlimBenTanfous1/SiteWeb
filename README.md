# Portfolio Slim Ben Tanfous

Un portfolio moderne et interactif développé avec Next.js 14, TypeScript et Tailwind CSS, présentant le profil professionnel de Slim Ben Tanfous, étudiant ingénieur en cybersécurité.

## 🚀 Fonctionnalités

- **Design moderne** : Interface inspirée de la pop culture avec des effets visuels cyberpunk
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations fluides** : Utilisation de Framer Motion pour des transitions élégantes
- **Sections complètes** :
  - Hero avec présentation personnelle
  - À propos avec informations détaillées
  - Compétences techniques avec barres de progression
  - Expérience professionnelle et stages
  - Projets académiques et personnels
  - Formulaire de contact interactif
- **Performance optimisée** : Chargement rapide et SEO-friendly

## 🛠️ Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Fonts** : Google Fonts (Inter, Orbitron)

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/slim-ben-tanfous/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- `neon-blue` : #00ffff
- `neon-pink` : #ff0080
- `neon-green` : #00ff00
- `neon-purple` : #8000ff
- `neon-orange` : #ff8000

### Contenu
Modifiez les composants dans `src/components/` pour personnaliser :
- Informations personnelles
- Compétences
- Expériences
- Projets
- Contact

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Déployer le dossier .next
```

### Autres plateformes
Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js.

## 📄 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── LoadingScreen.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎯 Fonctionnalités avancées

- **Loading screen** animé au chargement
- **Effets de curseur** personnalisés
- **Particules de fond** animées
- **Scroll smooth** entre les sections
- **Formulaires** avec validation
- **Animations** au scroll (Intersection Observer)
- **Gradients** et effets de glow
- **Typographie** cyberpunk

## 📞 Contact

- **Email** : slim.bentanfous@esprit.tn
- **LinkedIn** : [Slim Ben Tanfous](https://linkedin.com/in/slim-ben-tanfous-971b19244/)
- **GitHub** : [slim-ben-tanfous](https://github.com/Slimbentanfous1)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---



**Développé avec ❤️ par Slim Ben Tanfous**
