import React, { useRef, useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
    const { register, formState: { errors } , handleSubmit } = useForm();
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      const navigate=useNavigate()
      const location=useLocation()
      let from = location.state?.from?.pathname || "/";
     const [
         signInWithEmailAndPassword,
         user,
         loading,
         error,
       ] = useSignInWithEmailAndPassword(auth);
       const onSubmit=async(data)=>{

        const gEmail=data.email
        const password=data.password;
         await signInWithEmailAndPassword( gEmail,password)
         

         const email={
           email:data.email
         }
         
           const{token}=await axios.post('http://localhost:2000/login',email)
           .then(response=>{
            localStorage.setItem("accessToken",response.data)
            navigate(from, { replace: true })
           })
          
          
           
  
      }
     
      const handleResetPassword = (data) => {
        const email = data.email
          if (email) {
         sendPasswordResetEmail(email);
              toast('Please!! Check Your Email');
          }
          else{
              toast('Please!! provide your email address');
          }
      }
      const handleRegister=()=>{
          navigate(from, { replace: true })
      }
      
      if(loading){
          return<Loading></Loading>
      }
     if(user){
      
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
    <h2 class="text-center text-2xl">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

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
<label class="label">
            <a href="#" onClick={handleResetPassword} class="label-text-alt text-info link link-hover">Forgot password?</a>
          </label>
      
      <div className="pt-5"><input className=' btn w-full text-white  max-w-xs' type="submit"  value="login"/></div>
      <div id="passwordHelpBlock" class="form-text ">
            New to eAuto? <Link to='/register' onClick={handleRegister} type="submit" class="text-info w-100 mt-3">Create New Account</Link>
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

export default Login;