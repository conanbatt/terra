import React from 'react'
import styles from './card.module.css'

export const Card = ({ onClick, content, image, like }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {like}
      <div className={styles.card_image_container}>
        <img src={image} className={styles.card_image}/>
      </div>
      <div className={styles.card_content}>
        {content}
      </div>
    </div>
  )
}
