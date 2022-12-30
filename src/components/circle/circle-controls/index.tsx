import classNames from 'classnames'
import React, { FC } from 'react'
import type TOnPointClick from '~interfaces/t-on-point-click'
import CircleButton from '~assets/icons/circle-button.svg'
import useCircleControls from '~hooks/use-circle-controls'
import ICords from '~interfaces/i-cords'
import styles from './styles.module.scss'

interface ICircleControls {
  points: ICords[]
  onPointClick: TOnPointClick
}

const CircleControls: FC<ICircleControls> = ({ points, onPointClick }) => {
  const { onNext, onPrev, isNextDisabled, isPrevDisabled } = useCircleControls(
    points,
    onPointClick,
  )

  return (
    <div>
      <div className={styles.pagination}>06/06</div>
      <div className={styles.buttons}>
        <button
          className={classNames(styles.prev, {
            [styles.disabled]: isPrevDisabled,
          })}
          type='button'
          onClick={onPrev}
        >
          <CircleButton />
        </button>
        <button
          className={classNames(styles.next, {
            [styles.disabled]: isNextDisabled,
          })}
          type='button'
          onClick={onNext}
        >
          <CircleButton />
        </button>
      </div>
    </div>
  )
}

export default CircleControls
