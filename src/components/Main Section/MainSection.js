import React from "react";

import "./mainSection.css";
import plates1 from "../../img/plates1.jpg";
import plates2 from "../../img/plates2.jpg";
import maratona from "../../img/maratona.png";

export default function MainSection() {
  return (
    <div className="mainSection">
      <div className="larguraImagem">
        <img src={plates1} />
      </div>
      <div className="larguraImagem">
        <img src={maratona} />
      </div>
      <div className="larguraImagem">
        <img src={plates2} />
      </div>
    </div>
  );
}
