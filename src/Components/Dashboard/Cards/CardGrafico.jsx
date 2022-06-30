import React, { useEffect, useState }from 'react';
import styles from "./Cards.module.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Veículos que mais carregam passageiros",
  is3D: true,
};

const CardGrafico = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function Requisicao() {
      const Api = await fetch(`https://swapi.dev/api/vehicles/`);
      const Json = await Api.json();
      setVehicles(Json.results);
      console.log(Json);
    }
    Requisicao();
  }, []);
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default CardGrafico
