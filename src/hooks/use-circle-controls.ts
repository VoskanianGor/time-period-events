import { useCircleContext } from '~context/circle-context'
import ICords from '~interfaces/i-cords'
import TOnPointClick from '~interfaces/t-on-point-click'

const useCircleControls = (points: ICords[], onPointClick: TOnPointClick) => {
  const { activeTimePeriod, setActiveTimePeriod } = useCircleContext()

  const currentPeriod = activeTimePeriod + 1
  const periodsCount = points?.length

  const nextActiveTimePeriod = activeTimePeriod + 1
  const prevActiveTimePeriod = activeTimePeriod - 1

  const isNextDisabled = activeTimePeriod === points?.length - 1
  const isPrevDisabled = activeTimePeriod === 0

  const onNext = () => {
    onPointClick(points[nextActiveTimePeriod].r, activeTimePeriod + 1)
    setActiveTimePeriod(nextActiveTimePeriod)
  }

  const onPrev = () => {
    onPointClick(points[prevActiveTimePeriod].r, activeTimePeriod + 1)
    setActiveTimePeriod(prevActiveTimePeriod)
  }

  return {
    onNext,
    onPrev,
    isNextDisabled,
    isPrevDisabled,
    currentPeriod,
    periodsCount,
  }
}

export default useCircleControls
