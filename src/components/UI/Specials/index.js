import React from 'react'
import styles from './Specials.module.css'
import bruchetta from '../../../assets/UI/bruchetta.jpg'
import lemonDessert from '../../../assets/UI/lemon-dessert.jpg'
import greekSalad from '../../../assets/UI/greek-salad.jpg'

const specials = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    image: greekSalad,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dol sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dol sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dol sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolLorem ipsum dolor',
  },
  {
    id: 2,
    title: 'Greek Salad',
    price: '$12.99',
    image: bruchetta,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor',
  },
  {
    id: 3,
    title: 'Greek Salad',
    price: '$12.99',
    image: lemonDessert,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor',
  },
]

const Specials = () => {
  return (
    <section className={styles.specials} id="specials" aria-labelledby="specials-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} id="specials-title">
            This weeks Specials!
          </h2>

          <button className={styles.button} type="button">
            Online Menu
          </button>
        </div>

        <div className={styles.grid}>
          {specials.map((item) => (
            <article className={styles.card} key={item.id}>
              {item.image ? (
                <img className={styles.cardImage} src={item.image} alt={item.title} />
              ) : (
                <div className={styles.cardImage} aria-hidden="true" />
              )}

              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.cardPrice}>{item.price}</span>
                </div>

                <p className={styles.cardText}>{item.description}</p>

                <button className={styles.cardAction} type="button">
                  Order a delivery
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specials
