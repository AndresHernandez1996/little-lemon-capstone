import { render, screen } from '@testing-library/react'
import Booking from './index'

beforeEach(() => {
  window.localStorage.clear()
})

test('renders booking page with form', () => {
  render(<Booking />)
  expect(screen.getByText(/Little Lemon Bistro/i)).toBeInTheDocument()
  expect(screen.getByText(/Reserve a table/i)).toBeInTheDocument()
})
