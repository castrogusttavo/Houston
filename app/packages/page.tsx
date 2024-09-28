import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { DialogPromotion } from '@/components/DialogPromotion'
import { CookieToast } from '@/components/CookieToast'

export default function PackagePage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main>
        <div className="mx-auto text-center pt-16 pb-[100px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-grey-950 mb-4">
            Houston Icons Pro packages
          </h1>
          <p className="text-xl sm:text-2xl text-grey-400">
            Expertly crafted top-notch icon library, made for designers and
            developers
          </p>
          <section className="max-w-5xl mx-auto px-4 mt-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/react.svg"
                    alt="react"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">React</h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  A Houston Icons Pro library package for React applications
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                  href="/docs"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                >
                  Pro guide
                </Link>
                <Link
                  href="https://www.npmjs.com/package/@houstonicons/react"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                >
                  Use for free
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/next.svg"
                    alt="next"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">Next</h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  A Houston Icons Pro library package for Next applications
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                  href="/"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                >
                  Pro guide
                </Link>
                <Link
                  href="https://www.npmjs.com/package/@houstonicons/react"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                >
                  Use for free
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/vue.svg"
                    alt="vue"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">Vue</h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  A Houston Icons Pro library package for Vue applications
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                  href="/docs"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                >
                  Pro guide
                </Link>
                <Link
                  href="https://www.npmjs.com/package/@houstonicons/vue"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                >
                  Use for free
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/angular.svg"
                    alt="angular"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">Angular</h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  A Houston Icons Pro library package for Angular applications
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                  href="/docs"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                >
                  Pro guide
                </Link>
                <Link
                  href="https://www.npmjs.com/package/@houstonicons/angular"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                >
                  Use for free
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/astro.svg"
                    alt="angular"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">Astro</h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  A Houston Icons Pro library package for Astro applications
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                  href="/docs"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                >
                  Pro guide
                </Link>
                <Link
                  href="/https://www.npmjs.com/package/@houstonicons/astro"
                  className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                >
                  Use for free
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/reactNative.svg"
                    alt="reactNative"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">
                  React Native
                </h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  A Houston Icons Pro library package for React Native
                  applications
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Link
                    href="/docs"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                  >
                    Pro guide
                  </Link>
                  <Link
                    href="/https://www.npmjs.com/package/@houstonicons/react-native"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                  >
                    Use for free
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
              <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                <div className="flex items-center justify-between w-full">
                  <img
                    src="./logos/more.svg"
                    alt="more"
                    className="max-w-20 object-cover"
                  />
                </div>
                <h3 className="mt-6 tracking-[-1px] font-medium">
                  More on the way...
                </h3>
                <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                  We are on the way to make more packages...
                </p>
              </div>
            </div>
          </section>
          <div className="mt-[100px] py-[100px]">
            <h2 className="text-2xl sm:text-4xl font-bold text-grey-900 text-center pb-14">
              Additional options
            </h2>
            <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
                <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                  <div className="flex items-center justify-between w-full">
                    <img
                      src="./logos/webfont.svg"
                      alt="webFont"
                      className="max-w-20 object-cover"
                    />
                  </div>
                  <h3 className="mt-6 tracking-[-1px] font-medium">
                    Icon font
                  </h3>
                  <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                    A Houston Icons Pro library provides Icon file
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Link
                    href="/docs"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                  >
                    Pro guide
                  </Link>
                  <Link
                    href="http://houstonicons.com.br/free-icon-font"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                  >
                    Use for free
                  </Link>
                </div>
              </div>
              <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
                <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                  <div className="flex items-center justify-between w-full">
                    <img
                      src="./logos/figma.svg"
                      alt="figma"
                      className="max-w-20 object-cover"
                    />
                  </div>
                  <h3 className="mt-6 tracking-[-1px] font-medium">
                    Figma file
                  </h3>
                  <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                    A Houston Icons Pro library provides Figma file
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Link
                    href="https://www.npmjs.com/package/@houstonicons/react"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                  >
                    Buy now
                  </Link>
                  <Link
                    href="https://www.figma.com/community/file/1414792481171455704"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                  >
                    Use for free
                  </Link>
                </div>
              </div>
              <div className="rounded-md border border-grey-50 border-solid box-border overflow-hidden flex flex-col py-6 pl-5 pr-6 relative leading-normal tracking-normal">
                <div className="self-stretch flex flex-col items-start justify-start text-left text-2xl text-grey-600">
                  <div className="flex items-center justify-between w-full">
                    <img
                      src="./logos/svg.svg"
                      alt="svg"
                      className="max-w-20 object-cover"
                    />
                  </div>
                  <h3 className="mt-6 tracking-[-1px] font-medium">SVG</h3>
                  <p className="mt-2 self-stretch text-base tracking-tighter text-grey-500">
                    A Houston Icons Pro library provides SVG files
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Link
                    href="https://www.npmjs.com/package/@houstonicons/pro"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-sm mt-[2rem] leading-0"
                  >
                    Go Pro
                  </Link>
                  <Link
                    href="/icons"
                    className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-grey-100  hover:bg-grey-50 h-12 px-4 max-w-[233px] font-bold gap-3 text-black text-sm mt-[2rem] leading-0"
                  >
                    Use for free
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <DialogPromotion />
      <CookieToast />
      <Footer />
    </div>
  )
}
