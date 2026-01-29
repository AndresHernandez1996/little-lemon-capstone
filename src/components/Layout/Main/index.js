import React, { useEffect } from 'react'
import Hero from '../../UI/Hero'
import styles from './styles.module.css'
import Specials from '../../UI/Specials'
import Testimonials from '../../UI/Testimonials'
import About from '../../UI/About'

const Main = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const elements = document.querySelectorAll('[data-reveal]')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.reveal} data-reveal>
        <Hero />
      </div>
      <div className={styles.reveal} data-reveal>
        <Specials />
      </div>
      <div className={styles.reveal} data-reveal>
        <Testimonials />
      </div>
      <div className={styles.reveal} data-reveal>
        <About />
      </div>
    </main>
  )
}

export default Main
