import React from 'react'
import Circle from '~components/circle'
import EventSlider from '~components/slider'
import { useGlobalState } from '~hooks/use-global-state'
import timePeriods from './data'
import styles from './styles.module.scss'
import 'swiper/css'

const TimePeriodEvents = () => {
  const [activeTimePeriod] = useGlobalState('activeTimePeriod')
  const events = timePeriods[activeTimePeriod].events

  return (
    <div className={styles.wrapper}>
      <Circle timePeriods={timePeriods} />
      <EventSlider events={events} />
    </div>
  )
}

export default TimePeriodEvents
