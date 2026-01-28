import { create } from 'zustand'

interface ConfigStore {
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
    (window as any).__API_BASE_URL__ ||
    process.env.NEXT_PUBLIC_API_URL ||
    'http://localhost:3001/api'
  )
}

export const useConfigStore = create<ConfigStore>((set, get) => ({
  apiBaseUrl: getApiBaseUrl(),
  appName: 'CHURE',
  version: '1.0.0',

  setApiBaseUrl: (url: string) => {
    if (typeof window !== 'undefined') {
      (window as any).__API_BASE_URL__ = url
    }
    set({ apiBaseUrl: url })
  },

  getApiUrl: (endpoint: string): string => {
    const baseUrl = get().apiBaseUrl
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    return `${baseUrl}${cleanEndpoint}`
  },
}))
