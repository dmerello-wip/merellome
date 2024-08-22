'use client'

import { Suspense, useRef, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/dom/Loader'

const NavNode = dynamic(() => import('@/components/canvas/NavNode').then((mod) => mod.NavNode), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <Loader /> 
  ),
})


export const NavThree = ({ rotation }) => {

  const nodeRef = useRef();


  useEffect(() => {
    if(nodeRef.current) {
    nodeRef.current.rotation.x = rotation
    }
  }, [rotation]);


  return (
   <View className="navigator__canvas__scene" >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
        <PerspectiveCamera makeDefault fov={40} position={[0, 0, 14]} />
        <group ref={nodeRef}>
            <NavNode position={[0, -2, 0]}/>
            <NavNode position={[0, 0, 0]}/>
            <NavNode position={[0, 2, 0]}/>
        </group>
      </Suspense>
  </View>
  )
} 
