export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <section className="space-y-6 animate-fade-in">
        <h1 className="text-5xl font-heading font-bold text-gold">Contact Us</h1>
        <p className="text-lg text-text/80">
          Have questions or want to collaborate? Get in touch with us.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-bold text-gold">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-gold font-bold mb-2">Address</h3>
              <p className="text-text/80">
                Peace Avenue<br />
                Sukhbaatar District<br />
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div>
              <h3 className="font-heading text-gold font-bold mb-2">Email</h3>
              <p className="text-text/80">
                <a href="mailto:info@chure.mn" className="text-gold hover:text-gold/80">
                  info@chure.mn
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-heading text-gold font-bold mb-2">Phone</h3>
              <p className="text-text/80">
                <a href="tel:+97611234567" className="text-gold hover:text-gold/80">
                  +976 (0) 1 1234 567
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-heading text-gold font-bold mb-2">Office Hours</h3>
              <p className="text-text/80">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold text-gold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold"
              />
            </div>
            <button className="w-full px-4 py-3 bg-gold text-background font-heading font-bold rounded hover:bg-gold/90 transition">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
