import React, { createContext, useContext } from 'react'
import type FCC from '~interfaces/fcc'
import useCirclePoints from '~hooks/use-circle-points'
import TOnPointClick from '~interfaces/t-on-point-click'
import ITimePeriod from '~interfaces/i-time-period'
import ICords from '~interfaces/i-cords'
import generateRandomPeriods from '~utils/generate-random-periods'

interface ICircleContext {
  timePeriods: ITimePeriod[]
  points?: ICords[]
  circleRef: React.RefObject<HTMLDivElement>
  onPointClick: TOnPointClick
  setActiveTimePeriod: (activeTimePeriod: number) => void
  activeTimePeriod: number
  rotate: number
}

const timePeriods = generateRandomPeriods()

const CircleContext = createContext<ICircleContext>({} as ICircleContext)

const CircleProvider: FCC = ({ children }) => {
  const {
    points,
    circleRef,
    rotate,
    onPointClick,
    activeTimePeriod,
    setActiveTimePeriod,
  } = useCirclePoints(timePeriods)

  return (
    <CircleContext.Provider
      value={{
        timePeriods,
        points,
        rotate,
        circleRef,
        onPointClick,
        activeTimePeriod,
        setActiveTimePeriod,
      }}
    >
      {children}
    </CircleContext.Provider>
  )
}

const useCircleContext = () => {
  const context = useContext(CircleContext)

  if (context === undefined) {
    throw new Error('useCircleContext must be used within a CircleProvider')
  }

  return context
}

export { CircleProvider, useCircleContext }
