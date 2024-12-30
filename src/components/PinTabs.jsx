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
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div
                className='grid-3x3__item moire__text'
                  style={{gridRow: '1/4', gridColumn: '3/4'}}>
                    {[...Array(200)].map((_, i) => <span key={`moire_text_1_${i}`}>design is... </span>)}
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
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className="grid-3x3__item moire__diag-r-lines"
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
            <div className="grid-3x3">
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className='grid-3x3__item'></div>
              <div className="grid-3x3__item moire__diag-l-lines"
                    style={{gridRow: '1/4', gridColumn: '3/4'}}>
              </div>
            </div>
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>04.</em> Refine
          </h2>
          <div className="PinTabs__tab__content">
            
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>05.</em> Iterate
          </h2>
          <div className="PinTabs__tab__content">
            Iterate Iterate Iterate Iterate Iterate Iterate
          </div>
        </div>
      </div>
    </div>  
  )
}

export { PinTabs }
