'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import LogoDark from '@/public/logoHorizontalDark.svg'
import Logo from '@/public/logoHorizontal.svg'
import * as Accordion from '@radix-ui/react-accordion'
import { AccordionItem, TabIndex } from './SideBar'

export function Header() {
  const [isShowMenuBurger, setIsShowMenuBurger] = useState(false)
  const [dataSearch, setDataSearch] = useState('')
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (svgRef.current) {
      if (isShowMenuBurger) {
        ;(
          svgRef.current.getElementById('start') as SVGAnimateElement
        )?.beginElement()
      } else {
        ;(
          svgRef.current.getElementById('reverse') as SVGAnimateElement
        )?.beginElement()
      }
    }
  }, [isShowMenuBurger])

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleKeyDown(event: KeyboardEvent) {
      const searchInput = document.querySelector(
        'input[type="text"]',
      ) as HTMLInputElement
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        searchInput.focus()
      } else if (event.key === 'Escape' && dataSearch.length) {
        event.preventDefault()
        setDataSearch('')
        searchInput.blur()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [dataSearch])

  function handleClickOpenMenu() {
    setIsShowMenuBurger(!isShowMenuBurger)
  }

  return (
    <nav className="sticky top-0 z-20 w-full bg-transparent print:hidden">
      <div className="pointer-events-none absolute z-[-1] h-full w-full bg-slate-50 dark:bg-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] contrast-more:shadow-[0_0_0_1px_#000] contrast-more:dark:shadow-[0_0_0_1px_#fff] backdrop-blur-sm" />
      <div className="mx-auto flex h-[var(--nextra-navbar-height)] max-w-[90rem] items-center justify-between gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <Link href="/" passHref className="hover:opacity-90">
          <Image src={LogoDark} alt="Logo" className="hidden dark:block" />
          <Image src={Logo} alt="Logo" className="block dark:hidden" />
        </Link>
        <div className="hidden gap-4 lg:flex">
          <Link
            href="/icons"
            className="text-sm text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 relative -ml-2 whitespace-nowrap p-2 font-medium transition-colors"
          >
            Icons
          </Link>
          <Link
            href="/use-cases"
            className="text-sm text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 relative -ml-2 whitespace-nowrap p-2 font-medium transition-colors"
          >
            Examples
          </Link>
          <Link
            href="/packages"
            className="text-sm text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 relative -ml-2 whitespace-nowrap p-2 font-medium transition-colors"
          >
            Packages
          </Link>
          <Link
            href="mailto:hello.softis@gmail.com"
            className="text-sm text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 relative -ml-2 whitespace-nowrap p-2 font-medium transition-colors"
          >
            Contact ↗
          </Link>
          <div className="relative md:w-64 min-w-[200px]">
            <div className="relative flex items-center text-grey-800 dark:text-grey-300">
              <input
                type="text"
                placeholder="Search documentation"
                className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-slate-50/[0.5] dark:bg-grey-50/10 focus:bg-slate-50 dark:focus:bg-grey-50/5 focus:outline-none focus:border-none focus:ring-2 focus:ring-ring focus:ring-offset-background focus:ring-softis-light dark:focus:ring-softis-dark placeholder:text-grey-400 dark:placeholder:text-grey-200 text-grey-400 dark:text-grey-200"
                value={dataSearch}
                onChange={(event) => setDataSearch(event.target.value)}
              />
              <span className="absolute my-1.5 select-none right-1.5 h-5 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-grey-400 border dark:border-gray-100/10 dark:bg-zinc-900/50 items-center gap-1 transition-opacity pointer-events-none flex">
                {dataSearch.length ? 'ESC' : 'CTRL K'}
              </span>
            </div>
          </div>
          <Link
            href="https://linkedin.com/in/castrogusttavo"
            className="text-sm text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 relative -ml-2 whitespace-nowrap p-2 font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              className="fill-grey-800 hover:fill-grey-950 dark:fill-grey-300 hover:dark:fill-grey-100 transition-colors"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                opacity="0.4"
                d="M12.0572 1.75H11.9428C9.75214 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z"
                fill="currentColor"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99999 9.5C7.55228 9.5 7.99999 9.94771 7.99999 10.5L7.99999 17C7.99999 17.5523 7.55228 18 6.99999 18C6.44771 18 5.99999 17.5523 5.99999 17L5.99999 10.5C5.99999 9.94771 6.44771 9.5 6.99999 9.5ZM11.9114 9.58791C11.7544 9.2412 11.4054 9 11 9C10.4477 9 9.99999 9.44771 9.99999 10V17C9.99999 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V13C12 11.8954 12.8954 11 14 11C15.1046 11 16 11.8954 16 13V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V13C18 10.7909 16.2091 9 14 9C13.2345 9 12.5193 9.215 11.9114 9.58791ZM7.00781 8.25C7.69816 8.25 8.25781 7.69036 8.25781 7C8.25781 6.30964 7.69816 5.75 7.00781 5.75H6.99883C6.30847 5.75 5.74883 6.30964 5.74883 7C5.74883 7.69036 6.30847 8.25 6.99882 8.25H7.00781Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
        <button className="block lg:hidden mr-1" onClick={handleClickOpenMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#eee"
            stroke-width=".6"
            fill="rgba(0,0,0,0)"
            stroke-linecap="round"
            className="w-7 h-7"
            ref={svgRef}
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </button>
      </div>
      <Dialog.Root
        open={isShowMenuBurger}
        onOpenChange={() => setIsShowMenuBurger(false)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed top-16 inset-0 z-50 bg-black/50 data-[state=open]:animate in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 lg:hidden" />
          <Dialog.Content className="fixed top-16 z-50 gap-4 w-full flex flex-col bg-slate-50 dark:bg-zinc-900 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left pt-4 lg:hidden overflow-x-auto">
            <div className="relative md:w-64 min-w-[200px]">
              <div className="relative flex items-center text-grey-800 dark:text-grey-300">
                <input
                  type="text"
                  placeholder="Search documentation"
                  className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-slate-50/[0.5] dark:bg-grey-50/10 focus:bg-slate-50 dark:focus:bg-grey-50/5 focus:outline-none focus:border-none focus:ring-2 focus:ring-ring focus:ring-offset-background focus:ring-softis-light dark:focus:ring-softis-dark placeholder:text-grey-400 dark:placeholder:text-grey-200 text-grey-400 dark:text-grey-200"
                  value={dataSearch}
                  onChange={(event) => setDataSearch(event.target.value)}
                />
                <span className="absolute my-1.5 select-none right-1.5 h-5 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-grey-400 border dark:border-gray-100/10 dark:bg-zinc-900/50 items-center gap-1 transition-opacity pointer-events-none flex">
                  {dataSearch.length ? 'ESC' : 'CTRL K'}
                </span>
              </div>
            </div>
            <Accordion.Root
              className="flex flex-col gap-1 scrollbar-hide"
              type="multiple"
              defaultValue={[
                'installation',
                'usage',
                'features',
                'best-practice',
                'troubleshooting',
                'faqs',
              ]}
            >
              <Accordion.Item value="introduction">
                <TabIndex link="docs">Introduction</TabIndex>
              </Accordion.Item>
              <AccordionItem groupName="Installation" value="installation">
                <TabIndex link="/installation/react-package-installation">
                  React Package
                </TabIndex>
                <TabIndex link="/installation/vye-package-installation">
                  Vue Package
                </TabIndex>
                <TabIndex link="/installation/angular-package-installation">
                  Angular Package
                </TabIndex>
                <TabIndex link="/installation/ionic-package-installation">
                  Ionic Package
                </TabIndex>
                <TabIndex link="/installation/react-native-package-installation">
                  React Native Package
                </TabIndex>
                <TabIndex link="/installation/icon-font-installation">
                  Icon Font
                </TabIndex>
              </AccordionItem>
              <AccordionItem groupName="Usage" value="usage">
                <TabIndex link="/installation/react-package-installation">
                  Customization
                </TabIndex>
                <TabIndex link="/installation/vye-package-installation">
                  Using React
                </TabIndex>
                <TabIndex link="/installation/angular-package-installation">
                  Using Vue
                </TabIndex>
                <TabIndex link="/installation/ionic-package-installation">
                  Using Angular
                </TabIndex>
                <TabIndex link="/installation/react-native-package-installation">
                  Using Ionic
                </TabIndex>
                <TabIndex link="/installation/icon-font-installation">
                  Using React Native
                </TabIndex>
              </AccordionItem>
              <AccordionItem groupName="Features" value="features">
                <TabIndex link="/installation/react-package-installation">
                  Autocomplete
                </TabIndex>
                <TabIndex link="/installation/vye-package-installation">
                  Customizable Icons
                </TabIndex>
                <TabIndex link="/installation/angular-package-installation">
                  Icon Library
                </TabIndex>
              </AccordionItem>
              <AccordionItem groupName="Best Practice" value="best-practice">
                <TabIndex link="/installation/react-package-installation">
                  Application Integration
                </TabIndex>
                <TabIndex link="/installation/vye-package-installation">
                  Icon Selection
                </TabIndex>
              </AccordionItem>
              <AccordionItem
                groupName="Troubleshooting"
                value="troubleshooting"
              >
                <TabIndex link="/installation/react-package-installation">
                  Common Issues
                </TabIndex>
              </AccordionItem>
              <AccordionItem groupName="FAQs" value="faqs">
                <TabIndex link="/installation/react-package-installation">
                  License Questions
                </TabIndex>
                <TabIndex link="/installation/vye-package-installation">
                  Technical Support
                </TabIndex>
              </AccordionItem>
            </Accordion.Root>
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href="/icons"
                  className="text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 font-normal"
                >
                  Icons
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 font-normal"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 font-normal"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-grey-600 hover:text-grey-800 dark:text-grey-300 hover:dark:text-grey-100 font-normal"
                >
                  Contact ↗
                </Link>
              </li>
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  )
}
