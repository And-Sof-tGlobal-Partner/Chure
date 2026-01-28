'use client'

import Image from 'next/image'
import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface FeaturedProps {
  locale: string
}

export default function Featured({ locale }: FeaturedProps) {
  const t = locale === 'en' ? en : mn
  const collections = [
    { 
      title: t.featured.industry, 
      slug: 'cultural-industry',
      image: '/ChatGPT Image Jan 29, 2026, 12_42_49 AM.png',
      description: 'Handcrafted traditional goods'
    },
    { 
      title: t.featured.tours, 
      slug: 'tour',
      image: '/ChatGPT Image Jan 29, 2026, 12_42_49 AM.png',
      description: 'Explore Mongolia with us'
    },
    { 
      title: t.featured.organizations, 
      slug: 'ngo',
      image: '/ChatGPT Image Jan 29, 2026, 12_42_49 AM.png',
      description: 'Cultural organizations'
    },
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
              className="aspect-square rounded bg-linear-to-br from-gold/20 to-wood/20 border border-gold/30 flex items-end justify-start p-6 cursor-pointer hover:border-gold transition overflow-hidden relative group"
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10">
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
