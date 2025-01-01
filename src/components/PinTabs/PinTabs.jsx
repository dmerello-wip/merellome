import _PinTabs from '@/styles/components/PinTabs/PinTabs.scss'
import _Moire from '@/styles/components/Moire.scss'
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
              <div className='gr3x3__item'
                  style={{gridRow: '1/2', gridColumn: '1/3'}}>
                <Image
                  src="/img/elisava.jpg"
                  alt="Elisava"
                  width={800}
                  height={400}
                  style={{ width: '100%',  height: '100%', objectFit:"cover" }} 
                />
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '1/2'}}>
                <p className='txt-lg'>Empathy is the key, dialogue and data analysis are the method.</p>
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '2/3'}}>
                <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
              </div>
              <div
                className='gr3x3__item moire__text'
                  style={{gridRow: '1/4', gridColumn: '3/4'}}>
                    {[...Array(200)].map((_, i) => <span key={`moire_text_1_${i}`}>Design_Design</span>)}
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
              <div className='gr3x3__item'
                  style={{gridRow: '1/2', gridColumn: '1/3'}}>
                <Image
                  src="/img/elisava.jpg"
                  alt="Elisava"
                  width={800}
                  height={400}
                  style={{ width: '100%',  height: '100%', objectFit:"cover" }} 
                />
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '1/2'}}>
                <p className='txt-lg'>Experience mapping is almost like magic: it’s as if the project has always been there, just waiting to be uncovered.</p>
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '2/3'}}>
                <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
              </div>
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
              <div className='gr3x3__item'
                  style={{gridRow: '1/2', gridColumn: '1/3'}}>
                <Image
                  src="/img/elisava.jpg"
                  alt="Elisava"
                  width={800}
                  height={400}
                  style={{ width: '100%',  height: '100%', objectFit:"cover" }} 
                />
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '1/2'}}>
                <p className='txt-lg'>Exploration needs pragmatism: focus is not detail, but distinctiveness.</p>
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '2/3'}}>
                <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
              </div>
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
            <div className="gr3x3">
              <div className='gr3x3__item'
                  style={{gridRow: '1/2', gridColumn: '1/3'}}>
                <Image
                  src="/img/elisava.jpg"
                  alt="Elisava"
                  width={800}
                  height={400}
                  style={{ width: '100%',  height: '100%', objectFit:"cover" }} 
                />
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '1/2'}}>
                <p className='txt-lg'>UI and interaction Design: where the product begins to be familiar.</p>
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '2/3'}}>
                <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
              </div>
              <div className="gr3x3__item moire__diag-l-lines"
                    style={{gridRow: '1/4', gridColumn: '3/4'}}>
              </div>
            </div>
          </div>
        </div>
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title">
            <em>05.</em> Iterate
          </h2><div className="PinTabs__tab__content">
            <div className="gr3x3">
              <div className='gr3x3__item'
                  style={{gridRow: '1/2', gridColumn: '1/3'}}>
                <Image
                  src="/img/elisava.jpg"
                  alt="Elisava"
                  width={800}
                  height={400}
                  style={{ width: '100%',  height: '100%', objectFit:"cover" }} 
                />
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '1/2'}}>
                <p className='txt-lg'>A digital product is born.<br/>But improvement is an everyday process.</p>
              </div>
              <div className='gr3x3__item'
                  style={{gridRow: '2/4', gridColumn: '2/3'}}>
                <p>Interviews, Workshops, collaborative Design Thinking, User Testing on existing products, Pain Points Meetings ... these are some of the tools i love to use in this first Discovery Phase.</p>
                <p>Once a brief is received from the Business or Marketing department, I try to open a dialogue with Customer Care and the IT department. This helps me to explore the needs and solutions they provide daily to end users and identify potential technical action boundaries. </p><p>Everything then starts again by engaging with end users, who help us redefine everything with realism and a genuine discovery-driven approach.</p>
              </div>
              <div className="gr3x3__item moire__diag-l-lines"
                    style={{gridRow: '1/4', gridColumn: '3/4'}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export { PinTabs }
