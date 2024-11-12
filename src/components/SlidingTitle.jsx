'use client'


import _SlidingTitle from '@/styles/components/slidingTitle.scss'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef } from "react"
import  { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

const SlidingTitle = ({content}) => {

  const titleRef = useRef();
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
    let ctx = gsap.context(() => {
        
      const trigger = {
            trigger: titleRef.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom center',
            invalidateOnRefresh: true,
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
    <div className="slidingTitle" >
      <div className="slidingTitle__title" ref={titleRef} >
        {content}
      </div>
    </div>
  )

}



export { SlidingTitle }
