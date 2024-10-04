import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
        <Suspense
          fallback={
            <div className="flex justify-center items-center max-h-screen">
              Loading...
            </div>
          }
        >
          <div>
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </Suspense>
      </body>
    </html>
  )
}
