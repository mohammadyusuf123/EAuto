import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const Adduser = () => {
  const imgApiKey='1fc30820906ea3fde7b24505d27eea71'
    const { register, formState: { errors } , handleSubmit} = useForm();
    const onSubmit= async data=>{
        console.log(data)
        const image=data.photo[0]
        const formData=new FormData()
        formData.append('image',image);
        const url=`https://api.imgbb.com/1/upload?key=${imgApiKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(response=>response.json())
        .then(result=>{
            if(result.success){
                const img=result.data.url
                const user={
                    email:data.email,
                    name:data.name,
                    occupation:data.occupation,
                    img:img
                }
                          // Sent To DB
              fetch('http://localhost:2000/userInfo',{
                method:'POST',
               headers:{
                   'content-type':'application/json',
                   authorization:`Bearer ${localStorage.getItem('accessToken')}`
               },
               body:JSON.stringify(user)
            })
            .then(response=>response.json())
            .then(inserted=>{
                if(inserted.insertedId){
                    toast.success('Update Successfully')
                }
            })
            }
            
        })
    
    }
    return (
        <div>
            <h2 class="text-center text-2xl"></h2>
               <div className='flex  h-screen justify-center items-center'>
          <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl">User Information</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" placeholder="Your Full Name" 
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
  <input type="email" placeholder="Your Email" 
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
  <label class="label">
    <span class="label-text">Your Occupation</span>
  </label>
  <select {...register("occupation")}  class="select select-accent w-full max-w-xs">
  <option>Student</option>
  <option>Married</option>
  <option>Job Holder</option>
</select>
</div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Photo</span>
  </label>
  <input type="file"  
  class="input input-bordered w-full max-w-xs" 
  {...register("photo",{
    required: {
        value:true,
        message:" Img is Required"
  }
  })}
  />
  <label class="label">
  {errors.photo?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.photo.message}</span>}
   
  </label>
</div>
    
      <div className="pt-5"><input className=' btn w-full text-white  max-w-xs' type="submit"  value="Submit"/></div>
     
    </form>
    
   <div>
  
   </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Adduser;