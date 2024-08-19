'use client'

import * as Logo from '@/public/logoHorizontal.svg'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isShowMenuBurger, setIsShowMenuBurger] = useState(false)

  function handleClickOpenMenu() {
    setIsShowMenuBurger(true)
  }

  return (
    <nav className="bg-white text-primary border-neutral-100 flex gap-3 items-center w-screen md:w-full fixed z-30 px-4 h-[73px] top-0">
      <Dialog.Root open={isShowMenuBurger} onOpenChange={setIsShowMenuBurger}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed z-50 gap-4 flex flex-col bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 lef-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm pt-20">
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="/icons" className="hover:text-grey-500 text-black">
                  Icons
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="hover:text-grey-500 text-black"
                >
                  Example
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-grey-500 text-black"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-grey-500 text-black">
                  Docs
                </Link>
              </li>
            </ul>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="w-full flex mx-auto items-center max-w-[80rem]">
        <button className="block lg:hidden mr-4" onClick={handleClickOpenMenu}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <Link href="/">
          <Image src={Logo} alt="Houston logo" />
        </Link>
        <div className="flex-grow" />
        <ul className="hidden lg:flex w-full items-center justify-between gap-12">
          <div />
          <ul className="flex items-center gap-10 -ml-28">
            <li className="flex item-center">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-neutral-500 hover:text-black transition-colors"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.7929 16.7929C17.1834 16.4024 17.8166 16.4024 18.2071 16.7929L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.7929 18.2071C16.4024 17.8166 16.4024 17.1834 16.7929 16.7929Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11ZM11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li className="relative">
              <Link
                href="/icons"
                className="font-normal text-grey-500 hover:text-black transition-colors"
              >
                <span>Icons</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/examples"
                className="font-normal text-grey-500 hover:text-black transition-colors"
              >
                <span>Example</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/pricing"
                className="font-normal text-grey-500 hover:text-black transition-colors"
              >
                <span>Pricing</span>
              </Link>
            </li>
            <li className="relative">
              <a
                href="#"
                className="font-normal text-grey-500 hover:text-black transition-colors"
              >
                <span>Docs</span>
              </a>
            </li>
          </ul>
          <li>
            <button>
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_219_1722)">
                  <rect y="0.5" width="48" height="48" rx="24" fill="#F7FBFE" />
                  <rect
                    x="0.5"
                    y="1"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#E5E7EB"
                  />
                  <path
                    d="M24 34.5C29.5228 34.5 34 30.0228 34 24.5C34 18.9772 29.5228 14.5 24 14.5C18.4772 14.5 14 18.9772 14 24.5C14 30.0228 18.4772 34.5 24 34.5Z"
                    stroke="black"
                    stroke-width="1.5"
                  />
                  <path
                    d="M19.5 29.5C21.8317 27.0578 26.1432 26.9428 28.5 29.5M26.4951 22C26.4951 23.3807 25.3742 24.5 23.9915 24.5C22.6089 24.5 21.488 23.3807 21.488 22C21.488 20.6193 22.6089 19.5 23.9915 19.5C25.3742 19.5 26.4951 20.6193 26.4951 22Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_219_1722"
                    x="0"
                    y="0.5"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0705882 0 0 0 0 0.14902 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_219_1722"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
