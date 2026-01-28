import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AdminUIStore {
  sidebarOpen: boolean
  activeTab: string
  toggleSidebar: () => void
  setActiveTab: (tab: string) => void
}

export const useAdminUIStore = create<AdminUIStore>(
  persist(
    (set) => ({
      sidebarOpen: true,
      activeTab: 'dashboard',
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    { name: 'chure-admin-ui' }
  )
)
