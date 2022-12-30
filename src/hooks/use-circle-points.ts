import { useState, useRef, useLayoutEffect } from 'react'
import ICords from '~interfaces/i-cords'
import type TOnPointClick from '~interfaces/t-on-point-click'
import placePointsOnCircle from '~utils/place-points-on-circle'

const useCirclePoints = (timePeriods: any[]) => {
  const [points, setPoints] = useState<ICords[]>([])
  const [rotate, setRotate] = useState(-45)
  const [activeTimePeriod, setActiveTimePeriod] = useState(0)
  const circleRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const circleWidth = circleRef.current?.offsetWidth || 0

    setPoints(placePointsOnCircle(timePeriods.length, circleWidth))
  }, [setPoints, timePeriods.length, circleRef])

  const onPointClick: TOnPointClick = (rotate, index) => {
    setRotate(-rotate - 45)
    setActiveTimePeriod(index)
  }

  return {
    points,
    circleRef,
    rotate,
    onPointClick,
    activeTimePeriod,
    setActiveTimePeriod,
  }
}

export default useCirclePoints
