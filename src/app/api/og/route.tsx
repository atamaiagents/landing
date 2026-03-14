import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Your AI Agent, Live in 60 Seconds'
  const sub = searchParams.get('sub') || 'Managed cloud hosting for open-source AI agents.'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#070510',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '600px',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.20) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '64px', flex: 1, position: 'relative', zIndex: 1 }}>

          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px' }}>
            <div style={{
              width: '44px', height: '44px',
              background: '#7C3AED',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '22px',
              fontWeight: 800,
            }}>A</div>
            <span style={{ color: 'white', fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px' }}>
              AtamaiAgents
            </span>
          </div>

          {/* Headline */}
          <div style={{
            color: 'white',
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: '24px',
            maxWidth: '680px',
          }}>
            {title}
          </div>

          {/* Subline */}
          <div style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '22px',
            fontWeight: 400,
            marginBottom: '40px',
            maxWidth: '580px',
            lineHeight: 1.5,
          }}>
            {sub}
          </div>

          {/* Pill badges */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {['⚡ 200+ AI Models', '🔒 Secure Hosting', '🚀 60s Deploy'].map((label) => (
              <div key={label} style={{
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.40)',
                borderRadius: '100px',
                padding: '8px 18px',
                color: '#A78BFA',
                fontSize: '15px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
              }}>{label}</div>
            ))}
          </div>
        </div>

        {/* Right terminal card */}
        <div style={{
          position: 'absolute',
          right: '64px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '340px',
          background: '#110e20',
          border: '1px solid rgba(124,58,237,0.25)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 1,
        }}>
          {/* Window dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.10)' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(124,58,237,0.60)' }} />
            <span style={{ color: 'rgba(124,58,237,0.70)', fontSize: '11px', fontFamily: 'monospace', marginLeft: '4px' }}>
              agent@atamai.ai
            </span>
          </div>

          {/* Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7C3AED' }} />
            <span style={{ color: '#A78BFA', fontSize: '13px', fontWeight: 600 }}>Agent is Running</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontFamily: 'monospace' }}>
            Uptime: 99.9% · Model: Auto
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          {/* Chat */}
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', lineHeight: 1.5 }}>
            <span style={{ color: '#A78BFA' }}>You:</span> Set a meeting for tomorrow 3pm
          </div>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', lineHeight: 1.5 }}>
            <span style={{ color: '#7C3AED', fontWeight: 600 }}>Agent:</span> Done! Calendar invite sent to all attendees...
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '44px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 64px',
          zIndex: 1,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '13px' }}>atamai.ai</span>
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '13px' }}>Starter from $19/mo</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
