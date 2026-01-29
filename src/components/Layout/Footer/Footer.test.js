import { render, screen } from '@testing-library/react'
import Footer from './index'

test('renders footer sections', () => {
  render(<Footer />)
  expect(screen.getByText('Doormat Navigation')).toBeInTheDocument()
  expect(screen.getByText('Contact')).toBeInTheDocument()
  expect(screen.getByText('Social Media')).toBeInTheDocument()
})
