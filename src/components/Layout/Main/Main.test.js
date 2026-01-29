import { render, screen } from '@testing-library/react'
import Main from './index'

test('renders main sections', () => {
  render(<Main />)
  expect(screen.getAllByText('Little Lemon').length).toBeGreaterThan(0)
  expect(screen.getByText('Testimonials')).toBeInTheDocument()
})
