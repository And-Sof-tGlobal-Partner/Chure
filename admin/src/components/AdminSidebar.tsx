'use client'

import { useAdminUIStore } from '@/store/adminUI.store'
import { useAdminAuthStore } from '@/store/adminAuth.store'
import Link from 'next/link'

export default function AdminSidebar() {
  const { sidebarOpen, setActiveTab } = useAdminUIStore()
  const { logout } = useAdminAuthStore()

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '📊' },
    { label: 'Pages', href: '/pages', icon: '📄' },
    { label: 'Shop Products', href: '/shop/products', icon: '🛍️' },
    { label: 'Categories', href: '/shop/categories', icon: '📂' },
    { label: 'Orders', href: '/shop/orders', icon: '📦' },
    { label: 'Media', href: '/media', icon: '🖼️' },
    { label: 'Translations', href: '/translations', icon: '🌐' },
    { label: 'Users', href: '/users', icon: '👥' },
    { label: 'Settings', href: '/settings', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 bg-wood/10 border-r border-gold/20 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-gold/20">
        <h2 className="text-xl font-heading font-bold text-gold">CHURE Admin</h2>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActiveTab(item.label)}
            className="flex items-center gap-3 px-4 py-2 rounded text-text hover:bg-gold/10 hover:text-gold transition"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gold/20 space-y-2">
        <button
          onClick={() => logout()}
          className="w-full px-4 py-2 text-text border border-gold/30 rounded hover:bg-gold/10 hover:text-gold transition text-sm"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}
