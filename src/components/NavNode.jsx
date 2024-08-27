'use client'

import { useState } from 'react'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const NavNode = ({position, color, size}) => {
  // const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
      <mesh position={position}
        // onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>

         
        
        {/* <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial wireframe color={color} />   */}
             
        <sphereGeometry args={[size, 12, 12]} />
        <MeshDistortMaterial wireframe roughness={0.5}  factor={10} speed={2} color={hovered ? '#333' : color}/>   

        {/* <boxGeometry args={[size,size,size]} />
        <meshBasicMaterial wireframe color={color} /> */}
      </mesh>
  )
} 
