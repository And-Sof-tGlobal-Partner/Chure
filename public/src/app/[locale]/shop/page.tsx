'use client'

import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'

interface ShopPageProps {
  params: Promise<{
    locale: string
  }>
}

export default function ShopPage() {
  const router = useRouter()
  const { isLoggedIn } = useAuthStore()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/en/auth/login')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return <div className="min-h-screen bg-background" />
  }

  const products = [
    {
      id: 1,
      name: 'Traditional Mongolian Scarf',
      price: 45000,
      image: '🧣',
      seller: 'Nomadic Weavers',
    },
    {
      id: 2,
      name: 'Handmade Leather Belt',
      price: 35000,
      image: '🎽',
      seller: 'Artisan Workshop',
    },
    {
      id: 3,
      name: 'Silk Painting',
      price: 120000,
      image: '🎨',
      seller: 'Cultural Foundation',
    },
    {
      id: 4,
      name: 'Mongolian Felt Hat',
      price: 55000,
      image: '🎩',
      seller: 'Traditional Arts',
    },
    {
      id: 5,
      name: 'Wooden Carved Box',
      price: 75000,
      image: '📦',
      seller: 'Wood Craft Studio',
    },
    {
      id: 6,
      name: 'Cashmere Shawl',
      price: 250000,
      image: '👗',
      seller: 'Luxury Collection',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-heading font-bold text-gold mb-2">Shop</h1>
        <p className="text-muted mb-8">Support Mongolian artisans directly</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/en/shop/${product.id}`}
              className="p-6 border border-gold/20 rounded hover:border-gold/40 transition group"
            >
              <div className="w-full h-40 bg-gradient-to-br from-gold/10 to-wood/10 rounded mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                {product.image}
              </div>
              <h3 className="text-lg font-heading text-gold group-hover:text-gold/80 transition">
                {product.name}
              </h3>
              <p className="text-muted text-sm mb-2">{product.seller}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gold">
                  {product.price.toLocaleString()} ₮
                </span>
                <button className="px-3 py-1 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition">
                  Add
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
