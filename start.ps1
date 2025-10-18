# Portfolio Slim Ben Tanfous - Start Script
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Portfolio Slim Ben Tanfous" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier Node.js
Write-Host "Vérification de l'installation de Node.js..." -ForegroundColor Green
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js trouvé: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERREUR: Node.js n'est pas installé ou pas dans le PATH" -ForegroundColor Red
    Write-Host "Veuillez installer Node.js depuis https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "Installation des dépendances..." -ForegroundColor Green
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ERREUR: Échec de l'installation des dépendances" -ForegroundColor Red
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""
Write-Host "Démarrage du serveur de développement..." -ForegroundColor Green
Write-Host "Ouvrez http://localhost:3000 dans votre navigateur" -ForegroundColor Yellow
Write-Host ""
npm run dev
