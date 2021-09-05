import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children, selector }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(<Dialog>{children}</Dialog>, ref.current) : null
}

const Dialog = ({ children }) => (
  <>
    <div className="dialog-overlay" />
    <div className="dialog">
      <div className="dialog-content">
        {children}
      </div>
    </div>
  </>
)