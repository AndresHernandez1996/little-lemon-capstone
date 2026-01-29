import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Nav = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Reservations', href: '/booking' },
    { name: 'Order Online', href: '#order-online' },
    { name: 'Login', href: '#login' },
  ]

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.item}>
            <Link className={styles.link} to={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
