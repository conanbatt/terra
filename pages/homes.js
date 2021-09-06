import React from 'react'

import { HomeCard } from '../src/components/home/homeCard'
import { Layout } from '../src/components/layout'

import { TerraContext, withStore } from '../src/store'
import { useModalLoader } from '../src/components/hooks/useModalLoader'
import { useDataLoader } from '../src/components/hooks/useDataLoader'

function Home() {
  const { state } = React.useContext(TerraContext)
  const [showLiked, setShowLiked] = React.useState(false)

  useDataLoader()
  useModalLoader()

  return (
    <Layout>
      <button className="button" onClick={() => setShowLiked(!showLiked)}>Show Saved Homes</button>
      <div className="card_container">
        {
          showLiked ? (
            Object
              .values(state.likes)
              .filter(({ homePlanId }) => !!homePlanId)
              .map(home => (<HomeCard key={home.homePlanId} home={home} />))
          ) : (
            state.homes.map(home => (<HomeCard key={home.homePlanId} home={home} />))
          )
        }
      </div>
    </Layout>
  )
}

export default withStore(Home)

