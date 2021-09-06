import React from 'react'

import { LotCard } from '../src/components/lot/lotCard'
import { Layout } from '../src/components/layout'

import { TerraContext, withStore } from '../src/store'
import { useModalLoader } from '../src/components/hooks/useModalLoader'
import { useDataLoader } from '../src/components/hooks/useDataLoader'

function Home() {
  const { state } = React.useContext(TerraContext)

  useDataLoader()
  useModalLoader()

  console.log('lots', state.lots)

  return (
    <Layout>
      <div className="card_container">
        { state.lots.map(lot => (<LotCard key={lot.lotId} lot={lot} />))}
      </div>
    </Layout>
  )
}

export default withStore(Home)

