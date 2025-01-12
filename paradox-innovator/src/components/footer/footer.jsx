import React from 'react';
import styles from './footer.module.css';
import { FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const redirectAbout = () => {
        window.location.href = "/about";
    }

    const redirectContact = () => {
        window.location.href = "/contact";
    }
    
    const redirectHome = () => {
        window.location.href = "/contact";
    }
    const redirectServices = () => {
        window.location.href = "/contact";
    }

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.section}>
          <h3 onClick={redirectAbout}>About</h3>
        </div>
        <div className={styles.section}>
          <h3 onClick={redirectContact}>Contact Us</h3>
        </div>
        <div className={styles.section}>
          <h3 onClick={redirectHome}>Home</h3>
        </div>
        <div className={styles.section}>
          <h3 onClick={redirectServices}>Services</h3>
        </div>
      </div>

      <div className={styles.social}>
        <a href="https://github.com/shivam" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.youtube.com/paradoxinnovator" target="_blank" rel="noopener noreferrer">
          <FaYoutube /> YouTube
        </a>
        <a href="mailto:shivam@example.com">
          <FaEnvelope /> Email
        </a>
      </div>

      <div className={styles.footerText}>
        All Rights Reserved | © Shivam Tiwari | 2024
      </div>
    </footer>
  );
};

export default Footer;
