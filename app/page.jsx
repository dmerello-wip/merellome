import '@/helpers/envConfig'
import { Navigator } from "@/components/Navigator"
import { TempSpacer } from "@/components/TempSpacer"



export default async function Page() {

  
const navigatorContents = await fetch(`${process.env.BASE_URL}/api/navigator`, { next: { tags: ['navigator'] } }).then((res) =>
    res.json()
  ) 
 
  return (
    <>
      <Navigator contents={navigatorContents}/>
      <TempSpacer>1. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>2. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>3. Contenuto sotto al navigator</TempSpacer>
      <TempSpacer>4. Contenuto sotto al navigator</TempSpacer>
    </>
  )
}
