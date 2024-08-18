'use client'

import _NavThree  from '@/styles/NavThree.scss'

import { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { NavNode } from '@/components/canvas/NavNode'
import dynamic from 'next/dynamic'


const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='loading'>
      loading
    </div>
  ),
})
export const NavThree = ({ ...props }) => {
  return (
   <View  style={{ width: '100vw', height: '100vh' }}>
          <Suspense fallback={null}>
            <color attach='background' args={['lightpink']} />
            <ambientLight />
            <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
            <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
            <PerspectiveCamera makeDefault fov={40} position={[0, 0, 14]} />
            <NavNode />
          </Suspense>
      </View>
  )
} 
