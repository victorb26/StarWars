import React from 'react';
import styles from "./Cards.module.css";
import Naveblack from "../../../Assets/imgs/nave-black.svg";

const CardNaves = () => {
    return (
      <div className={styles.containerCards}>
        <div className={styles.cardInfo}>
          <img src={Naveblack} className={styles.vetor} />
          <p className={styles.p}>Naves</p>
          <h2 className={styles.font}>10</h2>
        </div>
      </div>
    );
  };
  
  export default CardNaves;
