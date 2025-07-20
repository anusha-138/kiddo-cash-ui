import React from 'react';
import styles from '../styles/SplashScreen.module.css'; // Adjust the path as needed
import icon from '../assets/icon.png'; // Adjust the path as needed

function SplashScreen() {
  return (
    <div className={styles.splash}>
      <img src={icon} alt="Kiddo Cash Icon" className={styles.icon} />
      <h1 className={styles.title}>Kiddo Cash</h1>
      <p className={styles.tagline}>It's not just cash, it's Kiddo Cash</p>
    </div>
  );
}

export default SplashScreen;