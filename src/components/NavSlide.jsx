import _NavSlide from '@/styles/NavSlide.scss'
import { useGSAP } from '@gsap/react'
import { useLayoutEffect, useRef } from "react"
import  { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

const NavSlide = (props) => {

  const { title, description, children, cameraRotationStart, cameraRotationEnd, id, setCameraRotation } = props;
  const slideRef = useRef();
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
    let ctx = gsap.context(() => {
      
        const trigger = {
            trigger: slideRef.current,
            scrub: 0.1,
            start: 'top top',
        }
        const controlledRotation = cameraRotationStart;
        
        gsap.to(controlledRotation, {
          x: cameraRotationEnd.x,
          y: cameraRotationEnd.y,
          z: cameraRotationEnd.z,
          scrollTrigger: trigger,
          ease: "none",
          onUpdate: () => {
              setCameraRotation(controlledRotation)
          }
        });
    });

    return () => ctx.revert();

  }, [cameraRotationStart, cameraRotationEnd, id]);

  return (
    <div className="navSlide" ref={slideRef} id={id}>
      <div className='navSlide__content'>
        <div className='navSlide__content__title'>
          {title}
        </div>
        <div className='navSlide__content__description'>
          {description}
        </div>
        {children}
      </div>
    </div>
  )

}



export { NavSlide }
