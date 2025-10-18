# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer au portfolio de Slim Ben Tanfous !

## 📋 Comment Contribuer

### 🐛 Signaler un Bug
1. Vérifiez que le bug n'a pas déjà été signalé
2. Créez une issue avec le label "bug"
3. Décrivez clairement le problème
4. Incluez des étapes pour reproduire le bug

### ✨ Proposer une Amélioration
1. Créez une issue avec le label "enhancement"
2. Décrivez l'amélioration proposée
3. Expliquez pourquoi elle serait utile
4. Incluez des exemples si possible

### 🔧 Contribuer au Code
1. Fork le repository
2. Créez une branche pour votre fonctionnalité
3. Commitez vos changements
4. Poussez vers votre fork
5. Créez une Pull Request

## 🛠️ Développement

### Prérequis
- Node.js 18+
- npm, yarn ou pnpm
- Git

### Installation
```bash
# Fork et cloner
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Structure du Projet
```
src/
├── app/                 # Pages et layout Next.js
├── components/          # Composants React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── LoadingScreen.tsx
└── lib/                 # Utilitaires
```

### Standards de Code

#### TypeScript
- Utilisez TypeScript pour tous les nouveaux fichiers
- Définissez des types explicites
- Évitez `any` autant que possible

#### React
- Utilisez des composants fonctionnels
- Utilisez des hooks React
- Préférez `const` à `let`

#### Styling
- Utilisez Tailwind CSS
- Suivez la convention de nommage des classes
- Utilisez les couleurs définies dans `tailwind.config.js`

#### Animations
- Utilisez Framer Motion pour les animations
- Évitez les animations trop lourdes
- Testez sur mobile

### Tests
```bash
# Linter
npm run lint

# Type checking
npm run type-check

# Build test
npm run build
```

## 📝 Guidelines

### Messages de Commit
Utilisez le format conventionnel :
```
type(scope): description

feat: add new project card component
fix: resolve mobile navigation issue
docs: update README with new features
style: improve button hover effects
refactor: simplify contact form logic
```

### Pull Requests
1. **Titre clair** : Décrivez brièvement les changements
2. **Description détaillée** : Expliquez ce qui a été fait
3. **Screenshots** : Si applicable, incluez des captures d'écran
4. **Tests** : Vérifiez que tout fonctionne

### Code Review
- Vérifiez la qualité du code
- Testez les fonctionnalités
- Vérifiez la responsivité
- Vérifiez les performances

## 🎨 Design

### Couleurs
- Utilisez la palette définie dans `tailwind.config.js`
- Respectez la cohérence visuelle
- Testez le contraste

### Animations
- Gardez les animations fluides
- Évitez les animations trop rapides
- Testez sur différents appareils

### Responsive
- Testez sur mobile, tablette et desktop
- Utilisez les breakpoints Tailwind
- Vérifiez la lisibilité

## 🚀 Déploiement

### Branches
- `main` : Version de production
- `develop` : Version de développement
- `feature/*` : Nouvelles fonctionnalités
- `bugfix/*` : Corrections de bugs

### Processus
1. Créez une branche depuis `develop`
2. Développez votre fonctionnalité
3. Testez localement
4. Créez une Pull Request
5. Après review, merge vers `develop`
6. Déployez en production

## 📞 Contact

Pour toute question :
- 📧 Email: slim.bentanfous@esprit.tn
- 💬 GitHub Discussions
- 📱 Téléphone: +216 23 17 77 05

## 🙏 Remerciements

Merci à tous les contributeurs qui aident à améliorer ce portfolio !

---

*Guide de contribution mis à jour pour le portfolio Slim Ben Tanfous*
