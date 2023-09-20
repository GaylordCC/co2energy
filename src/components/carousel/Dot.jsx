import React from 'react';
import "./__style__/index.css";
import BodyCarousel from "./Carousel";

const BodyDot = () => {

  return (
    <div>
      <BodyCarousel />
      <div style= {{textAlign:"center"}}>
        <span class="dot"></span> 
        <span class="dot"></span> 
        <span class="dot"></span> 
        <span class="dot"></span> 
      </div>
    </div>

  )
};

export default BodyDot;