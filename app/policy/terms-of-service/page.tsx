import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Houston Pro Terms of Service - Your Rights and Responsibilities',
}

export default function termsOfService() {
  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out text-grey-900">
      <Header />
      <main className="max-w-[80rem] mx-auto px-5 lg:px-0 overflow-x-hidden py-10 sm:py-16">
        <h1 className="text-4xl font-bold mb-[.8888889em]">Terms of use</h1>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base">
          <strong className="text-grey-900">
            Last update August, 20, 2024
          </strong>
        </p>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base">
          These terms apply to trial users and subscribers of Houston Pro. By
          subscribing or using our app, you accept our terms as described below.
        </p>
        <h2 className="text-2xl font-bold mb-[1em] mt-[2em]">
          Modification of agreement
        </h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed text-base">
          Houston is a JS only product. We strive to make Houston compatible
          with the two last major frameworks with releases. We can not guarantee
          that Houston will works on bete versions of frameworks. The app comes
          &quot;as is&quot; without any warranty of any kind. In no event shall
          the authors or copyright holders be responsible for damages or other
          liability while using Houston. We&apos;re very willing to help, so
          don&apos;t hesitate to send us an email if you experience any issues.
        </p>
        <h2 className="text-2xl font-bold mb-[1em] mt-[2em]">
          Annual subscription
        </h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          Houston is sold under a subscription licensing model through Stripe.
          These subscriptions are annual and are auto-renewed. We send a
          reminder 14 days before a new payment gets withdrawn from your account
          to give you time to cancel your subscription.
        </p>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          We have a flexible cancelation policy, so you&apos;re free to cancel
          your subscription at any time.
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">Licenses</h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          Houston Pro licenses can be activated for up 25 users, allowing you to
          use the app on both your personal and work computers. Fow now,
          licenses ban only be reset via Stripe, so please reach out to us if
          you run out of activations.
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">
          Discount and coupons
        </h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          We do promotions from time to time. These can either be sent through
          us or via onde of our partners. Coupons can only be applied to new
          orders and can&apos;t be used to get a (small) refund on your order.
        </p>
        <h2 className="text-2xl font-bold mb-[1em]- mt-[2em]">Support</h2>
        <p className="text-[#374151] mt-[1.25em] mb-[1.25em] leading-relaxed ">
          Please take a look at our support section when you have questions.
          We&apos;re happy to answer any questions that aren&apos;t listed there
          on <a href="https://linkedin.com/in/castrogusttavo">LinkedIn</a>,{' '}
          <a href="https://github.com/castrogusttavo">Github</a> or via{' '}
          <a href="https://x.com/gustta_dev">Twitter</a>.
        </p>
      </main>
      <Footer />
    </div>
  )
}
