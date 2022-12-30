import React, { useLayoutEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import type ITimePeriod from '~interfaces/i-time-period'
import useCirclePoints from '~hooks/use-circle-points'
import Years from '~components/years'
import CircleOutline from './circle-outline'
import Point from './point'
import styles from './styles.module.scss'

interface ICircle {
  timePeriods: ITimePeriod[]
}

const Circle: FC<ICircle> = ({ timePeriods }) => {
  const { points, rotate, activeTimePeriod, circleRef, onPointClick } =
    useCirclePoints(timePeriods)
  const years = timePeriods[activeTimePeriod].years

  return (
    <div className={styles.wrapper}>
      <Years years={years} />
      <div
        className={styles.circle}
        ref={circleRef}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <CircleOutline />
        {points?.map((cords, index) => (
          <Point
            key={index}
            index={index}
            category={timePeriods[index].category}
            cords={cords}
            isActive={index === activeTimePeriod}
            circleRotate={rotate}
            onPointClick={onPointClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Circle
