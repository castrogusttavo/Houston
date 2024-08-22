'use client'

import { useState, useEffect } from 'react'

const tabs = ['Rounded', 'Sharp', 'Standard']

interface TagsProps {
  Rounded: string[]
  Sharp: string[]
  Standard: string[]
}

const tagsStyles: TagsProps = {
  Rounded: ['Stroke', 'Twotone', 'Duotone', 'Bulk', 'Solid'],
  Sharp: ['Stroke', 'Solid'],
  Standard: ['Stroke', 'Solid'],
}

const styleTagImages = {
  Rounded: [
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Rounded%2001.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/Big%20Icons%2001.png',
    },
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Rounded%2005.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/Big%20Icons%2005.png',
    },
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Rounded%2004.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/Big%20Icons%2004.png',
    },
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Rounded%2002.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/Big%20Icons%2002.png',
    },
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Rounded%2003.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/Big%20Icons%2003.png',
    },
  ],
  Sharp: [
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Sharp%2001.png',
      egIcon:
        'https://hugeicons.com/use-cases/styles-box/Big%20Icons%20S%2002.png',
    },
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Sharp%2002.png',
      egIcon:
        'https://hugeicons.com/use-cases/styles-box/Big%20Icons%20S%2001.png',
    },
  ],
  Standard: [
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Standard%2001.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/02.png',
    },
    {
      sideBar: 'https://hugeicons.com/use-cases/styles-box/Standard%2002.png',
      egIcon: 'https://hugeicons.com/use-cases/styles-box/01.png',
    },
  ],
}

export function ExplorerStyles() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeTagIndex, setActiveTagIndex] = useState(0)
  const activeTab = tabs[activeIndex] as keyof TagsProps

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTagIndex((prevIndex) => {
        const stylesLength = tagsStyles[activeTab].length
        return (prevIndex + 1) % stylesLength
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [activeTab])

  const currentImages = styleTagImages[activeTab][activeTagIndex]

  return (
    <div className="my-28 border-y border-gray-100 py-28 antialiased">
      <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-[-1px] text-grey-900 sm:text-3xl sm:leading-[30px]">
        36,000+ beautiful icons with many popular styles. Explore how they look
        like below...
      </h1>
      <div className="relative mx-auto mb-5 mt-14 grid max-w-max grid-cols-3 gap-x-1 rounded-2xl bg-white p-1 text-center text-md font-medium leading-5 ring-1 ring-inset ring-gray-200 focus:border-none focus:outline-0">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index)
                setActiveTagIndex(0)
              }}
              className={`border-gray-300 text-grey-800 group relative cursor-pointer flex items-center border-b-2 border-l border-r border-t justify-center rounded-xl px-6 py-2.5 ${isActive ? 'bg-white' : 'bg-gray-200 border-transparent'}`}
            >
              {index === activeIndex && (
                <svg
                  width="55"
                  height="20"
                  viewBox="0 0 55 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-[27px] left-5 group-hover:block block"
                >
                  <path
                    d="M7 9.3031C13.5 13 12.5 12.5 19 16"
                    stroke="#3B82F6"
                    stroke-width="3"
                    stroke-linecap="round"
                    opacity="1"
                    pathLength="1"
                    stroke-dashoffset="0px"
                    stroke-dasharray="1px 1px"
                  />
                  <path
                    d="M52 6.3031C48 10.2031 45.7 12.6031 42.5 15.8031"
                    stroke="#3B82F6"
                    stroke-width="3"
                    stroke-linecap="round"
                    opacity="1"
                    pathLength="1"
                    stroke-dashoffset="0px"
                    stroke-dasharray="1px 1px"
                  />
                  <path
                    d="M26.5 4C28 6.5 27.5 6 30.4906 10.6061"
                    stroke="#3B82F6"
                    stroke-width="3"
                    stroke-linecap="round"
                    opacity="1"
                    pathLength="1"
                    stroke-dashoffset="0px"
                    stroke-dasharray="1px 1px"
                  />
                </svg>
              )}
              <span>{tab}</span>
            </button>
          )
        })}
      </div>
      <div className="mx-auto flex max-w-[910px] flex-col items-center justify-between bg-[#F3F4F6] px-20 py-10 sm:flex-row sm:rounded-3xl">
        <div className="flex flex-col space-y-3">
          {tagsStyles[activeTab].map((style, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center space-x-4"
              onClick={() => setActiveTagIndex(index)}
            >
              {activeTagIndex === index ? (
                <svg className="h-[28px] w-[28px]" viewBox="0 0 50 50">
                  <circle
                    className="text-blue-100"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke-width="7"
                    stroke="currentColor"
                    transform="rotate(-90 25 25)"
                  />
                  <circle
                    className="text-blue-500 animate-dash"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke-width="5"
                    stroke-dasharray="125.66370614359172"
                    stroke-dashoffset="126"
                    stroke-linecap="round"
                    stroke="currentColor"
                    transform="rotate(-90 25 25)"
                  />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle
                    cx="13.9942"
                    cy="13.6667"
                    r="13.5735"
                    fill="#E2E8F0"
                  />
                  <path
                    d="M11.4944 18.6666C11.4944 18.6666 16.4944 14.9842 16.4944 13.6666C16 12.349 11.4944 8.66663 11.4944 8.66663"
                    stroke="#6B7280"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              <p className="text-2xl text-grey-800">{style}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 -ml-7 sm:-ml-0 flex items-center sm:mt-0">
          <img
            src={currentImages.sideBar}
            alt=""
            className="h-[330px] rounded-[12px] object-fill sm:h-[430px]"
          />
          <img
            src={currentImages.egIcon}
            alt=""
            className="-ml-10 sm:-ml-14 w-[120px] rounded-[12px] object-fill sm:w-[180px]"
          />
        </div>
      </div>
    </div>
  )
}
