import { useState, useEffect } from 'react'

interface IWindowSizeReturn {
  width: number
  height: number
  isMatchWith: boolean
}

interface IWindowSizeParams {
  matchWith?: number
}

const useWindowSize = ({
  matchWith = -1,
}: IWindowSizeParams = {}): IWindowSizeReturn => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<IWindowSizeReturn>({
    width: 0,
    height: 0,
    isMatchWith: false,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = window.innerWidth ?? 0
        const height = window.innerHeight ?? 0

        setWindowSize({
          width,
          height,
          isMatchWith: width <= matchWith,
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }

    return void 0
  }, [matchWith])

  return windowSize
}

export default useWindowSize
