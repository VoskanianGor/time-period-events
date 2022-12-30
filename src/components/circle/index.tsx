import React, { useLayoutEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import useCirclePoints from '~hooks/use-circle-points'
import { getGlobalState } from '~hooks/use-global-state'
import Years from '~components/years'
import CircleOutline from './circle-outline'
import Point from './point'
import styles from './styles.module.scss'

interface ICircle {
  timePeriods: any[]
}

const Circle: FC<ICircle> = ({ timePeriods }) => {
  const activeTimePeriod = getGlobalState('activeTimePeriod')
  const { points, rotate, activePoint, circleRef, onPointClick } =
    useCirclePoints(timePeriods)

  return (
    <div className={styles.wrapper}>
      <Years years={timePeriods[activeTimePeriod].years} />
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
            cords={cords}
            isActive={index === activePoint}
            circleRotate={rotate}
            onPointClick={onPointClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Circle
