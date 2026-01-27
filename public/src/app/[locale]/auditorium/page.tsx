export default function AuditoriumPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">Auditorium & Events Space</h1>
        <p className="text-lg text-text/80">
          Rent our cultural auditorium for performances, exhibitions, and gatherings.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Venue Details</h2>
        <div className="p-6 border border-gold/20 rounded space-y-3">
          <div>
            <h3 className="font-heading text-gold font-bold mb-2">Capacity</h3>
            <p className="text-text/80">400 seated | 600 standing room</p>
          </div>
          <div>
            <h3 className="font-heading text-gold font-bold mb-2">Amenities</h3>
            <ul className="text-text/80 space-y-1">
              <li>▪ Professional sound system</li>
              <li>▪ Lighting and projection equipment</li>
              <li>▪ Backstage facilities</li>
              <li>▪ Accessible seating</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Upcoming Events</h2>
        <div className="space-y-3">
          {['Concert Series', 'Film Festival', 'Art Exhibition', 'Dance Performance'].map((event) => (
            <div key={event} className="p-4 border border-gold/20 rounded hover:border-gold/40 transition cursor-pointer">
              <h3 className="font-heading text-gold font-bold">{event}</h3>
              <p className="text-text/80 text-sm">Coming soon</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <button className="px-8 py-3 bg-gold text-background font-heading font-bold rounded hover:bg-gold/90 transition">
          Book the Auditorium
        </button>
      </section>
    </div>
  )
}
