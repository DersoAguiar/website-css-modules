import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Car-Logo-Design-Source-PNG-Transparent.png" alt="Logo" />
            <button>Share A Car</button>
        </div>
    </div>
  )
}

export default Footer