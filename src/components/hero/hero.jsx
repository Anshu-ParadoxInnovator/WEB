import React, { useState, useEffect } from 'react';
import styles from './hero.module.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://i.ibb.co/ygcM4GZ/Whats-App-Image-2025-01-10-at-19-14-13.jpg',
    'https://i.ibb.co/WVyGbcJ/Whats-App-Image-2025-01-10-at-19-14-15.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.heroSlide} ${index === currentImageIndex ? styles.active : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${image})` }}
        ></div>
      ))}
      <div className={styles.heroContent}>
      </div>
    </section>
  );
};

export default Hero;