import React from 'react'
import styles from './lotDescription.module.css'
import classnames from 'classnames'

export const LotDescription = ({ lot }) => {
  // Hacky interpretation of the data + Figma that splits city with address.
  const address = lot.address.split(',')[0]
  const city = lot.address.substr(address.length + 2, lot.address.length)
  return (
    <>
      <h3 className={styles.title}>
        {address}
      </h3>
      <div className={classnames(styles.subtitle, 'small_text')}>
        {city}
      </div>
      <div className={classnames(styles.subtitle, 'small_text')}>
        {lot.acres} acres - {lot.sqft} sqft
      </div>
      <p className={styles.description}>
        {lot.description}
      </p>
    </>
  )
}