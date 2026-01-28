'use client'

import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface FinalStatementProps {
  locale: string
}

export default function FinalStatement({ locale }: FinalStatementProps) {
  const t = locale === 'en' ? en : mn

  return (
    <section className="py-20 px-6 bg-linear-to-br from-wood/10 to-background text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-2xl md:text-3xl font-heading text-gold/80">
          {t.landing.finalStatement.part1}
        </p>
        <p className="text-4xl md:text-5xl font-heading font-bold text-gold mt-4">
          {t.landing.finalStatement.part2}
        </p>
      </div>
    </section>
  )
}
