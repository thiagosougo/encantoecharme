import React from "react";
import CarouselDepositions from "./Carousel";
import "./depositions.css";

export default function Depositions() {

  return (
    <div className="depositionsSection">
      <div className="Depositions">
        <h2 className="titulo">
          Veja o que as nossas charmosas <br /> dizem sobre o <br />
          <span>curso mesa posta</span>
        </h2>
      </div>

      <CarouselDepositions/>  
    </div>
  );
}
