'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'
import Link from 'next/link'

interface SignupPageProps {
  params: Promise<{
    locale: string
  }>
}

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

export default function SignupPage() {
  const router = useRouter()
  const { signup } = useAuthStore()
  const [contactType, setContactType] = useState<'email' | 'phone'>('email')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields')
      return
    }

    if (contactType === 'email') {
      if (!formData.email) {
        setError('Please enter your email')
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError('Please enter a valid email address')
        return
      }
    } else {
      if (!formData.phone) {
        setError('Please enter your phone number')
        return
      }
      // Mongolia phone validation: +976 or 976 or just 8 digits starting with 7, 8, or 9
      const cleanPhone = formData.phone.replace(/[-\s]/g, '')
      const isValidPhone = /^(\+?976|976)?[789]\d{7}$/.test(cleanPhone)
      if (!isValidPhone) {
        setError('Please enter a valid Mongolian phone number (e.g., +976 XX XXX XXXX)')
        return
      }
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!isPasswordValid(formData.password)) {
      setError('Password does not meet all requirements')
      return
    }

    setLoading(true)
    try {
      await signup(
        formData.name,
        contactType === 'email' ? formData.email : formData.phone,
        formData.password
      )
      router.push('/en/shop')
    } catch (err) {
      setError('Signup failed. Please try again.')
      console.error('Signup error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gold mb-2">
            CHURE
          </h1>
          <p className="text-muted">Create your account</p>
        </div>

        {error && (
          <div className="p-4 bg-red-900/20 border border-red-400 rounded text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-text text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-text text-sm font-medium mb-3">
              Register with
            </label>
            <div className="flex gap-3 mb-4">
              <button
                type="button"
                onClick={() => setContactType('email')}
                className={`flex-1 px-4 py-2 rounded font-medium transition ${
                  contactType === 'email'
                    ? 'bg-gold text-background'
                    : 'bg-wood/10 text-text border border-gold/30 hover:bg-gold/10'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setContactType('phone')}
                className={`flex-1 px-4 py-2 rounded font-medium transition ${
                  contactType === 'phone'
                    ? 'bg-gold text-background'
                    : 'bg-wood/10 text-text border border-gold/30 hover:bg-gold/10'
                }`}
              >
                Phone Number
              </button>
            </div>
          </div>

          {contactType === 'email' ? (
            <div>
              <label className="block text-text text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                placeholder="your@email.com"
              />
            </div>
          ) : (
            <div>
              <label className="block text-text text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
                placeholder="+976 XX XXX XXXX"
              />
            </div>
          )}

          <div>
            <label className="block text-text text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
              placeholder="••••••••"
            />
            {formData.password && (
              <div className="mt-3 space-y-2 text-sm">
                <div className={`flex items-center gap-2 ${validatePassword(formData.password).hasMinLength ? 'text-green-400' : 'text-muted'}`}>
                  <span>{validatePassword(formData.password).hasMinLength ? '✓' : '○'}</span>
                  <span>At least 8 characters</span>
                </div>
                <div className={`flex items-center gap-2 ${validatePassword(formData.password).hasUpperCase ? 'text-green-400' : 'text-muted'}`}>
                  <span>{validatePassword(formData.password).hasUpperCase ? '✓' : '○'}</span>
                  <span>One uppercase letter (A-Z)</span>
                </div>
                <div className={`flex items-center gap-2 ${validatePassword(formData.password).hasNumber ? 'text-green-400' : 'text-muted'}`}>
                  <span>{validatePassword(formData.password).hasNumber ? '✓' : '○'}</span>
                  <span>One number (0-9)</span>
                </div>
                <div className={`flex items-center gap-2 ${validatePassword(formData.password).hasSpecialChar ? 'text-green-400' : 'text-muted'}`}>
                  <span>{validatePassword(formData.password).hasSpecialChar ? '✓' : '○'}</span>
                  <span>One special character (!@#$%^&*)</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-text text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold text-background font-heading font-bold rounded hover:bg-gold/90 transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-muted text-sm">
            Already have an account?{' '}
            <Link href="/en/auth/login" className="text-gold hover:text-gold/80">
              Sign in
            </Link>
          </p>
        </div>

        <div className="text-center">
          <Link href="/en" className="text-gold text-sm hover:text-gold/80">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
