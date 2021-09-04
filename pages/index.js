import React from 'react'

import { TerraContext, withStore } from './store'

const fetcher = ({ url, key, dispatch }) => fetch(url)
  .then(res => res.json())
  .then((response) => dispatch({ type: 'LOAD', payload: { [key]: response } }))


function Home() {
  const { state, dispatch } = React.useContext(TerraContext)

  React.useEffect(() => {
    fetcher({ dispatch, url: '/api/homes', key: 'homes' })
    fetcher({ dispatch, url: '/api/combinations', key: 'combinations' })
    fetcher({ dispatch, url: '/api/lots', key: 'lots' })
  }, [])


  return (
    <div>
      <div>
        Nothing?
        { state.homes.length }
        {/* JSON.stringify(state) */}
      </div>
    </div>
  )
}

export default withStore(Home)

