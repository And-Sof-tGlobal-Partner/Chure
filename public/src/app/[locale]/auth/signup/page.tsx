'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface SignupPageProps {
  params: Promise<{
    locale: string
  }>
}

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      // API call would go here
      router.push('/en/auth/login')
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
            <label className="block text-text text-sm font-medium mb-2">
              Email
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
