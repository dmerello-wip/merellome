'use client'


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Bass(props) {
  const { nodes, materials } = useGLTF('/models/bass.glb')
  const { solarized } = props;
  const material = (solarized) ? new THREE.MeshToonMaterial() : nodes.mesh_0.material;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={material}
        position={[-2, 0, 0]}
        scale={[5, 5, 5]}
        rotation={[0, Math.PI/9, Math.PI/2]}
      />
    </group>
  )
}

useGLTF.preload('/models/bass.glb')
