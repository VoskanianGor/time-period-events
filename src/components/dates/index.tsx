import React, { useState } from 'react'
import type { FC } from 'react'
import styles from './styles.module.scss'
import { useGlobalState } from '~hooks/use-global-state'
import CountUp from 'react-countup'

interface IYears {
  years: [number, number]
}

const Years: FC<IYears> = ({ years }) => {
  const [start, end] = years

  return (
    <div className={styles.years}>
      <CountUp
        className={styles.start}
        start={start - 10}
        end={start}
        duration={1}
      />
      <CountUp className={styles.end} start={end - 10} end={end} duration={1} />
    </div>
  )
}

export default Years
