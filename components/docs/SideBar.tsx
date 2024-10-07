'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Accordion from '@radix-ui/react-accordion'
import Link from 'next/link'

interface TabProps {
  children: React.ReactNode
  link: string
}

interface AccordionProps {
  groupName: string
  children: React.ReactNode
  value: string
}

export function ThemeProvider() {
  const [isTheme, setIsTheme] = useState('system')

  function setDarkMode() {
    document.documentElement.classList.add('dark')
    setIsTheme('dark')
  }

  function setLightMode() {
    document.documentElement.classList.remove('dark')
    setIsTheme('light')
  }

  function setSystemMode() {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setIsTheme('system')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="sticky bottom-0 bg-slate-50 dark:bg-zinc-900 mx-4 py-4 shadow-[0_-12px_16px_#F8FAFC] dark:shadow-[0_-12px_16px_#18181B] flex items-center gap-2 dark:border-neutral-800  contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:shadow-none border-t"
        asChild
      >
        <div className="grow flex flex-col">
          <button className="h-7 w-full rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-200/75 hover:text-gray-900 dark:hover:bg-zinc-800 dark:hover:text-gray-50 items-start">
            <div className="flex items-center gap-2 capitalize">
              {isTheme === 'dark' ? (
                <svg
                  fill="none"
                  viewBox="2 2 20 20"
                  width="12"
                  height="12"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    fill="currentColor"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : isTheme === 'light' ? (
                <svg
                  fill="none"
                  viewBox="3 3 18 18"
                  width="12"
                  height="12"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    fill="currentColor"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="currentColor"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    opacity="0.4"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 2H14C17.2792 2 18.9188 2 20.0811 2.81382C20.5111 3.1149 20.8851 3.48891 21.1862 3.91891C22 5.08116 22 6.72077 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2ZM17.9993 3.28516C19.1562 3.28516 20.1754 3.85345 20.7732 4.71632C21.1266 5.22655 21.3327 5.83979 21.3327 6.49944C21.3327 7.15917 21.1266 7.77248 20.773 8.28275C20.1753 9.14552 19.1561 9.71373 17.9993 9.71373C16.8426 9.71373 15.8234 9.14552 15.2257 8.28275C14.8721 7.77248 14.666 7.15917 14.666 6.49944C14.666 5.83979 14.8721 5.22655 15.2255 4.71632C15.8233 3.85345 16.8425 3.28516 17.9993 3.28516Z"
                    fill="currentColor"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M11.0029 2H10.0062C6.72443 2 5.08355 2 3.92039 2.81382C3.49006 3.1149 3.11577 3.48891 2.81445 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81445 16.0811C3.11577 16.5111 3.49006 16.8851 3.92039 17.1862C5.08355 18 6.72443 18 10.0062 18H14.0093C17.2911 18 18.932 18 20.0951 17.1862C20.5254 16.8851 20.8997 16.5111 21.2011 16.0811C21.8156 15.2042 21.9663 14.0941 22 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M18 9.71428V11M18 9.71428C16.8432 9.71428 15.8241 9.14608 15.2263 8.28331M18 9.71428C19.1568 9.71428 20.1759 9.14608 20.7737 8.28331M18 3.28571C19.1569 3.28571 20.1761 3.854 20.7738 4.71688M18 3.28571C16.8431 3.28571 15.8239 3.854 15.2262 4.71688M18 3.28571V2M22 3.92857L20.7738 4.71688M14.0004 9.07143L15.2263 8.28331M14 3.92857L15.2262 4.71688M21.9996 9.07143L20.7737 8.28331M20.7738 4.71688C21.1273 5.22711 21.3333 5.84035 21.3333 6.5C21.3333 7.15973 21.1272 7.77304 20.7737 8.28331M15.2262 4.71688C14.8727 5.22711 14.6667 5.84035 14.6667 6.5C14.6667 7.15973 14.8728 7.77304 15.2263 8.28331"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M11 15H13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M12 18V22"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8 22H16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              )}
              <span className="text-ellipsis overflow-x-hidden">{isTheme}</span>
            </div>
          </button>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-20 max-h-64 w-56 overflow-auto rounded-md ring-1 ring-black/5 bg-white py-1 text-sm shadow-lg dark:ring-white/20 dark:bg-neutral-800"
          sideOffset={5}
          side="top"
        >
          <DropdownMenu.RadioGroup
            value={isTheme}
            onValueChange={(value) => {
              if (value === 'light') setLightMode()
              if (value === 'dark') setDarkMode()
              if (value === 'system') setSystemMode()
            }}
          >
            <DropdownMenu.RadioItem
              value="light"
              className="text-gray-800 dark:text-gray-100 relative cursor-pointer whitespace-nowrap flex items-center justify-between py-1.5 transition-colors px-3"
            >
              Light
              <DropdownMenu.ItemIndicator>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto h-4 w-4 opacity-100 fill-gray-800 dark:fill-gray-100"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              value="dark"
              className="text-gray-800 dark:text-gray-100 relative cursor-pointer whitespace-nowrap flex items-center justify-between py-1.5 transition-colors px-3"
            >
              Dark
              <DropdownMenu.ItemIndicator>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto h-4 w-4 opacity-100 fill-gray-800 dark:fill-gray-100"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              value="system"
              className="text-gray-800 dark:text-gray-100 relative cursor-pointer whitespace-nowrap flex items-center justify-between py-1.5 transition-colors px-3"
            >
              System
              <DropdownMenu.ItemIndicator>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto h-4 w-4 opacity-100 fill-gray-800 dark:fill-gray-100"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export function TabIndex({ children, link }: TabProps) {
  const pathname = usePathname()

  return (
    <li className="flex flex-col gap-1">
      <Link
        href="/docs"
        className={`${pathname === `/${link}` ? 'flex rounded px-2 py-1.5 text-sm transition-colors break-words cursor-pointer bg-blue-100 font-semibold text-blue-800 dark:bg-blue-400/10 dark:text-blue-600' : 'flex rounded px-2 py-1.5 text-sm transition-colors break-words cursor-pointer hover:bg-gray-100 text-gray-500 hover:text-gray-800 hover:dark:bg-blue-100/5 dark:text-grey-400 hover:dark:text-grey-50'}`}
      >
        {children}
      </Link>
    </li>
  )
}

export function AccordionItem({ groupName, children, value }: AccordionProps) {
  return (
    <Accordion.Item value={value}>
      <Accordion.Trigger className="group items-center justify-between gap-2 text-left w-full flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-zinc-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50">
        <span>{groupName}</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5 transition-transform duration-500 group-data-[state=open]:rotate-90"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
            className="origin-center transition-transform"
          />
        </svg>
      </Accordion.Trigger>
      <Accordion.Content className="p-2">
        <ul className='flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-[""] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3'>
          {children}
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  )
}

export function SideBar() {
  return (
    <aside className="flex-col md:shrink-0 motion-reduce:translate-none transform-gpu transition-all ease-in-out print:hidden md:w-64 md:self-start max-md:[transform:translate3d(0,-100%,0)] md:h-[calc(100vh-(4rem)-(3.75rem))] scrollbar-hide sticky top-16 hidden md:flex">
      <div className="overflow-y-auto overflow-x-hidden p-4 grow md:h-[calc(100vh-(4rem)-(3.75rem))] sticky top-16 scrollbar-hide">
        <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none scrollbar-hide">
          <div className="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-thumb-neutral-700 dark:scrollbar-track-neutral-800 scrollbar-hide">
            <Accordion.Root
              className="flex flex-col gap-1 max-md:hidden scrollbar-hide"
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
          </div>
        </div>
      </div>
      <ThemeProvider />
    </aside>
  )
}
