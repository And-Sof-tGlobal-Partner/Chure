'use client'

import { useUIStore } from '@/store/ui.store'
import { useAuthStore } from '@/store/auth.store'
import { useCartStore } from '@/store/cart.store'
import Link from 'next/link'
import LanguageToggle from '@/components/ui/LanguageToggle'

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const { toggleMobileDrawer, toggleSidebar } = useUIStore()
  const { isLoggedIn, user, logout } = useAuthStore()
  const { items } = useCartStore()

  return (
    <header className="bg-background border-b border-gold/20 sticky top-0 z-30">
      <div className="flex items-center justify-between p-4 md:p-6">
        <button
          onClick={toggleSidebar}
          className="md:hidden flex flex-col gap-1 text-gold"
        >
          <div className="w-6 h-0.5 bg-gold" />
          <div className="w-6 h-0.5 bg-gold" />
          <div className="w-6 h-0.5 bg-gold" />
        </button>

        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <LanguageToggle />

          {/* Cart Icon */}
          <Link
            href={`/${locale}/shop`}
            className="relative text-gold hover:text-gold/80 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {items.length}
              </span>
            )}
          </Link>

          {/* Auth */}
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted">{user?.email}</span>
              <button
                onClick={() => logout()}
                className="px-4 py-2 text-text border border-gold/30 rounded hover:bg-gold/10 transition text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href={`/${locale}/auth/login`}
              className="px-4 py-2 bg-gold text-background rounded font-medium hover:bg-gold/90 transition text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
