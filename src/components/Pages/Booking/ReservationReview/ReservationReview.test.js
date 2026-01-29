import { render, screen, fireEvent } from '@testing-library/react'
import ReservationReview from './index'

test('renders reservation details and navigates home', () => {
  const reservation = {
    date: '2026-01-29',
    time: '19:00',
    partySize: '2',
    occasion: 'date',
    fullName: 'Andres',
    comments: 'No onions',
  }

  render(<ReservationReview reservation={reservation} />)
  expect(screen.getByText(/Review your reservation/i)).toBeInTheDocument()

  const button = screen.getByText(/Back to home/i)
  fireEvent.click(button)
  expect(global.__mockNavigate).toHaveBeenCalledWith('/')
})
