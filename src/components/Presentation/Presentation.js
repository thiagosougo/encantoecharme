import React from "react";
import "./presentation.css";
import PresentationVideo from "../../videos/apresentacao.mp4";

export default function Presentation() {
  return (
    <div className="presentationSection">
      <div className="larguraImagem">
        <video controls src={PresentationVideo} width="70%" />
      </div>
      
      <a href="#">Quero aprender</a>
      <div className="borderPresentation"></div>
    </div>
  );
}
