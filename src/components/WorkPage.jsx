import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import MobileNav from './layout/MobileNav'
import { useCursor } from '../hooks/useCursor'
import { projects } from '../data/projects'
import Reveal from './ui/Reveal'

export default function WorkPage({ navigate }) {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cursorRef, cursorHot, setCursorHot } = useCursor()

  useEffect(() => {
    document.title = 'Musfiq Hasan — Work'
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.title = 'Musfiq Hasan — Portfolio'
    }
  }, [])

  const navigateHome = (section) => {
    setMenu(false)
    const target = section || 'home'
    navigate(target === 'home' ? '/' : '/')
    window.setTimeout(() => {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  const go = (ref) => {
    const id = ref?.current?.id
    navigateHome(id || 'home')
  }

  const refs = {
    about: { current: { id: 'about' } },
    projects: { current: { id: 'work' } },
    skills: { current: { id: 'skills' } },
    education: { current: { id: 'education' } },
    contact: { current: { id: 'contact' } },
  }

  return (
    <div className="all-work-page page-enter">
      <div ref={cursorRef} className={`cursor ${cursorHot ? 'hot' : ''}`}><span /></div>
      <Header
        scrolled={scrolled}
        menu={menu}
        setMenu={setMenu}
        go={go}
        refs={refs}
        setCursorHot={setCursorHot}
        navigateHome={() => navigateHome('home')}
      />
      <MobileNav menu={menu} go={go} refs={refs} />

      <main className="all-work-main">
        <div className="all-work-intro">
          <p className="work-kicker">03 / PROJECT ARCHIVE</p>
          <h1>Work worth <em>exploring.</em></h1>
          <p>A closer look at the products, experiments and engineering work behind the portfolio — including the problem, the approach and the technology behind each build.</p>
        </div>
        <div className="all-work-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} direction={i % 2 ? 'right' : 'left'}>
              <article
                className="all-work-card"
                onMouseEnter={() => setCursorHot(true)}
                onMouseLeave={() => setCursorHot(false)}
              >
                <div className="all-work-card-top"><span>{p.num}</span><span>{p.tag}</span></div>
                <div className="all-work-card-image"><img src={p.image} alt={`${p.title} preview`} /><span>PROJECT / {p.num}</span></div>
                <div className="all-work-card-body">
                  <h2>{p.title}</h2>
                  <p>{p.long}</p>
                  <div className="all-work-tech">{p.tech.map(t => <b key={t}>{t}</b>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  )
}
