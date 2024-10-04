import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function DocsPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main />
      <Footer />
    </div>
  )
}
