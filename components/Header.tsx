'use client'

import * as Logo from '@/public/logoHorizontal.svg'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isShowMenuBurger, setIsShowMenuBurger] = useState(false)
  const pathname = usePathname()

  function handleClickOpenMenu() {
    setIsShowMenuBurger(true)
  }

  function testeButton() {
    console.log('Teste')
  }

  return (
    <nav className="bg-white text-primary border-neutral-100 flex gap-3 items-center w-screen md:w-full sticky z-30 px-4 h-[73px] top-0">
      <Dialog.Root open={isShowMenuBurger} onOpenChange={setIsShowMenuBurger}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 lg:hidden" />
          <Dialog.Content className="fixed z-50 gap-4 flex flex-col bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 lef-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm pt-20 lg:hidden">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href="/icons"
                  className={`hover:text-grey-500 text-black ${pathname === '/icons' ? 'font-bold text-black' : 'font-normal'}`}
                >
                  Icons
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className={`hover:text-grey-500 text-black ${pathname === '/use-cases' ? 'font-bold text-black' : 'font-normal'}`}
                >
                  Example
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className={`hover:text-grey-500 text-black ${pathname === '/packages' ? 'font-bold text-black' : 'font-normal'}`}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.houstonicons.com.br"
                  className={`hover:text-grey-500 text-black ${pathname === '/docs' ? 'font-bold text-black' : 'font-normal'}`}
                >
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
              <Link href="/icons">
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
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/icons"
                onClick={testeButton}
                className={`hover:text-black transition-colors  ${pathname === '/icons' ? 'font-bold text-black' : 'font-normal text-grey-500'}`}
              >
                <span>Icons</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/use-cases"
                onClick={testeButton}
                className={`hover:text-black transition-colors ${pathname === '/use-cases' ? 'font-bold text-black' : 'font-normal text-grey-500'}`}
              >
                <span>Example</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/packages"
                onClick={testeButton}
                className={`hover:text-black transition-colors ${pathname === '/packages' ? 'font-bold text-black' : 'font-normal text-grey-500'}`}
              >
                <span>Packages</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                href="https://docs.houstonicons.com.br"
                onClick={testeButton}
                className={`hover:text-black transition-colors ${pathname === '/docs' ? 'font-bold text-black' : 'font-normal text-grey-500'}`}
              >
                <span>Docs</span>
              </Link>
            </li>
          </ul>
          <li>
            <span>
              <svg
                width="24"
                height="33"
                viewBox="0 0 24 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0407 6.26496C22.5895 3.4641 19.7887 1.0204 16.1795 0.26849C14.3937 -0.0886688 8.66043 -0.0886688 6.94984 0.26849C4.44974 0.813622 2.19402 2.22344 1.14134 3.87764C0.0322798 5.60703 -0.042911 6.20856 0.0134822 12.9569L0.0698744 19.0474L2.62636 19.7053L5.20165 20.3632L11.5553 18.6714L17.9277 16.9608L17.9841 20.9836C18.0029 23.5213 17.9465 25.307 17.8149 25.7958C17.5329 26.886 16.1419 28.2207 14.9013 28.5778C13.4914 28.9914 9.16797 28.935 8.02131 28.5026C6.89345 28.0703 5.69039 26.7733 5.38963 25.6454C5.38963 25.6454 5.08886 24.7995 5.01367 24.7995C4.88209 24.7995 1.19774 25.777 0.314245 26.0401C0.0510773 26.1153 0.0322804 26.2281 0.257853 27.0552C0.972166 29.7433 3.1527 31.6795 6.55508 32.6193C8.32207 33.1269 14.9201 33.1269 16.7058 32.6193C19.6195 31.811 21.8752 30.0253 22.7587 27.8447C23.1723 26.7921 23.1911 26.6229 23.1911 20.382V13.9908L20.6534 13.2953L18.1157 12.5998L11.856 14.2916C8.39726 15.2127 5.50241 15.9646 5.40842 15.9646C5.29564 15.9646 5.23925 14.3292 5.27684 11.5847V7.92424C5.27684 7.49785 5.39712 7.08011 5.62386 6.71901L5.89717 6.28375C5.89717 6.28375 6.78066 5.21228 7.49497 4.79873L8.01713 4.53319C8.31692 4.38073 8.64688 4.2969 8.98308 4.28779L11.6305 4.21601H11.6305C14.7321 4.21601 14.7321 4.21601 15.7472 4.77994C16.8562 5.40026 17.7397 6.54692 17.9465 7.63719C18.0405 8.10713 18.1533 8.23871 18.3788 8.18232C18.83 8.05074 21.3677 7.37402 22.3264 7.12964C23.1159 6.92287 23.1347 6.90408 23.0407 6.26496Z"
                  fill="#9956F6"
                />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
