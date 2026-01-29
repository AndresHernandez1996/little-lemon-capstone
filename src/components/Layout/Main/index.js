import React from 'react'
import Hero from '../../UI/Hero'
import styles from './styles.module.css'
import Specials from '../../UI/Specials'
import Testimonials from '../../UI/Testimonials'
import About from '../../UI/About'

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main
