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
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Figma plugin
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Preview in figma
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Figma icon library
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">
              For developers
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  React package (Free)
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  React icons
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Free icon font
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">Resources</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Styles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">More</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Author
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-grey-900">Policy</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Cookie policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="leading-6 text-grey-600 hover:text-grey-400"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[80rem] mt-14 border-t border-grey-900/10 pt-8 md:items-center md:justify-between md:flex">
        <div className="flex flex-col sm:flex-row md:order-2 text-shape-primary gap-4">
          Contact us →
          <a href="mailto:hello.softis@gmail.com" className="font-medium">
            hello.softis@gmail.com
          </a>
          <div className="shrink-0 bg-border w-1 h-5 hidden sm:block" />
          <div className="shrink-0 bg-border w-1 h-5 hidden sm:block" />
          <div className="flex gap-3">
            <a href="" className="text-grey-600">
              <img
                src="https://cdn.hugeicons.com/icons/github-stroke-rounded.svg"
                alt=""
              />
            </a>
            <a href="" className="text-grey-600">
              <img
                src="https://cdn.hugeicons.com/icons/linkedin-01-stroke-rounded.svg"
                alt=""
              />
            </a>
            <a href="" className="text-grey-600">
              <img
                src="https://cdn.hugeicons.com/icons/twitter-stroke-rounded.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <p className="mt-8 leading-5 text-shape-primary font-medium md:order-1 md:mt-0">
          © 2024 {''}
          <a href="castrogusttavo.vercel.app">Gusttavo Castro. </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
