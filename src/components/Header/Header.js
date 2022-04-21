import React from "react";
import "./header.css";
import LogoBranco from "../../img/logoBranco.PNG";

function Header() {
  return (
    <div className="header">
      <img src={LogoBranco} />
      <h1>
        Últimas vagas com
        <span className="blackColorResponsive">
          <span className="number"> 30%</span> de desconto
        </span>
      </h1>
      <div></div>
    </div>
  );
}
export default Header;
