"use client";

import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

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
    <ReactLenis root className="lenis-wrapper" ref={lenisRef} autoRaf={false} options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;