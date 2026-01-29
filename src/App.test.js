import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app with header content', () => {
  render(<App />)
  expect(screen.getAllByText(/Little Lemon/i).length).toBeGreaterThan(0)
})
