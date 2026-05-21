import Image from 'next/image'

const materials = [
  {
    num: '01',
    image: '/mat-01.jpg',
    name: 'Szirdak',
    desc: 'Filcowany dywan z techniki inlay. Geometryczne wzory wycinane i składane jak mozaika, szyte grubą nicią wełnianą. Trwałość na dziesięciolecia.',
    link: 'Odkryj galerię szirdak',
  },
  {
    num: '02',
    image: '/mat-02.jpg',
    name: 'Dżijim',
    desc: 'Tkany na krosnach, o płaskiej strukturze. Delikatniejszy wzór, subtelna kolorystyka. Idealny do przestrzeni, które mówią ściszonym głosem.',
    link: 'Odkryj galerię dżijim',
  },
  {
    num: '03',
    image: '/mat-03.jpg',
    name: 'Ala-kijiz',
    desc: 'Najstarsza technika - wełna wałkowana i filcowana mokro. Wzory tworzone przez samo splątanie włókien. Organiczny, żywy, niepowtarzalny.',
    link: 'Odkryj galerię ala-kijiz',
  },
]

export default function Materials() {
  return (
    <section style={{ borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      <div style={{
        padding: '72px 60px 48px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 40, alignItems: 'flex-end',
      }}>
        <div>
          <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 16, display: 'block' }}>Materia</span>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.1, color: '#ede8e0' }}>Wybierz swoją fakturę.</h2>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(237,232,224,0.3)', lineHeight: 1.8 }}>
          Trzy techniki - jedna tradycja.<br />Każda z inną osobowością i zastosowaniem.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '0.5px solid rgba(237,232,224,0.1)' }}>
        {materials.map((mat, i) => (
          <div key={mat.num} style={{
            padding: '44px 44px 52px',
            borderRight: i < 2 ? '0.5px solid rgba(237,232,224,0.1)' : 'none',
          }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 11, letterSpacing: '0.15em', color: 'rgba(201,169,110,0.35)', display: 'block', marginBottom: 28 }}>{mat.num}</span>
            <div style={{ width: '100%', height: 190, position: 'relative', marginBottom: 24, overflow: 'hidden' }}>
              <Image src={mat.image} alt={mat.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 25, fontWeight: 300, color: '#ede8e0', marginBottom: 12, lineHeight: 1.2 }}>{mat.name}</h3>
            <p style={{ fontSize: 12, lineHeight: 1.9, color: 'rgba(237,232,224,0.55)', marginBottom: 24 }}>{mat.desc}</p>
            <a href="#" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', textDecoration: 'none' }}>{mat.link} →</a>
          </div>
        ))}
      </div>
    </section>
  )
}