import Link from 'next/link'

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16 sm:pt-20 lg:px-8 lg:pt-[6rem] border-t">
      <div className="mx-auto max-w-[80rem] xl:gap-8">
        <div className="grid gap-10 lg:grid-cols-5 md:gap-20 grid-cols-2">
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">
              For designers
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="https://www.figma.com/community/file/1414792481171455704"
                  target="_blank"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Preview in figma
                </Link>
              </li>
              <li>
                <Link
                  href="/figma-icon-library"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Figma icon library
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">
              For developers
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/docs"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/@houstonicons/react"
                  target="_blank"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  React package (Free)
                </Link>
              </li>
              <li>
                <Link
                  href="/react-icons"
                  target="_blank"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  React icons
                </Link>
              </li>
              <li>
                <Link
                  href="/free-icon-font"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Free Icon font
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">Resources</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/categories"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/styles"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Styles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">More</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/policy/license-agreement"
                  target="_blank"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="https://castrogusttavo.vercel.app"
                  target="_blank"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Author
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/castrogusttavo"
                  target="_blank"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Follow us on LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">Policy</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/policy/privacy-policy"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/privacy-policy#cookies"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/terms-of-service"
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[80rem] mt-14 border-t border-grey-900/10 pt-8 md:items-center md:justify-between md:flex">
        <div className="flex flex-col sm:flex-row md:order-2 text-shape-primary gap-4">
          Contact us →
          <Link href="mailto:hello.softis@gmail.com" className="font-medium">
            hello.softis@gmail.com
          </Link>
          <div className="shrink-0 bg-border w-1 h-5 hidden sm:block" />
          <div className="shrink-0 bg-border w-1 h-5 hidden sm:block" />
          <div className="flex gap-3">
            <Link
              href="https://github.com/castrogusttavo"
              className="text-grey-600"
            >
              <img
                src="https://cdn.hugeicons.com/icons/github-stroke-rounded.svg"
                alt=""
              />
            </Link>
            <Link
              href="https://linkedin.com/in/castrogusttavo"
              className="text-grey-600"
            >
              <img
                src="https://cdn.hugeicons.com/icons/linkedin-01-stroke-rounded.svg"
                alt=""
              />
            </Link>
            <Link href="https://x.com/gustta_dev" className="text-grey-600">
              <img
                src="https://cdn.hugeicons.com/icons/twitter-stroke-rounded.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <p className="mt-8 leading-5 text-shape-primary font-medium md:order-1 md:mt-0">
          © 2024 {''}
          <Link target="_blank" href="https://castrogusttavo.vercel.app">
            Gusttavo Castro.{' '}
          </Link>
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
