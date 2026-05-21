export default function Cta() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .cta-wrap { padding: 120px 60px; text-align: center; }
        .cta-title { font-family: var(--font-cormorant); font-size: clamp(34px, 5vw, 60px); font-weight: 300; font-style: italic; line-height: 1.15; color: #ede8e0; margin-bottom: 20px; }
        .cta-sub { font-size: 15px; color: rgba(237,232,224,0.55); line-height: 1.9; max-width: 380px; margin: 0 auto 48px; }
        .cta-btns { display: flex; gap: 20px; justify-content: center; align-items: center; }
        @media (max-width: 768px) {
          .cta-wrap { padding: 80px 28px; }
          .cta-sub { font-size: 15px; }
          .cta-btns { flex-direction: column; gap: 16px; }
        }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="cta-wrap">
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
        <h2 className="cta-title">Zaprojektuj<br />swój Jurta.</h2>
        <p className="cta-sub">Każdy dywan możemy stworzyć na zamówienie - twój rozmiar, twoje wzory, twoja paleta. Rozmawiamy bezpośrednio z rzemieślnikami.</p>
        <div className="cta-btns">
          <a href="#" style={{ padding: '15px 44px', background: '#c9a96e', color: '#0c0b09', fontFamily: 'var(--font-jost)', fontSize: 10, fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>Zamów konsultację</a>
          <a href="#" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.55)', textDecoration: 'none', borderBottom: '0.5px solid rgba(237,232,224,0.2)', paddingBottom: 2 }}>Zobacz kolekcję →</a>
        </div>
      </div>
    </section>
  )
}
