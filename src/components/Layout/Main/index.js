import React from 'react'
import Hero from '../../UI/Hero'
import styles from './styles.module.css'
import Specials from '../../UI/Specials'
import Testimonials from '../../UI/Testimonials'
import About from '../../UI/About'
import Reveal from '../../UI/Reveal'

const Main = () => {
  return (
    <main className={styles.main}>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Specials />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
    </main>
  )
}

export default Main
