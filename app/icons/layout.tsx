import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'

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
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div>{children}</div>
        </Suspense>
      </body>
    </html>
  )
}
