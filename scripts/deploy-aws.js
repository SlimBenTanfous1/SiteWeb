#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('☁️ Deploying to AWS...\n');

// Vérifier si AWS CLI est installé
try {
  execSync('aws --version', { stdio: 'pipe' });
  console.log('✅ AWS CLI found');
} catch (error) {
  console.log('📦 Installing AWS CLI...');
  try {
    execSync('npm install -g aws-cli', { stdio: 'inherit' });
    console.log('✅ AWS CLI installed');
  } catch (installError) {
    console.error('❌ Failed to install AWS CLI:', installError.message);
    console.log('Please install manually: https://aws.amazon.com/cli/');
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

// Créer configuration AWS
console.log('\n⚙️ Creating AWS configuration...');

// Créer serverless.yml pour AWS Lambda
const serverlessContent = `service: portfolio-slim-ben-tanfous

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  stage: prod
  environment:
    NODE_ENV: production

functions:
  app:
    handler: index.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
      - http:
          path: /
          method: ANY

plugins:
  - serverless-nextjs-plugin

custom:
  nextjs:
    buildDir: .next
    serverlessDir: .serverless
`;

fs.writeFileSync('serverless.yml', serverlessContent);
console.log('✅ serverless.yml created');

// Créer index.js pour AWS Lambda
const lambdaHandler = `const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

module.exports.handler = (event, context, callback) => {
  // Lambda handler implementation
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'Portfolio API' })
  });
};
`;

fs.writeFileSync('index.js', lambdaHandler);
console.log('✅ Lambda handler created');

// Créer configuration CloudFront
const cloudfrontConfig = `{
  "CallerReference": "portfolio-slim-ben-tanfous",
  "Comment": "Portfolio CDN",
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "portfolio-origin",
        "DomainName": "your-bucket.s3.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "portfolio-origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000
  },
  "Enabled": true,
  "PriceClass": "PriceClass_100"
}`;

fs.writeFileSync('cloudfront-config.json', cloudfrontConfig);
console.log('✅ CloudFront configuration created');

// Créer script de déploiement AWS
console.log('📝 Creating AWS deployment script...');
const awsDeployScript = `#!/bin/bash
echo "☁️ Deploying to AWS..."

# Install Serverless Framework
echo "📦 Installing Serverless Framework..."
npm install -g serverless

# Deploy to AWS Lambda
echo "🚀 Deploying to AWS Lambda..."
serverless deploy

# Create S3 bucket for static assets
echo "🪣 Creating S3 bucket..."
aws s3 mb s3://portfolio-slim-ben-tanfous

# Upload static files
echo "📤 Uploading static files..."
aws s3 sync .next/static s3://portfolio-slim-ben-tanfous/static

# Set bucket policy
echo "🔒 Setting bucket policy..."
aws s3api put-bucket-policy --bucket portfolio-slim-ben-tanfous --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::portfolio-slim-ben-tanfous/*"
    }
  ]
}'

# Enable website hosting
echo "🌐 Enabling website hosting..."
aws s3 website s3://portfolio-slim-ben-tanfous --index-document index.html --error-document error.html

echo "✅ Deployment completed!"
echo "🔗 Your site is available at: http://portfolio-slim-ben-tanfous.s3-website-us-east-1.amazonaws.com"
`;

fs.writeFileSync('aws-deploy.sh', awsDeployScript);
fs.chmodSync('aws-deploy.sh', '755');
console.log('✅ AWS deployment script created');

// Instructions de déploiement
console.log('\n📋 AWS Deployment Instructions:');
console.log('\n☁️ Prerequisites:');
console.log('1. AWS CLI configured with credentials');
console.log('2. Serverless Framework installed');
console.log('3. Appropriate AWS permissions');

console.log('\n☁️ Deployment steps:');
console.log('1. Run: chmod +x aws-deploy.sh');
console.log('2. Run: ./aws-deploy.sh');
console.log('3. Follow the prompts');

console.log('\n☁️ Manual deployment:');
console.log('1. Install Serverless: npm install -g serverless');
console.log('2. Deploy: serverless deploy');
console.log('3. Create S3 bucket: aws s3 mb s3://your-bucket-name');
console.log('4. Upload files: aws s3 sync .next/static s3://your-bucket-name/static');

console.log('\n☁️ AWS Services used:');
console.log('- AWS Lambda (for serverless functions)');
console.log('- Amazon S3 (for static assets)');
console.log('- CloudFront (for CDN)');
console.log('- Route 53 (for DNS)');

console.log('\n🎉 AWS deployment files created!');
console.log('📱 Your portfolio can now be deployed to AWS');
console.log('🔗 Perfect for scalable, serverless deployments');
console.log('\n📞 For support, contact: slim.bentanfous@esprit.tn');
