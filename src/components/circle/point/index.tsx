import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import type ICords from '~interfaces/i-cords'
import type TOnPointClick from '~interfaces/t-on-point-click'
import styles from './styles.module.scss'

interface IPoint {
  index: number
  category: string
  cords: ICords
  isActive: boolean
  circleRotate: number
  onPointClick: TOnPointClick
}

const Point: FC<IPoint> = ({
  index,
  category,
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
      data-category={category}
    />
  )
}

export default Point
