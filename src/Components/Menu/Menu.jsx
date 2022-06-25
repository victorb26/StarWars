import React from "react";
import styles from "./Menu.module.css";
import Dashboard from "../../Assets/imgs/dashboard.svg";
import logo from "../../Assets/imgs/logo.png";
import Luablack from "../../Assets/imgs/luas-black.svg";
import Naveblack from "../../Assets/imgs/nave-black.svg";
import Nave from "../../Assets/imgs/nave.svg";
import Personagensblack from "../../Assets/imgs/personagens-black.svg";
import Personagens from "../../Assets/imgs/personagens.svg";
import Planetasblack from "../../Assets/imgs/planetas-black.svg";
import Planetas from "../../Assets/imgs/planetas.svg";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <img src={logo} />
        <div className={styles.itemsmenu}>
          <ul>
            <li>
            <img src={Dashboard} />
            <p>Dashboard</p>
            </li>
            <li>
            <img src={Personagens} />
            <p>Personagens</p>
            </li>
            <li>
            <img src={Planetas} />
            <p>Planetas e Luas</p>
            </li>
            <li>
            <img src={Nave} />
            <p>Naves espaciais</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
