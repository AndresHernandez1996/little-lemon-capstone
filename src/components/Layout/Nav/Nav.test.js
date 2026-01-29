import { render, screen } from '@testing-library/react'
import Nav from './index'

test('renders nav links', () => {
  render(<Nav />)
  expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
  expect(screen.getByText('Menu').closest('a')).toHaveAttribute('href', '/#specials')
})
