interface ListProps {
  children: React.ReactNode
}

export function ListItem({ children }: ListProps) {
  return <li className="my-2">{children}</li>
}

export function UnorderedList({ children }: ListProps) {
  return (
    <ul className="mt-6 list-disc first:mt-0 ml-6 mr-6 text-zinc-800 dark:text-slate-100">
      {children}
    </ul>
  )
}

export function OrderedList({ children }: ListProps) {
  return (
    <ol className="mt-6 list-decimal first:mt-0 ml-6 mr-6 text-zinc-800 dark:text-slate-100">
      {children}
    </ol>
  )
}
