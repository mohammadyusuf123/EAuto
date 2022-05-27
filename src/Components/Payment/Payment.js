import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {Elements,} from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
const stripePromise = loadStripe('pk_test_51L3pJoGo8vHEE4RJxALwhkQpWAUicusPc25jq2Py5LdPNEUOGMl4JhlwWTo0BCL4NEsbdTrECxkiVS9k65OfWWaK00IjnhEix0')
const Payment = () => {
  
    const [parts,setParts]=useState({})
    const{paymentId}=useParams()
    useEffect(()=>{
        const url=`http://localhost:2000/payment/${paymentId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setParts(data))
        
    },[])

    
    return (
      
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {parts.name}</p>
                <h2 class="card-title">Please Pay for: {parts.name}</h2>
                <p>Please pay: ${parts.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm parts={parts} />
                </Elements>
            </div>
        </div>
    </div>


    
    );
};

export default Payment;