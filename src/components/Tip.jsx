'use client'

import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import _tip from '@/styles/components/Tip.scss'
import  useNavigatorStore  from '@/stores/navigatorStore'




const Tip = ({ children, action, section }) => {
  const currentSection = useNavigatorStore((state) => state.section)
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {

    console.log(currentSection)
    console.log(section)
    setVisibility( (currentSection === section) )
  }, [currentSection, section])

  const actionHandler = () => {
    alert('Action: ' + action)
  }

  return (
      <Html>
        {visibility && 
          <div className="tip" onClick={actionHandler}>
            <div className="tip__circle">{children}</div>
          </div>
        }
      </Html>
  )
}

export { Tip }
