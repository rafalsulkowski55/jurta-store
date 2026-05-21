'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }, [])

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>
      <style>{`
        .hero-content { position: absolute; bottom: 80px; left: 0; z-index: 2; width: 60%; padding: 0 60px; }
        .hero-title { font-family: var(--font-cormorant); font-size: clamp(60px, 7.5vw, 110px); font-weight: 300; line-height: 0.98; color: #ede8e0; margin-bottom: 30px; white-space: nowrap; }
        .hero-sub { font-size: 14px; line-height: 1.85; max-width: 500px; color: rgba(237,232,224,0.55); }
        .hero-side { position: absolute; right: 60px; bottom: 80px; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .hero-scroll-line { width: 0.5px; height: 48px; background: rgba(201,169,110,0.35); animation: pulse 2.5s ease-in-out infinite; }
        .hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
        .hero-webp { display: none; position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        @keyframes pulse { 0%,100%{opacity:.3;height:48px}50%{opacity:1;height:64px} }
        @media (max-width: 768px) {
          .hero-content { width: 100%; padding: 0 28px; bottom: auto; top: 50%; transform: translateY(-50%); }
          .hero-title { font-size: clamp(40px, 11vw, 64px); white-space: normal; margin-bottom: 16px; }
          .hero-sub { font-size: 14px; max-width: 100%; }
          .hero-side { display: none; }
          .hero-cta { flex-direction: column; align-items: flex-start !important; gap: 16px !important; margin-top: 24px !important; }
          .hero-video { display: none !important; }
          .hero-webp { display: block !important; }
          .hero-badge { display: none !important; }
        }
      `}</style>

      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        disablePictureInPicture
        controls={false}
        className="hero-video"
        preload="auto"
      >
        <source src="https://pub-be6c62dac75f4a0a8c76d280bffeeb2b.r2.dev/11716405-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>

      <img src="/hero-mobile.webp" alt="" className="hero-webp" />

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,11,9,0.2) 0%, rgba(12,11,9,0.5) 50%, rgba(12,11,9,0.88) 100%)', zIndex: 1 }} />

      <div className="hero-content">
        <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 22 }}>The Heritage - Kirgistan</p>
        <h1 className="hero-title">Utkane<br />w&nbsp;<em style={{ fontStyle: 'italic', color: '#c9a96e' }}>ciszy</em>&nbsp;gór.</h1>
        <p className="hero-sub">Szirdaki i dżijim - ręcznie tkane dywany z kirgistańskich pastwisk, gdzie każdy wzór jest mapą krajobrazu przekazywaną z pokolenia na pokolenie.</p>
        <div className="hero-cta" style={{ marginTop: 44, display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="#" style={{ padding: '15px 44px', background: '#c9a96e', color: '#0c0b09', fontFamily: 'var(--font-jost)', fontSize: 10, fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', textDecoration: 'none' }}>Odkryj kolekcję</a>
          <a href="#story" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.55)', textDecoration: 'none', borderBottom: '0.5px solid rgba(237,232,224,0.2)', paddingBottom: 2 }}>Czytaj historię →</a>
        </div>
        <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '0.5px solid rgba(201,169,110,0.25)', padding: '9px 20px', marginTop: 24, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(201,169,110,0.35)' }} />
          Niematerialne dziedzictwo UNESCO
        </div>
      </div>

      <div className="hero-side">
        <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.25)', writingMode: 'vertical-rl' }}>Rzemiosło tkackie · Kirgistan</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div className="hero-scroll-line" />
          <span style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.25)' }}>Przewiń</span>
        </div>
      </div>
    </section>
  )
}