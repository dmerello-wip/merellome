import _PinTabs from '@/styles/components/PinTabs/PinTabs.scss'
import _Moire from '@/styles/components/Moire.scss'
import _Typo from '@/styles/basics/Typography.scss'
import { SlidingTitle } from '@/components/SlidingTitle';
import { PinTab } from './PinTab';

const PinTabs = ({contents}) => {

return (
    <div className="PinTabs">
      <SlidingTitle content={"a method"} />
      <div className="PinTabs__wrapper">

        {contents.map((item, index) => (
          <PinTab key={index} data={item} id={index}/>
        ))}
      </div>
    </div>  
  )
}

export { PinTabs }
