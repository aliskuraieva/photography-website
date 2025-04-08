import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Gallery.module.css";

const images = [
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744014692/IMG_3340-min_scw59c.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/t_1/v1744019973/IMG_7970-min_bahji2.jpg",
];

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
