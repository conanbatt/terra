import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import classnames from 'classnames'

import { Card } from './components/card'

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

  console.log('state', state)
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content>
        <div>
          { state.homes.length }
          
          <div className={styles.card_container}>
            { state.homes.map(home => (<Card home={home} />))}
          </div>
        </div>
      </Content>
    </div>
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

