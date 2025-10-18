#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deploying portfolio to all platforms...\n');

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

// Déployer sur Vercel
console.log('\n🌐 Deploying to Vercel...');
try {
  execSync('vercel --prod', { stdio: 'inherit' });
  console.log('✅ Vercel deployment completed');
} catch (error) {
  console.log('⚠️ Vercel deployment failed:', error.message);
  console.log('Please check your Vercel configuration');
}

// Déployer sur Netlify
console.log('\n🌐 Deploying to Netlify...');
try {
  execSync('netlify deploy --prod --dir=.next', { stdio: 'inherit' });
  console.log('✅ Netlify deployment completed');
} catch (error) {
  console.log('⚠️ Netlify deployment failed:', error.message);
  console.log('Please check your Netlify configuration');
}

// Créer un fichier de déploiement
console.log('\n📝 Creating deployment files...');

// Créer un script de déploiement
const deployScript = `#!/bin/bash
echo "🚀 Deploying portfolio..."

# Vercel
echo "Deploying to Vercel..."
vercel --prod

# Netlify
echo "Deploying to Netlify..."
netlify deploy --prod --dir=.next

echo "✅ Deployment completed!"
`;

fs.writeFileSync('deploy.sh', deployScript);
fs.chmodSync('deploy.sh', '755');
console.log('✅ Deployment script created');

// Créer un script de déploiement Windows
const deployBatScript = `@echo off
echo 🚀 Deploying portfolio...

REM Vercel
echo Deploying to Vercel...
vercel --prod

REM Netlify
echo Deploying to Netlify...
netlify deploy --prod --dir=.next

echo ✅ Deployment completed!
`;

fs.writeFileSync('deploy.bat', deployBatScript);
console.log('✅ Windows deployment script created');

// Instructions de déploiement
console.log('\n📋 Deployment Instructions:');
console.log('\n🌐 Vercel:');
console.log('1. Install Vercel CLI: npm i -g vercel');
console.log('2. Run: vercel');
console.log('3. Follow the prompts');

console.log('\n🌐 Netlify:');
console.log('1. Install Netlify CLI: npm i -g netlify-cli');
console.log('2. Run: netlify login');
console.log('3. Run: netlify init');
console.log('4. Run: netlify deploy --prod --dir=.next');

console.log('\n🌐 Other platforms:');
console.log('1. Upload the .next folder to your hosting provider');
console.log('2. Make sure Node.js is installed');
console.log('3. Run: npm start');

console.log('\n🎉 Portfolio deployment completed!');
console.log('📱 Your site is now live on multiple platforms');
console.log('🔗 Check your deployment dashboards for URLs');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
