# CHURE Public Site - Routes Map

## Locale-based Routes (with [locale] prefix: /en, /mn)

### Landing Page
- `/:locale/` - Landing page (home)

### Main Navigation
- `/:locale/about` - About page
- `/:locale/cultural-industry` - Cultural industry section
- `/:locale/cultural-industry/[slug]` - Industry detail page
- `/:locale/tour` - Tour offerings
- `/:locale/ngo` - NGO & Organizations
- `/:locale/ngo/[slug]` - Organization detail page
- `/:locale/auditorium` - Auditorium/Events space
- `/:locale/education` - Education programs
- `/:locale/events` - Events listings
- `/:locale/contact` - Contact page

### Shop (Requires Authentication)
- `/:locale/shop` - Shop landing
- `/:locale/shop/[slug]` - Product detail
- `/:locale/shop/cart` - Shopping cart

### Authentication
- `/:locale/auth/login` - User login
- `/:locale/auth/signup` - User registration

## Current Components

### ✅ Implemented
- Landing page with hero, story, pillars, featured sections
- Dynamic sidebar with menu
- Header with login/logout and cart
- Footer with links and info
- Root redirect to /en (default locale)

### 🚧 To Implement
- Individual page templates
- Shop product pages
- Authentication pages (login/signup)
- About, cultural-industry, tour, ngo pages

## Design System
- **Colors**: Gold (#C8A44D), Dark (#0B0B0B), Wood (#5A3E2B), Text (#EAE6DF), Muted (#A8A39B)
- **Fonts**: Cinzel/Cormorant (headings), Inter (body)
- **State Management**: Zustand (UI, Auth, Cart)
