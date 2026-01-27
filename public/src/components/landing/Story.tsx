'use client'

interface StoryProps {
  locale: string
}

export default function Story({ locale }: StoryProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-4xl font-heading font-bold text-gold">Our Story</h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-lg text-text/80 leading-relaxed">
              CHURE stands as a beacon of cultural preservation and innovation
              in the digital age. We believe that cultural heritage is not just
              about the past—it's a living, breathing entity that shapes our
              present and future.
            </p>
            <p className="text-lg text-text/80 leading-relaxed">
              Through our integrated platform, we bridge the gap between
              traditional culture and modern audiences, creating spaces for
              learning, discovery, and celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
