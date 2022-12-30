import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCircleContext } from '~context/circle-context'
import Event from '~components/event'
import SliderControls from './slider-controls'
import styles from './styles.module.scss'

const EventSlider = () => {
  const { activeTimePeriod, timePeriods } = useCircleContext()
  const events = timePeriods[activeTimePeriod].events
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
