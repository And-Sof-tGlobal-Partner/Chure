'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminHeader from '@/components/AdminHeader'

export default function SettingsPage() {
  return (
    <AdminLayout>
      <AdminHeader title="Settings" />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-heading text-gold mb-8">Site Settings</h2>

          <div className="space-y-6">
            <div className="p-6 border border-gold/20 rounded">
              <h3 className="text-lg font-heading text-gold mb-4">General</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-text text-sm font-medium mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    defaultValue="CHURE"
                    className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-text text-sm font-medium mb-2">
                    Site Description
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Living culture digital platform"
                    className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border border-gold/20 rounded">
              <h3 className="text-lg font-heading text-gold mb-4">Email Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-text text-sm font-medium mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="info@chure.mn"
                    className="w-full px-4 py-2 bg-wood/10 border border-gold/30 rounded text-text focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border border-gold/20 rounded">
              <h3 className="text-lg font-heading text-gold mb-4">Languages</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-text cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span>Mongolian (MN)</span>
                </label>
                <label className="flex items-center gap-3 text-text cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span>English (EN)</span>
                </label>
              </div>
            </div>

            <button className="px-6 py-3 bg-gold text-background rounded font-semibold hover:bg-gold/90 transition">
              Save Settings
            </button>
          </div>
        </div>
      </main>
    </AdminLayout>
  )
}
