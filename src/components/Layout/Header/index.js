import React from 'react'
import Logo from '../../../assets/layout/Logo.svg'
import styles from './styles.module.css'

const Header = ({ children }) => {
  return (
    <header className={styles.header} aria-label="Site header">
      <div className={styles.container}>
        <a href="#home" aria-label="Go to homepage" className={styles.logo}>
          <img src={Logo} alt="Little Lemon logo" width="160" height="40" />
        </a>

        {children}
      </div>
    </header>
  )
}

export default Header
