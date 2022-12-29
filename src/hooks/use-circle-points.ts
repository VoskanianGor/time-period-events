import { useState, useRef, useLayoutEffect } from "react"
import ICords from "~interfaces/i-cords"
import placePointsOnCircle from "~utils/place-points-on-circle"


const useCirclePoints = (timePeriods: any[]) => {
  const [points, setPoints] = useState<ICords[]>()
  const [rotate, setRotate] = useState(-45)
  const [activePoint, setActivePoint] = useState(0)
  const circleRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const circleWidth = circleRef.current?.offsetWidth || 0

    setPoints(placePointsOnCircle(timePeriods.length, circleWidth))
  }, [setPoints, timePeriods.length, circleRef])

  const onPointClick = (rotate: number, index: number) => {
    setRotate(-rotate - 45)
    setActivePoint(index)
  }

  return {
    points,
    circleRef,
    rotate,
    onPointClick,
    activePoint,
  }
}

export default useCirclePoints