@echo off
setlocal EnableExtensions
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
    echo Node.js was not found.
    echo Please install Node.js from https://nodejs.org/ and run this file again.
    start "" https://nodejs.org
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo npm was not found.
    echo Please install Node.js from https://nodejs.org/ and run this file again.
    start "" https://nodejs.org
    pause
    exit /b 1
)

if not exist node_modules (
    echo Installing dependencies...
    npm install
) else (
    echo Dependencies already installed.
)

echo Starting the app...
start "" cmd /c "timeout /t 5 >nul && start http://127.0.0.1:5173"
npm run dev -- --host 0.0.0.0 --port 5173
pause
