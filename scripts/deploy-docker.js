#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🐳 Deploying with Docker...\n');

// Vérifier si Docker est installé
try {
  execSync('docker --version', { stdio: 'pipe' });
  console.log('✅ Docker found');
} catch (error) {
  console.error('❌ Docker not found. Please install Docker first.');
  process.exit(1);
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

// Créer Dockerfile
console.log('\n📝 Creating Dockerfile...');
const dockerfileContent = `# Use the official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
`;

fs.writeFileSync('Dockerfile', dockerfileContent);
console.log('✅ Dockerfile created');

// Créer .dockerignore
console.log('📝 Creating .dockerignore...');
const dockerignoreContent = `node_modules
.next
.git
.gitignore
README.md
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.tsbuildinfo
`;

fs.writeFileSync('.dockerignore', dockerignoreContent);
console.log('✅ .dockerignore created');

// Créer docker-compose.yml
console.log('📝 Creating docker-compose.yml...');
const dockerComposeContent = `version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
`;

fs.writeFileSync('docker-compose.yml', dockerComposeContent);
console.log('✅ docker-compose.yml created');

// Créer script de déploiement Docker
console.log('📝 Creating Docker deployment script...');
const dockerDeployScript = `#!/bin/bash
echo "🐳 Building Docker image..."

# Build the image
docker build -t portfolio-slim-ben-tanfous .

echo "🚀 Starting container..."

# Run the container
docker run -d -p 3000:3000 --name portfolio portfolio-slim-ben-tanfous

echo "✅ Portfolio is running on http://localhost:3000"
echo "🛑 To stop: docker stop portfolio"
echo "🗑️ To remove: docker rm portfolio"
`;

fs.writeFileSync('docker-deploy.sh', dockerDeployScript);
fs.chmodSync('docker-deploy.sh', '755');
console.log('✅ Docker deployment script created');

// Créer script de déploiement Docker Compose
console.log('📝 Creating Docker Compose deployment script...');
const dockerComposeDeployScript = `#!/bin/bash
echo "🐳 Starting with Docker Compose..."

# Start services
docker-compose up -d

echo "✅ Portfolio is running on http://localhost:3000"
echo "🛑 To stop: docker-compose down"
echo "📊 To view logs: docker-compose logs -f"
`;

fs.writeFileSync('docker-compose-deploy.sh', dockerComposeDeployScript);
fs.chmodSync('docker-compose-deploy.sh', '755');
console.log('✅ Docker Compose deployment script created');

// Instructions de déploiement
console.log('\n📋 Docker Deployment Instructions:');
console.log('\n🐳 Using Docker:');
console.log('1. Run: chmod +x docker-deploy.sh');
console.log('2. Run: ./docker-deploy.sh');
console.log('3. Open http://localhost:3000');

console.log('\n🐳 Using Docker Compose:');
console.log('1. Run: chmod +x docker-compose-deploy.sh');
console.log('2. Run: ./docker-compose-deploy.sh');
console.log('3. Open http://localhost:3000');

console.log('\n🐳 Manual Docker commands:');
console.log('1. Build: docker build -t portfolio-slim-ben-tanfous .');
console.log('2. Run: docker run -d -p 3000:3000 --name portfolio portfolio-slim-ben-tanfous');
console.log('3. Stop: docker stop portfolio');
console.log('4. Remove: docker rm portfolio');

console.log('\n🐳 Docker Compose commands:');
console.log('1. Start: docker-compose up -d');
console.log('2. Stop: docker-compose down');
console.log('3. Logs: docker-compose logs -f');
console.log('4. Restart: docker-compose restart');

console.log('\n🎉 Docker deployment files created!');
console.log('📱 Your portfolio can now be deployed with Docker');
console.log('🔗 Perfect for VPS, cloud servers, and containerized deployments');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
