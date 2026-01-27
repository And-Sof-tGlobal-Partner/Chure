# CHURE Admin Panel - Routes Map

## Authentication Routes
- `/login` - Admin login page
- `/dashboard` - Dashboard (main page after login)

## Content Management
- `/pages` - List all pages
- `/pages/new` - Create new page
- `/pages/[id]/edit` - Edit page

## Shop Management
- `/shop/products` - List all products
- `/shop/products/new` - Add new product
- `/shop/products/[id]/edit` - Edit product
- `/shop/categories` - Product categories
- `/shop/orders` - Orders list
- `/shop/orders/[id]` - Order details

## Media Management
- `/media` - Media library (images, videos)

## Admin Settings
- `/translations` - Multi-language translations
- `/users` - Manage admin users
- `/settings` - Site settings

## Current Pages Available

### ✅ Implemented
- `GET /login` - Admin login form
- `GET /dashboard` - Dashboard with stats
- `GET /pages` - Pages management table
- `GET /shop/products` - Products management table
- `GET /shop/orders` - Orders management table
- `GET /media` - Media library grid
- `GET /settings` - Settings form

### 🚧 To Implement
- Page edit/create forms
- Product edit/create forms
- Order details page
- Categories management
- Users management
- Translations interface
