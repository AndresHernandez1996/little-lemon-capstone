import React, { useState } from 'react'
import styles from './Booking.module.css'
import restaurant from '../../../assets/UI/restaurant.jpg'
import ReservationReview from './ReservationReview'
import BookingForm from './BookingForm'

const tags = ['Seasonal menu', 'Family friendly', 'Perfect for celebrations']

const Booking = () => {
  const [lastReservation, setLastReservation] = useState(null)

  const handleSuccess = (reservation) => {
    setLastReservation(reservation)
  }

  return (
    <main className={styles.booking}>
      <section className={styles.hero} aria-labelledby="booking-title">
        <img className={styles.heroImage} src={restaurant} alt="Little Lemon dining room" />
      </section>

      <section className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title} id="booking-title">
            Little Lemon Bistro
          </h1>

          <div className={styles.meta}>
            <span className={styles.rating}>★ 4.9 (128)</span>
            <span className={styles.dot} />
            <span>$$ · Mediterranean</span>
            <span className={styles.dot} />
            <span>Chicago</span>
          </div>

          <h2 className={styles.sectionTitle}>About this restaurant</h2>

          <div className={styles.tagRow}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <p className={styles.description}>
            Little Lemon is a cozy neighborhood spot serving vibrant Mediterranean flavors. Enjoy
            bright salads, warm flatbreads, and seasonal specials crafted with local ingredients and
            a modern twist.
          </p>
          <button className={styles.readMore} type="button">
            Read our story
          </button>
        </div>

        <aside className={styles.card} aria-label="Reservation form">
          {lastReservation ? (
            <>
              <p className={styles.successMessage} role="status">
                Reservation confirmed!
              </p>
              <ReservationReview reservation={lastReservation} />
            </>
          ) : (
            <BookingForm onSuccess={handleSuccess} />
          )}
        </aside>
      </section>
    </main>
  )
}

export default Booking
