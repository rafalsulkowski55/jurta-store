'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section style={{
      position: 'relative', height: '100vh', minHeight: 700,
      overflow: 'hidden', display: 'flex', alignItems: 'flex-end',
    }}>
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(12,11,9,0.88) 0%, rgba(12,11,9,0.6) 40%, rgba(12,11,9,0.15) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        width: '60%', padding: '0 60px 80px',
      }}>
        <p style={{
          fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#c9a96e', marginBottom: 22,
        }}>The Heritage - Kirgistan</p>

        <h1 style={{
          fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(60px, 7.5vw, 110px)',
          fontWeight: 300, lineHeight: 0.98, color: '#ede8e0',
          marginBottom: 30, whiteSpace: 'nowrap',
        }}>
          Utkane<br />
          w&nbsp;<em style={{ fontStyle: 'italic', color: '#c9a96e' }}>ciszy</em>&nbsp;gór.
        </h1>

        <p style={{
          fontSize: 14, lineHeight: 1.85, maxWidth: 500,
          color: 'rgba(237,232,224,0.55)',
        }}>
          Szirdaki i dżijim - ręcznie tkane dywany z kirgistańskich pastwisk,
          gdzie każdy wzór jest mapą krajobrazu przekazywaną z pokolenia na pokolenie.
        </p>

        <div style={{ marginTop: 44, display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="#" style={{
            padding: '15px 44px', background: '#c9a96e', color: '#0c0b09',
            fontFamily: 'var(--font-jost)', fontSize: 10, fontWeight: 400,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            textDecoration: 'none', display: 'inline-block',
          }}>Odkryj kolekcję</a>
          <a href="#story" style={{
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(237,232,224,0.55)', textDecoration: 'none',
            borderBottom: '0.5px solid rgba(237,232,224,0.2)', paddingBottom: 2,
          }}>Czytaj historię →</a>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          border: '0.5px solid rgba(201,169,110,0.25)',
          padding: '9px 20px', marginTop: 24,
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(201,169,110,0.6)',
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(201,169,110,0.35)' }} />
          Niematerialne dziedzictwo UNESCO
        </div>
      </div>

      <div style={{
        position: 'absolute', right: 60, bottom: 80, zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
      }}>
        <span style={{
          fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(237,232,224,0.25)', writingMode: 'vertical-rl',
        }}>Rzemiosło tkackie · Kirgistan</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: '0.5px', height: 48, background: 'rgba(201,169,110,0.35)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.25)' }}>Przewiń</span>
        </div>
      </div>
    </section>
  )
}