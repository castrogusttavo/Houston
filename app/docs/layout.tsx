import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Houston Icons Pro Documentation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
