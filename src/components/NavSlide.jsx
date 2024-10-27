import _NavSlide from '@/styles/components/NavSlide.scss'
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ScrollTrigger } from 'gsap/all'
import { splitTextByLetter } from '@/helpers/textUtils';
import useNavigatorStore from '@/stores/navigatorStore'
import  { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { TipCard } from './TipCard'
import classNames from 'classnames';

const NavSlide = (props) => {

  const { title, description, tips, cameraStartSettings, cameraEndSettings, slideIndex, setCamera } = props;
  const slideRef = useRef();
  const firstRun = useRef(true);

  const { section, setSection} = useNavigatorStore((state) => state)
  const currentTip = useNavigatorStore((state) => state.tip)

  

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
              setSection(slideIndex)
              // console.log('update', id);
          }, 
        });

        gsap.from(`#slide-${slideIndex} .letter`, {
          opacity: 0,
          // filter: 'blur(10px)',
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

        gsap.from(`#slide-${slideIndex} .navSlide__content__card__description`, {
          opacity: 0,
          y: '-2rem',
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top 20%',
              end: 'top top',
          },
        });

        gsap.from(`#slide-${slideIndex} .navSlide__content`, {
          // x: '-100%',
          // rotateY: '180deg',
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

  }, [cameraStartSettings, cameraEndSettings, slideIndex, firstRun]);


  /* -------------------- tips cards -------------------- */

  const renderTipCards = () => {
    return tips.map((tip,i) => {
      return <TipCard key={`tip-${i}`} sectionIndex={slideIndex} tipIndex={i} title={tip.title} description={tip.description}/>
    })
  }

  const navSlideClasses = classNames('navSlide', {
    'navSlide--open': (currentTip && Number(currentTip.split('|')[0]) === slideIndex)
  })

  /* -------------------- render -------------------- */

  return (
    <div className={navSlideClasses} ref={slideRef} id={`slide-${slideIndex}`}>
      <div className="navSlide__content">
        <div className="navSlide__content__card">
          <div className='navSlide__content__card__title'>
            <h2>{splitTextByLetter(title)}</h2>
          </div>
          <div className='navSlide__content__card__description' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className='navSlide__content__tips'>
          {renderTipCards()}
        </div>
      </div>
    </div>
  )

}



export { NavSlide }
