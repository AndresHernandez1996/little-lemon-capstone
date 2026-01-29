import { render, screen } from '@testing-library/react'
import About from './index'

test('renders about section', () => {
  render(<About />)
  expect(screen.getByText('Little Lemon')).toBeInTheDocument()
  expect(screen.getByText('Chicago')).toBeInTheDocument()
})
