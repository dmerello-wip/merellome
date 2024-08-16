'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'

const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='loading'>
      loading
    </div>
  ),
})

export default function Page() {
  return (
    <div className='container'>
      <View orbit style={{ width: '100vw', height: '100vh' }}>
          <Suspense fallback={null}>
            <color attach='background' args={['lightpink']} />
            <ambientLight />
            <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
            <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
            <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
            <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
          </Suspense>
      </View>
    </div>
    
  )
}
