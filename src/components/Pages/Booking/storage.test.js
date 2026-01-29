import { STORAGE_KEY, clearReservation, loadReservation, saveReservation } from './storage'

describe('booking localStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('saveReservation writes to localStorage', () => {
    const data = { fullName: 'Alex', date: '2026-01-29', time: '19:00' }
    saveReservation(data)
    const raw = window.localStorage.getItem(STORAGE_KEY)
    expect(raw).toBe(JSON.stringify(data))
  })

  test('loadReservation returns parsed data', () => {
    const data = { fullName: 'Mia', date: '2026-01-30', time: '18:00' }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    expect(loadReservation()).toEqual(data)
  })

  test('clearReservation removes stored data', () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ok: true }))
    clearReservation()
    expect(window.localStorage.getItem(STORAGE_KEY)).toBeNull()
  })
})
