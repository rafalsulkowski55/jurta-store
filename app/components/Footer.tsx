export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid rgba(237,232,224,0.1)' }}>
      <style>{`
        .footer-wrap { padding: 64px 60px 36px; }
        .footer-top { display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr; gap: 52px; padding-bottom: 52px; border-bottom: 0.5px solid rgba(237,232,224,0.1); }
        .footer-col h4 { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(237,232,224,0.25); font-weight: 300; margin-bottom: 16px; }
        .footer-col a { display: block; font-size: 13px; color: rgba(237,232,224,0.4); text-decoration: none; margin-bottom: 10px; }
        @media (max-width: 768px) {
          .footer-wrap { padding: 52px 28px 32px; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-top { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ede8e0', textDecoration: 'none', display: 'inline-block', marginBottom: 14 }}>
              Jurta<span style={{ color: '#c9a96e' }}>.</span>
            </a>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(237,232,224,0.32)', maxWidth: 260 }}>
              Wyselekcjonowane dywany kirgistańskie - naturalne surowce, tradycyjne wzory, rzemiosło wpisane na listę UNESCO.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 20 }}>
              {['Instagram', 'TikTok', 'Pinterest'].map(s => (
                <a key={s} href="#" style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.28)', textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
          </div>
          {[
            { title: 'Kolekcja', links: ['Wszystkie egzemplarze', 'Szirdak', 'Dżijim', 'Ala-kijiz', 'Na zamówienie'] },
            { title: 'Serwis', links: ['Dostawa i kurier', 'Płatności', 'Zwroty', 'Konserwacja'] },
            { title: 'Jurta', links: ['Dziedzictwo', 'Rzemieślnicy', 'O nas', 'Kontakt', 'Regulamin'] },
          ].map(col => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map(link => <a key={link} href="#">{link}</a>)}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.08em', color: 'rgba(237,232,224,0.18)' }}>© 2026 Jurta · Biszkek · Warszawa</span>
          <span style={{ fontSize: 10, letterSpacing: '0.08em', color: 'rgba(237,232,224,0.18)' }}>Rzemiosło UNESCO · Tradycja od XII wieku</span>
        </div>
      </div>
    </footer>
  )
}
