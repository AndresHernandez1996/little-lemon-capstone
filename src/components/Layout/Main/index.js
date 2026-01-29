import React from 'react'
import Hero from '../../UI/Hero'
import styles from './styles.module.css'
import Specials from '../../UI/Specials'
import Testimonials from '../../UI/Testimonials'

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Specials />
      <Testimonials />
    </main>
  )
}

export default Main
