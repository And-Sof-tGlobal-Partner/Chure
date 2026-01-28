'use client'

import { useRouter, useParams } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'
import { useCartStore } from '@/store/cart.store'
import { useEffect, useState } from 'react'

const PRODUCTS_DATA = [
  {
    id: '1',
    name: 'Traditional Mongolian Scarf',
    price: 45000,
    image: '🧣',
    seller: 'Nomadic Weavers',
    store: 'store1',
    description: 'Hand-woven traditional Mongolian scarf made from high-quality natural fibers. Perfect for any occasion, this scarf showcases authentic Mongolian craftsmanship with intricate patterns.',
    details: [
      'Material: 100% Natural Wool',
      'Size: 180cm x 50cm',
      'Hand-woven by skilled artisans',
      'Traditional patterns and colors',
    ],
  },
  {
    id: '2',
    name: 'Handmade Leather Belt',
    price: 35000,
    image: '🎽',
    seller: 'Artisan Workshop',
    store: 'store2',
    description: 'Premium handcrafted leather belt with traditional Mongolian designs. Each belt is individually made with attention to detail and quality.',
    details: [
      'Material: Genuine Leather',
      'Length: Adjustable (up to 120cm)',
      'Hand-painted traditional designs',
      'Durable buckle hardware',
    ],
  },
  {
    id: '3',
    name: 'Silk Painting',
    price: 120000,
    image: '🎨',
    seller: 'Cultural Foundation',
    store: 'store3',
    description: 'Beautiful silk painting depicting Mongolian cultural heritage. A true work of art that captures the essence of traditional Mongolian aesthetics.',
    details: [
      'Material: Premium Silk',
      'Size: 60cm x 90cm',
      'Original artwork',
      'Comes with protective frame',
    ],
  },
  {
    id: '4',
    name: 'Mongolian Felt Hat',
    price: 55000,
    image: '🎩',
    seller: 'Traditional Arts',
    store: 'store1',
    description: 'Authentic Mongolian felt hat handmade using traditional methods. Designed for both style and functionality, perfect for any season.',
    details: [
      'Material: Premium Wool Felt',
      'Size: One size fits all (adjustable)',
      'Traditional design',
      'Lightweight and durable',
    ],
  },
  {
    id: '5',
    name: 'Wooden Carved Box',
    price: 75000,
    image: '📦',
    seller: 'Wood Craft Studio',
    store: 'store2',
    description: 'Hand-carved wooden box with intricate Mongolian patterns. Perfect for storing treasures or as a decorative piece in any home.',
    details: [
      'Material: Solid Wood',
      'Size: 25cm x 15cm x 10cm',
      'Hand-carved details',
      'Durable finish with protective coating',
    ],
  },
  {
    id: '6',
    name: 'Cashmere Shawl',
    price: 250000,
    image: '👗',
    seller: 'Luxury Collection',
    store: 'store3',
    description: 'Luxurious 100% cashmere shawl in elegant design. The ultimate statement piece for those who appreciate fine craftsmanship and comfort.',
    details: [
      'Material: 100% Pure Cashmere',
      'Size: 200cm x 80cm',
      'Soft and warm',
      'Machine washable',
    ],
  },
]

const STORES = [
  { id: 'store1', name: 'Delguur 1' },
  { id: 'store2', name: 'Delguur 2' },
  { id: 'store3', name: 'Delguur 3' },
]

export default function ProductDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { isLoggedIn } = useAuthStore()
  const { addToCart } = useCartStore()
  const [quantity, setQuantity] = useState(1)

  const productId = params.productId as string
  const product = PRODUCTS_DATA.find(p => p.id === productId)
  const storeName = STORES.find(s => s.id === product?.store)?.name

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(`/${params.locale}/auth/login`)
    }
  }, [isLoggedIn, router, params.locale])

  if (!isLoggedIn) {
    return <div className="min-h-screen bg-background" />
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-gold mb-4">Product not found</h1>
          <button
            onClick={() => router.push(`/${params.locale}/shop`)}
            className="px-6 py-2 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition"
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })
    setQuantity(1)
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => router.push(`/${params.locale}/shop`)}
          className="mb-8 text-gold hover:text-gold/80 transition font-medium"
        >
          ← Back to Shop
        </button>

        {/* Product Details Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-gold/10 to-wood/10 rounded-lg flex items-center justify-center text-9xl">
              {product.image}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gold/60 text-sm mb-2">{storeName}</p>
              <h1 className="text-3xl font-heading font-bold text-gold mb-2">
                {product.name}
              </h1>
              <p className="text-muted mb-4">{product.seller}</p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gold/20 py-4">
              <p className="text-text/80 text-sm mb-2">Price</p>
              <p className="text-3xl font-bold text-gold">
                {product.price.toLocaleString()} ₮
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-gold mb-2">About this item</h3>
              <p className="text-text/80 leading-relaxed">{product.description}</p>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-gold mb-3">Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-text/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <label className="text-text/80 font-medium">Quantity:</label>
                <div className="flex items-center border border-gold/20 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gold hover:bg-gold/10 transition"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-center w-12">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gold hover:bg-gold/10 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full px-6 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
