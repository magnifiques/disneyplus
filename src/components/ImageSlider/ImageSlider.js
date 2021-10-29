import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"
import { Wrap, Slide } from "./ImageSliderStyled"

const ImageSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
           <Wrap>
                <Slide>
                   <img src="/images/slider-badag.jpg" alt="first"/>
                </Slide>
           </Wrap>

           <Wrap>
                <Slide> 
                   <img src="/images/slider-badging.jpg" alt="first"/>
                </Slide>
           </Wrap>

           <Wrap>
                <Slide>
                   <img src="/images/slider-scale.jpg" alt="first"/>
                </Slide>
           </Wrap>

           <Wrap>
                <Slide>
                   <img src="/images/slider-scales.jpg" alt="first"/>
                </Slide>
           </Wrap>

        </Carousel>
    )
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;


export default ImageSlider
