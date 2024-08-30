'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef } from "react"
import { NavThree } from "@/components/NavThree"
import { NavSlide } from "@/components/NavSlide"
import  { useNavigatorStore } from "@/store/navigatorStore"

const Navigator = ( { contents }) => {

  // ref to be used in Gsap
  const navigatorWrapperRef = useRef()
  
  const rotation = useNavigatorStore((state) => state.rotation)

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      const latestRotation = (i === 0) ? 0 : contents.slides[i-1].rotation
      return <NavSlide
        key={`slide-${i}`}
        title={el.title}
        description={el.description}
        color={el.color}
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
          <NavThree rotation={rotation} slides={contents.slides}/>
        </div>
      </div>
  )
}

export { Navigator }
