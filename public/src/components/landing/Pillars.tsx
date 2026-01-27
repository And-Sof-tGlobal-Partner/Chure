'use client'

interface PillarsProps {
  locale: string
}

export default function Pillars({ locale }: PillarsProps) {
  const pillars = [
    {
      title: 'Cultural Industry',
      description: 'Support and showcase contemporary cultural creators',
    },
    {
      title: 'Education',
      description: 'Learn traditional skills and cultural knowledge',
    },
    {
      title: 'Tour & Experience',
      description: 'Immersive journeys through cultural landscapes',
    },
    {
      title: 'Community & Commerce',
      description: 'Support artisans through ethical marketplace',
    },
  ]

  return (
    <section className="py-20 px-6 bg-wood/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-gold mb-16 text-center">
          Four Pillars
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
