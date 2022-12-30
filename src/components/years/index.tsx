import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import CountUp from 'react-countup'
import styles from './styles.module.scss'

interface IYears {
  years: [number, number]
}

let oldYears = [0, 0]

const Years: FC<IYears> = ({ years }) => {
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
