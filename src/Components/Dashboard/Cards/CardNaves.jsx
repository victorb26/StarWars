import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Naveblack from "../../../Assets/imgs/nave-black.svg";

const CardNaves = () => {
  const [naves, setNaves] = useState("");

  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/starships/`);
      const Json = await Api.json();
      setNaves(Json.count);
      console.log(Json);
    }
    Requisicao();
  }, []);

  return (
    <div className={styles.containerCards}>
      <div className={styles.cardInfo}>
        <img src={Naveblack} className={styles.vetor} />
        <div className={styles.NumFont}>
          <p className={styles.p}>Naves</p>
          <h2 className={styles.font}>{naves}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardNaves;
