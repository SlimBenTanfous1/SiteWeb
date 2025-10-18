#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deploying portfolio...\n');

// Vérifier si nous sommes dans le bon répertoire
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Vérifier la configuration
console.log('🔍 Checking configuration...');

// Vérifier les fichiers essentiels
const essentialFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'tailwind.config.js',
  'next.config.js'
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

// Vérifier TypeScript
console.log('\n🔧 Checking TypeScript...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript check passed');
} catch (error) {
  console.error('❌ TypeScript check failed:', error.message);
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

// Vérifier que le build a créé les fichiers nécessaires
console.log('\n📁 Verifying build output...');
const buildFiles = [
  '.next/static',
  '.next/server',
  '.next/standalone'
];

let buildValid = true;
for (const file of buildFiles) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`⚠️ ${file} not found (this might be normal for some deployments)`);
  }
}

// Créer un fichier de déploiement
console.log('\n📝 Creating deployment files...');

// Vérifier la configuration Vercel
if (fs.existsSync('vercel.json')) {
  console.log('✅ Vercel configuration found');
} else {
  console.log('⚠️ Vercel configuration not found');
}

// Vérifier la configuration Netlify
if (fs.existsSync('netlify.toml')) {
  console.log('✅ Netlify configuration found');
} else {
  console.log('⚠️ Netlify configuration not found');
}

// Créer un script de démarrage
const startScript = `#!/bin/bash
echo "🚀 Starting portfolio..."
npm start
`;

fs.writeFileSync('start.sh', startScript);
fs.chmodSync('start.sh', '755');
console.log('✅ Start script created');

// Créer un script de démarrage Windows
const startBatScript = `@echo off
echo 🚀 Starting portfolio...
npm start
`;

fs.writeFileSync('start.bat', startBatScript);
console.log('✅ Windows start script created');

// Instructions de déploiement
console.log('\n📋 Deployment Instructions:');
console.log('\n🌐 Vercel (Recommended):');
console.log('1. Install Vercel CLI: npm i -g vercel');
console.log('2. Run: vercel');
console.log('3. Follow the prompts');
console.log('4. Your site will be deployed automatically');

console.log('\n🌐 Netlify:');
console.log('1. Connect your GitHub repository to Netlify');
console.log('2. Set build command: npm run build');
console.log('3. Set publish directory: .next');
console.log('4. Deploy!');

console.log('\n🌐 Other platforms:');
console.log('1. Upload the .next folder to your hosting provider');
console.log('2. Make sure Node.js is installed');
console.log('3. Run: npm start');

console.log('\n🎉 Portfolio is ready for deployment!');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
