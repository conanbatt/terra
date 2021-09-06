import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'

import { HomeDialog, MODAL_KEY } from './home/homeDialog'
import { TerraContext } from '../store';

export function Layout({ children }) {
  const { state } = React.useContext(TerraContext)
  const showHomeModal = state.modals[MODAL_KEY]

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
      { showHomeModal ? <HomeDialog home={showHomeModal} /> : null}
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