import React from 'react'
import styles from './card.module.css'
import classnames from 'classnames'
import { withStore } from '../store';

export const Card = ({ home, store, dispatch }) => {
  return (
    <div key={home.homePlanId} className={styles.card} onClick={() => console.log('clicked')}>
      <div className={styles.card_image_container}>
        <img src={home.image} className={styles.card_image}/>
      </div>
      <div className={styles.card_content}>
        <h3>
          {home.name}
        </h3>
        <div className={classnames(styles.subtitle, 'small_text')}>
          {home.numBeds} beds - {home.numBaths} - {home.sqft} sqft
        </div>
        <div className={styles.tag_container}>
          {home.tags.map(tag => <div key={tag} className={classnames(styles.tags, 'small_text')}>{tag}</div>)}
        </div>
        <p className={styles.card_description}>
          {home.description}
        </p>
      </div>
    </div>
  )
}
