# 🚀 Quick Start Guide - Tiki Grill Website

## Step 1: Install Dependencies

Open PowerShell/Terminal and navigate to the project:

```powershell
cd "c:\Users\user123\Desktop\F&B Managment\Tiki\tiki-grill-front-end"
npm install
```

This will install all required packages (~200 MB).

## Step 2: Add Images (IMPORTANT!)

Create or copy these image files to the `/public` directory:

### Required Images:
1. **Logo**: `tiki-grill-logo.png`
2. **Menu Items** (10 images):
   - `blooming-onion.png`
   - `chicken-tender-platter.png`
   - `funnel-cake.png`
   - `garbage-fries.png`
   - `gyro.png`
   - `jumbo-puka-dog.png`
   - `jumbo-turkey-leg.png`
   - `loaded-nachos.png`
   - `polish-and-italian-sausage.png`
   - `steak-and-cheese.png`
3. **Gallery** (3 images):
   - `food-display.png`
   - `front-display-2.png`
   - `front-display.png`

**Note**: If images are missing, the site will still work but show placeholders.

## Step 3: Start Development Server

```powershell
npm run dev
```

Open your browser to: **http://localhost:5173**

## Step 4: Explore the Site

Navigate through:
- **Home** (/) - Hero, featured items
- **Menu** (/menu) - Full menu by category
- **Gallery** (/gallery) - Image gallery with lightbox
- **About** (/about) - Business story
- **Contact** (/contact) - Contact form and info

## Step 5: Run Tests (Optional)

```powershell
npm test
```

Should see all tests passing ✓

## Step 6: Build for Production

```powershell
npm run build
```

Creates production files in `/dist` folder.

Preview the build:

```powershell
npm run preview
```

## 🎨 Quick Customization

### Change Menu Items
Edit: `src/data/menu.ts`

```typescript
{
  id: 'new-item',
  name: 'New Item Name',
  price: 15.00,
  category: 'Mains',
  description: 'Description here',
  image: '/new-item.png',
}
```

### Change Business Info
Edit: `src/data/business.ts`

```typescript
phone: '9193355288',
email: 'tikigrill@hotmail.com',
```

### Change Colors
Edit: `src/App.css`

```css
:root {
  --charcoal: #272727;
  --gold: #dcac48;
}
```

## 🚢 Deploy

1. Build the site: `npm run build`
2. Upload the `dist/` folder to your hosting service

Popular options:
- **Netlify**: Drag & drop `dist/` folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Use gh-pages package

## ⚠️ Before Deploying

Update these URLs to your actual domain:

1. **src/components/Seo.tsx** - Line 13:
   ```typescript
   const siteUrl = 'https://your-domain.com';
   ```

2. **src/main.tsx** - Lines 7, 10, etc:
   ```typescript
   '@id': 'https://your-domain.com/#organization',
   url: 'https://your-domain.com',
   ```

3. **public/sitemap.xml** - All `<loc>` tags:
   ```xml
   <loc>https://your-domain.com/</loc>
   ```

## 📞 Need Help?

1. Check **README.md** for detailed documentation
2. Check **PROJECT_SUMMARY.md** for overview
3. Review code comments in components

## ✅ Checklist

- [ ] Dependencies installed
- [ ] Images added to /public
- [ ] Dev server running
- [ ] Tests passing
- [ ] Production build successful
- [ ] URLs updated for deployment
- [ ] Deployed to hosting

---

**You're all set! Happy coding! 🎉**
