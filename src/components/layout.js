import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'

import { HomeDialog, MODAL_KEY } from './home/homeDialog'
import { LotDialog, MODAL_KEY as LOT_MODAL_KEY } from './lot/lotDialog'
import { TerraContext } from '../store';

export function Layout({ children }) {
  const { state } = React.useContext(TerraContext)

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
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