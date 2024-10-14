import _NavSlide from '@/styles/components/NavSlide.scss'
import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from 'gsap/all'
import useNavigatorStore from '@/stores/navigatorStore'
import  { gsap } from "gsap"
import { useGSAP } from '@gsap/react'

const NavSlide = (props) => {

  const { title, description, children, cameraStartSettings, cameraEndSettings, id, setCamera } = props;
  const slideRef = useRef();
  const firstRun = useRef(true);


  const setSection = useNavigatorStore((state) => state.setSection)
  // const { section } = useNavigatorStore((state) => state)


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
              setSection(id)
              // console.log('update', id);
          }, 
        });

        gsap.from(`#${id} .letter`, {
          opacity: 0,
          filter: 'blur(10px)',
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


        gsap.from(`#${id} .navSlide__content__description`, {
          opacity: 0,
          y: 0,
          scrollTrigger: {
              trigger: slideRef.current,
              scrub: 0.1,
              start: 'top 20%',
              end: 'top top',
          },
        });
    });

    return () => ctx.revert();

  }, [cameraStartSettings, cameraEndSettings, id, firstRun]);

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
