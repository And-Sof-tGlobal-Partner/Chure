import { create } from 'zustand'

interface UIStore {
  sidebarOpen: boolean
  mobileDrawerOpen: boolean
  toggleSidebar: () => void
  toggleMobileDrawer: () => void
  closeSidebar: () => void
  closeMobileDrawer: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  mobileDrawerOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleMobileDrawer: () =>
    set((state) => ({ mobileDrawerOpen: !state.mobileDrawerOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
  closeMobileDrawer: () => set({ mobileDrawerOpen: false }),
}))
