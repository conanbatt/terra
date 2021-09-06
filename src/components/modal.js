import React from 'react'
import { TerraContext } from '../store';
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'

const hideModal = ({ dispatch, router }) => {
  // There is an assumption of a pattern by clearing parameters when we hide a modal.
  router.push(router.pathname)
  dispatch({ type: 'HIDE_MODAL' })
}

export function Modal({ children, selector }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)
  const { dispatch } = React.useContext(TerraContext)

  const router = useRouter()

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        hideModal({ router, dispatch })
      }
    }
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [])

  return mounted ? createPortal(<Dialog onClick={() => hideModal({ router, dispatch })}>{children}</Dialog>, ref.current) : null
}

const Dialog = ({ children, onClick }) => (
  <>
    <div className="dialog-overlay" onClick={onClick}/>
    <div className="dialog">
      <div className="dialog-content">
        {children}
      </div>
    </div>
  </>
)