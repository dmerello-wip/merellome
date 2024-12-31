import _PinTabs from '@/styles/components/PinTabs.scss'
import _Moire from '@/styles/components/Moire.scss'
import _Grid from '@/styles/basics/Grids.scss'
import _Typo from '@/styles/basics/Typography.scss'
import Image from 'next/image'

const PinTabs = () => {

return (
    <div className="PinTabs">
      <div className="PinTabs__wrapper">
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>01.</em> Discover
          </h2>
          <div className="PinTabs__tab__content">
            <div className="gr3x3">
              <div className='gr3x3__item gr--1-lg'>
                <p className='txt-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
              <div className='gr3x3__item gr--2-md'>
                <Image
                  src="/img/elisava.jpg"
                  alt="Elisava"
                  fill
                  style={{ width: '100%', height: '100%', objectFit:"cover" }} 
                />
              </div>
              <div className='gr3x3__item'>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. </p>
              </div>
              <div
                className='gr3x3__item moire__text'
                  style={{gridRow: '1/4', gridColumn: '3/4'}}>
                    {[...Array(200)].map((_, i) => <span key={`moire_text_1_${i}`}>Design </span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>02.</em> Map
          </h2>
          <div className="PinTabs__tab__content">
            <div className="gr3x3">
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className="gr3x3__item moire__diag-r-lines"
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
            <div className="gr3x3">
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className='gr3x3__item'></div>
              <div className="gr3x3__item moire__diag-l-lines"
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
