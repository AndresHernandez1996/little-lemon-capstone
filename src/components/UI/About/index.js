import React from 'react'
import styles from './About.module.css'
import restaurant from '../../../assets/UI/restaurant.jpg'
import chef from '../../../assets/UI/chef.jpg'

const About = () => {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title} id="about-title">
            Little Lemon
          </h2>
          <p className={styles.subtitle}>Chicago</p>
          <p className={styles.text}>
            We are a family-owned Mediterranean restaurant where traditional recipes meet a
            modern, fresh approach. Our kitchen is inspired by the flavors of the coast and the
            warmth of shared meals, crafted to feel both familiar and exciting.
          </p>
          <p className={styles.text}>
            We source ingredients locally whenever possible and prepare every dish with care,
            from crisp salads and warm breads to bright, citrus-forward desserts. Whether you’re
            joining us for a quick lunch or a long dinner with friends, we want you to feel at
            home in the heart of Chicago.
          </p>
        </div>

        <div className={styles.media} aria-hidden="true">
          <div className={styles.imagePrimary} style={{ backgroundImage: `url(${restaurant})` }} />
          <div className={styles.imageSecondary} style={{ backgroundImage: `url(${chef})` }} />
        </div>
      </div>
    </section>
  )
}

export default About
