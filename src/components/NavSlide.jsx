import _NavSlide from '@/styles/NavSlide.scss'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from "react"
import  { useNavigatorStore } from "@/store/navigatorStore"

const NavSlide = (props) => {

  const { title, description, children, color, prevSlideFinalRotation, thisSlideFinalRotation, id } = props;
  const slideRef = useRef();
  const setMainObjRotation = useNavigatorStore((state) => state.setMainObjRotation)
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
    let ctx = gsap.context(() => {
        const timeLineTrigger = {
            trigger: slideRef.current,
            markers: true,
            scrub: 0.1,
            start: 'top top',
        }
        const controlledRotation = { y: prevSlideFinalRotation };
        gsap.to(controlledRotation, {
          y: thisSlideFinalRotation,
          scrollTrigger: timeLineTrigger,
          onUpdate: () => {
              setMainObjRotation(controlledRotation.y)
          }
        });
    });

    return () => ctx.revert();

  }, [prevSlideFinalRotation, thisSlideFinalRotation, id]);

  return (
    <div className="navSlide" ref={slideRef} id={id}>
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
