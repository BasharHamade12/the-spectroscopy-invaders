# GitHub Pages Deployment Fix - TODO

## Issue Analysis
- The `index.html` references `/src/index.ts` (TypeScript source)
- GitHub Pages serves this HTML but cannot compile TypeScript on-the-fly
- Browser tries to load `/src/index.ts` and gets 404 with MIME type `text/html`

## Solution Steps

### Step 1: Create Vite Configuration ✅
- [x] Create `vite.config.ts` with proper base path (`/the-spectroscopy-invaders/`)
- [x] Configure build settings for GitHub Pages

### Step 2: Update Root index.html ✅
- [x] Root `index.html` works with Vite build (no changes needed - Vite handles it)

### Step 3: Create GitHub Actions Workflow ✅
- [x] Create `.github/workflows/deploy.yml`
- [x] Configure build and deployment steps
- [x] Set up automatic deployment to gh-pages branch

### Step 4: Update package.json ✅
- [x] Verify build script works correctly
- [x] Add preview script for testing (already present)

### Step 5: Build and Deploy ✅
- [x] Build the project locally to verify
- [ ] Push changes and verify GitHub Actions deployment
- [ ] Test the deployed site

