'use client'

import { useCartStore } from '@/store/cart.store'
import { useAuthStore } from '@/store/auth.store'
import { en } from '@/locales/en'
import { mn } from '@/locales/mn'
import Link from 'next/link'

interface CartDrawerProps {
  locale: string
}

export default function CartDrawer({ locale }: CartDrawerProps) {
  const t = locale === 'en' ? en : mn
  const { isLoggedIn } = useAuthStore()
  const { items, isDrawerOpen, closeDrawer, removeFromCart, updateQuantity, getTotalPrice } = useCartStore()

  // Don't show if not logged in
  if (!isLoggedIn) {
    return null
  }

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-96 bg-background border-l border-gold/20 z-50 flex flex-col p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-gold">
            {t.header.cart}
          </h2>
          <button
            onClick={closeDrawer}
            className="text-text/60 hover:text-gold transition text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Empty Cart State */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-6xl mb-4">🛍️</div>
            <p className="text-xl text-text/60 text-center mb-6">
              {t.shop.cart.empty}
            </p>
            <Link
              href={`/${locale}/shop`}
              onClick={closeDrawer}
              className="px-6 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition"
            >
              {t.shop.cart.continueShopping}
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border border-gold/20 rounded bg-wood/5 flex gap-4"
                >
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-text">{item.name}</h3>
                    <p className="text-gold font-semibold">{item.price.toLocaleString()} ₮</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-1 bg-gold/20 text-gold rounded hover:bg-gold/30 transition"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-text">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gold/20 text-gold rounded hover:bg-gold/30 transition"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto px-3 py-1 text-red-400 hover:bg-red-900/20 rounded transition text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="border-t border-gold/20 pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-text/80">Total:</span>
                <span className="text-xl font-bold text-gold">{getTotalPrice().toLocaleString()} ₮</span>
              </div>
              <Link
                href={`/${locale}/shop/checkout`}
                onClick={closeDrawer}
                className="block w-full px-6 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition text-center"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
