@echo off
echo.
echo ========================================
echo   Portfolio Slim Ben Tanfous
echo ========================================
echo.
echo Verifying Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
echo.
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Starting development server...
echo Open http://localhost:3000 in your browser
echo.
call npm run dev
