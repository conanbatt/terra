import React from 'react'

import Link from 'next/link'
import { Layout } from '../src/components/layout'
import { withStore } from '../src/store'
import { useModalLoader } from '../src/components/hooks/useModalLoader'
import { useDataLoader } from '../src/components/hooks/useDataLoader'

function Index() {
  
  useDataLoader()
  useModalLoader()

  return (
    <Layout>
      <h1>
        Welcome to Terra!
      </h1>
      <p>
        A rough sketch of Tinder for <Link href="/lots"><a style={{ textDecoration: 'underline '}}>Lots</a></Link> and <Link href="/homes"><a style={{ textDecoration: 'underline '}}>Homes</a></Link>.
      </p>
    </Layout>
  )
}

export default withStore(Index)
