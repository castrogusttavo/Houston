'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import * as Popover from '@radix-ui/react-popover'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Icon from '@houstonicons/react'

interface IconProps {
  iconSize: number
  fillType: 'stroke' | 'bulk' | 'solid' | 'twotone' | 'duotone'
  cornerStyle: 'sharp' | 'rounded' | 'standard'
}

const iconVariants = [
  { fillType: 'stroke', cornerStyle: 'standard' },
  { fillType: 'solid', cornerStyle: 'standard' },
  { fillType: 'stroke', cornerStyle: 'rounded' },
  { fillType: 'twotone', cornerStyle: 'rounded' },
  { fillType: 'duotone', cornerStyle: 'rounded' },
  { fillType: 'bulk', cornerStyle: 'rounded' },
  { fillType: 'solid', cornerStyle: 'rounded' },
  { fillType: 'stroke', cornerStyle: 'sharp' },
  { fillType: 'solid', cornerStyle: 'sharp' },
] as const

const searchTermsPopover = [
  'All Icons',
  'Add + Remove',
  'AI',
  'Alert',
  'Animation',
  'Arrow',
  'Award',
  'Bookmark',
  'Buildings',
  'Business',
  'Check',
  'Clothing',
  'Communications',
  'Crypto',
  'Dashboard',
  'Date + Time',
  'Devices',
  'Download + Upload',
  'E-commerce',
  'Editing',
  'Education',
  'Emoji',
  'Energy',
  'Files Folders',
  'Filter + Sorting',
  'Foods',
  'Furniture',
  'Games',
  'Git',
  'Gym',
  'Hands',
  'Hierarchy',
  'Home',
  'Image + Camera',
  'Islamic',
  'Kitchen',
  'Layout',
  'Legal',
  'Link + Unlink',
  'Login + Logout',
  'Logistics',
  'Logos',
  'Maps',
  'Mathematics',
  'Media',
  'Medical',
  'Menu',
  'Mouse',
  'Notes + Tasks',
  'Presentations',
  'Programming',
  'Science + Technology',
  'Search',
  'Security',
  'Settings',
  'Shapes',
  'Space',
  'Users',
  'Weather',
  'Wifi',
]

const iconsNames = Object.keys(Icon).slice(0, 6)

