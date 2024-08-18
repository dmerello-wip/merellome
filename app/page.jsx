import { NavThree } from "@/components/canvas/NavThree"
import { TempSpacer } from "@/components/dom/TempSpacer"


import _navigator from '@/styles/navigator.scss'

export default function Page() {
  return (
    <>
      <div className="navigator">
        <div className="navigator__content">
          <TempSpacer>spacer 1</TempSpacer>
          <TempSpacer>spacer 2</TempSpacer>
          <TempSpacer>spacer 3</TempSpacer>
          <TempSpacer>spacer 4</TempSpacer>
          <TempSpacer>spacer 5</TempSpacer>
          <TempSpacer>spacer 6</TempSpacer>
        </div>
        <div className='navigator__canvas'>
          <NavThree />
        </div>
      </div>
        <TempSpacer>spacer outside 1</TempSpacer>
        <TempSpacer>spacer outside 2</TempSpacer>
    </>
  )
}
