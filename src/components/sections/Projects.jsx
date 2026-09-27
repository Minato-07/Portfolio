import React from 'react'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'

export default function Projects({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section work" id="work">
      <div className="section-head"><span>02 / SELECTED WORK</span><div /></div>

      <Reveal>
        <div className="work-top">
          <div>
            <p className="work-kicker">SELECTED BUILDS</p>
            <h2>From idea to <em>working software.</em></h2>
          </div>
          <div className="work-top-side"><p>A focused set of projects spanning full-stack web, mobile development and machine learning — built to solve practical problems and sharpen the craft.</p><a className="view-all-btn" href="/work" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/work'); window.dispatchEvent(new PopStateEvent('popstate')) }}>Explore all work <Icon type="arrow" size={16} /></a></div>
        </div>
      </Reveal>

      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} direction={i % 2 ? 'right' : 'left'}>
            <article className="project-card">
              <div className="project-card-top">
                <span className="project-num">{p.num}</span>
                <span className="project-tag">{p.tag}</span>
              </div>

              <div className="project-visual project-visual-large">
                <div className="visual-inner">
                  <img src={p.image} alt={`${p.title} project preview`} />
                  <div className="visual-overlay">
                    <Icon type="layers" size={28} />
                    <span>PROJECT / {p.num}</span>
                  </div>
                </div>
              </div>

              <div className="project-card-body">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <button className="project-arrow" aria-label={`View ${p.title}`}>
                  <Icon type="arrow" size={18} />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
