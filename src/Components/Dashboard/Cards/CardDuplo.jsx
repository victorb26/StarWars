import React, { useEffect, useState }from 'react';
import styles from "./Cards.module.css";
import Planetasblack from "../../../Assets/imgs/planetas-black.svg";
import Luablack from "../../../Assets/imgs/luas-black.svg";

const CardDuplo = () => {

  const [planetas, setPlanetas] = useState("");
  const [especies, setEspecies] = useState("");

  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/planets/`);
      const Json = await Api.json();
      setPlanetas(Json.count);
      console.log(Json);
    }
    Requisicao();
  }, []);
  
  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/species/`);
      const Json = await Api.json();
      setEspecies(Json.count);
      console.log(Json);
    }
    Requisicao();
  }, []);
    return (
        <div className={styles.containerCards}>
          <div className={styles.cardInfoLarge}>
            <img src={Planetasblack} />
            <div className={styles.NumFont}>
            <p className={styles.p}>Planetas</p>
            <h2 className={styles.font}>{planetas}</h2>
            </div>
            <div className={styles.divisoria}></div>
            <img src={Luablack} />
            <div className={styles.NumFont}>
            <p className={styles.p}>Espécies</p>
            <h2 className={styles.font}>{especies}</h2>
            </div>
            </div>
        </div>
      );
}

export default CardDuplo
