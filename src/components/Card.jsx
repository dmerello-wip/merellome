import classNames from 'classnames'
import _Card from '@/styles/components/Card.scss'
import Image from 'next/image'
import { IconX } from './icons/IconX'
import { IconArrowRight } from './icons/IconArrowRight'
import { useInView } from '@/hooks/useInView'

const Card = ({id, image, title, description, link, isActive, closeAction }) => {
  
  const [elementRef, isInView] = useInView({ threshold: 0.2 })

  const cardClasses = classNames('Card', {
    'Card--active': isActive,
    'Card--linked': link,
    'in-view': isInView
  })

  const CardContent = () => (
    <>
      <div className='Card__close'>
        {closeAction &&
          <button className="btn--primary" onClick={closeAction}  aria-label='Close'>
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
        {link && link.label &&
          <span className='Card__content__link btn--text --has-icon'>
            <IconArrowRight />
            {link.label}
          </span>
        }
      </div>
    </>
  )

  return link ? (
    <a 
      ref={elementRef}
      href={link.url}
      target={link.target || '_blank'}
      className={cardClasses}
      data-id={id}
      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <CardContent />
    </a>
  ) : (
    <div 
      ref={elementRef}
      className={cardClasses}
      data-id={id}>
      <CardContent />
    </div>
  )
}

export { Card }
