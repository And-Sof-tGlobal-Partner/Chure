'use client'

import { en } from '@/locales/en'
import { mn } from '@/locales/mn'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = locale === 'en' ? en : mn
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wood/10 border-t border-gold/20 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gold font-heading font-bold mb-4">CHURE</h3>
            <p className="text-muted text-sm">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-text font-semibold mb-4">{t.footer.sections.explore}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-gold transition">{t.footer.links.about}</a></li>
              <li><a href="#" className="hover:text-gold transition">{t.footer.links.events}</a></li>
              <li><a href="#" className="hover:text-gold transition">{t.footer.links.shop}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text font-semibold mb-4">{t.footer.sections.contact}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="mailto:info@chure.mn">{t.footer.email}</a></li>
              <li><a href="tel:+976">{t.footer.phone}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-text font-semibold mb-4">{t.footer.sections.follow}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-gold transition">{t.footer.links.instagram}</a></li>
              <li><a href="#" className="hover:text-gold transition">{t.footer.links.facebook}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 text-center text-sm text-muted">
          <p>&copy; {currentYear} CHURE. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
