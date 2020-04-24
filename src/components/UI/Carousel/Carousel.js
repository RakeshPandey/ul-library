import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import image from '../../../images/index';

const photos = [
  {
    name: "Original Parts Quality",
    url: `${image.image1}`,
    desc: 'Combining excellence in service with affordability and quality.'
  },
  {
    name: "Hand Tools",
    url: `${image.image2}`,
    desc: 'The products of our store are well-designed and very user-friendly. We are always in touch with the latest fashion and hi-tech tendencies.'
  },
  {
    name: "The Lowest Prices",
    url: `${image.image3}`,
    desc: 'We are dedicated to meeting the needs of our cliets, and that’s why offer high-quality electrical tools at the most affordable prices'
  },
  {
    name: "Original Parts Quality",
    url: `${image.image4}`,
    desc: 'Combining excellence in service with affordability and quality.'
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
                <div className="description">
                  <h2>{photo.name}</h2>
                  <h4>{photo.desc}</h4>
                  <p><a href="btn btn-primary">Shop</a></p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;