import React from 'react'
import type { FC } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Event from '~components/event'
import type IEvent from '~interfaces/i-event'
import SliderControls from './slider-controls'
import styles from './styles.module.scss'

interface IEventSlider {
  events: IEvent[]
}

const EventSlider: FC<IEventSlider> = ({ events }) => {
  return (
    <div className={styles.slider}>
      <Swiper
        grabCursor
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className={styles.slide}>
            <Event {...event} />
          </SwiperSlide>
        ))}
        <SliderControls />
      </Swiper>
    </div>
  )
}

export default EventSlider
