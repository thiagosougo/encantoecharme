import React from "react";

import "./about.css";
import Square from "../../img/square.png";

function About() {
  return (
    <div className="AboutSection">
      <div className="AboutImage">
        <img alt="Square" src={Square} />
      </div>
      <div className="AboutContents">
        <h2>
          Sobre a <br/> <span>encanto & charme</span>
        </h2>
        <p>
          <strong>Encanto & Charme</strong> é o nome que criei para a minha escola
          de mesa posta e etiqueta. Já tive uma empresa especializada em
          decoração de festas (Precious Moment) e na época fiz muitos
          casamentos. Amo flores mas tive que me afastar dos grandes eventos por
          uma reação alérgica que me impediu de continuar lidando com flores.
          <br /> <br />A partir disso, passei a trabalhar realizando pequenos
          eventos particulares nas casas de clientes, montando mesas para
          jantares formais e informais. Amo demais ver uma mesa posta bem
          montada e alinhada e já faço esse trabalho há mais de 20 anos em
          Boston, Massachusetts.
          <br /> <br />
          Resolvi profissionalizar, hoje sou consultora de etiqueta, Personal
          Welcome formada pela{" "}
          <strong>
            BSE The British School of Etiquette - EBE Escola Brasileira de
            Etiqueta.
          </strong>
          <br /> <br />E então, montei a Encanto & Charme com a vontade de
          compartihar essa minha experiência com quem quer aprender a montar uma
          mesa linda com todo charme e elegância.
          <br /> <br />
          Comecei oferecendo o curso presencial e com o intuito de expandir e
          atingir ainda mais pessoas, estou fazendo esse lançamento do <strong>Maratona
          Mesa Posta 2.0</strong>, transformando todo o conteúdo do meu curso presencial
          somado à minha experiência, nesse curso online.
        </p>
      </div>
    </div>
  );
}

export default About;
