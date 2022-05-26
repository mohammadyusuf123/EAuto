import { signOut } from 'firebase/auth';
import React from 'react';
import {  Link } from 'react-router-dom';
import logo from'../../assets/img/logo.webp'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSingOut=()=>{
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    return (
        <div>
    <div class="navbar bg-primary text-white bg-gradient-to-r from-primary  to-accent">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/parts'>Parts</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact us</Link></li>
      {
        user&&<>
         <li><Link to='/order'>My Orders</Link></li>
         <li><Link to='/profile'>Profile</Link></li>
         <li><Link to='/dashboard'>Dashboard</Link></li>
        
        </>
      }
       {
    user?<div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img src={user?.photoURL}/>
      </div>
    </label>
    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
      <li>
      </li>
      <li><button onClick={handleSingOut} class="btn">Logout</button></li>
    </ul>
  </div>: <li><Link to='/login'>Log In</Link></li>
  }
     
      </ul>
    </div>
    <img src={logo} alt="" width='200px' height='100px' srcset="" />
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/parts'>Parts</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact us</Link></li>
      {
        user&&<>
         <li><Link to='/order'>My Orders</Link></li>
         <li><Link to='/profile'>Profile</Link></li>
         <li><Link to='/dashboard'>Dashboard</Link></li>
        
        </>
      }

{
    user?<button onClick={handleSingOut} class="btn btn-ghost">Logout</button>: <li><Link to='/login'>Log In</Link></li>
  }

      
    </ul>
  </div>
  <div>
    
  </div>
  
  <div className='navbar-end'> <label tabindex="2" for="my-drawer-2" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
  
  </div>

  

</div>
        </div>
    );
};

export default Navbar;