import React from "react";
import styles from "./Dashboard.module.css";
import CardPersonagens from "./Cards/CardPersonagens";
import CardNaves from "./Cards/CardNaves";
import CardDuplo from "./Cards/CardDuplo";
import CardTabela from "./Cards/CardTabela";
import CardGrafico from "./Cards/CardGrafico";

const Dashboard = () => {
  return (
      <div className={styles.container}>
        <CardPersonagens />
        <CardDuplo />
        <CardNaves />
        <CardTabela />
        
      </div>
     
  );
};

export default Dashboard;
