import React from 'react';
import styles from './home.module.css';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero';
import Reviews from '../../components/reviews/reviews';
import Location from '../../components/location/location';
import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
