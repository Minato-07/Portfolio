import React, { useEffect, useState } from 'react'

const crackPath = 'M0 0 L92 48 L126 105 L196 138 L177 211 L282 255 L348 226 L326 301 L454 344 L425 424 L548 455 L615 420 L587 500 L704 543 L676 621 L790 654 L846 612 L814 704 L908 744 L875 838 L1000 900'
const pieceA = 'polygon(0 0,100% 0,100% 90%,91% 74%,88% 84%,79% 65%,81% 70%,70% 54%,68% 62%,59% 50%,62% 42%,55% 46%,43% 42%,45% 34%,33% 30%,35% 23%,28% 26%,18% 21%,20% 14%,13% 11%,9% 5%,0 0)'
const pieceB = 'polygon(0 0,9% 5%,13% 11%,20% 14%,18% 21%,28% 26%,35% 23%,33% 30%,45% 34%,43% 42%,55% 46%,62% 42%,59% 50%,68% 62%,70% 54%,79% 65%,81% 70%,91% 74%,88% 84%,100% 90%,100% 100%,0 100%)'

export default function IntroReveal() {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(false), 2350)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`intro ${active ? 'is-on' : 'is-off'}`} aria-hidden="true">
      <div className="intro-backdrop" />
      <div className="intro-ambient" />
      <div className="intro-piece intro-piece-a" style={{ clipPath: pieceA }}>
        <svg className="piece-edge edge-a" viewBox="0 0 1000 1000" preserveAspectRatio="none"><path d={crackPath} /></svg>
      </div>
      <div className="intro-piece intro-piece-b" style={{ clipPath: pieceB }}>
        <svg className="piece-edge edge-b" viewBox="0 0 1000 1000" preserveAspectRatio="none"><path d={crackPath} /></svg>
      </div>

      <svg className="thunder" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <filter id="boltGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="16" /></filter>
          <filter id="boltSoft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <g className="bolt-layer">
          <path className="thunder-glow-wide" d={crackPath} />
          <path className="thunder-glow" d={crackPath} />
          <path className="thunder-core" d={crackPath} />
          <path className="thunder-branch" d="M282 255 L252 228 L220 222 L194 235" />
          <path className="thunder-branch twig" d="M252 228 L242 204 L250 186" />
          <path className="thunder-branch" d="M454 344 L486 322 L512 296 L545 301" />
          <path className="thunder-branch twig" d="M486 322 L493 344 L482 362" />
          <path className="thunder-branch" d="M704 543 L733 521 L760 492 L791 498" />
          <path className="thunder-branch twig" d="M733 521 L724 494 L735 474" />
          <path className="thunder-branch" d="M908 744 L934 726 L955 699 L982 706" />
          <path className="thunder-branch twig" d="M934 726 L929 751 L938 770" />
          <path className="thunder-branch small" d="M196 138 L214 122 L235 113 L253 117" />
          <path className="thunder-branch small" d="M790 654 L769 637 L748 619 L727 623" />
        </g>
      </svg>

      <div className="impact-flash" />
      <div className="fracture-sparks" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => <i key={i} className={`spark s${i + 1}`} />)}
      </div>
    </div>
  )
}
