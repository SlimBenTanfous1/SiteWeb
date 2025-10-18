#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('☁️ Deploying to Azure...\n');

// Vérifier si Azure CLI est installé
try {
  execSync('az --version', { stdio: 'pipe' });
  console.log('✅ Azure CLI found');
} catch (error) {
  console.log('📦 Installing Azure CLI...');
  try {
    execSync('npm install -g azure-cli', { stdio: 'inherit' });
    console.log('✅ Azure CLI installed');
  } catch (installError) {
    console.error('❌ Failed to install Azure CLI:', installError.message);
    console.log('Please install manually: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli');
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

// Créer configuration Azure
console.log('\n⚙️ Creating Azure configuration...');

// Créer web.config pour Azure App Service
const webConfig = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <webSocket enabled="false" />
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server.js\/debug[\/]?" />
        </rule>
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server.js"/>
        </rule>
      </rules>
    </rewrite>
    <security>
      <requestFiltering>
        <hiddenSegments>
          <remove segment="bin"/>
        </hiddenSegments>
      </requestFiltering>
    </security>
    <httpErrors existingResponse="PassThrough" />
    <iisnode watchedFiles="web.config;*.js"/>
  </system.webServer>
</configuration>
`;

fs.writeFileSync('web.config', webConfig);
console.log('✅ web.config created');

// Créer server.js pour Azure
const serverJs = `const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000));
  });
});
`;

fs.writeFileSync('server.js', serverJs);
console.log('✅ server.js created');

// Créer package.json pour Azure
const azurePackageJson = `{
  "name": "portfolio-slim-ben-tanfous",
  "version": "1.0.0",
  "description": "Portfolio de Slim Ben Tanfous",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18"
  },
  "engines": {
    "node": "18.x"
  }
}`;

fs.writeFileSync('azure-package.json', azurePackageJson);
console.log('✅ Azure package.json created');

// Créer script de déploiement Azure
console.log('📝 Creating Azure deployment script...');
const azureDeployScript = `#!/bin/bash
echo "☁️ Deploying to Azure..."

# Login to Azure
echo "🔐 Logging in to Azure..."
az login

# Create resource group
echo "📦 Creating resource group..."
az group create --name portfolio-rg --location eastus

# Create App Service plan
echo "📋 Creating App Service plan..."
az appservice plan create --name portfolio-plan --resource-group portfolio-rg --sku B1 --is-linux

# Create web app
echo "🌐 Creating web app..."
az webapp create --resource-group portfolio-rg --plan portfolio-plan --name portfolio-slim-ben-tanfous --runtime "NODE|18-lts"

# Configure app settings
echo "⚙️ Configuring app settings..."
az webapp config appsettings set --resource-group portfolio-rg --name portfolio-slim-ben-tanfous --settings NODE_ENV=production

# Deploy code
echo "🚀 Deploying code..."
az webapp deployment source config --resource-group portfolio-rg --name portfolio-slim-ben-tanfous --repo-url https://github.com/yourusername/portfolio.git --branch main --manual-integration

echo "✅ Deployment completed!"
echo "🔗 Your site is available at: https://portfolio-slim-ben-tanfous.azurewebsites.net"
`;

fs.writeFileSync('azure-deploy.sh', azureDeployScript);
fs.chmodSync('azure-deploy.sh', '755');
console.log('✅ Azure deployment script created');

// Créer configuration Azure Static Web Apps
const azureStaticWebAppsConfig = `{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,jpeg,gif,svg}", "/css/*"]
  },
  "mimeTypes": {
    ".json": "application/json"
  }
}`;

fs.writeFileSync('staticwebapp.config.json', azureStaticWebAppsConfig);
console.log('✅ Azure Static Web Apps configuration created');

// Instructions de déploiement
console.log('\n📋 Azure Deployment Instructions:');
console.log('\n☁️ Prerequisites:');
console.log('1. Azure CLI configured with credentials');
console.log('2. Azure subscription');
console.log('3. Appropriate Azure permissions');

console.log('\n☁️ Deployment steps:');
console.log('1. Run: chmod +x azure-deploy.sh');
console.log('2. Run: ./azure-deploy.sh');
console.log('3. Follow the prompts');

console.log('\n☁️ Manual deployment:');
console.log('1. Login: az login');
console.log('2. Create resource group: az group create --name portfolio-rg --location eastus');
console.log('3. Create App Service plan: az appservice plan create --name portfolio-plan --resource-group portfolio-rg --sku B1 --is-linux');
console.log('4. Create web app: az webapp create --resource-group portfolio-rg --plan portfolio-plan --name portfolio-slim-ben-tanfous --runtime "NODE|18-lts"');

console.log('\n☁️ Azure Services used:');
console.log('- Azure App Service (for hosting)');
console.log('- Azure Static Web Apps (for static content)');
console.log('- Azure CDN (for content delivery)');
console.log('- Azure DNS (for domain management)');

console.log('\n🎉 Azure deployment files created!');
console.log('📱 Your portfolio can now be deployed to Azure');
console.log('🔗 Perfect for enterprise and Microsoft ecosystem deployments');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
