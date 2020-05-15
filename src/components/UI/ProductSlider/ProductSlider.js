import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from '../../Elements/Button/Button';
import { H2, H6, Para } from '../../Elements/Heading/Heading';
//import "./Carousel.css";
import image from '../../../images/index';

const photos = [
  {
    title: "Original Parts Quality",
    productId: 'sku00001',
    tag: 'New',
    url: `${image.image1}`,
    price: '$150',
    cart: 'icon'
  },
  {
    title: "Original Parts Quality",
    productId: 'sku00002',
    tag: 'New',
    url: `${image.image2}`,
    price: '$150',
    cart: 'icon'
  },
  {
    title: "Original Parts Quality",
    productId: 'sku00003',
    tag: 'New',
    url: `${image.image3}`,
    price: '$150',
    cart: 'icon'
  },
  {
    title: "Original Parts Quality",
    productId: 'sku00004',
    tag: 'New',
    url: `${image.image4}`,
    price: '$150',
    cart: 'icon'
  },
  {
    title: "Original Parts Quality",
    productId: 'sku00005',
    tag: 'New',
    url: `${image.image1}`,
    price: '$150',
    cart: 'icon'
  },
  {
    title: "Original Parts Quality",
    productId: 'sku00001',
    tag: 'New',
    url: `${image.image1}`,
    price: '$150',
    cart: 'icon'
  }
]

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
                  <H2>{photo.name}</H2>
                  <H6>{photo.desc}</H6>
                  <Para><Button small>Shop now</Button></Para>
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