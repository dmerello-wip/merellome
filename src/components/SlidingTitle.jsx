'use client'

import _SlidingTitle from '@/styles/components/slidingTitle.scss'
import { useRef } from "react"

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

const SlidingTitle = ({content}) => {

  const titleRef = useRef();
  
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {

    gsap.registerPlugin(ScrollTrigger)
        
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
