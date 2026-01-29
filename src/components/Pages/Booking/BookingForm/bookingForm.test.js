import { initializeTimes, updateTimes } from './index'

describe('booking API times', () => {
  beforeEach(() => {
    window.fetchAPI = jest.fn(() => ['17:00', '18:00'])
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('initializeTimes returns available times from fetchAPI', () => {
    const times = initializeTimes()
    expect(Array.isArray(times)).toBe(true)
    expect(times.length).toBeGreaterThan(0)
    expect(window.fetchAPI).toHaveBeenCalledTimes(1)
  })

  test('updateTimes returns available times for selected date', () => {
    const selectedDate = new Date('2026-01-29')
    const times = updateTimes([], { type: 'dateChange', payload: selectedDate })
    expect(window.fetchAPI).toHaveBeenCalledWith(selectedDate)
    expect(times.length).toBeGreaterThan(0)
  })
})
