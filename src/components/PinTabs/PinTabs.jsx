import _PinTabs from '@/styles/components/PinTabs/PinTabs.scss'
import _Moire from '@/styles/components/Moire.scss'
import _Typo from '@/styles/basics/Typography.scss'
import { SlidingTitle } from '@/components/SlidingTitle';
import Image from 'next/image'

const PinTabs = () => {

return (
    <div className="PinTabs">
      <SlidingTitle content={"a method"} />
      <div className="PinTabs__wrapper">


        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>01.</em> Discovery
          </h2>
          <div className="PinTabs__tab__content">
              <div className='PinTabs__tab__content__figure moire__text'></div>
              <div className='PinTabs__tab__content__text'>
                <div className='PinTabs__tab__content__text__description'>
                  <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                  <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
                </div>
                <div className='PinTabs__tab__content__text__highlight'>
                  <p className='txt-lg'>Empathy is the key, dialogue and data analysis are the method.</p>
                </div>
              </div>
          </div>
        </div>


        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>02.</em> Mapping
          </h2>
          <div className="PinTabs__tab__content">
              <div className="PinTabs__tab__content__figure moire__diag-r-lines transparent"></div>
              <div className='PinTabs__tab__content__text'>
                <div className='PinTabs__tab__content__text__description'>
                  <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                  <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
                </div>
                <div className='PinTabs__tab__content__text__highlight'>
                  <p className='txt-lg'>Experience mapping is almost like magic: it’s as if the project has always been there, just waiting to be uncovered.</p>
                </div>
            </div>
          </div>
        </div>


        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>03.</em> Explore
          </h2>
          <div className="PinTabs__tab__content">
              <div className="PinTabs__tab__content__figure moire__dots"></div>
              <div className='PinTabs__tab__content__text'>
                <div className='PinTabs__tab__content__text__description'>
                  <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                  <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
                </div>
                <div className='PinTabs__tab__content__text__highlight'>
                  <p className='txt-lg'>Exploration needs pragmatism: focus is not detail, but distinctiveness.</p>
                </div>
              </div>
          </div>
        </div>


        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>04.</em> Refine
          </h2>
          <div className="PinTabs__tab__content">
              <div className="PinTabs__tab__content__figure moire__dots moire__dots--moving transparent"></div>
              <div className='PinTabs__tab__content__text'>
                <div className='PinTabs__tab__content__text__description'>
                  <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                  <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
                </div>
                <div className='PinTabs__tab__content__text__highlight'>
                  <p className='txt-lg'>UI and interaction Design: where the product begins to be familiar.</p>
                </div>
              </div>
          </div>
        </div>


        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>05.</em> Iterate
          </h2>
          <div className="PinTabs__tab__content">
              <div className="PinTabs__tab__content__figure">
                  <Image 
                    src='/img/elisava.jpg'
                    width={500}
                    height={300}
                    loading='lazy'
                    alt='elisava'
                    style={{objectFit: 'cover', width: '100%', height: '100%'}}
                  />
              </div>
              <div className='PinTabs__tab__content__text'>
                <div className='PinTabs__tab__content__text__description'>
                  <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                  <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
                </div>
                <div className='PinTabs__tab__content__text__highlight'>
                  <p className='txt-lg'>A digital product is born.<br/>But improvement is an everyday process.</p>
                </div>
              </div>
          </div>        
        </div>


      </div>
    </div>  
  )
}

export { PinTabs }
