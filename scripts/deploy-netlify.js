#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deploying to Netlify...\n');

// Vérifier si Netlify CLI est installé
try {
  execSync('netlify --version', { stdio: 'pipe' });
  console.log('✅ Netlify CLI found');
} catch (error) {
  console.log('📦 Installing Netlify CLI...');
  try {
    execSync('npm install -g netlify-cli', { stdio: 'inherit' });
    console.log('✅ Netlify CLI installed');
  } catch (installError) {
    console.error('❌ Failed to install Netlify CLI:', installError.message);
    console.log('Please install manually: npm install -g netlify-cli');
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

// Vérifier la configuration Netlify
if (fs.existsSync('netlify.toml')) {
  console.log('✅ Netlify configuration found');
} else {
  console.log('⚠️ Netlify configuration not found, using defaults');
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

// Déployer sur Netlify
console.log('\n🚀 Deploying to Netlify...');
try {
  execSync('netlify deploy --prod --dir=.next', { stdio: 'inherit' });
  console.log('✅ Deployment completed successfully');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  console.log('\nTroubleshooting:');
  console.log('1. Make sure you are logged in: netlify login');
  console.log('2. Check your Netlify account permissions');
  console.log('3. Verify your project configuration');
  console.log('4. Try: netlify init (if first time)');
  process.exit(1);
}

console.log('\n🎉 Portfolio deployed to Netlify!');
console.log('📱 Your site is now live and accessible worldwide');
console.log('🔗 Check your Netlify dashboard for the deployment URL');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
