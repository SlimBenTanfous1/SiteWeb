#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Configuration du portfolio Slim Ben Tanfous...\n');

// Vérifier si Node.js est installé
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

// Créer le dossier public s'il n'existe pas
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Dossier public créé');
}

// Créer un fichier de placeholder pour le CV
const cvPath = path.join(publicDir, 'cv-slim-ben-tanfous.pdf');
if (!fs.existsSync(cvPath)) {
  fs.writeFileSync(cvPath, '');
  console.log('✅ Fichier CV placeholder créé');
}

console.log('\n🎉 Configuration terminée !');
console.log('\n📋 Prochaines étapes :');
console.log('1. Installez les dépendances : npm install');
console.log('2. Lancez le serveur de développement : npm run dev');
console.log('3. Ouvrez http://localhost:3000 dans votre navigateur');
console.log('\n💡 N\'oubliez pas de remplacer le fichier CV placeholder par votre vrai CV !');
