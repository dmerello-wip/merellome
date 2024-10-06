'use client'

import { useRef } from 'react'
import _tip from '@/styles/tip.scss'

const Tip = ({ children, action }) => {
  const ref = useRef()

  const actionHandler = () => {
    alert({action})
  }

  return (
    <div className="tip" onClick={actionHandler}>
      {children}
    </div>
  )
}

export { Tip }
