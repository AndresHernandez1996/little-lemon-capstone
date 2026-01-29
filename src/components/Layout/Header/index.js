import React, { useEffect, useRef } from 'react'
import Logo from '../../../assets/layout/Logo.svg'
import styles from './styles.module.css'

const Header = ({ children }) => {
  const headerRef = useRef(null)
  const prevScrollY = useRef(0)

  useEffect(() => {
    // initialize previous scroll position
    prevScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // scrolling down
      if (currentScrollY > prevScrollY.current) {
        if (headerRef.current) {
          headerRef.current.style.transform = 'translateY(-200px)'
        }
      } else {
        // scrolling up
        if (headerRef.current) {
          headerRef.current.style.transform = 'translateY(0)'
        }
      }

      prevScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header ref={headerRef} className={styles.header} aria-label="Site header">
      <div className={styles.container}>
        <a href="/" aria-label="Go to homepage" className={styles.logo}>
          <img src={Logo} alt="Little Lemon logo" width="160" height="40" />
        </a>

        {children}
      </div>
    </header>
  )
}

export default Header
