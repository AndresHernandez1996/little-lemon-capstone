import React from 'react'
import Logo from '../../assets/layout/Footer-logo.png'

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

const Footer = () => {
  const footerInfo = [
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
  ]

  return (
    <footer aria-label="Site footer">
      <a href="#home" aria-label="Go to homepage">
        <img src={Logo} alt="Little Lemon logo" style={{ maxWidth: '8rem', height: 'auto' }} />
      </a>

      <div>
        {footerInfo.map((section) => {
          const id = `footer-${slugify(section.title)}`

          return (
            <section key={section.title} aria-labelledby={id}>
              <h2 id={id}>{section.title}</h2>

              {section.type === 'contact' ? (
                <address>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.url}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </address>
              ) : (
                <ul>
                  {section.items.map((item) => {
                    const isExternal = item.url.startsWith('http')

                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
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
    </footer>
  )
}

export default Footer
