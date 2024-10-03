'use client'

// git commit -m "feat: add live icon experience"

import { Header } from '@/components/Header'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as Toast from '@radix-ui/react-toast'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Checkbox from '@radix-ui/react-checkbox'
import { SketchPicker } from 'react-color'
import { Footer } from '@/components/Footer'
import * as Icon from '@houstonicons/pro'

interface IconProps {
  iconSize: number
  fillType: 'stroke' | 'bulk' | 'solid' | 'twotone' | 'duotone'
  cornerStyle: 'sharp' | 'rounded' | 'standard'
  strokeWidth: number
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
  const [strokeWidthIcon, setStrokeWidthIcon] = useState(1.5)
  const [sizeIcon, setSizeIcon] = useState('16')
  const [colorIcon, setColorIcon] = useState('#000000')
  const [selectedIconName, setSelectedIconName] = useState('')
  const [selectedFillType, setSelectedFillType] = useState('')
  const [selectedIconComponent, setSelectedIconComponent] =
    useState<React.ReactNode>(null)
  const [selectedCornerStyle, setSelectedCornerStyle] = useState('')
  const [selectedSearchTab, setSelectedSearchTab] = useState<
    (typeof searchTabsFilter)[number]
  >(searchTabsFilter[0])
  const [isOpenAlert, setIsOpenAlert] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const svgRefs = useRef<(HTMLDivElement | null)[]>([])
  const svgRef = useRef<HTMLDivElement>(null)
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

  function handledChangeComplete(color: { hex: string }) {
    setColorIcon(color.hex)
  }

  function handleClickClearSearch() {
    setSearchTerm('')
  }

