'use client'

import { Suspense, useRef, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import * as THREE from 'three'

const NavNode = dynamic(() => import('@/components/NavNode').then((mod) => mod.NavNode), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <Loader /> 
  ),
})


export const NavThree = ({ rotation, slides}) => {

  const nodeRef = useRef();
  const radius = 5;
  const elementSize = 2;


  useEffect(() => {
    if(nodeRef.current) {
    nodeRef.current.rotation.z = -rotation
    }
  }, [rotation]);

  const renderNodes = () => {
    let baseDegrees = (2 * Math.PI) / slides.length;
    return slides.map((el, i) => {
      let x = ( radius * Math.cos(i * baseDegrees) );
      let y = ( radius * Math.sin(i * baseDegrees) );
      return <NavNode
        key={`node-${i}`}
        position={[x, y, 0]}
        color= {el.color}
        size = {elementSize}
      />;
    });
  };
  return (
   <View className="navigator__canvas__scene" >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 22]} />
        <group ref={nodeRef} rotation={[0,THREE.MathUtils.degToRad(-110),0]}>
          {renderNodes()}
          {/* <mesh>
            <sphereGeometry args={[radius, 10, 10]} />
            <meshBasicMaterial wireframe color={`grey`} />  
          </mesh> */}
        </group>
      </Suspense>
  </View>
  )
} 
