import React from "react";
import "./mesaPosta.css";
import maratona from "./../../img/maratona.png";

export default function MesaPosta() {
  return (
    <div className="mesaPosta">
      <section>
        <div className="larguraImagem">
          <img src={maratona} />
        </div>
      </section>

      <section>
        <p>
          Neste treinamento com + de 20 aulas, descubra tudo sobre etiqueta,
          decoração e mesa posta, aprendendo na prática como oferecer um jantar
          elegante com as louças da sua própria casa! <br />
          <br />O curso te ensina todas as técnicas necessárias para você montar
          um arranjo de flores requintado, a diferença da mesa formal, informal
          e table decor, como se portar diante de uma ocasião com etiqueta
          formal, como servir o jantar, como ser uma boa anfitriã e muito mais
          <br /> <br />
          Você vai ter acesso à materiais de apoio com exercícios para te ajudar
          a colocar esse conhecimento em prática!
        </p>
      </section>
    </div>
  );
}
