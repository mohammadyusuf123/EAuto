import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import Loading from '../Loading/Loading';

const Register = () => {
    const { register, formState: { errors } , handleSubmit} = useForm();
    const[error1,setError]=useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const navigate=useNavigate()
    const handleLogIn=()=>{
        navigate('/login')
    }
    const onSubmit=(data)=>{
        console.log(data)
        const name=data.name;
        const email=data.email;
        const password=data.password;
        const confirmPassword=data.confirmPassword;
        if(password!==confirmPassword){
            setError('You Password did not match');
            return;
           
        }
        if(password.length<6){
            setError("Password must be 6 Character")
            return;
        }
        createUserWithEmailAndPassword(email,password)

    }
    if(user){
        navigate('/')
    }
    if(loading){
       return<Loading></Loading>
    }
    if (error) {
        return (
          <div>
            <p className='text-red-500'>Error: {error.message}</p>
          </div>
        );
      }
    return (
        <div>
        <div className='flex  h-screen justify-center items-center'>
          <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl">Register</h2>
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
    <span class="label-text">Password</span>
  </label>
  <input type="password" placeholder="Your Password" 
  class="input input-bordered w-full max-w-xs" 
  {...register("password",{
    required: {
        value:true,
        message:"Password is Required"
  },
    minLength: {
        value:6,
    message:"Password must be 6 character or longer"}
  })}
  />
  <label class="label">
  {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Confirm Password</span>
  </label>
  <input type="password" placeholder="Confirm Your Password " 
  class="input input-bordered w-full max-w-xs" 
  {...register("confirmPassword",{
    required: {
        value:true,
        message:"Password is Required"
  },
    minLength: {
        value:6,
    message:"Password must be 6 character or longer"}
  })}
  />
  <label class="label">
  {errors.confirmPassword?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
  {errors.confirmPassword?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
   
  </label>
</div>
      
      
      <div className="pt-5"><input className=' btn w-full text-white  max-w-xs' type="submit"  value="Register"/></div>
      <div id="passwordHelpBlock" class="form-text ">
            Already have an account? <Link to='/login' onClick={handleLogIn} type="submit" class="text-info w-100 mt-3">Login</Link>
          </div>
       
    </form>
    <div class="divider">OR</div>
   <div>
  <GoogleSignIn></GoogleSignIn>
   </div>
  </div>
</div>
        </div>
    </div>
    );
};

export default Register;