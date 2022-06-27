import React, { useEffect, useState} from "react";
import styles from "./Cards.module.css";
import Personagensblack from "../../../Assets/imgs/personagens-black.svg";

const Cards = () => {

  const [personagens, setPersonagens] = useState("");

  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/people/`);
      const Json = await Api.json();
      setPersonagens(Json.count);
      console.log(Json);
    }
    Requisicao();
  }, []);
  return (
    <div className={styles.containerCards}>
      <div className={styles.cardInfo}>
        <img src={Personagensblack} />
        <div className={styles.NumFont}>
          <p className={styles.p}>Personagens</p>
          <h2 className={styles.font}>{personagens}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
