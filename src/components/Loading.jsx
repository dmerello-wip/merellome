import classNames from 'classnames'
import _loading from '@/styles/components/loading.scss'
import { useEffect } from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loading = ({fixed = false, isThree}) => {

  const { progress} = useProgress();

  const wrapperClass = classNames('loading', { 'loading--fixed': fixed });

  useEffect(()=>{
    console.log("loader inited");
  }, [])

  const renderLoader = () => {
    return (
      <div className={wrapperClass}>
        <div className="loading__border">
          <div className="loading__core">
          </div>
        </div>
        <div className='loading__progress'> {progress}%</div>
      </div>
    ) 
  }

  return (
    <>
      {isThree ? <Html>{renderLoader()}</Html> : renderLoader()}
    </>
  )
}

export { Loading }
