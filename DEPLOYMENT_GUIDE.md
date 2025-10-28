# Deployment Guide - Derbyshire Ducks Website

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers seamless deployment for Vite projects with automatic deployments from Git.

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

**Configuration (auto-detected):**

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify

Netlify also provides excellent support for static sites.

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Option 3: GitHub Pages

Host directly from your GitHub repository.

1. **Install gh-pages package**

   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**
   Add to your `package.json`:

   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   Add base URL:

   ```typescript
   export default defineConfig({
     base: "/repository-name/",
     // ... rest of config
   });
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root

## 🔧 Pre-Deployment Checklist

### 1. Update Content

- [ ] Replace sample schedule data with real fixtures
- [ ] Update team information
- [ ] Add real images/photos if available
- [ ] Review and update all text content

### 2. SEO & Meta Tags

Consider adding to `index.html`:

```html
<meta
  name="description"
  content="Derbyshire Ducks - Derby's premier flag American football team"
/>
<meta
  name="keywords"
  content="flag football, Derby, Derbyshire Ducks, American football"
/>
<meta property="og:title" content="Derbyshire Ducks" />
<meta
  property="og:description"
  content="Derby's premier flag American football team"
/>
<meta property="og:image" content="/duck-icon.svg" />
<meta property="og:url" content="https://yourwebsite.com" />
<meta name="twitter:card" content="summary_large_image" />
```

### 3. Performance

- [ ] Optimize images (use WebP format)
- [ ] Test on mobile devices
- [ ] Check loading times

### 4. Testing

```bash
# Build and test locally
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

### 5. Environment Variables

If you add environment variables later (API keys, etc.):

- Create `.env.local` file (add to .gitignore)
- Add variables to your hosting platform
- Prefix with `VITE_` for Vite to expose them

## 📊 Analytics (Optional)

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## 🌐 Custom Domain

### Vercel/Netlify

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify dashboard: Settings → Domains
3. Add your custom domain
4. Update DNS records at your registrar:
   - Add CNAME record pointing to Vercel/Netlify
5. Wait for DNS propagation (can take 24-48 hours)

## 🔄 Continuous Deployment

Once connected to Vercel/Netlify:

- Push to `main` branch → Automatic production deployment
- Push to other branches → Preview deployments
- Pull requests → Preview URLs for testing

## 📝 Post-Deployment

1. **Test Everything**

   - All navigation links
   - Contact form
   - Instagram link
   - Mobile responsiveness
   - All pages load correctly

2. **Submit to Search Engines**

   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

3. **Share Your Site**
   - Update Instagram bio with website link
   - Share on social media
   - Add to email signatures

## 🛠️ Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Content Updates

To update schedule/content:

1. Edit the relevant files in `src/features/`
2. Commit and push to GitHub
3. Automatic deployment will trigger

## 📞 Support

If you encounter issues:

- Check Vercel/Netlify build logs
- Ensure all dependencies are installed
- Verify build command completes locally
- Check browser console for errors

## 🎉 You're Live!

Once deployed, your website will be accessible at:

- Vercel: `your-project.vercel.app`
- Netlify: `your-project.netlify.app`
- GitHub Pages: `yourusername.github.io/repository-name`
- Custom domain: `yourdomainname.com` (if configured)

Share your website with potential team members and the Derby community! 🦆🏈
