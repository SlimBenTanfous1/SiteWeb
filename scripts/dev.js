#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

console.log('🚀 Starting portfolio development server...\n');

// Vérifier si Node.js est installé
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

// Vérifier si nous sommes dans le bon répertoire
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Vérifier les dépendances
console.log('📦 Checking dependencies...');
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed');
}

// Vérifier la configuration
console.log('🔍 Checking configuration...');

// Vérifier TypeScript
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  console.log('✅ TypeScript configuration valid');
} catch (error) {
  console.warn('⚠️ TypeScript warnings (this is normal in development)');
}

// Vérifier Tailwind
if (fs.existsSync('tailwind.config.js')) {
  console.log('✅ Tailwind configuration found');
} else {
  console.error('❌ Tailwind configuration not found');
  process.exit(1);
}

// Vérifier Next.js
if (fs.existsSync('next.config.js')) {
  console.log('✅ Next.js configuration found');
} else {
  console.error('❌ Next.js configuration not found');
  process.exit(1);
}

// Créer le dossier public s'il n'existe pas
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Public directory created');
}

// Créer un fichier de placeholder pour le CV
const cvPath = path.join(publicDir, 'cv-slim-ben-tanfous.pdf');
if (!fs.existsSync(cvPath)) {
  fs.writeFileSync(cvPath, '');
  console.log('✅ CV placeholder created');
}

// Démarrer le serveur de développement
console.log('\n🚀 Starting development server...');
console.log('📱 Open http://localhost:3000 in your browser');
console.log('🛑 Press Ctrl+C to stop the server');
console.log('\n' + '='.repeat(50));

try {
  const devProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  devProcess.on('error', (error) => {
    console.error('❌ Failed to start development server:', error.message);
    process.exit(1);
  });

  devProcess.on('close', (code) => {
    console.log(`\n🛑 Development server stopped with code ${code}`);
  });

  // Gérer l'arrêt propre
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping development server...');
    devProcess.kill('SIGINT');
    process.exit(0);
  });

} catch (error) {
  console.error('❌ Failed to start development server:', error.message);
  process.exit(1);
}
