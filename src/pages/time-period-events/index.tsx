import React from 'react'
import { CircleProvider } from '~context/circle-context'
import Circle from '~components/circle'
import EventSlider from '~components/slider'
import CircleControls from '~components/circle-controls'
import styles from './styles.module.scss'
import 'swiper/css'

const TimePeriodEvents = () => {
  return (
    <CircleProvider>
      <div className={styles.wrapper}>
        <Circle />
        <div>
          <CircleControls />
          <EventSlider />
        </div>
      </div>
    </CircleProvider>
  )
}

export default TimePeriodEvents
