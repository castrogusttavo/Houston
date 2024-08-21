import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { IconsGrid } from '@/components/IconsGrid'

export default function IconsPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <IconsGrid />
      <Footer />
    </div>
  )
}
