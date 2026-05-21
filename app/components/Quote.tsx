export default function Quote() {
  return (
    <section style={{
      padding: '96px 60px',
      borderBottom: '0.5px solid rgba(237,232,224,0.1)',
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 80,
      alignItems: 'center',
    }}>
      <div style={{
        fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
        color: 'rgba(201,169,110,0.35)', lineHeight: 1.9,
      }}>
        Z miłości<br />do autentyczności
      </div>
      <div>
        <blockquote style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: 300, fontStyle: 'italic',
          lineHeight: 1.5, color: '#ede8e0',
        }}>
          Kirgiscy tkacze nie tworzą wzorów - oni zapamiętują góry.
          Każdy szirdak to zapis krajobrazu, który inaczej zniknie.
        </blockquote>
        <p style={{
          marginTop: 20, fontSize: 11, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(237,232,224,0.3)',
        }}>
          - Jurta, Biszkek · Warszawa
        </p>
      </div>
    </section>
  )
}