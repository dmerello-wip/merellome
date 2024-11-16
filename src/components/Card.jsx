import classNames from 'classnames'
import _Card from '@/styles/components/Card.scss'
import Image from 'next/image'
import { IconX } from './icons/IconX'
import { IconArrowRight } from './icons/IconArrowRight'

const Card = ({image, title, description, link, isActive, closeAction }) => {

  const tipClasses = classNames('Card', {
    'Card--active': isActive
  })

return (
    <div className={tipClasses}>
      <div className='Card__close'>
        {closeAction &&
          <button className="btn--primary" onClick={closeAction}>
            <IconX />
          </button>
        }
      </div>
      {image &&
        <div className='Card__image'>
          <Image 
            src={image.url}
            width={image.width || 500}
            height={image.height || 300}
            loading='lazy'
            alt={image.alt || title}
          />
        </div>
      }
      <div className='Card__content'>
        <div className='Card__content__title'>{title}</div>
        <div className='Card__content__description'>{description}</div>
        {link &&
          <a className='Card__content__link btn--text --has-icon' href={link.url} target='_blank'>
            <IconArrowRight />
            {link.label || 'Read more'}
          </a>
        }
      </div>
    </div>  
  )
}

export { Card }
