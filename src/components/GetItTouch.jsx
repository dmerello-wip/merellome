'use client'


import _GetItTouch from '@/styles/getInTouch.scss'
import { useGSAP } from '@gsap/react'
import { useLayoutEffect, useRef } from "react"
import  { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

const GetItTouch = (props) => {

  const sectionRef = useRef();
  const titleRef = useRef();
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
    let ctx = gsap.context(() => {
        
      const trigger = {
            trigger: titleRef.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom center',
            // markers: true,
        }
        
        gsap.from(titleRef.current, {
          xPercent: -100,
          scrollTrigger: trigger,
          ease: "power1.inOut",
        });
    });

    return () => ctx.revert();

  }, []);

  return (
    <div className="getInTouch"  ref={sectionRef}>
      <div className="getInTouch__title" ref={titleRef} >
        get in touch
      </div>
    </div>
  )

}



export { GetItTouch }
