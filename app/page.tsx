'use client'

import { useRef } from 'react'
import { Header } from '@/components/Header'
import { Carousel } from '@/components/Carousel'
import { TagValidation } from '@/components/TagValidation'
import { CardValueUX } from '@/components/ValueUX'
import { DialogPromotion } from '@/components/DialogPromotion'
import { CookieToast } from '@/components/CookieToast'
import { Footer } from '@/components/Footer'
import { ReactTyped } from 'react-typed'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClickInputFocus() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main className="max-w-screen min-h-screen overflow-hidden">
        <div className="bg-gradient-to-b from-white to-[#F3F4F5]">
          <div className="relative overflow-hidden bg-[url('https://hugeicons.com/home/icons-bg.svg')] sm:bg-[url('https://hugeicons.com/home/top_header_background.svg')] bg-cover bg-no-repeat bg-center">
            <div className="max-w-[80rem] relative z-20 mx-auto text-center flex w-screen flex-col items-center gap-0 pt-[30%] sm:pt-40 px-6 lg:px-0 h-[calc(100vh-48px)]">
              <div className="bg-white/20 px-6 sm:px-0 py-7 backdrop-blur sm:bg-transparent sm:py-0 mb-4">
                <h1 className="z-20 text-2xl font-bold text-center tracking-[]text-grey-900 lg:leading-[1.25] lg:text-[65px]">
                  Beautiful Icons for
                  <br />
                  developers and designers
                </h1>
                <p className="text-base sm:text-2xl text-grey-500 mt-4">
                  Expertly crafted top-notch icon library. Everything you need!
                </p>
                <div className="flex flex-col w-full items-center mt-14 sm:mt-12">
                  <div className="z-10 flex w-full max-w-[600px] items-center justify-between rounded-full bg-white border-2 border-grey-200 p-[2.5px] ring-0 focus-within:ring-8 focus-within:ring-grey-900/5 transition-all">
                    <div
                      className="flex w-full cursor-text items-center justify-between rounded-xl px-6 py-2"
                      onClick={handleClickInputFocus}
                    >
                      <div className="inline-flex flex-col items-center justify-start gap-3">
                        <input
                          className="h-10 w-full border-0 text-base sm:text-lg leading-relaxed placeholder focus:outline-none focus:ring-0 lg:h-12 lg:text-lg"
                          placeholder="Search 36,000+ icons..."
                          ref={inputRef}
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <p className="text-sm hidden sm:text-base text-gray-400 sm:block">
                          Press ENTER
                        </p>
                        <button>
                          <svg
                            className="h-5 w-5 lg:h-6 lg:w-6"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 17.5249L22.5 22.0249"
                              stroke="#82B54B"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20.5 11.0249C20.5 6.05434 16.4706 2.0249 11.5 2.0249C6.52944 2.0249 2.5 6.05434 2.5 11.0249C2.5 15.9955 6.52944 20.0249 11.5 20.0249C16.4706 20.0249 20.5 15.9955 20.5 11.0249Z"
                              stroke="#82B54B"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="px-6 rounded-lg sm:rounded-2xl flex flex-col mt-auto relative mb-5 p-3 justify-center items-center gap-3 border-t border-t-solid border-t-[#edf1f6] bg-gradient-to-l from-[#f8f9fa] via-[#f9fdf6] to-[#f7f8f9]">
                  <svg
                    width="75%"
                    height="1"
                    viewBox="0 0 491 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0"
                  >
                    <line
                      y1="0.5"
                      x2="491"
                      y2="0.5"
                      stroke="url(#paint0_linear_10_3692)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10_3692"
                        x1="0"
                        y1="1.5"
                        x2="491"
                        y2="1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#EDF1F6" />
                        <stop offset="0.508086" stop-color="#B2EC79" />
                        <stop offset="1" stop-color="#EDF1F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-base sm:text-lg text-grey-400 font-normal sm:font-semibold">
                    Available for
                  </p>
                  <div className="flex items-center space-x-1 sm:space-x-4">
                    <img
                      src="https://hugeicons.com/logos/figma.png"
                      alt="Figma"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                    <img
                      src="https://hugeicons.com/logos/react.png"
                      alt="React"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                    <img
                      src="https://hugeicons.com/logos/svelte.png"
                      alt="Next"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                    <img
                      src="https://hugeicons.com/logos/javascript.png"
                      alt="Javascript"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                    <img
                      src="https://hugeicons.com/logos/flutter.png"
                      alt="React Native"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                    <img
                      src="https://hugeicons.com/logos/npm.png"
                      alt="Npm"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                    <img
                      src="https://hugeicons.com/logos/svg.png"
                      alt="Svg"
                      className="w-8 h-8 sm:w-14 sm:h-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-6 lg:px-0 pt-32 sm:pt-40 flex w-full flex-col overflow-hidden">
          <div>
            <p className="text-center text-lg sm:text-xl font-normal leading-7 text-grey-500">
              Discover a new styles of extraordinary experiences.
              <br />
              Plus a new styles ways to design.
            </p>
            <h3 className="text-center text-3xl sm:text-4xl mt-3 font-bold px-6 sm:px-0 text-grey-950">
              The world&apos; greatest icon styles
            </h3>
            <Carousel />
          </div>
        </div>
        <div className="grid max-w-[80rem] grid-cols-1 sm:grid-cols-2 mx-auto pt-32 sm:pt-40 w-full px-6 lg:px-0">
          <div>
            <p className="text-2xl font-bold mb-7 text-black">
              Join over 50,000 developers and
              <br />
              designers globally.
            </p>
            <div>
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1075)">
                  <path
                    d="M90.1299 179.366C139.54 179.366 179.596 139.311 179.596 89.9002C179.596 40.4897 139.54 0.43457 90.1299 0.43457C40.7194 0.43457 0.664307 40.4897 0.664307 89.9002C0.664307 139.311 40.7194 179.366 90.1299 179.366Z"
                    fill="#49BDFE"
                  />
                  <path
                    d="M46.6519 164.974C46.6351 165.007 46.6127 165.03 46.5959 165.063C46.7303 165.097 46.8591 165.142 46.9935 165.17L46.6519 164.974Z"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M41.024 38.8786L40.8448 38.5146C42.34 38.2906 42.4408 37.2378 43.5776 36.8514C44.8712 36.4258 44.4288 36.8906 45.7 36.8514C46.7304 36.8066 47.3576 37.557 48.5336 37.0082C48.248 37.5122 47.7832 37.8594 47.3184 38.201C46.3496 38.8898 45.3584 39.5954 44.2048 39.8642C43.0512 40.1274 41.696 39.8474 41.024 38.8786Z"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M58.9216 118.623C58.8992 119.412 58.4344 120.101 58.0312 120.768C56.2336 123.702 55.1416 127.101 54.9008 130.545C54.66 133.843 54.8056 137.909 51.9328 139.533C50.292 140.446 47.9848 140.284 46.8928 141.824C46.5512 142.288 46.3888 142.876 46.2264 143.425C45.5208 145.996 44.8096 148.566 44.104 151.136C43.1912 151.058 42.2616 150.957 41.3544 150.856C42.4296 151.198 43.1744 152.654 42.5304 153.651C41.5 153.108 40.1448 153.752 39.5736 154.788C39.0304 155.818 39.1088 157.072 39.4112 158.209C40.3464 161.569 43.2192 164.28 46.6016 165.086C46.0136 166.2 44.216 165.713 43.1184 164.968C35.284 159.671 29.3704 151.601 26.6712 142.535C25.7192 139.337 25.1088 135.938 23.244 133.188C21.6872 130.864 19.3352 129.162 17.7784 126.838C15.5944 123.5 15.1856 119.172 12.6544 116.12C11.2376 114.378 9.04804 112.239 10.3024 110.374C10.8064 109.607 11.8816 108.879 11.456 108.067C11.316 107.804 11.0304 107.641 10.8064 107.417C9.95524 106.504 10.5432 105.071 10.9688 103.895C11.6744 101.851 11.6744 99.6667 11.372 97.4827C9.24404 95.5787 7.56404 93.2155 6.51124 90.5611C5.88404 88.9427 5.04964 86.9211 3.31364 86.8987C2.86564 85.6443 2.40084 84.3899 1.95284 83.1355C1.79044 83.5835 1.34804 83.8635 0.86084 83.9251C2.20484 63.4235 10.4704 44.8203 23.3336 30.4059C23.6192 30.2827 23.8992 30.1203 24.1848 29.9579C27.2368 28.1771 29.6672 25.5059 32.6184 23.5627C33.2232 23.1595 33.912 22.7731 34.6624 22.8515C35.3904 22.9131 36.0792 23.6579 35.816 24.3467C35.7152 24.6323 35.4744 24.8563 35.228 25.0355C31.7728 27.9755 27.9872 30.5459 23.9608 32.6739C23.4792 32.9147 22.9696 33.2003 22.7512 33.6875C22.3424 34.5163 23.0312 35.5467 23.9048 35.8491C24.7728 36.1515 25.7472 35.9723 26.6376 35.7707C25.8872 36.8403 25.6632 38.2795 26.0496 39.5339C26.8784 39.6123 27.1416 38.4811 27.388 37.6915C28.396 34.5555 33.3968 33.2787 33.072 29.9747C34.4272 30.6803 35.8048 29.1011 36.6336 27.8075C37.4624 26.4915 39.3048 25.1979 40.3184 26.3515C40.3744 26.9955 40.4528 27.6451 40.5144 28.2947C42.2952 27.8467 44.0984 27.3819 45.8792 26.9339C44.8656 27.6451 44.524 29.1627 45.1064 30.2547C45.6944 31.3467 47.1504 31.8955 48.304 31.4475C48.2872 32.3995 47.436 33.1275 46.6632 33.6931C44.7032 35.1715 42.5976 36.6891 40.3128 37.4171L40.8392 38.5091C40.7832 38.5315 40.7216 38.5539 40.66 38.5539C39.204 38.6939 37.664 37.6467 36.1072 37.8483C35.1552 37.9715 33.9848 37.9715 33.436 38.9403C33.3576 39.0635 33.016 40.7603 33.2568 40.6203C34.108 40.1331 34.9536 39.6459 35.788 39.1643C36.0456 39.8531 36.1072 40.6203 35.9672 41.3707C36.9976 41.2699 38.0728 41.4883 38.9856 42.0371C38.0336 44.2435 35.5864 45.7219 33.1784 45.5371C33.156 44.8091 33.1168 44.0811 33.0944 43.3531C31.112 43.1907 29.4936 44.8931 28.5024 46.5955C27.4944 48.3147 26.7272 50.2803 25.064 51.3723C24.056 52.0611 22.8184 52.3243 21.7264 52.8899C20.6568 53.4779 19.6656 54.5923 19.8896 55.7851C19.9904 56.3507 20.3544 56.8771 20.3376 57.4651C20.276 58.5571 19.0048 59.0667 18.1536 59.7723C16.6976 60.9875 16.3336 63.2163 14.7768 64.2859C13.6456 65.0755 12.1448 65.0587 10.8288 65.4619C9.51284 65.8651 8.19684 67.1811 8.72884 68.4579C8.07924 68.6819 7.28964 68.1947 7.22804 67.5059C4.90404 72.0811 3.36964 77.0595 2.74244 82.1611C3.89604 82.9675 5.06644 81.1251 5.29044 79.7307C5.53124 78.3363 6.74644 76.5107 7.87764 77.3395C7.61444 79.3443 7.35124 81.3267 7.09364 83.3315C7.03204 83.7179 6.99284 84.1211 7.17764 84.4627C7.40164 84.8883 7.88324 85.0675 8.25284 85.3699C9.28324 86.2603 9.14324 87.8395 9.20484 89.1947C9.26644 90.8523 9.81524 92.4707 10.6832 93.8875C10.5992 93.6019 10.5432 93.3219 10.4816 93.0363C12.0608 93.2379 13.7016 92.7283 14.8944 91.6755C15.5216 91.1099 16.048 90.3819 16.8376 90.0963C17.6496 89.7939 18.54 90.0123 19.3688 90.2363C21.9392 90.9419 24.672 91.7315 26.3912 93.7531C27.2592 94.7835 27.808 96.0827 28.844 96.9283C31.1904 98.9107 35.1608 98.0371 37.3056 100.244C39.0248 102.024 38.7056 104.897 38.2408 107.344C37.0648 106.7 35.4912 108.319 36.18 109.472C36.8072 108.784 37.5352 108.056 38.448 108.056C39.3776 108.033 40.1896 109.31 39.5008 109.898C41.1192 107.832 45.084 108.683 45.7112 111.253C47.9792 111.416 50.264 111.572 52.532 111.757C52.0952 115.084 59.0616 115.28 58.9216 118.623Z"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M45.1288 24.9964C44.2552 25.4276 43.0512 24.9404 42.7264 24.022C42.396 23.1036 43.0176 21.9668 43.9696 21.7484C44.5688 21.6084 45.4032 21.6756 45.588 21.0876C45.644 20.9084 45.6104 20.7124 45.6104 20.5276C45.588 19.4188 46.5792 18.5004 47.6488 18.2204C48.7184 17.946 49.8496 18.1588 50.936 18.3716C51.3224 19.1724 51.4344 20.102 51.2496 20.97C50.5048 21.0036 49.76 21.0316 49.0152 21.0652C49.0824 22.3028 48.9592 23.8596 47.8112 24.3188C46.7808 24.7276 45.4368 23.966 44.58 24.6604"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M56.7264 12.6371C58.7592 11.6627 60.4784 10.1283 62.4832 9.0979C65.9328 7.3283 69.9592 7.1715 73.8344 7.0483C82.6544 6.7739 91.4744 6.4995 100.294 6.2251C98.2504 7.3451 96.2064 8.4707 94.1568 9.5907C92.488 10.5091 90.5896 11.4499 88.7584 10.9291C88.7192 12.4019 90.0576 13.7683 91.536 13.7571C87.9128 15.9971 82.884 13.7067 79.0592 15.5883C77.4576 16.3779 76.164 17.8675 74.4 18.1475C73.3808 18.3099 72.3224 18.0355 71.3088 18.2595C69.612 18.6291 68.5424 20.2363 67.288 21.4347C65.8432 22.8179 63.7208 23.7643 61.8336 23.1035C59.9464 22.4427 58.9608 19.6371 60.4728 18.3267C61.2176 17.6827 62.2816 17.5763 63.1608 17.1227C64.04 16.6747 64.7344 15.4707 64.0736 14.7371C63.788 14.4179 63.3176 14.2947 63.0544 13.9531C62.7688 13.5835 62.7968 13.0571 62.5616 12.6539C61.6656 11.0803 59.1736 13.1971 57.4768 12.5643"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M83.511 20.0796C84.7038 19.8052 85.7398 19.0996 86.8542 18.5844C87.9686 18.0692 89.2958 17.7668 90.3878 18.31C90.7126 19.122 89.7774 19.8612 88.9542 20.1524C87.375 20.7068 85.6614 20.858 84.0094 20.5836"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M155.622 28.978C155.297 29.0172 154.956 29.0004 154.609 28.9164C153.091 28.5916 151.937 27.4212 150.638 26.57C147.642 24.5876 143.554 24.33 140.317 25.9484C141.085 24.834 141.471 23.4564 141.387 22.1012L140.922 22.2636C135.619 19.1892 129.403 15.9972 123.618 18.0636C122.28 18.5508 121.07 19.2788 119.715 19.7436C118.276 20.2476 116.68 20.4548 115.448 21.3452C114.193 22.2356 113.527 24.2012 114.602 25.2708C115.515 26.1836 116.971 25.9372 118.248 26.0604C119.502 26.1836 120.941 27.4324 120.253 28.5076C114.709 31.1004 109.148 33.7156 103.604 36.3308C106.152 37.1596 107.837 40.0492 107.289 42.6812C105.424 43.006 103.626 41.8748 101.745 41.7516C99.0117 41.6116 96.4021 44.0196 96.3461 46.7524C96.2677 49.4852 98.7765 52.0108 101.509 51.9716C103.553 51.9492 105.558 50.7172 107.541 51.238C107.619 49.3732 108.896 47.794 110.206 46.4612C112.754 43.9076 116.394 41.6004 119.799 42.8548C120.913 43.258 121.865 44.0084 122.795 44.7532C124.839 46.3716 126.883 48.0068 128.933 49.6476C129.582 48.9812 130.226 48.3092 130.876 47.6652C131.99 48.8412 133.105 50.0116 134.236 51.2044C134.801 50.818 135.389 50.454 135.955 50.0676C136.358 51.1204 136.784 52.1508 137.193 53.2036C137.355 52.05 137.495 50.9188 137.635 49.782C138.973 49.8212 140.39 49.8604 141.6 49.2556C142.815 48.6676 143.705 47.2116 143.196 45.9572C142.933 45.2908 142.305 44.7644 142.182 44.0532C141.919 42.6364 143.941 41.6676 145.257 42.3116C146.55 42.9388 147.2 44.4172 147.749 45.7724C148.051 44.3948 148.331 43.0396 148.639 41.662C149.905 44.9884 151.73 48.102 153.998 50.8348C149.849 50.0452 145.475 50.4988 141.594 52.0948C142.832 53.8364 144.954 54.8668 147.082 54.7828C148.034 54.7604 149.087 54.542 149.815 55.1468C150.364 55.6116 150.504 56.362 150.605 57.0508C150.929 58.994 151.254 60.9148 151.557 62.8356C149.367 61.038 146.214 61.2396 143.358 61.1836C140.502 61.1052 137.165 60.3156 136.112 57.6668C134.981 58.9436 134.477 60.7636 134.801 62.466C131.845 61.7604 128.445 60.6292 127.594 57.7116C125.287 58.5628 122.414 57.09 121.787 54.7212C121.563 53.8924 121.501 52.8788 120.773 52.4364C120.331 52.1732 119.76 52.2124 119.233 52.274C114.843 52.7836 110.469 53.2708 106.101 53.7804C103.716 54.066 101.246 54.3516 99.1405 55.522C97.0349 56.6756 95.3605 58.9436 95.6013 61.3348C91.5749 63.726 88.1589 67.1868 85.8517 71.258C85.1237 72.5124 84.4965 73.9516 84.7821 75.3684C84.9837 76.4604 85.7117 77.39 85.9357 78.4652C86.3221 80.3076 85.2693 82.0884 84.8269 83.9084C83.5725 89.0884 87.5038 93.966 91.1494 97.886C92.8686 99.706 94.8565 101.688 97.3653 101.789C98.9221 101.851 100.401 101.162 101.857 100.591C106.023 98.95 110.559 98.1996 115.028 98.3788C114.014 99.1684 115.067 100.888 116.327 101.151C117.581 101.414 118.937 101.005 120.152 101.431C122.924 102.422 122.543 106.488 121.289 109.142C121.916 109.019 122.565 108.896 123.209 108.778C122.868 109.668 122.521 110.559 122.179 111.427C125.981 111.908 127.421 116.909 126.536 120.65C125.668 124.396 123.445 127.835 123.383 131.682C123.366 133.788 124.01 135.832 124.66 137.831C126.284 142.91 127.902 147.989 129.526 153.085C134.062 153.628 136.666 147.86 140.877 146.057C142.457 145.368 144.316 145.228 145.553 144.052C146.746 142.921 146.36 140.267 144.825 140.267C146.909 140.043 148.689 138.139 148.751 136.033C148.773 135.445 148.689 134.857 148.768 134.275C148.908 133.446 149.434 132.718 149.938 132.007C153.153 127.392 155.236 122.106 157.319 116.887C157.862 115.487 158.411 114.115 158.954 112.715C161.015 107.512 163.059 102.332 165.12 97.13C165.926 95.086 166.738 93.0644 167.545 91.0148C166.43 92.8572 163.518 92.6164 161.855 91.2388C160.175 89.8668 159.301 87.778 157.985 86.0588C156.871 84.5804 155.37 83.27 154.844 81.4668C154.541 80.4364 154.597 79.322 154.418 78.2468C154.009 75.9172 152.475 73.9796 151.422 71.874C150.369 69.7684 149.821 67.0412 151.299 65.1932C155.555 72.6188 159.425 80.2628 162.925 88.0972C163.311 86.882 164.201 85.8292 165.333 85.2412C166.161 84.7932 167.091 84.614 167.965 84.25C170.272 83.2364 171.868 80.7892 171.868 78.2804C171.845 75.7716 170.249 73.3244 167.92 72.3332C166.766 71.846 165.45 71.6892 164.358 71.0172C163.266 70.3732 162.477 68.8948 163.165 67.8196C163.809 66.806 165.372 66.8284 166.441 67.394C167.517 67.982 168.306 68.9732 169.314 69.6396C170.042 70.1268 170.893 70.446 171.683 70.894C175.956 73.3412 177.009 78.9076 177.905 83.7628C178.392 86.3724 178.941 88.9652 179.59 91.5132C179.613 90.9644 179.607 90.3988 179.607 89.8556C179.585 66.3244 170.485 44.938 155.622 28.978ZM163.815 58.378C163.227 58.3388 162.684 57.9524 162.213 57.5884C161.446 56.9836 160.673 56.2724 160.449 55.3204C160.186 54.1892 160.729 52.89 160.125 51.882C159.839 51.3948 159.335 51.0924 158.909 50.7508C157.795 49.8604 156.983 48.5836 156.681 47.2116C156.417 45.9964 156.798 44.378 158.036 44.1764C158.624 44.0756 159.268 44.4004 159.531 44.9436L158.702 45.3916C160.097 45.554 160.746 47.6596 159.677 48.5668C159.537 48.7068 159.352 48.83 159.352 49.0316C159.352 49.1548 159.43 49.2724 159.537 49.3564C160.405 50.3084 161.704 50.65 162.835 51.2548C163.966 51.8428 165.081 52.9348 164.901 54.1892C164.537 54.3292 164.196 54.4524 163.832 54.5924C163.445 54.9788 163.753 55.6676 164.157 56.0484C164.56 56.4292 165.086 56.8156 165.109 57.3812C165.109 57.9916 164.42 58.4172 163.815 58.378Z"
                    fill="#F1FFEC"
                  />
                  <path
                    d="M164.398 120.639L162.936 121.675C163.446 123.467 162.426 125.567 160.696 126.267C159.783 126.636 158.568 126.799 158.26 127.734C158.002 128.529 158.618 129.335 158.702 130.164C158.837 131.542 157.549 132.572 156.619 133.597C155.69 134.622 155.197 136.548 156.434 137.164C156.72 137.31 157.05 137.338 157.37 137.366C158.714 137.483 160.186 137.523 161.284 136.739C164.431 134.493 161.441 128.4 164.549 126.093C164.991 125.768 165.546 125.533 165.786 125.04C166.52 123.59 163.815 122.151 164.398 120.639Z"
                    fill="#F1FFEC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1075">
                    <rect
                      width="178.943"
                      height="178.943"
                      fill="white"
                      transform="translate(0.664062 0.428711)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 mt-14 sm:mt-0">
            <TagValidation
              job={['Developers']}
              title="4,500"
              subtitle="Weekly NPM Download"
            />
            <TagValidation
              job={['Designers']}
              title="25,000+"
              subtitle="Figma plugins users"
            />
            <TagValidation
              job={['Designers']}
              title="30,000+"
              subtitle="Figma users"
            />
            <TagValidation
              job={['Developers', 'Designers']}
              title="70,000+"
              subtitle="Web app users"
            />
          </div>
        </div>
        <div className="mt-32 py-20 sm:mt-40 sm:py-24 bg-[#f8f8f9] w-full px-6 lg:px-0 mx-auto">
          <div className="max-w-[80rem] mx-auto px-5 sm:px-0">
            <h3 className="text-3xl sm:text-4xl mb-3 font-bold text-grey-900">
              Icon design matters
            </h3>
            <p className="text-lg sm:text-xl font-normal max-w-2xl leading-7 text-grey-500">
              Each icon is thoughtfully designed down to the last detail,
              allowing you to create the best experience your users will love.
            </p>
            <div className="mt-11 grid grid-cols-1 sm:grid-cols-3 gap-11">
              <CardValueUX
                title="Real & understandable"
                description="Icons created from real objects for great user experience"
                imageCover="https://hugeicons.com/icon-design-matters/Real%20&%20understandable.png"
              />
              <CardValueUX
                title="Icons that fit the moment"
                description="Choose from various icon variations to suit your use case; we have plenty"
                imageCover="https://hugeicons.com/icon-design-matters/Icons%20that%20fit%20the%20moment.png"
              />
              <CardValueUX
                title="Consistent design"
                description="Expertly crafted icons by professionals for high consistency"
                imageCover="https://hugeicons.com/icon-design-matters/Consistent%20design.png"
              />
              <CardValueUX
                title="Serious, playful, standard"
                description="If icons are used right, it makes experience better"
                imageCover="https://hugeicons.com/icon-design-matters/Serious,%20playful,%20standard.png"
              />
              <CardValueUX
                title="Editable stroke to match your font"
                description="Customize the stroke that matches your typography"
                imageCover="https://hugeicons.com/icon-design-matters/Editable%20stroke%20to%20match%20your%20font.png"
              />
              <CardValueUX
                title="Outlined icons for design system"
                description="Ensures scalability and consistency, no adjustments needed"
                imageCover="https://hugeicons.com/icon-design-matters/Outlined%20icons%20for%20design%20system.png"
              />
            </div>
          </div>
        </div>
        <div className="py-24 bg-grey-900 w-full px-6 lg:px-0">
          <div className="max-w-[80rem] mx-auto">
            <h3 className="text-3xl sm:text-4xl mb-3 font-bold text-white">
              Build the way you need
            </h3>
            <p className="text-lg sm:text-xl font-normal max-w-xl sm:leading-8 text-grey-300">
              Fine-tuned for performance and supports many popular dev
              frameworks and packages.
            </p>
            <div className="mt-11 grid grid-cols-1 sm:grid-cols-3 gap-11">
              <div>
                <img
                  className="w-full"
                  src="https://hugeicons.com/build-the-way/Nicely%20customizable.png"
                  alt="Nicely customizable"
                />
                <h4 className="text-lg font-bold mt-5 text-white">
                  Nicely customizable.
                  <span className="text-lg font-normal text-grey-400 ml-1">
                    Easily customize icon&apos; color, size, stroke width, and
                    more to match your brand&apos; style.
                  </span>
                </h4>
              </div>
              <div>
                <img
                  className="w-full"
                  src="https://hugeicons.com/build-the-way/Tree%20Shakable.png"
                  alt="Tree shakable"
                />
                <h4 className="text-lg font-bold mt-5 text-white">
                  Tree shakable.
                  <span className="text-lg font-normal text-grey-400 ml-1">
                    Import only the icons you need, reducing the overall bundle
                    size for better performance..
                  </span>
                </h4>
              </div>
              <div>
                <img
                  className="w-full"
                  src="https://hugeicons.com/build-the-way/Lightweight%20Scalable.png"
                  alt="Lightweight e scalable"
                />
                <h4 className="text-lg font-bold mt-5 text-white">
                  Lightweight & scalable.
                  <span className="text-lg font-normal text-grey-400 ml-1">
                    Icons are lightweight and highly optimized for fast loading
                    and scalability.
                  </span>
                </h4>
              </div>
            </div>
            <p className="text-lg text-grey-300 mt-40 font-semibold">
              Available for
            </p>
            <div className="grid grid-cols-4 sm:flex items-center gap-2 mt-3 pr-7 sm:pr-0">
              <img
                src="https://hugeicons.com/logos/figma.png"
                alt="Figma"
                className="w-full h-full sm:w-16 sm:h-16"
              />
              <img
                src="https://hugeicons.com/logos/react.png"
                alt="React"
                className="w-full h-full sm:w-16 sm:h-16"
              />
              <img
                src="https://hugeicons.com/logos/svelte.png"
                alt="Next"
                className="w-full h-full sm:w-16 sm:h-16"
              />
              <img
                src="https://hugeicons.com/logos/javascript.png"
                alt="Javascript"
                className="w-full h-full sm:w-16 sm:h-16"
              />
              <img
                src="https://hugeicons.com/logos/flutter.png"
                alt="React Native"
                className="w-full h-full sm:w-16 sm:h-16"
              />
              <img
                src="https://hugeicons.com/logos/npm.png"
                alt="Npm"
                className="w-full h-full sm:w-16 sm:h-16"
              />
              <img
                src="https://hugeicons.com/logos/svg.png"
                alt="Svg"
                className="w-full h-full sm:w-16 sm:h-16"
              />
            </div>
          </div>
        </div>
        <div className="pt-32 sm:pt-40 px-6 lg:px-0">
          <div className="max-w-5xl mx-auto px-6 lg:px-0 align-bottom">
            <h3 className="text-3xl sm:text-4xl relative font-bold">
              Beautiful icon library for {''}
              <ReactTyped
                backSpeed={50}
                cursorChar="|"
                strings={[
                  'Developer',
                  'Start up',
                  'Design system',
                  'Modern Interface',
                  'Designer',
                ]}
                typeSpeed={60}
                loop
              />
            </h3>
            <p className="text-lg mt-2 text-grey-500 max-w-2xl">
              Whether it’s SaaS, websites, or any modern interfaces, Houston Pro
              icon library adds a magical touch to your designs. Explore a few
              below...
            </p>
          </div>
          <div className="relative z-20 overflow-hidden mt-7 duration-200">
            <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll">
              <img
                src="https://hugeicons.com/home/components/Image%2002.png"
                alt="Image 02"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2010.png"
                alt="Image 10"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2009.png"
                alt="Image 09"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2008.png"
                alt="Image 08"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2007.png"
                alt="Image 07"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2006.png"
                alt="Image 06"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2002.png"
                alt="Image 02"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2010.png"
                alt="Image 10"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2009.png"
                alt="Image 09"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2008.png"
                alt="Image 08"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2007.png"
                alt="Image 07"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2006.png"
                alt="Image 06"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
            </ul>
          </div>
          <div className="relative z-20 overflow-hidden duration-200">
            <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll direction-reverse">
              <img
                src="https://hugeicons.com/home/components/Image%2001.png"
                alt="Image 01"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2004.png"
                alt="Image 04"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2013.png"
                alt="Image 13"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2005.png"
                alt="Image 05"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2003.png"
                alt="Image 03"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2012.png"
                alt="Image 12"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2001.png"
                alt="Image 01"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2004.png"
                alt="Image 04"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2013.png"
                alt="Image 13"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2005.png"
                alt="Image 05"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2003.png"
                alt="Image 03"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
              <img
                src="https://hugeicons.com/home/components/Image%2012.png"
                alt="Image 12"
                className="max-h-[20rem] sm:max-h-[30rem] object-cover rounded-lg"
              />
            </ul>
          </div>
        </div>
        <div className="pt-32 sm:pt-40 px-6 lg:px-0">
          <p className="max-w-[80rem] mx-auto px-6 sm:px-0 text-center text-xl text text-grey-500">
            36,000+ beautiful icons. Organized into 59 popular categories.
            <br />
            What more could you need!
          </p>
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
        <div className="max-w-3xl mx-auto pt-12 sm:pt-40 px-6 sm:px-0">
          <h3 className="hidden sm:block text-5xl font-semibold text-center">
            Support, when you need it.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7 sm:mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center rounded-none sm:rounded-xl px-5 py-8 bg-gradient-to-b from-[#555dc8] to-[#4851c2]">
              <div className="rounded-full max-w-max p-3 bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-src="https://cdn.hugeicons.com/icons/linkedin-02-solid-rounded.svg"
                  role="img"
                  color="#ffffff"
                >
                  <path
                    d="M5 9H4.5C3.55719 9 3.08579 9 2.79289 9.29289C2.5 9.58579 2.5 10.0572 2.5 11V19.5C2.5 20.4428 2.5 20.9142 2.79289 21.2071C3.08579 21.5 3.55719 21.5 4.5 21.5H5C5.94281 21.5 6.41421 21.5 6.70711 21.2071C7 20.9142 7 20.4428 7 19.5V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M7 4.75C7 5.99264 5.99264 7 4.75 7C3.50736 7 2.5 5.99264 2.5 4.75C2.5 3.50736 3.50736 2.5 4.75 2.5C5.99264 2.5 7 3.50736 7 4.75Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M11.826 9H11C10.0572 9 9.58579 9 9.29289 9.29289C9 9.58579 9 10.0572 9 11V19.5C9 20.4428 9 20.9142 9.29289 21.2071C9.58579 21.5 10.0572 21.5 11 21.5H11.5C12.4428 21.5 12.9142 21.5 13.2071 21.2071C13.5 20.9142 13.5 20.4428 13.5 19.5L13.5001 16.0001C13.5001 14.3433 14.0281 13.0001 15.5879 13.0001C16.3677 13.0001 17 13.6717 17 14.5001V19.0001C17 19.9429 17 20.4143 17.2929 20.7072C17.5857 21.0001 18.0572 21.0001 19 21.0001H19.4987C20.4413 21.0001 20.9126 21.0001 21.2055 20.7073C21.4984 20.4145 21.4985 19.9432 21.4987 19.0006L21.5001 13.5002C21.5001 11.015 19.1364 9.00024 16.7968 9.00024C15.4649 9.00024 14.2767 9.65309 13.5001 10.674C13.5 10.0439 13.5 9.72893 13.3632 9.495C13.2765 9.34686 13.1531 9.22353 13.005 9.13687C12.7711 9 12.4561 9 11.826 9Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-5">
                <p className="text-lg font-semibold text-white">
                  Support / request new icon
                </p>
                <p className="text-white/50 mt-1">
                  Join us on {''}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/castrogusttavo"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center rounded-none sm:rounded-xl px-5 py-8 bg-[#111111]">
              <div className="rounded-full max-w-max p-3 bg-white/10">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7721 12.8213C17.6018 8.91886 20.771 5.33984 24.8848 5.33984C26.4965 5.33984 27.9853 5.87617 29.1791 6.7789L33.719 6.10214C34.1356 6.04003 34.5521 6.2159 34.7981 6.55786C35.0441 6.89981 35.0785 7.35056 34.8871 7.72585L31.9867 13.4144C31.4914 23.5362 23.1289 31.5898 12.8848 31.5898C9.44258 31.5898 6.1676 30.835 3.32153 29.1886C2.89903 28.9443 2.68232 28.4553 2.78503 27.9781C2.88773 27.501 3.2864 27.1444 3.77203 27.0955C4.826 26.9893 6.41869 26.6857 7.71863 26.2123C8.37398 25.9737 8.88551 25.7164 9.21208 25.4661C9.24382 25.4418 9.27224 25.4187 9.2977 25.3971C4.74607 20.3905 3.14683 12.7222 5.03603 6.30497C5.16055 5.88202 5.52067 5.57078 5.9572 5.50883C6.39373 5.4469 6.82621 5.64568 7.06346 6.0173C9.47813 9.79942 13.4342 12.6075 17.7721 12.8213Z"
                    fill="white"
                  />
                  <path
                    d="M17.7731 12.8213C17.603 8.91886 20.7721 5.33984 24.886 5.33984C26.4977 5.33984 27.9863 5.87617 29.1802 6.7789L33.7201 6.10214C34.1368 6.04003 34.5532 6.2159 34.7992 6.55786C35.0452 6.89981 35.0795 7.35056 34.8881 7.72585L31.9877 13.4144C25.6363 27.9781 9.88623 28.9648 2.78613 27.9781C2.88882 27.501 3.28749 27.1444 3.77313 27.0955C4.82709 26.9893 6.41979 26.6857 7.71974 26.2123C8.37509 25.9737 8.88662 25.7164 9.21317 25.4661C9.24492 25.4418 9.27335 25.4187 9.2988 25.3971C4.74717 20.3905 3.14793 12.7222 5.03714 6.30497C5.16165 5.88202 5.52176 5.57078 5.9583 5.50883C6.39483 5.4469 6.82731 5.64568 7.06457 6.0173C9.47922 9.79942 13.4353 12.6075 17.7731 12.8213Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-5">
                <p className="text-lg font-semibold text-white">
                  For regular updates
                </p>
                <p className="text-white/50 mt-1">
                  Follow us on {''}
                  <a
                    target="_blank"
                    href="https://x.com/gustta_dev"
                    className="underline"
                  >
                    X/Twitter
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:col-span-2 rounded-none sm:rounded-xl px-5 py-8 bg-[#d3f1b9]">
              <div className="rounded-full max-w-max p-3 bg-[#8fe2a0]">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6907 3.89478C21.6888 2.75413 23.4436 2.69569 24.5154 3.76743L32.7327 11.9847C33.8044 13.0565 33.7459 14.8113 32.6053 15.8092L29.1625 18.8217L17.6782 7.33758L20.6907 3.89478Z"
                    fill="#1D3208"
                  />
                  <path
                    d="M15.9229 8.76416L27.7358 20.5769L24.3863 29.2856C24.2426 29.6593 23.9109 29.9281 23.5156 29.9914L5.09108 32.9999L13.5124 24.5786C14.158 24.9326 14.8267 25.0696 15.4003 25.1206C16.0192 25.1756 16.5656 24.7186 16.6205 24.0997C16.6755 23.4808 16.2185 22.9345 15.5996 22.8794C15.0654 22.8319 14.6134 22.6913 14.2513 22.3592C14.2343 22.3397 14.2165 22.3207 14.1979 22.3021C14.1794 22.2835 14.1603 22.2656 14.1408 22.2487C13.8086 21.8866 13.6681 21.4346 13.6206 20.9003C13.5655 20.2814 13.0192 19.8244 12.4003 19.8794C11.7815 19.9345 11.3244 20.4808 11.3794 21.0997C11.4304 21.6733 11.5674 22.342 11.9214 22.9876L3.5 31.409L6.50855 12.9843C6.57179 12.589 6.84067 12.2573 7.21426 12.1136L15.9229 8.76416Z"
                    fill="#1D3208"
                  />
                </svg>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-5">
                <p className="text-lg font-semibold text-black">
                  Hire our expert team to create amazing icons for your project,
                  jus like your in-house design team.
                </p>
                <p className="text-black mt-1">
                  Say hi at {''}
                  <a target="_blank" href="" className="font-semibold">
                    hello.softis@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex h-[500px] mt-24 sm:mt-36 flex-col items-center justify-center px-10 text-center bg-[url('https://hugeicons.com/home/pro-footer-sm-bg.png')] sm:bg-[url('https://hugeicons.com/pro-footer-bg.png')] bg-cover bg-no-repeat bg-center">
          <h5 className="text-center text-white text-3xl sm:text-5xl font-semibold">
            Design beautifully with Houston Pro
          </h5>
          <div className="text-center mt-5">
            <span className="text-zinc-400 font-normal">
              36,000+ beautiful icons. Whether it&apos; for SaaS, websites,
              print, or any modern interface,
              <br />
              Houston Pro has you covered.
            </span>{' '}
            {''}
            <span className="text-slate-300 font-semibold">
              Made for developers and designers.
            </span>
          </div>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:justify-center">
            <a
              href=""
              target="_blank"
              className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-off set-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary text-grey-900 border-none hover:bg-[#e7e7e7]/80 py-2 bg-white px-12 w-full sm:max-w-max h-12 rounded-full"
            >
              Use for free
            </a>
            <a
              href=""
              className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-off set-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary text-[#1d3208] border-none hover:bg-[#afe67f]/50 py-2 bg-[#afe67f] px-12 w-full sm:max-w-max h-12 rounded-full"
            >
              Buy now
            </a>
          </div>
        </div>

        <DialogPromotion />
        <CookieToast />
      </main>
      <Footer />
    </div>
  )
}
