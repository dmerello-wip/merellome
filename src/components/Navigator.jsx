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
const GetItTouch = dynamic(() => import('@/components/GetItTouch').then((mod) => mod.GetItTouch), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <Loader /> 
  ),
})


const Navigator = ( { contents }) => {


  const cameraHolderRef = useRef()

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
    <>
      <div className="navigator">
        <div className='navigator__canvas'>
          <View   className="navigator__canvas__scene" >
              <Suspense fallback={null}>
                
                {/* ambient light */}
                <ambientLight />
                <pointLight position={[-10, 20, 10]} intensity={2} decay={0.2} />
                <pointLight position={[10, 0, -10]} decay={0.2} />

                {/* camera inside a group to sert rotation on its own axis */}
                <group
                  ref={cameraHolderRef}
                  position={[
                    contents.slides[0].camera.positionX, 
                    contents.slides[0].camera.positionY, 
                    contents.slides[0].camera.positionZ
                  ]} 
                  rotation={[
                    THREE.MathUtils.degToRad(contents.slides[0].camera.rotationX), 
                    THREE.MathUtils.degToRad(contents.slides[0].camera.rotationY), 
                    THREE.MathUtils.degToRad(contents.slides[0].camera.rotationZ)
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
      {/* TODO: move this component outside of Navigator and check if Scrolltrigger works on this */}
      <GetItTouch/>
    </>
  )
}

export { Navigator }
