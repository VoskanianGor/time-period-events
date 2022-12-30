import React from 'react'
import { CircleProvider } from '~context/circle-context'
import Circle from '~components/circle'
import EventSlider from '~components/slider'
import CircleControls from '~components/circle-controls'
import styles from './styles.module.scss'

const TimePeriodEvents = () => {
  return (
    <CircleProvider>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <p>Исторические</p>
          <p>даты</p>
        </h1>
        <Circle />
        <div className={styles.footer}>
          <CircleControls />
          <EventSlider />
        </div>
      </div>
    </CircleProvider>
  )
}

export default TimePeriodEvents
