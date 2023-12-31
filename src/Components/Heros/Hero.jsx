import React from "react";
import "./Hero.css";
// import hand_icon from "../Assets/hand_icon.png";
import bag_icon from '../Assets/bag.png';
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import hero_image_girl from '../Assets/heroimage_girl.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={bag_icon} alt="" />
          </div>
          <p>Collections</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image_girl} alt="" />
      </div>
    </div>
  );
}

export default Hero;
