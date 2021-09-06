
import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '../card'
import { TerraContext } from '../../store';
import { HomeDescription } from './homeDescription'
import { MODAL_KEY } from './homeDialog'

export const HomeCard = ({ home }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const router = useRouter()

  return (
    <>
      <Card
        content={<HomeDescription home={home} />}
        image={home.image}
        onClick={() => {
          // This can be chained by executing push and listening to route changes, or imperatively this way.
          router.push(`/?selectedHomePlan=${home.homePlanId}`)
          dispatch({ type: 'SHOW_MODAL', key: MODAL_KEY, payload: home })
        }}
      />
    </>
  )
}