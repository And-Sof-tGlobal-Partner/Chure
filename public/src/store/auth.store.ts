import { create } from 'zustand'

export interface User {
  id: string
  name: string
  email?: string
  phone?: string
  deliveryAddress?: string
}

interface AuthStore {
  isLoggedIn: boolean
  user: User | null
  login: (emailOrPhone: string, password: string) => Promise<void>
  signup: (name: string, emailOrPhone: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
  updateUser: (user: Partial<User>) => void
  updatePassword: (oldPassword: string, newPassword: string) => Promise<void>
  updateEmail: (newEmail: string) => Promise<void>
  updatePhone: (newPhone: string) => Promise<void>
  updateDeliveryAddress: (address: string) => Promise<void>
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isLoggedIn: false,
  user: null,
  login: async (emailOrPhone: string, password: string) => {
    // Validation happens on frontend, backend should validate:
    // - emailOrPhone is either valid email or phone number
    // - password matches user's password
    // - user exists in database
    set({
      isLoggedIn: true,
      user: {
        id: '1',
        name: 'User',
        email: emailOrPhone.includes('@') ? emailOrPhone : undefined,
        phone: emailOrPhone.includes('@') ? undefined : emailOrPhone,
      },
    })
  },
  signup: async (name: string, emailOrPhone: string, password: string) => {
    // Validation happens on frontend, backend should validate:
    // - emailOrPhone is either valid email or phone number (unique in database)
    // - password meets security requirements
    // - name is not empty
    // - user doesn't already exist with same email/phone
    set({
      isLoggedIn: true,
      user: {
        id: '1',
        name,
        email: emailOrPhone.includes('@') ? emailOrPhone : undefined,
        phone: emailOrPhone.includes('@') ? undefined : emailOrPhone,
      },
    })
  },
  logout: () => set({ isLoggedIn: false, user: null }),
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  updateUser: (updates) => {
    const current = get().user
    if (current) {
      set({ user: { ...current, ...updates } })
    }
  },
  updatePassword: async (oldPassword: string, newPassword: string) => {
    // Backend should validate:
    // - oldPassword matches user's current password
    // - newPassword meets security requirements
    // - newPassword is not same as oldPassword
    console.log('Password updated')
  },
  updateEmail: async (newEmail: string) => {
    // Backend should validate:
    // - newEmail is unique in database
    // - newEmail is valid format
    // - user is authenticated
    const current = get().user
    if (current) {
      set({ user: { ...current, email: newEmail } })
    }
  },
  updatePhone: async (newPhone: string) => {
    // Backend should validate:
    // - newPhone is unique in database
    // - newPhone is valid format
    // - user is authenticated
    const current = get().user
    if (current) {
      set({ user: { ...current, phone: newPhone } })
    }
  },
  updateDeliveryAddress: async (address: string) => {
    // Backend should validate:
    // - address is not empty
    // - user is authenticated
    const current = get().user
    if (current) {
      set({ user: { ...current, deliveryAddress: address } })
    }
  },
}))
