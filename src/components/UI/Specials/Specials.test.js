import { render, screen } from '@testing-library/react'
import Specials from './index'

test('renders specials section', () => {
  render(<Specials />)
  expect(screen.getByText(/This weeks Specials/i)).toBeInTheDocument()
  expect(screen.getByText(/Online Menu/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Order a delivery/i).length).toBeGreaterThan(0)
})
