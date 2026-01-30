# 🚀 Deployment Checklist for Tiki Grill Website

Use this checklist before deploying to production.

## ✅ Pre-Deployment Tasks

### 1. Images ⚠️ CRITICAL
- [ ] Logo exists: `/public/tiki-grill-logo.png` ✓
- [ ] Menu item images (10 total):
  - [ ] `/public/blooming-onion.png`
  - [ ] `/public/chicken-tender-platter.png`
  - [ ] `/public/funnel-cake.png`
  - [ ] `/public/garbage-fries.png`
  - [ ] `/public/gyro.png`
  - [ ] `/public/jumbo-puka-dog.png`
  - [ ] `/public/jumbo-turkey-leg.png`
  - [ ] `/public/loaded-nachos.png`
  - [ ] `/public/polish-and-italian-sausage.png`
  - [ ] `/public/steak-and-cheese.png`
- [ ] Gallery images (3 total):
  - [ ] `/public/food-display.png`
  - [ ] `/public/front-display-2.png`
  - [ ] `/public/front-display.png`

**Note**: Missing images will show placeholders but won't break the site.

### 2. URLs Configuration ⚠️ REQUIRED
Update your actual domain name in these files:

- [ ] **src/components/Seo.tsx** (Line ~13)
  ```typescript
  const siteUrl = 'https://your-actual-domain.com'; // CHANGE THIS
  ```

- [ ] **src/main.tsx** (Multiple locations)
  ```typescript
  '@id': 'https://your-actual-domain.com/#organization',
  url: 'https://your-actual-domain.com',
  // ... update all URLs
  ```

- [ ] **public/sitemap.xml** (All `<loc>` tags)
  ```xml
  <loc>https://your-actual-domain.com/</loc>
  <loc>https://your-actual-domain.com/menu</loc>
  <loc>https://your-actual-domain.com/gallery</loc>
  <loc>https://your-actual-domain.com/about</loc>
  <loc>https://your-actual-domain.com/contact</loc>
  ```

### 3. Contact Form Backend (Optional)
The contact form currently works client-side only. To actually send emails:

