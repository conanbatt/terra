import React from 'react'
import { Card } from '../card'
import { TerraContext } from '../../store';
import { HomeDialog } from './homeDialog'
import { HomeDescription } from './homeDescription'
import styles from './homeCard.module.css'

const modalKey = home => `home-card-${home.homePlanId}`

export const HomeCard = ({ home }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const key = modalKey(home)
  const showModal = state.modals[key]

  return (
    <>
      <Card content={<HomeDescription home={home} />} image={home.image} onClick={() => dispatch({ type: 'SHOW_MODAL', key, payload: home })}/>
      { showModal ? <HomeDialog home={home} /> : null}
    </>
  )
}