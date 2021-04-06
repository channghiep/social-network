import React, { Component } from "react";
import Slider from "react-slick";

import bannerabtus1 from '../assets/banner-aboutus.png';
import bannerabtus2 from '../assets/banner-aboutus2.png';
import bannerabtus3 from '../assets/banner-aboutus3.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
              <div className="banner-abt-filler"></div>
              <img className="banner-aboutus" src={bannerabtus1} alt="banner-about-us1"></img>
              <h1>Your <span>trusted</span> news source<br></br>and platform for open journalism.</h1>
            </div>
            <div>
              <div className="banner-abt-filler"></div>
              <img className="banner-aboutus" src={bannerabtus2} alt="banner-about-us2"></img>
              <h1>We offer <span>trusted</span><br></br> and <span>values-based</span> news.</h1>
            </div>
            <div>
              <div className="banner-abt-filler"></div>
              <img className="banner-aboutus" src={bannerabtus3} alt="banner-about-us3"></img>
              <h1>Honest and insightful news reporting, always.</h1>
            </div>
        </Slider>
    );
  }
}