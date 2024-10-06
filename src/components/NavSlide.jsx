import _NavSlide from '@/styles/NavSlide.scss'
import { useGSAP } from '@gsap/react'
import { useLayoutEffect, useRef } from "react"
import  { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

const NavSlide = (props) => {

  const { title, description, children, cameraStartSettings, cameraEndSettings, id, setCamera } = props;
  const slideRef = useRef();
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP((context, contextSafe) => {
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
              scrub: 0.1,
              start: 'top top',
          },
          ease: "power1.inOut",
          onUpdate: () => {
              setCamera(controlledRotation)
          }
        });

        gsap.from(`#${id} .letter`, {
          opacity: 0,
          filter: 'blur(10px)',
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top 30%',
              end: 'top top',
          },
          stagger: {
              each: 0.04,
          },
        });


        gsap.from(`#${id} .navSlide__content__description`, {
          opacity: 0,
          y: 0,
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top 5%',
              end: 'top top',
          },
        });
    });

    return () => ctx.revert();

  }, [cameraStartSettings, cameraEndSettings, id]);

  const renderSplitByLetter = str => {
      const words = str.split(' ');
      return words.map((el, i) => {
          const letters = el.split('').map((el, i) => <span className="letter" key={`letter-${i}`}>{el}</span>);
          return <span className="word" key={`word-${i}`}>{letters} </span>;
      });
  };

  return (
    <div className="navSlide" ref={slideRef} id={id}>
      <div className='navSlide__content'>
        <div className='navSlide__content__title'>
          <h2>{renderSplitByLetter(title)}</h2>
        </div>
        <div className='navSlide__content__description' dangerouslySetInnerHTML={{ __html: description }} />
        {children}
      </div>
    </div>
  )

}



export { NavSlide }
