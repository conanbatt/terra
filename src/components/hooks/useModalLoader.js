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

  React.useEffect(() => {
    if (isReady) {
      QUERY_RESOLVER.forEach(({ key, query, resolver }) => {
        const value = router.query[query]
        if (value) {
          return dispatch({ type: 'SHOW_MODAL', key, payload: resolver({ ...state, value }) })
        }
      })
    }
  }, [isReady, homes, lots])

  /*
  React.useEffect(() => {
    if (isReady && router.query.selectedHomePlan) {
      const home = state.homes.find(({ homePlanId }) => homePlanId === Number(router.query.selectedHomePlan))
      if (home) {
        dispatch({ type: 'SHOW_MODAL', key: MODAL_KEY, payload: home })
      } else {
        console.error('The home is not available')
      }
    }
  }, [isReady, homes])

*/
  React.useEffect(() => {
    const onRouteChange = what => console.log('what', what)
    router.events.on('routeChangeStart', onRouteChange)
  }, [])
}

/*
  Not using dispatch payload at all?
*/
