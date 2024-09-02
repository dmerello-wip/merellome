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
      const initialRotation = el.rotation
      const targetRotation = (i === contents.slides.length - 1) ? el.rotation : contents.slides[i + 1].rotation
      return <NavSlide
        key={`slide-${i}`}
        id={`slide-${i}`}
        title={`${el.title} - ${el.color}`}
        description={el.description}
        prevSlideFinalRotation={initialRotation}
        thisSlideFinalRotation={targetRotation}
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
