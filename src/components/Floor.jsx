'use client'

import * as THREE from 'three'

export function Floor({color}) {
  return (
    <mesh
      material={new THREE.MeshPhongMaterial({ color: color})}
      rotation={[-Math.PI /2, 0, 0]}
      position={[0,0,0]}
      castShadow
      receiveShadow>
      <planeGeometry args={[3000,3000]}  />
    </mesh>
  )
}
