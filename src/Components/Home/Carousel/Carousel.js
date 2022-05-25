import React from 'react';
import img1 from'../../../assets/img/brand/eautobanners_Desktop_Bike_Model_f651b811-b1c3-490f-bcfb-cdcf3f8f88c4_800x.webp'
import img2 from'../../../assets/img/brand/img2.webp'
import img3 from'../../../assets/img/brand/img3.webp'
const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={img1} class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={img2} class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={img3} class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Carousel;