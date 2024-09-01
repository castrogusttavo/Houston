import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DialogPromotion } from '@/components/DialogPromotion'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beautiful and Free React icons - SVG, React, React Native compatible',
}

export default function ReactIconsPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main className="max-w-screen min-h-screen overflow-hidden pt-16 sm:pt-20">
        <div className="max-w-[80rem] relative mx-auto flex flex-col justify-start px-5 sm:gap-10 md:px-5 lg:px-0 xl:flex-row xl:gap-24">
          <div className="z-10 w-full overflow-hidden">
            <div className="max-w-[80rem] mt-7 flex flex-col">
              <h2 className="z-10 mb-sm w-full max-w-[343px] text-[32px] font-bold leading-[44px] tracking-[-1px] text-grey-950 sm:max-w-[900px] sm:text-5xl sm:leading-[64px]">
                Beautiful react icons library to build amazing projects
              </h2>
              <p className="z-10 max-w-[920px] text-lg font-normal leading-[26px] tracking-[-0.4px] text-grey-500">
                Supercharge your React designs with 27,000+ beautiful and
                customizable React icons. Available with NPM, SVG and popular
                JavaScript frameworks. Unleash endless creativity and save
                precious development time.
              </p>
              <img
                src="/supportedSources.svg"
                alt="Houston Pro React icon library"
                className="mt-5 w-full max-w-[561px] sm:mt-11"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 px-5 py-6 sm:mt-[180px] md:px-5 lg:px-0 lg:py-[90px] bg-[url('https://hugeicons.com/_next/static/media/icon-box-bg.ab806028.svg')] bg-center bg-cover bg-no-repeat">
          <div className="lg:-mt-[150px]">
            <div className="max-w-[80rem] mx-auto rounded-xl bg-gradient-to-r from-[#2CFC07] to-[#FF9900] p-[2.5px]">
              <div className="flex flex-wrap gap-[53px] rounded-xl bg-white p-7 lg:mt-0">
                <button data-state="closed">
                  <img
                    alt="favourite-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="favourite-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/favourite-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="notification-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/notification-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="thumbs-up-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/thumbs-up-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="message-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/message-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="star-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/star-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="location-01-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/location-01-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="book-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/book-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="delete-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/delete-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="bookmark-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/bookmark-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="mail-01-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/mail-01-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="home-01-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/home-01-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="cursor-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/cursor-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="analytics-01-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/analytics-01-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="magic-wand-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/magic-wand-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="link-02-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/link-02-solid-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-stroke-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-stroke-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-solid-standard"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-solid-standard.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-stroke-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-stroke-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-duotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-duotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-twotone-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-twotone-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-solid-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-solid-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-bulk-rounded"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-bulk-rounded.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-stroke-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-stroke-sharp.svg"
                  />
                </button>
                <button data-state="closed">
                  <img
                    alt="folder-01-solid-sharp"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-5 w-5 md:h-9 md:w-9"
                    src="https://cdn.hugeicons.com/icons/folder-01-solid-sharp.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-5 md:px-5 lg:px-0">
          <div className="mt-12 text-center sm:mt-[120px]">
            <h1 className="mx-auto max-w-3xl break-words text-3xl font-bold text-grey-950 sm:text-[1.75rem] sm:leading-[30px]">
              Popular 9x styles to beauty your design
            </h1>
            <p className="mx-auto mt-3 max-w-[782px] text-lg leading-7 text-grey-500">
              Explore how the Houston Pro&apos;s react icons library will
              improve your UI and provide an expectation user experience to your
              users. Beautifully crafted react library with over 27,000+ icons.
            </p>
          </div>
          <img
            src="/tools.svg"
            alt=""
            className="mt-7 overflow-hidden sm:pt-[45px]"
          />
          <Link
            href="/use-cases"
            className="inline-flex relative items-center justify-center font-bold whitespace-nowrap rounded-xl text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mt-7 border-b-[3px] border-l border-r border-t border-grey-100 bg-[#FBFBFB] text-black hover:bg-gray-50"
          >
            See more examples
          </Link>
        </div>
        <div className="max-w-[80rem] mx-auto mt-7 flex flex-col items-center gap-[74px] sm:mt-[120px] md:mt-2xl">
          <div className="relative w-full">
            <div className="h-full transform">
              <div className="max-w-[80rem] relative flex w-full  flex-col items-center justify-between overflow-hidden rounded-xl border border-[#E7E7E7] bg-[#F8F8F8] p-[30px] text-center lg:flex-row lg:text-left">
                <div className="lg:pr-[8rem]">
                  <h3 className="mx-auto text-2xl font-bold leading-[30px] tracking-[-1px] text-[#0F131C] sm:text-[32px] sm:leading-[40px] lg:mx-0">
                    Beautiful icons with simples npm installation
                  </h3>
                  <p className="mx-auto mt-3 text-base text-grey-600 sm:mt-4 lg:text-lg lg:leading-6">
                    27,000+ beautiful react icons, organized for ease. Easily
                    boost your web and mobile design by integrating beautiful
                    icons with a simple NPM installation, enhancing your
                    project&apos;s aesthetics and functionality.
                  </p>
                  <div className="max-w-[80rem] mt-7 flex flex-col justify-center gap-y-3 sm:mt-11 sm:flex-row sm:justify-start sm:gap-x-2">
                    <Link
                      href="https://www.npmjs.com/package/@houstonicons/react"
                      className="w-full lg:w-auto"
                      target="_blank"
                    >
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-1.5 border-solid border-[#E3E3E3] bg-black text-white hover:bg-black/80 h-10 flex w-full items-center justify-center rounded-lg p-6 text-base lg:w-auto">
                        Explore react icons
                      </button>
                    </Link>
                    <Link href="/icons" className="w-full lg:auto">
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black text-black hover:bg-black hover:text-white h-10 flex w-full items-center justify-center rounded-lg p-6 text-base lg:w-auto">
                        Explore react icons
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src="/npmComand.svg"
                  alt=""
                  className="z-50 mt-5 lg:mt-0 lg:w-[46%]"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="h-full transform">
              <div className="max-w-[80rem] relative flex w-full  flex-col items-center justify-between overflow-hidden rounded-xl border border-[#E7E7E7] bg-[#F8F8F8] p-[30px] text-center lg:flex-row lg:text-left">
                <svg
                  width="153"
                  height="471"
                  viewBox="0 0 153 471"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0"
                >
                  <g filter="url(#filter0_f_680_14743)">
                    <path
                      d="M118.188 -65.0374C18.1875 32.9626 -56.8125 216.963 -117.812 441.963"
                      stroke="url(#paint0_linear_680_14743)"
                      stroke-width="16"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_680_14743"
                      x="-154.531"
                      y="-99.751"
                      width="307.32"
                      height="572.807"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="14.5"
                        result="effect1_foregroundBlur_680_14743"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_680_14743"
                      x1="38.0687"
                      y1="-22.9678"
                      x2="0.187453"
                      y2="136"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9FFF4C" />
                      <stop
                        offset="1"
                        stop-color="#F4E02A"
                        stop-opacity="0.86"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  width="641"
                  height="177"
                  viewBox="0 0 641 177"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-10 right-10"
                >
                  <g opacity="0.9" filter="url(#filter0_f_680_14741)">
                    <ellipse
                      cx="235.003"
                      cy="242.404"
                      rx="235.003"
                      ry="242.404"
                      transform="matrix(0.741128 0.671364 0.671364 -0.741128 -7.625 351.551)"
                      fill="url(#paint0_linear_680_14741)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_680_14741"
                      x="0.914062"
                      y="0.571777"
                      width="656.734"
                      height="658.199"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="45"
                        result="effect1_foregroundBlur_680_14741"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_680_14741"
                      x1="143.822"
                      y1="95.5621"
                      x2="111.829"
                      y2="508.47"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEFFFE" />
                      <stop offset="0.496318" stop-color="#99FF89" />
                      <stop offset="0.863551" stop-color="#FFD600" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="lg:pr-[8rem]">
                  <h3 className="mx-auto text-2xl font-bold leading-[30px] tracking-[-1px] text-[#0F131C] sm:text-[32px] sm:leading-[40px] lg:mx-0">
                    3,800+ Free icons
                  </h3>
                  <p className="mx-auto mt-3 text-base text-grey-600 sm:mt-4 lg:text-lg lg:leading-6">
                    Access 3,800+ beautiful stroke icons for absolutely free,
                    whether you choose to use it with NPM, CDN, SVG, JSX, React,
                    or React Native. Unlimited use for both personal and
                    commercial projects.
                  </p>
                  <div className="max-w-[80rem] mt-7 flex flex-col justify-center gap-y-3 sm:mt-11 sm:flex-row sm:justify-start sm:gap-x-2">
                    <Link href="/icons" className="w-full lg:auto">
                      <button className="relative font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-black text-black hover:bg-black hover:text-white h-10 flex w-full items-center justify-center rounded-lg p-6 text-base lg:w-auto">
                        Explore react icons
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src="/freeIcons.png"
                  alt=""
                  className="z-50 mt-5 lg:mt-0 lg:w-[46%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[80rem] mx-auto flex w-full flex-col gap-7 px-5 pt-20 sm:pt-[128px] md:px-5 lg:gap-[54px] lg:px-0">
          <section className="w-full text-center max-lg:w-full lg:text-left">
            <div className="flex items-center gap-[54px] max-lg:flex-col max-lg:gap-0">
              <h1 className="w-full max-w-[492px] text-2xl font-bold tracking-tighter text-grey-900 max-lg:mt-10 lg:text-[2.5rem] lg:leading-[48px]">
                Reliable icon solution, designed for flexibility
              </h1>
              <div className="mt-3 flex w-[68%] flex-col max-lg:ml-0 max-lg:w-full lg:ml-5 lg:mt-0">
                <p className="text-base font-normal leading-[25px] text-zinc-800 lg:w-[517.13px]">
                  Whether you&apos;re using NPM, CDN, SVG, or JSX, Houston Pro
                  has you covered. The massive library of 27,000+ beautifully
                  designed react icons seamlessly integrates with your React
                  projects. Customize size, color, and stroke with ease.
                </p>
              </div>
            </div>
          </section>
          <div className="relative w-full">
            <div className="h-full transform">
              <div className="lg:sm-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.5234 23.3335L29.5234 29.3335"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M26.8594 14.6665C26.8594 8.03909 21.4868 2.6665 14.8594 2.6665C8.23196 2.6665 2.85938 8.03909 2.85938 14.6665C2.85938 21.294 8.23196 26.6665 14.8594 26.6665C21.4868 26.6665 26.8594 21.294 26.8594 14.6665Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M26.8594 14.6665C26.8594 8.03909 21.4868 2.6665 14.8594 2.6665C8.23196 2.6665 2.85938 8.03909 2.85938 14.6665C2.85938 21.294 8.23196 26.6665 14.8594 26.6665C21.4868 26.6665 26.8594 21.294 26.8594 14.6665Z"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Search optimized
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Wether you&apos;re searching icons for NPM, CDN and
                        React icons library, the icons are easy to find.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M4.54655 29.2817L4.91986 29.2915C7.66364 29.3632 9.03554 29.3991 10.2835 28.9116C11.5314 28.4243 12.5299 27.4625 14.5268 25.5391L26.3994 14.1039L18.1927 6L6.57862 18.5927C4.9653 20.3407 4.15863 21.2145 3.69099 22.2909C3.22334 23.3673 3.13006 24.5647 2.94348 26.9596L2.90748 27.4216C2.84119 28.2724 2.80804 28.6979 3.05083 28.9733C3.2936 29.2489 3.71126 29.2599 4.54655 29.2817Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M18.9576 5.18044C19.9512 4.10394 20.448 3.5657 20.9759 3.25174C22.2496 2.49418 23.8182 2.47062 25.1132 3.1896C25.6499 3.48757 26.1619 4.01066 27.186 5.05685C28.2102 6.10304 28.7223 6.62613 29.0139 7.17441C29.7178 8.49733 29.6947 10.0996 28.9531 11.4008C28.6458 11.9401 28.1188 12.4475 27.0651 13.4625L14.5268 25.5389C12.5299 27.4624 11.5314 28.4241 10.2835 28.9114C9.03554 29.3989 7.66364 29.363 4.91986 29.2913L4.54655 29.2816C3.71126 29.2597 3.2936 29.2488 3.05083 28.9732C2.80804 28.6977 2.84119 28.2722 2.90748 27.4214L2.94348 26.9594C3.13006 24.5645 3.22334 23.3672 3.69099 22.2908C4.15863 21.2144 4.9653 20.3405 6.57862 18.5925L18.9576 5.18044Z"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.5234 5.3335L26.8568 14.6668"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.8594 29.3335H29.526"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Easy to customize
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        React icons are easy to customize, color size, stroke,
                        animation and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M18.6989 10H13.6813C8.49641 10 6.49077 11.3173 5.0569 16.3164C3.7654 20.8192 3.11965 23.0705 3.7948 24.8165C4.20825 25.8857 4.94234 26.8129 5.90409 27.4805C9.38264 29.8955 22.8388 30.0057 26.4761 27.4805C27.4378 26.8129 28.172 25.8857 28.5854 24.8165C29.2605 23.0705 28.6148 20.8192 27.3233 16.3164C25.9465 11.5163 24.0985 10 18.6989 10Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M10.1914 10.6667V8.48493C10.1914 5.27164 12.8777 2.66675 16.1914 2.66675C19.5051 2.66675 22.1914 5.27164 22.1914 8.48493V10.6667"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M18.6989 10H13.6813C8.49641 10 6.49077 11.3173 5.0569 16.3164C3.7654 20.8192 3.11965 23.0705 3.7948 24.8165C4.20825 25.8857 4.94234 26.8129 5.90409 27.4805C9.38264 29.8955 22.8388 30.0057 26.4761 27.4805C27.4378 26.8129 28.172 25.8857 28.5854 24.8165C29.2605 23.0705 28.6148 20.8192 27.3233 16.3164C25.9465 11.5163 24.0985 10 18.6989 10Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M14.8594 14.6665H17.526"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        27,000+ and counting
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Houston Pro provides 27,000+ react icons along with SVG,
                        NPM and JS frameworks.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M26.8568 22.6668V29.3335H16.1901H5.52344V22.6668C5.52344 20.1527 5.52344 18.8956 6.30449 18.1146C7.08553 17.3335 8.34261 17.3335 10.8568 17.3335L16.1901 29.3335L21.5234 17.3335C24.0376 17.3335 25.2946 17.3335 26.0757 18.1146C26.8568 18.8956 26.8568 20.1527 26.8568 22.6668Z"
                            fill="#9AE101"
                          />
                          <path
                            opacity="0.4"
                            d="M20.8568 8.6665V7.33317C20.8568 4.75584 18.7674 2.6665 16.1901 2.6665C13.6128 2.6665 11.5234 4.75584 11.5234 7.33317V8.6665C11.5234 11.2438 13.6128 13.3332 16.1901 13.3332C18.7674 13.3332 20.8568 11.2438 20.8568 8.6665Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M26.8568 29.3335V22.6668C26.8568 20.1527 26.8568 18.8956 26.0757 18.1146C25.2946 17.3335 24.0376 17.3335 21.5234 17.3335L16.1901 29.3335L10.8568 17.3335C8.34261 17.3335 7.08553 17.3335 6.30449 18.1146C5.52344 18.8956 5.52344 20.1527 5.52344 22.6668V29.3335"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.1927 20.0002L15.526 25.3335L16.1927 27.3335L16.8594 25.3335L16.1927 20.0002ZM16.1927 20.0002L14.8594 17.3335H17.526L16.1927 20.0002Z"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.8568 8.6665V7.33317C20.8568 4.75584 18.7674 2.6665 16.1901 2.6665C13.6128 2.6665 11.5234 4.75584 11.5234 7.33317V8.6665C11.5234 11.2438 13.6128 13.3332 16.1901 13.3332C18.7674 13.3332 20.8568 11.2438 20.8568 8.6665Z"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Designed by professionals
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Houston Pro react icons are designed by Pro designers,
                        carefully.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4">
                            <path
                              d="M19.0744 16.9993L15.1055 13.0565L15.4363 12.728C21.2815 6.92106 26.9085 3.09632 28.0045 4.18516C29.1005 5.27402 25.2505 10.8641 19.4053 16.6711L19.0744 16.9993Z"
                              fill="#9AE101"
                            />
                            <path
                              d="M4.19141 27.8423C4.19141 27.8423 9.15255 28.8281 12.1292 25.8709C13.7733 24.2377 13.7733 21.5898 12.1292 19.9566C10.4853 18.3234 7.81985 18.3234 6.17586 19.9566C3.69529 22.4209 5.67975 24.3923 4.19141 27.8423Z"
                              fill="#9AE101"
                            />
                          </g>
                          <path
                            d="M15.8107 12.347C15.4189 11.9578 14.7857 11.9599 14.3965 12.3517C14.0073 12.7435 14.0094 13.3766 14.4011 13.7659L15.8107 12.347ZM18.3701 17.7087C18.7619 18.0979 19.395 18.0959 19.7843 17.7041C20.1735 17.3123 20.1714 16.6791 19.7797 16.2899L18.3701 17.7087ZM4.19141 27.8422L3.27321 27.4461C3.15358 27.7234 3.16567 28.0399 3.30613 28.3073C3.44657 28.5746 3.70031 28.7642 3.99653 28.823L4.19141 27.8422ZM12.7279 21.3758C12.2964 21.7206 12.2261 22.3498 12.5709 22.7813C12.9156 23.2127 13.5449 23.283 13.9763 22.9383L12.7279 21.3758ZM9.13694 18.1125C8.78942 18.5417 8.85567 19.1714 9.28491 19.5189C9.71417 19.8663 10.3438 19.8001 10.6914 19.3709L9.13694 18.1125ZM14.4011 13.7659L18.3701 17.7087L19.7797 16.2899L15.8107 12.347L14.4011 13.7659ZM11.4245 25.1614C10.1753 26.4023 8.46583 26.8539 6.96787 26.9683C6.22947 27.0247 5.57343 26.9966 5.10305 26.9541C4.8687 26.9329 4.68275 26.9085 4.55845 26.8898C4.49634 26.8805 4.44982 26.8727 4.42053 26.8675C4.40589 26.865 4.39557 26.8631 4.38979 26.8621C4.3869 26.8615 4.38514 26.8611 4.38455 26.861C4.38426 26.861 4.38426 26.861 4.38455 26.861C4.38485 26.861 4.38629 26.8614 4.19141 27.8422C3.99653 28.823 3.99615 28.823 3.99653 28.823C3.99667 28.8231 3.99778 28.8233 3.99807 28.8234C3.99867 28.8235 3.99934 28.8237 4.00009 28.8238C4.00158 28.8241 4.00338 28.8243 4.00547 28.8247C4.00967 28.8257 4.01507 28.8266 4.02167 28.8279C4.03485 28.8303 4.05275 28.8337 4.07517 28.8375C4.12001 28.8454 4.18297 28.8559 4.26235 28.8678C4.42098 28.8915 4.64587 28.921 4.92315 28.9459C5.47599 28.9959 6.24629 29.0293 7.12026 28.9625C8.84705 28.8306 11.1065 28.2963 12.834 26.5802L11.4245 25.1614ZM5.10961 28.2383C5.95269 26.2841 5.81155 24.6955 5.81155 23.5297C5.81155 22.9387 5.84375 22.4797 5.98161 22.0461C6.11393 21.6298 6.36263 21.1805 6.88065 20.6659L5.47109 19.247C4.74881 19.9646 4.31537 20.6858 4.07559 21.4402C3.84135 22.177 3.81155 22.8886 3.81155 23.5297C3.81155 24.8282 3.91847 25.9503 3.27321 27.4461L5.10961 28.2383ZM6.88065 20.6659C8.13463 19.4202 10.1705 19.4202 11.4245 20.6659L12.834 19.247C10.8001 17.2265 7.50506 17.2265 5.47109 19.247L6.88065 20.6659ZM11.4245 20.6659C12.6748 21.9081 12.6748 23.9193 11.4245 25.1614L12.834 26.5802C14.8717 24.5559 14.8717 21.2713 12.834 19.247L11.4245 20.6659ZM16.1414 13.4373C19.0339 10.5638 21.8545 8.19944 24.0639 6.69762C25.1755 5.94204 26.0907 5.43366 26.7586 5.17775C27.0961 5.04846 27.3147 5.00558 27.4334 5.00043C27.5553 4.99515 27.4381 5.0314 27.3002 4.89452L28.7098 3.47566C28.2979 3.06655 27.7653 2.98416 27.3467 3.00231C26.9249 3.0206 26.4786 3.14324 26.043 3.31015C25.1649 3.6466 24.1025 4.25316 22.9397 5.04354C20.6003 6.63359 17.6846 9.0851 14.7319 12.0184L16.1414 13.4373ZM27.3002 4.89452C27.161 4.75618 27.1961 4.63547 27.1909 4.75212C27.1858 4.86695 27.1434 5.08224 27.0135 5.41684C26.7565 6.07892 26.2454 6.98728 25.4849 8.09154C23.9734 10.2861 21.5935 13.0879 18.701 15.9615L20.1106 17.3803C23.0633 14.4471 25.5311 11.5503 27.1319 9.22595C27.9275 8.07071 28.5387 7.01446 28.8779 6.14068C29.0462 5.70736 29.1705 5.26192 29.189 4.83994C29.2074 4.41979 29.123 3.88622 28.7098 3.47566L27.3002 4.89452ZM18.701 15.9615C16.7893 17.8607 14.4166 20.0265 12.7279 21.3758L13.9763 22.9383C15.7389 21.5301 18.1667 19.3114 20.1106 17.3803L18.701 15.9615ZM10.6914 19.3709C12.0494 17.6935 14.2297 15.3366 16.1414 13.4373L14.7319 12.0184C12.7882 13.9494 10.5547 16.3613 9.13694 18.1125L10.6914 19.3709Z"
                            fill="#111226"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        7x Popular styles
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Choose between stroke, twotone, duotone, solid, bulk,
                        stoke sharp, solid sharp icons. Swap through icons
                        easily
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M26.5708 7.6268C28.4203 9.91564 29.5277 12.8288 29.5277 16.0005C29.5277 16.6332 29.4837 17.2556 29.3985 17.8648C28.2377 17.2369 26.8069 17.014 25.3589 18.0545C23.8685 19.1257 22.6181 19.1812 21.6351 19.2248C20.7223 19.2653 20.0401 19.2956 19.6104 20.1192C19.116 21.0665 19.4719 21.7695 19.8883 22.5923C20.5589 23.9175 21.3869 25.5535 19.074 29.0221C18.1467 29.2263 17.1832 29.3339 16.1944 29.3339C14.4267 29.3339 12.7393 28.9899 11.1956 28.3652L11.5419 28.0005C12.4408 26.8904 12.2831 25.5981 11.8322 24.3057C11.5242 23.4231 11.3531 22.9325 11.258 22.4276C11.139 21.796 11.139 21.142 11.139 19.6696C11.139 17.0204 10.4457 16.3581 6.97945 16.3581C5.33489 16.3581 3.93417 15.5817 2.92188 14.7195C3.49465 8.71103 8.05492 3.86556 13.9264 2.85938C13.1912 4.41382 13.4464 6.30412 14.9147 7.01679C16.1424 7.61271 16.2677 8.47059 16.3947 9.33848C16.5103 10.1293 16.6271 10.9285 17.5803 11.5454C18.9132 12.408 20.9124 12.1921 22.9116 9.60428C23.9343 8.2806 25.3747 7.768 26.5708 7.6268Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M29.526 15.9998C29.526 8.63604 23.5564 2.6665 16.1927 2.6665C8.82891 2.6665 2.85938 8.63604 2.85938 15.9998C2.85938 23.3636 8.82891 29.3332 16.1927 29.3332C23.5564 29.3332 29.526 23.3636 29.526 15.9998Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M22.116 8.99216C21.2004 10.1773 20.3632 10.7163 19.7095 10.9087C19.0784 11.0944 18.5462 10.9814 18.1194 10.7051L17.0327 12.3842C17.9387 12.9705 19.0726 13.1809 20.274 12.8273C21.453 12.4804 22.6151 11.6175 23.6987 10.2149L22.116 8.99216ZM18.1194 10.7051C17.5423 10.3316 17.4919 9.94516 17.3626 9.07508C17.3011 8.66221 17.2111 8.09392 16.9154 7.54666C16.601 6.96497 16.0999 6.48186 15.347 6.11641L14.4736 7.91566C14.894 8.11969 15.063 8.32566 15.1559 8.49769C15.2675 8.70416 15.3226 8.95424 15.3843 9.36941C15.5012 10.1554 15.6106 11.4638 17.0327 12.3842L18.1194 10.7051ZM15.347 6.11641C14.9354 5.91662 14.6726 5.55305 14.5695 5.05161C14.4627 4.53272 14.5398 3.89164 14.826 3.28617L13.0181 2.43109C12.5693 3.38006 12.4062 4.46137 12.6104 5.4544C12.8182 6.46488 13.417 7.4028 14.4736 7.91566L15.347 6.11641ZM14.826 3.28617C14.8495 3.23666 14.8742 3.1876 14.9002 3.13909L13.1377 2.19392C13.0957 2.27218 13.0558 2.35129 13.0181 2.43109L14.826 3.28617ZM16.1902 1.6665C15.3602 1.6665 14.5459 1.73716 13.7532 1.873L14.091 3.84426C14.7726 3.72746 15.4739 3.6665 16.1902 3.6665V1.6665ZM26.785 6.60108C26.6752 6.60898 26.5632 6.61952 26.4494 6.63296L26.6838 8.61917C26.767 8.60936 26.8487 8.60166 26.9287 8.5959L26.785 6.60108ZM26.4494 6.63296C25.0803 6.79457 23.353 7.39112 22.116 8.99216L23.6987 10.2149C24.5071 9.1686 25.6606 8.73996 26.6838 8.61917L26.4494 6.63296ZM27.3444 6.99757C24.7184 3.74769 20.697 1.6665 16.1902 1.6665V3.6665C20.0674 3.6665 23.5262 5.4544 25.7887 8.25456L27.3444 6.99757Z"
                            fill="#111226"
                          />
                          <path
                            d="M11.5402 28L12.2652 28.6888C12.2833 28.6696 12.3008 28.6498 12.3174 28.6294L11.5402 28ZM6.97769 17.3576C7.82268 17.3576 8.4438 17.3988 8.90583 17.4854C9.36636 17.5716 9.59775 17.6904 9.72374 17.7936C9.93663 17.9679 10.1372 18.3403 10.1372 19.6691H12.1372C12.1372 18.3487 11.9911 17.0654 10.9909 16.2462C10.5103 15.8527 9.91839 15.6403 9.27407 15.5196C8.63122 15.3992 7.86584 15.3576 6.97769 15.3576V17.3576ZM10.1372 19.6691C10.1372 20.9596 10.1345 21.7123 10.2349 22.3834C10.3383 23.075 10.549 23.6679 10.8863 24.6346L12.7746 23.9758C12.4187 22.9555 12.2827 22.555 12.2129 22.0876C12.1399 21.5998 12.1372 21.0276 12.1372 19.6691H10.1372ZM10.8863 24.6346C11.3058 25.837 11.3227 26.6795 10.763 27.3707L12.3174 28.6294C13.5554 27.1003 13.257 25.3582 12.7746 23.9758L10.8863 24.6346ZM2.20372 15.4218C2.22619 15.4412 2.24885 15.4608 2.27171 15.4803L3.56853 13.9576C3.55057 13.9423 3.53273 13.927 3.51503 13.9116L2.20372 15.4218ZM2.27171 15.4803C3.38994 16.4327 5.01273 17.3576 6.97769 17.3576V15.3576C5.65355 15.3576 4.4749 14.7296 3.56853 13.9576L2.27171 15.4803ZM1.92464 14.624C1.88144 15.0771 1.85938 15.5362 1.85938 16H3.85938C3.85938 15.5996 3.87843 15.2039 3.91562 14.8139L1.92464 14.624ZM10.8152 27.3112L10.4688 27.6759L11.9188 29.0534L12.2652 28.6888L10.8152 27.3112ZM1.85938 16C1.85938 22.0174 5.56704 27.1663 10.8187 29.2916L11.5689 27.4376C7.04665 25.6075 3.85938 21.1748 3.85938 16H1.85938ZM10.8187 29.2916C10.8187 29.2916 10.8175 29.2911 10.816 29.2904C10.8155 29.2903 10.8146 29.2899 10.8135 29.2895C10.8129 29.2892 10.81 29.288 10.8064 29.2864C10.8054 29.286 10.8031 29.2851 10.8018 29.2846C10.8 29.2838 10.7957 29.2819 10.7931 29.2807C10.789 29.279 10.7774 29.2738 10.77 29.2703C10.7519 29.2615 10.6323 29.1916 10.5386 29.1192C10.2927 27.9356 11.4301 27.3932 11.4929 27.4106C11.5078 27.4154 11.5293 27.4227 11.5359 27.4251C11.5397 27.4264 11.5458 27.4287 11.5482 27.4296C11.5499 27.4302 11.5528 27.4314 11.554 27.4318C11.5566 27.4328 11.5586 27.4335 11.5596 27.4339C11.5608 27.4344 11.5617 27.4348 11.5624 27.435C11.5636 27.4355 11.5645 27.4359 11.565 27.436C11.5661 27.4364 11.5668 27.4368 11.5671 27.437C11.5685 27.4375 11.5697 27.4379 11.5689 27.4376C11.5688 27.4376 11.5692 27.4378 11.5689 27.4376C11.5687 27.4375 11.5673 27.437 11.5671 27.437C11.567 27.437 11.5671 27.437 11.5671 27.437C11.5673 27.437 11.5687 27.4375 11.5689 27.4376C11.5688 27.4376 11.5692 27.4378 11.5689 27.4376C11.5692 27.4378 11.5704 27.4383 11.5714 27.4387C11.5719 27.4388 11.5729 27.4392 11.5741 27.4398C11.5747 27.44 11.5756 27.4404 11.5768 27.4408C11.5778 27.4414 11.5798 27.4422 11.5824 27.4432C11.5836 27.4438 11.5865 27.445 11.5881 27.4456C11.5905 27.4467 11.5966 27.4494 11.6003 27.451C11.6067 27.4539 11.6277 27.4638 11.6421 27.471C11.7023 27.5039 12.1359 28.694 11.1234 29.3615C11.014 29.3479 10.8881 29.3166 10.8695 29.3104C10.8619 29.3078 10.8501 29.3036 10.8459 29.302C10.8433 29.3011 10.8389 29.2995 10.8371 29.2988C10.8358 29.2983 10.8335 29.2974 10.8325 29.2971C10.8288 29.2956 10.8259 29.2944 10.8253 29.2943C10.8242 29.2938 10.8233 29.2935 10.8229 29.2932C10.8213 29.2927 10.8201 29.2922 10.8201 29.2922L11.5671 27.437C11.5668 27.4368 11.5661 27.4364 11.565 27.436C11.5648 27.436 11.5655 27.4362 11.565 27.436C11.5645 27.4359 11.5636 27.4355 11.5624 27.435C11.5617 27.4348 11.5608 27.4344 11.5596 27.4339C11.559 27.4336 11.5552 27.4322 11.5515 27.4307C11.5505 27.4303 11.5481 27.4295 11.5468 27.429C11.545 27.4283 11.5406 27.4266 11.538 27.4256C11.5339 27.4242 11.5221 27.4199 11.5144 27.4174C11.4959 27.4112 11.3699 27.3799 11.2605 27.3662C10.248 28.0338 10.6816 29.2239 10.7418 29.2568C10.7562 29.2639 10.7772 29.2738 10.7837 29.2767C10.7874 29.2784 10.7935 29.2811 10.7958 29.282C10.7975 29.2828 10.8006 29.284 10.8018 29.2846C10.8043 29.2856 10.8054 29.286 10.8064 29.2864C10.8075 29.287 10.8093 29.2878 10.8099 29.288C10.8111 29.2886 10.813 29.2894 10.8135 29.2895C10.8132 29.2894 10.8145 29.2899 10.8135 29.2895C10.8146 29.2899 10.8155 29.2903 10.816 29.2904C10.8163 29.2906 10.8185 29.2915 10.8187 29.2916C10.8192 29.2919 10.8195 29.2919 10.8201 29.2922C10.8197 29.292 10.8201 29.2922 10.8201 29.2922C10.8201 29.2922 10.8213 29.2927 10.8229 29.2932C10.8233 29.2935 10.8242 29.2938 10.8253 29.2943C10.8243 29.2938 10.8256 29.2944 10.8253 29.2943C10.8258 29.2944 10.8277 29.2952 10.8289 29.2958C10.8296 29.2959 10.8313 29.2966 10.8325 29.2971C10.8335 29.2975 10.8345 29.2978 10.8371 29.2988C10.8383 29.2992 10.8414 29.3006 10.8431 29.3011C10.8455 29.302 10.8517 29.3043 10.8554 29.3058C10.862 29.308 10.8835 29.3154 10.8985 29.3202C10.9612 29.3375 12.0986 28.7951 11.8527 27.6115C11.759 27.5391 11.6395 27.4692 11.6214 27.4606C11.6139 27.4571 11.6023 27.4518 11.5982 27.45C11.5957 27.4488 11.5913 27.447 11.5895 27.4462C11.5882 27.4456 11.5859 27.4447 11.5849 27.4443C11.5813 27.4427 11.5774 27.4411 11.5768 27.4408C11.5757 27.4404 11.5758 27.4404 11.5753 27.4403C11.5737 27.4396 11.5715 27.4388 11.5714 27.4387C11.571 27.4386 11.5716 27.4388 11.5714 27.4387C11.5704 27.4383 11.5692 27.4378 11.5689 27.4376L10.8187 29.2916Z"
                            fill="#111226"
                          />
                          <path
                            d="M29.526 17.9366C29.4834 17.912 29.4402 17.8879 29.3967 17.8644M29.3967 17.8644C28.236 17.2364 26.8051 17.0135 25.3572 18.0542C22.483 20.1199 20.5012 18.4082 19.6086 20.1187C18.3182 22.5918 22.8212 23.3995 19.0723 29.0218M29.3967 17.8644C28.6232 23.3936 24.4584 27.836 19.0723 29.0218M18.8594 29.3335C18.9331 29.2279 19.004 29.124 19.0723 29.0218"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Global NPM
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Ready with global-friendly NPM network, use the icons
                        for high-performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M29.526 15.9998C29.526 15.5792 29.3234 15.2949 28.918 14.7265C27.0966 12.1724 22.445 6.6665 16.1927 6.6665C9.94041 6.6665 5.28884 12.1724 3.46743 14.7265C3.06205 15.2949 2.85938 15.5792 2.85938 15.9998C2.85938 16.4205 3.06205 16.7048 3.46743 17.2732C5.28884 19.8273 9.94041 25.3332 16.1927 25.3332C22.445 25.3332 27.0966 19.8273 28.918 17.2732C29.3234 16.7048 29.526 16.4205 29.526 15.9998ZM16.1927 11.9998C18.4019 11.9998 20.1927 13.7906 20.1927 15.9998C20.1927 18.209 18.4019 19.9998 16.1927 19.9998C13.9835 19.9998 12.1927 18.209 12.1927 15.9998C12.1927 13.7906 13.9835 11.9998 16.1927 11.9998Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M28.918 14.7265C29.3234 15.2949 29.526 15.5792 29.526 15.9998C29.526 16.4205 29.3234 16.7048 28.918 17.2732C27.0966 19.8273 22.445 25.3332 16.1927 25.3332C9.94041 25.3332 5.28884 19.8273 3.46743 17.2732C3.06205 16.7048 2.85938 16.4205 2.85938 15.9998C2.85938 15.5792 3.06205 15.2949 3.46743 14.7265C5.28884 12.1724 9.94041 6.6665 16.1927 6.6665C22.445 6.6665 27.0966 12.1724 28.918 14.7265Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M20.1914 16C20.1914 13.7908 18.4006 12 16.1914 12C13.9822 12 12.1914 13.7908 12.1914 16C12.1914 18.2092 13.9822 20 16.1914 20C18.4006 20 20.1914 18.2092 20.1914 16Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Actively maintained
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        We&apos;re dedicated for regular maintenance and
                        immediate support.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M8.52604 13.9998C11.6557 13.9998 14.1927 11.4628 14.1927 8.33317C14.1927 5.20356 11.6557 2.6665 8.52604 2.6665C5.39643 2.6665 2.85938 5.20356 2.85938 8.33317C2.85938 11.4628 5.39643 13.9998 8.52604 13.9998Z"
                            fill="#9AE101"
                          />
                          <path
                            opacity="0.4"
                            d="M23.8581 29.3333C26.9877 29.3333 29.5247 26.7963 29.5247 23.6667C29.5247 20.5371 26.9877 18 23.8581 18C20.7285 18 18.1914 20.5371 18.1914 23.6667C18.1914 26.7963 20.7285 29.3333 23.8581 29.3333Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M23.8581 14.0001C26.9877 14.0001 29.5247 11.463 29.5247 8.33341C29.5247 5.2038 26.9877 2.66675 23.8581 2.66675C20.7285 2.66675 18.1914 5.2038 18.1914 8.33341C18.1914 11.463 20.7285 14.0001 23.8581 14.0001Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M8.52604 13.9998C11.6557 13.9998 14.1927 11.4628 14.1927 8.33317C14.1927 5.20356 11.6557 2.6665 8.52604 2.6665C5.39643 2.6665 2.85938 5.20356 2.85938 8.33317C2.85938 11.4628 5.39643 13.9998 8.52604 13.9998Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M23.8581 29.3333C26.9877 29.3333 29.5247 26.7963 29.5247 23.6667C29.5247 20.5371 26.9877 18 23.8581 18C20.7285 18 18.1914 20.5371 18.1914 23.6667C18.1914 26.7963 20.7285 29.3333 23.8581 29.3333Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                          <path
                            d="M8.52604 29.3333C11.6557 29.3333 14.1927 26.7963 14.1927 23.6667C14.1927 20.5371 11.6557 18 8.52604 18C5.39643 18 2.85938 20.5371 2.85938 23.6667C2.85938 26.7963 5.39643 29.3333 8.52604 29.3333Z"
                            stroke="#111226"
                            stroke-width="2.5"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Unlimited use
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Use the react icon libray for unlimited personal and
                        commercial projects, of any sizes.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="duration-400 group z-0 h-full rounded-xl from-[#0BA41A] to-[#FFD850] p-[2px] transition-all ease-in-out will-change-transform hover:bg-gradient-to-b hover:shadow-[0px_44px_64px_0px_rgba(147,197,146,0.44)]">
                    <div className="flex h-full flex-col items-start justify-start rounded-xl p-7 group-hover:bg-white">
                      <div>
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M3.52344 15.9999C3.52344 10.0288 3.52344 7.04323 5.37843 5.18824C7.23342 3.33325 10.219 3.33325 16.1901 3.33325C22.1612 3.33325 25.1468 3.33325 27.0018 5.18824C28.8568 7.04323 28.8568 10.0288 28.8568 15.9999C28.8568 21.971 28.8568 24.9566 27.0018 26.8116C25.1468 28.6666 22.1612 28.6666 16.1901 28.6666C10.219 28.6666 7.23342 28.6666 5.37843 26.8116C3.52344 24.9566 3.52344 21.971 3.52344 15.9999Z"
                            fill="#9AE101"
                          />
                          <path
                            d="M3.52344 15.9999C3.52344 10.0288 3.52344 7.04323 5.37843 5.18824C7.23342 3.33325 10.219 3.33325 16.1901 3.33325C22.1612 3.33325 25.1468 3.33325 27.0018 5.18824C28.8568 7.04323 28.8568 10.0288 28.8568 15.9999C28.8568 21.971 28.8568 24.9566 27.0018 26.8116C25.1468 28.6666 22.1612 28.6666 16.1901 28.6666C10.219 28.6666 7.23342 28.6666 5.37843 26.8116C3.52344 24.9566 3.52344 21.971 3.52344 15.9999Z"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.1888 10.6665V21.3332M21.5221 15.9998H10.8555"
                            stroke="#111226"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-[16px] self-stretch text-xl font-semibold leading-[165%] tracking-[-0.2px] text-black">
                        Adding more
                      </h3>
                      <p className="mt-2 self-stretch font-normal leading-[165%] tracking-[-0.13px] text-grey-700">
                        Houston Pro is committed to be the best and eager to add
                        more react icons and features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-[43px] mt-[70px] border-[#E7E8EC]" />
        <div className="max-w-[80rem] mx-auto flex flex-col justify-center items-center gap-11 px-5 sm:flex-row md:pb-12">
          <p className="w-full max-w-[612px] rounded-xl bg-[#F3F7F5] px-6 py-9 text-lg font-normal leading-[26px] tracking-[-0.36px] text-black">
            <span className="block">
              Developers, tired of searching for the perfect icon that&apos;s
              both beautiful and easy to integrate? Houston Pro offers 27,000+
              beautiful icons in formats like NPM, SVG, React, JSX &amp; more.
            </span>
            <span className="mt-7 block">
              Find your perfect react icons fast, build amazing things.
            </span>
            <span className="mt-7 block">
              Try free react icons & save time!
            </span>
          </p>
          <div className="flex flex-row items-center justify-center gap-6 sm:flex-col sm:items-start">
            <img
              src="https://github.com/castrogusttavo.png"
              alt="Gusttavo Castro"
              className="h-[78px] w-[78px] rounded-full"
            />
            <div>
              <h3 className="text-base font-bold leading-normal text-black">
                Gusttavo Castro
              </h3>
              <p className="mt-1 text-sm font-normal leading-normal tex-grey-700">
                SWE & CEO at Softis
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <DialogPromotion />
    </div>
  )
}
