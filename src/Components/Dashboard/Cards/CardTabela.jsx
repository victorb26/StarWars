import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import moment from 'moment';

const CardTabela = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/films/`);
      const Json = await Api.json();
      setFilmes(Json.results);
      console.log(Json);
    }
    Requisicao();
  }, []);

  return (
    <div className={styles.table}>
      <h5>Últimos filmes</h5>
      <p>Saiba os últimos lançamentos da marca:</p>
      <div className={styles.filmsTable}>
        <ul className={styles.tableTitleFilms}>
          <li>Título </li>
          <li>Estreia</li>
          <li>Diretor</li>
          <li>Episódio</li>
        </ul>
        {filmes.map((filmes, index) => {
          return (
            <div key={index}>
              <ul className={styles.tableFilms}>
                <li>{filmes.title}</li>
                <li>{moment(filmes.release_date).format("DD/MM/YYYY")}</li>
                <li>{filmes.director}</li>
                <li>{filmes.episode_id}</li>
              </ul>

            </div>
          );
        })}
        </div>
    </div>
  );
};

export default CardTabela;
