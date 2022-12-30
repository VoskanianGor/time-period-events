import React, { useLayoutEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useSwiperSlide } from 'swiper/react'
import type IEvent from '~interfaces/i-event'
import styles from './styles.module.scss'

const Event: FC<IEvent> = ({ year, description }) => {
  const { isNext } = useSwiperSlide()

  return (
    <div
      className={classNames(styles.event, {
        [styles.next]: isNext,
      })}
    >
      <div className={styles.year}>{year}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default Event
