import { render, screen } from '@testing-library/react'
import Header from './index'

test('renders header with logo', () => {
  render(
    <Header>
      <div>Nav</div>
    </Header>
  )
  expect(screen.getByAltText(/Little Lemon logo/i)).toBeInTheDocument()
})
