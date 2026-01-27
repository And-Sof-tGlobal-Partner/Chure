'use client'

interface AdminHeaderProps {
  title: string
}

export default function AdminHeader({ title }: AdminHeaderProps) {
  return (
    <header className="bg-background border-b border-gold/20 px-6 py-4 sticky top-0 z-20">
      <h1 className="text-2xl font-heading font-bold text-text">{title}</h1>
    </header>
  )
}
