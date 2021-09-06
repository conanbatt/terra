
import React from 'react'
import { useRouter } from 'next/router'
import { Card } from '../card'
import { TerraContext } from '../../store';
import { LotDescription } from './lotDescription'
import { MODAL_KEY } from './lotDialog'

export const LotCard = ({ lot }) => {
  const { dispatch } = React.useContext(TerraContext)
  const router = useRouter()

  return (
    <>
      <Card
        content={<LotDescription lot={lot} />}
        image={lot.image}
        onClick={() => {
          // TODO: add note or refactor?
          router.push(`/lots?selectedLot=${lot.lotId}`)
          dispatch({ type: 'SHOW_MODAL', key: MODAL_KEY, payload: lot })
        }}
      />
    </>
  )
}