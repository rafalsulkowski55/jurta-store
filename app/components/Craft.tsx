const craftspeople = [
  {
    role: 'Mistrzyni szirdak',
    name: 'Aizat Mamytbekova',
    region: 'Dolina Czui, Kirgistan',
    bio: 'Tka szirdaki od 38 lat. Uczyła się od matki, matka od babki. Każdy jej dywan zawiera wzory symbolizujące Ała-Too - kirgiskie góry, które widziała przez całe życie.',
  },
  {
    role: 'Tkacz dżijim',
    name: 'Bakyt Isakov',
    region: 'Karakol, wschodnie Issyk-Kul',
    bio: 'Jeden z ostatnich mężczyzn tkających dżijim na tradycyjnych krosnach pionowych. Jego wzory zaczerpnięte z petroglifów z III w. p.n.e. to jedyne ich żywe odwzorowanie.',
  },
  {
    role: 'Barwiarka',
    name: 'Gulnara Osmonova',
    region: 'Naryn, centralne pasmo Tien Szan',
    bio: 'Barwi wełnę wyłącznie naturalnymi pigmentami - korzeniem granatu, korą orzecha, szafranem alpejskim. Jej palety nie da się odtworzyć syntetycznie.',
  },
]

export default function Craft() {
  return (
    <section style={{ padding: '80px 60px', borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 16, display: 'block' }}>Twórcy</span>
      <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.1, color: '#ede8e0', marginBottom: 52 }}>
        Rzemieślnicy,<br />nie producenci.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {craftspeople.map((person, i) => (
          <div key={person.name} style={{
            paddingLeft: i > 0 ? 44 : 0,
            paddingRight: i < 2 ? 44 : 0,
            borderRight: i < 2 ? '0.5px solid rgba(237,232,224,0.1)' : 'none',
          }}>
            <p style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.28)', marginBottom: 10 }}>{person.role}</p>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 300, color: '#ede8e0', marginBottom: 5 }}>{person.name}</h3>
            <p style={{ fontSize: 11, color: 'rgba(201,169,110,0.35)', marginBottom: 16 }}>{person.region}</p>
            <div style={{ width: 28, height: '0.5px', background: 'rgba(201,169,110,0.35)', marginBottom: 16 }} />
            <p style={{ fontSize: 12, lineHeight: 1.9, color: 'rgba(237,232,224,0.55)' }}>{person.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}