import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'

import { HomeDialog, MODAL_KEY } from './home/homeDialog'
import { LotDialog, MODAL_KEY as LOT_MODAL_KEY } from './lot/lotDialog'
import { TerraContext } from '../store'
import { Search } from '../components/search'

export function Layout({ children }) {
  const { state } = React.useContext(TerraContext)

  return (
    <div className={styles.container}>
      <Sidebar />
      
      <div className={styles.content}>
        <div>
          <Search />
        </div>
        {children}
      </div>
      { /* This is a crude dispatch for modals.
         * In this design we separate the modal from the content entirely, meaning we support the modals in any page!
         */
      }
      { state.modals[MODAL_KEY] ? <HomeDialog home={state.modals[MODAL_KEY]} /> : null}
      { state.modals[LOT_MODAL_KEY] ? <LotDialog lot={state.modals[LOT_MODAL_KEY]} /> : null}
    </div>
  )
}

const Sidebar = () => (
  <div className={styles.sidebar}>
    <ul>
      <li>
        <Link href="/homes">
          <a>Home Plans</a>
        </Link>
      </li>
      <li>
        <Link href="/lots">
          <a>Lots</a>
        </Link>
      </li>
    </ul>
  </div>
)
