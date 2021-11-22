import React from "react";
import "./bonus.css";

export default function Bonus() {
  return (
    <div className="Bonus">
      <div className="bonusImagem larguraImagem">
        <img src="/img/chaTarde.jpg" />
      </div>

      <div className="bonusTexto">
        <h3>Super Bônus</h3>
        <h2>Chá da tarde</h2>
        <p>
          Você que sempre quis convidar suas amigas para um aconchegante chá da
          tarde, aprender a hora certa de servir, o que servir, como montar uma
          belíssima mesa de chá da tarde, acabou de encontrar o curso ideal para
          você aprender e colocar em prática.
        </p>

        <button className="bonusBotao">
          <a href="">Quero aproveitar o bônus</a>
        </button>
      </div>

      <div className="bonusDots">
        <div className="larguraImagem">
          <img src="/img/dots.png" />
        </div>
      </div>
    </div>
  );
}
