import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const imgApiKey='1fc30820906ea3fde7b24505d27eea71'
    const { register, formState: { errors },handleSubmit } = useForm();

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
                    descriptions:data.descriptions,
                    img:img
                }
                // Sent To DB
              fetch('https://immense-plateau-89741.herokuapp.com/parts',{
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
                    toast.success('Comment Successfully')
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
<h2 class="text-center text-2xl">Add  review</h2>
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
</div>
<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text ">Descriptions</span>
</label>
<input type="text" 
class="input input-bordered input-lg w-full max-w-xs" 
{...register("descriptions",{
required: {
    value:true,
    message:" Descriptions is Required"
}
})}
/>
<label class="label">
{errors.descriptions?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.descriptions.message}</span>}

</label>
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

  <div className="pt-5"><input className=' btn w-full text-white  max-w-xs' type="submit"  value="Add Review"/></div>
 
</form>

<div>

</div>
</div>
</div>
    </div>
    </div>
    );
};

export default AddReview;