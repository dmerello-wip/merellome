import classNames from 'classnames'
import _loader from '@/styles/loader.scss'

const Loader = ({fixed = false}) => {

  const wrapperClass = classNames('loader', { 'loader--fixed': fixed });

return (
    <div className={wrapperClass} >
      <div className="loader__border">
        <div className="loader__core"></div>
      </div>  
    </div>  
  )
}

export { Loader }
