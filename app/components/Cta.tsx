export default function Cta() {
  return (
    <section style={{
      padding: '120px 60px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" opacity={0.14}>
          <rect x="3" y="3" width="82" height="82" stroke="#c9a96e" strokeWidth="0.5"/>
          <rect x="15" y="15" width="58" height="58" stroke="#c9a96e" strokeWidth="0.5"/>
          <line x1="3" y1="3" x2="85" y2="85" stroke="#c9a96e" strokeWidth="0.5"/>
          <line x1="85" y1="3" x2="3" y2="85" stroke="#c9a96e" strokeWidth="0.5"/>
          <circle cx="44" cy="44" r="5" stroke="#c9a96e" strokeWidth="0.5"/>
          <circle cx="44" cy="44" r="18" stroke="#c9a96e" strokeWidth="0.5" strokeDasharray="2 4"/>
        </svg>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: 'clamp(34px, 5vw, 60px)',
        fontWeight: 300, fontStyle: 'italic',
        lineHeight: 1.15, color: '#ede8e0', marginBottom: 20,
      }}>
        Zaprojektuj<br />swój Jurta.
      </h2>

      <p style={{
        fontSize: 13, color: 'rgba(237,232,224,0.55)',
        lineHeight: 1.9, maxWidth: 380, margin: '0 auto 48px',
      }}>
        Każdy dywan możemy stworzyć na zamówienie - twój rozmiar,
        twoje wzory, twoja paleta. Rozmawiamy bezpośrednio z rzemieślnikami.
      </p>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
        <a href="#" style={{
          padding: '15px 44px', background: '#c9a96e', color: '#0c0b09',
          fontFamily: 'var(--font-jost)', fontSize: 10, fontWeight: 400,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          textDecoration: 'none', display: 'inline-block',
        }}>Zamów konsultację</a>
        <a href="#" style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(237,232,224,0.55)', textDecoration: 'none',
          borderBottom: '0.5px solid rgba(237,232,224,0.2)', paddingBottom: 2,
        }}>Zobacz kolekcję →</a>
      </div>
    </section>
  )
}