'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef, useEffect, Suspense } from "react"
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'

const NavSlide = dynamic(() => import('@/components/NavSlide').then((mod) => mod.NavSlide), { ssr: false })
const NavNode = dynamic(() => import('@/components/NavNode').then((mod) => mod.NavNode), { ssr: false })
const Logoroom = dynamic(() => import('@/components/Logoroom').then((mod) => mod.Logoroom), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <Loader /> 
  ),
})


const Navigator = ( { contents }) => {

  const cameraRef = useRef()
  const {
    levaRotationX,
    levaRotationY,
    levaRotationZ,
    levaPositionX,
    levaPositionY,
    levaPositionZ,
  } = useControls({
    levaRotationX: 0,
    levaRotationY: -10,
    levaRotationZ: 0,
    levaPositionX: 6,
    levaPositionY: 4,
    levaPositionZ: 15
  });

  useEffect(() => {
    if(contents.slides.length > 0) {
      setTimeout(() => {
        // TODO: remove this orrible hack
        // the first rendering is not correclty getting the values
        setCamera(contents.slides[0].camera)
      }, 500)
    }
  }, [contents])

  const setCamera = (newSettings) => {
    
    if(cameraRef.current) {
      cameraRef.current.position.set(
        newSettings.positionX,
        newSettings.positionY,
        newSettings.positionZ
      )
      cameraRef.current.rotation.set(
        THREE.MathUtils.degToRad(newSettings.rotationX),
        THREE.MathUtils.degToRad(newSettings.rotationY),
        THREE.MathUtils.degToRad(newSettings.rotationZ)
      )
    }
    
  }

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      const initialCameraSet = el.camera
      const targetCameraSet = (i === contents.slides.length - 1) ? el.camera : contents.slides[i + 1].camera
      return <NavSlide
        key={`slide-${i}`}
        id={`slide-${i}`}
        title={el.title}
        description={el.description}
        cameraStartSettings={initialCameraSet}
        cameraEndSettings={targetCameraSet}
        setCamera={setCamera}
        >
      </NavSlide>
    })
  }

  return (
      <div className="navigator">
        <div className='navigator__canvas'>
          <View   className="navigator__canvas__scene" >
              <Suspense fallback={null}>
                <fog attach="fog" args={['#101010',15, 35]} />
                <ambientLight />
                <pointLight position={[-10, 20, 10]} intensity={10} decay={0.2} />
                <pointLight position={[10, -10, 10]} color='white' decay={0.2} />
                <PerspectiveCamera
                  ref={cameraRef}
                  makeDefault
                  fov={40}
                  position={[contents.slides[0].camera.positionX, contents.slides[0].camera.positionY, contents.slides[0].camera.positionZ]} 
                  rotation={[contents.slides[0].camera.rotationX, contents.slides[0].camera.rotationY, contents.slides[0].camera.rotationZ]} 
                  // position={[levaPositionX, levaPositionY, levaPositionZ]} 
                  // rotation={[THREE.MathUtils.degToRad(levaRotationX), THREE.MathUtils.degToRad(levaRotationY), THREE.MathUtils.degToRad(levaRotationZ)]} 
                  
                />    
                <group
                  position={[4, 0, 0]}
                  rotation={[ 0,0,0 ]}>
                  <Logoroom scale={[0.4, 0.4, 0.4]} position={[0, 0, 0]} />
                </group>
              </Suspense>
          </View>
        </div>
        {renderNavSlides()}
      </div>
  )
}

export { Navigator }
