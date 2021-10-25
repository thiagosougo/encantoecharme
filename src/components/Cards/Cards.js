import React from "react";
import "./cards.css";

export default function Cards({titulo, conteudo}) {
  return (
    <div class="containerCard">

      <div className="Cards">
        <div className="card">
          <h2 className="tituloCard">{titulo}</h2>
          <p>{conteudo}</p>
        </div>
      </div>
      
    </div>
  );
}
