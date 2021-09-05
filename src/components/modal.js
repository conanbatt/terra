import React from 'react'
import { TerraContext } from '../store';
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children, selector }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)
  const { dispatch } = React.useContext(TerraContext)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') { dispatch({ type: 'HIDE_MODAL' })}
    }
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [])

  return mounted ? createPortal(<Dialog dispatch={dispatch}>{children}</Dialog>, ref.current) : null
}

const Dialog = ({ children, dispatch }) => (
  <>
    <div className="dialog-overlay" onClick={() => dispatch({ type: 'HIDE_MODAL' })}/>
    <div className="dialog">
      <div className="dialog-content">
        {children}
      </div>
    </div>
  </>
)