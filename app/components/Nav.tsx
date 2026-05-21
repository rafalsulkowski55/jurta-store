'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 28px 60px;
          transition: all 0.4s ease;
        }
        .nav-wrap.scrolled {
          background: rgba(12,11,9,0.92);
          backdrop-filter: blur(14px);
          padding: 18px 60px;
          border-bottom: 0.5px solid rgba(237,232,224,0.1);
        }
        .nav-links { display: flex; gap: 40px; align-items: center; }
        .nav-hamburger { display: none; }
        .nav-mobile-menu {
          display: none; position: fixed; inset: 0; z-index: 99;
          background: rgba(12,11,9,0.98);
          flex-direction: column; align-items: center; justify-content: center;
          gap: 40px;
        }
        .nav-mobile-menu.open { display: flex; }
        @media (max-width: 768px) {
          .nav-wrap { padding: 24px 28px; }
          .nav-wrap.scrolled { padding: 16px 28px; }
          .nav-links { display: none; }
          .nav-hamburger { display: block; cursor: pointer; background: none; border: none; padding: 4px; }
        }
      `}</style>

      <nav className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
        <a href="#" style={{
          fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 300,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#ede8e0', textDecoration: 'none',
        }}>
          Jurta<span style={{ color: '#c9a96e' }}>.</span>
        </a>

        <div className="nav-links">
          {['Dziedzictwo', 'Kolekcja', 'Rzemieślnicy', 'Kontakt'].map((item, i) => (
            <a key={item} href="#" style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: i === 0 ? '#ede8e0' : 'rgba(237,232,224,0.55)',
              textDecoration: i === 0 ? 'underline' : 'none',
              textUnderlineOffset: 4, textDecorationColor: '#c9a96e',
            }}>{item}</a>
          ))}
          <span style={{
            fontSize: 10, letterSpacing: '0.15em', color: 'rgba(237,232,224,0.28)',
            paddingLeft: 24, borderLeft: '0.5px solid rgba(237,232,224,0.12)',
          }}>EN</span>
        </div>

        <button className="nav-hamburger" onClick={() => setOpen(!open)}>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <line y1="1" x2="24" y2="1" stroke="#ede8e0" strokeWidth="0.75"/>
            <line y1="8" x2="24" y2="8" stroke="#ede8e0" strokeWidth="0.75"/>
            <line y1="15" x2="24" y2="15" stroke="#ede8e0" strokeWidth="0.75"/>
          </svg>
        </button>
      </nav>

      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        <button onClick={() => setOpen(false)} style={{
          position: 'absolute', top: 28, right: 28,
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#ede8e0', fontSize: 28, lineHeight: 1,
        }}>✕</button>
        {['Dziedzictwo', 'Kolekcja', 'Rzemieślnicy', 'Kontakt'].map((item) => (
          <a key={item} href="#" onClick={() => setOpen(false)} style={{
            fontFamily: 'var(--font-cormorant)', fontSize: 36, fontWeight: 300,
            color: '#ede8e0', textDecoration: 'none', letterSpacing: '0.1em',
          }}>{item}</a>
        ))}
        <span style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(237,232,224,0.3)' }}>EN</span>
      </div>
    </>
  )
}
