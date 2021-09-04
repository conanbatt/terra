import React from 'react'

import { TerraContext } from '../../store'

// We only execute this script once and on the client side.
// On Next.js we could try to run this on the server side as well, and using store hydration. Which can be done.

const fetcher = ({ url, key, dispatch }) => fetch(url)
  .then(res => res.json())
  .then((response) => dispatch({ type: 'LOAD', key, payload: response }))


export function useDataLoader() {
  const { dispatch } = React.useContext(TerraContext)

  React.useEffect(() => {
    fetcher({ dispatch, url: '/api/homes', key: 'homes' })
    fetcher({ dispatch, url: '/api/combinations', key: 'combinations' })
    fetcher({ dispatch, url: '/api/lots', key: 'lots' })
  }, [])
}

