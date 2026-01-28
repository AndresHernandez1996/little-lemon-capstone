import React from 'react'
import Logo from '../../../assets/layout/Footer-logo.png'
import styles from './styles.module.css'

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const Footer = () => {
  const footerInfo = [
    {
      title: 'Doormat Navigation',
      type: 'links',
      items: [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Menu', url: '#menu' },
        { name: 'Reservations', url: '#reservations' },
        { name: 'Order Online', url: '#order-online' },
        { name: 'Login', url: '#login' },
      ],
    },
    {
      title: 'Contact',
      type: 'contact',
      items: [
        { name: 'Address', url: '#address' },
        { name: 'Phone number', url: 'tel:+1234567890' },
        { name: 'Email', url: 'mailto:hello@littlelemon.com' },
      ],
    },
    {
      title: 'Social Media',
      type: 'links',
      items: [
        { name: 'Instagram', url: 'https://instagram.com/' },
        { name: 'Facebook', url: 'https://facebook.com/' },
        { name: 'Twitter', url: 'https://twitter.com/' },
      ],
    },
  ]

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.container}>
        {/* Logo */}
        <a href="#home" aria-label="Go to homepage" className={styles.logo}>
          <img src={Logo} alt="Little Lemon logo" className={styles.logoImage} />
        </a>

        {/* Footer sections */}
        <div className={styles.grid}>
          {footerInfo.map((section) => {
            const id = `footer-${slugify(section.title)}`

            return (
              <section key={section.title} className={styles.section} aria-labelledby={id}>
                <h2 id={id} className={styles.title}>
                  {section.title}
                </h2>

                {section.type === 'contact' ? (
                  <address className={styles.address}>
                    <ul className={styles.list}>
                      {section.items.map((item) => (
                        <li key={item.name} className={styles.item}>
                          <a href={item.url} className={styles.link}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </address>
                ) : (
                  <ul className={styles.list}>
                    {section.items.map((item) => {
                      const isExternal = item.url.startsWith('http')

                      return (
                        <li key={item.name} className={styles.item}>
                          <a
                            href={item.url}
                            className={styles.link}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noreferrer' : undefined}
                          >
                            {item.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </section>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
