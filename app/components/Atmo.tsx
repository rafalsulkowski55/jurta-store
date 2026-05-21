import Image from 'next/image'

export default function Atmo() {
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: '1.3fr 0.7fr',
      borderBottom: '0.5px solid rgba(237,232,224,0.1)',
      minHeight: 420,
    }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/atmo-01.jpg"
          alt="Jurty na tle gór Tien Szan"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '56px 52px',
        borderLeft: '0.5px solid rgba(237,232,224,0.1)',
      }}>
        <span style={{
          fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#c9a96e', marginBottom: 16, display: 'block',
        }}>Biszkek · Warszawa</span>

        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(24px, 2.8vw, 36px)',
          fontWeight: 300, lineHeight: 1.15, color: '#ede8e0',
        }}>Połączone wełną.</h2>

        <p style={{
          fontSize: 13, lineHeight: 2,
          color: 'rgba(237,232,224,0.55)',
          marginTop: 20, maxWidth: 300,
        }}>
          Przywieźliśmy z Kirgistanu nie tylko dywany - ale bezpośrednie
          relacje z rzemieślnikami i szacunek do tradycji, która przetrwała
          osiem wieków.
        </p>

        <a href="#" style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(237,232,224,0.55)', textDecoration: 'none',
          borderBottom: '0.5px solid rgba(237,232,224,0.2)',
          paddingBottom: 2, marginTop: 28, alignSelf: 'flex-start',
        }}>O nas →</a>
      </div>
    </section>
  )
}