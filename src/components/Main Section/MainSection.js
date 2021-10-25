import React from "react";

import "./mainSection.css";
import fotoLanding from './../../img/foto_Landing.jpg'

export default function MainSection() {
  return (
    <div className="mainSection">
      <section className="primeiraColuna">
        <h2>Você vai aprender a ser uma excelente anfitriã</h2>
        <br/>
        <p>
          Descubra tudo sobre etiqueta, decoração e mesa posta, aprendendo na
          prática como oferecer um jantar elegante com as louças da sua própria
          casa.
        </p>
        <button>
          <a href="">Quero aprender</a>
        </button>
      </section>

      <section className="segundaColuna">
          <img src={fotoLanding}/>
      </section>
    </div>
  );
}
