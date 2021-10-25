import React from "react";
import "./summary.css";
import logo from "./../../img/logo.png";
import eciene from "./../../img/eciene.jpg";

export default function Summary() {
  return (
    <div className="Summary">
      <div className="primeiraColunaSummary">
        <img src={logo} />

        <h2>Aprenda com quem tem mais de 200 alunas formadas</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
          amet risus sed ipsum pellentesque fermentum. Vestibulum nunc mi,
          consequat in estLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fusce sit amet
        </p>
      </div>
      <div className="segundaColunaSummary">
          <img src={eciene}/>
      </div>
    </div>
  );
}
