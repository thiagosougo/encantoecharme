import React from "react";
import "./depositions.css";
import dep1 from "./../../videos/dep1.MP4";
import dep2 from "./../../videos/dep2.MP4";
import dep3 from "./../../videos/dep3.MP4";
import dep4 from "./../../videos/dep4.MP4";
import dep5 from "./../../videos/dep5.MP4";
import dep6 from "./../../videos/dep6.MOV";

export default function Depositions() {
  return (
    <div className="Depositions">
      <h2 className="titulo">
        Veja o que as nossas charmosas <br /> dizem sobre o <br />
        <span>curso mesa posta</span>
      </h2>

      <div className="slide">
        <div className="video">
          <video controls src={dep1} width="480px" height="280" />
        </div>
        <div className="video">
          <video controls src={dep2} width="480px" height="280" />
        </div>
        <div className="video">
          <video controls src={dep3} width="480px" height="280" />
        </div>
        <div className="video">
          <video controls src={dep4} width="480px" height="280" />
        </div>
        <div className="video">
          <video controls src={dep5} width="480px" height="280" />
        </div>
        <div className="video">
          <video controls src={dep6} width="480px" height="280" />
        </div>
      </div>
    </div>
  );
}
