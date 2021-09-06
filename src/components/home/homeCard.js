
import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '../card'
import { HomeDescription } from './homeDescription'

export const HomeCard = ({ home }) => {
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