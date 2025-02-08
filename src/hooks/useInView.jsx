import { useEffect, useRef, useState } from 'react'

export const useInView = (options = {}) => {
  const elementRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, {
      threshold: options.threshold || 0,
      rootMargin: options.rootMargin || '0px'
    })

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options.threshold, options.rootMargin])

  return [elementRef, isInView]
}