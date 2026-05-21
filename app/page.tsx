import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Quote from './components/Quote'
import Stories from './components/Stories'
import Materials from './components/Materials'
import Atmo from './components/Atmo'
import Craft from './components/Craft'
import Stats from './components/Stats'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Cursor from './components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Quote />
        <Stories />
        <Materials />
        <Atmo />
        <Craft />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </>
  )
}