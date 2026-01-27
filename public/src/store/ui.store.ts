import { create } from 'zustand'

interface UIStore {
  sidebarOpen: boolean
  mobileDrawerOpen: boolean
  openSidebar: () => void
  toggleSidebar: () => void
  toggleMobileDrawer: () => void
  closeSidebar: () => void
  closeMobileDrawer: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: false,
  mobileDrawerOpen: false,
  openSidebar: () => set({ sidebarOpen: true }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleMobileDrawer: () =>
    set((state) => ({ mobileDrawerOpen: !state.mobileDrawerOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
  closeMobileDrawer: () => set({ mobileDrawerOpen: false }),
}))
