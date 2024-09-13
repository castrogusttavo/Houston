'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

export function Alert() {
  const [textToCopy] = useState(
    'https://cdn.houstonicons.com.br/hgi-stroke-rounded.css',
  )
  const [isOpenAlert, setIsOpenAlert] = useState(false)

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsOpenAlert(true)

      setTimeout(() => {
        setIsOpenAlert(false)
      }, 10000)
    } catch (err) {
      console.log('Falha ao copiar: ', err)
    }
  }

  return (
    <div className="mt-6">
      <h3 className="font-bold text-xl leading-12 mb-3 text-grey-900">
        CDN URL
      </h3>
      <div className="relative">
        <input
          className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-6"
          type="text"
          value={textToCopy}
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center justify-center font-bold whitespace-nowrap rounded-lg text-sm disabled:pointer-event-none disabled:opacity-50 hover:text-grey-900 w-9 h-9 p-0 transition-colors duration-300 absolute right-1 top-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="21"
            height="21"
            fill="none"
            color="#7B8772"
            className="w-5 h-5"
          >
            <path
              d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpenAlert && (
        <Dialog.Root open={isOpenAlert} onOpenChange={setIsOpenAlert}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 flex flex-col p-[25px] gap-[10px] max-w-[100vw] m-0 list-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=close]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="fixed left-[50%] top-[50px] z-50 translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top[48%] bg-black text-white border-2 border-neutral-700 shadow-lg w-[356px] h-[53px] flex items-center gap-[6px] rounded-lg p-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                height="20"
                width="20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="flex flex-col gap-1/2">
                <span className="font-bold leading-none text-white">
                  Copied to clipboard
                </span>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  )
}
