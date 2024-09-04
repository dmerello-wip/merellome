'use client'


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Eyeglasses(props) {
  const { nodes, materials } = useGLTF('/models/eyeglasses.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        scale={[3, 3, 3]}
        rotation={[Math.PI / 9, Math.PI / 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/eyeglasses.glb')
