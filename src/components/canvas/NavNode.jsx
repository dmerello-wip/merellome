'use client'

import { useState } from 'react'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const NavNode = ({position}) => {
  // const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
      <mesh position={position}
        // onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial roughness={0.5}  factor={10} speed={2} color={hovered ? '#333' : '#555'}/>
       
      </mesh>
  )
} 
