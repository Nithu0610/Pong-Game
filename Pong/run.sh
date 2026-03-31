#!/bin/bash

# Pong Game - Local Server Launcher
# This script starts a local web server to run the Pong game

echo "==============================================="
echo "   PONG GAME - LOCAL SERVER LAUNCHER"
echo "==============================================="
echo ""
echo "Verifying Python installation..."

if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python3 is not installed"
    echo "Please install Python3 using:"
    echo "  macOS: brew install python3"
    echo "  Linux: sudo apt-get install python3"
    exit 1
fi

echo ""
echo "Starting local server on http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
