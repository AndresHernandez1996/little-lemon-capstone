import React from 'react'
import Logo from '../../assets/layout/Logo.svg'

const Header = ({ children }) => {
  return (
    <>
      <header aria-label="Site header">
        <div>
          <a href="#home" aria-label="Go to homepage" className="header__logo">
            <img src={Logo} alt="Little Lemon logo" width="160" height="40" loading="eager" />
          </a>

          {children}
        </div>
      </header>
    </>
  )
}

export default Header
