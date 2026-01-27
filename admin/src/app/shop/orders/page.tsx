'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminHeader from '@/components/AdminHeader'
import Link from 'next/link'

export default function ShopOrdersPage() {
  const orders = [
    {
      id: 1001,
      customer: 'John Doe',
      total: 85000,
      status: 'completed',
      date: '2026-01-25',
    },
    {
      id: 1002,
      customer: 'Jane Smith',
      total: 120000,
      status: 'pending',
      date: '2026-01-26',
    },
    {
      id: 1003,
      customer: 'Bob Wilson',
      total: 45000,
      status: 'shipped',
      date: '2026-01-27',
    },
  ]

  return (
    <AdminLayout>
      <AdminHeader title="Orders" />
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-heading text-gold mb-6">All Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold/20">
                <th className="px-4 py-3 text-gold font-heading">Order ID</th>
                <th className="px-4 py-3 text-gold font-heading">Customer</th>
                <th className="px-4 py-3 text-gold font-heading">Total</th>
                <th className="px-4 py-3 text-gold font-heading">Status</th>
                <th className="px-4 py-3 text-gold font-heading">Date</th>
                <th className="px-4 py-3 text-gold font-heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gold/10 hover:bg-wood/5">
                  <td className="px-4 py-3 text-text font-semibold">#{order.id}</td>
                  <td className="px-4 py-3 text-text">{order.customer}</td>
                  <td className="px-4 py-3 text-text">{order.total.toLocaleString()} ₮</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        order.status === 'completed'
                          ? 'bg-green-900/20 text-green-400'
                          : order.status === 'pending'
                          ? 'bg-yellow-900/20 text-yellow-400'
                          : 'bg-blue-900/20 text-blue-400'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{order.date}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/shop/orders/${order.id}`}
                      className="px-3 py-1 bg-gold/20 text-gold rounded text-sm hover:bg-gold/30 transition"
                    >
                      View
                    </Link>
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
