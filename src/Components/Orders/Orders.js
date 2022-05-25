import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
const Orders = () => {
  const [user] = useAuthState(auth);
    const { register, formState: { errors } , handleSubmit } = useForm();
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
     const onSubmit=(data)=>{
        const email=data.email;
        const name=data.name;
        const num=data.number;
        const parts=data.parts;
        const quantity=data.quantity;
        const user=[email,name,num,quantity,parts]
        console.log(user)
    }
    return (
        <div>
                    <div className='flex  h-screen justify-center items-center'>
          <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl">Contact information</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" value={user?.displayName} placeholder="Your Full Name" 
  class="input input-bordered w-full max-w-xs" 
  {...register("name",{
    required: {
        value:true,
        message:" Name is Required"
  }
  })}
  />
  <label class="label">
  {errors.name?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span>}
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" value={user?.email} placeholder="Your Email" 
  class="input input-bordered w-full max-w-xs" 
  {...register("email",{
    required: {
        value:true,
        message:"Email is Required"
  },
    pattern: {
        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message:"Provide a Valid Email"}
  })}
  />
  <label class="label">
  {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Number</span>
  </label>
  <input type="number" placeholder="Your Number" 
  class="input input-bordered w-full max-w-xs" 
  {...register("number",{
    required: {
        value:true,
        message:"Number is Required"
  },
    minLength: {
        value:5,
    message:"Number must be 5 character or longer"}
  })}
  />
  <label class="label">
  {errors.number?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.number.message}</span>}
  {errors.number?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.number.message}</span>}
   
  </label>
</div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Parts Name</span>
  </label>
  <input type="text" 
  class="input input-bordered w-full max-w-xs" 
  {...register("parts",{
    required: {
        value:true,
        message:" Name is Required"
  }
  })}
  />
  <label class="label">
  {errors.parts?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.parts.message}</span>}
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Quantity</span>
  </label>
  <input type="number" 
  class="input input-bordered w-full max-w-xs" 
  {...register("quantity",{
    required: {
        value:true,
        message:"Quantity is Required"
  },
    minLength: {
        value:1,
    message:"quantity must be above 1 "}
  })}
  />
  <label class="label">
  {errors.quantity?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
  {errors.quantity?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
   
  </label>
</div>

      
      
      <div className="pt-5"><input className=' btn w-full text-white  max-w-xs' type="submit"  value="Place Order"/></div>
      
       
    </form>
  </div>
</div>
        </div>
        </div>
    );
};

export default Orders;