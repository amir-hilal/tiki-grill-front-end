# Tiki Grill - Festival Food Website

A production-ready, SEO-friendly marketing website for Tiki Grill, a festival food business serving delicious favorites at festivals, fairs, and community events across North Carolina.

## 🚀 Features

- **Modern React Stack**: React 18 + Vite + TypeScript
- **SEO Optimized**:
  - react-helmet-async for per-route meta tags
  - JSON-LD structured data (LocalBusiness + Menu)
  - Server-side rendering ready (can add Vite SSR if needed)
  - robots.txt and sitemap.xml
  - OpenGraph and Twitter Cards
- **Performance**:
  - Lazy loading for routes and images
  - Code splitting with React.lazy + Suspense
  - Optimized images with proper dimensions
  - CSS Modules for scoped styling
- **Accessibility**:
  - Semantic HTML
  - Proper heading hierarchy
  - ARIA labels and roles
  - Focus management
  - Keyboard navigation support
- **Responsive Design**: Mobile-first approach with breakpoints
- **Testing**: Unit tests with Vitest + Testing Library

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add branding assets**:
   Place the following image files in the `/public` directory:
   - `tiki-grill-logo.png` (logo)
   - Menu item images:
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
   - Gallery images:
     - `food-display.png`
     - `front-display-2.png`
     - `front-display.png`

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🧪 Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests with UI:

```bash
npm run test:ui
```

## 🏗️ Build

Build for production:

```bash
npm run build
```

This will:
1. Compile TypeScript
2. Bundle and optimize with Vite
3. Generate production-ready files

Output will be in the `dist/` directory.

## 👀 Preview

Preview the production build locally:

```bash
npm run preview
```

## 📄 Project Structure

```
tiki-grill-front-end/
├── public/                      # Static assets
│   ├── robots.txt              # Search engine instructions
│   ├── sitemap.xml             # Site structure for SEO
│   ├── tiki-grill-logo.png     # Logo
│   └── [menu & gallery images] # Images
├── src/
│   ├── components/             # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryGrid.module.css
│   │   ├── Layout.tsx
│   │   ├── MenuCard.tsx
│   │   ├── MenuCard.module.css
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   └── Seo.tsx             # Helmet wrapper for SEO
│   ├── data/                   # Typed data
│   │   ├── business.ts         # Business info
│   │   └── menu.ts             # Menu items
│   ├── pages/                  # Route components
│   │   ├── Home.tsx
│   │   ├── Home.module.css
│   │   ├── Menu.tsx
│   │   ├── Menu.module.css
│   │   ├── Gallery.tsx
│   │   ├── Gallery.module.css
│   │   ├── About.tsx
│   │   ├── About.module.css
│   │   ├── Contact.tsx
│   │   ├── Contact.module.css
│   │   ├── NotFound.tsx
│   │   └── NotFound.module.css
│   ├── test/                   # Test files
│   │   ├── setup.ts
│   │   ├── Menu.test.tsx
│   │   ├── Contact.test.tsx
│   │   └── Navbar.test.tsx
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── main.tsx                # Entry point + JSON-LD
│   └── vite-env.d.ts
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── package.json
└── README.md
```

## 🎨 Design

**Brand Colors**:
- Charcoal: `#272727` (primary text/backgrounds)
- Gold: `#dcac48` (accents, buttons, highlights)

**Styling**:
- CSS Modules for component-scoped styles
- System font stack for performance
- Responsive breakpoints at 768px
- Consistent spacing and shadows

## 🔍 SEO Implementation

### 1. Meta Tags
- Global defaults in `index.html`
- Per-route meta tags via `<Seo>` component using react-helmet-async
- Includes title, description, canonical, OpenGraph, and Twitter Cards

### 2. Structured Data
- JSON-LD injected in `main.tsx`
- LocalBusiness schema with contact info
- Menu schema with items and prices
- Helps search engines understand the business

