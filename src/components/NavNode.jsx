'use client'

import { useState } from 'react'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const NavNode = ({position, rotation, size, color, wired}) => {
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
             
        <sphereGeometry  args={[(hovered) ? size * 1.1 : size, 32, 32]} rotation={rotation}/>
        <MeshDistortMaterial wireframe={wired} roughness={0.2}  distort={0.2} speed={3} color={color}/>
        

        {/* <boxGeometry args={[size,size,size]} />
        <meshBasicMaterial wireframe color={color} /> */}
      </mesh>
  )
} 
