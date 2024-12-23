import classNames from 'classnames'
import _loading from '@/styles/components/loading.scss'
import { useEffect } from 'react';

const Loading = ({fixed = false}) => {

  const wrapperClass = classNames('loading', { 'loading--fixed': fixed });

  useEffect(()=>{
    console.log("loader inited");
  }, [])

return (
    <div className={wrapperClass} >
      <div className="loading__border">
        <div className="loading__core"></div>
      </div>  
    </div>  
  )
}

export { Loading }
