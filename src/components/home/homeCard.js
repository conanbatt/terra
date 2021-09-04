
import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '../card'
import { HomeDescription } from './homeDescription'
import { TerraContext } from '../../store';
import { Like } from '../like'
import { likeKey } from '../utils/keyGenerator'

export const HomeCard = ({ home }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const router = useRouter()

  const key = likeKey(home)
  const liked = !!state.likes[key]

  return (
    <>
      <Card
        content={<HomeDescription home={home} />}
        like={
          <Like
            onClick={() => dispatch({ type: liked ? 'REMOVE_LIKE' : 'ADD_LIKE', payload: home, key })}
            liked={liked}
          />
        }
        image={home.image}
        onClick={() => {
          router.push(`/homes?selectedHomePlan=${home.homePlanId}`)
        }}
      />
    </>
  )
}
