import React from 'react'
import { useRouter } from 'next/router'
import { MODAL_KEY } from '../home/homeDialog'

import { TerraContext } from '../../store'

export function useModalLoader() {
  const router = useRouter()
  const { state, dispatch } = React.useContext(TerraContext)
  const { homes } = state
  const { isReady } = router

  React.useEffect(() => {
    if (isReady && router.query.selectedHomePlan) {
      const home = state.homes.find(({ homePlanId }) => homePlanId === Number(router.query.selectedHomePlan))
      if (home) {
        router.push(`/?selectedHomePlan=${home.homePlanId}`)
        dispatch({ type: 'SHOW_MODAL', key: MODAL_KEY, payload: home })
      } else {
        console.error('The home is not available')
      }
    }
  }, [isReady, homes])
}
