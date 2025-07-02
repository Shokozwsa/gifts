# Deployment Guide

This application is configured for backend hosting/deployment with the following setup:

## Architecture Overview

- **Development**: Vite dev server for frontend + Express backend
- **Production**: Single Express server serves both API and static frontend files

## Deployment Process

### Option 1: Using the Deploy Script (Recommended)

```bash
./deploy.sh
```

This script will:
1. Clean previous builds
2. Build frontend and backend
3. Copy frontend files to correct location
4. Verify the build

### Option 2: Manual Deployment

```bash
# 1. Clean previous builds
rm -rf dist server/public

# 2. Build the application
npm run build

# 3. Copy frontend build to server directory
cp -r dist/public server/

# 4. Start production server
NODE_ENV=production node dist/index.js
```

## Build Outputs

After successful build, you'll have:

- `dist/index.js` - Bundled Express server
- `server/public/` - Frontend static files (HTML, CSS, JS, assets)
- `server/public/index.html` - Main HTML file
- `server/public/assets/` - Compiled CSS and JS files

## Production Server Configuration

The production server (dist/index.js) will:
- Serve API routes at `/api/*`
- Serve static files from `server/public/`
- Fall back to `index.html` for client-side routing
- Run on port 5000 with host `0.0.0.0`

## Environment Variables

Required for production:
- `NODE_ENV=production`
- `DATABASE_URL` - PostgreSQL connection string

## Replit Deployment

The `.replit` file is configured for automatic deployment:
- Build command: `npm run build`
- Start command: `npm run start`
- Port mapping: 5000 (internal) → 80 (external)

## Verification

To verify your deployment:
1. Check that `dist/index.js` exists
2. Check that `server/public/index.html` exists
3. Start production server: `NODE_ENV=production node dist/index.js`
4. Visit the application URL

## Troubleshooting

**Build fails**: Ensure all dependencies are installed with `npm install`

**Static files not served**: Verify `server/public/` directory exists and contains `index.html`

**Database errors**: Check `DATABASE_URL` environment variable is set

**Port conflicts**: Only one server instance can run on port 5000 at a time