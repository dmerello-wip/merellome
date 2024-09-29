'use client'

import _navigator from '@/styles/Navigator.scss'
import { useRef, useEffect, Suspense } from "react"
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import { PerspectiveCamera } from '@react-three/drei'


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

  const setCameraRotation = (newRotation) => {
    if(cameraRef.current) {
      cameraRef.current.rotation.x = -newRotation.x
      cameraRef.current.rotation.y = -newRotation.y
      cameraRef.current.rotation.z = -newRotation.z
    }
  }

  const renderNavSlides = () => {
    return contents.slides.map((el, i) => {
      const initialCameraRotation = el.cameraRotation
      const targetCameraRotation = (i === contents.slides.length - 1) ? el.cameraRotation : contents.slides[i + 1].cameraRotation
      return <NavSlide
        key={`slide-${i}`}
        id={`slide-${i}`}
        title={el.title}
        description={el.description}
        cameraRotationStart={initialCameraRotation}
        cameraRotationEnd={targetCameraRotation}
        setCameraRotation={setCameraRotation}
        >
      </NavSlide>
    })
  }

  return (
      <div className="navigator">
        {renderNavSlides()}
        <div className='navigator__canvas'>
          <View   className="navigator__canvas__scene" >
              <Suspense fallback={null}>
                <fog attach="fog" args={['#101010',15, 25]} />
                <ambientLight />
                <pointLight position={[-10, 20, 10]} intensity={10} decay={0.2} />
                <pointLight position={[10, -10, 10]} color='white' decay={0.2} />
                <PerspectiveCamera ref={cameraRef} makeDefault fov={40} position={[0, 5, 22]} />    
                <group
                  position={[4, 0, 0]}
                  rotation={[ 0,0,0 ]}>
                  <Logoroom scale={[0.4, 0.4, 0.4]} position={[0, 0, 0]} />
                </group>
              </Suspense>
          </View>
        </div>
      </div>
  )
}

export { Navigator }
