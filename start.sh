#!/bin/bash

# Portfolio Website - Quick Start Script

echo "🚀 Starting Portfolio Website Setup..."
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
    echo "✅ Virtual environment created"
else
    echo "✅ Virtual environment already exists"
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📚 Installing dependencies..."
pip install -q -r requirements.txt
echo "✅ Dependencies installed"

# Check if data files exist
echo ""
echo "📊 Checking data files..."
if [ -f "data/work_experience.csv" ]; then
    echo "✅ work_experience.csv found"
else
    echo "⚠️  work_experience.csv not found"
fi

if [ -f "data/projects.csv" ]; then
    echo "✅ projects.csv found"
else
    echo "⚠️  projects.csv not found"
fi

# Check for resume
echo ""
echo "📄 Checking for resume..."
if [ -f "static/resume.pdf" ]; then
    echo "✅ resume.pdf found"
else
    echo "ℹ️  resume.pdf not found (optional - add to static/ folder)"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the application:"
echo "  python app.py"
echo ""
echo "Then visit: http://localhost:5000"
echo ""
echo "To deactivate virtual environment:"
echo "  deactivate"
echo ""
