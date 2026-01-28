'use client'

import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface FeaturedProps {
  locale: string
}

export default function Featured({ locale }: FeaturedProps) {
  const t = locale === 'en' ? en : mn
  const collections = [
    { title: t.featured.industry, slug: 'cultural-industry' },
    { title: t.featured.tours, slug: 'tour' },
    { title: t.featured.organizations, slug: 'ngo' },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-gold mb-12 text-center">
          {t.featured.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.slug}
              className="aspect-square rounded bg-gradient-to-br from-gold/20 to-wood/20 border border-gold/30 flex items-end justify-start p-6 cursor-pointer hover:border-gold transition"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold text-gold">
                  {item.title}
                </h3>
                <p className="text-muted text-sm mt-2">{t.featured.exploreCollection}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
