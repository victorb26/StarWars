import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";

const CardTabela = () => {
  const [titulo, setTitulo] = useState([]);

  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/films/`);
      const Json = await Api.json();
      setTitulo(Json.results);
      console.log(Json);
    }
    Requisicao();
  }, []);

  return (
    <table className={styles.table}>
      <div className={styles.tableHead}>
        {titulo.map((titulo, index) => {
          return (
            <div key={index}>
              <tr>
                <th>Título</th>
                <th>Estreia</th>
                <th>Diretor</th>
                <th>Episódio</th>
              </tr>
              <tr>
                <td>{titulo.title}</td>
                <td>{titulo.release_date}</td>
                <td>{titulo.director}</td>
                <td>{titulo.episode_id}</td>
              </tr>
            </div>
          );
        })}
      </div>
    </table>
  );
};

export default CardTabela;
