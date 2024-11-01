import classNames from 'classnames'
import useNavigatorStore from '@/stores/navigatorStore'
import _TipCard from '@/styles/components/TipCard.scss'
import Image from 'next/image'
import { IconX } from './icons/x'

const TipCard = ({content, sectionIndex, index }) => {
  
  const currentTip = useNavigatorStore((state) => state.tip)
  const thisTip = `${sectionIndex}|${index}`

  const tipClasses = classNames('Tipcard', {
    'Tipcard--active': thisTip === currentTip
  })

return (
    <div className={tipClasses} id={`Tipcard--${thisTip}`}>
      <button className='Tipcard__close btn' onClick={() => useNavigatorStore.getState().setTip(null)}>
        <IconX />
      </button>
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
      </div>
    </div>  
  )
}

export { TipCard }
