import React from 'react'
import Icon from '../ui/Icon'

const items = [
  ['01', 'About', 'about'],
  ['02', 'Work', 'projects'],
  ['03', 'Skills', 'skills'],
  ['04', 'Education', 'education'],
  ['05', 'Contact', 'contact'],
]

export default function MobileNav({ menu, go, refs }) {
  return (
    <div className={`mobile-nav ${menu ? 'open' : ''}`} aria-hidden={!menu}>
      <div className="mobile-nav-inner">
        <div className="mobile-nav-meta"><span>MENU</span><span>MH / 2026</span></div>
        <div className="mobile-nav-links">
          {items.map(([num, label, key]) => (
            <button key={key} onClick={() => go(refs[key])} tabIndex={menu ? 0 : -1}>
              <span>{num}</span>
              <strong>{label}</strong>
              <Icon type="arrow" size={18} />
            </button>
          ))}
        </div>
        <p className="mobile-nav-footer">Full Stack · App · AI/ML</p>
      </div>
    </div>
  )
}
