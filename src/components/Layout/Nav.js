import React from 'react'

const Nav = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Order Online', href: '#order-online' },
    { name: 'Login', href: '#login' },
  ]

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav__list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
