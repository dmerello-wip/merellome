'use client'

import { useEffect, useRef, useState } from 'react'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const NavNode = ({ rotation }) => {
  // const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  const nodeRef = useRef(null);

  useEffect(() => {
    nodeRef.current.rotation.y = rotation
    console.log('rotation', rotation)
  }, [rotation]);


  return (
    <group ref={nodeRef}>
      <mesh 
        // onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'yellow'} />
        {/*
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial roughness={0.5}  factor={10} speed={2} color={hovered ? '#333' : '#555'}/>
        */}
      </mesh>
    </group>
  )
} 
