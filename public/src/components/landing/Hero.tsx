'use client'

import Image from 'next/image'
import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface HeroProps {
  locale: string
}

export default function Hero({ locale }: HeroProps) {
  const t = locale === 'en' ? en : mn

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-wood/5 to-background px-6 relative overflow-hidden">
      {/* Background lyre image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <Image
          src="/ChatGPT Image Jan 29, 2026, 12_42_49 AM.png"
          alt="Lyre background"
          width={800}
          height={800}
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-gold">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-2xl text-text/80 font-light">
          {t.hero.subtitle}
        </p>
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition">
            {t.hero.exploreNow}
          </button>
          <button className="px-8 py-3 border border-gold text-gold rounded hover:bg-gold/10 transition">
            {t.hero.learnMore}
          </button>
        </div>
      </div>
    </section>
  )
}
