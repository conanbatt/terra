import React from 'react'

import { HomeCard } from '../src/components/home/homeCard'
import { Layout } from '../src/components/layout'

import { TerraContext, withStore } from '../src/store'
import { useModalLoader } from '../src/components/hooks/useModalLoader'
import { useDataLoader } from '../src/components/hooks/useDataLoader'

function Home() {
  const { state } = React.useContext(TerraContext)

  useDataLoader()
  useModalLoader()

  return (
    <Layout>
      <div className="card_container">
        { state.lots.map(lot => (<HomeCard key={home.homePlanId} home={home} />))}
      </div>
    </Layout>
  )
}

export default withStore(Home)

