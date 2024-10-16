import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
  const images = [
    './images/3.webp', 
    './images/2.webp', 
    './images/1.webp', 

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-10 mb-50">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-auto " />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MySlider;
