export default function CulturalIndustryPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">Cultural Industry</h1>
        <p className="text-lg text-text/80">
          Discover and support contemporary Mongolian artists, craftspeople, and cultural organizations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-6 border border-gold/20 rounded hover:border-gold/40 transition cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-br from-gold/10 to-wood/10 rounded mb-4 flex items-center justify-center text-5xl">
                🎨
              </div>
              <h3 className="font-heading text-gold font-bold mb-2">Artist {item}</h3>
              <p className="text-text/80 text-sm mb-3">Specializing in traditional Mongolian art forms</p>
              <button className="px-4 py-2 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Categories</h2>
        <ul className="space-y-2 text-text/80">
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Visual Arts (Painting, Sculpture)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Performing Arts (Dance, Music, Theater)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Crafts (Textiles, Woodwork, Metalwork)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Literature & Poetry</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Film & Photography</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
