const craftspeople = [
  { role: 'Mistrzyni szirdak', name: 'Aizat Mamytbekova', region: 'Dolina Czui, Kirgistan', bio: 'Tka szirdaki od 38 lat. Uczyła się od matki, matka od babki. Każdy jej dywan zawiera wzory symbolizujące Ała-Too - kirgiskie góry, które widziała przez całe życie.' },
  { role: 'Tkacz dżijim', name: 'Bakyt Isakov', region: 'Karakol, wschodnie Issyk-Kul', bio: 'Jeden z ostatnich mężczyzn tkających dżijim na tradycyjnych krosnach pionowych. Jego wzory zaczerpnięte z petroglifów z III w. p.n.e. to jedyne ich żywe odwzorowanie.' },
  { role: 'Barwiarka', name: 'Gulnara Osmonova', region: 'Naryn, centralne pasmo Tien Szan', bio: 'Barwi wełnę wyłącznie naturalnymi pigmentami - korzeniem granatu, korą orzecha, szafranem alpejskim. Jej palety nie da się odtworzyć syntetycznie.' },
]

export default function Craft() {
  return (
    <section style={{ borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      <style>{`
        .craft-wrap { padding: 80px 60px; }
        .craft-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 52px; }
        .craft-card-1 { padding-right: 44px; border-right: 0.5px solid rgba(237,232,224,0.1); }
        .craft-card-2 { padding: 0 44px; border-right: 0.5px solid rgba(237,232,224,0.1); }
        .craft-card-3 { padding-left: 44px; }
        .craft-name { font-family: var(--font-cormorant); font-size: 22px; font-weight: 300; color: #ede8e0; margin-bottom: 5px; }
        .craft-bio { font-size: 14px; line-height: 1.9; color: rgba(237,232,224,0.55); }
        @media (max-width: 768px) {
          .craft-wrap { padding: 52px 28px; }
          .craft-grid { grid-template-columns: 1fr; margin-top: 36px; gap: 0; }
          .craft-card-1, .craft-card-2, .craft-card-3 { padding: 32px 0; border-right: none; border-bottom: 0.5px solid rgba(237,232,224,0.1); }
          .craft-card-3 { border-bottom: none; }
          .craft-name { font-size: 26px; }
          .craft-bio { font-size: 15px; }
        }
      `}</style>
      <div className="craft-wrap">
        <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 16, display: 'block' }}>Twórcy</span>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.1, color: '#ede8e0' }}>Rzemieślnicy,<br />nie producenci.</h2>
        <div className="craft-grid">
          {craftspeople.map((person, i) => (
            <div key={person.name} className={`craft-card-${i + 1}`}>
              <p style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.28)', marginBottom: 10 }}>{person.role}</p>
              <h3 className="craft-name">{person.name}</h3>
              <p style={{ fontSize: 11, color: 'rgba(201,169,110,0.35)', marginBottom: 16 }}>{person.region}</p>
              <div style={{ width: 28, height: '0.5px', background: 'rgba(201,169,110,0.35)', marginBottom: 16 }} />
              <p className="craft-bio">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
