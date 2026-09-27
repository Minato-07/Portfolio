import React from 'react'
import Icon from '../ui/Icon'

export default function Hero({ go, projectsRef, contactRef, setCursorHot }) {
  return (
    <section className="hero hero-gradient" id="home">
      <div className="gradient-blob gradient-blob-a" aria-hidden="true" />
      <div className="gradient-blob gradient-blob-b" aria-hidden="true" />
      <div className="gradient-blob gradient-blob-c" aria-hidden="true" />
      <div className="gradient-haze" aria-hidden="true" />
      <div className="hero-grid" />

      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="pulse" /> FULL STACK DEVELOPMENT · APP DEVELOPMENT · AI / ML</p>
        <h1>I turn <em>ideas</em><br />into products.</h1>
        <p className="lead">I'm a Computer Science & Engineering student at RUET, building full-stack web products, mobile applications and AI/ML projects. I care about clear interfaces, solid systems and software that feels considered from the first interaction to the last.</p>
        <div className="hero-actions">
          <button className="primary interactive" onMouseEnter={()=>setCursorHot(true)} onMouseLeave={()=>setCursorHot(false)} onClick={()=>go(projectsRef)}>Explore my work <Icon type="arrow" /></button>
          <a className="text-btn interactive" href="/assets/musfiq-hasan-cv-placeholder.pdf" download onMouseEnter={()=>setCursorHot(true)} onMouseLeave={()=>setCursorHot(false)}>Download CV <span>↓</span></a>
          <button className="text-btn interactive" onMouseEnter={()=>setCursorHot(true)} onMouseLeave={()=>setCursorHot(false)} onClick={()=>go(contactRef)}>Let's talk <span>↗</span></button>
        </div>
      </div>

      {/* Intentionally empty: the hero's right side is left open for a cleaner editorial composition. */}
      <div className="hero-visual hero-visual-empty" aria-hidden="true" />

      <div className="hero-side"><div className="scroll-note"><span>01 — 04</span><div className="line" /><span>SCROLL TO EXPLORE</span></div></div>
    </section>
  )
}
