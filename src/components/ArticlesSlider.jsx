'use client'

import _ArticlesSlider from '@/styles/components/articlesSlider.scss'
import { Card } from './Card';
import { useRef } from "react"

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

import { SlidingTitle } from './SlidingTitle';

//TODO: usare l'hook useAspectRation per gestire alternativamente il pin dello scrollTrigger fra wrapper e gallery
// se no su 16:9 non si vedono le cards

const ArticlesSlider = ({contents}) => {

   const wrapperRef = useRef();
   const galleryRef = useRef();
  
  useIsomorphicLayoutEffect(() => {

    if(!wrapperRef.current || !gsap || !ScrollTrigger) return;
    
    let ctx = gsap.context(() => {

        gsap.registerPlugin(ScrollTrigger)

        /* ------------ animate all cards wrapper ------------ */
        gsap.to(galleryRef.current.children, {
          scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top top',
              end: () => "+=" + wrapperRef.current.offsetWidth,
              pin: true,
              scrub: true,
          },
          x: () => -(galleryRef.current.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: 'none'
        });
          
        /* ------------ animate single cards ------------ */
        gsap.from(galleryRef.current.children, {
          scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 40%',
              scrub: true,
              // markers: true
          },
          scale: 0.9,
          opacity: 0,
          ease: 'none',
          stagger: 1
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