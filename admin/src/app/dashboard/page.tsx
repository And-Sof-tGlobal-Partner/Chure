'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminHeader from '@/components/AdminHeader'

export default function DashboardPage() {
  return (
    <AdminLayout>
      <AdminHeader title="Dashboard" />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Products', value: '0', icon: '📦' },
            { label: 'Total Orders', value: '0', icon: '📊' },
            { label: 'Total Users', value: '0', icon: '👥' },
            { label: 'Total Revenue', value: '$0', icon: '💰' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded border border-gold/20 bg-wood/5 hover:border-gold/40 transition"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-muted text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded border border-gold/20 bg-wood/5">
            <h3 className="text-xl font-heading font-bold text-gold mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="px-4 py-3 bg-gold text-background rounded font-semibold hover:bg-gold/90 transition">
                Add Product
              </button>
              <button className="px-4 py-3 border border-gold text-gold rounded font-semibold hover:bg-gold/10 transition">
                Add Page
              </button>
              <button className="px-4 py-3 border border-gold text-gold rounded font-semibold hover:bg-gold/10 transition">
                View Orders
              </button>
            </div>
          </div>
        </div>
      </main>
    </AdminLayout>
  )
}
