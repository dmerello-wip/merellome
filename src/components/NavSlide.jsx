import _NavSlide from '@/styles/NavSlide.scss'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from "react"

const NavSlide = (props) => {

  const { title, description, children, color, setRotation, angle } = props;
  const slideRef = useRef();


  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)

      const gsapRotationValue = {y:0};

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
              setRotation(gsapRotationValue.y)
          }
      });

      timeLine.to(gsapRotationValue, { y:  150})

    }, [angle, setRotation]);

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