  function handleActiveTabClick(tab: (typeof searchTabsFilter)[number]) {
    if (tab.tabTitle === 'All') setSelectedSearchTab(tab)

    setSelectedSearchTab(tab)
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

  function handleOpenModal(
    iconName: string,
    fillType: string,
    cornerStyle: string,
    iconComponent: React.ReactNode,
  ) {
    setSelectedIconName(iconName)
    setSelectedFillType(fillType)
    setSelectedCornerStyle(cornerStyle)
    setSelectedIconComponent(iconComponent)
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  async function handleClickCopySVG() {
    try {
      if (svgRef.current) {
        const svgCode = svgRef.current.innerHTML || ''
        await navigator.clipboard.writeText(svgCode)
        setIsOpenAlert(true)

        setTimeout(() => {
          setIsOpenAlert(false)
        }, 3000)
      }
    } catch (err) {
      console.error('Falha ao copiar o SVG: ', err)
    }
  }

  async function handleClickDownloadSVG() {
    try {
      if (svgRef.current) {
        const svgCode = svgRef.current.innerHTML || ''
        const blob = new Blob([svgCode], { type: 'image/svg+xml' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${selectedIconName}.svg`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Falha ao baixar o SVG: ', err)
    }
  }

  async function handleClickCopySVGToJSX() {
    try {
      if (svgRef.current) {
        const svgCode = svgRef.current.innerHTML || ''
        const jsxString = svgCode
          .replace(/stroke-width/g, 'strokeWidth')
          .replace(/fill-rule/g, 'fillRule')
          .replace(/clip-path/g, 'clipPath')
          .replace(/stroke-linecap/g, 'strokeLinecap')
          .replace(/stroke-linejoin/g, 'strokeLinejoin')
          .replace(/fill="none"/g, "fill={'none'}")
          .replace(/fill="([^"]+?)"/g, 'fill={"$1"}')
          .replace(/stroke="([^"]+?)"/g, 'stroke={"$1"}')
          .replace(/color="([^"]+)"/g, 'color={"$1"}')
          .replace(/width="([^"]+)"/g, 'width={$1}')
          .replace(/height="([^"]+)"/g, 'height={$1}')
          .replace(/r="([^"]+)"/g, 'r={$1}')
          .replace(/cx="([^"]+)"/g, 'cx={$1}')
          .replace(/cy="([^"]+)"/g, 'cy={$1}')
        await navigator.clipboard.writeText(jsxString)
        setIsOpenAlert(false)
        setIsOpenAlert(true)

        setTimeout(() => {
          setIsOpenAlert(false)
        }, 3000)
      }
    } catch (err) {
      console.error('Falha ao copiar o SVG: ', err)
    }
  }

  async function handleClickCopySVGToReact(selectedIconName: string) {
    try {
      if (svgRef.current) {
        const svgCode =
          svgRef.current.innerHTML.replace(
            /<svg([^>]*)>/,
            '<svg$1 {...props}>',
          ) || ''
        const jsxString = svgCode
          .replace(/stroke-width/g, 'strokeWidth')
          .replace(/fill-rule/g, 'fillRule')
          .replace(/clip-path/g, 'clipPath')
          .replace(/stroke-linecap/g, 'strokeLinecap')
          .replace(/stroke-linejoin/g, 'strokeLinejoin')
          .replace(/fill="none"/g, "fill={'none'}")
          .replace(/fill="([^"]+?)"/g, 'fill={"$1"}')
          .replace(/stroke="([^"]+?)"/g, 'stroke={"$1"}')
          .replace(/color="([^"]+)"/g, 'color={"$1"}')
          .replace(/width="([^"]+)"/g, 'width={$1}')
          .replace(/height="([^"]+)"/g, 'height={$1}')
          .replace(/r="([^"]+)"/g, 'r={$1}')
          .replace(/cx="([^"]+)"/g, 'cx={$1}')
          .replace(/cy="([^"]+)"/g, 'cy={$1}')
        await navigator.clipboard.writeText(jsxString)
        const componentString = `const ${selectedIconName} = (props: React.SVGProps<SVGSVGElement>) => (
  ${jsxString}
);
        `
        await navigator.clipboard.writeText(componentString)
        setIsOpenAlert(true)

        setTimeout(() => {
          setIsOpenAlert(false)
        }, 3000)
      }
    } catch (err) {
      console.error('Falha ao copiar o SVG: ', err)
    }
  }

  async function handleClickDownloadReact() {
    try {
      if (svgRef.current) {
        const svgCode =
          svgRef.current.innerHTML.replace(
            /<svg([^>]*)>/,
            '<svg$1 {...props}>',
          ) || ''
        const jsxString = svgCode
          .replace(/stroke-width/g, 'strokeWidth')
          .replace(/fill-rule/g, 'fillRule')
          .replace(/clip-path/g, 'clipPath')
          .replace(/stroke-linecap/g, 'strokeLinecap')
          .replace(/stroke-linejoin/g, 'strokeLinejoin')
          .replace(/fill="none"/g, "fill={'none'}")
          .replace(/fill="([^"]+?)"/g, 'fill={"$1"}')
          .replace(/stroke="([^"]+?)"/g, 'stroke={"$1"}')
          .replace(/color="([^"]+)"/g, 'color={"$1"}')
          .replace(/width="([^"]+)"/g, 'width={$1}')
          .replace(/height="([^"]+)"/g, 'height={$1}')
          .replace(/r="([^"]+)"/g, 'r={$1}')
          .replace(/cx="([^"]+)"/g, 'cx={$1}')
          .replace(/cy="([^"]+)"/g, 'cy={$1}')
        await navigator.clipboard.writeText(jsxString)
        const componentString = `
import React from "react";
        
const ${selectedIconName} = (props: React.SVGProps<SVGSVGElement>) => (
  ${jsxString}
);
        
export default ${selectedIconName};
        `
        const blob = new Blob([componentString], { type: 'text/typescript' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${selectedIconName}.tsx`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Falha ao baixar arquivo JSX: ', err)
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
            {visibleChunks.some((chunkIndex) => {
              const chunk = iconsNamesChunks[chunkIndex]
              return (
                chunk &&
                chunk.some(() => {
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
                  return filteredVariants.length > 0
                })
              )
            }) ? (
              visibleChunks.map((chunkIndex, chunkVisibleIndex) => {
                const chunk = iconsNamesChunks[chunkIndex]
                if (!chunk) return null

                return (
                  <React.Fragment key={chunkIndex}>
                    {chunk.map((iconName, iconIndex) => {
                      const IconComponent = Icon[
                        iconName as keyof typeof Icon
                      ] as React.ComponentType<IconProps>

                      const filteredVariants = iconVariants.filter(
                        (variant) => {
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
                        },
                      )

                      return filteredVariants.map((variant, variantIndex) => {
                        const totalIndex =
                          chunkVisibleIndex *
                            iconsPerPage *
                            filteredVariants.length +
                          iconIndex * filteredVariants.length +
                          variantIndex

                        const iconLeftPosition =
                          (totalIndex % columns) * iconWidth + 10
                        const iconTopPosition =
                          18 + Math.floor(totalIndex / columns) * 100
                        const isLastIcon =
                          chunkIndex === visibleChunks.length - 1 &&
                          iconIndex ===
                            iconsNamesChunks[chunkIndex].length - 1 &&
                          variantIndex === filteredVariants.length - 1

                        return (
                          <div
                            key={`${iconName}-${variant.fillType}-${variant.cornerStyle}-${variantIndex}`}
                            className="absolute h-[82px] w-[100px] pr-[18px] flex flex-col mr-1"
                            style={{
                              left: `${iconLeftPosition}px`,
                              top: `${iconTopPosition}px`,
                            }}
                            ref={isLastIcon ? observerRef : null}
                            onClick={() =>
                              handleOpenModal(
                                iconName,
                                variant.fillType,
                                variant.cornerStyle,
                                <IconComponent
                                  iconSize={parseInt(sizeIcon)}
                                  fillType={variant.fillType}
                                  cornerStyle={variant.cornerStyle}
                                  strokeWidth={1.5}
                                />,
                              )
                            }
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
                                  strokeWidth={1.5}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      })
                    })}
                  </React.Fragment>
                )
              })
            ) : (
              <div className="flex flex-col gap-3 rounded justify-center items-center text-center p-10 h-full">
                <svg
                  width="54"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3068 48.6932C48.9658 49.3523 50.0342 49.3523 50.6932 48.6932C51.3523 48.0342 51.3523 46.9658 50.6932 46.3068L48.3068 48.6932ZM42.9068 43.2932L48.3068 48.6932L50.6932 46.3068L45.2932 40.9068L42.9068 43.2932ZM48.4875 32.65C48.4875 25.0078 42.2922 18.8125 34.65 18.8125V22.1875C40.4283 22.1875 45.1125 26.8717 45.1125 32.65H48.4875ZM34.65 18.8125C27.0078 18.8125 20.8125 25.0078 20.8125 32.65H24.1875C24.1875 26.8717 28.8717 22.1875 34.65 22.1875V18.8125ZM20.8125 32.65C20.8125 40.2922 27.0078 46.4875 34.65 46.4875V43.1125C28.8717 43.1125 24.1875 38.4283 24.1875 32.65H20.8125ZM34.65 46.4875C42.2922 46.4875 48.4875 40.2922 48.4875 32.65H45.1125C45.1125 38.4283 40.4283 43.1125 34.65 43.1125V46.4875Z"
                    fill="#141B34"
                  />
                  <path
                    opacity="0.4"
                    d="M4.5 22.75L15.75 22.7501"
                    stroke="#141B34"
                    stroke-width="3.375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 38.5H15.75"
                    stroke="#141B34"
                    stroke-width="3.375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M4.5 7H42.75"
                    stroke="#141B34"
                    stroke-width="3.375"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 className="text-black text-center text-xl not-italic font-semibold leading-[normal]">
                  No search results
                </h3>
                <span className="text-[#495055] text-center text-[15px] not-italic font-normal leading-[normal]">
                  Please check the spelling or try alternative keyword
                </span>
              </div>
            )}
          </div>
        </div>
      </main>
      {!visibleChunks.some((chunkIndex) => {
        const chunk = iconsNamesChunks[chunkIndex]
        return (
          chunk &&
          chunk.some(() => {
            const filteredVariants = iconVariants.filter((variant) => {
              const matchesFillType =
                selectedSearchTab.tabTitle === 'All' ||
                variant.fillType === selectedSearchTab.tabTitle.toLowerCase()
              const matchesCornerStyle =
                !selectedSearchTab.tabSubtitle ||
                variant.cornerStyle ===
                  selectedSearchTab.tabSubtitle
                    .replace(/[()]/g, '')
                    .toLowerCase()

              return matchesFillType && matchesCornerStyle
            })
            return filteredVariants.length > 0
          })
        )
      }) && <Footer />}

      {isOpenAlert && (
        <Toast.Provider
          swipeDirection="up"
          label="Notification Copy to Clipboard"
        >
          <Toast.Root
            open={isOpenAlert}
            onOpenChange={setIsOpenAlert}
            forceMount
            className="fixed left-[50%] top-[50px] z-50 translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top[48%] bg-black text-white border-2 border-neutral-700 shadow-lg w-[356px] h-[53px] flex items-center gap-[6px] rounded-lg p-4 text-sm"
          >
            <Toast.Title>
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
            </Toast.Title>
            <Toast.Description asChild>
              <div className="flex flex-col gap-1/2">
                <span className="font-bold leading-none text-white">
                  Copied to clipboard
                </span>
              </div>
            </Toast.Description>
          </Toast.Root>
          <Toast.Viewport className="fixed left-[50%] top-[50px] z-50 translate-x-[-50%] translate-y-[-50%]" />
        </Toast.Provider>
      )}

      {isOpenModal && (
        <div className="relative z-40">
          <div className="fixed bottom-0 z-30 overflow-y-auto left-1/2 transform -translate-x-1/2 px-10">
            <div className="flex items-end justify-center text-center sm:items-end sm:p-0">
              <div className="relative transform sm:rounded-lg bg-white px-4 pb-4 pt-2 border text-left shadow-2xl transition-all sm:my-8 w-screen sm:max-w-[80rem]">
                <div className="flex flex-col sm:flex-row gap-5 p-2 select-none">
                  <div className="w-full flex items-center justify-center h-[216px] sm:w-[240px] sm:h-[216px] rounded-lg bg-gray-100/50 relative">
                    <div className={`w-[${sizeIcon}] h-[${sizeIcon}]`}>
                      <div className="scale-[3]">
                        <div ref={svgRef}>
                          {React.cloneElement(
                            selectedIconComponent as React.ReactElement,
                            {
                              iconSize: sizeIcon,
                              color: colorIcon,
                              strokeWidth: strokeWidthIcon,
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <div
                        onClick={() => {
                          navigator.clipboard.writeText(selectedIconName)
                          setIsOpenAlert(true)
                        }}
                      >
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger>
                              <h3 className="text-grey-800 text-sm not-italic font-semibold">
                                {selectedIconName
                                  .replace(/Icon$/, '')
                                  .replace(/([a-z])([A-Z])/g, '$1-$2')
                                  .replace(/(\d+)/g, '-$1')
                                  .toLowerCase()}
                              </h3>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-80 bg-comet-950 text-white py-2 px-4 text-xs shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
                                side="top"
                                align="center"
                                sideOffset={5}
                              >
                                Copy icon name
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </div>
                      <button
                        className="w-6 h-6 flex items-center justify-center hover:opacity-70"
                        onClick={handleCloseModal}
                      >
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
                          className="lucide lucide-x h-full w-full text-[#141B34]"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-xs text-gray-500 mt-auto">
                      {selectedFillType.charAt(0).toUpperCase() +
                        selectedFillType.slice(1)}
                      <img
                        src="https://cdn.hugeicons.com/icons/record-solid-sharp.svg"
                        alt="space"
                        className="w-2 h-2 opacity-45"
                      />
                      {selectedCornerStyle.charAt(0).toUpperCase() +
                        selectedCornerStyle.slice(1)}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
                      {(selectedFillType === 'stroke' ||
                        selectedFillType === 'duotone' ||
                        selectedFillType === 'twotone') && (
                        <DropdownMenu.Root>
                          <DropdownMenu.Trigger asChild>
                            <button
                              className="flex text-xs items-center justify-between rounded-md border border-gray-300 px-3 py-2  placeholder:text-grey-700 focus:outline-none focus:ring-none gap-2 h-10"
                              type="button"
                            >
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-auto h-6 w-6 shrink-0 opacity-80"
                              >
                                <path
                                  d="M3 7.25879L21 7.25879"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M3 12.2588L21 12.2588"
                                  stroke="#141B34"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M3 17.2588L21 17.2588"
                                  stroke="#141B34"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                />
                              </svg>
                              <span className="text-ellipsis overflow-w-hidden">
                                {strokeWidthIcon}
                              </span>
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                className="ml-auto h-6 w-6 shrink-0 opacity-80"
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
                              className="z-50 rounded-md border bg-white text-grey-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-full p-0 ml-6 h-[130px]"
                              sideOffset={5}
                            >
                              <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-grey-900">
                                <div className="overflow-hidden p-1 text-grey-950">
                                  <div role="group">
                                    <div className="relative overflow-scroll h-screen max-h-80 text-grey-600">
                                      <DropdownMenu.RadioGroup
                                        value={strokeWidthIcon.toString()}
                                        onValueChange={(value) =>
                                          setStrokeWidthIcon(Number(value))
                                        }
                                        className="text-center"
                                      >
                                        <h3 className="font-bold text-sm">
                                          Stroke
                                        </h3>
                                        <DropdownMenu.RadioItem
                                          value="1.5"
                                          className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                        >
                                          1.5
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
                                          value="2"
                                          className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                        >
                                          2
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
                                          value="3"
                                          className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                        >
                                          3
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
                      )}
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                          <button
                            className="flex text-xs items-center justify-between rounded-md border border-gray-300 px-3 py-2  placeholder:text-grey-700 focus:outline-none focus:ring-none gap-2 w-[90px] h-10"
                            type="button"
                          >
                            <span className="text-ellipsis overflow-w-hidden">
                              {sizeIcon}px
                            </span>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              className="ml-auto h-6 w-6 shrink-0 opacity-80"
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
                            className="z-50 rounded-md border bg-white text-grey-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-full p-0 ml-6"
                            sideOffset={5}
                          >
                            <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-grey-900">
                              <div className="overflow-hidden p-1 text-grey-950">
                                <div role="group">
                                  <div className="relative overflow-scroll h-screen max-h-80 text-grey-600">
                                    <DropdownMenu.RadioGroup
                                      value={sizeIcon}
                                      onValueChange={setSizeIcon}
                                      className="text-center"
                                    >
                                      <h3 className="font-bold text-sm">
                                        Size
                                      </h3>
                                      <DropdownMenu.RadioItem
                                        value="16"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        16px
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
                                        value="20"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        20px
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
                                        value="24"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        24px
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
                                        value="28"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        28px
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
                                        value="32"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        32px
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
                                        value="36"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        36px
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
                                        value="40"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        40px
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
                                        value="44"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        44px
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
                                        value="48"
                                        className="relative flex cursor-default gap-2 select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[state=checked]:bg-gray-100 data-[state=checked]:text-grey-800"
                                      >
                                        48px
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
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                          <button
                            className="flex text-xs items-center justify-between rounded-md border border-gray-300 px-3 py-2  placeholder:text-grey-700 focus:outline-none focus:ring-none gap-2 w-[125px] h-10"
                            type="button"
                          >
                            <div
                              className="h-4 w-4 rounded border"
                              style={{
                                backgroundColor: colorIcon,
                              }}
                            />
                            <span className="text-ellipsis overflow-w-hidden text-sm font-bold">
                              {colorIcon}
                            </span>
                          </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.Content
                            className="z-50 rounded-md border bg-white text-grey-900 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 p-0 ml-6"
                            sideOffset={5}
                          >
                            <SketchPicker
                              className="z-50"
                              color={colorIcon}
                              onChangeComplete={handledChangeComplete}
                            />
                          </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Root>
                      <div className="shrink-0 w-0.5 h-6 mx-2 rounded-full bg-grey-50 hidden md:block" />
                      <div className="flex items-center gap-2 px-2.5 py-1 border rounded-lg text-grey-500 text-xs h-10 cursor-pointer">
                        <div className="border-r pr-2 text-[10px] font-bold w-[80px]">
                          FONT CLASS
                        </div>
                        <div className="no-bar whitespace-nowrap overflow-x-auto">
                          <span className="flex w-max space-x-4">
                            hgi-{selectedFillType} hgi-
                            {selectedIconName
                              .replace(/Icon$/, '')
                              .toLowerCase()}
                          </span>
                        </div>
                        <div
                          className="border-l pl-2"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `hgi-${selectedFillType} hgi-${selectedIconName
                                .replace(/Icon$/, '')
                                .toLowerCase()}`,
                            )
                            setIsOpenAlert(true)
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="21"
                            height="21"
                            fill="none"
                            color="#7B8772"
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
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                      <svg
                        width="24"
                        height="24"
                        className="text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.86646 22.25 12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.1335 22.25 11.9428 22.25H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572C1.74999 9.86647 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.86647 1.74999 12.0572 1.75ZM14.25 13.2C14.25 12.123 15.123 11.25 16.2 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H16.2C15.9515 12.75 15.75 12.9515 15.75 13.2V13.8C15.75 14.0485 15.9515 14.25 16.2 14.25H16.8C17.877 14.25 18.75 15.123 18.75 16.2V16.8C18.75 17.877 17.877 18.75 16.8 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H16.8C17.0485 17.25 17.25 17.0485 17.25 16.8V16.2C17.25 15.9515 17.0485 15.75 16.8 15.75H16.2C15.123 15.75 14.25 14.877 14.25 13.8V13.2ZM8.5 11.25C8.08579 11.25 7.75 11.5858 7.75 12C7.75 12.4142 8.08579 12.75 8.5 12.75H9.75V18C9.75 18.4142 10.0858 18.75 10.5 18.75C10.9142 18.75 11.25 18.4142 11.25 18V12.75H12.5C12.9142 12.75 13.25 12.4142 13.25 12C13.25 11.5858 12.9142 11.25 12.5 11.25H8.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <label
                        className="text-sm text-gray-500 leading-none flex items-center"
                        htmlFor="typescript"
                      >
                        Prefer TypeScript
                      </label>
                      <Checkbox.Root
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-[#E7EDE1] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:bg-[#E7EDE1] data-[state=checked]:text-gray-800"
                        defaultChecked
                      >
                        <Checkbox.Indicator className="flex items-center justify-center text-current">
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
                            className="lucide lucide-check h-4 w-4 text-black"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </div>
                    <div className="flex flex-col lg:items-center lg:flex-row gap-3">
                      <div className="flex gap-2">
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger
                              asChild
                              onClick={handleClickCopySVG}
                            >
                              <button className="inline-flex relative font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#EEEEEE] text-black justify-start items-center gap-2 h-10 hover:bg-[#EEEEEE]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="21"
                                  height="21"
                                  fill="none"
                                  color="#7B8772"
                                  className="text-[#828485]"
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
                                <span>SVG</span>
                              </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-80 bg-comet-950 text-white py-2 px-4 text-xs shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
                                side="top"
                                align="center"
                                sideOffset={5}
                              >
                                Copy
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger
                              asChild
                              onClick={handleClickCopySVGToJSX}
                            >
                              <button className="inline-flex relative font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#EEEEEE] text-black justify-start items-center gap-2 h-10 hover:bg-[#EEEEEE]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="21"
                                  height="21"
                                  fill="none"
                                  color="#7B8772"
                                  className="text-[#828485]"
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
                                <span>JSX</span>
                              </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-80 bg-comet-950 text-white py-2 px-4 text-xs shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
                                side="top"
                                align="center"
                                sideOffset={5}
                              >
                                Copy
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger
                              asChild
                              onClick={() =>
                                handleClickCopySVGToReact(selectedIconName)
                              }
                            >
                              <button className="inline-flex relative font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#EEEEEE] text-black justify-start items-center gap-2 h-10 hover:bg-[#EEEEEE]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="21"
                                  height="21"
                                  fill="none"
                                  color="#7B8772"
                                  className="text-[#828485]"
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
                                <span>REACT</span>
                              </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-80 bg-comet-950 text-white py-2 px-4 text-xs shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
                                side="top"
                                align="center"
                                sideOffset={5}
                              >
                                Copy
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </div>
                      <div className="shrink-0 w-0.5 h-6 mx-2 rounded-full bg-grey-50 hidden md:block" />
                      <div className="flex gap-2 group">
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger
                              asChild
                              onClick={() => handleClickDownloadSVG()}
                            >
                              <button className="inline-flex relative font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#EEEEEE] text-black justify-start items-center gap-2 h-10 hover:bg-[#EEEEEE]">
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  color="#7B8772"
                                  className="text-[#828485]"
                                >
                                  <path
                                    d="M12.25 15.1294V5.12939M12.25 15.1294C11.5498 15.1294 10.2415 13.1351 9.75 12.6294M12.25 15.1294C12.9502 15.1294 14.2585 13.1351 14.75 12.6294"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M5.25 19.1294H19.2501"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span>SVG</span>
                              </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-80 bg-comet-950 text-white py-2 px-4 text-xs shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
                                side="top"
                                align="center"
                                sideOffset={5}
                              >
                                Download
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger
                              asChild
                              onClick={() => handleClickDownloadReact()}
                            >
                              <button className="inline-flex relative font-bold whitespace-nowrap rounded-lg text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#EEEEEE] text-black justify-start items-center gap-2 h-10 hover:bg-[#EEEEEE]">
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  color="#7B8772"
                                  className="text-[#828485]"
                                >
                                  <path
                                    d="M12.25 15.1294V5.12939M12.25 15.1294C11.5498 15.1294 10.2415 13.1351 9.75 12.6294M12.25 15.1294C12.9502 15.1294 14.2585 13.1351 14.75 12.6294"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M5.25 19.1294H19.2501"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span>REACT</span>
                              </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded-lg max-w-80 bg-comet-950 text-white py-2 px-4 text-xs shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-50"
                                side="top"
                                align="center"
                                sideOffset={5}
                              >
                                Download
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
