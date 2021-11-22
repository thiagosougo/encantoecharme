import React from "react";
import "./mainSection.css";

export default function MainSection() {
  return (
    <div className="mainSection">
      <div className="larguraImagem">
        <img src="/img/plates1.jpg" />
      </div>
      <div className="larguraImagem">
        <img src="/img/maratona.png" />
      </div>
      <div className="larguraImagem">
        <img src="/img/plates2.jpg" />
      </div>
    </div>
  );
}
