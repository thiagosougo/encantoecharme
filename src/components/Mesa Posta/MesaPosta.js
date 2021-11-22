import React from "react";
import "./mesaPosta.css";

export default function MesaPosta() {
  return (
    <div className="mesaPosta">
      <h2>Maratona mesa posta</h2>
      <article>
        <section>
          <p>
            É um treinamento de etiqueta com + de 20 aulas, contendo todas as
            técnicas necessárias para você montar um arranjo de flores
            requintado, além de abordar a diferença da mesa formal, informal e
            table decor, como se portar diante de uma ocasião com etiqueta
            formal, como servir o jantar dentre outros materiais.
          </p>

          <div className="larguraImagem">
            <img src="/img/dots.png"/>
          </div>
        </section>

        <section>
          <div className="cardPrices">
            <p>
              Curso <span className="numberPrice">100%</span> online
            </p>
            <p>Início imediato</p>
            <br /> <br /> <p>Apenas $120,00</p>
          </div>
          <div className="linkPrices">
            <a href="#">Quero fazer parte</a>
          </div>

          <div className="larguraImagem">
            <img src="/img/payment.png" />
          </div>
        </section>
      </article>
    </div>
  );
}
