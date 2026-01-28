'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'
import Link from 'next/link'

const validatePassword = (password: string) => {
  return {
    hasMinLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  }
}

const isPasswordValid = (password: string) => {
  const rules = validatePassword(password)
  return Object.values(rules).every(Boolean)
}

export default function ProfilePage() {
  const router = useRouter()
  const { user, isLoggedIn, logout, updateEmail, updatePhone, updatePassword, updateDeliveryAddress } = useAuthStore()
  const [activeTab, setActiveTab] = useState<'info' | 'password' | 'address'>('info')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  // Email update form
  const [newEmail, setNewEmail] = useState('')
  
  // Phone update form
  const [newPhone, setNewPhone] = useState('')
  
  // Password update form
  const [oldPassword, setOldPassword] = useState('')
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  })
  
  // Delivery address form
  const [deliveryAddress, setDeliveryAddress] = useState('')

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/en/auth/login')
    }
    if (user) {
      setNewEmail(user.email || '')
      setNewPhone(user.phone || '')
      setDeliveryAddress(user.deliveryAddress || '')
    }
  }, [isLoggedIn, user, router])

  const handleEmailUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!newEmail) {
      setError('Please enter an email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      await updateEmail(newEmail)
      setMessage('Email updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setError('Failed to update email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handlePhoneUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!newPhone) {
      setError('Please enter a phone number')
      return
    }

    // Mongolia phone validation
    const cleanPhone = newPhone.replace(/[-\s]/g, '')
    const isValidPhone = /^(\+?976|976)?[789]\d{7}$/.test(cleanPhone)
    if (!isValidPhone) {
      setError('Please enter a valid Mongolian phone number')
      return
    }

    setLoading(true)
    try {
      await updatePhone(newPhone)
      setMessage('Phone number updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setError('Failed to update phone number. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!oldPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!isPasswordValid(passwordData.newPassword)) {
      setError('Password does not meet all requirements')
      return
    }

    setLoading(true)
    try {
      await updatePassword(oldPassword, passwordData.newPassword)
      setMessage('Password updated successfully!')

      setOldPassword('')
      setPasswordData({ newPassword: '', confirmPassword: '' })
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setError('Failed to update password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddressUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!deliveryAddress) {
      setError('Please enter a delivery address')
      return
    }

    setLoading(true)
    try {
      await updateDeliveryAddress(deliveryAddress)
      setMessage('Delivery address updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setError('Failed to update delivery address. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    setShowLogoutConfirm(false)
    router.push('/en')
  }

  if (!isLoggedIn || !user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-gold mb-2">
            My Profile
          </h1>
          <p className="text-muted">Manage your account settings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Navigation */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('info')}
                className={`w-full text-left px-4 py-3 rounded transition ${
                  activeTab === 'info'
                    ? 'bg-gold text-background font-medium'
                    : 'text-text hover:bg-wood/10'
                }`}
              >
                Personal Info
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`w-full text-left px-4 py-3 rounded transition ${
                  activeTab === 'password'
                    ? 'bg-gold text-background font-medium'
                    : 'text-text hover:bg-wood/10'
                }`}
              >
                Change Password
              </button>
              <button
                onClick={() => setActiveTab('address')}
                className={`w-full text-left px-4 py-3 rounded transition ${
                  activeTab === 'address'
                    ? 'bg-gold text-background font-medium'
                    : 'text-text hover:bg-wood/10'
                }`}
              >
                Delivery Address
              </button>
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="w-full text-left px-4 py-3 rounded text-red-400 hover:bg-red-900/20 transition"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {message && (
              <div className="p-4 bg-green-900/20 border border-green-400 rounded text-green-400 text-sm mb-6">
                {message}
              </div>
            )}

            {error && (
              <div className="p-4 bg-red-900/20 border border-red-400 rounded text-red-400 text-sm mb-6">
                {error}
              </div>
            )}

            {/* Personal Info Tab */}
            {activeTab === 'info' && (
              <div className="space-y-6">
                <div className="bg-wood/5 border border-gold/30 rounded-lg p-6">
                  <h2 className="text-xl font-heading font-bold text-gold mb-6">
                    Personal Information
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-text text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <p className="px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text">
                        {user.name}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gold/30 pt-6">
                    {user.email ? (
                      <>
                        <h3 className="text-lg font-medium text-gold mb-4">Update Email</h3>
                        <form onSubmit={handleEmailUpdate} className="space-y-4">
                          <div>
                            <label className="block text-text text-sm font-medium mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                              placeholder="your@email.com"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-gold text-background font-medium rounded hover:bg-gold/90 transition disabled:opacity-50"
                          >
                            {loading ? 'Updating...' : 'Update Email'}
                          </button>
                        </form>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium text-gold mb-4">Add Email</h3>
                        <p className="text-muted text-sm mb-4">You currently registered with phone number. You can add an email address here.</p>
                        <form onSubmit={handleEmailUpdate} className="space-y-4">
                          <div>
                            <label className="block text-text text-sm font-medium mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                              placeholder="your@email.com"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-gold text-background font-medium rounded hover:bg-gold/90 transition disabled:opacity-50"
                          >
                            {loading ? 'Adding...' : 'Add Email'}
                          </button>
                        </form>
                      </>
                    )}
                  </div>

                  <div className="border-t border-gold/30 pt-6 mt-6">
                    {user.phone ? (
                      <>
                        <h3 className="text-lg font-medium text-gold mb-4">Update Phone Number</h3>
                        <form onSubmit={handlePhoneUpdate} className="space-y-4">
                          <div>
                            <label className="block text-text text-sm font-medium mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={newPhone}
                              onChange={(e) => setNewPhone(e.target.value)}
                              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-gold text-background font-medium rounded hover:bg-gold/90 transition disabled:opacity-50"
                          >
                            {loading ? 'Updating...' : 'Update Phone'}
                          </button>
                        </form>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium text-gold mb-4">Add Phone Number</h3>
                        <p className="text-muted text-sm mb-4">You currently registered with email. You can add a phone number here.</p>
                        <form onSubmit={handlePhoneUpdate} className="space-y-4">
                          <div>
                            <label className="block text-text text-sm font-medium mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={newPhone}
                              onChange={(e) => setNewPhone(e.target.value)}
                              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-gold text-background font-medium rounded hover:bg-gold/90 transition disabled:opacity-50"
                          >
                            {loading ? 'Adding...' : 'Add Phone'}
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Change Password Tab */}
            {activeTab === 'password' && (
              <div className="bg-wood/5 border border-gold/30 rounded-lg p-6">
                <h2 className="text-xl font-heading font-bold text-gold mb-6">
                  Change Password
                </h2>

                <form onSubmit={handlePasswordUpdate} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-text text-sm font-medium mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-text text-sm font-medium mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData((prev) => ({
                          ...prev,
                          newPassword: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                      placeholder="••••••••"
                    />
                    {passwordData.newPassword && (
                      <div className="mt-3 space-y-2 text-sm">
                        <div className={`flex items-center gap-2 ${validatePassword(passwordData.newPassword).hasMinLength ? 'text-green-400' : 'text-muted'}`}>
                          <span>{validatePassword(passwordData.newPassword).hasMinLength ? '✓' : '○'}</span>
                          <span>At least 8 characters</span>
                        </div>
                        <div className={`flex items-center gap-2 ${validatePassword(passwordData.newPassword).hasUpperCase ? 'text-green-400' : 'text-muted'}`}>
                          <span>{validatePassword(passwordData.newPassword).hasUpperCase ? '✓' : '○'}</span>
                          <span>One uppercase letter (A-Z)</span>
                        </div>
                        <div className={`flex items-center gap-2 ${validatePassword(passwordData.newPassword).hasNumber ? 'text-green-400' : 'text-muted'}`}>
                          <span>{validatePassword(passwordData.newPassword).hasNumber ? '✓' : '○'}</span>
                          <span>One number (0-9)</span>
                        </div>
                        <div className={`flex items-center gap-2 ${validatePassword(passwordData.newPassword).hasSpecialChar ? 'text-green-400' : 'text-muted'}`}>
                          <span>{validatePassword(passwordData.newPassword).hasSpecialChar ? '✓' : '○'}</span>
                          <span>One special character (!@#$%^&*)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-text text-sm font-medium mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gold text-background font-medium rounded hover:bg-gold/90 transition disabled:opacity-50 mt-6"
                  >
                    {loading ? 'Updating...' : 'Change Password'}
                  </button>
                </form>
              </div>
            )}

            {/* Delivery Address Tab */}
            {activeTab === 'address' && (
              <div className="bg-wood/5 border border-gold/30 rounded-lg p-6">
                <h2 className="text-xl font-heading font-bold text-gold mb-6">
                  Delivery Address
                </h2>

                <form onSubmit={handleAddressUpdate} className="space-y-4">
                  <div>
                    <label className="block text-text text-sm font-medium mb-2">
                      Address
                    </label>
                    <textarea
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition resize-none"
                      placeholder="Enter your delivery address"
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gold text-background font-medium rounded hover:bg-gold/90 transition disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update Address'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background border border-gold/30 rounded-lg p-6 max-w-sm mx-4">
              <h3 className="text-lg font-heading font-bold text-gold mb-4">
                Confirm Logout
              </h3>
              <p className="text-text mb-6">
                Are you sure you want to log out?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 px-4 py-2 bg-wood/10 text-text border border-gold/30 rounded hover:bg-gold/10 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/en/shop" className="text-gold hover:text-gold/80 text-sm">
            ← Back to shop
          </Link>
        </div>
      </div>
    </div>
  )
}
