import { useLanguage } from "../../hooks/useLanguage";
import { CustomSwiper } from "../CustomSwiper/CustomSwiper";
import styles from "./Gallery.module.css";

const allImages = [
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019973/IMG_7970-min_bahji2.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019972/IMG_2183-min_b6ouv7.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019972/IMG_2133-min_twaml0.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019974/IMG_4355-min_qkusyq.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019973/IMG_9996-min_nluwuu.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019973/IMG_8912-min_wqjkqq.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019972/IMG_1955-min_ptnhti.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019972/IMG_4339-min_h6tn3h.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744019972/IMG_0938-min_t8oum8.jpg",
  "https://res.cloudinary.com/dy57ojwai/image/upload/v1744109350/IMG_0906-min_k7tdp5.jpg",
];

export const Gallery = () => {
  const { language } = useLanguage();

  const groupedImages = [];
  for (let i = 0; i < allImages.length; i += 2) {
    groupedImages.push(allImages.slice(i, i + 2));
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.fullWidthImage}>
        <img
          src="https://res.cloudinary.com/dy57ojwai/image/upload/v1744014692/IMG_3340-min_scw59c.jpg"
          alt="Main"
        />
      </div>
      <p className={styles.text}>
        {language === "ua"
          ? "Ваші історії, що живуть у кожному кадрі."
          : "Your stories, living in every frame."}
      </p>
      <CustomSwiper images={groupedImages} />
    </div>
  );
};
