#!/bin/bash

echo "📦 Laksh Space - Download Packages"
echo "=================================="
echo ""
echo "Available packages:"
echo ""
echo "1. laksh-space-complete.zip (980 KB)"
echo "   - Full source code"
echo "   - For development & customization"
echo ""
echo "2. laksh-space-build-only.zip (715 KB)"
echo "   - Production build"
echo "   - Ready to deploy immediately"
echo ""
echo "Files are located at:"
echo "  /app/laksh-space-complete.zip"
echo "  /app/laksh-space-build-only.zip"
echo ""
echo "To download from terminal:"
echo ""
echo "Option 1 - Using curl (if files are accessible via web):"
echo "  curl -O http://your-server/laksh-space-complete.zip"
echo ""
echo "Option 2 - Using scp (from your local machine):"
echo "  scp user@server:/app/laksh-space-complete.zip ./"
echo ""
echo "Option 3 - Copy to a web-accessible directory:"
read -p "Would you like to copy to current directory? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    cp /app/laksh-space-complete.zip ./
    cp /app/laksh-space-build-only.zip ./
    echo "✅ Files copied to current directory!"
    echo "$(pwd)/laksh-space-complete.zip"
    echo "$(pwd)/laksh-space-build-only.zip"
fi
