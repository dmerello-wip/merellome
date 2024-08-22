'use client'

import { useRef, useEffect, useState } from "react"
import { NavThree } from "@/components/canvas/NavThree"
import { TempSpacer } from "@/components/dom/TempSpacer"
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
        // markers:true,
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
        <TempSpacer>1. elemento contenuto del navigator</TempSpacer>
        <TempSpacer>2. elemento contenuto del navigator</TempSpacer>
        <TempSpacer>3. elemento contenuto del navigator</TempSpacer>
        <TempSpacer>4. elemento contenuto del navigator</TempSpacer>
        <TempSpacer>5. elemento contenuto del navigator</TempSpacer>
        <TempSpacer>6. elemento contenuto del navigator</TempSpacer>
        <div className='navigator__canvas'>
          <NavThree rotation={rotation}/>
        </div>
      </div>
      <TempSpacer>1. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>2. Contenuto sotto al navigator</TempSpacer>
    </>
  )
}
