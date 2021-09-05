import React from 'react'
import { Card } from './card'
import { TerraContext } from '../store';
import { Modal } from './modal'
import { HomeDescription } from './homeDescription'

const modalKey = home => `home-card-${home.homePlanId}`

export const HomeCard = ({ home }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const key = modalKey(home)
  const showModal = state.modals[key]

  return (
    <>
      <Card content={<HomeDescription home={home} />} image={home.image} onClick={() => dispatch({ type: 'SHOW_MODAL', key, payload: home })}/>
      { showModal ? <Modal selector="body">MAGICAL</Modal> : null}
    </>
  )
}