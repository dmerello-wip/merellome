'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef, useEffect, Suspense } from "react"
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'


const NavSlide = dynamic(() => import('@/components/NavSlide').then((mod) => mod.NavSlide), { ssr: false })
const NavNode = dynamic(() => import('@/components/NavNode').then((mod) => mod.NavNode), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <Loader /> 
  ),
})


const Navigator = ( { contents }) => {

  const mainObjRef = useRef()
  const mainObjRotationRef = useRef(0);
  const radius = 5;
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
        title={`${el.title} - ${el.color}`}
        description={el.description}
        rotationStart={initialRotation}
        rotationEnd={targetRotation}
        setMainObjRotation={setMainObjRotation}
        >
      </NavSlide>
    })
  }
  const renderNodes = () => {
    let baseDegrees = (2 * Math.PI) / contents.slides.length;
    return contents.slides.map((el, i) => {
      let x = ( radius * Math.cos(i * baseDegrees) );
      let y = ( radius * Math.sin(i * baseDegrees) );
      return <NavNode
        key={`node-${i}`}
        position={[x, y, 0]}
        size = {elementSize}
        color = {el.color}
      />;
    });
  };


  return (
      <div className="navigator">
        {renderNavSlides()}
        <div className='navigator__canvas'>
          <View className="navigator__canvas__scene" >
              <Suspense fallback={null}>
                <ambientLight />
                <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
                <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, 22]} />
                <group ref={mainObjRef} rotation={[ 0, THREE.MathUtils.degToRad(-110) , mainObjRotationRef.current ]}>
                  {renderNodes()}
                </group>
              </Suspense>
          </View>
        </div>
      </div>
  )
}

export { Navigator }
