'use client'

import { useRef, useEffect, useState } from "react"
import { NavThree } from "@/components/canvas/NavThree"
import { TempSpacer } from "@/components/dom/TempSpacer"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import _navigator from '@/styles/navigator.scss'

export default function Page() {

  const navigatorRef = useRef()
  // state to change render in Gsap update
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const gsapRotationValue = {y:0};

    const timeLineTrigger = {
        trigger: navigatorRef.current,
        start: 'top top',
        end: 'bottom center',
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
      <div className="navigator" ref={navigatorRef}>
        <TempSpacer>spacer 1</TempSpacer>
        <TempSpacer>spacer 2</TempSpacer>
        <TempSpacer>spacer 3</TempSpacer>
        <TempSpacer>spacer 4</TempSpacer>
        <TempSpacer>spacer 5</TempSpacer>
        <TempSpacer>spacer 6</TempSpacer>
        <div className='navigator__canvas'>
          <NavThree rotation={rotation}/>
        </div>
      </div>
      <TempSpacer>spacer outside 1</TempSpacer>
      <TempSpacer>spacer outside 2</TempSpacer>
    </>
  )
}
