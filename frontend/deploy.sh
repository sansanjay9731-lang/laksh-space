#!/bin/bash

# Laksh Space - GitHub Pages Deployment Script

echo "🚀 Laksh Space - GitHub Pages Deployment"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -d "build" ]; then
    echo "❌ Error: build folder not found!"
    echo "Please run this script from /app/frontend directory"
    exit 1
fi

echo "✅ Build folder found"
echo ""

# Ask for confirmation
echo "This will deploy your Laksh Space website to GitHub Pages."
echo "Make sure you've already:"
echo "  1. Cloned your GitHub repo: sansanjay9731-lang/laksh-space"
echo "  2. Have git configured with your credentials"
echo ""
read -p "Continue? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Deployment cancelled."
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."
yarn install

echo ""
echo "🏗️ Building production version..."
yarn build

echo ""
echo "🚀 Deploying to GitHub Pages..."
yarn deploy

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your site will be live in 2-5 minutes at:"
echo "https://sansanjay9731-lang.github.io/laksh-space/"
echo ""
echo "If you see a blank page:"
echo "  1. Wait 2-5 minutes for GitHub to process"
echo "  2. Clear browser cache (Ctrl+Shift+R)"
echo "  3. Check Settings → Pages in your GitHub repo"
echo ""
