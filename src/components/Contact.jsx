'use client'

import _contact from '@/styles/components/Contact.scss'
import dynamic from 'next/dynamic'
import {  PerspectiveCamera, ContactShadows } from '@react-three/drei'
import {Loading} from '@/components/Loading';
import { Wip } from './icons/Wip'
import { Linkedin } from './icons/Linkedin'
// import {Floor} from '@/components/Floor'

const Me = dynamic(() => import('@/components/Me').then((mod) => mod.Me), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false, loading: () => <Loading />
})


const Contact = ( { contents }) => {

  const bgcolor = '#1f1b1b';

  return (
      <div className="Contact">
        <div className="Contact__content">
          <div className="Contact__content__title">
            And that&#39;s all folks!
          </div>
          <div className="Contact__content__actions">
            <a className="btn--text --has-icon" href="https://www.wipitalia.it"  target="_blank">
              <Wip />
              my agency website
            </a>
            <a className="btn--text --has-icon" href="https://www.linkedin.com/in/diegomerello/" target="_blank">
              <Linkedin />
              my linkedin profile
            </a>
          </div>
        </div>
        <View className="Contact__canvas">
              <ambientLight intensity={1} />
              <pointLight
                position={[0, 2, -2]}
                intensity={5}
                color="#eee8dd" 
                decay={1}
              />
              <pointLight
                position={[0, 1, 1]}
                intensity={10}
                color="#eee8dd"
                decay={0.2}
              />
              <PerspectiveCamera fov={40} makeDefault position={[0,1.5,4]} rotation={[-0.15,0,0]} />
              <Me />
              <ContactShadows resolution={512} position={[0, 0, 0]} opacity={1} scale={3} blur={2} far={1.3} />
              <fog attach="fog" args={[bgcolor, 0, 15]} />

              {/* <Floor color={bgcolor}/> */}
        </View>
      </div>
  )
}

export { Contact }
