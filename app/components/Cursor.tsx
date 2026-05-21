'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX
      my = e.clientY
    })

    function tick() {
      if (!cursor || !ring) return
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(tick)
    }
    tick()
  }, [])

  return (
    <>
      <div id="cursor" style={{
        width: 7, height: 7, background: '#c9a96e', borderRadius: '50%',
        position: 'fixed', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)', top: 0, left: 0
      }} />
      <div id="cursor-ring" style={{
        width: 34, height: 34, border: '0.5px solid rgba(201,169,110,0.35)',
        borderRadius: '50%', position: 'fixed', pointerEvents: 'none',
        zIndex: 9998, transform: 'translate(-50%, -50%)', top: 0, left: 0,
        transition: 'width .3s, height .3s'
      }} />
    </>
  )
}