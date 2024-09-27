'use client'

import { useEffect, useState } from 'react'
import { Spinner } from '@/components/Spinner'
import Link from 'next/link'

interface SessionData {
  plan: string
  amount: number
  name: string
  paymentMethod: string[]
  paymentTime: string
}

export default function SuccessPage() {
  const [sessionData, setSessionData] = useState<SessionData | null>(null)

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get(
      'session_id',
    )

    const fetchSessionData = async () => {
      const response = await fetch(`/api/success?session_id=${sessionId}`)
      if (!response.ok) {
        console.error('Erro ao buscar os dados da sessão:', response.statusText)
        return
      }
      const data = await response.json()
      setSessionData(data)
    }

    if (sessionId) {
      fetchSessionData()
    }
  }, [])

  return (
    <div className="antialiased font-sans min-h-screen transition-[grid-template-columns] duration-300 ease-in-out flex items-center justify-center bg-gray-50">
      {sessionData ? (
        <main className="w-[345px] flex flex-col justify-center items-center gap-8 p-6 rounded-3xl shadow-card mx-auto bg-white">
          <div className="flex flex-col items-center gap-4 self-stretch">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28.5"
                cy="28"
                r="28"
                fill="#23A26D"
                fill-opacity="0.12"
              />
              <path
                d="M28 14.6667C20.6534 14.6667 14.6667 20.6534 14.6667 28C14.6667 35.3467 20.6534 41.3334 28 41.3334C35.3467 41.3334 41.3334 35.3467 41.3334 28C41.3334 20.6534 35.3467 14.6667 28 14.6667ZM34.3734 24.9334L26.8134 32.4934C26.6267 32.68 26.3734 32.7867 26.1067 32.7867C25.84 32.7867 25.5867 32.68 25.4 32.4934L21.6267 28.72C21.24 28.3334 21.24 27.6934 21.6267 27.3067C22.0134 26.92 22.6534 26.92 23.04 27.3067L26.1067 30.3734L32.96 23.52C33.3467 23.1334 33.9867 23.1334 34.3734 23.52C34.76 23.9067 34.76 24.5334 34.3734 24.9334Z"
                fill="#23A26D"
              />
            </svg>
            <div className="flex flex-col gap-2 items-center self-stretch">
              <span className="text-grey-500 text-center text-base">
                Payment Success!
              </span>
              {sessionData && (
                <h1 className="text-grey-950 text-center text-2xl font-bold">
                  {sessionData.amount}$
                </h1>
              )}
            </div>
          </div>
          <hr className="w-full border-gray-300" />
          <div className="flex flex-col justify-center items-center gap-4 self-stretch">
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex items-start gap-4 w-full justify-between">
                <span className="text-gray-500 text-sm flex-1">Plan</span>
                <span className="text-gray-900 text-sm font-semibold">
                  {sessionData.plan.charAt(0).toUpperCase() +
                    sessionData.plan.slice(1)}
                </span>
              </div>
              <div className="flex items-start gap-4 w-full justify-between">
                <span className="text-gray-500 text-sm flex-1">
                  Payment Time
                </span>
                <span className="text-gray-900 text-sm font-semibold">
                  {sessionData.paymentTime}
                </span>
              </div>
              <div className="flex items-start gap-4 w-full justify-between">
                <span className="text-gray-500 text-sm flex-1">
                  Payment Method
                </span>
                <span className="text-gray-900 text-sm font-semibold">
                  {sessionData.paymentMethod[0].charAt(0).toUpperCase() +
                    sessionData.paymentMethod[0].slice(1)}
                </span>
              </div>
              <div className="flex items-start gap-4 w-full justify-between">
                <span className="text-gray-500 text-sm flex-1">
                  Sender Name
                </span>
                <span className="text-gray-900 text-sm font-semibold">
                  {sessionData.name}
                </span>
              </div>
            </div>
            <hr className="w-full border-gray-300 border border-dashed" />
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex items-start gap-4 w-full justify-between">
                <span className="text-gray-500 text-sm flex-1">Amount</span>
                <span className="text-gray-900 text-sm font-semibold">
                  {sessionData.amount}$
                </span>
              </div>
              <div className="flex items-start gap-4 w-full justify-between">
                <span className="text-gray-500 text-sm flex-1">Admin Fee</span>
                <span className="text-gray-900 text-sm font-semibold">
                  0.00$
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex relative items-center justify-center font-bold whitespace-nowrap text-sm ring-off set-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary text-[#1d3208] border-none hover:bg-[#A4DA74] py-2 bg-[#afe67f] px-12 w-full sm:max-w-max h-12 rounded-full"
          >
            Back to home
          </Link>
        </main>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
