import React from 'react'
import Reveal from '../ui/Reveal'

const groups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C++', 'Java', 'Dart', 'SQL'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend & Data', items: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL', 'Supabase', 'Prisma'] },
  { title: 'App Development', items: ['Flutter', 'Android Studio', 'Dart', 'Mobile UI', 'Realtime Features'] },
  { title: 'AI / Machine Learning', items: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { title: 'Tools & Engineering', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Linux', 'Authentication', 'Database Design'] },
]

export default function Skills({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section skills" id="skills">
      <div className="section-head"><span>03 / TOOLKIT</span><div /></div>
      <Reveal>
        <div className="skills-intro">
          <div>
            <h2>A toolkit for <em>building end to end.</em></h2>
          </div>
          <p>My toolkit covers the layers I use to turn ideas into working products: interfaces, APIs, databases, mobile apps, developer tooling and machine-learning workflows.</p>
        </div>
      </Reveal>
      <div className="skill-grid">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60} direction={i % 2 ? 'right' : 'left'}>
            <article className="skill-card">
              <span className="skill-index">0{i + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
