export default function TourPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">Cultural Tours</h1>
        <p className="text-lg text-text/80">
          Immerse yourself in authentic Mongolian cultural experiences and traditions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Nomadic Life', 'Sacred Mountains', 'Arts & Crafts', 'Festival Experience'].map((tour) => (
            <div key={tour} className="p-6 border border-gold/20 rounded hover:border-gold/40 transition cursor-pointer">
              <div className="w-full h-40 bg-gradient-to-br from-gold/10 to-wood/10 rounded mb-4 flex items-center justify-center text-5xl">
                🏕️
              </div>
              <h3 className="font-heading text-gold font-bold mb-2">{tour}</h3>
              <p className="text-text/80 text-sm mb-3">Duration: 7 days | Small groups</p>
              <button className="px-4 py-2 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">What's Included</h2>
        <ul className="space-y-2 text-text/80">
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Accommodation with local families</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Guided cultural experiences</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Traditional meals and cooking lessons</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Workshops and hands-on activities</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
