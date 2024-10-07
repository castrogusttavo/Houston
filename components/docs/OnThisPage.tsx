'use client'

import { useEffect, useState, useRef } from 'react'

interface LinkProps {
  href: string
  children: React.ReactNode
}

interface OnThisPageProps {
  children: React.ReactNode
  title: string
}

export function Link({ href, children }: LinkProps) {
  const [isActive, setIsActive] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const targetElement = document.getElementById(href)

    if (!targetElement) return

    function handleIntersection(entries: IntersectionObserverEntry[]) {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px 0px -80% 0px',
      threshold: 0.1,
    })

    if (observerRef.current) {
      observerRef.current.observe(targetElement)
    }

    return () => {
      // Limpa o observer ao desmontar
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [href])

  return (
    <li className="my-2 scroll-my-6 scroll-py-6">
      <a
        href={`#${href}`}
        className={`${
          isActive
            ? 'font-semibold inline-block text-blue-600 subpixel-antialiased w-full break-words'
            : 'font-semibold inline-block text-grey-900 dark:text-grey-300 subpixel-antialiased w-full break-words'
        }`}
      >
        {children}
      </a>
    </li>
  )
}

export function OnThisPage({ children, title }: OnThisPageProps) {
  return (
    <div className="order-last hidden w-64 shrink-0 xl:block print:hidden px-4">
      <div className="sticky top-16 overflow-y-auto pr-4 pt-6 text-sm max-h-[calc(100vh-(4rem)-env(safe-area-inset-bottom))] -mr-4 -ml-4">
        <p className="mb-4 font-semibold tracking-tight">{title}</p>
        <ul>{children}</ul>
        <div className="mt-8 border-t bg-slate-50 pt-8 dark:bg-zinc-900 sticky bottom-0 flex flex-col items-start gap-2 pb-8 border-neutral-400 dark:border-neutral-800 shadow-[0_-12px_16px_#F8FAFC] dark:shadow-[0_-12px_16px_#18181B]">
          <a
            href=""
            className="text-xs font-medium text-gray-500 hover:text-grey-900 dark:text-gray-400 dark:hover:text-grey-100"
          >
            Question? Give us feedback →
          </a>
        </div>
      </div>
    </div>
  )
}
