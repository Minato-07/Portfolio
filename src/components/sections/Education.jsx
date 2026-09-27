import React from 'react'
import Reveal from '../ui/Reveal'

const education = [
  { period: '2024 — 2028', level: 'B.Sc. in Computer Science & Engineering', place: 'Rajshahi University of Engineering & Technology (RUET)', location: 'Rajshahi, Bangladesh' },
  { period: '2021 — 2023', level: 'Higher Secondary Certificate', place: 'Birshreshtha Noor Mohammad Public College', location: 'Peelkhana, Dhaka' },
  { period: '2019 — 2021', level: 'Secondary School Certificate', place: 'N.S. Amin Residential School', location: 'Ulipur, Kurigram' },
]

export default function Education({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section education" id="education">
      <div className="section-head"><span>04 / EDUCATION</span><div /></div>
      <Reveal>
        <div className="education-head">
          <h2>Learning with a <em>builder's mindset.</em></h2>
          <p>My education gives me the fundamentals; projects turn those fundamentals into practical engineering experience.</p>
        </div>
      </Reveal>
      <div className="education-list">
        {education.map((item, i) => (
          <Reveal key={item.period} delay={i * 90}>
            <article className="education-row">
              <span className="education-period">{item.period}</span>
              <div className="education-dot" />
              <div className="education-copy">
                <span>{item.level}</span>
                <h3>{item.place}</h3>
                <p>{item.location}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
