#!/bin/bash

# Production deployment script for the e-commerce application
echo "🚀 Starting production deployment process..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist server/public

# Step 2: Build the frontend and backend
echo "📦 Building application..."
npm run build

# Step 3: Copy frontend build to server directory
echo "📂 Setting up static files..."
cp -r dist/public server/

# Step 4: Verify build
echo "✅ Verifying build..."
if [ -f "dist/index.js" ] && [ -f "server/public/index.html" ]; then
    echo "✅ Build completed successfully!"
    echo "📋 Build artifacts:"
    echo "   - Backend: dist/index.js"
    echo "   - Frontend: server/public/"
    echo "   - Assets: server/public/assets/"
    echo ""
    echo "🌐 To run in production mode:"
    echo "   NODE_ENV=production node dist/index.js"
    echo ""
    echo "🔧 The application is ready for deployment!"
else
    echo "❌ Build verification failed!"
    exit 1
fi