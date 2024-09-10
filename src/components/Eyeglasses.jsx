'use client'


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Eyeglasses(props) {

  const { nodes, materials } = useGLTF('/models/eyeglasses.glb')
  const { solarized } = props;
  const material = (solarized) ? new THREE.MeshToonMaterial() : nodes.mesh_0.material;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={material}
        scale={[3, 3, 3]}
        rotation={[Math.PI / 9, Math.PI / 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/eyeglasses.glb')
