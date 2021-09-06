import React from 'react'

import { LotCard } from '../src/components/lot/lotCard'
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
      <button className="button" onClick={() => setShowLiked(!showLiked)}>Show Saved Lots</button>
      <div className="card_container">
        {
          showLiked ? (
            Object
              .values(state.likes)
              .filter(({ lotId }) => !!lotId)
              .map(lot => (<LotCard key={lot.lotId} lot={lot} />))
          ) : (
            state.lots.map(lot => (<LotCard key={lot.lotId} lot={lot} />))
          )
        }
      </div>
    </Layout>
  )
}

export default withStore(Home)

