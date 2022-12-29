import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import type ICords from '~interfaces/i-cords'
import styles from './styles.module.scss'

interface IPoint {
  index: number
  cords: ICords
  isActive: boolean
  circleRotate: number
  onPointClick: (rotate: number, index: number) => void
}

const Point: FC<IPoint> = ({
  index,
  cords,
  isActive,
  circleRotate,
  onPointClick,
}) => {
  const rotate = {
    transform: `translate(${cords.x}px, ${
      cords.y
    }px) rotate(${-circleRotate}deg)`,
  }

  const handleClick = () => onPointClick(cords.r, index)

  return (
    <div
      className={classNames(styles.point, {
        [styles.active]: isActive,
      })}
      onClick={handleClick}
      style={rotate}
      data-index={index + 1}
    />
  )
}

export default Point
