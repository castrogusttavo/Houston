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
          <a className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 h-12 rounded-lg px-6">
            Figma file preview
          </a>
          <a className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-white text-black hover:bg-gray-50 hover:text-grey-900 h-12 rounded-lg px-6 border-black">
            Explore the icons
          </a>
        </div>
        <img
          src="https://hugeicons.com/figma-icon-library/hero.svg"
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
                    Seamless icon resizing with a tap of &apos;K&apos; from your
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
        <div className="mt-[6rem] space-y-20 md:mt-[10rem]">
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
          <div className="relative w-full">
            <div className="h-full transform">
              <div className="mt-7 sm:mt-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80rem]">
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                        Versatile for seamless adaptation in Figma. Organized
                        with versatile variants, our icons, offer flexibility to
                        suit every design need.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                        eliminating the need for author, saving time and energy,
                        all while preserving icon overrides.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                        scaling to various sizes without compromising quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                        Enjoy a responsive and lightweight design experience,
                        ensuring quick load times and optimal performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                        Tailor to fit your project&apos;s unique style with easy
                        customization features, ensuring a personalized touch.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
                        Icons crafted on a 24px grid, featuring a default stroke
                        thickness of 1.5px for precision and uniformity.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
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
        <div className="mt-[6rem] flex w-full flex-col items-center px-5 md:mt-[10rem]">
          <div className="max-w-[80rem] mx-auto text-center">
            <h2 className="text-center text-2xl font-bold not-italic tracking-[-0.4px] text-[#101225] sm:text-[40px] sm:leading-[120%]">
              57 popular icon categories
            </h2>
            <p className="mt-3 max-w-[789px] text-center text-lg font-normal not-italic leading-[26px] tracking-[-0.4px] text-[#56606D] sm:mt-sm">
              Boost your Figma designs with 27,000+ expertly designed icons in
              Houston Pro. Explore a big icon pack of carefully crafted icon
              categories, all conveniently organized within Figma with the best
              practice.
            </p>
          </div>
          <div className="mt-10">
            <div className="relative z-20 overflow-hidden">
              <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll">
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2731 4.5V20.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.27307 12.5H20.2731"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Add + remove</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2731 13.1483L16.6439 10.7775C16.9367 10.4847 17.0831 10.3383 17.1614 10.1803C17.3103 9.8798 17.3103 9.52696 17.1614 9.22644C17.0831 9.06849 16.9367 8.92207 16.6439 8.62923C16.351 8.33638 16.2046 8.18996 16.0467 8.11169C15.7461 7.96277 15.3933 7.96277 15.0928 8.11169C14.9348 8.18996 14.7884 8.33638 14.4956 8.62923L12.1248 11M14.2731 13.1483L6.05061 21.3708C5.75777 21.6636 5.61134 21.81 5.45339 21.8883C5.15287 22.0372 4.80003 22.0372 4.49951 21.8883C4.34156 21.81 4.19514 21.6636 3.9023 21.3708C3.60946 21.0779 3.46303 20.9315 3.38476 20.7736C3.23584 20.473 3.23584 20.1202 3.38476 19.8197C3.46303 19.6617 3.60946 19.5153 3.9023 19.2225L12.1248 11M14.2731 13.1483L12.1248 11"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.7731 3L19.6626 3.29873C19.5176 3.69044 19.4451 3.88629 19.3023 4.02917C19.1594 4.17204 18.9635 4.24452 18.5718 4.38946L18.2731 4.5L18.5718 4.61054C18.9635 4.75548 19.1594 4.82796 19.3023 4.97083C19.4451 5.11371 19.5176 5.30956 19.6626 5.70127L19.7731 6L19.8836 5.70127C20.0286 5.30956 20.1011 5.11371 20.2439 4.97083C20.3868 4.82796 20.5827 4.75548 20.9744 4.61054L21.2731 4.5L20.9744 4.38946C20.5827 4.24452 20.3868 4.17204 20.2439 4.02917C20.1011 3.88629 20.0286 3.69044 19.8836 3.29873L19.7731 3Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.7731 13L19.6626 13.2987C19.5176 13.6904 19.4451 13.8863 19.3023 14.0292C19.1594 14.172 18.9635 14.2445 18.5718 14.3895L18.2731 14.5L18.5718 14.6105C18.9635 14.7555 19.1594 14.828 19.3023 14.9708C19.4451 15.1137 19.5176 15.3096 19.6626 15.7013L19.7731 16L19.8836 15.7013C20.0286 15.3096 20.1011 15.1137 20.2439 14.9708C20.3868 14.828 20.5827 14.7555 20.9744 14.6105L21.2731 14.5L20.9744 14.3895C20.5827 14.2445 20.3868 14.172 20.2439 14.0292C20.1011 13.8863 20.0286 13.6904 19.8836 13.2987L19.7731 13Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7731 3L10.6626 3.29873C10.5176 3.69044 10.4451 3.88629 10.3023 4.02917C10.1594 4.17204 9.96351 4.24452 9.5718 4.38946L9.27307 4.5L9.5718 4.61054C9.96351 4.75548 10.1594 4.82796 10.3023 4.97083C10.4451 5.11371 10.5176 5.30956 10.6626 5.70127L10.7731 6L10.8836 5.70127C11.0286 5.30956 11.1011 5.11371 11.2439 4.97083C11.3868 4.82796 11.5827 4.75548 11.9744 4.61054L12.2731 4.5L11.9744 4.38946C11.5827 4.24452 11.3868 4.17204 11.2439 4.02917C11.1011 3.88629 11.0286 3.69044 10.8836 3.29873L10.7731 3Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Ai</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.43144 11.991C5.35796 13.387 5.44243 14.873 4.1952 15.8084C3.61471 16.2438 3.27307 16.927 3.27307 17.6527C3.27307 18.6508 4.05487 19.5 5.07307 19.5H19.4731C20.4913 19.5 21.2731 18.6508 21.2731 17.6527C21.2731 16.927 20.9315 16.2438 20.351 15.8084C19.1037 14.873 19.1882 13.387 19.1147 11.991C18.9232 8.35223 15.9169 5.5 12.2731 5.5C8.62924 5.5 5.62295 8.35222 5.43144 11.991Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7731 3.625C10.7731 4.45343 11.4447 5.5 12.2731 5.5C13.1015 5.5 13.7731 4.45343 13.7731 3.625C13.7731 2.79657 13.1015 2.5 12.2731 2.5C11.4447 2.5 10.7731 2.79657 10.7731 3.625Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15.2731 19.5C15.2731 21.1569 13.93 22.5 12.2731 22.5C10.6162 22.5 9.27307 21.1569 9.27307 19.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Alert</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7148 15.053L10.4089 17.7531C9.41428 18.9177 8.91697 19.5 8.27307 19.5C7.62917 19.5 7.13186 18.9177 6.13725 17.7531L3.83136 15.053C2.7925 13.8366 2.27307 13.2284 2.27307 12.5C2.27307 11.7716 2.7925 11.1634 3.83136 9.94699L6.13725 7.24694C7.13186 6.08231 7.62917 5.5 8.27307 5.5C8.91697 5.5 9.41428 6.08231 10.4089 7.24694L12.7148 9.94699C13.7537 11.1634 14.2731 11.7716 14.2731 12.5C14.2731 13.2284 13.7537 13.8366 12.7148 15.053Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.2731 19.5L16.7849 15.1032C17.777 13.861 18.2731 13.2398 18.2731 12.5C18.2731 11.7602 17.777 11.139 16.7849 9.89683L13.2731 5.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2731 19.5L20.7849 15.1032C21.777 13.861 22.2731 13.2398 22.2731 12.5C22.2731 11.7602 21.777 11.139 20.7849 9.89683L17.2731 5.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Animation</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2727 11.5L6.27271 18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.8138 6.58278L14.572 6.69567C12.5601 6.87857 11.5542 6.97002 11.3175 7.62388C11.0807 8.27774 11.795 8.99198 13.2235 10.4205L14.3523 11.5493C15.7808 12.9778 16.4951 13.6921 17.1489 13.4553C17.8028 13.2186 17.8942 12.2127 18.0771 10.2008L18.19 8.95902C18.3001 7.74766 18.3552 7.14198 17.993 6.77979C17.6308 6.4176 17.0251 6.47266 15.8138 6.58278Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Arrow</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.27307 21.5C8.27307 20.0858 8.27307 19.3787 8.71241 18.9393C9.15175 18.5 9.85886 18.5 11.2731 18.5H13.2731C14.6873 18.5 15.3944 18.5 15.8338 18.9393C16.2731 19.3787 16.2731 20.0858 16.2731 21.5V22.5H8.27307V21.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 13.5V18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.27307 22.5H18.2731"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3097 3.36651L14.3656 5.49573C14.5095 5.79212 14.8935 6.07642 15.2175 6.13086L17.1313 6.45145C18.3551 6.65712 18.6431 7.55236 17.7612 8.4355L16.2734 9.93563C16.0214 10.1897 15.8834 10.6796 15.9614 11.0305L16.3873 12.8875C16.7233 14.3574 15.9494 14.926 14.6595 14.1578L12.8657 13.0871C12.5418 12.8935 12.0078 12.8935 11.6779 13.0871L9.88403 14.1578C8.60017 14.926 7.82026 14.3513 8.15622 12.8875L8.58217 11.0305C8.66017 10.6796 8.52218 10.1897 8.27021 9.93563L6.78237 8.4355C5.90647 7.55236 6.18844 6.65712 7.4123 6.45145L9.32609 6.13086C9.64406 6.07642 10.028 5.79212 10.172 5.49573L11.2279 3.36651C11.8038 2.21116 12.7397 2.21116 13.3097 3.36651Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Award</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.27295 18.4808V10.2075C4.27295 6.57416 4.27295 4.75748 5.44452 3.62874C6.6161 2.5 8.50171 2.5 12.2729 2.5C16.0441 2.5 17.9298 2.5 19.1013 3.62874C20.2729 4.75748 20.2729 6.57416 20.2729 10.2075V18.4808C20.2729 20.7867 20.2729 21.9396 19.5001 22.3523C18.0034 23.1514 15.1961 20.4852 13.8629 19.6824C13.0897 19.2168 12.7031 18.984 12.2729 18.984C11.8427 18.984 11.4561 19.2168 10.6829 19.6824C9.34975 20.4852 6.54242 23.1514 5.0458 22.3523C4.27295 21.9396 4.27295 20.7867 4.27295 18.4808Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.27295 7.5H20.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Bookmark</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2729 10.5L18.4223 11.1448C19.7955 11.5568 20.4822 11.7628 20.8776 12.2942C21.273 12.8256 21.2729 13.5425 21.2729 14.9761V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.27295 9.5H11.2729M8.27295 13.5H11.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 22.5V19.5C12.2729 18.5572 12.2729 18.0858 11.98 17.7929C11.6871 17.5 11.2157 17.5 10.2729 17.5H9.27295C8.33014 17.5 7.85874 17.5 7.56584 17.7929C7.27295 18.0858 7.27295 18.5572 7.27295 19.5V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 22.5H22.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.27295 22.5V7.21724C3.27295 4.70649 3.27295 3.45111 4.06413 2.82824C4.85532 2.20537 6.02037 2.54355 8.35047 3.2199L13.3504 4.67122C14.7565 5.07937 15.4596 5.28344 15.8662 5.83965C16.2729 6.39587 16.2729 7.15344 16.2729 8.66857V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Building</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27295 12.5V21.5M17.2729 12.5V21.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.27295 12.5H21.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.77295 14.25C2.77295 10.5966 2.77295 8.76992 3.88594 7.63496C4.99894 6.5 6.79028 6.5 10.3729 6.5H14.1729C17.7556 6.5 19.5469 6.5 20.6599 7.63496C21.7729 8.76992 21.7729 10.5966 21.7729 14.25C21.7729 17.9034 21.7729 19.7301 20.6599 20.865C19.5469 22 17.7556 22 14.1729 22H10.3729C6.79028 22 4.99894 22 3.88594 20.865C2.77295 19.7301 2.77295 17.9034 2.77295 14.25Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.7729 6.5L16.6736 6.19094C16.1785 4.65089 15.931 3.88087 15.3418 3.44043C14.7525 3 13.9699 3 12.4045 3H12.1413C10.5759 3 9.79331 3 9.20406 3.44043C8.61481 3.88087 8.36731 4.65089 7.87229 6.19094L7.77295 6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Business</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.59907 18.592C7.27172 18.8667 6.98826 19.0029 6.69309 19C6.01293 18.9931 5.44636 18.2974 4.31323 16.9061L2.79826 15.0458C2.17437 14.2798 2.09804 13.1392 2.61308 12.2785C3.2014 11.2954 4.32969 11.02 5.20902 11.5133M11.1951 9C11.9862 8.16585 12.8304 7.3322 13.7512 6.48679C14.1954 6.07893 14.7491 5.93447 15.2729 6.02681"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.3786 16.811C16.6385 14.1916 18.8201 12.4146 21.5605 9.89818C22.3807 9.14496 22.5074 7.8247 21.8639 6.8893C21.1801 5.89517 19.8807 5.69647 19.0012 6.48679C16.491 8.74236 14.538 10.9141 12.6855 13.2354C12.5883 13.3572 12.5398 13.4181 12.4893 13.4524C12.3614 13.5393 12.2015 13.5403 12.0728 13.4548C12.022 13.4211 11.9732 13.3613 11.8758 13.2419L10.8887 12.0311C9.98803 10.9263 8.37251 11.0486 7.62049 12.2785C7.09423 13.1392 7.17222 14.2798 7.8097 15.0458L9.35765 16.9061C10.5154 18.2974 11.0944 18.9931 11.7894 19C12.4844 19.0068 13.1157 18.2748 14.3786 16.811Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Check</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45031 9.53223C9.17607 13.1691 3.39788 17.8688 5.93035 21.063C7.33206 22.831 17.0024 23.1215 18.6344 21.063C21.1656 17.8705 15.4022 13.1762 19.1145 9.53223"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.62826 13.5C4.36271 13.291 2.51612 11.8282 2.28303 9.73853C2.24987 9.4413 2.30003 9.14273 2.41103 8.86431C3.12584 7.07132 5.12527 4.03054 8.18937 2.54751C8.39827 2.4464 8.64764 2.51201 8.7893 2.69362C9.54886 3.66739 10.8575 5.18459 12.273 5.18459C13.6885 5.18459 14.9971 3.66739 15.7566 2.69362C15.8983 2.51201 16.1477 2.4464 16.3566 2.54751C19.4207 4.03054 21.4201 7.07132 22.1349 8.86431C22.2459 9.14273 22.2961 9.4413 22.2629 9.73853C22.0298 11.8282 20.2027 13.2882 17.9371 13.4972"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Clothing</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.43145 6.21223L9.02879 5.30625C8.76551 4.71388 8.63387 4.41768 8.437 4.19101C8.19027 3.90694 7.86866 3.69794 7.50887 3.58785C7.22178 3.5 6.89765 3.5 6.2494 3.5C5.3011 3.5 4.82695 3.5 4.42892 3.68229C3.96006 3.89702 3.53663 4.36328 3.36792 4.8506C3.2247 5.26429 3.26573 5.68943 3.34777 6.5397C4.2211 15.5902 9.18301 20.5521 18.2335 21.4254C19.0838 21.5075 19.509 21.5485 19.9226 21.4053C20.41 21.2366 20.8762 20.8131 21.091 20.3443C21.2732 19.9462 21.2732 19.4721 21.2732 18.5238C21.2732 17.8755 21.2732 17.5514 21.1854 17.2643C21.0753 16.9045 20.8663 16.5829 20.5822 16.3362C20.3556 16.1393 20.0594 16.0077 19.467 15.7444L18.561 15.3417C17.9195 15.0566 17.5986 14.9141 17.2727 14.8831C16.9607 14.8534 16.6463 14.8972 16.3543 15.0109C16.0492 15.1297 15.7796 15.3544 15.2402 15.8038C14.7034 16.2512 14.4349 16.4749 14.1069 16.5947C13.8161 16.7009 13.4318 16.7403 13.1256 16.6951C12.7801 16.6442 12.5156 16.5029 11.9865 16.2201C10.3405 15.3405 9.43272 14.4328 8.55306 12.7867C8.27033 12.2577 8.12897 11.9931 8.07806 11.6477C8.03293 11.3414 8.07227 10.957 8.17849 10.6663C8.29831 10.3383 8.522 10.0699 8.96938 9.533C9.41881 8.99368 9.64353 8.72402 9.76234 8.41891C9.87604 8.12694 9.91981 7.8124 9.89014 7.50048C9.85913 7.17452 9.71657 6.85376 9.43145 6.21223Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Communication</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 22.5C17.7958 22.5 22.2729 18.0228 22.2729 12.5C22.2729 6.97715 17.7958 2.5 12.2729 2.5C6.7501 2.5 2.27295 6.97715 2.27295 12.5C2.27295 18.0228 6.7501 22.5 12.2729 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M9.77295 16.5V8.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 8.5V6.5M13.7729 8.5V6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 18.5V16.5M13.7729 18.5V16.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.77295 12.5H14.7729C15.6013 12.5 16.2729 13.1716 16.2729 14V15C16.2729 15.8284 15.6013 16.5 14.7729 16.5H8.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.27295 8.5H14.7729C15.6013 8.5 16.2729 9.17157 16.2729 10V11C16.2729 11.8284 15.6013 12.5 14.7729 12.5H9.77295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Crypto</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2729 12.5C22.2729 6.97715 17.7957 2.5 12.2729 2.5C6.7501 2.5 2.27295 6.97715 2.27295 12.5C2.27295 18.0228 6.7501 22.5 12.2729 22.5C17.7957 22.5 22.2729 18.0228 22.2729 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.6744 8.79796L15.5943 7.82465C16.4805 7.52924 16.9237 7.38153 17.1576 7.61544C17.3915 7.84935 17.2438 8.29247 16.9483 9.17871L15.975 12.0986C15.4716 13.6088 15.2199 14.3639 14.6784 14.9054C14.1369 15.4469 13.3818 15.6986 11.8716 16.202L8.95166 17.1753C8.06542 17.4708 7.6223 17.6185 7.38839 17.3846C7.15448 17.1507 7.30219 16.7075 7.5976 15.8213L8.57091 12.9014C9.07431 11.3912 9.32601 10.6361 9.86752 10.0946C10.4091 9.55306 11.1642 9.30136 12.6744 8.79796Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.273 12.5L12.2666 12.5064"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Dashboard</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 22.5C17.2435 22.5 21.2729 18.4706 21.2729 13.5C21.2729 8.52944 17.2435 4.5 12.2729 4.5C7.30239 4.5 3.27295 8.52944 3.27295 13.5C3.27295 18.4706 7.30239 22.5 12.2729 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.27295 19.5L3.27295 21.5M19.2729 19.5L21.2729 21.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.273 4.0697L19.8685 3.77195C20.7138 3.34932 21.0313 3.39769 21.7033 4.0697C22.3753 4.7417 22.4237 5.05924 22.001 5.9045L21.7033 6.5M5.27295 4.0697L4.67745 3.77195C3.83219 3.34932 3.51465 3.39769 2.84265 4.0697C2.17064 4.7417 2.12227 5.05924 2.5449 5.9045L2.84265 6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.2729 10V14L14.2729 16"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 4V2.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2729 2.5H14.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Date + time</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.27295 9.5C5.27295 6.20017 5.27295 4.55025 6.29808 3.52513C7.3232 2.5 8.97312 2.5 12.2729 2.5C15.5727 2.5 17.2226 2.5 18.2478 3.52513C19.2729 4.55025 19.2729 6.20017 19.2729 9.5V15.5C19.2729 18.7998 19.2729 20.4497 18.2478 21.4749C17.2226 22.5 15.5727 22.5 12.2729 22.5C8.97312 22.5 7.3232 22.5 6.29808 21.4749C5.27295 20.4497 5.27295 18.7998 5.27295 15.5V9.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 19.5H13.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.27295 2.5L9.36195 3.03402C9.55483 4.19129 9.65127 4.76993 10.0481 5.12204C10.4621 5.48934 11.049 5.5 12.2729 5.5C13.4968 5.5 14.0837 5.48934 14.4977 5.12204C14.8946 4.76993 14.991 4.19129 15.1839 3.03402L15.2729 2.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Devices</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7505 9.51106C17.7579 9.51102 17.7654 9.51101 17.7729 9.51101C20.2582 9.51101 22.2729 11.5294 22.2729 14.0193C22.2729 16.3398 20.5229 18.2508 18.2729 18.5M17.7505 9.51106C17.7653 9.34606 17.7729 9.17896 17.7729 9.01009C17.7729 5.96695 15.3105 3.5 12.2729 3.5C9.39619 3.5 7.03528 5.71267 6.79337 8.53192M17.7505 9.51106C17.6482 10.6476 17.2015 11.6846 16.5157 12.5165M6.79337 8.53192C4.25693 8.77373 2.27295 10.9139 2.27295 13.5183C2.27295 15.9417 3.99071 17.9632 6.27295 18.4273M6.79337 8.53192C6.95121 8.51687 7.11118 8.50917 7.27295 8.50917C8.39877 8.50917 9.43769 8.88194 10.2734 9.51101"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 21.5V13.5M12.2729 21.5C11.5727 21.5 10.2645 19.5057 9.77295 19M12.2729 21.5C12.9731 21.5 14.2814 19.5057 14.7729 19"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Download &amp; uploads</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.73727 9.84375C2.48873 9.84375 2.26193 9.64229 2.27336 9.37895C2.34027 7.83687 2.52775 6.83298 3.05302 6.03884C3.35522 5.58196 3.73059 5.18459 4.16217 4.86468C5.32869 4 6.97433 4 10.2656 4H14.2803C17.5716 4 19.2172 4 20.3838 4.86468C20.8153 5.18459 21.1907 5.58196 21.4929 6.03884C22.0181 6.83289 22.2056 7.83665 22.2725 9.37843C22.284 9.64208 22.0569 9.84375 21.8081 9.84375C20.4223 9.84375 19.2989 11.033 19.2989 12.5C19.2989 13.967 20.4223 15.1562 21.8081 15.1562C22.0569 15.1562 22.284 15.3579 22.2725 15.6216C22.2056 17.1634 22.0181 18.1671 21.4929 18.9612C21.1907 19.418 20.8153 19.8154 20.3838 20.1353C19.2172 21 17.5716 21 14.2803 21H10.2656C6.97433 21 5.32869 21 4.16217 20.1353C3.73059 19.8154 3.35522 19.418 3.05302 18.9612C2.52775 18.167 2.34027 17.1631 2.27336 15.6211C2.26193 15.3577 2.48873 15.1562 2.73727 15.1562C4.12306 15.1562 5.24646 13.967 5.24646 12.5C5.24646 11.033 4.12306 9.84375 2.73727 9.84375Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.77295 15L14.773 10"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.77295 10H9.78418M14.7617 15H14.773"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">E-commerce</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2729 6.5C20.3775 6.5 21.2729 5.60457 21.2729 4.5C21.2729 3.39543 20.3775 2.5 19.2729 2.5C18.1684 2.5 17.2729 3.39543 17.2729 4.5C17.2729 5.60457 18.1684 6.5 19.2729 6.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.27295 22.5C6.37752 22.5 7.27295 21.6046 7.27295 20.5C7.27295 19.3954 6.37752 18.5 5.27295 18.5C4.16838 18.5 3.27295 19.3954 3.27295 20.5C3.27295 21.6046 4.16838 22.5 5.27295 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.27295 18.5C5.27295 10.5 10.2729 4.5 17.2729 4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Editing</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2731 4.5V20.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.27307 12.5H20.2731"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Add + remove</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2731 13.1483L16.6439 10.7775C16.9367 10.4847 17.0831 10.3383 17.1614 10.1803C17.3103 9.8798 17.3103 9.52696 17.1614 9.22644C17.0831 9.06849 16.9367 8.92207 16.6439 8.62923C16.351 8.33638 16.2046 8.18996 16.0467 8.11169C15.7461 7.96277 15.3933 7.96277 15.0928 8.11169C14.9348 8.18996 14.7884 8.33638 14.4956 8.62923L12.1248 11M14.2731 13.1483L6.05061 21.3708C5.75777 21.6636 5.61134 21.81 5.45339 21.8883C5.15287 22.0372 4.80003 22.0372 4.49951 21.8883C4.34156 21.81 4.19514 21.6636 3.9023 21.3708C3.60946 21.0779 3.46303 20.9315 3.38476 20.7736C3.23584 20.473 3.23584 20.1202 3.38476 19.8197C3.46303 19.6617 3.60946 19.5153 3.9023 19.2225L12.1248 11M14.2731 13.1483L12.1248 11"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.7731 3L19.6626 3.29873C19.5176 3.69044 19.4451 3.88629 19.3023 4.02917C19.1594 4.17204 18.9635 4.24452 18.5718 4.38946L18.2731 4.5L18.5718 4.61054C18.9635 4.75548 19.1594 4.82796 19.3023 4.97083C19.4451 5.11371 19.5176 5.30956 19.6626 5.70127L19.7731 6L19.8836 5.70127C20.0286 5.30956 20.1011 5.11371 20.2439 4.97083C20.3868 4.82796 20.5827 4.75548 20.9744 4.61054L21.2731 4.5L20.9744 4.38946C20.5827 4.24452 20.3868 4.17204 20.2439 4.02917C20.1011 3.88629 20.0286 3.69044 19.8836 3.29873L19.7731 3Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.7731 13L19.6626 13.2987C19.5176 13.6904 19.4451 13.8863 19.3023 14.0292C19.1594 14.172 18.9635 14.2445 18.5718 14.3895L18.2731 14.5L18.5718 14.6105C18.9635 14.7555 19.1594 14.828 19.3023 14.9708C19.4451 15.1137 19.5176 15.3096 19.6626 15.7013L19.7731 16L19.8836 15.7013C20.0286 15.3096 20.1011 15.1137 20.2439 14.9708C20.3868 14.828 20.5827 14.7555 20.9744 14.6105L21.2731 14.5L20.9744 14.3895C20.5827 14.2445 20.3868 14.172 20.2439 14.0292C20.1011 13.8863 20.0286 13.6904 19.8836 13.2987L19.7731 13Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7731 3L10.6626 3.29873C10.5176 3.69044 10.4451 3.88629 10.3023 4.02917C10.1594 4.17204 9.96351 4.24452 9.5718 4.38946L9.27307 4.5L9.5718 4.61054C9.96351 4.75548 10.1594 4.82796 10.3023 4.97083C10.4451 5.11371 10.5176 5.30956 10.6626 5.70127L10.7731 6L10.8836 5.70127C11.0286 5.30956 11.1011 5.11371 11.2439 4.97083C11.3868 4.82796 11.5827 4.75548 11.9744 4.61054L12.2731 4.5L11.9744 4.38946C11.5827 4.24452 11.3868 4.17204 11.2439 4.02917C11.1011 3.88629 11.0286 3.69044 10.8836 3.29873L10.7731 3Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Ai</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.43144 11.991C5.35796 13.387 5.44243 14.873 4.1952 15.8084C3.61471 16.2438 3.27307 16.927 3.27307 17.6527C3.27307 18.6508 4.05487 19.5 5.07307 19.5H19.4731C20.4913 19.5 21.2731 18.6508 21.2731 17.6527C21.2731 16.927 20.9315 16.2438 20.351 15.8084C19.1037 14.873 19.1882 13.387 19.1147 11.991C18.9232 8.35223 15.9169 5.5 12.2731 5.5C8.62924 5.5 5.62295 8.35222 5.43144 11.991Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7731 3.625C10.7731 4.45343 11.4447 5.5 12.2731 5.5C13.1015 5.5 13.7731 4.45343 13.7731 3.625C13.7731 2.79657 13.1015 2.5 12.2731 2.5C11.4447 2.5 10.7731 2.79657 10.7731 3.625Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15.2731 19.5C15.2731 21.1569 13.93 22.5 12.2731 22.5C10.6162 22.5 9.27307 21.1569 9.27307 19.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Alert</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7148 15.053L10.4089 17.7531C9.41428 18.9177 8.91697 19.5 8.27307 19.5C7.62917 19.5 7.13186 18.9177 6.13725 17.7531L3.83136 15.053C2.7925 13.8366 2.27307 13.2284 2.27307 12.5C2.27307 11.7716 2.7925 11.1634 3.83136 9.94699L6.13725 7.24694C7.13186 6.08231 7.62917 5.5 8.27307 5.5C8.91697 5.5 9.41428 6.08231 10.4089 7.24694L12.7148 9.94699C13.7537 11.1634 14.2731 11.7716 14.2731 12.5C14.2731 13.2284 13.7537 13.8366 12.7148 15.053Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.2731 19.5L16.7849 15.1032C17.777 13.861 18.2731 13.2398 18.2731 12.5C18.2731 11.7602 17.777 11.139 16.7849 9.89683L13.2731 5.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2731 19.5L20.7849 15.1032C21.777 13.861 22.2731 13.2398 22.2731 12.5C22.2731 11.7602 21.777 11.139 20.7849 9.89683L17.2731 5.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Animation</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2727 11.5L6.27271 18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.8138 6.58278L14.572 6.69567C12.5601 6.87857 11.5542 6.97002 11.3175 7.62388C11.0807 8.27774 11.795 8.99198 13.2235 10.4205L14.3523 11.5493C15.7808 12.9778 16.4951 13.6921 17.1489 13.4553C17.8028 13.2186 17.8942 12.2127 18.0771 10.2008L18.19 8.95902C18.3001 7.74766 18.3552 7.14198 17.993 6.77979C17.6308 6.4176 17.0251 6.47266 15.8138 6.58278Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Arrow</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.27307 21.5C8.27307 20.0858 8.27307 19.3787 8.71241 18.9393C9.15175 18.5 9.85886 18.5 11.2731 18.5H13.2731C14.6873 18.5 15.3944 18.5 15.8338 18.9393C16.2731 19.3787 16.2731 20.0858 16.2731 21.5V22.5H8.27307V21.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 13.5V18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.27307 22.5H18.2731"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.3097 3.36651L14.3656 5.49573C14.5095 5.79212 14.8935 6.07642 15.2175 6.13086L17.1313 6.45145C18.3551 6.65712 18.6431 7.55236 17.7612 8.4355L16.2734 9.93563C16.0214 10.1897 15.8834 10.6796 15.9614 11.0305L16.3873 12.8875C16.7233 14.3574 15.9494 14.926 14.6595 14.1578L12.8657 13.0871C12.5418 12.8935 12.0078 12.8935 11.6779 13.0871L9.88403 14.1578C8.60017 14.926 7.82026 14.3513 8.15622 12.8875L8.58217 11.0305C8.66017 10.6796 8.52218 10.1897 8.27021 9.93563L6.78237 8.4355C5.90647 7.55236 6.18844 6.65712 7.4123 6.45145L9.32609 6.13086C9.64406 6.07642 10.028 5.79212 10.172 5.49573L11.2279 3.36651C11.8038 2.21116 12.7397 2.21116 13.3097 3.36651Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Award</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.27295 18.4808V10.2075C4.27295 6.57416 4.27295 4.75748 5.44452 3.62874C6.6161 2.5 8.50171 2.5 12.2729 2.5C16.0441 2.5 17.9298 2.5 19.1013 3.62874C20.2729 4.75748 20.2729 6.57416 20.2729 10.2075V18.4808C20.2729 20.7867 20.2729 21.9396 19.5001 22.3523C18.0034 23.1514 15.1961 20.4852 13.8629 19.6824C13.0897 19.2168 12.7031 18.984 12.2729 18.984C11.8427 18.984 11.4561 19.2168 10.6829 19.6824C9.34975 20.4852 6.54242 23.1514 5.0458 22.3523C4.27295 21.9396 4.27295 20.7867 4.27295 18.4808Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.27295 7.5H20.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Bookmark</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2729 10.5L18.4223 11.1448C19.7955 11.5568 20.4822 11.7628 20.8776 12.2942C21.273 12.8256 21.2729 13.5425 21.2729 14.9761V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.27295 9.5H11.2729M8.27295 13.5H11.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 22.5V19.5C12.2729 18.5572 12.2729 18.0858 11.98 17.7929C11.6871 17.5 11.2157 17.5 10.2729 17.5H9.27295C8.33014 17.5 7.85874 17.5 7.56584 17.7929C7.27295 18.0858 7.27295 18.5572 7.27295 19.5V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 22.5H22.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.27295 22.5V7.21724C3.27295 4.70649 3.27295 3.45111 4.06413 2.82824C4.85532 2.20537 6.02037 2.54355 8.35047 3.2199L13.3504 4.67122C14.7565 5.07937 15.4596 5.28344 15.8662 5.83965C16.2729 6.39587 16.2729 7.15344 16.2729 8.66857V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Building</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27295 12.5V21.5M17.2729 12.5V21.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.27295 12.5H21.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.77295 14.25C2.77295 10.5966 2.77295 8.76992 3.88594 7.63496C4.99894 6.5 6.79028 6.5 10.3729 6.5H14.1729C17.7556 6.5 19.5469 6.5 20.6599 7.63496C21.7729 8.76992 21.7729 10.5966 21.7729 14.25C21.7729 17.9034 21.7729 19.7301 20.6599 20.865C19.5469 22 17.7556 22 14.1729 22H10.3729C6.79028 22 4.99894 22 3.88594 20.865C2.77295 19.7301 2.77295 17.9034 2.77295 14.25Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.7729 6.5L16.6736 6.19094C16.1785 4.65089 15.931 3.88087 15.3418 3.44043C14.7525 3 13.9699 3 12.4045 3H12.1413C10.5759 3 9.79331 3 9.20406 3.44043C8.61481 3.88087 8.36731 4.65089 7.87229 6.19094L7.77295 6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Business</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.59907 18.592C7.27172 18.8667 6.98826 19.0029 6.69309 19C6.01293 18.9931 5.44636 18.2974 4.31323 16.9061L2.79826 15.0458C2.17437 14.2798 2.09804 13.1392 2.61308 12.2785C3.2014 11.2954 4.32969 11.02 5.20902 11.5133M11.1951 9C11.9862 8.16585 12.8304 7.3322 13.7512 6.48679C14.1954 6.07893 14.7491 5.93447 15.2729 6.02681"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.3786 16.811C16.6385 14.1916 18.8201 12.4146 21.5605 9.89818C22.3807 9.14496 22.5074 7.8247 21.8639 6.8893C21.1801 5.89517 19.8807 5.69647 19.0012 6.48679C16.491 8.74236 14.538 10.9141 12.6855 13.2354C12.5883 13.3572 12.5398 13.4181 12.4893 13.4524C12.3614 13.5393 12.2015 13.5403 12.0728 13.4548C12.022 13.4211 11.9732 13.3613 11.8758 13.2419L10.8887 12.0311C9.98803 10.9263 8.37251 11.0486 7.62049 12.2785C7.09423 13.1392 7.17222 14.2798 7.8097 15.0458L9.35765 16.9061C10.5154 18.2974 11.0944 18.9931 11.7894 19C12.4844 19.0068 13.1157 18.2748 14.3786 16.811Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Check</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45031 9.53223C9.17607 13.1691 3.39788 17.8688 5.93035 21.063C7.33206 22.831 17.0024 23.1215 18.6344 21.063C21.1656 17.8705 15.4022 13.1762 19.1145 9.53223"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.62826 13.5C4.36271 13.291 2.51612 11.8282 2.28303 9.73853C2.24987 9.4413 2.30003 9.14273 2.41103 8.86431C3.12584 7.07132 5.12527 4.03054 8.18937 2.54751C8.39827 2.4464 8.64764 2.51201 8.7893 2.69362C9.54886 3.66739 10.8575 5.18459 12.273 5.18459C13.6885 5.18459 14.9971 3.66739 15.7566 2.69362C15.8983 2.51201 16.1477 2.4464 16.3566 2.54751C19.4207 4.03054 21.4201 7.07132 22.1349 8.86431C22.2459 9.14273 22.2961 9.4413 22.2629 9.73853C22.0298 11.8282 20.2027 13.2882 17.9371 13.4972"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Clothing</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.43145 6.21223L9.02879 5.30625C8.76551 4.71388 8.63387 4.41768 8.437 4.19101C8.19027 3.90694 7.86866 3.69794 7.50887 3.58785C7.22178 3.5 6.89765 3.5 6.2494 3.5C5.3011 3.5 4.82695 3.5 4.42892 3.68229C3.96006 3.89702 3.53663 4.36328 3.36792 4.8506C3.2247 5.26429 3.26573 5.68943 3.34777 6.5397C4.2211 15.5902 9.18301 20.5521 18.2335 21.4254C19.0838 21.5075 19.509 21.5485 19.9226 21.4053C20.41 21.2366 20.8762 20.8131 21.091 20.3443C21.2732 19.9462 21.2732 19.4721 21.2732 18.5238C21.2732 17.8755 21.2732 17.5514 21.1854 17.2643C21.0753 16.9045 20.8663 16.5829 20.5822 16.3362C20.3556 16.1393 20.0594 16.0077 19.467 15.7444L18.561 15.3417C17.9195 15.0566 17.5986 14.9141 17.2727 14.8831C16.9607 14.8534 16.6463 14.8972 16.3543 15.0109C16.0492 15.1297 15.7796 15.3544 15.2402 15.8038C14.7034 16.2512 14.4349 16.4749 14.1069 16.5947C13.8161 16.7009 13.4318 16.7403 13.1256 16.6951C12.7801 16.6442 12.5156 16.5029 11.9865 16.2201C10.3405 15.3405 9.43272 14.4328 8.55306 12.7867C8.27033 12.2577 8.12897 11.9931 8.07806 11.6477C8.03293 11.3414 8.07227 10.957 8.17849 10.6663C8.29831 10.3383 8.522 10.0699 8.96938 9.533C9.41881 8.99368 9.64353 8.72402 9.76234 8.41891C9.87604 8.12694 9.91981 7.8124 9.89014 7.50048C9.85913 7.17452 9.71657 6.85376 9.43145 6.21223Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Communication</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 22.5C17.7958 22.5 22.2729 18.0228 22.2729 12.5C22.2729 6.97715 17.7958 2.5 12.2729 2.5C6.7501 2.5 2.27295 6.97715 2.27295 12.5C2.27295 18.0228 6.7501 22.5 12.2729 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M9.77295 16.5V8.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 8.5V6.5M13.7729 8.5V6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 18.5V16.5M13.7729 18.5V16.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.77295 12.5H14.7729C15.6013 12.5 16.2729 13.1716 16.2729 14V15C16.2729 15.8284 15.6013 16.5 14.7729 16.5H8.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.27295 8.5H14.7729C15.6013 8.5 16.2729 9.17157 16.2729 10V11C16.2729 11.8284 15.6013 12.5 14.7729 12.5H9.77295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Crypto</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2729 12.5C22.2729 6.97715 17.7957 2.5 12.2729 2.5C6.7501 2.5 2.27295 6.97715 2.27295 12.5C2.27295 18.0228 6.7501 22.5 12.2729 22.5C17.7957 22.5 22.2729 18.0228 22.2729 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.6744 8.79796L15.5943 7.82465C16.4805 7.52924 16.9237 7.38153 17.1576 7.61544C17.3915 7.84935 17.2438 8.29247 16.9483 9.17871L15.975 12.0986C15.4716 13.6088 15.2199 14.3639 14.6784 14.9054C14.1369 15.4469 13.3818 15.6986 11.8716 16.202L8.95166 17.1753C8.06542 17.4708 7.6223 17.6185 7.38839 17.3846C7.15448 17.1507 7.30219 16.7075 7.5976 15.8213L8.57091 12.9014C9.07431 11.3912 9.32601 10.6361 9.86752 10.0946C10.4091 9.55306 11.1642 9.30136 12.6744 8.79796Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.273 12.5L12.2666 12.5064"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Dashboard</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 22.5C17.2435 22.5 21.2729 18.4706 21.2729 13.5C21.2729 8.52944 17.2435 4.5 12.2729 4.5C7.30239 4.5 3.27295 8.52944 3.27295 13.5C3.27295 18.4706 7.30239 22.5 12.2729 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.27295 19.5L3.27295 21.5M19.2729 19.5L21.2729 21.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.273 4.0697L19.8685 3.77195C20.7138 3.34932 21.0313 3.39769 21.7033 4.0697C22.3753 4.7417 22.4237 5.05924 22.001 5.9045L21.7033 6.5M5.27295 4.0697L4.67745 3.77195C3.83219 3.34932 3.51465 3.39769 2.84265 4.0697C2.17064 4.7417 2.12227 5.05924 2.5449 5.9045L2.84265 6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.2729 10V14L14.2729 16"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 4V2.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2729 2.5H14.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Date + time</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.27295 9.5C5.27295 6.20017 5.27295 4.55025 6.29808 3.52513C7.3232 2.5 8.97312 2.5 12.2729 2.5C15.5727 2.5 17.2226 2.5 18.2478 3.52513C19.2729 4.55025 19.2729 6.20017 19.2729 9.5V15.5C19.2729 18.7998 19.2729 20.4497 18.2478 21.4749C17.2226 22.5 15.5727 22.5 12.2729 22.5C8.97312 22.5 7.3232 22.5 6.29808 21.4749C5.27295 20.4497 5.27295 18.7998 5.27295 15.5V9.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 19.5H13.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.27295 2.5L9.36195 3.03402C9.55483 4.19129 9.65127 4.76993 10.0481 5.12204C10.4621 5.48934 11.049 5.5 12.2729 5.5C13.4968 5.5 14.0837 5.48934 14.4977 5.12204C14.8946 4.76993 14.991 4.19129 15.1839 3.03402L15.2729 2.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Devices</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7505 9.51106C17.7579 9.51102 17.7654 9.51101 17.7729 9.51101C20.2582 9.51101 22.2729 11.5294 22.2729 14.0193C22.2729 16.3398 20.5229 18.2508 18.2729 18.5M17.7505 9.51106C17.7653 9.34606 17.7729 9.17896 17.7729 9.01009C17.7729 5.96695 15.3105 3.5 12.2729 3.5C9.39619 3.5 7.03528 5.71267 6.79337 8.53192M17.7505 9.51106C17.6482 10.6476 17.2015 11.6846 16.5157 12.5165M6.79337 8.53192C4.25693 8.77373 2.27295 10.9139 2.27295 13.5183C2.27295 15.9417 3.99071 17.9632 6.27295 18.4273M6.79337 8.53192C6.95121 8.51687 7.11118 8.50917 7.27295 8.50917C8.39877 8.50917 9.43769 8.88194 10.2734 9.51101"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 21.5V13.5M12.2729 21.5C11.5727 21.5 10.2645 19.5057 9.77295 19M12.2729 21.5C12.9731 21.5 14.2814 19.5057 14.7729 19"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Download &amp; uploads</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.73727 9.84375C2.48873 9.84375 2.26193 9.64229 2.27336 9.37895C2.34027 7.83687 2.52775 6.83298 3.05302 6.03884C3.35522 5.58196 3.73059 5.18459 4.16217 4.86468C5.32869 4 6.97433 4 10.2656 4H14.2803C17.5716 4 19.2172 4 20.3838 4.86468C20.8153 5.18459 21.1907 5.58196 21.4929 6.03884C22.0181 6.83289 22.2056 7.83665 22.2725 9.37843C22.284 9.64208 22.0569 9.84375 21.8081 9.84375C20.4223 9.84375 19.2989 11.033 19.2989 12.5C19.2989 13.967 20.4223 15.1562 21.8081 15.1562C22.0569 15.1562 22.284 15.3579 22.2725 15.6216C22.2056 17.1634 22.0181 18.1671 21.4929 18.9612C21.1907 19.418 20.8153 19.8154 20.3838 20.1353C19.2172 21 17.5716 21 14.2803 21H10.2656C6.97433 21 5.32869 21 4.16217 20.1353C3.73059 19.8154 3.35522 19.418 3.05302 18.9612C2.52775 18.167 2.34027 17.1631 2.27336 15.6211C2.26193 15.3577 2.48873 15.1562 2.73727 15.1562C4.12306 15.1562 5.24646 13.967 5.24646 12.5C5.24646 11.033 4.12306 9.84375 2.73727 9.84375Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.77295 15L14.773 10"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.77295 10H9.78418M14.7617 15H14.773"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">E-commerce</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2729 6.5C20.3775 6.5 21.2729 5.60457 21.2729 4.5C21.2729 3.39543 20.3775 2.5 19.2729 2.5C18.1684 2.5 17.2729 3.39543 17.2729 4.5C17.2729 5.60457 18.1684 6.5 19.2729 6.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.27295 22.5C6.37752 22.5 7.27295 21.6046 7.27295 20.5C7.27295 19.3954 6.37752 18.5 5.27295 18.5C4.16838 18.5 3.27295 19.3954 3.27295 20.5C3.27295 21.6046 4.16838 22.5 5.27295 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.27295 18.5C5.27295 10.5 10.2729 4.5 17.2729 4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Editing</p>
                </div>
              </ul>
            </div>
            <div className="relative z-20 overflow-hidden">
              <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll direction-reverse">
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.77893 5.44531H16.279C17.1074 5.44531 17.779 6.11688 17.779 6.94531V8.44531"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.279 18.4453L14.4219 16.4453M14.4219 16.4453L12.8714 12.8277C12.7723 12.5962 12.5384 12.4453 12.279 12.4453C12.0196 12.4453 11.7857 12.5962 11.6866 12.8277L10.1361 16.4453M14.4219 16.4453H10.1361M10.1361 16.4453L9.27893 18.4453"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.7701 2.5L6.58074 2.50002C6.08378 2.50002 5.57548 2.57294 5.17377 2.86782C3.90005 3.80279 2.91846 5.88801 4.90071 7.7706C5.45728 8.2992 6.23524 8.49082 6.99999 8.49082H18.5566C19.3501 8.49082 20.7731 8.60439 20.7731 11.0273V18.4812C20.7731 20.7007 18.9834 22.5 16.7757 22.5H7.74553C5.54193 22.5 3.93926 20.9426 3.81266 18.5713L3.77917 5.66638"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Eduction</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.35125 8C2.66172 9.35588 2.27307 10.89 2.27307 12.5148C2.27307 18.0295 6.75022 22.5 12.2731 22.5C17.7959 22.5 22.2731 18.0295 22.2731 12.5148C22.2731 10.89 21.8845 9.35588 21.1949 8"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.27307 15.5C9.18519 16.7144 10.6374 17.5 12.2731 17.5C13.9088 17.5 15.361 16.7144 16.2731 15.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2731 6.5C17.7959 6.5 22.2731 5.60457 22.2731 4.5C22.2731 3.39543 17.7959 2.5 12.2731 2.5C6.75022 2.5 2.27307 3.39543 2.27307 4.5C2.27307 5.60457 6.75022 6.5 12.2731 6.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.27307 11.0001C7.27307 10.1716 7.94464 9.50003 8.77307 9.50003C9.6015 9.50003 10.2731 10.1716 10.2731 11.0001M14.2731 11C14.2731 10.1716 14.9447 9.5 15.7731 9.5C16.6015 9.5 17.2731 10.1716 17.2731 11"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Emojis</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9361 9.35C21.5253 7.31022 21.3599 5.53955 20.2967 4.47636C18.0475 2.2271 12.6318 3.99602 8.20043 8.42736C7.72704 8.90074 7.28404 9.38536 6.87307 9.87615M17.6731 15.1238C17.2621 15.6146 16.8191 16.0993 16.3457 16.5726C11.9144 21.004 6.49869 22.7729 4.24943 20.5236C3.10876 19.383 3.00149 17.428 3.75079 15.2"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.9485 9.7998L11.1974 11.8702C10.9836 12.1474 10.8768 12.286 10.943 12.3929C11.0092 12.4998 11.2019 12.4998 11.5872 12.4998H12.9598C13.3451 12.4998 13.5378 12.4998 13.604 12.6068C13.6702 12.7137 13.5633 12.8523 13.3496 13.1295L11.5872 15.1998"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0231 18.2059C9.40452 17.7114 8.79365 17.1659 8.20043 16.5726C3.76909 12.1413 2.00017 6.72562 4.24943 4.47636C5.39009 3.33569 7.34509 3.22842 9.57307 3.97772M14.5231 20.8607C16.9362 21.7813 19.0799 21.7405 20.2967 20.5236C22.546 18.2744 20.7771 12.8587 16.3457 8.42736C15.7525 7.83413 15.1417 7.28862 14.5231 6.79407"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Energy</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.27307 19.5V8.04902C2.27307 6.60516 2.27307 5.88322 2.51639 5.31647C2.81977 4.60985 3.38292 4.0467 4.08954 3.74332C4.65629 3.5 5.37112 3.5 6.82209 3.5H7.31618C7.92126 3.5 8.49382 3.77394 8.87348 4.24509L10.6906 6.5M10.6906 6.5H16.2731C17.6732 6.5 18.3733 6.5 18.9081 6.77248C19.3785 7.01217 19.7609 7.39462 20.0006 7.86502C20.2731 8.3998 20.2731 9.09987 20.2731 10.5V11.5M10.6906 6.5H7.27307"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.43109 16.0144L3.7295 15.2717C4.46336 13.4449 4.8303 12.5316 5.59547 12.0158C6.36064 11.5 7.34864 11.5 9.32464 11.5H17.385C20.0735 11.5 21.4177 11.5 22.0153 12.3787C22.6128 13.2575 22.1136 14.5002 21.1151 16.9856L20.8167 17.7283C20.0828 19.5551 19.7159 20.4684 18.9507 20.9842C18.1855 21.5 17.1975 21.5 15.2215 21.5H7.16119C4.47268 21.5 3.12842 21.5 2.53089 20.6213C1.93336 19.7425 2.4326 18.4998 3.43109 16.0144Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Files</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27307 21.5V18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2731 21.5V15.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2731 6.5V3.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.27307 9.5V3.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.27307 18.5C6.34119 18.5 5.87525 18.5 5.5077 18.3478C5.01765 18.1448 4.6283 17.7554 4.42531 17.2654C4.27307 16.8978 4.27307 16.4319 4.27307 15.5C4.27307 14.5681 4.27307 14.1022 4.42531 13.7346C4.6283 13.2446 5.01765 12.8552 5.5077 12.6522C5.87525 12.5 6.34119 12.5 7.27307 12.5C8.20495 12.5 8.67089 12.5 9.03844 12.6522C9.52849 12.8552 9.91784 13.2446 10.1208 13.7346C10.2731 14.1022 10.2731 14.5681 10.2731 15.5C10.2731 16.4319 10.2731 16.8978 10.1208 17.2654C9.91784 17.7554 9.52849 18.1448 9.03844 18.3478C8.67089 18.5 8.20495 18.5 7.27307 18.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.2731 12.5C16.3412 12.5 15.8753 12.5 15.5077 12.3478C15.0177 12.1448 14.6283 11.7554 14.4253 11.2654C14.2731 10.8978 14.2731 10.4319 14.2731 9.5C14.2731 8.56812 14.2731 8.10218 14.4253 7.73463C14.6283 7.24458 15.0177 6.85523 15.5077 6.65224C15.8753 6.5 16.3412 6.5 17.2731 6.5C18.205 6.5 18.6709 6.5 19.0385 6.65224C19.5285 6.85523 19.9179 7.24458 20.1209 7.73463C20.2731 8.10218 20.2731 8.56812 20.2731 9.5C20.2731 10.4319 20.2731 10.8978 20.1209 11.2654C19.9179 11.7554 19.5285 12.1448 19.0385 12.3478C18.6709 12.5 18.205 12.5 17.2731 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Filter</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27295 20.5L5.27295 21.5M18.2729 20.5L19.2729 21.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.27295 12.5V13.5C3.27295 16.7998 3.27295 18.4497 4.29808 19.4749C5.3232 20.5 6.97312 20.5 10.2729 20.5H14.2729C17.5727 20.5 19.2226 20.5 20.2478 19.4749C21.2729 18.4497 21.2729 16.7998 21.2729 13.5V12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 12.5H22.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4.27295 12.5V6.0234C4.27295 4.62977 5.40272 3.5 6.79635 3.5C7.91461 3.5 8.89949 4.23598 9.21634 5.30841L9.27295 5.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.27295 6.5L10.7729 4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Furniture</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66409 22.1387C2.08704 21.5816 2.15835 20.6398 2.81276 20.1752L6.4444 17.597C6.65628 17.4465 6.94685 17.4737 7.12699 17.6607C7.30059 17.8409 7.32175 18.1183 7.17749 18.3226L4.61165 21.9558C4.15679 22.5999 3.23178 22.6867 2.66409 22.1387Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7729 13L7.27295 17.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.702 13.0774C17.8069 14.9725 14.1419 15.0529 11.931 12.8419C9.72005 10.631 9.80042 6.96597 11.6955 5.07087C14.1849 2.58144 18.8704 1.48064 21.0813 3.69159C23.2923 5.90254 22.1915 10.588 19.702 13.0774Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Games</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27295 8.5C7.37752 8.5 8.27295 7.60457 8.27295 6.5C8.27295 5.39543 7.37752 4.5 6.27295 4.5C5.16838 4.5 4.27295 5.39543 4.27295 6.5C4.27295 7.60457 5.16838 8.5 6.27295 8.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.2729 20.5C13.3775 20.5 14.2729 19.6046 14.2729 18.5C14.2729 17.3954 13.3775 16.5 12.2729 16.5C11.1683 16.5 10.2729 17.3954 10.2729 18.5C10.2729 19.6046 11.1683 20.5 12.2729 20.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M18.2729 8.5C19.3775 8.5 20.2729 7.60457 20.2729 6.5C20.2729 5.39543 19.3775 4.5 18.2729 4.5C17.1683 4.5 16.2729 5.39543 16.2729 6.5C16.2729 7.60457 17.1683 8.5 18.2729 8.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.29029 9.24067C6.29029 10.9142 6.04832 12.6995 9.49346 12.4855H12.2783M12.2783 12.4855H16.0591C17.1929 12.2648 18.3989 12.4855 18.2659 9.07617M12.2783 12.4855V16.2001"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Git</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29093 20.8051C3.41957 22.4196 8.33243 23.6871 10.6527 20.6645C13.1624 21.8649 17.3019 21.4928 20.6721 19.6134C21.1408 19.3521 21.5842 19.0222 21.8557 18.5593C22.4687 17.5143 22.4832 16.0644 21.3649 13.9251C19.5004 9.27072 16.147 5.18513 14.7931 3.54212C14.5151 3.28865 12.7417 2.92868 11.6602 2.58279C11.1825 2.43477 10.293 2.33664 9.22913 3.73862C8.72477 4.40329 6.4336 6.0357 9.34068 7.13346C9.79106 7.24806 10.1221 7.45939 12.1768 7.08404C12.4444 7.03761 13.1125 7.08404 13.5833 7.91041L14.5666 9.31662C14.6581 9.44752 14.7175 9.59813 14.7357 9.75682C14.908 11.2557 14.9024 13.1323 15.7381 14.0826C14.4473 13.1492 11.0741 12.0406 8.53251 15.1951M2.2749 13.44C3.4831 12.291 6.98498 10.4759 10.6909 13.0216"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Gym</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.273 6C14.273 5.17157 14.9446 4.5 15.773 4.5C16.6014 4.5 17.273 5.17157 17.273 6V12.5M14.273 6V4C14.273 3.17157 13.6014 2.5 12.773 2.5C11.9446 2.5 11.273 3.17157 11.273 4L11.2732 5.5M14.273 6V11.5M11.2732 5.5C11.2729 4.67187 10.6014 4.00064 9.77316 4.00064C8.94473 4.00064 8.27316 4.67221 8.27316 5.50064L8.27295 13.9624L6.65265 12.337C5.94172 11.6239 4.77067 11.6889 4.1426 12.4765C3.66202 13.0791 3.64875 13.9315 4.11033 14.5489L7.71002 19.1471C8.39874 20.0269 8.77295 21.3829 8.77295 22.5002M11.2732 5.5V10.5M18.273 22.5002V21.3356C18.273 20.8038 18.4878 20.2964 18.8382 19.8964C19.2433 19.4339 19.7499 18.7939 19.9419 18.292C20.273 17.4269 20.273 16.3402 20.273 14.1668L20.2734 12.6943L20.273 8C20.273 7.17157 19.6014 6.5 18.773 6.5C17.9446 6.5 17.273 7.17157 17.273 8"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Hands</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.77295 6C2.77295 4.35008 2.77295 3.52513 3.28551 3.01256C3.79808 2.5 4.62303 2.5 6.27295 2.5C7.92287 2.5 8.74782 2.5 9.26039 3.01256C9.77295 3.52513 9.77295 4.35008 9.77295 6C9.77295 7.64992 9.77295 8.47487 9.26039 8.98744C8.74782 9.5 7.92287 9.5 6.27295 9.5C4.62303 9.5 3.79808 9.5 3.28551 8.98744C2.77295 8.47487 2.77295 7.64992 2.77295 6Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.9298 16.1569C5.03437 15.0523 5.58666 14.5 6.27295 14.5C6.95924 14.5 7.51153 15.0523 8.6161 16.1569C9.72067 17.2614 10.2729 17.8137 10.2729 18.5C10.2729 19.1863 9.72067 19.7386 8.6161 20.8431C7.51153 21.9477 6.95924 22.5 6.27295 22.5C5.58666 22.5 5.03437 21.9477 3.9298 20.8431C2.82523 19.7386 2.27295 19.1863 2.27295 18.5C2.27295 17.8137 2.82523 17.2614 3.9298 16.1569Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.27295 9.5V14.5M10.2729 18.5H15.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.2729 18.5C15.2729 16.8501 15.2729 16.0251 15.7855 15.5126C16.298 15 17.123 15 18.7729 15C20.4228 15 21.2478 15 21.7603 15.5126C22.2729 16.0251 22.2729 16.8501 22.2729 18.5C22.2729 20.1499 22.2729 20.9749 21.7603 21.4874C21.2478 22 20.4228 22 18.7729 22C17.123 22 16.298 22 15.7855 21.4874C15.2729 20.9749 15.2729 20.1499 15.2729 18.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Hierarchy</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2732 17.5C14.4737 18.1224 13.4234 18.5 12.2732 18.5C11.1229 18.5 10.0727 18.1224 9.27319 17.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.62458 13.7135C2.27156 11.4162 2.09505 10.2676 2.52936 9.24938C2.96366 8.23112 3.92722 7.53443 5.85433 6.14106L7.29418 5.1C9.69148 3.36667 10.8901 2.5 12.2732 2.5C13.6562 2.5 14.8549 3.36667 17.2522 5.1L18.692 6.14106C20.6192 7.53443 21.5827 8.23112 22.017 9.24938C22.4513 10.2676 22.2748 11.4162 21.9218 13.7135L21.6208 15.6724C21.1203 18.9289 20.8701 20.5572 19.7022 21.5286C18.5343 22.5 16.8268 22.5 13.412 22.5H11.1344C7.71953 22.5 6.0121 22.5 4.84419 21.5286C3.67628 20.5572 3.42606 18.9289 2.92562 15.6724L2.62458 13.7135Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Home</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27295 18.4745C6.40165 19.7829 6.69251 20.6636 7.34986 21.3209C8.52891 22.5 10.4265 22.5 14.2218 22.5C18.0171 22.5 19.9148 22.5 21.0938 21.3209C22.2729 20.1419 22.2729 18.2442 22.2729 14.4489C22.2729 10.6536 22.2729 8.75596 21.0938 7.57691C20.4365 6.91956 19.5558 6.6287 18.2474 6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.27295 10.5C2.27295 6.72876 2.27295 4.84315 3.44452 3.67157C4.6161 2.5 6.50171 2.5 10.2729 2.5C14.0441 2.5 15.9298 2.5 17.1013 3.67157C18.2729 4.84315 18.2729 6.72876 18.2729 10.5C18.2729 14.2712 18.2729 16.1569 17.1013 17.3284C15.9298 18.5 14.0441 18.5 10.2729 18.5C6.50171 18.5 4.6161 18.5 3.44452 17.3284C2.27295 16.1569 2.27295 14.2712 2.27295 10.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5.27295 18.5C8.69356 13.7487 12.5376 7.44746 18.2729 12.1734"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Images</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.15283 12.3131C3.15283 17.4534 7.31986 21.6204 12.4601 21.6204C16.6898 21.6204 20.2604 18.799 21.3928 14.9356C20.0288 15.9267 18.3502 16.5112 16.5352 16.5112C11.966 16.5112 8.26203 12.8072 8.26203 8.23802C8.26203 6.42297 8.84653 4.74444 9.83756 3.38037C5.97418 4.51278 3.15283 8.08345 3.15283 12.3131Z"
                      stroke="#6EBB21"
                      stroke-width="1.44"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4732 9.14037C11.1462 6.26037 15.1157 4.82037 16.1128 3.38037C17.1102 4.82037 21.0797 6.26037 18.7526 9.14037M13.4732 9.14037H18.7526M13.4732 9.14037V15.8604M18.7526 9.14037V15.8604"
                      stroke="#6EBB21"
                      stroke-width="1.44"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Islamic</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 20.5V19M16.2729 20.5V19M20.2729 20.5V19"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2729 20.5H22.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.8285 11.5H10.7173C10.4719 11.5 10.2729 11.7487 10.2729 12.0556C10.2729 14.5102 11.8648 16.5 13.8285 16.5H18.7174C20.6811 16.5 22.2729 14.5102 22.2729 12.0556C22.2729 11.7487 22.0739 11.5 21.8285 11.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.2729 8.5C14.9249 7.47775 12.6209 5.52225 14.2729 4.5M16.2729 8.5C17.9249 7.47775 15.6209 5.52225 17.2729 4.5M19.2729 8.5C20.9249 7.47775 18.6209 5.52225 20.2729 4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.2729 11.5L8.27295 9.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.64092 4.86797C4.13154 4.37734 4.92699 4.37734 5.41761 4.86797L7.90498 7.35534C8.39561 7.84596 8.39561 8.64141 7.90498 9.13203C7.41436 9.62266 6.61891 9.62266 6.12829 9.13203L3.64092 6.64466C3.15029 6.15404 3.15029 5.35859 3.64092 4.86797Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Kitchen</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 14.5059L6.11668 21.7328C5.29059 22.7026 3.81296 22.7616 2.91217 21.8608C2.01138 20.96 2.07039 19.4824 3.04015 18.6563L10.2671 12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.2729 12.4048L16.1777 18.5M12.3681 2.5L6.27295 8.59524M11.6063 3.26186L7.0349 7.83329C7.0349 7.83329 9.32061 10.8809 11.6063 13.1666C13.892 15.4523 16.9396 17.7381 16.9396 17.7381L21.511 13.1666C21.511 13.1666 19.2253 10.119 16.9396 7.83329C14.6539 5.54758 11.6063 3.26186 11.6063 3.26186Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Legal</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.77295 15L14.7729 10"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.1192 15.1095L19.7287 12.5C21.7876 10.4411 21.7876 7.10302 19.7287 5.04415C17.6699 2.98528 14.3318 2.98528 12.2729 5.04415L9.6634 7.6537M14.8824 17.3463L12.2729 19.9558C10.2141 22.0147 6.87598 22.0147 4.81711 19.9558C2.75823 17.8969 2.75823 14.5588 4.81711 12.5L7.42665 9.89045"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Link</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.29626 6C4.87121 7.61238 3.27295 10.3695 3.27295 13.5C3.27295 18.4706 7.30239 22.5 12.2729 22.5C17.2435 22.5 21.2729 18.4706 21.2729 13.5C21.2729 10.3695 19.6746 7.61238 17.2496 6"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 2.5V10.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Login</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2729 20.5C18.3775 20.5 19.2729 19.6046 19.2729 18.5C19.2729 17.3954 18.3775 16.5 17.2729 16.5C16.1684 16.5 15.2729 17.3954 15.2729 18.5C15.2729 19.6046 16.1684 20.5 17.2729 20.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.27295 20.5C8.37752 20.5 9.27295 19.6046 9.27295 18.5C9.27295 17.3954 8.37752 16.5 7.27295 16.5C6.16838 16.5 5.27295 17.3954 5.27295 18.5C5.27295 19.6046 6.16838 20.5 7.27295 20.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5.27295 18.4724C4.17623 18.4178 3.49205 18.2546 3.00518 17.7678C2.51831 17.2809 2.35517 16.5967 2.3005 15.5M9.27295 18.5H15.2729M19.2729 18.4724C20.3696 18.4178 21.0538 18.2546 21.5407 17.7678C22.2729 17.0355 22.2729 15.857 22.2729 13.5V11.5H17.5729C16.8284 11.5 16.4561 11.5 16.1549 11.4021C15.546 11.2043 15.0686 10.7269 14.8708 10.118C14.7729 9.81677 14.7729 9.44451 14.7729 8.7C14.7729 7.58323 14.7729 7.02485 14.6261 6.57295C14.3293 5.65964 13.6133 4.94358 12.7 4.64683C12.2481 4.5 11.6897 4.5 10.5729 4.5H2.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 8.5H8.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 11.5H6.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.7729 6.5H16.5941C18.0495 6.5 18.7771 6.5 19.3693 6.85371C19.9615 7.20742 20.3065 7.84811 20.9965 9.1295L22.2729 11.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Logistics</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27295 6.5L9.77295 7.5C9.77295 7.5 10.2729 5.5 12.2729 5.5C13.8729 5.5 14.4393 7.36545 14.2729 9C7.77295 9 6.77295 12 6.77295 13.5C6.77295 15 7.77295 17.5 10.7729 17.5C13.2729 17.5 14.7729 15.5 14.7729 15.5L15.7729 17L18.2729 15C18.2729 15 17.2729 14.1667 17.2729 13V9.5C17.2729 9.5 17.941 3 12.2729 3C7.87295 3 7.27295 6.5 7.27295 6.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7729 11.3555C13.7729 12.8555 12.8534 14.8555 11.4743 14.8555C9.5788 14.8555 9.63539 11.3555 13.7729 11.3555Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 18C2.27295 18 10.7729 24.0844 19.2729 20.0281C19.2729 20.0281 10.7729 25.6056 2.27295 18Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.2629 18.2025C22.4089 19.5999 20.9143 21.5 20.9143 21.5C20.9143 21.5 21.8937 19.9076 21.6974 18.2025C20.0941 17.5648 18.2729 18.2895 18.2729 18.2895C18.2729 18.2895 19.7753 17.185 21.6974 17.5888C21.9994 17.6522 22.2308 17.8956 22.2629 18.2025Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Logos</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8906 21.867C13.457 22.273 12.8773 22.5 12.274 22.5C11.6707 22.5 11.0911 22.273 10.6574 21.867C6.68597 18.126 1.36371 13.9469 3.95922 7.87966C5.36258 4.59916 8.73129 2.5 12.274 2.5C15.8168 2.5 19.1855 4.59916 20.5889 7.87966C23.1811 13.9393 17.8719 18.1389 13.8906 21.867Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15.7729 11.5C15.7729 13.433 14.2059 15 12.2729 15C10.3399 15 8.77295 13.433 8.77295 11.5C8.77295 9.567 10.3399 8 12.2729 8C14.2059 8 15.7729 9.567 15.7729 11.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Maps</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.77893 5.44531H16.279C17.1074 5.44531 17.779 6.11688 17.779 6.94531V8.44531"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.279 18.4453L14.4219 16.4453M14.4219 16.4453L12.8714 12.8277C12.7723 12.5962 12.5384 12.4453 12.279 12.4453C12.0196 12.4453 11.7857 12.5962 11.6866 12.8277L10.1361 16.4453M14.4219 16.4453H10.1361M10.1361 16.4453L9.27893 18.4453"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.7701 2.5L6.58074 2.50002C6.08378 2.50002 5.57548 2.57294 5.17377 2.86782C3.90005 3.80279 2.91846 5.88801 4.90071 7.7706C5.45728 8.2992 6.23524 8.49082 6.99999 8.49082H18.5566C19.3501 8.49082 20.7731 8.60439 20.7731 11.0273V18.4812C20.7731 20.7007 18.9834 22.5 16.7757 22.5H7.74553C5.54193 22.5 3.93926 20.9426 3.81266 18.5713L3.77917 5.66638"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Eduction</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.35125 8C2.66172 9.35588 2.27307 10.89 2.27307 12.5148C2.27307 18.0295 6.75022 22.5 12.2731 22.5C17.7959 22.5 22.2731 18.0295 22.2731 12.5148C22.2731 10.89 21.8845 9.35588 21.1949 8"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.27307 15.5C9.18519 16.7144 10.6374 17.5 12.2731 17.5C13.9088 17.5 15.361 16.7144 16.2731 15.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2731 6.5C17.7959 6.5 22.2731 5.60457 22.2731 4.5C22.2731 3.39543 17.7959 2.5 12.2731 2.5C6.75022 2.5 2.27307 3.39543 2.27307 4.5C2.27307 5.60457 6.75022 6.5 12.2731 6.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.27307 11.0001C7.27307 10.1716 7.94464 9.50003 8.77307 9.50003C9.6015 9.50003 10.2731 10.1716 10.2731 11.0001M14.2731 11C14.2731 10.1716 14.9447 9.5 15.7731 9.5C16.6015 9.5 17.2731 10.1716 17.2731 11"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Emojis</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9361 9.35C21.5253 7.31022 21.3599 5.53955 20.2967 4.47636C18.0475 2.2271 12.6318 3.99602 8.20043 8.42736C7.72704 8.90074 7.28404 9.38536 6.87307 9.87615M17.6731 15.1238C17.2621 15.6146 16.8191 16.0993 16.3457 16.5726C11.9144 21.004 6.49869 22.7729 4.24943 20.5236C3.10876 19.383 3.00149 17.428 3.75079 15.2"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.9485 9.7998L11.1974 11.8702C10.9836 12.1474 10.8768 12.286 10.943 12.3929C11.0092 12.4998 11.2019 12.4998 11.5872 12.4998H12.9598C13.3451 12.4998 13.5378 12.4998 13.604 12.6068C13.6702 12.7137 13.5633 12.8523 13.3496 13.1295L11.5872 15.1998"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0231 18.2059C9.40452 17.7114 8.79365 17.1659 8.20043 16.5726C3.76909 12.1413 2.00017 6.72562 4.24943 4.47636C5.39009 3.33569 7.34509 3.22842 9.57307 3.97772M14.5231 20.8607C16.9362 21.7813 19.0799 21.7405 20.2967 20.5236C22.546 18.2744 20.7771 12.8587 16.3457 8.42736C15.7525 7.83413 15.1417 7.28862 14.5231 6.79407"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Energy</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.27307 19.5V8.04902C2.27307 6.60516 2.27307 5.88322 2.51639 5.31647C2.81977 4.60985 3.38292 4.0467 4.08954 3.74332C4.65629 3.5 5.37112 3.5 6.82209 3.5H7.31618C7.92126 3.5 8.49382 3.77394 8.87348 4.24509L10.6906 6.5M10.6906 6.5H16.2731C17.6732 6.5 18.3733 6.5 18.9081 6.77248C19.3785 7.01217 19.7609 7.39462 20.0006 7.86502C20.2731 8.3998 20.2731 9.09987 20.2731 10.5V11.5M10.6906 6.5H7.27307"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.43109 16.0144L3.7295 15.2717C4.46336 13.4449 4.8303 12.5316 5.59547 12.0158C6.36064 11.5 7.34864 11.5 9.32464 11.5H17.385C20.0735 11.5 21.4177 11.5 22.0153 12.3787C22.6128 13.2575 22.1136 14.5002 21.1151 16.9856L20.8167 17.7283C20.0828 19.5551 19.7159 20.4684 18.9507 20.9842C18.1855 21.5 17.1975 21.5 15.2215 21.5H7.16119C4.47268 21.5 3.12842 21.5 2.53089 20.6213C1.93336 19.7425 2.4326 18.4998 3.43109 16.0144Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Files</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27307 21.5V18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2731 21.5V15.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2731 6.5V3.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.27307 9.5V3.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.27307 18.5C6.34119 18.5 5.87525 18.5 5.5077 18.3478C5.01765 18.1448 4.6283 17.7554 4.42531 17.2654C4.27307 16.8978 4.27307 16.4319 4.27307 15.5C4.27307 14.5681 4.27307 14.1022 4.42531 13.7346C4.6283 13.2446 5.01765 12.8552 5.5077 12.6522C5.87525 12.5 6.34119 12.5 7.27307 12.5C8.20495 12.5 8.67089 12.5 9.03844 12.6522C9.52849 12.8552 9.91784 13.2446 10.1208 13.7346C10.2731 14.1022 10.2731 14.5681 10.2731 15.5C10.2731 16.4319 10.2731 16.8978 10.1208 17.2654C9.91784 17.7554 9.52849 18.1448 9.03844 18.3478C8.67089 18.5 8.20495 18.5 7.27307 18.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.2731 12.5C16.3412 12.5 15.8753 12.5 15.5077 12.3478C15.0177 12.1448 14.6283 11.7554 14.4253 11.2654C14.2731 10.8978 14.2731 10.4319 14.2731 9.5C14.2731 8.56812 14.2731 8.10218 14.4253 7.73463C14.6283 7.24458 15.0177 6.85523 15.5077 6.65224C15.8753 6.5 16.3412 6.5 17.2731 6.5C18.205 6.5 18.6709 6.5 19.0385 6.65224C19.5285 6.85523 19.9179 7.24458 20.1209 7.73463C20.2731 8.10218 20.2731 8.56812 20.2731 9.5C20.2731 10.4319 20.2731 10.8978 20.1209 11.2654C19.9179 11.7554 19.5285 12.1448 19.0385 12.3478C18.6709 12.5 18.205 12.5 17.2731 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Filter</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27295 20.5L5.27295 21.5M18.2729 20.5L19.2729 21.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.27295 12.5V13.5C3.27295 16.7998 3.27295 18.4497 4.29808 19.4749C5.3232 20.5 6.97312 20.5 10.2729 20.5H14.2729C17.5727 20.5 19.2226 20.5 20.2478 19.4749C21.2729 18.4497 21.2729 16.7998 21.2729 13.5V12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 12.5H22.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4.27295 12.5V6.0234C4.27295 4.62977 5.40272 3.5 6.79635 3.5C7.91461 3.5 8.89949 4.23598 9.21634 5.30841L9.27295 5.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.27295 6.5L10.7729 4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Furniture</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66409 22.1387C2.08704 21.5816 2.15835 20.6398 2.81276 20.1752L6.4444 17.597C6.65628 17.4465 6.94685 17.4737 7.12699 17.6607C7.30059 17.8409 7.32175 18.1183 7.17749 18.3226L4.61165 21.9558C4.15679 22.5999 3.23178 22.6867 2.66409 22.1387Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.7729 13L7.27295 17.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.702 13.0774C17.8069 14.9725 14.1419 15.0529 11.931 12.8419C9.72005 10.631 9.80042 6.96597 11.6955 5.07087C14.1849 2.58144 18.8704 1.48064 21.0813 3.69159C23.2923 5.90254 22.1915 10.588 19.702 13.0774Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Games</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27295 8.5C7.37752 8.5 8.27295 7.60457 8.27295 6.5C8.27295 5.39543 7.37752 4.5 6.27295 4.5C5.16838 4.5 4.27295 5.39543 4.27295 6.5C4.27295 7.60457 5.16838 8.5 6.27295 8.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.2729 20.5C13.3775 20.5 14.2729 19.6046 14.2729 18.5C14.2729 17.3954 13.3775 16.5 12.2729 16.5C11.1683 16.5 10.2729 17.3954 10.2729 18.5C10.2729 19.6046 11.1683 20.5 12.2729 20.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M18.2729 8.5C19.3775 8.5 20.2729 7.60457 20.2729 6.5C20.2729 5.39543 19.3775 4.5 18.2729 4.5C17.1683 4.5 16.2729 5.39543 16.2729 6.5C16.2729 7.60457 17.1683 8.5 18.2729 8.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.29029 9.24067C6.29029 10.9142 6.04832 12.6995 9.49346 12.4855H12.2783M12.2783 12.4855H16.0591C17.1929 12.2648 18.3989 12.4855 18.2659 9.07617M12.2783 12.4855V16.2001"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Git</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29093 20.8051C3.41957 22.4196 8.33243 23.6871 10.6527 20.6645C13.1624 21.8649 17.3019 21.4928 20.6721 19.6134C21.1408 19.3521 21.5842 19.0222 21.8557 18.5593C22.4687 17.5143 22.4832 16.0644 21.3649 13.9251C19.5004 9.27072 16.147 5.18513 14.7931 3.54212C14.5151 3.28865 12.7417 2.92868 11.6602 2.58279C11.1825 2.43477 10.293 2.33664 9.22913 3.73862C8.72477 4.40329 6.4336 6.0357 9.34068 7.13346C9.79106 7.24806 10.1221 7.45939 12.1768 7.08404C12.4444 7.03761 13.1125 7.08404 13.5833 7.91041L14.5666 9.31662C14.6581 9.44752 14.7175 9.59813 14.7357 9.75682C14.908 11.2557 14.9024 13.1323 15.7381 14.0826C14.4473 13.1492 11.0741 12.0406 8.53251 15.1951M2.2749 13.44C3.4831 12.291 6.98498 10.4759 10.6909 13.0216"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Gym</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.273 6C14.273 5.17157 14.9446 4.5 15.773 4.5C16.6014 4.5 17.273 5.17157 17.273 6V12.5M14.273 6V4C14.273 3.17157 13.6014 2.5 12.773 2.5C11.9446 2.5 11.273 3.17157 11.273 4L11.2732 5.5M14.273 6V11.5M11.2732 5.5C11.2729 4.67187 10.6014 4.00064 9.77316 4.00064C8.94473 4.00064 8.27316 4.67221 8.27316 5.50064L8.27295 13.9624L6.65265 12.337C5.94172 11.6239 4.77067 11.6889 4.1426 12.4765C3.66202 13.0791 3.64875 13.9315 4.11033 14.5489L7.71002 19.1471C8.39874 20.0269 8.77295 21.3829 8.77295 22.5002M11.2732 5.5V10.5M18.273 22.5002V21.3356C18.273 20.8038 18.4878 20.2964 18.8382 19.8964C19.2433 19.4339 19.7499 18.7939 19.9419 18.292C20.273 17.4269 20.273 16.3402 20.273 14.1668L20.2734 12.6943L20.273 8C20.273 7.17157 19.6014 6.5 18.773 6.5C17.9446 6.5 17.273 7.17157 17.273 8"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Hands</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.77295 6C2.77295 4.35008 2.77295 3.52513 3.28551 3.01256C3.79808 2.5 4.62303 2.5 6.27295 2.5C7.92287 2.5 8.74782 2.5 9.26039 3.01256C9.77295 3.52513 9.77295 4.35008 9.77295 6C9.77295 7.64992 9.77295 8.47487 9.26039 8.98744C8.74782 9.5 7.92287 9.5 6.27295 9.5C4.62303 9.5 3.79808 9.5 3.28551 8.98744C2.77295 8.47487 2.77295 7.64992 2.77295 6Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.9298 16.1569C5.03437 15.0523 5.58666 14.5 6.27295 14.5C6.95924 14.5 7.51153 15.0523 8.6161 16.1569C9.72067 17.2614 10.2729 17.8137 10.2729 18.5C10.2729 19.1863 9.72067 19.7386 8.6161 20.8431C7.51153 21.9477 6.95924 22.5 6.27295 22.5C5.58666 22.5 5.03437 21.9477 3.9298 20.8431C2.82523 19.7386 2.27295 19.1863 2.27295 18.5C2.27295 17.8137 2.82523 17.2614 3.9298 16.1569Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.27295 9.5V14.5M10.2729 18.5H15.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.2729 18.5C15.2729 16.8501 15.2729 16.0251 15.7855 15.5126C16.298 15 17.123 15 18.7729 15C20.4228 15 21.2478 15 21.7603 15.5126C22.2729 16.0251 22.2729 16.8501 22.2729 18.5C22.2729 20.1499 22.2729 20.9749 21.7603 21.4874C21.2478 22 20.4228 22 18.7729 22C17.123 22 16.298 22 15.7855 21.4874C15.2729 20.9749 15.2729 20.1499 15.2729 18.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Hierarchy</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2732 17.5C14.4737 18.1224 13.4234 18.5 12.2732 18.5C11.1229 18.5 10.0727 18.1224 9.27319 17.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.62458 13.7135C2.27156 11.4162 2.09505 10.2676 2.52936 9.24938C2.96366 8.23112 3.92722 7.53443 5.85433 6.14106L7.29418 5.1C9.69148 3.36667 10.8901 2.5 12.2732 2.5C13.6562 2.5 14.8549 3.36667 17.2522 5.1L18.692 6.14106C20.6192 7.53443 21.5827 8.23112 22.017 9.24938C22.4513 10.2676 22.2748 11.4162 21.9218 13.7135L21.6208 15.6724C21.1203 18.9289 20.8701 20.5572 19.7022 21.5286C18.5343 22.5 16.8268 22.5 13.412 22.5H11.1344C7.71953 22.5 6.0121 22.5 4.84419 21.5286C3.67628 20.5572 3.42606 18.9289 2.92562 15.6724L2.62458 13.7135Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Home</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27295 18.4745C6.40165 19.7829 6.69251 20.6636 7.34986 21.3209C8.52891 22.5 10.4265 22.5 14.2218 22.5C18.0171 22.5 19.9148 22.5 21.0938 21.3209C22.2729 20.1419 22.2729 18.2442 22.2729 14.4489C22.2729 10.6536 22.2729 8.75596 21.0938 7.57691C20.4365 6.91956 19.5558 6.6287 18.2474 6.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.27295 10.5C2.27295 6.72876 2.27295 4.84315 3.44452 3.67157C4.6161 2.5 6.50171 2.5 10.2729 2.5C14.0441 2.5 15.9298 2.5 17.1013 3.67157C18.2729 4.84315 18.2729 6.72876 18.2729 10.5C18.2729 14.2712 18.2729 16.1569 17.1013 17.3284C15.9298 18.5 14.0441 18.5 10.2729 18.5C6.50171 18.5 4.6161 18.5 3.44452 17.3284C2.27295 16.1569 2.27295 14.2712 2.27295 10.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5.27295 18.5C8.69356 13.7487 12.5376 7.44746 18.2729 12.1734"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Images</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.15283 12.3131C3.15283 17.4534 7.31986 21.6204 12.4601 21.6204C16.6898 21.6204 20.2604 18.799 21.3928 14.9356C20.0288 15.9267 18.3502 16.5112 16.5352 16.5112C11.966 16.5112 8.26203 12.8072 8.26203 8.23802C8.26203 6.42297 8.84653 4.74444 9.83756 3.38037C5.97418 4.51278 3.15283 8.08345 3.15283 12.3131Z"
                      stroke="#6EBB21"
                      stroke-width="1.44"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4732 9.14037C11.1462 6.26037 15.1157 4.82037 16.1128 3.38037C17.1102 4.82037 21.0797 6.26037 18.7526 9.14037M13.4732 9.14037H18.7526M13.4732 9.14037V15.8604M18.7526 9.14037V15.8604"
                      stroke="#6EBB21"
                      stroke-width="1.44"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Islamic</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 20.5V19M16.2729 20.5V19M20.2729 20.5V19"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2729 20.5H22.2729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.8285 11.5H10.7173C10.4719 11.5 10.2729 11.7487 10.2729 12.0556C10.2729 14.5102 11.8648 16.5 13.8285 16.5H18.7174C20.6811 16.5 22.2729 14.5102 22.2729 12.0556C22.2729 11.7487 22.0739 11.5 21.8285 11.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.2729 8.5C14.9249 7.47775 12.6209 5.52225 14.2729 4.5M16.2729 8.5C17.9249 7.47775 15.6209 5.52225 17.2729 4.5M19.2729 8.5C20.9249 7.47775 18.6209 5.52225 20.2729 4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.2729 11.5L8.27295 9.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.64092 4.86797C4.13154 4.37734 4.92699 4.37734 5.41761 4.86797L7.90498 7.35534C8.39561 7.84596 8.39561 8.64141 7.90498 9.13203C7.41436 9.62266 6.61891 9.62266 6.12829 9.13203L3.64092 6.64466C3.15029 6.15404 3.15029 5.35859 3.64092 4.86797Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Kitchen</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2729 14.5059L6.11668 21.7328C5.29059 22.7026 3.81296 22.7616 2.91217 21.8608C2.01138 20.96 2.07039 19.4824 3.04015 18.6563L10.2671 12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.2729 12.4048L16.1777 18.5M12.3681 2.5L6.27295 8.59524M11.6063 3.26186L7.0349 7.83329C7.0349 7.83329 9.32061 10.8809 11.6063 13.1666C13.892 15.4523 16.9396 17.7381 16.9396 17.7381L21.511 13.1666C21.511 13.1666 19.2253 10.119 16.9396 7.83329C14.6539 5.54758 11.6063 3.26186 11.6063 3.26186Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Legal</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.77295 15L14.7729 10"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.1192 15.1095L19.7287 12.5C21.7876 10.4411 21.7876 7.10302 19.7287 5.04415C17.6699 2.98528 14.3318 2.98528 12.2729 5.04415L9.6634 7.6537M14.8824 17.3463L12.2729 19.9558C10.2141 22.0147 6.87598 22.0147 4.81711 19.9558C2.75823 17.8969 2.75823 14.5588 4.81711 12.5L7.42665 9.89045"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Link</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.29626 6C4.87121 7.61238 3.27295 10.3695 3.27295 13.5C3.27295 18.4706 7.30239 22.5 12.2729 22.5C17.2435 22.5 21.2729 18.4706 21.2729 13.5C21.2729 10.3695 19.6746 7.61238 17.2496 6"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2729 2.5V10.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Login</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2729 20.5C18.3775 20.5 19.2729 19.6046 19.2729 18.5C19.2729 17.3954 18.3775 16.5 17.2729 16.5C16.1684 16.5 15.2729 17.3954 15.2729 18.5C15.2729 19.6046 16.1684 20.5 17.2729 20.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.27295 20.5C8.37752 20.5 9.27295 19.6046 9.27295 18.5C9.27295 17.3954 8.37752 16.5 7.27295 16.5C6.16838 16.5 5.27295 17.3954 5.27295 18.5C5.27295 19.6046 6.16838 20.5 7.27295 20.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M5.27295 18.4724C4.17623 18.4178 3.49205 18.2546 3.00518 17.7678C2.51831 17.2809 2.35517 16.5967 2.3005 15.5M9.27295 18.5H15.2729M19.2729 18.4724C20.3696 18.4178 21.0538 18.2546 21.5407 17.7678C22.2729 17.0355 22.2729 15.857 22.2729 13.5V11.5H17.5729C16.8284 11.5 16.4561 11.5 16.1549 11.4021C15.546 11.2043 15.0686 10.7269 14.8708 10.118C14.7729 9.81677 14.7729 9.44451 14.7729 8.7C14.7729 7.58323 14.7729 7.02485 14.6261 6.57295C14.3293 5.65964 13.6133 4.94358 12.7 4.64683C12.2481 4.5 11.6897 4.5 10.5729 4.5H2.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 8.5H8.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 11.5H6.27295"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.7729 6.5H16.5941C18.0495 6.5 18.7771 6.5 19.3693 6.85371C19.9615 7.20742 20.3065 7.84811 20.9965 9.1295L22.2729 11.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Logistics</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27295 6.5L9.77295 7.5C9.77295 7.5 10.2729 5.5 12.2729 5.5C13.8729 5.5 14.4393 7.36545 14.2729 9C7.77295 9 6.77295 12 6.77295 13.5C6.77295 15 7.77295 17.5 10.7729 17.5C13.2729 17.5 14.7729 15.5 14.7729 15.5L15.7729 17L18.2729 15C18.2729 15 17.2729 14.1667 17.2729 13V9.5C17.2729 9.5 17.941 3 12.2729 3C7.87295 3 7.27295 6.5 7.27295 6.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7729 11.3555C13.7729 12.8555 12.8534 14.8555 11.4743 14.8555C9.5788 14.8555 9.63539 11.3555 13.7729 11.3555Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.27295 18C2.27295 18 10.7729 24.0844 19.2729 20.0281C19.2729 20.0281 10.7729 25.6056 2.27295 18Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.2629 18.2025C22.4089 19.5999 20.9143 21.5 20.9143 21.5C20.9143 21.5 21.8937 19.9076 21.6974 18.2025C20.0941 17.5648 18.2729 18.2895 18.2729 18.2895C18.2729 18.2895 19.7753 17.185 21.6974 17.5888C21.9994 17.6522 22.2308 17.8956 22.2629 18.2025Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Logos</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8906 21.867C13.457 22.273 12.8773 22.5 12.274 22.5C11.6707 22.5 11.0911 22.273 10.6574 21.867C6.68597 18.126 1.36371 13.9469 3.95922 7.87966C5.36258 4.59916 8.73129 2.5 12.274 2.5C15.8168 2.5 19.1855 4.59916 20.5889 7.87966C23.1811 13.9393 17.8719 18.1389 13.8906 21.867Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15.7729 11.5C15.7729 13.433 14.2059 15 12.2729 15C10.3399 15 8.77295 13.433 8.77295 11.5C8.77295 9.567 10.3399 8 12.2729 8C14.2059 8 15.7729 9.567 15.7729 11.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Maps</p>
                </div>
              </ul>
            </div>
            <div className="relative z-20 overflow-hidden">
              <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll">
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7731 8.5L8.77307 16.5M15.2731 16.5V15M15.2731 15V13.5M15.2731 15H13.7731M15.2731 15H16.7731M8.77307 10H11.7731"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7731 22.5C18.2959 22.5 22.7731 18.0228 22.7731 12.5C22.7731 6.97715 18.2959 2.5 12.7731 2.5C7.25022 2.5 2.77307 6.97715 2.77307 12.5C2.77307 18.0228 7.25022 22.5 12.7731 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Mathematics</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7731 14.8045C17.7731 14.4588 17.7731 14.286 17.8251 14.132C17.9763 13.6844 18.3749 13.5108 18.7742 13.3289C19.2231 13.1244 19.4475 13.0222 19.6699 13.0042C19.9224 12.9838 20.1753 13.0382 20.3911 13.1593C20.6772 13.3198 20.8767 13.6249 21.081 13.873C22.0244 15.0188 22.496 15.5918 22.6686 16.2236C22.8079 16.7334 22.8079 17.2666 22.6686 17.7764C22.4169 18.6979 21.6216 19.4704 21.0329 20.1854C20.7318 20.5511 20.5812 20.734 20.3911 20.8407C20.1753 20.9618 19.9224 21.0162 19.6699 20.9958C19.4475 20.9778 19.2231 20.8756 18.7742 20.6711C18.3749 20.4892 17.9763 20.3156 17.8251 19.868C17.7731 19.714 17.7731 19.5412 17.7731 19.1955V14.8045Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.77307 14.8046C7.77307 14.3694 7.76085 13.9782 7.40898 13.6722C7.281 13.5609 7.11132 13.4836 6.77198 13.329C6.32308 13.1246 6.09863 13.0224 5.87623 13.0044C5.20898 12.9504 4.84999 13.4058 4.4652 13.8732C3.52182 15.019 3.05013 15.5919 2.87753 16.2237C2.73825 16.7336 2.73825 17.2668 2.87753 17.7766C3.12927 18.6981 3.92459 19.4705 4.51328 20.1856C4.88436 20.6363 5.23884 21.0475 5.87623 20.996C6.09863 20.978 6.32308 20.8757 6.77198 20.6713C7.11132 20.5167 7.281 20.4394 7.40898 20.3281C7.76085 20.0221 7.77307 19.631 7.77307 19.1957V14.8046Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M19.7731 13V11C19.7731 7.13401 16.6391 4 12.7731 4C8.90708 4 5.77307 7.13401 5.77307 11V13"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Media</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7256 5.34083C15.9528 4.11361 16.5664 3.5 17.3289 3.5C18.0914 3.5 18.705 4.11361 19.9323 5.34083C21.1595 6.56806 21.7731 7.18167 21.7731 7.94417C21.7731 8.70667 21.1595 9.32028 19.9323 10.5475M10.8206 19.6592C9.59335 20.8864 8.97974 21.5 8.21724 21.5C7.45474 21.5 6.84113 20.8864 5.61391 19.6592C4.38668 18.4319 3.77307 17.8183 3.77307 17.0558C3.77307 16.2933 4.38668 15.6797 5.61391 14.4525"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5664 12.5L5.61391 10.5475C4.38668 9.32028 3.77307 8.70667 3.77307 7.94417C3.77307 7.18167 4.38668 6.56806 5.61391 5.34083C6.84113 4.11361 7.45474 3.5 8.21724 3.5C8.97974 3.5 9.59335 4.11361 10.8206 5.34083L12.7731 7.29333M7.5664 12.5L12.7731 7.29333M7.5664 12.5L12.7731 17.7067M12.7731 7.29333L17.9798 12.5M12.7731 17.7067L14.7256 19.6592C15.9528 20.8864 16.5664 21.5 17.3289 21.5C18.0914 21.5 18.705 20.8864 19.9323 19.6592C21.1595 18.4319 21.7731 17.8183 21.7731 17.0558C21.7731 16.2933 21.1595 15.6797 19.9323 14.4525L17.9798 12.5M12.7731 17.7067L17.9798 12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Medical</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.20142 4.02383C6.26485 1.80171 21.7857 7.24513 21.7729 9.23253C21.7584 11.4862 15.7116 12.1795 14.0355 12.6497C13.0277 12.9325 12.7577 13.2223 12.5253 14.2792C11.4728 19.0657 10.9444 21.4464 9.74006 21.4997C7.82032 21.5845 2.18767 6.19242 4.20142 4.02383Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Mouse</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7729 2.5V4.5M12.7729 2.5V4.5M7.77295 2.5V4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.27295 10.5C4.27295 7.20017 4.27295 5.55025 5.29808 4.52513C6.3232 3.5 7.97312 3.5 11.2729 3.5H14.2729C17.5727 3.5 19.2226 3.5 20.2478 4.52513C21.2729 5.55025 21.2729 7.20017 21.2729 10.5V15.5C21.2729 18.7998 21.2729 20.4497 20.2478 21.4749C19.2226 22.5 17.5727 22.5 14.2729 22.5H11.2729C7.97312 22.5 6.3232 22.5 5.29808 21.4749C4.27295 20.4497 4.27295 18.7998 4.27295 15.5V10.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.77295 15.5H12.7729M8.77295 10.5H16.7729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Notes</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.77295 17.5H21.7729V8.5C21.7729 5.67157 21.7729 4.25736 20.8942 3.37868C20.0155 2.5 18.6013 2.5 15.7729 2.5H9.77295C6.94452 2.5 5.53031 2.5 4.65163 3.37868C3.77295 4.25736 3.77295 5.67157 3.77295 8.5V17.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.77295 17.5H22.7729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.77295 22.5L12.773 19.5L17.7729 22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7729 17.6973V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Presentation</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.27295 12.5C3.27295 8.02166 3.27295 5.78249 4.66419 4.39124C6.05544 3 8.29461 3 12.7729 3C17.2512 3 19.4905 3 20.8818 4.39124C22.273 5.78249 22.2729 8.02166 22.2729 12.5C22.2729 16.9783 22.273 19.2175 20.8818 20.6088C19.4905 22 17.2512 22 12.7729 22C8.29461 22 6.05544 22 4.66419 20.6088C3.27295 19.2175 3.27295 16.9783 3.27295 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.7729 16.5C17.389 16.5 17.8884 15.9883 17.8884 15.3571V14.1162C17.8884 13.8131 18.0059 13.5224 18.2151 13.3081L18.6095 12.9041C18.8274 12.6809 18.8274 12.3191 18.6095 12.0959L18.2151 11.6919C18.0059 11.4776 17.8884 11.1869 17.8884 10.8838V9.64286C17.8884 9.01167 17.389 8.5 16.7729 8.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.77295 16.5C8.15687 16.5 7.65743 15.9883 7.65743 15.3571V14.1162C7.65743 13.8131 7.53991 13.5224 7.33071 13.3081L6.93631 12.9041C6.7185 12.6809 6.7185 12.3191 6.93631 12.0959L7.33071 11.6919C7.53991 11.4776 7.65743 11.1869 7.65743 10.8838V9.64286C7.65743 9.01167 8.15687 8.5 8.77295 8.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7729 12.5H10.7819M14.7639 12.5H14.7729"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Programming</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.1271 4.14593C19.2815 2.3004 14.0452 4.54455 9.43132 9.15837C4.8175 13.7722 2.57335 19.0085 4.41888 20.8541C6.26441 22.6996 11.5008 20.4555 16.1146 15.8416C20.7285 11.2278 22.9726 5.99146 21.1271 4.14593Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.41888 4.14593C2.57335 5.99146 4.8175 11.2278 9.43132 15.8416C14.0452 20.4555 19.2815 22.6996 21.1271 20.8541C22.9726 19.0085 20.7285 13.7722 16.1146 9.15837C11.5008 4.54455 6.26441 2.3004 4.41888 4.14593Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7819 12.5H12.7729"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Technology</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2729 18L22.7729 22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.7729 11.5C20.7729 6.52944 16.7435 2.5 11.7729 2.5C6.80239 2.5 2.77295 6.52944 2.77295 11.5C2.77295 16.4706 6.80239 20.5 11.7729 20.5C16.7435 20.5 20.7729 16.4706 20.7729 11.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Search</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.04076 19.3447C5.26564 21.015 6.64908 22.3235 8.33261 22.4009C9.74922 22.466 11.1882 22.5 12.7729 22.5C14.3576 22.5 15.7966 22.466 17.2132 22.4009C18.8968 22.3235 20.2802 21.015 20.5051 19.3447C20.6519 18.2547 20.7729 17.1376 20.7729 16C20.7729 14.8624 20.6519 13.7453 20.5051 12.6553C20.2802 10.985 18.8968 9.67649 17.2132 9.59909C15.7966 9.53397 14.3576 9.5 12.7729 9.5C11.1882 9.5 9.74922 9.53397 8.33261 9.59909C6.64908 9.67649 5.26564 10.985 5.04076 12.6553C4.894 13.7453 4.77295 14.8624 4.77295 16C4.77295 17.1376 4.894 18.2547 5.04076 19.3447Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.27295 9.5V7C8.27295 4.51472 10.2877 2.5 12.7729 2.5C15.2582 2.5 17.2729 4.51472 17.2729 7V9.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.77295 18V16.5C8.77295 14.2909 10.5638 12.5 12.7729 12.5C14.982 12.5 16.7729 14.2909 16.7729 16.5V18"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 19.5V16.5C11.2729 15.6716 11.9445 15 12.7729 15C13.6013 15 14.2729 15.6716 14.2729 16.5M14.2729 19.5V18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Security</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0904 7.64139L21.5968 6.78479C21.2235 6.13696 21.0369 5.81305 20.7193 5.68388C20.4017 5.55472 20.0425 5.65664 19.3242 5.86048L18.104 6.20418C17.6454 6.30994 17.1642 6.24994 16.7455 6.03479L16.4086 5.84042C16.0495 5.61043 15.7733 5.27133 15.6204 4.87274L15.2865 3.87536C15.0669 3.21534 14.9571 2.88533 14.6957 2.69657C14.4344 2.50781 14.0872 2.50781 13.3928 2.50781H12.278C11.5837 2.50781 11.2365 2.50781 10.9751 2.69657C10.7138 2.88533 10.604 3.21534 10.3844 3.87536L10.0505 4.87274C9.8976 5.27133 9.6214 5.61043 9.26232 5.84042L8.92544 6.03479C8.50669 6.24994 8.02554 6.30994 7.56693 6.20418L6.3467 5.86048C5.62836 5.65664 5.2692 5.55472 4.95162 5.68388C4.63404 5.81305 4.4474 6.13696 4.0741 6.78479L3.58052 7.64139C3.23061 8.24864 3.05565 8.55227 3.08961 8.87549C3.12356 9.19871 3.35778 9.45918 3.82621 9.98012L4.85725 11.1328C5.10925 11.4518 5.28816 12.0078 5.28816 12.5077C5.28816 13.0078 5.10931 13.5636 4.85728 13.8827L3.82621 15.0354C3.35778 15.5564 3.12357 15.8168 3.08961 16.1401C3.05565 16.4633 3.23061 16.7669 3.58052 17.3741L4.07409 18.2307C4.44738 18.8785 4.63404 19.2025 4.95162 19.3316C5.2692 19.4608 5.62837 19.3589 6.34672 19.155L7.56689 18.8113C8.02558 18.7055 8.50682 18.7656 8.92562 18.9808L9.26245 19.1752C9.62146 19.4052 9.89759 19.7442 10.0504 20.1428L10.3844 21.1403C10.604 21.8003 10.7138 22.1303 10.9751 22.3191C11.2365 22.5078 11.5837 22.5078 12.278 22.5078H13.3928C14.0872 22.5078 14.4344 22.5078 14.6957 22.3191C14.9571 22.1303 15.0669 21.8003 15.2865 21.1403L15.6205 20.1428C15.7733 19.7442 16.0494 19.4052 16.4085 19.1752L16.7453 18.9808C17.1641 18.7656 17.6453 18.7055 18.104 18.8113L19.3242 19.155C20.0425 19.3589 20.4017 19.4608 20.7193 19.3316C21.0369 19.2025 21.2235 18.8785 21.5968 18.2307L22.0904 17.3741C22.4403 16.7669 22.6152 16.4633 22.5813 16.1401C22.5473 15.8168 22.3131 15.5564 21.8447 15.0354L20.8136 13.8827C20.5616 13.5636 20.3827 13.0078 20.3827 12.5077C20.3827 12.0078 20.5617 11.4518 20.8136 11.1328L21.8447 9.98012C22.3131 9.45918 22.5473 9.19871 22.5813 8.87549C22.6152 8.55227 22.4403 8.24864 22.0904 7.64139Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.2924 12.5C16.2924 14.433 14.7254 16 12.7924 16C10.8594 16 9.29248 14.433 9.29248 12.5C9.29248 10.567 10.8594 9 12.7924 9C14.7254 9 16.2924 10.567 16.2924 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Settings</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.69384 6.42089C8.93131 4.18342 10.0501 3.06468 11.3587 2.69562C12.2835 2.43479 13.2625 2.43479 14.1873 2.69562C15.4959 3.06468 16.6146 4.18342 18.8521 6.42089C21.0896 8.65836 22.2083 9.7771 22.5774 11.0857C22.8382 12.0105 22.8382 12.9895 22.5774 13.9143C22.2083 15.2229 21.0896 16.3416 18.8521 18.5791C16.6146 20.8166 15.4959 21.9353 14.1873 22.3044C13.2625 22.5652 12.2835 22.5652 11.3587 22.3044C10.0501 21.9353 8.93131 20.8166 6.69384 18.5791C4.45637 16.3416 3.33763 15.2229 2.96857 13.9143C2.70774 12.9895 2.70774 12.0105 2.96857 11.0857C3.33763 9.7771 4.45637 8.65836 6.69384 6.42089Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Shapes</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7729 12.5C22.7729 18.0228 18.2957 22.5 12.7729 22.5C7.2501 22.5 2.77295 18.0228 2.77295 12.5C2.77295 6.97715 7.2501 2.5 12.7729 2.5C18.2957 2.5 22.7729 6.97715 22.7729 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.7729 22.5C16.0866 22.5 18.7729 18.0228 18.7729 12.5C18.7729 6.97715 16.0866 2.5 12.7729 2.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.7727 7.5H11.7817"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7729 15C10.7729 15.8284 10.1014 16.5 9.27295 16.5C8.44452 16.5 7.77295 15.8284 7.77295 15C7.77295 14.1716 8.44452 13.5 9.27295 13.5C10.1014 13.5 10.7729 14.1716 10.7729 15Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Space</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.389 20.5H19.8792C21.029 20.5 21.9436 19.9761 22.7648 19.2436C24.8509 17.3826 19.947 15.5 18.2729 15.5M16.2729 5.56877C16.5 5.52373 16.7358 5.5 16.9777 5.5C18.7976 5.5 20.2729 6.84315 20.2729 8.5C20.2729 10.1568 18.7976 11.5 16.9777 11.5C16.7358 11.5 16.5 11.4763 16.2729 11.4312"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.25426 16.6112C4.07529 17.243 0.984088 18.5331 2.86683 20.1474C3.78654 20.936 4.81086 21.5 6.09867 21.5H13.4473C14.7351 21.5 15.7594 20.936 16.6791 20.1474C18.5619 18.5331 15.4707 17.243 14.2917 16.6112C11.527 15.1296 8.01894 15.1296 5.25426 16.6112Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.7729 8C13.7729 10.2091 11.982 12 9.77295 12C7.56381 12 5.77295 10.2091 5.77295 8C5.77295 5.79086 7.56381 4 9.77295 4C11.982 4 13.7729 5.79086 13.7729 8Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Users</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2505 9.2803L18.2729 9.28025C20.7582 9.28025 22.7729 11.2212 22.7729 13.6154C22.7729 15.3176 21.7546 16.7906 20.2729 17.5M18.2505 9.2803C18.2653 9.12164 18.2729 8.96095 18.2729 8.79856C18.2729 5.87225 15.8105 3.5 12.7729 3.5C9.89619 3.5 7.53528 5.62773 7.29337 8.33875M18.2505 9.2803C18.1482 10.3732 17.7015 11.3704 17.0157 12.1704M7.29337 8.33875C4.75693 8.57128 2.77295 10.6293 2.77295 13.1338C2.77295 15.066 3.95397 16.7326 5.65854 17.5M7.29337 8.33875C7.45121 8.32428 7.61118 8.31688 7.77295 8.31688C8.89877 8.31688 9.93769 8.67534 10.7734 9.28025"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7707 17.4974L12.7751 17.5052M16.7684 15.5L16.7729 15.5078M8.77295 15.5L8.77744 15.5078M16.7684 19.4948L16.7729 19.5026M8.77295 19.4948L8.77744 19.5026M12.7707 21.4922L12.7751 21.5"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Weather</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7729 11.5V20.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.7729 9.5C14.7729 10.6046 13.8775 11.5 12.7729 11.5C11.6683 11.5 10.7729 10.6046 10.7729 9.5C10.7729 8.39543 11.6683 7.5 12.7729 7.5C13.8775 7.5 14.7729 8.39543 14.7729 9.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.7317 6.5C18.3915 7.36961 18.7729 8.39801 18.7729 9.5C18.7729 10.602 18.3915 11.6304 17.7317 12.5M7.81412 6.5C7.15438 7.36961 6.77295 8.39801 6.77295 9.5C6.77295 10.602 7.15438 11.6304 7.81412 12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.0889 4.5C22.1525 5.93008 22.7729 7.64984 22.7729 9.5C22.7729 11.3502 22.1525 13.0699 21.0889 14.5M4.45704 4.5C3.39331 5.93008 2.77295 7.64984 2.77295 9.5C2.77295 11.3502 3.39331 13.0699 4.45704 14.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Wifi</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7731 8.5L8.77307 16.5M15.2731 16.5V15M15.2731 15V13.5M15.2731 15H13.7731M15.2731 15H16.7731M8.77307 10H11.7731"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7731 22.5C18.2959 22.5 22.7731 18.0228 22.7731 12.5C22.7731 6.97715 18.2959 2.5 12.7731 2.5C7.25022 2.5 2.77307 6.97715 2.77307 12.5C2.77307 18.0228 7.25022 22.5 12.7731 22.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Mathematics</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7731 14.8045C17.7731 14.4588 17.7731 14.286 17.8251 14.132C17.9763 13.6844 18.3749 13.5108 18.7742 13.3289C19.2231 13.1244 19.4475 13.0222 19.6699 13.0042C19.9224 12.9838 20.1753 13.0382 20.3911 13.1593C20.6772 13.3198 20.8767 13.6249 21.081 13.873C22.0244 15.0188 22.496 15.5918 22.6686 16.2236C22.8079 16.7334 22.8079 17.2666 22.6686 17.7764C22.4169 18.6979 21.6216 19.4704 21.0329 20.1854C20.7318 20.5511 20.5812 20.734 20.3911 20.8407C20.1753 20.9618 19.9224 21.0162 19.6699 20.9958C19.4475 20.9778 19.2231 20.8756 18.7742 20.6711C18.3749 20.4892 17.9763 20.3156 17.8251 19.868C17.7731 19.714 17.7731 19.5412 17.7731 19.1955V14.8045Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.77307 14.8046C7.77307 14.3694 7.76085 13.9782 7.40898 13.6722C7.281 13.5609 7.11132 13.4836 6.77198 13.329C6.32308 13.1246 6.09863 13.0224 5.87623 13.0044C5.20898 12.9504 4.84999 13.4058 4.4652 13.8732C3.52182 15.019 3.05013 15.5919 2.87753 16.2237C2.73825 16.7336 2.73825 17.2668 2.87753 17.7766C3.12927 18.6981 3.92459 19.4705 4.51328 20.1856C4.88436 20.6363 5.23884 21.0475 5.87623 20.996C6.09863 20.978 6.32308 20.8757 6.77198 20.6713C7.11132 20.5167 7.281 20.4394 7.40898 20.3281C7.76085 20.0221 7.77307 19.631 7.77307 19.1957V14.8046Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M19.7731 13V11C19.7731 7.13401 16.6391 4 12.7731 4C8.90708 4 5.77307 7.13401 5.77307 11V13"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Media</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7256 5.34083C15.9528 4.11361 16.5664 3.5 17.3289 3.5C18.0914 3.5 18.705 4.11361 19.9323 5.34083C21.1595 6.56806 21.7731 7.18167 21.7731 7.94417C21.7731 8.70667 21.1595 9.32028 19.9323 10.5475M10.8206 19.6592C9.59335 20.8864 8.97974 21.5 8.21724 21.5C7.45474 21.5 6.84113 20.8864 5.61391 19.6592C4.38668 18.4319 3.77307 17.8183 3.77307 17.0558C3.77307 16.2933 4.38668 15.6797 5.61391 14.4525"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5664 12.5L5.61391 10.5475C4.38668 9.32028 3.77307 8.70667 3.77307 7.94417C3.77307 7.18167 4.38668 6.56806 5.61391 5.34083C6.84113 4.11361 7.45474 3.5 8.21724 3.5C8.97974 3.5 9.59335 4.11361 10.8206 5.34083L12.7731 7.29333M7.5664 12.5L12.7731 7.29333M7.5664 12.5L12.7731 17.7067M12.7731 7.29333L17.9798 12.5M12.7731 17.7067L14.7256 19.6592C15.9528 20.8864 16.5664 21.5 17.3289 21.5C18.0914 21.5 18.705 20.8864 19.9323 19.6592C21.1595 18.4319 21.7731 17.8183 21.7731 17.0558C21.7731 16.2933 21.1595 15.6797 19.9323 14.4525L17.9798 12.5M12.7731 17.7067L17.9798 12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Medical</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.20142 4.02383C6.26485 1.80171 21.7857 7.24513 21.7729 9.23253C21.7584 11.4862 15.7116 12.1795 14.0355 12.6497C13.0277 12.9325 12.7577 13.2223 12.5253 14.2792C11.4728 19.0657 10.9444 21.4464 9.74006 21.4997C7.82032 21.5845 2.18767 6.19242 4.20142 4.02383Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Mouse</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7729 2.5V4.5M12.7729 2.5V4.5M7.77295 2.5V4.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.27295 10.5C4.27295 7.20017 4.27295 5.55025 5.29808 4.52513C6.3232 3.5 7.97312 3.5 11.2729 3.5H14.2729C17.5727 3.5 19.2226 3.5 20.2478 4.52513C21.2729 5.55025 21.2729 7.20017 21.2729 10.5V15.5C21.2729 18.7998 21.2729 20.4497 20.2478 21.4749C19.2226 22.5 17.5727 22.5 14.2729 22.5H11.2729C7.97312 22.5 6.3232 22.5 5.29808 21.4749C4.27295 20.4497 4.27295 18.7998 4.27295 15.5V10.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.77295 15.5H12.7729M8.77295 10.5H16.7729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Notes</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.77295 17.5H21.7729V8.5C21.7729 5.67157 21.7729 4.25736 20.8942 3.37868C20.0155 2.5 18.6013 2.5 15.7729 2.5H9.77295C6.94452 2.5 5.53031 2.5 4.65163 3.37868C3.77295 4.25736 3.77295 5.67157 3.77295 8.5V17.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.77295 17.5H22.7729"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.77295 22.5L12.773 19.5L17.7729 22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7729 17.6973V22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Presentation</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.27295 12.5C3.27295 8.02166 3.27295 5.78249 4.66419 4.39124C6.05544 3 8.29461 3 12.7729 3C17.2512 3 19.4905 3 20.8818 4.39124C22.273 5.78249 22.2729 8.02166 22.2729 12.5C22.2729 16.9783 22.273 19.2175 20.8818 20.6088C19.4905 22 17.2512 22 12.7729 22C8.29461 22 6.05544 22 4.66419 20.6088C3.27295 19.2175 3.27295 16.9783 3.27295 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.7729 16.5C17.389 16.5 17.8884 15.9883 17.8884 15.3571V14.1162C17.8884 13.8131 18.0059 13.5224 18.2151 13.3081L18.6095 12.9041C18.8274 12.6809 18.8274 12.3191 18.6095 12.0959L18.2151 11.6919C18.0059 11.4776 17.8884 11.1869 17.8884 10.8838V9.64286C17.8884 9.01167 17.389 8.5 16.7729 8.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.77295 16.5C8.15687 16.5 7.65743 15.9883 7.65743 15.3571V14.1162C7.65743 13.8131 7.53991 13.5224 7.33071 13.3081L6.93631 12.9041C6.7185 12.6809 6.7185 12.3191 6.93631 12.0959L7.33071 11.6919C7.53991 11.4776 7.65743 11.1869 7.65743 10.8838V9.64286C7.65743 9.01167 8.15687 8.5 8.77295 8.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7729 12.5H10.7819M14.7639 12.5H14.7729"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Programming</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.1271 4.14593C19.2815 2.3004 14.0452 4.54455 9.43132 9.15837C4.8175 13.7722 2.57335 19.0085 4.41888 20.8541C6.26441 22.6996 11.5008 20.4555 16.1146 15.8416C20.7285 11.2278 22.9726 5.99146 21.1271 4.14593Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.41888 4.14593C2.57335 5.99146 4.8175 11.2278 9.43132 15.8416C14.0452 20.4555 19.2815 22.6996 21.1271 20.8541C22.9726 19.0085 20.7285 13.7722 16.1146 9.15837C11.5008 4.54455 6.26441 2.3004 4.41888 4.14593Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7819 12.5H12.7729"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Technology</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2729 18L22.7729 22.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.7729 11.5C20.7729 6.52944 16.7435 2.5 11.7729 2.5C6.80239 2.5 2.77295 6.52944 2.77295 11.5C2.77295 16.4706 6.80239 20.5 11.7729 20.5C16.7435 20.5 20.7729 16.4706 20.7729 11.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Search</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.04076 19.3447C5.26564 21.015 6.64908 22.3235 8.33261 22.4009C9.74922 22.466 11.1882 22.5 12.7729 22.5C14.3576 22.5 15.7966 22.466 17.2132 22.4009C18.8968 22.3235 20.2802 21.015 20.5051 19.3447C20.6519 18.2547 20.7729 17.1376 20.7729 16C20.7729 14.8624 20.6519 13.7453 20.5051 12.6553C20.2802 10.985 18.8968 9.67649 17.2132 9.59909C15.7966 9.53397 14.3576 9.5 12.7729 9.5C11.1882 9.5 9.74922 9.53397 8.33261 9.59909C6.64908 9.67649 5.26564 10.985 5.04076 12.6553C4.894 13.7453 4.77295 14.8624 4.77295 16C4.77295 17.1376 4.894 18.2547 5.04076 19.3447Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.27295 9.5V7C8.27295 4.51472 10.2877 2.5 12.7729 2.5C15.2582 2.5 17.2729 4.51472 17.2729 7V9.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.77295 18V16.5C8.77295 14.2909 10.5638 12.5 12.7729 12.5C14.982 12.5 16.7729 14.2909 16.7729 16.5V18"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2729 19.5V16.5C11.2729 15.6716 11.9445 15 12.7729 15C13.6013 15 14.2729 15.6716 14.2729 16.5M14.2729 19.5V18.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Security</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.0904 7.64139L21.5968 6.78479C21.2235 6.13696 21.0369 5.81305 20.7193 5.68388C20.4017 5.55472 20.0425 5.65664 19.3242 5.86048L18.104 6.20418C17.6454 6.30994 17.1642 6.24994 16.7455 6.03479L16.4086 5.84042C16.0495 5.61043 15.7733 5.27133 15.6204 4.87274L15.2865 3.87536C15.0669 3.21534 14.9571 2.88533 14.6957 2.69657C14.4344 2.50781 14.0872 2.50781 13.3928 2.50781H12.278C11.5837 2.50781 11.2365 2.50781 10.9751 2.69657C10.7138 2.88533 10.604 3.21534 10.3844 3.87536L10.0505 4.87274C9.8976 5.27133 9.6214 5.61043 9.26232 5.84042L8.92544 6.03479C8.50669 6.24994 8.02554 6.30994 7.56693 6.20418L6.3467 5.86048C5.62836 5.65664 5.2692 5.55472 4.95162 5.68388C4.63404 5.81305 4.4474 6.13696 4.0741 6.78479L3.58052 7.64139C3.23061 8.24864 3.05565 8.55227 3.08961 8.87549C3.12356 9.19871 3.35778 9.45918 3.82621 9.98012L4.85725 11.1328C5.10925 11.4518 5.28816 12.0078 5.28816 12.5077C5.28816 13.0078 5.10931 13.5636 4.85728 13.8827L3.82621 15.0354C3.35778 15.5564 3.12357 15.8168 3.08961 16.1401C3.05565 16.4633 3.23061 16.7669 3.58052 17.3741L4.07409 18.2307C4.44738 18.8785 4.63404 19.2025 4.95162 19.3316C5.2692 19.4608 5.62837 19.3589 6.34672 19.155L7.56689 18.8113C8.02558 18.7055 8.50682 18.7656 8.92562 18.9808L9.26245 19.1752C9.62146 19.4052 9.89759 19.7442 10.0504 20.1428L10.3844 21.1403C10.604 21.8003 10.7138 22.1303 10.9751 22.3191C11.2365 22.5078 11.5837 22.5078 12.278 22.5078H13.3928C14.0872 22.5078 14.4344 22.5078 14.6957 22.3191C14.9571 22.1303 15.0669 21.8003 15.2865 21.1403L15.6205 20.1428C15.7733 19.7442 16.0494 19.4052 16.4085 19.1752L16.7453 18.9808C17.1641 18.7656 17.6453 18.7055 18.104 18.8113L19.3242 19.155C20.0425 19.3589 20.4017 19.4608 20.7193 19.3316C21.0369 19.2025 21.2235 18.8785 21.5968 18.2307L22.0904 17.3741C22.4403 16.7669 22.6152 16.4633 22.5813 16.1401C22.5473 15.8168 22.3131 15.5564 21.8447 15.0354L20.8136 13.8827C20.5616 13.5636 20.3827 13.0078 20.3827 12.5077C20.3827 12.0078 20.5617 11.4518 20.8136 11.1328L21.8447 9.98012C22.3131 9.45918 22.5473 9.19871 22.5813 8.87549C22.6152 8.55227 22.4403 8.24864 22.0904 7.64139Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.2924 12.5C16.2924 14.433 14.7254 16 12.7924 16C10.8594 16 9.29248 14.433 9.29248 12.5C9.29248 10.567 10.8594 9 12.7924 9C14.7254 9 16.2924 10.567 16.2924 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Settings</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.69384 6.42089C8.93131 4.18342 10.0501 3.06468 11.3587 2.69562C12.2835 2.43479 13.2625 2.43479 14.1873 2.69562C15.4959 3.06468 16.6146 4.18342 18.8521 6.42089C21.0896 8.65836 22.2083 9.7771 22.5774 11.0857C22.8382 12.0105 22.8382 12.9895 22.5774 13.9143C22.2083 15.2229 21.0896 16.3416 18.8521 18.5791C16.6146 20.8166 15.4959 21.9353 14.1873 22.3044C13.2625 22.5652 12.2835 22.5652 11.3587 22.3044C10.0501 21.9353 8.93131 20.8166 6.69384 18.5791C4.45637 16.3416 3.33763 15.2229 2.96857 13.9143C2.70774 12.9895 2.70774 12.0105 2.96857 11.0857C3.33763 9.7771 4.45637 8.65836 6.69384 6.42089Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Shapes</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7729 12.5C22.7729 18.0228 18.2957 22.5 12.7729 22.5C7.2501 22.5 2.77295 18.0228 2.77295 12.5C2.77295 6.97715 7.2501 2.5 12.7729 2.5C18.2957 2.5 22.7729 6.97715 22.7729 12.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12.7729 22.5C16.0866 22.5 18.7729 18.0228 18.7729 12.5C18.7729 6.97715 16.0866 2.5 12.7729 2.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.7727 7.5H11.7817"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.7729 15C10.7729 15.8284 10.1014 16.5 9.27295 16.5C8.44452 16.5 7.77295 15.8284 7.77295 15C7.77295 14.1716 8.44452 13.5 9.27295 13.5C10.1014 13.5 10.7729 14.1716 10.7729 15Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-lg">Space</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.389 20.5H19.8792C21.029 20.5 21.9436 19.9761 22.7648 19.2436C24.8509 17.3826 19.947 15.5 18.2729 15.5M16.2729 5.56877C16.5 5.52373 16.7358 5.5 16.9777 5.5C18.7976 5.5 20.2729 6.84315 20.2729 8.5C20.2729 10.1568 18.7976 11.5 16.9777 11.5C16.7358 11.5 16.5 11.4763 16.2729 11.4312"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5.25426 16.6112C4.07529 17.243 0.984088 18.5331 2.86683 20.1474C3.78654 20.936 4.81086 21.5 6.09867 21.5H13.4473C14.7351 21.5 15.7594 20.936 16.6791 20.1474C18.5619 18.5331 15.4707 17.243 14.2917 16.6112C11.527 15.1296 8.01894 15.1296 5.25426 16.6112Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.7729 8C13.7729 10.2091 11.982 12 9.77295 12C7.56381 12 5.77295 10.2091 5.77295 8C5.77295 5.79086 7.56381 4 9.77295 4C11.982 4 13.7729 5.79086 13.7729 8Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p className="text-lg">Users</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2505 9.2803L18.2729 9.28025C20.7582 9.28025 22.7729 11.2212 22.7729 13.6154C22.7729 15.3176 21.7546 16.7906 20.2729 17.5M18.2505 9.2803C18.2653 9.12164 18.2729 8.96095 18.2729 8.79856C18.2729 5.87225 15.8105 3.5 12.7729 3.5C9.89619 3.5 7.53528 5.62773 7.29337 8.33875M18.2505 9.2803C18.1482 10.3732 17.7015 11.3704 17.0157 12.1704M7.29337 8.33875C4.75693 8.57128 2.77295 10.6293 2.77295 13.1338C2.77295 15.066 3.95397 16.7326 5.65854 17.5M7.29337 8.33875C7.45121 8.32428 7.61118 8.31688 7.77295 8.31688C8.89877 8.31688 9.93769 8.67534 10.7734 9.28025"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.7707 17.4974L12.7751 17.5052M16.7684 15.5L16.7729 15.5078M8.77295 15.5L8.77744 15.5078M16.7684 19.4948L16.7729 19.5026M8.77295 19.4948L8.77744 19.5026M12.7707 21.4922L12.7751 21.5"
                      stroke="#6EBB21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Weather</p>
                </div>
                <div className="flex items-center gap-2 shadow bg-white rounded-full h-11 px-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7729 11.5V20.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.7729 9.5C14.7729 10.6046 13.8775 11.5 12.7729 11.5C11.6683 11.5 10.7729 10.6046 10.7729 9.5C10.7729 8.39543 11.6683 7.5 12.7729 7.5C13.8775 7.5 14.7729 8.39543 14.7729 9.5Z"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.7317 6.5C18.3915 7.36961 18.7729 8.39801 18.7729 9.5C18.7729 10.602 18.3915 11.6304 17.7317 12.5M7.81412 6.5C7.15438 7.36961 6.77295 8.39801 6.77295 9.5C6.77295 10.602 7.15438 11.6304 7.81412 12.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.0889 4.5C22.1525 5.93008 22.7729 7.64984 22.7729 9.5C22.7729 11.3502 22.1525 13.0699 21.0889 14.5M4.45704 4.5C3.39331 5.93008 2.77295 7.64984 2.77295 9.5C2.77295 11.3502 3.39331 13.0699 4.45704 14.5"
                      stroke="#6EBB21"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-lg">Wifi</p>
                </div>
              </ul>
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
            <div className="mt-7 flex items-center justify-center gap-x-6 sm:mt-10">
              <a className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 h-12 rounded-lg px-6">
                Try it free
              </a>
              <a className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-white text-black hover:bg-gray-50 hover:text-grey-900 h-12 rounded-lg px-6 border-black">
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
