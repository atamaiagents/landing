import { NextRequest, NextResponse } from 'next/server'
// Static export: redirect to dashboard OG image route
export async function GET(req: NextRequest) {
  return NextResponse.redirect('https://app.atamai.ai/api/og', { status: 301 })
}
