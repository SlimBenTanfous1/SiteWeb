# 🚀 Guide de Déploiement

## 📋 Prérequis

- Node.js 18+ installé
- Compte GitHub
- Compte Vercel/Netlify (optionnel)

## 🛠️ Installation Locale

### 1. Cloner le repository
```bash
git clone https://github.com/slim-ben-tanfous/portfolio.git
cd portfolio
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

### 4. Ouvrir dans le navigateur
```
http://localhost:3000
```

## 🌐 Déploiement en Production

### Option 1: Vercel (Recommandé)

#### Déploiement automatique
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement

#### Déploiement manuel
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Option 2: Netlify

#### Déploiement automatique
1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `.next`

#### Déploiement manuel
```bash
# Build du projet
npm run build

# Déployer le dossier .next sur Netlify
```

### Option 3: Autres plateformes

#### VPS/Dédié
```bash
# Build du projet
npm run build

# Démarrer en production
npm start
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## ⚙️ Configuration

### Variables d'environnement
Copiez `env.example` vers `.env.local` et configurez :

```env
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/votre-profil
NEXT_PUBLIC_GITHUB_URL=https://github.com/votre-username
NEXT_PUBLIC_CONTACT_EMAIL=votre@email.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890
```

### Personnalisation
1. Modifiez les informations dans `src/components/`
2. Changez les couleurs dans `tailwind.config.js`
3. Ajoutez votre CV dans `public/cv-slim-ben-tanfous.pdf`

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint

# Utilitaires
npm run setup        # Configuration initiale
npm run clean        # Nettoyer les fichiers de build
npm run type-check   # Vérification TypeScript
```

## 📊 Optimisations

### Performance
- ✅ Images optimisées automatiquement
- ✅ CSS purgé automatiquement
- ✅ JavaScript minifié
- ✅ Lazy loading des composants

### SEO
- ✅ Meta tags complets
- ✅ Sitemap automatique
- ✅ Robots.txt
- ✅ Open Graph

### Sécurité
- ✅ Headers de sécurité
- ✅ CSP (Content Security Policy)
- ✅ HTTPS obligatoire

## 🐛 Dépannage

### Erreurs communes

#### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

#### "Build failed"
```bash
npm run clean
npm run build
```

#### "Port already in use"
```bash
# Changer le port
npm run dev -- -p 3001
```

### Logs de débogage
```bash
# Mode debug
DEBUG=* npm run dev

# Logs détaillés
npm run dev -- --verbose
```

## 📈 Monitoring

### Analytics
Ajoutez Google Analytics dans `src/app/layout.tsx` :

```tsx
// Google Analytics
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Performance
- Utilisez Lighthouse pour tester les performances
- Surveillez les Core Web Vitals
- Optimisez les images et les fonts

## 🔄 Mises à jour

### Mise à jour des dépendances
```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour
npm update

# Mise à jour majeure
npm install package@latest
```

### Mise à jour du contenu
1. Modifiez les composants dans `src/components/`
2. Ajoutez de nouveaux projets
3. Mettez à jour les compétences
4. Déployez automatiquement

## 📞 Support

Pour toute question ou problème :
- 📧 Email: slim.bentanfous@esprit.tn
- 💬 GitHub Issues
- 📱 Téléphone: +216 23 17 77 05

---

*Guide de déploiement mis à jour pour le portfolio Slim Ben Tanfous*
