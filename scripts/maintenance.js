#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Portfolio maintenance script...\n');

// Fonction pour nettoyer les fichiers temporaires
function cleanTempFiles() {
  console.log('🧹 Cleaning temporary files...');
  
  const tempDirs = ['.next', 'out', 'node_modules/.cache'];
  let cleanedCount = 0;
  
  for (const dir of tempDirs) {
    if (fs.existsSync(dir)) {
      try {
        execSync(`rm -rf ${dir}`, { stdio: 'pipe' });
        console.log(`✅ Cleaned ${dir}`);
        cleanedCount++;
      } catch (error) {
        console.log(`⚠️ Could not clean ${dir}: ${error.message}`);
      }
    }
  }
  
  console.log(`✅ Cleaned ${cleanedCount} directories`);
}

// Fonction pour vérifier les dépendances
function checkDependencies() {
  console.log('📦 Checking dependencies...');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    
    console.log(`✅ Found ${Object.keys(dependencies).length} dependencies`);
    console.log(`✅ Found ${Object.keys(devDependencies).length} dev dependencies`);
    
    // Vérifier les versions
    for (const [name, version] of Object.entries(dependencies)) {
      if (version.includes('^') || version.includes('~')) {
        console.log(`⚠️ ${name}: ${version} (version range)`);
      } else {
        console.log(`✅ ${name}: ${version} (exact version)`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error reading package.json:', error.message);
  }
}

// Fonction pour vérifier la configuration
function checkConfiguration() {
  console.log('🔍 Checking configuration...');
  
  const configFiles = [
    'tailwind.config.js',
    'next.config.js',
    'tsconfig.json',
    'package.json'
  ];
  
  for (const file of configFiles) {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (file.endsWith('.json')) {
          JSON.parse(content);
        }
        console.log(`✅ ${file} is valid`);
      } catch (error) {
        console.error(`❌ ${file} is invalid: ${error.message}`);
      }
    } else {
      console.error(`❌ ${file} not found`);
    }
  }
}

// Fonction pour vérifier les composants
function checkComponents() {
  console.log('⚛️ Checking React components...');
  
  const componentDir = 'src/components';
  if (!fs.existsSync(componentDir)) {
    console.error('❌ Components directory not found');
    return;
  }
  
  const components = fs.readdirSync(componentDir);
  let validComponents = 0;
  
  for (const component of components) {
    if (component.endsWith('.tsx')) {
      try {
        const content = fs.readFileSync(path.join(componentDir, component), 'utf8');
        if (content.includes('export default') && content.includes('React')) {
          console.log(`✅ ${component} is valid`);
          validComponents++;
        } else {
          console.log(`⚠️ ${component} might be invalid`);
        }
      } catch (error) {
        console.error(`❌ Error reading ${component}: ${error.message}`);
      }
    }
  }
  
  console.log(`✅ Found ${validComponents} valid components`);
}

// Fonction pour vérifier les styles
function checkStyles() {
  console.log('🎨 Checking styles...');
  
  const styleFiles = [
    'src/app/globals.css',
    'tailwind.config.js'
  ];
  
  for (const file of styleFiles) {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (file.endsWith('.css')) {
          if (content.includes('@tailwind base') && content.includes('@tailwind components')) {
            console.log(`✅ ${file} has Tailwind imports`);
          } else {
            console.log(`⚠️ ${file} might be missing Tailwind imports`);
          }
        } else {
          console.log(`✅ ${file} is valid`);
        }
      } catch (error) {
        console.error(`❌ Error reading ${file}: ${error.message}`);
      }
    } else {
      console.error(`❌ ${file} not found`);
    }
  }
}

// Fonction pour vérifier les métadonnées
function checkMetadata() {
  console.log('📄 Checking metadata...');
  
  const metadataFiles = [
    'src/lib/constants.ts',
    'src/lib/types.ts',
    'src/lib/seo.ts'
  ];
  
  for (const file of metadataFiles) {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('export') && content.length > 100) {
          console.log(`✅ ${file} has content`);
        } else {
          console.log(`⚠️ ${file} might be empty or invalid`);
        }
      } catch (error) {
        console.error(`❌ Error reading ${file}: ${error.message}`);
      }
    } else {
      console.error(`❌ ${file} not found`);
    }
  }
}

// Fonction pour générer un rapport
function generateReport() {
  console.log('📊 Generating maintenance report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    files: {
      components: fs.existsSync('src/components') ? fs.readdirSync('src/components').length : 0,
      pages: fs.existsSync('src/app') ? fs.readdirSync('src/app').length : 0,
      lib: fs.existsSync('src/lib') ? fs.readdirSync('src/lib').length : 0,
    },
    config: {
      tailwind: fs.existsSync('tailwind.config.js'),
      nextjs: fs.existsSync('next.config.js'),
      typescript: fs.existsSync('tsconfig.json'),
      package: fs.existsSync('package.json'),
    }
  };
  
  fs.writeFileSync('maintenance-report.json', JSON.stringify(report, null, 2));
  console.log('✅ Maintenance report saved to maintenance-report.json');
}

// Fonction principale
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log('🔧 Portfolio Maintenance Script');
    console.log('\nUsage: node scripts/maintenance.js [options]');
    console.log('\nOptions:');
    console.log('  --clean        Clean temporary files');
    console.log('  --check        Check dependencies and configuration');
    console.log('  --components   Check React components');
    console.log('  --styles       Check styles and CSS');
    console.log('  --metadata     Check metadata files');
    console.log('  --report       Generate maintenance report');
    console.log('  --all          Run all checks');
    console.log('  --help, -h     Show this help message');
    return;
  }
  
  if (args.includes('--clean') || args.includes('--all')) {
    cleanTempFiles();
  }
  
  if (args.includes('--check') || args.includes('--all')) {
    checkDependencies();
    checkConfiguration();
  }
  
  if (args.includes('--components') || args.includes('--all')) {
    checkComponents();
  }
  
  if (args.includes('--styles') || args.includes('--all')) {
    checkStyles();
  }
  
  if (args.includes('--metadata') || args.includes('--all')) {
    checkMetadata();
  }
  
  if (args.includes('--report') || args.includes('--all')) {
    generateReport();
  }
  
  if (args.length === 0) {
    console.log('🔧 Portfolio Maintenance Script');
    console.log('\nRun with --help to see available options');
    console.log('Example: node scripts/maintenance.js --all');
  }
  
  console.log('\n✅ Maintenance completed!');
}

// Exécuter le script
main();
