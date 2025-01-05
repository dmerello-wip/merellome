import _Moire from '@/styles/components/Moire.scss'
import _Typo from '@/styles/basics/Typography.scss'
import classNames from 'classnames';
import Image from 'next/image'


const PinTab = ({id, data}) => {

  
  const figureClasses = classNames('PinTabs__tab__content__figure', {
    'moire__text' : data.figure.type === 'text',
    'moire__diag-r-lines' : data.figure.type === 'diagonals',
    'moire__dots' : data.figure.type === 'dots',
    'moire__dots moire__dots--moving' : data.figure.type === 'dots-animation',
    'transparent' : data.figure.transparent,
  });

return (
        <div className="PinTabs__tab">
          <h2 className="PinTabs__tab__title heading-1">
            <em>0{id+1}.</em> {data.title}
          </h2>
          <div className="PinTabs__tab__content">
            <div className={figureClasses}>
              {data.figure.type === 'image' && 
                <Image 
                  src={data.figure.src}
                  width={500}
                  height={300}
                  loading='lazy'
                  alt={data.figure.alt}
                  style={{objectFit: 'cover', width: '100%', height: '100%'}}
                />
              }
            </div>
              <div className='PinTabs__tab__content__text'>
                <div className='PinTabs__tab__content__text__description'>
                  {data.description}
                </div>
                <div className='PinTabs__tab__content__text__highlight'>
                  <p className='heading-2'>{data.highlight}</p>
                </div>
              </div>
          </div>
        </div>
  )
}

export { PinTab }
