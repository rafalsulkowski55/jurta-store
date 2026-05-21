const stats = [
  { val: 'XII w.', label: 'Ciągłość tradycji\ntkackiej' },
  { val: '3-6', label: 'Miesięcy pracy\nnad jednym dywanem' },
  { val: '100%', label: 'Naturalne surowce\nbez wyjątków' },
  { val: '1/1', label: 'Każdy egzemplarz\nniepowtarzalny' },
]

export default function Stats() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      {stats.map((stat, i) => (
        <div key={stat.val} style={{
          padding: '48px 44px',
          borderRight: i < 3 ? '0.5px solid rgba(237,232,224,0.1)' : 'none',
        }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(38px, 4.5vw, 58px)', fontWeight: 300, color: '#c9a96e', lineHeight: 1, marginBottom: 10 }}>{stat.val}</div>
          <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.35)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}