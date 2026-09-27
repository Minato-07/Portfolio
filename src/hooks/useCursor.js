import { useEffect, useRef, useState } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const frameRef = useRef(0)
  const pointerRef = useRef({ x: -100, y: -100 })
  const [hot, setHot] = useState(false)

  useEffect(() => {
    const onMouseMove = (event) => {
      pointerRef.current.x = event.clientX
      pointerRef.current.y = event.clientY
      if (frameRef.current) return

      frameRef.current = window.requestAnimationFrame(() => {
        const { x, y } = pointerRef.current
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
        }
        frameRef.current = 0
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return { cursorRef, cursorHot: hot, setCursorHot: setHot }
}
