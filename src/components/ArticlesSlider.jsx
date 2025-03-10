'use client'

import _ArticlesSlider from '@/styles/components/articlesSlider.scss'
import { Card } from './Card';
import { useRef } from "react"

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

import { SlidingTitle } from '@/components/SlidingTitle';

const ArticlesSlider = ({contents}) => {

   const wrapperRef = useRef();
   const galleryRef = useRef();
  
  useIsomorphicLayoutEffect(() => {

    if(!wrapperRef.current || !gsap || !ScrollTrigger) return;
    
    let ctx = gsap.context(() => {

        gsap.registerPlugin(ScrollTrigger)

        /* ------------ animate all cards wrapper ------------ */
        gsap.to(galleryRef.current, {
          scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'center 40%',
              end: () => "+=" + wrapperRef.current.offsetHeight,
              pin: true,
              scrub: 1,
          },
          x: () => -(galleryRef.current.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: 'none'
        });
          
        /* ------------ animate single cards ------------ */
        gsap.from(galleryRef.current.children, {
          scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: true,
              // markers: true
          },
          scale: 0.9,
          opacity: 0,
          ease: 'none',
          stagger: {
              each: 1,
          }
        });
       
    }, wrapperRef);

    return () => ctx.revert();


  }, [])


  return (
    <div className="articlesSlider" >
      <div className="articlesSlider__wrapper" ref={wrapperRef}>
        <SlidingTitle content={":; readings :; readings"} />
        <div className="articlesSlider__gallery" ref={galleryRef}>
          {contents.map((el, i) => (
            <div className='articlesSlider__box' key={`item-${i}`}>
              <Card
                image={el.image}
                title={el.title}
                description={el.description}
                link={el.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  
}

export { ArticlesSlider }