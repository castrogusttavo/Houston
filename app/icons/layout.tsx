import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = {
  title: 'React Icons - Houston Pro',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <div>
            {children} <Analytics />{' '}
          </div>
        </Suspense>
      </body>
    </html>
  )
}
