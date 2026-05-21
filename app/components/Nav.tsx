'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: scrolled ? '18px 60px' : '32px 60px',
      background: scrolled ? 'rgba(12,11,9,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(237,232,224,0.1)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 300,
        letterSpacing: '0.25em', textTransform: 'uppercase',
        color: '#ede8e0', textDecoration: 'none',
      }}>
        Jurta<span style={{ color: '#c9a96e' }}>.</span>
      </a>
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {['Dziedzictwo', 'Kolekcja', 'Rzemieślnicy', 'Kontakt'].map((item, i) => (
          <a key={item} href="#" style={{
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: i === 0 ? '#ede8e0' : 'rgba(237,232,224,0.55)',
            textDecoration: i === 0 ? 'underline' : 'none',
            textUnderlineOffset: 4,
            textDecorationColor: '#c9a96e',
          }}>{item}</a>
        ))}
        <span style={{
          fontSize: 10, letterSpacing: '0.15em',
          color: 'rgba(237,232,224,0.28)',
          paddingLeft: 24, borderLeft: '0.5px solid rgba(237,232,224,0.12)',
        }}>EN</span>
      </div>
    </nav>
  )
}