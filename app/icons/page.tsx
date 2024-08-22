'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { YoutubeIcon, Video01Icon } from '@houstonicons/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SVG and React Icons - Icon Library',
}

export default function IconsPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main>
        <div
          className="select-none mx-auto relative h-[822px] w-[1617px] overflow-auto transform"
          style={{ willChange: 'transform', direction: 'ltr' }}
        >
          <div className="h-[289154px] w-[1298px]">
            {/* Card Icon */}
            {/* aumentar o left + 99.846 a cada icone */}
            <div className="absolute left-[168.5px] top-[18px] h-[82px] w-[100px] pr-[18px]">
              <div className="p-4 flex flex-col gap-1 items-center justify-center py-7 group hover:bg-gray-50 cursor-pointer mb-2 relative aspect-square shrink-0 rounded-lg border-[0.5px] border-solid border-[#ECEEF2]">
                <div className="w-7 h-7">
                  <YoutubeIcon iconSize={28} />
                </div>
              </div>
            </div>
            {/* End Card Icon */}
            {/* Card Icon */}
            <div className="absolute left-[268.346px] top-[18px] h-[82px] w-[100px] pr-[18px]">
              <div className="p-4 flex flex-col gap-1 items-center justify-center py-7 group hover:bg-gray-50 cursor-pointer mb-2 relative aspect-square shrink-0 rounded-lg border-[0.5px] border-solid border-[#ECEEF2]">
                <div className="w-7 h-7">
                  <Video01Icon iconSize={28} />
                </div>
              </div>
            </div>
            {/* End Card Icon */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
