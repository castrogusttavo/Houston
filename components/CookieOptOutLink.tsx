'use client'

import Cookies from 'js-cookie'

export function CookieOptOutLink() {
  function handleRemoveCookies() {
    Cookies.remove('hasSeenCookieToast')
  }

  return (
    <a
      href=""
      onClick={handleRemoveCookies}
      className="text-blue-500 hover:underline"
    >
      Click Here to opt-out
    </a>
  )
}
