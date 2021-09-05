import React from 'react'
import styles from './card.module.css'
import classnames from 'classnames'
import { TerraContext } from '../store';
import { Modal } from './modal'

const modalKey = home => `home-card-${home.homePlanId}`

export const HomeDialog = ({ home }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const key = modalKey(home)
  
  // Finding matching lots by id. This operation is not elegant,
  // but given the small data subset it is not necessary yet to cache or create another data structure.

  const lots = state
    .combinations
    .filter(({ homePlanId }) => homePlanId === home.homePlanId)
    .map(({ lotId }) => state.lots.filter(({ lotId: resultLotId }) => lotId === resultLotId ))

  console.log('lots', lots)

  return (
    <div>
      <h3 className={styles.header}>
        Compatible Lots
      </h3>
      <div className={styles.card_container}>
        {lots.map(lot => <div key={lot.lotId}>Lot Id: {lot.lotId}</div>)}
      </div>
    </div>
  )
}