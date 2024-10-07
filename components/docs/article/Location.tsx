import Link from 'next/link'
import React from 'react'

interface BreadcrumbsProps {
  crumbs: Array<string>
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <div className="mt-1.5 flex items-center gap-1 overflow-hidden text-sm text-grey-500 dark:text-grey-300">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <div
            className={`whitespace-nowrap transition-colors min-w-[24px] overflow-hidden text-ellipsis ${
              index === crumbs.length - 1
                ? 'font-semibold text-grey-800 dark:text-zinc-50'
                : ''
            }`}
          >
            {crumb}
          </div>
          {index < crumbs.length - 1 && (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-3.5 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

interface TabsButtonProps {
  children: React.ReactNode
}

export function TabsButton({ children }: TabsButtonProps) {
  return (
    <button className="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-grey-600 hover:border-grey-200 hover:text-black dark:text-grey-200 dark:hover:border-neutral-800 dark:hover:text-white">
      {children}
    </button>
  )
}

interface TabsProps {
  children: React.ReactNode
}

export function Tabs({ children }: TabsProps) {
  return (
    <div className="overflow-x-auto overflow-y-hidden overscroll-x-auto">
      <div className="mt-4 flex w-max min-w-full border-b border-grey-200 pb-px dark:border-neutral-800">
        {children}
      </div>
    </div>
  )
}

interface PaginationButtonProps {
  children: React.ReactNode
  orientation: 'left' | 'right'
  href: string
}

export function PaginationButton({
  children,
  orientation,
  href,
}: PaginationButtonProps) {
  return (
    <Link
      href={href}
      className="flex max-w-[50%] items-center gap-1 py-4 text-base font-medium text-grey-600 transition-colors break-words hover:text-blue-600 dark:text-grey-100 dark:hover:text-white md:text-lg pr-4 pl-4"
    >
      {orientation === 'left' && (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="inline h-5 shrink-0 rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
      {children}
      {orientation === 'right' && (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="inline h-5 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </Link>
  )
}

interface PaginationProps {
  children: React.ReactNode
}

export function Pagination({ children }: PaginationProps) {
  return (
    <div
      className={`mb-8 flex items-center ${React.Children.count(children) === 1 ? 'justify-end' : 'justify-between'} border-t pt-8 border-neutral-200/70 dark:border-blue-100/10 print:hidden`}
    >
      {children}
    </div>
  )
}
