import React, { useLayoutEffect, useRef, useState } from 'react'
import useCirclePoints from '~hooks/use-circle-points'
import CircleOutline from './circle-outline'
import Point from './point'
import styles from './styles.module.scss'

const timePeriods = [
  {
    years: [2000, 2032],
    events: [
      {
        year: 2000,
        descriprion: 'lorem10',
      },
      {
        year: 2002,
        descriprion: 'lorem20',
      },
    ],
  },
  {
    years: [2002, 2012],
    events: [
      {
        year: 2004,
        descriprion: 'lorem10',
      },
      {
        year: 2011,
        descriprion: 'lorem20',
      },
    ],
  },

  {
    years: [2002, 2012],
    events: [
      {
        year: 2004,
        descriprion: 'lorem10',
      },
      {
        year: 2011,
        descriprion: 'lorem20',
      },
    ],
  },

  {
    years: [2002, 2012],
    events: [
      {
        year: 2004,
        descriprion: 'lorem10',
      },
      {
        year: 2011,
        descriprion: 'lorem20',
      },
    ],
  },

  {
    years: [2002, 2012],
    events: [
      {
        year: 2004,
        descriprion: 'lorem10',
      },
      {
        year: 2011,
        descriprion: 'lorem20',
      },
    ],
  },

  {
    years: [2002, 2012],
    events: [
      {
        year: 2004,
        descriprion: 'lorem10',
      },
      {
        year: 2011,
        descriprion: 'lorem20',
      },
    ],
  },
]

const Circle = () => {
  const { points, rotate, activePoint, circleRef, onPointClick } =
    useCirclePoints(timePeriods)

  return (
    <div
      className={styles.circle}
      ref={circleRef}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <CircleOutline />
      {points?.map((cords, index) => (
        <Point
          key={index}
          index={index}
          cords={cords}
          isActive={index === activePoint}
          circleRotate={rotate}
          onPointClick={onPointClick}
        />
      ))}
    </div>
  )
}

export default Circle
