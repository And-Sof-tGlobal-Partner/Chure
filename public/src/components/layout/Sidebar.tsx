'use client'

import { useUIStore } from '@/store/ui.store'
import { menuItems as configMenuItems, type MenuItem } from '@/config/menu.config'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, memo } from 'react'

interface SidebarProps {
  locale: string
}

interface SidebarItemProps {
  item: MenuItem
  locale: string
  expanded: Set<string>
  toggle: (id: string) => void
  pathname: string
  onNavigate?: () => void
}

function SidebarItem({
  item,
  locale,
  expanded,
  toggle,
  pathname,
  onNavigate,
}: SidebarItemProps) {
  const label = locale === 'en' ? item.labelEn : item.labelMn
  const isOpen = expanded.has(item.id)
  const hasChildren = item.children && item.children.length > 0

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => toggle(item.id)}
          className="w-full text-left px-4 py-3 md:px-3 md:py-2 rounded text-text hover:bg-gold/10 hover:text-gold transition flex items-center justify-between"
        >
          <span>{label}</span>
          <span
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            ▾
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pl-4 space-y-1 border-l border-gold/20 ml-2">
            {item.children.map((child) => (
              <MemoizedSidebarItem
                key={child.id}
                item={child}
                locale={locale}
                expanded={expanded}
                toggle={toggle}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!item.href) return null

  const href = item.href.replace('{locale}', locale)
  const isActive = href === pathname

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`
        block px-4 py-3 md:px-3 md:py-2 rounded transition
        ${
          isActive
            ? 'bg-gold/20 text-gold font-semibold'
            : 'text-text hover:bg-gold/10 hover:text-gold'
        }
      `}
    >
      {label}
    </Link>
  )
}

const MemoizedSidebarItem = memo(SidebarItem)

export default function Sidebar({ locale }: SidebarProps) {
  const { sidebarOpen, closeSidebar } = useUIStore()
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:fixed md:left-0 md:top-0 md:bottom-0 md:h-screen w-72 bg-wood/10 border-r border-gold/20 flex-col p-6 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-heading font-bold text-gold">CHURE</h1>
        </div>
        <nav className="space-y-1 flex-1">
          {configMenuItems.map((item) => (
            <MemoizedSidebarItem
              key={item.id}
              item={item}
              locale={locale}
              expanded={expanded}
              toggle={toggle}
              pathname={pathname}
            />
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? '' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300
            ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={closeSidebar}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 bottom-0 w-64
            bg-background border-r border-gold/20 p-6 z-50
            overflow-y-auto transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="mb-8">
            <h1 className="text-2xl font-heading font-bold text-gold">CHURE</h1>
          </div>

          <nav className="space-y-1">
            {configMenuItems.map((item) => (
              <MemoizedSidebarItem
                key={item.id}
                item={item}
                locale={locale}
                expanded={expanded}
                toggle={toggle}
                pathname={pathname}
                onNavigate={closeSidebar}
              />
            ))}
          </nav>
        </aside>
      </div>
    </>
  )
}
