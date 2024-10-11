'use client'

import { useRef } from 'react'
import { Html } from '@react-three/drei'
import _tip from '@/styles/tip.scss'

const Tip = ({ children, action }) => {
  const ref = useRef()

  const actionHandler = () => {
    alert('Action: ' + action)
  }

  return (
    <Html>
        <div className="tip" onClick={actionHandler}>
          {children}
        </div>
    </Html>
  )
}

export { Tip }
