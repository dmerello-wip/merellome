import '@/helpers/envConfig'
import { Header } from "@/components/Header"
import { Navigator } from "@/components/Navigator"
import { TempSpacer } from "@/components/TempSpacer"
import { Suspense } from 'react';
import { Loader } from '@/components/Loader'


export default async function Page() {
  
  const slides = await fetch(`${process.env.BASE_URL}/api/navigator`, { next: { tags: ['navigator'] } }).then((res) =>
    res.json()
  )

  return (
    <>
      <Header />

      <Suspense fallback={<Loader fixed={true} />}>
        <Navigator contents={slides} />
        <TempSpacer>1. Contenuto sotto al navigator</TempSpacer>
        <TempSpacer>2. Contenuto sotto al navigator</TempSpacer>
        <TempSpacer>3. Contenuto sotto al navigator</TempSpacer>
        <TempSpacer>4. Contenuto sotto al navigator</TempSpacer>
      </Suspense>

      {/* <Footer /> */}
    </>
  )
}
