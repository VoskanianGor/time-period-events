import React from 'react'
import Circle from '~components/circle'
import EventSlider from '~components/slider'
import timePeriods from './data'
import styles from './styles.module.scss'
import 'swiper/css'

const TimePeriodEvents = () => {
  return (
    <div className={styles.wrapper}>
      <Circle timePeriods={timePeriods} />
      <EventSlider events={timePeriods[0].events} />
    </div>
  )
}

export default TimePeriodEvents
