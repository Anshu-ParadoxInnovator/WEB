import React from 'react';
import styles from './location.module.css';

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      <h3 className={styles.heading}>LOCATION OF PARADOX INNOVATOR</h3>
      <p className={styles.address}>
        We are located at:<br />
        8/8 Kalitala Link Road, Kalikapur, Kolkata, West Bengal - India
      </p>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9836231762593!2d88.38731377572994!3d22.503191979558033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710f024f0aef%3A0x123456789abcdef!2sBulon's%20Flat!5e0!3m2!1sen!2sin!4v1234567890"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
    </div>
  );
};

export default Location;
