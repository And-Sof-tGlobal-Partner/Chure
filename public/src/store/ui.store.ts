import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIStore {
  sidebarOpen: boolean
  mobileDrawerOpen: boolean
  openSidebar: () => void
  toggleSidebar: () => void
  toggleMobileDrawer: () => void
  closeSidebar: () => void
  closeMobileDrawer: () => void
}

export const useUIStore = create<UIStore>(
  persist(
    (set) => ({
      sidebarOpen: false,
      mobileDrawerOpen: false,
      openSidebar: () => set({ sidebarOpen: true }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      toggleMobileDrawer: () =>
        set((state) => ({ mobileDrawerOpen: !state.mobileDrawerOpen })),
      closeSidebar: () => set({ sidebarOpen: false }),
      closeMobileDrawer: () => set({ mobileDrawerOpen: false }),
    }),
    { name: 'chure-ui' }
  )
)
