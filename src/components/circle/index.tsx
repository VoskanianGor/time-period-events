import React from 'react'
import { useCircleContext } from '~context/circle-context'
import Years from '~components/years'
import CircleOutline from './circle-outline'
import Point from './point'
import styles from './styles.module.scss'
import useWindowSize from '~hooks/use-window-size'

const Circle = () => {
  const {
    points,
    rotate,
    activeTimePeriod,
    circleRef,
    onPointClick,
    timePeriods,
  } = useCircleContext()

  const { isMatchWith } = useWindowSize({ matchWith: 768 })

  return (
    <div className={styles.wrapper}>
      <Years />
      {!isMatchWith && (
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
      )}
    </div>
  )
}

export default Circle
