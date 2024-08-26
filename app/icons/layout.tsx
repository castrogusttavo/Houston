import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Houston Pro - Most Beautiful Icons Library',
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
