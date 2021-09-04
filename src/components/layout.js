import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
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