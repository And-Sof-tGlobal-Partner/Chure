'use client'

interface HeroProps {
  locale: string
}

export default function Hero({ locale }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-wood/5 to-background px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-gold">
          CHURE
        </h1>
        <p className="text-lg md:text-2xl text-text/80 font-light">
          Living Culture. Digital Platform.
        </p>
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Discover, explore, and celebrate Mongolian cultural heritage through
          art, education, tour, and commerce.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition">
            Explore Now
          </button>
          <button className="px-8 py-3 border border-gold text-gold rounded hover:bg-gold/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
