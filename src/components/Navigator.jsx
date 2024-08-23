'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { NavThree } from "@/components/NavThree"
import { NavSlide } from "@/components/NavSlide"

const Navigator = ( { contents }) => {

  // ref to be used in Gsap
  const navigatorWrapperRef = useRef()
  // state to change rendering called in gsap onUpdate
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const gsapRotationValue = {y:0};

    const timeLineTrigger = {
        trigger: navigatorWrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
    }
    const timeLine = gsap.timeline({
        scrollTrigger: timeLineTrigger,
        onUpdate: () => {
            setRotation(gsapRotationValue.y)
        }
    });
    gsap.set(gsapRotationValue, { y: 0})
    timeLine.to(gsapRotationValue, { y:  Math.PI })

  }, []);

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      return <NavSlide
        key={`slide-${i}`}
        title={el.title}
        description={el.description}>
      </NavSlide>
    })
  }

  return (
      <div className="navigator" ref={navigatorWrapperRef}>
        {renderNavSlides()}
        <div className='navigator__canvas'>
          <NavThree rotation={rotation}/>
        </div>
      </div>
  )
}

export { Navigator }
