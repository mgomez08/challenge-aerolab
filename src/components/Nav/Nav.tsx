import React from "react";
import logo from "../../assets/logo.svg";
import coin from "../../assets/icons/coin.svg";

import "./nav.css";
export const Nav = () => {
  return (
    <nav>
      <div className="nav__icon">
        <img src={logo} alt="Logo de Aerolab" />
      </div>
      <div className="nav__info-user">
        <p>Marlon Gómez</p>
        <div className="coins-container">
          <p>6000</p>
          <img src={coin} alt="icono de coin" />
        </div>
      </div>
    </nav>
  );
};
