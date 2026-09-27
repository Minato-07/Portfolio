import React from 'react'
import Icon from '../ui/Icon'

export default function Header({ scrolled, menu, setMenu, go, refs, setCursorHot, navigate }) {
  const hot = () => setCursorHot(true)
  const cool = () => setCursorHot(false)

  const goHome = () => {
    setMenu(false)
    if (navigate) navigate('/')
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`${scrolled ? 'scrolled ' : ''}${menu ? 'menu-open' : ''}`}>
      <button className="brand interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={goHome} aria-label="Back to top">
        <span className="brand-mark">MH</span>
        <div className="brand-copy">
          <strong>Musfiq Hasan</strong>
          <small>Full Stack · App · AI/ML</small>
        </div>
      </button>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <button className="interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => go(refs.about)}>About</button>
        <button className="interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => go(refs.projects)}>Work</button>
        <button className="interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => go(refs.skills)}>Skills</button>
        <button className="interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => go(refs.education)}>Education</button>
        <button className="interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => go(refs.contact)}>Contact</button>
      </nav>

      <div className="header-actions">
        <button className="header-cta interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => go(refs.contact)}>
          Let's talk <Icon type="external" size={13} />
        </button>
        <button className="menu interactive" onMouseEnter={hot} onMouseLeave={cool} onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>
          <span className="menu-icon"><i /><i /></span>
          <span className="menu-label">{menu ? 'Close' : 'Menu'}</span>
        </button>
      </div>
    </header>
  )
}
