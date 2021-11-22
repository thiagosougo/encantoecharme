import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { Icon } from "@iconify/react";

import dep1 from "../../videos/dep1.MP4";
import dep2 from "../../videos/dep2.MP4";
import dep3 from "../../videos/dep3.MP4";
import dep4 from "../../videos/dep4.MP4";
import dep5 from "../../videos/dep5.MP4";
import dep6 from "../../videos/dep6.MOV";

export default function Carousel2() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videos = [dep1, dep2, dep3, dep4, dep5, dep6];

  const responsiveProps = [
    { minWidth: 1100, itemsToShow: 2 },
    { maxWidth: 1099, itemsToShow: 1 },
  ];
  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {},
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <Icon
              className="iconDepositions"
              style={{ fontSize: "70", color: "#E9C4A0" }}
              icon="eva:arrow-ios-forward-fill"
            />
          ),
        }}
        backwardBtnProps={{
          children: (
            <Icon
              className="iconDepositions"
              style={{ fontSize: "70", color: "#E9C4A0" }}
              icon="eva:arrow-ios-back-fill"
            />
          ),
        }}
        responsiveProps={responsiveProps}
        speed={400}
      >
        {videos.map((item, index) => (
          <div
            className="borderDepositions"
            style={{
              width: "100%",
              border: "10px solid transparent",
              textAlign: "center",
              boxSizing: "border-box",
            }}
            key={index}
          >
            {
              <div className="video larguraImagem">
                <video controls src={item} width="480" height="280" />
              </div>
            }
          </div>
        ))}
      </Carousel>
      <div className="depositionsBorder"></div>
    </div>
  );
}
