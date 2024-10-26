import classNames from 'classnames'
import useNavigatorStore from '@/stores/navigatorStore'
import _TipCard from '@/styles/components/TipCard.scss'

const TipCard = ({title, description, sectionIndex, tipIndex }) => {
  
  const currentTip = useNavigatorStore((state) => state.tip)
  const thisTip = `${sectionIndex}|${tipIndex}`

  const tipClasses = classNames('Tipcard', {
    'Tipcard--active': thisTip === currentTip
  })

return (
    <div className={tipClasses} id={`Tipcard--${thisTip}`}>
      <div className='Tipcard__title'>{title}</div>
      <div className='Tipcard__description'>{description}</div>
    </div>  
  )
}

export { TipCard }
