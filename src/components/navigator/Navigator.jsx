'use client'

import _navigator from '@/styles/components/Navigator.scss'
import { useRef, Suspense } from "react"
import dynamic from 'next/dynamic'
import { NavSlide } from '@/components/navigator/NavSlide'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useIsMobile } from '@/hooks/useIsMobile';
import {Loading} from '@/components/Loading';

const Logoroom = dynamic(() => import('@/components/Logoroom').then((mod) => mod.Logoroom), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false
})


const Navigator = ( { contents }) => {

  const cameraHolderRef = useRef()
  const isMobile = useIsMobile();
  const deviceType = isMobile ? 'mobile' : 'desktop';

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
        <NavSlide
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
                  
                  <ambientLight intensity={1} castShadow/>
                  <pointLight
                    position={[-10, 30, -10]}
                    intensity={1}
                    color="#fff"
                    penumbra={1} 
                    decay={0.2}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={0.1}
                    shadow-camera-far={200}
                    shadow-bias={-0.001}
                  />
                  <pointLight
                    position={[10, 30, 10]}
                    intensity={1}
                    color="#fff"
                    penumbra={1} 
                    decay={0.2}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={0.1}
                    shadow-camera-far={200}
                    shadow-bias={-0.001}
                  />
                  {/* <directionalLight intensity={0.2} position={[0, 30, 0]} shadow-radius={3} castShadow /> */}
                  <fog attach="fog" args={['#1f1b1b', 0, 200]} />

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
                    >
                      <PerspectiveCamera
                        makeDefault
                        fov={40}                  
                      />    
                    </group> 

                <Suspense fallback={<Loading fixed={true} />}>
                  <Logoroom />
                  {/* floor */}
                  <mesh
                    material={new THREE.MeshPhongMaterial({ color: 0x2a2626 })}
                    rotation={[-Math.PI /2, 0, 0]}
                    position={[0,0,0]}
                    castShadow
                    receiveShadow>
                    <planeGeometry args={[3000,3000]}  />
                  </mesh>
                </Suspense>
            </View>
          </div>
          {renderNavSlides()}
        </div>
    </>
  )
}

export { Navigator }
