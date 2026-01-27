'use client'

interface ShopTeaserProps {
  locale: string
}

export default function ShopTeaser({ locale }: ShopTeaserProps) {
  return (
    <section className="py-20 px-6 bg-wood/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold text-gold mb-6">
          Support Cultural Creators
        </h2>
        <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
          Discover handcrafted goods and services directly from Mongolian
          artisans and cultural organizations.
        </p>
        <button className="px-8 py-3 bg-gold text-background font-semibold rounded hover:bg-gold/90 transition">
          Visit Shop
        </button>
      </div>
    </section>
  )
}
