import classNames from 'classnames'
import useNavigatorStore from '@/stores/navigatorStore'
import _TipCard from '@/styles/components/TipCard.scss'
import Image from 'next/image'
import { IconX } from './icons/IconX'
import { IconArrowRight } from './icons/IconArrowRight'

const TipCard = ({content, sectionIndex, index }) => {
  
  const currentTip = useNavigatorStore((state) => state.tip)
  const thisTip = `${sectionIndex}|${index}`

  const tipClasses = classNames('Tipcard', {
    'Tipcard--active': thisTip === currentTip
  })

return (
    <div className={tipClasses} id={`Tipcard--${thisTip}`}>
      <div className='Tipcard__close'>
        <button className="btn--primary" onClick={() => useNavigatorStore.getState().setTip(null)}>
          <IconX />
        </button>
      </div>
      <div className='Tipcard__image'>
        <Image 
          src={content.image}
          width={500}
          height={300}
          loading='lazy'
          alt={content.title}
        />
      </div>
      <div className='Tipcard__content'>
        <div className='Tipcard__content__title'>{content.title}</div>
        <div className='Tipcard__content__description'>{content.description}</div>
        {content.link &&
          <a className='Tipcard__content__link btn--text --has-icon' href={content.link.url}>
            <IconArrowRight />
            {content.link.label}
          </a>
        }
      </div>
    </div>  
  )
}

export { TipCard }
