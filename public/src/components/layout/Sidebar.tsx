'use client'

import { useUIStore } from '@/store/ui.store'
import Link from 'next/link'
import { useState } from 'react'

interface MenuItem {
  labelEn: string
  labelMn: string
  href?: string
  children?: MenuItem[]
}

interface SidebarProps {
  locale: string
}

export default function Sidebar({ locale }: SidebarProps) {
  const { sidebarOpen, closeSidebar } = useUIStore()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const isEnglish = locale === 'en'

  const menuItems: MenuItem[] = [
    { labelEn: 'Home', labelMn: 'Нүүр', href: `/${locale}` },
    { labelEn: 'About', labelMn: 'Танилцуулга', href: `/${locale}/about` },
    {
      labelEn: 'Chure Music LLC',
      labelMn: 'Chure Music LLC',
      children: [
        {
          labelEn: 'Culture Industry',
          labelMn: 'Соёлын үйлдвэрлэл',
          children: [
            { labelEn: 'Altai Yatga Production', labelMn: 'Алтай ятга үйлдвэрлэл', href: `/${locale}/culture-industry/altai-yatga` },
            { labelEn: 'Bogan Yatga Production', labelMn: 'Буган ятга үйлдвэрлэл', href: `/${locale}/culture-industry/bogan-yatga` },
            { labelEn: 'Packaging', labelMn: 'Цүнх - Сав баглаа бодол', href: `/${locale}/culture-industry/packaging` },
            { labelEn: 'Chure Brand Clothing', labelMn: 'Чүрэ брэндийн хувцас', href: `/${locale}/culture-industry/chure-clothing` },
            { labelEn: 'Gift Production', labelMn: 'Бэлэг дурсгал үйлдвэрлэл', href: `/${locale}/culture-industry/gifts` },
          ],
        },
      ],
    },
    {
      labelEn: 'Chure Yayalag Music',
      labelMn: 'Chure Yayalag Music',
      children: [
        { labelEn: 'Altai Yatga Tour', labelMn: 'Алтай ятгатай аялал', href: `/${locale}/chure-yayalag/altai-tour` },
      ],
    },
    {
      labelEn: 'Mongolian Music Agency NGO',
      labelMn: 'Монгол хөгжмийн агентлаг ХҮХ',
      children: [
        { labelEn: 'Ethnic Music Study', labelMn: 'Угсаатны хөгжим судлал', href: `/${locale}/ngo/ethnic-music-study` },
        { labelEn: 'Altai Music Study', labelMn: 'Алтай ятгын судлал', href: `/${locale}/ngo/altai-music-study` },
        { labelEn: 'Ensemble Artists', labelMn: 'Хамтлаг уран бүтээлчид', href: `/${locale}/ngo/ensemble-artists` },
        { labelEn: 'Khatan Training Center', labelMn: 'Хатан ятга сургалтын төв', href: `/${locale}/ngo/khatan-training-center` },
        { labelEn: 'Archive', labelMn: 'АРХИВ', href: `/${locale}/ngo/archive` },
      ],
    },
    {
      labelEn: 'AGUI O2 Auditorium',
      labelMn: 'AGUI O2 Театр',
      children: [
        { labelEn: 'Project 1: Cultural Heritage', labelMn: 'Project No1: Түүх өв соёлын танин мэдэхүйн танилцуулга тоглолт', href: `/${locale}/auditorium/project-1` },
        { labelEn: 'Project 2: School Education', labelMn: 'Project No2: ЕБС-ийн хүүхдүүдэд зориулсан танин мэдэхүй', href: `/${locale}/auditorium/project-2` },
        { labelEn: 'Project 3: Ancient Music Journey', labelMn: 'Project No3: Эртний дуу хөгжмийн аялал, оюун санааны жуулчлал', href: `/${locale}/auditorium/project-3` },
        { labelEn: 'Project 4: Professional Training', labelMn: 'Project No4: ТО/СУ', href: `/${locale}/auditorium/project-4` },
      ],
    },
    {
      labelEn: 'Chure Club',
      labelMn: 'Chure Club',
      children: [
        { labelEn: 'Board of Directors', labelMn: 'Удирдах зөвлөл', href: `/${locale}/chure-club/board` },
        { labelEn: 'Membership', labelMn: 'Гишүүнчлэл', href: `/${locale}/chure-club/membership` },
        { labelEn: 'Goals', labelMn: 'Зорилго', href: `/${locale}/chure-club/goals` },
        { labelEn: 'International Branch', labelMn: 'Гадаад салбар', href: `/${locale}/chure-club/international-branch` },
        { labelEn: 'Domestic Branch', labelMn: 'Дотоод салбар', href: `/${locale}/chure-club/domestic-branch` },
      ],
    },
    {
      labelEn: 'Ensemble Artists',
      labelMn: 'Хамтлаг уран бүтээлчид',
      children: [
        { labelEn: 'MUGJ Yatgach Ch.Mönkh - Erdene', labelMn: 'МУГЖ Ятгач Ч.Мөнх - Эрдэнэ', href: `/${locale}/ensemble/mugj-yatgach` },
        { labelEn: 'Borte Ensemble', labelMn: 'Бөртэ хамтлаг', href: `/${locale}/ensemble/borte` },
        { labelEn: 'Altai Ensemble', labelMn: 'Алтай хамтлаг', href: `/${locale}/ensemble/altai` },
        { labelEn: 'Khatan Yatga Ensemble', labelMn: 'Хатан ятга чуулга', href: `/${locale}/ensemble/khatan-yatga` },
        { labelEn: 'Chure Choir', labelMn: 'Чүрэ дуулга', href: `/${locale}/ensemble/chure-choir` },
      ],
    },
    {
      labelEn: 'Education',
      labelMn: 'Сургалт',
      children: [
        { labelEn: 'Altai Yatga Training', labelMn: 'Алтай ятга сургалт', href: `/${locale}/education/altai-yatga-training` },
        { labelEn: 'Bogan Yatga Training', labelMn: 'Буган ятга сургалт', href: `/${locale}/education/bogan-yatga-training` },
        { labelEn: 'Ethnic Music Training', labelMn: 'Угсаатны дуу хөгжмийн сургалт', href: `/${locale}/education/ethnic-music-training` },
        { labelEn: 'Training & Research Books', labelMn: 'Сургалт судалгааны ном', href: `/${locale}/education/training-research-books` },
      ],
    },
    {
      labelEn: 'Events',
      labelMn: 'Үйл явдал',
      children: [
        { labelEn: 'Concert', labelMn: 'Концерт', href: `/${locale}/events/concert` },
        { labelEn: 'Festival', labelMn: 'Фестиваль', href: `/${locale}/events/festival` },
        { labelEn: 'Lecture', labelMn: 'Лекц', href: `/${locale}/events/lecture` },
        { labelEn: 'Exhibition', labelMn: 'Үзэсгэлэн', href: `/${locale}/events/exhibition` },
        { labelEn: 'Ritual', labelMn: 'Тахилга', href: `/${locale}/events/ritual` },
      ],
    },
    {
      labelEn: 'Shopping',
      labelMn: 'Худалдаа',
      children: [
        { labelEn: 'CHURE Brand Store', labelMn: 'CHURE Брэнд дэлгүүр', href: `/${locale}/shop/chure-brand-store` },
        { labelEn: 'CHURE Online Shop', labelMn: 'CHURE Brand онлайн дэлгүүр', href: `/${locale}/shop/chure-online-shop` },
        { labelEn: 'Gift Souvenirs', labelMn: 'Бэлэг дурсгал', href: `/${locale}/shop/gifts` },
      ],
    },
    { labelEn: 'Contact', labelMn: 'Холбоо барих', href: `/${locale}/contact` },
  ]

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  const renderMenuItems = (items: MenuItem[], parentLabel = ''): React.ReactNode => {
    return items.map((item) => {
      const itemKey = parentLabel ? `${parentLabel}-${item.labelMn}` : item.labelMn
      const hasChildren = item.children && item.children.length > 0
      const isExpanded = expandedItems.includes(itemKey)
      const label = isEnglish ? item.labelEn : item.labelMn

      return (
        <div key={itemKey}>
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(itemKey)}
              className="w-full text-left px-3 py-2 rounded text-text hover:bg-gold/10 hover:text-gold transition flex items-center justify-between"
            >
              <span>{label}</span>
              <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
          ) : (
            <Link
              href={item.href || '#'}
              className="block px-3 py-2 rounded text-text hover:bg-gold/10 hover:text-gold transition"
            >
              {label}
            </Link>
          )}
          {hasChildren && isExpanded && (
            <div className="pl-4 space-y-1 border-l border-gold/20 ml-2">
              {renderMenuItems(item.children!, itemKey)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 bg-wood/10 border-r border-gold/20 flex-col p-6 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-heading font-bold text-gold">CHURE</h1>
        </div>
        <nav className="space-y-1 flex-1">{renderMenuItems(menuItems)}</nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeSidebar} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-background border-r border-gold/20 p-6 z-50 overflow-y-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-heading font-bold text-gold">CHURE</h1>
            </div>
            <nav className="space-y-1" onClick={closeSidebar}>
              {renderMenuItems(menuItems)}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
