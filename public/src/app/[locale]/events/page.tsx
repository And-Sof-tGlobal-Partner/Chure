export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">Events & Gatherings</h1>
        <p className="text-lg text-text/80">
          Discover upcoming cultural events, festivals, and community gatherings.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Upcoming Events</h2>
        <div className="space-y-4">
          {[
            { name: 'Spring Festival', date: 'March 21-23, 2026', type: '🎉 Festival' },
            { name: 'Artist Showcase', date: 'April 10, 2026', type: '🎨 Exhibition' },
            { name: 'Music Night', date: 'April 25, 2026', type: '🎵 Concert' },
            { name: 'Cultural Summit', date: 'May 15-17, 2026', type: '🎓 Conference' },
          ].map((event) => (
            <div key={event.name} className="p-6 border border-gold/20 rounded hover:border-gold/40 transition cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading text-gold font-bold">{event.name}</h3>
                <span className="text-2xl">{event.type.split(' ')[0]}</span>
              </div>
              <p className="text-text/80 text-sm mb-3">{event.date}</p>
              <button className="px-4 py-2 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition">
                Get Tickets
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Why Attend?</h2>
        <ul className="space-y-2 text-text/80">
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Connect with cultural enthusiasts and artists</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Experience authentic cultural performances</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Support local creators and organizations</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Learn something new and meaningful</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
