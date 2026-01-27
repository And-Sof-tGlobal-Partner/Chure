'use client'

import { useUIStore } from '@/store/ui.store'
import Link from 'next/link'

interface SidebarProps {
  locale: string
}

export default function Sidebar({ locale }: SidebarProps) {
  const { sidebarOpen, closeSidebar } = useUIStore()

  const menuItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'About', href: `/${locale}/about` },
    { label: 'Cultural Industry', href: `/${locale}/cultural-industry` },
    { label: 'Tour', href: `/${locale}/tour` },
    { label: 'NGO', href: `/${locale}/ngo` },
    { label: 'Auditorium', href: `/${locale}/auditorium` },
    { label: 'Education', href: `/${locale}/education` },
    { label: 'Events', href: `/${locale}/events` },
    { label: 'Shop', href: `/${locale}/shop` },
    { label: 'Contact', href: `/${locale}/contact` },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-wood/10 border-r border-gold/20 flex-col p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-heading font-bold text-gold">CHURE</h1>
        </div>
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded text-text hover:bg-gold/10 hover:text-gold transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeSidebar}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-background border-r border-gold/20 p-6 z-50">
            <div className="mb-8">
              <h1 className="text-2xl font-heading font-bold text-gold">CHURE</h1>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded text-text hover:bg-gold/10 hover:text-gold transition"
                  onClick={closeSidebar}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
