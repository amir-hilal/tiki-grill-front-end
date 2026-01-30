# Tiki Grill Website - Architecture Overview

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         BROWSER                              │
├─────────────────────────────────────────────────────────────┤
│  SEO Layer (react-helmet-async + JSON-LD)                   │
│  ├─ Per-route meta tags                                     │
│  ├─ OpenGraph + Twitter Cards                               │
│  └─ Structured Data (LocalBusiness + Menu)                  │
├─────────────────────────────────────────────────────────────┤
│                     React Router                             │
│  ├─ / (Home)                                                │
│  ├─ /menu (Menu)                                            │
│  ├─ /gallery (Gallery)                                      │
│  ├─ /about (About)                                          │
│  ├─ /contact (Contact)                                      │
│  └─ /* (NotFound - 404)                                     │
├─────────────────────────────────────────────────────────────┤
│                    Layout Component                          │
│  ├─ Navbar (sticky, mobile responsive)                     │
│  ├─ Main Content (Outlet for routes)                       │
│  └─ Footer (business info, links)                          │
├─────────────────────────────────────────────────────────────┤
│                  Reusable Components                         │
│  ├─ MenuCard (menu item display)                           │
│  ├─ GalleryGrid (image grid + lightbox)                    │
│  └─ Seo (Helmet wrapper)                                   │
├─────────────────────────────────────────────────────────────┤
│                    Data Layer (TypeScript)                   │
│  ├─ menu.ts (17 items, 4 categories)                       │
│  └─ business.ts (contact info)                             │
└─────────────────────────────────────────────────────────────┘
```

## 📁 File Organization

```
tiki-grill-front-end/
│
├── 🌐 PUBLIC (Static Assets - Pre-rendered at build)
│   ├── robots.txt              ← Search engine rules
│   ├── sitemap.xml             ← Site structure for SEO
│   ├── tiki-grill-logo.png     ← Logo
│   └── [images]                ← Menu & gallery photos
│
├── 📦 SRC (Source Code)
│   │
│   ├── 🧩 COMPONENTS (Reusable)
│   │   ├── Layout.tsx          ← Wraps all pages
│   │   ├── Navbar.tsx          ← Navigation + mobile menu
│   │   ├── Footer.tsx          ← Footer with links
│   │   ├── Seo.tsx             ← Meta tags wrapper
│   │   ├── MenuCard.tsx        ← Menu item card
│   │   ├── GalleryGrid.tsx     ← Image grid + lightbox
│   │   └── [.module.css]       ← Scoped styles
│   │
│   ├── 📄 PAGES (Routes)
│   │   ├── Home.tsx            ← Landing page
│   │   ├── Menu.tsx            ← Full menu by category
│   │   ├── Gallery.tsx         ← Photo gallery
│   │   ├── About.tsx           ← Business story
│   │   ├── Contact.tsx         ← Contact form + info
│   │   ├── NotFound.tsx        ← 404 page
│   │   └── [.module.css]       ← Page-specific styles
│   │
│   ├── 📊 DATA (Typed Data)
│   │   ├── menu.ts             ← MenuItem[] with types
│   │   └── business.ts         ← BusinessInfo type
│   │
│   ├── 🧪 TEST (Unit Tests)
│   │   ├── setup.ts            ← Test configuration
│   │   ├── Menu.test.tsx       ← Menu page tests
│   │   ├── Contact.test.tsx    ← Contact page tests
│   │   └── Navbar.test.tsx     ← Navbar tests
│   │
│   ├── App.tsx                 ← Main app + routing
│   ├── App.css                 ← Global styles
│   ├── main.tsx                ← Entry + JSON-LD
│   └── vite-env.d.ts           ← TypeScript declarations
│
├── ⚙️ CONFIG FILES
│   ├── package.json            ← Dependencies + scripts
│   ├── vite.config.ts          ← Vite + SSG config
│   ├── tsconfig.json           ← TypeScript config
│   ├── .eslintrc.cjs           ← Code linting
│   ├── .prettierrc             ← Code formatting
│   └── .gitignore              ← Git exclusions
│
├── 📖 DOCUMENTATION
│   ├── README.md               ← Full documentation
│   ├── PROJECT_SUMMARY.md      ← Project overview
│   └── QUICK_START.md          ← Getting started
│
└── index.html                  ← HTML template
```

## 🔄 Data Flow

```
┌─────────────┐
│   menu.ts   │ ← Typed menu items (MenuItem[])
└──────┬──────┘
       │
       ├─→ Home.tsx (getFeaturedItems)
       │   └─→ MenuCard component × 6
       │
       └─→ Menu.tsx (getItemsByCategory)
           └─→ MenuCard component × 17

┌─────────────┐
│ business.ts │ ← Contact info (BusinessInfo)
└──────┬──────┘
       │
       ├─→ Footer.tsx (display contact)
       ├─→ Contact.tsx (show info + form)
       └─→ main.tsx (JSON-LD structured data)
```

## 🎨 Component Hierarchy

```
App (BrowserRouter + HelmetProvider)
 │
 ├─ Layout
 │   ├─ Navbar
 │   │   └─ [Mobile Menu Drawer]
 │   │
 │   ├─ Outlet (React Router)
 │   │   ├─ Home
 │   │   │   ├─ Seo
 │   │   │   └─ MenuCard × 6
 │   │   │
 │   │   ├─ Menu
 │   │   │   ├─ Seo
 │   │   │   └─ MenuCard × 17
 │   │   │
 │   │   ├─ Gallery
 │   │   │   ├─ Seo
 │   │   │   └─ GalleryGrid
 │   │   │       └─ [Lightbox Modal]
 │   │   │
 │   │   ├─ About
 │   │   │   └─ Seo
 │   │   │
 │   │   ├─ Contact
 │   │   │   ├─ Seo
 │   │   │   └─ [Contact Form]
 │   │   │
 │   │   └─ NotFound (404)
 │   │       └─ Seo
 │   │
 │   └─ Footer
 │
 └─ [Loading Fallback] (Suspense)
```

## 🔍 SEO Implementation Flow

```
Build Time (vite-plugin-ssg)
 ↓
Pre-render all routes to static HTML
 ├─ / → index.html
 ├─ /menu → menu/index.html
 ├─ /gallery → gallery/index.html
 ├─ /about → about/index.html
 └─ /contact → contact/index.html
 ↓
Static HTML includes:
 ├─ Base meta tags (from index.html)
 ├─ Route-specific meta (from Seo component)
 ├─ JSON-LD structured data (from main.tsx)
 ↓
Deployed static files
 ↓
Search engines can crawl HTML directly
(No JavaScript execution needed)
```

## 🧪 Testing Structure

```
Test Suites
 │
 ├─ Menu.test.tsx
 │   ├─ Renders all menu items
 │   ├─ Displays prices
 │   ├─ Shows special note
 │   ├─ Displays badges
 │   └─ Organizes by category
 │
 ├─ Contact.test.tsx
 │   ├─ Renders contact info
 │   ├─ Clickable phone link
 │   ├─ Clickable email link
 │   ├─ Displays form fields
 │   ├─ Shows booking info
 │   └─ Displays address
 │
 └─ Navbar.test.tsx
     ├─ Contains all nav links
     ├─ Displays logo
     ├─ Correct href attributes
     └─ Has mobile menu button
```

## 🚀 Build & Deploy Flow

```
Developer
 ↓
npm run dev (Development)
 ├─ Vite dev server
 ├─ Hot module replacement
 └─ Fast refresh
 ↓
npm test (Testing)
 ├─ Vitest runner
 └─ All tests pass ✓
 ↓
npm run build (Production)
 ├─ TypeScript compilation
 ├─ Vite bundling
 ├─ vite-plugin-ssg pre-rendering
 ├─ Code minification
 └─ Asset optimization
 ↓
dist/ folder generated
 ├─ Static HTML files
 ├─ Optimized JS bundles
 ├─ CSS files
 └─ Images
 ↓
Deploy to hosting
 ├─ Netlify / Vercel
 ├─ GitHub Pages
 ├─ AWS S3 + CloudFront
 └─ Any static hosting
 ↓
Live Website 🎉
```

## 📊 Performance Optimizations

```
┌─────────────────────────────────┐
│  Route-level Code Splitting     │
│  (React.lazy + Suspense)        │
│  ├─ Home bundle                 │
│  ├─ Menu bundle                 │
│  ├─ Gallery bundle              │
│  ├─ About bundle                │
│  ├─ Contact bundle              │
│  └─ NotFound bundle             │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│  Image Optimizations            │
│  ├─ loading="lazy"              │
│  ├─ width/height attributes     │
│  └─ Prevents CLS                │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│  CSS Optimizations              │
│  ├─ CSS Modules (scoped)        │
│  ├─ No runtime CSS-in-JS        │
│  └─ Minimal bundle size         │
└─────────────────────────────────┘
         ↓
    Fast Website ⚡
```

---

## 📈 Scalability Considerations

**Easy to extend:**
- ✅ Add new pages (create in /pages, add route)
- ✅ Add menu items (edit menu.ts)
- ✅ Add components (create in /components)
- ✅ Add tests (create in /test)
- ✅ Modify styles (edit .module.css files)

**Type safety:**
- All data is strongly typed with TypeScript
- Compile-time error checking
- Auto-completion in IDE

**Maintainability:**
- Clear folder structure
- Component-based architecture
- Separated concerns (data, UI, routing)
- Comprehensive documentation

---

**This architecture supports a production-ready, scalable, SEO-friendly React application! 🚀**
