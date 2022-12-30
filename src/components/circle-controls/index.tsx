import classNames from 'classnames'
import React from 'react'
import CircleButton from '~assets/icons/circle-button.svg'
import useCircleControls from '~hooks/use-circle-controls'
import styles from './styles.module.scss'
import { useCircleContext } from '~context/circle-context'

const CircleControls = () => {
  const { points, onPointClick } = useCircleContext()
  const {
    onNext,
    onPrev,
    isNextDisabled,
    isPrevDisabled,
    currentPeriod,
    periodsCount,
  } = useCircleControls(points ?? [], onPointClick)

  return (
    <div className={styles.controls}>
      <div className={styles.pagination}>
        0{currentPeriod}/0{periodsCount}
      </div>
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
