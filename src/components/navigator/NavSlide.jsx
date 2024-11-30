import _NavSlide from '@/styles/components/NavSlide.scss'

import { Card } from '@/components/Card'
import { NavTrigger } from '@/components/navigator/NavTrigger'
import { SplittedText } from '@/components/SplittedText'

const NavSlide = (props) => {

  const { title, description, tips, cameraStartSettings, cameraEndSettings, slideIndex, setCamera } = props;

  /* -------------------- render -------------------- */

  return (
    <div className="navSlide" id={`slide-${slideIndex}`}>
      <NavTrigger 
        cameraStartSettings={cameraStartSettings}
        cameraEndSettings={cameraEndSettings}
        slideIndex={slideIndex}
        setCamera={setCamera}
      />
      <div className="navSlide__content">
        <div className="navSlide__content__card">
          <div className='navSlide__content__card__title'>
            <h2><SplittedText contentString={title} /></h2>
          </div>
          <div className='navSlide__content__card__description' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className='navSlide__content__tips'>
          {tips.map((tip,i) => {
            return (
              <Card
                id={`${slideIndex}|${i}`}
                key={`tip-${i}`}
                image={tip.image}
                title={tip.title}
                description ={tip.description}
                link={tip.link}
                // closeAction={()=> setTip(null)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )

}



export { NavSlide }
