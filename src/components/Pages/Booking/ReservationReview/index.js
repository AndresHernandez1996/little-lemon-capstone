import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ReservationReview.module.css'

const ReservationReview = ({ reservation }) => {
  const navigate = useNavigate()
  const [hour, minute] = (reservation.time || '').split(':')
  const timeLabel =
    hour && minute
      ? new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        }).format(new Date(2026, 0, 1, Number(hour), Number(minute)))
      : '-'
  const dateLabel = reservation.date
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(reservation.date))
    : '-'

  return (
    <section className={styles.review} aria-labelledby="review-title">
      <h2 className={styles.title} id="review-title">
        Review your reservation
      </h2>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.label}>Date</span>
          <span className={styles.value}>{dateLabel}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Time</span>
          <span className={styles.value}>{timeLabel}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Guests</span>
          <span className={styles.value}>{reservation.partySize || '-'}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Occasion</span>
          <span className={styles.value}>{reservation.occasion || '-'}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Name</span>
          <span className={styles.value}>{reservation.fullName || '-'}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Comments</span>
          <span className={styles.value}>{reservation.comments || '-'}</span>
        </div>

        <button className={styles.confirm} type="button" onClick={() => navigate('/')}
        >
          Back to home
        </button>
      </div>
    </section>
  )
}

export default ReservationReview
