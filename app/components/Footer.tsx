export default function Footer() {
  return (
    <footer style={{ padding: '64px 60px 36px', borderTop: '0.5px solid rgba(237,232,224,0.1)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr',
        gap: 52, paddingBottom: 52,
        borderBottom: '0.5px solid rgba(237,232,224,0.1)',
      }}>
        <div>
          <a href="#" style={{
            fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 300,
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: '#ede8e0', textDecoration: 'none', display: 'inline-block', marginBottom: 14,
          }}>Jurta<span style={{ color: '#c9a96e' }}>.</span></a>
          <p style={{ fontSize: 12, lineHeight: 1.85, color: 'rgba(237,232,224,0.32)', maxWidth: 220 }}>
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
          { title: 'Serwis', links: ['Dostawa i kurier', 'Płatności', 'Zwroty', 'Konserwacja dywanów'] },
          { title: 'Jurta', links: ['Dziedzictwo', 'Rzemieślnicy', 'O nas', 'Kontakt', 'Regulamin'] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.25)', fontWeight: 300, marginBottom: 16 }}>{col.title}</h4>
            {col.links.map(link => (
              <a key={link} href="#" style={{ display: 'block', fontSize: 12, color: 'rgba(237,232,224,0.4)', textDecoration: 'none', marginBottom: 10 }}>{link}</a>
            ))}
          </div>
        ))}
      </div>

      <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, letterSpacing: '0.08em', color: 'rgba(237,232,224,0.18)' }}>© 2026 Jurta · Biszkek · Warszawa</span>
        <span style={{ fontSize: 10, letterSpacing: '0.08em', color: 'rgba(237,232,224,0.18)' }}>Rzemiosło UNESCO · Tradycja od XII wieku</span>
      </div>
    </footer>
  )
}