import React from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  { id: 1, name: 'Sofia M.', rating: 5, quote: 'Fresh flavors and friendly staff.' },
  { id: 2, name: 'Diego R.', rating: 4, quote: 'Perfect spot for a quick bite.' },
  { id: 3, name: 'Valeria C.', rating: 5, quote: 'The lemon dessert is a must.' },
  { id: 4, name: 'Mateo G.', rating: 4, quote: 'Great vibes and tasty meals.' },
]

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials" aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <h2 className={styles.title} id="testimonials-title">
          Testimonials
        </h2>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article className={styles.card} key={item.id}>
              <p className={styles.rating} aria-label={`Rating ${item.rating} out of 5`}>
                {'★'.repeat(item.rating)}
              </p>
              <div className={styles.profile}>
                <div className={styles.avatar} aria-hidden="true" />
                <span className={styles.name}>{item.name}</span>
              </div>
              <p className={styles.quote}>{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
