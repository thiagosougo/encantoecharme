import React from "react";
import "./depositions.css";
import dep1 from "../../videos/dep1.mp4";
import dep2 from "../../videos/dep2.MP4";
import dep3 from "../../videos/dep3.MOV";
import dep4 from "../../videos/dep4.mp4";
import dep5 from "../../videos/dep5.mp4";
import dep6 from "../../videos/dep6.MP4";
import dep7 from "../../videos/dep7.mp4";

import poster1 from "../../img/poster1.png";
import poster2 from "../../img/poster2.png";
import poster3 from "../../img/poster3.png";
import poster4 from "../../img/poster4.png";
import poster5 from "../../img/poster5.png";
import poster6 from "../../img/poster6.png";
import poster7 from "../../img/poster7.png";

export default function Depositions() {
  const videos = [
    {
      id: 1,
      video: dep1,
      poster: poster1,
    },
    {
      id: 2,
      video: dep2,
      poster: poster2,
    },
    {
      id: 3,
      video: dep3,
      poster: poster3,
    },
    {
      id: 4,
      video: dep4,
      poster: poster4,
    },
    {
      id: 5,
      video: dep5,
      poster: poster5,
    },
    {
      id: 6,
      video: dep6,
      poster: poster6,
    },
    {
      id: 7,
      video: dep7,
      poster: poster7,
    },
  ];

  return (
    <div className="Depositions">
      <h2 className="titulo">
        Veja o que as nossas charmosas <br /> dizem sobre o <br />
        <span>curso mesa posta</span>
      </h2>

      <div className="slide">
        {videos.map((video) => (
          <div className="video" key={video.id}>
            <video controls src={video.video} poster={video.poster} width="480px" height="280" />
          </div>
        ))}
      </div>
    </div>
  );
}
