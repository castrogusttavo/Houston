import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Houston Pro Privacy Policy - Your Data and Our Services',
}

export default function privacyPolicy() {
  function handleClickClearCookies() {
    localStorage.clear()
  }

  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out text-grey-900">
      <Header />
      <main className="max-w-[80rem] mx-auto px-5 lg:px-0 overflow-x-hidden py-10 sm:py-16">
        <h1 className="text-4xl font-bold mb-[.8888889em]">Privacy Policy</h1>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base">
          <strong className="text-grey-900">
            Last update August, 20, 2024
          </strong>
        </p>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base">
          This privacy notice for GUSTTAVO CASTRO (doing business Houston Pro)
          (&quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot; or
          &quot;<strong>our</strong>
          &quot;), describes how and why we might collect, store, use and/or
          share (&quot;
          <strong>process</strong>&quot;) your information when you use our
          services (&quot;<strong>Services</strong>&quot;), such as when you:
        </p>
        <ul className="list-disc pl-[1.25rem]">
          <li className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base pl-[.375em]">
            Visit our website at{' '}
            <a
              href="https://houston-icons.vercel.app"
              className="text-blue-500 hover:underline"
            >
              houstonicons.com{' '}
            </a>
            or any website of our that links to this privacy notice
          </li>
          <li className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base pl-[.375em]">
            Engage with us in other related ways, including any sales,
            marketing, or event.
          </li>
        </ul>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base">
          We treat your data as if it were our own, so we only access or share
          your data to provide you with good customer service. This requires us
          to track website behavior, store cookies, and process your information
        </p>
        <h2 className="text-2xl font-bold mb-[1em] mt-[2em]">
          Your data is used to:
        </h2>
        <ol className="list-decimal pl-4">
          <li className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base pl-[.375em]">
            Process your online payment(s)
          </li>
          <li className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base pl-[.375em]">
            Send you your order confirmation and license key(s)
          </li>
          <li className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base pl-[.375em]">
            Offer customer support
          </li>
          <li className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base pl-[.375em]">
            Send you product updates or promotions by email (if opted in)
          </li>
        </ol>
        <h3 className="text-xl text-grey-900 font-bold mt-[1.25em] mb-[1.25em]">
          You have the rights to:
        </h3>
        <a href="#cookies" className="text-blue-500 hover:underline">
          Opt-out of tracking cookies
        </a>{' '}
        used on our site.
        <h2 className="text-2xl font-bold mb-[1em] mt-[2em]">
          Services we use:
        </h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          We don&apos;t share share any personally identifying information
          publicly or with third-parties, except when required to by law.
        </p>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          We default to processing your data anonymously, but this isn&apos;t
          possible for all the services we use. Exceptions of this are:
        </p>
        <h3 className="text-xl text-grey-900 font-bold mt-[1.6em] mb-[.6em]">
          Stripe
        </h3>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          We use Stripe to process and send you your order confirmation and
          delivery information. Stripe processes your contact and payment
          details. Your contact details are accessible by us, but payment
          details will never be disclosed with us by Stripe.
          <br />
          Further reading:{' '}
          <a
            href="https://stripe.com/ex-mx/privacy"
            className="text-blue-500 hover:underline"
          >
            Buyer Privacy Notice
          </a>
        </p>
        <h3
          id="cookies"
          className="text-xl text-grey-900 font-bold mt-[1.6em] mb-[.6em]"
        >
          Resend
        </h3>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          We use Resend to host emails sent to hello.softis@gmail.com.
          <br />
          Further reading:{' '}
          <a
            href="https://resend.com/legal/dpa"
            className="text-blue-500 hover:underline"
          >
            DPA: Data Processing Addendum
          </a>
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">Cookies</h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          Our website uses cookies to provide you the best possible browsing
          experience. Cookies are enabled by default but you&apos;re free to
          opt-out, and we&apos;ll remove the cookies from your machine
          accordingly.{' '}
          <a
            href=""
            onClick={handleClickClearCookies}
            className="text-blue-500 hover:underline"
          >
            {' '}
            Click Here to opt-out
          </a>
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">
          View or deleting your data
        </h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          Under the law of GDPR, you always have the right to request the data
          we have about you.
        </p>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          In case you wish your data to be deleted from the services, we
          can&apos;t guarantee that you&apos;ll sill be able to use
          &apos;Houston&apos; or &apos;Houston Pro&apos; properly or whether we
          can be of any help if you request support.
        </p>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          To request viewing or deleting your data you can send an email to{' '}
          <a
            href="mailto:hello.softis@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {' '}
            hello.softis@gmail.com
          </a>
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">
          Correction of data
        </h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          If for any reason the data we have on you needs to be corrected you
          can send an email to{' '}
          <a
            href="mailto:hello.softis@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {' '}
            hello.softis@gmail.com
          </a>
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">Questions?</h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          Feel free to email us if you have any questions regarding the contents
          of this privacy policy. You can reach us on
          <a
            href="mailto:hello.softis@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {' '}
            hello.softis@gmail.com
          </a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
