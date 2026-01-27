'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminHeader from '@/components/AdminHeader'
import Link from 'next/link'

export default function ShopProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Traditional Mongolian Scarf',
      price: 45000,
      stock: 12,
      status: 'active',
    },
    {
      id: 2,
      name: 'Handmade Leather Belt',
      price: 35000,
      stock: 5,
      status: 'active',
    },
    { id: 3, name: 'Silk Painting', price: 120000, stock: 0, status: 'inactive' },
  ]

  return (
    <AdminLayout>
      <AdminHeader title="Products" />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-heading text-gold">All Products</h2>
          <Link
            href="/shop/products/new"
            className="px-4 py-2 bg-gold text-background rounded font-semibold hover:bg-gold/90 transition"
          >
            Add Product
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gold/20">
                <th className="px-4 py-3 text-gold font-heading">Name</th>
                <th className="px-4 py-3 text-gold font-heading">Price</th>
                <th className="px-4 py-3 text-gold font-heading">Stock</th>
                <th className="px-4 py-3 text-gold font-heading">Status</th>
                <th className="px-4 py-3 text-gold font-heading">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gold/10 hover:bg-wood/5">
                  <td className="px-4 py-3 text-text">{product.name}</td>
                  <td className="px-4 py-3 text-text">{product.price.toLocaleString()} ₮</td>
                  <td className="px-4 py-3 text-text">{product.stock}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        product.status === 'active'
                          ? 'bg-gold/20 text-gold'
                          : 'bg-wood/20 text-muted'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <Link
                      href={`/shop/products/${product.id}/edit`}
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
