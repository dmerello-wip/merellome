import _NavSlide from '@/styles/NavSlide.scss'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from "react"
import  { useNavigatorStore } from "@/store/navigatorStore"

const NavSlide = (props) => {

  const { title, description, children, color, prevSlideFinalRotation, thisSlideFinalRotation, id } = props;
  const slideRef = useRef();
  const increaseRotation = useNavigatorStore((state) => state.increaseRotation)
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
    let ctx = gsap.context(() => {
        const timeLineTrigger = {
            trigger: slideRef.current,
            markers: true,
            scrub: 0.1
        }
        const controlledRotation = { y: prevSlideFinalRotation };
        gsap.to(controlledRotation, {
          y: thisSlideFinalRotation,
          scrollTrigger: timeLineTrigger,
          onUpdate: () => {
              console.log(id, controlledRotation.y);
              increaseRotation(controlledRotation.y)
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
