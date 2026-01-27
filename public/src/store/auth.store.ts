import { create } from 'zustand'

interface AuthStore {
  isLoggedIn: boolean
  user: { id: string; email: string } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: { id: string; email: string } | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  user: null,
  login: async (email: string, password: string) => {
    // API call would go here
    set({
      isLoggedIn: true,
      user: { id: '1', email },
    })
  },
  logout: () => set({ isLoggedIn: false, user: null }),
  setUser: (user) => set({ user, isLoggedIn: !!user }),
}))
