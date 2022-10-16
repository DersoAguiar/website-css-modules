import React from 'react'
import styles from './Luxury.module.css';

const LuxuryCard = ({image, make}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt="/" />
        <p>{make}</p>
        
    </div>
  )
}

export default LuxuryCard