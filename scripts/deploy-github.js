#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deploying to GitHub Pages...\n');

// Vérifier si Git est installé
try {
  execSync('git --version', { stdio: 'pipe' });
  console.log('✅ Git found');
} catch (error) {
  console.error('❌ Git not found. Please install Git first.');
  process.exit(1);
}

// Vérifier si nous sommes dans un repository Git
try {
  execSync('git status', { stdio: 'pipe' });
  console.log('✅ Git repository found');
} catch (error) {
  console.error('❌ Not a Git repository. Please initialize Git first.');
  process.exit(1);
}

// Vérifier la configuration
console.log('🔍 Checking configuration...');

// Vérifier les fichiers essentiels
const essentialFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'tailwind.config.js',
  'next.config.js',
  'package.json'
];

for (const file of essentialFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing essential file: ${file}`);
    process.exit(1);
  }
}

console.log('✅ Configuration valid');

// Installer les dépendances
console.log('\n📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Build du projet
console.log('\n🔨 Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Configurer Next.js pour GitHub Pages
console.log('\n⚙️ Configuring for GitHub Pages...');

// Mettre à jour next.config.js pour GitHub Pages
const nextConfigContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
}

module.exports = nextConfig
`;

fs.writeFileSync('next.config.js', nextConfigContent);
console.log('✅ Next.js configured for GitHub Pages');

// Créer un fichier .nojekyll
fs.writeFileSync('out/.nojekyll', '');
console.log('✅ .nojekyll file created');

// Créer un fichier 404.html
const notFoundContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Page Not Found</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #333; }
        p { color: #666; }
        a { color: #007bff; text-decoration: none; }
    </style>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/portfolio">Go back to home</a>
</body>
</html>
`;

fs.writeFileSync('out/404.html', notFoundContent);
console.log('✅ 404.html file created');

// Créer un fichier CNAME (optionnel)
const cnameContent = 'slim-ben-tanfous.github.io';
fs.writeFileSync('out/CNAME', cnameContent);
console.log('✅ CNAME file created');

// Ajouter et commiter les changements
console.log('\n📝 Committing changes...');
try {
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy portfolio to GitHub Pages"', { stdio: 'inherit' });
  console.log('✅ Changes committed');
} catch (error) {
  console.log('⚠️ No changes to commit or commit failed');
}

// Pousser vers GitHub
console.log('\n🚀 Pushing to GitHub...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Changes pushed to GitHub');
} catch (error) {
  console.error('❌ Failed to push to GitHub:', error.message);
  console.log('Please check your Git configuration and try again');
  process.exit(1);
}

// Instructions de configuration GitHub Pages
console.log('\n📋 GitHub Pages Configuration:');
console.log('1. Go to your GitHub repository');
console.log('2. Click on Settings');
console.log('3. Scroll down to Pages section');
console.log('4. Select "Deploy from a branch"');
console.log('5. Choose "main" branch');
console.log('6. Select "/ (root)" folder');
console.log('7. Click Save');
console.log('8. Your site will be available at: https://yourusername.github.io/portfolio');

console.log('\n🎉 Portfolio deployed to GitHub Pages!');
console.log('📱 Your site will be live in a few minutes');
console.log('🔗 Check your GitHub repository for the deployment status');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
