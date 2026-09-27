import React, { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0, direction = 'up', once = true }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        if (once) observer.unobserve(node)
      } else if (!once) {
        setVisible(false)
      }
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return <div ref={ref} className={`scroll-reveal ${direction} ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>
}
