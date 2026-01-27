'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLanguageStore } from '@/store/language.store'

export default function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const { locale, setLocale } = useLanguageStore()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'mn' : 'en'
    setLocale(newLocale)

    // Replace the current locale in the path
    const newPathname = pathname.replace(/^\/(en|mn)/, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded border border-gold/30 text-gold hover:bg-gold/10 transition text-sm font-medium"
    >
      {locale === 'en' ? 'МН' : 'EN'}
    </button>
  )
}
