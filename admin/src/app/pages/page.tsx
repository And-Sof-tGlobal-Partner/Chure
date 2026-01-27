'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminHeader from '@/components/AdminHeader'
import Link from 'next/link'

export default function PagesPage() {
  const pages = [
    { id: 1, title: 'Home', slug: 'home', status: 'published' },
    { id: 2, title: 'About', slug: 'about', status: 'published' },
    { id: 3, title: 'Contact', slug: 'contact', status: 'draft' },
  ]

  return (
    <AdminLayout>
      <AdminHeader title="Pages" />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-heading text-gold">All Pages</h2>
          <Link
            href="/pages/new"
            className="px-4 py-2 bg-gold text-background rounded font-semibold hover:bg-gold/90 transition"
          >
            Add Page
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold/20">
                <th className="px-4 py-3 text-gold font-heading">Title</th>
                <th className="px-4 py-3 text-gold font-heading">Slug</th>
                <th className="px-4 py-3 text-gold font-heading">Status</th>
                <th className="px-4 py-3 text-gold font-heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-b border-gold/10 hover:bg-wood/5">
                  <td className="px-4 py-3 text-text">{page.title}</td>
                  <td className="px-4 py-3 text-muted">/{page.slug}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        page.status === 'published'
                          ? 'bg-gold/20 text-gold'
                          : 'bg-wood/20 text-muted'
                      }`}
                    >
                      {page.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      href={`/pages/${page.id}/edit`}
                      className="px-3 py-1 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition"
                    >
                      Edit
                    </Link>
                    <button className="px-3 py-1 bg-red-900/20 text-red-400 rounded text-sm hover:bg-red-900/30 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  )
}
