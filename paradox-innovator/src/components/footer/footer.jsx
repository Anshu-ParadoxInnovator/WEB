import React from 'react';
import styles from './footer.module.css';
import { FaGithub, FaYoutube, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const redirectAbout = () => {
        window.location.href = "/about";
    }

    const redirectContact = () => {
        window.location.href = "/contact";
    }
    
    const redirectHome = () => {
        window.location.href = "/";
    }
    const redirectServices = () => {
        window.location.href = "/servies";
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

      {/* <div className={styles.social}>
        <a href="https://www.instagram.com/paradoxinnovator?igsh=MTRveTg2ZmR4N2VwMg==" >
          <FaInstagram /> Instagram
        </ a>
        <a href="https://www.linkedin.com/company/paradox-innovator/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn /> LinkedIn
        </ a>

        <a href="https://www.github.com/Paradox-Innovator-Group" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://youtube.com/@paradoxinnovator?si=6n7EEN_guo3QBTPz" target="_blank" rel="noopener noreferrer">
          <FaYoutube /> YouTube
        </a>
        <a href="mailto:info.paradoxinnovator@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div> */}

<div className={styles.social}>
  <a 
    href="https://www.instagram.com/paradoxinnovator" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram /> Instagram
  </a>
  
  <a 
    href="https://www.linkedin.com/company/paradox-innovator/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedinIn /> LinkedIn
  </a>
  
  <a 
    href="https://www.github.com/Paradox-Innovator-Group" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub /> GitHub
  </a>
  
  <a 
    href="https://youtube.com/@paradoxinnovator" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaYoutube /> YouTube
  </a>
  
  <a 
    href="mailto:info.paradoxinnovator@gmail.com"
  >
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
