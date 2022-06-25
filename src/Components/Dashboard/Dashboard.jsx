import React from 'react';
import styles from './Dashboard.module.css';
import CardInfo from "./Cards/CardInfo";


const Dashboard = () => {
  return (
    <div className={styles.container}>
     <CardInfo/>
    </div>
  )
}

export default Dashboard
