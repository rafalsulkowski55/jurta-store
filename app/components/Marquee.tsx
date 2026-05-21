export default function Marquee() {
  const items = ['Szirdak', 'Dżijim', 'Wełna górska', 'Kirgistan', 'Rzemiosło UNESCO', 'Tkane ręcznie', 'Biszkek · Warszawa']

  return (
    <div style={{
      borderTop: '0.5px solid rgba(237,232,224,0.1)',
      borderBottom: '0.5px solid rgba(237,232,224,0.1)',
      padding: '16px 0', overflow: 'hidden',
      display: 'flex', whiteSpace: 'nowrap',
    }}>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .marquee-track { display: flex; animation: marquee 28s linear infinite; }
      `}</style>
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(237,232,224,0.2)', padding: '0 40px',
            display: 'flex', alignItems: 'center', gap: 40,
          }}>
            {item}
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(201,169,110,0.35)', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  )
}