### 3. Dynamic Meta Tags
- Uses `react-helmet-async` to inject meta tags on each route
- Meta tags update dynamically as users navigate
- Search engines can read meta tags via react-helmet-async
- For full SSR, consider adding Vite SSR or Next.js

### 4. SEO Files
- **robots.txt**: Allows all crawlers, references sitemap
- **sitemap.xml**: Lists all routes with priorities and update frequencies

## 📝 Customization

### Adding/Updating Menu Items

Edit [src/data/menu.ts](src/data/menu.ts):

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 'unique-id',
    name: 'Item Name',
    price: 15.00,
    category: 'Mains', // or 'Sides', 'Sweets', 'Drinks'
    description: 'Item description',
    image: '/item-image.png', // optional
    familySize: true, // optional
    choiceOfMeat: true, // optional
    featured: true, // optional - shows on home page
  },
  // ... more items
];
```

### Updating Business Info

Edit [src/data/business.ts](src/data/business.ts):

```typescript
export const businessInfo: BusinessInfo = {
  name: 'Tiki Grill',
  contactName: 'Jana Andary',
  address: {
    street: 'Po box 98832',
    city: 'Raleigh',
    state: 'North Carolina',
    zip: '27624',
  },
  phone: '9193355288',
  email: 'tikigrill@hotmail.com',
};
```

### Adding/Replacing Images

1. Place images in the `/public` directory
2. Reference them with a leading slash: `/image-name.png`
3. Update the relevant data files or component props

**Image Best Practices**:
- Use descriptive filenames
- Optimize images before adding (compress, resize)
- Use appropriate formats (PNG for logos, JPG for photos)
- Add `width` and `height` attributes to reduce CLS

### Gallery Images

Edit [src/pages/Gallery.tsx](src/pages/Gallery.tsx):

```typescript
const images = [
  { src: '/image1.png', alt: 'Description' },
  { src: '/image2.png', alt: 'Description' },
  // ... more images
];
```

## 🚢 Deployment

### Build the site:
```bash
npm run build
```

### Deploy the `dist/` folder to any static hosting service:
- **Netlify**: Drag & drop `dist/` folder or connect Git repo
- **Vercel**: Connect Git repo or use Vercel CLI
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3 + CloudFront**: Upload `dist/` contents
- **Azure Static Web Apps**: Use Azure CLI or GitHub Actions

### Environment Variables

Before deploying, update the site URL in:
- [src/components/Seo.tsx](src/components/Seo.tsx) - `siteUrl` constant
- [src/main.tsx](src/main.tsx) - JSON-LD URLs
- [public/sitemap.xml](public/sitemap.xml) - All `<loc>` URLs

## 📱 Pages

1. **Home (/)**: Hero section, featured items, souvenir cup highlight
2. **Menu (/menu)**: Full menu organized by categories (Mains, Sides, Sweets, Drinks)
3. **Gallery (/gallery)**: Image grid with lightbox modal
4. **About (/about)**: Business story and values
5. **Contact (/contact)**: Contact form, business info, booking section
6. **404 (/*)**: Friendly not found page

## 🧩 Key Technologies

- **React 18**: Latest React features
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety
- **React Router**: Client-side routing
- **react-helmet-async**: SEO meta tags
- **vite-plugin-ssg**: Static site generation
- **Vitest**: Fast unit testing
- **Testing Library**: Component testing
- **CSS Modules**: Scoped styling

## 📊 Performance Considerations

- Lazy loading routes with `React.lazy()`
- Image lazy loading with `loading="lazy"`
- Code splitting at route level
- Optimized bundle with Vite
- Pre-rendered HTML for instant first paint
- Minimal dependencies

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation
- Focus management
- High contrast ratios (WCAG AA compliant)
- Alt text for all images
- Form validation with error messages

## 📞 Support

For questions or issues:
- Email: tikigrill@hotmail.com
- Phone: (919) 335-5288

## 📄 License

© 2026 Tiki Grill. All rights reserved.

---

**Built with ❤️ for festival food lovers!**
