import React, { useEffect, useState }from 'react';
import styles from "./Cards.module.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Filme", "Receita em Dólares"],
  ["Star Wars: Episódio I - A Ameaça Fantasma (1999)", 1000000000],
  ["Star Wars: Episódio III - A Vingança dos Sith (2005)", 850000000],
  ["Star Wars: Episódio IV - Uma Nova Esperança (1977)", 775000000],
  ["Star Wars: Episódio II - O Ataque dos Clones (2002)", 649000000],
  ["Star Wars: Episódio V - O Império Contra-Ataca (1980)", 547000000],
];

export const options = {
  title: "5 Maiores bilheterias (arrecadação em Dólares)",
  is3D: true,
  legend: 'none',
};

const CardGrafico = () => {
  
  return (
    <div className={styles.containerCards}>
    <div className={styles.chart}>
    <Chart 
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"105%"}
      
    />
    </div>
    </div>
  );
}

export default CardGrafico
