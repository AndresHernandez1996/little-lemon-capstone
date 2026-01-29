import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/#about', type: 'anchor' },
    { name: 'Menu', href: '/#specials', type: 'anchor' },
    { name: 'Reservations', href: '/booking', type: 'route' },
    { name: 'Order Online', href: '#order-online', type: 'anchor' },
    { name: 'Login', href: '#login', type: 'anchor' },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navRef.current) return
      if (navRef.current.contains(event.target)) return
      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Main navigation">
      <button
        className={styles.toggle}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img className={styles.icon} src="/hamburguer.svg" alt="" aria-hidden="true" />
      </button>

      <ul
        id="primary-navigation"
        className={`${styles.list} ${isOpen ? styles.listOpen : ''}`.trim()}
      >
        {navLinks.map((link) => (
          <li key={link.href} className={styles.item}>
            {link.type === 'route' ? (
              <Link className={styles.link} to={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ) : (
              <a className={styles.link} href={link.href} onClick={() => setIsOpen(false)}>
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