- [ ] Option A: Add Formspree (https://formspree.io)
  ```typescript
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

- [ ] Option B: Add EmailJS (https://www.emailjs.com)
  ```typescript
  // Import and configure EmailJS in Contact.tsx
  ```

- [ ] Option C: Build custom backend API endpoint

### 4. Content Review
- [ ] Verify all menu items in `src/data/menu.ts`
- [ ] Verify prices are current
- [ ] Verify business contact info in `src/data/business.ts`
- [ ] Verify taglines and descriptions
- [ ] Check for typos in all pages

### 5. Testing
- [ ] Run development server: `npm run dev`
- [ ] Test all navigation links
- [ ] Test mobile menu (resize browser)
- [ ] Test gallery lightbox (keyboard + click)
- [ ] Test contact form validation
- [ ] Run all tests: `npm test`
- [ ] Verify no console errors

### 6. Build Process
- [ ] Install dependencies: `npm install`
- [ ] Run production build: `npm run build`
- [ ] Check build completes without errors
- [ ] Preview build: `npm run preview`
- [ ] Test preview site thoroughly
- [ ] Check `/dist` folder exists

## 🌐 Deployment Options

### Option A: Netlify (Easiest)
1. - [ ] Sign up at https://netlify.com
2. - [ ] Drag & drop `/dist` folder OR connect Git repo
3. - [ ] Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. - [ ] Deploy!

### Option B: Vercel
1. - [ ] Sign up at https://vercel.com
2. - [ ] Import Git repository
3. - [ ] Vercel auto-detects Vite settings
4. - [ ] Deploy!

### Option C: GitHub Pages
1. - [ ] Install gh-pages: `npm install --save-dev gh-pages`
2. - [ ] Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. - [ ] Build: `npm run build`
4. - [ ] Deploy: `npm run deploy`

### Option D: AWS S3 + CloudFront
1. - [ ] Create S3 bucket (enable static hosting)
2. - [ ] Upload `/dist` contents
3. - [ ] Set bucket policy (public read)
4. - [ ] Create CloudFront distribution
5. - [ ] Point domain to CloudFront

### Option E: Azure Static Web Apps
1. - [ ] Create Static Web App in Azure Portal
2. - [ ] Connect GitHub repository
3. - [ ] Configure build:
   - App location: `/`
   - Output location: `dist`
4. - [ ] Deploy via GitHub Actions

## 🔐 Post-Deployment Verification

### SEO Checks
- [ ] Visit deployed site
- [ ] View page source - check meta tags
- [ ] Test OpenGraph tags: https://www.opengraph.xyz/
- [ ] Test Twitter Cards: https://cards-dev.twitter.com/validator
- [ ] Verify JSON-LD: Search for `application/ld+json` in source
- [ ] Check robots.txt: `https://your-domain.com/robots.txt`
- [ ] Check sitemap: `https://your-domain.com/sitemap.xml`

### Performance Checks
- [ ] Test with PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Test with GTmetrix: https://gtmetrix.com/
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices

### Functionality Checks
- [ ] All pages load correctly
- [ ] All images display
- [ ] Navigation works
- [ ] Mobile menu toggles
- [ ] Gallery lightbox works
- [ ] Contact form validates
- [ ] Phone/email links are clickable
- [ ] No 404 errors in console

### SEO Submission (Optional but Recommended)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Add site to Google My Business (if applicable)
- [ ] Share on social media (test OpenGraph)

## 🔧 Troubleshooting

### Build Fails
- Check Node.js version (requires 16+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for TypeScript errors

### Images Not Showing
- Verify images are in `/public` directory
- Check file names match exactly (case-sensitive)
- Ensure images are included in build (check `/dist/public`)

### Routes Not Working (404)
- Configure redirects for your hosting:
  - **Netlify**: Add `_redirects` file with `/* /index.html 200`
  - **Vercel**: Add `vercel.json` with rewrite rules
  - **S3**: Configure index document

### SEO Not Working
- Verify pre-rendering worked (check HTML source)
- Make sure URLs are updated to production domain
- Wait 24-48 hours for search engines to crawl

## 📊 Analytics Setup (Optional)

### Google Analytics
1. - [ ] Create GA4 property
2. - [ ] Add tracking code to `index.html` `<head>`
3. - [ ] Deploy and verify tracking

### Other Options
- [ ] Plausible Analytics (privacy-friendly)
- [ ] Fathom Analytics
- [ ] Microsoft Clarity

## 🔄 Continuous Deployment (Optional)

### Set up auto-deploy from Git:
1. - [ ] Push code to GitHub
2. - [ ] Connect Netlify/Vercel to repo
3. - [ ] Enable auto-deploy on push to main branch
4. - [ ] Configure preview deployments for PRs

## ✅ Final Checklist

Before going live:
- [ ] All required images added
- [ ] URLs updated to production domain
- [ ] Build successful
- [ ] Preview tested thoroughly
- [ ] SEO meta tags verified
- [ ] Mobile responsive confirmed
- [ ] Contact form working (if backend added)
- [ ] Performance metrics acceptable
- [ ] Deployed to hosting
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate enabled (HTTPS)
- [ ] Site submitted to search engines

## 🎉 Launch!

Once all checklist items are complete:
- [ ] Announce on social media
- [ ] Share with stakeholders
- [ ] Monitor analytics
- [ ] Collect user feedback
- [ ] Plan future updates

---

## 📞 Support Resources

- **Documentation**: See README.md, PROJECT_SUMMARY.md
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **React Router**: https://reactrouter.com/
- **TypeScript**: https://www.typescriptlang.org/

**Your website is ready to launch! 🚀**
