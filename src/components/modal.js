import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'

const hideModal = ({ router }) => {
  // There is an assumption of a pattern by clearing parameters when we hide a modal.
  router.push(router.pathname)
}

export function Modal({ children, selector }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  const router = useRouter()

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        hideModal({ router })
      }
    }
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [])

  return mounted ? createPortal(<Dialog onClick={() => hideModal({ router })}>{children}</Dialog>, ref.current) : null
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
