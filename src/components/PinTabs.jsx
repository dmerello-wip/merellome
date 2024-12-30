import _PinTabs from '@/styles/components/PinTabs.scss'

const PinTabs = () => {

return (
    <div className="PinTabs">
      <div className="PinTabs__wrapper">
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>01.</em> Discover
          </h2>
          <div className="PinTabs__tab__content">
            Discover interactive view here...
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>02.</em> Map
          </h2>
          <div className="PinTabs__tab__content">
            Map interactive view here...
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
