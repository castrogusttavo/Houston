import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json(
      { error: 'session_id é necessário' },
      { status: 400 },
    )
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    const fullName = session.customer_details?.name ?? 'No name available'
    const nameParts = fullName.split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ''
    const formattedName = `${firstName} ${lastName}`

    return NextResponse.json({
      plan: session.metadata?.plan ?? 'No plan available',
      amount: ((session.amount_total ?? 0) / 100).toFixed(2),
      name: formattedName,
      paymentMethod: session.payment_method_types,
      paymentTime: new Date(session.created * 1000)
        .toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        .replace(',', ''),
    })
  } catch (error) {
    console.error('Erro ao buscar a sessão no Stripe:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar a sessão' },
      { status: 500 },
    )
  }
}
