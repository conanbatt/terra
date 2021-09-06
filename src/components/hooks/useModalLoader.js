import React from 'react'
import { useRouter } from 'next/router'
import { MODAL_KEY } from '../home/homeDialog'
import { MODAL_KEY as LOT_MODAL_KEY } from '../lot/lotDialog'

import { TerraContext } from '../../store'

const QUERY_RESOLVER = [
  {
    key: MODAL_KEY,
    query: 'selectedHomePlan',
    resolver: ({ homes, value }) => homes.find(({ homePlanId }) => homePlanId === Number(value))
  },
  {
    key: LOT_MODAL_KEY,
    query: 'selectedLot',
    resolver: ({ lots, value }) => lots.find(({ lotId }) => lotId === Number(value))
  },
]

export function useModalLoader() {
  const router = useRouter()
  const { state, dispatch } = React.useContext(TerraContext)
  const { homes, lots } = state
  const { isReady } = router

  // This effect will hook on first load and also on changes on the query.
  React.useEffect(() => {
    if (isReady) {
      QUERY_RESOLVER.forEach(({ key, query, resolver }) => {
        const value = router.query[query]
        if (value) {
          return dispatch({ type: 'SHOW_MODAL', key, payload: resolver({ ...state, value }) })
        }
      })
      if (Object.keys(state.modals).length > 0) {
        dispatch({ type: 'HIDE_MODAL' })
      }
    }
  }, [isReady, homes, lots, router.query])
}
