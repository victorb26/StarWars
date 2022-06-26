import React from 'react';
import styles from './Dashboard.module.css';
import CardPersonagens from "./Cards/CardPersonagens";
import CardNaves from './Cards/CardNaves';
import CardDuplo from './Cards/CardDuplo';


const Dashboard = () => {
  return (
    <div className={styles.container}>
     <CardPersonagens/>
     <CardDuplo/>
     <CardNaves/>
    </div>
  )
}

export default Dashboard
