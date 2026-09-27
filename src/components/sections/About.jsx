import React from 'react'
import Reveal from '../ui/Reveal'

export default function About({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section about" id="about">
      <div className="section-head"><span>01 / ABOUT</span><div /></div>
      <div className="about-grid">
        <Reveal direction="left"><div><h2>Learning the craft.<br /><em>Building in public.</em></h2><div className="about-photo"><img src="/assets/musfiq-portrait.png" alt="Musfiq Hasan" /></div></div></Reveal>
        <Reveal direction="right" delay={120}><div><p className="big-copy">I'm Musfiq Hasan, a Computer Science & Engineering student at RUET in Bangladesh. I build across the stack — from web platforms and mobile apps to data-driven experiments — and I enjoy taking an idea far enough to become something people can actually use.</p><p>I like working from the problem outward: understand what needs to be solved, design the flow, build the system, test the details, then refine. My main focus is full-stack development, with app development and AI/ML as complementary parts of the same toolkit.</p><div className="stats"><div><strong>04</strong><span>FEATURED<br />PROJECTS</span></div><div><strong>20+</strong><span>TOOLS &<br />TECHNOLOGIES</span></div><div><strong>2028</strong><span>EXPECTED<br />GRADUATION</span></div></div></div></Reveal>
      </div>
    </section>
  )
}
