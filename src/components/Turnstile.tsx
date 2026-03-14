"use client"
import { useEffect, useRef } from "react"

interface TurnstileProps {
  onVerify: (token: string) => void
}

export function Turnstile({ onVerify }: TurnstileProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    if (!siteKey || !ref.current) return

    function render() {
      if (!ref.current || !window.turnstile) return
      window.turnstile.render(ref.current, {
        sitekey: siteKey!,
        theme: "dark",
        callback: onVerify,
        size: "flexible",
      })
    }

    if (window.turnstile) {
      render()
    } else {
      const script = document.createElement("script")
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
      script.async = true
      script.onload = render
      document.head.appendChild(script)
    }
  }, [onVerify])

  return <div ref={ref} className="w-full my-3" />
}

declare global {
  interface Window {
    turnstile: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
    }
  }
}
