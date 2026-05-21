import Image from 'next/image'

export default function Atmo() {
  return (
    <section style={{ borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      <style>{`
        .atmo-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; min-height: 420px; }
        .atmo-img-wrap { position: relative; overflow: hidden; }
        .atmo-text { display: flex; flex-direction: column; justify-content: center; padding: 56px 52px; border-left: 0.5px solid rgba(237,232,224,0.1); }
        @media (max-width: 768px) {
          .atmo-grid { grid-template-columns: 1fr; }
          .atmo-img-wrap { height: 56vw; min-height: 260px; }
          .atmo-text { padding: 44px 28px; border-left: none; border-top: 0.5px solid rgba(237,232,224,0.1); }
        }
      `}</style>
      <div className="atmo-grid">
        <div className="atmo-img-wrap">
          <Image src="/atmo-01.jpg" alt="Jurty na tle gór Tien Szan" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div className="atmo-text">
          <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 16, display: 'block' }}>Biszkek · Warszawa</span>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 300, lineHeight: 1.15, color: '#ede8e0' }}>Połączone wełną.</h2>
          <p style={{ fontSize: 15, lineHeight: 2, color: 'rgba(237,232,224,0.55)', marginTop: 20, maxWidth: 300 }}>
            Przywieźliśmy z Kirgistanu nie tylko dywany - ale bezpośrednie relacje z rzemieślnikami i szacunek do tradycji, która przetrwała osiem wieków.
          </p>
          <a href="#" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.55)', textDecoration: 'none', borderBottom: '0.5px solid rgba(237,232,224,0.2)', paddingBottom: 2, marginTop: 28, alignSelf: 'flex-start' }}>O nas →</a>
        </div>
      </div>
    </section>
  )
}
