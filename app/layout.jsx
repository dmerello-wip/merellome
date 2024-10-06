import { Layout } from '@/components/Layout'
import SmoothScrolling from "@/components/SmoothScrolling";
import _global from '@/styles/global.scss'

export const metadata = {
  title: 'Diego Merello | UX/UI Design passionate, music enthusiast, proud father', 
  description: 'Personal website of Diego Merello, COO of WIP Italia, musician, designer, recidivist griller. Passionate of creativity and technology and all their mixes.',
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
