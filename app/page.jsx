'use client'

import { useRef, useEffect, useState } from "react"
import { NavThree } from "@/components/canvas/NavThree"
import { TempSpacer } from "@/components/dom/TempSpacer"
import { NavSlide } from "@/components/dom/NavSlide"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import _navigator from '@/styles/navigator.scss'

export default function Page() {

  const navigatorWrapperRef = useRef()
  // state to change render in Gsap update
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

  return (
    <>
      <div className="navigator" ref={navigatorWrapperRef}>
        <NavSlide
          title="numero 1"
          description="description 1">
          <div>Elemento 1 contenuto del navigator</div>
        </NavSlide>
        <NavSlide
          title="numero 2"
          description="description 2">
          <div>Elemento 2 contenuto del navigator</div>
        </NavSlide>
        <NavSlide
          title="numero 3"
          description="description 3">
          <div>Elemento 3 contenuto del navigator</div>
        </NavSlide>
        <NavSlide
          title="numero 4"
          description="description 4">
          <div>Elemento 4 contenuto del navigator</div>
        </NavSlide>
        <NavSlide
          title="numero 5"
          description="description 5">
          <div>Elemento 5 contenuto del navigator</div>
        </NavSlide>
        <NavSlide
          title="numero 6"
          description="description 6">
          <div>Elemento 6 contenuto del navigator</div>
        </NavSlide>
        <div className='navigator__canvas'>
          <NavThree rotation={rotation}/>
        </div>
      </div>
      <TempSpacer>1. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>2. Contenuto sotto al navigator</TempSpacer>
    </>
  )
}
