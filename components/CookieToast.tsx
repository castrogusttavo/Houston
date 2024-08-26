'use client'

import { useState, useEffect } from 'react'
import * as Toast from '@radix-ui/react-toast'
import { Cross2Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function CookieToast() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hasSeenToast = localStorage.getItem('hasSeenCookieToast')
    if (!hasSeenToast) {
      setIsVisible(true)
      localStorage.setItem('hasSeenCookieToast', 'true')
    }
  }, [])

  function handleClickCloseToast() {
    setIsVisible(false)
  }

  return (
    <Toast.Provider
      swipeDirection="left"
      duration={30000}
      label="Cookie Notification"
    >
      <Toast.Root
        className="border-box m-0 min-w-0 p-4 relative bg-white border border-grey-100 rounded-lg overflow-hidden h-full data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={isVisible}
        onOpenChange={setIsVisible}
      >
        <Toast.Title className="text-xl mb-1 text-grey-900 font-bold">
          <span>🍪 </span>
          Our site uses cookies
        </Toast.Title>
        <Toast.Description className="text-sm text-grey-500 max-w-[270px]">
          <p className="mb-1">We use cookies to improve our website.</p>
          <p className="mb-0">
            View out {''}
            <Link
              href="/policy/privacy-policy#cookies"
              className="text-blue-500"
            >
              privacy policy
            </Link>
            {''} for more info.
          </p>
        </Toast.Description>
        <Toast.Close>
          <button
            className="absolute right-3 top-3 border-none p-0 w-6 h-6 bg-grey-50 rounded-full flex flex-col justify-center items-center"
            aria-label="Close"
            onClick={handleClickCloseToast}
          >
            <Cross2Icon />
          </button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="fixed z-50 w-[305px] bottom-[2rem] left-[2rem]" />
    </Toast.Provider>
  )
}
