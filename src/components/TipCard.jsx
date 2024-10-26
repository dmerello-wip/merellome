import classNames from 'classnames'

const TipCard = ({id,title, description }) => {

  const wrapperClass = classNames('Tipcard');

return (
    <div className={wrapperClass} id={`tipcard-${id}`}>
      <div className='Tipcard__title'>{title}</div>
      <div className='Tipcard__description'>{description}</div>
    </div>  
  )
}

export { TipCard }
