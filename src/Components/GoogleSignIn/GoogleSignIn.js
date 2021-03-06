import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from'../.../../../assets/img/google.webp'
import useMail from '../../Hooks/useMail';
const GoogleSignIn = () => {
   
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const[mail]=useMail(user)
    if (error) {
        return (
          <div>
            <p className='text-red-500'>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>
      }
      if (mail) {
          navigate(from, { replace: true });
      }
    return (
        <div>
            <div>
             <button onClick={()=>signInWithGoogle()} type="submit" class="btn btn-outline btn-success w-100 m-3"><img width='70px' height='35px' src={google}/>Continue with Google</button>
        </div>
        </div>
    );
};

export default GoogleSignIn;