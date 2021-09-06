
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
          router.push(`/homes?selectedHomePlan=${home.homePlanId}`)
        }}
      />
    </>
  )
}