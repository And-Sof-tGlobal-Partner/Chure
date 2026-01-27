export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">About CHURE</h1>
        <p className="text-lg text-text/80">
          CHURE is a digital platform dedicated to preserving, celebrating, and 
          promoting Mongolian cultural heritage in the modern world.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Our Mission</h2>
        <p className="text-text/80 leading-relaxed">
          We believe that culture is not static—it's a living, breathing entity that 
          evolves with each generation. Our mission is to create spaces where traditional 
          Mongolian arts, knowledge, and commerce can thrive alongside modern innovation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">What We Do</h2>
        <ul className="space-y-3 text-text/80">
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Support cultural creators and artisans through our digital marketplace</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Provide educational programs to preserve traditional knowledge</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Organize cultural events and immersive experiences</span>
          </li>
          <li className="flex gap-3">
            <span className="text-gold">✓</span>
            <span>Connect international audiences with Mongolian heritage</span>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading font-bold text-gold">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gold/20 rounded">
            <h3 className="font-heading text-gold font-bold mb-2">Authenticity</h3>
            <p className="text-text/80 text-sm">Staying true to traditional practices while embracing innovation</p>
          </div>
          <div className="p-4 border border-gold/20 rounded">
            <h3 className="font-heading text-gold font-bold mb-2">Community</h3>
            <p className="text-text/80 text-sm">Building connections between creators, learners, and supporters</p>
          </div>
          <div className="p-4 border border-gold/20 rounded">
            <h3 className="font-heading text-gold font-bold mb-2">Sustainability</h3>
            <p className="text-text/80 text-sm">Ensuring cultural heritage thrives for future generations</p>
          </div>
          <div className="p-4 border border-gold/20 rounded">
            <h3 className="font-heading text-gold font-bold mb-2">Accessibility</h3>
            <p className="text-text/80 text-sm">Making culture available to everyone, everywhere</p>
          </div>
        </div>
      </section>
    </div>
  )
}
