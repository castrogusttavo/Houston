import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Figma Icon Library by Houston Pro - 27,000+ Icons',
}

export default function FigmaIconLibraryPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main className="relative mx-auto mb-12 flex flex-col items-center overflow-x-hidden pt-16 sm:pt-20">
        <div className="max-w-[80rem] flex flex-col items-center">
          <h2 className="mb-2 w-[343px] text-center font-bold leading-[44px] tracking-[-1px] text-grey-950 sm:w-[659.172px] sm:text-5xl sm:leading-[64px]">
            The beautiful and flexible figma icon library
          </h2>
          <p className="max-w-[900px] text-center text-lg font-normal leading-[26px] tracking-[-0.4px] text-grey-400">
            Tired of searching for the perfect Figma icon library? Look no
            further than Houston Icons Pro. We bring you 27,000+ beautiful and
            customizable icons carefully curated for all your Figma icon design
            needs
          </p>
        </div>
        <div className="mt-7 flex space-x-3 sm:mt-10">
          <a
            href="https://www.figma.com/community/file/1414792481171455704"
            className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 h-12 rounded-lg px-6"
          >
            Figma file preview
          </a>
          <a
            href="https://www.npmjs.com/package/@houstonicons/react"
            className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-white text-black hover:bg-gray-50 hover:text-grey-900 h-12 rounded-lg px-6 border-black"
          >
            Explore the icons
          </a>
        </div>
        <img
          src="/figma-icon-library/hero.svg"
          alt="Figma icon library"
          className="mt-16 w-full scale-125 sm:mt-0 sm:scale-100"
        />
        <div className="mt-[6rem] space-y-20 md:mt-[10rem]">
          <div className="relative w-full">
            <div className="h-full">
              <div className="px-6 lg:px-0 flex flex-col text-center lg:text-left lg:flex-row justify-between items-center w-full max-w-[80rem]">
                <div className="lg:pr-[8rem]">
                  <h3 className="text-grey-900 mx-auto lg:mx-0 text-2xl sm:text-3xl max-w-[350px] font-bold leading-[30px] sm:leading-[40px] tracking-[-1px]">
                    Seamlessly switch between icon variants
                  </h3>
                  <p className="mx-auto mt-3 sm:mt-4 text-base lg:text-lg lg:leading-6 text-grey-500">
                    Houston Icons ensures each icon variant maintains consistent
                    quality, easily accessible through the Figma property panel
                    for a seamless design experience.
                  </p>
                  <div className="mt-7 sm:mt-11 flex flex-col justify-center sm:justify-start sm:flex-row gap-y-3 sm:gap-x-2 max-w-[80rem]">
                    <a className="w-full lg:w-auto">
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-gray-50 text-black hover:text-grey-900 h-10 w-full lg:w-auto flex items-center justify-center p-6 rounded-lg border-[1.5px] border-[#E3E3E3] text-base">
                        Buy now
                      </button>
                    </a>
                    <a className="w-full lg:w-auto">
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#E7E7E7] hover:bg-[#E7E7E7]/80 text-black hover:text-grey-900 h-10 w-full lg:w-auto flex items-center justify-center p-6 rounded-lg text-base">
                        Explore the icons
                      </button>
                    </a>
                  </div>
                </div>
                <video
                  src="https://cdn.hugeicons.com/videos/figma-icon-library/change-variants.mp4"
                  autoPlay
                  loop
                  className="border border-[#C9ED1] w-full h-auto mt-7 lg:w-[50%] rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="h-full">
              <div className="px-6 lg:px-0 flex flex-col text-center lg:text-left lg:flex-row justify-between items-center w-full max-w-[80rem]">
                <div className="lg:pr-[8rem]">
                  <h3 className="text-grey-900 mx-auto lg:mx-0 text-2xl sm:text-3xl max-w-[350px] font-bold leading-[30px] sm:leading-[40px] tracking-[-1px]">
                    Any size, color and stroke
                  </h3>
                  <p className="mx-auto mt-3 sm:mt-4 text-base lg:text-lg lg:leading-6 text-grey-500">
                    Seamless icon resizing with a tap of &aposK&apos from your
                    keyboard for perfect scaling. The best practice of scaling
                    to keep the stroke responsive.
                  </p>
                  <div className="mt-7 sm:mt-11 flex flex-col justify-center sm:justify-start sm:flex-row gap-y-3 sm:gap-x-2 max-w-[80rem]">
                    <a className="w-full lg:w-auto">
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-gray-50 text-black hover:text-grey-900 h-10 w-full lg:w-auto flex items-center justify-center p-6 rounded-lg border-[1.5px] border-[#E3E3E3] text-base">
                        Buy now
                      </button>
                    </a>
                    <a className="w-full lg:w-auto">
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#E7E7E7] hover:bg-[#E7E7E7]/80 text-black hover:text-grey-900 h-10 w-full lg:w-auto flex items-center justify-center p-6 rounded-lg text-base">
                        Explore the icons
                      </button>
                    </a>
                  </div>
                </div>
                <video
                  src="https://cdn.hugeicons.com/videos/figma-icon-library/fit-to-any-size.mp4"
                  autoPlay
                  loop
                  className="border border-[#C9ED1] w-full h-auto mt-7 lg:w-[50%] rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[6rem] space-y-20 md:mt-[10rem] max-w-[80rem]">
          <div className="max-w-[80rem] flex w-full flex-col items-center px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-center text-2xl font-bold tracking-[-0.4px] text-grey-950 sm:text-4xl sm:leading-[120%]">
                Creative benefits of the Figma icons
              </h2>
              <p className="mt-2 max-w-[791px] text-center text-lg font-normal leading-[26px] text-zinc-800 tracking-[-0.4px] sm:mt-sm">
                Whether you&apos;re using NPM, CDN, SVG, or JSX, Houston Pro has
                you covered. The massive library of 27,000+ beautifully designed
                react icons seamlessly integrates with your React projects.
                Customize size, color, and stroke with ease.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full">
                <div className="h-full transform">
                  <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-lg md:grid-cols-2 lg:grid-cols-3">
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.4"
                                cx="20"
                                cy="16"
                                r="4"
                                fill="#73AC00"
                              />
                              <path
                                d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                                fill="white"
                              />
                              <path
                                d="M16 12V20H12C9.79086 20 8 18.2091 8 16C8 13.7909 9.79086 12 12 12H16Z"
                                fill="white"
                              />
                              <path
                                opacity="0.4"
                                d="M12 28C14.2091 28 16 26.2091 16 24V20H12C9.79086 20 8 21.7909 8 24C8 26.2091 9.79086 28 12 28Z"
                                fill="#73AC00"
                              />
                              <circle
                                cx="20"
                                cy="16"
                                r="4"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12 28C14.2091 28 16 26.2091 16 24V20H12C9.79086 20 8 21.7909 8 24C8 26.2091 9.79086 28 12 28Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16 12V20H12C9.79086 20 8 18.2091 8 16C8 13.7909 9.79086 12 12 12H16Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16 4V12H12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4H16Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M16 4V12H12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4H16Z"
                                fill="#73AC00"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Designed in Figma
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Versatile for seamless adaptation in Figma.
                            Organized with versatile variants, our icons, offer
                            flexibility to suit every design need.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M2.66797 17.9048V10.6667H29.3346V17.9048C29.3346 23.2923 29.3346 25.9861 27.599 27.6597C25.8633 29.3334 23.0698 29.3334 17.4828 29.3334H14.5198C8.9328 29.3334 6.1393 29.3334 4.40363 27.6597C2.66797 25.9861 2.66797 23.2923 2.66797 17.9048Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M3.95002 7.58983L2.66797 10.6667H29.3346L28.0526 7.58983C27.0583 5.20351 26.5611 4.01035 25.5534 3.33855C24.5457 2.66675 23.2531 2.66675 20.668 2.66675H11.3346C8.74946 2.66675 7.45687 2.66675 6.44917 3.33855C5.44147 4.01035 4.94432 5.20351 3.95002 7.58983Z"
                                fill="white"
                              />
                              <path
                                d="M2.66797 17.9048V10.6667H29.3346V17.9048C29.3346 23.2923 29.3346 25.9861 27.599 27.6597C25.8633 29.3334 23.0698 29.3334 17.4828 29.3334H14.5198C8.9328 29.3334 6.1393 29.3334 4.40363 27.6597C2.66797 25.9861 2.66797 23.2923 2.66797 17.9048Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.66797 10.6667L3.95002 7.58983C4.94432 5.20351 5.44147 4.01035 6.44917 3.33855C7.45687 2.66675 8.74946 2.66675 11.3346 2.66675H20.668C23.2531 2.66675 24.5457 2.66675 25.5534 3.33855C26.5611 4.01035 27.0583 5.20351 28.0526 7.58983L29.3346 10.6667"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                              <path
                                d="M16.002 10.6667V2.66675"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                              <path
                                d="M13.334 16.0001H18.6673"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            27,000+ icons and counting
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Crafted with meticulous attention to detail, our
                            high-quality icons enhance interfaces with stunning
                            precision.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.1324 24.6663L16.3965 16.34L20.9147 11.4584L29.1473 18.2295C28.7378 20.662 27.6696 22.8708 26.1324 24.6663Z"
                                fill="white"
                              />
                              <path
                                opacity="0.3"
                                d="M15.9993 2.66675C8.63555 2.66675 2.66602 8.63628 2.66602 16.0001C2.66602 20.0552 4.47625 23.6874 7.33268 26.1329L11.5245 21.6039L16.3962 16.3404L20.9144 11.4588L25.4326 6.5772C23.0194 4.16128 19.6839 2.66675 15.9993 2.66675Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M7.33203 26.1332C9.66273 28.1286 12.69 29.3338 15.9987 29.3338C17.4568 29.3338 18.8603 29.0997 20.1736 28.6671L11.5239 21.6042L7.33203 26.1332Z"
                                fill="white"
                              />
                              <path
                                opacity="0.3"
                                d="M20.1731 28.6675L11.5234 21.6046L16.3951 16.3412L26.131 24.6675C24.5649 26.4968 22.5121 27.8971 20.1731 28.6675Z"
                                fill="#73AC00"
                              />
                              <path
                                opacity="0.3"
                                d="M29.3323 16.0011C29.3323 12.3219 27.8421 8.99069 25.4323 6.57825L20.9141 11.4599L29.1467 18.2309C29.2688 17.5059 29.3323 16.7609 29.3323 16.0011Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M29.3327 16.0001C29.3327 23.3639 23.3631 29.3334 15.9993 29.3334C8.63555 29.3334 2.66602 23.3639 2.66602 16.0001C2.66602 8.63628 8.63555 2.66675 15.9993 2.66675C23.3631 2.66675 29.3327 8.63628 29.3327 16.0001Z"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                              <path
                                d="M6.66602 26.6667L25.3327 6.66675"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M21.3327 12.0001L29.3327 18.4705M16.5498 16.5414L25.8128 24.4847M10.666 20.8897L19.9993 28.6668"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Fast transition between styles
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Effortlessly select from 7 distinct icon styles,
                            eliminating the need for author, saving time and
                            energy, all while preserving icon overrides.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.4"
                                cx="16.0013"
                                cy="16.0001"
                                r="13.3333"
                                fill="#73AC00"
                              />
                              <circle
                                cx="16.0013"
                                cy="16.0001"
                                r="13.3333"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                              <path
                                d="M10.5842 21.418C9.89443 20.7283 10.0091 17.7979 10.0091 17.7979M10.5842 21.418C11.274 22.1078 14.2042 21.993 14.2042 21.993M10.5842 21.418L14.6686 17.3335M21.4199 10.5823C20.7301 9.89249 17.7998 10.0073 17.7998 10.0073M21.4199 10.5823C22.1097 11.272 21.9948 14.2023 21.9948 14.2023M21.4199 10.5823L17.3353 14.6668"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Scalability
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            All icons are in vector format, allowing for smooth
                            scaling to various sizes without compromising
                            quality.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M6.96898 15.106L16.3 3.12876C17.0297 2.19204 18.3976 2.77507 18.3976 4.02284V13.2933C18.3976 14.0408 18.934 14.6467 19.5957 14.6467H24.1342C25.1652 14.6467 25.7147 16.0199 25.0336 16.8942L15.7026 28.8714C14.9729 29.8081 13.605 29.2251 13.605 27.9773L13.605 18.7068C13.605 17.9594 13.0686 17.3535 12.4069 17.3535H7.86844C6.83745 17.3535 6.28789 15.9803 6.96898 15.106Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M6.96898 15.106L16.3 3.12876C17.0297 2.19204 18.3976 2.77507 18.3976 4.02284V13.2933C18.3976 14.0408 18.934 14.6467 19.5957 14.6467H24.1342C25.1652 14.6467 25.7147 16.0199 25.0336 16.8942L15.7026 28.8714C14.9729 29.8081 13.605 29.2251 13.605 27.9773L13.605 18.7068C13.605 17.9594 13.0686 17.3535 12.4069 17.3535H7.86844C6.83745 17.3535 6.28789 15.9803 6.96898 15.106Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Optimized performance
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Enjoy a responsive and lightweight design
                            experience, ensuring quick load times and optimal
                            performance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="24"
                              height="26"
                              viewBox="0 0 24 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M5.33203 21C4.08952 21 3.46827 21 2.97821 20.797C2.3248 20.5264 1.80567 20.0072 1.53502 19.3538C1.33203 18.8638 1.33203 18.2425 1.33203 17C1.33203 15.7575 1.33203 15.1362 1.53502 14.6462C1.80567 13.9928 2.3248 13.4736 2.97821 13.203C3.46826 13 4.08952 13 5.33203 13C6.57454 13 7.1958 13 7.68585 13.203C8.33926 13.4736 8.85839 13.9928 9.12904 14.6462C9.33203 15.1362 9.33203 15.7575 9.33203 17C9.33203 18.2425 9.33203 18.8638 9.12904 19.3538C8.85839 20.0072 8.33926 20.5264 7.68585 20.797C7.1958 21 6.57454 21 5.33203 21Z"
                                fill="#73AC00"
                              />
                              <path
                                opacity="0.4"
                                d="M18.666 13C17.4235 13 16.8022 13 16.3122 12.797C15.6588 12.5264 15.1397 12.0072 14.869 11.3538C14.666 10.8638 14.666 10.2425 14.666 9C14.666 7.75749 14.666 7.13623 14.869 6.64618C15.1397 5.99277 15.6588 5.47364 16.3122 5.20299C16.8022 5 17.4235 5 18.666 5C19.9085 5 20.5298 5 21.0198 5.20299C21.6732 5.47364 22.1924 5.99277 22.463 6.64618C22.666 7.13623 22.666 7.75749 22.666 9C22.666 10.2425 22.666 10.8638 22.463 11.3538C22.1924 12.0072 21.6732 12.5264 21.0198 12.797C20.5298 13 19.9085 13 18.666 13Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M5.33203 25L5.33203 21"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.666 25L18.666 17"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.666 5L18.666 1"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M5.33203 9L5.33203 1"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M5.33203 21C4.08952 21 3.46827 21 2.97821 20.797C2.3248 20.5264 1.80567 20.0072 1.53502 19.3538C1.33203 18.8638 1.33203 18.2425 1.33203 17C1.33203 15.7575 1.33203 15.1362 1.53502 14.6462C1.80567 13.9928 2.3248 13.4736 2.97821 13.203C3.46826 13 4.08952 13 5.33203 13C6.57454 13 7.1958 13 7.68585 13.203C8.33926 13.4736 8.85839 13.9928 9.12904 14.6462C9.33203 15.1362 9.33203 15.7575 9.33203 17C9.33203 18.2425 9.33203 18.8638 9.12904 19.3538C8.85839 20.0072 8.33926 20.5264 7.68585 20.797C7.1958 21 6.57454 21 5.33203 21Z"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                              <path
                                d="M18.666 13C17.4235 13 16.8022 13 16.3122 12.797C15.6588 12.5264 15.1397 12.0072 14.869 11.3538C14.666 10.8638 14.666 10.2425 14.666 9C14.666 7.75749 14.666 7.13623 14.869 6.64618C15.1397 5.99277 15.6588 5.47364 16.3122 5.20299C16.8022 5 17.4235 5 18.666 5C19.9085 5 20.5298 5 21.0198 5.20299C21.6732 5.47364 22.1924 5.99277 22.463 6.64618C22.666 7.13623 22.666 7.75749 22.666 9C22.666 10.2425 22.666 10.8638 22.463 11.3538C22.1924 12.0072 21.6732 12.5264 21.0198 12.797C20.5298 13 19.9085 13 18.666 13Z"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Customization options
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Tailor to fit your project&apos;s unique style with
                            easy customization features, ensuring a personalized
                            touch.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.0441 21.2347C13.5769 21.9367 9.73007 23.3701 12.073 25.1638C13.2176 26.04 14.4923 26.6667 16.0949 26.6667L25.2397 26.6667C26.8424 26.6667 28.1171 26.04 29.2616 25.1638C31.6046 23.3701 27.7577 21.9367 26.2906 21.2347C22.8501 19.5884 18.4845 19.5884 15.0441 21.2347Z"
                                fill="white"
                              />
                              <path
                                opacity="0.4"
                                d="M5.97508 21.4816C4.40312 22.324 0.281516 24.0441 2.79185 26.1966C4.01812 27.248 5.38388 28 7.10097 28L16.899 28C18.6161 28 19.9819 27.248 21.2082 26.1966C23.7185 24.0441 19.5969 22.324 18.0249 21.4816C14.3387 19.5061 9.66132 19.5061 5.97508 21.4816Z"
                                fill="#73AC00"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M26 10.6666C26 12.8758 24.2091 14.6666 22 14.6666C19.7909 14.6666 18 12.8758 18 10.6666C18 8.45749 19.7909 6.66663 22 6.66663C24.2091 6.66663 26 8.45749 26 10.6666Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M17.3327 9.99996C17.3327 12.9455 14.9449 15.3333 11.9993 15.3333C9.05383 15.3333 6.66602 12.9455 6.66602 9.99996C6.66602 7.05444 9.05383 4.66663 11.9993 4.66663C14.9449 4.66663 17.3327 7.05444 17.3327 9.99996Z"
                                fill="white"
                              />
                              <path
                                d="M24.8208 26.6666H25.4744C27.0075 26.6666 28.227 25.9681 29.3219 24.9914C32.1034 22.5101 25.5648 20 23.3327 20M20.666 6.75832C20.9688 6.69826 21.2832 6.66663 21.6057 6.66663C24.0322 6.66663 25.9993 8.45749 25.9993 10.6666C25.9993 12.8758 24.0322 14.6666 21.6057 14.6666C21.2832 14.6666 20.9688 14.635 20.666 14.5749"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                              <path
                                d="M5.97508 21.4815C4.40312 22.324 0.281516 24.0441 2.79185 26.1965C4.01812 27.248 5.38388 28 7.10096 28L16.899 28C18.6161 28 19.9819 27.248 21.2082 26.1965C23.7185 24.0441 19.5969 22.324 18.0249 21.4815C14.3387 19.5061 9.66132 19.5061 5.97508 21.4815Z"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                              <path
                                d="M17.3333 9.99996C17.3333 12.9455 14.9455 15.3333 12 15.3333C9.05448 15.3333 6.66667 12.9455 6.66667 9.99996C6.66667 7.05444 9.05448 4.66663 12 4.66663C14.9455 4.66663 17.3333 7.05444 17.3333 9.99996Z"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Team collaboration
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Foster collaboration with colleagues by seamlessly
                            incorporating icons into Figma&apos;s collaborative
                            design environment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M10.668 29.3333H24.0013C26.5155 29.3333 27.7725 29.3333 28.5536 28.5522C29.3346 27.7712 29.3346 26.5141 29.3346 24V22.6666C29.3346 20.1525 29.3346 18.8954 28.5536 18.1143C27.7725 17.3333 26.5155 17.3333 24.0013 17.3333L20.0013 17.3333C17.4871 17.3333 16.2301 17.3333 15.449 16.5522C14.668 15.7712 14.668 14.5141 14.668 12V7.99996C14.668 5.4858 14.668 4.22872 13.8869 3.44767C13.1059 2.66663 11.8488 2.66663 9.33464 2.66663L8.0013 2.66663C5.48714 2.66663 4.23007 2.66663 3.44902 3.44768C2.66797 4.22872 2.66797 5.4858 2.66797 7.99996L2.66797 21.3333C2.66797 25.1045 2.66797 26.9901 3.83954 28.1617C5.01112 29.3333 6.89673 29.3333 10.668 29.3333Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M13.3346 22C13.3346 23.8409 11.8423 25.3333 10.0013 25.3333C8.16035 25.3333 6.66797 23.8409 6.66797 22C6.66797 20.159 8.16035 18.6666 10.0013 18.6666C11.8423 18.6666 13.3346 20.159 13.3346 22Z"
                                fill="white"
                              />
                              <path
                                d="M10.668 29.3333H24.0013C26.5155 29.3333 27.7725 29.3333 28.5536 28.5522C29.3346 27.7712 29.3346 26.5141 29.3346 24V22.6666C29.3346 20.1525 29.3346 18.8954 28.5536 18.1143C27.7725 17.3333 26.5155 17.3333 24.0013 17.3333L20.0013 17.3333C17.4871 17.3333 16.2301 17.3333 15.449 16.5522C14.668 15.7712 14.668 14.5141 14.668 12V7.99996C14.668 5.4858 14.668 4.22872 13.8869 3.44767C13.1059 2.66663 11.8488 2.66663 9.33464 2.66663L8.0013 2.66663C5.48714 2.66663 4.23007 2.66663 3.44902 3.44768C2.66797 4.22872 2.66797 5.4858 2.66797 7.99996L2.66797 21.3333C2.66797 25.1045 2.66797 26.9901 3.83954 28.1617C5.01112 29.3333 6.89673 29.3333 10.668 29.3333Z"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.3346 22C13.3346 23.8409 11.8423 25.3333 10.0013 25.3333C8.16035 25.3333 6.66797 23.8409 6.66797 22C6.66797 20.159 8.16035 18.6666 10.0013 18.6666C11.8423 18.6666 13.3346 20.159 13.3346 22Z"
                                stroke="#73AC00"
                                stroke-width="2"
                              />
                              <path
                                d="M8.66797 13.3333L8.66797 2.66663"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                              <path
                                d="M18.6673 23.3333L29.334 23.3333"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Consistent Size and Stroke
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Icons crafted on a 24px grid, featuring a default
                            stroke thickness of 1.5px for precision and
                            uniformity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="z-10">
                      <div className="duration-400 group h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)] border border-[#EFEFEF] z-10">
                        <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                          <div>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M22.5073 6.66663L12.2583 6.66663C6.96063 6.66663 2.66602 10.8453 2.66602 16C2.66602 17.983 3.30159 19.8215 4.38535 21.3333C5.13001 22.6477 7.80343 24.4127 9.21064 25.2291C9.29879 25.2802 9.34287 25.3058 9.39393 25.3196C9.44499 25.3333 9.49768 25.3333 9.60307 25.3333L19.7404 25.3333C25.0381 25.3333 29.3327 21.1546 29.3327 16C29.3327 14.017 28.6971 12.1784 27.6133 10.6666C26.2964 8.6241 23.9525 7.23343 22.8109 6.72867C22.7434 6.69882 22.7097 6.6839 22.6688 6.67526C22.6279 6.66663 22.5877 6.66663 22.5073 6.66663Z"
                                fill="#73AC00"
                              />
                              <path
                                d="M21.8506 4L23.1877 5.30098C23.785 5.8822 24.0837 6.17281 23.9786 6.41974C23.8735 6.66667 23.4511 6.66667 22.6063 6.66667L12.2583 6.66667C6.96063 6.66667 2.66602 10.8453 2.66602 16C2.66602 17.983 3.30159 19.8216 4.38535 21.3333"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.1487 28L8.81167 26.699C8.21432 26.1178 7.91564 25.8271 8.02076 25.5802C8.12588 25.3333 8.54827 25.3333 9.39305 25.3333L19.741 25.3333C25.0387 25.3333 29.3333 21.1546 29.3333 16C29.3333 14.017 28.6978 12.1784 27.614 10.6666"
                                stroke="#73AC00"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                            Free & regular updates
                          </h3>
                          <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                            Stay current with a regularly updated library,
                            introducing new icons and categories to keep your
                            designs fresh and on-trend.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[6rem] flex w-full flex-col items-center px-5 md:mt-[10rem]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-center text-2xl font-bold tracking-[-0.4px] text-grey-950 sm:text-4xl sm:leading-[120%]">
              Designed for consistency
            </h2>
            <p className="mt-3 max-w-[789px] text-center text-lg font-normal leading-[26px] tracking-[-0.4px] text-grey-400">
              Not all Figma icon packs value beauty. Houston Icons is designed
              for both beauty and ease of use, making it truly exceptional.
              Plus, we offer seven popular icon styles.
            </p>
          </div>
          <img
            src="https://hugeicons.com/figma-icon-library/consistency-icons.svg"
            alt="Consistency"
            className="mt-10 w-full scale-150 sm:mt-0 sm:scale-100"
          />
        </div>
        <div className="max-w-[80rem] mx-auto mt-1 flex w-full flex-col gap-7 px-6 md:mt-2 lg:gap-[54px] lg:px-0">
          <div className="z-10 w-full text-center max-lg:max-w-full lg:text-left">
            <div className="flex items-center gap-[54px] max-lg:flex-col max-lg:gap-0">
              <h1 className="w-full max-w-[492px] text-2xl font-bold tracking-tighter text-grey-950 max-lg:mt-10 lg:text-4xl lg:leading-[48px]">
                Imagine a game changing <br /> Figma plugin
              </h1>
              <div className="mt-3 flex w-[68%] flex-col max-lg:ml-0 max-lg:w-full lg:ml-5 lg:mt-0">
                <p className="text-base font-normal leading-[25px] text-grey-500 lg:max-w-[650px]">
                  Boost your design efficiency with this amazing Figma plugin
                  that every designer needs. Instantly search and magically swap
                  icons of any size, color, and stroke with incredible ease. Why
                  settle for less when you can enhance your productivity?
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center">
            <div className="absolute -left-[150px] -to-[150px] z-0 h-[317px] w-[317px] shrink-0 rounded-full blur-[45px] [background:linear-gradient(184deg, #FEFFFE_23.18%,#99FF89_62.74%,#FFD600_92%)]" />
            <div className="relative w-full h-screen">
              <video
                src="/figma-icon-library/figmaplugin.mp4"
                autoPlay
                playsInline
                loop
                className="border border-[#C9CED1] rounded-2xl w-full h-full object-cover blur-[10px]"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mx-auto max-w-max rounded-lg bg-softis-light px-3 py-1 text-center text-sm font-normal text-zinc-50 sm:text-base">
                Get Ready for an Amazing Figma Plugin - Coming Soon!
              </span>
            </div>
            <div className="mt-7 flex items-center justify-center gap-x-6 sm:mt-10">
              <a
                href="https://www.figma.com/community/file/1414792481171455704"
                className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 h-12 rounded-lg px-6"
              >
                Try it free
              </a>
              <a
                href="https://www.npmjs.com/package/@houstonicons/pro"
                className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-white text-black hover:bg-gray-50 hover:text-grey-900 h-12 rounded-lg px-6 border-black"
              >
                Go Pro
              </a>
            </div>
            <p className="mt-5 text-center text-base font-normal leading-[25px]">
              No credit card or commitment required
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
