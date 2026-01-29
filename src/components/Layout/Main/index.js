import React from 'react'
import Hero from '../../UI/Hero'
import styles from './styles.module.css'
import Specials from '../../UI/Specials'

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Specials />
    </main>
  )
}

export default Main
