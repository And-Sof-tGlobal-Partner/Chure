# CHURE - Digital Cultural Platform

## Quick Start

### Servers Running
- **Public Site**: http://localhost:3000
- **Admin Panel**: http://localhost:3002

---

## 🏠 PUBLIC SITE (localhost:3000)

### Main Pages
- `/en` - Landing page (HOME)
- `/en/shop` - Shop (requires login)
- `/en/auth/login` - Login page
- `/en/auth/signup` - Sign up page
- `/en/about` - About page
- `/en/cultural-industry` - Cultural industry
- `/en/tour` - Tour offerings
- `/en/ngo` - Organizations
- `/en/education` - Education
- `/en/events` - Events
- `/en/contact` - Contact

### Navigation Structure
```
Home
├── About
├── Cultural Industry
├── Tour
├── NGO
├── Auditorium
├── Education
├── Events
├── Shop (Login required)
└── Contact
```

### Default Login (Shop)
Currently uses Zustand state management. Simply click "Login" and enter any credentials.

---

## 🎛️ ADMIN PANEL (localhost:3002)

### Login
- URL: http://localhost:3002/login
- **Username**: admin@chure.mn
- **Password**: any value (demo mode)

### Admin Pages Available

#### Dashboard
- `/dashboard` - Overview with stats

#### Content Management
- `/pages` - Manage pages (list view)
- `/pages/new` - Create new page
- `/pages/[id]/edit` - Edit page

#### Shop Management
- `/shop/products` - Product list with actions
- `/shop/products/new` - Add product
- `/shop/products/[id]/edit` - Edit product
- `/shop/categories` - Product categories
- `/shop/orders` - Orders management with status

#### Media & Settings
- `/media` - Media library with upload
- `/settings` - Site configuration
- `/translations` - Multi-language (TODO)
- `/users` - User management (TODO)

---

## 🎨 Design System

### Colors
- **Background**: `#0B0B0B` (dark)
- **Gold**: `#C8A44D` (primary)
- **Wood**: `#5A3E2B` (accent)
- **Text**: `#EAE6DF` (main text)
- **Muted**: `#A8A39B` (secondary text)

### Typography
- **Headings**: Cinzel, Cormorant (serif)
- **Body**: Inter (sans-serif)

### Components
- Sidebar (dynamic, menu-driven)
- Header with login/cart
- Footer with links
- Tables with edit/delete actions
- Forms with validation
- Grid layouts for media/products

---

## 📦 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **State**: Zustand (UI, Auth, Cart)
- **Language**: TypeScript
- **Fonts**: Google Fonts (Cinzel, Cormorant, Inter)

---

## 🚀 Key Features Implemented

✅ Public landing page with hero, story, pillars, featured sections
✅ Dynamic sidebar with locale-aware navigation
✅ Admin dashboard with stats
✅ Pages management (CRUD table)
✅ Products management (CRUD table)
✅ Orders management (status tracking)
✅ Media library (grid view)
✅ Settings panel (form)
✅ Login pages (public & admin)
✅ Shop protection (auth guard)
✅ Zustand stores (UI, Auth, Cart)

---

## 🔜 Next Steps

- [ ] Implement actual database (MongoDB/PostgreSQL)
- [ ] Add API routes for CRUD operations
- [ ] Create edit/create forms for pages & products
- [ ] Implement image upload to media library
- [ ] Add multi-language support
- [ ] Build order details page
- [ ] Add user management interface
- [ ] Implement email notifications
- [ ] Add payment integration (Shop)
- [ ] SEO optimization

---

## 💡 Usage Notes

### For Testing Admin
1. Go to http://localhost:3002/login
2. Enter any email/password
3. Click "Sign In"
4. Explore dashboard, pages, products, orders, media, settings

### For Testing Public
1. Go to http://localhost:3000
2. Browse landing page
3. Try to access `/en/shop` - will redirect to login
4. Click "Login" button
5. Sign in and access shop

---

## 📂 Project Structure

```
public/                    # Public frontend
├── src/
│   ├── app/
│   │   ├── [locale]/      # Locale-based routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/        # Sidebar, Header, Footer
│   │   ├── landing/       # Hero, Story, Pillars, etc.
│   │   ├── shop/
│   │   └── ui/
│   └── store/             # Zustand stores
│
admin/                      # Admin panel
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── pages/         # Pages management
│   │   ├── shop/          # Products, Orders
│   │   ├── media/
│   │   ├── settings/
│   │   └── ...
│   ├── components/
│   │   ├── AdminLayout.tsx
│   │   ├── AdminSidebar.tsx
│   │   └── forms/
│   └── store/             # Admin auth & UI stores
```

---

## 📞 Support

For issues or feature requests, check the ROUTES.md files in each folder for detailed route maps.
