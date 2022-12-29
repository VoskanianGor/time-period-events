import React, { useLayoutEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import styles from './styles.module.scss'

interface IEvent {
  year: number
  description: string
}

const Event: FC<IEvent> = ({ year, description }) => {
  return (
    <div className={styles.event}>
      <div className={styles.year}>{year}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default Event
