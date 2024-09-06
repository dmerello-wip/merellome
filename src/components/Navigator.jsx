'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef, useEffect, Suspense } from "react"
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'


const NavSlide = dynamic(() => import('@/components/NavSlide').then((mod) => mod.NavSlide), { ssr: false })
const NavNode = dynamic(() => import('@/components/NavNode').then((mod) => mod.NavNode), { ssr: false })
const Eyeglasses = dynamic(() => import('@/components/Eyeglasses').then((mod) => mod.Eyeglasses), { ssr: false })
const Bass = dynamic(() => import('@/components/Bass').then((mod) => mod.Bass), { ssr: false })
const Office = dynamic(() => import('@/components/Office').then((mod) => mod.Office), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <Loader /> 
  ),
})


const Navigator = ( { contents }) => {

  const mainObjRef = useRef()
  const mainObjRotationRef = useRef(0);
  const radius = 8;
  const elementSize = 2;

  const setMainObjRotation = (val) => {
    if(mainObjRef.current) {
      mainObjRef.current.rotation.z = -val
    }
  }

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      const initialRotation = el.rotation
      const targetRotation = (i === contents.slides.length - 1) ? el.rotation : contents.slides[i + 1].rotation
      return <NavSlide
        key={`slide-${i}`}
        id={`slide-${i}`}
        title={el.title}
        description={el.description}
        rotationStart={initialRotation}
        rotationEnd={targetRotation}
        setMainObjRotation={setMainObjRotation}
        >
      </NavSlide>
    })
  }
  const positionsMap = () => {
    let baseDegrees = (2 * Math.PI) / contents.slides.length;
    return contents.slides.map((el, i) => {
      let x = ( radius * Math.cos(i * baseDegrees) );
      let y = ( radius * Math.sin(i * baseDegrees) );
      const data = {
        position: [x,y,0],
        rotation: baseDegrees * i
      };
      return data;
    });
  };

  // const renderNodes = () => {
  //   let baseDegrees = (2 * Math.PI) / contents.slides.length;
  //   return contents.slides.map((el, i) => {
  //     let x = ( radius * Math.cos(i * baseDegrees) );
  //     let y = ( radius * Math.sin(i * baseDegrees) );
  //     return <NavNode
  //       key={`node-${i}`}
  //       position={[x, y, 0]}
  //       size = {elementSize}
  //       color = {el.color}
  //     />;
  //   });
  // };


  return (
      <div className="navigator">
        {renderNavSlides()}
        <div className='navigator__canvas'>
          <View   className="navigator__canvas__scene" >
              <Suspense fallback={null}>
                <fog attach="fog" args={['#101010',20, 25]} />
                <ambientLight />
                <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
                <pointLight position={[-10, -10, -10]} color='white' decay={0.2} />
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, 22]} />    
                <group ref={mainObjRef} position={[4, 0, 0]} rotation={[ 0, THREE.MathUtils.degToRad(-90) , mainObjRotationRef.current ]}>
                  {/* {renderNodes()} */}
                  <Eyeglasses position={positionsMap()[0].position} />
                  <Bass position={positionsMap()[1].position} />
                  <NavNode position={positionsMap()[2].position} size={2}  color = {'red'} wired={true}/>
                  <Office position={positionsMap()[3].position} />
                  <NavNode position={positionsMap()[4].position} size={2}  color = {'orange'} wired={false}/>
                </group>
              </Suspense>
          </View>
        </div>
      </div>
  )
}

export { Navigator }
