import * as Error from '@/public/error404.png'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="flex justify-center antialiased">
      <div className="flex flex-col w-full max-w-[1336px] mx-auto min-h-full justify-center">
        <div className="py-0 px-[1.88rem] mt-[7.12rem] flex flex-col lg:flex-row items-center justify-center">
          <div className="pt-[2.5rem] flex flex-1 max-w-[34rem]">
            <Image src={Error} alt="404 Image" />
          </div>
          <div className="flex flex-col mx-[1.88rem] ml-[8rem]">
            <h1 className="text-comet-500 text-9xl font-bold">404...</h1>
            <h2 className="text-grey-900 text-4xl font-bold">
              Repeat 404. Over.
            </h2>
            <span className="font-mono mt-[3.5rem] text-md font-bold uppercase text-green-600 relative">
              Houston, respond:{' '}
            </span>
            <p className="mt-[1.5rem] text-md font-medium text-grey-600 leading-[155%]">
              <span>
                I think you&apos;ve reached the edge of the universe. <br />
              </span>
              <span>The page you requested was not found.</span>
            </p>
            <Link
              href="/"
              className="flex items-center justify-center rounded-md transition-all focus:shadow-md bg-softis-mid  hover:bg-softis-light h-12 px-4 max-w-[233px] font-bold gap-3 text-white text-lg mt-[2rem] leading-0 uppercase"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
