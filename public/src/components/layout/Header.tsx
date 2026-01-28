'use client'

import { useUIStore } from '@/store/ui.store'
import { useAuthStore } from '@/store/auth.store'
import { useCartStore } from '@/store/cart.store'
import Link from 'next/link'
import { useState } from 'react'
import LanguageToggle from '@/components/ui/LanguageToggle'

interface HeaderProps {
  locale: string
}

export default function Header({ locale }: HeaderProps) {
  const { toggleMobileDrawer, openSidebar } = useUIStore()
  const { isLoggedIn, user, logout } = useAuthStore()
  const { items } = useCartStore()
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  const handleLogout = () => {
    logout()
    setShowProfileMenu(false)
    setShowLogoutConfirm(false)
  }

  return (
    <header className="bg-background border-b border-gold/20 sticky top-0 z-30">
      <div className="flex items-center justify-between p-4 md:p-6">
        <button
          onClick={openSidebar}
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
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 px-4 py-2 text-text border border-gold/30 rounded hover:bg-gold/10 transition text-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="hidden sm:inline">{user?.name || user?.email}</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-wood/20 border border-gold/30 rounded shadow-lg">
                  <Link
                    href={`/${locale}/profile`}
                    className="block px-4 py-3 text-text hover:bg-gold/10 rounded-t transition text-sm"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href={`/${locale}/shop`}
                    className="block px-4 py-3 text-text hover:bg-gold/10 transition text-sm"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Shop
                  </Link>
                  <button
                    onClick={() => setShowLogoutConfirm(true)}
                    className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-b transition text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* Logout Confirmation Modal */}
              {showLogoutConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-background border border-gold/30 rounded-lg p-6 max-w-sm mx-4">
                    <h3 className="text-lg font-heading font-bold text-gold mb-4">
                      Confirm Logout
                    </h3>
                    <p className="text-text mb-6">
                      Are you sure you want to log out?
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowLogoutConfirm(false)}
                        className="flex-1 px-4 py-2 bg-wood/10 text-text border border-gold/30 rounded hover:bg-gold/10 transition font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
