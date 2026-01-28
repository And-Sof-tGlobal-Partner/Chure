'use client'

import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface ShopTeaserProps {
  locale: string
}

export default function ShopTeaser({ locale }: ShopTeaserProps) {
  const t = locale === 'en' ? en : mn

  return (
    <section className="py-20 px-6 bg-wood/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold text-gold mb-6">
          {t.landing.shopTeaser.title}
        </h2>
        <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
          {t.landing.shopTeaser.description}
        </p>
        <button className="px-8 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition">
          {t.landing.shopTeaser.visitShop}
        </button>
      </div>
    </section>
  )
}
