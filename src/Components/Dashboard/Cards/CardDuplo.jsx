import React from 'react';
import styles from "./Cards.module.css";
import Planetasblack from "../../../Assets/imgs/planetas-black.svg";
import Luablack from "../../../Assets/imgs/luas-black.svg";

const CardDuplo = () => {
    return (
        <div className={styles.containerCards}>
          <div className={styles.cardInfoLarge}>
            <img src={Planetasblack} />
            <p className={styles.p}>Planetas</p>
            <h2 className={styles.font}>10</h2>
            <img src={Luablack} />
            <p className={styles.p}>Luas</p>
            <h2 className={styles.font}>10</h2>
            </div>
        </div>
      );
}

export default CardDuplo
