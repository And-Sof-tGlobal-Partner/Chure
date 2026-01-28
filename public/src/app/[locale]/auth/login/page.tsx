'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'
import Link from 'next/link'

interface LoginPageProps {
  params: Promise<{
    locale: string
  }>
}

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email')
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!emailOrPhone || !password) {
      setError('Please fill in all fields')
      return
    }

    if (loginType === 'phone') {
      // Mongolia phone validation: +976 or 976 or just 8 digits starting with 7, 8, or 9
      const cleanPhone = emailOrPhone.replace(/[-\s]/g, '')
      const isValidPhone = /^(\+?976|976)?[789]\d{7}$/.test(cleanPhone)
      if (!isValidPhone) {
        setError('Please enter a valid Mongolian phone number (e.g., +976 XX XXX XXXX)')
        return
      }
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone)) {
        setError('Please enter a valid email address')
        return
      }
    }

    setLoading(true)
    try {
      await login(emailOrPhone, password)
      // Redirect to shop after successful login
      router.push('/en/shop')
    } catch (err) {
      setError('Login failed. Please try again.')
      console.error('Login error:', err)
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
          <p className="text-muted">Sign in to your account</p>
        </div>

        {error && (
          <div className="p-4 bg-red-900/20 border border-red-400 rounded text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-text text-sm font-medium mb-3">
              Login with
            </label>
            <div className="flex gap-3 mb-4">
              <button
                type="button"
                onClick={() => setLoginType('email')}
                className={`flex-1 px-4 py-2 rounded font-medium transition ${
                  loginType === 'email'
                    ? 'bg-gold text-background'
                    : 'bg-wood/10 text-text border border-gold/30 hover:bg-gold/10'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setLoginType('phone')}
                className={`flex-1 px-4 py-2 rounded font-medium transition ${
                  loginType === 'phone'
                    ? 'bg-gold text-background'
                    : 'bg-wood/10 text-text border border-gold/30 hover:bg-gold/10'
                }`}
              >
                Phone Number
              </button>
            </div>
          </div>

          <div>
            <label className="block text-text text-sm font-medium mb-2">
              {loginType === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <input
              type={loginType === 'email' ? 'email' : 'tel'}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
              placeholder={loginType === 'email' ? 'your@email.com' : '+976 XX XXX XXXX'}
            />
          </div>

          <div>
            <label className="block text-text text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text placeholder-muted focus:outline-none focus:border-gold transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold text-background font-heading font-bold rounded hover:bg-gold/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-muted text-sm">
            Don't have an account?{' '}
            <Link href="/en/auth/signup" className="text-gold hover:text-gold/80">
              Sign up
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
