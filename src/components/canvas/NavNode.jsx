'use client'

import { useState } from 'react'
import { useCursor, MeshDistortMaterial, MeshWobbleMaterial, Sphere } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const NavNode = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial factor={10} speed={2} color={hovered ? 'hotpink' : '#1fb2f5'} />
      {/* <MeshDistortMaterial roughness={0.1} color={hovered ? 'hotpink' : '#1fb2f5'} /> */}
    </mesh>
  )
} 
