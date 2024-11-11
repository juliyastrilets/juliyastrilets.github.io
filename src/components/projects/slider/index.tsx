import styles from './style.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { slides } from './model';
import { ProjectSlide } from './project-slide';

const sliderBreakpoints = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 12,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

export const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        navigation
        breakpoints={sliderBreakpoints}
        modules={[Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <ProjectSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
