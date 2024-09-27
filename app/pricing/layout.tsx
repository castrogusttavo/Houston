import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = {
  title: 'Houston Pro Pricing - Flexible Plans for Developers and Designers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {children} <Analytics />{' '}
        </div>
      </body>
    </html>
  )
}
