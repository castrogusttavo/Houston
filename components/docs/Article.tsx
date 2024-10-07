interface ArticleProps {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return (
    <main className="w-full break-words flex min-h-[calc(100vh-(4rem))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]">
      <article className="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
        {children}
      </article>
    </main>
  )
}
