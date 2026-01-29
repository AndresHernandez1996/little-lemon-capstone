import React from 'react'
import hero from '../../../assets/UI/hero.jpg'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title} id="hero-title">
              Little Lemon
            </h1>

            <p className={styles.subtitle}>Chicago</p>

            <p className={styles.description}>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served
              with a modern twist.
            </p>

            <a className={styles.cta} href="/booking">
              Reserve a Table
            </a>
          </div>

          <div className={styles.media}>
            <img className={styles.image} src={hero} alt="Little Lemon dishes" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
