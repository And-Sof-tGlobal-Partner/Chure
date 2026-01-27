'use client'

import AdminLayout from '@/components/AdminLayout'
import AdminHeader from '@/components/AdminHeader'

export default function MediaPage() {
  const files = [
    {
      id: 1,
      name: 'hero-banner.jpg',
      type: 'Image',
      size: '2.5 MB',
      uploadDate: '2026-01-20',
    },
    {
      id: 2,
      name: 'cultural-video.mp4',
      type: 'Video',
      size: '125 MB',
      uploadDate: '2026-01-18',
    },
    {
      id: 3,
      name: 'gallery-01.jpg',
      type: 'Image',
      size: '1.8 MB',
      uploadDate: '2026-01-25',
    },
  ]

  return (
    <AdminLayout>
      <AdminHeader title="Media Library" />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-heading text-gold">Media Files</h2>
          <button className="px-4 py-2 bg-gold text-background rounded font-semibold hover:bg-gold/90 transition">
            Upload File
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="p-4 border border-gold/20 rounded hover:border-gold/40 transition"
            >
              <div className="w-full h-32 bg-wood/10 rounded mb-4 flex items-center justify-center">
                <span className="text-4xl">
                  {file.type === 'Image' ? '🖼️' : '🎬'}
                </span>
              </div>
              <h3 className="text-text font-semibold truncate">{file.name}</h3>
              <p className="text-muted text-sm">{file.size}</p>
              <p className="text-muted text-xs">{file.uploadDate}</p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 px-2 py-1 bg-gold/20 text-gold rounded text-xs hover:bg-gold/30 transition">
                  View
                </button>
                <button className="flex-1 px-2 py-1 bg-red-900/20 text-red-400 rounded text-xs hover:bg-red-900/30 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AdminLayout>
  )
}
