import React from "react";
import "../Styles/Slider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../Assets/slide 1.jpg";
import slide2 from "../Assets/Slide 2.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={2000}
        showIndicators={false}
        ariaLabel="false"
        showArrows={true}
        showThumbs={false}
      >
        <div>
          <img src={slide2} alt="" />
        </div>
        <div>
          <img src={slide1} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
