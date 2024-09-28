import Link from 'next/link'

interface StyleIconsCardProps {
  styleName: string
  description: string
  image1: string
  image2: string
}

export function StyleIconCard({
  styleName,
  description,
  image1,
  image2,
}: StyleIconsCardProps) {
  return (
    <div className="px-5 lg:px-0 max-w-[80rem] mx-auto">
      <h3 className="text-grey-900 text-3xl lg:text-5xl font-bold leading-relaxed tracking-[-0.4px]">
        {styleName} icons
      </h3>
      <p className="max-w-[910px] text-grey-600 mt-3 text-base sm:text-lg font-normal sm:leading-7 tracking-[0.5px]">
        {description}
      </p>
      <div className="flex gap-3 lg:gap-5 mt-7 sm:mt-9">
        <Link
          target="_blank"
          href="/icons"
          className="relative font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 flex h-14 justify-center items-center gap-2 px-6 py-3 rounded-xl"
        >
          Explore the icons
        </Link>
        <Link
          href="https://www.npmjs.com/package/@houstonicons/pro"
          className="relative font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-grey-900 hover:bg-grey-100 flex h-14 justify-center items-center gap-2 px-6 py-3 rounded-xl border border-solid border-grey-950"
        >
          Go pro
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 mt-10 sm:mt-[54px]">
        <img src={image1} alt="" className="h-auto w-full" />
        <img src={image2} alt="" className="h-auto w-full" />
      </div>
    </div>
  )
}
