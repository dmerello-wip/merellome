import _NavSlide from '@/styles/components/NavSlide.scss'
import { useEffect, useRef, useState } from "react"
import { ScrollTrigger } from 'gsap/all'
import { splitTextByLetter } from '@/helpers/textUtils';
import useNavigatorStore from '@/stores/navigatorStore'
import  { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { Card } from './Card'
import classNames from 'classnames';

const NavSlide = (props) => {

  const { title, description, tips, cameraStartSettings, cameraEndSettings, slideIndex, setCamera } = props;
  const slideRef = useRef();
  const firstRun = useRef(true);

  const { setSection} = useNavigatorStore((state) => state)
  const currentTip = useNavigatorStore((state) => state.tip)
  const setTip = useNavigatorStore((state) => state.setTip)


  /* -------------------- animations -------------------- */

  // TODO: fix this dirty hack
  // onload of these slides i refresh scrolltrigger to make the next components work using it
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (document.readyState === 'complete') {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener('load', ScrollTrigger.refresh);
    }
  }, [])
  
  useGSAP((context, contextSafe) => {

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    
    let ctx = gsap.context(() => {
      
        const controlledRotation = cameraStartSettings;

        /* --- 01. progress to manage the section change --- */
        const sectionPartialProgress = { perc: 0};
          gsap.to(sectionPartialProgress, {
          perc: 1,
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.2,
              start: 'top center',
          },
          ease: "none",
          onUpdate: () => {
              setSection(slideIndex)
              // console.log(`section ${slideIndex}`, sectionPartialProgress.perc);
          }, 
        });
        
        /* ------------ 02. animate camera ------------ */
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
          }, 
        });

        /* ------------ 03. animate slide card ------------ */
        gsap.from(`#slide-${slideIndex} .navSlide__content`, {
          // x: '-100%',
          // rotateY: '180deg',
          rotateX: '120deg',
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top bottom',
              end: 'center center',
          },
        });


        /* ------------ 04. animate slide titles ------------ */
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

        /* ------------ 05. animate slide descriptions ------------ */
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

    });

    return () => ctx.revert();

  }, [cameraStartSettings, cameraEndSettings, slideIndex, firstRun]);


  /* -------------------- tips cards -------------------- */



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
          {tips.map((tip,i) => {
            return (
              <Card
                key={`tip-${i}`}
                isActive={currentTip === `${slideIndex}|${i}`}
                image={tip.image}
                title={tip.title}
                description ={tip.description}
                link={tip.link}
                closeAction={()=> setTip(null)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )

}



export { NavSlide }
