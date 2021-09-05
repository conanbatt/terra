import React from 'react'
import styles from './homeDialog.module.css'
import { Modal } from '../modal'
import { TerraContext } from '../../store';
import { HomeDescription } from './homeDescription';
import { findCompatibleLots } from '../utils/combinationResolver'

const modalKey = home => `home-card-${home.homePlanId}`

export const HomeDialog = ({ home }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const key = modalKey(home)
  
  // Finding matching lots by id. This operation is not elegant,
  // but given the small data subset it is not necessary yet to cache or create another data structure.

  const lots = findCompatibleLots({ ...state, home })

  return (
    <Modal selector="body">
      <div>
        <div className={styles.dialog_content}>
          <div className={styles.image_container}>
            <img src={home.image} className={styles.image} />
          </div>
          <div className={styles.description_container}>
            <HomeDescription home={home} />
          </div>
        </div>
        <h3 className={styles.header}>
          Compatible Lots
        </h3>
        <div className={styles.card_container}>
          {lots.map(lot => <div key={lot.lotId}>Lot Id: {lot.lotId}</div>)}
        </div>
      </div>
    </Modal>
  )
}