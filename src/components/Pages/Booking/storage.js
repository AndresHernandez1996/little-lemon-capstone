const STORAGE_KEY = 'little-lemon-reservation'

const saveReservation = (reservation) => {
  if (!reservation) return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reservation))
  } catch (error) {
    // no-op: storage may be unavailable in some environments
  }
}

const loadReservation = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (error) {
    return null
  }
}

const clearReservation = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    // no-op
  }
}

export { STORAGE_KEY, saveReservation, loadReservation, clearReservation }
