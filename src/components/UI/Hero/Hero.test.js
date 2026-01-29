import { render, screen } from '@testing-library/react'
import Hero from './index'

test('renders hero content', () => {
  render(<Hero />)
  expect(screen.getByText('Little Lemon')).toBeInTheDocument()
  expect(screen.getByText('Reserve a Table')).toBeInTheDocument()
})
