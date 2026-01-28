import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AdminAuthStore {
  isLoggedIn: boolean
  user: { id: string; email: string; role: string } | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: { id: string; email: string; role: string } | null) => void
  updatePassword: (oldPassword: string, newPassword: string) => Promise<void>
  setError: (error: string | null) => void
  setLoading: (loading: boolean) => void
}

export const useAdminAuthStore = create<AdminAuthStore>(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        // API call would go here
        set({
          isLoggedIn: true,
          user: { id: '1', email, role: 'admin' },
        })
      },
      logout: () => set({ isLoggedIn: false, user: null }),
      setUser: (user) => set({ user, isLoggedIn: !!user }),
      updatePassword: async (oldPassword: string, newPassword: string) => {
        // Backend should validate:
        // - oldPassword matches user's current password
        // - newPassword meets security requirements
        // - newPassword is not same as oldPassword
        console.log('Admin password updated')
      },
      setError: (error) => set({ error }),
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    { name: 'chure-admin-auth' }
  )
)
