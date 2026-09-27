import React, { useEffect, useRef, useState } from 'react'
import IntroReveal from './components/intro/IntroReveal'
import Header from './components/layout/Header'
import MobileNav from './components/layout/MobileNav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Philosophy from './components/sections/Philosophy'
import Contact from './components/sections/Contact'
import { useCursor } from './hooks/useCursor'
import Reveal from './components/ui/Reveal'
import WorkPage from './components/WorkPage'

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/')

  const navigate = (nextPath) => {
    const target = nextPath === '/' ? '/' : `/${String(nextPath).replace(/^\/+|\/+$/g, '')}`
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target)
    }
    setPath(target)
  }

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/+$/, '') || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [path])

  return path === '/work' ? <WorkPage navigate={navigate} /> : <HomePage navigate={navigate} />
}

function HomePage({ navigate }) {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)
  const { cursorRef, cursorHot, setCursorHot } = useCursor()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const refs = { about: aboutRef, projects: projectsRef, skills: skillsRef, education: educationRef, contact: contactRef }
  const go = (ref) => {
    setMenu(false)
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="site">
      <div ref={cursorRef} className={`cursor ${cursorHot ? 'hot' : ''}`}><span /></div>
      <IntroReveal />
      <Header scrolled={scrolled} menu={menu} setMenu={setMenu} go={go} refs={refs} setCursorHot={setCursorHot} navigate={navigate} />
      <MobileNav menu={menu} go={go} refs={refs} />
      <main>
        <Hero go={go} projectsRef={projectsRef} contactRef={contactRef} setCursorHot={setCursorHot} />
        <About sectionRef={aboutRef} />
        <Projects sectionRef={projectsRef} />
        <Skills sectionRef={skillsRef} />
        <Reveal direction="up"><Philosophy /></Reveal>
        <Education sectionRef={educationRef} />
        <Contact sectionRef={contactRef} setCursorHot={setCursorHot} />
      </main>
      <Footer />
    </div>
  )
}
