import React from 'react'
import styles from './index.module.css'
import { useRouter } from 'next/router'

import { HomeCard } from '../src/components/home/homeCard'
import { Layout } from '../src/components/layout'

import { TerraContext, withStore } from '../src/store'
import { useModalLoader } from '../src/components/hooks/useModalLoader'
import { useDataLoader } from '../src/components/hooks/useDataLoader'

const fetcher = ({ url, key, dispatch }) => fetch(url)
  .then(res => res.json())
  .then((response) => dispatch({ type: 'LOAD', key, payload: response }))


function Home() {
  const { state } = React.useContext(TerraContext)

  useDataLoader()
  useModalLoader()

  return (
    <Layout>
      <div className={styles.card_container}>
        { state.homes.map(home => (<HomeCard key={home.homePlanId} home={home} />))}
      </div>
    </Layout>
  )
}

export default withStore(Home)

