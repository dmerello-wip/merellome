"use client";

import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

function SmoothScrolling({ children }) {

  const lenisRef = useRef()

   const lenis = useLenis(({ scroll }) => {
    // console.log('scroll', scroll);
  });

  // in case of gsap set autoRaf={false} to ReactLenis component
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis root className="lenis-wrapper" ref={lenisRef} autoRaf={false} options={{   
        lerp: 0.2,               
        duration: 2,          
        wheelMultiplier: 0.4,    
        touchMultiplier: 2,      
        touchInertiaMultiplier: 2, 
        smoothWheel: true,       
        smoothTouch: true,       
        gestureOrientation: "vertical" 
     }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;