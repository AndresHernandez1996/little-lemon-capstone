import React, { useEffect, useRef, useState } from 'react'
import styles from './Booking.module.css'
import restaurant from '../../../assets/UI/restaurant.jpg'
import ReservationReview from './ReservationReview'
import BookingForm from './BookingForm'
import Reveal from '../../UI/Reveal'

const tags = ['Seasonal menu', 'Family friendly', 'Perfect for celebrations']

const Booking = () => {
  const [lastReservation, setLastReservation] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitTimeoutRef = useRef(null)

  const handleSuccess = (reservation) => {
    setIsSubmitting(true)
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current)
    }
    submitTimeoutRef.current = setTimeout(() => {
      setLastReservation(reservation)
      setIsSubmitting(false)
    }, 1500)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current)
      }
    }
  }, [])

  return (
    <main className={styles.booking}>
      <Reveal>
        <section className={styles.hero} aria-labelledby="booking-title">
          <img className={styles.heroImage} src={restaurant} alt="Little Lemon dining room" />
        </section>
      </Reveal>

      <Reveal>
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
              bright salads, warm flatbreads, and seasonal specials crafted with local ingredients
              and a modern twist.
            </p>
            <button className={styles.readMore} type="button">
              Read our story
            </button>
          </div>

          <aside className={styles.card} aria-label="Reservation form">
            <div
              className={styles.cardBody}
              key={isSubmitting ? 'loading' : lastReservation ? 'confirm' : 'form'}
            >
              {isSubmitting ? (
                <div className={styles.spinnerWrap} role="status" aria-live="polite">
                  <span className={styles.spinner} aria-hidden="true" />
                  <span>Confirming your reservation…</span>
                </div>
              ) : lastReservation ? (
                <>
                  <p className={styles.successMessage} role="status">
                    Reservation confirmed!
                  </p>
                  <ReservationReview reservation={lastReservation} />
                </>
              ) : (
                <BookingForm onSuccess={handleSuccess} />
              )}
            </div>
          </aside>
        </section>
      </Reveal>
    </main>
  )
}

export default Booking
