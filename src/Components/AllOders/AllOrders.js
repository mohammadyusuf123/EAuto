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
    console.log(orders)
    useEffect(()=>{
        const getAllOrders=async()=>{
            const email=user?.email
            const url=`http://localhost:2000/order/${email}`;
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
            <h1 className='text-xl'>Total order is:{orders.length}</h1>
            <div class="overflow-x-auto">
<table class="table w-full">
{/* <!-- head --> */}
<thead>
  <tr>
    <th></th>
    <th>Email</th>
    <th>Name</th>
    <th>Status</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
    {
        orders?.map(order=><tr>
            <th></th>
            <td>{order.email}</td>
            <td>{order.parts}</td>
            <td><button  o class="btn btn-xs btn-success">Make Payment</button></td>
            <td><button class="btn btn-xs btn-error">Delete</button></td>
          </tr> )
       
    }
   
 
  
</tbody>
</table>
</div>
        </div>
    );
};

export default AllOrders;