import classNames from 'classnames'
import useNavigatorStore from '@/stores/navigatorStore'
import _TipCard from '@/styles/components/TipCard.scss'
import Image from 'next/image'

const TipCard = ({title, description, sectionIndex, tipIndex }) => {
  
  const currentTip = useNavigatorStore((state) => state.tip)
  const thisTip = `${sectionIndex}|${tipIndex}`

  const tipClasses = classNames('Tipcard', {
    'Tipcard--active': thisTip === currentTip
  })

return (
    <div className={tipClasses} id={`Tipcard--${thisTip}`}>
      <button className='Tipcard__close btn' onClick={() => useNavigatorStore.getState().setTip(null)}>
        <Image
          src="/img/icons/x.svg"
          width={30}
          height={30}
          alt="close icone"
        />
      </button>
      <div className='Tipcard__title'>{title}</div>
      <div className='Tipcard__description'>{description}</div>
    </div>  
  )
}

export { TipCard }
