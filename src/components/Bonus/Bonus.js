import React from "react";
import "./bonus.css";
import bonusImagem from "./../../img/chaTarde.jpg";

export default function Bonus() {
  return (
    <div className="Bonus">
      <div className="subtitulo">
        <h3>E ainda tem mais!</h3>
      </div>

      <div className="subtituloBonus">
        <h3>Bônus: curso chá da tarde</h3>
      </div>

      <div className="colunasBonus">
        <div className="bonusImagem larguraImagem">
          <img src={bonusImagem} />
        </div>

        <div className="bonusTexto">
          <div className="textoBotao">
            <p>
              Você que sempre quis convidar suas amigas para um aconchegante chá
              da tarde, aprender a hora certa de servir, o que servir, como
              montar uma belíssima mesa de chá da tarde, acabou de encontrar o
              curso ideal para você aprender e colocar em prática.
            </p>

            <button className="bonusBotao">
              <a href="">Quero aproveitar o bônus</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
