import React from 'react';
import styles from './reviews.module.css';

const Reviews = () => {
  const reviews = [
    {
      text: "This system has greatly improved our safety standards!",
      author: "Adarsh singh"
    },
    {
      text: "I love the real-time monitoring features!",
      author: "Priya Sharma"
    },
    {
      text: "A user-friendly interface that makes monitoring easy.",
      author: "Ravi Kumar"
    }
  ];

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>User Reviews</h2>
        <div className={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <p className={styles.reviewText}>"{review.text}"</p>
              <p className={styles.author}>- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.diagonal}></div>
    </section>
  );
};

export default Reviews;