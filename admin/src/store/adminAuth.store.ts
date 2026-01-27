import { create } from 'zustand'

interface AdminAuthStore {
  isLoggedIn: boolean
  user: { id: string; email: string; role: string } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: { id: string; email: string; role: string } | null) => void
}

export const useAdminAuthStore = create<AdminAuthStore>((set) => ({
  isLoggedIn: false,
  user: null,
  login: async (email: string, password: string) => {
    // API call would go here
    set({
      isLoggedIn: true,
      user: { id: '1', email, role: 'admin' },
    })
  },
  logout: () => set({ isLoggedIn: false, user: null }),
  setUser: (user) => set({ user, isLoggedIn: !!user }),
}))
