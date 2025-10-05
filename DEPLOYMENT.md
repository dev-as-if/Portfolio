# GitHub Pages Deployment Guide

## ✅ Fixes Applied

Your portfolio is now configured for GitHub Pages deployment with the following fixes:

### 1. **HashRouter Implementation**
- Changed from `BrowserRouter` to `HashRouter` in `src/index.tsx`
- This ensures routing works correctly on GitHub Pages without server configuration
- URLs will use hash-based routing (e.g., `https://dev-as-if.github.io/Portfolio/#/browse`)

### 2. **SPA Fallback for 404 Errors**
- Added `public/404.html` to handle direct URL access
- Added redirect script in `public/index.html` to restore correct routes
- This provides a backup solution if users access routes directly

### 3. **Jekyll Bypass**
- Added `public/.nojekyll` file to prevent GitHub Pages from processing files with Jekyll
- Ensures all files (including those starting with `_`) are served correctly

### 4. **GitHub Actions Workflow**
- Created `.github/workflows/deploy.yml` for automated deployments
- Automatically builds and deploys on every push to main branch

### 5. **Resume PDF Path Fix**
- Updated `src/pages/Resume.tsx` to use `process.env.PUBLIC_URL` for correct base path
- Updated `src/data/profileBanner.ts` to use `process.env.PUBLIC_URL` for resume link
- Ensures resume.pdf loads correctly on GitHub Pages with `/Portfolio` base path

## 🚀 Deployment Methods

### Method 1: Using gh-pages (Current Setup)

```bash
# Build and deploy
npm run deploy
```

This will:
1. Build your app (`npm run build`)
2. Deploy the `build` folder to the `gh-pages` branch
3. GitHub Pages will serve from that branch

### Method 2: Using GitHub Actions (Recommended)

1. **Enable GitHub Actions in your repository:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the "Actions" tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live

## 🔧 Repository Settings

Make sure your GitHub repository settings are correct:

1. **Go to:** `https://github.com/dev-as-if/Portfolio/settings/pages`

2. **For gh-pages method:**
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

3. **For GitHub Actions method:**
   - Source: GitHub Actions

## 🌐 Your Site URLs

- **Main URL:** https://dev-as-if.github.io/Portfolio/
- **With HashRouter:** https://dev-as-if.github.io/Portfolio/#/
- **Browse page:** https://dev-as-if.github.io/Portfolio/#/browse
- **Skills page:** https://dev-as-if.github.io/Portfolio/#/skills

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution 1: Clear browser cache**
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

**Solution 2: Check homepage in package.json**
```json
"homepage": "https://dev-as-if.github.io/Portfolio"
```
✅ Already configured correctly

**Solution 3: Verify build folder**
```bash
npm run build
# Check if build/index.html exists
```

### Issue: 404 on page refresh

✅ **Fixed:** HashRouter handles this automatically
- Routes use `#` in URL (e.g., `/#/browse`)
- No server configuration needed

### Issue: Assets not loading

**Check:**
1. `.nojekyll` file exists in `public/` folder ✅
2. `homepage` field in `package.json` is correct ✅
3. Build folder contains all assets

### Issue: GitHub Actions deployment fails

**Check:**
1. Repository has Pages enabled
2. Workflow has correct permissions
3. Node version compatibility (using Node 18)

## 📝 Deployment Checklist

Before deploying, ensure:

- [ ] All changes are committed
- [ ] `npm run build` works locally without errors
- [ ] `homepage` in `package.json` is correct
- [ ] `.nojekyll` file exists in `public/`
- [ ] `404.html` exists in `public/`
- [ ] GitHub repository settings are configured

## 🔄 Quick Deploy Commands

```bash
# Option 1: Deploy using gh-pages
npm run deploy

# Option 2: Deploy using GitHub Actions
git add .
git commit -m "Update portfolio"
git push origin main
```

## 📊 Verify Deployment

After deployment, check:

1. **Homepage loads:** https://dev-as-if.github.io/Portfolio/
2. **Navigation works:** Click through all menu items
3. **Resume PDF loads:** https://dev-as-if.github.io/Portfolio/#/resume
   - PDF should display in iframe
   - "View PDF" and "Download" buttons should work
4. **Direct URLs work:** Try accessing routes directly
5. **Mobile responsive:** Test on mobile devices
6. **Console errors:** Check browser console for errors

### Resume PDF Troubleshooting

If resume.pdf doesn't load:

1. **Verify file exists:** Check that `public/resume.pdf` exists in your project
2. **Check build output:** After `npm run build`, verify `build/resume.pdf` exists
3. **Test locally:** Run `npm start` and check http://localhost:3000/#/resume
4. **Browser console:** Check for 404 errors on the PDF file
5. **Path verification:** The PDF should be at `https://dev-as-if.github.io/Portfolio/resume.pdf`

## 🎯 Next Steps

1. **Deploy now:**
   ```bash
   npm run deploy
   ```

2. **Wait 2-3 minutes** for GitHub Pages to update

3. **Visit your site:** https://dev-as-if.github.io/Portfolio/

4. **Test all routes** and functionality

## 💡 Tips

- **Development:** Use `npm start` for local development
- **Production:** Always test with `npm run build` before deploying
- **Updates:** Run `npm run deploy` after any changes
- **Monitoring:** Check GitHub Actions tab for deployment status

## 🆘 Still Having Issues?

If the site is still blank:

1. **Check build output:**
   ```bash
   npm run build
   ls -la build/
   ```

2. **Verify gh-pages branch:**
   ```bash
   git checkout gh-pages
   ls -la
   git checkout main
   ```

3. **Force rebuild:**
   ```bash
   rm -rf build node_modules
   npm install
   npm run build
   npm run deploy
   ```

4. **Check GitHub Pages status:**
   - Go to repository Settings → Pages
   - Look for deployment status and errors

---

**Your portfolio is now ready for deployment! 🎉**

Run `npm run deploy` to publish your site.
