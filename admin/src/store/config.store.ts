import { create } from 'zustand'

interface AdminConfigStore {
  apiBaseUrl: string
  appName: string
  version: string
  setApiBaseUrl: (url: string) => void
  getApiUrl: (endpoint: string) => string
}

// API Base URL defaults
const getApiBaseUrl = (): string => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
  }
  return (
    (window as any).__ADMIN_API_BASE_URL__ ||
    process.env.NEXT_PUBLIC_API_URL ||
    'http://localhost:3001/api'
  )
}

export const useAdminConfigStore = create<AdminConfigStore>((set, get) => ({
  apiBaseUrl: getApiBaseUrl(),
  appName: 'CHURE Admin',
  version: '1.0.0',

  setApiBaseUrl: (url: string) => {
    if (typeof window !== 'undefined') {
      (window as any).__ADMIN_API_BASE_URL__ = url
    }
    set({ apiBaseUrl: url })
  },

  getApiUrl: (endpoint: string): string => {
    const baseUrl = get().apiBaseUrl
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    return `${baseUrl}${cleanEndpoint}`
  },
}))
