'use client'


import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

const SplittedText = ({contentString, startTrigger, endTrigger}) => {

  const words = contentString.split(' ');
  const splittedTextRef = useRef(null);
  const [isClientRendered, setIsClientRendered] = useState(false);

  useEffect(() => {
    setIsClientRendered(true);
  }, []);


  useIsomorphicLayoutEffect(() => {
    if(!splittedTextRef.current || !isClientRendered) return;
    
    let ctx = gsap.context(() => { 
        
        gsap.registerPlugin(ScrollTrigger);

        /* ------------ animate splitted text ------------ */
        
        gsap.from(`.letter`, {
          opacity: 0,
          scrollTrigger: {
              trigger: splittedTextRef.current,
              scrub: 0.1,
              start: startTrigger ? startTrigger : 'top bottom',
              end: endTrigger ? endTrigger : 'top 50%',
              // markers: true
          },
          stagger: {
              each: 0.04,
          },
        });
    }, splittedTextRef);

    return () => ctx.revert();

  }, [isClientRendered]);


  const renderToHTML = () => {
    return (
        <span className='splittedText' ref={splittedTextRef}>
            {words.map((word, wordIndex) => (
                <span className="word" key={`word-${wordIndex}`}>
                    {word.split('').map((letter, letterIndex) => (
                    <span className="letter" key={`letter-${letterIndex}`}>
                        {letter}
                    </span>
                    ))}
                    {' '}
                </span>
            ))}
        </span>
    )
  }

  return (!isClientRendered) ? <>{contentString}</> : renderToHTML();

}

export { SplittedText }
