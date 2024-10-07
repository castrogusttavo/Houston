interface TextProps {
  children?: React.ReactNode
  href?: string
  dateTime?: string
  id?: string
}

export function H1({ children, id }: TextProps) {
  return (
    <h1
      id={id}
      className="group mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 scroll-mt-20"
    >
      {children}
    </h1>
  )
}

export function H2({ children, id }: TextProps) {
  return (
    <h2
      id={id}
      className="group font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 dark:border-blue-100/10 scroll-mt-20"
    >
      {children}
    </h2>
  )
}

export function H3({ children, id }: TextProps) {
  return (
    <h3
      id={id}
      className="group font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl scroll-mt-20"
    >
      {children}
    </h3>
  )
}

export function Paragraph({ children }: TextProps) {
  return (
    <p className="group mt-6 leading-7 first:mt-0 text-zinc-800 dark:text-slate-100">
      {children}
    </p>
  )
}

export function LinkText({ children, href }: TextProps) {
  return (
    <a
      href={href}
      className="text-blue-600 underline decoration-from-font [text-underline-position:from-font]"
    >
      {children}
    </a>
  )
}

export function Anchor({ href }: TextProps) {
  return (
    <a
      href={href}
      className="ml-1 opacity-0 group-hover:opacity-100 px-1 text-[#d1d5db] dark:text-[#404040]"
    >
      #
    </a>
  )
}

export function DateBlock({ dateTime, children }: TextProps) {
  return (
    <div className="mt-12 mb-8 block text-xs text-end text-grey-500 ltr:text-right rtl:text-left dark:text-grey-300">
      Last updated on <time dateTime={dateTime}>{children}</time>
    </div>
  )
}
