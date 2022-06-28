import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";

const CardTabela = () => {
const[titulo, setTitulo] = useState("");

useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/films/`);
      const Json = await Api.json();
      setTitulo(Json.results[0].director);
      console.log(Json);
    }
    Requisicao();
  }, []);







  return (
    <div className={styles.table}>
      <div className={styles.tableHead}>
        <tr>
            <th>Título</th>
            <th>Estreia</th>
            <th>Diretor</th>
            <th>Episódio</th>
        </tr>
      </div>
      <div className={styles.tableBody}>
        <tr>
            <td>{titulo}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </div>
    </div>
  );
};

export default CardTabela;
