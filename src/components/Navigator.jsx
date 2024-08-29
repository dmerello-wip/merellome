'use client'

import _navigator from '@/styles/Navigator.scss'
import { use, useRef, useState } from "react"
import { NavThree } from "@/components/NavThree"
import { NavSlide } from "@/components/NavSlide"

const Navigator = ( { contents }) => {

  // ref to be used in Gsap
  const navigatorWrapperRef = useRef()
  // state to change rendering called in gsap onUpdate
  const [rotation, setRotation] = useState(0)

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      return <NavSlide
        key={`slide-${i}`}
        title={el.title}
        description={el.description}
        color={el.color}
        angle={el.angle}
        setRotation={setRotation}
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
