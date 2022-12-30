import React, { createContext, useContext } from 'react'
import type FCC from '~interfaces/fcc'
import useCirclePoints from '~hooks/use-circle-points'
import generateRandomPeriods from '~utils/generate-random-periods'
import TOnPointClick from '~interfaces/t-on-point-click'
import ITimePeriod from '~interfaces/i-time-period'
import ICords from '~interfaces/i-cords'

interface ICircleContext {
  timePeriods: ITimePeriod[]
  points?: ICords[]
  circleRef: React.RefObject<HTMLDivElement>
  onPointClick: TOnPointClick
  activeTimePeriod: number
  rotate: number
}

const timePeriods = generateRandomPeriods()

const CircleContext = createContext<ICircleContext>({} as ICircleContext)

const CircleProvider: FCC = ({ children }) => {
  const { points, circleRef, rotate, onPointClick, activeTimePeriod } =
    useCirclePoints(timePeriods)

  return (
    <CircleContext.Provider
      value={{
        timePeriods,
        points,
        rotate,
        circleRef,
        onPointClick,
        activeTimePeriod,
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
