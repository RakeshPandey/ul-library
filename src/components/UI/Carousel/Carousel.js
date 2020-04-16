import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Slider from "react-slick";
import image from '../../../images/index'

const photos = [
  {
    name: "Photo 1",
    url: `${image.image1}`
  },
  {
    name: "Photo 2",
    url: `${image.image2}`
  },
  {
    name: "Photo 3",
    url: `${image.image3}`
  },
  {
    name: "Photo 4",
    url: `${image.image4}`
  }
]

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div className="SliderContainer">
        <Slider {...settings}>
          {photos.map(photo => {
            return (
              <div key={photo.name}>
                <img src={photo.url} alt={photo.name} width="100%" />
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;