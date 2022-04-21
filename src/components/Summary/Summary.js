import React from "react";
import "./summary.css";
import logo from "./../../img/logo.png";
import eciene from "./../../img/eciene.jpg";

export default function Summary() {
  return (
    <div className="Summary">
      <div className="primeiraColunaSummary">
        <img alt="logo" src={logo} />

        <h2>Aprenda com quem tem mais de 200 alunas formadas</h2>

        <p>
          Eciene Cardoso é Consultora de Etiqueta, Personal Welcome formada pela
          BSE The British School of Etiquette / EBE Escola Brasileira de
          Etiqueta e tem mais de 20 anos de experiência realizando montagem de
          mesas formais e informais na região de Boston. Sua paixão por mesa
          posta e decoração vem desde criança e a cada mesa montada, Eciene
          demonstra o seu bom gosto e conhecimento de etiqueta.
          <br /> <br /> Com a missão de ajudar as pessoas a montar uma mesa
          posta correta com beleza e elegância, ela montou a Encanto & Charme
          que agora oferece a você o MARATONA MESA POSTA 2.0.
        </p>
      </div>
      <div className="segundaColunaSummary">
        <div className="larguraImagem">
          <img alt="Eciente" src={eciene} />
        </div>
      </div>
    </div>
  );
}
