import _PinTabs from '@/styles/components/PinTabs.scss'
import _Moire from '@/styles/components/Moire.scss'
import _Grid from '@/styles/basics/Grids.scss'

const PinTabs = () => {

return (
    <div className="PinTabs">
      <div className="PinTabs__wrapper">
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>01.</em> Discover
          </h2>
          <div className="PinTabs__tab__content">
             <div className="grid-3x3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div
                className='moire__text'
                  style={{gridRow: '1/4', gridColumn: '3/4'}}>
                    {[...Array(100)].map((_, i) => <span>Discover </span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>02.</em> Map
          </h2>
          <div className="PinTabs__tab__content">
             <div className="grid-3x3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="moire__h-lines"
                    style={{gridRow: '1/4', gridColumn: '3/4'}}>
              </div>
            </div>
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>03.</em> Explore
          </h2>
          <div className="PinTabs__tab__content">
            Explore interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>04.</em> Refine
          </h2>
          <div className="PinTabs__tab__content">
            Refine interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>05.</em> Iterate
          </h2>
          <div className="PinTabs__tab__content">
            Iterateinteractive view here...
          </div>
        </div>
      </div>
    </div>  
  )
}

export { PinTabs }
