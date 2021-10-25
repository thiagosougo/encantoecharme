import React from "react";
import "./mesaPosta.css";
import maratona from "./../../img/maratona.png";

export default function MesaPosta() {
  return (
    <div className="mesaPosta">
      <section>
        <img src={maratona} />
      </section>

      <section>
        <p>
          É um treinamento de etiqueta com + de 20 aulas, contendo todas as
          técnicas necessárias para você montar um arranjo de flores requintado,
          além de abordar a diferença da mesa formal, informal e table decor,
          como se portar diante de uma ocasião com etiqueta formal, como servir
          o jantar dentre outros materiais. <br />
          <br />
          Você vai receber um passo a passo com explicações, demonstrações,
          exercícios, tudo que for necessário para o seu crescimento pessoal
        </p>
      </section>
    </div>
  );
}
