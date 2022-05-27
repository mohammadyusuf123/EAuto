import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const Singleparts = ({singleParts}) => {
    const{name,seller,price,img,description,ratings,stock,_id,availablequantity}=singleParts
    const navigate=useNavigate()
    const handleOrder=(id)=>{
        navigate(`/parts/${id}`)
    }
    return (
        <div>
          <div class="card w-96 max-h-85 bg-base-100 shadow-xl">
  <figure class="px-10 ">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-primary">{name}</h2>
    <p><strong>Seller</strong>:{seller}</p>
    <p><strong>Price</strong>:${price}</p>
    <p><strong>Available Quantity</strong>:{availablequantity}</p>
    <p><strong>Descriptions</strong>:{description}</p>
    <p><strong>Ratting</strong>:<div class="rating py-5">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" checked />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
</div></p>
<div class="card-actions">
      <button  onClick={()=>handleOrder(_id)} class="btn btn-primary  btn-xl text-white">Buy Now<FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon></button>
    </div>
  </div>
  
</div>

        </div>
    );
};

export default Singleparts;