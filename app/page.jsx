'use client'

import { useRef, useEffect } from "react"
import { NavThree } from "@/components/canvas/NavThree"
import { TempSpacer } from "@/components/dom/TempSpacer"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { useLenis } from '@studio-freight/react-lenis'
import _navigator from '@/styles/navigator.scss'

export default function Page() {

  const navigatorRef = useRef()
  const navigatorRotation = useRef({ y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeLineTrigger = {
        trigger: navigatorRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
    }
    const timeLine = gsap.timeline({
        scrollTrigger: timeLineTrigger,
        onUpdate: () => {
            console.log(navigatorRotation.current.y);
        }
    });
    gsap.set(navigatorRotation.current, { y: 0 })
    timeLine.to(navigatorRotation.current, { y:  Math.PI })
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
          <NavThree />
        </div>
      </div>
        <TempSpacer>spacer outside 1</TempSpacer>
        <TempSpacer>spacer outside 2</TempSpacer>
    </>
  )
}
