import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

  
    const{partsId}=useParams()
    console.log(partsId)
    const navigate=useNavigate()
    const [parts,setParts]=useState({})
    const[disable, setDisable] = useState(false)
    const [user] = useAuthState(auth);
    useEffect(()=>{
        const url=`http://localhost:2000/parts/${partsId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setParts(data))
        
    },[])

    const { register, formState: { errors } , handleSubmit,reset, getValues, watch , setError} = useForm();
    const location=useLocation()
    watch("quantity")
    const quantityItem = getValues("quantity");
 console.log({parts})
    useEffect(() => {
if(quantityItem > parts?.availablequantity || quantityItem < parts?.minquantity){
  setDisable(true)
}
else{
  setDisable(false)
}
    }, [quantityItem, disable, parts?.availablequantity])
    let from = location.state?.from?.pathname || "/";
     const onSubmit=(data)=>{
       
         const order={
          email:data.email,
          name:data.name,
          num:data.number,
          parts:data.parts,
          quantity:data.quantity,
          productId:parts._id
         }
         axios.post('http://localhost:2000/order',order)
         .then(response=>{
           console.log(response)
             const{data}=response
             if(data.insertedId){
                 toast('Your Order is Booked!!!!')
                 reset()
        
             }
         })
       
    }
    return (
        <div className='flex'>
           <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
   
    <div>
    <div>
    
          <div class="card w-96 max-h-85 bg-base-100 shadow-xl">
          <figure> <img src={parts.img} class="max-w-sm rounded-lg shadow-2xl" /></figure>
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
  </div>
</div>
        </div>
    </div>
  </div>
</div>
<div className="">
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
    <span class="label-text">Phone Number</span>
  </label>
  <input type="number" placeholder="Your phone Number" 
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
  <input 
  defaultValue={parts?.name}
  type="text" 
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
  <input 
  placeholder={`quantity can't less than ${parts?.minquantity}`}
  type="number" 
  class="input input-bordered w-full max-w-xs" 
  {...register("quantity",{
    required: {
        value:true,
        message:"Quantity is Required"
  },
  maxLength:{
value:parts?.availablequantity,
message:"You can't buy more than available quantity"
  },
   
  })}
  />
  <label class="label">
  {errors.quantity?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
  {errors.quantity?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
  {errors.quantity?.type === 'maxLength' &&  <span class="label-text-alt text-red-500">{errors.quantity.message}</span>}
  </label>
</div>

      
      
      <div className="pt-5">
        <input 
        disabled={disable ? `true` : false}
      className='btn w-full text-white  max-w-xs'
         type="submit" 
         value="Place Order"
        /></div>
      
       
    </form>
  </div>
</div>
        </div>
</div>
        </div>
    );
};

export default CheckOut;