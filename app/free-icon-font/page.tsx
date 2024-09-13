import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Alert } from '@/components/Alert'

export default function FreeIconFontPage() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out">
      <Header />
      <main className="relative px-6 lg:px-0 flex flex-col mx-auto max-w-[80rem] mt-16 lg:mt-28 pb-20">
        <div className="absolute -top-[11rem] -left-[5rem] w-[317px] h-[317px] shrink-0 [background:linear-gradient(184deg,#FEFFFE_23.18%,#99FF89_62.74%,#FFD600_92%)] blur-[45px] rounded-full" />
        <div className="mb-12 z-10">
          <span className="text-sm font-md text-grey-500">
            Available through our private CDN
          </span>
          <h1 className="max-w-[975px] text-3xl font-bold leading-8 text-grey-950 sm:text-5xl sm:leading-[74px] break-words">
            Houston Icons Free Icon Font
          </h1>
          <p className="mx-auto text-lg leading-8 text-grey-600">
            Font is available in TTF, WOFF, WOFF2, EOT and SVG formats
          </p>
          <div className="mt-6">
            <h3 className="font-bold text-xl leading-12 mb-3 text-grey-900">
              Usage Example
            </h3>
            <div>
              <iframe
                src="https://codesandbox.io/embed/49vtxz?autoresize=1&module=&2Findex.html&hidenavigation=1"
                className="w-full h-[302px] border-0 rounded-sm overflow-hidden"
                title="distracted-currying-49vtxz"
                allow="accelerometer; ambient-light-sensor; encrypted-media; geolocation; gryroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            </div>
          </div>
          <Alert />
        </div>
      </main>
      <Footer />
    </div>
  )
}
