import React from 'react'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

const links = [
  ['GitHub','https://github.com/Minato-07','github'],
  ['LinkedIn','https://www.linkedin.com/in/musfiq-ruet/','linkedin'],
  ['Facebook','https://www.facebook.com/mdmusfiq.hasan','facebook'],
  ['Instagram','https://www.instagram.com/musfiq__07/','instagram'],
]
export default function Contact({ sectionRef, setCursorHot }) {
  return <section ref={sectionRef} className="section contact" id="contact"><div className="contact-glow" /><div className="section-head"><span>05 / CONTACT</span><div /></div><Reveal direction="up"><div className="contact-content"><p className="eyebrow">OPEN TO BUILDING</p><h2>Have an idea?<br /><em>Let's make it real.</em></h2><a className="mail interactive" href="mailto:mdmusfiq.hasan@gmail.com" onMouseEnter={() => setCursorHot(true)} onMouseLeave={() => setCursorHot(false)}>mdmusfiq.hasan@gmail.com <Icon type="arrow" /></a><div className="contact-note">Interested in thoughtful products, strong engineering and collaborations that turn ideas into useful software.</div><div className="socials">{links.map(([label,url,type]) => <a key={type} href={url} target="_blank" rel="noreferrer" aria-label={label}><Icon type={type} /></a>)}</div></div></Reveal></section>
}
