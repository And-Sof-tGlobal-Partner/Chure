'use client'

import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface PillarsProps {
  locale: string
}

export default function Pillars({ locale }: PillarsProps) {
  const t = locale === 'en' ? en : mn
  const pillars = t.landing.pillars.items

  return (
    <section className="py-20 px-6 bg-wood/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-gold mb-16 text-center">
          {t.landing.pillars.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 border border-gold/30 rounded bg-background/50 hover:border-gold/60 transition"
            >
              <h3 className="text-xl font-heading font-bold text-gold mb-3">
                {pillar.title}
              </h3>
              <p className="text-text/80">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
