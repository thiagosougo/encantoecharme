import React from "react";
import "./offer.css";

export default function Offer() {
  return (
    <div className="Offer">
      <div className="primeiraColunaOffer">
        <ul>
          <li>Aulas práticas</li>
          <li>Mentoria ao vivo</li>
          <li>Do básico ao avançado</li>
          <li>Área vip e suporte</li>
          <li>+ de 20 aulas</li>
          <li>Acesso vitalício</li>
        </ul>
      </div>

      <div className="segundaColunaOffer">
        <h2>Oferta disponível por tempo limitado</h2>
        <div className="valorBotao">
          <h4>De $180</h4>
          <h5>Por apenas</h5>
          <h3>$ 120</h3>
          <button>
            <a href="#">Quero aproveitar</a>
          </button>
        </div>

        <div className="larguraImagem">
          <img src="/img/payment.png"/>
        </div>
      </div>
    </div>
  );
}
