#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔨 Building portfolio...\n');

// Vérifier si Node.js est installé
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

// Vérifier les dépendances
console.log('📦 Checking dependencies...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredDeps = ['next', 'react', 'react-dom', 'framer-motion', 'lucide-react'];

for (const dep of requiredDeps) {
  if (!packageJson.dependencies[dep]) {
    console.error(`❌ Missing dependency: ${dep}`);
    process.exit(1);
  }
}

console.log('✅ All dependencies found');

// Créer le dossier public s'il n'existe pas
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Public directory created');
}

// Vérifier les fichiers essentiels
const essentialFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'tailwind.config.js',
  'next.config.js',
  'tsconfig.json'
];

console.log('📁 Checking essential files...');
for (const file of essentialFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing file: ${file}`);
    process.exit(1);
  }
}

console.log('✅ All essential files found');

// Vérifier la configuration TypeScript
console.log('🔧 Checking TypeScript configuration...');
try {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  if (!tsconfig.compilerOptions) {
    console.error('❌ Invalid TypeScript configuration');
    process.exit(1);
  }
  console.log('✅ TypeScript configuration valid');
} catch (error) {
  console.error('❌ Error reading tsconfig.json:', error.message);
  process.exit(1);
}

// Vérifier la configuration Tailwind
console.log('🎨 Checking Tailwind configuration...');
try {
  const tailwindConfig = require(path.join(process.cwd(), 'tailwind.config.js'));
  if (!tailwindConfig.content) {
    console.error('❌ Invalid Tailwind configuration');
    process.exit(1);
  }
  console.log('✅ Tailwind configuration valid');
} catch (error) {
  console.error('❌ Error reading tailwind.config.js:', error.message);
  process.exit(1);
}

console.log('\n🎉 Build preparation completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Run: npm run build');
console.log('2. Run: npm run start (for production)');
console.log('3. Or deploy to Vercel/Netlify');
