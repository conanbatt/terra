import React from 'react'
import styles from '../shared/dialog.module.css'
import { Modal } from '../modal'
import { TerraContext } from '../../store';
import { HomeDescription } from './homeDescription';
import { findCompatibleLots } from '../utils/combinationResolver'
import classNames from 'classnames';

export const MODAL_KEY = 'HOME_MODAL'

export const HomeDialog = ({ home }) => {
  const { state } = React.useContext(TerraContext)
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
        <div className={classNames("card_container", styles.card_wrapper)}>
          {lots.slice(0, 3).map(lot => <div key={lot.lotId}>Lot Id: {lot.lotId}</div>)}
        </div>
      </div>
    </Modal>
  )
}