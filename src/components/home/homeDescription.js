import React from 'react'
import styles from '../shared/description.module.css'
import classnames from 'classnames'

export const HomeDescription = ({ home }) => {
  return (
    <>
      <h3 className={styles.title}>
        {home.name}
      </h3>
      <div className={classnames(styles.subtitle, 'small_text')}>
        {home.numBeds} beds - {home.numBaths} - {home.sqft} sqft
      </div>
      <div className={styles.tag_container}>
        {home.tags.map(tag => <div key={tag} className={classnames(styles.tags, 'small_text')}>{tag}</div>)}
      </div>
      <p className={styles.description}>
        {home.description}
      </p>
    </>
  )
}