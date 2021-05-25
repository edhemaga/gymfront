import React from "react";
import Carousel from "re-carousel";

import slideshow1 from "../../images/slideshow1.png";
import slideshow2 from "../../images/slideshow2.jpg";

function Slideshow() {
  var images = [
    {
      image: slideshow1,
      caption: "Caption for image_1",
      description: "Description for image_1",
    },
    {
      image: slideshow2,
      caption: "Caption for image_1",
      description: "Description for image_1",
    },
  ];

  return (
    <div>
      <Carousel>
        <div
          style={{
            backgroundColor: "tomato",
            height: "100%",
          }}
        >
          Frame 1
        </div>
        <div
          style={{
            backgroundColor: "orange",
            height: "100%",
          }}
        >
          Frame 2
        </div>
        <div
          style={{
            backgroundColor: "orchid",
            height: "100%",
          }}
        >
          Frame 3
        </div>
      </Carousel>
    </div>
  );
}

export default Slideshow;
