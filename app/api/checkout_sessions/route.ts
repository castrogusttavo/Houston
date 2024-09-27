import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: Request) {
  const { plan } = await req.json()

  const prices: { [key: string]: string } = {
    solo: 'price_1Q3I3XDPMo0AsB2mtBT3LaRC',
    startup: 'price_1Q3N5yDPMo0AsB2mHv7raIka',
    business: 'price_1Q3N60DPMo0AsB2mwshDB7fL',
  }

  if (!prices[plan]) {
    return NextResponse.json({ error: 'Plano inválido' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: prices[plan],
          quantity: 1,
        },
      ],
      metadata: { plan },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
    })

    return NextResponse.json({ sessionId: session.id })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
