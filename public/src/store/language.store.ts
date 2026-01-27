import { create } from 'zustand'

interface LanguageStore {
  locale: 'en' | 'mn'
  setLocale: (locale: 'en' | 'mn') => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  locale: 'en',
  setLocale: (locale) => set({ locale }),
}))
