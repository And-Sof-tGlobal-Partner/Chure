export default function NGOPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">NGOs & Organizations</h1>
        <p className="text-lg text-text/80">
          Meet the organizations working to preserve and promote Mongolian culture.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Partner Organizations</h2>
        <div className="space-y-4">
          {['Cultural Heritage Foundation', 'Traditional Arts Center', 'Youth Creative Hub', 'Nomadic Cultures Initiative'].map((org) => (
            <div key={org} className="p-6 border border-gold/20 rounded hover:border-gold/40 transition cursor-pointer">
              <h3 className="font-heading text-gold font-bold mb-2">{org}</h3>
              <p className="text-text/80 text-sm mb-3">
                Working to preserve and promote Mongolian cultural traditions through innovative programs and community engagement.
              </p>
              <button className="px-4 py-2 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Focus Areas</h2>
        <ul className="space-y-2 text-text/80">
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Cultural preservation and documentation</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Youth education and mentorship</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>Community development programs</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">▸</span>
            <span>International cultural exchange</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
