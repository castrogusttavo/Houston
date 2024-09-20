'use client'

import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import DiscountHeader from '@/public/discountHeader.png'
import Link from 'next/link'
import Image from 'next/image'

export function DialogPromotion() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timerOpenDialog = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    return () => clearTimeout(timerOpenDialog)
  }, [])

  function handleClickCloseDialog() {
    setIsVisible(false)
  }

  return (
    <Dialog.Root open={isVisible} onOpenChange={setIsVisible}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#204254]/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=close]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top[48%] sm:rounded-lg max-w-[690px] pt-0 !rounded-3xl bg-white">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <p className="text-sm text-grey-500">
              <Dialog.Close asChild>
                <button
                  className="w-12 h-12 bg-grey-50 rounded-full flex-col justify-center items-center flex absolute right-3 top-3 cursor-pointer border-none outline-none"
                  aria-label="Close"
                  onClick={handleClickCloseDialog}
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
              <div className="flex min-h-full flex-1 flex-col justify-center w-full">
                <div className="sm:w-full flex flex-col items-center gap-12">
                  <Image
                    className="h-[185px] w-full mx-auto object-contain"
                    src={DiscountHeader}
                    alt="Stop Icon"
                  />
                  <div className="text-center">
                    <h2 className="text-center text-black text-2xl font-bold leading-loose">
                      Discover the Houston Icons Pro Pack!
                    </h2>
                    <p className="text-grey-700 text-base font-medium leading-normal">
                      Expand your design options with over 4,000 icons for all
                      your projects.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-11">
                  <Link
                    href="https://www.npmjs.com/package/@houstonicons/pro"
                    className="h-14 px-8 py-5 bg-amber-200 rounded-full border border-white justify-center items-center gap-2 inline-flex text-yellow-900 text-base font-bold focus:border-yellow-700/50 focus:border-4 transition-colors"
                  >
                    Go to package
                  </Link>
                  <button
                    onClick={handleClickCloseDialog}
                    className="text-center text-yellow-800 opacity-70 text-base font-medium underline mt-4"
                  >
                    I want to explore more
                  </button>
                </div>
              </div>
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
