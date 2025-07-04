# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## 🚀 Quick Deployment (Recommended)

### Step 1: Push to GitHub

1. Make sure your repository is on GitHub at `https://github.com/ayush392/ayush392.github.io`
2. Push your latest changes:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### Step 3: Wait for Deployment

- GitHub Actions will build and deploy your site
- You can monitor the progress in the **Actions** tab
- Once complete, your site will be available at `https://ayush392.github.io`

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Important Notes

### Repository Name
- Your repository must be named exactly `ayush392.github.io` for the main site
- For other repositories, the URL will be `https://ayush392.github.io/repository-name`

### Base URL Configuration
The `vite.config.js` is configured with:
```javascript
base: '/ayush392.github.io/',
```

If your repository name is different, update this line accordingly.

### Custom Domain (Optional)
To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the base URL in `vite.config.js` to `'/'`

## 🐛 Troubleshooting

### Build Errors
- Check the GitHub Actions logs in the **Actions** tab
- Ensure all dependencies are properly installed
- Verify the Node.js version (18+ recommended)

### 404 Errors
- Make sure the base URL in `vite.config.js` matches your repository name
- Check that the repository is public
- Verify GitHub Pages is enabled in repository settings

### Styling Issues
- Clear browser cache
- Check if CSS files are loading properly
- Verify Tailwind CSS is building correctly

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the deployment configuration
3. Ensure all files are committed and pushed

Your portfolio should be live at: **https://ayush392.github.io** 