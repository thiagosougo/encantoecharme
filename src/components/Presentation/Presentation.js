import React from "react";
import "./presentation.css";
import PresentationVideo from "../../videos/apresentacao.mov";

export default function Presentation() {
  return (
    <div className="presentationSection">
      <div className="larguraImagem">
        <video controls src={PresentationVideo} width="70%" />
      </div>
      
      <a target="_blank" href="https://hotmart.com/pt-br/marketplace/produtos/maratona-mesa-posta-2-0/A61353761M">Quero aprender</a>
      <div className="borderPresentation"></div>
    </div>
  );
}
