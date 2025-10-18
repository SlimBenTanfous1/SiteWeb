#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deploying to Vercel...\n');

// Vérifier si Vercel CLI est installé
try {
  execSync('vercel --version', { stdio: 'pipe' });
  console.log('✅ Vercel CLI found');
} catch (error) {
  console.log('📦 Installing Vercel CLI...');
  try {
    execSync('npm install -g vercel', { stdio: 'inherit' });
    console.log('✅ Vercel CLI installed');
  } catch (installError) {
    console.error('❌ Failed to install Vercel CLI:', installError.message);
    console.log('Please install manually: npm install -g vercel');
    process.exit(1);
  }
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

// Vérifier la configuration Vercel
if (fs.existsSync('vercel.json')) {
  console.log('✅ Vercel configuration found');
} else {
  console.log('⚠️ Vercel configuration not found, using defaults');
}

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
console.log('\n🚀 Deploying to Vercel...');
try {
  execSync('vercel --prod', { stdio: 'inherit' });
  console.log('✅ Deployment completed successfully');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.log('\nTroubleshooting:');
  console.log('1. Make sure you are logged in: vercel login');
  console.log('2. Check your Vercel account permissions');
  console.log('3. Verify your project configuration');
  process.exit(1);
}

console.log('\n🎉 Portfolio deployed to Vercel!');
console.log('📱 Your site is now live and accessible worldwide');
console.log('🔗 Check your Vercel dashboard for the deployment URL');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
