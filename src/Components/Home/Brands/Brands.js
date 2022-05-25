import React from 'react';
import yamaha from'../../../assets/img/brand/yamaha.webp'
import suzuki from'../../../assets/img/brand/suzuki.webp'
import tvs from'../../../assets/img/brand/tvs.webp'
import bajaj from'../../../assets/img/brand/bajaj.jpeg'
import honda from'../../../assets/img/brand/honda.jpeg'
import hero from'../../../assets/img/brand/hero.webp'


const Brands = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-10  pt-10'>
            <div class="card w-50 bg-base-100 shadow-xl  ">
  <figure><img src={yamaha} alt="Shoes" /></figure>
  <div class="card-body ">
    <h2 class="card-title pl-10 ">
    Yamaha
    </h2>
  </div>
</div>
            <div class="card w-50 bg-base-100 shadow-xl ">
  <figure><img src={suzuki} alt="Shoes" /></figure>
  <div class="card-body ">
    <h2 class="card-title pl-10 ">
    Suzuki
    </h2>
  </div>
</div>
            <div class="card w-50 bg-base-100 shadow-xl ">
  <figure><img src={tvs} alt="Shoes" /></figure>
  <div class="card-body ">
    <h2 class="card-title pl-10 ">
    TVS
    </h2>
  </div>
</div>
            <div class="card w-50 bg-base-100 shadow-xl ">
  <figure><img src={bajaj} alt="Shoes" /></figure>
  <div class="card-body ">
    <h2 class="card-title pl-10 ">
    Bajaj
    </h2>
  </div>
</div>
            <div class="card w-50 bg-base-100 shadow-xl ">
  <figure><img src={hero} alt="Shoes" /></figure>
  <div class="card-body ">
    <h2 class="card-title pl-10 ">
    Hero
    </h2>
  </div>
</div>
            <div class="card w-50 bg-base-100 shadow-xl ">
  <figure><img src={honda} alt="Shoes" /></figure>
  <div class="card-body ">
    <h2 class="card-title pl-10 ">
    Honda
    </h2>
  </div>
</div>
        </div>
    );
};

export default Brands;