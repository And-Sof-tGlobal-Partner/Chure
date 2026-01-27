'use client'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wood/10 border-t border-gold/20 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gold font-heading font-bold mb-4">CHURE</h3>
            <p className="text-muted text-sm">
              Living culture. Digital platform.
            </p>
          </div>
          <div>
            <h4 className="text-text font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-gold transition">About</a></li>
              <li><a href="#" className="hover:text-gold transition">Events</a></li>
              <li><a href="#" className="hover:text-gold transition">Shop</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="mailto:info@chure.mn">info@chure.mn</a></li>
              <li><a href="tel:+976">+976 ...</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-gold transition">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 text-center text-sm text-muted">
          <p>&copy; {currentYear} CHURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
