import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const CheckOut = () => {
    const{partsId}=useParams()
    const navigate=useNavigate()
    const [parts,setParts]=useState({})
    const [user] = useAuthState(auth);
    const handleOrder=()=>{
        navigate('/orders')
    }
    useEffect(()=>{
        const url=`http://localhost:2000/parts/${partsId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setParts(data))
        
    },[])
    return (
        <div>
           <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={parts.img} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <div>
          <div class="card w-96 max-h-85 bg-base-100 shadow-xl">
 
  <div class="card-body items-center text-center">
    <h2 class="card-title text-primary">{parts.name}</h2>
    <p><strong>Seller</strong>:{parts.seller}</p>
    <p><strong>Price</strong>:${parts.price}</p>
    <p><strong>Available Quantity</strong>:{parts.availablequantity}</p>
    <p><strong>Descriptions</strong>:{parts.description}</p>
    <p><strong>Ratting</strong>:<div class="rating py-5">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" checked />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
</div></p>
    <div class="card-actions">
      <button  onClick={handleOrder}  class="btn btn-primary  btn-xl text-white">Order Now</button>
    </div>
  </div>
</div>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CheckOut;