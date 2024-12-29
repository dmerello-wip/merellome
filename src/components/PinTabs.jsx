import _PinTabs from '@/styles/components/PinTabs.scss'

const PinTabs = () => {

return (
    <div className="PinTabs">
      <div className="PinTabs__wrapper">
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            Discover
          </h2>
          <div className="PinTabs__tab__content">
            Discover interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            Map
          </h2>
          <div className="PinTabs__tab__content">
            Map interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            Explore
          </h2>
          <div className="PinTabs__tab__content">
            Explore interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            Refine
          </h2>
          <div className="PinTabs__tab__content">
            Refine interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            Iterate
          </h2>
          <div className="PinTabs__tab__content">
            Iterate interactive view here...
          </div>
        </div>
      </div>
    </div>  
  )
}

export { PinTabs }
