import _NavSlide from '@/styles/components/NavSlide.scss'
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ScrollTrigger } from 'gsap/all'
import { splitTextByLetter } from '@/helpers/textUtils';
import useNavigatorStore from '@/stores/navigatorStore'
import  { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { TipCard } from './TipCard'

const NavSlide = (props) => {

  const { title, description, tips, cameraStartSettings, cameraEndSettings, id, setCamera } = props;
  const slideRef = useRef();
  const firstRun = useRef(true);

  const { setSection} = useNavigatorStore((state) => state)

  /* -------------------- animations -------------------- */

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    
    let ctx = gsap.context(() => {
      
        const controlledRotation = cameraStartSettings;
        
        gsap.to(controlledRotation, {
          rotationX: cameraEndSettings.rotationX,
          rotationY: cameraEndSettings.rotationY,
          rotationZ: cameraEndSettings.rotationZ,
          positionX: cameraEndSettings.positionX,
          positionY: cameraEndSettings.positionY,
          positionZ: cameraEndSettings.positionZ,
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.2,
              start: 'top top',
              // markers : true,
          },
          ease: "power1.inOut",

          onUpdate: () => {
              setCamera(controlledRotation)
              setSection(id)
              // console.log('update', id);
          }, 
        });

        gsap.from(`#slide-${id} .letter`, {
          opacity: 0,
          filter: 'blur(10px)',
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top center',
              end: 'top 0%',
          },
          stagger: {
              each: 0.04,
          },
        });

        gsap.from(`#slide-${id} .navSlide__content__description`, {
          opacity: 0,
          y: '-2rem',
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top 20%',
              end: 'top top',
          },
        });

        gsap.from(`#slide-${id} .navSlide__content`, {
          x: '-100%',
          rotateY: '180deg',
          rotateX: '90deg',
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top bottom',
              end: 'center center',
          },
        });
    });

    return () => ctx.revert();

  }, [cameraStartSettings, cameraEndSettings, id, firstRun]);

  /* -------------------- tips cards -------------------- */


  const renderTipCards = () => {
    return tips.map((tip) => {
      return <TipCard key={tip.id} id={tip.id} title={tip.title} description={tip.description}/>
    })
  }

  /* -------------------- render -------------------- */

  return (
    <div className="navSlide" ref={slideRef} id={`slide-${id}`}>
      <div className='navSlide__content'>
        <div className='navSlide__content__title'>
          <h2>{splitTextByLetter(title)}</h2>
        </div>
        <div className='navSlide__content__description' dangerouslySetInnerHTML={{ __html: description }} />
        <div className='navSlide__content__cards'>
          {renderTipCards()}
        </div>
      </div>
    </div>
  )

}



export { NavSlide }
