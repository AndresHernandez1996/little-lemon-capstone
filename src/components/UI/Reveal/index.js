import React, { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

const Reveal = ({ children, className = '', threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const node = elementRef.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={elementRef}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default Reveal
