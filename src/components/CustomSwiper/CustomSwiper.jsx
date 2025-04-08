import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./CustomSwiper.module.css";

export const CustomSwiper = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      grabCursor={true}
      navigation
      pagination={{ clickable: true }}
      speed={1000}
      style={{
        transition: "all 1s ease",
      }}
      className={styles.customSwiper}
    >
      {images.map((group, index) => (
        <SwiperSlide key={index}>
          <div className={styles.imageGroup}>
            {group.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${index}-${idx}`}
                className={styles.image}
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
