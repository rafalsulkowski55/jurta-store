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
    video: 'https://pub-be6c62dac75f4a0a8c76d280bffeeb2b.r2.dev/story-03.mp4',
  },
]

function StorySection({ story }: { story: typeof stories[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }, [])

  return (
    <div id={story.num === '01' ? 'story' : undefined} className={`story-section${story.reverse ? ' story-reverse' : ''}`}>
      <div className="story-media">
        {story.video ? (
          <>
            <video ref={videoRef} autoPlay muted loop playsInline disablePictureInPicture controls={false} className="story-media-inner story-media-video" style={{ pointerEvents: 'none' }}>
              <source src={story.video} type="video/mp4" />
            </video>
            <img src="/story03-mobile.webp" alt="" className="story-media-inner story-media-webp" />
          </>
        ) : story.image ? (
          <Image src={story.image} alt={story.label} fill className="story-media-inner" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        ) : null}
        <div className={`story-fade${story.reverse ? ' story-fade-rev' : ''}`} />
        <span className="story-label">{story.label}</span>
        <span className="story-num" aria-hidden="true">{story.num}</span>
      </div>

      <div className="story-text">
        <p className="story-eyebrow">{story.eyebrow}</p>
        <h2 className="story-title">{story.title}</h2>
        <p className="story-body">{story.body}</p>
        <div className="story-stats">
          {story.stats.map(s => (
            <div key={s.label}>
              <div className="story-stat-val">{s.val}</div>
              <div className="story-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Stories() {
  return (
    <>
      <style>{`
        .story-section {
          display: grid; grid-template-columns: 1fr 1fr;
          border-bottom: 0.5px solid rgba(237,232,224,0.1);
          min-height: 100vh;
          direction: ltr;
        }
        .story-reverse { direction: rtl; }
        .story-reverse > * { direction: ltr; }
        .story-media { position: relative; overflow: hidden; }
        .story-media-inner { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .story-fade { position: absolute; inset: 0; background: linear-gradient(to right, transparent 40%, #0c0b09 100%); }
        .story-fade-rev { background: linear-gradient(to left, transparent 40%, #0c0b09 100%); }
        .story-label { position: absolute; bottom: 32px; left: 32px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(237,232,224,0.35); z-index: 2; }
        .story-num { position: absolute; top: 32px; right: 32px; font-family: var(--font-cormorant); font-size: 100px; font-weight: 300; color: rgba(201,169,110,0.08); z-index: 2; line-height: 1; }
        .story-text { display: flex; flex-direction: column; justify-content: center; padding: 80px 72px; direction: ltr; }
        .story-eyebrow { font-size: 12px; letter-spacing: 0.28em; text-transform: uppercase; color: #c9a96e; margin-bottom: 22px; }
        .story-title { font-family: var(--font-cormorant); font-size: clamp(36px, 4vw, 56px); font-weight: 300; line-height: 1.15; color: #ede8e0; margin-bottom: 28px; white-space: pre-line; }
        .story-body { font-size: 16px; line-height: 2; color: rgba(237,232,224,0.55); margin-bottom: 44px; max-width: 400px; }
        .story-stats { border-top: 0.5px solid rgba(237,232,224,0.1); padding-top: 28px; display: flex; gap: 40px; }
        .story-stat-val { font-family: var(--font-cormorant); font-size: 32px; font-weight: 300; color: #c9a96e; line-height: 1; }
        .story-stat-lbl { font-size: 11px; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(237,232,224,0.3); margin-top: 6px; }
        .story-media-webp { display: none; }
        @media (max-width: 768px) {
          .story-section { grid-template-columns: 1fr; min-height: auto; direction: ltr !important; }
          .story-reverse { direction: ltr !important; }
          .story-media { height: 60vw; min-height: 280px; }
          .story-fade { background: linear-gradient(to bottom, transparent 40%, #0c0b09 100%) !important; }
          .story-num { font-size: 60px; }
          .story-label { font-size: 10px; bottom: 16px; left: 20px; }
          .story-text { padding: 40px 28px; }
          .story-title { font-size: clamp(28px, 8vw, 44px); white-space: pre-line; }
          .story-body { font-size: 15px; max-width: 100%; margin-bottom: 32px; }
          .story-stats { gap: 28px; }
          .story-stat-val { font-size: 26px; }
           .story-media-video { display: none !important; }
          .story-media-webp { display: block !important; }
        }
      `}</style>
      <div>
        {stories.map(story => <StorySection key={story.num} story={story} />)}
      </div>
    </>
  )
}