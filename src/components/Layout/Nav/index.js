import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Nav = () => {
  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/#about', type: 'anchor' },
    { name: 'Menu', href: '/#menu', type: 'anchor' },
    { name: 'Reservations', href: '/booking', type: 'route' },
    { name: 'Order Online', href: '#order-online', type: 'anchor' },
    { name: 'Login', href: '#login', type: 'anchor' },
  ]

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.item}>
            {link.type === 'route' ? (
              <Link className={styles.link} to={link.href}>
                {link.name}
              </Link>
            ) : (
              <a className={styles.link} href={link.href}>
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
