'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef } from "react"
import { NavThree } from "@/components/NavThree"
import { NavSlide } from "@/components/NavSlide"
import  { useNavigatorStore } from "@/store/navigatorStore"
import * as THREE from 'three'

const Navigator = ( { contents }) => {

  const navigatorWrapperRef = useRef()
  
  const mainObjRotation =  useNavigatorStore((state) => state.mainObjRotation) 

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      const latestRotation = (i === 0) ? 0 : contents.slides[i-1].rotation
      return <NavSlide
        key={`slide-${i}`}
        id={`slide-${i}`}
        title={el.title}
        description={el.description}
        prevSlideFinalRotation={latestRotation}
        thisSlideFinalRotation={el.rotation}
        >
      </NavSlide>
    })
  }


  return (
      <div className="navigator" ref={navigatorWrapperRef}>
        {renderNavSlides()}
        <div className='navigator__canvas'>
          <NavThree rotation={mainObjRotation} slides={contents.slides}/>
        </div>
      </div>
  )
}

export { Navigator }
