import { render, screen } from '@testing-library/react'
import Testimonials from './index'

test('renders testimonials section', () => {
  render(<Testimonials />)
  expect(screen.getByText('Testimonials')).toBeInTheDocument()
  expect(screen.getByText('Sofia M.')).toBeInTheDocument()
})
