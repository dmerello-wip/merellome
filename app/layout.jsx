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
      <head />
      <body>

        <SmoothScrolling>
          <Layout>{children}</Layout>
        </SmoothScrolling>
        
      </body>
    </html>
  )
}
