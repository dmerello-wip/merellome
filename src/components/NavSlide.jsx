import _NavSlide from '@/styles/NavSlide.scss'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from "react"
import  { useNavigatorStore } from "@/store/navigatorStore"

const NavSlide = (props) => {

  const { title, description, children, color, prevSlideFinalRotation, thisSlideFinalRotation } = props;
  const slideRef = useRef();
  const increaseRotation = useNavigatorStore((state) => state.increaseRotation)
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP(( context, contextSafe ) => {
      let ctx = gsap.context(() => {

        const controlledRotation = { y: prevSlideFinalRotation }; 
        const timeLineTrigger = {
            trigger: slideRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            markers: true
        }
        const timeLine = gsap.timeline({
            scrollTrigger: timeLineTrigger,
            onUpdate: () => {
               increaseRotation(controlledRotation)
            }
        });

        timeLine.to(controlledRotation, { y:  thisSlideFinalRotation})

      });

      return () => ctx.revert();
  });

  return (
    <div className="navSlide" ref={slideRef}>
      <div className='navSlide__content'>
        <div className='navSlide__content__title'>
          {title}
        </div>
        <div className='navSlide__content__description' style={{color: color}}>
          {description}
        </div>
        {children}
      </div>
    </div>
  )

}



export { NavSlide }
