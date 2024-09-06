'use client'


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Office(props) {
  const { nodes, materials } = useGLTF('/models/office.glb')
  return (
    <group {...props} dispose={null} >
      <group position={[-1.307, 0.696, -0.275]} rotation={[0, 0.194, 0]} scale={[1, 0.701, 0.834]}>
        <group
          position={[0, -0.941, 0.152]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[-1, -0.049, -0.804]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.black}
          />
        </group>
        <group
          position={[0, 0.015, -0.792]}
          rotation={[-1.766, 0, -Math.PI]}
          scale={[-1, -0.022, -0.951]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.black}
          />
        </group>
      </group>
      <group position={[0.071, 0.018, -0.43]} scale={[0.163, 0.014, 0.362]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['dark-grey']}
        />
      </group>
      <group
        position={[1.303, 1.565, -0.966]}
        rotation={[0, -0.121, 0]}
        scale={[1.405, 1.096, 0.401]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.metal}
          position={[0.019, -0.234, 0.049]}
          rotation={[0.179, 0, 0]}
          scale={[0.173, 0.737, 0.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.metal}
          position={[0.013, -0.951, -0.241]}
          scale={[0.386, 0.103, 0.559]}
        />
        <group
          position={[-0.006, 0.135, 0.447]}
          rotation={[-1.867, 0, Math.PI]}
          scale={[-0.971, -0.074, -0.92]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['metal.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials['black.001']}
          />
        </group>
      </group>
      <group
        position={[1.448, 0.026, 0.304]}
        rotation={[-Math.PI, 0.075, -Math.PI]}
        scale={[-1, -0.019, -0.402]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.white}
        />
      </group>
      <group position={[1.272, 0.072, -1]} scale={[0.667, 0.07, 0.479]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.black}
        />
      </group>
      <group position={[1.272, 0.187, -1]} rotation={[0, 0.086, 0]} scale={[0.667, 0.038, 0.479]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['white.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials.red}
        />
      </group>
      <group position={[1.272, 0.276, -1]} rotation={[0, -0.035, 0]} scale={[0.667, 0.05, 0.479]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['white.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials['red.001']}
        />
      </group>
      <group position={[1.272, 0.4, -1.05]} rotation={[0, 0.181, 0]} scale={[0.667, 0.07, 0.479]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['white.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials['black.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.wood}
        position={[0.008, -0.042, -0.918]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3, -0.028, -3]}
      />
    </group>
  )
}

useGLTF.preload('/models/office.glb')


