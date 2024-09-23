'use client'

import { Header } from '@/components/Header'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as Icon from '@houstonicons/pro'
import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

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

const searchTabsFilter = [
  { tabTitle: 'All', tabSubtitle: '' },
  { tabTitle: 'Stroke', tabSubtitle: '(standard)' },
  { tabTitle: 'Solid', tabSubtitle: '(standard)' },
  { tabTitle: 'Stroke', tabSubtitle: '(rounded)' },
  { tabTitle: 'Duotone', tabSubtitle: '' },
  { tabTitle: 'Twotone', tabSubtitle: '' },
  { tabTitle: 'Solid', tabSubtitle: '(rounded)' },
  { tabTitle: 'Bulk', tabSubtitle: '' },
  { tabTitle: 'Stroke', tabSubtitle: '(sharp)' },
  { tabTitle: 'Solid', tabSubtitle: '(sharp)' },
] as const

const iconsNames = Object.keys(Icon)

export default function IconsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTermFromURL = searchParams.get('search') || ''
  const [category, setCategory] = useState('all-icons')
  const [selectedSearchTab, setSelectedSearchTab] = useState<
    (typeof searchTabsFilter)[number]
  >(searchTabsFilter[0])
  const [isOpenAlert, setIsOpenAlert] = useState(false)
  const svgRefs = useRef<(HTMLDivElement | null)[]>([])

  const [searchTerm, setSearchTerm] = useState(searchTermFromURL)
  const [filteredIcons, setFilteredIcons] = useState<string[]>([])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const maxColumns = 13
  const columns = Math.min(maxColumns, Math.floor(containerWidth / 100))
  const iconWidth = containerWidth / columns

  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) params.set('search', searchTerm)
    else params.delete('search')

    router.replace(`/icons?${params.toString()}`)
  }, [searchTerm, router])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const normalizedSearchTerm = searchTerm
        .toLowerCase()
        .replace(/[-\s]/g, '')
      const resultSearch = iconsNames.filter((iconName) =>
        iconName
          .toLowerCase()
          .replace(/[-\s]/g, '')
          .includes(normalizedSearchTerm),
      )
      setFilteredIcons(resultSearch)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  function handleClickClearSearch() {
    setSearchTerm('')
  }

  function handleActiveTabClick(tab: (typeof searchTabsFilter)[number]) {
    if (tab.tabTitle === 'All') setSelectedSearchTab(tab)

    setSelectedSearchTab(tab)
  }

  function formateIconName(iconName: string) {
    return iconName
      .replace(/Icon$/, '')
      .replace(/([A-Z])/g, '-$1')
      .replace(/(\d+)/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '')
  }

  const iconsPerPage = 20
  const iconsNamesChunks = Array.from(
    { length: Math.ceil(filteredIcons.length / iconsPerPage) },
    (_, i) =>
      filteredIcons.slice(i * iconsPerPage, i * iconsPerPage + iconsPerPage),
  )

  const [visibleChunks, setVisibleChunks] = useState([0])
  const observerRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('Ultimo icone visivel, carregando mais chunks...')
          setTimeout(() => {
            setVisibleChunks((prevChunks) => [...prevChunks, prevChunks.length])
          }, 300)
        }
      })
      observer.observe(node)
    }
  }, [])

  async function copySvgToClipboard(index: number) {
    try {
      if (svgRefs.current) {
        const svgCode = svgRefs.current[index]?.innerHTML || ''
        await navigator.clipboard.writeText(svgCode)
        setIsOpenAlert(true)

        setTimeout(() => {
          setIsOpenAlert(false)
        }, 10000)
      }
    } catch (err) {
      console.error('Falha ao copiar o SVG: ', err)
    }
  }

  return (
    <div className="antialiased font-sans min-h-full transition-[grid-template-columns] duration-300 ease-in-out overflow-hidden">
      <Header />
      <main className="flex flex-col flex-1 max-h-screen overflow-hidden">
        <div className="bg-[#FCFDFF] z-20 px-6 pt-8 pb-8 border-b border-[#CED4E0] sticky top-0">
          <div className="flex gap-6 p-3 rounded-lg bg-white items-center border border-[#F0F2F7] mb-6 relative max-w-[80rem] mx-auto shadow-[0px_2px_3px_-2px_#B4E903]">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                className="w-[250px] hidden sm:flex"
                asChild
              >
                <button
                  className="inline-flex relative items-center justify-start font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-grey-700 px-4 py-2 max-w-[250px] gap-2 h-[44px] bg-[#F0F2F7] border-none"
                  type="button"
                >
                  <span className="font-normal text-grey-500">Category:</span>
                  <span className="text-ellipsis overflow-w-hidden">
                    {category
                      .replace(/-/g, ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
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
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="z-50 rounded-md border bg-white text-grey-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[250px] p-0 ml-6"
                  sideOffset={5}
                >
                  <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-grey-900">
                    <div className="flex items-center border-b px-3">
                      <svg
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
                        <div className="relative overflow-scroll h-screen max-h-80 text-grey-600">
                          <DropdownMenu.RadioGroup
                            value={category}
                            onValueChange={setCategory}
                          >
                            <DropdownMenu.RadioItem
                              value="all-icons"
                              className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                            >
                              All Icons
                              <DropdownMenu.ItemIndicator>
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-auto h-4 w-4 opacity-100"
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
                              value="coming-soon"
                              className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                            >
                              Coming Soon...
                              <DropdownMenu.ItemIndicator>
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-auto h-4 w-4 opacity-100"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <div
              data-orientation="vertical"
              className="shrink-0 h-9 w-[1.5px] bg-[#D9DCE5] hidden sm:block"
            />
            <svg
              className="w-8 h-8 text-neutral-600"
              viewBox="0 0 24 24"
              fill="none"
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
          <div className="gap-2 items-center justify-center max-w-[80rem] mx-auto hidden lg:flex">
            <div dir="lrt" data-orientation="horizontal">
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-10 items-center justify-center rounded-md text-inputs-shape-primary bg-transparent gap-1 p-0 lg:mt-8 outline-none"
                tabIndex={0}
              >
                {searchTabsFilter.map((tab, index) => (
                  <button
                    type="button"
                    role="tab"
                    data-state="inactive"
                    key={index}
                    onClick={() => handleActiveTabClick(tab)}
                    className={`flex justify-center items-center whitespace-nowrap text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative gap-3 border px-4 py-3 rounded-lg border-solid h-[44px] font-normal border-[#ECEEF2] ${selectedSearchTab === tab ? 'bg-[#C1D1DA] font-semibold border-transparent text-grey-950 shadow-sm' : 'bg-[#EFF0F3]'}`}
                  >
                    <span className="text-grey-800 text-md leading-[18px] tracking-[-0.7px]">
                      {tab.tabTitle}
                    </span>
                    {tab.tabSubtitle !== '(rounded)' && (
                      <span className="text-sm opacity-50 -ml-2">
                        {tab.tabSubtitle}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center h-max justify-end mx-auto lg:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                className="inline-flex relative items-center font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-grey-700 px-4 py-2 w-[170px] justify-start gap-2 ml-auto"
                asChild
              >
                <button
                  className="inline-flex relative items-center justify-start font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-grey-700 px-4 py-2 max-w-[250px] gap-2 h-[44px] border-[#e5e5e5] bg-white hover:bg-[#F0F2F7]"
                  type="button"
                >
                  <span className="font-normal text-grey-500">Style:</span>
                  <span className="text-ellipsis overflow-w-hidden">
                    {selectedSearchTab.tabTitle}
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
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
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="z-50 rounded-md border bg-white text-grey-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[250px] p-0 ml-6 h-full"
                  sideOffset={5}
                >
                  <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-grey-900 p-1 px-2 py-1.5 text-xs font-medium">
                    <div className="overflow-hidden p-1 text-grey-950">
                      <div role="group">
                        <div className="relative overflow-scroll h-screen max-h-80 text-grey-600">
                          <DropdownMenu.RadioGroup
                            value={selectedSearchTab.tabTitle}
                            onValueChange={(value: string) => {
                              const selectedTab = searchTabsFilter.find(
                                (tab) => tab.tabTitle === value,
                              )
                              if (selectedTab) {
                                setSelectedSearchTab(selectedTab)
                              }
                            }}
                            className="h-full"
                          >
                            {searchTabsFilter.map((tab, index) => (
                              <DropdownMenu.RadioItem
                                key={index}
                                value={`${tab.tabTitle}-${tab.tabSubtitle}`}
                                onClick={() => handleActiveTabClick(tab)}
                                className="flex justify-start items-start text-start whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 relative gap-3 border px-2 py-1.5 rounded-lg font-normal border-[#ECEEF2] border-none hover:bg-gray-50 hover:border-none hover:outline-none cursor-pointer data-[state=checked]:bg-gray-100"
                              >
                                <span className="text-grey-800 text-sm leading-[18px] tracking-[-0.7px]">
                                  {tab.tabTitle}
                                </span>
                                {tab.tabSubtitle !== '(rounded)' && (
                                  <span className="text-sm opacity-50 -ml-1">
                                    {tab.tabSubtitle}
                                  </span>
                                )}
                              </DropdownMenu.RadioItem>
                            ))}
                          </DropdownMenu.RadioGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
        <div
          className="select-none relative h-[665px] overflow-auto will-change-transform focus:outline-none focus:border-none scrollbar-hide"
          dir="ltr"
        >
          <div
            ref={containerRef}
            className="h-full w-full max-w-[80rem] mx-auto relative"
          >
            {visibleChunks.map((chunkIndex, chunkVisibleIndex) => {
              const chunk = iconsNamesChunks[chunkIndex]
              if (!chunk) return null

              return (
                <React.Fragment key={chunkIndex}>
                  {chunk.map((iconName, iconIndex) => {
                    const IconComponent = Icon[
                      iconName as keyof typeof Icon
                    ] as React.ComponentType<IconProps>

                    const filteredVariants = iconVariants.filter((variant) => {
                      const matchesFillType =
                        selectedSearchTab.tabTitle === 'All' ||
                        variant.fillType ===
                          selectedSearchTab.tabTitle.toLowerCase()
                      const matchesCornerStyle =
                        !selectedSearchTab.tabSubtitle ||
                        variant.cornerStyle ===
                          selectedSearchTab.tabSubtitle
                            .replace(/[()]/g, '')
                            .toLowerCase()

                      return matchesFillType && matchesCornerStyle
                    })

                    return filteredVariants.map((variant, variantIndex) => {
                      const totalIndex =
                        chunkVisibleIndex *
                          iconsPerPage *
                          filteredVariants.length +
                        iconIndex * filteredVariants.length +
                        variantIndex

                      const iconLeftPosition =
                        (totalIndex % columns) * iconWidth
                      const iconTopPosition =
                        18 + Math.floor(totalIndex / columns) * 100
                      const adjustedLeftPosition = Math.min(
                        iconLeftPosition,
                        containerWidth - iconWidth,
                      )
                      const isLastIcon =
                        chunkIndex === visibleChunks.length - 1 &&
                        iconIndex === iconsNamesChunks[chunkIndex].length - 1 &&
                        variantIndex === filteredVariants.length - 1

                      return (
                        <Tooltip.Provider
                          key={`${iconName}-${variant.fillType}-${variant.cornerStyle}-${variantIndex}`}
                          delayDuration={700}
                        >
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <div
                                className="absolute h-[82px] w-[100px] pr-[18px] flex flex-col mr-1"
                                style={{
                                  left: `${adjustedLeftPosition}px`,
                                  top: `${iconTopPosition}px`,
                                }}
                                ref={isLastIcon ? observerRef : null}
                                onClick={() => copySvgToClipboard(totalIndex)}
                              >
                                <div className="p-4 flex gap-1 items-center justify-center py-7 group hover:bg-gray-50 cursor-grab mb-2 relative aspect-square shrink-0 rounded-lg border-[0.5px] border-solid border-[#ECEEF2]">
                                  <div
                                    className="w-7 h-7"
                                    ref={(el) => {
                                      svgRefs.current[totalIndex] = el
                                    }}
                                  >
                                    <IconComponent
                                      iconSize={28}
                                      fillType={variant.fillType}
                                      cornerStyle={variant.cornerStyle}
                                    />
                                  </div>
                                </div>
                              </div>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-softis-mid select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50 mr-[20px]"
                                side="bottom"
                                align="center"
                                sideOffset={5}
                              >
                                {formateIconName(iconName)}
                                <Tooltip.Arrow className="fill-white" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      )
                    })
                  })}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </main>
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
