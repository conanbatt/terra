import React from 'react'
import styles from './index.module.css'
import { useRouter } from 'next/router'

import { HomeCard } from '../src/components/home/homeCard'
import { Layout } from '../src/components/layout'
import { MODAL_KEY } from '../src/components/home/homeDialog'

import { TerraContext, withStore } from '../src/store'

const fetcher = ({ url, key, dispatch }) => fetch(url)
  .then(res => res.json())
  .then((response) => dispatch({ type: 'LOAD', key, payload: response }))


function Home(props) {

  const router = useRouter()
  const { state, dispatch } = React.useContext(TerraContext)

  const { homes } = state
  const { isReady } = router

  React.useEffect(() => {
    fetcher({ dispatch, url: '/api/homes', key: 'homes' })
    fetcher({ dispatch, url: '/api/combinations', key: 'combinations' })
    fetcher({ dispatch, url: '/api/lots', key: 'lots' })
  }, [])

  React.useEffect(() => {
    if (isReady && router.query.selectedHomePlan) {
      const home = state.homes.find(({ homePlanId }) => homePlanId === Number(router.query.selectedHomePlan))
      console.log('Show modal?', router.query.selectedHomePlan, state.homes.length)
      if (home) {
        router.push(`/?selectedHomePlan=${home.homePlanId}`)
        dispatch({ type: 'SHOW_MODAL', key: MODAL_KEY, payload: home })
      } else {
        console.error('The home is not available')
      }
    }
  }, [isReady, homes])

  return (
    <Layout>
      <div className={styles.card_container}>
        { state.homes.map(home => (<HomeCard key={home.homePlanId} home={home} />))}
      </div>
    </Layout>
  )
}

export default withStore(Home)

