@echo off
REM Pong Game - Local Server Launcher
REM This script starts a local web server to run the Pong game

echo ===============================================
echo   PONG GAME - LOCAL SERVER LAUNCHER
echo ===============================================
echo.
echo Verifying Python installation...

python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python from https://www.python.org
    echo Make sure to check "Add Python to PATH" during installation
    pause
    exit /b 1
)

echo.
echo Starting local server on http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000

pause
