import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

import { Card } from '../src/components/card'
import { Layout } from '../src/components/layout'

import { TerraContext, withStore } from '../src/store'

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
    <Layout>
      <div className={styles.card_container}>
        { state.homes.map(home => (<Card key={home.homePlanId} home={home} />))}
      </div>
    </Layout>
  )
}

const Sidebar = () => (
  <div className={styles.sidebar}>
    <ul>
      <li>
        <Link href="/">
          <a>Home Plans</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Lots</a>
        </Link>
      </li>
    </ul>
  </div>
)

const Content = ({ children }) => <div className={styles.content}>{children}</div>


export default withStore(Home)

