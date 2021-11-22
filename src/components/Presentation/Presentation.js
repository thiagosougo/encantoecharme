import React from "react";
import ReactPlayer from "react-player";

import "./presentation.css";
import PresentationVideo from "../../videos/apresentacao.mp4";

export default function Presentation() {
  return (
    <div className="presentationSection">
      <div className="larguraImagem">
        <ReactPlayer
          controls
          className="videoPresentation"
          url={PresentationVideo}
          width="70%"
          height="70%"
        />
      </div>

      <div className="linkPresentation">
        <a href="#">Quero aprender</a>
      </div>
      <div className="borderPresentation"></div>
    </div>
  );
}
