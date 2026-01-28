'use client'

import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface StoryProps {
  locale: string
}

export default function Story({ locale }: StoryProps) {
  const t = locale === 'en' ? en : mn

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-4xl font-heading font-bold text-gold">
            {t.landing.story.title}
          </h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-lg text-text/80 leading-relaxed">
              {t.landing.story.paragraph1}
            </p>
            <p className="text-lg text-text/80 leading-relaxed">
              {t.landing.story.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
