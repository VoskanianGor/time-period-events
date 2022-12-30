import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styles from './styles.module.scss'
import { useCircleContext } from '~context/circle-context'

let oldYears = [0, 0]

const Years = () => {
  const { activeTimePeriod, timePeriods } = useCircleContext()

  const years = timePeriods[activeTimePeriod].years

  useEffect(() => {
    oldYears = years
  }, [years])

  return (
    <div className={styles.years}>
      {years.map((year, index) => (
        <CountUp
          key={index}
          className={styles.year}
          start={oldYears[index] || year}
          end={years[index]}
          duration={1}
        />
      ))}
    </div>
  )
}

export default Years
