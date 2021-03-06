import React from "react";
import styles from "./Menu.module.css";

import logo from "../../Assets/imgs/logo.png";
import Nave from "../../Assets/imgs/nave.svg";
import Personagens from "../../Assets/imgs/personagens.svg";

import Planetas from "../../Assets/imgs/planetas.svg";
import { FiSettings } from "react-icons/fi";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <img src={logo} />
        <div className={styles.itemsmenu}>
          <ul>
            
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
        <div className={styles.settings}>
          <FiSettings className={styles.iconmenu} />
          <p>Configurações</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
