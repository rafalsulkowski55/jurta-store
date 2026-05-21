const stats = [
  { val: 'XII w.', label: 'Ciągłość tradycji\ntkackiej' },
  { val: '3-6', label: 'Miesięcy pracy\nnad jednym dywanem' },
  { val: '100%', label: 'Naturalne surowce\nbez wyjątków' },
  { val: '1/1', label: 'Każdy egzemplarz\nniepowtarzalny' },
]

export default function Stats() {
  return (
    <div style={{ borderBottom: '0.5px solid rgba(237,232,224,0.1)' }}>
      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .stat-item { padding: 48px 44px; border-right: 0.5px solid rgba(237,232,224,0.1); }
        .stat-item:last-child { border-right: none; }
        .stat-val { font-family: var(--font-cormorant); font-size: clamp(38px, 4.5vw, 58px); font-weight: 300; color: #c9a96e; line-height: 1; margin-bottom: 10px; }
        .stat-lbl { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(237,232,224,0.35); line-height: 1.7; white-space: pre-line; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stat-item { padding: 36px 28px; border-right: 0.5px solid rgba(237,232,224,0.1); border-bottom: 0.5px solid rgba(237,232,224,0.1); }
          .stat-item:nth-child(2n) { border-right: none; }
          .stat-item:nth-child(3), .stat-item:nth-child(4) { border-bottom: none; }
          .stat-val { font-size: clamp(32px, 8vw, 48px); }
        }
      `}</style>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.val} className="stat-item">
            <div className="stat-val">{stat.val}</div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