export default function IconsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTermFromURL = searchParams.get('search') || ''
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const itemRefs = useRef<HTMLButtonElement[]>([])

  const [searchTerm, setSearchTerm] = useState(searchTermFromURL)
  const [filteredIcons, setFilteredIcons] = useState<string[]>([])

  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) params.set('search', searchTerm)
    else params.delete('search')

    router.replace(`/icons?${params.toString()}`)
  }, [searchTerm, router])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const resultSearch = iconsNames.filter((iconName) =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredIcons(resultSearch)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'ArrowDown')
      setSelectedIndex((prevIndex) =>
        prevIndex < searchTermsPopover.length - 1 ? prevIndex + 1 : prevIndex,
      )

    if (event.key === 'ArrowUp')
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      )
  }

  useEffect(() => {
    if (selectedIndex !== -1 && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [selectedIndex])

  function handleClickClearSearch() {
    setSearchTerm('')
  }

  return (
    <div className="antialiased font-sans max-h-[100vh] transition-[grid-template-columns] duration-300 ease-in-out">
      <main className="flex flex-col flex-1 max-h-[80vh]">
        {/* Filtragem de dados */}
        <div className="bg-[#FCFDFF] z-20 px-6 pt-8 pb-8 border-b border-[#CED4E0]">
          <div className="flex gap-6 p-3 rounded-lg bg-white items-center border border-[#F0F2F7] mb-6 relative max-w-[80rem] mx-auto shadow-[0px_2px_3px_-2px_#B4E903]">
            <Popover.Root>
              <Popover.Trigger className="w-[250px]" asChild>
                <button
                  className="inline-flex relative items-center justify-start font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-grey-700 px-4 py-2 max-w-[250px] gap-2 h-[44px] bg-[#F0F2F7] border-none"
                  type="button"
                >
                  <span className="font-normal text-grey-500">Category:</span>
                  <span className="text-ellipsis overflow-w-hidden">
                    All Icons
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto h-7 w-7 shrink-0 opacity-80"
                  >
                    <path
                      d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="z-50 rounded-md border bg-white text-grey-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[250px] p-0 ml-6"
                  sideOffset={5}
                >
                  <div
                    className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-grey-900"
                    onKeyDown={handleKeyDown}
                  >
                    <div className="flex items-center border-b px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="mr-2 h-4 w-4 shrink-0 opacity-50"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <input
                        className="flex w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-grey-400 disabled:cursor-not-allowed disabled:opacity-50 h-9"
                        placeholder="Search categories..."
                      />
                    </div>
                    <div className="overflow-hidden p-1 text-grey-950">
                      <div role="group">
                        <ScrollArea.Root className="relative overflow-scroll h-screen max-h-80 text-grey-600">
                          <ScrollArea.Viewport
                            className="h-full w-full rounded-[inherit]"
                            style={{ overflow: 'hidden scroll' }}
                          >
                            {searchTermsPopover.map((term, index) => (
                              <button
                                ref={(el) => {
                                  if (el) {
                                    itemRefs.current[index] = el
                                  }
                                }}
                                className={`relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none w-full disabled:opacity-50 ${
                                  selectedIndex === index
                                    ? 'bg-gray-100 text-grey-900'
                                    : ''
                                }`}
                                role="option"
                                disabled={true}
                                key={index}
                                data-selected={selectedIndex === index}
                                aria-selected={selectedIndex === index}
                              >
                                {term}
                              </button>
                            ))}
                          </ScrollArea.Viewport>
                        </ScrollArea.Root>
                      </div>
                    </div>
                  </div>
                  <Popover.Close />
                  <Popover.Arrow className="fill-white" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            <div
              data-orientation="vertical"
              className="shrink-0 h-9 w-[1.5px] bg-[#D9DCE5]"
            />
            <svg
              className="w-8 h-8 text-neutral-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <input
              className="w-full bg-transparent focus:outline-none placeholder:text-grey-4000"
              placeholder="Search icons..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute right-10 h-10 w-10 flex items-center justify-center"
                onClick={handleClickClearSearch}
              >
                <svg
                  width="24"
                  height="24"
                  className="w-4 h-4 text-neutral-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="flex gap-2 items-center justify-center max-w-[80rem] mx-auto">
            <div dir="lrt" data-orientation="horizontal">
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-10 items-center justify-center rounded-md text-inputs-shape-primary bg-transparent gap-1 p-0 lg:mt-8 outline-none"
                tabIndex={0}
              >
                <button
                  type="button"
                  role="tab"
                  data-state="active"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    All
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Stroke
                  </span>
                  <span className="text-sm opacity-50 -ml-2">(strandard)</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Solid
                  </span>
                  <span className="text-sm opacity-50 -ml-2">(strandard)</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Stroke
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Duotone
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Twotone
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Solid
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Bulk
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Stroke
                  </span>
                  <span className="text-sm opacity-50 -ml-2">(sharp)</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  data-state="inactive"
                  className="flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:text-grey-950 data-[state=active]:shadow-sm relative gap-3 bg-[#EFF0F3] border px-4 py-3 rounded-lg border-solid border-[#ECEEF2] h-[44px] font-normal data-[state=active]:bg-[#C1D1DA] data-[state=active]:font-semibold data-[state=active]:border-transparent"
                >
                  <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                    Solid
                  </span>
                  <span className="text-sm opacity-50 -ml-2">(sharp)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Renderização de ícones */}
        <div
          className="select-none mx-auto relative h-fit max-w-full overflow-y-auto will-change-transform focus:outline-none focus:border-none overflow-x-hidden"
          style={{ direction: 'ltr' }}
        >
          <div className="h-[28154px] w-[1298px]">
            {filteredIcons.map((iconName, iconIndex) => {
              const IconComponent = Icon[
                iconName as keyof typeof Icon
              ] as React.ComponentType<IconProps>

              return iconVariants.map((variant, variantIndex) => {
                const totalIndex =
                  iconIndex * iconVariants.length + variantIndex
                const iconLeftPosition = 15 + (totalIndex % 13) * 99.846
                const iconTopPosition = 18 + Math.floor(totalIndex / 13) * 100

                return (
                  <div
                    key={`${iconName}-${variant.fillType}-${variant.cornerStyle}-${variantIndex}`}
                    className="absolute h-[82px] w-[100px] pr-[18px] inline-flex"
                    style={{
                      left: `${iconLeftPosition}px`,
                      top: `${iconTopPosition}px`,
                    }}
                  >
                    <div className="p-4 flex gap-1 items-center justify-center py-7 group hover:bg-gray-50 cursor-grab mb-2 relative aspect-square shrink-0 rounded-lg border-[0.5px] border-solid border-[#ECEEF2]">
                      <div className="w-7 h-7">
                        <IconComponent
                          iconSize={28}
                          fillType={variant.fillType}
                          cornerStyle={variant.cornerStyle}
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
