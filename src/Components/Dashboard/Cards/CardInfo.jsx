import React from "react";
import styles from "./Cards.module.css";
import Personagensblack from "../../../Assets/imgs/personagens-black.svg";
import Planetasblack from "../../../Assets/imgs/planetas-black.svg";
import Luablack from "../../../Assets/imgs/luas-black.svg";
import Naveblack from "../../../Assets/imgs/nave-black.svg";

const Cards = () => {
  return (
    <div className={styles.containerCards}>
      <div className={styles.cardnfo}>
        <img src={Personagensblack} />
        <p>Personagens</p>
        <h2>10</h2>
      </div>
    </div>
  );
};

export default Cards;
