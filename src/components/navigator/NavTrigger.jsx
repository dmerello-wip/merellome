'use client'

import _NavSlide from '@/styles/components/NavTrigger.scss'
import {  useEffect, useRef } from "react"
import useNavigatorStore from '@/stores/navigatorStore'
import classNames from 'classnames';

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

const NavTrigger = (props) => {

  const { cameraStartSettings, cameraEndSettings, slideIndex, setCamera } = props;
  const navTriggerRef = useRef();
  const { setSection} = useNavigatorStore((state) => state)
  const currentTip = useNavigatorStore((state) => state.tip)
  // const setTip = useNavigatorStore((state) => state.setTip)

  const NavTriggerClasses = classNames('NavTrigger', {
     'NavTrigger--open': (currentTip && Number(currentTip.split('|')[0]) === slideIndex)
  })

  useEffect(() => {
    const closeAllCards = () => {
      console.log('closeAllCards');
      const cards = document.querySelectorAll('.navSlide__content__tips .Card');
      cards.forEach(card => {
          card.classList.remove('Card--active');
      });
    }
    const activateCard = () => {
      closeAllCards();
      const tipElement = document.querySelector(`[data-id="${currentTip}"]`);
      tipElement.classList.add('Card--active'); 
    }

    if(!currentTip) {
      closeAllCards();
    } else {
      activateCard()
    }
  }, [currentTip, slideIndex])

  useIsomorphicLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
        
        gsap.registerPlugin(ScrollTrigger)
      
        const controlledRotation = cameraStartSettings;

        /* --- 01. progress to manage the section change --- */
        const sectionPartialProgress = { perc: 0};
          gsap.to(sectionPartialProgress, {
          perc: 1,
          scrollTrigger: {
              trigger: navTriggerRef.current,
              scrub: 0.2,
              start: 'top center',
          },
          ease: "none",
          onUpdate: () => {
            if(sectionPartialProgress.perc < 0.5) {
              setSection(slideIndex)
            } else {
              setSection(null)
            }
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
              trigger: navTriggerRef.current,
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
              trigger: navTriggerRef.current,
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
              trigger: navTriggerRef.current,
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
              trigger: navTriggerRef.current,
              scrub: 0.1,
              start: 'top 20%',
              end: 'top top',
          },
        });

    });

    return () => ctx.revert();

  }, [cameraStartSettings, cameraEndSettings, slideIndex]);



  /* -------------------- render -------------------- */

  return (
    <div className={NavTriggerClasses} ref={navTriggerRef} id={`slide-${slideIndex}`} data-index={slideIndex} data-tip={currentTip} />
  )

}



export { NavTrigger }
