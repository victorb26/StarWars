import React from "react";
import styles from "./Cards.module.css";
import Personagensblack from "../../../Assets/imgs/personagens-black.svg";

const Cards = () => {
  return (
    <div className={styles.containerCards}>
      <div className={styles.cardInfo}>
        <img src={Personagensblack} />
        <div className={styles.NumFont}>
          <p className={styles.p}>Personagens</p>
          <h2 className={styles.font}>10</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
