'use client'


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bass(props) {
  const { nodes, materials } = useGLTF('/models/bass.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        scale={[5, 5, 5]}
        rotation={[0, Math.PI/9, Math.PI/2]}
      />
    </group>
  )
}

useGLTF.preload('/models/bass.glb')
