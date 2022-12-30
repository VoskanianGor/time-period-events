import { useState, useRef, useLayoutEffect } from 'react'
import ICords from '~interfaces/i-cords'
import placePointsOnCircle from '~utils/place-points-on-circle'
import { useGlobalState } from './use-global-state'

const useCirclePoints = (timePeriods: any[]) => {
  const [points, setPoints] = useState<ICords[]>()
  const [rotate, setRotate] = useState(-45)
  const [activeTimePeriod, setActiveTimePeriod] =
    useGlobalState('activeTimePeriod')
  const circleRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const circleWidth = circleRef.current?.offsetWidth || 0

    setPoints(placePointsOnCircle(timePeriods.length, circleWidth))
  }, [setPoints, timePeriods.length, circleRef])

  const onPointClick = (rotate: number, index: number) => {
    setRotate(-rotate - 45)
    setActiveTimePeriod(index)
  }

  return {
    points,
    circleRef,
    rotate,
    onPointClick,
    activeTimePeriod,
  }
}

export default useCirclePoints
