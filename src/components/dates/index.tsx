import React from 'react'
import type { FC } from 'react'
import styles from './styles.module.scss'

interface IYears {
  years: [number | string, number | string]
}

const Years: FC<IYears> = ({ years }) => {
  const [start, end] = years

  return (
    <div className={styles.years}>
      <div className={styles.start}>{start}</div>
      <div className={styles.end}>{end}</div>
    </div>
  )
}

export default Years
