import React from 'react'
import { Link } from 'react-router-dom'
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

            <Link className={styles.cta} to="/booking">
              Reserve a Table
            </Link>
          </div>

          <div className={styles.media}>
            <img
              className={styles.image}
              src={hero}
              alt="Little Lemon dishes"
              width="400"
              height="480"
              decoding="async"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
