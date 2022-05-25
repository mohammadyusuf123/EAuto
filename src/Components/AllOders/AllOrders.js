import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AllOrders = () => {
    const [user]=useAuthState(auth)
    const[orders,setOrders]=useState([])
    const nevigate=useNavigate()
    useEffect(()=>{
        const getAllOrders=async()=>{
            const email=user?.email
            const url=`http://localhost:2000/order?email=${email}`;
           try{
            const{data}= await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrders(data)
           }
           catch(error){
             console.log(error.message)
             if(error.response.status===401||error.response.status===403){
               signOut(auth)
              nevigate('/login')
             }
           }
                   }
                   getAllOrders();
    },[])
    return (
        <div>
            <h1>All order is:{orders.length}</h1>
        </div>
    );
};

export default AllOrders;