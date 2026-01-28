import React from 'react'
import styles from './styles.module.css'

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
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.item}>
            <a href={link.href} className={styles.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
