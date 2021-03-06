import React from "react";
import "./call.css"

import Dots from "../../img/dots.png";

export default function Call() {
  return (
    <div className="callSection">
      <h2>Você vai aprender a ser uma excelente anfitriã</h2>

      <p>
        Descubra tudo sobre etiqueta, decoração e mesa posta, aprendendo na
        prática como oferecer um jantar elegante com as louças da sua própria
        casa.
      </p>

      <div className="larguraImagem">
         <img src={Dots}/>
      </div>
    </div>
  );
}
