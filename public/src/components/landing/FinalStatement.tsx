'use client'

interface FinalStatementProps {
  locale: string
}

export default function FinalStatement({ locale }: FinalStatementProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-wood/10 to-background text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-2xl md:text-3xl font-heading text-gold/80">
          This is not a product.
        </p>
        <p className="text-4xl md:text-5xl font-heading font-bold text-gold mt-4">
          This is a living culture.
        </p>
      </div>
    </section>
  )
}
