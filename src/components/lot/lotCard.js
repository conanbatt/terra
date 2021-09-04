
import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '../card'
import { TerraContext } from '../../store';
import { LotDescription } from './lotDescription'
import { Like } from '../like'
import { likeKey } from '../utils/keyGenerator'

export const LotCard = ({ lot }) => {
  const { state, dispatch } = React.useContext(TerraContext)
  const router = useRouter()

  const key = likeKey(lot)
  const liked = !!state.likes[key]

  return (
    <>
      <Card
        content={<LotDescription lot={lot} />}
        like={
          <Like
            onClick={() => dispatch({ type: liked ? 'REMOVE_LIKE' : 'ADD_LIKE', payload: lot, key })}
            liked={liked}
          />
        }
        image={lot.image}
        onClick={() => {
          router.push(`/lots?selectedLot=${lot.lotId}`)
        }}
      />
    </>
  )
}
