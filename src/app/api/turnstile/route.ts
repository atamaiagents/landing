import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { token } = await req.json()
  if (!token) return NextResponse.json({ success: false }, { status: 400 })

  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return NextResponse.json({ success: true }) // dev fallback

  const form = new URLSearchParams()
  form.append('secret', secret)
  form.append('response', token)
  form.append('remoteip', req.headers.get('cf-connecting-ip') || '')

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form.toString(),
  })
  const data = await res.json()
  return NextResponse.json({ success: data.success }, { status: data.success ? 200 : 403 })
}
