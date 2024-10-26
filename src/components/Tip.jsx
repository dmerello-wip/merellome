'use client'

import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import _tip from '@/styles/components/Tip.scss'
import  useNavigatorStore  from '@/stores/navigatorStore'
import classNames from 'classnames'




const Tip = ({ id }) => {

  const currentSection = useNavigatorStore((state) => state.section)
  const currentTip = useNavigatorStore((state) => state.tip)
  const setTip = useNavigatorStore((state) => state.setTip)

  const [visibility, setVisibility] = useState(false);
  const [active, setActive] = useState(false);

  const tipSection = Number(id.split('|')[0])

  useEffect(() => {
    setVisibility( currentSection === tipSection )
    setActive( id === currentTip  )
  }, [currentSection, currentTip, id, tipSection])

  const actionHandler = () => {
    setTip(id)
  }

  const tipClasses = classNames('tip', {
    'tip--visible': visibility,
    'tip--active': active,
  })


  return (
      <Html>
        <div className={tipClasses} onClick={actionHandler}>
          <div className="tip__circle"></div>
        </div>
      </Html>
  )
}

export { Tip }
