import _NavSlide from '@/styles/NavSlide.scss'

const NavSlide = (props) => {

  const { title, description, children } = props;

  return (
    <div className="navSlide">
      <div className='navSlide__content'>
        <div className='navSlide__content__title'>
          {title}
        </div>
        <div className='navSlide__content__description'>
          {description}
        </div>
        {children}
      </div>
    </div>
  )
}

export { NavSlide }
