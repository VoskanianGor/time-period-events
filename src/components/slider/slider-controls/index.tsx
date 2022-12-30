import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useSwiper, useSwiperSlide } from 'swiper/react'
import SliderButtonIcon from '~assets/icons/slider-button.svg'
import styles from './styles.module.scss'

const buttons = [
  {
    id: 1,
    type: 'prev',
    className: styles.prev,
  },
  {
    id: 2,
    type: 'next',
    className: styles.next,
  },
]

const SliderControls = () => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiper = useSwiper()

  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    })

    return () => {
      swiper.off('slideChange')
    }
  }, [swiper])

  const next = () => swiper.slideNext()
  const prev = () => swiper.slidePrev()

  return (
    <>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={classNames(button.className, {
            [styles.disabled]: button.type === 'prev' ? isBeginning : isEnd,
          })}
          onClick={button.type === 'prev' ? prev : next}
          type='button'
        >
          <SliderButtonIcon />
        </button>
      ))}
    </>
  )
}

export default SliderControls
