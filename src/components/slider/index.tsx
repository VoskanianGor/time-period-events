import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCircleContext } from '~context/circle-context'
import useWindowSize from '~hooks/use-window-size'
import Event from '~components/event'
import SliderControls from './slider-controls'
import styles from './styles.module.scss'
import 'swiper/css/pagination'
import 'swiper/css'

const EventSlider = () => {
  const { activeTimePeriod, timePeriods } = useCircleContext()
  const events = timePeriods[activeTimePeriod].events
  const { isMatchWith } = useWindowSize({ matchWith: 768 })

  return (
    <div className={styles.slider}>
      <Swiper
        grabCursor
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={isMatchWith ? 2 : 3}
        pagination={isMatchWith}
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
