import { useState, useEffect } from "react";
import styles from "../styles/SliderImg.module.css";
import Image from "next/image";

// URLs de las imágenes
const images = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/ac/f1/photo0jpg.jpg?w=500&h=-1&s=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbvz-YsiSK3MMKq0jxFnNEk4g0wDnzSwCVg&s",
  "https://ec.viajandox.com/uploads/min_Catedral%20Nueva_4.jpg",
];

export default function SliderImg() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimateOut(false);
      }, 1500); 
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderImg}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.sliderImgItem} ${
            animateOut && index === currentIndex ? styles.animateOut : ""
          }`}
          style={{
            display: index === currentIndex ? "block" : "none",
          }}
        >
          <Image
            src={image}
            alt={`Slider Image ${index + 1}`}
            layout="fill" 
            objectFit="cover" 
            priority={index === currentIndex} 
          />
        </div>
      ))}
    </div>
  );
}
