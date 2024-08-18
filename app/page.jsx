

import { NavThree } from "@/components/canvas/NavThree"
import { TempSpacer } from "@/components/dom/TempSpacer"

export default function Page() {
  return (
    <div className="home">
      <div className='threenav'>
        <NavThree />
      </div>
      <TempSpacer>spacer 1</TempSpacer>
      <TempSpacer>spacer 2</TempSpacer>
      <TempSpacer>spacer 3</TempSpacer>
      <TempSpacer>spacer 4</TempSpacer>
      <TempSpacer>spacer 5</TempSpacer>
      <TempSpacer>spacer 6</TempSpacer>
    </div>
  )
}
