# WHOOPSY Website - Deployment Guide

This guide explains how to deploy the WHOOPSY website to GitHub Pages.

## Overview

The website is automatically deployed to GitHub Pages using GitHub Actions when you push to the `main` branch.

**Deployed URL**: `https://silasbazar.github.io/whoopsy-website/`

## One-Time GitHub Pages Setup

### Step 1: Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/SilasBazar/whoopsy-website`
2. Click **Settings** tab
3. Scroll down to **Pages** section (in left sidebar under "Code and automation")
4. Under **Build and deployment**, find **Source**
5. Select **GitHub Actions** (not "Deploy from a branch")
6. Click **Save**

### Step 2: Verify Workflow

1. Go to **Actions** tab in your repository
2. You should see the "Build and Deploy" workflow
3. Click on the workflow to see recent runs

## Deployment Process

### Automatic Deployment

When you push to the `main` branch:

1. **GitHub Actions** triggers automatically
2. **Build Process**:
   - Install Node.js 20
   - Install dependencies (`npm ci`)
   - Build project (`npm run build`)
3. **Deployment**:
   - Upload `dist/` folder to GitHub Pages
4. **Completion**:
   - Site is live at `https://silasbazar.github.io/whoopsy-website/`
   - You'll receive an email notification

### Deployment Workflow

The workflow is defined in `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Manual Deployment

### Testing Build Locally

Before pushing, test the build locally:

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build

# Preview the build
npm run preview
```

The `dist/` folder will contain the production-ready files.

### Previewing Build

```bash
# Start preview server
npm run preview

# Open browser to http://localhost:4173
```

This serves the built site locally for testing before deployment.

## Deployment Troubleshooting

### Build Fails

**Problem**: GitHub Actions workflow fails.

**Solutions**:
1. Check the **Actions** tab for error logs
2. Verify `package.json` is correct
3. Check for TypeScript errors locally: `npm run build`
4. Ensure all files are committed (don't have uncommitted changes)

### Site Not Updating

**Problem**: Site deployed but changes aren't visible.

**Solutions**:
1. Wait 1-2 minutes (GitHub Pages can take time)
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check GitHub Actions for recent deployment
4. Verify you pushed to `main` branch

### Images Not Loading

**Problem**: Images show broken icon on deployed site.

**Solutions**:
1. Check image paths in `src/data/games.ts`
2. Ensure images are in `public/images/games/[game-id]/`
3. Paths must start with `/images/games/[game-id]/`
4. Check capitalization (paths are case-sensitive)

### 404 Errors

**Problem**: Pages return 404 Not Found.

**Solutions**:
1. Verify `vite.config.ts` has correct `base` path
2. Ensure `base: '/whoopsy-website/'` matches repo name
3. Check `index.html` exists in `dist/` after build
4. Verify GitHub Pages source is set to "GitHub Actions"

### TypeScript Errors

**Problem**: Build fails due to TypeScript errors.

**Solutions**:
1. Run `npm run build` locally to see errors
2. Fix all TypeScript errors
3. Check `tsconfig.json` settings
4. Verify all imports use `@/` alias

## Development vs Production

### Local Development

```bash
# Start dev server with hot reload
npm run dev

# Access at http://localhost:5173
```

Features in dev mode:
- Hot Module Replacement (HMR)
- Fast refresh
- Source maps for debugging
- Unminified code

### Production Build

```bash
# Build for production
npm run build
```

Production build optimizations:
- Code splitting
- Minification
- Tree shaking
- No source maps
- Optimized bundle size

## Deployment Best Practices

### Before Deploying

1. **Test Locally**: Run `npm run build` and `npm run preview`
2. **Check Links**: Verify all links work
3. **Test Images**: Confirm all images load
4. **Mobile Test**: Check responsive design on mobile
5. **Review Changes**: Review git diff before pushing

### Commit Messages

Use descriptive commit messages for deployment history:

```bash
# Good
git commit -m "feat: add game showcase for Leap of Faith"

# Bad
git commit -m "update stuff"
```

### Branch Strategy

**Simple (Recommended for now)**:
- Work directly on `main` branch
- Push when ready to deploy

**Advanced (Future)**:
- `main` - Production branch (deployed)
- `develop` - Development branch
- `feature/*` - Feature branches
- Merge to `develop`, then `develop` to `main`

## Custom Domain (Optional)

### Setting Up Custom Domain

If you want to use a custom domain (e.g., `whoopsy.games`):

1. **Purchase Domain**: Buy from registrar (Namecheap, GoDaddy, etc.)
2. **Configure DNS**: Add CNAME record pointing to `silasbazar.github.io`
3. **Update GitHub Pages**:
   - Go to Settings → Pages
   - Enter custom domain
   - GitHub will provide DNS records
4. **Add CNAME File**: Create `public/CNAME`:
   ```
   whoopsy.games
   ```
5. **Wait for Propagation**: Can take 24-48 hours

### HTTPS for Custom Domain

GitHub Pages provides automatic HTTPS for custom domains via Let's Encrypt. No additional configuration needed.

## Environment Variables

Currently, the site doesn't require environment variables. All data is public and static.

If you need environment variables in the future:

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add name and value
4. Access in workflow: `${{ secrets.YOUR_SECRET_NAME }}`

## Rollback

### Reverting to Previous Version

If deployment breaks the site:

1. **Check GitHub Actions**: Find last successful deployment
2. **Revert Commit**:
   ```bash
   git log --oneline
   git revert <commit-hash>
   git push
   ```
3. Or manually checkout previous commit:
   ```bash
   git checkout <commit-hash>
   git push origin main --force
   ```

## Performance Monitoring

### Lighthouse

Run Lighthouse to check performance:

1. Open deployed site in Chrome
2. Right-click → Inspect
3. Click **Lighthouse** tab
4. Click **Analyze page load**
5. Target: 90+ in all categories

### Performance Budget

Current targets:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Total Bundle Size**: < 200KB (gzipped)

## Security Considerations

### Content Security Policy (Future)

Consider adding CSP headers for GitHub Pages in `.github/workflows/deploy.yml`:

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
    # Add CSP headers
    cname: whoopsy.games  # if using custom domain
```

### Subresource Integrity (Future)

For additional security, implement SRI for external scripts (Google Fonts).

## Related Documentation

- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - Project context
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [CODING_STANDARDS.md](./CODING_STANDARDS.md) - Code style guide
- [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md) - AI agent guidelines