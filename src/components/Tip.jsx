'use client'

import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import _tip from '@/styles/components/Tip.scss'
import  useNavigatorStore  from '@/stores/navigatorStore'




const Tip = ({ children, action, section }) => {
  const currentSection = useNavigatorStore((state) => state.section)
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility( (currentSection === section) )
  }, [currentSection, section])

  const actionHandler = () => {
    alert('Action: ' + action)
  }

  return (
      <Html>
        {visibility && 
          <div className="tip" onClick={actionHandler}>
            {children}
          </div>
        }
      </Html>
  )
}

export { Tip }
