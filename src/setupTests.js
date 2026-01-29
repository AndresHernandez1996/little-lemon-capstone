// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import React from 'react'

const mockNavigate = jest.fn()

jest.mock(
  'react-router-dom',
  () => ({
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
    Link: ({ children, to, ...rest }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    ),
    useLocation: () => ({ hash: '', pathname: '/' }),
    useNavigate: () => mockNavigate,
  }),
  { virtual: true }
)

global.__mockNavigate = mockNavigate

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

window.scrollTo = jest.fn()
window.fetchAPI = jest.fn(() => ['17:00', '18:00'])
window.submitAPI = jest.fn(() => true)

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver
