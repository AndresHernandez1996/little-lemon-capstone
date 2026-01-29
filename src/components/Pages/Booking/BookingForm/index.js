import React, { useEffect, useReducer, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from '../Booking.module.css'

const formatDateInput = (date) => date.toISOString().split('T')[0]

const fallbackTimes = ['17:00', '18:00', '19:00', '20:00', '21:00']

const fetchAvailableTimes = (date) => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date)
  }
  console.warn('fetchAPI not available yet; using fallback times.')
  return fallbackTimes
}

const initializeTimes = () => {
  const today = new Date()
  return fetchAvailableTimes(today)
}

const updateTimes = (state, action) => {
  if (action.type === 'dateChange') {
    return fetchAvailableTimes(action.payload)
  }
  return state
}

const BookingForm = ({ onSuccess }) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  const [submitState, setSubmitState] = useState(null)
  const today = formatDateInput(new Date())

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, 'Please enter at least 2 characters.')
      .max(60, 'Please keep it under 60 characters.')
      .required('Full name is required.'),
    partySize: Yup.number()
      .transform((value, originalValue) => (originalValue === '' ? undefined : Number(originalValue)))
      .min(1, 'Select at least 1 guest.')
      .max(10, 'Please choose 10 guests or fewer.')
      .required('Party size is required.'),
    date: Yup.date().required('Date is required.'),
    time: Yup.string().required('Time is required.'),
    occasion: Yup.string().required('Occasion is required.'),
    comments: Yup.string().max(200, 'Please keep comments under 200 characters.'),
  })

  const formik = useFormik({
    initialValues: {
      fullName: '',
      partySize: '2',
      date: today,
      time: availableTimes[0] ?? '',
      occasion: '',
      comments: '',
    },
    validationSchema,
    onSubmit: (values, actions) => {
      setSubmitState(null)
      const result = typeof window.submitAPI === 'function' ? window.submitAPI(values) : true

      if (!result) {
        setSubmitState({ type: 'error', message: 'We could not submit your reservation.' })
        return
      }

      setSubmitState({ type: 'success', message: 'Reservation confirmed!' })
      actions.resetForm({ values: { ...values, comments: '' } })
      onSuccess(values)
    },
  })

  useEffect(() => {
    const times = initializeTimes()
    if (times.length && !formik.values.time) {
      formik.setFieldValue('time', times[0], false)
    }
    dispatch({ type: 'dateChange', payload: new Date(formik.values.date) })
  }, [formik, formik.values.date, formik.values.time, formik.setFieldValue])

  useEffect(() => {
    if (!availableTimes.length) return
    if (!availableTimes.includes(formik.values.time)) {
      formik.setFieldValue('time', availableTimes[0], false)
    }
  }, [availableTimes, formik, formik.values.time, formik.setFieldValue])

  return (
    <div>
      <h3 className={styles.cardTitle}>Reserve a table</h3>

      <form onSubmit={formik.handleSubmit} className={styles.form} noValidate>
        <input
          className={styles.control}
          id="full-name"
          name="fullName"
          type="text"
          placeholder="Full name"
          aria-label="Full name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={formik.touched.fullName && Boolean(formik.errors.fullName)}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <span className={styles.error}>{formik.errors.fullName}</span>
        ) : null}

        <select
          className={styles.control}
          id="party-size"
          name="partySize"
          aria-label="Party size"
          value={formik.values.partySize}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={formik.touched.partySize && Boolean(formik.errors.partySize)}
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
        </select>
        {formik.touched.partySize && formik.errors.partySize ? (
          <span className={styles.error}>{formik.errors.partySize}</span>
        ) : null}

        <div className={styles.inlineRow}>
          <div className={styles.inlineField}>
            <input
              className={styles.control}
              id="date"
              name="date"
              type="date"
              aria-label="Reservation date"
              value={formik.values.date}
              onChange={(event) => {
                formik.handleChange(event)
                const selectedDate = new Date(event.target.value)
                dispatch({ type: 'dateChange', payload: selectedDate })
              }}
              onBlur={formik.handleBlur}
              aria-invalid={formik.touched.date && Boolean(formik.errors.date)}
            />
            {formik.touched.date && formik.errors.date ? (
              <span className={styles.error}>{formik.errors.date}</span>
            ) : null}
          </div>
          <div className={styles.inlineField}>
            <select
              className={styles.control}
              id="time"
              name="time"
              aria-label="Reservation time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={formik.touched.time && Boolean(formik.errors.time)}
            >
              {!availableTimes.length ? (
                <option value="" disabled>
                  No times available
                </option>
              ) : null}
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time ? (
              <span className={styles.error}>{formik.errors.time}</span>
            ) : null}
          </div>
        </div>

        <select
          className={styles.control}
          id="occasion"
          name="occasion"
          aria-label="Occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={formik.touched.occasion && Boolean(formik.errors.occasion)}
        >
          <option value="" disabled>
            Occasion
          </option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date">Date night</option>
          <option value="business">Business meal</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <span className={styles.error}>{formik.errors.occasion}</span>
        ) : null}

        <textarea
          className={styles.control}
          id="comments"
          name="comments"
          rows="3"
          placeholder="Allergies or seating requests"
          aria-label="Comments"
          value={formik.values.comments}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={formik.touched.comments && Boolean(formik.errors.comments)}
        />
        {formik.touched.comments && formik.errors.comments ? (
          <span className={styles.error}>{formik.errors.comments}</span>
        ) : null}

        <button className={styles.submit} type="submit">
          Reserve
        </button>

        {submitState ? (
          <p
            className={submitState.type === 'success' ? styles.successMessage : styles.errorMessage}
            role="status"
          >
            {submitState.message}
          </p>
        ) : null}
      </form>
    </div>
  )
}

export default BookingForm
