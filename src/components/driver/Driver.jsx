import React from 'react';
import styles from './Driver.module.css';

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src="https://images.pexels.com/photos/3758114/pexels-photo-3758114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driver" />

        </div>

        <div>
            <h2>Find you perfect car <span>to try before you buy</span></h2>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
            <button>Browse Cars</button>
        </div>

    </div>
  )
}

export default Driver