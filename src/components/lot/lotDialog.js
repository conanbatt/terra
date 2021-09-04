import React from 'react'
import styles from '../shared/dialog.module.css'
import { Modal } from '../modal'
import { TerraContext } from '../../store'
import { LotDescription } from './lotDescription'
import { findCompatibleHomes } from '../utils/combinationResolver'
import { HomeCard } from '../home/homeCard'
import classnames from 'classnames'
import { Like } from '../like'
import { likeKey } from '../utils/keyGenerator'

export const MODAL_KEY = 'LOT_MODAL'

export const LotDialog = ({ lot }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const homes = findCompatibleHomes({ ...state, lot })

  const key = likeKey(lot)
  const liked = !!state.likes[key]

  return (
    <Modal selector="body">
      <div>
        <div className={styles.dialog_content}>
          <Like
            onClick={() => dispatch({ type: liked ? 'REMOVE_LIKE' : 'ADD_LIKE', payload: lot, key })}
            liked={liked}
          />
          <div className={styles.image_container}>
            <img src={lot.image} className={styles.image} />
          </div>
          <div className={styles.description_container}>
            <LotDescription lot={lot} />
          </div>
        </div>
        <h3 className={styles.header}>
          Compatible Homes
        </h3>
        <div className={classnames("card_container", styles.card_wrapper)}>
          {homes.slice(0, 3).map(home => <HomeCard key={home.homePlanId} home={home} />)}
        </div>
      </div>
    </Modal>
  )
}
