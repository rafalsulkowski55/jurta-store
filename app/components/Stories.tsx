'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stories = [
  {
    num: '01',
    image: '/story-01.jpg',
    label: 'Szirdak - technika inlay',
    eyebrow: 'Jeden wyjazd w góry Tien Szan.',
    title: 'Tradycja, która\nnie szuka uwagi.',
    body: 'Wszystko zaczęło się od jednej podróży do Kirgistanu i zderzenia z rzemiosłem, które od wieków pozostaje niezmienione. Szirdaki tworzone są techniką inlay - wycinania i składania filcu jak puzzli - bez kleju, tylko z igłą i wełną.',
    stats: [{ val: 'XII w.', label: 'Początki tradycji' }, { val: '3-6', label: 'Miesięcy pracy' }, { val: '100%', label: 'Wełna naturalna' }],
    reverse: false,
    video: null,
  },
  {
    num: '02',
    image: '/story-02.jpg',
    label: 'Dolina Fergany, Kirgistan',
    eyebrow: 'Surowiec z wyżyn',
    title: 'Wełna, która\npamięta zimę.',
    body: 'Owce kirgistańskich nomadów pasą się powyżej 3000 metrów. Ekstremalne warunki dają wełnę o wyjątkowej gęstości - odporną, miękką, głęboko barwioną naturalnymi pigmentami z roślin alpejskich.',
    stats: [{ val: '3400m', label: 'Wys. pastwisk' }, { val: '7+', label: 'Naturalne barwniki' }],
    reverse: true,
    video: null,
  },
  {
    num: '03',
    image: null,
    label: 'Warsztaty tkackie, Karakol',
    eyebrow: 'Wzory jako język',
    title: 'Każdy ornament\nma imię.',
    body: 'Kirgistańskie wzory to alfabet - koła symbolizują jurty i wieczność, rogi jelenia - siłę, spirale - wodę i czas. Żadne dwa dywany nie są identyczne, bo żadna tkaczka nie opowiada tej samej historii.',
    stats: [{ val: '40+', label: 'Tradycyjnych wzorów' }, { val: '1/1', label: 'Każdy egzemplarz' }],
    reverse: false,
    video: '/download.mp4',
  },
]

function StorySection({ story }: { story: typeof stories[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }, [])

  return (
    <div id={story.num === '01' ? 'story' : undefined} style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      borderBottom: '0.5px solid rgba(237,232,224,0.1)',
      minHeight: '100vh', direction: story.reverse ? 'rtl' : 'ltr',
    }}>
      <div style={{ position: 'relative', overflow: 'hidden', direction: 'ltr' }}>
        {story.video ? (
          <video
            ref={videoRef}
            autoPlay muted loop playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          >
            <source src={story.video} type="video/mp4" />
          </video>
        ) : story.image ? (
          <Image
            src={story.image} alt={story.label} fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : null}
        <div style={{
          position: 'absolute', inset: 0,
          background: story.reverse
            ? 'linear-gradient(to left, transparent 40%, #0c0b09 100%)'
            : 'linear-gradient(to right, transparent 40%, #0c0b09 100%)',
        }} />
        <span style={{ position: 'absolute', bottom: 32, left: 32, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.35)', zIndex: 2 }}>{story.label}</span>
        <span style={{ position: 'absolute', top: 32, right: 32, fontFamily: 'var(--font-cormorant)', fontSize: 100, fontWeight: 300, color: 'rgba(201,169,110,0.08)', zIndex: 2, lineHeight: 1 }}>{story.num}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 72px', direction: 'ltr' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: 22 }}>{story.eyebrow}</p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.15, color: '#ede8e0', marginBottom: 28, whiteSpace: 'pre-line' }}>{story.title}</h2>
        <p style={{ fontSize: 16, lineHeight: 2, color: 'rgba(237,232,224,0.55)', marginBottom: 44, maxWidth: 400 }}>{story.body}</p>
        <div style={{ borderTop: '0.5px solid rgba(237,232,224,0.1)', paddingTop: 28, display: 'flex', gap: 40 }}>
          {story.stats.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 32, fontWeight: 300, color: '#c9a96e', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 11, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(237,232,224,0.3)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Stories() {
  return (
    <div>
      {stories.map(story => <StorySection key={story.num} story={story} />)}
    </div>
  )
}