import { Layout } from '@/components/Layout'
import SmoothScrolling from "@/components/SmoothScrolling";
import _global from '@/styles/global.scss'

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}

        <SmoothScrolling>
          <Layout>{children}</Layout>
        </SmoothScrolling>
        
      </body>
    </html>
  )
}
