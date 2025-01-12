import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const gohome = () => {
    window.location.href = '/';
  }

  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img 
            src="https://i.ibb.co/wwqt6CC/Roundlogo-img.png" 
            alt="Eduford Logo" 
            className={styles.logo}
            onClick={gohome}
          />
        </div>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
        >
          <span className={styles.menuIcon}></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="/" className={`${styles.navLink} ${styles.active}`}>HOME</a></li>
          <li><a href="/about" className={styles.navLink}>ABOUT</a></li>
          <li><a href="/services" className={styles.navLink}>SERVICES</a></li>
          <li><a href="/contact" className={styles.navLink}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;