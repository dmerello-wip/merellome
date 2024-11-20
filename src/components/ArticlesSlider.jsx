'use client'

import _ArticlesSlider from '@/styles/components/articlesSlider.scss'
import { Card } from './Card';
import { useGSAP } from '@gsap/react'
import { useEffect, useRef } from "react"
import  { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { SlidingTitle } from './SlidingTitle';

const ArticlesSlider = ({contents}) => {

   const wrapperRef = useRef();
   const galleryRef = useRef();
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
    if(!wrapperRef.current) {
      return;
    }
    let ctx = gsap.context(() => {
        
      const trigger = {
            trigger: wrapperRef.current,
            start: 'top top',
            end: () => "+=" + wrapperRef.current.offsetWidth,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
        }
        
        gsap.to(galleryRef.current.children, {
          scrollTrigger: trigger,
          x: () => -(galleryRef.current.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: 'none'
        });
    });

    return () => ctx.revert();

  }, []);


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