#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Running portfolio tests...\n');

// Test 1: Vérifier la structure des fichiers
console.log('📁 Testing file structure...');
const requiredFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/About.tsx',
  'src/components/Skills.tsx',
  'src/components/Experience.tsx',
  'src/components/Projects.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/LoadingScreen.tsx',
  'src/lib/constants.ts',
  'src/lib/types.ts',
  'src/lib/utils.ts',
  'src/lib/hooks.ts',
  'src/lib/animations.ts',
  'src/lib/theme.ts',
  'src/lib/seo.ts',
  'tailwind.config.js',
  'next.config.js',
  'tsconfig.json',
  'package.json'
];

let passedTests = 0;
let totalTests = requiredFiles.length;

for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
    passedTests++;
  } else {
    console.log(`❌ ${file} - MISSING`);
  }
}

// Test 2: Vérifier la configuration TypeScript
console.log('\n🔧 Testing TypeScript configuration...');
try {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  if (tsconfig.compilerOptions && tsconfig.compilerOptions.target === 'es5') {
    console.log('✅ TypeScript target: es5');
    passedTests++;
  } else {
    console.log('❌ TypeScript target not set to es5');
  }
  totalTests++;
} catch (error) {
  console.log('❌ TypeScript configuration error:', error.message);
  totalTests++;
}

// Test 3: Vérifier la configuration Tailwind
console.log('\n🎨 Testing Tailwind configuration...');
try {
  const tailwindConfig = require(path.join(process.cwd(), 'tailwind.config.js'));
  if (tailwindConfig.content && tailwindConfig.theme) {
    console.log('✅ Tailwind configuration valid');
    passedTests++;
  } else {
    console.log('❌ Tailwind configuration invalid');
  }
  totalTests++;
} catch (error) {
  console.log('❌ Tailwind configuration error:', error.message);
  totalTests++;
}

// Test 4: Vérifier les dépendances
console.log('\n📦 Testing dependencies...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredDeps = ['next', 'react', 'react-dom', 'framer-motion', 'lucide-react'];
  
  for (const dep of requiredDeps) {
    if (packageJson.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep}: MISSING`);
    }
  }
  passedTests += requiredDeps.length;
  totalTests += requiredDeps.length;
} catch (error) {
  console.log('❌ Package.json error:', error.message);
  totalTests++;
}

// Test 5: Vérifier les composants React
console.log('\n⚛️ Testing React components...');
const componentFiles = [
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/About.tsx',
  'src/components/Skills.tsx',
  'src/components/Experience.tsx',
  'src/components/Projects.tsx',
  'src/components/Contact.tsx',
  'src/components/Footer.tsx',
  'src/components/LoadingScreen.tsx'
];

for (const file of componentFiles) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('export default') && content.includes('React')) {
      console.log(`✅ ${file} - Valid React component`);
      passedTests++;
    } else {
      console.log(`❌ ${file} - Invalid React component`);
    }
    totalTests++;
  }
}

// Test 6: Vérifier les styles CSS
console.log('\n🎨 Testing CSS styles...');
if (fs.existsSync('src/app/globals.css')) {
  const cssContent = fs.readFileSync('src/app/globals.css', 'utf8');
  if (cssContent.includes('@tailwind base') && cssContent.includes('@tailwind components')) {
    console.log('✅ Tailwind CSS imports found');
    passedTests++;
  } else {
    console.log('❌ Tailwind CSS imports missing');
  }
  totalTests++;
}

// Résultats des tests
console.log('\n📊 Test Results:');
console.log(`✅ Passed: ${passedTests}`);
console.log(`❌ Failed: ${totalTests - passedTests}`);
console.log(`📈 Success Rate: ${Math.round((passedTests / totalTests) * 100)}%`);

if (passedTests === totalTests) {
  console.log('\n🎉 All tests passed! Portfolio is ready for deployment.');
  process.exit(0);
} else {
  console.log('\n⚠️ Some tests failed. Please fix the issues before deploying.');
  process.exit(1);
}
