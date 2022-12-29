import React, { useLayoutEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import useCirclePoints from '~hooks/use-circle-points'
import CircleOutline from './circle-outline'
import Dates from '~components/dates'
import Point from './point'
import styles from './styles.module.scss'

interface ICircle {
  timePeriods: any[]
}

const Circle: FC<ICircle> = ({ timePeriods }) => {
  const { points, rotate, activePoint, circleRef, onPointClick } =
    useCirclePoints(timePeriods)

  return (
    <div className={styles.wrapper}>
      <Dates />
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
