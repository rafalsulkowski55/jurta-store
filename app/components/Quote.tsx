export default function Quote() {
  return (
    <section style={{ padding: '96px 60px', borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      <style>{`
        .quote-grid { display: grid; grid-template-columns: 200px 1fr; gap: 80px; align-items: center; }
        .quote-text { font-family: var(--font-cormorant); font-size: clamp(24px, 3vw, 36px); font-weight: 300; font-style: italic; line-height: 1.5; color: #ede8e0; }
        @media (max-width: 768px) {
          .quote-grid { grid-template-columns: 1fr; gap: 28px; }
          .quote-section-wrap { padding: 64px 28px; }
        }
      `}</style>
      <div className="quote-grid">
        <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.35)', lineHeight: 1.9 }}>
          Z miłości<br />do autentyczności
        </div>
        <div>
          <blockquote className="quote-text">
            Kirgiscy tkacze nie tworzą wzorów - oni zapamiętują góry. Każdy szirdak to zapis krajobrazu, który inaczej zniknie.
          </blockquote>
          <p style={{ marginTop: 20, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.3)' }}>
            - Jurta, Biszkek · Warszawa
          </p>
        </div>
      </div>
    </section>
  )
}
