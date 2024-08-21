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
    {},
    {},
    {},
    {},
    {},
  ],
  Sharp: [
    {},
    {},
  ],
  Standard: [
    {},
    {},
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
    }, 3000)

    return () => clearInterval(interval)
  }, [activeTab])

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
            src="https://hugeicons.com/use-cases/styles-box/Rounded%2001.png"
            alt=""
            className="h-[330px] rounded-[12px] object-fill sm:h-[430px]"
          />
          <img
            src="https://hugeicons.com/use-cases/styles-box/Big%20Icons%2001.png"
            alt=""
            className="-ml-10 sm:-ml-14 w-[120px] rounded-[12px] object-fill sm:w-[180px]"
          />
        </div>
      </div>
    </div>
  )
}
