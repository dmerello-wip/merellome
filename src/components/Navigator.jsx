'use client'

import _navigator from '@/styles/components/Navigator.scss'
import { useRef, Suspense } from "react"
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useIsMobile } from '@/hooks/useIsMobile';
import { useControls } from 'leva'

const NavSlide = dynamic(() => import('@/components/NavSlide').then((mod) => mod.NavSlide), { ssr: false })
const Logoroom = dynamic(() => import('@/components/Logoroom').then((mod) => mod.Logoroom), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false
})


const Navigator = ( { contents }) => {


  const cameraHolderRef = useRef()
  const isMobile = useIsMobile();
  const deviceType = isMobile ? 'mobile' : 'desktop';

  /* GUI to test positions */
//   const {
//     levaRotationX, levaRotationY, levaRotationZ, levaPositionX, levaPositionY, levaPositionZ,
//   } = useControls({
//     levaRotationX: 0,levaRotationY: 0,levaRotationZ: 0,levaPositionX: 0,levaPositionY: 0,levaPositionZ: 0
//  });
  

  /* Callback to set Camera from dom scroll */
  const setCamera = (newSettings) => {
    if(cameraHolderRef.current) {
      cameraHolderRef.current.position.set(
        newSettings.positionX,
        newSettings.positionY,
        newSettings.positionZ
      )
      cameraHolderRef.current.rotation.set(
        THREE.MathUtils.degToRad(newSettings.rotationX),
        THREE.MathUtils.degToRad(newSettings.rotationY),
        THREE.MathUtils.degToRad(newSettings.rotationZ)
      )
    }
  }


  /* dom slides render */
  const renderNavSlides = () => {

    return contents.slides.map((el, i) => {
      const initialCameraSet = el.camera[deviceType];
      const targetCameraSet = (i === contents.slides.length - 1) 
          ? el.camera[deviceType] 
          : contents.slides[i + 1].camera[deviceType];
      return (
<       NavSlide
          key={`slide-${i}`}
          slideIndex={i}
          title={el.title}
          description={el.description}
          tips={el.tips}
          cameraStartSettings={initialCameraSet}
          cameraEndSettings={targetCameraSet}
          setCamera={setCamera}
         />
      )
    })
  }

  return (
    <>
      <div className="navigator">
        <div className='navigator__canvas'>
          <View className="navigator__canvas__scene" >
              <Suspense fallback={null}>
                
                {/* ambient light */}
                <ambientLight intensity={1} />
                <pointLight position={[20, 20, 20]} intensity={1} decay={0.2} />
                <pointLight position={[-20, 20, -20]} intensity={2} decay={0.2} />

                {/* camera inside a group to sert rotation on its own axis */}
                <group
                  ref={cameraHolderRef}
                  position={[
                      contents.slides[0].camera[deviceType].positionX, 
                      contents.slides[0].camera[deviceType].positionY, 
                      contents.slides[0].camera[deviceType].positionZ
                    ]} 
                  rotation={[
                    THREE.MathUtils.degToRad(contents.slides[0].camera[deviceType].rotationX), 
                    THREE.MathUtils.degToRad(contents.slides[0].camera[deviceType].rotationY), 
                    THREE.MathUtils.degToRad(contents.slides[0].camera[deviceType].rotationZ)
                  ]}
                  // position={[
                  //   levaPositionX, levaPositionY, levaPositionZ
                  // ]} 
                  // rotation={[
                  //   THREE.MathUtils.degToRad(levaRotationX), THREE.MathUtils.degToRad(levaRotationY), THREE.MathUtils.degToRad(levaRotationZ)
                  // ]}
                  >
                    <PerspectiveCamera
                      makeDefault
                      fov={40}                  
                    />    
                  </group> 

                  <Logoroom />

              </Suspense>
          </View>
        </div>
        {renderNavSlides()}
      </div>
    </>
  )
}

export { Navigator }
