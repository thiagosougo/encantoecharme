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
          <h4>De $180 por</h4>
          <h3>$ 120</h3>
          <button>
            <a href="#">Quero aproveitar</a>
          </button>
        </div>

        <p>Paypal, cartão de crédito e débito</p>
      </div>
    </div>
  );
}
