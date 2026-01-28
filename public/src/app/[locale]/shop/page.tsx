'use client'

import { useAuthStore } from '@/store/auth.store'
import { useCartStore } from '@/store/cart.store'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ShopPageProps {
  params: Promise<{
    locale: string
  }>
}

export default function ShopPage({ params }: ShopPageProps) {
  const router = useRouter()
  const { isLoggedIn } = useAuthStore()
  const { addToCart } = useCartStore()
  const [selectedStore, setSelectedStore] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name-asc')
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    if (!isLoggedIn) {
      params.then((p) => {
        setLocale(p.locale)
        router.push(`/${p.locale}/auth/login`)
      })
    } else {
      params.then((p) => {
        setLocale(p.locale)
      })
    }
  }, [isLoggedIn, router, params])

  if (!isLoggedIn) {
    return <div className="min-h-screen bg-background" />
  }

  const products = [
    {
      id: '1',
      name: 'Traditional Mongolian Scarf',
      price: 45000,
      image: '🧣',
      seller: 'Nomadic Weavers',
      store: 'store1',
    },
    {
      id: '2',
      name: 'Handmade Leather Belt',
      price: 35000,
      image: '🎽',
      seller: 'Artisan Workshop',
      store: 'store2',
    },
    {
      id: '3',
      name: 'Silk Painting',
      price: 120000,
      image: '🎨',
      seller: 'Cultural Foundation',
      store: 'store3',
    },
    {
      id: '4',
      name: 'Mongolian Felt Hat',
      price: 55000,
      image: '🎩',
      seller: 'Traditional Arts',
      store: 'store1',
    },
    {
      id: '5',
      name: 'Wooden Carved Box',
      price: 75000,
      image: '📦',
      seller: 'Wood Craft Studio',
      store: 'store2',
    },
    {
      id: '6',
      name: 'Cashmere Shawl',
      price: 250000,
      image: '👗',
      seller: 'Luxury Collection',
      store: 'store3',
    },
  ]

  const stores = [
    { id: 'all', name: 'All Stores' },
    { id: 'store1', name: 'Delguur 1' },
    { id: 'store2', name: 'Delguur 2' },
    { id: 'store3', name: 'Delguur 3' },
  ]

  // Filter products by store and search query
  let filteredProducts = products.filter((product) => {
    const matchesStore = selectedStore === 'all' || product.store === selectedStore
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStore && matchesSearch
  })

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name, ['en', 'mn'])
      case 'name-desc':
        return b.name.localeCompare(a.name, ['en', 'mn'])
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      default:
        return 0
    }
  })

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-heading font-bold text-gold mb-2">Shop</h1>
        <p className="text-muted mb-8">Support Mongolian artisans directly</p>

        {/* Search and Filter Container */}
        <div className="mb-8 p-4 bg-gold/5 border border-gold/10 rounded flex flex-col md:flex-row gap-3 items-start md:items-center">
          {/* Search Bar */}
          <div className="w-full md:flex-1 md:max-w-xs">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-background border border-gold/20 rounded text-text placeholder-text/50 focus:outline-none focus:border-gold/40 transition"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-sm bg-background border border-gold/20 rounded text-text focus:outline-none focus:border-gold/40 transition cursor-pointer"
          >
            <option value="name-asc">A-Z / а-я</option>
            <option value="name-desc">Z-A / я-а</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>

          {/* Store Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => setSelectedStore(store.id)}
                className={`px-3 py-1 rounded text-sm transition ${
                  selectedStore === store.id
                    ? 'bg-gold text-background font-semibold'
                    : 'bg-gold/20 text-gold hover:bg-gold/30'
                }`}
              >
                {store.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => router.push(`/${locale}/shop/${product.id}`)}
                className="p-6 border border-gold/20 rounded hover:border-gold/40 transition group cursor-pointer"
              >
                <div className="w-full h-40 bg-linear-to-br from-gold/10 to-wood/10 rounded mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                  {product.image}
                </div>
                <h3 className="text-lg font-heading text-gold group-hover:text-gold/80 transition">
                  {product.name}
                </h3>
                <p className="text-muted text-sm mb-1">{product.seller}</p>
                <p className="text-gold/60 text-xs mb-3">
                  {stores.find(s => s.id === product.store)?.name}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gold">
                    {product.price.toLocaleString()} ₮
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(product)
                    }}
                    className="px-3 py-1 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text/60">No products found</p>
          </div>
        )}
      </div>
    </div>
  )
}
