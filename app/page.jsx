import '@/helpers/envConfig'
import { Header } from "@/components/Header"
import { Navigator } from "@/components/Navigator"
import { TempSpacer } from "@/components/TempSpacer"
import dynamic from 'next/dynamic'
import { Suspense } from 'react';
import { Loader } from '@/components/Loader'
import { ArticlesSlider } from '@/components/ArticlesSlider'


export default async function Page() {
  
  const slides = await fetch(`${process.env.BASE_URL}/api/navigator`, { next: { tags: ['navigator'] } }).then((res) =>
    res.json()
  )
  
  const articles = await fetch(`${process.env.BASE_URL}/api/articles`, { next: { tags: ['articles'] } }).then((res) =>
    res.json()
  )


  const SlidingTitle = dynamic(() => import('@/components/SlidingTitle').then((mod) => mod.SlidingTitle), { ssr: false })

  return (
    <>
      <Header />

      <Suspense fallback={<Loader fixed={true} />}>
        <Navigator contents={slides} />
      </Suspense>
      <SlidingTitle content={":; readings :; readings"} />
      <ArticlesSlider contents={articles.items} />
      <TempSpacer>1. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>2. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>3. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>4. Contenuto sotto al navigator</TempSpacer>

      {/* <Footer /> */}
    </>
  )
}
